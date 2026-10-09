#!/usr/bin/env python3
"""Erzeugt statische, indexierbare Seiten fuer jede Kolumne (/meinung/<datum>.html) und jedes Dossier
(/dossier/<id>.html) aus kolumnen.js und dossiers-data.js und schreibt die Sitemap neu (inkl. lastmod).
Aufruf nach jeder Aenderung an kolumnen.js oder dossiers-data.js:  python3 tools/seo_seiten.py"""
import json, pathlib, re, html, shutil
ROOT = pathlib.Path(__file__).resolve().parent.parent
BASE = "https://doytschtv.de"
def load(f, var):
    t = (ROOT/f).read_text(encoding="utf-8")
    return json.loads(t.split(var+" = ",1)[1].rsplit(";",1)[0])
e = lambda s: html.escape(str(s), quote=True)
src = (ROOT/"meinungen.html").read_text(encoding="utf-8")
HEAD_NAV = re.search(r"<header class=\"nav\">.*?</header>", src, re.S).group(0)
FOOT = re.search(r"<footer>.*?</footer>", src, re.S).group(0)
def abs_nav(s):  # relative Links -> absolut, damit Unterordner funktionieren
    return re.sub(r'(href|src)="(?!https?:|#|/)([^"]+)"', lambda m: f'{m.group(1)}="/{m.group(2)}"', s)
HEAD_NAV, FOOT = abs_nav(HEAD_NAV), abs_nav(FOOT)
def page(url, title, desc, img, typ, body, datum, sections_ld=None, app=None):
    ld = {"@context":"https://schema.org","@type":"NewsArticle" if typ=="dossier" else "OpinionNewsArticle" if False else "Article",
          "headline":title,"description":desc,"datePublished":datum,"dateModified":datum,"inLanguage":"de","mainEntityOfPage":url,
          "image":[img],"author":{"@type":"Organization","name":"DoytschlandTv"},
          "publisher":{"@type":"Organization","name":"DoytschlandTv","logo":{"@type":"ImageObject","url":BASE+"/favicon.png"}}}
    if typ=="meinung": ld["articleSection"]="Meinung"
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
{HEAD_NAV}<main><div class="wrap"><article class="kol">{body}</article></div></main>{FOOT}</body></html>
'''
def paras(ts): return "".join(f"<p>{e(t)}</p>" for t in ts)
def quellen(qs):
    li = "".join(f'<li><a href="{e(q["url"])}" rel="noopener" target="_blank">{e(q["titel"])}</a></li>' if q.get("url") else f"<li>{e(q['titel'])}</li>" for q in qs or [])
    return f"<h2>Quellen</h2><ul>{li}</ul>" if li else ""
out = []
# Kolumnen
d1 = ROOT/"meinung"; shutil.rmtree(d1, ignore_errors=True); d1.mkdir()
for k in load("kolumnen.js","window.KOLUMNEN"):
    url = f"{BASE}/meinung/{k['datum']}.html"
    img = f"{BASE}/{k['bild']['src']}" if isinstance(k.get("bild"),dict) and k["bild"].get("src") else f"{BASE}/og-image.png"
    body = f'<p class="b-eyebrow">Meinung · Kolumne · {e(k.get("thema",""))}</p><h1 class="mk-h1">{e(k["titel"])}</h1><p class="mk-lead">{e(k["teaser"])}</p><p class="mk-meta">{e(k["datum"])}</p>'
    body += "".join(f'<h2>{e(a["titel"])}</h2>{paras(a["text"])}' for a in k.get("abschnitte",[])) or paras(k.get("text",[]))
    if k.get("schluss"): body += f"<p><strong>{e(k['schluss'])}</strong></p>"
    body += quellen(k.get("quellen")) + f'<p><a href="/meinungen.html#{e(k["datum"])}">Interaktive Ansicht der Kolumne ›</a></p><p class="mk-meta">Dies ist eine Meinung. Tatsachen sind mit Quellen belegt und von Wertungen getrennt.</p>'
    (d1/f"{k['datum']}.html").write_text(page(url,k["titel"],k["teaser"],img,"meinung",body,k["datum"]),encoding="utf-8")
    out.append((url,k["datum"]))
# Dossiers
d2 = ROOT/"dossier"; shutil.rmtree(d2, ignore_errors=True); d2.mkdir()
for s in load("dossiers-data.js","window.DOSSIERS"):
    for a in s.get("folgen",[]):
        url = f"{BASE}/dossier/{a['id']}.html"
        bi = a.get("bild"); img = f"{BASE}/{bi['src']}" if isinstance(bi,dict) and bi.get("src") else f"{BASE}/og-image.png"
        body = f'<p class="b-eyebrow">{e(s["titel"])} · Dossier</p><h1 class="mk-h1">{e(a["titel"])}</h1><p class="mk-lead">{e(a.get("teaser",""))}</p><p class="mk-meta">{e(a["datum"])}</p>'
        q = a.get("aussage")
        if q: body += f'<blockquote><p>„{e(q["zitat"])}“</p><p>{e(" · ".join(x for x in [q.get("wer"),q.get("datum"),q.get("ort")] if x))}</p>' + (f'<p>Unser Befund: {e(q["urteil"])}</p>' if q.get("urteil") else "") + "</blockquote>"
        body += "".join(f"<p><strong>{e(z['z'])}:</strong> {e(z['l'])}</p>" for z in a.get("kern",[]))
        body += "".join(f'<h2>{e(x["h"])}</h2>{paras(x["t"])}' for x in a.get("abschnitte",[]))
        body += quellen(a.get("quellen")) + (f'<p class="mk-meta">Stand: {e(a["stand"])}. Tatsachen laut den genannten Quellen, Wertungen sind als unsere Einordnung gekennzeichnet.</p>' if a.get("stand") else "") + f'<p><a href="/dossiers.html#{e(a["id"])}">Interaktive Ansicht mit Karussell ›</a></p>'
        (d2/f"{a['id']}.html").write_text(page(url,a["titel"],a.get("teaser") or a["titel"],img,"dossier",body,a["datum"]),encoding="utf-8")
        out.append((url,a["datum"]))
# Sitemap
stat = [BASE+"/"]+[f"{BASE}/{n}.html" for n in ["nachrichten","briefing","meinungen","dossiers","erklaert","ueber-uns","grundsaetze","impressum","datenschutz"]]
x = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
x += "".join(f"<url><loc>{u}</loc></url>\n" for u in stat) + "".join(f"<url><loc>{u}</loc><lastmod>{d}</lastmod></url>\n" for u,d in out) + "</urlset>\n"
(ROOT/"sitemap.xml").write_text(x,encoding="utf-8")
print("ok", len(out), "Seiten")
