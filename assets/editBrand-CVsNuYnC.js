import{j as e,S as I}from"./index-DHG9k9kq.js";import{r as c}from"./vendor-react-BcJS7s_i.js";import N from"./addBrand-BTgdhRCv.js";import{J as l,H as B,k as u,w as d,K as C,I as a,U as M}from"./vendor-antd-DZ11D4bT.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-FiO04Ee5.js";const{Option:n}=d;function S({visible:t,onClose:o,record:i,onSave:p}){const[s]=l.useForm(),[g,m]=c.useState(!1),[h,b]=c.useState(["Tesla","Nissan","BYD"]),[x,v]=c.useState({Tesla:["Model S","Model 3","Model X"],Nissan:["Nissan LEAF","Nissan Ariya","Nissan e-NV200"],BYD:["BYD Tang EV","BYD Qin EV","BYD Yuan EV"]});c.useEffect(()=>{t&&i?s.setFieldsValue(i):t&&s.resetFields()},[t,i,s]);const P=()=>{s.validateFields().then(r=>{p(r),o()})},f=(r,j)=>{b([...h,r]),v({...x,[r]:j}),s.setFieldsValue({brand:r,brand_model:j[0]}),m(!1)},E=()=>{s.setFieldsValue({brand_model:void 0})};return e.jsxs(e.Fragment,{children:[e.jsx(B,{title:i?"Edit Charge Point Brand Model":"Add Charge Point Brand Model",visible:t,onCancel:o,zIndex:1001,footer:[e.jsxs("div",{className:"footer-normal-btns",children:[e.jsx(u,{onClick:o,children:"Cancel"},"cancel"),e.jsx(u,{type:"primary",onClick:P,children:"Add"},"confirm")]})],children:e.jsx("div",{className:"modal-form",children:e.jsxs(l,{form:s,layout:"vertical",children:[e.jsxs("div",{className:"two-column",children:[e.jsx(l.Item,{name:"brand",label:"Brand",rules:[{required:!0,message:"Please select a brand"}],children:e.jsx(d,{onChange:E,placeholder:"Select",dropdownRender:r=>e.jsxs("div",{children:[r,e.jsx("div",{className:"p-2",children:e.jsxs(u,{type:"link",onClick:()=>m(!0),children:[e.jsx(C,{})," Add Brand"]})})]}),children:h.map(r=>e.jsx(n,{value:r,children:r},r))})}),e.jsx(l.Item,{name:"brand_model",label:"Brand Model",rules:[{required:!0,message:"Please select a brand model"}],children:e.jsx(d,{placeholder:"Select",children:s.getFieldValue("brand")&&x[s.getFieldValue("brand")]?.map(r=>e.jsx(n,{value:r,children:r},r))})})]}),e.jsxs("div",{className:"two-column",children:[e.jsx(l.Item,{name:"charge_model",label:"Charge Model",rules:[{required:!0,message:"Please select a charge model"}],children:e.jsxs(d,{placeholder:"Select",children:[e.jsx(n,{value:"ac",children:"AC"}),e.jsx(n,{value:"dc",children:"DC"})]})}),e.jsx(l.Item,{name:"connector_num",label:"Connector No",rules:[{required:!0,message:"Please select a connector number"}],children:e.jsxs(d,{placeholder:"Select",children:[e.jsx(n,{value:1,children:"1"}),e.jsx(n,{value:2,children:"2"})]})})]}),e.jsxs("div",{className:"two-column",children:[e.jsx(l.Item,{name:"phase",label:"Phase",rules:[{required:!0,message:"Please enter the phase"}],children:e.jsx(a,{placeholder:"Enter"})}),e.jsx(l.Item,{name:"ocpp",label:"OCPP",rules:[{required:!0,message:"Please enter the OCPP"}],children:e.jsx(a,{placeholder:"Enter"})})]}),e.jsxs("div",{className:"two-column",children:[e.jsx(l.Item,{name:"current_max",label:"Current Max",rules:[{required:!0,message:"Please enter the max current"}],children:e.jsx(a,{type:"number",placeholder:"Enter"})}),e.jsx(l.Item,{name:"current_min",label:"Current Min",rules:[{required:!0,message:"Please enter the min current"}],children:e.jsx(a,{type:"number",placeholder:"Enter"})})]}),e.jsxs("div",{className:"two-column",children:[e.jsx(l.Item,{name:"voltage_max",label:"Voltage Max",rules:[{required:!0,message:"Please enter the max voltage"}],children:e.jsx(a,{type:"number",placeholder:"Enter"})}),e.jsx(l.Item,{name:"voltage_min",label:"Voltage Min",rules:[{required:!0,message:"Please enter the min voltage"}],children:e.jsx(a,{type:"number",placeholder:"Enter"})})]}),e.jsxs("div",{className:"two-column",children:[e.jsx(l.Item,{name:"power_max",label:"Power Max",rules:[{required:!0,message:"Please enter the max power"}],children:e.jsx(a,{type:"number",placeholder:"Enter"})}),e.jsx(l.Item,{name:"power_min",label:"Power Min",rules:[{required:!0,message:"Please enter the min power"}],children:e.jsx(a,{type:"number",placeholder:"Enter"})})]}),e.jsx(l.Item,{name:"picture",label:"Picture",valuePropName:"fileList",getValueFromEvent:r=>Array.isArray(r)?r:r&&r.fileList,children:e.jsx("div",{className:"upload-wrapper",children:e.jsx(M,{listType:"picture-card",children:e.jsxs("div",{className:"upload-inner",children:[e.jsx(I,{icon:"Add",size:"20",color:"#1CAE70"}),e.jsx("div",{style:{marginTop:4},children:"Upload Picture"})]})})})})]})})}),e.jsx(N,{visible:g,onClose:()=>m(!1),onAdd:f})]})}export{S as default};
