import{_ as x,g as f,c as d,j as n,M as c}from"./index-Kl0H17LA.js";import{r as l}from"./vendor-react-DcqtUZ_G.js";import{C as u}from"./cover_3-CV-jlYCL.js";import{g as v}from"./index-DSHmgW2_.js";import{m as p}from"./vendor-ui-BASYQBt4.js";import"./vendor-antd-OpNfoHdu.js";import"./vendor-utils-Bhh-Zc6H.js";import"./bounce-B7MxCDbA.js";import"./fade-BvBJvpmV.js";var g=x(function(r){return function(){return r}}),h=f(function(r,e){var o=Number(e),t=0,s;if(o<0||isNaN(o))throw new RangeError("n must be a non-negative number");for(s=[];t<o;)s.push(r(t)),t+=1;return s}),j=f(function(r,e){return h(g(r),e)});const w="T PowerAdmin";function R({isText:a,variant:r,isMulti:e}){const{colorBgLayout:o}=d(),t=l.useMemo(()=>v(r),[r]),s=l.useMemo(()=>e?j(u,5):[u],[e]);return n.jsx("div",{className:"overflow-auto rounded-lg xs:p-20",style:{backgroundColor:o},children:a?n.jsx(c,{className:"flex h-80 items-center justify-center font-bold md:text-6xl",children:w.split("").map((i,m)=>n.jsx(p.div,{variants:t,className:"xs:ml-1",children:i},m))}):n.jsx(c,{className:"flex flex-col items-center gap-6",children:s.map((i,m)=>n.jsx(p.img,{src:i,variants:t},m))})},r)}export{R as default};
