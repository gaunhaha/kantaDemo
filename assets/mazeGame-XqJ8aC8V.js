var X=Object.defineProperty;var Y=(o,t,i)=>t in o?X(o,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[t]=i;var e=(o,t,i)=>Y(o,typeof t!="symbol"?t+"":t,i);import{d as Q,i as Z,r as A,j as tt,c as b,a as u,t as k,u as E,F as R,G,b as B,o as z,n as et,e as it}from"./index-Br36YgFU.js";import{h as F}from"./moment-C5S46NFB.js";function j(o){return Math.abs(Math.floor(o))}function S(o,t){return Math.random()*(t-o)+o}function m(o,t){return Math.floor(S(o,t+1))}function U(o,t,i,s){const n=Math.pow;return Math.sqrt(n(o-i,2)+n(t-s,2))}function I(o,t,i=1){if(o>360||o<0)throw new Error(`Expected hue 0-360 range, got \`${o}\``);if(t>100||t<0)throw new Error(`Expected lightness 0-100 range, got \`${t}\``);if(i>1||i<0)throw new Error(`Expected alpha 0-1 range, got \`${i}\``);return`hsla(${o}, 100%, ${t}%, ${i})`}const q=o=>{if(typeof o=="object"&&o!==null){if(typeof Object.getPrototypeOf=="function"){const t=Object.getPrototypeOf(o);return t===Object.prototype||t===null}return Object.prototype.toString.call(o)==="[object Object]"}return!1},st=["__proto__","constructor","prototype"],V=(...o)=>o.reduce((t,i)=>(Object.keys(i).forEach(s=>{st.includes(s)||(Array.isArray(t[s])&&Array.isArray(i[s])?t[s]=i[s]:q(t[s])&&q(i[s])?t[s]=V(t[s],i[s]):t[s]=i[s])}),t),{});function nt(o,t){let i;return(...s)=>{i&&clearTimeout(i),i=setTimeout(()=>o(...s),t)}}class ot{constructor({x:t,y:i,ctx:s,hue:n,decay:d,gravity:p,friction:c,brightness:g,flickering:v,lineWidth:f,explosionLength:L}){e(this,"x");e(this,"y");e(this,"ctx");e(this,"hue");e(this,"friction");e(this,"gravity");e(this,"flickering");e(this,"lineWidth");e(this,"explosionLength");e(this,"angle");e(this,"speed");e(this,"brightness");e(this,"coordinates",[]);e(this,"decay");e(this,"alpha",1);for(this.x=t,this.y=i,this.ctx=s,this.hue=n,this.gravity=p,this.friction=c,this.flickering=v,this.lineWidth=f,this.explosionLength=L,this.angle=S(0,Math.PI*2),this.speed=m(1,10),this.brightness=m(g.min,g.max),this.decay=S(d.min,d.max);this.explosionLength--;)this.coordinates.push([t,i])}update(t){this.coordinates.pop(),this.coordinates.unshift([this.x,this.y]),this.speed*=this.friction,this.x+=Math.cos(this.angle)*this.speed,this.y+=Math.sin(this.angle)*this.speed+this.gravity,this.alpha-=this.decay,this.alpha<=this.decay&&t()}draw(){const t=this.coordinates.length-1;this.ctx.beginPath(),this.ctx.lineWidth=this.lineWidth,this.ctx.fillStyle=I(this.hue,this.brightness,this.alpha),this.ctx.moveTo(this.coordinates[t][0],this.coordinates[t][1]),this.ctx.lineTo(this.x,this.y),this.ctx.strokeStyle=I(this.hue,this.flickering?S(0,this.brightness):this.brightness,this.alpha),this.ctx.stroke()}}class at{constructor(t,i){e(this,"active",!1);e(this,"x");e(this,"y");this.options=t,this.canvas=i,this.pointerDown=this.pointerDown.bind(this),this.pointerUp=this.pointerUp.bind(this),this.pointerMove=this.pointerMove.bind(this)}get mouseOptions(){return this.options.mouse}mount(){this.canvas.addEventListener("pointerdown",this.pointerDown),this.canvas.addEventListener("pointerup",this.pointerUp),this.canvas.addEventListener("pointermove",this.pointerMove)}unmount(){this.canvas.removeEventListener("pointerdown",this.pointerDown),this.canvas.removeEventListener("pointerup",this.pointerUp),this.canvas.removeEventListener("pointermove",this.pointerMove)}usePointer(t,i){const{click:s,move:n}=this.mouseOptions;(s||n)&&(this.x=t.pageX-this.canvas.offsetLeft,this.y=t.pageY-this.canvas.offsetTop,this.active=i)}pointerDown(t){this.usePointer(t,this.mouseOptions.click)}pointerUp(t){this.usePointer(t,!1)}pointerMove(t){this.usePointer(t,this.active)}}class ht{constructor(){e(this,"hue");e(this,"rocketsPoint");e(this,"opacity");e(this,"acceleration");e(this,"friction");e(this,"gravity");e(this,"particles");e(this,"explosion");e(this,"mouse");e(this,"boundaries");e(this,"sound");e(this,"delay");e(this,"brightness");e(this,"decay");e(this,"flickering");e(this,"intensity");e(this,"traceLength");e(this,"traceSpeed");e(this,"lineWidth");e(this,"lineStyle");e(this,"autoresize");this.autoresize=!0,this.lineStyle="round",this.flickering=50,this.traceLength=3,this.traceSpeed=10,this.intensity=30,this.explosion=5,this.gravity=1.5,this.opacity=.5,this.particles=50,this.friction=.95,this.acceleration=1.05,this.hue={min:0,max:360},this.rocketsPoint={min:50,max:50},this.lineWidth={explosion:{min:1,max:3},trace:{min:1,max:2}},this.mouse={click:!1,move:!1,max:1},this.delay={min:30,max:60},this.brightness={min:50,max:80},this.decay={min:.015,max:.03},this.sound={enabled:!1,files:["explosion0.mp3","explosion1.mp3","explosion2.mp3"],volume:{min:4,max:8}},this.boundaries={debug:!1,height:0,width:0,x:50,y:50}}update(t){Object.assign(this,V(this,t))}}class rt{constructor(t,i){e(this,"tick",0);e(this,"rafId",0);e(this,"fps",60);e(this,"tolerance",.1);e(this,"now");this.options=t,this.render=i}mount(){this.now=performance.now();const t=1e3/this.fps,i=s=>{this.rafId=requestAnimationFrame(i);const n=s-this.now;n>=t-this.tolerance&&(this.render(),this.now=s-n%t,this.tick+=n*(this.options.intensity*Math.PI)/1e3)};this.rafId=requestAnimationFrame(i)}unmount(){cancelAnimationFrame(this.rafId)}}class ct{constructor(t,i,s){e(this,"resizer");this.options=t,this.updateSize=i,this.container=s}mount(){if(!this.resizer){const t=nt(()=>this.updateSize(),100);this.resizer=new ResizeObserver(t)}this.options.autoresize&&this.resizer.observe(this.container)}unmount(){this.resizer&&this.resizer.unobserve(this.container)}}class lt{constructor(t){e(this,"buffers",[]);e(this,"audioContext");e(this,"onInit",!1);this.options=t,this.init()}get isEnabled(){return this.options.sound.enabled}get soundOptions(){return this.options.sound}init(){!this.onInit&&this.isEnabled&&(this.onInit=!0,this.audioContext=new(window.AudioContext||window.webkitAudioContext),this.loadSounds())}async loadSounds(){for(const t of this.soundOptions.files){const i=await(await fetch(t)).arrayBuffer();this.audioContext.decodeAudioData(i).then(s=>{this.buffers.push(s)}).catch(s=>{throw s})}}play(){if(this.isEnabled&&this.buffers.length){const t=this.audioContext.createBufferSource(),i=this.buffers[m(0,this.buffers.length-1)],s=this.audioContext.createGain();t.buffer=i,s.gain.value=S(this.soundOptions.volume.min/100,this.soundOptions.volume.max/100),s.connect(this.audioContext.destination),t.connect(s),t.start(0)}else this.init()}}class ut{constructor({x:t,y:i,dx:s,dy:n,ctx:d,hue:p,speed:c,traceLength:g,acceleration:v}){e(this,"x");e(this,"y");e(this,"sx");e(this,"sy");e(this,"dx");e(this,"dy");e(this,"ctx");e(this,"hue");e(this,"speed");e(this,"acceleration");e(this,"traceLength");e(this,"totalDistance");e(this,"angle");e(this,"brightness");e(this,"coordinates",[]);e(this,"currentDistance",0);for(this.x=t,this.y=i,this.sx=t,this.sy=i,this.dx=s,this.dy=n,this.ctx=d,this.hue=p,this.speed=c,this.traceLength=g,this.acceleration=v,this.totalDistance=U(t,i,s,n),this.angle=Math.atan2(n-i,s-t),this.brightness=m(50,70);this.traceLength--;)this.coordinates.push([t,i])}update(t){this.coordinates.pop(),this.coordinates.unshift([this.x,this.y]),this.speed*=this.acceleration;const i=Math.cos(this.angle)*this.speed,s=Math.sin(this.angle)*this.speed;this.currentDistance=U(this.sx,this.sy,this.x+i,this.y+s),this.currentDistance>=this.totalDistance?t(this.dx,this.dy,this.hue):(this.x+=i,this.y+=s)}draw(){const t=this.coordinates.length-1;this.ctx.beginPath(),this.ctx.moveTo(this.coordinates[t][0],this.coordinates[t][1]),this.ctx.lineTo(this.x,this.y),this.ctx.strokeStyle=I(this.hue,this.brightness),this.ctx.stroke()}}class dt{constructor(t,i={}){e(this,"target");e(this,"container");e(this,"canvas");e(this,"ctx");e(this,"width");e(this,"height");e(this,"traces",[]);e(this,"explosions",[]);e(this,"waitStopRaf");e(this,"running",!1);e(this,"opts");e(this,"sound");e(this,"resize");e(this,"mouse");e(this,"raf");this.target=t,this.container=t,this.opts=new ht,this.createCanvas(this.target),this.updateOptions(i),this.sound=new lt(this.opts),this.resize=new ct(this.opts,this.updateSize.bind(this),this.container),this.mouse=new at(this.opts,this.canvas),this.raf=new rt(this.opts,this.render.bind(this))}get isRunning(){return this.running}get version(){return"2.10.8"}get currentOptions(){return this.opts}start(){this.running||(this.canvas.isConnected||this.createCanvas(this.target),this.running=!0,this.resize.mount(),this.mouse.mount(),this.raf.mount())}stop(t=!1){this.running&&(this.running=!1,this.resize.unmount(),this.mouse.unmount(),this.raf.unmount(),this.clear(),t&&this.canvas.remove())}async waitStop(t){if(this.running)return new Promise(i=>{this.waitStopRaf=()=>{this.waitStopRaf&&(requestAnimationFrame(this.waitStopRaf),!this.traces.length&&!this.explosions.length&&(this.waitStopRaf=null,this.stop(t),i()))},this.waitStopRaf()})}pause(){this.running=!this.running,this.running?this.raf.mount():this.raf.unmount()}clear(){this.ctx&&(this.traces=[],this.explosions=[],this.ctx.clearRect(0,0,this.width,this.height))}launch(t=1){for(let i=0;i<t;i++)this.createTrace();this.waitStopRaf||(this.start(),this.waitStop())}updateOptions(t){this.opts.update(t)}updateSize({width:t=this.container.clientWidth,height:i=this.container.clientHeight}={}){this.width=t,this.height=i,this.canvas.width=t,this.canvas.height=i,this.updateBoundaries({...this.opts.boundaries,width:t,height:i})}updateBoundaries(t){this.updateOptions({boundaries:t})}createCanvas(t){t instanceof HTMLCanvasElement?(t.isConnected||document.body.append(t),this.canvas=t):(this.canvas=document.createElement("canvas"),this.container.append(this.canvas)),this.ctx=this.canvas.getContext("2d"),this.updateSize()}render(){if(!this.ctx||!this.running)return;const{opacity:t,lineStyle:i,lineWidth:s}=this.opts;this.ctx.globalCompositeOperation="destination-out",this.ctx.fillStyle=`rgba(0, 0, 0, ${t})`,this.ctx.fillRect(0,0,this.width,this.height),this.ctx.globalCompositeOperation="lighter",this.ctx.lineCap=i,this.ctx.lineJoin="round",this.ctx.lineWidth=S(s.trace.min,s.trace.max),this.initTrace(),this.drawTrace(),this.drawExplosion()}createTrace(){const{hue:t,rocketsPoint:i,boundaries:s,traceLength:n,traceSpeed:d,acceleration:p,mouse:c}=this.opts;this.traces.push(new ut({x:this.width*m(i.min,i.max)/100,y:this.height,dx:this.mouse.x&&c.move||this.mouse.active?this.mouse.x:m(s.x,s.width-s.x*2),dy:this.mouse.y&&c.move||this.mouse.active?this.mouse.y:m(s.y,s.height*.5),ctx:this.ctx,hue:m(t.min,t.max),speed:d,acceleration:p,traceLength:j(n)}))}initTrace(){if(this.waitStopRaf)return;const{delay:t,mouse:i}=this.opts;(this.raf.tick>m(t.min,t.max)||this.mouse.active&&i.max>this.traces.length)&&(this.createTrace(),this.raf.tick=0)}drawTrace(){let t=this.traces.length;for(;t--;)this.traces[t].draw(),this.traces[t].update((i,s,n)=>{this.initExplosion(i,s,n),this.sound.play(),this.traces.splice(t,1)})}initExplosion(t,i,s){const{particles:n,flickering:d,lineWidth:p,explosion:c,brightness:g,friction:v,gravity:f,decay:L}=this.opts;let D=j(n);for(;D--;)this.explosions.push(new ot({x:t,y:i,ctx:this.ctx,hue:s,friction:v,gravity:f,flickering:m(0,100)<=d,lineWidth:S(p.explosion.min,p.explosion.max),explosionLength:j(c),brightness:g,decay:L}))}drawExplosion(){let t=this.explosions.length;for(;t--;)this.explosions[t].draw(),this.explosions[t].update(()=>{this.explosions.splice(t,1)})}}const pt={class:"w-full h-full text-primary"},mt={class:"flex items-center justify-between mb-1"},ft={class:"font-bold text-xl"},xt={class:"mb-3 text-sm"},gt={class:"mb-5"},yt={class:"mx-auto w-fit mb-10"},vt={class:"border-2 border-gray-500 p-2 shadow-lg bg-black rounded-md"},wt={class:"flex flex-wrap"},bt={class:"flex flex-col items-center font-bold md:hidden"},kt={class:"flex gap-14"},Mt=Q({__name:"mazeGame",setup(o){const{t}=Z.global,i=A(F().startOf("day")),s=A([]),n=A({x:0,y:0}),d=A({x:14,y:14}),p=A(0),c=A(null);tt(()=>{window.addEventListener("keydown",f);const h=document.querySelector("meta[name=viewport]");h&&h.setAttribute("content","width=device-width, initial-scale=1.0, user-scalable=no")});function g(){s.value=v(),n.value={x:0,y:0},c.value!==null&&clearInterval(c.value),c.value=setInterval(()=>{i.value=i.value.clone().add(1,"seconds")},1e3)}function v(){let a=Array.from({length:15},()=>Array(15).fill(1));const x=[{x:0,y:-1},{x:0,y:1},{x:-1,y:0},{x:1,y:0}];function O(r,l){return r>=0&&l>=0&&r<15&&l<15}function W(r){for(let l=r.length-1;l>0;l--){const y=Math.floor(Math.random()*(l+1));[r[l],r[y]]=[r[y],r[l]]}}function C(r,l){a[l][r]=0,W(x);for(const{x:y,y:_}of x){const w=r+y*2,M=l+_*2;O(w,M)&&a[M][w]===1&&(a[l+_][r+y]=0,C(w,M))}}C(0,0);function H(r,l,y){const _=Array.from({length:r.length},()=>Array(r[0].length).fill(!1)),w=[l];for(;w.length>0;){const{x:M,y:$}=w.shift();if(M===y.x&&$===y.y)return!0;for(const{x:J,y:K}of x){const P=M+J,T=$+K;O(P,T)&&r[T][P]===0&&!_[T][P]&&(_[T][P]=!0,w.push({x:P,y:T}))}}return!1}do a=Array.from({length:15},()=>Array(15).fill(1)),C(0,0),a[14][14]=0;while(!H(a,{x:0,y:0},{x:14,y:14}));return a}function f(h){if(!D()){switch(h.key){case"ArrowUp":n.value.y>0&&s.value[n.value.y-1][n.value.x]===0&&n.value.y--;break;case"ArrowDown":n.value.y<s.value.length-1&&s.value[n.value.y+1][n.value.x]===0&&n.value.y++;break;case"ArrowLeft":n.value.x>0&&s.value[n.value.y][n.value.x-1]===0&&n.value.x--;break;case"ArrowRight":n.value.x<s.value[0].length-1&&s.value[n.value.y][n.value.x+1]===0&&n.value.x++;break}L()}}function L(){D()&&(p.value++,c.value!==null&&clearInterval(c.value),new Audio("./gotPointSoundEffect.wav").play(),N())}function D(){return n.value.x===d.value.x&&n.value.y===d.value.y}function N(){const h=document.createElement("div");h.style.position="fixed",h.style.top="0",h.style.left="0",h.style.width="100%",h.style.height="100%",h.style.zIndex="9999",document.body.appendChild(h);const a=new dt(h,{autoresize:!0,opacity:.5,acceleration:1.05,friction:.97,gravity:1.5,particles:50,explosion:5,intensity:30,flickering:50,lineStyle:"round",hue:{min:0,max:360},delay:{min:15,max:30},rocketsPoint:{min:50,max:50},lineWidth:{explosion:{min:1,max:3},trace:{min:1,max:2}},brightness:{min:50,max:80},decay:{min:.015,max:.03},mouse:{click:!1,move:!1,max:1}});a.start(),setTimeout(()=>{a.stop(),document.body.removeChild(h)},5e3)}return(h,a)=>(z(),b("div",pt,[u("div",mt,[u("div",ft,k(E(t)("MazeGame.title")),1)]),u("p",xt,k(E(t)("MazeGame.instruction")),1),u("p",gt,k(E(t)("MazeGame.completionCount"))+" : "+k(p.value)+" , "+k(E(t)("MazeGame.spendTime"))+": "+k(i.value.diff(E(F)().startOf("day"),"seconds"))+"s ",1),u("button",{class:"btn mb-5 w-20 h-10",onClick:g},k(E(t)("MazeGame.startButton")),1),s.value.length>0?(z(),b(R,{key:0},[u("div",yt,[u("div",vt,[(z(!0),b(R,null,G(s.value,(x,O)=>(z(),b("div",wt,[(z(!0),b(R,null,G(x,(W,C)=>(z(),b("div",{style:et({width:"20px",height:"20px",backgroundColor:n.value.x===C&&n.value.y===O?"red":W===1?"black":"white"})},[O===14&&C===14?(z(),b(R,{key:0},[it(" ⭐ ")],64)):B("",!0)],4))),256))]))),256))])]),u("div",bt,[u("button",{class:"btn mb-2 w-10 h-10",onClick:a[0]||(a[0]=x=>f({key:"ArrowUp"}))},"⬆"),u("div",kt,[u("button",{class:"btn w-10 h-10",onClick:a[1]||(a[1]=x=>f({key:"ArrowLeft"}))},"⬅"),u("button",{class:"btn w-10 h-10",onClick:a[2]||(a[2]=x=>f({key:"ArrowRight"}))},"⮕")]),u("button",{class:"btn mt-2 w-10 h-10",onClick:a[3]||(a[3]=x=>f({key:"ArrowDown"}))},"⬇")])],64)):B("",!0)]))}});export{Mt as default};
