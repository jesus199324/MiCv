const D={
perfil:{nombre:"Alfredo Jesús Albornoz",rol:"Desarrollador de Software Full Stack Junior",ubicacion:"Montevideo, Uruguay",experiencia_it_anios:10,ingles:"técnico",estado:"Disponible para sumarme a un equipo como Desarrollador Full Stack Junior"},
skills:{backend:["Java","Spring Boot","Node.js","Python","Hibernate","MySQL","PostgreSQL","MongoDB"],frontend:["JavaScript","React","HTML","CSS","Tailwind"],devops:["Docker","AWS","Terraform","Jenkins"],sistemas:["Windows","Linux","macOS","Shell scripting","SSH"]},
experiencia:[{empresa:"CompoSystem",puesto:"Técnico 1A · Digitador · Chofer",desde:2026,hasta:"actualidad"},{empresa:"La Oferta Irresistible",puesto:"Encargado de Servicio PostVenta",desde:2020,hasta:2026},{empresa:"La Oferta Irresistible",puesto:"Técnico de TI",desde:2016,hasta:2020},{empresa:"C.C.O.P.E. · Ejército",puesto:"Operaciones",desde:2012,hasta:2016}],
proyectos:[{nombre:"Barber Studio",stack:["Java","Spring Boot","PostgreSQL"],infraestructura:["Vercel","Render","Neon","Cloudinary"],demo:"barberstudio-frontend.vercel.app"},{nombre:"Sistema de Turnos",stack:["Next.js","TypeScript","Redis"],infraestructura:["Vercel","Upstash"],demo:"sistema-de-turnos-tau.vercel.app"},{nombre:"Route 66 Diner",stack:["Angular","TypeScript"],infraestructura:["Vercel"],demo:"route66-ebon.vercel.app"},{nombre:"CV Interactivo",stack:["React"]},{nombre:"Pokédex API",stack:["JavaScript","REST"]}],
contacto:{email:"alfredojesus.albornoz@gmail.com",whatsapp:"+598 99 119 628",linkedin:"alfredojalbornoz",github:"JesusAlbornoz29"}};
const ADR=[
["ADR-001","Pasar de soporte IT a desarrollo de software","Aceptada","Después de 10 años en soporte y liderazgo técnico, resolvía a mano problemas que el software podía evitar.","Formarme como desarrollador en UTEC y Digital House (2022).","Entiendo la operación y al usuario desde adentro. Tengo que demostrar mi nivel con proyectos reales."],
["ADR-002","Especializarme en backend con Java y Spring Boot","Aceptada","Ya tenía una base full stack con React y Node.js.","Hacer la especialización backend (2024-2025).","Trabajo con APIs REST, bases de datos y despliegue. Dedico menos tiempo al diseño visual."],
["ADR-003","Cursar Ingeniería en Computación en la UdelaR","Pospuesto","Mi formación era muy práctica y me faltaba base teórica.","Estudiar la carrera en paralelo.","Gano fundamentos de algoritmos y estructuras de datos, a cambio de más carga de estudio."],
["ADR-004","Usar la IA como herramienta de trabajo","Aceptada","La IA ya cambió la forma de desarrollar software.","Cursar Iniciación al Desarrollo con IA en Big School (2025).","Itero más rápido. Reviso siempre lo que genera antes de usarlo."]];
const ad=document.getElementById("adrs");
ADR.forEach(([i,t,s,c,d,k])=>{const e=document.createElement("details");e.className="adr";e.innerHTML=`<summary><span class="id">${i}</span>${t}<span class="st">${s}</span></summary><dl><dt>Contexto</dt><dd>${c}</dd><dt>Decisión</dt><dd>${d}</dd><dt>Consecuencias</dt><dd>${k}</dd></dl>`;ad.appendChild(e)});
D.decisiones=ADR.map(a=>({id:a[0],titulo:a[1],estado:a[2]}));
// ---- Formación y diplomas ----
// Para mostrar un diploma: copiá el archivo (PDF o imagen) en assets/diplomas/ y completá "file"
// con su ruta, por ejemplo: file:"assets/diplomas/digital-house-backend.pdf". Si "file" es null no se muestra el enlace.
const FORM=[
{feat:1,t:"Desarrollador de Software · Énfasis Backend",org:"Digital House",when:"2022 - 2025",file:null,
 desc:"Formación en desarrollo de software con foco en backend, bases de datos, infraestructura y testing, complementada con habilidades de comunicación y trabajo en equipo.",
 tags:["Backend I, II y III","Bases de Datos I y II","Infraestructura I, II y III","Testing I y II","Programación orientada a objetos","Proyectos integradores I y II"],
 areas:{"Fundamentos":["Introducción a la informática","Programación imperativa","Programación orientada a objetos"],"Frontend y diseño":["Diseño UX/UI","Maquetado web y desarrollo frontend con JavaScript y frameworks"],"Backend":["Backend I, II y III"],"Datos e infraestructura":["Bases de Datos I y II","Infraestructura I, II y III"],"Calidad":["Testing I y II"],"Producto y proyectos":["Gestión de producto digital","Proyectos integradores I y II"],"Habilidades profesionales":["Comunicación efectiva","Trabajo en equipo y colaboración","Agilidad de aprendizaje","Resolución de problemas y gestión de proyectos","Posicionamiento profesional"]}},
{t:"Iniciación al Desarrollo con IA",org:"Big School",when:"2025",file:null,desc:"Integración de modelos de IA en el flujo de trabajo de desarrollo."},
{t:"Ingeniería en Computación",org:"UdelaR",when:"Pospuesto",file:null,desc:"Algoritmos, estructuras de datos y desarrollo de software avanzado."},
{t:"Bachiller Tecnológico en Informática",org:"Educación media tecnológica",when:"2016 – 2020",file:null,desc:"Base técnica en redes, hardware y lógica de programación, con fundamentos de Java y de sistemas operativos."}];
FORM.forEach(f=>{const a=document.createElement("article");a.className="ecard"+(f.feat?" feat":"");
let h=`<span class="yr">${f.when}</span><h3>${f.t}</h3><p class="org">${f.org}</p><p class="d">${f.desc}</p>`;
if(f.tags)h+=`<div class="tg">${f.tags.map(x=>`<span>${x}</span>`).join("")}</div>`;
if(f.areas)h+=`<details><summary>Ver contenidos por área</summary><div class="areas">${Object.entries(f.areas).map(([k,v])=>`<div><h4>${k}</h4><ul>${v.map(x=>`<li>${x}</li>`).join("")}</ul></div>`).join("")}</div></details>`;
if(f.file)h+=`<a class="dlk" href="${f.file}" target="_blank" rel="noopener">Ver diploma →</a>`;
a.innerHTML=h;document.getElementById("edu").appendChild(a)});
D.formacion=FORM.map(f=>({titulo:f.t,institucion:f.org,periodo:f.when}));
const EP=["perfil","skills","experiencia","formacion","proyectos","decisiones","contacto"];
const eps=document.getElementById("eps"),out=document.getElementById("out"),reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;
let timer;
function hl(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/("[^"]*")(\s*:)?|\b(\d+)\b/g,(m,s,c,n)=>n?`<span class="n">${n}</span>`:c?`<span class="k">${s}</span>${c}`:`<span class="s">${s}</span>`)}
function show(name){
  clearInterval(timer);
  [...eps.children].forEach(b=>b.setAttribute("aria-selected",b.dataset.n===name));
  const txt=JSON.stringify(D[name],null,2),ms=Math.floor(8+Math.random()*30);
  document.getElementById("req").textContent="GET /"+name;
  document.getElementById("ms").textContent=ms+" ms";
  if(reduce){out.innerHTML=hl(txt);return}
  let i=0;out.textContent="";
  timer=setInterval(()=>{i+=6;out.innerHTML=hl(txt.slice(0,i));if(i>=txt.length)clearInterval(timer)},12);
}
EP.forEach(n=>{const b=document.createElement("button");b.className="ep";b.type="button";b.dataset.n=n;b.setAttribute("role","tab");b.innerHTML=`<b>GET</b> /${n}`;b.onclick=()=>show(n);eps.appendChild(b)});
show("perfil");

const S={Backend:["Java","Spring Boot","Node.js","Python","Maven","Hibernate","MySQL","PostgreSQL","MongoDB"],Frontend:["JavaScript","TypeScript","React","HTML","CSS","Sass","Bootstrap","Tailwind CSS"],"DevOps":["Docker","AWS","Terraform","Ansible","Jenkins","Git"],Sistemas:["Windows","Linux","macOS","Shell scripting","SSH"],Testing:["JUnit","Postman","Debugging"]};
const chips=document.getElementById("chips"),pills=document.getElementById("pills");
Object.entries(S).forEach(([g,l])=>l.forEach(s=>{const p=document.createElement("span");p.className="pill";p.dataset.g=g;p.innerHTML='<i class="ic" style="--h:'+hue(s)+';animation-delay:'+(Math.random()*2).toFixed(2)+'s">'+ab(s)+'</i>'+s;pills.appendChild(p)}));
["Todo",...Object.keys(S)].forEach((g,i)=>{const c=document.createElement("button");c.className="chip";c.type="button";c.textContent=g;c.setAttribute("aria-pressed",i===0);c.onclick=()=>{[...chips.children].forEach(x=>x.setAttribute("aria-pressed",x===c));[...pills.children].forEach(p=>p.classList.toggle("off",g!=="Todo"&&p.dataset.g!==g))};chips.appendChild(c)});

function tl(id,items){const ul=document.getElementById(id);items.forEach(([y,t,d],i)=>{const li=document.createElement("li");li.innerHTML=`<details${i===0?' open':''}><summary><span class="yr">${y}</span>${t}</summary><p class="d">${d}</p></details>`;ul.appendChild(li)})}
tl("exp",[
["2026 – actualidad","Técnico 1A · Digitador · Chofer · CompoSystem"," Soporte técnico y mantenimiento de impresoras empresariales y equipos informáticos para organismos públicos."],
["2020 – 2026","Encargado de Servicio PostVenta · La Oferta Irresistible (LOi)","Lideré el área de servicio técnico: organicé al equipo, resolví casos complejos y mejoré los procesos de atención."],
["2016 – 2020","Técnico de TI · La Oferta Irresistible (LOi)","Soporte técnico, mantenimiento de equipos y resolución de incidentes para toda la empresa."],
["2012 – 2016","Centro Coordinador de Operaciones de Paz · Ejército","Trabajo en el Comando General del Ejército, en un entorno de disciplina y responsabilidad."],
["2011 – 2012","Técnico en Gestión y Soporte IT · Net Pc","Mi primer trabajo: soporte y gestión de sistemas para clientes."]]);

const W=["Desarrollador Full Stack Junior","de Java y Spring Boot","líder en soporte IT","estudiante de Ingeniería","un solucionador de problemas","alguien que aprende rápido"],rot=document.getElementById("rot");
let wi=0,ci=0,del=false;
function tick(){const w=W[wi];if(reduce){rot.textContent=W[wi=(wi+1)%W.length];return setTimeout(tick,2600)}
ci+=del?-1:1;rot.textContent=w.slice(0,ci);let t=del?35:70;if(!del&&ci===w.length){del=true;t=1600}else if(del&&ci===0){del=false;wi=(wi+1)%W.length;t=300}setTimeout(tick,t)}
rot.textContent="";tick();
const root=document.documentElement;
function hue(s){let h=0;for(const c of s)h=(h*31+c.charCodeAt(0))%360;return h}
function ab(s){return({JavaScript:'JS',TypeScript:'TS',PostgreSQL:'Pg',MongoDB:'Mg',AWS:'AWS','Spring Boot':'Sb','Node.js':'No','Tailwind CSS':'Tw',Windows:'Win',macOS:'mac','Shell scripting':'Sh',SSH:'SSH'})[s]||s.slice(0,2)}

const cv=document.createElement('canvas');cv.id='net';document.body.prepend(cv);const cx=cv.getContext('2d');
let CW,CH,N=[],mx=-999,my=-999;
function size(){CW=cv.width=innerWidth;CH=cv.height=innerHeight;N=Array.from({length:Math.min(80,Math.floor(CW*CH/18000))},()=>({x:Math.random()*CW,y:Math.random()*CH,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35}))}
addEventListener('resize',()=>{size();if(reduce)draw()});addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY});size();
function draw(){const s=getComputedStyle(root),a=s.getPropertyValue('--acc').trim(),b=s.getPropertyValue('--acc2').trim(),off=scrollY*.15;cx.clearRect(0,0,CW,CH);
N.forEach(n=>{if(!reduce){n.x+=n.vx;n.y+=n.vy;if(n.x<0||n.x>CW)n.vx*=-1;if(n.y<0||n.y>CH)n.vy*=-1}});
for(let i=0;i<N.length;i++){const p=N[i],py=((p.y-off)%CH+CH)%CH;cx.fillStyle=a;cx.globalAlpha=.7;cx.beginPath();cx.arc(p.x,py,1.8,0,7);cx.fill();
for(let j=i+1;j<N.length;j++){const q=N[j],qy=((q.y-off)%CH+CH)%CH,d=Math.hypot(p.x-q.x,py-qy);if(d<140){cx.globalAlpha=(1-d/140)*.35;cx.strokeStyle=a;cx.beginPath();cx.moveTo(p.x,py);cx.lineTo(q.x,qy);cx.stroke()}}
const dm=Math.hypot(p.x-mx,py-my);if(dm<180){cx.globalAlpha=(1-dm/180)*.7;cx.strokeStyle=b;cx.beginPath();cx.moveTo(p.x,py);cx.lineTo(mx,my);cx.stroke()}}
if(!reduce)requestAnimationFrame(draw)}
draw();

