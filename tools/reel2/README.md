# Reel-Baukasten (DoytschlandTv)
Rendern: `python3 tools/reel2/render.py kx out.mp4 <dauer_s> <abs-pfad-zur-config.json>` (7 bis 10 Min, im Hintergrund). Config-Beispiel: `beispiele/reel-kx.json` (Szenentypen hook, zahl, fakten, einordnung, betrifft, meinung, cta; Bildpfade relativ zu `tools/reel2/`). Handgebaute Reels: Modi e1 bis e4, d1, d2, m1, a1.
Stimme: ElevenLabs "Cengiz Bozkurt_Deutsch", Modell eleven_v4, ein zusammenhängender Take mit "..." als Pausen. Mix: Stimme `adelay=400,volume=1.7`, Musik `audio/clear-signal.mp3` `volume=0.4` plus `sidechaincompress=threshold=0.02:ratio=10:attack=15:release=400`, `amix=inputs=2:duration=first:normalize=0`.
Cover: `python3 tools/reel2/cover.py` (Texte im Skript anpassen), schreibt nach `cover/`.
Briefing: Projekt DoytschlandTv, `redaktion/briefing-youtube-videos-baukasten-2026-10-25.md`.
