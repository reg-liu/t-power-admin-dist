import{j as l}from"./index-DGG3uvmK.js";import{r as c}from"./vendor-react-BcJS7s_i.js";import{E as x,w as a}from"./vendor-antd-B62eGpCx.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-CtEfXJzW.js";const{Option:i}=a,d=[{value:"TBOX001",label:"Tbox 001"},{value:"TBOX002",label:"Tbox 002"},{value:"TBOX003",label:"Tbox 003"}];function v({visible:t,onCancel:s,onConfirm:n}){const[o,r]=c.useState(""),b=()=>{n(o)};return l.jsx(x,{title:"Unbind Tbox",open:t,onCancel:s,onOk:b,children:l.jsxs("div",{children:[l.jsx("label",{className:"mb-1 block",children:"Tbox"}),l.jsx(a,{className:"w-full",value:o,onChange:e=>r(e),placeholder:"Select a Tbox to unbind",children:d.map(e=>l.jsx(i,{value:e.value,children:e.label},e.value))})]})})}export{v as default};
