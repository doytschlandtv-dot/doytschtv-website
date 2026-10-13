#!/usr/bin/env python3
"""Erzeugt statische, indexierbare Einzelseiten und schreibt die Sitemap (mit lastmod) neu:
  /beitrag/<datum>-<thema>.html   je Karussell aus briefings.js
  /meinung/<datum>.html           je Kolumne aus kolumnen.js
  /dossier/<id>.html              je Dossier-Folge aus dossiers-data.js
Aufruf nach jeder Aenderung an briefings.js, kolumnen.js oder dossiers-data.js (zusammen mit tools/prerender.py):
    python3 tools/prerender.py && python3 tools/seo_seiten.py"""
import json, pathlib, re, html, shutil, sys
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
from slug import beitrag_pfad
ROOT = pathlib.Path(__file__).resolve().parent.parent
BASE = "https://doytschtv.de"
def load(f, var):
    t = (ROOT/f).read_text(encoding="utf-8")
    return json.loads(t.split(var+" = ",1)[1].rsplit(";",1)[0])
e = lambda s: html.escape(str(s), quote=True)
src = (ROOT/"meinungen.html").read_text(encoding="utf-8")
NAV = re.search(r"<header class=\"nav\">.*?</header>", src, re.S).group(0)
FOOT = re.search(r"<footer>.*?</footer>", src, re.S).group(0)
def abs_(s): return re.sub(r'(href|src)="(?!https?:|#|/)([^"]+)"', lambda m: f'{m.group(1)}="/{m.group(2)}"', s)
NAV, FOOT = abs_(NAV), abs_(FOOT)
NAV = NAV.replace(" class=on", "")
def nav(active): return NAV.replace(f'<a href="/{active}.html">', f'<a href="/{active}.html" class=on>', 1)
def img_url(name):
    if name and (ROOT/name).exists(): return f"{BASE}/{name}"
    return f"{BASE}/og-image.png"
def short(t, n=155):
    t = re.sub(r"\s+", " ", t).strip()
    if len(t) <= n: return t
    return t[:n].rsplit(" ", 1)[0].rstrip(",;:.") + "…"
MON = ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]
def datum_de(iso): y, m, d = iso.split("-"); return f"{int(d)}. {MON[int(m)-1]} {y}"
def page(url, title, desc, img, ld_type, body, datum, active, section=None, keywords=None):
    ld = {"@context":"https://schema.org","@type":ld_type,"headline":title,"description":desc,"datePublished":datum,"dateModified":datum,
          "inLanguage":"de","mainEntityOfPage":url,"image":[img],"author":{"@type":"Organization","name":"DoytschlandTv","url":BASE+"/"},
          "publisher":{"@type":"Organization","name":"DoytschlandTv","logo":{"@type":"ImageObject","url":BASE+"/favicon.png"}}}
    if section: ld["articleSection"] = section
    if keywords: ld["keywords"] = keywords
    return f'''<!doctype html>
<html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>{e(title)} – DoytschlandTv</title>
<meta name="description" content="{e(desc)}">
<link rel="canonical" href="{url}">
<meta name="robots" content="index,follow,max-image-preview:large">
<meta property="og:type" content="article"><meta property="og:site_name" content="DoytschlandTv"><meta property="og:locale" content="de_DE">
<meta property="og:title" content="{e(title)}"><meta property="og:description" content="{e(desc)}"><meta property="og:url" content="{url}"><meta property="og:image" content="{img}">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="{e(title)}"><meta name="twitter:description" content="{e(desc)}"><meta name="twitter:image" content="{img}">
<meta name="theme-color" content="#0b0b10"><link rel="apple-touch-icon" href="/favicon.png">
<script type="application/ld+json">{json.dumps(ld,ensure_ascii=False)}</script>
<link rel="stylesheet" href="/fonts.css"><link rel="stylesheet" href="/styles.css"><link rel="stylesheet" href="/briefing.css">
<style>:root{{color-scheme:light}}body{{margin:0}}</style><link rel="icon" type="image/png" href="/favicon.png"></head><body>
{nav(active)}<main><div class="wrap"><article class="kol">{body}</article></div></main>{FOOT}</body></html>
'''
def paras(ts): return "".join(f"<p>{e(t)}</p>" for t in ts)
def quellen(qs):
    li = "".join(f'<li><a href="{e(q["url"])}" rel="noopener" target="_blank">{e(q["titel"])}</a></li>' if q.get("url") else f"<li>{e(q['titel'])}</li>" for q in qs or [])
    return f"<h2>Quellen</h2><ul>{li}</ul>" if li else ""
