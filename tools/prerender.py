#!/usr/bin/env python3
"""Schreibt den Text der Seiten fest ins HTML (für Suchmaschinen, KI-Abrufer und Link-Vorschauen ohne JavaScript).
Der Block steht zwischen <!--static--> und <!--/static--> und wird mit JavaScript ausgeblendet.
Auf der Startseite füllt das Skript die Zeilen von "Heute im Blick". Aufruf nach jeder Änderung an den Datendateien:
    python3 tools/prerender.py"""
import urllib.parse, sys
sys.path.insert(0, str(__import__('pathlib').Path(__file__).resolve().parent))
from slug import beitrag_pfad
import re, json, html, pathlib
ROOT = pathlib.Path(__file__).resolve().parent.parent
def load(f, key):
    s = (ROOT/f).read_text(encoding="utf-8")
    return json.loads(s.split(key, 1)[1].rsplit(";", 1)[0])
B = sorted(load("briefings.js", "window.BRIEFINGS = "), key=lambda d: d["datum"], reverse=True)
K = sorted(load("kolumnen.js", "window.KOLUMNEN = "), key=lambda d: d["datum"], reverse=True)
E = load("erklaert-data.js", "window.ERKLAERT = ")
D = load("dossiers-data.js", "window.DOSSIERS = ")
T = load("ticker.js", "window.TICKER = ")
e = lambda x: html.escape(str(x), quote=True)
def ps(lst): return "".join(f"<p>{e(t)}</p>" for t in lst or [])
def links(q): return "<ul>" + "".join(f'<li><a href="{e(x["url"])}">{e(x["titel"])}</a></li>' if x.get("url") else f"<li>{e(x['titel'])}</li>" for x in q or []) + "</ul>"
MON = ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]
def datum(iso): y, m, d = iso.split("-"); return f"{int(d)}. {MON[int(m)-1]} {y}"

def slide_text(s):
    out = []
    for k in ("kicker", "label", "titel", "zahl", "text", "behauptung", "fakt", "frage", "handlung", "quelle"):
        if s.get(k): out.append(("Quelle: " if k == "quelle" else "") + str(s[k]))
    for p in s.get("punkte") or []: out.append(f"{p.get('kopf','')}: {p.get('text','')}")
    for z in s.get("zeilen") or []: out.append(z if isinstance(z, str) else " ".join(map(str, z.values())) if isinstance(z, dict) else str(z))
    return out
def nachrichten():
    o = []
    for d in B:
        for k in d.get("karussells") or []:
            o.append(f"<article><h2><a href=\"{beitrag_pfad(d['datum'], k['thema'])}\">{e(k['thema'])}</a></h2><p><em>{e(datum(d['datum']))}</em></p>")
            o.append("<ol>" + "".join("<li>" + e(" – ".join(slide_text(s))) + "</li>" for s in k["slides"]) + "</ol>")
            if k.get("caption"): o.append(f"<p>{e(k['caption'])}</p>")
            o.append("</article>")
    return "".join(o)
def briefing():
    o = ["<h1>Briefing</h1>"]
    for d in B[:7]:
        o.append(f"<article><h2>{e(datum(d['datum']))}</h2>")
        for key, name in (("morgen", "Morning Briefing"), ("abend", "Tagesrückblick")):
            ed = d.get(key)
            if not ed: continue
            o.append(f"<h3>{name}</h3>")
            if ed.get("themen"): o.append("<ul>" + "".join(f"<li>{e(t)}</li>" for t in ed["themen"]) + "</ul>")
            o.append(ps(ed.get("text")))
            if ed.get("quellen"): o.append(links(ed["quellen"]))
        o.append("</article>")
    return "".join(o)
def meinungen():
    o = ["<h1>Meinungen und Kolumnen</h1>"]
    for k in K:
        o.append(f"<article><h2><a href=\"/meinung/{e(k['datum'])}.html\">{e(k['titel'])}</a></h2><p><em>{e(k['thema'])} · {e(datum(k['datum']))}</em></p><p>{e(k.get('teaser',''))}</p>")
        o.append(ps(k.get("text")) + links(k.get("quellen")) + "</article>")
    return "".join(o)
def erklaert():
    o = ["<h1>Erklärt</h1>"]
    for a in E:
        o.append(f"<article id=\"s-{e(a['id'])}\"><h2>{e(a['titel'])}</h2><p>{e(a['teaser'])}</p>")
        o.append("<ul>" + "".join(f"<li>{e(z['z'])}: {e(z['l'])}</li>" for z in a.get("kern") or []) + "</ul>")
        for s in a["abschnitte"]: o.append(f"<h3>{e(s['h'])}</h3>" + ps(s["t"]))
        o.append("<h3>Quellen</h3>" + links(a["quellen"]) + f"<p>Stand: {e(a['stand'])}</p></article>")
    return "".join(o)
