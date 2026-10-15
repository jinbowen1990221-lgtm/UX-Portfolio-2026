(()=>{
 const canvas=document.getElementById('canvas');
 function fit(){canvas.style.zoom=Math.max(1100,innerWidth)/1440;}
 fit();addEventListener('resize',fit);
 const targets={'20121:35464':'20121:35460','20121:35465':'20121:35585','20121:35466':'20121:35617','20121:35467':'20121:35773','20121:35468':'20121:35874','20121:35542':'20121:35617','20121:35920':'20121:35460'};
 const home=['20121:35462','20121:35918'];
 const smooth=()=>matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth';
 function activate(el,action,role='link'){el.tabIndex=0;el.setAttribute('role',role);el.addEventListener('click',action);el.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();action()}})}
 function bind(){
  if(!document.querySelector('[data-node-id="20121:35459"]')){requestAnimationFrame(bind);return}
  Object.entries(targets).forEach(([id,target])=>{const el=document.querySelector(`[data-node-id="${id}"]`);if(el)activate(el,()=>document.querySelector(`[data-node-id="${target}"]`).scrollIntoView({behavior:smooth()}),id==='20121:35542'?'button':'link')});
  home.forEach(id=>{const el=document.querySelector(`[data-node-id="${id}"]`);if(el)activate(el,()=>location.href='../bowen-portfolio.html#work')});
  const dialog=document.getElementById('image-dialog'),preview=dialog.querySelector('img');dialog.querySelector('button').onclick=()=>dialog.close();dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
  document.querySelectorAll('img[src$=".png"]').forEach(img=>{img.style.pointerEvents='auto';img.style.cursor='zoom-in';if(!img.alt)img.setAttribute('alt',img.closest('[data-name]')?.dataset.name||'小市集 go 原版界面');img.onclick=()=>{preview.src=img.src;preview.alt=img.alt;dialog.showModal()};if(img.closest('.mg-redesign')){img.tabIndex=0;img.setAttribute('role','button');img.setAttribute('aria-label','查看大图：'+img.alt);img.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();img.click()}})}});
  const chapters=[...document.querySelectorAll('.mg-index a')];
  const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){chapters.forEach(link=>{if(link.hash==='#'+entry.target.id)link.setAttribute('aria-current','true');else link.removeAttribute('aria-current')})}})},{rootMargin:'-15% 0px -60% 0px',threshold:0});
  chapters.forEach(link=>{const section=document.querySelector(link.hash);if(section)observer.observe(section)});
 }
 bind();
})();
