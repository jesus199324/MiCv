/* Catálogo + modal de proyectos. Mejora progresiva: el HTML original queda oculto y sus nodos se reutilizan. */
(function(){
const sec=document.getElementById('proyectos');if(!sec)return;
const cases=[...sec.querySelectorAll('article.case')],projs=[...sec.querySelectorAll('article.proj')];
if(!cases.length)return;
const src=document.createElement('div');src.id='proy-src';src.hidden=true;
const sub=sec.querySelector('.sub');
cases.concat([sec.querySelector('.projects')]).forEach(n=>n&&src.appendChild(n));
sub.textContent='Ocho proyectos propios con demo en línea. Elegí uno para ver el problema, cómo lo resolví y la tecnología detrás.';
const hue={'Barber Studio':[200,'barber','/reservas'],'Sistema de Turnos':[160,'cal','/turnos'],'Route 66 Diner':[18,'burger','/menu'],'Delicious':[38,'grill','/promos'],'Centro Fitness Sayago':[262,'dumb','/horarios'],'Nuevo Cantón':[345,'pizza','/carta'],'CV Interactivo':[190,'doc','/cv'],'Pokédex con API':[48,'ball','/api']};
const glyph={barber:'<path d="M30 34l30 30M30 66l30-30" stroke-width="5"/><circle cx="26" cy="30" r="8"/><circle cx="26" cy="70" r="8"/>',cal:'<rect x="22" y="26" width="56" height="50" rx="6"/><path d="M22 42h56M36 20v12M64 20v12"/><path d="M34 54h8M46 54h8M58 54h8M34 64h8"/>',burger:'<path d="M24 46c0-14 12-22 26-22s26 8 26 22z"/><path d="M22 56h56M26 66h48"/><path d="M26 76c0 4 4 6 10 6h28c6 0 10-2 10-6z"/>',grill:'<path d="M26 50h48M30 62h40M34 74h32"/><path d="M42 22c-6 8 6 10 0 18M58 22c-6 8 6 10 0 18"/>',dumb:'<path d="M32 50h36M24 38v24M32 32v36M68 32v36M76 38v24"/>',pizza:'<path d="M50 78L24 30c16-10 36-10 52 0z"/><circle cx="46" cy="42" r="4"/><circle cx="56" cy="54" r="4"/>',doc:'<rect x="30" y="22" width="40" height="56" rx="5"/><path d="M38 38h24M38 48h24M38 58h14"/>',ball:'<circle cx="50" cy="50" r="28"/><path d="M22 50h56"/><circle cx="50" cy="50" r="8"/>'};
function cover(name,url){const [h,g,p]=hue[name]||[200,'doc','/'];
 return '<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="g'+h+'" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="hsl('+h+',70%,16%)"/><stop offset="1" stop-color="hsl('+((h+50)%360)+',60%,9%)"/></linearGradient></defs><rect width="320" height="200" fill="url(#g'+h+')"/><g stroke="hsl('+h+',80%,70%)" stroke-opacity=".08"><path d="M0 40h320M0 80h320M0 120h320M0 160h320M64 0v200M128 0v200M192 0v200M256 0v200"/></g><rect x="14" y="14" width="292" height="172" rx="10" fill="#050B16" fill-opacity=".55" stroke="hsl('+h+',80%,70%)" stroke-opacity=".35"/><circle cx="28" cy="28" r="3" fill="#FF5F57"/><circle cx="39" cy="28" r="3" fill="#FEBC2E"/><circle cx="50" cy="28" r="3" fill="#28C840"/><text x="68" y="31" font-family="IBM Plex Mono,monospace" font-size="9" fill="#8CA0C0">'+(url||'')+p+'</text><g transform="translate(110 46) scale(1.0)" fill="none" stroke="hsl('+h+',85%,70%)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">'+glyph[g]+'</g><text x="160" y="170" text-anchor="middle" font-family="Bricolage Grotesque,sans-serif" font-weight="800" font-size="17" fill="#E6F0FF">'+name+'</text></svg>'}
const FEAT=['Barber Studio','Sistema de Turnos','Route 66 Diner'];
const items=[];
cases.forEach(a=>{const t=a.querySelector('h3').textContent.trim();
 const ln=[...a.querySelectorAll('.lk a')];
 items.push({kind:'case',name:t,el:a,sub:a.querySelector('.case-sub')?.textContent||'',tags:[...a.querySelectorAll('.tg span')].map(s=>s.textContent),kpis:a.querySelector('.kpis'),links:ln,img:a.querySelector('.phones img')});});
projs.forEach(a=>{const t=a.querySelector('h3').textContent.trim();
 items.push({kind:'proj',name:t,el:a,sub:a.querySelector('p').textContent,tags:a.querySelector('.tags').textContent.split('·').map(s=>s.trim()),kpis:null,links:[...a.querySelectorAll('.lk a')],img:null});});
const dom=u=>{try{return new URL(u).host}catch(e){return''}};
function card(it,feat){const d=document.createElement('article');d.className='pc '+(feat?'feat':'sec');
 const demo=it.links[0];
 const cv=it.img&&!feat?'<img src="'+it.img.getAttribute('src')+'" alt="" loading="lazy">':cover(it.name,demo?dom(demo.href):'');
 const tags=it.tags.slice(0,feat?5:3).map(s=>'<span>'+s+'</span>').join('');
 d.innerHTML='<div class="pc-cover">'+cv+(it.kind==='proj'?'<span class="pc-flag">Aprendizaje</span>':'')+'</div><div class="pc-body"><h3>'+it.name+'</h3><p class="pc-sub">'+it.sub+'</p><div class="pc-tg">'+tags+'</div>'+(it.kpis?'<div class="pc-k">'+it.kpis.innerHTML+'</div>':'')+'<div class="pc-act"></div></div>';
 const act=d.querySelector('.pc-act');
 if(demo){const a=document.createElement('a');a.className='btn p';a.href=demo.href;a.target='_blank';a.rel='noopener';a.textContent='Ver demo';act.appendChild(a)}
 const b=document.createElement('button');b.type='button';b.className='btn';b.textContent='Ver detalles';b.addEventListener('click',()=>open(it,b));act.appendChild(b);
 return d}
const wrap=document.createElement('div');
const f=document.createElement('div');f.className='cat-feat';
items.filter(i=>FEAT.includes(i.name)).forEach(i=>f.appendChild(card(i,true)));
const h=document.createElement('h3');h.className='cat-sec-h';h.textContent='Más proyectos';
const s=document.createElement('div');s.className='cat-sec';
items.filter(i=>!FEAT.includes(i.name)).forEach(i=>s.appendChild(card(i,false)));
wrap.append(f,h,s);sub.after(wrap);sec.appendChild(src);
/* Modal */
let back,pm,last,cur,closing;
function build(){back=document.createElement('div');back.className='pm-back';back.hidden=true;
 back.innerHTML='<div class="pm" role="dialog" aria-modal="true" aria-labelledby="pm-t"><button type="button" class="pm-x" aria-label="Cerrar detalles">&times;</button><div class="pm-head"></div><div class="pm-scroll"></div></div>';
 document.body.appendChild(back);pm=back.firstChild;
 back.addEventListener('mousedown',e=>{if(e.target===back)close()});
 pm.querySelector('.pm-x').addEventListener('click',close);
 document.addEventListener('keydown',e=>{if(back.hidden)return;
  if(e.key==='Escape'){e.preventDefault();close()}
  if(e.key==='Tab'){const f=[...pm.querySelectorAll('a[href],button,input,select,textarea,[tabindex]:not([tabindex="-1"])')].filter(x=>!x.disabled&&x.offsetParent!==null);if(!f.length)return;const a=f[0],z=f[f.length-1];
   if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}}})}
const blk=(t,n)=>{const d=document.createElement('div');d.className='pm-blk';const h=document.createElement('h4');h.textContent=t;d.appendChild(h);d.appendChild(n);return d};
function open(it,btn){if(!pm)build();last=btn;cur=it;closing=false;
 const head=pm.querySelector('.pm-head'),bd=pm.querySelector('.pm-scroll');head.innerHTML='';bd.innerHTML='';
 const a=it.el,L=document.createElement('div');
 L.innerHTML='<h3 id="pm-t"></h3><p class="pm-sub"></p><div class="pm-links"></div>';
 L.querySelector('h3').textContent=it.name;L.querySelector('.pm-sub').textContent=it.sub;
 it.links.forEach(l=>{const c=document.createElement('a');c.href=l.href;c.target='_blank';c.rel='noopener';c.textContent=l.textContent;L.querySelector('.pm-links').appendChild(c)});
 head.appendChild(L);
 const c1=document.createElement('div'),c2=document.createElement('div');c1.className=c2.className='pm-col';
 const moved=[];const mv=(n,to)=>{if(!n)return null;moved.push([n,n.parentNode,n.nextSibling]);to.appendChild(n);return n};
 if(it.kind==='case'){
  const txt=a.querySelector('.case-txt'),ps=txt.querySelector('.ps'),ar=txt.querySelector('.arch'),tg=txt.querySelector('.tg'),nt=txt.querySelector('.note');
  const desc=txt.querySelector(':scope>p:not(.case-sub):not(.arch)');
  const p=document.createElement('p');p.textContent=desc.textContent;c1.appendChild(blk('Descripción general',p));
  c1.appendChild(blk('Problemas que resolví y cómo',mv(ps,document.createElement('div'))?.parentNode||ps));
  if(ar){c1.appendChild(blk('Arquitectura',mv(ar,document.createElement('div')).parentNode))}
  const dm=a.querySelector('.case-demo');const k=dm.querySelector('.kpis');
  const wd=document.createElement('div');wd.className='pm-demo';
  dm.querySelectorAll(':scope>*:not(.kpis)').forEach(n=>mv(n,wd));
  c2.appendChild(blk(wd.querySelector('.sim')?'Probalo acá':'Capturas',wd));
  if(k){c2.appendChild(blk('Métricas y resultados',mv(k,document.createElement('div')).parentNode))}
  c2.appendChild(blk('Tecnologías',mv(tg,document.createElement('div')).parentNode));
  if(nt){const w=document.createElement('div');mv(nt,w);c2.appendChild(w)}
 }else{
  const p=document.createElement('p');p.textContent=it.sub;c1.appendChild(blk('Descripción general',p));
  const pv=a.querySelector('.pv');if(pv){const w=document.createElement('div');w.className='pm-demo';mv(pv,w);c1.appendChild(blk('Vista previa',w))}
  const t=document.createElement('div');t.className='tg';t.innerHTML=it.tags.map(x=>'<span>'+x+'</span>').join('');c2.appendChild(blk('Tecnologías',t));
  const n=document.createElement('p');n.className='note';n.textContent='Proyecto de aprendizaje: sirvió para practicar '+it.tags.join(' y ')+'.';c2.appendChild(n);
 }
 bd.append(c1,c2);it._moved=moved;
 back.hidden=false;document.body.classList.add('pm-lock');
 requestAnimationFrame(()=>requestAnimationFrame(()=>back.classList.add('on')));
 bd.scrollTop=0;pm.querySelector('.pm-x').focus({preventScroll:true})}
function close(){if(closing||!cur)return;closing=true;back.classList.remove('on');
 const done=()=>{(cur._moved||[]).reverse().forEach(([n,p,nx])=>p.insertBefore(n,nx&&nx.parentNode===p?nx:null));
  back.hidden=true;document.body.classList.remove('pm-lock');cur=null;closing=false;last&&last.focus({preventScroll:true})};
 matchMedia('(prefers-reduced-motion:reduce)').matches?done():setTimeout(done,260)}
})();
