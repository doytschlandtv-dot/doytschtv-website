/* Briefing-Archiv: Liste der Tage, Detailansicht mit Audio und Text.
   Daten kommen aus briefings.js (window.BRIEFINGS), die täglich automatisch aktualisiert wird. */
(function () {
  "use strict";
  var data = (window.BRIEFINGS || []).slice().sort(function (a, b) { return a.datum < b.datum ? 1 : -1; });
  var root = document.getElementById("briefing");
  if (!root) return;
  var TZ = "Europe/Berlin";

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function fmt(iso, opts) {
    return new Date(iso + "T12:00:00").toLocaleDateString("de-DE", Object.assign({ timeZone: TZ }, opts));
  }
  function clear() { root.textContent = ""; }

  /* ---------- Liste ---------- */
  function list() {
    clear();
    document.title = "Briefing – DoytschlandTv";
    var head = el("div", "pagehead");
    head.appendChild(el("h1", null, "Briefing"));
    head.appendChild(el("p", null, "Morgens: Was heute ansteht. Abends: Was wirklich passiert ist. Zum Lesen und Hören."));
    root.appendChild(head);

    if (!data.length) {
      root.appendChild(el("p", "b-empty", "Das erste Briefing erscheint in Kürze."));
      return;
    }
    var wrap = el("div", "b-list");
    data.forEach(function (d) {
      var a = el("a", "b-day");
      a.href = "#" + d.datum;
      var left = el("div", "b-day-d");
      left.appendChild(el("span", "b-day-wd", fmt(d.datum, { weekday: "long" })));
      left.appendChild(el("span", "b-day-n", fmt(d.datum, { day: "numeric", month: "long", year: "numeric" })));
      a.appendChild(left);

      var mid = el("div", "b-day-m");
      var themen = d.morgen && d.morgen.themen ? d.morgen.themen.join(" · ") : "";
      if (themen) mid.appendChild(el("p", "b-day-t", themen));
      var badges = el("div", "b-badges");
      badges.appendChild(el("span", "b-badge" + (d.morgen ? " on" : ""), d.morgen ? "Morning Briefing" + (d.morgen.dauer ? " · " + d.morgen.dauer : "") : "Morning Briefing folgt"));
      badges.appendChild(el("span", "b-badge" + (d.abend ? " on" : ""), d.abend ? "Tagesrückblick" + (d.abend.dauer ? " · " + d.abend.dauer : "") : "Tagesrückblick folgt um 19:00 Uhr"));
      if (d.storys && d.storys.length) badges.appendChild(el("span", "b-badge on", "Storys · " + d.storys.length));
      if (d.karussells && d.karussells.length) badges.appendChild(el("span", "b-badge on", "Karussells · " + d.karussells.length));
      mid.appendChild(badges);
      a.appendChild(mid);
      a.appendChild(el("span", "b-arrow", "›"));
      wrap.appendChild(a);
    });
    root.appendChild(wrap);
  }

  /* ---------- Detail ---------- */
  function paragraph(host, t) {
    if (/^(Erstens|Zweitens|Drittens|Viertens|Fünftens|Sechstens)\b/.test(t)) {
      host.appendChild(el("h3", "b-h", t));
    } else if (/^Unsere Meinung:/.test(t)) {
      var q = el("div", "b-meinung");
      q.appendChild(el("span", "b-meinung-k", "Unsere Meinung"));
      q.appendChild(el("p", null, t.replace(/^Unsere Meinung:\s*/, "")));
      host.appendChild(q);
    } else {
      host.appendChild(el("p", null, t));
    }
  }

  function edition(ed, label, key, day) {
    var box = el("div", "b-ed");
    if (!ed) {
      box.appendChild(el("p", "b-empty", key === "abend"
        ? "Der Tagesrückblick erscheint täglich um 19:00 Uhr."
        : "Das Morning Briefing erscheint täglich am frühen Morgen."));
      return box;
    }
    if (ed.audio) {
      var ap = el("div", "b-audio");
      var au = document.createElement("audio");
      au.controls = true; au.preload = "none"; au.src = ed.audio;
      au.setAttribute("aria-label", label + " anhören");
      ap.appendChild(au);
      ap.appendChild(el("p", "b-ki", "Hinweis: Diese Stimme ist KI-generiert (nach der Stimme von Cengiz Bozkurt)."));
      box.appendChild(ap);
    }
    var tx = el("div", "b-text");
    (ed.text || []).forEach(function (t) { paragraph(tx, t); });
    box.appendChild(tx);

    var q = ed.quellen || [];
    if (q.length) {
      var det = el("details", "b-quellen");
      det.appendChild(el("summary", null, "Quellen (" + q.length + ")"));
      var ul = el("ul");
      q.forEach(function (s) {
        var li = el("li");
        if (s.url) {
          var a = el("a", null, s.titel);
          a.href = s.url; a.target = "_blank"; a.rel = "noopener";
          li.appendChild(a);
        } else { li.textContent = s.titel; }
        ul.appendChild(li);
      });
      det.appendChild(ul);
      box.appendChild(det);
    }
    return box;
  }

  function detail(day, tab) {
    clear();
    var label = fmt(day.datum, { weekday: "long", day: "numeric", month: "long", year: "numeric" });
    document.title = label + " – Briefing – DoytschlandTv";

    var back = el("a", "b-back", "‹ Alle Tage");
    back.href = "#";
    root.appendChild(back);
    root.appendChild(el("h1", "b-title", label));

    var tabs = el("div", "b-tabs");
    tabs.setAttribute("role", "tablist");
    var panel = el("div", "b-panel");
    panel.setAttribute("role", "tabpanel");
    var defs = [
      { key: "morgen", name: "Morning Briefing" },
      { key: "abend", name: "Tagesrückblick" },
      { key: "storys", name: "Storys" },
      { key: "karussell", name: "Karussells" }
    ];
    function show(key) {
      Array.prototype.forEach.call(tabs.children, function (b) {
        b.setAttribute("aria-selected", b.getAttribute("data-k") === key ? "true" : "false");
      });
      panel.textContent = "";
      var d = defs.filter(function (x) { return x.key === key; })[0];
      panel.appendChild(key === "karussell" ? (window.DTVK ? window.DTVK.view(day) : el("p", "b-empty", "")) : key === "storys" ? (window.DTVK ? window.DTVK.storyView(day) : el("p", "b-empty", "")) : edition(day[key], d.name, key, day));
      try { history.replaceState(null, "", "#" + day.datum + (key === "abend" ? "/abend" : key === "karussell" ? "/karussell" : key === "storys" ? "/storys" : "")); } catch (e) {}
    }
    defs.forEach(function (d) {
      var b = el("button", "b-tab", d.name);
      b.type = "button";
      b.setAttribute("role", "tab");
      b.setAttribute("data-k", d.key);
      b.addEventListener("click", function () { show(d.key); });
      tabs.appendChild(b);
    });
    root.appendChild(tabs);
    root.appendChild(panel);
    show(tab === "abend" || tab === "karussell" || tab === "storys" ? tab : "morgen");
  }

  function route() {
    var h = location.hash.replace(/^#/, "");
    var parts = h.split("/");
    var day = data.filter(function (d) { return d.datum === parts[0]; })[0];
    if (day) detail(day, parts[1]); else list();
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);
  route();
})();
