/* Startseite: wischbare Schlagzeilen-Karten ("Heute im Blick") und Ticker. Liest briefings.js, kolumnen.js, erklaert-data.js,
   aktualisiert sich also bei jedem neuen Karussell von selbst. tools/prerender.py schreibt dieselben Inhalte fest ins HTML. */
(function () {
  "use strict";
  var rail = document.getElementById("heute-liste"), head = document.getElementById("heute-datum"), tk = document.getElementById("tk-t");
  var B = (window.BRIEFINGS || []).slice().sort(function (a, b) { return a.datum < b.datum ? 1 : -1; });
  if (!B.length) return;
  var day = B[0], items = [];
  (day.karussells || []).forEach(function (k) {
    var h = (k.slides || [])[0] || {}, b = h.bild || null;
    items.push({ k: "Nachrichten", t: k.thema, h: "nachrichten.html", img: b && b.url, y: b && b.fokus, u: b && b.unter });
  });
  if (day.morgen) {
    var th = day.morgen.themen || [];
    items.push({ k: "Morning Briefing" + (day.morgen.dauer ? " · " + day.morgen.dauer : ""), t: th.length ? th[0] + (th.length > 1 ? " und " + (th.length - 1) + " weitere Themen" : "") : "Heute im Überblick", h: "briefing.html#" + day.datum });
  }
  var K = (window.KOLUMNEN || []).slice().sort(function (a, b) { return a.datum < b.datum ? 1 : -1; })[0];
  if (K) items.push({ k: "Kolumne · " + K.thema, t: K.titel, h: "meinungen.html#" + K.datum, img: K.bild && K.bild.src, u: K.bild && K.bild.unter });
  var E = window.ERKLAERT || [], e = E[E.length - 1];
  if (e) items.push({ k: "Erklärt", t: e.titel, h: "erklaert.html#" + e.id });
  function n(t, c, x) { var o = document.createElement(t); if (c) o.className = c; if (x != null) o.textContent = x; return o; }
  if (rail) {
    rail.textContent = "";
    items.forEach(function (it) {
      var a = n("a", "hc" + (it.img ? " has-img" : "")); a.href = it.h;
      if (it.img) { var im = n("img"); im.src = it.img; im.alt = ""; im.loading = "lazy"; if (typeof it.y === "number") im.style.objectPosition = "50% " + Math.round(it.y * 100) + "%"; a.appendChild(im); }
      var tx = n("span", "hc-t"); tx.appendChild(n("span", "k", it.k)); tx.appendChild(n("strong", null, it.t)); if (it.u) tx.appendChild(n("small", null, it.u));
      a.appendChild(tx); rail.appendChild(a);
    });
  }
  if (head) head.textContent = new Date(day.datum + "T12:00:00").toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Berlin" });
  if (tk) {
    tk.textContent = "";
    [0, 1].forEach(function (c) {
      var g = n("span", "tk-g"); if (c) g.setAttribute("aria-hidden", "true");
      items.forEach(function (it) { var a = n("a", null, it.t); a.href = it.h; if (c) a.tabIndex = -1; g.appendChild(a); });
      tk.appendChild(g);
    });
    var w = tk.scrollWidth / 2; tk.style.animationDuration = Math.max(30, Math.round(w / 55)) + "s"; tk.classList.add("run");
  }
  var pv = document.getElementById("hc-prev"), nx = document.getElementById("hc-next");
  function step(d) { rail.scrollBy({ left: d * Math.min(rail.clientWidth * 0.8, 340), behavior: "smooth" }); }
  if (pv && nx && rail) { pv.onclick = function () { step(-1); }; nx.onclick = function () { step(1); }; }
})();
