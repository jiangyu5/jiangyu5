import{d as c,o as _,c as d,a as t,t as i,z as p,_ as a,b as s,x as v,y as x}from"./26e0e360.js";const f={class:"bg"},h={class:"img"},B=["src"],k={class:"by-info"},m={class:"content"},D={class:"title"},F={class:"description"},w=c({__name:"NoteLink",props:{noteLink:null,flexDirection:null},setup(o){const e=o;return(u,r)=>(_(),d("div",{class:"note-link",style:p(`flex-direction: ${e.flexDirection}`)},[t("div",f,[t("div",h,[t("img",{src:e.noteLink.cover,alt:"\u5C01\u9762"},null,8,B)]),t("div",k,i(e.noteLink.date),1)]),t("div",m,[t("div",D,i(e.noteLink.title),1),t("div",F,i(e.noteLink.description),1)])],4))}});const n=a(w,[["__scopeId","data-v-dd96da78"]]),l=o=>(v("data-v-1c8c4930"),o=o(),x(),o),y={class:"notes"},L=l(()=>t("h2",null,"notes",-1)),g=l(()=>t("div",null,"2020-01",-1)),N={class:"note-container"},$=c({__name:"indexNotes",setup(o){const e={title:"Hellow world 01",description:"\u8FD9\u662F\u6D4B\u8BD5\u7528\u7684\u7B14\u8BB0\uFF0C\u4E5F\u662F\u7B2C\u4E00\u4E2A\u7B14\u8BB0\uFF0C\u672A\u6765\u4F1A\u6709\u66F4\u591A\u7684\u7B14\u8BB0",url:"./a",date:"2020/02/01",cover:"./assets/imgs/notelink-default-cover.png"};return(u,r)=>(_(),d("div",y,[L,g,t("div",N,[s(n,{noteLink:e,flexDirection:"row"}),s(n,{noteLink:e,flexDirection:"row"}),s(n,{noteLink:e,flexDirection:"row"}),s(n,{noteLink:e,flexDirection:"row"}),s(n,{noteLink:e,flexDirection:"row"}),s(n,{noteLink:e,flexDirection:"row"})])]))}});const I=a($,[["__scopeId","data-v-1c8c4930"]]);export{I as default};