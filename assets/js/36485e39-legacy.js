System.register(["./1a369395-legacy.js"],(function(e,t){"use strict";var n,o,d,a,l,c,s,i,r,m,u,g,h,p,b,x,y,f=document.createElement("style");return f.innerHTML=".gallery .container[data-v-b608d06d]{display:flex;flex-flow:row wrap;justify-content:center;gap:5px;padding:0 10px}.gallery .container .img[data-v-b608d06d]{max-width:80px;height:90px;width:80px;background:linear-gradient(to right bottom,rgba(80,205,255,.2) 0%,rgba(80,205,255,.7) 60%,#599eff 100%);border-radius:5px;box-shadow:2px 2px 3px #b4b4b4}.gallery .tip[data-v-b608d06d]{margin-top:10px;margin-bottom:130px}\n",document.head.appendChild(f),{setters:[e=>{n=e.d,o=e.l,d=e.A,a=e.H,l=e.B,c=e.I,s=e.o,i=e.c,r=e.a,m=e.F,u=e.b,g=e.t,h=e.u,p=e.z,b=e.x,x=e.y,y=e._}],execute:function(){const t={class:"gallery"},f=(e=>(b("data-v-b608d06d"),e=e(),x(),e))((()=>r("h2",null,"图库",-1))),v={class:"container"},w={class:"tip"};e("default",y(n({__name:"indexGallery",setup(e){const n=o({count:70,success:0,imgsRandom:["89, 248, 187","248, 142, 89","73, 134, 255","188, 73, 255","255, 73, 140"]}),b=d((()=>n.count<=n.success?"!到底啦!":"下滑加载更多")),x=o(["/wyxk/assets/imgs/gallery/山河与你.jpg"]);function y(){let e=document.documentElement.scrollTop,t=document.documentElement.clientHeight||document.body.clientHeight,o=document.documentElement.scrollHeight||document.body.scrollHeight;n.count>n.success&&e+t>o-40&&(x.push(n.imgsRandom[Math.floor(Math.random()*n.imgsRandom.length)]),n.success++)}return a((()=>{window.addEventListener("scroll",y)})),l((()=>{let e=[];for(let t=0;t<60;t++)e.push(setTimeout((()=>{document.documentElement.scrollHeight>document.documentElement.clientHeight+40||document.body.scrollHeight>document.body.clientHeight+40?e.forEach((e=>clearTimeout(e))):(x.push(n.imgsRandom[Math.floor(Math.random()*n.imgsRandom.length)]),n.success++)}),100))})),c((()=>{window.removeEventListener("scroll",y)})),(e,n)=>(s(),i("div",t,[f,r("div",v,[(s(!0),i(m,null,u(x,(e=>(s(),i("div",{class:"img",style:p({background:`linear-gradient(to right bottom,rgba(${e}, 0.1) 0%,rgba(${e}, 0.7) 60%, rgba(${e}) 100%`})},null,4)))),256))]),r("div",w,g(h(b)),1)]))}}),[["__scopeId","data-v-b608d06d"]]))}}}));
