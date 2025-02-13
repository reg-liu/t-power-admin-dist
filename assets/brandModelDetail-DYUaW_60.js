import{j as e,S as a}from"./index-DfUarSxH.js";import{e as n}from"./ev-PecoakOh.js";import{H as m,P as t,k as i,l as o,z as x}from"./vendor-antd-DZ11D4bT.js";import"./vendor-react-BcJS7s_i.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-FiO04Ee5.js";function b({visible:d,onClose:l,chargePoint:s,onEdit:c}){if(!s)return null;const r=()=>{l()};return e.jsx(m,{title:"Charge Point Brand Model Details",visible:d,onCancel:l,width:1440,style:{top:40},footer:[e.jsxs("div",{className:"footer-normal-btns",children:[e.jsx(t,{title:"Are you sure you want to delete this brand model?",onConfirm:r,okText:"Yes",cancelText:"No",children:e.jsx(i,{danger:!0,children:"Delete Brand Model"})}),e.jsx(i,{type:"primary",onClick:c,children:"Edit Brand Model"})]})],children:e.jsx("div",{className:"content-parts",children:e.jsx("div",{className:"content-parts brand-model-detail detail-normal",children:e.jsxs(o,{title:"Basic Information",className:"basic-card no-border",children:[e.jsx("div",{className:"basic-card-row",children:e.jsx(x,{src:n,preview:!1,width:236,className:"entity-image object-cover"})}),e.jsxs("div",{className:"basic-card-row",children:[e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Brand"}),e.jsx("div",{className:"value ",children:s?.brand})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Brand Model"}),e.jsx("div",{className:"value",children:s?.brand_model})]})]}),e.jsxs("div",{className:"basic-card-row",children:[e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Charge Model"}),e.jsx("div",{className:"value ",children:s?.charge_model})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Phase"}),e.jsx("div",{className:"value",children:s?.phase})]})]}),e.jsxs("div",{className:"basic-card-row",children:[e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"OCPP"}),e.jsx("div",{className:"value ",children:s?.ocpp})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Connector No"}),e.jsx("div",{className:"value ",children:s?.connector_num})]})]}),e.jsxs("div",{className:"power-row",children:[e.jsxs("div",{className:"power-item",children:[e.jsx(a,{icon:"icon_current",size:"30"}),e.jsxs("div",{className:"item-wrapper",children:[e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Current Max"}),e.jsxs("div",{className:"value ",children:[s?.current_max||"32.00","A"]})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Current Min"}),e.jsxs("div",{className:"value ",children:[s?.current_min||"6.00","A"]})]})]})]}),e.jsxs("div",{className:"power-item",children:[e.jsx(a,{icon:"icon_power",size:"30"}),e.jsxs("div",{className:"item-wrapper",children:[e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Power Max"}),e.jsxs("div",{className:"value ",children:[s?.power_max||"7000.00","kW"]})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Power Min"}),e.jsxs("div",{className:"value ",children:[s?.power_min||"2000.00kw","kW"]})]})]})]})]}),e.jsx("div",{className:"power-row",children:e.jsxs("div",{className:"power-item",children:[e.jsx(a,{icon:"icon_v",size:"30"}),e.jsxs("div",{className:"item-wrapper",children:[e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Voltage Max"}),e.jsxs("div",{className:"value ",children:[s?.voltage_max||"7000.00","A"]})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Voltage Min"}),e.jsxs("div",{className:"value ",children:[s?.voltage_min||"2000.00","A"]})]})]})]})})]})})})})}export{b as default};
