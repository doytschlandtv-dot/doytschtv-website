/* Startseite: Block "Heute im Blick". Liest die Schlagzeilen aus briefings.js, kolumnen.js und erklaert-data.js,
   damit er sich bei jedem neuen Karussell von selbst aktualisiert. tools/prerender.py schreibt dieselben Zeilen fest ins HTML. */
(function () {
  "use strict";
  var host = document.getElementById("heute-liste"), head = document.getElementById("heute-datum");
  var B = (window.BRIEFINGS || []).slice().sort(function (a, b) { return a.datum < b.datum ? 1 : -1; });
  if (!host || !B.length) return;
  var day = B[0], items = [];
  (day.karussells || []).forEach(function (k) { items.push(["Nachrichten", k.thema, "nachrichten.html"]); });
  if (day.morgen) items.push(["Morning Briefing" + (day.morgen.dauer ? " · " + day.morgen.dauer : ""), (function (t) { return t.length ? t[0] + (t.length > 1 ? " und " + (t.length - 1) + " weitere Themen" : "") : ""; })(day.morgen.themen || []), "briefing.html#" + day.datum]);
  var K = (window.KOLUMNEN || []).slice().sort(function (a, b) { return a.datum < b.datum ? 1 : -1; })[0];
  if (K) items.push(["Kolumne · " + K.thema, K.titel, "meinungen.html#" + K.datum]);
  var E = window.ERKLAERT || [], e = E[E.length - 1];
  if (e) items.push(["Erklärt", e.titel, "erklaert.html#" + e.id]);
  host.textContent = "";
  items.forEach(function (it) {
    var a = document.createElement("a"); a.className = "hl"; a.href = it[2];
    var k = document.createElement("span"); k.className = "k"; k.textContent = it[0];
    var s = document.createElement("strong"); s.textContent = it[1];
    a.appendChild(k); a.appendChild(s); host.appendChild(a);
  });
  if (head) head.textContent = new Date(day.datum + "T12:00:00").toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Berlin" });
})();
