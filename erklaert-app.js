/* Seite "Erklärt": Erklärstücke aus erklaert-data.js als aufklappbare Beiträge. */
(function () {
  "use strict";
  var host = document.getElementById("erklaert");
  var data = window.ERKLAERT || [];
  if (!host || !data.length) return;
  function el(t, c, x) { var n = document.createElement(t); if (c) n.className = c; if (x != null) n.textContent = x; return n; }
  data.forEach(function (a) {
    var d = el("details", "ex"); d.id = a.id;
    var s = el("summary", "ex-sum");
    var l = el("div", "ex-head");
    l.appendChild(el("h3", null, a.titel));
    l.appendChild(el("p", null, a.teaser));
    s.appendChild(l);
    s.appendChild(el("span", "t", a.min + " Min. Lesezeit"));
    d.appendChild(s);
    var body = el("div", "ex-body");
    if (a.kern && a.kern.length) {
      var k = el("div", "ex-kern");
      a.kern.forEach(function (z) { var b = el("div", "ex-z"); b.appendChild(el("strong", null, z.z)); b.appendChild(el("span", null, z.l)); k.appendChild(b); });
      body.appendChild(k);
    }
    a.abschnitte.forEach(function (sec) {
      body.appendChild(el("h4", null, sec.h));
      sec.t.forEach(function (p) { body.appendChild(el("p", null, p)); });
    });
    var q = el("div", "ex-q");
    q.appendChild(el("h4", null, "Quellen"));
    var ul = el("ul");
    a.quellen.forEach(function (x) { var li = el("li"); var an = el("a", null, x.titel); an.href = x.url; an.rel = "noopener"; an.target = "_blank"; li.appendChild(an); ul.appendChild(li); });
    q.appendChild(ul);
    q.appendChild(el("p", "ex-stand", "Stand: " + a.stand + ". Erklärstück ohne Meinung, Fakten laut den genannten Quellen."));
    body.appendChild(q);
    d.appendChild(body);
    host.appendChild(d);
  });
  function openHash() { var h = location.hash.slice(1), n = h && document.getElementById(h); if (n && n.tagName === "DETAILS") { n.open = true; n.scrollIntoView(); } }
  openHash(); window.addEventListener("hashchange", openHash);
})();
