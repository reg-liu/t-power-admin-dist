import{f as u,j as n}from"./index-BXvVcAd-.js";import{O as r,J as x,w as a}from"./vendor-antd-C1-ldGEo.js";import"./vendor-react-DcqtUZ_G.js";import"./vendor-ui-BASYQBt4.js";import"./vendor-utils-DtcX38pM.js";function P({visible:t,onCancel:o,onConfirm:l}){const[s]=r.useForm(),i=u(),d=()=>{s.validateFields().then(e=>{l(e)}).catch(e=>{})},m=[{cp_sn:"CP001",brand_model:"Tesla Model S"},{cp_sn:"CP002",brand_model:"ChargePoint CP4000"},{cp_sn:"CP003",brand_model:"ABB Terra 54"}],c=[{id:"1",name:"John Doe"},{id:"2",name:"Jane Smith"},{id:"3",name:"Bob Johnson"}],h=[{id:"1",name:"3 Street, Hallam, VIC 3803"},{id:"2",name:"5 Street, Hallam, VIC 3803"},{id:"3",name:"7 Street, Hallam, VIC 3803"}];return n.jsx(x,{title:"Add User Chargepoint",visible:t,onCancel:o,onOk:d,okText:"Confirm",cancelText:"Cancel",children:n.jsxs(r,{form:s,layout:"vertical",children:[n.jsx(r.Item,{name:"cp_sn",label:"SN",rules:[{required:!0,message:"Please select at least one SN!"}],children:n.jsx(a,{mode:"multiple",showSearch:!0,placeholder:"Select chargepoint(s)",optionFilterProp:"children",filterOption:(e,p)=>p?.children.toLowerCase().indexOf(e.toLowerCase())>=0,children:m.map(e=>n.jsx(a.Option,{value:e.cp_sn,children:`${e.cp_sn} - ${e.brand_model}`},e.cp_sn))})}),i&&n.jsx(r.Item,{name:"user",label:"User",rules:[{required:!0,message:"Please select the user!"}],children:n.jsx(a,{children:c.map(e=>n.jsx(a.Option,{value:e.id,children:e.name},e.id))})}),n.jsx(r.Item,{name:"location",label:"Location",rules:[{required:!0,message:"Please select the location!"}],children:n.jsx(a,{children:h.map(e=>n.jsx(a.Option,{value:e.id,children:e.name},e.id))})})]})})}export{P as default};