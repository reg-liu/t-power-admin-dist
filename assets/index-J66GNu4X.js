import{W as d,c as f,j as e,o as s}from"./index-CsPTJzJh.js";import{r as x}from"./vendor-react-DcqtUZ_G.js";import{C as p}from"./index-CqAvNNqd.js";import u from"./connections-tab-BtAEpxJd.js";import j from"./profile-tab-s5DfYgqu.js";import h from"./projects-tab-CQcUZBuQ.js";import b from"./teams-tab-DYC8J4ou.js";import"./vendor-ui-BASYQBt4.js";import"./vendor-antd-Dnh3Ma4s.js";import"./vendor-utils-D1tjba5n.js";import"./utils-CqLao6vI.js";const g="/assets/cover_4-Cn9wE4T5.jpg";function E(){const{avatar:n,username:c}=d(),{colorTextBase:i}=f(),[o,a]=x.useState(0),m={background:`linear-gradient(rgba(0, 75, 80, 0.8), rgba(0, 75, 80, 0.8)) center center / cover no-repeat, url(${g})`,backgroundRepeat:"no-repeat",backgroundPosition:"center center"},r=[{icon:e.jsx(s,{icon:"solar:user-id-bold",size:24,className:"mr-2"}),title:"Profile",content:e.jsx(j,{})},{icon:e.jsx(s,{icon:"mingcute:profile-fill",size:24,className:"mr-2"}),title:"Teams",content:e.jsx(b,{})},{icon:e.jsx(s,{icon:"mingcute:profile-fill",size:24,className:"mr-2"}),title:"Projects",content:e.jsx(h,{})},{icon:e.jsx(s,{icon:"mingcute:profile-fill",size:24,className:"mr-2"}),title:"Connections",content:e.jsx(u,{})}];return e.jsxs(e.Fragment,{children:[e.jsxs(p,{className:"relative mb-6 h-[290px] flex-col rounded-2xl !p-0",children:[e.jsx("div",{style:m,className:"h-full w-full",children:e.jsxs("div",{className:"flex flex-col items-center justify-center pt-12 md:absolute md:bottom-6 md:left-6 md:flex-row md:pt-0",children:[e.jsx("img",{src:n,className:"h-16 w-16 rounded-full md:h-32 md:w-32",alt:""}),e.jsxs("div",{className:"ml-6 mt-6 flex flex-col justify-center md:mt-0",style:{color:"#fff"},children:[e.jsx("span",{className:"mb-2 text-2xl font-medium",children:c}),e.jsx("span",{className:"text-center opacity-50 md:text-left",children:"TS FullStack"})]})]})}),e.jsx("div",{className:"z-10 min-h-[48px] w-full",children:e.jsx("div",{className:"mx-6 flex h-full justify-center md:justify-end",children:r.map((l,t)=>e.jsxs("button",{onClick:()=>a(t),type:"button",style:{marginRight:t>=r.length-1?"0px":"40px",opacity:t===o?1:.5,borderBottom:t===o?`2px solid ${i}`:""},children:[l.icon,l.title]},l.title))})})]}),e.jsx("div",{children:r[o].content})]})}export{E as default};
