"""Rendert reel.html (30 fps) und baut ein MP4. Aufruf: python3 render.py <erklaert|dossiers> <ausgabe.mp4> [dauer_s]"""
import sys, pathlib, subprocess, tempfile
from playwright.sync_api import sync_playwright
mode, out = sys.argv[1], pathlib.Path(sys.argv[2])
dur = float(sys.argv[3]) if len(sys.argv) > 3 else 24.5
fps = 30
html = pathlib.Path(__file__).with_name("reel.html").resolve().as_uri() + "?m=" + mode
tmp = pathlib.Path(tempfile.mkdtemp())
with sync_playwright() as p:
    b = p.chromium.launch(args=["--allow-file-access-from-files"])
    pg = b.new_page(viewport={"width": 1080, "height": 1920})
    pg.goto(html); pg.wait_for_load_state("networkidle"); pg.evaluate("document.fonts.ready")
    for i in range(int(dur * fps)):
        pg.evaluate(f"render({i / fps})")
        pg.screenshot(path=str(tmp / f"f{i:04d}.jpg"), type="jpeg", quality=93)
    b.close()
subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-framerate", str(fps), "-i", str(tmp / "f%04d.jpg"),
                "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "18", "-movflags", "+faststart", str(out)], check=True)
print("ok", out)
