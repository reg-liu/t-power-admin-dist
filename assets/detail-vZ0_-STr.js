import{j as e}from"./index-Dg_G9Idh.js";import{K as a,P as d,k as m,W as r}from"./vendor-antd-rXbYDupp.js";import"./vendor-react-BcJS7s_i.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-BT_e3atF.js";function j({visible:t,onClose:n,chargePoint:l,isAdmin:s}){return l?e.jsx(a,{title:"Chargepoint Detail",visible:t,onCancel:n,footer:s?[e.jsx(d,{title:"Are you sure you want to delete this chargepoint?",onConfirm:()=>{},okText:"Yes",cancelText:"No",children:e.jsx(m,{danger:!0,children:"Delete Chargepoint"})},"delete")]:[],width:800,children:e.jsxs(r,{bordered:!0,column:2,children:[e.jsx(r.Item,{label:"Name",children:l.name}),e.jsx(r.Item,{label:"SN",children:l.cp_sn}),e.jsx(r.Item,{label:"Brand",children:l.brand}),e.jsx(r.Item,{label:"Brand Model",children:l.brand_model}),e.jsx(r.Item,{label:"Charge Model",children:l.charge_model.toUpperCase()}),e.jsx(r.Item,{label:"Phase",children:l.phase||"N/A"}),e.jsx(r.Item,{label:"OCPP",children:l.ocpp||"N/A"}),e.jsx(r.Item,{label:"Current Max",children:l.current_max||"N/A"}),e.jsx(r.Item,{label:"Current Min",children:l.current_min||"N/A"}),e.jsx(r.Item,{label:"Power Max",children:l.power_max||"N/A"}),e.jsx(r.Item,{label:"Power Min",children:l.power_min||"N/A"})]})}):null}export{j as default};