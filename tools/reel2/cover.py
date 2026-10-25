import pathlib
from playwright.sync_api import sync_playwright
W=pathlib.Path(__file__).resolve().parents[2]
def page(kick,head,img,pos):
    return f'''<!doctype html><meta charset=utf-8><style>
@font-face{{font-family:Inter;src:url(file://{W}/fonts/inter-latin-wght-normal.woff2);font-weight:100 900}}
@font-face{{font-family:"Bodoni Moda";src:url(file://{W}/fonts/bodoni-moda-latin-opsz-normal.woff2);font-weight:400 900}}
*{{box-sizing:border-box;margin:0;padding:0}}
body{{width:1080px;height:1920px;background:#f8f7f2;font-family:Inter;color:#0a0a0a;position:relative;overflow:hidden}}
.k{{position:absolute;left:80px;top:330px;font:700 36px/1 Inter;letter-spacing:.16em;text-transform:uppercase;color:#b2231c}}
.h{{position:absolute;left:80px;right:80px;top:400px;font:700 118px/1.02 "Bodoni Moda",serif;letter-spacing:-.01em}}
.h span{{color:#b2231c}}
.p{{position:absolute;left:80px;right:80px;top:960px;height:520px;border-radius:40px;overflow:hidden;box-shadow:0 30px 70px rgba(0,0,0,.2)}}
.p img{{width:100%;height:100%;object-fit:cover;object-position:{pos}}}
.l{{position:absolute;left:80px;top:1530px;display:flex;align-items:center;gap:24px;font:700 30px/1 Inter;letter-spacing:.16em;text-transform:uppercase;color:#5e5b53}}
.l img{{height:64px}}
</style><div class=k>{kick}</div><div class=h>{head}</div><div class=p><img src="file://{W}/{img}"></div><div class=l><img src="file://{W}/logo.png"><span>Auf den Punkt</span></div>'''
items={"cover-israel-wahl":("Erklärt · Israel-Wahl","Israel wählt am Dienstag. <span>So läuft das.</span>","titel-hebron.jpg","50% 50%"),
"cover-stromsteuer":("Erklärt · Stromsteuer","Stromsteuer runter: <span>Was bringt dir das?</span>","titel-stromsteuer.jpg","50% 50%")}
out=pathlib.Path("cover");out.mkdir(exist_ok=True)
with sync_playwright() as p:
    b=p.chromium.launch(args=["--allow-file-access-from-files"]);pg=b.new_page(viewport={"width":1080,"height":1920})
    for n,a in items.items():
        (out/(n+".html")).write_text(page(*a));pg.goto("file://"+str((out/(n+".html")).resolve()));pg.wait_for_load_state("networkidle");pg.evaluate("document.fonts.ready");pg.screenshot(path=str(out/(n+".png")))
