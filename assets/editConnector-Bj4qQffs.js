import{j as a}from"./index-CYNmGjvu.js";import{O as e,J as c,w as i}from"./vendor-antd-OFsw8wV_.js";import"./vendor-react-DcqtUZ_G.js";import"./vendor-ui-BASYQBt4.js";import"./vendor-utils-Cfno4lyo.js";function b({visible:n,onCancel:r,onConfirm:o}){const[l]=e.useForm(),s=()=>{l.validateFields().then(t=>{o(t.availability)}).catch(t=>{})};return a.jsx(c,{title:"Edit Connector Availability",visible:n,onCancel:r,onOk:s,okText:"Confirm",cancelText:"Cancel",children:a.jsx(e,{form:l,layout:"vertical",children:a.jsx(e.Item,{name:"availability",label:"Availability",rules:[{required:!0,message:"Please select the availability!"}],children:a.jsxs(i,{children:[a.jsx(i.Option,{value:"available",children:"Available"}),a.jsx(i.Option,{value:"unavailable",children:"Unavailable"})]})})})})}export{b as default};
