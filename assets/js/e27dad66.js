import{d as h,r as l,o as n,c as a,a as o,t as p,u,F as d,b as f,e as k,f as _,w as y,g as E,n as x,_ as m,h as A,i as B,j as t,k as C}from"./133dc8fc.js";function H(){import("data:text/javascript,")}const V={class:"nav"},b={class:"title"},I={class:"pages"},R={key:0,class:"icon","aria-hidden":"true"},D=["xlink:href"],L=h({__name:"Nav",setup(r){const s=[{page:"\u4E3B\u9875",link:"/"},{page:"\u5BFC\u822A",link:"/navigation",icon:"#icon-faxian"},{page:"\u7B14\u8BB0",link:"/notes",icon:"#icon-biji1"},{page:"\u5206\u7C7B",link:"/category",icon:"#icon-fenlei"},{page:"\u5173\u4E8E",link:"/about",icon:"#icon-guanyu"}],c=k();return(i,z)=>{const g=l("router-link");return n(),a("div",V,[o("div",b,p(u(c).name),1),o("div",I,[(n(),a(d,null,f(s,e=>_(g,{to:{path:e.link},replace:"",class:x(u(c).path==e.link?"active":"")},{default:y(()=>[e.icon?(n(),a("svg",R,[o("use",{"xlink:href":e.icon},null,8,D)])):E("",!0),o("span",null,p(e.page),1)]),_:2},1032,["to","class"])),64))])])}}});const N=m(L,[["__scopeId","data-v-5c40af1e"]]);const P={},F={class:"footer"};function O(r,s){return n(),a("div",F,"Copyright \xA92021 Jiang")}const T=m(P,[["render",O],["__scopeId","data-v-fd920cb6"]]);const w={__name:"App",setup(r){return(s,c)=>{const i=l("router-view");return n(),a(d,null,[_(N),o("main",null,[_(i)]),_(T)],64)}}},$=[{path:"/",name:"\u9675\u6E38\u7684\u5C0F\u5C4B",component:()=>t(()=>import("./57e12b14.js"),["assets/js/57e12b14.js","assets/js/133dc8fc.js","assets/css/9cee79b0.css","assets/css/df733ee2.css"])},{path:"/navigation",name:"\u5BFC\u822A",component:()=>t(()=>import("./7d3be252.js"),["assets/js/7d3be252.js","assets/js/133dc8fc.js","assets/css/9cee79b0.css"])},{path:"/notes",name:"\u7B14\u8BB0",component:()=>t(()=>import("./707a68f0.js"),["assets/js/707a68f0.js","assets/js/133dc8fc.js","assets/css/9cee79b0.css","assets/css/ccd542df.css"])},{path:"/category",name:"\u5206\u7C7B",component:()=>t(()=>import("./5830be09.js"),["assets/js/5830be09.js","assets/js/133dc8fc.js","assets/css/9cee79b0.css"])},{path:"/about",name:"\u5173\u4E8E",component:()=>t(()=>import("./906b988c.js"),["assets/js/906b988c.js","assets/js/133dc8fc.js","assets/css/9cee79b0.css"])}],j=A({history:B(),routes:$}),v=C(w);v.use(j);v.mount("#app");export{H as __vite_legacy_guard};