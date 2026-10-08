/* Karussell-Ansicht: zeichnet Instagram-Slides (1080 x 1350) aus den Daten im Browser,
   zum Speichern oder direkten Teilen. Daten: day.karussells = [{ thema, slides:[...], caption, hashtags }]
   Slide-Typen: hook, fakten, zahl, betrifft, einordnung, vergleich (nur bei echter Verzerrung), meinung, cta. */
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
      document.fonts.load('700 40px "Bodoni Moda"'),
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
    function wordsFit() {
      for (var k = 0; k < words.length; k++) if (ctx.measureText(words[k]).width > maxW) return false;
      return true;
    }
    for (var s = start; s >= min; s -= 2) {
      ctx.font = weight + " " + s + "px " + fam;
      var lines = layout(ctx, words, maxW);
      if (lines.length * s * lh <= maxH && wordsFit()) return { size: s, lines: lines };
    }
    var m = min;
    ctx.font = weight + " " + m + "px " + fam;
    while (!wordsFit() && m > 30) { m -= 2; ctx.font = weight + " " + m + "px " + fam; }
    return { size: m, lines: layout(ctx, words, maxW) };
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
  /* Themes: light / dark / red */
  var TH = {
    light: { bg: C.paper, fg: C.ink, mu: "#4a4740", ac: C.red, rule: "#55524b", soft: "#e3bcc0" },
    dark:  { bg: "#101010", fg: "#f9f7f1", mu: "#b9b5aa", ac: "#ff5a52", rule: "#6b675e", soft: "#3a3834" },
    red:   { bg: "#b3151b", fg: "#ffffff", mu: "#f4d3d3", ac: "#ffffff", rule: "#e58a8e", soft: "#d0555a" }
  };
  var THEME_OF = { hook: "dark", fakten: "light", zahl: "red", betrifft: "light", einordnung: "light", vergleich: "light", meinung: "dark", cta: "light" };
  /* Logo-Marke: weißes D im roten Kreis */
  function mark(ctx, cx, cy, r, ringCol) {
    ctx.save();
    if (ringCol) { ctx.fillStyle = ringCol; ctx.beginPath(); ctx.arc(cx, cy, r + Math.max(3, r * 0.07), 0, 6.2832); ctx.fill(); }
    ctx.fillStyle = C.red; ctx.beginPath(); ctx.arc(cx, cy, r, 0, 6.2832); ctx.fill();
    ctx.font = "700 " + Math.round(r * 1.25) + 'px "Bodoni Moda", ' + PF;
    ctx.fillStyle = "#ffffff"; ctx.textAlign = "center"; ctx.textBaseline = "alphabetic";
    ctx.fillText("D", cx, cy + r * 0.44);
    ctx.restore(); ctx.textAlign = "left"; ctx.textBaseline = "top";
  }
  /* Kennzeichnung "300 Sekunden" (Kolumne): roter Balken rechts im Kopf */
  function band(ctx, text, xr, y) {
    ctx.save(); ctx.font = "700 26px " + SANS; setLS(ctx, 2);
    var t = String(text).toUpperCase(), w = ctx.measureText(t).width + 44;
    ctx.fillStyle = C.red; rr(ctx, xr - w, y, w, 56, 28); ctx.fill();
    ctx.fillStyle = "#ffffff"; ctx.textBaseline = "middle"; ctx.fillText(t, xr - w + 22, y + 29);
    ctx.restore(); setLS(ctx, 0); ctx.textBaseline = "top";
  }
  function draw(canvas, s, i, n) {
    canvas.width = W; canvas.height = H;
    var ctx = canvas.getContext("2d");
    var T = TH[s.theme || THEME_OF[s.typ] || "light"];
    var fg = T.fg, mu = T.mu, ac = T.ac;
    ctx.fillStyle = T.bg; ctx.fillRect(0, 0, W, H);
    ctx.textBaseline = "top"; setLS(ctx, 0);

    /* Kopf */
    mark(ctx, PAD + 38, 84, 38, T === TH.red ? "#ffffff" : null);
    var hx = PAD + 38 * 2 + 22;
    ctx.font = "700 48px " + PF; ctx.fillStyle = fg;
    ctx.fillText("Doytschland", hx, 58);
    var wd = ctx.measureText("Doytschland").width;
    ctx.fillStyle = (T === TH.red) ? "#ffffff" : (T === TH.dark ? "#ff5a52" : C.red);
    ctx.fillText("Tv", hx + wd, 58);
    if (s.band) band(ctx, s.band, W - PAD, 56);
    /* Fortschrittsbalken */
    var segW = (W - 2 * PAD - (n - 1) * 10) / n;
    for (var k = 0; k < n; k++) {
      ctx.fillStyle = k <= i ? ac : T.soft;
      ctx.fillRect(PAD + k * (segW + 10), 160, segW, 8);
    }

    var x = PAD, mw = W - 2 * PAD, y = 240, bottom = H - 150;
    function counter() {
      ctx.font = "700 40px " + PF; ctx.fillStyle = ac; ctx.textBaseline = "top";
      var cnt = (i + 1) + "/" + n; ctx.fillText(cnt, W - PAD - ctx.measureText(cnt).width, H - 110);
    }
    function foot(q) {
      if (q) {
        var f = fit(ctx, "Quelle: " + q, SANS, 400, mw - 160, 80, 28, 22, 1.3);
        drawLines2(ctx, f, x, H - 110, 1.3, mu, null, mu, 0);
      }
      counter();
    }

    if (s.typ === "hook") {
      lab(ctx, s.kicker || "Politik", x, y, ac);
      head(ctx, s.titel, IS, 400, x, y + 150, mw, 880, 250, 110, 1.04, fg, hlSet(s.rot), ac, 0.02);
      ctx.font = "400 40px " + SANS; ctx.fillStyle = mu; ctx.fillText("Wische für die Einordnung  →", x, H - 110);
    } else if (s.typ === "fakten") {
      lab(ctx, s.label || "Was passiert ist", x, y, ac);
      var y2 = head(ctx, s.titel, IS, 400, x, y + 80, mw, 360, 140, 80, 1.04, fg, null, ac, 0.004);
      ctx.fillStyle = ac; ctx.fillRect(x, y2 + 30, 120, 8);
      head(ctx, s.text, SANS, 400, x, y2 + 90, mw, bottom - y2 - 120, 56, 32, 1.4, fg, null, ac, 0);
      foot(s.quelle);
    } else if (s.typ === "zahl") {
      lab(ctx, s.label || "Die Zahl", x, y, fg);
      var m = String(s.zahl || "").match(/^(\S+)\s*(.*)$/) || [0, s.zahl, ""];
      var num = m[1], unit = m[2], fs = 520;
      if (/^%$/.test(unit)) { num = num + " %"; unit = ""; }
      ctx.font = "400 " + fs + "px " + PF;
      while (ctx.measureText(num).width > mw && fs > 150) { fs -= 10; ctx.font = "400 " + fs + "px " + PF; }
      ctx.fillStyle = fg; ctx.fillText(num, x - 10, y + 90);
      var uy = y + 90 + fs * 1.05;
      if (unit) { uy = head(ctx, unit, IS, 400, x, uy, mw, 200, 170, 80, 1.0, fg, null, ac, 0.02); }
      head(ctx, s.text, SANS, 400, x, Math.max(uy + 40, 900), mw, bottom - Math.max(uy + 40, 900), 52, 32, 1.35, fg, null, ac, 0);
      foot(s.quelle);
    } else if (s.typ === "betrifft") {
      lab(ctx, s.label || "Warum dich das betrifft", x, y, ac);
      var y3 = head(ctx, s.titel, IS, 400, x, y + 80, mw, 200, 104, 70, 1.04, fg, null, ac, 0.004);
      var pts = s.punkte || [], top = y3 + 40, avail = bottom - top + 20, rowH = Math.min(270, avail / Math.max(1, pts.length));
      pts.forEach(function (p, k) {
        var ry = top + k * rowH;
        ctx.fillStyle = T.soft; ctx.fillRect(x, ry, mw, 3);
        ctx.font = "400 110px " + PF; ctx.fillStyle = ac; ctx.fillText(String(k + 1), x, ry + 24);
        var tx = x + 120;
        ctx.font = "700 44px " + SANS; ctx.fillStyle = fg; ctx.fillText(p.kopf, tx, ry + 32);
        head(ctx, p.text, SANS, 400, tx, ry + 88, mw - 120, rowH - 92, 40, 30, 1.32, mu, null, ac, 0);
      });
      foot(s.quelle);
    } else if (s.typ === "einordnung") {
      lab(ctx, s.label || "Einordnung", x, y, ac);
      ctx.fillStyle = ac; ctx.fillRect(x, y + 90, 10, bottom - y - 120);
      var y4 = head(ctx, s.titel, IS, 400, x + 50, y + 90, mw - 50, 360, 120, 70, 1.04, fg, null, ac, 0.004);
      head(ctx, s.text, SANS, 400, x + 50, y4 + 40, mw - 50, bottom - y4 - 70, 52, 32, 1.4, fg, null, ac, 0);
      foot(s.quelle);
    } else if (s.typ === "vergleich") {
      lab(ctx, s.labelA || "Behauptung", x, y, mu);
      var yb = head(ctx, s.behauptung, PF, 400, x, y + 70, mw, 330, 64, 36, 1.25, mu, null, ac, 0);
      ctx.fillStyle = ac; ctx.fillRect(x, yb + 50, mw, 6);
      lab(ctx, s.labelB || "Fakt", x, yb + 110, ac);
      head(ctx, s.fakt, IS, 400, x, yb + 180, mw, bottom - yb - 210, 110, 52, 1.1, fg, null, ac, 0.01);
      foot(s.quelle);
    } else if (s.typ === "meinung") {
      lab(ctx, "Unsere Einordnung – Meinung", x, y, ac);
      ctx.font = "400 240px " + PF; ctx.fillStyle = ac; ctx.fillText("„", x - 6, y + 10);
      var qb = s.handlung ? 560 : 760;
      var y5 = head(ctx, String(s.text || "").replace(/^[„“"]|[“"]$/g, ""), IS, 400, x, y + 300, mw, qb, 100, 54, 1.1, fg, null, ac, 0.01);
      if (s.handlung) {
        ctx.fillStyle = T.soft; ctx.fillRect(x, y5 + 40, mw, 3);
        lab(ctx, "Was du tun kannst", x, y5 + 76, ac);
        head(ctx, s.handlung, SANS, 400, x, y5 + 130, mw, bottom - y5 - 140, 42, 28, 1.4, fg, null, ac, 0);
      }
      ctx.font = "700 30px " + SANS; ctx.fillStyle = mu; ctx.fillText("MEINUNG, KEINE NACHRICHT", x, H - 110);
      counter();
    } else if (s.typ === "cta") {
      lab(ctx, "Deine Meinung", x, y, ac);
      var yq = head(ctx, s.frage || "Was denkst du?", IS, 400, x, y + 80, mw, 520, 180, 90, 1.05, fg, null, ac, 0.025);
      ctx.fillStyle = ac; ctx.fillRect(x, yq + 50, 120, 8);
      ctx.font = "400 46px " + SANS; ctx.fillStyle = fg;
      var zl = s.zeilen || ["Kommentieren · Speichern · Teilen", "Folge uns für täglich eine Einordnung."];
      ctx.fillText(zl[0], x, yq + 110);
      ctx.fillText(zl[1], x, yq + 175);
      mark(ctx, x + 80, H - 290, 80, null);
      ctx.font = "400 120px " + IS;
      var lw = ctx.measureText("Doytschland").width, lx = x + 200;
      ctx.fillStyle = fg; ctx.fillText("Doytschland", lx, H - 345);
      ctx.fillStyle = C.red; ctx.fillText("Tv", lx + lw, H - 345);
      counter();
    }
  }

  /* --- Storys (10 Sekunden): 1080 x 1920, optional mit frei lizenziertem Foto --- */
  var SW = 1080, SH = 1920;
  function drawStory(canvas, s, img, i, n, live) {
    canvas.width = SW; canvas.height = SH;
    var ctx = canvas.getContext("2d");
    var photo = !!img;
    var T = TH[s.theme || (i === 0 ? "dark" : "dark")];
    var fg = T.fg, ac = T.ac, mu = T.mu;
    ctx.fillStyle = T.bg; ctx.fillRect(0, 0, SW, SH);
    if (photo) {
      var r = Math.max(SW / img.width, SH / img.height), w = img.width * r, h = img.height * r;
      ctx.drawImage(img, (SW - w) / 2, (SH - h) / 2, w, h);
      var g = ctx.createLinearGradient(0, 0, 0, SH);
      g.addColorStop(0, "rgba(10,10,10,.65)"); g.addColorStop(.3, "rgba(10,10,10,.35)");
      g.addColorStop(.55, "rgba(10,10,10,.7)"); g.addColorStop(1, "rgba(10,10,10,.95)");
      ctx.fillStyle = g; ctx.fillRect(0, 0, SW, SH);
    }
    ctx.textBaseline = "top"; setLS(ctx, 0);
    /* Sicherer Bereich: oben 250 px und unten 340 px bleiben frei (Instagram-Oberfläche) */
    var x = 90, mw = SW - 180;
    mark(ctx, x + 38, 300, 38, null);
    ctx.font = "700 48px " + PF; ctx.fillStyle = fg;
    ctx.fillText("Doytschland", x + 100, 274);
    var wd = ctx.measureText("Doytschland").width;
    ctx.fillStyle = ac; ctx.fillText("Tv", x + 100 + wd, 274);
    if (s.band) band(ctx, s.band, x + mw, 272);
    var segW = (mw - (n - 1) * 10) / n;
    for (var k = 0; k < n; k++) { ctx.fillStyle = (k <= i && !live) ? ac : T.soft; ctx.fillRect(x + k * (segW + 10), 372, segW, 8); }
    var y = 560;
    lab(ctx, s.kicker || "Das Wichtigste", x, y, ac);
    var y2 = head(ctx, s.titel, IS, 400, x, y + 80, mw, 560, 170, 90, 1.04, fg, hlSet(s.rot), ac, 0.02);
    ctx.fillStyle = ac; ctx.fillRect(x, y2 + 30, 120, 8);
    head(ctx, s.text, SANS, 400, x, y2 + 90, mw, 1500 - y2 - 90, 54, 30, 1.4, fg, null, ac, 0);
    if (s.quelle) { ctx.font = "400 28px " + SANS; ctx.fillStyle = mu; ctx.fillText("Quelle: " + s.quelle, x, 1560 - 30); }
    if (photo && s.bild && s.bild.urheber) {
      ctx.font = "400 22px " + SANS; ctx.fillStyle = "rgba(255,255,255,.75)";
      var cr = "Foto: " + s.bild.urheber + (s.bild.lizenz ? " (" + s.bild.lizenz + ")" : "") + (s.bild.quelle ? ", " + s.bild.quelle : "");
      ctx.fillText(cr.length > 90 ? cr.slice(0, 89) + "…" : cr, x, 1560 + 14);
    }
    ctx.font = "700 40px " + PF; ctx.fillStyle = ac;
    var cnt = (i + 1) + "/" + n; ctx.fillText(cnt, SW - x - ctx.measureText(cnt).width, 1560 + 4);
  }
  function loadImg(url) {
    return new Promise(function (res) {
      if (!url) return res(null);
      var im = new Image(); im.crossOrigin = "anonymous";
      im.onload = function () { res(im); }; im.onerror = function () { res(null); };
      im.src = url;
    });
  }
  function storyView(day) {
    var box = el("div", "k-wrap");
    var list = day.storys || [];
    if (!list.length) { box.appendChild(el("p", "b-empty", "Die Storys für diesen Tag erscheinen täglich am Morgen.")); return box; }
    box.appendChild(el("p", "k-intro", "Fertig für Instagram- und TikTok-Storys (9:16). Bilder sind frei lizenziert, die Quelle steht auf der Story. Speichern oder direkt teilen."));
    var row = el("div", "k-row k-row-story"), cvs = [], jobs = [];
    list.forEach(function (s, i) {
      var cv = document.createElement("canvas"); cv.className = "k-slide k-story";
      cv.setAttribute("role", "img"); cv.setAttribute("aria-label", "Story " + (i + 1) + ": " + (s.titel || ""));
      row.appendChild(cv); cvs.push(cv);
      jobs.push(function () { return loadImg(s.bild && s.bild.url).then(function (im) { drawStory(cv, s, im, i, list.length); }); });
    });
    box.appendChild(row);
    var act = el("div", "k-act");
    var b = el("button", "k-btn", "Alle Storys teilen oder speichern"); b.type = "button";
    b.addEventListener("click", function () {
      Promise.all(cvs.map(toBlob)).then(function (blobs) {
        if (blobs.some(function (x) { return !x; })) { b.textContent = "Export nicht möglich (Bildquelle gesperrt)"; return; }
        var files = blobs.map(function (bl, i) { return new File([bl], "doytschlandtv-story-" + day.datum + "-" + (i + 1) + ".png", { type: "image/png" }); });
        if (navigator.canShare && navigator.canShare({ files: files })) return navigator.share({ files: files }).catch(function () {});
        files.forEach(function (f, i) { setTimeout(function () { var a = document.createElement("a"); a.href = URL.createObjectURL(f); a.download = f.name; document.body.appendChild(a); a.click(); a.remove(); }, i * 400); });
      });
    });
    act.appendChild(b); box.appendChild(act);
    var src = el("div", "k-cap"); src.appendChild(el("span", "k-cap-k", "Bildnachweis"));
    list.forEach(function (s, i) {
      var t = s.bild ? "Story " + (i + 1) + ": " + (s.bild.urheber || "?") + (s.bild.lizenz ? ", " + s.bild.lizenz : "") + (s.bild.quelle ? ", " + s.bild.quelle : "") : "Story " + (i + 1) + ": ohne Foto";
      var p = el("p", null, t);
      if (s.bild && s.bild.seite) { p.appendChild(document.createTextNode(" ")); var a = el("a", "inline", "Quelle öffnen"); a.href = s.bild.seite; a.target = "_blank"; a.rel = "noopener"; p.appendChild(a); }
      src.appendChild(p);
    });
    box.appendChild(src);
    fontsReady().then(function () { jobs.forEach(function (j) { j(); }); });
    return box;
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
  function zslug(t) { return String(t || "").toLowerCase().replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40).replace(/-$/, ""); }
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
  window.DTVK = { view: view, storyView: storyView, drawStory: drawStory, loadImg: loadImg, draw: draw, fontsReady: fontsReady, caption: caption, slug: slug };
})();
