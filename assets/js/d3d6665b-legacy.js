System.register(["./effdcd65-legacy.js"],(function(e,o){"use strict";var t,a,i,n,l,r,s,d,c,g,u,p,m,b,h,f,v,x,k,y,w,C,A,z,_,E,j,L,T,B,D,S,N,P=document.createElement("style");return P.innerHTML='@font-face{font-family:laoti;src:url(/assets/fonts/xiaokelaoti.ttf)}::-webkit-scrollbar{width:5px;height:5px;transition:all .2s;background-color:transparent}::-webkit-scrollbar-track{border-radius:5px;background-color:rgba(245,245,245,0)}::-webkit-scrollbar-thumb{border-radius:5px;background-color:rgba(201,96,242,.918)}::-webkit-scrollbar-thumb:hover{background-color:#ee7863}::-webkit-scrollbar-corner{background-color:transparent}:root{font-family:laoti,Helvetica,Arial,sans-serif;font-size:16px;line-height:24px;font-weight:400;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%}body,div,h1,h2{box-sizing:border-box;padding:0;margin:0}body{margin:0;padding:0;min-width:320px;min-height:100vh;color:#242424;background-color:#e5e5e5;background:#e5e5e5 url(/assets/imgs/bg.png) repeat;background-attachment:fixed}h1{font-size:3.2em;line-height:1.1}h2{font-size:20px;font-weight:600;padding:.5em 0}a{color:#81a7ff}ul{list-style:none;padding:0;margin:0}#app{max-width:1280px;margin:0 auto;text-align:center}body.dark{color:#eee;background-color:#242424;background:#242424 url(/assets/imgs/bg_dark.png) repeat}body.dark a{color:#c0d2fd}body.dark .nav{background-image:linear-gradient(45deg,#ff8f8f 10%,#adc9ff 50%,#9fb1ff 100%)!important}.nav[data-v-1f236bd1]{width:62px;text-align:left;border:1px solid;border-image:linear-gradient(135deg,#e95528 0%,#8f3fd6 100%) 1;background-color:rgba(255,255,255,.52);-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px);color:transparent;background-image:linear-gradient(135deg,#cf81f6 10%,#7ca5f8 50%,#4465f9 100%);background-clip:text;-webkit-background-clip:text}.nav a[data-v-1f236bd1]{color:transparent;text-decoration:none;display:block;margin:5px;padding:0 3px}.nav a span[data-v-1f236bd1]{cursor:pointer}.nav a.active[data-v-1f236bd1]{color:#fa7962;background-color:rgba(135,207,235,.5);pointer-events:none}.tools[data-v-54271e8b]{width:100%;height:100%;display:grid;grid-template-rows:auto 1fr;color:#5189d1}.tools .tool[data-v-54271e8b]{width:100%;padding:5px 0}.tools .tool svg[data-v-54271e8b]{display:block;font-size:1.5em;border-radius:50%;margin:0 auto}.tools .tool svg[data-v-54271e8b]:hover{cursor:pointer}.tools .tool .aixin-panel-container[data-v-54271e8b]{position:fixed;width:100%;height:100vh;top:0;right:0;z-index:9;display:flex;justify-content:center;align-items:center}.tools .tool .aixin-panel-container .aixin-panel[data-v-54271e8b]{position:relative;color:#dcd0d0;background-color:rgba(110,110,93,.592);background:linear-gradient(to right bottom,rgba(190,185,184,.7) 0%,rgba(167,165,165,.8) 0%,#4c4f55 100%);box-shadow:2px 3px 6px rgba(157,157,157,.45);min-width:60%;min-height:40%;max-width:252px;max-height:300px;border-radius:10px;padding:1.2em 1em;cursor:default;display:flex;flex-flow:column nowrap;justify-content:center;align-items:center}.tools .tool .aixin-panel-container .aixin-panel p[data-v-54271e8b]{margin:5px 0}.tools .tool .aixin-panel-container .aixin-panel .close[data-v-54271e8b]{position:absolute;top:.5em;left:.5em;width:1em;height:1em;font-size:1em;line-height:1em;color:#e9e8e8;background-color:tomato;border-radius:50%;transform:scale(1.2);box-shadow:0 1px 2px silver;cursor:pointer}.tools .tools-top[data-v-54271e8b]{position:relative;width:100%;height:100%;padding:5px 0}.tools .tools-top .tool-text[data-v-54271e8b]{cursor:pointer}.tools .tools-top .tool-text .text[data-v-54271e8b]{font-size:.8em;line-height:1em}.tools .tools-bottom[data-v-54271e8b]{height:100%;position:relative}.tools .tools-bottom .go-top[data-v-54271e8b]{position:absolute;top:100%;transform:translateY(-200%)}.tools .tools-bottom .go-top-transition-enter-active[data-v-54271e8b]{transition:all .5s}.tools .tools-bottom .go-top-transition-leave-active[data-v-54271e8b]{transition:all .8s}.tools .tools-bottom .go-top-transition-enter-from[data-v-54271e8b],.tools .tools-bottom .go-top-transition-leave-to[data-v-54271e8b]{opacity:0;top:0%;transform:translateY(0)}.fade-enter-active[data-v-54271e8b]{animation:fade-54271e8b .4s cubic-bezier(.55,0,.1,1)}@keyframes fade-54271e8b{0%{opacity:0;transform:scale(.01)}to{opacity:1;transform:scale(1)}}.fade-leave-to[data-v-54271e8b]{opacity:0;transform:scale(.01)}.fade-move[data-v-54271e8b],.fade-leave-active[data-v-54271e8b]{transition:all .4s cubic-bezier(.55,0,.1,1)}.fade-leave-active[data-v-54271e8b]{position:absolute}.loading[data-v-0c49e671]{position:relative;width:30px;height:30px}.loading[data-v-0c49e671]:before,.loading[data-v-0c49e671]:after{display:block;content:"";width:100%;height:100%;position:absolute;top:0;left:0;box-sizing:border-box;border-left:2px solid skyblue;border-radius:50%;animation:rotAfter-0c49e671 1.5s linear infinite}.loading[data-v-0c49e671]:before{border-left:3px solid tomato;animation:rotBefore-0c49e671 3s linear infinite}@keyframes rotAfter-0c49e671{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes rotBefore-0c49e671{0%{transform:scale(.6) rotate(0);border-width:3px}50%{transform:scale(1) rotate(180deg);border-width:2px}to{transform:scale(.6) rotate(360deg);border-width:3px}}.loading-layer[data-v-ef89311a]{position:fixed;top:0;left:0;z-index:9999;width:100%;min-height:100vh;background-color:#e4e4e4;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABcGlDQ1BpY2MAACiRdZE7SwNBFIW/JIoSIym0EEmRQkVQISiIWEkE00SLGMGoTXbdJEIey26CBFvBxiJgIdr4KvwH2gq2CoKgCCJW/gBfjch6JwlExMwyez/OzLnMnAF3NKvn7JYQ5PJFKxYJBxcTS8G2F7wE8DHEZFK3zdn5mThNx+cdLlVvR1Sv5vv+HR2rhq2Dq114XDetovCUcHS9aCreFu7WM8lV4UPhYUsOKHyldK3Gz4rTNX5XbMVj0+BWPYPpX6z9Yj1j5YQHhfty2ZJeP4+6ic/IL8xL7ZUZwCZGhDBBNEqskaXIiNS8ZPa/L1T1zVEQjy5/kzKWONJkxDssakm6GlJTohvyZSmr3P/maafGRmvdfWFofXKct35o24HviuN8HTnO9zF4HuEi3/AXJKeJD9ErDa3vAPybcHbZ0LRdON+CngczaSWrkkemO5WC11PoTEDXDXiXa1nV1zm5h/iGPNE17O3DgOz3r/wAcFhoPnncW5UAAAAJcEhZcwAALiMAAC4jAXilP3YAAABMSURBVCjPY3z69CkDBvj9+zcrKysDNsDEQCLAruH///+kaRjmNrAAg/w/GKBJ/Pz5E6s9LFgj6MePH+zs7LT0NCMjI42DlfZOwqMBANuTILKRXuq8AAAAAElFTkSuQmCC);display:flex;flex-direction:column;justify-content:center;align-items:center;gap:10px;font-family:Helvetica,Arial,sans-serif;color:#242424;font-size:smaller}.loading-layer .progress-bar[data-v-ef89311a]{min-width:200px;max-width:600px;height:4px;margin:0 20px;border-radius:2px;border:1px solid #6c7dff;overflow:hidden;position:relative}.loading-layer .progress-bar .bg-bar[data-v-ef89311a]{width:100%;height:100%;background-color:#7547ff;background:linear-gradient(to left,#7f7fd5,#86a8e7,#91eae4)}.loading-layer .progress-bar .control-bar[data-v-ef89311a]{position:absolute;top:0;right:0;width:100%;height:100%;background-color:#e4e4e4;transition:width .1s linear}.loading-layer .tip[data-v-ef89311a]{font-size:12px;height:1.5em;line-height:1.5em}.icon{width:1em;height:1em;vertical-align:-.15em;fill:currentColor;overflow:hidden}#app aside{width:62px;height:100vh;position:fixed;top:2px;left:2px;z-index:999;transition:height .3s linear;display:grid;grid-template-rows:123px 1fr}#app main{min-height:100vh;box-sizing:border-box;color:transparent;background-image:linear-gradient(135deg,#fe8063 0%,#50b7fc 40%,#b27ee0 60%,#f87846 100%);background-clip:text;-webkit-background-clip:text}\n',document.head.appendChild(P),{setters:[e=>{t=e.l,a=e.d,i=e.r,n=e.o,l=e.c,r=e.F,s=e.b,d=e.e,c=e.w,g=e.a,u=e.t,p=e.n,m=e.g,b=e._,h=e.m,f=e.T,v=e.p,x=e.q,k=e.v,y=e.u,w=e.s,C=e.x,A=e.y,z=e.z,_=e.A,E=e.B,j=e.C,L=e.D,T=e.f,B=e.h,D=e.E,S=e.j,N=e.k}],execute:function(){const P=e("s",t({mode:"light",loading:{requestCount:4,successCount:0,falseCount:1,log:{timer:null,log:"加载中..."}},changeMode(){this.mode="dark"!=this.mode?"dark":"light",document.querySelector("body").className=this.mode},__loadingLogChange(e){clearTimeout(this.loading.log.timer),this.loading.log.content=e,this.loading.log.timer=setTimeout((()=>{this.loading.log.content="加载中..."}),1e3)},loadingSuccessCountUp(e=""){this.loading.successCount++,""!=e&&this.__loadingLogChange(e+" 加载成功")},loadingFalseCountUp(e=""){this.loading.falseCount++,""!=e&&this.__loadingLogChange(e+" 加载失败")}})),q={class:"nav"},F={class:"icon","aria-hidden":"true"},H=["xlink:href"],I=b(a({__name:"Nav",setup(e){const o=[{page:"家",name:"home",link:"/",icon:"#icon-shouye"},{page:"记录",name:"memories",link:"/memories",icon:"#icon-shuben"},{page:"图库",name:"gallery",link:"/gallery",icon:"#icon-tuku1"},{page:"关于",name:"about",link:"/about",icon:"#icon-guanyu"}],t=m();return(e,a)=>{const m=i("router-link");return n(),l("div",q,[(n(),l(r,null,s(o,(e=>{return d(m,{to:{path:e.link},class:p((o=e.name,-1!=t.fullPath.indexOf(o)||t.name==o?"active":"")),replace:"",key:e.link},{default:c((()=>[(n(),l("svg",F,[g("use",{"xlink:href":e.icon},null,8,H)])),g("span",null,u(e.page),1)])),_:2},1032,["to","class"]);var o})),64))])}}}),[["__scopeId","data-v-1f236bd1"]]),J=e=>(C("data-v-54271e8b"),e=e(),A(),e),M={class:"tools"},K={class:"tool tool-text aixin",key:"aixin"},X=[J((()=>g("use",{"xlink:href":"#icon-aixin"},null,-1)))],U={class:"text"},G={class:"aixin-panel-container"},O={class:"aixin-panel"},W=J((()=>g("p",null,"这里是缘分",-1))),Y=J((()=>g("p",null,"我喜欢你",-1))),Z=J((()=>g("p",null,"一直 也不够",-1))),Q={class:"icon","aria-hidden":"true"},R=["xlink:href"],V={class:"tool back",key:"back"},$=[J((()=>g("use",{"xlink:href":"#icon-fanhui"},null,-1)))],ee={class:"tools-bottom"},oe={class:"tool go-top",key:"goTop"},te=[J((()=>g("use",{"xlink:href":"#icon-fanhuidingbu"},null,-1)))],ae=a({__name:"Tools",setup(e){const o=m(),t=w(),a=()=>{let e=(new Date).getTime()-new Date("2022/06/16 12:00:00").getTime();return Math.floor(e/864e5)+" 天"},i=h(!1),r=h(null);function s(){let e=!!document.documentElement.scrollTop;e!=r.value&&(r.value=e)}let p;window.addEventListener("scroll",s);const b=()=>{removeEventListener("scroll",s),r.value=!1,window.scrollTo({top:0,behavior:"smooth"}),clearTimeout(p),p=setTimeout((()=>{r.value=!!document.documentElement.scrollTop,window.addEventListener("scroll",s)}),800)};return(e,s)=>(n(),l("div",M,[d(f,{name:"fade",class:"tools-top",tag:"div"},{default:c((()=>[g("div",K,[(n(),l("svg",{class:"icon","aria-hidden":"true",onClick:s[0]||(s[0]=e=>i.value=!i.value)},X)),g("div",U,u(a()),1),x(g("div",G,[g("div",O,[g("div",{class:"close",onClick:s[1]||(s[1]=e=>i.value=!i.value)},"X"),W,g("p",null,"相遇了 "+u(a()),1),Y,Z])],512),[[k,i.value]])]),g("div",{class:"tool mode",onClick:s[2]||(s[2]=e=>y(P).changeMode()),key:"mode"},[(n(),l("svg",Q,[g("use",{"xlink:href":"#icon-"+("light"==y(P).mode?"dark":"light")},null,8,R)]))]),x(g("div",V,[(n(),l("svg",{class:"icon","aria-hidden":"true",onClick:s[3]||(s[3]=(...e)=>y(t).back&&y(t).back(...e))},$))],512),[[k,y(o).fullPath.split("/").length>2]])])),_:1}),g("div",ee,[d(v,{name:"go-top-transition"},{default:c((()=>[x(g("div",oe,[(n(),l("svg",{class:"icon","aria-hidden":"true",onClick:b},te))],512),[[k,r.value]])])),_:1})])]))}}),ie=b(ae,[["__scopeId","data-v-54271e8b"]]),ne=e("L",b(a({__name:"Loading",props:{scale:null},setup(e){const o=e,t=z((()=>"scale("+o.scale+")"));return(e,o)=>(n(),l("div",{class:"loading",style:_({transform:y(t)})},null,4))}}),[["__scopeId","data-v-0c49e671"]])),le={class:"loading-layer"},re={class:"progress-bar"},se=(e=>(C("data-v-ef89311a"),e=e(),A(),e))((()=>g("div",{class:"bg-bar"},null,-1))),de={class:"tip"},ce=b(a({__name:"LoadingLayer",props:{tip:{default:"载入中..."},requestCount:{default:10},successCount:{default:0},falseCount:{default:0}},setup(e){const o=z((()=>(100-(e.successCount+e.falseCount)/e.requestCount*100).toFixed(2)+"%"));return(t,a)=>(n(),l("div",le,[d(ne),g("div",re,[se,g("div",{class:"control-bar",style:_("width:"+y(o))},null,4)]),g("div",de,u(e.tip),1)]))}}),[["__scopeId","data-v-ef89311a"]]),ge=a({__name:"App",setup(e){E((()=>{document.fonts?document.fonts.ready.then((()=>{P.loadingSuccessCountUp("必要的字体")})):P.loadingFalseCountUp("必要的字体")}));let o=h(!0);return j((()=>[P.loading.successCount,P.loading.falseCount]),(e=>{P.loading.requestCount<=e[0]+e[1]&&setTimeout((()=>o.value=!1),200)})),E((()=>{window.addEventListener("resize",(()=>{const e=document.querySelector("aside");e&&(e.style.height=window.innerHeight+"px")}))})),(e,t)=>{const a=i("router-view");return n(),l(r,null,[y(o)?(n(),L(ce,{key:0,tip:y(P).loading.log.content,requestCount:y(P).loading.requestCount,successCount:y(P).loading.successCount,falseCount:y(P).loading.falseCount},null,8,["tip","requestCount","successCount","falseCount"])):T("",!0),g("aside",null,[d(I),d(ie)]),g("main",null,[d(a)])],64)}}}),ue=[{path:"",name:"home",component:()=>S((()=>o.import("./94b52d19-legacy.js")),void 0)},{path:"/memories",name:"memories",component:()=>S((()=>o.import("./092106ae-legacy.js")),void 0),children:[{path:"",component:()=>S((()=>o.import("./79838b7d-legacy.js")),void 0)},{path:"said",component:()=>S((()=>o.import("./cb6d2bd3-legacy.js")),void 0)},{path:"love",component:()=>S((()=>o.import("./a1723922-legacy.js")),void 0)},{path:"test",component:()=>S((()=>o.import("./6040abde-legacy.js")),void 0)}]},{path:"/gallery",name:"gallery",component:()=>S((()=>o.import("./22fbe577-legacy.js")),void 0)},{path:"/about",name:"about",component:()=>S((()=>o.import("./3c0d9b32-legacy.js")),void 0)}],pe=B({history:D(),routes:ue}),me=N(ge);me.use(pe),me.mount("#app")}}}));
