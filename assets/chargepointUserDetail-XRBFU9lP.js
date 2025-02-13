import{j as s,S as a}from"./index-DHG9k9kq.js";import{H as r,l as d,k as n}from"./vendor-antd-DZ11D4bT.js";import"./vendor-react-BcJS7s_i.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-FiO04Ee5.js";function v({visible:l,onClose:i,onEditLocation:c}){const e={name:"Chargepoint 1",cp_sn:"CP001",brand:"Tesla",brand_model:"Model S",charge_model:"AC",phase:"3",ocpp:"1.6",location:{street:"3 Street",hallam:"Hallam",vic:"VIC 3803"},current_max:"32",current_min:"6",power_max:"22",power_min:"1.4"};return s.jsx(r,{title:"Charge Point User Binding Details",visible:l,onCancel:i,width:1440,style:{top:40},footer:null,children:s.jsx("div",{className:"content-parts chargepoint-user-detail detail-normal",children:s.jsxs(d,{title:"Charge Point",className:"basic-card no-border ",children:[s.jsxs("div",{className:"basic-card-row",children:[s.jsxs("div",{className:"item",children:[s.jsx("div",{className:"label",children:"ChargePoint"}),s.jsx("div",{className:"value ",children:e?.name})]}),s.jsxs("div",{className:"item",children:[s.jsx("div",{className:"label",children:"SN"}),s.jsx("div",{className:"value",children:e?.cp_sn})]})]}),s.jsxs("div",{className:"basic-card-row",children:[s.jsxs("div",{className:"item",children:[s.jsx("div",{className:"label",children:"Brand"}),s.jsx("div",{className:"value ",children:e?.brand})]}),s.jsxs("div",{className:"item",children:[s.jsx("div",{className:"label",children:"Brand Model"}),s.jsx("div",{className:"value",children:e?.brand_model})]})]}),s.jsxs("div",{className:"basic-card-row",children:[s.jsxs("div",{className:"item",children:[s.jsx("div",{className:"label",children:"Charge Model"}),s.jsx("div",{className:"value ",children:e?.charge_model})]}),s.jsxs("div",{className:"item",children:[s.jsx("div",{className:"label",children:"Phase"}),s.jsx("div",{className:"value",children:e?.phase})]})]}),s.jsx("div",{className:"basic-card-row",children:s.jsxs("div",{className:"item",children:[s.jsx("div",{className:"label",children:"OCPP"}),s.jsx("div",{className:"value ",children:e?.ocpp})]})}),s.jsxs("div",{className:"power-row",children:[s.jsxs("div",{className:"power-item",children:[s.jsx(a,{icon:"icon_power",size:"30"}),s.jsxs("div",{className:"item-wrapper",children:[s.jsxs("div",{className:"item",children:[s.jsx("div",{className:"label",children:"Current Max"}),s.jsxs("div",{className:"value ",children:[e?.current_max,"A"]})]}),s.jsxs("div",{className:"item",children:[s.jsx("div",{className:"label",children:"Current Min"}),s.jsxs("div",{className:"value ",children:[e?.current_min,"A"]})]})]})]}),s.jsxs("div",{className:"power-item",children:[s.jsx(a,{icon:"icon_power",size:"30"}),s.jsxs("div",{className:"item-wrapper",children:[s.jsxs("div",{className:"item",children:[s.jsx("div",{className:"label",children:"Power Max"}),s.jsxs("div",{className:"value ",children:[e?.power_max,"kW"]})]}),s.jsxs("div",{className:"item",children:[s.jsx("div",{className:"label",children:"Power Min"}),s.jsxs("div",{className:"value ",children:[e?.power_min,"kW"]})]})]})]})]}),s.jsxs("div",{className:"location-wrapper location",children:[s.jsx("div",{className:"label",children:"Location"}),s.jsxs("div",{className:"value ",children:[s.jsxs("div",{children:[s.jsx("span",{className:"mr-2",children:e?.location.street}),s.jsx("span",{className:"mr-2",children:e?.location.hallam}),s.jsx("span",{className:"mr-2",children:e?.location.vic})]}),s.jsx("span",{className:"operation",children:s.jsx(n,{type:"link",onClick:c,icon:s.jsx(a,{icon:"EditLocation",size:"20",color:"#1cae70"})})})]})]})]})})})}export{v as default};
