System.register(["./ff702758-legacy.js"],(function(e,a){"use strict";var t,i,s,r,c,n,l,d,o,v,p,u=document.createElement("style");return u.innerHTML=".avatars[data-v-80c8e3ce]{position:relative;width:143px;text-align:center}.avatars .avatar[data-v-80c8e3ce]{width:80px;color:transparent;user-select:none;background-image:linear-gradient(135deg,#bc533b 10%,#3b88bc 40%,#8a3ccf 100%);background-clip:text;-webkit-background-clip:text}.avatars .avatar img[data-v-80c8e3ce]{width:inherit;display:block;border-radius:50%;border:1px solid #fff}.avatars .avatar-right[data-v-80c8e3ce]{position:absolute;top:0;left:63px}.home[data-v-b5433985]{min-height:100vh;display:flex;flex-flow:column;justify-content:center;align-items:center}.home .title[data-v-b5433985]{font-size:20px;margin:10px auto}.home .description[data-v-b5433985]{height:4em}\n",document.head.appendChild(u),{setters:[e=>{t=e._,i=e.o,s=e.c,r=e.q,c=e.s,n=e.a,l=e.d,d=e.x,o=e.A,v=e.b,p=e.t}],execute:function(){const a={},u=e=>(r("data-v-80c8e3ce"),e=e(),c(),e),g={class:"avatars"},m=[u((()=>n("div",{class:"avatar avatar-left"},[n("img",{src:"/assets/jpg/83a6a80b.jpg",alt:"头像"}),n("div",null,"夏枯")],-1))),u((()=>n("div",{class:"avatar avatar-right"},[n("img",{src:"/assets/jpg/960f4a58.jpg",alt:"头像"}),n("div",null,"无恙")],-1)))],h=t(a,[["render",function(e,a){return i(),s("div",g,m)}],["__scopeId","data-v-80c8e3ce"]]),b={class:"home"},f=(e=>(r("data-v-b5433985"),e=e(),c(),e))((()=>n("div",{class:"title"},"夏枯与无恙的小屋",-1))),x={class:"description"};e("default",t(l({__name:"indexHome",setup(e){const a={title:"夏枯与无恙的小屋",descriptions:["夏枯与他的小朋友，小朋友最大","牵起小手一起走","执子之手 与子偕老"]};let t="夏枯与他的小朋友，小朋友最大";const r=d("");let c,l=d(!1);return o(l,(e=>{c&&clearInterval(c);let i,s=t.length;e?(i=s,c=setInterval((()=>{r.value=t.slice(0,i),i-=1,i<0&&(l.value=!1)}),80)):(t=a.descriptions[Math.floor(Math.random()*a.descriptions.length)],i=0,c=setInterval((()=>{r.value=t.slice(0,i),i+=1,i>s+5&&(l.value=!0)}),150))}),{immediate:!0}),(e,a)=>(i(),s("div",b,[v(h),f,n("div",x,p(r.value),1)]))}}),[["__scopeId","data-v-b5433985"]]))}}}));