import{j as e,f as s}from"./index-DSSEs5Zi.js";import{J as D,k as a,P as l,l as j,O as i}from"./vendor-antd-BgzZSO1n.js";import{R as r,L as c,C as d,X as o,Y as m,T as x,a as h,b as t}from"./LineChart-U4erekHa.js";import"./vendor-react-BcJS7s_i.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-D7_oWXRD.js";import"./isEqual-Hc_6Fhhx.js";import"./vendor-charts-Cv5x1InZ.js";import"./index-Dj133iwh.js";function F({visible:y,isAdmin:f,onCancel:N,chargePoint:n,onStart:v,onSetChargeProfile:g,onEditConnector:k}){const C=[{date:"2023-06-01",energy:120},{date:"2023-06-02",energy:150},{date:"2023-06-03",energy:180},{date:"2023-06-04",energy:200},{date:"2023-06-05",energy:170},{date:"2023-06-06",energy:190},{date:"2023-06-07",energy:210}],b=[{date:"2023-06-01",session:5},{date:"2023-06-02",session:8},{date:"2023-06-03",session:6},{date:"2023-06-04",session:10},{date:"2023-06-05",session:7},{date:"2023-06-06",session:9},{date:"2023-06-07",session:11}],w=[{type:"Error",num:3},{type:"Warning",num:5},{type:"Info",num:2}],_=[{date:"2023-06-01",online_num:20,offline_num:4},{date:"2023-06-02",online_num:22,offline_num:2},{date:"2023-06-03",online_num:21,offline_num:3},{date:"2023-06-04",online_num:23,offline_num:1},{date:"2023-06-05",online_num:20,offline_num:4},{date:"2023-06-06",online_num:24,offline_num:0},{date:"2023-06-07",online_num:22,offline_num:2}];return e.jsx(D,{title:"Chargepoint Detail",visible:y,onCancel:N,width:800,style:{top:20},footer:[e.jsxs("div",{className:"footer-btns",children:[e.jsx(a,{className:"split",type:"link",icon:e.jsx(s,{icon:"f7:play-circle",size:16}),onClick:v,children:"Start"}),e.jsx(l,{title:"Areyou sure to stop?",onConfirm:()=>{},children:e.jsx(a,{className:"split",type:"link",icon:e.jsx(s,{icon:"lucide:circle-pause",size:16}),children:"Stop"})}),e.jsx(a,{type:"link",className:"split",icon:e.jsx(s,{icon:"hugeicons:settings-02",size:16}),onClick:g,children:"Set Charge Profile"}),e.jsx(a,{type:"link",icon:e.jsx(s,{icon:"mynaui:edit-one",size:16}),onClick:k,children:"Edit Connector Availability"}),f&&e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Are you sure to download log?",onConfirm:()=>{},children:e.jsx(a,{className:"split",type:"link",icon:e.jsx(s,{icon:"mynaui:edit-one",size:16}),children:"Download Log"})}),e.jsx(l,{title:"Are you sure to upgrade firmware?",onConfirm:()=>{},children:e.jsx(a,{className:"split",type:"link",icon:e.jsx(s,{icon:"mynaui:edit-one",size:16}),children:"Upgrade Firmware"})}),e.jsx(l,{title:"Are you sure to reset hardware?",onConfirm:()=>{},children:e.jsx(a,{className:"split",type:"link",icon:e.jsx(s,{icon:"bitcoin-icons:node-hardware-outline",size:16}),children:"Remotely Reset Hardware"})}),e.jsx(l,{title:"Are you sure to reset software?",onConfirm:()=>{},children:e.jsx(a,{type:"link",icon:e.jsx(s,{icon:"mdi:application-variable-outline",size:16}),children:"Remotely Reset Software"})})]})]})],children:e.jsxs("div",{className:"content-parts",children:[e.jsx(j,{title:"Basic static information",children:e.jsxs(i,{column:2,children:[e.jsx(i.Item,{span:1,label:"Name",children:n?.name}),e.jsx(i.Item,{span:1,label:"SN",children:n?.cp_sn}),e.jsx(i.Item,{span:1,label:"Brand",children:n?.brand}),e.jsx(i.Item,{span:1,label:"Brand Model",children:n?.brand_model})]})}),e.jsx(j,{title:"Realtime information",children:e.jsxs(i,{column:2,children:[e.jsx(i.Item,{span:2,label:"Chargepoint Status",children:n?.chargepoint_status}),e.jsx(i.Item,{span:2,children:e.jsx("div",{className:"flex w-full flex-col",children:e.jsx("div",{className:"connector-wrapper",children:n?.connectors?.map(p=>e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"part-title",children:p.name}),e.jsx("div",{className:"part-subtitle",children:e.jsx("span",{children:"Repair Schedule: 2024-12-05 14:30:45"})}),["L1","L2","L3"].map(u=>e.jsxs("div",{className:"level-wrapper",children:[e.jsx("div",{className:"part-title",children:u}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Time"}),e.jsx("span",{className:"value",children:"12:30:45"})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Sequence"}),e.jsx("span",{className:"value",children:"1"})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Transactionid"}),e.jsx("span",{className:"value",children:"TX123456"})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"SoC"}),e.jsx("span",{className:"value",children:"75%"})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Power"}),e.jsx("span",{className:"value",children:"50.00"})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Current"}),e.jsx("span",{className:"value",children:"20.00"})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Energy"}),e.jsx("span",{className:"value",children:"30.00"})]})]},u))]},p.name))})})})]})}),e.jsx(j,{title:"Statistics graphs/information (7 days)",children:e.jsxs("div",{className:"chart-wrapper",children:[e.jsxs("div",{className:"chart-item",children:[e.jsx("div",{className:"chart-title",children:"Charging Session Record"}),e.jsx("div",{className:"chart-content",children:e.jsx(r,{width:"100%",height:200,children:e.jsxs(c,{data:C,children:[e.jsx(d,{strokeDasharray:"3 3"}),e.jsx(o,{dataKey:"date"}),e.jsx(m,{}),e.jsx(x,{}),e.jsx(h,{}),e.jsx(t,{type:"monotone",dataKey:"energy",stroke:"#8884d8",name:"Charged Energy Per Day"})]})})})]}),e.jsxs("div",{className:"chart-item",children:[e.jsx("div",{className:"chart-title",children:"Usage Record"}),e.jsx("div",{className:"chart-content",children:e.jsx(r,{width:"100%",height:200,children:e.jsxs(c,{data:b,children:[e.jsx(d,{strokeDasharray:"3 3"}),e.jsx(o,{dataKey:"date"}),e.jsx(m,{}),e.jsx(x,{}),e.jsx(h,{}),e.jsx(t,{type:"monotone",dataKey:"session",stroke:"#82ca9d",name:"Num Of Charge Session Per Day"})]})})})]}),e.jsxs("div",{className:"chart-item",children:[e.jsx("div",{className:"chart-title",children:"Alert/Fault Record"}),e.jsx("div",{className:"chart-content",children:e.jsx(r,{width:"100%",height:200,children:e.jsxs(c,{data:w,children:[e.jsx(d,{strokeDasharray:"3 3"}),e.jsx(o,{dataKey:"type"}),e.jsx(m,{}),e.jsx(x,{}),e.jsx(h,{}),e.jsx(t,{type:"monotone",dataKey:"num",stroke:"#ffc658",name:"Num Of Alert/Fault"})]})})})]}),e.jsxs("div",{className:"chart-item",children:[e.jsx("div",{className:"chart-title",children:"Online/Offline Record"}),e.jsx("div",{className:"chart-content",children:e.jsx(r,{width:"100%",height:200,children:e.jsxs(c,{data:_,children:[e.jsx(d,{strokeDasharray:"3 3"}),e.jsx(o,{dataKey:"date"}),e.jsx(m,{}),e.jsx(x,{}),e.jsx(h,{}),e.jsx(t,{type:"monotone",dataKey:"online_num",stroke:"#8884d8",name:"Num Of Online Record Per Day"}),e.jsx(t,{type:"monotone",dataKey:"offline_num",stroke:"#82ca9d",name:"Num Of Offline Record Per Day"})]})})})]})]})})]})})}export{F as default};
