import{j as r}from"./index-Kl0H17LA.js";import{U as t,N as d,w as i}from"./vendor-antd-OpNfoHdu.js";import"./vendor-react-DcqtUZ_G.js";import"./vendor-ui-BASYQBt4.js";import"./vendor-utils-Bhh-Zc6H.js";const m=[{id:"1",name:"Chargepoint A"},{id:"2",name:"Chargepoint B"},{id:"3",name:"Chargepoint C"}];function C({visible:o,onCancel:n,onConfirm:s}){const[a]=t.useForm(),l=()=>{a.validateFields().then(e=>{s(e.chargepoint)}).catch(e=>{})};return r.jsx(d,{title:"Add User Chargepoint",visible:o,onCancel:n,onOk:l,children:r.jsx(t,{form:a,layout:"vertical",children:r.jsx(t.Item,{name:"chargepoint",label:"Chargepoint",rules:[{required:!0,message:"Please select a chargepoint!"}],children:r.jsx(i,{placeholder:"Select a chargepoint",children:m.map(e=>r.jsx(i.Option,{value:e.id,children:e.name},e.id))})})})})}export{C as default};
