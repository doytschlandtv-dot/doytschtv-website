/* Seite "Nachrichten": Hintergrund-Karussells (vorrat.js) als Kartenraster; Klick zeigt das Karussell zum Speichern und Teilen. */
(function () {
  "use strict";
  var grid = document.getElementById("grid"), view = document.getElementById("vorrat-view");
  var list = window.VORRAT || [];
  if (!grid || !list.length || !window.DTVK) return;
  function el(t, c, x) { var n = document.createElement(t); if (c) n.className = c; if (x != null) n.textContent = x; return n; }
  var cards = [];
  list.forEach(function (k) {
    var a = el("article", "post"); a.setAttribute("data-cat", k.kat);
    var top = el("div"); top.appendChild(el("p", "k", k.kat)); top.appendChild(el("h3", null, k.thema)); a.appendChild(top);
    var b = el("button", "k-btn k-btn-ghost", "Karussell ansehen · " + k.slides.length + " Slides"); b.type = "button";
    b.addEventListener("click", function () { show(k); });
    a.appendChild(b); grid.appendChild(a); cards.push(a);
  });
  function show(k) {
    view.textContent = ""; view.hidden = false;
    var h = el("h2", "k-h", k.thema); view.appendChild(h);
    view.appendChild(window.DTVK.view({ karussells: [k] }));
    var c = el("button", "k-btn k-btn-ghost", "Schließen"); c.type = "button"; c.style.marginTop = "1rem";
    c.addEventListener("click", function () { view.hidden = true; view.textContent = ""; });
    view.appendChild(c);
    view.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  var chips = document.querySelectorAll(".chip");
  chips.forEach(function (c) {
    c.addEventListener("click", function () {
      var f = c.getAttribute("data-f");
      chips.forEach(function (x) { x.setAttribute("aria-pressed", x === c ? "true" : "false"); });
      cards.forEach(function (p) { p.hidden = !(f === "Alle" || p.getAttribute("data-cat") === f); });
    });
  });
})();
