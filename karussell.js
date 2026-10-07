/* Karussell-Ansicht: zeichnet Instagram-Slides (1080 x 1350) aus den Daten im Browser,
   zum Speichern oder direkten Teilen. Daten: day.karussells = [{ thema, slides:[...], caption, hashtags }]
   Slide-Typen: hook, fakten, zahl, vergleich, meinung, cta. */
(function () {
  "use strict";
  var W = 1080, H = 1350, PAD = 90;
  var C = { paper: "#f8f7f2", ink: "#0a0a0a", red: "#b2231c", redL: "#ff7a6e", muted: "#4b4840", panel: "#efede5", line: "#d8d4c8" };
  var DISP = '"Bodoni Moda", Georgia, "Times New Roman", serif';
  var SANS = 'Montserrat, "Helvetica Neue", Arial, sans-serif';

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function fontsReady() {
    if (!document.fonts || !document.fonts.load) return Promise.resolve();
    return Promise.all([
      document.fonts.load('600 80px "Bodoni Moda"'),
      document.fonts.load('700 40px "Bodoni Moda"'),
      document.fonts.load('600 30px Montserrat'),
      document.fonts.load('700 30px Montserrat')
    ]).catch(function () {});
  }

  /* --- Textumbruch --- */
  function wordsOf(text) { return String(text || "").split(/\s+/).filter(Boolean); }
  function layout(ctx, words, maxW) {
    var lines = [], cur = [], w = 0, sp = ctx.measureText(" ").width;
    words.forEach(function (wd) {
      var ww = ctx.measureText(wd).width;
      if (cur.length && w + sp + ww > maxW) { lines.push(cur); cur = [wd]; w = ww; }
      else { w += (cur.length ? sp : 0) + ww; cur.push(wd); }
    });
    if (cur.length) lines.push(cur);
    return lines;
  }
  /* passt die Schrift an, bis der Text in die Box passt; gibt {size, lines} */
  function fit(ctx, text, fam, weight, maxW, maxH, start, min, lh) {
    var words = wordsOf(text);
    for (var s = start; s >= min; s -= 2) {
      ctx.font = weight + " " + s + "px " + fam;
      var lines = layout(ctx, words, maxW);
      if (lines.length * s * lh <= maxH) return { size: s, lines: lines };
    }
    ctx.font = weight + " " + min + "px " + fam;
    return { size: min, lines: layout(ctx, words, maxW) };
  }
  function drawLines(ctx, f, x, y, lh, color, hl, hlColor) {
    ctx.textBaseline = "top";
    var sp = ctx.measureText(" ").width;
    f.lines.forEach(function (ln, i) {
      var cx = x;
      ln.forEach(function (wd) {
        var bare = wd.replace(/[.,:;!?„“"]/g, "").toLowerCase();
        ctx.fillStyle = hl && bare === hl ? hlColor : color;
        ctx.fillText(wd, cx, y + i * f.size * lh);
        cx += ctx.measureText(wd).width + sp;
      });
    });
    return y + f.lines.length * f.size * lh;
  }
  function block(ctx, text, fam, weight, x, y, maxW, maxH, start, min, lh, color, hl, hlColor) {
    var f = fit(ctx, text, fam, weight, maxW, maxH, start, min, lh);
    return drawLines(ctx, f, x, y, lh, color, hl, hlColor);
  }
  function label(ctx, text, x, y, color) {
    ctx.font = "700 28px " + SANS;
    ctx.fillStyle = color;
    ctx.textBaseline = "top";
    var t = String(text).toUpperCase().split("").join(String.fromCharCode(8202));
    ctx.fillText(t, x, y);
  }

  /* --- Slide zeichnen --- */
  function draw(canvas, s, i, n) {
    canvas.width = W; canvas.height = H;
    var ctx = canvas.getContext("2d");
    var dark = s.typ === "meinung";
    var fg = dark ? C.paper : C.ink;
    var mu = dark ? "#cfcbbf" : C.muted;
    var ac = dark ? C.redL : C.red;
    ctx.fillStyle = dark ? C.ink : C.paper;
    ctx.fillRect(0, 0, W, H);

    /* Kopf: Wortmarke und Zähler */
    ctx.textBaseline = "top";
    ctx.font = "700 46px " + DISP;
    ctx.fillStyle = fg;
    ctx.fillText("Doytschland", PAD, 70);
    var wd = ctx.measureText("Doytschland").width;
    ctx.fillStyle = ac;
    ctx.fillText("Tv", PAD + wd, 70);
    ctx.font = "600 28px " + SANS;
    ctx.fillStyle = mu;
    var cnt = (i + 1) + " / " + n;
    ctx.fillText(cnt, W - PAD - ctx.measureText(cnt).width, 80);
    ctx.fillStyle = dark ? "#3a3833" : C.line;
    ctx.fillRect(PAD, 150, W - 2 * PAD, 3);

    var x = PAD, mw = W - 2 * PAD, y = 220;

    if (s.typ === "hook") {
      label(ctx, s.kicker || "Das Thema", x, y, ac);
      block(ctx, s.titel, DISP, 600, x, y + 70, mw, 760, 128, 70, 1.08, fg, (s.rot || "").toLowerCase(), ac);
      ctx.font = "600 34px " + SANS; ctx.fillStyle = mu;
      ctx.fillText("Wische für die Fakten  →", x, H - 150);
    } else if (s.typ === "fakten") {
      label(ctx, "Die Fakten", x, y, ac);
      var y2 = block(ctx, s.titel, DISP, 700, x, y + 70, mw, 300, 80, 52, 1.1, fg, "", ac);
      block(ctx, s.text, SANS, 500, x, y2 + 50, mw, H - y2 - 330, 46, 30, 1.45, fg, "", ac);
      if (s.quelle) { ctx.font = "600 28px " + SANS; ctx.fillStyle = mu; ctx.fillText("Quelle: " + s.quelle, x, H - 110); }
    } else if (s.typ === "zahl") {
      label(ctx, "Die Zahl", x, y, ac);
      var f = fit(ctx, s.zahl, DISP, 600, mw, 420, 300, 120, 1.0);
      var y3 = drawLines(ctx, f, x, y + 90, 1.0, ac, "", ac);
      block(ctx, s.text, SANS, 600, x, y3 + 50, mw, 360, 48, 32, 1.4, fg, "", ac);
      if (s.quelle) { ctx.font = "600 28px " + SANS; ctx.fillStyle = mu; ctx.fillText("Quelle: " + s.quelle, x, H - 110); }
    } else if (s.typ === "vergleich") {
      var bh = 480, gap = 40;
      ctx.fillStyle = C.panel;
      rr(ctx, x, y, mw, bh, 36); ctx.fill();
      label(ctx, s.labelA || "Behauptung", x + 50, y + 44, C.muted);
      block(ctx, s.behauptung, SANS, 600, x + 50, y + 110, mw - 100, bh - 150, 46, 30, 1.35, C.ink, "", ac);
      var y4 = y + bh + gap;
      ctx.fillStyle = C.ink;
      rr(ctx, x, y4, mw, bh, 36); ctx.fill();
      label(ctx, s.labelB || "Fakt", x + 50, y4 + 44, C.redL);
      block(ctx, s.fakt, SANS, 600, x + 50, y4 + 110, mw - 100, bh - 150, 46, 30, 1.35, C.paper, "", ac);
      if (s.quelle) { ctx.font = "600 28px " + SANS; ctx.fillStyle = mu; ctx.fillText("Quelle: " + s.quelle, x, H - 100); }
    } else if (s.typ === "meinung") {
      label(ctx, "Unsere Einordnung · Meinung", x, y, ac);
      var y5 = block(ctx, s.text, DISP, 600, x, y + 80, mw, 640, 76, 44, 1.2, fg, "", ac);
      if (s.handlung) {
        ctx.fillStyle = "#3a3833"; ctx.fillRect(x, y5 + 50, mw, 3);
        label(ctx, "Was du tun kannst", x, y5 + 90, ac);
        block(ctx, s.handlung, SANS, 600, x, y5 + 150, mw, H - y5 - 330, 40, 28, 1.4, fg, "", ac);
      }
    } else if (s.typ === "cta") {
      var y6 = block(ctx, "Teile das mit jemandem, der es wissen sollte.", DISP, 600, x, y + 20, mw, 520, 104, 60, 1.1, fg, "wissen", ac);
      ctx.font = "700 36px " + SANS; ctx.fillStyle = ac;
      ctx.fillText("SPEICHERN  ·  TEILEN  ·  KOMMENTIEREN", x, y6 + 60);
      block(ctx, "Folge uns für täglich eine Einordnung.", SANS, 600, x, y6 + 130, mw, 120, 42, 30, 1.3, fg, "", ac);
      if (s.frage) block(ctx, s.frage, SANS, 500, x, y6 + 260, mw, 160, 38, 28, 1.35, mu, "", ac);
      ctx.font = "700 40px " + SANS; ctx.fillStyle = fg;
      ctx.fillText("@doytschlandtv", x, H - 150);
    }
    /* Fuß */
    if (s.typ !== "hook" && s.typ !== "cta") {
      ctx.font = "600 26px " + SANS; ctx.fillStyle = mu;
      ctx.fillText("@doytschlandtv", W - PAD - ctx.measureText("@doytschlandtv").width, H - 70);
    }
  }
  function rr(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
  }

  /* --- Ansicht --- */
  function toBlob(canvas) {
    return new Promise(function (res) { canvas.toBlob(res, "image/png"); });
  }
  function slug(t) { return String(t || "karussell").toLowerCase().replace(/[^a-z0-9äöüß]+/g, "-").replace(/^-|-$/g, ""); }

  function view(day) {
    var box = el("div", "k-wrap");
    var list = day.karussells || [];
    if (!list.length) {
      box.appendChild(el("p", "b-empty", "Die Karussells für diesen Tag erscheinen täglich am Morgen, kurz nach dem Briefing."));
      return box;
    }
    box.appendChild(el("p", "k-intro", "Fertig zum Posten: Slides speichern oder direkt teilen, Caption kopieren, in Instagram einfügen. Du kannst jederzeit nach links wischen."));
    var jobs = [];
    list.forEach(function (k, ki) {
      var sec = el("section", "k-sec");
      sec.appendChild(el("h3", "k-h", (ki + 1) + ". " + k.thema));
      var row = el("div", "k-row");
      var canvases = [];
      (k.slides || []).forEach(function (s, i) {
        var cv = document.createElement("canvas");
        cv.className = "k-slide";
        cv.setAttribute("role", "img");
        cv.setAttribute("aria-label", "Slide " + (i + 1) + " von " + k.slides.length + ": " + (s.titel || s.zahl || s.text || s.behauptung || s.typ));
        row.appendChild(cv);
        canvases.push(cv);
        jobs.push(function () { draw(cv, s, i, k.slides.length); });
      });
      sec.appendChild(row);

      var act = el("div", "k-act");
      var bShare = el("button", "k-btn", "Alle Slides teilen oder speichern");
      bShare.type = "button";
      bShare.addEventListener("click", function () {
        Promise.all(canvases.map(toBlob)).then(function (blobs) {
          var files = blobs.map(function (b, i) { return new File([b], "doytschlandtv-" + slug(k.thema) + "-" + (i + 1) + ".png", { type: "image/png" }); });
          if (navigator.canShare && navigator.canShare({ files: files })) {
            return navigator.share({ files: files, text: caption(k) }).catch(function () {});
          }
          files.forEach(function (f, i) {
            setTimeout(function () {
              var a = document.createElement("a");
              a.href = URL.createObjectURL(f); a.download = f.name;
              document.body.appendChild(a); a.click(); a.remove();
              setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
            }, i * 400);
          });
        });
      });
      act.appendChild(bShare);
      var bCap = el("button", "k-btn k-btn-ghost", "Caption kopieren");
      bCap.type = "button";
      bCap.addEventListener("click", function () {
        var t = caption(k);
        var done = function () { bCap.textContent = "Kopiert"; setTimeout(function () { bCap.textContent = "Caption kopieren"; }, 2000); };
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(done, function () {});
      });
      act.appendChild(bCap);
      sec.appendChild(act);

      var cap = el("div", "k-cap");
      cap.appendChild(el("span", "k-cap-k", "Caption"));
      cap.appendChild(el("p", null, k.caption || ""));
      if (k.hashtags) cap.appendChild(el("p", "k-tags", Array.isArray(k.hashtags) ? k.hashtags.join(" ") : k.hashtags));
      sec.appendChild(cap);
      box.appendChild(sec);
    });
    fontsReady().then(function () { jobs.forEach(function (j) { j(); }); });
    return box;
  }
  function caption(k) {
    var tags = Array.isArray(k.hashtags) ? k.hashtags.join(" ") : (k.hashtags || "");
    return (k.caption || "") + (tags ? "\n\n" + tags : "");
  }
  window.DTVK = { view: view };
})();
