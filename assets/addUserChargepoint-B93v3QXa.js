import{f as S,j as e}from"./index-DjbdT0yP.js";import{r as l}from"./vendor-react-BcJS7s_i.js";import{M as b}from"./index-C8-svoIn.js";import{O as o,K as C,w as r,k,I}from"./vendor-antd-AsxM9fV-.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-DGcstGqY.js";import"./vendor-charts-Cv5x1InZ.js";import"./index-Dj133iwh.js";const{TextArea:L}=I,{Option:M}=r;function J({visible:i,onCancel:c,onConfirm:m}){const[a]=o.useForm(),d=S(),[p,t]=l.useState(!1),[n,u]=l.useState(),x=()=>{t(!0)},h=()=>{t(!1)},j=s=>{u(s)},f=[{name:"John Doe",email:"john@example.com"},{name:"Jane Smith",email:"jane@example.com"},{name:"Bob Johnson",email:"bob@example.com"}];return e.jsx(C,{title:"Add User Chargepoint",visible:i,onCancel:c,onOk:()=>{a.validateFields().then(s=>{m()})},okText:"Confirm",cancelText:"Cancel",children:e.jsxs(o,{form:a,layout:"vertical",children:[e.jsx(o.Item,{name:"cp_sn",label:"SN",rules:[{required:!0,message:"Please input the SN"}],children:e.jsx(L,{rows:4})}),d&&e.jsx(o.Item,{name:"user",label:"User",rules:[{required:!0,message:"Please select a user"}],children:e.jsx(r,{children:f.map(s=>e.jsx(M,{value:s.email,children:s.name},s.email))})}),e.jsxs(o.Item,{name:"location",label:"Location",rules:[{required:!0,message:"Please select a location"}],children:[e.jsx(k,{onClick:x,children:n?n.address:"Open Location Picker"}),e.jsx(b,{visible:p,onClose:h,onSelect:j})]})]})})}export{J as default};
