import{h as v}from"./moment-C5S46NFB.js";import{d as T,r as a,o,c as s,b as e,t as m,n as x,u as A,F as w,h as k}from"./index-D8tCz045.js";const B={class:"flex justify-center mb-3"},D={class:"flex justify-between mb-5 gap-3 flex-wrap"},N=["disabled"],O={key:0},j={key:1},E={key:2},F={class:"text-3xl font-bold text-end"},I={key:0,class:"text-nowrap"},P={class:"text-nowrap"},V={class:"flex justify-around mb-10"},W=["disabled"],q=T({__name:"WhackAMole",setup(z){const n=a(!1),r=a(3),u=a(v().startOf("day").add(20,"s")),t=a(!1),d=a(0),i=a(0),c=a(Math.floor(Math.random()*16)+1),l=a(setTimeout(()=>{},Math.random()*1e3+1e3));function C(){return u.value.format("ss:SS")}function M(){r.value=3,u.value=v().startOf("day").add(20,"s"),n.value=!0,h(),i.value=0}function h(){r.value>1?setTimeout(()=>{r.value--,h()},1e3):(n.value=!1,t.value=!0,l.value=f(),_())}function _(){u.value>v().startOf("day")?setTimeout(()=>{u.value=v(u.value).add(-10,"milliseconds"),_()},10):(t.value=!1,clearTimeout(l.value),d.value<i.value&&(d.value=i.value))}function S(){var p=new Audio("./gotPointSoundEffect.wav");p.play(),i.value++,c.value=Math.floor(Math.random()*16)+1,clearTimeout(l.value),l.value=f()}function f(){return setTimeout(()=>{t?(c.value=Math.floor(Math.random()*16)+1,l.value=f()):clearTimeout(l.value)},Math.random()*1500+500)}return(p,b)=>(o(),s("div",null,[b[0]||(b[0]=e("div",{class:"text-xl mb-3"}," Whack-A-Mole ",-1)),e("div",B,[e("h1",null,m(C()),1)]),e("div",D,[e("button",{class:x(["h-16 w-24 text-white font-bold rounded",n.value||t.value?"bg-primary-light-active":"bg-primary hover:bg-primary-active"]),onClick:M,disabled:n.value||t.value},[n.value?(o(),s("span",O,m(r.value),1)):t.value?(o(),s("span",j," Go ! ")):(o(),s("span",E," Start "))],10,N),e("div",F,[d.value?(o(),s("div",I," highest "+m(d.value),1)):A("",!0),e("div",P," point "+m(i.value),1)])]),(o(),s(w,null,k(4,g=>e("div",V,[(o(),s(w,null,k(4,y=>e("button",{class:x(["lg:p-16 md:p-10 p-7 rounded-md",c.value==(g-1)*4+y&&t.value?"bg-red-400 cursor-pointer":"bg-gray-400"]),disabled:c.value!=(g-1)*4+y||!t.value,onClick:S},null,10,W)),64))])),64))]))}});export{q as default};
