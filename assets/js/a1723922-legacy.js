System.register(["./effdcd65-legacy.js"],(function(e,a){"use strict";var t,n,d,r,s,i,c,o,l,v,u,g,f,p,h,b,m,x,y=document.createElement("style");return y.innerHTML=".avatar-say[data-v-299f75b4]{max-width:467px;min-height:30px;display:flex;flex-wrap:nowrap;flex-direction:row;gap:5px;margin:20px 10px}.avatar-say .avatar[data-v-299f75b4]{min-width:30px;width:30px;height:30px;border-radius:50%}.avatar-say .sentence-container[data-v-299f75b4]{display:flex;align-items:center;text-align:justify}.left .avatar[data-v-299f75b4]{background-image:url(/assets/jpg/83a6a80b.jpg);background-size:cover}.left .sentence-container[data-v-299f75b4]{padding-right:35px}.right[data-v-299f75b4]{flex-direction:row-reverse}.right .avatar[data-v-299f75b4]{background-image:url(/assets/jpg/960f4a58.jpg);background-size:cover}.right .sentence-container[data-v-299f75b4]{padding-left:35px}.love[data-v-496d8a03]{padding-bottom:20vh}.btn[data-v-496d8a03]{position:fixed;bottom:25%;right:20px;width:3em;height:3em;line-height:3em;border-radius:50%;color:#fb825d;border:1px solid;background:linear-gradient(135deg,#2eb6ff21 0%,#c8bdd154 100%);cursor:pointer}.btn[data-v-496d8a03]:active{background:linear-gradient(135deg,#2eb6ff42 0%,#c8bdd150 100%)}\n",document.head.appendChild(y),{setters:[e=>{t=e.d,n=e.o,d=e.c,r=e.a,s=e.t,i=e.n,c=e.x,o=e.y,l=e._,v=e.l,u=e.m,g=e.C,f=e.e,p=e.F,h=e.b,b=e.f,m=e.H,x=e.D}],execute:function(){const a=(e=>(c("data-v-299f75b4"),e=e(),o(),e))((()=>r("div",{class:"avatar"},null,-1))),y={class:"sentence-container"},w={class:"sentence"},k=l(t({__name:"AvatarSay",props:{avatar:{default:"left"},sentence:{default:"我喜欢你"},date:{default:""}},setup:e=>(t,c)=>(n(),d("div",{class:i(["avatar-say",e.avatar])},[a,r("div",y,[r("div",w,s(e.sentence),1)])],2))}),[["__scopeId","data-v-299f75b4"]]),_={class:"love"};e("default",l(t({__name:"Love",setup(e){const a="那我开始说啦！我喜欢你。小傻瓜也喜欢我。我都知道。所以，问题其实是。\n你只是想谈一场甜甜的恋爱。而我，对自己的要求过于执着，以至于让你我出现了“矛盾”。是啊，我不知道怎么去沟通这部分，你也听我唠叨累了。\n我在想，如果是深爱的两个人，应该不会说抱歉，会用“爱你”代替吧？你可能觉得还没到那步，70分也不多，那我就对你说。我喜欢你啊。\n如果可以，真想就这样一直下去。关于过去的140天，我很快乐，谢谢你。\n小傻子",t=(()=>{const e=a.split(/[,.!！。？；]/g);let t=a.length,n=0;for(let d=0;d<t;d++)-1!=",.!！。？；".indexOf(a[d])&&("。"!=a[d]&&(e[n]=e[n]+a[d]),n++);return e})(),i=v({count:0,says:[]}),c=u("继续"),o=()=>{i.count<t.length&&(i.says.push(t[i.count]),i.count++,m((()=>{window.scrollTo({top:document.body.clientHeight||document.documentElement.clientHeight,behavior:"smooth"})})),i.count==t.length&&(c.value="爱你"))},l=u(!1),y=[{avatar:"right",sentence:"然后呢？没啦？"},{avatar:"left",sentence:"没啦，那我再补充几句"},{avatar:"left",sentence:"小憨憨，不用猜也应该知道是什么吧"},{avatar:"left",sentence:"喜欢你"}],w=v([]);return g(c,(e=>{"爱你"==e&&(l.value=!0,y.forEach(((e,a)=>{setTimeout((()=>{w.push(e),m((()=>{window.scrollTo({top:document.body.clientHeight||document.documentElement.clientHeight,behavior:"smooth"})}))}),2e3*(a+1))})))})),(e,a)=>(n(),d(p,null,[r("div",_,[f(k,{sentence:"那我点击右下角的继续",avatar:"right"}),(n(!0),d(p,null,h(i.says,((e,a)=>(n(),x(k,{sentence:e,key:a},null,8,["sentence"])))),128)),l.value?(n(!0),d(p,{key:0},h(w,((e,a)=>(n(),x(k,{sentence:e.sentence,avatar:e.avatar},null,8,["sentence","avatar"])))),256)):b("",!0)]),r("div",{class:"btn",onClick:o},s(c.value),1)],64))}}),[["__scopeId","data-v-496d8a03"]]))}}}));
