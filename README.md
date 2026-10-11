# DoytschlandTv Website

Statische Seite (doytschtv.de). Gehostet auf Cloudflare Pages, keine Build-Schritte.
Taegliche Inhalte: briefings.js (window.BRIEFINGS).

Datenformate (alle in briefings.js, je Tag): morgen, abend, karussells (60 Sekunden), storys (10 Sekunden:
{kicker,titel,rot,text,quelle,bild:{url,urheber,lizenz,quelle,seite}|null}).
Kolumnen (300 Sekunden): kolumnen.js (window.KOLUMNEN), werden auf meinungen.html angezeigt.
Vorrendern: python3 tools/prerender.py schreibt den Seitentext fest ins HTML (für KI-Abrufer, Suchmaschinen) und füllt "Heute im Blick" auf der Startseite. Nach jeder Änderung an briefings.js, kolumnen.js, erklaert-data.js oder dossiers-data.js ausführen (die Startseite aktualisiert sich im Browser auch selbst).
Bildexport (lokal, nicht öffentlich): python3 tools/render.py <datum> (Ziel $DTV_EXPORT). Storys werden im Browser exportiert (Fotos laden dort).
