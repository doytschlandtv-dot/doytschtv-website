/* Startseite unten: Vorschau-Karten (Kolumne, Dossier, Erklärt) und "So arbeiten wir" am Beispiel des neuesten Karussells.
   Ohne JavaScript bleibt der feste Text aus dem HTML stehen. */
(function () {
  "use strict";
  function n(t, c, x) { var o = document.createElement(t); if (c) o.className = c; if (x != null) o.textContent = x; return o; }
  function cut(s, max) { s = String(s || "").replace(/\s+/g, " ").trim(); if (s.length <= max) return s; var t = s.slice(0, max), i = Math.max(t.lastIndexOf(". "), t.lastIndexOf("; ")); return i > max * 0.3 ? t.slice(0, i + 1) : t.replace(/\s+\S*$/, "") + " …"; }

  /* 1. Vorschau-Karten */
  var host = document.querySelector("#mehr .mehr");
  if (host) {
    var cards = [];
    var K = (window.KOLUMNEN || []).slice().sort(function (a, b) { return a.datum < b.datum ? 1 : -1; })[0];
    if (K) cards.push({ k: "Meinungen · Neu", t: K.titel, m: K.teaser || "Klar als Meinung gekennzeichnet.", h: "meinungen.html#" + K.datum, img: K.bild && K.bild.src, more: "Kolumne lesen" });
    var D = window.DOSSIERS || [], dd = null, df = null;
    D.forEach(function (s) { (s.folgen || []).forEach(function (f) { if (!df || f.datum > df.datum) { df = f; dd = s; } }); });
    if (dd) cards.push({ k: "Dossiers · Reihe", t: dd.titel, m: "Recherchiert aus öffentlichen Quellen. Jede Aussage belegt.", h: "dossiers.html", img: df.bild && (df.bild.url || df.bild.src), more: "Dossier öffnen" });
    var E = window.ERKLAERT || [], e = E[E.length - 1];
    if (e) cards.push({ k: "Erklärt" + (e.min ? " · " + e.min + " Minuten" : ""), t: e.titel, m: e.teaser || "Hintergründe einfach erklärt.", h: "erklaert.html#" + e.id, img: null, more: "Erklärt lesen" });
    if (cards.length) {
      host.textContent = ""; host.className = "mv-rail"; host.setAttribute("tabindex", "0"); host.setAttribute("aria-label", "Mehr von DoytschlandTv, seitlich wischen");
      cards.forEach(function (c, i) {
        var a = n("a", "mv-c"); a.href = c.h;
        var im = n("span", "mv-i" + (c.img ? "" : " mv-g" + (i % 2)));
        if (c.img) im.style.backgroundImage = "url(\"" + c.img.replace(/"/g, "") + "\")";
        im.setAttribute("aria-hidden", "true"); a.appendChild(im);
        var tx = n("span", "mv-t"); tx.appendChild(n("span", "k", c.k)); tx.appendChild(n("strong", null, c.t)); tx.appendChild(n("span", "m", cut(c.m, 130))); tx.appendChild(n("span", "more", c.more + " ›"));
        a.appendChild(tx); host.appendChild(a);
      });
    }
  }

  /* 2. So arbeiten wir: Fakt, Einordnung, Haltung aus dem neuesten Karussell mit allen drei Folien */
  var sec = document.getElementById("methode"), pil = sec && sec.querySelector(".pil");
  if (pil) {
    var days = (window.BRIEFINGS || []).slice().sort(function (a, b) { return a.datum < b.datum ? 1 : -1; }), pick = null;
    days.some(function (d) {
      return (d.karussells || []).some(function (k) {
        var s = k.slides || [], f = s.filter(function (x) { return x.typ === "fakten"; })[0], ei = s.filter(function (x) { return x.typ === "einordnung" && !/nicht wissen/i.test(x.label || "") && x.text; })[0], m = s.filter(function (x) { return x.typ === "meinung"; })[0];
        if (f && ei && m && f.text && m.text) { pick = { k: k, f: f, e: ei, m: m }; return true; }
      });
    });
    if (pick) {
      sec.classList.add("mw");
      var wrap = sec.querySelector(".wrap");
      var box = n("div", "mw-box");
      box.appendChild(n("p", "mw-lab", "So arbeiten wir, am Beispiel eines aktuellen Beitrags"));
      box.appendChild(n("h2", "mw-h", pick.k.thema));
      [["1", "Fakt", pick.f.text], ["2", "Einordnung", pick.e.text], ["3", "Haltung · Unsere Meinung", pick.m.text]].forEach(function (r) {
        var st = n("div", "mw-s"); st.appendChild(n("i", null, r[0])); st.appendChild(n("strong", null, r[1])); st.appendChild(n("p", null, cut(r[2], 190))); box.appendChild(st);
      });
      var more = n("p", "pil-links"); var a1 = n("a", "link", "Das Karussell ansehen ›"); a1.href = "nachrichten.html#" + encodeURIComponent(pick.k.thema);
      var a2 = n("a", "link", "Unsere Grundsätze ›"); a2.href = "grundsaetze.html"; var a3 = n("a", "link", "Wer wir sind ›"); a3.href = "ueber-uns.html";
      more.appendChild(a1); more.appendChild(a2); more.appendChild(a3); box.appendChild(more);
      wrap.textContent = ""; wrap.appendChild(box);
    }
  }
})();
