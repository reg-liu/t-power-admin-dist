import{j as t}from"./index-BXvVcAd-.js";import{O as a,J as s,w as i}from"./vendor-antd-C1-ldGEo.js";import"./vendor-react-DcqtUZ_G.js";import"./vendor-ui-BASYQBt4.js";import"./vendor-utils-DtcX38pM.js";function f({visible:n,onCancel:r,onConfirm:l}){const[o]=a.useForm(),m=()=>{o.validateFields().then(e=>{l(e.location)}).catch(e=>{})},c=[{id:"1",name:"3 Street, Hallam, VIC 3803"},{id:"2",name:"5 Street, Hallam, VIC 3803"},{id:"3",name:"7 Street, Hallam, VIC 3803"}];return t.jsx(s,{title:"Edit Chargepoint Location",visible:n,onCancel:r,onOk:m,okText:"Confirm",cancelText:"Cancel",children:t.jsx(a,{form:o,layout:"vertical",children:t.jsx(a.Item,{name:"location",label:"Location",rules:[{required:!0,message:"Please select the location!"}],children:t.jsx(i,{children:c.map(e=>t.jsx(i.Option,{value:e.id,children:e.name},e.id))})})})})}export{f as default};