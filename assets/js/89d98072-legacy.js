System.register(["./22102866-legacy.js"],(function(e,o){"use strict";var a,t,n,i,r,s,c,l,d,p,g,u,b,m,f,h,v,k,x,y=document.createElement("style");return y.innerHTML="@font-face{font-family:laoti;src:url(/assets/fonts/xiaokelaoti.ttf)}::-webkit-scrollbar{width:5px;height:5px;transition:all .2s;background-color:transparent}::-webkit-scrollbar-track{border-radius:5px;background-color:rgba(245,245,245,0)}::-webkit-scrollbar-thumb{border-radius:5px;background-color:rgba(201,96,242,.918)}::-webkit-scrollbar-thumb:hover{background-color:#ee7863}::-webkit-scrollbar-corner{background-color:transparent}body,div{box-sizing:border-box}:root{font-family:laoti,Helvetica,Arial,sans-serif;font-size:16px;line-height:24px;font-weight:400;color-scheme:light dark;color:#242424;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%}body{margin:0;padding:0;min-width:320px;min-height:100vh;color:#eee;background:rgb(229,229,229) url(/assets/imgs/bg_dark.png) repeat;background-attachment:fixed}h1{font-size:3.2em;line-height:1.1}a{color:#81a7ff}button{border-radius:8px;border:1px solid transparent;padding:.6em 1.2em;font-size:1em;font-weight:500;font-family:inherit;background-color:#1a1a1a;cursor:pointer;transition:border-color .25s}button:hover{border-color:#646cff}button:focus,button:focus-visible{outline:4px auto -webkit-focus-ring-color}ul{list-style:none;padding:0;margin:0}#app{max-width:1280px;margin:0 auto;text-align:center}.nav[data-v-af8eae36]{height:2em;padding:0 10px;box-sizing:border-box;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.nav .pages a[data-v-af8eae36]{display:inline-block;color:#eee;text-decoration:none;padding:0 6px}.nav .pages a[data-v-af8eae36]:hover{color:tomato}.nav .pages a span[data-v-af8eae36]{cursor:pointer}.nav .pages a.active[data-v-af8eae36]{color:#f5917f;pointer-events:none}#app{min-height:100vh;display:grid;grid-template-rows:2em auto 2em}#app .nav{position:sticky;top:0;left:0}#app main{padding:0 5px;box-sizing:border-box}.icon{width:1em;height:1em;vertical-align:-.15em;fill:currentColor;overflow:hidden}\n",document.head.appendChild(y),{setters:[e=>{a=e.d,t=e.r,n=e.o,i=e.c,r=e.a,s=e.t,c=e.u,l=e.F,d=e.b,p=e.e,g=e.w,u=e.f,b=e.n,m=e.g,f=e._,h=e.h,v=e.i,k=e.j,x=e.k}],execute:function(){const e={class:"nav"},y={class:"title"},w={class:"pages"},_={key:0,class:"icon","aria-hidden":"true"},j=["xlink:href"],z=f(a({__name:"Nav",setup(o){const a=[{page:"主页",link:"/"},{page:"导航",link:"/navigation",icon:"#icon-faxian"},{page:"笔记",link:"/notes",icon:"#icon-biji1"},{page:"分类",link:"/category",icon:"#icon-fenlei"},{page:"关于",link:"/about",icon:"#icon-guanyu"}],f=m();return(o,m)=>{const h=t("router-link");return n(),i("div",e,[r("div",y,s(c(f).name),1),r("div",w,[(n(),i(l,null,d(a,(e=>p(h,{to:{path:e.link},replace:"",class:b(c(f).path==e.link?"active":"")},{default:g((()=>[e.icon?(n(),i("svg",_,[r("use",{"xlink:href":e.icon},null,8,j)])):u("",!0),r("span",null,s(e.page),1)])),_:2},1032,["to","class"]))),64))])])}}}),[["__scopeId","data-v-af8eae36"]]),C={class:"footer"},A=f({},[["render",function(e,o){return n(),i("div",C,"Copyright ©2021 Jiang")}],["__scopeId","data-v-fd920cb6"]]),H={__name:"App",setup:e=>(e,o)=>{const a=t("router-view");return n(),i(l,null,[p(z),r("main",null,[p(a)]),p(A)],64)}},I=[{path:"/",name:"陵游的小屋",component:()=>k((()=>o.import("./2d521f32-legacy.js")),void 0)},{path:"/navigation",name:"导航",component:()=>k((()=>o.import("./979f0894-legacy.js")),void 0)},{path:"/notes",name:"笔记",component:()=>k((()=>o.import("./58048999-legacy.js")),void 0)},{path:"/category",name:"分类",component:()=>k((()=>o.import("./548accd7-legacy.js")),void 0)},{path:"/about",name:"关于",component:()=>k((()=>o.import("./13c33eef-legacy.js")),void 0)}],L=h({history:v(),routes:I}),E=x(H);E.use(L),E.mount("#app")}}}));