def dossiers():
    o = ["<h1>Dossiers</h1>"]
    for r in D:
        o.append(f"<article><h2>{e(r['titel'])}</h2><p>{e(r['teaser'])}</p>")
        for f in r.get("folgen") or []: o.append(f"<h3><a href=\"/dossier/{e(f['id'])}.html\">{e(f['titel'])}</a></h3><p>{e(f.get('teaser',''))}</p>")
        o.append("</article>")
    return "".join(o)
def heute():
    d = B[0]; it = []
    for k in reversed(d.get("karussells") or []):
        bi = (k["slides"][0].get("bild") or {}) if k.get("slides") else {}
        it.append(("Nachrichten", k["thema"], "nachrichten.html#" + urllib.parse.quote(k["thema"], safe="~()*!.'"), bi.get("url"), bi.get("fokus"), bi.get("unter")))
    if d.get("morgen"):
        t = d["morgen"].get("themen") or []
        it.append(("Morning Briefing" + (" · " + d["morgen"]["dauer"] if d["morgen"].get("dauer") else ""), (t[0] + (f" und {len(t)-1} weitere Themen" if len(t) > 1 else "")) if t else "Heute im Überblick", "briefing.html#" + d["datum"], "titel-briefing.jpg", None, "Illustration, KI-generiert, kein Foto"))
    if K: it.append(("Kolumne · " + K[0]["thema"], K[0]["titel"], "meinungen.html#" + K[0]["datum"], (K[0].get("bild") or {}).get("src"), None, (K[0].get("bild") or {}).get("unter")))
    if E: it.append(("Erklärt", E[-1]["titel"], "erklaert.html#" + E[-1]["id"], None, None, None))
    def card(k, t, h, img, y, u):
        im = f'<span class="hc-i"><img class="bg" src="{e(img)}" alt="" loading="lazy" aria-hidden="true"><img class="fg" src="{e(img)}" alt="" loading="lazy"></span>' if img else ""
        return f'<a class="hc{" has-img" if img else ""}" href="{e(h)}">{im}<span class="hc-t"><span class="k">{e(k)}</span><strong>{e(t)}</strong>' + (f"<small>{e(u)}</small>" if u else "") + "</span></a>"
    X = T.get("items", [])
    parts = []
    for i in range(max(len(it), len(X))):
        if i < len(it): parts.append(f'<a class="own" href="{e(it[i][2])}">{e(it[i][1])}</a>')
        if i < len(X): parts.append(f'<a class="ext" href="{e(X[i]["u"])}" target="_blank" rel="noopener">{e(X[i]["t"])}<span class="src"> {e(X[i]["q"])}</span></a>')
    tick = '<span class="tk-g">' + "".join(parts) + "</span>"
    return "".join(card(*x) for x in it), tick, d["datum"]

JS = '<script>document.documentElement.className+=" js"</script>'
def put(slug, fn):
    p = ROOT/f"{slug}.html"; h = p.read_text(encoding="utf-8")
    h = re.sub(r"<div class=\"static\" id=\"static\"><!--static-->.*?<!--/static--></div>", "", h, flags=re.S)
    h = h.replace(JS, "")
    h = h.replace("</title>", "</title>" + JS, 1)
    blk = f'<div class="static" id="static"><!--static-->{fn()}<!--/static--></div>'
    h = h.replace("</main>", blk + "</main>", 1)
    p.write_text(h, encoding="utf-8"); print("ok", slug)
for slug, fn in (("nachrichten", nachrichten), ("briefing", briefing), ("meinungen", meinungen), ("erklaert", erklaert), ("dossiers", dossiers)): put(slug, fn)
p = ROOT/"index.html"; h = p.read_text(encoding="utf-8"); rows, tick, iso = heute()
h = re.sub(r"<!--tk-->.*?<!--/tk-->", lambda m: f"<!--tk-->{tick}<!--/tk-->", h, flags=re.S)
h = re.sub(r"<!--heute-->.*?<!--/heute-->", lambda m: f"<!--heute-->{rows}<!--/heute-->", h, flags=re.S)
h = re.sub(r'(<p id="heute-datum">).*?(</p>)', lambda m: m.group(1) + e(datum(iso)) + m.group(2), h, flags=re.S)
p.write_text(h, encoding="utf-8"); print("ok index")
