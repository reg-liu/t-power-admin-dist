import{j as e,S as E}from"./index-CTDk3cnm.js";import{r as c}from"./vendor-react-BcJS7s_i.js";import I from"./addBrand-B9908ap7.js";import{H as r,E as A,k as u,w as n,J as B,K as d,U as C}from"./vendor-antd-DhxUoqir.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-Cw5pgUI-.js";const{Option:s}=n;function F({visible:t,onClose:o,record:i,onSave:j}){const[a]=r.useForm(),[g,m]=c.useState(!1),[h,v]=c.useState(["Tesla","Nissan","BYD"]),[x,b]=c.useState({Tesla:["Model S","Model 3","Model X"],Nissan:["Nissan LEAF","Nissan Ariya","Nissan e-NV200"],BYD:["BYD Tang EV","BYD Qin EV","BYD Yuan EV"]});c.useEffect(()=>{t&&i?a.setFieldsValue(i):t&&a.resetFields()},[t,i,a]);const P=()=>{a.validateFields().then(l=>{j(l),o()})},f=(l,p)=>{v([...h,l]),b({...x,[l]:p}),a.setFieldsValue({brand:l,brand_model:p[0]}),m(!1)},N=()=>{a.setFieldsValue({brand_model:void 0})};return e.jsxs(e.Fragment,{children:[e.jsx(A,{title:i?"Edit Charge Point Brand Model":"Add Charge Point Brand Model",visible:t,onCancel:o,zIndex:1001,footer:[e.jsxs("div",{className:"footer-normal-btns",children:[e.jsx(u,{onClick:o,children:"Cancel"},"cancel"),e.jsx(u,{type:"primary",onClick:P,children:"Add"},"confirm")]})],children:e.jsx("div",{className:"modal-form",children:e.jsxs(r,{form:a,layout:"vertical",children:[e.jsxs("div",{className:"two-column",children:[e.jsx(r.Item,{name:"brand",label:"Brand",rules:[{required:!0,message:"Please select a brand"}],children:e.jsx(n,{onChange:N,placeholder:"Select",dropdownRender:l=>e.jsxs("div",{children:[l,e.jsx("div",{className:"p-2",children:e.jsxs(u,{type:"link",onClick:()=>m(!0),children:[e.jsx(B,{})," Add Brand"]})})]}),children:h.map(l=>e.jsx(s,{value:l,children:l},l))})}),e.jsx(r.Item,{name:"brand_model",label:"Brand Model",rules:[{required:!0,message:"Please select a brand model"}],children:e.jsx(n,{placeholder:"Select",children:a.getFieldValue("brand")&&x[a.getFieldValue("brand")]?.map(l=>e.jsx(s,{value:l,children:l},l))})})]}),e.jsxs("div",{className:"two-column",children:[e.jsx(r.Item,{name:"charge_model",label:"Charge Model",rules:[{required:!0,message:"Please select a charge model"}],children:e.jsxs(n,{placeholder:"Select",children:[e.jsx(s,{value:"ac",children:"AC"}),e.jsx(s,{value:"dc",children:"DC"})]})}),e.jsx(r.Item,{name:"connector_num",label:"Connector No",rules:[{required:!0,message:"Please select a connector number"}],children:e.jsxs(n,{placeholder:"Select",children:[e.jsx(s,{value:1,children:"1"}),e.jsx(s,{value:2,children:"2"})]})})]}),e.jsxs("div",{className:"two-column",children:[e.jsx(r.Item,{name:"phase",label:"Phase",rules:[{required:!0,message:"Please enter the phase"}],children:e.jsxs(n,{placeholder:"Select",children:[e.jsx(s,{value:"ocpp2.0.1",children:"1p+n"}),e.jsx(s,{value:"ocpp1.6",children:"3p+n"})]})}),e.jsx(r.Item,{name:"ocpp",label:"OCPP",rules:[{required:!0,message:"Please enter the OCPP"}],children:e.jsxs(n,{placeholder:"Select",children:[e.jsx(s,{value:"1p+n",children:"1p+n"}),e.jsx(s,{value:"3p+n",children:"3p+n"})]})})]}),e.jsxs("div",{className:"two-column",children:[e.jsx(r.Item,{name:"current_max",label:"Current Max(A)",rules:[{required:!0,message:"Please enter the max current"}],children:e.jsx(d,{type:"number",placeholder:"Enter"})}),e.jsx(r.Item,{name:"current_min",label:"Current Min(A)",rules:[{required:!0,message:"Please enter the min current"}],children:e.jsx(d,{type:"number",placeholder:"Enter"})})]}),e.jsxs("div",{className:"two-column",children:[e.jsx(r.Item,{name:"voltage_max",label:"Voltage Max(V)",rules:[{required:!0,message:"Please enter the max voltage"}],children:e.jsx(d,{type:"number",placeholder:"Enter"})}),e.jsx(r.Item,{name:"voltage_min",label:"Voltage Min(V)",rules:[{required:!0,message:"Please enter the min voltage"}],children:e.jsx(d,{type:"number",placeholder:"Enter"})})]}),e.jsxs("div",{className:"two-column",children:[e.jsx(r.Item,{name:"power_max",label:"Power Max(kW)",rules:[{required:!0,message:"Please enter the max power"}],children:e.jsx(d,{type:"number",placeholder:"Enter"})}),e.jsx(r.Item,{name:"power_min",label:"Power Min(kW)",rules:[{required:!0,message:"Please enter the min power"}],children:e.jsx(d,{type:"number",placeholder:"Enter"})})]}),e.jsx(r.Item,{name:"picture",label:"Picture",valuePropName:"fileList",getValueFromEvent:l=>Array.isArray(l)?l:l&&l.fileList,children:e.jsx("div",{className:"upload-wrapper",children:e.jsx(C,{listType:"picture-card",children:e.jsxs("div",{className:"upload-inner",children:[e.jsx(E,{icon:"Add",size:"20",color:"#1CAE70"}),e.jsx("div",{style:{marginTop:4},children:"Upload Picture"})]})})})})]})})}),e.jsx(I,{visible:g,onClose:()=>m(!1),onAdd:f})]})}export{F as default};
