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
  "id": "islam-debatte",
  "titel": "Muslime, Verbände und Antisemitismus in der Debatte",
  "teaser": "Wir prüfen Aussagen und Zahlen in der Debatte über Islam, Verbände und Antisemitismus: wer was sagt, was belegt ist und was nur behauptet wird.",
  "methode": [
   "Wir trennen strikt: belegt, nur berichtet, offen. Aussagen geben wir wörtlich mit Datum, Ort und Quelle wieder, Positionen von Personen als deren Positionen, nicht als Tatsachen.",
   "Grundlage sind Primärquellen wie Bundestags-Drucksachen, Verfassungsschutz- und Polizeistatistiken und Studien, dazu verlässliche Medienberichte. Vorwürfe ohne Beleg übernehmen wir nicht. Es gilt die Unschuldsvermutung.",
   "Wir sprechen über Aussagen, Organisationen und Zahlen, nie über eine Religion oder Gruppe als Ganzes. Die Religion von Tätern erfasst keine amtliche Statistik, das sagen wir dazu, wo es wichtig ist."
  ],
  "folgen": [
   {
    "id": "guevercin-muslimische-szene-antisemitismus",
    "datum": "2026-10-15",
    "titel": "Eren Güvercin und „die muslimische Szene“: Was belegt ist, was nur behauptet wird und was die Zahlen zu Antisemitismus sagen",
    "teaser": "Ein Publizist kritisiert Ditib und Milli Görüş, sein Buch hatte ein Plagiatsproblem, seine Organisation bekam Bundesmittel. Dazu die Frage, wen „die muslimische Szene“ meint und wie viel Antisemitismus von wem ausgeht.",
    "aussage": {
     "zitat": "Akteure in der muslimischen Szene, die Religion als Argumentationsgrundlage missbrauchen, um Antisemitismus zu legitimieren",
     "wer": "Eren Güvercin, Publizist (laut stern-TV-Post, Ausschnitt)",
     "datum": "15.10.2026",
     "ort": "Ankündigung stern TV „Antisemitismus in Deutschland“, Instagram",
     "urteil": "Zitat belegt, Begriff „Szene“ nicht definiert"
    },
    "kern": [
     {
      "z": "Wer er ist",
      "l": "Publizist, Kritiker von Ditib und Milli Görüş, Mitgründer der Alhambra-Gesellschaft. Dass die Mehrheit der Muslime ihn kontrovers sieht, ist nicht belegt."
     },
     {
      "z": "Geld",
      "l": "Bundesförderung für zwei Alhambra-Projekte 2023: zusammen 266.599,35 € (Drucksache 20/9273). Andere Jahre und Spenden sind offen."
     },
     {
      "z": "Plagiat",
      "l": "Sein Ditib-Buch (C. H. Beck, 2025) wurde nach Plagiatshinweisen vorläufig nicht mehr ausgeliefert. Anonyme weitere Vorwürfe sind unbelegt."
     },
     {
      "z": "„Szene“",
      "l": "Kein Statistikbegriff. 38 % der Muslime fühlen sich von mindestens einem Verband vertreten (BAMF). Islamistisches Personenpotenzial 2024: 28.280."
     },
     {
      "z": "Antisemitismus",
      "l": "2024: 6.236 Straftaten, 48,4 % „rechts“, 31,1 % „ausländische Ideologie“. Die Religion der Täter erfasst keine Statistik."
     },
     {
      "z": "„Importiert“?",
      "l": "Die Forschung lehnt den Begriff ab: ein deutsches Problem mit langer Geschichte, israelbezogene Formen sind in Teilen der Zuwanderung aus der Region stärker."
     },
     {
      "z": "Widersprüche?",
      "l": "Kein eindeutiger Widerspruch belegt, aber drei Spannungen: „Akteure“ vs. ganze Verbände, Staatsferne vs. eigene Bundesförderung, Experte nach Plagiatsfall."
     },
     {
      "z": "Sein Wortlaut",
      "l": "2023: Antisemitismus „sehr verbreitet“ unter Muslimen. 2026: „Akteure“. Daten (KAS 2023): 7 bis 26 % der Muslime stimmen antisemitischen Aussagen zu, Durchschnitt 2 bis 6 %."
     }
    ],
    "abschnitte": [
     {
      "h": "Vorläufiger Stand",
      "t": [
       "Dieses Dossier beruht auf einer kleinen Recherche und ist nicht abschließend. Das Buch von Güvercin ist nicht gelesen, die Förderung der Alhambra kennen wir nur für 2023, und seine Aussagen haben wir nur in einer Auswahl von 2023 bis 2026 verglichen. Bewertungen sind vorläufig."
      ]
     },
     {
      "h": "Worum es geht",
      "t": [
       "Am 15. Oktober 2026 kündigte stern TV eine Sendung zu Antisemitismus in Deutschland an. Der Gast Eren Güvercin wird im Instagram-Post der Sendung so zitiert: Es gebe „Akteure in der muslimischen Szene, die Religion als Argumentationsgrundlage missbrauchen, um Antisemitismus zu legitimieren“. Wir kennen nur diesen Ausschnitt, nicht die ganze Sendung.",
       "Daraus ergeben sich vier Fragen, die wir getrennt prüfen: Wer ist Güvercin, und was sagt er? Was weiß man über die Organisation, die er mitgegründet hat, auch über ihr Geld? Gibt es „die muslimische Szene“ überhaupt? Und wie viel Antisemitismus geht von wem aus, ist er „importiert“ oder ein deutsches Problem?",
       "So lesen Sie das Dossier: Belegt heißt, wir haben eine Primärquelle oder eine verlässliche Zweitquelle gelesen. Nur berichtet heißt, ein Medium behauptet es ohne Beleg. Offen heißt, wir konnten es nicht prüfen. Positionen Güvercins geben wir als seine Positionen wieder, nicht als Tatsachen. Es geht um Aussagen und Zahlen, nicht um ein Urteil über eine Person und nie über eine Religion."
      ]
     },
     {
      "h": "Wer Eren Güvercin ist",
      "t": [
       "Güvercin ist Publizist, 1980 in Köln geboren, laut taz-Rezension zudem Buchhändler und Jurist. 2018 war er Mitglied der 4. Deutschen Islamkonferenz. 2012 erschien sein Buch „Neo-Moslems. Porträt einer deutschen Generation“ (Herder), 2025 „Ditib und der ferngesteuerte Islam in Deutschland“ (C. H. Beck). Er schreibt unter anderem für die Jüdische Allgemeine und ist laut MuslimDebate Projektleiter von „MuslimDebate 2.0“, Beirat im Forum für offene Religionspolitik und Mitgründer der Alhambra-Gesellschaft.",
       "Sein Profil ist das eines Kritikers der großen Islamverbände aus muslimischer Perspektive. Dass er „über die Mehrheit der Muslime kontrovers“ gesehen wird, ist nach unserer Recherche nicht belegt. Belegt ist Kritik von Verbänden und einzelnen Medien. Eine Umfrage zur Haltung der Muslime zu ihm gibt es nicht, und die Daten zu den Verbänden (unten) zeigen, dass „die Verbände“ nicht für „die Muslime“ stehen."
      ]
     },
     {
      "h": "Seine Positionen (Wiedergabe)",
      "t": [
       "Zu Ditib: Laut taz und hpd (Rezensionen vom Februar 2025) lautet seine Kernthese, die Probleme der großen Verbände lägen in ihren Strukturen. Ditib sei auf Ankara ausgerichtet. Auch Islamrat, Zentralrat der Muslime, VIKZ und Milli Görüş sieht er kritisch. Er fordert eine „religionspolitische Zeitenwende“ und setzt auf einen „deutschen Islam“. Das sind seine Bewertungen, keine gerichtlich festgestellten Tatsachen.",
       "Zu Antisemitismus: Im Oktober 2023 sagte er laut Jungle World (Ausgabe 42/2023), die Verbände versagten „auf ganzer Linie“, und nannte es beschämend, dass keiner die Hamas klar als Terrororganisation benenne. Laut Berliner Zeitung (3.8.2024) sprach er im Oktober 2023 am Brandenburger Tor. Seine Linie: Muslime tragen Verantwortung, Antisemitismus in den eigenen Gemeinschaften anzusprechen.",
       "Gegenposition, soweit belegt: Am 16. Oktober 2023 verurteilten islamische Verbände in Nordrhein-Westfalen, darunter Ditib NRW, gemeinsam mit der Landesregierung die Hamas-Gräueltaten. Am 22. Dezember 2023 bekräftigte Ditib NRW in einer Zusatzerklärung das Existenzrecht Israels, ausgelöst durch öffentlich gewordene Äußerungen von Amtsträgern aus der Türkei (Pressemitteilung der Landesregierung). Das widerlegt Güvercins Aussage nicht, denn er sprach von einer klaren Benennung als Terrororganisation. Es zeigt aber, dass es Erklärungen gab. Eine vollständige Stellungnahme der Bundesverbände zu seinem Buch haben wir nicht gefunden."
      ]
     },
     {
      "h": "Alhambra-Gesellschaft: Was sie tut, woher das Geld kommt",
      "t": [
       "Die Alhambra-Gesellschaft e. V. wurde 2017 in Köln gegründet, ihr Sitz ist laut eigener Website Berlin. Sie versteht sich als Plattform für politische Bildung, Debatte und Kultur. Sie betreibt weder Moschee noch Gottesdienst. Formate sind unter anderem „Freitagsworte“, „Das Muslimische Quartett“ und „MuslimDebate 2.0“. Im Beirat saßen laut Wikipedia (Stand 2018) Engin Karahan, früher IGMG, und Murat Kayman, früher Ditib-Zentrale.",
       "Geld, belegt: Laut Antwort der Bundesregierung (Bundestags-Drucksache 20/9273 vom 13.11.2023, Anlage 1) erhielt die Gesellschaft im Förderjahr 2023 zwei Bundesförderungen: 85.276,00 € für „Das unbequeme Gespräch mit einem Muslim/einer Muslimin“ und 181.323,35 € für „MuslimDebate 2.0 – Gesellschaft gemeinsam gestalten!“, zusammen 266.599,35 €. Die Bundesregierung betont in der Antwort, die Aufnahme in die Liste sei keine Einordnung der Träger als „islamisch“.",
       "Geld, laut Eigenangabe: MuslimDebate 2.0 wird laut Alhambra-Website vom Bundesinnenministerium im Rahmen der Deutschen Islam Konferenz gefördert (Vorgängerprojekt 2020 bis 2022). Dazu kommt die Rolle als Praxispartnerin im BMBF-Verbundprojekt „D:Islam“ mit dem Berliner Institut für empirische Integrations- und Migrationsforschung (HU Berlin): drei Jahre, Gesamtförderung des Verbunds 701.481,61 €, der Anteil der Alhambra ist nicht genannt.",
       "Einordnung: Bundesförderung für politische Bildung ist öffentlich und in der Drucksache nachlesbar. Sie sagt nichts über die Inhalte aus, und wir haben keinen Hinweis auf Unregelmäßigkeiten gefunden. Dass Kritiker die Staatsnähe infrage stellen, ist berichtet, aber nicht belegt. Offen sind die übrigen Förderjahre, Spenden, Mitgliedsbeiträge, Jahresberichte und ein möglicher Eintrag im Lobbyregister. Die Summe von 2023 steht deshalb für ein Jahr, nicht für die Gesamtfinanzierung."
      ]
     },
     {
      "h": "Die Kritik an Güvercin",
      "t": [
       "Belegt: Sein Buch von 2025 wurde nach Plagiatshinweisen vom Verlag C. H. Beck vorläufig nicht mehr ausgeliefert (hpd, Ergänzung vom 3.3.2025). Laut Verlagsstatement vom 28.2.2025, wie vom Deutsch-Türkischen Journal und NEX24 zitiert, gab es eine „nicht kenntlich gemachte Übernahme von Texten Dritter“. Nach hpd stammt ein Unterkapitel von Aydın Süer, Projektleiter bei der Alhambra, und war nicht als Fremdtext gekennzeichnet. Güvercin bedauerte laut hpd, den gegenteiligen Eindruck erweckt zu haben. Das berührt die Qualität des Buches, nicht automatisch dessen Thesen.",
       "Nur berichtet: Das Deutsch-Türkische Journal zitiert anonyme Kritiker, die Vorwürfe zu seiner Vergangenheit und zu Kontakten erheben. Das Blatt legt dafür keine Belege vor, und Güvercin habe sich laut Bericht nicht geäußert. Wir geben diese Vorwürfe nicht weiter. Auch das Deutsch-Türkische Journal und NEX24 sind ihm gegenüber erkennbar kritisch eingestellt. Der Vorwurf, er sei ein „Hochstapler“, stammt aus einem Facebook-Beitrag der Journalistin Canan Topçu und ist nicht geprüft.",
       "Kritik von Verbänden: Konservative Verbände und Teile türkischsprachiger Medien kritisieren die Alhambra-Gesellschaft, einige laut Wikipedia „kritisch bis diffamierend“ (Stand 2018). Bedrohungen gegen ihn sind laut Berliner Zeitung (3.8.2024) Thema. Das ist keine Einordnung seiner Thesen, sondern ein Hinweis darauf, wie aufgeladen die Debatte ist.",
       "Seine Darstellung: Laut Jungle World (Ausgabe 2023/07, Interview mit Pascal Beck) wurde er nach der Kritik der Alhambra am AKP-Wahlkampf in deutschen Moscheen in einem türkischen Medium als „Fetö-Mitglied“ bezeichnet. Er schreibt die Kampagne Akteuren aus dem Umfeld der AKP-nahen Union Internationaler Demokraten zu und sieht darin den Versuch, Kritiker einzuschüchtern. Das ist seine Schilderung, eine Prüfung durch uns fehlt. Sie zeigt aber: Die Debatte um ihn ist von beiden Seiten aufgeladen, und anonyme Vorwürfe gegen ihn stammen teils aus Lagern, die er selbst kritisiert.",
       "Offen: Das Original-Verlagsstatement haben wir nicht gelesen, ebenso keine Äußerung Süers. Ob das Buch inzwischen neu aufgelegt oder zurückgezogen wurde, haben wir nicht geprüft."
      ]
     },
     {
      "h": "Ditib und Milli Görüş: Was belegt ist",
      "t": [
       "Ditib betreut laut The Local rund 900 Gemeinden und wird dort als von Ankara kontrolliert beschrieben. Die Bindung an die türkische Religionsbehörde Diyanet ist auch der Kern von Güvercins Kritik. 2017 ermittelte die Bundesanwaltschaft gegen Ditib-Imame wegen des Verdachts, Anhänger der Gülen-Bewegung für die Türkei ausgespäht zu haben. Am 6.12.2017 wurde das Verfahren eingestellt: Die Beweise reichten nicht, um eine Weitergabe an türkische Stellen zu belegen (The Local, 6.12.2017). Eine Einstufung von Ditib als Beobachtungsobjekt des Bundesamts für Verfassungsschutz haben wir in den geprüften Quellen nicht gefunden. 2019 bestätigte die Bundesregierung eine Prüfung nicht (Drucksache 19/8167). Ob sich der Stand seither geändert hat, haben wir nicht abschließend geprüft.",
       "Milli Görüş (IGMG): Laut Bundesregierung (Antwort vom 14.8.2025, Drucksache 21/1237) werden die regionalen IGMG-Strukturen unterschiedlich verfassungsfeindlich bewertet. Das gesamte islamistische Personenpotenzial wurde ab 2016 laut Anfrage um über 21.000 Personen niedriger angesetzt, begründet mit der Neubewertung der IGMG (2013: rund 31.000). Die Bundesregierung hält diese Neubewertung weiter für richtig. Die Bundeszentrale für politische Bildung nannte die Millî-Görüş-Bewegung 2018 unter den vom Verfassungsschutz beobachteten Organisationen.",
       "Das heißt: Güvercins Kritik an Ditib und IGMG ist eine politische Bewertung, die sich auf Strukturen und Bindungen stützt. Gerichte oder Verfassungsschutz haben sie in dieser Form nach unseren Quellen nicht bestätigt, aber auch nicht widerlegt."
      ]
     },
     {
      "h": "Gibt es „die muslimische Szene“?",
      "t": [
       "Als statistischer Begriff nein. Die Studie „Muslimisches Leben in Deutschland 2020“ (BAMF, Stand 2019) zählt 5,3 bis 5,6 Millionen Muslime mit Migrationshintergrund, 6,4 bis 6,7 Prozent der Bevölkerung. Türkeistämmige sind die größte Gruppe, aber nicht mehr die absolute Mehrheit, an zweiter Stelle stehen Syrer. Die Studie erfasst Menschen mit Wurzeln in 23 muslimisch geprägten Ländern, Muslime ohne Migrationshintergrund sind darin nicht enthalten.",
       "Die Vielfalt ist groß: 82 Prozent bezeichnen sich als eher oder sehr religiös (Christen ohne Migrationshintergrund: 55 Prozent). 39 Prozent beten täglich, 25 Prozent nie. Ein Kopftuch tragen rund 5 Prozent der alevitischen und 59 Prozent der ahmadiyyischen Frauen.",
       "Organisationsgrad: 38 Prozent fühlen sich von mindestens einem von 13 abgefragten Islamverbänden ganz oder teilweise vertreten. Etwa jeder Fünfte fühlt sich von keinem vertreten, weitere 38 Prozent kennen die Verbände nicht. Bei Türkeistämmigen sagen 57 Prozent, sie seien vertreten, bei Menschen aus dem Nahen Osten 8 Prozent, und 79 Prozent von ihnen kennen keinen der Verbände. Daraus folgt: Verbandskritik ist nicht Kritik „der Muslime“, und die Verbände sprechen nicht für alle.",
       "Eine „Szene“ im Sprachgebrauch der Sicherheitsbehörden meint etwas Engeres: den Islamismus. Der Verfassungsschutzbericht 2024 nennt ein islamistisches Personenpotenzial von 28.280 und erstmals 9.540 gewaltorientierte Personen (laut Bundesregierung, Drucksache 21/1237). Grob gerechnet sind das etwa ein halbes Prozent der in der BAMF-Studie erfassten Muslime. Das ist unsere Überschlagsrechnung aus zwei Quellen mit unterschiedlichem Zuschnitt, keine amtliche Zahl.",
       "Zu Güvercins Satz: Er spricht von „Akteuren“, die Religion missbrauchen, nicht von „den Muslimen“. Das ist keine Verallgemeinerung auf alle, aber „Szene“ ist ein unscharfer Sammelbegriff, den die Sendung offenbar nicht definiert hat. Wen er konkret meint, wissen wir aus dem Ausschnitt nicht."
      ]
     },
     {
      "h": "Wie viel Antisemitismus, von wem? Die Zahlen",
      "t": [
       "Straftaten (Polizei, PMK-Statistik): 2024 zählte die Polizei 6.236 antisemitische Straftaten, der höchste Wert seit Beginn der Erfassung 2001. Davon wurden 48,4 Prozent (3.016) dem Bereich „rechts“ zugeordnet und 31,1 Prozent der „ausländischen Ideologie“ (Correctiv zu PMK 2024, vorgestellt 20.5.2025).",
       "2025 (Antworten der Bundesregierung, Drucksachen 21/2853 und 21/4063): Q1 1.362, Q2 1.729 und Q3 1.809 Straftaten (nachgemeldet, zusammen 4.900), Q4 zunächst 829 (noch ohne Nachmeldungen). Im Q4 (erste Meldung) entfielen auf „rechts“ 348 Fälle (42,0 Prozent), „ausländische Ideologie“ 295 (35,6 Prozent), „religiöse Ideologie“ 97 (11,7 Prozent), „sonstige Zuordnung“ 61 und „links“ 28. Bei den Tatverdächtigen: 375, davon 165 rechts, 151 ausländische Ideologie, 19 religiöse Ideologie. Die Prozentwerte haben wir selbst aus den Tabellen berechnet. Die Gesamtjahreszahl der amtlichen PMK 2025 konnten wir nicht abrufen.",
       "Wichtig: Diese Phänomenbereiche sind keine Religionszugehörigkeit. „Ausländische Ideologie“ umfasst auch nicht-islamische Gruppen, und das Innenministerium erfasst Staatsangehörigkeit oder Migrationshintergrund bei der Zuordnung nicht, so Correctiv. Bis 2023 wurden antisemitische Straftaten ohne klare Hinweise automatisch „rechts“ gezählt, seit 2024 landen unklare Fälle unter „sonstige Zuordnung“. Die Statistik zählt nur angezeigte Fälle beim ersten Verdacht. Eine EU-Umfrage (FRA 2023) kam zu dem Ergebnis, dass nicht einmal jede dritte Gewalttat der Polizei gemeldet wird.",
       "Vorfälle (Meldestellen, RIAS): 2025 meldeten die Stellen 8.725 Vorfälle, auch nicht strafbare. 5.902 (68 Prozent) waren israelbezogen. 807 (9 Prozent) hatten einen rechtsextremen Hintergrund, so viele wie nie seit 2020. 166 (2 Prozent) wurden einem islamischen oder islamistischen Hintergrund zugeordnet. Bei 57 Prozent blieb der politische Hintergrund unbekannt, meist weil Täter nicht identifiziert wurden (RIAS-Jahresbericht 2025). Für 2019 bis 2023 kam RIAS auf 13.654 Vorfälle, davon 17 Prozent rechtsextrem und 2 Prozent islamisch oder islamistisch, bei 56 Prozent ohne eindeutige Zuordnung.",
       "Unser Befund zur Frage „wie viele Fälle gehen von Muslimen aus“: Eine belastbare Zahl gibt es nicht, weil keine Statistik die Religion der Täter erfasst und bei vielen Fällen der Täter unbekannt ist. Belegt ist: Rechtsextreme und Menschen aus dem Umfeld von „ausländischer“ und „religiöser Ideologie“ begehen antisemitische Taten, beide Spektren sind in den Zahlen sichtbar. Wer eine Gruppe als Hauptursache benennt, geht über die Datenlage hinaus. Die Meldestellen sind nicht repräsentativ. Die Diaspora Alliance (Studie 2025) meint, RIAS überbetone israelbezogenen Antisemitismus und unterschätze rechtsextreme Taten, RIAS weist das zurück (Correctiv)."
      ]
     },
     {
      "h": "Importiert oder deutsch? Einstellungen und Geschichte",
      "t": [
       "Einstellungen, was Studien sagen: Die Antisemitismusforscherin Sina Arnold (TU Berlin) wertete für den Mediendienst Integration Studien von 2017 bis 2022 aus (April 2023). Muslime stimmen klassisch antisemitischen Aussagen häufiger zu als die Gesamtbevölkerung, bei „sekundärem“ Antisemitismus, also etwa der Relativierung des Holocaust, ähnlich oft. Die Zustimmung ist laut der Auswertung nicht primär an die Religion gebunden, sondern hängt mit konservativ-autoritären Einstellungen zusammen. Der Soziologe Heiko Beyer (Düsseldorf) fand in einer bundesweiten Studie (2024), dass Migrationshintergrund für sich genommen keinen Einfluss hat. Entscheidend sei, wie stark der Islam fundamentalistisch gedeutet wird. Der Berlin-Monitor 2019 zeigte, dass die Zustimmung mit der Aufenthaltsdauer sinkt.",
       "Für die Gesamtbevölkerung nennt Arnold: 6 bis 7 Prozent stimmen klassisch antisemitischen Aussagen eindeutig zu, 15 bis 20 Prozent teilweise, über ein Drittel sekundärantisemitischen Aussagen, bis zu einem Fünftel israelbezogenen. Bei Menschen mit Migrationshintergrund aus Nicht-EU-Ländern, besonders Türkei und arabischen Staaten, sind die Werte beim israelbezogenen Antisemitismus höher. Eine NRW-Studie (Allensbach, 1.300 Befragte, März bis April 2024) fand in der Gesamtbevölkerung: religiös geprägten Antisemitismus bei 8 Prozent, modernen bei 24, Holocaust-Relativierung bei 19, israelbezogenen bei 14 Prozent. 47 Prozent wollen einen „Schlussstrich“ unter die NS-Vergangenheit.",
       "Zahlen zu Muslimen: Eine Studie der Konrad-Adenauer-Stiftung (Autor Dominik Hirndorf, Befragung Ende 2021 bis Frühjahr 2022, rund 5.500 Befragte ab 16 Jahren, mindestens 500 Muslime, berichtet vom epd am 25.7.2023) fand: 12 Prozent der Muslime stimmten zu, Juden seien „hinterhältig“ (Gesamtbevölkerung 4 Prozent), 26 Prozent, reiche Juden beherrschten die Welt (6 Prozent), und 7 Prozent akzeptierten Gewalt gegen Juden (2 Prozent). Das ist ein Vielfaches des Durchschnitts, aber in jeder Frage eine Minderheit. Der Religionsmonitor der Bertelsmann Stiftung (Befragung Juni und Juli 2022, 4.363 Befragte in Deutschland) zeigt für die Gesamtbevölkerung: 43 Prozent stimmten der Aussage zu, Israels Politik gegenüber den Palästinensern sei im Prinzip dasselbe wie die Verbrechen der Nazis an den Juden.",
       "Geschichte, nach Stefanie Schüler-Springorum (TU Berlin, 2020): 1946 lehnten 85 Prozent der Befragten die Rückkehr überlebender Juden nach Deutschland ab. Ein US-Bericht von 1947 stufte 18 Prozent der Deutschen als radikale und 21 Prozent als Antisemiten ein. Zwischen 1950 und 1983 sank die Zustimmung zu „besser keine Juden im Land“ von fast 40 auf 9 Prozent, die Zahl der Unentschiedenen stieg auf fast 50 Prozent, was sie als „Kommunikationslatenz“ liest. Die Mitte-Studien sahen ein geschlossen antisemitisches Weltbild bei 9,3 Prozent (2002) und 4,4 Prozent (2018), latente Zustimmung bei 20 bis 35 Prozent. Die PMK-Zahlen antisemitischer Delikte blieben zwischen 2001 und 2018 laut Correctiv etwa gleich, ein Anstieg direkt nach 2015 zeigt sich nicht.",
       "Der Begriff „importierter Antisemitismus“: Bundeskanzler Merz sprach im Juni 2025 gegenüber Fox News von einer „Art importierten Antisemitismus“. Die Forschung lehnt den Begriff ab. Arnold nennt Antisemitismus „kein Problem ‚der Anderen‘, sondern ein deutsches“, RIAS sagt, er sei „kein nach Deutschland importiertes Problem“, Beyer sagt, der Begriff verschleiere verschiedene Formen und behindere die Analyse des politisch-islamischen Antisemitismus. Das Argument ist nicht, dass es unter Zugewanderten keinen gebe. Der Antisemitismus in Deutschland hat eine eigene, lange Geschichte, und israelbezogene Formen sind in Teilen der Zuwanderung aus der Region zusätzlich stärker ausgeprägt.",
       "Und Güvercin? In den von uns geprüften Quellen finden wir keine Aussage von ihm, Antisemitismus sei „importiert“. Das stern-TV-Zitat spricht vom Missbrauch der Religion durch einzelne Akteure. Wer ihm das Narrativ „importiert“ zuschreibt, geht über das hinaus, was wir belegen können."
      ]
     },
     {
      "h": "Seine Aussagen im Lauf der Zeit (Auswahl)",
      "t": [
       "Wir haben öffentlich zugängliche Aussagen von 2023 bis 2026 gesichtet. Das ist eine Auswahl, kein vollständiges Archiv. Bezahlpflichtige Texte haben wir nicht umgangen.",
       "12.10.2023 (dpa, über die Jüdische Allgemeine): Antisemitismus und Israelfeindschaft seien „sehr verbreitet“ unter Muslimen in Deutschland. Muslime müssten sich dem selbst stellen und gegen Hass aus der eigenen Gemeinschaft eintreten. Er kritisierte, dass Verbände die Hamas in ihren Erklärungen nicht als Terrororganisation benannten und den Angriff herunterspielten, und wollte das Thema in den Regierungsgesprächen mit den Verbänden nicht länger ausgespart sehen. Junge Muslime würden durch TikTok-Influencer und Kanäle extremistischer palästinensischer Gruppen geprägt.",
       "Oktober 2023 (Jungle World 42/2023): Die Verbände versagten „auf ganzer Linie“. 26.11.2024 (Jüdische Allgemeine, Konferenz in Münster): Islamistische Influencer verbreiteten antisemitische Inhalte auf TikTok weitgehend ungehindert, die großen Verbände hätten diese Lücke gelassen und den Angriff vom 7. Oktober heruntergespielt, viele junge Muslime seien orientierungslos.",
       "4.5.2026: Güvercin machte laut Algemeiner (nicht unabhängig geprüft) auf Rednerauftritte bei den „Cultural Days“ von Ditib in Hamburg-Bergedorf aufmerksam. Von sechs angekündigten Rednern strich Ditib nach politischem Druck vier. Ditib erklärte, wer in den Gemeinden aktiv sei, dürfe nicht mit antisemitischen Positionen oder Hetze in Verbindung gebracht werden. Die Vorwürfe gegen die zwei verbliebenen Redner stützen sich auf deren Social-Media-Beiträge und auf Güvercins Angaben. Die Bundesregierung hatte Ditib im September 2025 aufgefordert, sich von Erdoğans israelfeindlicher Rhetorik zu distanzieren.",
       "15.10.2026 (stern TV): „Akteure in der muslimischen Szene“.",
       "Der Vergleich: 2023 sprach er von Antisemitismus als „sehr verbreitet“ unter Muslimen in Deutschland, 2026 von „Akteuren“, die Religion missbrauchen. Das sind zwei unterschiedliche Aussagen, die erste eine breite, die zweite eine engere. Die Daten stützen die breite nur teilweise: Zustimmung zu antisemitischen Aussagen ist unter Muslimen laut KAS-Studie deutlich häufiger als im Durchschnitt, bleibt aber in jeder abgefragten Aussage eine Minderheit, bei 7 bis 26 Prozent. „Sehr verbreitet“ ist eine Wertung ohne Zahl. Ob die engere Formulierung 2026 eine bewusste Präzisierung ist oder eine Verkürzung des Ausschnitts, wissen wir nicht. Frage an ihn: Welche Aussage gilt, und woran machst du „sehr verbreitet“ fest?",
       "Wo er Recht behält, soweit geprüft: Dass Hamas-Relativierungen und antisemitische Inhalte bei Teilen des Verbandsumfelds und im Netz vorkommen, ist mit den von ihm genannten Fällen und mit Erklärungen von Ditib NRW (Dezember 2023) und Ditib (Streichung von vier Rednern, Mai 2026) in der Tendenz gestützt. Geprüft haben wir auch seinen Satz, kein Verband benenne die Hamas klar als Terrororganisation. Nach den Berichten (epd und Jüdische Allgemeine vom 17.10.2023) verurteilten Ditib NRW, die Landesverbände des Zentralrats der Muslime, der VIKZ und die Islamische Religionsgemeinschaft NRW am 16.10.2023 die „Gräueltaten der Hamas“ „uneingeschränkt“, forderten die Freilassung der Geiseln und sprachen vom „Terror“. Das Wort „Terrororganisation“ kommt in den Berichten nicht vor. Auch die Erklärung des Koordinationsrats der Muslime (KRM) verurteilte laut Jungle World (2023/44) „Hamas-Terror“ gegen israelische Zivilisten, nannte aber nur Zivilisten und keine Soldaten. Der Zentralrat der Muslime wurde am 9.10.2023 für eine erste Erklärung kritisiert, die von einer „Gewaltspirale“ sprach (Jüdische Allgemeine, Kritik des Grünen-Politikers Danyal Bayaz). Unser Befund: Seine Aussage trifft in der Wortwahl zu, soweit die Berichte den Wortlaut wiedergeben. Es gab aber klare Verurteilungen der Hamas-Taten und des „Terrors“. Ob „Terrororganisation“ in den Originalen fehlt, haben wir nicht an den Originaltexten geprüft, nur an Berichten. Zu Islamrat und IGMG liegen uns nur Randhinweise vor, etwa ein Beitrag der IGMG-Jugend zu Saladin kurz nach dem Angriff (Jungle World 2023/44, nicht von uns geprüft)."
      ]
     },
     {
      "h": "Widerspruchsprüfung: Fünf Fragen an Güvercins Position",
      "t": [
       "Vorab: Wir prüfen, ob seine Aussagen und sein Handeln zusammenpassen. Absichten unterstellen wir nicht, und „Staatsgeld“ oder „Verlagsvertrag“ allein beweisen keine Agenda. Wo wir Spannungen sehen, stellen wir sie als Fragen. Die Fragen legen wir ihm und der Alhambra-Gesellschaft zur Stellungnahme vor, bevor etwas erscheint.",
       "1. Einzelne Akteure oder ganze Organisationen? Belegt: Im stern-TV-Zitat spricht er von „Akteuren“. Seine Buchthese richtet sich laut taz und hpd auf die Strukturen der Verbände, nicht auf deren Mitglieder. Wir haben keine Aussage von ihm gefunden, die Gemeindemitglieder unter Verdacht stellt. Die Spannung: Er beschreibt Ditib im Buchtitel als „ferngesteuert“, eine Organisation mit rund 900 Gemeinden. Das ist eine Wertung über die Institution, kann aber bei Zuhörern auf die Mitglieder abfärben. Ob er im Buch klar zwischen Zentrale, Funktionären und Gemeindemitgliedern trennt, haben wir nicht vollständig geprüft. Frage an ihn: Wo ziehst du diese Linie, und sagst du sie auch in Talkshows?",
       "2. Staatsferne fordern, Staatsgeld nehmen? Seine Kritik an Ditib lautet im Kern, der Verband sei nicht staatsunabhängig, sondern auf Ankara ausgerichtet. Die Alhambra-Gesellschaft erhielt 2023 Bundesmittel (266.599,35 €), MuslimDebate 2.0 läuft laut Eigenangabe über das Bundesinnenministerium im Rahmen der Islamkonferenz. Der Unterschied ist belegbar: Er kritisiert die Abhängigkeit von einem ausländischen Staat, die Alhambra wird vom deutschen Staat für Bildungsprojekte gefördert, offen in einer Bundestags-Drucksache. Die Spannung bleibt als Transparenzfrage: Wer sich über Förderung finanziert, ist von Antragsprogrammen und Laufzeiten abhängig. Wir haben keinen Beleg für inhaltliche Einflussnahme des Ministeriums gefunden. Frage an ihn: Nennst du bei Medienauftritten, dass dein Verein Bundesmittel erhält?",
       "3. Ist Staatsförderung ein Zeichen politischer Nähe? Der Vergleich relativiert das. Auch Ditib-Gliederungen erhielten Bundesmittel, laut Bundesregierung (Drucksache 18/12259, Auswahl, 2008 bis 2017) etwa über das Familienministerium, das BAMF und die Bundeszentrale für politische Bildung, darunter 2016 rund 688.000 € im Programm „Menschen stärken Menschen“ gemeinsam mit 22 weiteren Trägern. 2017 stoppte der Bund die Auszahlung nach der Imam-Ermittlung kurz und setzte sie fort, weil er keinen Zusammenhang sah. Laut Antwort von 2022 (Drucksache 20/4189) erhält Ditib im Bundesprogramm „Demokratie leben!“ keine Förderung. Der Bund fördert also Kritiker und Verbände. Das spricht gegen eine einseitige „Agenda“, sagt aber nichts über die Qualität einzelner Projekte.",
       "4. Praxis: Was er mit seiner Reichweite tut. Laut Jüdischer Allgemeiner (3.7.2025) machte er die Einladung eines Diyanet-Vertreters öffentlich, dem Hamas-Sympathien vorgeworfen werden, bei einem mit 250.000 € jährlich aus „Demokratie leben!“ geförderten Hamburger Verein. Der Verein sagte nach eigenen Angaben eine Veranstaltung ab und erklärte, die Informationen erst nachträglich erhalten zu haben, das Familienministerium bat um Stellungnahme. Das passt zu seiner Linie, auch Förderpraxis zu kontrollieren. Die Frage, die daraus folgt, ist die nach gleichen Maßstäben: Wer fördert, prüft er auch die Alhambra selbst mit demselben Maßstab? Dazu fehlen uns die Jahresberichte.",
       "5. Seine Forderung an Muslime. Seine Linie: Muslime tragen Verantwortung, Antisemitismus in ihren Gemeinschaften anzusprechen. Das ist eine Forderung, keine Tatsachenbehauptung. Wir stellen drei Gegenfragen. Erstens die Verhältnismäßigkeit: Wenn nach Polizeizahlen 42 bis 48 Prozent der antisemitischen Straftaten dem Bereich „rechts“ zugeordnet werden, gilt die Forderung dann auch an die Mehrheitsgesellschaft, und fordert er das? Eine entsprechende Aussage haben wir nicht gefunden, das ist kein Beleg für einen Widerspruch, aber für eine offene Frage. Zweitens die Verantwortung: Eine kollektive Pflicht für eine Religionsgemeinschaft trifft auch die vielen Muslime, die mit Antisemitismus nichts zu tun haben, was konkret von ihnen verlangt wird, bleibt offen. Drittens die Wirkung: Die Wortwahl „Szene“ kann bei Hörern den Eindruck erzeugen, ein erkennbares Milieu sei zuständig. Die Zahlen oben zeigen, dass es als Gruppe so nicht greifbar ist.",
       "Zwischenfazit: Einen eindeutigen Widerspruch können wir nach den geprüften Quellen nicht belegen. Es gibt drei Spannungen, die er beantworten sollte: der Unterschied zwischen „Akteuren“ und dem Urteil über ganze Verbände, die Kritik an Staatsnähe bei gleichzeitiger Bundesförderung des eigenen Vereins und der Anspruch als Experte nach dem Plagiatsfall. Zu Verlagen: Herder und C. H. Beck sind Publikumsverlage, ein Vertrag ist kein Beleg für politische Unterstützung, und Beck stoppte die Auslieferung nach den Plagiatshinweisen, es gab also keinen Schutz."
      ]
     },
     {
      "h": "Einordnung und was offen bleibt",
      "t": [
       "Belegt: Güvercin ist seit Jahren öffentlich als Kritiker von Ditib und anderen Verbänden aktiv, seine Alhambra-Gesellschaft hat 2023 Bundesmittel in Höhe von 266.599,35 € für zwei Projekte erhalten, und sein Buch von 2025 hatte ein dokumentiertes Plagiatsproblem. Seine Thesen zu Ditib sind eine politische Bewertung und weder bestätigt noch widerlegt.",
       "Die Datenlage zu Antisemitismus spricht gegen einfache Antworten. Beide Spektren, rechtsextrem und islamistisch bzw. auslandsbezogen, sind sichtbar, keine Statistik erfasst die Religion der Täter, die Forschung sieht Antisemitismus als gesamtgesellschaftliches Problem mit besonderen Formen in Teilen der muslimischen Bevölkerung. Wer „die muslimische Szene“ sagt, sollte sagen, wer gemeint ist, und wer „importiert“ sagt, muss die lange Geschichte in Deutschland erklären.",
       "Offen: Original-Verlagsstatement und aktueller Stand des Buches, weitere Förderjahre und Spenden der Alhambra, Lobbyregister, aktuelle Einstufung von Ditib durch den Verfassungsschutz, die amtliche PMK 2025 für das ganze Jahr und eine Aufschlüsselung der NRW-Studie nach Muslimen."
      ]
     }
    ],
    "quellen": [
     {
      "titel": "Bundestags-Drucksache 20/9273 (Bundesförderung, Anlage 1)",
      "url": "https://dserver.bundestag.de/btd/20/092/2009273.pdf"
     },
     {
      "titel": "taz: Rezension „Ditib und der ferngesteuerte Islam“, 16.2.2025",
      "url": "https://taz.de/Deutsche-Islampolitik/!6066646/"
     },
     {
      "titel": "hpd: Rezension und Ergänzung zum Plagiat, 19.2./3.3.2025",
      "url": "https://hpd.de/artikel/islamverbaende-kritik-einwaende-eren-guevercin-22857"
     },
     {
      "titel": "Deutsch-Türkisches Journal zu Güvercin",
      "url": "https://dtj-online.de/tuerkei-und-islam-experte-eren-guevercin-im-abseits/"
     },
     {
      "titel": "NEX24: Plagiatsvorwürfe, 1.3.2025",
      "url": "https://nex24.news/2025/03/plagiatsvorwuerfe-gegen-islam-experten-eren-guevercin/"
     },
     {
      "titel": "Jungle World 42/2023: Interview mit Güvercin",
      "url": "https://jungle.world/print/pdf/node/82241"
     },
     {
      "titel": "Berliner Zeitung, 3.8.2024: Interview mit Güvercin",
      "url": "https://www.berliner-zeitung.de/article/islamismus-experte-guevercin-linke-aktivisten-antimuslimischen-rassismus-2239812"
     },
     {
      "titel": "Alhambra-Gesellschaft (Wikipedia)",
      "url": "https://de.wikipedia.org/wiki/Alhambra-Gesellschaft"
     },
     {
      "titel": "Alhambra-Gesellschaft zu MuslimDebate 2.0, 2024",
      "url": "https://alhambra-gesellschaft.de/2024/08/muslimdebate-2-0-engagement-fuer-eine-demokratische-politische-kultur/"
     },
     {
      "titel": "Alhambra-Gesellschaft zu D:Islam, 2021",
      "url": "https://alhambra-gesellschaft.de/2021/03/die-alhambra-gesellschaft-ist-praxispartnerin-beim-neuen-bim-projekt/"
     },
     {
      "titel": "MuslimDebate: Profil Güvercin",
      "url": "https://muslimdebate.de/team/eren-guevercin-projektleiter/"
     },
     {
      "titel": "Land NRW: Ditib NRW zu Existenzrecht Israels, 22.12.2023",
      "url": "https://www.land.nrw/pressemitteilung/ditib-nrw-bekennt-sich-zu-existenzrecht-israels-und-schutz-der-juden-nordrhein"
     },
     {
      "titel": "The Local: Bundesanwaltschaft stellt Imam-Verfahren ein, 6.12.2017",
      "url": "https://www.thelocal.de/20171206/federal-prosecutors-drop-turkish-imam-spying-probe-over-insufficient-evidence"
     },
     {
      "titel": "Bundestags-Drucksache 19/8167 (Antwort zu Ditib, 2019)",
      "url": "https://dserver.bundestag.de/btd/19/081/1908167.pdf"
     },
     {
      "titel": "Bundestags-Drucksache 21/1237 (Antwort zum Verfassungsschutzbericht 2024)",
      "url": "https://dserver.bundestag.de/btd/21/012/2101237.pdf"
     },
     {
      "titel": "bpb: Islamismus im Staatsdienst, 2018",
      "url": "https://www.bpb.de/politik/extremismus/islamismus/277036/islamismus-im-staatsdienst"
     },
     {
      "titel": "BAMF: Muslimisches Leben in Deutschland 2020",
      "url": "https://bamf.de/SharedDocs/Anlagen/DE/Forschung/Forschungsberichte/fb38-muslimisches-leben.pdf?__blob=publicationFile&v=15"
     },
     {
      "titel": "Correctiv: Importierter Antisemitismus, 3.7.2025",
      "url": "https://correctiv.org/faktencheck/hintergrund/2025/07/03/importierter-antisemitismus-warum-fachleute-merz-widersprechen/"
     },
     {
      "titel": "Jüdische Allgemeine: PMK 2024, 20.5.2025",
      "url": "https://www.juedische-allgemeine.de/politik/treiber-israelhass-politisch-motivierte-kriminalitaet-massiv-gestiegen/"
     },
     {
      "titel": "Bundestags-Drucksache 21/2853 (antisemitische Straftaten Q3 2025)",
      "url": "https://dserver.bundestag.de/btd/21/028/2102853.pdf"
     },
     {
      "titel": "Bundestags-Drucksache 21/4063 (antisemitische Straftaten Q4 2025)",
      "url": "https://dserver.bundestag.de/btd/21/040/2104063.pdf"
     },
     {
      "titel": "RIAS Bundesverband: Jahresbericht 2025",
      "url": "https://report-antisemitism.de/documents/17-06-26_RIAS_Bund_Jahresbericht_2025.pdf"
     },
     {
      "titel": "ZDFheute zur RIAS-Studie Rechtsextremismus und Antisemitismus, 11.12.2024",
      "url": "https://www.zdfheute.de/politik/deutschland/antisemitismus-vorfaelle-rias-studie-rechtsextremismus-100.html"
     },
     {
      "titel": "Sonntagsblatt: Mediendienst-Expertise (Arnold u. a.), 22.4.2023",
      "url": "https://www.sonntagsblatt.de/artikel/gesellschaft/religion-keine-ursache-studie-entlarvt-narrativ-vom-importierten"
     },
     {
      "titel": "Land NRW: Antisemitismus-Studie NRW, 24.9.2024",
      "url": "https://www.land.nrw/pressemitteilung/antisemitismus-nordrhein-westfalen-studie-zeigt-grosse-verbreitung-und-hohe"
     },
     {
      "titel": "bpb/APuZ: Schüler-Springorum, Antisemitismus und Antisemitismusforschung, 19.6.2020",
      "url": "https://www.bpb.de/shop/zeitschriften/apuz/311625/antisemitismus-und-antisemitismusforschung-ein-ueberblick/"
     },
     {
      "titel": "Bundestags-Drucksache 18/12259 (Bundesförderung Ditib, 8.5.2017)",
      "url": "https://dserver.bundestag.de/btd/18/122/1812259.pdf"
     },
     {
      "titel": "Bundestags-Drucksache 20/4189 (Demokratie leben!, 25.10.2022)",
      "url": "https://dserver.bundestag.de/btd/20/041/2004189.pdf"
     },
     {
      "titel": "Jüdische Allgemeine: Hamas-Anhänger bei staatlich gefördertem Verein, 3.7.2025",
      "url": "https://www.juedische-allgemeine.de/politik/hamas-anhaenger-tritt-bei-staatlich-gefoerdertem-verein-auf/"
     },
     {
      "titel": "Jungle World 2023/07: Interview mit Güvercin zur Kampagne gegen die Alhambra",
      "url": "https://shop.jungle.world/print/pdf/node/78911"
     },
     {
      "titel": "Jüdische Allgemeine (dpa): Islamexperte, pro-palästinensische Demonstrationen werden zunehmen, 12.10.2023",
      "url": "https://www.juedische-allgemeine.de/politik/islamexperte-pro-palaestinensische-demonstrationen-werden-zunehmen"
     },
     {
      "titel": "Jüdische Allgemeine: Was Experten zur antisemitischen Radikalisierung bei TikTok sagen, 26.11.2024",
      "url": "https://www.juedische-allgemeine.de/kultur/was-experten-zur-antisemitischen-radikalisierung-bei-tiktok-sagen"
     },
     {
      "titel": "Algemeiner: Ditib „Cultural Days“ Hamburg, 4.5.2026",
      "url": "https://www.algemeiner.com/2026/05/04/germanys-main-mosque-network-under-fire-speakers-accused-antisemitic-incitement/"
     },
     {
      "titel": "Jüdische Allgemeine (epd): KAS-Studie, Antisemitismus weiter verbreitet als im Bevölkerungsschnitt, 25.7.2023",
      "url": "https://www.juedische-allgemeine.de/politik/studie-antisemitismus-deutlich-weiter-verbreitet-als-im-bevoelkerungsschnitt"
     },
     {
      "titel": "Bertelsmann Stiftung, Religionsmonitor: Antisemitismus und Rassismus, 12/2023",
      "url": "https://www.bertelsmann-stiftung.de/de/unsere-projekte/religionsmonitor/projektnachrichten/antisemitismus-und-rassismus-der-nahost-krieg-offenbart-risse-in-der-deutschen-gesellschaft"
     },
     {
      "titel": "Jüdische Allgemeine: Islam-Verbände dulden keinen Zuspruch für Hamas-Terror, 17.10.2023",
      "url": "https://www.juedische-allgemeine.de/politik/islam-verbaende-dulden-keinen-zuspruch-fuer-hamas-terror/"
     },
     {
      "titel": "epd/evangelisch.de: Islam-Verbände dulden keinen Zuspruch für Hamas-Terror, 17.10.2023",
      "url": "https://www.evangelisch.de/inhalte/222076/17-10-2023/islam-verbaende-dulden-keinen-zuspruch-fuer-hamas-terror"
     },
     {
      "titel": "Jüdische Allgemeine: Finanzminister kritisiert Zentralrat der Muslime, 9.10.2023",
      "url": "https://www.juedische-allgemeine.de/politik/ihr-seid-lost-finanzminister-kritisiert-zentralrat-der-muslime-wegen-reaktion-auf-terror-in-israel/"
     },
     {
      "titel": "Jungle World 2023/44: Fischer zu Verbänden und Hamas-Erklärungen",
      "url": "https://jungle.world/print/pdf/node/82465"
     }
    ],
    "stand": "15.10.2026",
    "bild": {
     "src": "dossier-guevercin.jpg",
     "w": 1200,
     "h": 896,
     "alt": "KI-generierte Illustration im Schwarz-Weiß-Comicstil: ein Mann mit Brille und Bart am Rednerpult mit dem Zitat aus der Sendung, links eine Moschee, rechts eine Waage mit „Verbände“ und „Förderung“ und einem Fragezeichen",
     "unter": "Illustration, KI-generiert, kein Foto."
    },
    "karussell": {
     "thema": "Güvercin, „muslimische Szene“ und Antisemitismus",
     "slides": [
      {
       "typ": "hook",
       "kicker": "Dossier",
       "titel": "Wen meint „die muslimische Szene“? Was Eren Güvercin sagt, was belegt ist und was die Zahlen zeigen.",
       "rot": "muslimische Szene",
       "bild": {
        "url": "dossier-guevercin.jpg",
        "karte": true,
        "unter": "Illustration, KI-generiert, kein Foto."
       }
      },
      {
       "typ": "zahl",
       "zahl": "38 %",
       "label": "fühlen sich von einem Islamverband vertreten",
       "text": "Weitere 38 Prozent kennen die Verbände nicht. „Die Verbände“ sprechen nicht für „die Muslime“. Güvercin sprach bei stern TV von „Akteuren“, nicht von allen. Das islamistische Personenpotenzial lag 2024 bei 28.280 Personen.",
       "quelle": "BAMF, Muslimisches Leben in Deutschland 2020; Drucksache 21/1237"
      },
      {
       "typ": "zahl",
       "zahl": "48,4 %",
       "label": "antisemitische Straftaten 2024: „rechts“",
       "text": "Insgesamt 6.236, so viele wie nie seit 2001. 31,1 Prozent wurden „ausländischer Ideologie“ zugeordnet. Die Religion der Täter erfasst keine Statistik, bei vielen Fällen ist der Täter unbekannt.",
       "quelle": "PMK 2024, nach Correctiv, 20.5.2025"
      },
      {
       "typ": "vergleich",
       "labelA": "Seine Aussage 2023",
       "behauptung": "Antisemitismus und Israelfeindschaft seien „sehr verbreitet“ unter Muslimen in Deutschland.",
       "labelB": "Was Umfragen zeigen",
       "fakt": "7 bis 26 Prozent der Muslime stimmen antisemitischen Aussagen zu, im Durchschnitt 2 bis 6 Prozent. Deutlich häufiger, aber jeweils eine Minderheit.",
       "quelle": "dpa, 12.10.2023; KAS-Studie, epd, 25.7.2023"
      },
      {
       "typ": "einordnung",
       "label": "Importiert?",
       "titel": "Ein deutsches Problem mit langer Geschichte",
       "text": "1946 lehnten 85 Prozent der Befragten die Rückkehr überlebender Juden ab. 2022 stimmten 43 Prozent zu, Israels Politik sei im Prinzip dasselbe wie die Verbrechen der Nazis. Die Forschung lehnt „importiert“ ab. Israelbezogene Formen sind in Teilen der Zuwanderung aus der Region stärker.",
       "quelle": "Schüler-Springorum, bpb 2020; Religionsmonitor 2023; Mediendienst 2023"
      },
      {
       "typ": "einordnung",
       "label": "Die Gegenfrage",
       "titel": "Staatsferne fordern, Bundesmittel erhalten?",
       "text": "Güvercin kritisiert Ditib als staatsabhängig. Seine Alhambra-Gesellschaft erhielt 2023 Bundesmittel von 266.599,35 €, offen in einer Drucksache. Auch Ditib-Gliederungen erhielten Bundesmittel. Die Frage an ihn: Nennt er das bei Auftritten?",
       "quelle": "Drucksachen 20/9273 und 18/12259"
      },
      {
       "typ": "meinung",
       "text": "Uns geht es um die Sache, nicht um Personen. Wer „Szene“ sagt, sollte sagen, wer gemeint ist. Was belegt ist, zeigen die Quellen.",
       "handlung": "Das ganze Dossier mit allen Quellen: doytschtv.de/dossiers"
      },
      {
       "typ": "cta",
       "frage": "Wie viel Verantwortung tragen Gemeinschaften für Antisemitismus in ihren Reihen, und wer ist „die Gemeinschaft“?"
      }
     ],
     "caption": "Bei stern TV sprach Eren Güvercin von „Akteuren in der muslimischen Szene“, die Religion missbrauchen, um Antisemitismus zu legitimieren. Wir haben geprüft: Nur 38 Prozent der Muslime fühlen sich von einem Verband vertreten. 2024 wurden 48,4 Prozent der antisemitischen Straftaten dem Bereich „rechts“ zugeordnet. Die Religion der Täter erfasst keine Statistik. Umfragen zeigen unter Muslimen deutlich mehr Zustimmung zu antisemitischen Aussagen als im Durchschnitt, aber jeweils eine Minderheit. Die Forschung nennt Antisemitismus ein deutsches Problem. Uns geht es um die Sache, nicht um Personen. Alle Quellen im Dossier auf doytschtv.de. Wie viel Verantwortung tragen Gemeinschaften, und wer ist „die Gemeinschaft“?",
     "hashtags": "#doytschlandtv #antisemitismus #muslime #islam #ditib #faktencheck #dossier #einordnung #politik #zusammenhalt"
    }
   }
  ],
  "motiv": "pruefung"
 }
];
