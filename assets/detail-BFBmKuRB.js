import{j as e,S as j}from"./index-Z7dEZYu4.js";import{r as v}from"./vendor-react-DcqtUZ_G.js";import{E as u,P as N,i as l,j as d,Q as c}from"./vendor-antd-BiNc4BQP.js";import"./vendor-ui-BASYQBt4.js";import"./vendor-utils-DcB4TerO.js";function y({visible:r,onCancel:n,record:s,onEdit:t}){const[m,o]=v.useState([{limit:"30",duration:"30"},{limit:"30",duration:"30"}]),h=()=>{o([]),t(s)},x=()=>{};return s?e.jsx(u,{title:"Charging Schedule Detail",open:r,onCancel:n,width:1440,style:{top:40},footer:[e.jsxs("div",{className:"footer-normal-btns",children:[e.jsx(N,{title:"Are you sure you want to delete this schedule?",onConfirm:x,okText:"Yes",cancelText:"No",children:e.jsx(l,{danger:!0,children:"Delete"})},"delete"),e.jsx(l,{type:"primary",onClick:h,children:"Edit"},"edit")]},"detail-footer")],zIndex:1e3,children:e.jsxs("div",{className:"content-parts detail-normal",children:[e.jsxs(d,{title:"Basic Information",className:"basic-card no-border",children:[e.jsxs("div",{className:"basic-card-row",children:[e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Charge Point"}),e.jsx("div",{className:"value ",children:s?.id_tag})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Connector"}),e.jsx("div",{className:"value",children:s?.connector})]})]}),e.jsxs("div",{className:"basic-card-row",children:[e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Energy Mode"}),e.jsx("div",{className:"value ",children:s?.session_mode})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Duration"}),e.jsx("div",{className:"value",children:s?.duration})]})]}),e.jsxs("div",{className:"basic-card-row",children:[e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Start Time"}),e.jsx("div",{className:"value ",children:s?.start_time})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"End Time"}),e.jsx("div",{className:"value",children:s?.end_time})]})]}),e.jsxs("div",{className:"basic-card-row",children:[e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Repeat Kind"}),e.jsx("div",{className:"value",children:s?.repeat_kind})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"User"}),e.jsx("div",{className:"value ",children:s?.user})]})]})]}),e.jsx(d,{title:"With Profile",children:e.jsxs("div",{className:"power-col",children:[e.jsxs("div",{className:"power-col-top",children:[e.jsx(j,{icon:"icon_power",size:"30"}),e.jsx("div",{className:"power-label",children:"Power"})]}),e.jsx("div",{className:"power-items-wrapper",children:m.map((i,a)=>e.jsx("div",{className:"power-item",children:e.jsxs("div",{className:"label-value-split ",children:[e.jsxs("div",{children:[e.jsx("div",{className:"label",children:e.jsx("span",{children:"Limit(W)"})}),e.jsx(c,{min:1,max:1e5,disabled:!0,defaultValue:i.limit,placeholder:"Input"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:e.jsx("span",{children:"Duration(Minutes)"})}),e.jsx(c,{min:1,disabled:!0,max:1e5,defaultValue:i.duration,placeholder:"Input"})]})]},a)},`setting-${i.limit}-${a}`))})]})})]})}):null}export{y as default};
