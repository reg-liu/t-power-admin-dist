import{t as u,j as e,I as d,f as x}from"./index-DHG9k9kq.js";import{r as l}from"./vendor-react-BcJS7s_i.js";import{A as m,l as C,Q as f,V as c,v as r,I as h,m as j}from"./vendor-antd-DZ11D4bT.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-FiO04Ee5.js";function y(){const[s,t]=l.useState(null),{notification:a}=m.useApp();return{copiedText:s,copyFn:async o=>{if(!navigator?.clipboard)return!1;try{return await navigator.clipboard.writeText(o),t(o),a.success({message:"Copied!"}),!0}catch{return t(null),!1}}}}function b(){const{copyFn:s}=y(),[t,a]=l.useState("https://www.npmjs.com/package/"),n=u.lorem.paragraphs({min:3,max:5}),o=p=>a(p.target.value),i=e.jsx(j,{title:"Copy",children:e.jsx(d,{className:"text-gray",onClick:()=>s(t),children:e.jsx(x,{icon:"eva:copy-fill",size:20})})});return e.jsx(C,{children:e.jsxs(f,{gutter:[16,16],children:[e.jsxs(c,{span:24,md:12,children:[e.jsx(r.Title,{level:5,children:"ON CHANGE"}),e.jsx(h,{suffix:i,value:t,onChange:o})]}),e.jsxs(c,{span:24,md:12,children:[e.jsx(r.Title,{level:5,children:"ON DOUBLE CLICK"}),e.jsx(r,{onDoubleClick:()=>s(n),children:n})]})]})})}export{b as default};
