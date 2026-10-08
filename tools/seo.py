#!/usr/bin/env python3
"""Setzt SEO-Tags (Title, Description, Open Graph, Twitter, JSON-LD) idempotent in alle Seiten.
Aufruf: python3 tools/seo.py   (BASE unten auf die endgueltige Domain stellen, sobald verbunden)"""
import re, json, pathlib
BASE = "https://doytschtv-website.ce-boz27.workers.dev"   # spaeter: https://doytschtv.de
ROOT = pathlib.Path(__file__).resolve().parent.parent
NAME = "DoytschlandTv"
PAGES = {
 "index": ("DoytschlandTv – Deutschland. Auf den Punkt.", "Nachrichten, Einordnung und Haltung: Jeden Morgen ein Thema aus Politik, Wirtschaft und Gesellschaft. Klar erklärt, mit Quellen, Meinung klar gekennzeichnet."),
 "nachrichten": ("Nachrichten – DoytschlandTv", "Die wichtigsten Themen des Tages als kompakte Karussells: Politik, Wirtschaft, Gesellschaft. Fakten getrennt von Meinung, mit Quellen."),
 "briefing": ("Briefing – DoytschlandTv", "Morning Briefing und Tagesrückblick von DoytschlandTv: täglich zum Lesen. Was heute ansteht und was wirklich passiert ist."),
 "meinungen": ("Meinungen und Kolumnen – DoytschlandTv", "Hier sagen wir, was wir denken. Kolumnen klar als Meinung gekennzeichnet, mit Begründung, Fakten und Quellen. Die Sache zählt, nicht die Person."),
 "dossiers": ("Dossiers – DoytschlandTv", "Themenreihen mit Tiefgang, recherchiert aus öffentlichen Quellen. Jede Aussage ist belegt, Unsicherheiten werden benannt."),
 "erklaert": ("Erklärt – DoytschlandTv", "Hintergründe in zwei Minuten: Damit aus Schlagzeilen Verständnis wird. Verständlich erklärt, mit Quellen."),
 "ueber-uns": ("Über uns – DoytschlandTv", "DoytschlandTv ist eine digitale Medieninitiative: Politik, Wirtschaft und Gesellschaft verständlich, meinungsstark und mit Quellen, jeden Tag."),
 "grundsaetze": ("Unsere Grundsätze – DoytschlandTv", "Wofür DoytschlandTv steht: Grundgesetz, Menschenrechte, Meinungsfreiheit mit Grenzen, Trennung von Nachricht und Meinung, offener Umgang mit Fehlern."),
 "impressum": ("Impressum – DoytschlandTv", "Impressum und Anbieterkennzeichnung von DoytschlandTv."),
 "datenschutz": ("Datenschutz – DoytschlandTv", "Datenschutzerklärung von DoytschlandTv."),
}
def esc(s): return s.replace("&","&amp;").replace('"',"&quot;")
for slug,(title,desc) in PAGES.items():
    p = ROOT/f"{slug}.html"; h = p.read_text(encoding="utf-8")
    url = f"{BASE}/" if slug=="index" else f"{BASE}/{slug}.html"
    ld = [{"@context":"https://schema.org","@type":"WebPage","name":title,"description":desc,"url":url,"inLanguage":"de","isPartOf":{"@type":"WebSite","name":NAME,"url":BASE+"/"}}]
    if slug=="index":
        ld.append({"@context":"https://schema.org","@type":"NewsMediaOrganization","name":NAME,"url":BASE+"/","logo":{"@type":"ImageObject","url":BASE+"/favicon.png"},"sameAs":[]})
        ld.append({"@context":"https://schema.org","@type":"WebSite","name":NAME,"url":BASE+"/","inLanguage":"de"})
    block = ("<!--seo-->\n"
      f'<meta name="description" content="{esc(desc)}">\n'
      '<meta name="robots" content="index,follow,max-image-preview:large">\n'
      f'<meta property="og:type" content="website"><meta property="og:site_name" content="{NAME}"><meta property="og:locale" content="de_DE">\n'
      f'<meta property="og:title" content="{esc(title)}"><meta property="og:description" content="{esc(desc)}"><meta property="og:url" content="{url}">\n'
      f'<meta property="og:image" content="{BASE}/og-image.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="DoytschlandTv – Deutschland. Auf den Punkt.">\n'
      f'<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="{esc(title)}"><meta name="twitter:description" content="{esc(desc)}"><meta name="twitter:image" content="{BASE}/og-image.png">\n'
      '<meta name="theme-color" content="#0b0b10"><link rel="apple-touch-icon" href="favicon.png">\n'
      + "".join(f'<script type="application/ld+json">{json.dumps(x,ensure_ascii=False)}</script>\n' for x in ld) + "<!--/seo-->")
    h = re.sub(r"<!--seo-->.*?<!--/seo-->\n?","",h,flags=re.S)
    h = re.sub(r'<meta name="description"[^>]*>\n?',"",h)
    h = re.sub(r"<title>.*?</title>",lambda m:f"<title>{esc(title)}</title>",h,count=1,flags=re.S)
    h = h.replace("</title>","</title>\n"+block,1)
    p.write_text(h,encoding="utf-8"); print("ok",slug)
(ROOT/"robots.txt").write_text(f"User-agent: *\nAllow: /\n\nSitemap: {BASE}/sitemap.xml\n")
urls = [BASE+"/"] + [f"{BASE}/{s}.html" for s in PAGES if s!="index"]
(ROOT/"sitemap.xml").write_text('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+"".join(f"<url><loc>{u}</loc></url>\n" for u in urls)+"</urlset>\n")
