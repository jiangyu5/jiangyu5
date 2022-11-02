import{d as c,o as t,c as o,b as r,w as p,z as m,f as d,a as _,t as h,_ as l,F as f,r as v}from"./5162f7ec.js";const x={class:"link-show"},g={class:"icon","aria-hidden":"true"},k=["xlink:href"],b=c({__name:"LinkShow",props:{path:null,icon:null,name:null},setup(s){const e=s,a=["89, 248, 187","248, 142, 89","73, 134, 255","188, 73, 255","255, 73, 140"],i=`
linear-gradient(
      to left,
      rgba(${a[Math.floor(Math.random()*a.length)]}, 0.3) 10%,
      rgba(87, 252, 167, 0) 100%
    )

`;return(n,M)=>{const u=d("router-link");return t(),o("div",x,[r(u,{to:{path:e.path},style:m({background:i})},{default:p(()=>[_("span",null,h(e.name),1),(t(),o("svg",g,[_("use",{"xlink:href":e.icon},null,8,k)]))]),_:1},8,["to","style"])])}}});const B=l(b,[["__scopeId","data-v-fe836807"]]),w={class:"memories-nav"},y=c({__name:"MemoriesNav",setup(s){const e=[{name:"\u5BF9\u4F60\u544A\u767D",path:"/memories/said",icon:"#icon-xiaoxi"},{name:"\u6D4B\u8BD5\u4E00\u4E0B",path:"/memories/test",icon:"#icon-xiaoxi"}];return(a,i)=>(t(),o("div",w,[(t(),o(f,null,v(e,n=>r(B,{name:n.name,path:n.path,icon:n.icon},null,8,["name","path","icon"])),64))]))}});const S=l(y,[["__scopeId","data-v-b275a6b8"]]);export{S as default};
