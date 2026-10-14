"""Rendert reel.html Bild für Bild (30 fps) in ein Verzeichnis. Aufruf: python3 render.py <ausgabeordner> [dauer_s] [fps]"""
import sys, pathlib
from playwright.sync_api import sync_playwright
out = pathlib.Path(sys.argv[1]); out.mkdir(parents=True, exist_ok=True)
dur = float(sys.argv[2]) if len(sys.argv) > 2 else 30.0
fps = int(sys.argv[3]) if len(sys.argv) > 3 else 30
html = pathlib.Path(__file__).with_name("reel.html").resolve().as_uri()
with sync_playwright() as p:
    b = p.chromium.launch(args=["--allow-file-access-from-files"])
    pg = b.new_page(viewport={"width": 1080, "height": 1920})
    pg.goto(html); pg.wait_for_load_state("networkidle"); pg.evaluate("document.fonts.ready")
    n = int(dur * fps)
    for i in range(n):
        pg.evaluate(f"render({i / fps})")
        pg.screenshot(path=str(out / f"f{i:04d}.jpg"), type="jpeg", quality=93)
    b.close()
