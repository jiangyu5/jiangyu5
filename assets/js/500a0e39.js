import{l as B,d as f,r as L,o as s,c as u,F as b,b as R,u as a,m as D,w as T,a as o,t as y,n as V,g as I,_ as k,p as w,e as m,T as O,q as N,s as E,v as x,x as U,y as S,z as $,A,B as F,C as M,D as z,f as J,h as j,E as H,j as d,k as X}from"./7e9c4828.js";function Pe(){import("data:text/javascript,")}const l=B({mode:"light",loading:{requestCount:0,successCount:0,falseCount:0,log:{timer:null,log:"\u52A0\u8F7D\u4E2D..."}},changeMode(){this.mode=this.mode!="dark"?"dark":"light";const e=document.querySelector("body");e.className=this.mode},__loadingLogChange(e){clearTimeout(this.loading.log.timer),this.loading.log.content=e,this.loading.log.timer=setTimeout(()=>{this.loading.log.log="\u52A0\u8F7D\u4E2D..."},2e3)},loadingCountUp(e=1){this.loading.requestCount+=e},loadingSuccessCountUp(e="",n=1){this.loading.successCount+=n,e!=""&&this.__loadingLogChange(e+" \u52A0\u8F7D\u6210\u529F")},loadingFalseCountUp(e="",n=1){this.loading.falseCount+=n,e!=""&&this.__loadingLogChange(e+" \u52A0\u8F7D\u5931\u8D25")}}),G={nav:[{link:"\u5BB6",url:"/",icon:"#icon-shouye"},{link:"\u8BB0\u5F55",url:"/memories",icon:"#icon-shuben"},{link:"\u56FE\u5E93",url:"/gallery",icon:"#icon-tuku1"},{link:"\u5173\u4E8E",url:"/about",icon:"#icon-guanyu"}]},K={class:"j-nav"},Q={class:"icon","aria-hidden":"true"},W=["xlink:href"],Y=f({__name:"JNav",setup(e){const n=G.nav,t=I(),p=i=>{let c=i=="/"?"home":i.slice(1);return t.fullPath.indexOf(c)!=-1||t.name==c?"active":""};return(i,c)=>{const g=L("router-link");return s(),u("div",K,[(s(!0),u(b,null,R(a(n),_=>(s(),D(g,{to:{path:_.url},class:V(p(_.url)),replace:"",key:_.link},{default:T(()=>[(s(),u("svg",Q,[o("use",{"xlink:href":_.icon},null,8,W)])),o("span",null,y(_.link),1)]),_:2},1032,["to","class"]))),128))])}}});const Z=k(Y,[["__scopeId","data-v-4519f35c"]]),h=e=>(S("data-v-e31bfcef"),e=e(),$(),e),ee={class:"tools"},oe={class:"tool tool-text aixin",key:"aixin"},te=h(()=>o("use",{"xlink:href":"#icon-aixin"},null,-1)),ne=[te],se={class:"text"},ae={class:"aixin-panel-container"},ie={class:"aixin-panel"},le=h(()=>o("p",null,"\u6211\u4EEC",-1)),ue=h(()=>o("p",null,"\u6211\u559C\u6B22\u4F60",-1)),ce=h(()=>o("p",null,"\u4E00\u76F4 \u4E5F\u4E0D\u591F",-1)),_e=h(()=>o("p",null,"\u5C0F\u50BB\u74DC \u8981\u65E9\u7761\u65E9\u8D77 \u597D\u597D\u5B66\u4E60",-1)),re={class:"icon","aria-hidden":"true"},de=["xlink:href"],pe={class:"tool back",key:"back"},he=h(()=>o("use",{"xlink:href":"#icon-fanhui"},null,-1)),me=[he],ge={class:"tools-bottom"},ve={class:"tool go-top",key:"goTop"},fe=h(()=>o("use",{"xlink:href":"#icon-fanhuidingbu"},null,-1)),Ce=[fe],ye=f({__name:"Tools",setup(e){const n=I(),t=U(),p=()=>{let v=new Date().getTime()-new Date("2022/06/16 12:00:00").getTime();return Math.floor(v/864e5)+" \u5929"},i=w(!1),c=w(null);function g(){let v=!!document.documentElement.scrollTop;v!=c.value&&(c.value=v)}window.addEventListener("scroll",g);let _;const q=()=>{removeEventListener("scroll",g),c.value=!1,window.scrollTo({top:0,behavior:"smooth"}),clearTimeout(_),_=setTimeout(()=>{c.value=!!document.documentElement.scrollTop,window.addEventListener("scroll",g)},800)};return(v,r)=>(s(),u("div",ee,[m(O,{name:"fade",class:"tools-top",tag:"div"},{default:T(()=>[o("div",oe,[(s(),u("svg",{class:"icon","aria-hidden":"true",onClick:r[0]||(r[0]=C=>i.value=!i.value)},ne)),o("div",se,y(p()),1),E(o("div",ae,[o("div",ie,[o("div",{class:"close",onClick:r[1]||(r[1]=C=>i.value=!i.value)},"X"),le,o("p",null,"\u76F8\u9047\u4E86 "+y(p()),1),ue,ce,_e])],512),[[x,i.value]])]),o("div",{class:"tool mode",onClick:r[2]||(r[2]=C=>a(l).changeMode()),key:"mode"},[(s(),u("svg",re,[o("use",{"xlink:href":"#icon-"+(a(l).mode=="light"?"dark":"light")},null,8,de)]))]),E(o("div",pe,[(s(),u("svg",{class:"icon","aria-hidden":"true",onClick:r[3]||(r[3]=(...C)=>a(t).back&&a(t).back(...C))},me))],512),[[x,a(n).fullPath.split("/").length>2]])]),_:1}),o("div",ge,[m(N,{name:"go-top-transition"},{default:T(()=>[E(o("div",ve,[(s(),u("svg",{class:"icon","aria-hidden":"true",onClick:q},Ce))],512),[[x,c.value]])]),_:1})])]))}});const ke=k(ye,[["__scopeId","data-v-e31bfcef"]]),Ee=f({__name:"Loading",props:{scale:null},setup(e){const n=e,t=A(()=>"scale("+n.scale+")");return(p,i)=>(s(),u("div",{class:"loading",style:F({transform:a(t)})},null,4))}});const xe=k(Ee,[["__scopeId","data-v-0cea4c3a"]]),Te=e=>(S("data-v-ef89311a"),e=e(),$(),e),we={class:"loading-layer"},Le={class:"progress-bar"},be=Te(()=>o("div",{class:"bg-bar"},null,-1)),De={class:"tip"},Ie=f({__name:"LoadingLayer",props:{tip:{default:"\u8F7D\u5165\u4E2D..."},requestCount:{default:10},successCount:{default:0},falseCount:{default:0}},setup(e){const n=A(()=>(100-(e.successCount+e.falseCount)/e.requestCount*100).toFixed(2)+"%");return(t,p)=>(s(),u("div",we,[m(xe),o("div",Le,[be,o("div",{class:"control-bar",style:F("width:"+a(n))},null,4)]),o("div",De,y(e.tip),1)]))}});const Se=k(Ie,[["__scopeId","data-v-ef89311a"]]),$e=f({__name:"App",setup(e){l.loadingCountUp(),document.fonts?document.fonts.ready.then(()=>{l.loadingSuccessCountUp("\u5B57\u4F53")}):l.loadingFalseCountUp("\u5B57\u4F53");let n=w(!0);return M(()=>[l.loading.successCount,l.loading.falseCount],t=>{l.loading.requestCount<=t[0]+t[1]&&setTimeout(()=>n.value=!1,200)}),z(()=>{window.addEventListener("resize",()=>{const t=document.querySelector("aside");t&&(t.style.height=window.innerHeight+"px")})}),(t,p)=>{const i=L("router-view");return s(),u(b,null,[a(n)?(s(),D(Se,{key:0,tip:a(l).loading.log.content,requestCount:a(l).loading.requestCount,successCount:a(l).loading.successCount,falseCount:a(l).loading.falseCount},null,8,["tip","requestCount","successCount","falseCount"])):J("",!0),o("aside",null,[m(Z),m(ke)]),o("main",null,[m(i)])],64)}}});const Ae=[{path:"",name:"home",component:()=>d(()=>import("./fc3d1df8.js"),["assets/js/fc3d1df8.js","assets/js/51d8a20f.js","assets/js/7e9c4828.js","assets/css/3b2c2e8e.css"])},{path:"/memories",name:"memories",component:()=>d(()=>import("./97b5675c.js"),["assets/js/97b5675c.js","assets/js/7e9c4828.js","assets/css/b3abefc2.css"]),children:[{path:"",component:()=>d(()=>import("./190908e5.js"),["assets/js/190908e5.js","assets/js/7e9c4828.js","assets/css/415116ae.css"])},{path:"said",component:()=>d(()=>import("./739467c2.js"),["assets/js/739467c2.js","assets/js/7e9c4828.js","assets/css/1efc98a8.css"])},{path:"love",component:()=>d(()=>import("./1f1bbf00.js"),["assets/js/1f1bbf00.js","assets/js/7e9c4828.js","assets/css/c15f2d70.css"])},{path:"test",component:()=>d(()=>import("./5295cb23.js"),["assets/js/5295cb23.js","assets/js/7e9c4828.js","assets/css/3ba4a2d3.css"])}]},{path:"/gallery",name:"gallery",component:()=>d(()=>import("./ea9ab994.js"),["assets/js/ea9ab994.js","assets/js/51d8a20f.js","assets/js/7e9c4828.js","assets/css/ca4264ba.css"])},{path:"/about",name:"about",component:()=>d(()=>import("./52fedd8d.js"),["assets/js/52fedd8d.js","assets/js/7e9c4828.js","assets/css/73e78b92.css"])}],Fe=j({history:H(),routes:Ae}),P=X($e);P.use(Fe);P.mount("#app");export{xe as L,Pe as __vite_legacy_guard,l as s};