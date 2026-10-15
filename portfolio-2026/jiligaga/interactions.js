(()=>{
 const links=[...document.querySelectorAll('.case-nav nav a')];
 const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(link=>{const active=link.hash==='#'+entry.target.id;link.classList.toggle('is-active',active);if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current')})}})},{rootMargin:'-15% 0px -65% 0px',threshold:0});
 links.forEach(link=>{const target=document.querySelector(link.hash);if(target)observer.observe(target)});
 const dialog=document.getElementById('case-art-dialog'),preview=dialog.querySelector('img');
 dialog.querySelector('button').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',e=>{if(e.target===dialog){const b=dialog.getBoundingClientRect();if(e.clientX<b.left||e.clientX>b.right||e.clientY<b.top||e.clientY>b.bottom)dialog.close()}});
 document.querySelectorAll('.phone-screen img,.journey-tablet-screen img,.expression-media img').forEach(img=>{
  img.tabIndex=0;img.setAttribute('role','button');img.setAttribute('aria-label','查看设计稿：'+img.alt);
  const open=()=>{preview.src=img.src;preview.alt=img.alt;dialog.showModal()};
  img.addEventListener('click',open);img.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open()}});
 });
})();
