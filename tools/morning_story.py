# Morning-Briefing-Story im Markenstil (rot/creme/schwarz, Marken-Serifenschrift fuer Zahlen).
# Aufruf: python3 tools/morning_story.py "Mo., 19. Oktober" "Thema 1|Thema 2|Thema 3|Thema 4" "Quelle" social/<ordner>/story-mit-titelbild.png
import sys
DATUM,THEMEN,QUELLE,AUS=sys.argv[1],sys.argv[2].split('|'),sys.argv[3],sys.argv[4]
import threading,http.server,functools,os
from playwright.sync_api import sync_playwright
root='/home/claude/doytschtv-website'
html=("""<!doctype html><meta charset=utf-8><link rel=stylesheet href=fonts.css><style>
*{box-sizing:border-box;margin:0}body{width:1080px;height:1920px;overflow:hidden;background:#f8f7f2;position:relative;font-family:Inter,sans-serif;color:#0a0a0a}
.top{position:absolute;left:0;right:0;top:0;height:840px;background:#b3241c}
.ring{position:absolute;left:80px;top:150px;width:104px;height:104px;border-radius:50%;border:8px solid #f8f7f2;padding:7px}
.ring div{width:100%;height:100%;border-radius:50%;background:#0a0a0a;color:#f8f7f2;font-family:'Bodoni Moda',serif;font-weight:600;font-size:54px;display:flex;align-items:center;justify-content:center;padding-bottom:3px}
.nm{position:absolute;left:206px;top:172px;font-family:'Instrument Serif',serif;font-size:60px;color:#f8f7f2;letter-spacing:-.02em}
.k{position:absolute;left:80px;top:420px;font-weight:800;letter-spacing:.2em;text-transform:uppercase;font-size:30px;color:#f8f7f2;opacity:.9}
.t{position:absolute;left:80px;top:480px;font-family:'Bodoni Moda',serif;font-weight:500;font-size:140px;line-height:1.02;letter-spacing:-.02em;color:#f8f7f2;width:900px}
.l{position:absolute;left:80px;right:80px;top:930px}
.r{display:flex;gap:36px;align-items:baseline;padding:34px 0;border-bottom:2px solid #d8d4c8}
.r b{font-family:'Playfair Display',serif;font-weight:700;font-size:66px;color:#b3241c;width:60px}
.r span{font-size:46px;font-weight:600;line-height:1.2}
.bar{position:absolute;left:0;right:0;bottom:0;height:230px;background:#0a0a0a;color:#f8f7f2;padding:62px 80px}
.bar div{font-size:40px;font-weight:700}.bar small{display:block;margin-top:12px;font-size:28px;font-weight:500;color:#d8d6cf}
</style><div class=top></div><div class=ring><div>D</div></div><div class=nm>DoytschlandTv</div>
<div class=k>Morning Briefing · """+DATUM+"""</div><div class=t>Dein Morgen auf Doytsch.</div>
<div class=l>"""+"".join('<div class=r><b>%d</b><span>%s</span></div>'%(i+1,t) for i,t in enumerate(THEMEN))+"""</div>
<div class=bar><div>Alle Themen im Karussell. Link in der Bio.</div><small>Quelle: """+QUELLE+"""</small></div>""")
open(root+'/_ms.html','w').write(html)
H=functools.partial(http.server.SimpleHTTPRequestHandler,directory=root);H.log_message=lambda *a,**k:None
srv=http.server.ThreadingHTTPServer(('127.0.0.1',0),H);threading.Thread(target=srv.serve_forever,daemon=True).start()
with sync_playwright() as p:
    b=p.chromium.launch(executable_path='/opt/pw-browsers/chromium');pg=b.new_page(viewport={'width':1080,'height':1920})
    pg.goto('http://127.0.0.1:%d/_ms.html'%srv.server_address[1]);pg.wait_for_timeout(1200);pg.evaluate("document.fonts.ready")
    pg.screenshot(path=root+'/'+AUS)
os.remove(root+'/_ms.html')
