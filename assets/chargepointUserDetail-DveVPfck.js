import{j as e}from"./index-D2661MC7.js";import{J as o,N as l,l as c,k as m}from"./vendor-antd-7_-hIQNy.js";import"./vendor-react-DcqtUZ_G.js";import"./vendor-ui-BASYQBt4.js";import"./vendor-utils-B0D_8pEH.js";function g({visible:n,onCancel:a,chargepoint:i,onEditLocation:r}){if(!i)return null;const d=[{name:"John Doe",email:"john@example.com",phone:"123-456-7890"},{name:"Jane Smith",email:"jane@example.com",phone:"234-567-8901"},{name:"Bob Johnson",email:"bob@example.com",phone:"345-678-9012"}];return e.jsx(o,{title:"Chargepoint User Detail",visible:n,onCancel:a,footer:null,width:800,children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium leading-6 text-gray-900",children:"Basic static information"}),e.jsxs(l,{column:2,children:[e.jsx(l.Item,{label:"Name",children:i.name}),e.jsx(l.Item,{label:"SN",children:"CP001"}),e.jsx(l.Item,{label:"Brand",children:"Tesla"}),e.jsx(l.Item,{label:"Model",children:"Model S"}),e.jsx(l.Item,{label:"Charge Model",children:"AC"}),e.jsx(l.Item,{label:"Phase",children:"3"}),e.jsx(l.Item,{label:"OCPP",children:"1.6"}),e.jsxs(l.Item,{label:"Location",children:[e.jsx("div",{children:i.location.street}),e.jsx("div",{children:i.location.hallam}),e.jsx("div",{children:i.location.vic})]}),e.jsx(l.Item,{label:"Current Max",children:"32A"}),e.jsx(l.Item,{label:"Current Min",children:"6A"}),e.jsx(l.Item,{label:"Power Max",children:"22kW"}),e.jsx(l.Item,{label:"Power Min",children:"1.4kW"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium leading-6 text-gray-900",children:"Bounded Users"}),e.jsx("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",children:d.map((s,t)=>e.jsxs(c,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Name:"})," ",s.name]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Email:"})," ",s.email]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Phone:"})," ",s.phone]})]},t))})]}),e.jsx("div",{className:"flex justify-end",children:e.jsx(m,{onClick:r,children:"Edit Location"})})]})})}export{g as default};
