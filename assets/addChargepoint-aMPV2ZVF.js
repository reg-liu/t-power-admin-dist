import{j as e}from"./index-BbzPvkJx.js";import{r as d}from"./vendor-react-DcqtUZ_G.js";import{P as n,K as b,I as s,U as v,z as m,w as u,k as S}from"./vendor-antd-DkxSEqSW.js";import"./vendor-ui-BASYQBt4.js";import"./vendor-utils-BnlEJVuT.js";function F({visible:h,onCancel:x,onConfirm:j}){const[i]=n.useForm(),[o,p]=d.useState([]),[a,c]=d.useState([""]),C=()=>{i.validateFields().then(t=>{const r={...t,picture:o[0],connectors:a.filter(l=>l!=="")};j(r)}).catch(t=>{})},f=(t,r)=>{const l=[...a];l[t]=r,c(l)},I=()=>{a.length<3&&c([...a,""])},g=[{id:"1",name:"123 Main St, Hallam, VIC 3803"},{id:"2",name:"456 Elm St, Hallam, VIC 3803"},{id:"3",name:"789 Oak St, Hallam, VIC 3803"}];return e.jsx(b,{title:"Add New Chargepoint",visible:h,onCancel:x,onOk:C,okText:"Confirm",cancelText:"Cancel",children:e.jsxs(n,{form:i,layout:"vertical",children:[e.jsx(n.Item,{name:"name",label:"Name",rules:[{required:!0}],children:e.jsx(s,{})}),e.jsx(n.Item,{name:"cp_sn",label:"SN",rules:[{required:!0}],children:e.jsx(s,{})}),e.jsx(n.Item,{name:"picture",label:"Picture",valuePropName:"fileList",children:e.jsx(v,{listType:"picture-card",fileList:o,onChange:({fileList:t})=>p(t),beforeUpload:()=>!1,children:o.length===0&&e.jsxs("div",{children:[e.jsx(m,{}),e.jsx("div",{style:{marginTop:8},children:"Upload"})]})})}),e.jsx(n.Item,{name:"brand",label:"Brand",rules:[{required:!0}],children:e.jsx(s,{})}),e.jsx(n.Item,{name:"model",label:"Model",rules:[{required:!0}],children:e.jsx(s,{})}),e.jsx(n.Item,{name:"charge_model",label:"Charge Model",rules:[{required:!0}],children:e.jsx(s,{})}),e.jsx(n.Item,{name:"location",label:"Location",rules:[{required:!0}],children:e.jsx(u,{children:g.map(t=>e.jsx(u.Option,{value:t.id,children:t.name},t.id))})}),e.jsxs(n.Item,{label:"Point Status (Connectors)",children:[a.map((t,r)=>e.jsx(s,{value:t,onChange:l=>f(r,l.target.value),style:{marginBottom:8},placeholder:`Connector ${r+1} Name`},r)),a.length<3&&e.jsxs(S,{type:"dashed",onClick:I,block:!0,children:[e.jsx(m,{})," Add Connector"]})]})]})})}export{F as default};