out = []

# ---- Karussells (Nachrichten) ----
d0 = ROOT/"beitrag"; shutil.rmtree(d0, ignore_errors=True); d0.mkdir()
def slide_html(s):
    t = s.get("typ"); o = ""
    if t == "hook": return ""
    if t == "fakten": o = f'<h2>{e(s.get("label",""))}</h2><p><strong>{e(s.get("titel",""))}</strong></p><p>{e(s.get("text",""))}</p>'
    elif t == "zahl": o = f'<h2>{e(s.get("label",""))}</h2><p><strong>{e(s.get("zahl",""))}</strong> {e(s.get("text",""))}</p>'
    elif t == "betrifft": o = f'<h2>{e(s.get("label",""))}: {e(s.get("titel",""))}</h2><ul>' + "".join(f'<li><strong>{e(p.get("kopf",""))}:</strong> {e(p.get("text",""))}</li>' for p in s.get("punkte") or []) + "</ul>"
    elif t == "einordnung": o = f'<h2>{e(s.get("label",""))}</h2><p><strong>{e(s.get("titel",""))}</strong></p><p>{e(s.get("text",""))}</p>'
    elif t == "vergleich": o = f'<h2>Behauptung und Fakt</h2><p><strong>{e(s.get("labelA",""))}:</strong> {e(s.get("behauptung",""))}</p><p><strong>{e(s.get("labelB",""))}:</strong> {e(s.get("fakt",""))}</p>'
    elif t == "meinung": o = f'<h2>Unsere Meinung</h2><p>{e(s.get("text",""))}</p>' + (f'<p><em>{e(s["handlung"])}</em></p>' if s.get("handlung") else "")
    elif t == "cta": o = f'<h2>Was meinst du?</h2><p><strong>{e(s.get("frage",""))}</strong></p>'
    return o
for d in sorted(load("briefings.js","window.BRIEFINGS"), key=lambda x: x["datum"]):
    for k in d.get("karussells") or []:
        pfad = beitrag_pfad(d["datum"], k["thema"]); url = BASE + pfad
        hook = next((s for s in k["slides"] if s.get("typ") == "hook"), {})
        bild = (hook.get("bild") or {}).get("url"); img = img_url(bild)
        fakt = next((s for s in k["slides"] if s.get("typ") == "fakten"), None)
        desc = short((fakt or {}).get("text") or k.get("caption") or k["thema"])
        body = f'<p class="b-eyebrow">Nachrichten · {e(hook.get("kicker",""))}</p><h1 class="mk-h1">{e(k["thema"])}</h1><p class="mk-meta">{e(datum_de(d["datum"]))}</p>'
        if bild and (ROOT/bild).exists():
            body += f'<figure style="margin:1rem 0"><img src="/{e(bild)}" alt="{e(k["thema"])}" style="width:100%;height:auto;border-radius:1rem" loading="lazy"><figcaption class="mk-meta">{e((hook.get("bild") or {}).get("unter") or "")}</figcaption></figure>'
        body += "".join(slide_html(s) for s in k["slides"])
        qs = []
        for s in k["slides"]:
            if s.get("quelle") and s["quelle"] not in qs: qs.append(s["quelle"])
        if qs: body += "<h2>Quellen</h2><ul>" + "".join(f"<li>{e(q)}</li>" for q in qs) + "</ul>"
        body += '<p><a href="/nachrichten.html">Alle Karussells ansehen ›</a></p><p class="mk-meta">Fakten sind mit Quellen belegt, Meinung ist als „Unsere Meinung“ gekennzeichnet.</p>'
        kw = [h.lstrip("#") for h in (k.get("hashtags") or "").split() if h.startswith("#")]
        (ROOT/pfad.lstrip("/")).write_text(page(url,k["thema"],desc,img,"NewsArticle",body,d["datum"],"nachrichten","Nachrichten",kw),encoding="utf-8")
        out.append((url, d["datum"]))

