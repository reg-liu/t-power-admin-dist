import{j as e}from"./index-BEe1wG_p.js";import{r as a}from"./vendor-react-DcqtUZ_G.js";import{J as h,Q as d,I as m}from"./vendor-antd-CLI4Tk7L.js";import"./vendor-ui-BASYQBt4.js";import"./vendor-utils-BSYCMmfc.js";function g({visible:s,onCancel:i,onConfirm:n}){const[r,l]=a.useState(!1),[o,c]=a.useState(0);return e.jsx(h,{title:"Start Charging",visible:s,onCancel:i,onOk:()=>n(r,o),okText:"Confirm",cancelText:"Cancel",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{children:e.jsx(d,{checked:r,onChange:t=>l(t.target.checked),children:"With Charge Profile"})}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"power",children:"Power:"}),e.jsx(m,{id:"power",type:"number",value:o,onChange:t=>c(Number(t.target.value)),disabled:!r})]})]})})}export{g as default};