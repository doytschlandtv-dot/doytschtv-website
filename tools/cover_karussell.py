# Karussell-Titelfolie (Folie 1) im Krakau-Layout: python3 tools/cover_karussell.py <foto> <kicker> <schwarz> <rot> <credit> <pill> <ausgabe.jpg> [fokusX fokusY]
import sys,os,threading,http.server,functools
from playwright.sync_api import sync_playwright
root=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
foto,kicker,schwarz,rot,credit,pill,out=sys.argv[1:8]
fx=sys.argv[8] if len(sys.argv)>8 else '50%';fy=sys.argv[9] if len(sys.argv)>9 else '50%'
html=f'''<!doctype html><meta charset=utf-8><link rel=stylesheet href=fonts.css><style>
body{{margin:0;width:1080px;height:1440px;background:#f9f7f1;position:relative;overflow:hidden}}
.logo{{position:absolute;top:44px;left:0;right:0;text-align:center;font:400 96px "Bodoni Moda",serif;color:#101010;letter-spacing:-2px}}
.logo i{{font-style:normal;color:#b3151b}}
.k{{position:absolute;left:70px;top:236px;font:800 30px Inter,sans-serif;letter-spacing:6px;color:#b3151b;text-transform:uppercase}}
h1{{position:absolute;left:70px;top:290px;width:940px;margin:0;font:700 84px/1.02 "Bodoni Moda",serif;color:#101010;font-kerning:normal;font-feature-settings:'kern' 1;letter-spacing:.5px}}
h1 span{{color:#b3151b;display:block}}
.ph{{position:absolute;left:70px;top:700px;width:940px;height:500px;border-radius:24px;box-shadow:0 18px 40px rgba(0,0,0,.18);background:url({foto}) {fx} {fy}/cover}}
.c{{position:absolute;left:70px;top:1214px;font:400 26px Inter,sans-serif;color:#6b675e;width:940px}}
.p{{position:absolute;left:70px;top:1290px;background:#101010;color:#fff;font:700 38px Inter,sans-serif;padding:20px 30px;border-radius:14px;max-width:880px}}
</style><script>function fit(){{var h=document.querySelector('h1'),f=84;while(h.offsetHeight>380&&f>56){{f-=2;h.style.fontSize=f+'px'}}}}document.fonts.ready.then(fit)</script><div class=logo>Doytschland<i>Tv</i></div><div class=k>{kicker}</div><h1>{schwarz} <span>{rot}</span></h1><div class=ph></div><div class=c>{credit}</div><div class=p>{pill}</div>'''
open(root+'/_c.html','w').write(html)
H=functools.partial(http.server.SimpleHTTPRequestHandler,directory=root);H.log_message=lambda *a,**k:None
srv=http.server.ThreadingHTTPServer(('127.0.0.1',0),H);threading.Thread(target=srv.serve_forever,daemon=True).start()
with sync_playwright() as p:
    b=p.chromium.launch(executable_path='/opt/pw-browsers/chromium');pg=b.new_page(viewport={'width':1080,'height':1440})
    pg.goto('http://127.0.0.1:%d/_c.html'%srv.server_address[1]);pg.wait_for_timeout(1000);pg.evaluate('fit()');pg.wait_for_timeout(400)
    pg.screenshot(path=root+'/'+out,type='jpeg',quality=92)
os.remove(root+'/_c.html')
