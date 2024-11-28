var X=Object.defineProperty;var Y=(o,t,e)=>t in o?X(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var i=(o,t,e)=>Y(o,typeof t!="symbol"?t+"":t,e);import{d as Q,i as Z,r as A,f as tt,c as b,a as u,t as k,u as E,F as R,h as B,x as G,o as z,L as it,g as et}from"./index-DnVrcyrJ.js";import{h as F}from"./moment-C5S46NFB.js";function I(o){return Math.abs(Math.floor(o))}function S(o,t){return Math.random()*(t-o)+o}function f(o,t){return Math.floor(S(o,t+1))}function U(o,t,e,s){const n=Math.pow;return Math.sqrt(n(o-e,2)+n(t-s,2))}function j(o,t,e=1){if(o>360||o<0)throw new Error(`Expected hue 0-360 range, got \`${o}\``);if(t>100||t<0)throw new Error(`Expected lightness 0-100 range, got \`${t}\``);if(e>1||e<0)throw new Error(`Expected alpha 0-1 range, got \`${e}\``);return`hsla(${o}, 100%, ${t}%, ${e})`}const q=o=>{if(typeof o=="object"&&o!==null){if(typeof Object.getPrototypeOf=="function"){const t=Object.getPrototypeOf(o);return t===Object.prototype||t===null}return Object.prototype.toString.call(o)==="[object Object]"}return!1},st=["__proto__","constructor","prototype"],V=(...o)=>o.reduce((t,e)=>(Object.keys(e).forEach(s=>{st.includes(s)||(Array.isArray(t[s])&&Array.isArray(e[s])?t[s]=e[s]:q(t[s])&&q(e[s])?t[s]=V(t[s],e[s]):t[s]=e[s])}),t),{});function nt(o,t){let e;return(...s)=>{e&&clearTimeout(e),e=setTimeout(()=>o(...s),t)}}class ot{constructor({x:t,y:e,ctx:s,hue:n,decay:d,gravity:p,friction:r,brightness:g,flickering:v,lineWidth:x,explosionLength:L}){i(this,"x");i(this,"y");i(this,"ctx");i(this,"hue");i(this,"friction");i(this,"gravity");i(this,"flickering");i(this,"lineWidth");i(this,"explosionLength");i(this,"angle");i(this,"speed");i(this,"brightness");i(this,"coordinates",[]);i(this,"decay");i(this,"alpha",1);for(this.x=t,this.y=e,this.ctx=s,this.hue=n,this.gravity=p,this.friction=r,this.flickering=v,this.lineWidth=x,this.explosionLength=L,this.angle=S(0,Math.PI*2),this.speed=f(1,10),this.brightness=f(g.min,g.max),this.decay=S(d.min,d.max);this.explosionLength--;)this.coordinates.push([t,e])}update(t){this.coordinates.pop(),this.coordinates.unshift([this.x,this.y]),this.speed*=this.friction,this.x+=Math.cos(this.angle)*this.speed,this.y+=Math.sin(this.angle)*this.speed+this.gravity,this.alpha-=this.decay,this.alpha<=this.decay&&t()}draw(){const t=this.coordinates.length-1;this.ctx.beginPath(),this.ctx.lineWidth=this.lineWidth,this.ctx.fillStyle=j(this.hue,this.brightness,this.alpha),this.ctx.moveTo(this.coordinates[t][0],this.coordinates[t][1]),this.ctx.lineTo(this.x,this.y),this.ctx.strokeStyle=j(this.hue,this.flickering?S(0,this.brightness):this.brightness,this.alpha),this.ctx.stroke()}}class at{constructor(t,e){i(this,"active",!1);i(this,"x");i(this,"y");this.options=t,this.canvas=e,this.pointerDown=this.pointerDown.bind(this),this.pointerUp=this.pointerUp.bind(this),this.pointerMove=this.pointerMove.bind(this)}get mouseOptions(){return this.options.mouse}mount(){this.canvas.addEventListener("pointerdown",this.pointerDown),this.canvas.addEventListener("pointerup",this.pointerUp),this.canvas.addEventListener("pointermove",this.pointerMove)}unmount(){this.canvas.removeEventListener("pointerdown",this.pointerDown),this.canvas.removeEventListener("pointerup",this.pointerUp),this.canvas.removeEventListener("pointermove",this.pointerMove)}usePointer(t,e){const{click:s,move:n}=this.mouseOptions;(s||n)&&(this.x=t.pageX-this.canvas.offsetLeft,this.y=t.pageY-this.canvas.offsetTop,this.active=e)}pointerDown(t){this.usePointer(t,this.mouseOptions.click)}pointerUp(t){this.usePointer(t,!1)}pointerMove(t){this.usePointer(t,this.active)}}class ht{constructor(){i(this,"hue");i(this,"rocketsPoint");i(this,"opacity");i(this,"acceleration");i(this,"friction");i(this,"gravity");i(this,"particles");i(this,"explosion");i(this,"mouse");i(this,"boundaries");i(this,"sound");i(this,"delay");i(this,"brightness");i(this,"decay");i(this,"flickering");i(this,"intensity");i(this,"traceLength");i(this,"traceSpeed");i(this,"lineWidth");i(this,"lineStyle");i(this,"autoresize");this.autoresize=!0,this.lineStyle="round",this.flickering=50,this.traceLength=3,this.traceSpeed=10,this.intensity=30,this.explosion=5,this.gravity=1.5,this.opacity=.5,this.particles=50,this.friction=.95,this.acceleration=1.05,this.hue={min:0,max:360},this.rocketsPoint={min:50,max:50},this.lineWidth={explosion:{min:1,max:3},trace:{min:1,max:2}},this.mouse={click:!1,move:!1,max:1},this.delay={min:30,max:60},this.brightness={min:50,max:80},this.decay={min:.015,max:.03},this.sound={enabled:!1,files:["explosion0.mp3","explosion1.mp3","explosion2.mp3"],volume:{min:4,max:8}},this.boundaries={debug:!1,height:0,width:0,x:50,y:50}}update(t){Object.assign(this,V(this,t))}}class rt{constructor(t,e){i(this,"tick",0);i(this,"rafId",0);i(this,"fps",60);i(this,"tolerance",.1);i(this,"now");this.options=t,this.render=e}mount(){this.now=performance.now();const t=1e3/this.fps,e=s=>{this.rafId=requestAnimationFrame(e);const n=s-this.now;n>=t-this.tolerance&&(this.render(),this.now=s-n%t,this.tick+=n*(this.options.intensity*Math.PI)/1e3)};this.rafId=requestAnimationFrame(e)}unmount(){cancelAnimationFrame(this.rafId)}}class ct{constructor(t,e,s){i(this,"resizer");this.options=t,this.updateSize=e,this.container=s}mount(){if(!this.resizer){const t=nt(()=>this.updateSize(),100);this.resizer=new ResizeObserver(t)}this.options.autoresize&&this.resizer.observe(this.container)}unmount(){this.resizer&&this.resizer.unobserve(this.container)}}class lt{constructor(t){i(this,"buffers",[]);i(this,"audioContext");i(this,"onInit",!1);this.options=t,this.init()}get isEnabled(){return this.options.sound.enabled}get soundOptions(){return this.options.sound}init(){!this.onInit&&this.isEnabled&&(this.onInit=!0,this.audioContext=new(window.AudioContext||window.webkitAudioContext),this.loadSounds())}async loadSounds(){for(const t of this.soundOptions.files){const e=await(await fetch(t)).arrayBuffer();this.audioContext.decodeAudioData(e).then(s=>{this.buffers.push(s)}).catch(s=>{throw s})}}play(){if(this.isEnabled&&this.buffers.length){const t=this.audioContext.createBufferSource(),e=this.buffers[f(0,this.buffers.length-1)],s=this.audioContext.createGain();t.buffer=e,s.gain.value=S(this.soundOptions.volume.min/100,this.soundOptions.volume.max/100),s.connect(this.audioContext.destination),t.connect(s),t.start(0)}else this.init()}}class ut{constructor({x:t,y:e,dx:s,dy:n,ctx:d,hue:p,speed:r,traceLength:g,acceleration:v}){i(this,"x");i(this,"y");i(this,"sx");i(this,"sy");i(this,"dx");i(this,"dy");i(this,"ctx");i(this,"hue");i(this,"speed");i(this,"acceleration");i(this,"traceLength");i(this,"totalDistance");i(this,"angle");i(this,"brightness");i(this,"coordinates",[]);i(this,"currentDistance",0);for(this.x=t,this.y=e,this.sx=t,this.sy=e,this.dx=s,this.dy=n,this.ctx=d,this.hue=p,this.speed=r,this.traceLength=g,this.acceleration=v,this.totalDistance=U(t,e,s,n),this.angle=Math.atan2(n-e,s-t),this.brightness=f(50,70);this.traceLength--;)this.coordinates.push([t,e])}update(t){this.coordinates.pop(),this.coordinates.unshift([this.x,this.y]),this.speed*=this.acceleration;const e=Math.cos(this.angle)*this.speed,s=Math.sin(this.angle)*this.speed;this.currentDistance=U(this.sx,this.sy,this.x+e,this.y+s),this.currentDistance>=this.totalDistance?t(this.dx,this.dy,this.hue):(this.x+=e,this.y+=s)}draw(){const t=this.coordinates.length-1;this.ctx.beginPath(),this.ctx.moveTo(this.coordinates[t][0],this.coordinates[t][1]),this.ctx.lineTo(this.x,this.y),this.ctx.strokeStyle=j(this.hue,this.brightness),this.ctx.stroke()}}class dt{constructor(t,e={}){i(this,"target");i(this,"container");i(this,"canvas");i(this,"ctx");i(this,"width");i(this,"height");i(this,"traces",[]);i(this,"explosions",[]);i(this,"waitStopRaf");i(this,"running",!1);i(this,"opts");i(this,"sound");i(this,"resize");i(this,"mouse");i(this,"raf");this.target=t,this.container=t,this.opts=new ht,this.createCanvas(this.target),this.updateOptions(e),this.sound=new lt(this.opts),this.resize=new ct(this.opts,this.updateSize.bind(this),this.container),this.mouse=new at(this.opts,this.canvas),this.raf=new rt(this.opts,this.render.bind(this))}get isRunning(){return this.running}get version(){return"2.10.8"}get currentOptions(){return this.opts}start(){this.running||(this.canvas.isConnected||this.createCanvas(this.target),this.running=!0,this.resize.mount(),this.mouse.mount(),this.raf.mount())}stop(t=!1){this.running&&(this.running=!1,this.resize.unmount(),this.mouse.unmount(),this.raf.unmount(),this.clear(),t&&this.canvas.remove())}async waitStop(t){if(this.running)return new Promise(e=>{this.waitStopRaf=()=>{this.waitStopRaf&&(requestAnimationFrame(this.waitStopRaf),!this.traces.length&&!this.explosions.length&&(this.waitStopRaf=null,this.stop(t),e()))},this.waitStopRaf()})}pause(){this.running=!this.running,this.running?this.raf.mount():this.raf.unmount()}clear(){this.ctx&&(this.traces=[],this.explosions=[],this.ctx.clearRect(0,0,this.width,this.height))}launch(t=1){for(let e=0;e<t;e++)this.createTrace();this.waitStopRaf||(this.start(),this.waitStop())}updateOptions(t){this.opts.update(t)}updateSize({width:t=this.container.clientWidth,height:e=this.container.clientHeight}={}){this.width=t,this.height=e,this.canvas.width=t,this.canvas.height=e,this.updateBoundaries({...this.opts.boundaries,width:t,height:e})}updateBoundaries(t){this.updateOptions({boundaries:t})}createCanvas(t){t instanceof HTMLCanvasElement?(t.isConnected||document.body.append(t),this.canvas=t):(this.canvas=document.createElement("canvas"),this.container.append(this.canvas)),this.ctx=this.canvas.getContext("2d"),this.updateSize()}render(){if(!this.ctx||!this.running)return;const{opacity:t,lineStyle:e,lineWidth:s}=this.opts;this.ctx.globalCompositeOperation="destination-out",this.ctx.fillStyle=`rgba(0, 0, 0, ${t})`,this.ctx.fillRect(0,0,this.width,this.height),this.ctx.globalCompositeOperation="lighter",this.ctx.lineCap=e,this.ctx.lineJoin="round",this.ctx.lineWidth=S(s.trace.min,s.trace.max),this.initTrace(),this.drawTrace(),this.drawExplosion()}createTrace(){const{hue:t,rocketsPoint:e,boundaries:s,traceLength:n,traceSpeed:d,acceleration:p,mouse:r}=this.opts;this.traces.push(new ut({x:this.width*f(e.min,e.max)/100,y:this.height,dx:this.mouse.x&&r.move||this.mouse.active?this.mouse.x:f(s.x,s.width-s.x*2),dy:this.mouse.y&&r.move||this.mouse.active?this.mouse.y:f(s.y,s.height*.5),ctx:this.ctx,hue:f(t.min,t.max),speed:d,acceleration:p,traceLength:I(n)}))}initTrace(){if(this.waitStopRaf)return;const{delay:t,mouse:e}=this.opts;(this.raf.tick>f(t.min,t.max)||this.mouse.active&&e.max>this.traces.length)&&(this.createTrace(),this.raf.tick=0)}drawTrace(){let t=this.traces.length;for(;t--;)this.traces[t].draw(),this.traces[t].update((e,s,n)=>{this.initExplosion(e,s,n),this.sound.play(),this.traces.splice(t,1)})}initExplosion(t,e,s){const{particles:n,flickering:d,lineWidth:p,explosion:r,brightness:g,friction:v,gravity:x,decay:L}=this.opts;let D=I(n);for(;D--;)this.explosions.push(new ot({x:t,y:e,ctx:this.ctx,hue:s,friction:v,gravity:x,flickering:f(0,100)<=d,lineWidth:S(p.explosion.min,p.explosion.max),explosionLength:I(r),brightness:g,decay:L}))}drawExplosion(){let t=this.explosions.length;for(;t--;)this.explosions[t].draw(),this.explosions[t].update(()=>{this.explosions.splice(t,1)})}}const pt={class:"w-full h-full text-primary"},ft={class:"flex items-center justify-between mb-1"},xt={class:"font-bold text-xl"},mt={class:"mb-3 text-sm"},gt={class:"mb-5"},yt={class:"mx-auto w-fit mb-10"},vt={class:"border-2 border-gray-500 p-2 shadow-lg bg-black rounded-md"},wt={class:"flex flex-wrap"},bt={class:"flex flex-col items-center font-bold md:hidden"},kt={class:"flex gap-14"},Mt=Q({__name:"mazeGame",setup(o){const{t}=Z.global,e=A(F().startOf("day")),s=A([]),n=A({x:0,y:0}),d=A({x:14,y:14}),p=A(0),r=A(null);tt(()=>{window.addEventListener("keydown",x)});function g(){s.value=v(),n.value={x:0,y:0},r.value!==null&&clearInterval(r.value),r.value=setInterval(()=>{e.value=e.value.clone().add(1,"seconds")},1e3)}function v(){let a=Array.from({length:15},()=>Array(15).fill(1));const m=[{x:0,y:-1},{x:0,y:1},{x:-1,y:0},{x:1,y:0}];function O(h,c){return h>=0&&c>=0&&h<15&&c<15}function W(h){for(let c=h.length-1;c>0;c--){const y=Math.floor(Math.random()*(c+1));[h[c],h[y]]=[h[y],h[c]]}}function C(h,c){a[c][h]=0,W(m);for(const{x:y,y:_}of m){const w=h+y*2,M=c+_*2;O(w,M)&&a[M][w]===1&&(a[c+_][h+y]=0,C(w,M))}}C(0,0);function H(h,c,y){const _=Array.from({length:h.length},()=>Array(h[0].length).fill(!1)),w=[c];for(;w.length>0;){const{x:M,y:$}=w.shift();if(M===y.x&&$===y.y)return!0;for(const{x:J,y:K}of m){const P=M+J,T=$+K;O(P,T)&&h[T][P]===0&&!_[T][P]&&(_[T][P]=!0,w.push({x:P,y:T}))}}return!1}do a=Array.from({length:15},()=>Array(15).fill(1)),C(0,0),a[14][14]=0;while(!H(a,{x:0,y:0},{x:14,y:14}));return a}function x(l){if(!D()){switch(l.key){case"ArrowUp":n.value.y>0&&s.value[n.value.y-1][n.value.x]===0&&n.value.y--;break;case"ArrowDown":n.value.y<s.value.length-1&&s.value[n.value.y+1][n.value.x]===0&&n.value.y++;break;case"ArrowLeft":n.value.x>0&&s.value[n.value.y][n.value.x-1]===0&&n.value.x--;break;case"ArrowRight":n.value.x<s.value[0].length-1&&s.value[n.value.y][n.value.x+1]===0&&n.value.x++;break}L()}}function L(){D()&&(p.value++,r.value!==null&&clearInterval(r.value),new Audio("./gotPointSoundEffect.wav").play(),N())}function D(){return n.value.x===d.value.x&&n.value.y===d.value.y}function N(){const l=document.createElement("div");l.style.position="fixed",l.style.top="0",l.style.left="0",l.style.width="100%",l.style.height="100%",l.style.zIndex="9999",document.body.appendChild(l);const a=new dt(l,{autoresize:!0,opacity:.5,acceleration:1.05,friction:.97,gravity:1.5,particles:50,explosion:5,intensity:30,flickering:50,lineStyle:"round",hue:{min:0,max:360},delay:{min:15,max:30},rocketsPoint:{min:50,max:50},lineWidth:{explosion:{min:1,max:3},trace:{min:1,max:2}},brightness:{min:50,max:80},decay:{min:.015,max:.03},mouse:{click:!1,move:!1,max:1}});a.start(),setTimeout(()=>{a.stop(),document.body.removeChild(l)},5e3)}return(l,a)=>(z(),b("div",pt,[u("div",ft,[u("div",xt,k(E(t)("MazeGame.title")),1)]),u("p",mt,k(E(t)("MazeGame.instruction")),1),u("p",gt,k(E(t)("MazeGame.completionCount"))+" : "+k(p.value)+" , "+k(E(t)("MazeGame.spendTime"))+": "+k(e.value.diff(E(F)().startOf("day"),"seconds"))+"s ",1),u("button",{class:"btn mb-5 w-20 h-10",onClick:g},k(E(t)("MazeGame.startButton")),1),s.value.length>0?(z(),b(R,{key:0},[u("div",yt,[u("div",vt,[(z(!0),b(R,null,B(s.value,(m,O)=>(z(),b("div",wt,[(z(!0),b(R,null,B(m,(W,C)=>(z(),b("div",{style:it({width:"20px",height:"20px",backgroundColor:n.value.x===C&&n.value.y===O?"red":W===1?"black":"white"})},[O===14&&C===14?(z(),b(R,{key:0},[et(" ⭐ ")],64)):G("",!0)],4))),256))]))),256))])]),u("div",bt,[u("button",{class:"btn mb-2 w-10 h-10",onClick:a[0]||(a[0]=m=>x({key:"ArrowUp"}))},"⬆"),u("div",kt,[u("button",{class:"btn w-10 h-10",onClick:a[1]||(a[1]=m=>x({key:"ArrowLeft"}))},"⬅"),u("button",{class:"btn w-10 h-10",onClick:a[2]||(a[2]=m=>x({key:"ArrowRight"}))},"⮕")]),u("button",{class:"btn mt-2 w-10 h-10",onClick:a[3]||(a[3]=m=>x({key:"ArrowDown"}))},"⬇")])],64)):G("",!0)]))}});export{Mt as default};