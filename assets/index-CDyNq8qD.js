import{W as f,c as x,j as e,f as s}from"./index-BGJumyCV.js";import{r as d}from"./vendor-react-BcJS7s_i.js";import{C as p}from"./index-BaP0syh5.js";import u from"./connections-tab-Bu4jiV6n.js";import j from"./profile-tab-JTf1T0IT.js";import h from"./projects-tab-DsSQKVLG.js";import b from"./teams-tab-BKzB7vi9.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-antd-C5sFxZgj.js";import"./vendor-utils-C8CVoVQY.js";import"./utils-DO6NWgdr.js";function S(){const{avatar:i,username:n}=f(),{colorTextBase:c}=x(),[o,m]=d.useState(0),a={backgroundRepeat:"no-repeat",backgroundPosition:"center center"},l=[{icon:e.jsx(s,{icon:"solar:user-id-bold",size:24,className:"mr-2"}),title:"Profile",content:e.jsx(j,{})},{icon:e.jsx(s,{icon:"mingcute:profile-fill",size:24,className:"mr-2"}),title:"Teams",content:e.jsx(b,{})},{icon:e.jsx(s,{icon:"mingcute:profile-fill",size:24,className:"mr-2"}),title:"Projects",content:e.jsx(h,{})},{icon:e.jsx(s,{icon:"mingcute:profile-fill",size:24,className:"mr-2"}),title:"Connections",content:e.jsx(u,{})}];return e.jsxs(e.Fragment,{children:[e.jsxs(p,{className:"relative mb-6 h-[290px] flex-col rounded-2xl !p-0",children:[e.jsx("div",{style:a,className:"h-full w-full",children:e.jsxs("div",{className:"flex flex-col items-center justify-center pt-12 md:absolute md:bottom-6 md:left-6 md:flex-row md:pt-0",children:[e.jsx("img",{src:i,className:"h-16 w-16 rounded-full md:h-32 md:w-32",alt:""}),e.jsxs("div",{className:"ml-6 mt-6 flex flex-col justify-center md:mt-0",style:{color:"#fff"},children:[e.jsx("span",{className:"mb-2 text-2xl font-medium",children:n}),e.jsx("span",{className:"text-center opacity-50 md:text-left",children:"TS FullStack"})]})]})}),e.jsx("div",{className:"z-10 min-h-[48px] w-full",children:e.jsx("div",{className:"mx-6 flex h-full justify-center md:justify-end",children:l.map((r,t)=>e.jsxs("button",{onClick:()=>m(t),type:"button",style:{marginRight:t>=l.length-1?"0px":"40px",opacity:t===o?1:.5,borderBottom:t===o?`2px solid ${c}`:""},children:[r.icon,r.title]},r.title))})})]}),e.jsx("div",{children:l[o].content})]})}export{S as default};
