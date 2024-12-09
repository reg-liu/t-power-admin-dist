import{c as T,j as e,P as z,S as r}from"./index-DjbdT0yP.js";import{v as c,ac as t,j as a,a8 as D,aa as d,z as l,I as k,N as I}from"./vendor-antd-AsxM9fV-.js";import{d as A}from"./vendor-ui-DPkccqlC.js";import"./vendor-react-BcJS7s_i.js";import"./vendor-utils-DGcstGqY.js";function R({task:x}){const{title:o,reporter:m,assignee:h=[],tags:j=[],date:p,priority:v,description:g,attachments:f,comments:u=[]}=x,{colorInfo:n,colorWarning:N,colorSuccess:b}=T();return e.jsxs(e.Fragment,{children:[e.jsxs(H,{children:[e.jsx("div",{className:"item",children:e.jsx(c.Title,{level:4,children:o})}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Reporter"}),e.jsx(t,{shape:"circle",src:m,size:40})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Assignee"}),e.jsx(a,{children:h.map((s,i)=>e.jsx(t,{shape:"circle",src:s,size:40},i))})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Tag"}),e.jsx(a,{wrap:!0,children:j.map(s=>e.jsx(z,{color:n,children:s},s))})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Due Date"}),e.jsx(D,{variant:"borderless",value:d(p)})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Priority"}),e.jsx("div",{children:e.jsx(l.Group,{defaultValue:v,children:e.jsxs(a,{children:[e.jsxs(l.Button,{value:"High",children:[e.jsx(r,{icon:"ic_rise",size:20,color:N}),e.jsx("span",{children:"High"})]}),e.jsxs(l.Button,{value:"Medium",children:[e.jsx(r,{icon:"ic_rise",size:20,color:b,className:"rotate-90"}),e.jsx("span",{children:"Medium"})]}),e.jsxs(l.Button,{value:"Low",children:[e.jsx(r,{icon:"ic_rise",size:20,color:n,className:"rotate-180"}),e.jsx("span",{children:"Low"})]})]})})})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Description"}),e.jsx(k.TextArea,{defaultValue:g})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Attachments"}),e.jsx(a,{wrap:!0,children:f?.map(s=>e.jsx(I,{src:s,width:62,height:62,className:"rounded-lg"},s))})]})]}),e.jsx("div",{className:"flex flex-col gap-4",style:{padding:"24px 20px 40px"},children:u?.map(({avatar:s,username:i,content:w,time:y})=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(t,{src:s,size:40,className:"flex-shrink-0"}),e.jsxs("div",{className:"flex flex-grow flex-col flex-wrap gap-1 text-gray",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx(c.Text,{children:i}),e.jsx(c.Text,{children:d(y).format("DD/MM/YYYY HH:mm")})]}),e.jsx("p",{children:w})]})]},i))})]})}const H=A.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 20px 40px;
  .item {
    display: flex;
    align-items: center;
  }
  .label {
    text-align: left;
    font-size: 0.75rem;
    font-weight: 600;
    width: 100px;
    flex-shrink: 0;
    color: rgb(99, 115, 129);
    height: 40px;
    line-height: 40px;
  }
`;export{R as default};
