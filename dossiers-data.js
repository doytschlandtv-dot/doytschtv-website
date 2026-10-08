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
       "rot": "Annexion"
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
 }
];
