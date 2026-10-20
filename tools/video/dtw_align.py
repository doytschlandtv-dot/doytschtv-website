"""Wortgenaue Zeiten ohne Internet: eine synthetische Sprechprobe (eSpeak-NG, Wort für Wort, Dauern bekannt)
wird per Dynamic Time Warping auf MFCC-Merkmalen an die echte Sprecherstimme angelegt.
Benötigt: pip install espeakng-loader librosa  (beides aus PyPI)."""
import ctypes
import numpy as np


def _synth_words(words, rate=16000):
    import espeakng_loader as L
    lib = ctypes.CDLL(L.get_library_path())
    lib.espeak_Initialize.restype = ctypes.c_int
    sr = lib.espeak_Initialize(2, 0, L.get_data_path().encode(), 0)  # SYNCHRONOUS
    lib.espeak_SetVoiceByName(b'de')
    buf = []
    CB = ctypes.CFUNCTYPE(ctypes.c_int, ctypes.POINTER(ctypes.c_short), ctypes.c_int, ctypes.c_void_p)

    def cb(wav, n, ev):
        if wav and n > 0:
            buf.append(np.ctypeslib.as_array(wav, shape=(n,)).copy())
        return 0
    cbf = CB(cb)
    lib.espeak_SetSynthCallback(cbf)
    segs, pos, chunks = [], 0, []
    for w in words:
        buf.clear()
        data = (w + ' ').encode('utf-8')
        lib.espeak_Synth(data, len(data) + 1, 0, 0, 0, 1, None, None)  # espeakCHARS_UTF8=1
        lib.espeak_Synchronize()
        a = np.concatenate(buf) if buf else np.zeros(int(sr * 0.2), dtype=np.int16)
        chunks.append(a); segs.append((pos, pos + len(a))); pos += len(a)
    y = np.concatenate(chunks).astype(np.float32) / 32768
    import librosa
    y = librosa.resample(y, orig_sr=sr, target_sr=rate)
    k = rate / sr
    return y, [(int(a * k), int(b * k)) for a, b in segs]


def word_times(words, audio_path, hop=160, rate=16000):
    """words: gesprochene Wörter. Rückgabe: [(t0, t1)] in Sekunden der echten Aufnahme."""
    import librosa
    ys, segs = _synth_words(words, rate)
    yr, _ = librosa.load(audio_path, sr=rate)

    def feat(y):
        m = librosa.feature.mfcc(y=y, sr=rate, n_mfcc=20, hop_length=hop, n_fft=400)[1:]
        m = (m - m.mean(1, keepdims=True)) / (m.std(1, keepdims=True) + 1e-6)  # Sprecherunterschied dämpfen
        return m
    A, B = feat(ys), feat(yr)
    D, wp = librosa.sequence.dtw(X=A, Y=B, metric='euclidean', subseq=False)
    wp = wp[::-1]  # (Synth-Frame, Real-Frame) aufsteigend
    s2r = {}
    for i, j in wp:
        s2r.setdefault(int(i), []).append(int(j))
    out = []
    for a, b in segs:
        fa, fb = a // hop, min(max(a // hop, b // hop - 1), A.shape[1] - 1)
        ja = min(s2r.get(fa, [0]))
        jb = max(s2r.get(fb, [ja]))
        out.append((ja * hop / rate, jb * hop / rate))
    return out
