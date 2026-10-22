# Rendert Karussell-Folien und Story: python3 tools/render_social.py <tagIdx> <karIdx> <storyIdx> <ordner> (Indizes in briefings.js)
import threading,http.server,functools,base64,os,sys
from playwright.sync_api import sync_playwright
root=os.path.dirname(os.path.dirname(os.path.abspath(__file__)));di=int(sys.argv[1]);ki=int(sys.argv[2]);si=int(sys.argv[3]);out=root+'/social/'+sys.argv[4]+'/'
os.makedirs(out,exist_ok=True)
H=functools.partial(http.server.SimpleHTTPRequestHandler,directory=root);H.log_message=lambda *a,**k:None
srv=http.server.ThreadingHTTPServer(('127.0.0.1',0),H);threading.Thread(target=srv.serve_forever,daemon=True).start()
u='http://127.0.0.1:%d/'%srv.server_address[1]
open(root+'/_t.html','w').write('<!doctype html><meta charset=utf-8><link rel=stylesheet href=fonts.css><body><canvas id=a></canvas><script src=briefings.js></script><script src=karussell.js></script>')
with sync_playwright() as p:
    b=p.chromium.launch(executable_path='/opt/pw-browsers/chromium');pg=b.new_page();pg.goto(u+'_t.html');pg.wait_for_timeout(500)
    n=pg.evaluate("([di,k])=>BRIEFINGS[di].karussells[k].slides.length",[di,ki])
    for i in range(n):
        r=pg.evaluate("async([d,k,i])=>{await DTVK.fontsReady();var K=BRIEFINGS[d].karussells[k],s=K.slides[i];var im=await DTVK.loadImg(s.bild&&s.bild.url);DTVK.draw(document.getElementById('a'),s,i,K.slides.length,im);return document.getElementById('a').toDataURL('image/png')}",[di,ki,i])
        open(out+'folie-%02d.png'%(i+1),'wb').write(base64.b64decode(r.split(',')[1]))
    r=pg.evaluate("async([d,i])=>{await DTVK.fontsReady();var l=BRIEFINGS[d].storys,s=l[i];var im=await DTVK.loadImg(s.bild&&s.bild.url);DTVK.drawStory(document.getElementById('a'),s,im,i,l.length);return document.getElementById('a').toDataURL('image/png')}",[di,si])
    open(out+'story.png','wb').write(base64.b64decode(r.split(',')[1]))
os.remove(root+'/_t.html')

from PIL import Image
import glob
for f in glob.glob(out+'folie-*.png'): Image.open(f).convert('RGB').save(f[:-4]+'.jpg',quality=92)
