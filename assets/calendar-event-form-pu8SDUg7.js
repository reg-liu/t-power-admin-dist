import{j as e,s as b,I as v,f as E}from"./index-HZVAOrSI.js";import{r as I}from"./vendor-react-DcqtUZ_G.js";import{H as s,E as F,K as n,o as Y,$ as m,a0 as g}from"./vendor-antd-DNjhvzFa.js";import"./vendor-ui-BASYQBt4.js";import"./vendor-utils-DuhXCHR2.js";const c=["#00a76f","#8e33ff","#00b8d9","#003768","#22c55e","#ffab00","#ff5630","#7a0916"];function k({type:o,open:x,onCancel:d,initValues:a={id:b.string.uuid()},onEdit:f,onCreate:u,onDelete:j}){const h=o==="add"?"Add Event":"Edit Event",[l]=s.useForm();I.useEffect(()=>{const{color:t=c[0],...r}=a;l.setFieldsValue({...r,color:t})},[a,l]);const p=(t,{OkBtn:r,CancelBtn:i})=>e.jsx("div",{children:o==="edit"?e.jsxs("div",{className:"flex justify-between",children:[e.jsx(v,{onClick:()=>{j(a.id),d()},children:e.jsx(E,{icon:"fluent:delete-16-filled",size:20})}),e.jsxs("div",{children:[e.jsx(i,{}),e.jsx(r,{})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(i,{}),e.jsx(r,{})]})});return e.jsx(F,{open:x,title:h,centered:!0,onCancel:d,footer:p,onOk:()=>{l.validateFields().then(t=>{l.resetFields();const{id:r}=a,i={...t,id:r};o==="add"&&u(i),o==="edit"&&f(i),d()}).catch(t=>{})},children:e.jsxs(s,{form:l,size:"small",labelCol:{span:4},wrapperCol:{span:18},initialValues:a,children:[e.jsx(s.Item,{label:"Titile",name:"title",rules:[{required:!0,message:"Please input title!"}],children:e.jsx(n,{})}),e.jsx(s.Item,{label:"Desc",name:"description",children:e.jsx(n.TextArea,{})}),e.jsx(s.Item,{label:"All day",name:"allDay",valuePropName:"checked",children:e.jsx(Y,{})}),e.jsx(s.Item,{label:"Start date",name:"start",rules:[{required:!0,message:"Please input start date!"}],children:e.jsx(m,{showTime:!0,className:"w-full",format:"YYYY-MM-DD HH:mm:ss"})}),e.jsx(s.Item,{label:"End date",name:"end",rules:[{required:!0,message:"Please input end date!"}],children:e.jsx(m,{showTime:!0,className:"w-full",format:"YYYY-MM-DD HH:mm:ss"})}),e.jsx(s.Item,{label:"Color",name:"color",getValueFromEvent:t=>t.toHexString(),children:e.jsx(g,{presets:[{label:"Recommended",colors:c}]})})]})})}export{k as default};
