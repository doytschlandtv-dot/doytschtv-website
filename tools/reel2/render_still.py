"""Einzelbilder zur Kontrolle: python3 render_still.py <modus> <t1,t2,...> <ordner>"""
import sys, pathlib
from playwright.sync_api import sync_playwright
mode=sys.argv[1]; ts=[float(x) for x in sys.argv[2].split(",")]; out=pathlib.Path(sys.argv[3]); out.mkdir(parents=True,exist_ok=True)
html=pathlib.Path(__file__).with_name("reel2.html").resolve().as_uri()+"?m="+mode
with sync_playwright() as p:
    b=p.chromium.launch(args=["--allow-file-access-from-files"]); pg=b.new_page(viewport={"width":1080,"height":1920})
    pg.on("pageerror",lambda e:print("ERR",e))
    pg.goto(html); pg.wait_for_load_state("networkidle"); pg.evaluate("document.fonts.ready")
    for t in ts:
        pg.evaluate(f"render({t})"); pg.screenshot(path=str(out/f"t{t:05.1f}.png"))
    b.close()
