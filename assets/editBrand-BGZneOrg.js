import{j as e}from"./index-DjbdT0yP.js";import{r as m}from"./vendor-react-BcJS7s_i.js";import{O as r,K as p,w as n,I as s,U as h,k as c,Q as b}from"./vendor-antd-AsxM9fV-.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-DGcstGqY.js";const o={Tesla:["Model S","Model 3","Model X"],Nissan:["Nissan LEAF","Nissan Ariya","Nissan e-NV200"],BYD:["BYD Tang EV","BYD Qin EV","BYD Yuan EV"]};function q({visible:x,onClose:i,chargePoint:a}){const[t]=r.useForm(),[d,u]=m.useState(null);m.useEffect(()=>{a?(t.setFieldsValue(a),u(a.brand)):(t.resetFields(),u(null))},[a,t]);const j=l=>{i()};return e.jsx(p,{title:a?"Edit Chargepoint Brand":"Add Chargepoint Brand",visible:x,onCancel:i,footer:null,children:e.jsxs(r,{form:t,layout:"vertical",onFinish:j,children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(r.Item,{name:"brand",label:"Brand",rules:[{required:!0}],children:e.jsx(n,{onChange:l=>u(l),children:Object.keys(o).map(l=>e.jsx(n.Option,{value:l,children:l},l))})}),e.jsx(r.Item,{name:"brand_model",label:"Brand Model",rules:[{required:!0}],children:e.jsx(n,{disabled:!d,children:d&&o[d].map(l=>e.jsx(n.Option,{value:l,children:l},l))})}),e.jsx(r.Item,{name:"charge_model",label:"Charge Model",rules:[{required:!0}],children:e.jsxs(n,{children:[e.jsx(n.Option,{value:"ac",children:"AC"}),e.jsx(n.Option,{value:"dc",children:"DC"})]})}),e.jsx(r.Item,{name:"connector_num",label:"Connector Number",rules:[{required:!0}],children:e.jsxs(n,{children:[e.jsx(n.Option,{value:1,children:"1"}),e.jsx(n.Option,{value:2,children:"2"})]})}),e.jsx(r.Item,{name:"phase",label:"Phase",rules:[{required:!0}],children:e.jsx(s,{})}),e.jsx(r.Item,{name:"ocpp",label:"OCPP",rules:[{required:!0}],children:e.jsx(s,{})}),e.jsx(r.Item,{name:"current_max",label:"Current Max",rules:[{required:!0}],children:e.jsx(s,{type:"number"})}),e.jsx(r.Item,{name:"current_min",label:"Current Min",rules:[{required:!0}],children:e.jsx(s,{type:"number"})}),e.jsx(r.Item,{name:"voltage_max",label:"Voltage Max",rules:[{required:!0}],children:e.jsx(s,{type:"number"})}),e.jsx(r.Item,{name:"voltage_min",label:"Voltage Min",rules:[{required:!0}],children:e.jsx(s,{type:"number"})}),e.jsx(r.Item,{name:"power_max",label:"Power Max",rules:[{required:!0}],children:e.jsx(s,{type:"number"})}),e.jsx(r.Item,{name:"power_min",label:"Power Min",rules:[{required:!0}],children:e.jsx(s,{type:"number"})})]}),e.jsx(r.Item,{name:"picture",label:"Picture",className:"col-span-2",children:e.jsx(h,{listType:"picture",maxCount:1,beforeUpload:()=>!1,children:e.jsx(c,{icon:e.jsx(b,{}),children:"Upload Picture"})})}),e.jsxs("div",{className:"flex justify-end space-x-4",children:[e.jsx(c,{onClick:i,children:"Cancel"}),e.jsx(c,{type:"primary",htmlType:"submit",children:"Confirm"})]})]})})}export{q as default};