# Video-Vorlage (TikTok/Reels, 1080×1920)

Aus einem Skript und einer Sprecherstimme wird ein animiertes Video im DoytschlandTv-Look
(dunkel, Creme, Rot, Playfair Display + Inter, Wort-für-Wort-Untertitel, Quellenzeile, Fortschrittslinie).

## Ablauf pro Video
1. Ordner anlegen: `tools/video/<thema>/` mit `video.json` (Vorlage: `hofheim/video.json`).
2. Sprechtext gesamt (alle Szenen aneinander) in ElevenLabs sprechen lassen (Modell eleven_v4, Stimme Konrad Fichte),
   MP3 herunterladen und als `tools/video/<thema>/voice.mp3` ablegen. Kosten: ca. 900 Credits pro Variante.
3. Vorschau: `python3 tools/video/make_video.py tools/video/<thema> --preview` → Kontaktbogen `<name>-vorschau.jpg`
4. Fertig rendern: `python3 tools/video/make_video.py tools/video/<thema>` → `<name>.mp4` (ca. 7 Min. für 1 Min. Video)

MP3, MP4 und Zwischendateien liegen nicht im Repo (.gitignore); Titelbilder liegen wie bei den Karussells im Repo-Root.

## Szenentypen in video.json (`scenes[]`, jede mit `kind`, `text`, optional `quelle`)
- `hook`: `bild`, `tag`, `sub`, `unter` – Titelbild mit Zoom, Tag-Pille
- `stempel`: `kicker`, `uhr` ("03:45", zählt hoch), `stempel[{t,cue}]` – bis zu 4 Stempel
- `karte`: `kicker`, `orte[{n,lon,lat}]`, `fokus{n,lon,lat}`, `zahl`, `zahltext`, `zahlzeile`, `zahl_cue` – schematische Karte plus große Zahl
- `ablauf`: `titel` (rot in `[…]`), `knoten[{t,s,cue}]`, `marke{t,cue}`, `chipsLabel`, `chips[{t}]` – Schaubild Kette
- `gegensatz`: `kicker`, `wort`, `strich_cue`, `zeile`, `pille` – Begriff wird durchgestrichen
- `schluss`: `aussage` (rot in `[…]`), `frage`, `cta`, `hinweis`, `untertitel:false`

`cue` = Stichwort im Sprechtext, bei dem das Element erscheint (fehlt es, wird zeitlich verteilt).
`rot` (oberste Ebene) = Wörter, die in den Untertiteln rot erscheinen.

## Sprechtext-Schreibweise (`text`)
Wörter werden gesprochen geschrieben; mit `gesprochen=Anzeige` steht im Untertitel etwas anderes
(z. B. `drei=3:45`, `zweitausendfünfundzwanzig=2025`); `fünfundvierzig=` wird nur gesprochen, nicht angezeigt.
Satzzeichen (. ? !) bestimmen die Satzgrenzen, an denen die Zeiten an Sprechpausen einrasten.

## Regeln
- Nur Belegtes im Video, Quellenzeile pro Szene; „Sprecherstimme: KI-generiert“ im Schluss.
- Pro Tag höchstens ein ausgewähltes Karussell als Video.
