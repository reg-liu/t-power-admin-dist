import{j as e}from"./index-Bunftltg.js";import{K as m,k as r,w as a}from"./vendor-antd-DrSECtKC.js";import"./vendor-react-BcJS7s_i.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-1K1-U86g.js";const c=[{name:"John Doe"},{name:"Jane Smith"},{name:"Bob Johnson"}];function f({visible:o,onClose:n}){const s=()=>{n()};return e.jsx(m,{title:"Bind User",visible:o,onCancel:n,footer:[e.jsx(r,{onClick:n,children:"Cancel"},"cancel"),e.jsx(r,{type:"primary",onClick:s,children:"Confirm"},"confirm")],children:e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"mb-2 block",children:"User"}),e.jsx(a,{mode:"multiple",className:"w-full",placeholder:"Select users",children:c.map((l,i)=>e.jsx(a.Option,{value:l.name,children:l.name},i))})]})})}export{f as default};