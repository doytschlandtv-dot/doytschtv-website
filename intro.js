/* Intro beim ersten Öffnen der Startseite (einmal pro Sitzung): Ring fällt von oben, Name, Slogan, dann Startseite und Pop-up. */
(function () {
  "use strict";
  var KEY = "dtv-intro", SLOGAN = "Das Wichtigste. Eingeordnet.", HOLD = 7200;
  try { if (sessionStorage.getItem(KEY)) return; } catch (e) {}
  if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  window.__dtvIntro = true;
  var ov = document.createElement("div"); ov.className = "in-ov"; ov.setAttribute("role", "presentation");
  ov.innerHTML = '<div class="in-ring" aria-hidden="true"><span>D</span></div><img class="in-nm" src="logo.png" alt="DoytschlandTv" width="136" height="25"><p class="in-sl">' + SLOGAN + '</p><button class="in-sk" type="button">Überspringen</button>';
  document.body.insertBefore(ov, document.body.firstChild);
  document.documentElement.style.overflow = "hidden";
  var done = false, t;
  function end() {
    if (done) return; done = true; clearTimeout(t);
    try { sessionStorage.setItem(KEY, "1"); } catch (e) {}
    ov.classList.add("out"); document.documentElement.style.overflow = "";
    document.removeEventListener("keydown", key);
    setTimeout(function () { ov.remove(); window.__dtvIntro = false; window.dispatchEvent(new Event("dtv-intro-done")); }, 700);
  }
  function key(e) { if (e.key === "Escape" || e.key === "Enter" || e.key === " ") end(); }
  ov.addEventListener("click", end); document.addEventListener("keydown", key);
  t = setTimeout(end, HOLD);
})();
