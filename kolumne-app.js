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
    var row = el("div", "mk-row");
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

  function graf(g) {
    var box = el("figure", "mk-fig mk-" + g.art);
    box.appendChild(el("figcaption", "mk-ft", g.titel));
    var tot = 0, i;
    if (g.art === "rechnung") {
      var r = el("div", "mk-calc");
      g.teile.forEach(function (t, n) {
        var c = el("div", "mk-cell" + (n === 1 ? " mk-gap" : "")); c.appendChild(el("b", null, t.w)); c.appendChild(el("span", null, t.l)); r.appendChild(c);
      });
      box.appendChild(r);
    } else if (g.art === "balken") {
      var mx = Math.max.apply(null, g.werte.map(function (x) { return x.w; }));
      g.werte.forEach(function (x) {
        var row = el("div", "mk-bar"); row.appendChild(el("span", "mk-bl", x.l));
        var tr = el("div", "mk-tr"), f = el("div", "mk-fill" + (x.hl ? " hl" : "")); f.style.width = Math.round(x.w / mx * 100) + "%"; tr.appendChild(f); row.appendChild(tr);
        row.appendChild(el("span", "mk-bv", String(x.w))); box.appendChild(row);
      });
    } else if (g.art === "sitze") {
      g.werte.forEach(function (x) { tot += x.w; });
      var st = el("div", "mk-stack"), lg = el("ul", "mk-leg");
      g.werte.forEach(function (x, n) {
        var sg = el("div", "mk-seg s" + (n % 6) + (x.hl ? " hl" : "")); sg.style.flexGrow = x.w; sg.title = x.l + ": " + x.w; sg.appendChild(el("span", null, String(x.w))); st.appendChild(sg);
        var li = el("li"); li.appendChild(el("i", "s" + (n % 6) + (x.hl ? " hl" : ""))); li.appendChild(document.createTextNode(x.l + " " + x.w)); lg.appendChild(li);
      });
      box.appendChild(st); box.appendChild(lg);
    }
    if (g.note) box.appendChild(el("p", "mk-note", g.note));
    return box;
  }

  function detail(k) {
    if (head) head.hidden = true;
    host.textContent = "";
    var a = el("article", "kol mk-art");
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
    var secs = k.abschnitte;
    if (k.kurz && k.kurz.length) {
      var kb = el("div", "mk-kurz"); kb.appendChild(el("p", "mk-kt", "Kurz gesagt"));
      k.kurz.forEach(function (x) { var r = el("div", "mk-kr"); r.appendChild(el("b", null, x.k)); r.appendChild(el("span", null, x.t)); kb.appendChild(r); });
      a.appendChild(kb);
    }
    if (secs && secs.length) {
      var nav = el("nav", "b-chips mk-jump"); nav.setAttribute("aria-label", "Springe zu");
      secs.forEach(function (s) { var c = el("a", "b-chip", s.titel); c.href = "#" + k.datum; c.onclick = function (e) { e.preventDefault(); var d = document.getElementById("s-" + s.id); d.open = true; d.scrollIntoView({ behavior: "smooth", block: "start" }); }; nav.appendChild(c); });
      a.appendChild(nav);
      secs.forEach(function (s) {
        var d = el("details", "mk-sec mk-" + (s.typ || "fakten")); d.id = "s-" + s.id; if (s.offen) d.open = true;
        d.appendChild(el("summary", null, s.titel));
        var body = el("div", "mk-body");
        (s.text || []).forEach(function (t) { body.appendChild(el("p", null, t)); });
        (s.grafiken || []).forEach(function (g) { body.appendChild(graf(g)); });
        d.appendChild(body); a.appendChild(d);
      });
      if (k.schluss) a.appendChild(el("blockquote", "mk-quote", k.schluss));
    } else {
      (k.text || []).forEach(function (t) { a.appendChild(el("p", null, t)); });
    }
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
