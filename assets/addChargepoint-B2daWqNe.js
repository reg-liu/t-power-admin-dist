import{j as e}from"./index-5T_VQxhD.js";import{r as m}from"./vendor-react-BcJS7s_i.js";import{c as _}from"./cpManagementService-CaGiOLL-.js";import{H as n,E as k,i as h,w as t,K as p,s as N}from"./vendor-antd-B62eGpCx.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-CtEfXJzW.js";function M({visible:r,onClose:d,onSave:u,brandMap:x,brandModels:l,branModelMap:j}){const[s]=n.useForm(),[o,f]=m.useState([]);m.useEffect(()=>{r&&s.resetFields()},[r]);const c=()=>{s.validateFields().then(async a=>{const b=`${x[a.brand]} ${a.brand_model}`,C={sn:a.sn,id_tag:a.id_tag,brand_model_id:j[b]},i=await _.add(C);i?.code===200&&(N.success(i.message),u(),d())}).catch(a=>{})},g=()=>{s.setFieldsValue({brand_model:void 0}),f(l[s.getFieldValue("brand")])};return e.jsx(k,{title:"Add Charge Point",open:r,onCancel:d,onOk:c,okText:"Confirm",cancelText:"Cancel",footer:[e.jsxs("div",{className:"footer-normal-btns",children:[e.jsx(h,{onClick:d,children:"Cancel"},"cancel"),e.jsx(h,{type:"primary",onClick:c,children:"Add"},"confirm")]})],children:e.jsx("div",{className:"modal-form",children:e.jsxs(n,{form:s,layout:"vertical",children:[e.jsxs("div",{className:"two-column",children:[e.jsx(n.Item,{name:"brand",label:"Brand",rules:[{required:!0,message:"Please select the brand"}],children:e.jsx(t,{onChange:g,placeholder:"select",children:Object.keys(l).map(a=>e.jsx(t.Option,{value:a,children:a},a))})}),e.jsx(n.Item,{name:"brand_model",label:"Brand Model",rules:[{required:!0,message:"Please select the brand model"}],children:e.jsx(t,{children:o&&o.map(a=>e.jsx(t.Option,{value:a,children:a},a))})})]}),e.jsx(n.Item,{name:"sn",label:"SN",rules:[{required:!0,message:"Please input the SN"}],children:e.jsx(p,{placeholder:"Enter"})}),e.jsx(n.Item,{name:"id_tag",label:"Charge Point Name",children:e.jsx(p,{placeholder:"Enter"})})]})})})}export{M as default};
