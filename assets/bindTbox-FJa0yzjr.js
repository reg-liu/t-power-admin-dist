import{j as e}from"./index-DDpD7CQs.js";import{r as m}from"./vendor-react-BcJS7s_i.js";import{J as x,k as s,w as r}from"./vendor-antd-Cm1Y6B8R.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-C6QnRqht.js";const{Option:d}=r,b=[{value:"TBOX001",label:"Tbox 001"},{value:"TBOX002",label:"Tbox 002"},{value:"TBOX003",label:"Tbox 003"}];function j({visible:t,onCancel:o,onConfirm:c}){const[a,n]=m.useState(""),i=()=>{c(a)};return e.jsx(x,{title:"Bind Tbox",visible:t,onCancel:o,footer:[e.jsxs("div",{className:"footer-normal-btns",children:[e.jsx(s,{onClick:o,children:"Cancel"},"cancel"),e.jsx(s,{type:"primary",onClick:i,children:"Confirm"},"confirm")]})],children:e.jsx("div",{className:"modal-form",children:e.jsxs("div",{children:[e.jsx("label",{className:"mb-1 block",children:"Tbox"}),e.jsx(r,{className:"w-full",value:a,onChange:l=>n(l),placeholder:"Select a Tbox",children:b.map(l=>e.jsx(d,{value:l.value,children:l.label},l.value))})]})})})}export{j as default};
