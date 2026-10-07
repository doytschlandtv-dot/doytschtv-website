/* Seite "Dossiers": Themenreihen aus dossiers-data.js; Folgen aufklappbar, mit Aussagen-Box, Quellen und Karussell. */
(function () {
  "use strict";
  var host = document.getElementById("dossiers"), data = window.DOSSIERS || [];
  if (!host) return;
  function el(t, c, x) { var n = document.createElement(t); if (c) n.className = c; if (x != null) n.textContent = x; return n; }
  function fmt(iso) { return new Date(iso + "T12:00:00").toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Berlin" }); }
  data.forEach(function (s) {
    var sec = el("section", "ds"); sec.id = s.id;
    sec.appendChild(el("h2", "ds-t", s.titel));
    sec.appendChild(el("p", "ds-lead", s.teaser));
    var m = el("div", "ds-m"); m.appendChild(el("h4", null, "So arbeiten wir"));
    var ul = el("ul"); s.methode.forEach(function (x) { ul.appendChild(el("li", null, x)); }); m.appendChild(ul); sec.appendChild(m);
    var fl = (s.folgen || []).slice().sort(function (a, b) { return a.datum < b.datum ? 1 : -1; });
    if (!fl.length) sec.appendChild(el("p", "b-empty", "Die erste Folge erscheint nach Prüfung und Freigabe."));
    fl.forEach(function (a) {
      var d = el("details", "ex"); d.id = a.id;
      var sm = el("summary", "ex-sum"), l = el("div", "ex-head");
      l.appendChild(el("h3", null, a.titel)); l.appendChild(el("p", null, a.teaser));
      sm.appendChild(l); sm.appendChild(el("span", "t", fmt(a.datum))); d.appendChild(sm);
      var body = el("div", "ex-body");
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
        var once = false; d.addEventListener("toggle", function () { if (d.open && !once) { once = true; kb.appendChild(window.DTVK.view({ karussells: [a.karussell] })); } });
        body.appendChild(kb);
      }
      d.appendChild(body); sec.appendChild(d);
    });
    host.appendChild(sec);
  });
  function openHash() { var h = location.hash.slice(1), n = h && document.getElementById(h); if (n && n.tagName === "DETAILS") { n.open = true; n.scrollIntoView(); } }
  openHash(); window.addEventListener("hashchange", openHash);
})();
