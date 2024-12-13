import{j as e}from"./index-Bunftltg.js";import{r as m}from"./vendor-react-BcJS7s_i.js";import y from"./addBrand-WRqSfWwB.js";import{O as s,K as B,k as o,w as t,y as p,I as l,U as C}from"./vendor-antd-DrSECtKC.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-1K1-U86g.js";const{Option:n}=t;function N({visible:d,onClose:u,record:i,onSave:g}){const[a]=s.useForm(),[b,c]=m.useState(!1),[x,P]=m.useState(["Tesla","Nissan","BYD"]),[h,f]=m.useState({Tesla:["Model S","Model 3","Model X"],Nissan:["Nissan LEAF","Nissan Ariya","Nissan e-NV200"],BYD:["BYD Tang EV","BYD Qin EV","BYD Yuan EV"]});m.useEffect(()=>{d&&i?a.setFieldsValue(i):d&&a.resetFields()},[d,i,a]);const v=()=>{a.validateFields().then(r=>{g(r),u()})},I=(r,j)=>{P([...x,r]),f({...h,[r]:j}),a.setFieldsValue({brand:r,brand_model:j[0]}),c(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(B,{title:i?"Edit Chargepoint Brand":"Add Chargepoint Brand",visible:d,onCancel:u,footer:[e.jsx(o,{onClick:u,children:"Cancel"},"cancel"),e.jsx(o,{type:"primary",onClick:v,children:"Confirm"},"submit")],children:e.jsxs(s,{form:a,layout:"vertical",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(s.Item,{name:"brand",label:"Brand",rules:[{required:!0,message:"Please select a brand"}],children:e.jsx(t,{dropdownRender:r=>e.jsxs("div",{children:[r,e.jsx("div",{className:"p-2",children:e.jsxs(o,{type:"link",onClick:()=>c(!0),children:[e.jsx(p,{})," Add Brand"]})})]}),children:x.map(r=>e.jsx(n,{value:r,children:r},r))})}),e.jsx(s.Item,{name:"brand_model",label:"Brand Model",rules:[{required:!0,message:"Please select a brand model"}],children:e.jsx(t,{children:a.getFieldValue("brand")&&h[a.getFieldValue("brand")]?.map(r=>e.jsx(n,{value:r,children:r},r))})}),e.jsx(s.Item,{name:"charge_model",label:"Charge Model",rules:[{required:!0,message:"Please select a charge model"}],children:e.jsxs(t,{children:[e.jsx(n,{value:"ac",children:"AC"}),e.jsx(n,{value:"dc",children:"DC"})]})}),e.jsx(s.Item,{name:"connector_num",label:"Connector Number",rules:[{required:!0,message:"Please select a connector number"}],children:e.jsxs(t,{children:[e.jsx(n,{value:1,children:"1"}),e.jsx(n,{value:2,children:"2"})]})}),e.jsx(s.Item,{name:"phase",label:"Phase",rules:[{required:!0,message:"Please enter the phase"}],children:e.jsx(l,{})}),e.jsx(s.Item,{name:"ocpp",label:"OCPP",rules:[{required:!0,message:"Please enter the OCPP"}],children:e.jsx(l,{})}),e.jsx(s.Item,{name:"current_max",label:"Current Max",rules:[{required:!0,message:"Please enter the max current"}],children:e.jsx(l,{type:"number"})}),e.jsx(s.Item,{name:"current_min",label:"Current Min",rules:[{required:!0,message:"Please enter the min current"}],children:e.jsx(l,{type:"number"})}),e.jsx(s.Item,{name:"voltage_max",label:"Voltage Max",rules:[{required:!0,message:"Please enter the max voltage"}],children:e.jsx(l,{type:"number"})}),e.jsx(s.Item,{name:"voltage_min",label:"Voltage Min",rules:[{required:!0,message:"Please enter the min voltage"}],children:e.jsx(l,{type:"number"})}),e.jsx(s.Item,{name:"power_max",label:"Power Max",rules:[{required:!0,message:"Please enter the max power"}],children:e.jsx(l,{type:"number"})}),e.jsx(s.Item,{name:"power_min",label:"Power Min",rules:[{required:!0,message:"Please enter the min power"}],children:e.jsx(l,{type:"number"})})]}),e.jsx(s.Item,{name:"picture",label:"Picture",valuePropName:"fileList",getValueFromEvent:r=>Array.isArray(r)?r:r&&r.fileList,children:e.jsx(C,{listType:"picture-card",children:e.jsxs("div",{children:[e.jsx(p,{}),e.jsx("div",{style:{marginTop:8},children:"Upload"})]})})})]})}),e.jsx(y,{visible:b,onClose:()=>c(!1),onAdd:I})]})}export{N as default};
