/* Reel-Fenster: öffnet das Video erst beim Antippen */
(function(){
  var m=document.createElement('div');m.className='reelmodal';m.setAttribute('role','dialog');m.setAttribute('aria-modal','true');
  m.innerHTML='<div class="rm-box"><button type="button" class="x" aria-label="Schließen">&times;</button><video controls playsinline></video><p></p></div>';
  document.body.appendChild(m);
  var v=m.querySelector('video'),t=m.querySelector('p');
  function close(){m.classList.remove('on');v.pause();v.removeAttribute('src');v.load();}
  m.addEventListener('click',function(e){if(e.target===m||e.target.className==='x')close();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
  document.addEventListener('click',function(e){
    var b=e.target.closest&&e.target.closest('.reelbtn');if(!b)return;
    v.poster=b.dataset.poster||'';v.src=b.dataset.reel;t.textContent=b.dataset.titel||'';m.classList.add('on');v.play().catch(function(){});
  });
})();
