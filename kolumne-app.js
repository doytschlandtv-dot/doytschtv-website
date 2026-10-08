/* Seite "Meinungen": Übersicht (Hauptkolumne, Themenfilter, Karten mit Auszug) und Einzelansicht (#JJJJ-MM-TT).
   Daten: kolumnen.js. Ohne Kolumnen bleiben die Beispiele sichtbar. */
(function () {
  "use strict";
  var host = document.getElementById("kolumnen");
  var list = (window.KOLUMNEN || []).slice().sort(function (a, b) { return a.datum < b.datum ? 1 : -1; });
  if (!host || !list.length) return;
  var ex = document.getElementById("beispiele"); if (ex) ex.hidden = true;
  var head = document.querySelector(".pagehead");
  var filter = "Alle";

  function el(t, c, x) { var n = document.createElement(t); if (c) n.className = c; if (x != null) n.textContent = x; return n; }
  function dat(k) { return new Date(k.datum + "T12:00:00").toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Berlin" }); }
  function mins(k) { var n = (k.text || []).join(" ").length; return Math.max(1, Math.round(n / 1100)); }
  function thema(k) { return k.thema || "Meinung"; }
  function meta(k) { return dat(k) + " · " + mins(k) + " Min. Lesezeit"; }
  function ki() { return el("p", "b-ki", "Dies ist eine Meinung der Redaktion und keine Nachricht."); }

  function card(k, big) {
    var a = el("article", big ? "mk-card mk-big" : "mk-card");
    a.appendChild(el("p", "mk-k", thema(k) + " · Redaktion"));
    var h = el("h2"); var l = el("a", null, k.titel); l.href = "#" + k.datum; h.appendChild(l); a.appendChild(h);
    a.appendChild(el("p", "mk-teaser", k.teaser || ""));
    a.appendChild(el("p", "mk-meta", meta(k)));
    var first = (k.text || [])[0];
    var row = el("div", "mk-row");
    if (first) {
      var det = el("details", "mk-aus"); det.appendChild(el("summary", null, "Auszug"));
      det.appendChild(el("p", null, first)); a.appendChild(det);
    }
    var go = el("a", "mk-go", "Kolumne lesen ›"); go.href = "#" + k.datum; row.appendChild(go);
    a.appendChild(row);
    return a;
  }

  function overview() {
    if (head) head.hidden = false;
    host.textContent = "";
    var top = list[0], rest = list.slice(1);
    host.appendChild(el("p", "mk-label", "Aktuell"));
    host.appendChild(card(top, true));
    var themen = [];
    list.forEach(function (k) { if (themen.indexOf(thema(k)) < 0) themen.push(thema(k)); });
    if (rest.length) {
      host.appendChild(el("p", "mk-label", "Frühere Kolumnen"));
      if (themen.length > 1) {
        var chips = el("div", "b-chips");
        ["Alle"].concat(themen).forEach(function (t) {
          var c = el("button", "b-chip" + (t === filter ? " on" : ""), t); c.type = "button";
          c.onclick = function () { filter = t; overview(); }; chips.appendChild(c);
        });
        host.appendChild(chips);
      }
      var grid = el("div", "mk-grid");
      rest.filter(function (k) { return filter === "Alle" || thema(k) === filter; }).forEach(function (k) { grid.appendChild(card(k, false)); });
      host.appendChild(grid);
    } else {
      host.appendChild(el("p", "mk-soon", "Weitere Kolumnen folgen. Wir schreiben mehrmals pro Woche zu dem, was gerade zählt."));
    }
    host.appendChild(ki());
  }

  function detail(k) {
    if (head) head.hidden = true;
    host.textContent = "";
    var a = el("article", "kol");
    var back = el("a", "b-more mk-back", "‹ Alle Meinungen"); back.href = "#"; a.appendChild(back);
    a.appendChild(el("p", "b-eyebrow", thema(k) + " · Kolumne der Redaktion"));
    a.appendChild(el("h1", "mk-h1", k.titel));
    if (k.teaser) a.appendChild(el("p", "mk-lead", k.teaser));
    a.appendChild(el("p", "mk-meta", meta(k)));
    if (k.audio) {
      var w = el("div", "b-audio"), au = document.createElement("audio");
      au.controls = true; au.preload = "none"; au.src = k.audio; au.setAttribute("aria-label", "Kolumne anhören");
      w.appendChild(au);
      w.appendChild(el("p", "b-ki", "Hinweis: Diese Stimme ist KI-generiert (nach der Stimme von Cengiz Bozkurt)."));
      a.appendChild(w);
    }
    (k.text || []).forEach(function (t) {
      var m = /^(Unsere Meinung:)\s*([\s\S]*)$/.exec(t);
      if (m) { var p = el("p", "mk-op"); p.appendChild(el("strong", null, m[1] + " ")); p.appendChild(document.createTextNode(m[2])); a.appendChild(p); }
      else a.appendChild(el("p", null, t));
    });
    a.appendChild(ki());
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
    var more = list.filter(function (x) { return x !== k; }).slice(0, 2);
    if (more.length) {
      host.appendChild(el("p", "mk-label", "Weitere Meinungen"));
      var g = el("div", "mk-grid"); more.forEach(function (x) { g.appendChild(card(x, false)); }); host.appendChild(g);
    }
  }

  function route() {
    var h = (location.hash || "").replace(/^#k?-?/, "");
    var k = list.filter(function (x) { return x.datum === h; })[0];
    if (k) { detail(k); window.scrollTo(0, 0); } else overview();
  }
  window.addEventListener("hashchange", route);
  route();
})();
