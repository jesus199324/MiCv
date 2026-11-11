/* Eventos de uso: qué botones y enlaces se tocan. Solo envía datos si Google Analytics está cargado. */
(function(){
const send=(name,p)=>{try{window.gtag&&gtag('event',name,p||{})}catch(e){}};
document.addEventListener('click',e=>{
 const a=e.target.closest('a,button');if(!a)return;
 const h=a.getAttribute('href')||'',t=(a.textContent||'').trim().slice(0,40);
 const card=a.closest('.pc'),modal=a.closest('.pm');
 const proj=card?card.querySelector('h3')?.textContent:modal?modal.querySelector('h3')?.textContent:'';
 if(/\.pdf$/i.test(h))return send('descargar_cv');
 if(h.startsWith('mailto:'))return send('contacto',{canal:'email'});
 if(h.includes('wa.me'))return send('contacto',{canal:'whatsapp'});
 if(h.includes('linkedin.com'))return send('contacto',{canal:'linkedin'});
 if(a.tagName==='BUTTON'&&card&&a.classList.contains('btn'))return send('ver_detalles',{proyecto:proj});
 if(proj&&/^https?:/.test(h))return send(/github/.test(h)?'ver_codigo':'ver_demo',{proyecto:proj});
});
})();
