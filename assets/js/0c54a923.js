import{d as m,l as d,A as g,H as _,B as h,I as p,o as u,c as l,a,F as y,b as E,t as f,u as v,x,y as H,_ as w}from"./04510b9f.js";const F=n=>(x("data-v-c2360eee"),n=n(),H(),n),B={class:"gallery"},C=F(()=>a("h2",null,"\u56FE\u5E93",-1)),M={class:"container"},b=["src"],k={class:"tip"},I=m({__name:"indexGallery",setup(n){const e=d({count:100,success:0,imgsRandom:["\u5C71\u6CB3\u4E0E\u4F60.jpg","\u9493\u661F\u661F.jpg","\u697C\u89D2.jpg"]}),r=g(()=>e.count==e.success?"!\u5230\u5E95\u5566!":"\u4E0B\u62C9\u52A0\u8F7D\u66F4\u591A"),c=d(["/wyxk/assets/imgs/gallery/\u5C71\u6CB3\u4E0E\u4F60.jpg"]);function i(){let t=document.documentElement.scrollTop,s=document.documentElement.clientHeight||document.body.clientHeight,o=document.documentElement.scrollHeight||document.body.scrollHeight;e.count>e.success&&t+s>o-40&&(c.push("/wyxk/assets/imgs/gallery/"+e.imgsRandom[Math.floor(Math.random()*e.imgsRandom.length)]),e.success++)}return _(()=>{window.addEventListener("scroll",i)}),h(()=>{let t=[];for(let s=0;s<60;s++)t.push(setTimeout(()=>{document.documentElement.scrollHeight>document.documentElement.clientHeight+40||document.body.scrollHeight>document.body.clientHeight+40?t.forEach(o=>clearTimeout(o)):(c.push("/wyxk/assets/imgs/gallery/"+e.imgsRandom[Math.floor(Math.random()*e.imgsRandom.length)]),e.count++)},100))}),p(()=>{window.removeEventListener("scroll",i)}),(t,s)=>(u(),l("div",B,[C,a("div",M,[(u(!0),l(y,null,E(c,o=>(u(),l("img",{src:o,alt:"\u56FE\u7247"},null,8,b))),256))]),a("div",k,f(v(r)),1)]))}});const j=w(I,[["__scopeId","data-v-c2360eee"]]);export{j as default};