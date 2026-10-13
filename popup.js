(function () {
  var KEY = "dtv-popup";
  try { if (sessionStorage.getItem(KEY)) return; } catch (e) {}
  var IG = "https://www.instagram.com/doytschlandtv/", TT = "https://www.tiktok.com/@doytschlandtv";
  var icoIG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.3" cy="6.7" r=".6" fill="currentColor"/></svg>';
  var icoTT = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.1v12.4a2.6 2.6 0 1 1-1.8-2.5V9.7a5.7 5.7 0 1 0 4.9 5.7V9a7.3 7.3 0 0 0 4.3 1.4V7.3a4.3 4.3 0 0 1-3.2-1.5z"/></svg>';
  var cards = [
    ["d", "Aufhänger", "Der Tag in einem Satz", "Wischen für die Einordnung"],
    ["", "Was wir wissen", "Fakten, mit Quelle", "Jede Zahl belegt, jede Quelle genannt."],
    ["", "Einordnung", "Was bedeutet das?", "Fakt und Meinung klar getrennt."],
    ["d", "Unsere Meinung", "Klar gekennzeichnet", "Meinung, keine Nachricht."],
    ["", "Dein Part", "Speichern. Teilen. Folgen.", "Jeden Tag ein Thema."]
  ];
  var track = cards.map(function (c) { return '<div class="pu-c ' + c[0] + '"><div><small>' + c[1] + '</small><b>' + c[2] + '</b></div><span>' + c[3] + '</span></div>'; }).join("");
  var dots = cards.map(function (_, i) { return "<i" + (i ? "" : ' class="on"') + "></i>"; }).join("");
  var el = document.createElement("div");
  el.className = "pu"; el.setAttribute("role", "dialog"); el.setAttribute("aria-modal", "true"); el.setAttribute("aria-labelledby", "pu-h");
  el.innerHTML = '<div class="pu-box"><button class="pu-x" type="button" aria-label="Schließen">×</button>' +
    '<h2 id="pu-h">Folge uns auf unseren Social-Media-Kanälen</h2><p class="s">Jeden Tag ein Thema als Karussell. Mit Quellen, Meinung gekennzeichnet.</p>' +
    '<div class="pu-b"><a href="' + IG + '" target="_blank" rel="noopener">' + icoIG + 'Instagram</a><a href="' + TT + '" target="_blank" rel="noopener">' + icoTT + 'TikTok</a></div>' +
    '<div class="pu-ph" aria-hidden="true"><div class="pu-sc"><div class="pu-top"><i>D</i>doytschlandtv</div><div class="pu-tr">' + track + '</div><div class="pu-dots">' + dots + '</div></div></div>' +
    '<button class="pu-skip" type="button">Weiter zur Startseite</button></div>';
  var tr = el.querySelector(".pu-tr"), ds = el.querySelectorAll(".pu-dots i"), idx = 0, tm, last;
  function go(i) { idx = i; tr.scrollTo({ left: i * tr.clientWidth, behavior: "smooth" }); for (var k = 0; k < ds.length; k++) ds[k].className = k === i ? "on" : ""; }
  function close() {
    clearInterval(tm); el.classList.remove("on"); document.documentElement.style.overflow = "";
    try { sessionStorage.setItem(KEY, "1"); } catch (e) {}
    document.removeEventListener("keydown", key); if (last && last.focus) last.focus(); el.remove();
  }
  function key(e) {
    if (e.key === "Escape") return close();
    if (e.key !== "Tab") return;
    var f = el.querySelectorAll("a,button"), a = f[0], z = f[f.length - 1];
    if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
    else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
  }
  function open() {
    last = document.activeElement; document.body.appendChild(el); el.classList.add("on"); document.documentElement.style.overflow = "hidden";
    el.querySelector(".pu-skip").focus(); document.addEventListener("keydown", key);
    if (!(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches)) tm = setInterval(function () { go((idx + 1) % cards.length); }, 2200);
  }
  el.addEventListener("click", function (e) { if (e.target === el || e.target.classList.contains("pu-x") || e.target.classList.contains("pu-skip")) close(); });
  el.querySelectorAll(".pu-b a").forEach(function (a) { a.addEventListener("click", function () { try { sessionStorage.setItem(KEY, "1"); } catch (e) {} }); });
  var go0 = function () { setTimeout(open, 1200); };
  var go1 = function () { if (window.__dtvIntro) window.addEventListener("dtv-intro-done", function () { setTimeout(open, 500); }, { once: true }); else go0(); };
  if (document.readyState === "complete") go1(); else window.addEventListener("load", go1);
})();
