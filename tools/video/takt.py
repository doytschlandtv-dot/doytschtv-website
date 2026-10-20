#!/usr/bin/env python3
"""Taktspur ohne Sprecher: erzeugt aus dem Sprechtext von video.json eine synthetische Sprechprobe (eSpeak-NG)
im Tempo einer menschlichen Stimme (ca. 2,3 Wörter/s inkl. Pausen) und schreibt sie als voice.mp3.
Sie dient nur als Taktgeber für Untertitel und Szenenwechsel; mit `make_video.py <ordner> --stumm` bleibt das Video ohne Ton.
Sobald eine echte Stimme da ist, ersetzt deren voice.mp3 diese Datei, die Zeiten passen sich beim Rendern an.
Aufruf: python3 tools/video/takt.py tools/video/<thema> [--wps 2.3]"""
import sys, os, json, re, subprocess
import numpy as np
HERE = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, HERE)
import dtw_align, make_video, librosa, soundfile as sf

def main():
    folder = os.path.abspath(sys.argv[1]); wps = 2.3
    if '--wps' in sys.argv: wps = float(sys.argv[sys.argv.index('--wps') + 1])
    cfg = json.load(open(os.path.join(folder, 'video.json'), encoding='utf-8'))
    toks = [t for sc in cfg['scenes'] for t in make_video.tokenize(sc['text'])]
    y, segs = dtw_align._synth_words([t[0] for t in toks])
    sr = 16000
    pause = lambda p: 0.55 if re.search(r'[.?!]', p) else (0.22 if re.search(r'[,:;]', p) else 0.0)
    pauses = sum(pause(t[2]) for t in toks)
    speech = sum((b - a) for a, b in segs) / sr
    target = max(1.0, len(toks) / wps - pauses)
    f = speech / target  # >1 = schneller, <1 = langsamer
    out = []
    for (a, b), t in zip(segs, toks):
        w = y[a:b]
        if len(w) > 2048: w = librosa.effects.time_stretch(w, rate=f)
        out += [w, np.zeros(int(sr * (pause(t[2]) or 0.05)), dtype=np.float32)]
    z = np.concatenate(out); z = z / (np.abs(z).max() + 1e-6) * 0.6
    wav = os.path.join(folder, 'voice.wav'); sf.write(wav, z, sr)
    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', wav, '-b:a', '96k', os.path.join(folder, 'voice.mp3')], check=True)
    os.remove(wav)
    print('Taktspur: %.1f s, %d Wörter' % (len(z) / sr, len(toks)))

if __name__ == '__main__': main()
