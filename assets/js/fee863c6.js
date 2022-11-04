import{d as l,r as h,o as n,c as s,e as _,w as p,a as o,t as c,A as m,_ as r,F as v,b as x}from"./7f1ab414.js";const b={class:"link-show"},f={class:"date"},g={class:"title"},k={class:"icon","aria-hidden":"true"},F=["xlink:href"],w=l({__name:"LinkShow",props:{path:null,icon:null,title:null,date:{default:""}},setup(t){const a=["89, 248, 187","248, 142, 89","73, 134, 255","188, 73, 255","255, 73, 140"],i=`
linear-gradient(
      to left,
      rgba(${a[Math.floor(Math.random()*a.length)]}, 0.3) 10%,
      rgba(87, 252, 167, 0) 100%
    )

`;return(d,e)=>{const u=h("router-link");return n(),s("div",b,[_(u,{to:{path:t.path},style:m({background:i})},{default:p(()=>[o("span",f,c(t.date),1),o("span",g,c(t.title),1),(n(),s("svg",k,[o("use",{"xlink:href":t.icon},null,8,F)]))]),_:1},8,["to","style"])])}}});const y=r(w,[["__scopeId","data-v-c101cbb6"]]),B={class:"memories-nav"},M=l({__name:"MemoriesNav",setup(t){const a=[{title:"\u5BF9\u4F60\u544A\u767D",path:"/memories/said",icon:"#icon-xiaoxi",date:"2022/09/16"},{title:"\u60F3\u8BF4\u7231\u4F60",path:"/memories/love",icon:"#icon-xiaoxi",date:"2022/11/04"}];return(i,d)=>(n(),s("div",B,[(n(),s(v,null,x(a,e=>_(y,{title:e.title,path:e.path,icon:e.icon,date:e.date},null,8,["title","path","icon","date"])),64))]))}});const S=r(M,[["__scopeId","data-v-90b1bc07"]]);export{S as default};
