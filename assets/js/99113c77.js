import{d as _,r as p,o,c as a,e as r,w as m,a as c,t as d,A as h,_ as l,F as v,b as x}from"./7f1ab414.js";const f={class:"link-show"},g={class:"icon","aria-hidden":"true"},k=["xlink:href"],B=_({__name:"LinkShow",props:{path:null,icon:null,name:null},setup(s){const e=s,t=["89, 248, 187","248, 142, 89","73, 134, 255","188, 73, 255","255, 73, 140"],i=`
linear-gradient(
      to left,
      rgba(${t[Math.floor(Math.random()*t.length)]}, 0.3) 10%,
      rgba(87, 252, 167, 0) 100%
    )

`;return(n,M)=>{const u=p("router-link");return o(),a("div",f,[r(u,{to:{path:e.path},style:h({background:i})},{default:m(()=>[c("span",null,d(e.name),1),(o(),a("svg",g,[c("use",{"xlink:href":e.icon},null,8,k)]))]),_:1},8,["to","style"])])}}});const F=l(B,[["__scopeId","data-v-fe836807"]]),w={class:"memories-nav"},y=_({__name:"MemoriesNav",setup(s){const e=[{name:"\u5BF9\u4F60\u544A\u767D",path:"/memories/said",icon:"#icon-xiaoxi"},{name:"\u60F3\u8BF4\u7231\u4F60",path:"/memories/love",icon:"#icon-xiaoxi"},{name:"\u6D4B\u8BD5\u4E00\u4E0B",path:"/memories/test",icon:"#icon-xiaoxi"}];return(t,i)=>(o(),a("div",w,[(o(),a(v,null,x(e,n=>r(F,{name:n.name,path:n.path,icon:n.icon},null,8,["name","path","icon"])),64))]))}});const S=l(y,[["__scopeId","data-v-99eaa6e2"]]);export{S as default};
