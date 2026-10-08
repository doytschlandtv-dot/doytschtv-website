/* Seite "Dossiers": Themenreihen aus dossiers-data.js; Folgen aufklappbar, mit Aussagen-Box, Quellen und Karussell. */
(function () {
  "use strict";
  var host = document.getElementById("dossiers"), data = window.DOSSIERS || [];
  if (!host) return;
  function el(t, c, x) { var n = document.createElement(t); if (c) n.className = c; if (x != null) n.textContent = x; return n; }
  function fmt(iso) { return new Date(iso + "T12:00:00").toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Berlin" }); }
  var NS = "http://www.w3.org/2000/svg";
  function sv(t, at, p) { var n = document.createElementNS(NS, t); for (var k in at) n.setAttribute(k, at[k]); if (p) p.appendChild(n); return n; }
  /* Titelgrafik pro Reihe: reine Grafik aus Seitenfarben, kein Foto */
  function cover(kind) {
    var fg = el("figure", "ds-img"), W = 1600, H = 640;
    var svg = sv("svg", { viewBox: "0 0 " + W + " " + H, role: "img", preserveAspectRatio: "xMidYMid slice" }); fg.appendChild(svg);
    if (kind === "hemicycle") {
      svg.setAttribute("aria-label", "Sitzreihen eines Parlaments als Punkte");
      var cx = W / 2, cy = H - 70, rows = 7, n0 = 14, red = { "3-9": 1 };
      for (var r = 0; r < rows; r++) {
        var rad = 170 + r * 60, cnt = Math.round(n0 + r * 8);
        for (var i = 0; i < cnt; i++) {
          var a = Math.PI * (1 - i / (cnt - 1));
          sv("circle", { cx: (cx + rad * Math.cos(a)).toFixed(1), cy: (cy - rad * Math.sin(a)).toFixed(1), r: 11, "class": red[r + "-" + i] ? "ds-hot" : "ds-dot" }, svg);
        }
      }
    } else if (kind === "pruefung") {
      svg.setAttribute("aria-label", "Aussagen als Zeilen, eine davon wird geprüft");
      var lens = [820, 1040, 680, 940, 760, 1100, 600];
      lens.forEach(function (w, i) { sv("rect", { x: 210, y: 95 + i * 70, width: w, height: 22, rx: 11, "class": i === 3 ? "ds-hot" : "ds-dot" }, svg); });
      sv("circle", { cx: 1060, cy: 316, r: 150, fill: "none", "stroke-width": 14, "class": "ds-ring" }, svg);
      sv("line", { x1: 1166, y1: 422, x2: 1300, y2: 556, "stroke-width": 26, "stroke-linecap": "round", "class": "ds-ring" }, svg);
    } else {
      svg.setAttribute("aria-label", "Paragraphenzeichen");
      [330, 250, 170].forEach(function (r) { sv("circle", { cx: W / 2, cy: H / 2, r: r, fill: "none", "stroke-width": 3, "class": "ds-line" }, svg); });
      var t = sv("text", { x: W / 2, y: H / 2 + 150, "text-anchor": "middle", "class": "ds-glyph" }, svg); t.textContent = "§";
    }
    return fg;
  }
  var head = document.querySelector(".pagehead");
  function find(id) { for (var i = 0; i < data.length; i++) for (var j = 0; j < (data[i].folgen || []).length; j++) if (data[i].folgen[j].id === id) return { s: data[i], a: data[i].folgen[j] }; return null; }
  function tile(s, a) {
    var t = el("a", "dk-tile"); t.href = "#" + a.id;
    var fg = el("div", a.bild ? "dk-img" : "dk-img dk-noimg");
    if (a.bild) { var im = el("img"); im.src = a.bild.src; im.alt = a.bild.alt || ""; im.loading = "lazy"; im.width = a.bild.w || 1280; im.height = a.bild.h || 720; fg.appendChild(im); }
    else fg.appendChild(el("span", null, s.titel));
    t.appendChild(fg);
    var b = el("div", "dk-b");
    b.appendChild(el("p", "dk-k", s.titel));
    b.appendChild(el("h3", null, a.titel));
    b.appendChild(el("p", "dk-d", fmt(a.datum)));
    b.appendChild(el("span", "dk-go", "Dossier öffnen ›"));
    t.appendChild(b);
    return t;
  }
  function overview() {
    if (head) head.hidden = false;
    host.textContent = "";
    data.forEach(function (s) {
      var sec = el("section", "ds"); sec.id = s.id;
      sec.appendChild(el("h2", "ds-t", s.titel));
      sec.appendChild(el("p", "ds-lead", s.teaser));
      var m = el("details", "ds-m ds-md"); m.appendChild(el("summary", null, "So arbeiten wir"));
      var ul = el("ul"); (s.methode || []).forEach(function (x) { ul.appendChild(el("li", null, x)); }); m.appendChild(ul); sec.appendChild(m);
      var fl = (s.folgen || []).slice().sort(function (a, b) { return a.datum < b.datum ? 1 : -1; });
      var grid = el("div", "dk-grid");
      fl.forEach(function (a) { grid.appendChild(tile(s, a)); });
      if (!fl.length) { var w = el("div", "dk-tile dk-wait"); w.appendChild(el("p", "dk-k", "Folgt")); w.appendChild(el("h3", null, "Die erste Folge erscheint nach Prüfung und Freigabe.")); grid.appendChild(w); }
      sec.appendChild(grid); host.appendChild(sec);
    });
    window.scrollTo(0, 0);
  }
  function detail(s, a) {
    if (head) head.hidden = true;
    host.textContent = "";
    var art = el("article", "kol dk-art");
    var back = el("a", "b-more mk-back", "‹ Alle Dossiers"); back.href = "#"; art.appendChild(back);
    art.appendChild(el("p", "b-eyebrow", s.titel + " · Dossier"));
    art.appendChild(el("h1", "mk-h1", a.titel));
    if (a.teaser) art.appendChild(el("p", "mk-lead", a.teaser));
    art.appendChild(el("p", "mk-meta", fmt(a.datum)));
    var body = el("div", "ex-body");
    if (a.bild) {
      var fg2 = el("figure", "ds-fig"), im = el("img"); im.src = a.bild.src; im.alt = a.bild.alt || ""; im.width = a.bild.w || 1050; im.height = a.bild.h || 816;
      fg2.appendChild(im); fg2.appendChild(el("figcaption", null, a.bild.unter || "")); body.appendChild(fg2);
    }
    if (a.aussage) {
      var q = el("blockquote", "ds-q");
      q.appendChild(el("p", "ds-qt", "„" + a.aussage.zitat + "“"));
      var meta = [a.aussage.wer, a.aussage.datum, a.aussage.ort].filter(Boolean).join(" · ");
      var cap = el("p", "ds-qm", meta + " "); if (a.aussage.url) { var lk = el("a", null, "Quelle"); lk.href = a.aussage.url; lk.rel = "noopener"; lk.target = "_blank"; cap.appendChild(lk); }
      q.appendChild(cap);
      if (a.aussage.urteil) q.appendChild(el("span", "ds-u", "Unser Befund: " + a.aussage.urteil));
      body.appendChild(q);
    }
    if (a.kern && a.kern.length) { var k = el("div", "ex-kern"); a.kern.forEach(function (z) { var b = el("div", "ex-z"); b.appendChild(el("strong", null, z.z)); b.appendChild(el("span", null, z.l)); k.appendChild(b); }); body.appendChild(k); }
    a.abschnitte.forEach(function (x) { body.appendChild(el("h4", null, x.h)); x.t.forEach(function (p) { body.appendChild(el("p", null, p)); }); });
    var qs = el("div", "ex-q"); qs.appendChild(el("h4", null, "Quellen")); var u2 = el("ul");
    a.quellen.forEach(function (x) { var li = el("li"), an = el("a", null, x.titel); an.href = x.url; an.rel = "noopener"; an.target = "_blank"; li.appendChild(an); u2.appendChild(li); });
    qs.appendChild(u2); qs.appendChild(el("p", "ex-stand", "Stand: " + a.stand + ". Tatsachen laut den genannten Quellen, Wertungen sind als unsere Einordnung gekennzeichnet.")); body.appendChild(qs);
    if (a.karussell && window.DTVK) {
      var kb = el("div", "ds-k"); kb.appendChild(el("h4", null, "Als Karussell"));
      var det = el("details", "ds-kd"); det.appendChild(el("summary", null, "Slides anzeigen"));
      var once = false; det.addEventListener("toggle", function () { if (det.open && !once) { once = true; det.appendChild(window.DTVK.view({ karussells: [a.karussell] })); } });
      kb.appendChild(det); body.appendChild(kb);
    }
    art.appendChild(body); host.appendChild(art);
    document.title = a.titel + " – DoytschlandTv";
    window.scrollTo(0, 0);
  }
  function route() {
    var h = decodeURIComponent(location.hash.slice(1)), f = h && find(h);
    if (f) detail(f.s, f.a); else { document.title = "Dossiers – DoytschlandTv"; overview(); }
  }
  route(); window.addEventListener("hashchange", route);
})();
