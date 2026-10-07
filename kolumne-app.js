/* Zeigt veröffentlichte Kolumnen auf der Seite "Meinungen". Ohne Kolumnen bleiben die Beispiele sichtbar. */
(function () {
  "use strict";
  var host = document.getElementById("kolumnen");
  var list = (window.KOLUMNEN || []).slice().sort(function (a, b) { return a.datum < b.datum ? 1 : -1; });
  if (!host || !list.length) return;
  function el(t, c, x) { var n = document.createElement(t); if (c) n.className = c; if (x != null) n.textContent = x; return n; }
  var ex = document.getElementById("beispiele"); if (ex) ex.hidden = true;
  list.forEach(function (k, i) {
    var a = el("article", "kol"); a.id = "k-" + k.datum;
    var d = new Date(k.datum + "T12:00:00").toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Berlin" });
    a.appendChild(el("p", "k", "Kolumne der Redaktion · Meinung · " + d));
    a.appendChild(el("h2", null, k.titel));
    if (k.audio) {
      var w = el("div", "b-audio"), au = document.createElement("audio");
      au.controls = true; au.preload = "none"; au.src = k.audio; au.setAttribute("aria-label", "Kolumne anhören");
      w.appendChild(au);
      w.appendChild(el("p", "b-ki", "Hinweis: Diese Stimme ist KI-generiert (nach der Stimme von Cengiz Bozkurt)."));
      a.appendChild(w);
    }
    (k.text || []).forEach(function (t) { a.appendChild(el("p", null, t)); });
    a.appendChild(el("p", "b-ki", "Dies ist eine Meinung der Redaktion und keine Nachricht."));
    var q = k.quellen || [];
    if (q.length) {
      var det = el("details", "b-quellen"); det.appendChild(el("summary", null, "Quellen (" + q.length + ")"));
      var ul = el("ul");
      q.forEach(function (s) {
        var li = el("li");
        if (s.url) { var l = el("a", null, s.titel); l.href = s.url; l.target = "_blank"; l.rel = "noopener"; li.appendChild(l); } else li.textContent = s.titel;
        ul.appendChild(li);
      });
      det.appendChild(ul); a.appendChild(det);
    }
    host.appendChild(a);
  });
})();
