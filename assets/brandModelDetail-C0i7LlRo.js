import{j as e}from"./index-CYNmGjvu.js";import{J as r,k as a,K as c,N as t}from"./vendor-antd-OFsw8wV_.js";import"./vendor-react-DcqtUZ_G.js";import"./vendor-ui-BASYQBt4.js";import"./vendor-utils-Cfno4lyo.js";function u({visible:n,onCancel:i,onEdit:s,brandModel:l}){const m=()=>{r.confirm({title:"Are you sure you want to delete this brand model?",onOk(){i()}})};return e.jsx(r,{title:"Brand Model Detail",visible:n,onCancel:i,footer:[e.jsx(a,{onClick:s,children:"Edit Brand Model Info"},"edit"),e.jsx(a,{danger:!0,onClick:m,children:"Delete Brand Model"},"delete")],width:800,children:e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium leading-6 text-gray-900",children:"Basic static information"}),e.jsx("div",{className:"mt-2",children:e.jsx(c,{src:"https://avatars.githubusercontent.com/u/64935023",alt:"Brand Model",width:200,height:200})}),e.jsxs(t,{column:2,className:"mt-4",children:[e.jsx(t.Item,{label:"Brand",children:l?.brand}),e.jsx(t.Item,{label:"Model",children:l?.brand_model}),e.jsx(t.Item,{label:"Connector Number",children:l?.connector_num}),e.jsx(t.Item,{label:"Phase",children:l?.phase}),e.jsx(t.Item,{label:"OCPP",children:l?.ocpp}),e.jsx(t.Item,{label:"Current Max",children:l?.current_max}),e.jsx(t.Item,{label:"Current Min",children:l?.current_min}),e.jsx(t.Item,{label:"Voltage Max",children:l?.voltage_max}),e.jsx(t.Item,{label:"Voltage Min",children:l?.voltage_min}),e.jsx(t.Item,{label:"Power Max",children:l?.power_max}),e.jsx(t.Item,{label:"Power Min",children:l?.power_min})]})]})})})}export{u as default};
