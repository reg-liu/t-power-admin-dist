import{j as e}from"./index-qOmAfSnl.js";import{H as i,E as o,i as t,w as l}from"./vendor-antd-DmtkV1Ch.js";import"./vendor-react-BcJS7s_i.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-BKiv1F2M.js";function x({visible:a,onClose:n}){const[r]=i.useForm(),s=()=>{n()};return e.jsx(o,{title:"Edit Available Status",open:a,onCancel:n,footer:[e.jsxs("div",{className:"footer-normal-btns",children:[e.jsx(t,{onClick:n,children:"Cancel"},"cancel"),e.jsx(t,{type:"primary",onClick:s,children:"Confirm"},"confirm")]},"edit-avilable-footer")],children:e.jsx("div",{className:"modal-form",children:e.jsx(i,{form:r,layout:"vertical",children:e.jsx(i.Item,{name:"status",label:"Status",rules:[{required:!0,message:"Please select the status"}],children:e.jsxs(l,{className:"w-full",children:[e.jsx(l.Option,{value:"online",children:"Online"}),e.jsx(l.Option,{value:"offline",children:"Offline"}),e.jsx(l.Option,{value:"unknown",children:"Unknown"})]})})})})})}export{x as default};
