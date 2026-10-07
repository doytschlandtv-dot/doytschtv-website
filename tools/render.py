#!/usr/bin/env python3
"""Rendert die Karussells eines Tages als PNG-Slides + caption.txt + ZIP.
Aufruf: python3 tools/render.py 2026-10-08   (ohne Datum: neuester Tag mit Karussells)
Ausgabe (NICHT im Repo, nicht öffentlich): <out>/<datum>/<nr>-<slug>/slide-1.png ... caption.txt und <nr>-<slug>.zip
Ziel mit Umgebungsvariable DTV_EXPORT, Standard /tmp/doytschtv-export
Benötigt: playwright (python) mit Chromium."""
import sys, os, re, json, base64, zipfile, threading, http.server, functools, subprocess
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
from playwright.sync_api import sync_playwright

src = open(os.path.join(root, 'briefings.js'), encoding='utf-8').read()
days = json.loads(src[src.index('['):src.rindex(']') + 1])
want = sys.argv[1] if len(sys.argv) > 1 else None
cands = sorted([d for d in days if d.get('karussells')], key=lambda d: d['datum'])
day = next((d for d in cands if d['datum'] == want), None) if want else (cands[-1] if cands else None)
if not day: sys.exit('Kein Tag mit Karussells gefunden')

def slug(t):
    t = t.lower().replace('ä','ae').replace('ö','oe').replace('ü','ue').replace('ß','ss')
    return re.sub(r'[^a-z0-9]+', '-', t).strip('-')[:40]

H = functools.partial(http.server.SimpleHTTPRequestHandler, directory=root)
H.log_message = lambda *a, **k: None
srv = http.server.ThreadingHTTPServer(('127.0.0.1', 0), H)
threading.Thread(target=srv.serve_forever, daemon=True).start()
url = 'http://127.0.0.1:%d/briefing.html#%s' % (srv.server_address[1], day['datum'])

exe = '/opt/pw-browsers/chromium'
with sync_playwright() as p:
    b = p.chromium.launch(executable_path=exe) if os.path.exists(exe) else p.chromium.launch()
    pg = b.new_page(viewport={'width': 430, 'height': 900})
    pg.goto(url); pg.wait_for_timeout(1200)
    pg.click('text=Karussell'); pg.wait_for_timeout(3000)
    secs = pg.query_selector_all('section.k-sec')
    out = os.path.join(os.environ.get('DTV_EXPORT', '/tmp/doytschtv-export'), day['datum'])
    for ki, (k, sec) in enumerate(zip(day['karussells'], secs), 1):
        name = '%d-%s' % (ki, slug(k['thema']))
        d = os.path.join(out, name); os.makedirs(d, exist_ok=True)
        files = []
        for i, cv in enumerate(sec.query_selector_all('canvas.k-slide'), 1):
            data = cv.evaluate('c => c.toDataURL("image/png")')
            f = os.path.join(d, 'slide-%d.png' % i)
            open(f, 'wb').write(base64.b64decode(data.split(',')[1])); files.append(f)
        tags = k.get('hashtags') or ''
        if isinstance(tags, list): tags = ' '.join(tags)
        cap = (k.get('caption') or '') + ('\n\n' + tags if tags else '') + '\n'
        cf = os.path.join(d, 'caption.txt'); open(cf, 'w', encoding='utf-8').write(cap); files.append(cf)
        with zipfile.ZipFile(os.path.join(out, name + '.zip'), 'w', zipfile.ZIP_DEFLATED) as z:
            for f in files: z.write(f, os.path.basename(f))
        print('ok', name, len(files) - 1, 'Slides')
    b.close()
srv.shutdown()
