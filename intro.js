/* Intro beim ersten Öffnen der Startseite (einmal pro Sitzung): Ring fällt von oben, Name, Slogan, Social-Media-Kanäle, dann Startseite. */
(function () {
  "use strict";
  var KEY = "dtv-intro", SLOGAN = "Das Wichtigste. Eingeordnet.";
  var IG = "https://www.instagram.com/doytschlandtv/", TT = "https://www.tiktok.com/@doytschlandtv";
  var icoIG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.3" cy="6.7" r=".6" fill="currentColor"/></svg>', icoTT = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.1v12.4a2.6 2.6 0 1 1-1.8-2.5V9.7a5.7 5.7 0 1 0 4.9 5.7V9a7.3 7.3 0 0 0 4.3 1.4V7.3a4.3 4.3 0 0 1-3.2-1.5z"/></svg>';
  try { if (sessionStorage.getItem(KEY)) return; } catch (e) {}
  window.__dtvIntro = true;
  var ov = document.createElement("div"); ov.className = "in-ov"; ov.setAttribute("role", "dialog"); ov.setAttribute("aria-modal", "true"); ov.setAttribute("aria-label", "Willkommen bei DoytschlandTv");
  ov.innerHTML = '<div class="in-ring" aria-hidden="true"><span>D</span></div><img class="in-nm" src="logo.png" alt="DoytschlandTv" width="136" height="25"><p class="in-sl">' + SLOGAN + '</p>' +
    '<div class="in-so"><p>Folge uns auf unseren Social-Media-Kanälen</p><div class="pu-b"><a href="' + IG + '" target="_blank" rel="noopener">' + icoIG + 'Instagram</a><a href="' + TT + '" target="_blank" rel="noopener">' + icoTT + 'TikTok</a></div><button class="in-go" type="button">Weiter zur Startseite</button></div>' +
    '<button class="in-sk" type="button">Überspringen</button>';
  document.body.insertBefore(ov, document.body.firstChild);
  document.documentElement.style.overflow = "hidden";
  var done = false;
  function end() {
    if (done) return; done = true;
    try { sessionStorage.setItem(KEY, "1"); } catch (e) {}
    ov.classList.add("out"); document.documentElement.style.overflow = "";
    document.removeEventListener("keydown", key);
    setTimeout(function () { ov.remove(); window.__dtvIntro = false; window.dispatchEvent(new Event("dtv-intro-done")); }, 700);
  }
  function key(e) { if (e.key === "Escape") end(); }
  ov.querySelector(".in-go").addEventListener("click", end); ov.querySelector(".in-sk").addEventListener("click", end);
  document.addEventListener("keydown", key);
  setTimeout(function () { var g = ov.querySelector(".in-go"); if (g && !done) g.focus({ preventScroll: true }); }, 6200);
})();
