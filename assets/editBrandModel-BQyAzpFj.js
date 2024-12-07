import{j as e}from"./index-BXvVcAd-.js";import{r as x}from"./vendor-react-DcqtUZ_G.js";import{O as l,J as j,w as r,I as n,an as f,U as g,y}from"./vendor-antd-C1-ldGEo.js";import"./vendor-ui-BASYQBt4.js";import"./vendor-utils-DtcX38pM.js";const b=["Tesla","Nissan","BMW"],B=["Model 3","Leaf","i3"];function T({visible:d,onCancel:c,onConfirm:o,brandModel:t,mode:u}){const[i]=l.useForm(),[s,m]=x.useState([]),p=()=>{i.validateFields().then(a=>{o({...a,picture:s[0]?.thumbUrl||t?.photo})}).catch(a=>{})},h=({fileList:a})=>{m(a)};return e.jsx(j,{title:u==="add"?"Add Brand Model":"Edit Brand Model",visible:d,onCancel:c,onOk:p,okText:"Confirm",cancelText:"Cancel",children:e.jsxs(l,{form:i,layout:"vertical",initialValues:t,children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(l.Item,{name:"brand",label:"Brand",rules:[{required:!0,message:"Please select the brand!"}],children:e.jsx(r,{placeholder:"Select Brand",children:b.map(a=>e.jsx(r.Option,{value:a,children:a},a))})}),e.jsx(l.Item,{name:"brand_model",label:"Brand Model",rules:[{required:!0,message:"Please select the brand model!"}],children:e.jsx(r,{placeholder:"Select Brand Model",children:B.map(a=>e.jsx(r.Option,{value:a,children:a},a))})}),e.jsx(l.Item,{name:"class",label:"Class",rules:[{required:!0,message:"Please input the class!"}],children:e.jsx(n,{})}),e.jsx(l.Item,{name:"year",label:"Year",rules:[{required:!0,message:"Please select the year!"}],children:e.jsx(r,{placeholder:"Select Year",children:[2021,2022,2023].map(a=>e.jsx(r.Option,{value:a,children:a},a))})}),e.jsx(l.Item,{name:"plug_type",label:"Plug Type",rules:[{required:!0,message:"Please input the plug type!"}],children:e.jsx(n,{})}),e.jsx(l.Item,{name:"battery_capacity",label:"Battery Capacity (Ah)",rules:[{required:!0,message:"Please input the battery capacity!"}],children:e.jsx(f,{min:1,max:1e3})})]}),e.jsx(l.Item,{name:"picture",label:"Picture",valuePropName:"fileList",getValueFromEvent:a=>Array.isArray(a)?a:a&&a.fileList,children:e.jsx(g,{listType:"picture-card",fileList:s,onChange:h,beforeUpload:()=>!1,children:s.length>=1?null:e.jsxs("div",{children:[e.jsx(y,{}),e.jsx("div",{style:{marginTop:8},children:"Upload"})]})})})]})})}export{T as default};