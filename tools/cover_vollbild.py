# Karussell-Titelfolie als Vollbild-Foto (1080x1440): python3 tools/cover_vollbild.py <foto> <kicker> <schwarz> <rot> <credit> <pill> <ausgabe.jpg> [fokusX fokusY]
# <schwarz> = erster Teil der Schlagzeile (weiss), <rot> = hervorgehobener Teil (rot-hell). Foto liegt im Repo-Wurzelordner.
import sys,os,threading,http.server,functools
from playwright.sync_api import sync_playwright
root=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
foto,kicker,schwarz,rot,credit,pill,out=sys.argv[1:8]
fx=sys.argv[8] if len(sys.argv)>8 else '50%';fy=sys.argv[9] if len(sys.argv)>9 else '50%'
html=f'''<!doctype html><meta charset=utf-8><link rel=stylesheet href=fonts.css><style>
body{{margin:0;width:1080px;height:1440px;position:relative;overflow:hidden;background:#0a0a0a url({foto}) {fx} {fy}/cover}}
.g{{position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,10,10,.72) 0,rgba(10,10,10,.15) 24%,rgba(10,10,10,.1) 38%,rgba(10,10,10,.82) 66%,rgba(10,10,10,.96) 100%)}}
.mk{{position:absolute;left:60px;top:46px;width:76px;height:76px;border-radius:50%;background:#b3151b;color:#fff;font:700 47px/76px "Bodoni Moda",serif;text-align:center}}
.logo{{position:absolute;top:44px;left:158px;font:700 48px/1.2 "Playfair Display",serif;color:#fff}}
.logo i{{font-style:normal;color:#ff5a52}}
.k{{position:absolute;left:60px;bottom:var(--kb,640px);font:700 30px Inter,sans-serif;letter-spacing:6px;color:#ff5a52;text-transform:uppercase}}
h1{{position:absolute;left:60px;right:60px;bottom:250px;margin:0;font:400 124px/1.02 "Instrument Serif",serif;color:#fff;text-shadow:0 2px 24px rgba(0,0,0,.35)}}
h1 span{{color:#ff5a52}}
.p{{position:absolute;left:60px;bottom:120px;background:#b3151b;color:#fff;font:700 36px Inter,sans-serif;padding:18px 30px;border-radius:14px;max-width:900px}}
.c{{position:absolute;left:60px;bottom:50px;right:60px;font:400 22px Inter,sans-serif;color:rgba(255,255,255,.75)}}
</style><script>function fit(){{var h=document.querySelector('h1'),f=124;while(h.offsetHeight>520&&f>64){{f-=2;h.style.fontSize=f+'px'}}document.querySelector('.k').style.setProperty('--kb',(250+h.offsetHeight+28)+'px')}}document.fonts.ready.then(fit)</script><div class=g></div><div class=mk>D</div><div class=logo>Doytschland<i>Tv</i></div><div class=k>{kicker}</div><h1>{schwarz} <span>{rot}</span></h1><div class=p>{pill}</div><div class=c>{credit}</div>'''
open(root+'/_cv.html','w').write(html)
H=functools.partial(http.server.SimpleHTTPRequestHandler,directory=root);H.log_message=lambda *a,**k:None
srv=http.server.ThreadingHTTPServer(('127.0.0.1',0),H);threading.Thread(target=srv.serve_forever,daemon=True).start()
with sync_playwright() as p:
    b=p.chromium.launch(executable_path='/opt/pw-browsers/chromium');pg=b.new_page(viewport={'width':1080,'height':1440})
    pg.goto('http://127.0.0.1:%d/_cv.html'%srv.server_address[1]);pg.wait_for_timeout(1000);pg.evaluate('fit()');pg.wait_for_timeout(400)
    pg.screenshot(path=root+'/'+out,type='jpeg',quality=92)
os.remove(root+'/_cv.html')
