import{d as c,r as p,o,c as t,e as r,w as d,a as _,t as m,A as h,_ as l,F as f,b as v}from"./7f1ab414.js";const x={class:"link-show"},g={class:"icon","aria-hidden":"true"},k=["xlink:href"],F=c({__name:"LinkShow",props:{path:null,icon:null,name:null},setup(s){const e=s,a=["89, 248, 187","248, 142, 89","73, 134, 255","188, 73, 255","255, 73, 140"],i=`
linear-gradient(
      to left,
      rgba(${a[Math.floor(Math.random()*a.length)]}, 0.3) 10%,
      rgba(87, 252, 167, 0) 100%
    )

`;return(n,B)=>{const u=p("router-link");return o(),t("div",x,[r(u,{to:{path:e.path},style:h({background:i})},{default:d(()=>[_("span",null,m(e.name),1),(o(),t("svg",g,[_("use",{"xlink:href":e.icon},null,8,k)]))]),_:1},8,["to","style"])])}}});const b=l(F,[["__scopeId","data-v-fe836807"]]),w={class:"memories-nav"},y=c({__name:"MemoriesNav",setup(s){const e=[{name:"\u5BF9\u4F60\u544A\u767D",path:"/memories/said",icon:"#icon-xiaoxi"},{name:"\u60F3\u8BF4\u7231\u4F60",path:"/memories/love",icon:"#icon-xiaoxi"}];return(a,i)=>(o(),t("div",w,[(o(),t(f,null,v(e,n=>r(b,{name:n.name,path:n.path,icon:n.icon},null,8,["name","path","icon"])),64))]))}});const N=l(y,[["__scopeId","data-v-b3f6686d"]]);export{N as default};
