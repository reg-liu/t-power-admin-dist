import{f as u,j as a}from"./index-CxtqdpqB.js";import{r as h}from"./vendor-react-DcqtUZ_G.js";import{O as l,J as x,w as s,I as t}from"./vendor-antd-BTAAkOm8.js";import"./vendor-ui-BASYQBt4.js";import"./vendor-utils-C-gVDttP.js";const p=["Tesla","Nissan","Chevrolet"],j=["Model 3","Leaf","Bolt"],f=[{id:"1",name:"John Doe"},{id:"2",name:"Jane Smith"},{id:"3",name:"Bob Johnson"}];function O({visible:i,onCancel:d,onConfirm:o,ev:n}){const[r]=l.useForm(),c=u();h.useEffect(()=>{n&&r.setFieldsValue(n)},[n,r]);const m=()=>{r.validateFields().then(e=>{o(e)}).catch(e=>{})};return a.jsx(x,{title:"Edit EV",visible:i,onCancel:d,onOk:m,okText:"Confirm",cancelText:"Cancel",children:a.jsxs(l,{form:r,layout:"vertical",children:[a.jsx(l.Item,{name:"brand",label:"Brand",rules:[{required:!0,message:"Please select a brand!"}],children:a.jsx(s,{placeholder:"Select a brand",children:p.map(e=>a.jsx(s.Option,{value:e,children:e},e))})}),a.jsx(l.Item,{name:"brand_model",label:"Brand Model",rules:[{required:!0,message:"Please select a model!"}],children:a.jsx(s,{placeholder:"Select a model",children:j.map(e=>a.jsx(s.Option,{value:e,children:e},e))})}),a.jsx(l.Item,{name:"year",label:"Year",rules:[{required:!0,message:"Please select a year!"}],children:a.jsx(s,{placeholder:"Select a year",children:[2020,2021,2022,2023].map(e=>a.jsx(s.Option,{value:e,children:e},e))})}),a.jsx(l.Item,{name:"registration_number",label:"Registration Number",children:a.jsx(t,{disabled:!0})}),a.jsx(l.Item,{name:"vin",label:"VIN",children:a.jsx(t,{disabled:!0})}),c&&a.jsx(l.Item,{name:"user",label:"User",rules:[{required:!0,message:"Please select a user!"}],children:a.jsx(s,{placeholder:"Select a user",children:f.map(e=>a.jsx(s.Option,{value:e.id,children:e.name},e.id))})})]})})}export{O as default};
