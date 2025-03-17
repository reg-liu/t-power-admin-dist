import{j as e,S as i}from"./index-5T_VQxhD.js";import{c as o}from"./cpManagementService-CaGiOLL-.js";import{E as x,P as v,i as c,j as h,I as j,s as N}from"./vendor-antd-B62eGpCx.js";import"./vendor-react-BcJS7s_i.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-CtEfXJzW.js";function M({visible:d,onClose:l,record:s,onDelete:n,onEdit:r}){if(!s)return null;const m=async()=>{try{const a=await o.del({charge_point_ids:[s.id]});a?.code===200&&(N.success(a.message),n(),l())}catch{}},t=()=>{m()};return e.jsx(x,{title:"Charge Point Brand Model Details",open:d,onCancel:l,width:1440,style:{top:40},footer:[e.jsxs("div",{className:"footer-normal-btns",children:[e.jsx(v,{title:"Confirm delete?",onConfirm:t,placement:"bottom",okText:"Confirm",cancelText:"Cancel",children:e.jsx(c,{danger:!0,children:"Delete Brand Model"})}),e.jsx(c,{type:"primary",onClick:r,children:"Edit Brand Model"})]},"brand-model-detail-footer")],children:e.jsx("div",{className:"content-parts",children:e.jsx("div",{className:"content-parts brand-model-detail detail-normal",children:e.jsxs(h,{title:"Basic Information",className:"basic-card no-border",children:[e.jsx("div",{className:"basic-card-row",children:e.jsx(j,{src:s?.picture,preview:!1,className:"entity-image object-cover"})}),e.jsxs("div",{className:"basic-card-row",children:[e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Brand"}),e.jsx("div",{className:"value ",children:s?.brand})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Brand Model"}),e.jsx("div",{className:"value",children:s?.brand_model})]})]}),e.jsxs("div",{className:"basic-card-row",children:[e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Charge Model"}),e.jsx("div",{className:"value ",children:s?.charge_model})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Phase"}),e.jsx("div",{className:"value",children:s?.phase})]})]}),e.jsxs("div",{className:"basic-card-row",children:[e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"OCPP"}),e.jsx("div",{className:"value ",children:s?.ocpp})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Connector No"}),e.jsx("div",{className:"value ",children:s?.connector_no})]})]}),e.jsxs("div",{className:"power-row",children:[e.jsxs("div",{className:"power-item",children:[e.jsx(i,{icon:"icon_current",size:"30"}),e.jsxs("div",{className:"item-wrapper",children:[e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Current Min"}),e.jsxs("div",{className:"value ",children:[s?.out_current_min,"A"]})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Current Max"}),e.jsxs("div",{className:"value ",children:[s?.out_current_max,"A"]})]})]})]}),e.jsxs("div",{className:"power-item",children:[e.jsx(i,{icon:"icon_power",size:"30"}),e.jsxs("div",{className:"item-wrapper",children:[e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Power Min"}),e.jsxs("div",{className:"value ",children:[s?.out_power_min,"kW"]})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Power Max"}),e.jsxs("div",{className:"value ",children:[s?.out_power_max,"kW"]})]})]})]})]}),e.jsx("div",{className:"power-row",children:e.jsxs("div",{className:"power-item",children:[e.jsx(i,{icon:"icon_v",size:"30"}),e.jsxs("div",{className:"item-wrapper",children:[e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Voltage Min"}),e.jsxs("div",{className:"value ",children:[s?.out_voltage_min,"A"]})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Voltage Max"}),e.jsxs("div",{className:"value ",children:[s?.out_voltage_max,"A"]})]})]})]})})]})})})})}export{M as default};
