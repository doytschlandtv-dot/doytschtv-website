/* Seite "Nachrichten": Feed im Stil von TikTok. Ein Karussell pro Bildschirm, hoch/runter = nächstes Karussell,
   seitlich = Slides, Teilen-Button am Rand. Reihenfolge: neueste Tage zuerst, danach die zeitlosen Hintergrund-Karussells. */
(function () {
  "use strict";
  var feed = document.getElementById("feed"), toast = document.getElementById("toast"), K = window.DTVK;
  if (!feed || !K) return;
  function el(t, c, x) { var n = document.createElement(t); if (c) n.className = c; if (x != null) n.textContent = x; return n; }
  var ICON = {
    share: '<svg viewBox="0 0 24 24"><path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7"/><path d="M16 6l-4-4-4 4"/><path d="M12 2v13"/></svg>',
    copy: '<svg viewBox="0 0 24 24"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h9"/></svg>',
    brief: '<svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/></svg>'
  };
  var fh = 0, sw = 0;
  function size() {
    var nav = document.querySelector(".nav"), nh = nav ? nav.getBoundingClientRect().height : 0;
    fh = Math.max(360, window.innerHeight - nh);
    var rem = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
    var byH = (fh - 8.2 * rem) * 0.75, byW = window.innerWidth - 5.6 * rem;
    sw = Math.max(200, Math.min(byH, byW, 30 * rem));
    document.documentElement.style.setProperty("--fh", fh + "px");
    document.documentElement.style.setProperty("--sw", sw + "px");
  }
  function say(t) { toast.textContent = t; toast.classList.add("on"); clearTimeout(say.t); say.t = setTimeout(function () { toast.classList.remove("on"); }, 2200); }
  function dateLabel(iso) {
    var today = new Date().toLocaleDateString("sv-SE", { timeZone: "Europe/Berlin" });
    var y = new Date(Date.now() - 864e5).toLocaleDateString("sv-SE", { timeZone: "Europe/Berlin" });
    var d = new Date(iso + "T12:00:00");
    var s = d.toLocaleDateString("de-DE", { weekday: "short", day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Berlin" });
    return (iso === today ? "Heute · " : iso === y ? "Gestern · " : "") + s;
  }
  /* Karussells einsammeln */
  var items = [];
  (window.BRIEFINGS || []).slice().sort(function (a, b) { return a.datum < b.datum ? 1 : -1; }).forEach(function (day) {
    (day.karussells || []).forEach(function (k) { items.push({ k: k, label: dateLabel(day.datum), alt: false, briefing: day.datum }); });
  });
  (window.VORRAT || []).forEach(function (k) { items.push({ k: k, label: "Hintergrund · zeitlos", alt: true }); });

  function build(it, idx) {
    var k = it.k, sec = el("section", "f-item"); sec.setAttribute("aria-label", k.thema);
    var meta = el("div", "f-meta");
    meta.appendChild(el("span", "f-date" + (it.alt ? " alt" : ""), it.label));
    meta.appendChild(el("span", "f-topic", k.thema));
    sec.appendChild(meta);
    var stage = el("div", "f-stage"), row = el("div", "f-row"), cvs = [];
    (k.slides || []).forEach(function (s, i) {
      var cv = document.createElement("canvas"); cv.setAttribute("role", "img");
      cv.setAttribute("aria-label", "Slide " + (i + 1) + " von " + k.slides.length + ": " + (s.titel || s.zahl || s.text || s.behauptung || s.typ));
      row.appendChild(cv); cvs.push(cv);
    });
    stage.appendChild(row);
    var rail = el("div", "f-rail");
    function act(cls, icon, label, fn) {
      var b = el("button", "f-act " + cls); b.type = "button"; b.setAttribute("aria-label", label);
      var i = el("i"); i.innerHTML = icon; b.appendChild(i); b.appendChild(el("span", null, label.split(" ")[0]));
      b.addEventListener("click", fn); rail.appendChild(b); return b;
    }
    act("main", ICON.share, "Teilen", function () { shareSlides(k, cvs); });
    act("", ICON.copy, "Caption kopieren", function () {
      var t = K.caption(k);
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(function () { say("Caption kopiert"); }, function () { say("Kopieren nicht möglich"); });
    });
    if (it.briefing) { var a = act("", ICON.brief, "Briefing hören", function () { location.href = "briefing.html#" + it.briefing; }); }
    stage.appendChild(rail); sec.appendChild(stage);
    var dots = el("div", "f-dots"); cvs.forEach(function (_, i) { dots.appendChild(el("b", i === 0 ? "on" : "")); });
    sec.appendChild(dots);
    row.addEventListener("scroll", function () {
      var i = Math.round(row.scrollLeft / Math.max(1, row.clientWidth));
      [].forEach.call(dots.children, function (d, j) { d.className = j === i ? "on" : ""; });
    }, { passive: true });
    if (idx === 0) sec.appendChild(el("div", "f-hint", "Nach oben wischen für das nächste Karussell · seitlich für die Slides"));
    sec._cvs = cvs; sec._k = k; sec._drawn = false;
    return sec;
  }
  function drawItem(sec) {
    if (sec._drawn || !sec._k) return; sec._drawn = true;
    K.fontsReady().then(function () { sec._cvs.forEach(function (cv, i) { K.draw(cv, sec._k.slides[i], i, sec._k.slides.length); }); });
  }
  function toBlob(c) { return new Promise(function (r) { c.toBlob(r, "image/png"); }); }
  function shareSlides(k, cvs) {
    Promise.all(cvs.map(toBlob)).then(function (blobs) {
      var files = blobs.map(function (b, i) { return new File([b], "doytschlandtv-" + K.slug(k.thema) + "-" + (i + 1) + ".png", { type: "image/png" }); });
      if (navigator.canShare && navigator.canShare({ files: files })) return navigator.share({ files: files, text: K.caption(k) }).catch(function () {});
      files.forEach(function (f, i) { setTimeout(function () { var a = document.createElement("a"); a.href = URL.createObjectURL(f); a.download = f.name; document.body.appendChild(a); a.click(); a.remove(); }, i * 400); });
      say("Slides werden gespeichert");
    });
  }
  size();
  var secs = items.map(build);
  if (!secs.length) { var e = el("section", "f-item"); e.appendChild(el("p", "f-end", "Noch keine Karussells. Jeden Morgen neu.")); secs.push(e); }
  var end = el("section", "f-item"), box = el("div", "f-end");
  box.appendChild(el("h2", null, "Das war's für heute."));
  var p = el("p", null, "Neue Karussells jeden Morgen, die Einordnung um 19 Uhr im Tagesrückblick. "); var l = el("a", null, "Zum Briefing"); l.href = "briefing.html"; p.appendChild(l); box.appendChild(p);
  var p2 = el("p", null); [["Impressum", "impressum.html"], ["Datenschutz", "datenschutz.html"]].forEach(function (x, i) { if (i) p2.appendChild(document.createTextNode(" · ")); var a = el("a", null, x[0]); a.href = x[1]; p2.appendChild(a); }); box.appendChild(p2);
  end.appendChild(box); secs.push(end);
  secs.forEach(function (s) { feed.appendChild(s); });
  /* Navigation für Desktop */
  var nav = el("div", "f-nav");
  function step(d) { var h = feed.clientHeight; feed.scrollBy({ top: d * h, behavior: "smooth" }); }
  [["↑", -1, "Vorheriges Karussell"], ["↓", 1, "Nächstes Karussell"]].forEach(function (x) { var b = el("button", null, x[0]); b.type = "button"; b.setAttribute("aria-label", x[2]); b.addEventListener("click", function () { step(x[1]); }); nav.appendChild(b); });
  document.querySelector("main").appendChild(nav);
  document.addEventListener("keydown", function (ev) {
    if (ev.key === "ArrowDown") { ev.preventDefault(); step(1); } else if (ev.key === "ArrowUp") { ev.preventDefault(); step(-1); }
    else if (ev.key === "ArrowRight" || ev.key === "ArrowLeft") {
      var i = Math.round(feed.scrollTop / Math.max(1, feed.clientHeight)), r = secs[i] && secs[i].querySelector(".f-row");
      if (r) { ev.preventDefault(); r.scrollBy({ left: (ev.key === "ArrowRight" ? 1 : -1) * r.clientWidth, behavior: "smooth" }); }
    }
  });
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) drawItem(e.target); }); }, { root: feed, rootMargin: "100% 0px" });
    secs.forEach(function (s) { io.observe(s); });
  } else secs.forEach(drawItem);
  window.addEventListener("resize", size);
  feed.focus({ preventScroll: true });
})();
