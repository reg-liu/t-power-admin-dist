import{j as r}from"./index-DhvWnTCd.js";import{H as a,E as i,i as n,K as m}from"./vendor-antd-B62eGpCx.js";import"./vendor-react-BcJS7s_i.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-CtEfXJzW.js";function p({visible:o,onClose:e}){const[t]=a.useForm(),s=()=>{e()};return r.jsx(i,{title:"Add User RFID",open:o,onCancel:e,footer:[r.jsxs("div",{className:"footer-normal-btns",children:[r.jsx(n,{onClick:e,children:"Cancel"},"cancel"),r.jsx(n,{type:"primary",onClick:s,children:"Confirm"},"confirm")]},"add-rfid-footer")],children:r.jsx("div",{className:"modal-form",children:r.jsx(a,{form:t,layout:"vertical",children:r.jsx(a.Item,{name:"card_number",label:"Card Number",rules:[{required:!0,message:"Please Input Card Number"}],children:r.jsx(m,{placeholder:"Enter card number"})})})})})}export{p as default};
