import{s as u,j as e,I as d,f as x}from"./index-C9Kdl5RQ.js";import{r as l}from"./vendor-react-DcqtUZ_G.js";import{A as m,j as C,V as f,W as c,v as r,K as h,k as j}from"./vendor-antd-DC1bX4vL.js";import"./vendor-ui-BASYQBt4.js";import"./vendor-utils-DUuMHeSo.js";function y(){const[t,s]=l.useState(null),{notification:a}=m.useApp();return{copiedText:t,copyFn:async o=>{if(!navigator?.clipboard)return!1;try{return await navigator.clipboard.writeText(o),s(o),a.success({message:"Copied!"}),!0}catch{return s(null),!1}}}}function k(){const{copyFn:t}=y(),[s,a]=l.useState("https://www.npmjs.com/package/"),n=u.lorem.paragraphs({min:3,max:5}),o=p=>a(p.target.value),i=e.jsx(j,{title:"Copy",children:e.jsx(d,{className:"text-gray",onClick:()=>t(s),children:e.jsx(x,{icon:"eva:copy-fill",size:20})})});return e.jsx(C,{children:e.jsxs(f,{gutter:[16,16],children:[e.jsxs(c,{span:24,md:12,children:[e.jsx(r.Title,{level:5,children:"ON CHANGE"}),e.jsx(h,{suffix:i,value:s,onChange:o})]}),e.jsxs(c,{span:24,md:12,children:[e.jsx(r.Title,{level:5,children:"ON DOUBLE CLICK"}),e.jsx(r,{onDoubleClick:()=>t(n),children:n})]})]})})}export{k as default};
