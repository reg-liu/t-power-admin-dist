import{j as e}from"./index-BbzPvkJx.js";import{K as o,N as c,O as t,k as s}from"./vendor-antd-DkxSEqSW.js";import"./vendor-react-DcqtUZ_G.js";import"./vendor-ui-BASYQBt4.js";import"./vendor-utils-BnlEJVuT.js";function u({visible:i,onCancel:n,brand:l,onEdit:a}){if(!l)return null;const r=()=>{};return e.jsx(o,{title:"Brand Model Detail",visible:i,onCancel:n,footer:null,width:600,children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium leading-6 text-gray-900",children:"Basic static information"}),e.jsxs("div",{className:"mt-4",children:[e.jsx(c,{src:"https://avatars.githubusercontent.com/u/64935023",alt:"Brand Model",width:200,className:"mb-4"}),e.jsxs(t,{column:2,children:[e.jsx(t.Item,{label:"Brand",children:l.brand}),e.jsx(t.Item,{label:"Model",children:l.brand_model}),e.jsx(t.Item,{label:"Connector Number",children:l.connector_num}),e.jsx(t.Item,{label:"Phase",children:l.phase}),e.jsx(t.Item,{label:"OCPP",children:l.ocpp}),e.jsx(t.Item,{label:"Current Max",children:l.current_max}),e.jsx(t.Item,{label:"Current Min",children:l.current_min}),e.jsx(t.Item,{label:"Voltage Max",children:l.voltage_max||"N/A"}),e.jsx(t.Item,{label:"Voltage Min",children:l.voltage_min||"N/A"}),e.jsx(t.Item,{label:"Power Max",children:l.power_max}),e.jsx(t.Item,{label:"Power Min",children:l.power_min})]})]})]}),e.jsxs("div",{className:"flex justify-end space-x-4",children:[e.jsx(s,{onClick:a,children:"Edit Brand Model Info"}),e.jsx(s,{danger:!0,onClick:r,children:"Delete Brand Model"})]})]})})}export{u as default};
