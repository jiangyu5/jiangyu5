import{l as q,d as g,o as n,c as i,F as D,r as R,b as r,w as y,n as V,f as S,a as t,t as k,e as x,_ as f,m as A,T as O,p as N,u as s,q as L,v as $,s as z,x as w,y as C,z as T,A as F,B as I,C as M,D as U,g as H,h as W,i as j,j as _,k as G}from"./26e0e360.js";function Ie(){import("data:text/javascript,")}const a=q({mode:"light",loading:{requestCount:4,successCount:0,falseCount:1,log:{timer:null,log:"\u52A0\u8F7D\u4E2D..."}},changeMode(){this.mode=this.mode!="dark"?"dark":"light";const e=document.querySelector("body");e.className=this.mode},__loadingLogChange(e){clearTimeout(this.loading.log.timer),this.loading.log.content=e,this.loading.log.timer=setTimeout(()=>{this.loading.log.content="\u52A0\u8F7D\u4E2D..."},1e3)},loadingSuccessCountUp(e=""){this.loading.successCount++,e!=""&&this.__loadingLogChange(e+" \u52A0\u8F7D\u6210\u529F")},loadingFalseCountUp(e=""){this.loading.falseCount++,e!=""&&this.__loadingLogChange(e+" \u52A0\u8F7D\u5931\u8D25")}}),J={class:"nav"},K={class:"icon","aria-hidden":"true"},Q=["xlink:href"],X=g({__name:"Nav",setup(e){const c=[{page:"\u5BB6",name:"home",link:"/wyxk/",icon:"#icon-shouye"},{page:"\u8BB0\u5F55",name:"memories",link:"/wyxk/memories",icon:"#icon-shuben"},{page:"\u56FE\u5E93",name:"gallery",link:"/wyxk/gallery",icon:"#icon-tuku1"},{page:"\u5173\u4E8E",name:"about",link:"/wyxk/about",icon:"#icon-guanyu"}],l=x(),u=o=>l.fullPath.indexOf(o)!=-1||l.name==o?"active":"";return(o,h)=>{const p=S("router-link");return n(),i("div",J,[(n(),i(D,null,R(c,d=>r(p,{to:{path:d.link},class:V(u(d.name)),replace:"",key:d.link},{default:y(()=>[(n(),i("svg",K,[t("use",{"xlink:href":d.icon},null,8,Q)])),t("span",null,k(d.page),1)]),_:2},1032,["to","class"])),64))])}}});const Y=f(X,[["__scopeId","data-v-47c94b47"]]),E=e=>(w("data-v-f268b5e2"),e=e(),C(),e),Z={class:"tools"},ee={class:"tool tool-text aixin",key:"aixin"},te=E(()=>t("svg",{class:"icon","aria-hidden":"true"},[t("use",{"xlink:href":"#icon-aixin"})],-1)),oe={class:"text"},se={class:"icon","aria-hidden":"true"},ne=["xlink:href"],ae={class:"tool back",key:"back"},ie=E(()=>t("use",{"xlink:href":"#icon-fanhui"},null,-1)),le=[ie],ce={class:"tools-bottom"},ue={class:"tool go-top",key:"goTop"},de=E(()=>t("use",{"xlink:href":"#icon-fanhuidingbu"},null,-1)),_e=[de],re=g({__name:"Tools",setup(e){const c=x(),l=z(),u=()=>{let m=new Date().getTime()-new Date("2022/06/16").getTime();return Math.floor(m/864e5)+" \u5929"},o=A(null);function h(){let m=!!document.documentElement.scrollTop;m!=o.value&&(o.value=m)}window.addEventListener("scroll",h);let p;const d=()=>{removeEventListener("scroll",h),o.value=!1,window.scrollTo({top:0,behavior:"smooth"}),clearTimeout(p),p=setTimeout(()=>{o.value=!!document.documentElement.scrollTop,window.addEventListener("scroll",h)},800)};return(m,v)=>(n(),i("div",Z,[r(O,{name:"fade",class:"tools-top",tag:"div"},{default:y(()=>[t("div",ee,[te,t("div",oe,k(u()),1)]),t("div",{class:"tool mode",onClick:v[0]||(v[0]=b=>s(a).changeMode()),key:"mode"},[(n(),i("svg",se,[t("use",{"xlink:href":"#icon-"+(s(a).mode=="light"?"dark":"light")},null,8,ne)]))]),L(t("div",ae,[(n(),i("svg",{class:"icon","aria-hidden":"true",onClick:v[1]||(v[1]=(...b)=>s(l).back&&s(l).back(...b))},le))],512),[[$,s(c).fullPath.split("/").length>3]])]),_:1}),t("div",ce,[r(N,{name:"go-top-transition"},{default:y(()=>[L(t("div",ue,[(n(),i("svg",{class:"icon","aria-hidden":"true",onClick:d},_e))],512),[[$,o.value]])]),_:1})])]))}});const pe=f(re,[["__scopeId","data-v-f268b5e2"]]),B=e=>(w("data-v-6f45d03e"),e=e(),C(),e),he=B(()=>t("span",null,null,-1)),me=B(()=>t("span",null,null,-1)),ge=[he,me],ve=g({__name:"Loading",props:{width:{default:"30px"},height:{default:"30px"}},setup(e){return(c,l)=>(n(),i("div",{class:"loading",style:T({width:e.width,height:e.height})},ge,4))}});const fe=f(ve,[["__scopeId","data-v-6f45d03e"]]),ye=e=>(w("data-v-734544e2"),e=e(),C(),e),ke={class:"loading-layer"},xe={class:"progress-bar"},we=ye(()=>t("div",{class:"bg-bar"},null,-1)),Ce={class:"tip"},Te=g({__name:"LoadingLayer",props:{tip:{default:"\u8F7D\u5165\u4E2D"},requestCount:{default:10},successCount:{default:0},falseCount:{default:0}},setup(e){const c=F(()=>(100-e.successCount/e.requestCount*100).toFixed(2)+"%");return(l,u)=>(n(),i("div",ke,[r(fe),t("div",xe,[we,t("div",{class:"control-bar",style:T("width:"+s(c))},null,4)]),t("div",Ce,k(e.tip),1)]))}});const Ee=f(Te,[["__scopeId","data-v-734544e2"]]),be=g({__name:"App",setup(e){const c=x(),l=F(()=>c.fullPath.split("/").length<=3||window.innerWidth>=600?{"padding-left":"0"}:{"padding-left":"64px"});I(()=>{document.fonts?document.fonts.ready.then(()=>{a.loadingSuccessCountUp("\u5FC5\u8981\u7684\u5B57\u4F53")}):a.loadingFalseCountUp("\u5FC5\u8981\u7684\u5B57\u4F53")});let u=A(!0);return M(()=>[a.loading.successCount,a.loading.falseCount],o=>{a.loading.requestCount<=o[0]+o[1]&&setTimeout(()=>u.value=!1,200)}),I(()=>{window.addEventListener("resize",()=>{const o=document.querySelector("aside");o&&(o.style.height=window.innerHeight+"px")})}),(o,h)=>{const p=S("router-view");return n(),i(D,null,[s(u)?(n(),U(Ee,{key:0,tip:s(a).loading.log.content,requestCount:s(a).loading.requestCount,successCount:s(a).loading.successCount},null,8,["tip","requestCount","successCount"])):H("",!0),t("aside",null,[r(Y),r(pe)]),t("main",{style:T(s(l))},[r(p)],4)],64)}}});const Le=[{path:"/wyxk/",name:"home",component:()=>_(()=>import("./e9964f45.js"),["assets/js/e9964f45.js","assets/js/26e0e360.js","assets/css/59f92cae.css"])},{path:"/wyxk/memories",name:"memories",component:()=>_(()=>import("./79c6a1ac.js"),["assets/js/79c6a1ac.js","assets/js/a9a9aaec.js","assets/js/26e0e360.js","assets/css/00d97813.css","assets/css/e221ba27.css"]),children:[{path:"",component:()=>_(()=>import("./44e689dd.js"),["assets/js/44e689dd.js","assets/js/26e0e360.js","assets/css/1b5529f0.css"])},{path:"said",component:()=>_(()=>import("./2fa77366.js"),["assets/js/2fa77366.js","assets/js/26e0e360.js","assets/css/b8313644.css"])},{path:"test",component:()=>_(()=>import("./36591730.js"),["assets/js/36591730.js","assets/js/26e0e360.js","assets/css/3ba4a2d3.css"])}]},{path:"/wyxk/gallery",name:"gallery",component:()=>_(()=>import("./a0603694.js"),["assets/js/a0603694.js","assets/js/a9a9aaec.js","assets/js/26e0e360.js","assets/css/00d97813.css"])},{path:"/wyxk/about",name:"about",component:()=>_(()=>import("./6abb2773.js"),["assets/js/6abb2773.js","assets/js/a9a9aaec.js","assets/js/26e0e360.js","assets/css/00d97813.css"])}],$e=W({history:j(),routes:Le}),P=G(be);P.use($e);P.mount("#app");export{fe as L,Ie as __vite_legacy_guard,a as s};