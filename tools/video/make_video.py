#!/usr/bin/env python3
"""DoytschlandTv Video-Vorlage: Skript + Sprecherstimme -> animiertes 9:16-Video (1080x1920, 30 fps).

Aufruf (aus dem Repo-Root):
  python3 tools/video/make_video.py <ordner> [--preview] [--fps 30]
  z. B. python3 tools/video/make_video.py tools/video/hofheim

Der Ordner enthält:
  video.json   Szenen + Sprechtext (siehe README.md)
  voice.mp3    Sprecherstimme (aus ElevenLabs, vom Nutzer heruntergeladen; nicht im Repo)
Ergebnis: <ordner>/<name>.mp4 (nicht im Repo, siehe .gitignore)
"""
import sys, os, re, json, subprocess, threading, http.server, functools, shutil, tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, '..', '..'))


def probe_duration(path):
    out = subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', path],
                         capture_output=True, text=True).stdout.strip()
    return float(out)


def silences(path):
    err = subprocess.run(['ffmpeg', '-hide_banner', '-i', path, '-af', 'silencedetect=noise=-35dB:d=0.18', '-f', 'null', '-'],
                         capture_output=True, text=True).stderr
    st = [float(x) for x in re.findall(r'silence_start: ([\d.]+)', err)]
    en = [float(x) for x in re.findall(r'silence_end: ([\d.]+)', err)]
    return list(zip(st, en))


def tokenize(text):
    """'gesprochen=Anzeige' -> (gesprochen, Anzeige, Satzzeichen). Leere Anzeige = nur gesprochen, nicht untertitelt."""
    toks = []
    for raw in text.split():
        w, disp = (raw.split('=', 1) + [None])[:2] if '=' in raw else (raw, None)
        punct = ''
        m = re.match(r'^(.*?)([.,:;?!]+)$', w)
        if m:
            w, punct = m.group(1), m.group(2)
        if disp is not None:
            m = re.match(r'^(.*?)([.,:;?!]+)$', disp)
            if m:
                disp, punct = m.group(1), m.group(2)
        toks.append((w, disp if disp is not None else w, punct))
    return toks


def align(cfg, audio):
    """Verteilt die Wörter über die reine Sprechzeit; Satzgrenzen rasten auf die nächste Sprechpause ein.
    Gibt (Wörter, Szenengrenzen) zurück."""
    tot = probe_duration(audio)
    sil = [(a, b) for a, b in silences(audio)]
    toks = []  # (szene, w, d, p)
    for i, sc in enumerate(cfg['scenes']):
        for w, d, p in tokenize(sc['text']):
            toks.append((i, w, d, p))
    # Sprechintervalle
    iv, cur = [], 0.0
    for a, b in sil:
        if a > cur:
            iv.append((cur, a))
        cur = max(cur, b)
    if cur < tot:
        iv.append((cur, tot))
    speech = sum(y - x for x, y in iv)

    def at(sp):
        for x, y in iv:
            if sp <= y - x:
                return x + sp
            sp -= y - x
        return iv[-1][1]

    def to_sp(t):  # Echtzeit -> Sprechzeit
        acc = 0.0
        for x, y in iv:
            if t >= y:
                acc += y - x
            elif t > x:
                acc += t - x
        return acc

    wt = [max(2, len(w)) for _, w, _, _ in toks]
    cum = [0]
    for k in wt:
        cum.append(cum[-1] + k)
    total = cum[-1]
    # Satzenden: Index des letzten Tokens je Satz
    ends = [k for k, (_, _, _, p) in enumerate(toks) if re.search(r'[.?!]', p)]
    if not ends or ends[-1] != len(toks) - 1:
        ends.append(len(toks) - 1)
    # Pausen als Kandidaten (>= 0,25 s), Satzende rastet auf die nächste ein
    cands = [((a + b) / 2, b - a) for a, b in sil if b - a >= 0.25]
    used, bounds_t, last = set(), [], 0.0
    for e in ends[:-1]:
        pred = at(cum[e + 1] / total * speech)
        best = None
        for j, (c, l) in enumerate(cands):
            if j in used or c <= last + 0.3 or abs(c - pred) > 1.0:
                continue
            if best is None or abs(c - pred) - 1.5 * l < abs(cands[best][0] - pred) - 1.5 * cands[best][1]:
                best = j
        if best is not None:
            used.add(best); pred = cands[best][0]
        bounds_t.append(pred); last = pred
    bounds_t.append(tot)
    # Wörter pro Satz verteilen
    W, start_k, t_start = [], 0, 0.0
    for e, t_end in zip(ends, bounds_t):
        s0, s1 = to_sp(t_start), to_sp(t_end)
        idxs = range(start_k, e + 1)
        sub = sum(wt[k] for k in idxs)
        acc = 0
        for k in idxs:
            a = at(s0 + acc / sub * (s1 - s0)); acc += wt[k]; b = at(s0 + acc / sub * (s1 - s0))
            sc, w, d, p = toks[k]
            W.append(dict(w=w, d=d, p=p, t0=round(a, 3), t1=round(b, 3), sc=sc))
        start_k, t_start = e + 1, t_end
    # Szenengrenzen: Mitte der Pause vor dem ersten Wort der Szene
    B = [0.0]
    for i in range(1, len(cfg['scenes'])):
        first = next(x for x in W if x['sc'] == i)
        prev = [x for x in W if x['sc'] == i - 1][-1]
        B.append(round((prev['t1'] + first['t0']) / 2 if first['t0'] - prev['t1'] > .05 else first['t0'] - .05, 3))
    B.append(round(tot, 3))
    return W, B


