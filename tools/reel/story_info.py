"""Info-Story für den privaten Account: 3 Bilder 1080x1920. Aufruf: python3 story_info.py <ausgabeordner>"""
import sys, pathlib, re
import segno
from playwright.sync_api import sync_playwright
out = pathlib.Path(sys.argv[1]); out.mkdir(parents=True, exist_ok=True)
root = pathlib.Path(__file__).resolve().parents[2]
q = segno.make("https://doytschtv.de/", error="m")
n = q.symbol_size(border=0)[0]
import io
buf = io.BytesIO(); q.save(buf, kind="svg", scale=1, border=0, dark="#0a0a0a", light=None, xmldecl=False, svgns=True)
qr = buf.getvalue().decode().replace("<svg ", '<svg viewBox="0 0 %d %d" shape-rendering="crispEdges" ' % (n, n), 1)
qr = re.sub(r'(width|height)="\d+"', "", qr)
css = """
@font-face{font-family:Inter;src:url(%s);font-weight:100 900}
@font-face{font-family:"Bodoni Moda";src:url(%s);font-weight:400 900}
*{box-sizing:border-box;margin:0;padding:0}body{background:#888}
.f{position:relative;width:1080px;height:1920px;background:#f8f7f2;color:#0a0a0a;font-family:Inter,sans-serif;overflow:hidden;margin-bottom:20px;padding:0 80px}
.ring{width:300px;height:300px;border-radius:50%%;padding:12px;background:conic-gradient(#b2231c,#e0457b,#b2231c);display:grid;place-items:center}
.ring span{width:100%%;height:100%%;border-radius:50%%;background:#0a0a0a;border:12px solid #f8f7f2;display:grid;place-items:center;color:#f8f7f2;font:700 130px/1 "Bodoni Moda",serif}
.kick{font:700 34px/1 Inter;letter-spacing:.16em;text-transform:uppercase;color:#b2231c}
h1{font:600 120px/1.02 "Bodoni Moda",Georgia,serif;letter-spacing:-.01em}
h2{font:600 96px/1.04 "Bodoni Moda",Georgia,serif;letter-spacing:-.01em}
.c1{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:56px;text-align:center}
.c1 img{width:760px}.c1 p{font:500 44px/1.35 Inter;color:#3b3a36;max-width:780px}
.c1 .cl{font:700 36px Inter;letter-spacing:.16em;text-transform:uppercase;color:#5e5b53}
.top{position:absolute;left:80px;right:80px;top:290px}
.card{display:flex;gap:44px;align-items:flex-start;border-radius:44px;padding:50px 52px;margin-top:36px}
.card .ic{flex:none;width:130px;height:130px;border-radius:34px;display:grid;place-items:center}
.card .ic svg{width:78px;height:78px;fill:none;stroke:currentColor;stroke-width:3.2;stroke-linecap:round;stroke-linejoin:round}
.card b{display:block;font:700 56px/1.1 "Bodoni Moda",serif;margin-bottom:14px}
.card span{font:500 38px/1.35 Inter}
.k1{background:#fff;border:4px solid #0a0a0a}.k1 .ic{background:#0a0a0a;color:#fff}
.k2{background:#e4e1d6}.k2 .ic{background:#fff;color:#0a0a0a}
.k3{background:#0a0a0a;color:#f8f7f2}.k3 .ic{background:#b2231c;color:#fff}
.c3{display:flex;flex-direction:column;justify-content:center;gap:50px;padding-top:0}
.c3 p:not(.kick){font:500 44px/1.38 Inter;color:#3b3a36}
.c3 .big{font:600 112px/1.02 "Bodoni Moda",serif;color:#0a0a0a}.c3 .big em{color:#b2231c;font-style:normal}
.row{display:flex;gap:56px;align-items:center;margin-top:20px}
.qr{width:300px;height:300px;background:#fff;border-radius:28px;padding:22px;flex:none}.qr svg{width:100%%;height:100%%}
.hd{font:700 52px Inter;color:#b2231c}.sm{font:500 34px/1.35 Inter;color:#5e5b53;margin-top:12px}
""" % ((root / "fonts/inter-latin-wght-normal.woff2").as_uri(), (root / "fonts/bodoni-moda-latin-opsz-normal.woff2").as_uri())
ic_fact = '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7"/></svg>'
ic_ord = '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M12 11v5M12 8v.5"/></svg>'
ic_mng = '<svg viewBox="0 0 24 24"><path d="M5 5h14v10H10l-5 4z"/></svg>'
html = f"""<!doctype html><meta charset=utf-8><style>{css}</style><body>
<div class="f c1" id="a"><div class="ring"><span>D</span></div><img src="{(root/'logo.png').as_uri()}"><p class="cl">Deutschland. Auf den Punkt.</p><p>Nachrichten, Einordnung und Haltung zu Politik, Wirtschaft und Gesellschaft.</p></div>
<div class="f" id="b"><div class="top"><p class="kick">So funktioniert es</p><h2 style="margin-top:26px">Drei Dinge, klar getrennt.</h2>
<div class="card k1"><div class="ic">{ic_fact}</div><div><b>Fakt</b><span>Zuerst das, was belegt ist. Mit Quelle auf jeder Folie.</span></div></div>
<div class="card k2"><div class="ic">{ic_ord}</div><div><b>Einordnung</b><span>Was bedeutet das? Und was bedeutet es nicht?</span></div></div>
<div class="card k3"><div class="ic">{ic_mng}</div><div><b>Meinung</b><span>Klar gekennzeichnet. Nie als Nachricht getarnt.</span></div></div></div></div>
<div class="f c3" id="c"><p class="kick">Warum wir das machen</p><div class="big">Glaub nicht uns.<br><em>Prüf nach.</em></div>
<p>Zu viel wird ungeprüft geteilt, und aus Halbwahrheiten werden schnell Feindbilder. Wir setzen Nachrichten dagegen, die du selbst prüfen kannst.</p>
<div class="row"><div class="qr">{qr}</div><div><div class="hd">@doytschlandtv</div><p class="sm">Instagram und TikTok.<br>QR-Code: doytschtv.de</p></div></div></div></body>"""
tmp = out / "_story.html"; tmp.write_text(html, encoding="utf-8")
with sync_playwright() as p:
    b = p.chromium.launch(args=["--allow-file-access-from-files"]); pg = b.new_page(viewport={"width": 1080, "height": 1920})
    pg.goto(tmp.as_uri()); pg.wait_for_load_state("networkidle"); pg.evaluate("document.fonts.ready")
    for i, k in enumerate("abc", 1):
        pg.locator("#" + k).screenshot(path=str(out / f"story-info-{i}.png"))
    b.close()
tmp.unlink()
