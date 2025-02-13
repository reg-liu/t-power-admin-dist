import{j as e,S as a}from"./index-DHG9k9kq.js";import{H as c,P as r,k as n,l as m}from"./vendor-antd-DZ11D4bT.js";import"./vendor-react-BcJS7s_i.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-FiO04Ee5.js";function N({visible:l,onClose:i,chargePoint:s,isAdmin:d}){return s?e.jsx(c,{title:"Charge Point Management Details",visible:l,width:1440,style:{top:40},onCancel:i,footer:d?[e.jsx("div",{className:"footer-normal-btns",children:e.jsx(r,{title:"Are you sure you want to delete this charge point?",onConfirm:()=>{},okText:"Yes",cancelText:"No",children:e.jsx(n,{danger:!0,icon:e.jsx(a,{icon:"Delete",size:"20"}),children:"Delete Charge Point"})},"delete")})]:[],children:e.jsx("div",{className:"content-parts detail-normal",children:e.jsxs(m,{title:"Basic Information",className:"basic-card no-border",children:[e.jsxs("div",{className:"basic-card-row",children:[e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Name"}),e.jsx("div",{className:"value ",children:s?.name})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"SN"}),e.jsx("div",{className:"value",children:s?.cp_sn})]})]}),e.jsxs("div",{className:"basic-card-row",children:[e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Brand"}),e.jsx("div",{className:"value ",children:s?.brand})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Brand Model"}),e.jsx("div",{className:"value",children:s?.brand_model})]})]}),e.jsxs("div",{className:"basic-card-row",children:[e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Charge Model"}),e.jsx("div",{className:"value ",children:s?.charge_model.toUpperCase()})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Phase"}),e.jsx("div",{className:"value",children:s?.phase||"3p+n"})]})]}),e.jsx("div",{className:"basic-card-row",children:e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"OCPP"}),e.jsx("div",{className:"value ",children:s?.ocpp||"OCPP2.0.1"})]})}),e.jsxs("div",{className:"power-row",children:[e.jsxs("div",{className:"power-item",children:[e.jsx(a,{icon:"icon_current",size:"30"}),e.jsxs("div",{className:"item-wrapper",children:[e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Current Max"}),e.jsx("div",{className:"value ",children:s?.current_max||"32.00A"})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Current Min"}),e.jsx("div",{className:"value ",children:s?.current_min||"6.00A"})]})]})]}),e.jsxs("div",{className:"power-item",children:[e.jsx(a,{icon:"icon_power",size:"30"}),e.jsxs("div",{className:"item-wrapper",children:[e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Power Max"}),e.jsx("div",{className:"value ",children:s?.power_max||"7000.00kw"})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Power Min"}),e.jsx("div",{className:"value ",children:s?.power_min||"2000.00kw"})]})]})]})]})]})})}):null}export{N as default};