const pg=document.createElement('div');pg.id='prog';document.body.appendChild(pg);
const up=document.createElement('button');up.id='up';up.type='button';up.setAttribute('aria-label','Volver arriba');up.textContent='↑';up.onclick=()=>scrollTo({top:0});document.body.appendChild(up);
const hd=document.querySelector('header');let ly=0;
addEventListener('scroll',()=>{const y=scrollY,m=document.documentElement.scrollHeight-innerHeight;pg.style.transform='scaleX('+(m>0?y/m:0)+')';hd.classList.toggle('hide',y>ly&&y>120);up.classList.toggle('on',y>600);ly=y},{passive:true});

function count(b){b.done=1;const n=+b.dataset.n;let i=0;const t=setInterval(()=>{i++;b.textContent=Math.round(n*i/30);if(i>=30)clearInterval(t)},40)}
if(reduce)document.querySelectorAll('b[data-n]').forEach(b=>b.textContent=b.dataset.n);
const io=new IntersectionObserver(es=>es.forEach(e=>{const t=e.target;if(e.isIntersecting){t.classList.add('in');const b=t.querySelector('b[data-n]');if(b&&!b.done)count(b)}else{t.classList.toggle('top',e.boundingClientRect.top<0);t.classList.remove('in')}}),{threshold:.12});
if(!reduce)document.querySelectorAll('h2,.sub,.card,.case,.proj,.adr,.tl li,.ecard,.contact a,.en,.stats>div').forEach(el=>{el.classList.add('rv');io.observe(el)});
const links=[...document.querySelectorAll('nav a')];
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle('act',a.hash==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('section[id]').forEach(s=>so.observe(s));

const pj=d=>document.querySelector('.proj[data-demo="'+d+'"]');
{const el=document.createElement('div');el.className='pv';el.innerHTML='<div class="mk"><i></i><div><u></u><u class="s"></u></div></div><u></u><u class="s"></u><div class="row"><button type="button">Probar tema claro u oscuro</button></div>';el.querySelector('button').onclick=()=>el.classList.toggle('lt');pj('cv')?.prepend(el)}
{const el=document.createElement('div');el.className='pv';el.innerHTML='<div class="pk"></div><small>Tocá una carta</small>';const g=el.querySelector('.pk');[['Pikachu','Eléctrico',48],['Charmander','Fuego',15],['Bulbasaur','Planta',140],['Squirtle','Agua',200]].forEach(([a,t,h])=>{const b=document.createElement('button');b.type='button';b.textContent=a;b.style.setProperty('--h',h);b.onclick=()=>{b.classList.toggle('f');b.textContent=b.classList.contains('f')?t:a};g.appendChild(b)});pj('poke')?.prepend(el)}
// ---- Mini demo del carrito (Route 66 Diner): mismos precios que el menú ----
{const host=pj('route66');if(host){const el=document.createElement('div');el.className='pv';el.innerHTML='<div class="row"></div><span class="big">$ 0</span><small>Tocá para sumar al pedido</small>';const row=el.querySelector('.row'),big=el.querySelector('.big'),msg=el.querySelector('small'),q={};const P=[['Classic 66',420],['Papas',190],['Shake',230]];
P.forEach(([n,pr])=>{const b=document.createElement('button');b.type='button';b.textContent='+ '+n;b.onclick=()=>{q[n]=(q[n]||0)+1;big.textContent='$ '+P.reduce((t,[k,v])=>t+(q[k]||0)*v,0).toLocaleString('es-UY');msg.textContent='WhatsApp: '+P.filter(([k])=>q[k]).map(([k])=>q[k]+'× '+k).join(', ')};row.append(b)});host.prepend(el)}}


// ---- Simulador de disponibilidad (Barber Studio): datos de ejemplo, misma regla que el backend ----
{const host=document.getElementById('sim');if(host){
const SV=[['Corte',30],['Corte y barba',60]],BUSY=[[630,660],[780,810]],BRK=[720,750],END=900,T=[];
for(let m=600;m<END;m+=30)T.push(m);
const fmt=m=>String(Math.floor(m/60)).padStart(2,'0')+':'+String(m%60).padStart(2,'0');
const ov=(a,b,[c,d])=>a<d&&c<b;
let svc=0,sel=null,race=false,ex=[],msg='Elegí un servicio y un horario libre.',cls='';
function why(s,dur){const e=s+dur;if(e>END)return'fuera';if(ov(s,e,BRK))return'brk';if(BUSY.concat(ex.map(x=>[x.s,x.e])).some(r=>ov(s,e,r)))return'busy';return''}
function draw(){const dur=SV[svc][1];
host.innerHTML='<p class="cap">Simulación del motor de disponibilidad<small>Datos de ejemplo. El servicio y los turnos ya tomados cambian los horarios libres.</small></p>'+
'<div class="row" role="group" aria-label="Servicio">'+SV.map((x,i)=>'<button type="button" data-sv="'+i+'" aria-pressed="'+(i===svc)+'">'+x[0]+' · '+x[1]+' min</button>').join('')+'</div>'+
'<div class="slots">'+T.map(s=>{const w=why(s,dur),mine=ex.some(x=>x.mine&&x.s===s);
if(mine)return'<button type="button" class="mine" disabled aria-label="'+fmt(s)+' reservado por vos">'+fmt(s)+'</button>';
if(w==='brk'&&s>=BRK[0]&&s<BRK[1])return'<button type="button" class="brk" disabled aria-label="'+fmt(s)+' descanso">descanso</button>';
if(w)return'<button type="button" disabled aria-label="'+fmt(s)+' no disponible">'+fmt(s)+'</button>';
return'<button type="button" data-s="'+s+'" aria-pressed="'+(sel===s)+'">'+fmt(s)+'</button>'}).join('')+'</div>'+
'<p class="legend">Tachado: no entra (turno ocupado, descanso o fuera de horario). Verde: tu reserva.</p>'+
'<div class="row"><button type="button" class="go" data-go '+(sel===null?'disabled':'')+'>Reservar'+(sel!==null?' '+fmt(sel):'')+'</button>'+
'<button type="button" data-race aria-pressed="'+race+'">Otro cliente reserva antes</button><button type="button" data-reset>Reiniciar</button></div>'+
'<p class="st '+cls+'" aria-live="polite">'+msg+'</p>'}
host.addEventListener('click',e=>{const b=e.target.closest('button');if(!b||b.disabled)return;const dur=SV[svc][1];
if(b.dataset.sv!==undefined){svc=+b.dataset.sv;sel=null;msg='Servicio de '+SV[svc][1]+' min: los horarios libres se recalcularon.';cls=''}
else if(b.dataset.s!==undefined){sel=+b.dataset.s;msg='Horario '+fmt(sel)+' a '+fmt(sel+dur)+' seleccionado.';cls=''}
else if(b.hasAttribute('data-race')){race=!race;msg=race?'Al reservar, otro cliente se va a adelantar con ese mismo horario.':'Reserva normal.';cls=''}
else if(b.hasAttribute('data-reset')){svc=0;sel=null;race=false;ex=[];msg='Elegí un servicio y un horario libre.';cls=''}
else if(b.hasAttribute('data-go')&&sel!==null){
  if(race){ex.push({s:sel,e:sel+dur,mine:false});msg='409 Conflict: ese horario ya no está libre. Elegí otro.';cls='er';race=false}
  else{ex.push({s:sel,e:sel+dur,mine:true});msg='201 Created: reserva confirmada de '+fmt(sel)+' a '+fmt(sel+dur)+' ('+SV[svc][0]+').';cls='ok'}
  sel=null}
draw()});
draw()}}

// ---- Simulador del turnero (Sistema de Turnos): misma lógica que la app, todo en el navegador ----
{const host=document.getElementById('sim-turnos');if(host){
const SEC=[['A','Atención'],['C','Caja']];
let cnt={},q=[],tv=null,hist=[],msg='Sacá un número y llamalo desde un puesto.',cls='',flash=false;
const take=p=>{cnt[p]=(cnt[p]||0)+1;const c=p+'-'+String(cnt[p]).padStart(3,'0');q.push(c);return c};
function draw(){
host.innerHTML='<p class="cap">Simulación del turnero<small>Tótem, mostrador y pantalla de sala en un solo lugar. En el sistema real son tres aparatos distintos.</small></p>'+
'<div class="tv" aria-live="polite"><span class="lbl">Pantalla de sala</span><span class="num'+(flash?' flash':'')+'">'+(tv?tv.c:'—')+'</span><span class="desk">'+(tv?'Puesto '+tv.d:'')+'</span></div>'+
'<div class="row" role="group" aria-label="Tótem">'+SEC.map(([p,n])=>'<button type="button" data-t="'+p+'">Sacar número · '+n+'</button>').join('')+'<button type="button" data-both>Dos a la vez</button></div>'+
'<div class="q">'+(q.length?q.map(c=>'<span>'+c+'</span>').join(''):'<em>Nadie esperando</em>')+'</div>'+
'<div class="row" role="group" aria-label="Mostrador"><button type="button" class="go" data-call="1" '+(q.length?'':'disabled')+'>Llamar · Puesto 1</button><button type="button" class="go" data-call="2" '+(q.length?'':'disabled')+'>Llamar · Puesto 2</button><button type="button" data-rep '+(tv?'':'disabled')+'>Repetir</button><button type="button" data-reset>Reiniciar</button></div>'+
'<p class="st '+cls+'">'+msg+'</p>';flash=false}
host.addEventListener('click',e=>{const b=e.target.closest('button');if(!b||b.disabled)return;
if(b.dataset.t){const c=take(b.dataset.t),ahead=q.filter(x=>x[0]===c[0]).length-1;msg='Ticket '+c+(ahead?': hay '+ahead+' antes en ese sector.':': sos el próximo de ese sector.');cls=''}
else if(b.hasAttribute('data-both')){const x=take('C'),y=take('C');msg='Dos pedidos en el mismo segundo: '+x+' y '+y+'. El candado evita repetir el número.';cls='ok'}
else if(b.dataset.call){const c=q.shift();tv={c,d:b.dataset.call};hist.unshift(tv);flash=true;msg='Ding. "Turno '+c[0]+' '+parseInt(c.slice(2),10)+', puesto '+b.dataset.call+'."';cls='ok'}
else if(b.hasAttribute('data-rep')){flash=true;msg='Se vuelve a anunciar '+tv.c+' sin duplicar el historial.';cls=''}
else if(b.hasAttribute('data-reset')){cnt={};q=[];tv=null;hist=[];msg='Numeración reiniciada, como pasa sola cada medianoche.';cls=''}
draw()});
draw()}}
