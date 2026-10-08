/* Story-Leiste: ein Ring "Heute" mit allen Storys des aktuellen Tages, Vollbild-Betrachter wie bei Instagram. */
(function () {
  "use strict";
  var TZ = "Europe/Berlin", DUR = 10000, KEY = "dtv-story-seen";
  function today() { return new Intl.DateTimeFormat("en-CA", { timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date()); }
  function el(t, c, x) { var n = document.createElement(t); if (c) n.className = c; if (x != null) n.textContent = x; return n; }
  function getDay() {
    var t = today();
    return (window.BRIEFINGS || []).filter(function (d) { return d.datum === t && d.storys && d.storys.length; })[0] || null;
  }
  function seenKey(day) { return day.datum + ":" + day.storys.length; }
  function isSeen(day) { try { return localStorage.getItem(KEY) === seenKey(day); } catch (e) { return false; } }
  function markSeen(day) { try { localStorage.setItem(KEY, seenKey(day)); } catch (e) {} }

  function open(day, btn) {
    var K = window.DTVK; if (!K) return;
    if (document.querySelector(".st-ov")) return;
    var list = day.storys, n = list.length, cur = 0, timer = null, ready = [], imgs = [], opener = document.activeElement;
    var ov = el("div", "st-ov"); ov.setAttribute("role", "dialog"); ov.setAttribute("aria-modal", "true"); ov.setAttribute("aria-label", "Storys von heute");
    var stage = el("div", "st-stage"); ov.appendChild(stage);
    var cvs = list.map(function (s, i) { var c = document.createElement("canvas"); c.setAttribute("role", "img"); c.setAttribute("aria-label", "Story " + (i + 1) + ": " + (s.titel || "")); c.hidden = i !== 0; stage.appendChild(c); return c; });
    var seg = el("div", "st-seg"), bars = list.map(function () { var i = el("i"); i.appendChild(el("b")); seg.appendChild(i); return i; }); stage.appendChild(seg);
    var l = el("button", "st-hit l"); l.type = "button"; l.setAttribute("aria-label", "Zurück");
    var r = el("button", "st-hit r"); r.type = "button"; r.setAttribute("aria-label", "Weiter");
    stage.appendChild(l); stage.appendChild(r);
    var top = el("div", "st-top");
    var sh = el("button"); sh.type = "button"; sh.setAttribute("aria-label", "Story teilen oder speichern");
    sh.innerHTML = '<svg viewBox="0 0 24 24"><path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7"/><path d="M16 6l-4-4-4 4"/><path d="M12 2v13"/></svg>';
    var x = el("button", null, "×"); x.type = "button"; x.setAttribute("aria-label", "Schließen");
    top.appendChild(sh); top.appendChild(x); stage.appendChild(top);
    document.body.appendChild(ov);
    var prevOverflow = document.body.style.overflow; document.body.style.overflow = "hidden";

    function draw(i) {
      if (ready[i]) return Promise.resolve();
      return K.loadImg(list[i].bild && list[i].bild.url).then(function (im) { K.drawStory(cvs[i], list[i], im, i, n, true); ready[i] = true; });
    }
    var seq = 0;
    /* Bild, Balken und Zähler wechseln gemeinsam und erst, wenn das Bild fertig gezeichnet ist */
    function set(i) {
      clearTimeout(timer); cur = i; var tok = ++seq;
      draw(i).then(function () {
        if (tok !== seq) return;
        cvs.forEach(function (c, k) { c.hidden = k !== i; });
        bars.forEach(function (b, k) { b.className = k < i ? "done" : ""; });
        var b = bars[i]; void b.offsetWidth; b.className = "run"; b.style.setProperty("--st-dur", DUR + "ms");
        function adv() { if (cur === i && tok === seq) next(); }
        b.firstChild.addEventListener("animationend", adv, { once: true });
        timer = setTimeout(adv, DUR);
        if (i + 1 < n) draw(i + 1);
      });
    }
    function next() { if (cur + 1 < n) set(cur + 1); else close(); }
    function prev() { set(Math.max(0, cur - 1)); }
    function close() {
      clearTimeout(timer); markSeen(day); if (btn) btn.classList.add("seen");
      document.removeEventListener("keydown", key); document.removeEventListener("pointerup", resume); document.removeEventListener("pointercancel", resume); window.removeEventListener("blur", resume); ov.remove(); document.body.style.overflow = prevOverflow;
      if (opener && opener.focus) opener.focus();
    }
    function key(e) { if (e.key === "Escape") close(); else if (e.key === "ArrowRight") next(); else if (e.key === "ArrowLeft") prev(); }
    document.addEventListener("keydown", key);
    l.addEventListener("click", prev); r.addEventListener("click", next); x.addEventListener("click", close);
    ov.addEventListener("click", function (e) { if (e.target === ov) close(); });
    stage.addEventListener("pointerdown", function () { stage.classList.add("st-paused"); clearTimeout(timer); });
    function resume() {
      if (!stage.classList.contains("st-paused")) return; stage.classList.remove("st-paused");
      var b = bars[cur], cs = getComputedStyle(b.firstChild).transform, p = 0;
      try { var m = new DOMMatrix(cs); p = m.a; } catch (e) {}
      var idx = cur;
      clearTimeout(timer); timer = setTimeout(function () { if (cur === idx) next(); }, Math.max(300, DUR * (1 - p)));
    }
    /* Loslassen irgendwo (auch außerhalb der Story) setzt fort, sonst bliebe die Story hängen */
    document.addEventListener("pointerup", resume); document.addEventListener("pointercancel", resume);
    window.addEventListener("blur", resume);
    var y0 = null;
    stage.addEventListener("touchstart", function (e) { y0 = e.touches[0].clientY; }, { passive: true });
    stage.addEventListener("touchend", function (e) { if (y0 != null && e.changedTouches[0].clientY - y0 > 90) close(); y0 = null; }, { passive: true });
    sh.addEventListener("click", function () {
      draw(cur).then(function () {
        cvs[cur].toBlob(function (bl) {
          if (!bl) return;
          var f = new File([bl], "doytschlandtv-story-" + day.datum + "-" + (cur + 1) + ".png", { type: "image/png" });
          if (navigator.canShare && navigator.canShare({ files: [f] })) { navigator.share({ files: [f] }).catch(function () {}); return; }
          var a = document.createElement("a"); a.href = URL.createObjectURL(f); a.download = f.name; document.body.appendChild(a); a.click(); a.remove();
        }, "image/png");
      });
    });
    (K.fontsReady ? K.fontsReady() : Promise.resolve()).then(function () { set(0); });
    x.focus();
  }

  function mount(host, floating) {
    var day = getDay(); if (!day) return;
    var b = el("button", "st-btn" + (isSeen(day) ? " seen" : "")); b.type = "button";
    b.setAttribute("aria-label", "Storys von heute ansehen (" + day.storys.length + ")");
    var ring = el("span", "st-ring"), inner = el("span", "st-in", "D"); ring.appendChild(inner);
    b.appendChild(ring); b.appendChild(el("span", "st-lab", "Heute"));
    b.addEventListener("click", function () { open(day, b); });
    host.appendChild(b);
  }
  window.DTVStories = { mount: mount };
})();
