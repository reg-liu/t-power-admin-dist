import{j as e}from"./index-DDpD7CQs.js";import{r as t}from"./vendor-react-BcJS7s_i.js";import y from"./addBrand-BuFJ92aS.js";import{N as r,J as M,k as u,w as d,y as p,I as l,U as V}from"./vendor-antd-Cm1Y6B8R.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-C6QnRqht.js";const{Option:n}=d;function S({visible:i,onClose:c,record:m,onSave:b}){const[a]=r.useForm(),[g,o]=t.useState(!1),[x,v]=t.useState(["Tesla","Nissan","BYD"]),[f,P]=t.useState(""),[h,B]=t.useState({Tesla:["Model S","Model 3","Model X"],Nissan:["Nissan LEAF","Nissan Ariya","Nissan e-NV200"],BYD:["BYD Tang EV","BYD Qin EV","BYD Yuan EV"]});t.useEffect(()=>{i&&m?a.setFieldsValue(m):i&&a.resetFields()},[i,m,a]);const I=()=>{a.validateFields().then(s=>{b(s),c()})},N=(s,j)=>{v([...x,s]),B({...h,[s]:j}),a.setFieldsValue({brand:s,brand_model:j[0]}),o(!1)},C=s=>{P(s),a.setFieldsValue({brand_model:void 0})};return e.jsxs(e.Fragment,{children:[e.jsx(M,{title:m?"Edit Chargepoint Brand":"Add Chargepoint Brand",visible:i,onCancel:c,zIndex:1001,footer:[e.jsxs("div",{className:"footer-normal-btns",children:[e.jsx(u,{onClick:c,children:"Cancel"},"cancel"),e.jsx(u,{type:"primary",onClick:I,children:"Confirm"},"confirm")]})],children:e.jsx("div",{className:"modal-form",children:e.jsxs(r,{form:a,layout:"vertical",children:[e.jsxs("div",{className:"two-column",children:[e.jsx(r.Item,{name:"brand",label:"Brand",rules:[{required:!0,message:"Please select a brand"}],children:e.jsx(d,{onChange:C,dropdownRender:s=>e.jsxs("div",{children:[s,e.jsx("div",{className:"p-2",children:e.jsxs(u,{type:"link",onClick:()=>o(!0),children:[e.jsx(p,{})," Add Brand"]})})]}),children:x.map(s=>e.jsx(n,{value:s,children:s},s))})}),e.jsx(r.Item,{name:"brand_model",label:"Brand Model",rules:[{required:!0,message:"Please select a brand model"}],children:e.jsx(d,{disabled:!f,children:a.getFieldValue("brand")&&h[a.getFieldValue("brand")]?.map(s=>e.jsx(n,{value:s,children:s},s))})})]}),e.jsxs("div",{className:"two-column",children:[e.jsx(r.Item,{name:"charge_model",label:"Charge Model",rules:[{required:!0,message:"Please select a charge model"}],children:e.jsxs(d,{children:[e.jsx(n,{value:"ac",children:"AC"}),e.jsx(n,{value:"dc",children:"DC"})]})}),e.jsx(r.Item,{name:"connector_num",label:"Connector Number",rules:[{required:!0,message:"Please select a connector number"}],children:e.jsxs(d,{children:[e.jsx(n,{value:1,children:"1"}),e.jsx(n,{value:2,children:"2"})]})})]}),e.jsxs("div",{className:"two-column",children:[e.jsx(r.Item,{name:"phase",label:"Phase",rules:[{required:!0,message:"Please enter the phase"}],children:e.jsx(l,{})}),e.jsx(r.Item,{name:"ocpp",label:"OCPP",rules:[{required:!0,message:"Please enter the OCPP"}],children:e.jsx(l,{})})]}),e.jsxs("div",{className:"two-column",children:[e.jsx(r.Item,{name:"current_max",label:"Current Max",rules:[{required:!0,message:"Please enter the max current"}],children:e.jsx(l,{type:"number"})}),e.jsx(r.Item,{name:"current_min",label:"Current Min",rules:[{required:!0,message:"Please enter the min current"}],children:e.jsx(l,{type:"number"})})]}),e.jsxs("div",{className:"two-column",children:[e.jsx(r.Item,{name:"voltage_max",label:"Voltage Max",rules:[{required:!0,message:"Please enter the max voltage"}],children:e.jsx(l,{type:"number"})}),e.jsx(r.Item,{name:"voltage_min",label:"Voltage Min",rules:[{required:!0,message:"Please enter the min voltage"}],children:e.jsx(l,{type:"number"})})]}),e.jsxs("div",{className:"two-column",children:[e.jsx(r.Item,{name:"power_max",label:"Power Max",rules:[{required:!0,message:"Please enter the max power"}],children:e.jsx(l,{type:"number"})}),e.jsx(r.Item,{name:"power_min",label:"Power Min",rules:[{required:!0,message:"Please enter the min power"}],children:e.jsx(l,{type:"number"})})]}),e.jsx(r.Item,{name:"picture",label:"Picture",valuePropName:"fileList",getValueFromEvent:s=>Array.isArray(s)?s:s&&s.fileList,children:e.jsx(V,{listType:"picture-card",children:e.jsxs("div",{children:[e.jsx(p,{}),e.jsx("div",{style:{marginTop:8},children:"Upload"})]})})})]})})}),e.jsx(y,{visible:g,onClose:()=>o(!1),onAdd:N})]})}export{S as default};
