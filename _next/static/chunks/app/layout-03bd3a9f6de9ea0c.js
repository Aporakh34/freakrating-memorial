(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7177],{13068:(e,t,r)=>{"use strict";r.d(t,{default:()=>p});var o=r(12115),n=r(73321),i=r(89041);let a={core:["/aliases/hover-stub.png","/clips/fl-studio-logo.png","/players/banners/Cacto0.webp","/players/banners/FearPlay1337.webp","/players/banners/Hanov.webp","/players/banners/SosiskaKiller.webp","/players/banners/Vodudov.webp","/players/banners/XEPOM.webp","/players/banners/iray3n.webp","/players/banners/mefrusha.webp","/players/banners/thePuPuS.webp","/sfx/alias-reveal.mp3","/sfx/burger-bomb.mp3","/sfx/burger-catch-bgm.mp3","/sfx/burger-collect.mp3","/sfx/burger-defeat.mp3","/sfx/gameover-exit.mp3","/sfx/gameover-retry.mp3","/sfx/hanov-phone.mp3","/sfx/hanov-rattle.mp3","/sfx/hanov-sweep.mp3"],idle:["/burgers/bomb.webp","/burgers/catcher-bomb.webp","/burgers/catcher-catch.webp","/burgers/catcher.webp","/burgers/gameover-exit.mp4","/burgers/gameover-retry.webp","/burgers/gameover.webp","/burgers/stub.webp","/hanov/models/bag.glb","/hanov/models/bone.glb","/hanov/models/bottle.glb","/hanov/models/can.glb","/hanov/models/cardboard.glb","/hanov/models/crumb.glb","/hanov/models/paper.glb","/hanov/models/wrapper.glb","/players/aka-charges/iray3n.mp3","/players/aka-charges/iray3n.png","/vodulingo/audio/choice-1.ogg","/vodulingo/audio/choice-2.ogg","/vodulingo/audio/listen-1.ogg","/vodulingo/audio/listen-2.ogg","/vodulingo/audio/write-ba-1.ogg","/vodulingo/audio/write-ba-2.ogg","/vodulingo/audio/write-ru-1.ogg","/vodulingo/audio/write-ru-2.ogg","/vodulingo/audio/wrong-answer-2.mp3","/vodulingo/audio/wrong-answer.mp3","/vodulingo/character.svg","/vodulingo/node.svg","/vodulingo/photos/choice-1.png","/vodulingo/photos/choice-2.png","/vodulingo/photos/hf_20260730_160022_1562b934-69b4-496c-9d2d-f213cb91952c-removebg-preview.png","/vodulingo/photos/hf_20260730_160030_305b0020-05c4-4555-8246-08d057eccc64-removebg-preview.png","/vodulingo/photos/hf_20260730_160046_e1ee9ae3-14f5-40f3-86b0-026be75982cb-removebg-preview.png","/vodulingo/photos/hf_20260730_160054_cc6759f8-68a5-41a4-ab41-09e1e8b40cef-removebg-preview.png","/vodulingo/photos/hf_20260730_160316_d491eba6-ee52-42a6-b1b5-36f700545758-removebg-preview.png","/vodulingo/photos/listen-1.png","/vodulingo/photos/listen-2.png","/vodulingo/photos/streak.png","/vodulingo/photos/write-ba-1.png","/vodulingo/photos/write-ba-2.png","/vodulingo/photos/write-ru-1.png","/vodulingo/photos/write-ru-2.png"]};var l=r(42114);let s=/\.(png|webp|jpe?g|gif|svg|avif)$/i,c=new Map;function u(e){return new Promise(t=>{let r=!1,o=()=>{r||(r=!0,clearTimeout(n),t())},n=setTimeout(o,15e3);e(o)})}async function d(e,t,r="auto"){let o=[...e],n=async()=>{for(;;){let e=o.shift();if(void 0===e)return;await function(e,t){let r=c.get(e);if(r)return r;let o="image"===t||s.test(e)?u(t=>{let r=new Image;r.onload=t,r.onerror=t,r.src=e}):u(t=>{fetch(e).then(e=>e.arrayBuffer()).catch(()=>void 0).finally(t)});return c.set(e,o),o}(e,r),t?.()}};await Promise.all(Array.from({length:Math.min(6,o.length)},()=>n()))}var f=r(91149);let h=!1;function p(){let e=(0,n.usePathname)(),t=["/slender","/widget"].some(t=>e?.startsWith(t)??!1);return(0,o.useEffect)(()=>{t||function(){if(h)return;h=!0;let e=(0,i.e)().then(()=>f.D.getState().players??[]);Promise.all([d(a.core),e.then(e=>d(e.filter(e=>!e.is_placeholder).map(e=>(0,l.C5)(e.nick,64)),void 0,"image"))]).catch(()=>void 0).then(()=>{var e;let t;e=()=>{d(a.idle)},(t=window.requestIdleCallback)?t(e,{timeout:4e3}):setTimeout(e,1200)})}()},[t]),null}},13464:(e,t,r)=>{"use strict";r.d(t,{Ls:()=>s,Og:()=>u,PI:()=>c,fS:()=>f,pe:()=>d});var o=r(565),n=r(91149);let i=null,a=null,l=null;async function s(){return i||(i=(0,o.Zm)().then(e=>{n.D.getState().setClips(e)}).catch(()=>{n.D.getState().setClipsFailed(!0)}).finally(()=>{i=null})),await i,n.D.getState().clips}async function c(){return null!==n.D.getState().clips?n.D.getState().clips:s()}async function u(){return null!==n.D.getState().clipChannels||(a||(a=(0,o.n5)().then(e=>{n.D.getState().setClipChannels(e.channels)}).catch(()=>{n.D.getState().setClipChannels([])}).finally(()=>{a=null})),await a),n.D.getState().clipChannels}async function d(){return l||(l=(0,o.p$)().then(e=>{n.D.getState().setClipsHistory(e)}).catch(()=>{n.D.getState().setClipsHistoryFailed(!0)}).finally(()=>{l=null})),await l,n.D.getState().clipsHistory}async function f(){return null!==n.D.getState().clipsHistory?n.D.getState().clipsHistory:d()}},17864:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var o=r(95155),n=r(12115);function i({until:e,onDone:t}){let[r,a]=(0,n.useState)(()=>Math.max(0,e-Math.floor(Date.now()/1e3))),l=(0,n.useRef)(!1);(0,n.useEffect)(()=>{l.current=!1;let r=()=>{let r=Math.max(0,e-Math.floor(Date.now()/1e3));a(r),0!==r||l.current||(l.current=!0,t?.())};r();let o=setInterval(r,1e3);return()=>clearInterval(o)},[e]);let s=e=>String(e).padStart(2,"0");return(0,o.jsxs)("span",{className:"tabular-nums",children:[s(Math.floor(r/3600)),":",s(Math.floor(r%3600/60)),":",s(r%60)]})}},51743:()=>{},65739:(e,t,r)=>{"use strict";r.d(t,{default:()=>u});var o=r(95155),n=r(12115);let i="fr-starfield",a=`
attribute vec2 aPos;
void main() {
  gl_Position = vec4(aPos, 0.0, 1.0);
}
`,l=`
precision mediump float;

uniform vec2 uRes;
uniform float uTime;
uniform float uScroll;

float hash21(vec2 p) {
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 3; i++) {
    v += a * noise(p);
    p = p * 2.03 + vec2(11.3, 7.7);
    a *= 0.5;
  }
  return v;
}

// звезда с жизненным циклом: появляется, горит, гаснет — и возрождается
// в новой фазе. Каждая со своим периодом и сдвигом, так что небо дышит.
vec3 starLayer(vec2 uv, float scale, float density, float t, vec3 tint, float bright) {
  vec2 g = uv * scale;
  vec2 id = floor(g);
  vec2 gv = fract(g) - 0.5;
  float rnd = hash21(id);
  if (rnd > density) return vec3(0.0);

  vec2 off = vec2(hash21(id + 13.7), hash21(id + 27.3)) - 0.5;
  vec2 dvec = gv - off * 0.6;
  // квадратная звезда — пиксельный дух сайта
  float d = max(abs(dvec.x), abs(dvec.y));
  float size = 0.04 + 0.055 * hash21(id + 3.1);
  float shape = 1.0 - smoothstep(size * 0.5, size, d);

  // жизненный цикл: медленный синус от 0 до 1 и обратно, фаза и период —
  // из хеша ячейки. smoothstep делает появление/угасание мягким.
  float period = 3.0 + 7.0 * hash21(id + 5.7);
  float phase = hash21(id + 9.3) * 6.28318;
  float life = 0.5 + 0.5 * sin(phase + t * 6.28318 / period);
  life = smoothstep(0.15, 0.85, life);
  // лёгкое мерцание поверх жизни
  float tw = 0.85 + 0.15 * sin(t * (2.0 + 3.0 * rnd) + rnd * 40.0);

  return tint * shape * life * tw * bright;
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;

  // глубокий кобальтовый фон, чуть темнее к краям
  vec3 col = vec3(0.014, 0.022, 0.06);

  // мягкие туманности, едва дышащие
  float breathe = sin(uTime * 0.035);
  vec2 nuv = uv - vec2(0.0, uScroll * 0.25);
  float neb = fbm(nuv * (1.6 - 0.12 * breathe) + vec2(uTime * 0.013, -uTime * 0.007));
  float neb2 = fbm(nuv * (2.7 + 0.18 * breathe) - vec2(uTime * 0.009, uTime * 0.011) + 4.2);
  vec3 nebTint = mix(vec3(0.12, 0.30, 1.0), vec3(0.34, 0.26, 0.98),
    0.5 + 0.5 * sin(uTime * 0.06 + uv.x * 1.4));
  col += nebTint * smoothstep(0.38 - 0.04 * breathe, 0.82, neb) * (0.55 + 0.08 * breathe);
  col += vec3(0.36, 0.56, 1.0) * smoothstep(0.46 - 0.04 * breathe, 0.9, neb2) * 0.3;

  // три слоя звёзд разного калибра, каждый со своим дрейфом: дальний пыльный
  // ползёт медленнее, крупный чуть быстрее — так небо не приклеено к экрану,
  // а тихо плывёт само по себе. Без этого фон выглядел статичной картинкой.
  vec2 driftFar = vec2(uTime * 0.0022, -uTime * 0.0014);
  vec2 driftMid = vec2(uTime * 0.0032, -uTime * 0.002);
  vec2 driftNear = vec2(uTime * 0.0048, -uTime * 0.0028);

  // Яркость поднята — по просьбе небо должно читаться даже днём.
  col += starLayer(uv - vec2(0.0, uScroll * 0.85) + driftNear, 9.0, 0.16, uTime, vec3(0.92, 0.96, 1.0), 1.55);
  col += starLayer(uv - vec2(0.0, uScroll * 0.55) + driftMid, 17.0, 0.13, uTime * 1.2, vec3(0.72, 0.82, 1.0), 1.05);
  col += starLayer(uv - vec2(0.0, uScroll * 0.35) + driftFar, 30.0, 0.10, uTime * 0.8, vec3(0.55, 0.66, 1.0), 0.62);

  // затухание к краям, нижний край растворяется в void
  float vig = 1.0 - smoothstep(0.7, 1.4, length(uv * vec2(0.85, 1.1)));
  col *= vig;
  col *= mix(0.5, 1.0, smoothstep(-0.7, 0.3, uv.y));

  gl_FragColor = vec4(col, 1.0);
}
`,s=!1;function c(){return(0,n.useEffect)(()=>{!function(){if(s||(s=!0,document.getElementById(i)))return;let e=document.createElement("canvas");e.id=i,e.setAttribute("aria-hidden","true"),e.style.cssText="position:fixed;inset:0;z-index:0;width:100%;height:100%;pointer-events:none;image-rendering:pixelated;display:block;",document.body.insertBefore(e,document.body.firstChild),function(e){let t=e.getContext("webgl",{antialias:!1,alpha:!1,depth:!1,stencil:!1,powerPreference:"low-power"})||e.getContext("experimental-webgl");if(!t)return;let r=navigator,o=4>=(r.hardwareConcurrency||8)||4>=(r.deviceMemory||8),n=(e,r)=>{let o=t.createShader(e);return o?(t.shaderSource(o,r),t.compileShader(o),t.getShaderParameter(o,t.COMPILE_STATUS))?o:(t.deleteShader(o),null):null},i=n(t.VERTEX_SHADER,a),s=n(t.FRAGMENT_SHADER,l);if(!i||!s)return;let c=t.createProgram();if(!c||(t.attachShader(c,i),t.attachShader(c,s),t.linkProgram(c),!t.getProgramParameter(c,t.LINK_STATUS)))return;t.useProgram(c);let u=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,u),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),t.STATIC_DRAW);let d=t.getAttribLocation(c,"aPos");t.enableVertexAttribArray(d),t.vertexAttribPointer(d,2,t.FLOAT,!1,0,0);let f=t.getUniformLocation(c,"uRes"),h=t.getUniformLocation(c,"uTime"),p=t.getUniformLocation(c,"uScroll"),g=o?.3:.45,m=o?.45:1,v=o?1e3/15:50,b=()=>{let r=e.offsetWidth||window.innerWidth,o=e.offsetHeight||window.innerHeight;r<=0||o<=0||(e.width=Math.max(1,Math.round(r*g)),e.height=Math.max(1,Math.round(o*g)),t.viewport(0,0,e.width,e.height))},w=performance.now();b();let x=!1;window.addEventListener("scroll",()=>{x=!0},{passive:!0});let y=0,S=r=>{!document.hidden&&e.checkVisibility?.()!==!1&&(x||r-y>=v)&&(x=!1,y=r,t.uniform2f(f,e.width,e.height),t.uniform1f(h,((r-w)/1e3+12.5)*m),t.uniform1f(p,window.scrollY/(e.offsetHeight||window.innerHeight)*.45),t.drawArrays(t.TRIANGLES,0,3));requestAnimationFrame(S)};requestAnimationFrame(S),window.addEventListener("resize",b)}(e)}()},[]),null}function u(){return(0,o.jsx)(c,{})}},67180:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,10693,23)),Promise.resolve().then(r.t.bind(r,66033,23)),Promise.resolve().then(r.t.bind(r,51743,23)),Promise.resolve().then(r.bind(r,68426)),Promise.resolve().then(r.bind(r,65739)),Promise.resolve().then(r.bind(r,13068)),Promise.resolve().then(r.bind(r,4525))},68426:(e,t,r)=>{"use strict";r.d(t,{default:()=>m});var o=r(95155),n=r(98500),i=r.n(n),a=r(73321),l=r(12115),s=r(17864),c=r(80018),u=r(13464),d=r(91149),f=r(13855);let h=["#ff4105","#4f7dff","#d8eaff","#34d399","#1f58f2"];var p=r(77938);let g="fr_week_vote_opened";function m(){let e,t=(0,a.usePathname)(),r=(e=(0,d.D)(e=>e.clips),(0,l.useEffect)(()=>{(0,u.PI)()},[]),(0,l.useMemo)(()=>e?function(e){let{week:t}=e;return!1===t.voting_open||0===t.clips.length?null:{endsAt:t.window_ends_at}}(e):null,[e])),n=(0,c.u)(),[m,v]=(0,l.useState)(!1),[b,w]=(0,l.useState)(!1),[x,y]=(0,l.useState)(null),S=(0,l.useRef)(!1),_=x??r?.endsAt??null,T=null!==x,A=null!==_&&(T||!b&&!0===n);if((0,l.useEffect)(()=>{function e(){S.current=!1,w(!1),y(Math.floor(Date.now()/1e3)+604800),v(!0)}return window.addEventListener(p.s,e),()=>{window.removeEventListener(p.s,e)}},[]),(0,l.useEffect)(()=>{if(!r||T||!0!==n){T||v(!1);return}let e=`${g}:${r.endsAt}`;if(window.localStorage.getItem(e))return void w(!0);let t=window.setTimeout(()=>v(!0),900);return()=>window.clearTimeout(t)},[r,T,n]),(0,l.useEffect)(()=>{if(m&&A&&!S.current){let e;S.current=!0,(e=e=>{(0,f.A)({particleCount:70,spread:68,startVelocity:42,gravity:.95,ticks:220,origin:{x:e,y:.18},colors:h,disableForReducedMotion:!0})})(.28),window.setTimeout(()=>e(.72),160),window.setTimeout(()=>{(0,f.A)({particleCount:45,spread:100,startVelocity:28,gravity:1.05,ticks:200,origin:{x:.5,y:.22},colors:h,disableForReducedMotion:!0})},320)}},[m,A]),t?.startsWith("/widget")||!A||null===_)return null;function E(){if(T){y(null),v(!1),S.current=!1;return}r&&(window.localStorage.setItem(`${g}:${r.endsAt}`,"1"),w(!0))}return(0,o.jsxs)("div",{role:"region","aria-label":"Открылось голосование за клип недели",className:`fr-surface fixed left-1/2 z-40 flex w-[min(92vw,760px)] -translate-x-1/2 flex-col gap-3 border-cobalt-bright/30 px-3.5 py-3 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.9)] transition-all duration-500 top-[max(0.75rem,env(safe-area-inset-top))] sm:top-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-5 sm:py-4 ${m?"translate-y-0 opacity-100":"pointer-events-none -translate-y-3 opacity-0"}`,children:[(0,o.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,o.jsx)("p",{className:"text-[11px] font-medium text-cobalt-bright sm:text-[12px]",children:"Открылось голосование"}),(0,o.jsxs)("p",{className:"mt-1 text-[13px] leading-5 text-ice/85 sm:text-sm sm:leading-6",children:[(0,o.jsx)("span",{className:"sm:hidden",children:"Семь победителей дня ждут твой голос за клип недели."}),(0,o.jsx)("span",{className:"hidden sm:inline",children:"Клипы недели выбраны — семь победителей дня ждут твой голос."})]}),(0,o.jsxs)("p",{className:"mt-1.5 text-[12px] font-medium text-ice/45",children:["До конца ",(0,o.jsx)(s.A,{until:_})]})]}),(0,o.jsxs)("div",{className:"grid w-full grid-cols-2 gap-2 sm:flex sm:w-auto sm:shrink-0 sm:items-center",children:[(0,o.jsx)(i(),{href:"/clips",onClick:E,className:"fr-control fr-control-accent h-10 sm:h-9",children:"Голосовать"}),(0,o.jsx)("button",{type:"button",onClick:E,"aria-label":"Скрыть",className:"fr-control h-10 sm:h-9",children:"Понятно"})]})]})}},77938:(e,t,r)=>{"use strict";r.d(t,{C:()=>n,s:()=>o});let o="fr-week-vote-opened-preview";function n(){window.dispatchEvent(new Event(o))}},80018:(e,t,r)=>{"use strict";r.d(t,{u:()=>i});var o=r(12115);let n="fr-cookie-ok";function i(){let[e,t]=(0,o.useState)(null);return(0,o.useEffect)(()=>{t("1"===window.localStorage.getItem("fr-cookie-ok"));let e=()=>t(!0);return window.addEventListener(n,e),()=>window.removeEventListener(n,e)},[]),e}}},e=>{e.O(0,[2959,3334,5155,8500,4723,770,8441,3794,7358],()=>e(e.s=67180)),_N_E=e.O()}]);