def main():
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    if not args:
        sys.exit(__doc__)
    folder = os.path.abspath(args[0])
    preview = '--preview' in sys.argv
    fps = 30
    if '--fps' in sys.argv:
        fps = int(sys.argv[sys.argv.index('--fps') + 1])
    cfg = json.load(open(os.path.join(folder, 'video.json'), encoding='utf-8'))
    audio = os.path.join(folder, cfg.get('audio', 'voice.mp3'))
    if not os.path.exists(audio):
        sys.exit('Sprecherstimme fehlt: ' + audio)
    W, B = align(cfg, audio)
    json.dump(dict(W=W, B=B), open(os.path.join(folder, 'woerter.json'), 'w'), ensure_ascii=False)
    print('Szenengrenzen:', B)
    html = open(os.path.join(HERE, 'template.html'), encoding='utf-8').read()
    html = html.replace('var DATA=__DATA__;', 'var DATA=' + json.dumps(dict(W=W, B=B, cfg=cfg), ensure_ascii=False) + ';')
    page = os.path.join(ROOT, '_video_tmp.html')
    open(page, 'w', encoding='utf-8').write(html)
    frames = tempfile.mkdtemp(prefix='frames_')
    H = functools.partial(http.server.SimpleHTTPRequestHandler, directory=ROOT)
    H.log_message = lambda *a, **k: None
    srv = http.server.ThreadingHTTPServer(('127.0.0.1', 0), H)
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    from playwright.sync_api import sync_playwright
    tot = B[-1]
    if preview:
        ts = []
        for i in range(len(cfg['scenes'])):
            ts += [B[i] + (B[i + 1] - B[i]) * f for f in (.25, .75)]
    else:
        ts = [i / fps for i in range(int(tot * fps))]
    try:
        with sync_playwright() as p:
            exe = '/opt/pw-browsers/chromium'
            b = p.chromium.launch(executable_path=exe if os.path.exists(exe) else None)
            pg = b.new_page(viewport={'width': 1080, 'height': 1920})
            pg.on('pageerror', lambda e: print('FEHLER', e))
            pg.goto('http://127.0.0.1:%d/_video_tmp.html' % srv.server_address[1])
            pg.evaluate('document.fonts.ready'); pg.wait_for_timeout(700)
            for k, t in enumerate(ts):
                pg.evaluate('t=>draw(t)', t)
                pg.screenshot(path=os.path.join(frames, 'f%05d.jpg' % k), type='jpeg', quality=92)
            b.close()
    finally:
        os.remove(page)
    name = cfg.get('name', os.path.basename(folder))
    if preview:
        out = os.path.join(folder, name + '-vorschau.jpg')
        from PIL import Image
        fs = sorted(os.listdir(frames))
        ims = [Image.open(os.path.join(frames, f)).resize((270, 480)) for f in fs]
        cols = 6
        sheet = Image.new('RGB', (270 * cols, 480 * ((len(ims) + cols - 1) // cols)))
        for i, im in enumerate(ims):
            sheet.paste(im, ((i % cols) * 270, (i // cols) * 480))
        sheet.save(out)
    else:
        out = os.path.join(folder, name + '.mp4')
        cmd = ['ffmpeg', '-y', '-loglevel', 'error', '-framerate', str(fps), '-i', os.path.join(frames, 'f%05d.jpg'), '-i', audio]
        music = cfg.get('musik')
        if music:  # optional: {"datei": "musik.mp3", "lautstaerke": 0.12}; Musik läuft in Schleife, wird unter der Stimme abgesenkt, blendet am Ende aus
            vol = float(music.get('lautstaerke', 0.12))
            cmd += ['-stream_loop', '-1', '-i', os.path.join(folder, music['datei'])]
            fade = max(0.0, tot - 1.5)
            cmd += ['-filter_complex',
                    '[2:a]volume=%.3f,afade=t=in:d=1,afade=t=out:st=%.2f:d=1.5[m];[m][1:a]sidechaincompress=threshold=0.03:ratio=6:attack=20:release=400[d];[1:a][d]amix=inputs=2:duration=first:normalize=0[a]' % (vol, fade),
                    '-map', '0:v', '-map', '[a]']
        cmd += ['-c:v', 'libx264', '-crf', '20', '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', '160k', '-t', '%.3f' % tot,
                '-movflags', '+faststart', out]
        subprocess.run(cmd, check=True)
    shutil.rmtree(frames)
    print('fertig:', out)


if __name__ == '__main__':
    main()
