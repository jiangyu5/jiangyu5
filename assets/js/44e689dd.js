import{d as _,o as t,c as o,b as r,w as d,z as p,f as m,a as c,t as h,_ as l,F as f,r as x}from"./26e0e360.js";const v={class:"link-show"},k={class:"icon","aria-hidden":"true"},g=["xlink:href"],w=_({__name:"LinkShow",props:{path:null,icon:null,name:null},setup(a){const e=a,s=["89, 248, 187","248, 142, 89","73, 134, 255","188, 73, 255","255, 73, 140"],i=`
linear-gradient(
      to left,
      rgba(${s[Math.floor(Math.random()*s.length)]}, 0.3) 10%,
      rgba(87, 252, 167, 0) 100%
    )

`;return(n,M)=>{const u=m("router-link");return t(),o("div",v,[r(u,{to:{path:e.path},style:p({background:i})},{default:d(()=>[c("span",null,h(e.name),1),(t(),o("svg",k,[c("use",{"xlink:href":e.icon},null,8,g)]))]),_:1},8,["to","style"])])}}});const y=l(w,[["__scopeId","data-v-fe836807"]]),B={class:"memories-nav"},b=_({__name:"MemoriesNav",setup(a){const e=[{name:"\u5BF9\u4F60\u544A\u767D",path:"/wyxk/memories/said",icon:"#icon-xiaoxi"},{name:"\u6D4B\u8BD5\u4E00\u4E0B",path:"/wyxk/memories/test",icon:"#icon-xiaoxi"}];return(s,i)=>(t(),o("div",B,[(t(),o(f,null,x(e,n=>r(y,{name:n.name,path:n.path,icon:n.icon},null,8,["name","path","icon"])),64))]))}});const S=l(b,[["__scopeId","data-v-3cddffb1"]]);export{S as default};
