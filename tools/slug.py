import re
def slug(text, maxlen=70):
    t = text.lower()
    for a, b in (("ä", "ae"), ("ö", "oe"), ("ü", "ue"), ("ß", "ss")): t = t.replace(a, b)
    t = re.sub(r"[^a-z0-9]+", "-", t).strip("-")
    if len(t) > maxlen: t = t[:maxlen].rsplit("-", 1)[0]
    return t
def beitrag_pfad(datum, thema): return f"/beitrag/{datum}-{slug(thema)}.html"
