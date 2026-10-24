# Titelbild des Morning Briefing mit Datum des Tages: legt das Datum in die Kickerzeile von titel-morning-briefing.jpg.
# Aufruf: python3 tools/morning_titel.py "Samstag, 24. Oktober 2026" 2026-10-24   (schreibt titel-morning-briefing-2026-10-24.jpg)
import sys,threading,http.server,functools,os
from playwright.sync_api import sync_playwright
DATUM,TAG=sys.argv[1],sys.argv[2]
root=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
html=("""<!doctype html><meta charset=utf-8><link rel=stylesheet href=fonts.css><style>
*{margin:0}body{width:1280px;height:720px;overflow:hidden;position:relative;background:url(titel-morning-briefing.jpg)}
.c{position:absolute;left:70px;top:262px;width:760px;height:46px;background:#f8f7f2}
.k{position:absolute;left:80px;top:268px;font-family:Inter,sans-serif;font-weight:800;letter-spacing:.2em;text-transform:uppercase;font-size:24px;color:#b3241c;white-space:nowrap}
</style><div class=c></div><div class=k>Morning Briefing · """+DATUM+"</div>")
open(root+'/_mt.html','w').write(html)
H=functools.partial(http.server.SimpleHTTPRequestHandler,directory=root);H.log_message=lambda *a,**k:None
srv=http.server.ThreadingHTTPServer(('127.0.0.1',0),H);threading.Thread(target=srv.serve_forever,daemon=True).start()
with sync_playwright() as p:
    b=p.chromium.launch(executable_path='/opt/pw-browsers/chromium');pg=b.new_page(viewport={'width':1280,'height':720})
    pg.goto('http://127.0.0.1:%d/_mt.html'%srv.server_address[1]);pg.wait_for_timeout(1200);pg.evaluate("document.fonts.ready")
    pg.screenshot(path=root+'/_mt.png')
os.remove(root+'/_mt.html')
from PIL import Image
Image.open(root+'/_mt.png').convert('RGB').save(root+'/titel-morning-briefing-'+TAG+'.jpg',quality=92);os.remove(root+'/_mt.png')