# ---- Kolumnen ----
d1 = ROOT/"meinung"; shutil.rmtree(d1, ignore_errors=True); d1.mkdir()
for k in load("kolumnen.js","window.KOLUMNEN"):
    url = f"{BASE}/meinung/{k['datum']}.html"
    img = img_url((k.get("bild") or {}).get("src"))
    body = f'<p class="b-eyebrow">Meinung · Kolumne · {e(k.get("thema",""))}</p><h1 class="mk-h1">{e(k["titel"])}</h1><p class="mk-lead">{e(k["teaser"])}</p><p class="mk-meta">{e(datum_de(k["datum"]))}</p>'
    body += "".join(f'<h2>{e(a["titel"])}</h2>{paras(a["text"])}' for a in k.get("abschnitte",[])) or paras(k.get("text",[]))
    if k.get("schluss"): body += f"<p><strong>{e(k['schluss'])}</strong></p>"
    body += quellen(k.get("quellen")) + f'<p><a href="/meinungen.html#{e(k["datum"])}">Interaktive Ansicht der Kolumne ›</a></p><p class="mk-meta">Dies ist eine Meinung. Tatsachen sind mit Quellen belegt und von Wertungen getrennt.</p>'
    (d1/f"{k['datum']}.html").write_text(page(url,k["titel"],short(k["teaser"]),img,"OpinionNewsArticle",body,k["datum"],"meinungen","Meinung"),encoding="utf-8")
    out.append((url, k["datum"]))

# ---- Dossiers ----
d2 = ROOT/"dossier"; shutil.rmtree(d2, ignore_errors=True); d2.mkdir()
for s in load("dossiers-data.js","window.DOSSIERS"):
    for a in s.get("folgen",[]):
        url = f"{BASE}/dossier/{a['id']}.html"; img = img_url((a.get("bild") or {}).get("src"))
        body = f'<p class="b-eyebrow">{e(s["titel"])} · Dossier</p><h1 class="mk-h1">{e(a["titel"])}</h1><p class="mk-lead">{e(a.get("teaser",""))}</p><p class="mk-meta">{e(datum_de(a["datum"]))}</p>'
        q = a.get("aussage")
        if q: body += f'<blockquote><p>„{e(q["zitat"])}“</p><p>{e(" · ".join(x for x in [q.get("wer"),q.get("datum"),q.get("ort")] if x))}</p>' + (f'<p>Unser Befund: {e(q["urteil"])}</p>' if q.get("urteil") else "") + "</blockquote>"
        body += "".join(f"<p><strong>{e(z['z'])}:</strong> {e(z['l'])}</p>" for z in a.get("kern",[]))
        body += "".join(f'<h2>{e(x["h"])}</h2>{paras(x["t"])}' for x in a.get("abschnitte",[]))
        body += quellen(a.get("quellen")) + (f'<p class="mk-meta">Stand: {e(a["stand"])}. Tatsachen laut den genannten Quellen, Wertungen sind als unsere Einordnung gekennzeichnet.</p>' if a.get("stand") else "") + f'<p><a href="/dossiers.html#{e(a["id"])}">Interaktive Ansicht mit Karussell ›</a></p>'
        (d2/f"{a['id']}.html").write_text(page(url,a["titel"],short(a.get("teaser") or a["titel"]),img,"NewsArticle",body,a["datum"],"dossiers","Dossier"),encoding="utf-8")
        out.append((url, a["datum"]))

# ---- Sitemap ----
stat = [BASE+"/"]+[f"{BASE}/{n}.html" for n in ["nachrichten","briefing","meinungen","dossiers","erklaert","ueber-uns","grundsaetze","impressum","datenschutz"]]
x = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
x += "".join(f"<url><loc>{u}</loc></url>\n" for u in stat) + "".join(f"<url><loc>{u}</loc><lastmod>{d}</lastmod></url>\n" for u, d in sorted(out, key=lambda t: t[1], reverse=True)) + "</urlset>\n"
(ROOT/"sitemap.xml").write_text(x, encoding="utf-8")
print("ok", len(out), "Seiten")
