/* Karussell-Ansicht: zeichnet Instagram-Slides (1080 x 1350) aus den Daten im Browser,
   zum Speichern oder direkten Teilen. Daten: day.karussells = [{ thema, slides:[...], caption, hashtags }]
   Slide-Typen: hook, fakten, zahl, vergleich, meinung, cta. */
(function () {
  "use strict";
  var W = 1080, H = 1440, PAD = 60;
  var C = { paper: "#f9f7f1", ink: "#101010", red: "#b3151b", muted: "#4a4740", rule: "#55524b", pink: "#e3bcc0" };
  var PF = '"Playfair Display", Georgia, "Times New Roman", serif';
  var IS = '"Instrument Serif", "Playfair Display", Georgia, serif';
  var SANS = 'Inter, "Helvetica Neue", Arial, sans-serif';

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function fontsReady() {
    if (!document.fonts || !document.fonts.load) return Promise.resolve();
    return Promise.all([
      document.fonts.load('400 80px "Instrument Serif"'),
      document.fonts.load('700 40px "Playfair Display"'),
      document.fonts.load('400 40px "Playfair Display"'),
      document.fonts.load('400 30px Inter'),
      document.fonts.load('700 30px Inter')
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

  /* --- Slide zeichnen (Stil: Canva-Vorlage "Nachrichten-Karussell", 1080 x 1440) --- */
  function setLS(ctx, px) { if ("letterSpacing" in ctx) ctx.letterSpacing = px + "px"; }
  function hlSet(t) {
    var o = {};
    wordsOf(t).forEach(function (w) { o[w.replace(/[.,:;!?„“"]/g, "").toLowerCase()] = 1; });
    return o;
  }
  function drawLines2(ctx, f, x, y, lh, color, hl, hlColor, stroke) {
    ctx.textBaseline = "top";
    var sp = ctx.measureText(" ").width;
    f.lines.forEach(function (ln, i) {
      var cx = x;
      ln.forEach(function (wd) {
        var bare = wd.replace(/[.,:;!?„“"]/g, "").toLowerCase();
        var col = hl && hl[bare] ? hlColor : color;
        ctx.fillStyle = col;
        ctx.fillText(wd, cx, y + i * f.size * lh);
        if (stroke) { ctx.strokeStyle = col; ctx.lineWidth = stroke * f.size; ctx.lineJoin = "round"; ctx.strokeText(wd, cx, y + i * f.size * lh); }
        cx += ctx.measureText(wd).width + sp;
      });
    });
    return y + f.lines.length * f.size * lh;
  }
  function head(ctx, text, fam, weight, x, y, maxW, maxH, start, min, lh, color, hl, hlColor, stroke) {
    var f = fit(ctx, text, fam, weight, maxW, maxH, start, min, lh);
    return drawLines2(ctx, f, x, y, lh, color, hl, hlColor, stroke);
  }
  function lab(ctx, text, x, y, color, maxW) {
    var sz = 34, t = String(text).toUpperCase();
    ctx.fillStyle = color; ctx.textBaseline = "top";
    for (; sz >= 22; sz -= 2) {
      ctx.font = "700 " + sz + "px " + SANS; setLS(ctx, 1.5);
      if (!maxW || ctx.measureText(t).width <= maxW) break;
    }
    ctx.fillText(t, x, y); setLS(ctx, 0);
  }
  function source(ctx, text, x, y, w, mu) {
    ctx.font = "400 29px " + SANS; ctx.fillStyle = mu;
    var f = fit(ctx, "Quelle: " + text, SANS, 400, w, 120, 29, 22, 1.35);
    drawLines2(ctx, f, x, y, 1.35, mu, null, mu, 0);
  }
  function draw(canvas, s, i, n) {
    canvas.width = W; canvas.height = H;
    var ctx = canvas.getContext("2d");
    var fg = C.ink, mu = C.muted, ac = C.red;
    ctx.fillStyle = C.paper; ctx.fillRect(0, 0, W, H);
    ctx.textBaseline = "top"; setLS(ctx, 0);

    /* Kopf: Wortmarke, Linie */
    ctx.font = "700 52px " + PF; ctx.fillStyle = fg;
    ctx.fillText("Doytschland", PAD, 52);
    var wd = ctx.measureText("Doytschland").width;
    ctx.fillStyle = ac; ctx.fillText("Tv", PAD + wd, 52);
    ctx.fillStyle = C.rule; ctx.fillRect(40, 130, W - 80, 3);

    /* Zähler unten rechts */
    ctx.font = "700 66px " + PF; ctx.fillStyle = ac;
    var cnt = (i + 1) + "/" + n;
    ctx.fillText(cnt, W - PAD - ctx.measureText(cnt).width, H - 130);

    var x = PAD, mw = W - 2 * PAD, y = 210;

    if (s.typ === "hook") {
      ctx.font = "400 40px " + SANS; /* Fußhinweis später */
      head(ctx, s.titel, IS, 400, x, y, mw, 960, 190, 100, 1.08, fg, hlSet(s.rot), ac, 0.018);
      ctx.font = "400 42px " + SANS; ctx.fillStyle = fg;
      ctx.fillText("Wische für die Fakten →", x, H - 120);
    } else if (s.typ === "fakten") {
      lab(ctx, "Die Fakten", x, y, ac);
      var y2 = head(ctx, s.titel, IS, 400, x, y + 70, mw, 330, 116, 64, 1.04, fg, null, ac, 0.004);
      var by = y2 + 40, ry = 1010;
      head(ctx, s.text, SANS, 400, x, by, mw, ry - by - 50, 42, 28, 1.4, fg, null, ac, 0);
      ctx.fillStyle = C.pink; ctx.fillRect(x, ry, mw, 3);
      if (s.quelle) source(ctx, s.quelle, x, ry + 36, mw, mu);
    } else if (s.typ === "zahl") {
      var m = String(s.zahl || "").match(/^(\S+)\s*(.*)$/) || [0, s.zahl, ""];
      var num = m[1], unit = m[2];
      var fs = 330;
      ctx.font = "400 " + fs + "px " + PF;
      while (ctx.measureText(num).width + (unit ? 40 + ctx.measureText(unit).width * 0.5 : 0) > mw && fs > 150) { fs -= 10; ctx.font = "400 " + fs + "px " + PF; }
      var ny = y + 40, nw = ctx.measureText(num).width;
      ctx.fillStyle = ac; ctx.fillText(num, x, ny);
      if (unit) {
        var us = Math.round(fs * 0.58);
        ctx.font = "400 " + us + "px " + PF;
        while (nw + 36 + ctx.measureText(unit).width > mw && us > 50) { us -= 6; ctx.font = "400 " + us + "px " + PF; }
        ctx.fillText(unit, x + nw + 36, ny + fs * 0.26);
      }
      var ty = ny + fs * 1.18 + 20;
      head(ctx, s.text, SANS, 400, x + 20, ty, mw - 40, 1010 - ty - 40, 46, 30, 1.3, fg, null, ac, 0);
      if (s.quelle) source(ctx, s.quelle, x + 20, 1030, mw - 40, mu);
    } else if (s.typ === "vergleich") {
      var cw = (mw - 70) / 2, cx2 = x + cw + 70;
      lab(ctx, s.labelA || "Behauptung", x, y, fg, cw);
      lab(ctx, s.labelB || "Fakt", cx2, y, fg, cw);
      head(ctx, s.behauptung, PF, 400, x, y + 100, cw, 900, 48, 30, 1.25, fg, null, ac, 0);
      head(ctx, s.fakt, PF, 400, cx2, y + 100, cw, 900, 48, 30, 1.25, fg, null, ac, 0);
      ctx.fillStyle = ac; ctx.fillRect(x + cw + 33, y, 4, 1130);
      if (s.quelle) source(ctx, s.quelle, x, H - 190, cw, mu);
    } else if (s.typ === "meinung") {
      lab(ctx, "Unsere Einordnung – Meinung", x, y - 30, ac);
      var qb = s.handlung ? 700 : 850;
      var y5 = head(ctx, "„" + String(s.text || "").replace(/^[„“"]|[“"]$/g, "") + "“", PF, 400, x + 30, y + 50, mw - 40, qb, 70, 40, 1.17, fg, null, ac, 0);
      if (s.handlung) {
        ctx.fillStyle = C.pink; ctx.fillRect(x, y5 + 40, mw, 3);
        lab(ctx, "Was du tun kannst", x, y5 + 76, ac);
        head(ctx, s.handlung, SANS, 400, x, y5 + 130, mw, H - y5 - 400, 38, 26, 1.4, fg, null, ac, 0);
      }
      ctx.font = "700 35px " + SANS; ctx.fillStyle = fg;
      var h1 = "Hinweis: "; ctx.fillText(h1, x, H - 190);
      var hw = ctx.measureText(h1).width;
      ctx.font = "400 35px " + SANS; ctx.fillText("Dies ist eine Meinung und keine Nachricht.", x + hw, H - 190);
    } else if (s.typ === "cta") {
      var y6 = head(ctx, "Teile das mit jemandem, der es wissen sollte.", IS, 400, x, y + 30, mw, 560, 168, 100, 1.08, fg, null, ac, 0.045);
      ctx.font = "400 46px " + SANS; ctx.fillStyle = fg;
      ctx.fillText("Speichern · Teilen · Kommentieren", x + 6, y6 + 40);
      ctx.font = "400 150px " + IS;
      var lw = ctx.measureText("Doytschland").width;
      ctx.fillStyle = fg; ctx.fillText("Doytschland", x, y6 + 150);
      ctx.strokeStyle = fg; ctx.lineWidth = 6; ctx.strokeText("Doytschland", x, y6 + 150);
      ctx.fillStyle = ac; ctx.fillText("Tv", x + lw, y6 + 150);
      ctx.strokeStyle = ac; ctx.strokeText("Tv", x + lw, y6 + 150);
      ctx.font = "400 46px " + SANS; ctx.fillStyle = fg;
      ctx.fillText("Folge uns für täglich eine Einordnung", x + 6, y6 + 330);
      if (s.frage) head(ctx, s.frage, SANS, 400, x + 6, y6 + 410, mw - 200, 170, 36, 26, 1.35, mu, null, ac, 0);
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
