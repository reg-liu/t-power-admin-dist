import{j as e}from"./index-Dg_G9Idh.js";import{r as c}from"./vendor-react-BcJS7s_i.js";import{K as j,l as a,V as i,a3 as o,a4 as p}from"./vendor-antd-rXbYDupp.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-BT_e3atF.js";function N({visible:l,onCancel:d,onConfirm:m}){const[t,h]=c.useState(!1),[n,x]=c.useState(!1),r=s=>e.jsxs("div",{className:"mb-4",children:[e.jsx("h4",{children:s}),e.jsxs("div",{className:"mt-4 flex items-center space-x-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"pr-2",children:"Limit"}),e.jsx(o,{})]}),e.jsxs("div",{children:[e.jsx("label",{className:"pr-2",children:"Start Time"}),e.jsx(p,{format:"HH:mm"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"pr-2",children:"Time Range"}),e.jsx(o,{})]})]})]});return e.jsxs(j,{title:"Set Charge Profile",visible:l,onCancel:d,onOk:m,width:800,children:[e.jsxs(a,{className:"mb-4",children:[e.jsx(i,{checked:t,onChange:s=>h(s.target.checked),children:"Current"}),e.jsxs("div",{className:t?"mt-4":"pointer-events-none mt-4 opacity-50",children:[r("Connector 1"),r("Connector 2")]})]}),e.jsxs(a,{children:[e.jsx(i,{checked:n,onChange:s=>x(s.target.checked),children:"Power"}),e.jsxs("div",{className:n?"mt-4":"pointer-events-none mt-4 opacity-50",children:[r("Connector 1"),r("Connector 2")]})]})]})}export{N as default};
