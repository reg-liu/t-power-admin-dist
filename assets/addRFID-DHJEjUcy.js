import{j as r}from"./index-BGJumyCV.js";import{N as a,J as m,k as n,I as l}from"./vendor-antd-C5sFxZgj.js";import"./vendor-react-BcJS7s_i.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-C8CVoVQY.js";function f({visible:o,onClose:e}){const[s]=a.useForm(),t=()=>{e()};return r.jsx(m,{title:"Add User RFID",visible:o,onCancel:e,footer:[r.jsxs("div",{className:"footer-normal-btns",children:[r.jsx(n,{onClick:e,children:"Cancel"},"cancel"),r.jsx(n,{type:"primary",onClick:t,children:"Confirm"},"confirm")]})],children:r.jsx("div",{className:"modal-form",children:r.jsx(a,{form:s,layout:"vertical",children:r.jsx(a.Item,{name:"card_number",label:"Card Number",rules:[{required:!0,message:"Please Input Card Number"}],children:r.jsx(l,{placeholder:"Enter card number"})})})})})}export{f as default};
