import{j as e}from"./index-DHG9k9kq.js";import{H as x,k as l,P as j,l as i,N as t,a2 as u}from"./vendor-antd-DZ11D4bT.js";import"./vendor-react-BcJS7s_i.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-FiO04Ee5.js";function f({visible:s,onCancel:a,record:n,onEdit:r}){const c=()=>{r(n)},m=()=>{};if(!n)return null;const h=(o,d)=>u(o).add(d,"hour").format("YYYY-MM-DD HH:mm");return e.jsx(x,{title:"Charging Schedule Detail",visible:s,onCancel:a,footer:[e.jsxs("div",{className:"footer-normal-btns",children:[e.jsx(l,{type:"primary",onClick:c,children:"Edit"},"edit"),e.jsx(j,{title:"Are you sure you want to delete this schedule?",onConfirm:m,okText:"Yes",cancelText:"No",children:e.jsx(l,{danger:!0,children:"Delete"})},"delete")]})],zIndex:1e3,children:e.jsxs("div",{className:"content-parts",children:[e.jsx(i,{title:"",children:e.jsxs(t,{column:2,children:[e.jsx(t.Item,{label:"Charge Point",children:n.chargepoint}),e.jsxs(t.Item,{label:"Duration",children:[n.duration,"h"]}),e.jsx(t.Item,{label:"Start Time",children:n.start_time}),e.jsx(t.Item,{label:"End Time",children:h(n.start_time,n.duration)}),e.jsx(t.Item,{label:"Recurrency Settings",children:n.recurrency||"N/A"})]})}),e.jsxs(i,{title:"Charge Setting",children:[e.jsx("p",{children:n.charge_setting.type==="current"?"Current":"Power"}),e.jsxs(t,{column:2,children:[e.jsx(t.Item,{children:e.jsxs(i,{className:"mt-2",children:[e.jsx("div",{className:"mb-2 font-bold",children:"Connector 1"}),e.jsxs(t,{column:1,children:[e.jsx(t.Item,{label:"Limit",children:n.charge_setting.connector_1.limit}),e.jsx(t.Item,{label:"Start Time",children:n.charge_setting.connector_1.start_time}),e.jsxs(t.Item,{label:"Time Range",children:[n.charge_setting.connector_1.time_range,"h"]})]})]})}),e.jsx(t.Item,{children:e.jsxs(i,{className:"mt-2",children:[e.jsx("div",{className:"mb-2 font-bold",children:"Connector 2"}),e.jsxs(t,{column:1,children:[e.jsx(t.Item,{label:"Limit",children:n.charge_setting.connector_2.limit}),e.jsx(t.Item,{label:"Start Time",children:n.charge_setting.connector_2.start_time}),e.jsxs(t.Item,{label:"Time Range",children:[n.charge_setting.connector_2.time_range,"h"]})]})]})})]})]})]})})}export{f as default};
