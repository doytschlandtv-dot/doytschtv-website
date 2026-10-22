/* Dossiers: Themenreihen. Folgen kommen nach Prüfung und Freigabe durch den Betreiber hinzu.
   Reihe: {id, titel, teaser, methode, motiv:"hemicycle|pruefung|paragraph"}
   Folge: {id, datum, titel, teaser, kern:[{z,l}], abschnitte:[{h,t:[]}], aussage?:{zitat,wer,datum,ort,url,urteil}, quellen:[{titel,url}], stand, karussell?:{thema,slides,caption,hashtags}} */
window.DOSSIERS = [
 {
  "id": "abgeordnete",
  "titel": "Die Abgeordneten",
  "teaser": "Wer sitzt im Bundestag, was machen die Damen und Herren, und was sagen die öffentlichen Daten über sie?",
  "methode": [
   "Wir gehen Fraktion für Fraktion vor, in der Reihenfolge der Sitzstärke. Jede Fraktion wird nach demselben Raster geprüft.",
   "Grundlage sind ausschließlich öffentliche Quellen: Abgeordnetenprofile und Nebeneinkünfte beim Bundestag, das Lobbyregister, die Parteispendenlisten der Bundestagsverwaltung und die Abstimmungsdaten des Bundestages.",
   "Wir zeigen Fakten und ordnen ein. Abgeordnete melden Nebeneinkünfte in Stufen, aber kein Vermögen. Wo Angaben fehlen, schreiben wir das dazu. Das Privatleben bleibt außen vor."
  ],
  "folgen": [],
  "motiv": "hemicycle"
 },
 {
  "id": "faktencheck",
  "titel": "AfD-Aussagen im Faktencheck",
  "teaser": "Wir prüfen öffentliche Aussagen von AfD-Politikern, belegen, was stimmt und was nicht, und benennen die rhetorischen Muster.",
  "methode": [
   "Wir zitieren wörtlich, mit Datum, Ort und Quelle, und nur im Zusammenhang. Dann folgt der Abgleich mit Primärquellen wie Statistiken, Gesetzen, Gerichtsentscheidungen und Plenarprotokollen.",
   "Es geht um die Sache und die Idee dahinter, nicht um die Person. Wir sagen deutlich, was falsch, irreführend oder ohne Kontext ist. Stimmt eine Aussage, schreiben wir das genauso klar.",
   "Wertungen wie „Propaganda“ oder „Populismus“ stehen nur dort, wo wir das Muster belegen können, und sind als unsere Einordnung gekennzeichnet."
  ],
  "folgen": [],
  "motiv": "pruefung"
 },
 {
  "id": "israel-regierung",
  "titel": "Israels Regierung und das Völkerrecht",
  "teaser": "Wir sammeln Aussagen israelischer Regierungsmitglieder, die auf Vertreibung oder Gewalt gegen Palästinenser zielen, und prüfen sie an Völkerrecht, Rechtsprechung und Expertenpositionen.",
  "methode": [
   "Wir zitieren wörtlich, mit Datum, Anlass und Quelle, und nur im Zusammenhang. Bei Übersetzungen aus dem Hebräischen sagen wir, wessen Übersetzung wir verwenden.",
   "Wir prüfen die Aussage an den einschlägigen Normen und Entscheidungen: Genfer Konventionen, Römisches Statut, Urteile und Gutachten des Internationalen Gerichtshofs und die Entscheidungen des Internationalen Strafgerichtshofs. Dazu kommen Positionen von Völkerrechtlern, Menschenrechtsorganisationen und Regierungen, jeweils mit Quelle.",
   "Wir unterscheiden klar: Was ist belegt, was ist nur berichtet, was ist offen? Berichte über Haftbefehle, die kein Gericht bestätigt hat, nennen wir unbestätigt. Wir stellen keine Strafbarkeit fest, das tun Gerichte.",
   "Es geht um die Aussage und die Idee dahinter, nicht um die Person und nie um ein Volk oder eine Religion. Kritik an Regierungsmitgliedern ist keine Kritik an Jüdinnen und Juden oder an Israelis. Wir benennen auch Gewalt und Rechtsbrüche der Hamas und anderer Seiten, wo sie für den Fall wichtig sind."
  ],
  "folgen": [
   {
    "id": "smotrich-ben-gvir-2023-2026",
    "datum": "2026-10-08",
    "titel": "Annexion, „Auswanderung“, Aushungern: Was Smotrich und Ben-Gvir seit dem 7. Oktober 2023 gesagt haben",
    "teaser": "Eine belegte Auswahl von Aussagen zweier israelischer Minister zu Gaza und zum Westjordanland, geordnet nach Thema, mit den Einordnungen von Gerichten, Regierungen und Organisationen.",
    "aussage": {
     "zitat": "Israel solle die Migration sowohl aus Gaza als auch aus Judäa und Samaria fördern.",
     "wer": "Bezalel Smotrich, Finanzminister (sinngemäße Übersetzung)",
     "datum": "17.2.2026",
     "ort": "Parteiveranstaltung in Psagot, Westjordanland",
     "url": "https://www.timesofisrael.com/smotrich-next-government-should-encourage-migration-of-west-bank-palestinians/",
     "urteil": "Belegt, gerichtlich nicht bewertet"
    },
    "kern": [
     {
      "z": "Annexion",
      "l": "Smotrich fordert seit 2024 wiederholt Souveränität über das Westjordanland und nennt Gaza „Teil des Landes Israel“. Der Internationale Gerichtshof (IGH) hat die Präsenz im besetzten Gebiet 2024 als unrechtmäßig bezeichnet."
     },
     {
      "z": "„Auswanderung“",
      "l": "Beide Minister fordern seit Ende 2023, Palästinenser zur „freiwilligen“ Ausreise zu bewegen. Ben-Gvir legte am 3.9.2026 einen Plan für bis zu 1,86 Millionen Ausreisen vor."
     },
     {
      "z": "Hilfe und Hunger",
      "l": "Beide fordern zeitweise, Hilfe, Strom oder Wasser für Gaza zu stoppen. Smotrich sagte am 5.8.2024, eine Blockade könne „gerechtfertigt“ sein, die Welt lasse es aber nicht zu."
     },
     {
      "z": "Reaktionen",
      "l": "Die Bundesregierung nannte Ben-Gvirs Aussage vom 16.8.2026 „nicht hinnehmbar“ und völkerrechtswidrig. Mehrere Staaten verhängten Einreiseverbote oder Sanktionen. Die EU einigte sich nicht."
     }
    ],
    "abschnitte": [
     {
      "h": "Worum es geht",
      "t": [
       "Bezalel Smotrich (Finanzminister, zuständig auch für die Siedlungsverwaltung) und Itamar Ben-Gvir (Minister für nationale Sicherheit) gehören der Regierung Netanjahu an. Seit dem Hamas-Angriff vom 7. Oktober 2023 haben beide öffentlich Positionen vertreten, die auf Annexion, Besiedlung und die Ausreise von Palästinensern zielen. Wir ordnen diese Aussagen ein. Es geht um die Aussagen und die Ideen dahinter, nicht um die Personen und nie um ein Volk oder eine Religion.",
       "Wichtig vorab: Das ist eine Auswahl der am besten belegten Aussagen, nicht alle. Sie stützt sich auf Medienberichte. Originale wie X-Posts oder Knesset-Protokolle haben wir nicht ausgewertet. Die Wahl in Israel findet am 27.10.2026 statt, viele Aussagen aus dem Herbst 2026 fallen in den Wahlkampf."
      ]
     },
     {
      "h": "Zur Leitaussage",
      "t": [
       "Die Äußerung vom 17.2.2026 ist durch die Times of Israel belegt. Gefordert wird „Förderung“ von Migration, nicht ausdrücklich Zwang. Zwangsumsiedlung ist nach den Genfer Konventionen verboten. Ob „Förderung“ unter Besatzung freiwillig sein kann, ist umstritten. Kritiker nennen es eine Umschreibung für Vertreibung, so die Zeitung. Ein Gericht hat diese Aussage nicht bewertet."
      ]
     },
     {
      "h": "Smotrich und Gaza",
      "t": [
       "Auswanderung: Am 14.11.2023 nannte er den Umsiedlungsvorschlag zweier Politiker die „richtige humanitäre Lösung“ (Al Jazeera). Am 3.1.2024 forderte er, „freiwillige Auswanderung“ zu fördern und Aufnahmeländer zu finden. Am 25.11.2024 sagte er, die Bevölkerung Gazas könne in zwei Jahren um die Hälfte sinken, und forderte, Gaza zu besetzen (Times of Israel). Am 9.3.2025 sagte er, eine „Migrationsverwaltung“ für die Ausreise aus Gaza nehme Gestalt an.",
       "Besetzung und Besiedlung: Am 6.5.2025 sagte er, Gaza werde „völlig zerstört“, die rund 2,3 Millionen Menschen sollten in einer „humanitären“ Zone im Süden konzentriert werden, der Rest des Streifens solle leer bleiben. Die Menschen würden dann verzweifeln und in andere Länder auswandern wollen. Am 23.2.2026 sagte er, Israel werde am Ende Gaza besetzen, eine Militärverwaltung einrichten und Siedlungen gründen. Am 29.6.2026 erklärte er, die Planung für drei Siedlungen im Norden Gazas sei abgeschlossen, es fehle die Zustimmung Netanjahus. Die USA lehnen Siedlungen in Gaza ab.",
       "Hilfe: Am 5.8.2024 sagte er auf einer Konferenz, eine Blockade humanitärer Hilfe könne „gerechtfertigt“ sein, auch wenn zwei Millionen Zivilisten darunter litten, die Welt lasse es aber nicht zu. Er sagte nicht wörtlich, man solle aushungern. Die Schlagzeile der Times of Israel ist eine Zuspitzung. Am 8.8.2024 wies er den Vorwurf zurück, er befürworte Aushungern, und stand zu seiner Aussage. Das Auswärtige Amt nannte sie laut Anadolu „völlig inakzeptabel“, der EU-Außenbeauftragte sagte, gezieltes Aushungern von Zivilisten sei ein Kriegsverbrechen. Am 7.4.2025 sagte er laut Middle East Eye, „nicht ein Weizenkorn“ komme nach Gaza (Einzelquelle)."
      ]
     },
     {
      "h": "Smotrich und das Westjordanland",
      "t": [
       "Souveränität: Am 15.7.2024 forderte er Annexion für den Fall, dass der IGH die Siedlungen für illegal erkläre. Vier Tage später schrieb er nach dem Gutachten: „Souveränität jetzt“. Am 11.11.2024 erklärte er 2025 zum „Jahr der Souveränität“ und ließ Infrastruktur dafür vorbereiten. Am 3.9.2025 stellte er einen Plan vor, Souveränität auf etwa 82 Prozent des Gebiets anzuwenden, mit „maximalem Land bei minimaler [palästinensischer] Bevölkerung“ (Klammer von der Zeitung) (Times of Israel-Liveblog). Ein Regierungsbeschluss folgte nicht.",
       "Siedlungsbau: Beschlossen wurden unter anderem fünf legalisierte Außenposten (Juni 2024), 22 neue Siedlungen (Mai 2025), das E1-Gebiet mit rund 3.400 Wohneinheiten (August 2025) und 19 weitere Siedlungen (Dezember 2025). Zu E1 sagte er, es „begrabe die Idee eines Palästinenserstaats“. Am 8.2.2026 beschloss das Sicherheitskabinett unter anderem Landregister und Landkauf für Juden im Westjordanland; mehr als 80 Staaten verurteilten die Maßnahmen Mitte Februar 2026 in einer gemeinsamen Erklärung.",
       "Ausreise: Am 27.10.2024 sprach er laut Times of Israel (sinngemäß) davon, Palästinensern bei der Auswanderung zu helfen, die an nationalen Ansprüchen festhielten. Am 17.2.2026 forderte er, die Migration aus Gaza und dem Westjordanland zu fördern. Am 24.7.2026 sagte er nach Gewalt bei Tal, mehrere Dörfer sollten aussehen wie die Flüchtlingslager in Nablus und Tulkarem. Am 27.9.2026 sagte er in einem Ynet-Interview, Israel müsse im Westjordanland „in den Krieg ziehen“ und tun, „was wir in Gaza getan haben“."
      ]
     },
     {
      "h": "Ben-Gvir und Gaza",
      "t": [
       "Auswanderung: Am 1.1.2024 nannte er die „Abwanderung“ eine „richtige, gerechte, moralische und humane Lösung“. UN-Menschenrechtskommissar Türk und der EU-Außenbeauftragte Borrell kritisierten das, Borrell mit dem Hinweis, Zwangsvertreibung sei streng verboten. Am 3.9.2026 stellte seine Partei den Plan „Disengagement 710“ vor: 250.000 Ausreisen im ersten Jahr, 1,86 Millionen in sieben Jahren, mit eigenem Ministerium. Er sagt: „freie Wahl“, niemand werde gezwungen. Als mögliche Zielländer nennt seine Partei die Türkei, Äthiopien, den Kongo und ungenannte arabische Staaten, bestätigte Zusagen sind nicht bekannt. Die Times of Israel hält eine Umsetzung für unwahrscheinlich. Laut JTA sagte Türk sinngemäß, solche Umsiedlungspläne seien praktisch ethnische Säuberung. Die Emirate und sieben weitere Staaten, darunter Saudi-Arabien, Ägypten und die Türkei, verurteilten die Vorschläge von Ben-Gvir und Katz. Der US-Botschafter Huckabee sagte, niemand schlage Zwangsvertreibung vor.",
       "Hilfe: Am 16.1.2025 forderte er, Hilfe, Treibstoff, Strom und Wasser für Gaza vollständig zu stoppen. Am 3.3.2025 forderte er laut Middle East Eye auf X, angesammelte Hilfsgüter zu bombardieren und Strom und Wasser vollständig abzuschalten. Er war damals nach seinem Austritt aus der Regierung ohne Ministeramt, im März kehrte er zurück. Am 5.5.2025 sagte er, der „Feind“ solle weder Nahrung noch Strom noch Hilfe bekommen, solange Geiseln in den Tunneln seien.",
       "Tötungen: Am 16.8.2026 sagte er in einem Podcast, die Armee solle jede Nacht 30 bis 40 Menschen in Gaza töten, und sprach einigen das Lebensrecht ab (Times of Israel, CBS, Al Jazeera). Ein Regierungssprecher in Berlin nannte das „nicht hinnehmbar“, menschenverachtend und völkerrechtswidrig (ZDFheute, 19.8.2026). Ben-Gvir hat keine Befehlsgewalt über die Armee."
      ]
     },
     {
      "h": "Ben-Gvir und das Westjordanland",
      "t": [
       "Annexion: Am 6.11.2024 und am 21.9.2025 forderte er Souveränität über das Westjordanland, im September 2025 ausdrücklich als Antwort auf die Anerkennung Palästinas. Anfang Oktober 2026 sagte er laut Middle East Eye, das ganze Land gehöre Israel (nur Medienbericht, ein iranisch nahes Portal berichtet ebenfalls).",
       "Polizei und Siedlergewalt: Er sagte im November 2025, er sei stolz, dass die Polizei „Hilltop“-Jugendliche nicht mehr belästige. Laut N12-Daten, die die Jerusalem Post zitiert, sank die Zahl der Ermittlungsverfahren zu Siedlerangriffen seit seinem Amtsantritt um mehr als 70 Prozent. Die UN-Nothilfekoordination OCHA zählte im Oktober 2025 die meisten Siedlergewalt-Vorfälle seit Beginn der Erfassung 2006. Amnesty International spricht in einem Bericht vom Juni 2026 von ethnischer Säuberung beduinischer und hirtenbasierter Gemeinschaften. Nach OCHA-Zahlen im Bericht waren von Januar 2023 bis April 2026 117 Gemeinschaften ganz oder teilweise vertrieben, rund 5.910 Menschen. Amnesty wirft Ben-Gvir vor, die Polizei im November 2023 zur Zurückhaltung angewiesen zu haben (Wertung von Amnesty, der Vorwurf stützt sich auf Medienberichte).",
       "Waffen und Strafrecht: Sein Ministerium kaufte nach dem 7. Oktober 2023 Tausende Gewehre für zivile Sicherheitsteams. Im Januar 2026 erweiterte er Waffenscheine auf weitere Siedlungen. Am 30.3.2026 verabschiedete die Knesset das von ihm vorangetriebene Todesstrafengesetz, das für Palästinenser im Westjordanland die Regelstrafe vorsieht. Die EU-Außenbeauftragte Kallas lehnt die Todesstrafe grundsätzlich ab."
      ]
     },
     {
      "h": "Was das Völkerrecht sagt",
      "t": [
       "Der IGH stellte in seinem Gutachten vom 19.7.2024 fest: Die Präsenz Israels im besetzten palästinensischen Gebiet ist unrechtmäßig, die Siedlungen verstoßen gegen Völkerrecht, Israel kann wegen der Besatzung keine Souveränität beanspruchen und muss neue Siedlungstätigkeit einstellen. Das Gutachten ist rechtlich nicht bindend, aber die maßgebliche Auslegung des höchsten UN-Gerichts. Die UN-Generalversammlung forderte am 18.9.2024 ein Ende der Präsenz binnen zwölf Monaten.",
       "Normen, die in der Debatte eine Rolle spielen (unsere Einordnung): Die Vierte Genfer Konvention verbietet in Artikel 49 Einzel- und Massenzwangsumsiedlungen und Deportationen geschützter Personen aus besetztem Gebiet, ebenso die Überführung der eigenen Zivilbevölkerung der Besatzungsmacht in dieses Gebiet. Das Römische Statut des Internationalen Strafgerichtshofs stuft Deportation und Zwangsüberführung unter bestimmten Voraussetzungen als Kriegsverbrechen und als Verbrechen gegen die Menschlichkeit ein. Auch das Aushungern von Zivilisten als Methode der Kriegsführung ist dort ein Kriegsverbrechen. Ob eine einzelne Aussage das erfüllt, entscheiden Gerichte. Wir stellen keine Strafbarkeit fest.",
       "Gegen keinen der beiden Minister ist ein Haftbefehl des IStGH bekannt. Smotrich behauptete am 19.5.2026, es gebe einen „geheimen“ Haftbefehl. Die Times of Israel korrigierte ihre Erstmeldung, bestätigt ist nichts. Auch haben IGH oder IStGH die hier genannten Aussagen bisher nicht ausdrücklich gewürdigt."
      ]
     },
     {
      "h": "Reaktionen und Maßnahmen",
      "t": [
       "Am 10.6.2025 verhängten Großbritannien, Kanada, Australien, Neuseeland und Norwegen Maßnahmen gegen beide Minister wegen Anstiftung zu extremistischer Gewalt im Westjordanland. Einreiseverbote gibt es laut Berichten aus Slowenien (17.7.2025), den Niederlanden (Juli 2025), Spanien (9.9.2025), Frankreich (Mai/Juni 2026) und Irland (5.6.2026). Auf EU-Ebene scheiterten Sanktionen gegen Ben-Gvir am 15.6.2026: Kallas sagte, es gebe keinen Konsens. Laut Al Jazeera gehören Deutschland, Österreich und Tschechien nach den ihr vorliegenden Informationen zu den Gegnern, eine namentlich genannte Quelle dafür gibt es nicht.",
       "Außenminister Sa’ar nannte die Sanktionen vom Juni 2025 laut JNS „empörend“. Netanjahu hat laut Times of Israel wiederholt erklärt, solche Maßnahmen seien weder Kriegsziel noch auf der Agenda."
      ]
     },
     {
      "h": "Einwände und Gegenseite",
      "t": [
       "Beide Minister betonen, die Ausreise solle „freiwillig“ sein. Ben-Gvir sagte, niemand werde gezwungen. Der US-Botschafter Huckabee sagte laut JTA, niemand schlage Zwangsvertreibung vor. Smotrich sieht Siedlungen als Sicherheitsgürtel für Grenzorte und verweist auf den Terror der Hamas vom 7. Oktober 2023, bei dem rund 1.200 Menschen getötet und Geiseln verschleppt wurden.",
       "Kritiker wenden ein, dass „freiwillig“ unter Besatzung, Blockade und Krieg schwer zu beurteilen ist, vor allem wenn zugleich Hilfe, Strom oder Wasser gekürzt werden sollen. Das ist ihre Einschätzung, ein Gericht hat sie nicht getroffen. Auch in Israel gibt es Kritik: Oppositionspolitiker wie Gadi Eisenkot und Yair Golan griffen mehrere Aussagen scharf an. Der Terror der Hamas am 7. Oktober 2023 ist ein schweres Verbrechen und rechtfertigt keine Rechtsbrüche der Gegenseite, so wie umgekehrt Rechtsbrüche der einen Seite die der anderen nicht rechtfertigen."
      ]
     },
     {
      "h": "Was offen oder nur schwach belegt ist",
      "t": [
       "Nur über eine Quelle oder parteiische Medien: Smotrich am 28.9.2026 („Hoffnung nehmen“, nur Antiwar.com), Ben-Gvir Anfang Oktober 2026 („das ganze Land“), Ben-Gvir am 1.11.2023 (nur Middle East Monitor). Ein Bericht über nichtöffentliche Kabinettssitzungen (Smotrich, 23.8.2025, „sie können verhungern oder sich ergeben“, Kanal 12) beruht auf anonymen Quellen.",
       "Nicht belegt: Reaktionen der Bundesregierung auf Äußerungen von 2023 bis 2025, das Abstimmungsergebnis der UN-Resolution vom 18.9.2024 in unserer Prüfung, sowie Smotrichs Haltung zu Siedlergewalt. Die Monate Oktober 2023, Dezember 2023 und Oktober 2025 bis Mai 2026 sind dünn belegt."
      ]
     }
    ],
    "quellen": [
     {
      "titel": "Times of Israel: Smotrich, Migration aus dem Westjordanland fördern (18.2.2026)",
      "url": "https://www.timesofisrael.com/smotrich-next-government-should-encourage-migration-of-west-bank-palestinians/"
     },
     {
      "titel": "Times of Israel: Smotrich, Blockade „gerechtfertigt“ (5.8.2024)",
      "url": "https://www.timesofisrael.com/smotrich-it-may-be-justified-to-starve-2-million-gazans-but-world-wont-let-us/"
     },
     {
      "titel": "Times of Israel: Smotrich, Hälfte der Bevölkerung Gazas (26.11.2024)",
      "url": "https://www.timesofisrael.com/smotrich-says-half-of-gazans-can-be-encouraged-to-leave-within-two-years/amp/"
     },
     {
      "titel": "Times of Israel: Smotrich, Plan für 3 Siedlungen in Gaza (29.6.2026)",
      "url": "https://www.timesofisrael.com/smotrich-says-plans-drawn-up-to-establish-3-israeli-settlements-in-gaza/"
     },
     {
      "titel": "Times of Israel: Smotrich, 82 Prozent Souveränität (3.9.2025)",
      "url": "https://www.timesofisrael.com/liveblog_entry/smotrich-presents-plan-to-annex-82-of-west-bank-threatens-to-destroy-pa-if-it-dares-to-try-to-harm-us/"
     },
     {
      "titel": "Al Jazeera: Smotrich, Krieg im Westjordanland (27.9.2026)",
      "url": "https://www.aljazeera.com/news/2026/9/27/israeli-minister-bezalel-smotrich-calls-for-war-in-occupied-west-bank"
     },
     {
      "titel": "Times of Israel: Ben-Gvir, Plan zur Ausreise aus Gaza (3.9.2026)",
      "url": "https://www.timesofisrael.com/ben-gvir-unveils-voluntary-emigration-plan-to-remove-most-palestinians-from-gaza/"
     },
     {
      "titel": "JTA: Ben-Gvir und Katz, Pläne zur Ausreise (6.9.2026)",
      "url": "https://www.jta.org/2026/09/06/israel/israeli-ministers-unveil-plans-to-encourage-voluntary-palestinian-emigration-from-gaza"
     },
     {
      "titel": "ZDFheute: Reaktion der Bundesregierung auf Ben-Gvir (19.8.2026)",
      "url": "https://www.zdfheute.de/politik/ausland/ben-gvir-palaestinenser-reaktionen-israel-nahost-100.html"
     },
     {
      "titel": "Times of Israel: Ben-Gvir, Hilfe stoppen (5.5.2025)",
      "url": "https://www.timesofisrael.com/liveblog_entry/ben-gvir-pans-decision-to-resume-gaza-aid-says-israel-should-assist-only-with-voluntary-migration/"
     },
     {
      "titel": "Jerusalem Post: Ben-Gvir und Hilltop-Jugendliche (13.11.2025)",
      "url": "https://www.jpost.com/israel-news/article-873795"
     },
     {
      "titel": "Amnesty International: Ethnische Säuberung beduinischer Gemeinschaften (Juni 2026)",
      "url": "https://www.amnesty.org/en/latest/research/2026/06/israel-west-bank-ethnic-cleansing/"
     },
     {
      "titel": "IGH-Gutachten vom 19.7.2024, Pressemitteilung (UN-Archiv)",
      "url": "https://www.un.org/unispal/document/icj-pressrelease-19jul24/"
     },
     {
      "titel": "Gemeinsame Erklärung von UK, Kanada, Australien, Neuseeland, Norwegen (10.6.2025)",
      "url": "https://www.canada.ca/en/global-affairs/news/2025/06/joint-statement-by-the-foreign-ministers-of-australia-canada-new-zealand-norway-and-the-united-kingdom-on-measures-targeting-itamar-ben-gvir-and-be.html"
     },
     {
      "titel": "Al Jazeera: EU scheitert an Sanktionen gegen Ben-Gvir (15.6.2026)",
      "url": "https://www.aljazeera.com/news/2026/6/15/eu-fails-to-agree-on-sanctions-for-far-right-israeli-minister-ben-gvir"
     }
    ],
    "stand": "8.10.2026",
    "karussell": {
     "thema": "Smotrich und Ben-Gvir: Aussagen seit dem 7. Oktober",
     "slides": [
      {
       "typ": "hook",
       "kicker": "Dossier",
       "titel": "Annexion, „Auswanderung“, Hilfestopp: Was zwei israelische Minister seit dem 7. Oktober 2023 sagten.",
       "rot": "Annexion",
       "bild": {
        "url": "dossier-portraet.jpg",
        "karte": true,
        "unter": "Illustrationen, KI-generiert, keine Fotos"
       }
      },
      {
       "typ": "zahl",
       "zahl": "1,86",
       "label": "Millionen Ausreisen in sieben Jahren",
       "text": "So sieht es Ben-Gvirs Plan „Disengagement 710“ vom 3.9.2026 für Gaza vor. Seine Partei nennt es freiwillig. Zusagen von Aufnahmeländern sind nicht bekannt.",
       "quelle": "Times of Israel, 3.9.2026"
      },
      {
       "typ": "fakten",
       "label": "Westjordanland",
       "titel": "Souveränität für 82 Prozent",
       "text": "Smotrich stellte am 3.9.2025 einen Plan vor, Souveränität auf etwa 82 Prozent des Westjordanlands anzuwenden. Ein Regierungsbeschluss folgte nicht. Der Internationale Gerichtshof sagte 2024: Israel darf dort keine Souveränität beanspruchen.",
       "quelle": "Times of Israel, 3.9.2025; IGH, 19.7.2024"
      },
      {
       "typ": "vergleich",
       "labelA": "Schlagzeile",
       "behauptung": "„Smotrich: Aushungern von zwei Millionen Gazanern könnte gerechtfertigt sein.“",
       "labelB": "Was er sagte",
       "fakt": "Eine Blockade könne „gerechtfertigt“ sein, die Welt lasse es aber nicht zu.",
       "quelle": "Times of Israel, 5.8.2024"
      },
      {
       "typ": "einordnung",
       "label": "Gaza",
       "titel": "Was Ben-Gvir am 16.8.2026 sagte",
       "text": "Die Armee solle jede Nacht 30 bis 40 Menschen in Gaza töten. Ein Regierungssprecher in Berlin nannte das „nicht hinnehmbar“, menschenverachtend und völkerrechtswidrig.",
       "quelle": "ZDFheute, 19.8.2026"
      },
      {
       "typ": "einordnung",
       "label": "Die andere Seite",
       "titel": "„Freiwillig“",
       "text": "Beide Minister sagen, die Ausreise solle freiwillig sein. Ben-Gvir: Niemand werde gezwungen. Kritiker bezweifeln das unter Besatzung und Krieg. Ein Gericht hat das nicht entschieden.",
       "quelle": "JTA, 6.9.2026"
      },
      {
       "typ": "meinung",
       "text": "Uns geht es um die Sache, nicht um Personen. Was gegen Völkerrecht und Menschenrechte geht, ist inakzeptabel. Ob eine Aussage dagegen verstößt, entscheiden Gerichte.",
       "handlung": "Das ganze Dossier mit allen Quellen: doytschtv.de/dossiers"
      },
      {
       "typ": "cta",
       "frage": "Wo endet politische Rhetorik, und wo beginnt der Verstoß gegen Menschenrechte?"
      }
     ],
     "caption": "Smotrich und Ben-Gvir haben seit dem 7. Oktober 2023 Annexion, „freiwillige Auswanderung“ und Hilfestopps gefordert. Wir haben die am besten belegten Aussagen gesammelt und mit den Einordnungen von Gericht, Regierung und Organisationen versehen. Zum Beispiel: Smotrich sagte nicht, man solle aushungern, sondern eine Blockade könne „gerechtfertigt“ sein. Ben-Gvirs Forderung, jede Nacht 30 bis 40 Menschen in Gaza zu töten, nannte die Bundesregierung völkerrechtswidrig. Uns geht es um die Sache, nicht um Personen. Alle Quellen im Dossier auf doytschtv.de. Wo endet für dich politische Rhetorik, und wo beginnt der Verstoß gegen Menschenrechte?",
     "hashtags": "#doytschlandtv #politik #israel #gaza #westjordanland #völkerrecht #menschenrechte #faktencheck #dossier #einordnung"
    },
    "bild": {
     "src": "dossier-smotrich-ben-gvir.jpg",
     "w": 1280,
     "h": 1050,
     "alt": "KI-generierte Illustration von Itamar Ben-Gvir (links) und Bezalel Smotrich (rechts) im Schwarz-Weiß-Comicstil, mit Namen, Ämtern und DoytschlandTv-Logo",
     "unter": "Illustration, KI-generiert, keine Fotos."
    }
   }
  ],
  "motiv": "paragraph"
 },
 {
  "id": "lobby",
  "titel": "Lobby und Einfluss",
  "teaser": "Wer bezahlt politischen Einfluss, wie viel ist es, und was sagen Register, Bilanzen und Recherchen dazu?",
  "methode": [
   "Wir stützen uns auf Primärquellen wie das Lobbyregister des Bundestages, Bilanzen und Reden, und ordnen Recherchen Dritter ein, etwa von Medien und Organisationen. Jede Angabe nennt ihre Quelle.",
   "Wir unterscheiden drei Dinge: Was ist belegt (Register, Bilanz, Rede), was ist nur berichtet (Recherchen Dritter, von uns nicht am Original geprüft), und was ist unsere Einordnung. Wo wir Lücken sehen, schreiben wir das dazu.",
   "Lobbyismus ist legal und gehört zur Demokratie. Es geht um Transparenz, nicht um Vorwürfe. Wir stellen keine Rechtsverstöße fest, das tun Gerichte und Behörden. Die Gegenseite kommt immer mit ihrer Darstellung zu Wort."
  ],
  "folgen": [
   {
    "id": "stiftung-familienunternehmen-lobby",
    "datum": "2026-10-17",
    "titel": "Wer bezahlt den Einfluss der Familienunternehmer?",
    "teaser": "Zwei Stiftungen, ein Team, rund 3,8 Millionen Euro Umsatz und Zugang bis zum Kanzler. Was Lobbyregister und Bilanz zeigen, was Recherchen berichten und was offen bleibt.",
    "kern": [
     {
      "z": "Der Apparat",
      "l": "Die Stiftung Familienunternehmen und Politik (SFUP) steht seit 2022 im Lobbyregister. 2025 gab sie laut Register rund 2,26 Millionen Euro für Interessenvertretung aus, mit 6,3 Vollzeitstellen. Ihr Umsatz lag laut Bilanz bei 3,78 Millionen Euro."
     },
     {
      "z": "Zwei Stiftungen",
      "l": "Die gemeinnützige Stiftung Familienunternehmen (SFU, seit 2002) und die SFUP (seit 2021, nicht gemeinnützig) haben laut Recherchen dasselbe Führungspersonal. Die Trennung ist rechtlich zulässig."
     },
     {
      "z": "Wer zahlt, bleibt geheim",
      "l": "Die Stiftung nennt rund 600 Förderer, veröffentlicht aber keine Liste, auch aus Datenschutzgründen. Panorama identifizierte 123 Firmen, 121 davon Großunternehmen. Im Lobbyregister stehen keine Namen von Geldgebern."
     },
     {
      "z": "Zugang",
      "l": "Die SFUP lud am 11.6.2026 zum „Tag des Familienunternehmens“ nach Berlin, Bundeskanzler Merz hielt die Rede. Wie viel Einfluss das Geld kauft, lässt sich mit öffentlichen Daten nicht messen."
     }
    ],
    "abschnitte": [
     {
      "h": "Worum es geht",
      "t": [
       "Die Stiftung Familienunternehmen und Politik versteht sich als Stimme der Familienunternehmen in Berlin. Sie ist im Lobbyregister eingetragen, hat ein „Haus des Familienunternehmens“ am Pariser Platz und gibt Stellungnahmen zu Gesetzen ab. Das ist legal und im Register sichtbar.",
       "Die Kritik richtet sich nicht gegen Lobbyarbeit an sich, sondern gegen drei Punkte: wer sie bezahlt, unter welchem Etikett das läuft und wer im Vergleich dazu keinen Zugang hat. Wichtig vorab: Vieles stammt aus Recherchen von Greenpeace und dem ARD-Magazin Panorama. Wir haben diese Angaben eingeordnet, aber nicht an Originalverträgen geprüft."
      ]
     },
     {
      "h": "Zwei Stiftungen, ein Team",
      "t": [
       "Die Stiftung Familienunternehmen (SFU) wurde 2002 gegründet, ist gemeinnützig und hat ihren Sitz in Stuttgart. 2021 kam die Stiftung Familienunternehmen und Politik (SFUP) dazu. Sie ist nicht gemeinnützig und im Lobbyregister eingetragen (R000083). Nach Greenpeace-Recherchen wollte man damit verhindern, dass politische Tätigkeit die Gemeinnützigkeit gefährdet. Anlass sei das Urteil des Bundesfinanzhofs im Fall Attac von 2019 gewesen. Das beruht auf Angaben von Greenpeace, die sich auf Aussagen der Stiftung beziehen.",
       "Laut Lobbyregister bilden Rainer Kirchdörfer und Ulrich B. Stoll den Vorstand der SFUP, Geschäftsführer sind Stefan Heidbreder und David Deißner. Nach Recherchen sind Vorstand, Geschäftsführung und Kuratorium beider Stiftungen identisch.",
       "Unsere Einordnung: Eine solche Trennung ist rechtlich zulässig und üblich. Politisch ist sie ein Gestaltungsmerkmal. Meinungsbildung (gemeinnützig, steuerbegünstigt) und Interessenvertretung (SFUP) laufen mit denselben Personen unter derselben Marke. Der Politikwissenschaftler Dieter Plehwe sagte Panorama, auch die gemeinnützige SFU betreibe Lobbyismus, nur eben über das Meinungsklima statt über direkten Zugang."
      ]
     },
     {
      "h": "Das Geld: Was Register und Bilanz zeigen",
      "t": [
       "Lobbyregister: Für 2025 nennt die SFUP Aufwendungen für Interessenvertretung von 2.260.001 bis 2.270.000 Euro und 6,3 Vollzeitstellen. Als Finanzierungsquelle steht dort „wirtschaftliche Tätigkeit“, ohne Betrag.",
       "Bilanz 2025 (im Lobbyregister hinterlegt): Die Umsatzerlöse stiegen von 3,41 auf 3,78 Millionen Euro, der Jahresüberschuss nach Steuern lag bei rund 452.000 Euro. Die SFUP zahlt Steuern, weil sie nicht gemeinnützig ist. Die liquiden Mittel betrugen gut 3,1 Millionen Euro. Wofür die Rücklagen gedacht sind, steht nicht in den öffentlichen Unterlagen.",
       "Unsere Rechnung: Der Gesamtaufwand vor Steuern liegt bei rund 3,2 Millionen Euro. Davon macht die Interessenvertretung laut Register etwa 2,3 Millionen aus. Rund eine Million Euro entfällt demnach auf Veranstaltungen, Verwaltung und Kommunikation. Eine Aufschlüsselung wird nicht veröffentlicht.",
       "Nach Greenpeace-Angaben gab die SFUP in den Jahren 2022 bis 2024 laut Lobbyregister zusammen über 6,2 Millionen Euro in Deutschland aus, dazu über 1 Million Euro in der EU."
      ]
     },
     {
      "h": "Wer zahlt? Das Geheimnis um die Förderer",
      "t": [
       "Die Stiftung selbst spricht von rund 600 Förderern. Eine Liste veröffentlicht sie nicht. Geschäftsführer Deißner sagte Panorama, das dürfe man nicht, auch aus Datenschutzgründen. Formale Mitglieder gibt es nicht.",
       "Panorama (ARD, 25.9.2025) identifizierte nach eigener Recherche 123 Firmen, die die Stiftung fördern oder bei denen es gravierende Hinweise darauf gibt. Nur zwei davon sind Unternehmen mit weniger als 50 Millionen Euro Jahresumsatz. Rossmann, Deichmann, die Würth-Gruppe, die Schwarz-Gruppe (Lidl, Kaufland) und Bertelsmann haben ihre Förderung bestätigt oder eingeräumt.",
       "Greenpeace (September 2025) ordnet dem Netzwerk von SFU und SFUP 258 Unternehmen mit ihren Familien zu, mindestens 82 davon Milliardärsfamilien. Wichtig: Diese Zuordnung läuft über neun Kriterien wie Förderung, Kuratoriumsmitgliedschaft, Veranstaltungen oder Medienbeiträge. Eine Nennung heißt nicht, dass die Firma zahlt. Die Autoren betonen selbst, dass die Liste nicht repräsentativ ist.",
       "Nach Greenpeace-Recherchen beträgt der Mindestbeitrag 13.000 Euro im Jahr, die SFUP finanziere sich über Dienstleistungsverträge mit Unternehmen. Das stützt sich auf interne Unterlagen und Gespräche mit Insidern. Wir konnten es nicht am Original prüfen."
      ]
     },
     {
      "h": "Die Transparenzlücke",
      "t": [
       "Unsere Einordnung: Wenn die Zahlungen in der Bilanz als Umsatzerlöse stehen, also als Entgelt für Leistungen, und nicht als Spenden oder Mitgliedsbeiträge, dann bleibt die Liste der Zahler legal verborgen. Das Lobbyregister verlangt die Nennung großer Geldgeber vor allem bei Zuwendungen und Beiträgen. Das ist die Deutung der Konstruktion. Ob sie bewusst gewählt ist, wissen wir nicht.",
       "Offen ist auch: Das Register sagt, die Interessenvertretung erfolge „ausschließlich im eigenen Interesse“ und nicht im Auftrag Dritter. Nach Greenpeace-Angaben haben die Verträge aber die Positionierung der Interessen der zahlenden Firmen zum Gegenstand. Ob das rechtlich ein Widerspruch ist, kann ein Jurist klären. Wir stellen das nicht fest. Offen ist ebenfalls, wie die Zahlungen beim Zahler steuerlich behandelt werden."
      ]
     },
     {
      "h": "Zugang und Einfluss",
      "t": [
       "Die SFUP lud am 11.6.2026 zum „Tag des Familienunternehmens“ nach Berlin, Bundeskanzler Friedrich Merz hielt die Rede (Bundesregierung). Zugang ist kein Beleg für Einfluss, zeigt aber, dass Spitzenpolitik die Stiftung ernst nimmt.",
       "Im Lobbyregister stehen für die SFUP 54 Regelungsvorhaben und 22 Stellungnahmen an Bundestag und Ministerien zwischen April 2024 und August 2026. Zentrales Thema ist die Erbschaftsteuer: Betriebsvermögen soll weiterhin ausgenommen bleiben, genannt werden auch Optionen bis zur Abschaffung. Das Register nennt auch Seitenwechsel: Eine betraute Person war bis 2021 Referent einer Bundestagsfraktion, eine bis 2024 wissenschaftliche Mitarbeiterin eines Abgeordneten. Beides ist zulässig und offengelegt.",
       "Wirkung: Bei der Erbschaftsteuerreform 2016 lobte die Bundeskanzlerin laut LobbyControl die Arbeit der Stiftung öffentlich. Kritiker sehen darin einen Erfolg der Lobby. Ob und wie stark die Stiftung die Gesetzgebung bestimmt hat, ist nicht beweisbar, denn auch andere Verbände, Parteien und das Bundesverfassungsgericht wirkten mit. Wie viel Einfluss genau, lässt sich mit öffentlichen Daten nicht bestimmen. Sauber prüfen ließe es sich durch den Vergleich von Gesetzentwurf und Stellungnahme."
      ]
     },
     {
      "h": "Parteispenden aus dem Umfeld",
      "t": [
       "Greenpeace zählt für 2021 bis 2025 mindestens 4,5 Millionen Euro Parteispenden aus dem Netzwerk, davon rund 3,3 Millionen an CDU und CSU, 854.000 Euro an die FDP, 289.000 Euro an die Grünen und 50.000 Euro an die SPD.",
       "Wichtig: Das sind Spenden von Familien und Unternehmen aus dem Umfeld, nicht der Stiftung selbst. Die Zuordnung hängt an der Methode von Greenpeace. Ein Zusammenhang mit Gesetzen ist eine Korrelation, kein Beleg dafür, dass Entscheidungen gekauft wurden."
      ]
     },
     {
      "h": "Die andere Seite",
      "t": [
       "Die Stiftung weist zurück, ihre Arbeit richte sich an „Superreiche“. Sie arbeite für Familienunternehmen und nenne rund 600 Förderer, darunter mittlere Unternehmen. Sie wirft Greenpeace eine eigene politische Agenda vor. Sie bestreitet nach Tagesschau-Angaben nicht, dass Milliardäre unter den Förderern sind.",
       "Lobbyismus ist legal und Teil der Demokratie. Die SFUP ist registriert, legt Ausgaben und Stellungnahmen offen und führt eine Bilanz. Familienunternehmen sind laut Einleitungstext der Bundesregierung rund 90 Prozent der deutschen Unternehmen und erzielen etwa 37 Prozent der Umsätze. Das hängt allerdings an der Definition. Greenpeace und andere Kritiker sind selbst Interessenorganisationen mit eigenen Zielen."
      ]
     },
     {
      "h": "Was nicht belegt ist",
      "t": [
       "Nicht belegt sind Rechtsbruch, Bestechung, Geldflüsse an Politiker oder Absprachen. Nichts davon behaupten wir.",
       "Offen sind: die Förderer und die Beträge je Firma, die Zahlungen zwischen SFU und SFUP, der Anhang zur Bilanz, die Satzung der SFUP und die aktuelle Kuratoriumsliste. Diese Unterlagen wollen wir bei Stiftungsaufsicht und Stiftung nachfordern und das Dossier dann ergänzen."
      ]
     },
     {
      "h": "Unsere Einordnung",
      "t": [
       "Ist das organisierter Einfluss auf Regierende? Im Wortsinn ja: ein professionell finanzierter Apparat mit rund 3,8 Millionen Euro Umsatz und direktem Zugang zur Spitze. Das ist legal. Der Kern der Kritik ist nicht, dass lobbyiert wird, sondern wer bezahlt, unter welchem Etikett und mit welchem Gefälle zu Gruppen ohne ein solches Budget. Dazu gehört die Frage, ob „Familienunternehmen“ nach Bäckerei klingt, wenn gefördert werden vor allem Konzerne."
      ]
     }
    ],
    "quellen": [
     {
      "titel": "Lobbyregister des Bundestages: Stiftung Familienunternehmen und Politik (R000083)",
      "url": "https://www.lobbyregister.bundestag.de/suche/R000083/87356"
     },
     {
      "titel": "Tagesschau/Panorama: Stiftung Familienunternehmen, Lobby für Superreiche (25.9.2025)",
      "url": "https://www.tagesschau.de/investigativ/panorama/stiftung-familienunternehmen-lobbyismus-bertelsmann-schwarz-wuerth-100.html"
     },
     {
      "titel": "Greenpeace: Der Club der Superreichen, Recherche zur Stiftung Familienunternehmen (September 2025)",
      "url": "https://www.greenpeace.de/publikationen/sfu-recherche"
     },
     {
      "titel": "Bundesregierung: Rede des Kanzlers beim Tag der Familienunternehmen (11.6.2026)",
      "url": "https://www.bundesregierung.de/breg-de/aktuelles/rede-kanzler-tag-der-familienunternehmen-2026-2439682"
     },
     {
      "titel": "LobbyControl zur Erbschaftsteuerreform 2016",
      "url": "https://www.lobbycontrol.de/wp-content/uploads/160921_PM_Erbschaftssteuer.pdf"
     },
     {
      "titel": "Stiftung Familienunternehmen: Reaktion auf die Greenpeace-Recherche",
      "url": "https://www.familienunternehmen.de/de/news/enthuellt-was-offen-da-liegt"
     }
    ],
    "stand": "17.10.2026",
    "bild": {
     "src": "dossier-stiftung.jpg",
     "w": 1280,
     "h": 854,
     "alt": "KI-generierte Karikatur: ein verschlossenes Gebäude mit der Aufschrift Stiftung Familienunternehmen, Überwachungskameras, Stacheldraht und Verbotsschildern, davor ein Pförtner mit Klemmbrett und ein kleiner Junge",
     "unter": "Karikatur, KI-generiert, kein Foto."
    },
    "karussell": {
     "thema": "Stiftung Familienunternehmen: Wer bezahlt den Einfluss?",
     "slides": [
      {
       "typ": "hook",
       "kicker": "Dossier · Lobby",
       "titel": "Wer bezahlt den Einfluss der Familienunternehmer?",
       "rot": "bezahlt",
       "bild": {
        "url": "dossier-stiftung.jpg",
        "fokus": 0.5,
        "unter": "Karikatur, KI-generiert, kein Foto"
       }
      },
      {
       "typ": "zahl",
       "label": "Der Apparat",
       "zahl": "3,8",
       "text": "Millionen Euro Umsatz meldet die Stiftung Familienunternehmen und Politik für 2025. Rund 2,3 Millionen davon flossen laut Lobbyregister in Interessenvertretung, mit 6,3 Vollzeitstellen.",
       "quelle": "Lobbyregister R000083, Bilanz 2025"
      },
      {
       "typ": "fakten",
       "label": "Die Konstruktion",
       "titel": "Zwei Stiftungen, ein Team",
       "text": "Die gemeinnützige Stiftung Familienunternehmen und die nicht gemeinnützige Stiftung Familienunternehmen und Politik haben laut Recherchen dasselbe Führungspersonal. Rechtlich zulässig, politisch ein Gestaltungsmerkmal.",
       "quelle": "Lobbyregister; Greenpeace, 2025"
      },
      {
       "typ": "zahl",
       "label": "Die Förderer",
       "zahl": "121",
       "text": "von 123 Firmen, die Panorama als Förderer identifizierte, sind Großunternehmen mit über 50 Millionen Euro Umsatz. Eine Liste der rund 600 Förderer veröffentlicht die Stiftung nicht.",
       "quelle": "Panorama/NDR, 25.9.2025"
      },
      {
       "typ": "vergleich",
       "labelA": "Das Etikett",
       "behauptung": "„Familienunternehmen“ stehen laut Bundesregierung für rund 90 Prozent der Unternehmen in Deutschland.",
       "labelB": "Die Förderer",
       "fakt": "Unter den 123 identifizierten Förderern sind nur 2 kleine und mittlere Unternehmen.",
       "quelle": "Bundesregierung, 11.6.2026; Panorama/NDR, 25.9.2025"
      },
      {
       "typ": "fakten",
       "label": "Transparenz",
       "titel": "Entgelt statt Spende",
       "text": "Laut Bilanz stehen die Einnahmen als Umsatzerlöse. Ob das die Nennung der Geldgeber im Lobbyregister umgeht, ist unsere Deutung der Konstruktion, kein Rechtsvorwurf.",
       "quelle": "Lobbyregister, Bilanz 2025"
      },
      {
       "typ": "einordnung",
       "label": "Die andere Seite",
       "titel": "Legal und offengelegt",
       "text": "Die Stiftung sagt: Sie arbeite für Familienunternehmen, nicht für Superreiche, und sei im Lobbyregister eingetragen. Lobbyismus ist legal. Nicht belegt sind Rechtsbruch oder Geldflüsse an Politiker.",
       "quelle": "Stiftung Familienunternehmen; Tagesschau"
      },
      {
       "typ": "meinung",
       "text": "Uns geht es um die Sache, nicht um Personen. Lobbyarbeit ist legal. Entscheidend ist, dass die Öffentlichkeit weiß, wer sie bezahlt.",
       "handlung": "Das ganze Dossier mit allen Quellen: doytschtv.de/dossiers"
      },
      {
       "typ": "cta",
       "frage": "Sollten Geldgeber von Lobbyarbeit offengelegt werden müssen?"
      }
     ],
     "caption": "Die Stiftung Familienunternehmen und Politik meldet für 2025 rund 3,8 Millionen Euro Umsatz und gab laut Lobbyregister rund 2,3 Millionen Euro für Interessenvertretung aus. Wer zahlt, bleibt geheim: Panorama identifizierte 123 Förderer, 121 davon Großunternehmen, eine Liste gibt es nicht. Lobbyismus ist legal, und die Stiftung weist zurück, für Superreiche zu arbeiten. Nicht belegt sind Rechtsbruch oder Geldflüsse an Politiker. Uns geht es um Transparenz, nicht um Personen. Das ganze Dossier mit allen Quellen auf doytschtv.de, Link in der Bio. Sollten Geldgeber von Lobbyarbeit offengelegt werden müssen?",
     "hashtags": "#doytschlandtv #dossier #lobbyismus #familienunternehmen #lobbyregister #transparenz #erbschaftsteuer #politik #einordnung"
    }
   }
  ],
  "motiv": "paragraph"
 },
 {
  "id": "migration",
  "titel": "Migration und Zusammenleben",
  "teaser": "Wie kamen Menschen nach Deutschland, was wurde aus ihnen, und was sagen Zahlen, Gerichte und Studien dazu? Dazu persönliche Perspektiven, die wir klar als solche kennzeichnen.",
  "methode": [
   "Wir stützen uns auf Bundeszentralen und Landeszentralen für politische Bildung, Statistikämter, Forschungsinstitute und Medienberichte und nennen jede Quelle.",
   "Wo Quellen sich widersprechen, zeigen wir die Spanne. Wertungen sind als unsere Einordnung gekennzeichnet, persönliche Texte als persönliche Sicht."
  ],
  "folgen": [
   {
    "id": "anwerbeabkommen-tuerkei-65-jahre",
    "datum": "2026-10-20",
    "titel": "65 Jahre Anwerbeabkommen: Was 1961 vereinbart wurde und was daraus wurde",
    "teaser": "Von einem Notenwechsel am 30. Oktober 1961 bis heute: erst die Chronik mit Zahlen, Gesetzen und Ereignissen, dann ein Blick von innen.",
    "aussage": {
     "zitat": "Wir riefen Arbeitskräfte, und es kamen Menschen.",
     "wer": "Max Frisch, Schriftsteller",
     "datum": "1965",
     "url": "https://docenti.unimc.it/d.minni/teaching/2023/29088/files/materiale-didattico-14.11.23/Die%20ersten%20Gastarbeiter%20-%20Bundesrepublik%20I%20_%20Zeitklicks.pdf",
     "urteil": "Belegt, 1965 formuliert"
    },
    "kern": [
     {
      "z": "867.000",
      "l": "Menschen kamen zwischen 1961 und 1973 aus der Türkei. Rund 500.000 Rückwanderungen wurden im selben Zeitraum registriert, ein Teil davon Pendelmigration (bpb)."
     },
     {
      "z": "Zwei Jahre",
      "l": "So lange sollte der Aufenthalt höchstens dauern (Art. 9 des Abkommens), mit keiner Regelung zum Familiennachzug. Schon 1964 fiel die Zwei-Jahres-Grenze, auf Druck der Arbeitgeber."
     },
     {
      "z": "23.11.1973",
      "l": "Anwerbestopp. Danach kamen vor allem Frauen und Kinder: 53 Prozent der türkischstämmigen Einwohner kamen laut bpb über den Familiennachzug."
     },
     {
      "z": "3,1 Mio.",
      "l": "Menschen mit türkischem Migrationshintergrund leben heute in Deutschland (Stand 2025), rund 1,7 Millionen davon mit deutscher Staatsangehörigkeit."
     }
    ],
    "abschnitte": [
     {
      "h": "Worum es geht",
      "t": [
       "Am 30. Oktober 1961 schlossen die Bundesrepublik und die Türkei das Abkommen über die „Vermittlung türkischer Arbeitnehmer“. Aus einem Papier über Arbeitskräfte wurde die Geschichte von Familien, Kindern und Enkeln.",
       "Dieses Dossier betrachtet sie aus zwei Richtungen. Von außen: Was ist geschehen, Jahr für Jahr, mit Zahlen, Gesetzen und Ereignissen. Von innen: Was ist in den Menschen geschehen. Dafür unterscheidet das Dossier drei Räume, in denen Identität jeweils nach einer anderen Logik entsteht: den Opferraum der ersten Generation, den Konfliktraum der zweiten und den Syntheseraum der dritten.",
       "Die Räume sind meine Deutung, keine Statistik. Die Passagen in Ich-Form stammen von mir. Mein Großvater war einer der Arbeiter, die kamen.",
       "Der Aufbau: Zuerst die Chronik. Dann die Frage, die sie offenlässt. Danach die drei Räume, einer nach dem anderen, und am Ende ein persönliches Wort.",
       "Dies ist der Auftakt der Reihe „Migration und Zusammenleben“."
      ]
     },
     {
      "h": "Chronik: Die Zeitleiste auf einen Blick",
      "t": [
       "30. Oktober 1961: Notenwechsel zwischen Auswärtigem Amt und türkischer Botschaft, gültig ab 1. September 1961.",
       "30. September 1964: Ein zweites Abkommen streicht die Zwei-Jahres-Grenze.",
       "23. November 1973: Die Bundesregierung stoppt die Anwerbung. 1973 arbeiteten rund 605.000 türkische Arbeitnehmer in der Bundesrepublik.",
       "1974 bis 1979: Frauen und Kinder kommen nach. Die Zahl der unter 15-Jährigen aus der Türkei verdoppelt sich auf rund 420.000.",
       "1983 bis 1984: Arbeitslose Ausländer erhalten bei Rückkehr eine Hilfe von 10.500 D-Mark, die gezahlten Rentenbeiträge werden erstattet.",
       "1992 und 1993: Brandanschläge in Mölln (3 Tote) und Solingen (5 Tote).",
       "1. Januar 2000: Das Staatsangehörigkeitsrecht ermöglicht Kindern ausländischer Eltern unter bestimmten Voraussetzungen den Erwerb mit der Geburt. Im selben Jahr, am 9. September, wird Enver Şimşek erschossen, das erste Opfer der NSU-Mordserie.",
       "2011: Der NSU fliegt auf.",
       "27. Juni 2024: Die Reform des Staatsangehörigkeitsrechts erlaubt Mehrstaatigkeit bei der Einbürgerung.",
       "20. Oktober 2026: 65. Jahrestag, Festakt in Berlin."
      ]
     },
     {
      "h": "Chronik 1961: Eine Lücke im Arbeitsmarkt",
      "t": [
       "Die Bundesrepublik erlebte ein Wirtschaftswunder: 1960 standen rund 650.000 offene Stellen etwa 150.000 Arbeitsuchenden gegenüber. Aus Italien (Abkommen 1955), Spanien und Griechenland kamen schon Arbeitskräfte. Arbeitgeber holten Türkinnen und Türken teils auf eigene Faust, das Abkommen sollte diese Zuwanderung ordnen. Es war ein Notenwechsel, keine feierliche Unterzeichnung.",
       "Die Türkei hatte hohe Arbeitslosigkeit, 80 Prozent der Menschen lebten von der Landwirtschaft, und sie hoffte auf Überweisungen aus Deutschland. Außenpolitisch spielte die NATO-Mitgliedschaft eine Rolle. Die türkische Seite drängte schon im Dezember 1960, nicht hinter Griechenland zurückgesetzt zu werden.",
       "Vorgesehen war ein Rotationsprinzip: höchstens zwei Jahre, dann Austausch. Das Abkommen regelt keinen Familiennachzug. Das Wort „Gast“ im Wort „Gastarbeiter“ meinte genau das."
      ]
     },
     {
      "h": "Chronik 1961 bis 1973: Istanbul, Auswahl, Arbeit",
      "t": [
       "Die Vorauswahl fand in Istanbul statt. Die ärztliche Untersuchung erlebten viele als erniedrigend, unter anderem weil sie sich bis auf die Unterwäsche ausziehen mussten. Laut einer Zeitzeugin kamen auf jede benötigte Arbeitskraft etwa zehn Bewerber. Zeitweise standen über eine Million Ausreisewillige auf Wartelisten, mit Wartezeiten von bis zu sieben Jahren.",
       "Bis 1973 kamen rund 867.000 Menschen aus der Türkei. Etwa 80 Prozent arbeiteten im produzierenden Gewerbe und am Bau, meist als Angelernte oder Hilfsarbeiter. Etwa jeder Fünfte war eine Frau (21 Prozent laut Zentrum für Türkeistudien, andere Quellen nennen bis zu einem Drittel). Die Überweisungen in die Türkei stiegen von 8 Millionen US-Dollar (1964) auf rund 1,2 Milliarden US-Dollar (1973)."
      ]
     },
     {
      "h": "Chronik 1964 und 1973: Aus zwei Jahren wurden Jahrzehnte",
      "t": [
       "Arbeitgeber wollten die eingearbeiteten Beschäftigten behalten. Am 30. September 1964 strich ein zweites Abkommen die Zwei-Jahres-Grenze. Der Familiennachzug wurde möglich, fand aber überwiegend erst später statt.",
       "Am 23. November 1973 stoppte die Bundesregierung die Anwerbung, wegen der Energiekrise. Damit endete der Zuzug von Arbeitskräften, aber nicht die Einwanderung. Wer jetzt zurückfuhr, konnte nicht mehr ohne Weiteres wiederkommen. Viele blieben deshalb und holten die Familie nach. 53 Prozent der türkischstämmigen Einwohner kamen laut Bundeszentrale für politische Bildung über den Familiennachzug. Zwischen 1974 und 1979 verdoppelte sich die Zahl der unter 15-Jährigen aus der Türkei auf rund 420.000."
      ]
     },
     {
      "h": "Chronik 1970er und 1980er: Stopp halten, Rückkehr fördern",
      "t": [
       "Die Politik jener Jahre konzentrierte sich darauf, den Anwerbestopp zu halten und die Rückkehr zu fördern. 1983 bis 1984 galt eine Rückkehrhilfe von 10.500 D-Mark für arbeitslose Ausländer, die gezahlten Rentenbeiträge wurden erstattet. Eine aktive Integrationspolitik fehlte weitgehend. Die Bundeszentrale für politische Bildung sieht darin eine Ursache für dauerhafte Nachteile.",
       "Für die Kinder war das keine Politik, sondern Alltag. Sie kamen oft Jahre nach den Vätern, kamen in Vorbereitungsklassen und wuchsen in einem Haushalt auf, in dem alles nur „auf Zeit“ war."
      ]
     },
     {
      "h": "Chronik 1990er: Wenn Zugehörigkeit brennt",
      "t": [
       "In der Nacht zum 23. November 1992 legten Rechtsextreme in Mölln einen Brandanschlag auf von türkischen Familien bewohnte Häuser. Bahide Arslan (51), Ayşe Yilmaz (14) und Yeliz Arslan (10) starben, neun Menschen wurden verletzt. Am 29. Mai 1993 starben bei einem Brandanschlag in Solingen fünf Frauen und Mädchen der Familie Genç: Gürsün İnce (27), Hatice Genç (18), Gülüstan Öztürk (12), Hülya Genç (9) und Saime Genç (4).",
       "Für eine Generation, die gerade versuchte, in diesem Land anzukommen, waren das Daten, die sich einbrannten. Sie zeigen, was „Dazwischen“ auch heißen kann."
      ]
     },
     {
      "h": "Chronik 2000 bis 2011: Papier und Misstrauen",
      "t": [
       "Zum 1. Januar 2000 trat ein neues Staatsangehörigkeitsrecht in Kraft: Kinder ausländischer Eltern können unter bestimmten Voraussetzungen mit der Geburt Deutsche werden.",
       "Im selben Jahr, am 9. September 2000, wurde Enver Şimşek in Nürnberg erschossen. Er starb zwei Tage später. Es war der erste Mord der NSU-Serie, der bis 2007 zehn Menschen zum Opfer fielen, die meisten türkischer oder griechischer Herkunft. Die Ermittler suchten Motive im Umfeld der Familien oder im Drogenmilieu, Medien prägten das Wort „Döner-Morde“. Semiya Şimşek sagte später: „In den elf Jahren bis zur Aufklärung war mein Vater ein potenzieller Verbrecher.“ 2011 flog der NSU auf."
      ]
     },
     {
      "h": "Chronik heute: Zahlen und Ungleichheit",
      "t": [
       "Heute leben rund 3,1 Millionen Menschen mit türkischem Migrationshintergrund in Deutschland, etwa 1,7 Millionen davon mit deutscher Staatsangehörigkeit. Seit dem 27. Juni 2024 ist bei der Einbürgerung Mehrstaatigkeit zulässig: Man muss die Herkunft nicht mehr abgeben, um dazuzugehören.",
       "Zugleich bleibt Ungleichheit messbar. Im Nationalen Diskriminierungs- und Rassismusmonitor (DeZIM, Dezember 2025, 9.512 Befragte) gaben 35 Prozent der muslimischen Befragten an, wegen Diskriminierung keine Einladung zu einer Wohnungsbesichtigung erhalten zu haben, bei nicht rassistisch markierten Personen waren es 11 Prozent. In einem Feldexperiment mit identischen Bewerbungen lag die Einladungsquote bei deutsch klingenden Namen bei 22 Prozent, bei Namen aus der Region Nordafrika, Naher Osten und Türkei bei 16 Prozent. Türkeistämmige werden dort nicht gesondert ausgewiesen. Integrationsbeauftragte Natalie Pawlik sagte laut Rheinischer Post, viele türkeistämmige Menschen erlebten weiterhin Benachteiligungen bei Wohnungssuche, Bewerbungen und in der Schule."
      ]
     },
     {
      "h": "Was die Chronik nicht zeigt",
      "t": [
       "Die Chronik erzählt, was geschah: ein Abkommen, ein Stopp, der Nachzug der Familien, neue Gesetze, Anschläge. Sie erzählt nicht, was das mit den Menschen gemacht hat. Mein Großvater steht in keiner Zeitleiste. Er stand am Band, und er stand mit seinem Koffer im Bahnhof von Dortmund.",
       "Mein Großvater gab seine Jugend her für eine bessere Zukunft. Nicht für seine eigene, sondern für die seiner Kinder und Enkel. Mein Vater wuchs zwischen zwei Sprachen auf und musste früh für die Familie übersetzen. Ich frage heute, wem dieses Land gehört. Drei Männer, ein Land, drei völlig verschiedene Fragen.",
       "Diese Fragen sind kein Zufall. Jede Generation lebte in einem anderen Raum, mit eigenen Regeln: was man leisten muss, was man sagen darf, wer man sein kann. Ich nenne sie den Opferraum, den Konfliktraum und den Syntheseraum.",
       "Vorab zum Wort „Opfer“: Gemeint ist nicht die Opferrolle, sondern das Opfer, das man bringt. Die erste Generation gab ihre Jugend her, damit es ihren Kindern und Enkeln besser geht. Sie hielt sich nicht für ein Opfer, sie gab etwas. Der Opferraum ist der Raum der Hingabe.",
       "Die Räume sind meine Deutung, keine Statistik. Sie beschreiben nicht jede Familie. Mir helfen sie zu verstehen, warum drei Generationen derselben Familie so verschieden antworten."
      ]
     },
     {
      "h": "Das Modell: Drei Räume, ein Generationenprozess",
      "t": [
       "Die drei Räume gehören zusammen. Sie folgen aufeinander wie Entbehrung (Opferraum), Aushandlung (Konfliktraum) und Mitgestaltung (Syntheseraum). Jeder ist aus dem vorhergehenden hervorgegangen, keiner wäre ohne ihn denkbar.",
       "Die Kernbotschaft: Die Nachkommen der Gastarbeiter sind nicht einfach „besser integriert“. Sie handeln in einem völlig anderen Raum, mit anderen Zwängen, Möglichkeiten und Fragen.",
       "Die Räume sind keine Zeitabschnitte, sondern Lagen. Sie überlappen sich, und manche Familie lebt in allen dreien zugleich."
      ]
     },
     {
      "h": "Erster Raum, Opferraum: Arbeiten und schweigen",
      "t": [
       "Kontext: Die erste Generation kam in ein fremdes Land, nicht zur Selbstverwirklichung, sondern aus wirtschaftlicher Notwendigkeit, um die Familie zu versorgen.",
       "Lebensgefühl und Rolle: Der Alltag war von körperlich harter Arbeit, Entbehrung und oft prekären Lebensverhältnissen geprägt. Die Mehrheitsgesellschaft nahm sie vor allem als temporäre Arbeitskräfte wahr, nicht als gleichberechtigte Bürger.",
       "Haltung: Pflichtidentität. Eigene Wünsche und Gefühle wurden zurückgestellt. Dahinter stand ein stilles Versprechen an die Nachkommen: „Wir tragen heute, damit ihr morgen tragen könnt.“",
       "„Die erste Generation der türkischen Gastarbeiter kam nicht nach Deutschland, um sich zu verwirklichen. Sie kam, um zu arbeiten. [...] Migration war für sie kein Projekt der Identitätsfindung, sondern eine Entscheidung unter Bedingungen der Notwendigkeit.“",
       "„Der Begriff ‚Gastarbeiter‘ trägt diese Ambivalenz bis heute in sich. Er suggeriert Gastfreundschaft, meint aber Funktion. Er klingt nach Einladung, beschreibt jedoch Austauschbarkeit. Wer als Gast kommt, bleibt nicht. Wer arbeitet, soll funktionieren.“",
       "„Wer arbeitete, sollte funktionieren. Wer funktionierte, musste schweigen.“",
       "Dieser Raum folgt einer einfachen Logik: Wer kommt, um zu arbeiten, stellt das Eigene zurück. Arbeit ist die Quelle von Würde, und die Hoffnung wandert zu den Kindern. Daraus wurde eine Haltung, die nicht aus Ehrgeiz entstand, sondern aus Verantwortung und als stilles Versprechen weitergegeben wurde: „Wir tragen heute, damit ihr morgen tragen könnt.“ Der Opferraum ist kein Ort der Lähmung, sondern der Ursprung einer besonderen Leistungsnorm."
      ]
     },
     {
      "h": "Der Koffer",
      "t": [
       "„Mein Großvater sagte oft: ‚Ich kam mit einem Koffer, mein Sohn.‘ Lange blieb das in meinem Kopf ein schlichtes Bild: ein Mann um die dreißig, ein Koffer in der Hand. Heute, da ich selbst in diesem Alter bin, wirkt der Satz anders. Ich sehe nicht zuerst den Koffer, ich frage mich, was er in seinem Herzen trug.“",
       "„Wenn ich mir vorstelle, wie er in Dortmund ausstieg, sehe ich einen Bahnhof, der ihm nichts versprach, und eine Welt, die ihn nicht fragte, wer er war, sondern wozu er taugt.“",
       "„Der Koffer war klein, abgewetzt, schwerer, als sein Inhalt vermuten ließ. Und doch trug er mehr als Hemden und ein paar persönliche Dinge. Er trug Erwartungen. Er trug ein Rückkehrversprechen. Er trug die stille Hoffnung, dass dieses Opfer eines Tages Sinn ergeben würde, im Leben der Kinder, nicht unbedingt im eigenen.“"
      ]
     },
     {
      "h": "Zweiter Raum, Konfliktraum: Zwischen den Welten übersetzen",
      "t": [
       "Kontext: Die zweite Generation wuchs zwischen zwei Welten auf, den traditionellen Werten des Elternhauses und den Erwartungen der deutschen Gesellschaft.",
       "Lebensgefühl und Rolle: Dauerhafte Zerrissenheit, Zugehörigkeit musste ständig neu verhandelt werden. Früh übersetzten die Kinder für ihre Eltern, bei Behörden, Ärzten und in der Schule, und lernten dabei, Situationen und Machtverhältnisse genau zu lesen.",
       "Haltung: Eine ambivalente Identität. Hohe Übersetzungs- und Anpassungsfähigkeit, aber ein Dauerspannungsfeld zwischen der Loyalität zum Opfer der Eltern und dem Wunsch nach Aufstieg und Eigenständigkeit.",
       "„Viele kamen im Zuge der Familienzusammenführung erst Jahre später nach. [...] Sie lernten die Sprache der Herkunft, wuchsen in vertrauten sozialen Ordnungen auf, und kannten ihre Väter oft nur aus den Sommerferien. Manche vergaßen ihre Gesichter.“",
       "„Meine Mutter erzählte mir, dass sie bei ihrer Ankunft in Deutschland ihren Vater zunächst als einen fremden Mann wahrnahm. Er roch anders als in ihrer Vorstellung: nicht nach Sonne und Erde, sondern nach Metall, Schweiß und kaltem Zigarettenrauch.“",
       "„Mein Vater war ein sehr guter Schüler. [...] Er sollte den Geruch einer Flüssigkeit beschreiben. Auf Türkisch hätte er präzise Worte gefunden. Auf Deutsch blieb ihm nur eine ungenaue Formulierung: ‚stinkt nicht‘. Die Klasse lachte. Der Lehrer korrigierte nicht.“",
       "„Kompetenz war vorhanden, doch sie fand keinen sicheren Ausdruck.“ Später wollte der Vater eine Ausbildung beim Elektrohändler, doch der Großvater wollte Sicherheit, also ThyssenKrupp. „Mein Vater beugte sich. Nicht aus Überzeugung, sondern aus Loyalität, gegenüber dem Opfer seines Vaters.“ Jahre später sagte er dem Sohn: „Wenn wir alle nur Arbeiter werden, werden wir dem Opfer deines Opas nicht gerecht. Wenn du studierst, kann dein Sohn vielleicht einmal mehr.“",
       "Das war keine Rebellion, sondern ein leiser Dauerstress. Die zweite Generation lernte früh, zwischen Sprachen, Kulturen und Ämtern zu vermitteln. „Wer ständig vermittelt, steht selten selbst im Zentrum. Wer immer erklärt, kommt kaum dazu, sich zu fragen, was er eigentlich will.“"
      ]
     },
     {
      "h": "Dritter Raum, Syntheseraum: Aus beidem etwas Eigenes bauen",
      "t": [
       "Kontext: Die dritte Generation ist hier geboren, aufgewachsen, ausgebildet und gesellschaftlich wie beruflich verankert.",
       "Lebensgefühl und Rolle: Die Herkunftskultur ist kein Hindernis mehr, und die deutsche Gesellschaft kein fremder Raum, in den man sich erst hineinbeweisen muss. Die Einflüsse beider Welten gehören selbstverständlich zusammen.",
       "Haltung: Gestaltungsidentität. Die mehrkulturelle Prägung gilt als Ressource. An die Stelle der Frage „Wer dürfen wir sein?“ tritt die Frage „Welche Verantwortung übernehmen wir für das Gemeinwesen?“",
       "„Die dritte Generation erlebt die Herkunftskultur nicht mehr primär als Verpflichtung oder Einschränkung, sondern als Ressource. Zugleich erlebt sie die deutsche Mehrheitsgesellschaft nicht als fremden Raum, in den man sich erst hineinbeweisen muss, sondern als selbstverständlichen sozialen Rahmen, als Heimat, die nicht nur bewohnt, sondern mitgestaltet werden darf. Sie navigiert nicht mehr zwischen Identitäten, sondern mit Identitäten.“",
       "Die dritte Generation erbt von der ersten den Antrieb, etwas zu leisten, und von der zweiten die Erfahrung, zwischen den Welten zu stehen. Daraus kann etwas Eigenes entstehen: Herkunft und Zugehörigkeit stehen nicht mehr gegeneinander. „Der Syntheseraum ist kein harmonischer Ort. Er ist ein Arbeitsraum. Aber er ist handlungsfähig.“",
       "Das Modell ist eine Deutung, keine Statistik. Es beansprucht nicht, jede Familie zu beschreiben, und nicht jeder Angehörige der dritten Generation nutzt diesen Raum."
      ]
     },
     {
      "h": "Unsere Einordnung",
      "t": [
       "Belegt ist: Das Abkommen war als befristete Lösung gedacht und wurde schon 1964 auf Wunsch der Arbeitgeber geöffnet. Der Anwerbestopp von 1973 beendete den Zuzug, aber nicht die Einwanderung. Strittig ist, wie viel Integrationspolitik damals fehlte und wie viel heute gelingt: Die Bundeszentrale für politische Bildung sieht langfristige Nachteile durch frühe Versäumnisse, die Integrationsbeauftragte sagt, Integrationspolitik habe aus Fehlern gelernt, und fordert dauerhaft finanzierte Strukturen.",
       "Das Drei-Räume-Modell ist eine Deutung. Es hilft, Erfahrungen zu ordnen: Warum Eltern Sicherheit über Wünsche stellten, warum Kinder übersetzten und warum Enkel anders sprechen. Es ersetzt keine Zahlen und keine Einzelschicksale. Und doch fasst es zusammen, was Frisch 1965 in einem Satz sagte. Wer Menschen als Arbeitskräfte holt, bekommt Bürger. Das Grundgesetz kennt diese Unterscheidung nicht."
      ]
     },
     {
      "h": "Zum Schluss: Almancı",
      "t": [
       "„Jahrzehnte später stand ich in den staubigen Straßen seines Heimatviertels in der Türkei. Mein Großvater war verstorben, nicht in der Fremde, nicht in einem sterilen Krankenhausbett in Deutschland, sondern hier, wo seine Reise begonnen hatte. [...] Er war angekommen, bevor er ging.“",
       "„Dann zerriss die Sela die Stille. Die Lautsprecher knackten, und die Stimme des Imams verkündete seinen Tod. ‚Almancı Mustafa Bozkurt vefat etmiştir.‘ Dieses Wort traf mich härter, als ich es erwartet hätte. Almancı. Der Deutsche.“",
       "„In Deutschland war er für viele nie deutsch genug gewesen, ein Gast, der zu lange blieb. Und hier, in der Türkei, war er zu deutsch geworden, um einfach nur Mustafa zu sein. In einem einzigen Wort schloss sich der Kreis: Der Mann, der mit einem Koffer kam, wurde bis zuletzt über sein Dazwischen benannt.“",
       "„Der Koffer war nie nur Gepäck. Er war Symbol. Für das Provisorische, das dauerhaft wurde.“"
      ]
     },
     {
      "h": "Mein Wort: Doytsch, mit Y",
      "t": [
       "Drei Räume, drei Wörter für einen Menschen wie meinen Großvater. Im Opferraum hieß er Gastarbeiter, ein Wort über seine Funktion. Im Konfliktraum hieß er Almancı, ein Wort über sein Dazwischen. Ich suche ein drittes Wort, eines, das man sich selbst gibt.",
       "Mein Großvater sprach „deutsch“ als „Doytsch“ aus. Ich schreibe es so, mit y. Für mich ist die dritte Generation irgendwo auch die Generation Y, und ein Y kann man auch „Why“ lesen: Ich frage. Warum sind wir hier? Wem gehört dieses Land? Wer darf sagen, wer deutsch ist?",
       "Das Y hat zwei Arme, die in einem Strich zusammenlaufen. So verstehe ich mich: zwei Herkünfte, eine Linie.",
       "Mein Großvater wurde bis zuletzt „Almancı“ genannt. Ich sage Doytsch: nicht weniger deutsch, sondern deutsch mit der Stimme meines Großvaters. Das ist mein Wort. Es muss nicht deins sein.",
       "Wie nennst du dich: Almancı, Deutsch, Doytsch, oder ganz anders? Schreib es uns."
      ]
     }
    ],
    "quellen": [
     {
      "titel": "ZDFheute, 20.10.2026: 65 Jahre Türkei-Anwerbeabkommen",
      "url": "https://www.zdfheute.de/politik/deutschland/tuerkei-anwerbeabkommen-65-jahre-gastarbeiter-deutschland-100.html"
     },
     {
      "titel": "Landeszentrale für politische Bildung Baden-Württemberg: Anwerbeabkommen Türkei",
      "url": "https://www.lpb-bw.de/anwerbeabkommen-tuerkei"
     },
     {
      "titel": "Bundeszentrale für politische Bildung: Deutsch-türkisches Anwerbeabkommen",
      "url": "https://www.bpb.de/kurz-knapp/taegliche-dosis-politik/514810/deutsch-tuerkisches-anwerbeabkommen"
     },
     {
      "titel": "Bundeszentrale für politische Bildung (Stefan Luft, 2014): Die Anwerbung türkischer Arbeitnehmer und ihre Folgen",
      "url": "https://www.bpb.de/themen/europa/tuerkei/184981/die-anwerbung-tuerkischer-arbeitnehmer-und-ihre-folgen/"
     },
     {
      "titel": "Bundeszentrale für politische Bildung, Dossier „1961: Anwerbeabkommen mit der Türkei“",
      "url": "https://www.bpb.de/themen/migration-integration/anwerbeabkommen/"
     },
     {
      "titel": "bpb: Abkommenstext „Regelung der Vermittlung türkischer Arbeitnehmer“ (Art. 7 bis 12)",
      "url": "https://www.bpb.de/themen/migration-integration/anwerbeabkommen/43264/regelung-der-vermittlung-tuerkischer-arbeitnehmer-nach-der-bundesrepublik-deutschland/"
     },
     {
      "titel": "bpb: Anwerbestopp 1973 (Schreiben von Arbeitsminister Arendt, 23.11.1973)",
      "url": "https://www.bpb.de/themen/migration-integration/anwerbeabkommen/43270/anwerbestopp-1973/"
     },
     {
      "titel": "Virtuelles Migrationsmuseum: Rückkehrhilfe (Glossar)",
      "url": "https://virtuelles-migrationsmuseum.org/en/Glossar/repatriation-grant/"
     },
     {
      "titel": "Bundeszentrale für politische Bildung: 29. Mai 1993, Brandanschlag in Solingen",
      "url": "https://www.bpb.de/kurz-knapp/hintergrund-aktuell/161980/29-mai-1993-brandanschlag-in-solingen/"
     },
     {
      "titel": "Bundeszentrale für politische Bildung: Vor 30 Jahren, Brandanschlag in Mölln",
      "url": "https://www.bpb.de/kurz-knapp/hintergrund-aktuell/515451/vor-30-jahren-rechtsextremer-brandanschlag-in-moelln/"
     },
     {
      "titel": "asyl.net: Staatsangehörigkeit (Reform 2000 und 2024)",
      "url": "https://www.asyl.net/themen/staatsangehoerigkeit-und-einbuergerung/staatsangehoerigkeit"
     },
     {
      "titel": "Jüdische Allgemeine: 25 Jahre nach dem ersten NSU-Mordanschlag",
      "url": "https://www.juedische-allgemeine.de/politik/der-schmerz-wird-immer-groesser-25-jahre-nach-dem-ersten-nsu-mordanschlag/"
     },
     {
      "titel": "ad-hoc-news / Rheinische Post, 20.10.2026: Pawlik kritisiert Rassismus nach 65 Jahren",
      "url": "https://www.ad-hoc-news.de/politik/anwerbeabkommen-pawlik-kritisiert-rassismus-nach-65-jahren/70367395"
     },
     {
      "titel": "DeZIM-Institut, 8.12.2025: NaDiRa-Bericht „Gewohnt ungleich“ (Pressemitteilung)",
      "url": "https://www.rassismusmonitor.de/fileadmin/user_upload/NaDiRa/Publikationen/Wohnenbericht/PM_Nadira_Wohnbericht.pdf"
     },
     {
      "titel": "Zeitklicks: Die ersten Gastarbeiter (Frisch-Zitat, 1965)",
      "url": "https://docenti.unimc.it/d.minni/teaching/2023/29088/files/materiale-didattico-14.11.23/Die%20ersten%20Gastarbeiter%20-%20Bundesrepublik%20I%20_%20Zeitklicks.pdf"
     }
    ],
    "stand": "20.10.2026",
    "karussell": {
     "thema": "65 Jahre Anwerbeabkommen: Aus zwei Jahren wurden Jahrzehnte",
     "slides": [
      {
       "typ": "hook",
       "kicker": "Dossier · Migration und Zusammenleben",
       "titel": "65 Jahre Anwerbeabkommen: Aus zwei Jahren wurden Jahrzehnte",
       "rot": "Jahrzehnte",
       "bild": {
        "url": "titel-anwerbeabkommen.jpg",
        "fokus": 0.5,
        "unter": "Historisches Foto: Ankunft türkischer Arbeiter, Quelle wird ergänzt"
       }
      },
      {
       "typ": "fakten",
       "label": "30. Oktober 1961",
       "titel": "Ein Notenwechsel, kein Festakt.",
       "text": "Die Bundesrepublik und die Türkei vereinbarten die Vermittlung türkischer Arbeitnehmer. Vorgesehen: höchstens zwei Jahre Aufenthalt (Art. 9), keine Regelung zum Familiennachzug.",
       "quelle": "bpb (Abkommenstext, Art. 9); LpB Baden-Württemberg"
      },
      {
       "typ": "zahl",
       "label": "kamen bis 1973",
       "zahl": "867.000",
       "text": "Rund 80 Prozent arbeiteten in Industrie und am Bau. Im selben Zeitraum wurden etwa 500.000 Rückwanderungen registriert.",
       "quelle": "bpb (Stefan Luft); LpB Baden-Württemberg"
      },
      {
       "typ": "fakten",
       "label": "1964 und 1973",
       "titel": "Aus Gästen wurden Nachbarn.",
       "text": "1964 fiel die Zwei-Jahres-Grenze, auf Wunsch der Arbeitgeber. Am 23. November 1973 stoppte der Bund die Anwerbung. Danach kamen die Familien: 53 Prozent der türkischstämmigen Einwohner kamen über den Familiennachzug.",
       "quelle": "bpb, Anwerbung türkischer Arbeitnehmer und ihre Folgen"
      },
      {
       "typ": "fakten",
       "label": "Der Blick von innen",
       "titel": "Drei Generationen, drei Räume.",
       "text": "Die Chronik sagt, was geschah. Das Drei-Räume-Modell beschreibt, wie sich Identität über drei Generationen wandelt: von der Entbehrung über die Aushandlung zur Mitgestaltung. Die Enkel sind nicht einfach besser integriert, sie handeln in einem anderen Raum.",
       "quelle": "Dossier, drei Räume"
      },
      {
       "typ": "einordnung",
       "label": "Opferraum · erste Generation",
       "titel": "Arbeiten und schweigen.",
       "text": "Sie kamen aus wirtschaftlicher Notwendigkeit, nicht zur Selbstverwirklichung. Für das Land waren sie Arbeitskräfte, nicht Bürger. Eigene Wünsche wurden zurückgestellt: „Wir tragen heute, damit ihr morgen tragen könnt.“",
       "quelle": "Dossier, drei Räume"
      },
      {
       "typ": "einordnung",
       "label": "Konfliktraum · zweite Generation",
       "titel": "Zwischen den Welten.",
       "text": "Zerrissen zwischen Elternhaus und Gesellschaft. Schon als Kinder übersetzten sie bei Behörden, Ärzten und in der Schule. Das schärfte den Blick, doch Loyalität zu den Eltern und der Wunsch nach Aufstieg zogen in zwei Richtungen.",
       "quelle": "Dossier, drei Räume"
      },
      {
       "typ": "einordnung",
       "label": "Syntheseraum · dritte Generation",
       "titel": "Aus beidem etwas Eigenes.",
       "text": "Hier geboren, ausgebildet, verankert. Die Herkunft ist kein Hindernis mehr, sondern Ressource. Statt „Wer dürfen wir sein?“ lautet die Frage: Welche Verantwortung übernehmen wir für das Gemeinwesen?",
       "quelle": "Dossier, drei Räume"
      },
      {
       "typ": "meinung",
       "text": "Mein Großvater wurde bis zuletzt „Almancı“ genannt. Er sprach „deutsch“ als „Doytsch“ aus. Für mich ist die dritte Generation irgendwo auch die Generation Y, und ein Y kann man „Why“ lesen: Ich frage. Das Y hat zwei Arme, die in einem Strich zusammenlaufen. Zwei Herkünfte, eine Linie. Das ist mein Wort: Doytsch."
      },
      {
       "typ": "cta",
       "frage": "Wie nennst du dich: Almancı, Deutsch, Doytsch, oder ganz anders?"
      }
     ]
    },
    "bild": {
     "src": "titel-anwerbeabkommen.jpg",
     "w": 1920,
     "h": 1046,
     "alt": "Schwarz-Weiß-Foto: Türkische Arbeiter in Anzügen und Mänteln stehen nachts vor einem Flugzeug, im Hintergrund steigen weitere Männer die Treppe herunter.",
     "unter": "Historisches Foto: Ankunft türkischer Arbeiter, Quelle wird ergänzt."
    }
   }
  ],
  "motiv": "koffer"
 }
];
