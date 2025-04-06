import{d as I,N,h as o,e as O,c as n,v as R,a as e,x as V,t,u as i,s as A,p as E,F as S,r as T,o as u}from"./index-CdjhybHU.js";import{h as f}from"./moment-C5S46NFB.js";const F={class:"max-w-4xl mx-auto"},G={class:"text-black bg-gray-100 p-4 mb-10 rounded-md shadow-md relative"},L={class:"font-bold text-lg"},j={class:"mb-3"},z={class:"text-primary"},P={class:"text-center mb-3"},$={class:"text-3xl font-bold"},q={class:"w-fit mx-auto"},H={class:"flex justify-between mb-5"},J=["disabled"],K={key:0},Q={key:1},U={key:2},X={class:"text-3xl font-bold"},Y={key:0,class:"text-nowrap"},Z={class:"text-nowrap"},ee={class:"flex mb-3 gap-3"},te=["disabled"],ne=I({__name:"WhackAMole",setup(oe){const{t:a}=N(),r=o(!1),v=o(3),c=o(f().startOf("day").add(20,"s")),s=o(!1),h=o(0),d=o(0),_=o(0),l=o(null),p=o(new Audio("./gotPointSoundEffect.mp3")),k=o(!0);O(()=>{g(),p.value.load()});function C(){return c.value.format("ss : SS")}function W(){v.value=3,c.value=f().startOf("day").add(20,"s"),r.value=!0,x(),d.value=0}function x(){v.value>1?setTimeout(()=>{v.value--,x()},1e3):(r.value=!1,s.value=!0,l.value=b(),y())}function y(){c.value>f().startOf("day")?setTimeout(()=>{c.value=f(c.value).add(-10,"milliseconds"),y()},10):(s.value=!1,l.value&&clearTimeout(l.value),h.value<d.value&&(h.value=d.value))}function g(){_.value=Math.floor(Math.random()*16)+1}function B(){p.value.currentTime=0,p.value.play(),d.value++,g(),D()}function b(){return setTimeout(()=>{g(),l.value=b()},Math.random()*1500+500)}function D(){l.value&&clearTimeout(l.value),l.value=b()}return(ae,m)=>(u(),n("div",F,[R(e("div",G,[e("button",{class:"absolute top-2 right-2 text-gray-500 hover:text-gray-700",onClick:m[0]||(m[0]=w=>k.value=!1)},m[1]||(m[1]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])),e("h2",L,t(i(a)("WhackAMole.title")),1),e("p",j,t(i(a)("WhackAMole.instruction")),1),e("p",null,t(i(a)("WhackAMole.instructionDetail")),1)],512),[[V,k.value]]),e("div",z,[e("div",P,[e("h1",$,t(C()),1)]),e("div",q,[e("div",H,[e("button",{id:"whack-a-mole-start-button",class:A(["btn-light h-12 w-20",r.value||s.value?"bg-primary-light-active":"bg-primary hover:bg-primary-active"]),onClick:W,disabled:r.value||s.value},[r.value?(u(),n("span",K,t(v.value),1)):s.value?(u(),n("span",Q,t(i(a)("WhackAMole.go")),1)):(u(),n("span",U,t(i(a)("WhackAMole.start")),1))],10,J),e("div",X,[h.value?(u(),n("div",Y,t(i(a)("WhackAMole.highest"))+" "+t(h.value),1)):E("",!0),e("div",Z,t(i(a)("WhackAMole.score"))+" "+t(d.value),1)])]),(u(),n(S,null,T(4,w=>e("div",ee,[(u(),n(S,null,T(4,M=>e("button",{class:A(["lg:p-16 md:p-10 p-7 rounded-md",_.value==(w-1)*4+M&&s.value?"bg-red-400 cursor-pointer":"bg-gray-400"]),disabled:_.value!=(w-1)*4+M||!s.value,onClick:B},null,10,te)),64))])),64))])])]))}});export{ne as default};
