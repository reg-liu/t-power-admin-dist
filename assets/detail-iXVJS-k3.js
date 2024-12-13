import{j as e}from"./index-Civ7fNWU.js";import{K as D,k as s,l as h,V as i,W as S,P as r,X as b,Y as I,Z as A,$ as K,a0 as O,a1 as u}from"./vendor-antd-DouGSysN.js";import{R as o,L as t,C as l,X as d,Y as c,T as x,a as j,b as a}from"./LineChart-BiH-yob2.js";import"./vendor-react-BcJS7s_i.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-Cpch6Ee7.js";import"./isEqual-Hc_6Fhhx.js";import"./vendor-charts-Cv5x1InZ.js";import"./index-Dj133iwh.js";function Y({visible:y,isAdmin:g,onCancel:m,chargePoint:n,onStart:C,onSetChargeProfile:v,onEditConnector:R}){const _=[{date:"2023-06-01",energy:120},{date:"2023-06-02",energy:150},{date:"2023-06-03",energy:180},{date:"2023-06-04",energy:200},{date:"2023-06-05",energy:170},{date:"2023-06-06",energy:190},{date:"2023-06-07",energy:210}],k=[{date:"2023-06-01",session:5},{date:"2023-06-02",session:8},{date:"2023-06-03",session:6},{date:"2023-06-04",session:10},{date:"2023-06-05",session:7},{date:"2023-06-06",session:9},{date:"2023-06-07",session:11}],N=[{type:"Error",num:3},{type:"Warning",num:5},{type:"Info",num:2}],w=[{date:"2023-06-01",online_num:20,offline_num:4},{date:"2023-06-02",online_num:22,offline_num:2},{date:"2023-06-03",online_num:21,offline_num:3},{date:"2023-06-04",online_num:23,offline_num:1},{date:"2023-06-05",online_num:20,offline_num:4},{date:"2023-06-06",online_num:24,offline_num:0},{date:"2023-06-07",online_num:22,offline_num:2}];return e.jsxs(D,{title:"Chargepoint Detail",visible:y,onCancel:m,width:800,style:{top:20},footer:[e.jsx(s,{onClick:m,children:"Close"},"close")],children:[e.jsx(h,{title:"Basic static information",children:e.jsxs(i,{children:[e.jsx(i.Item,{label:"Name",children:n?.name}),e.jsx(i.Item,{label:"SN",children:n?.cp_sn}),e.jsx(i.Item,{label:"Brand",children:n?.brand}),e.jsx(i.Item,{label:"Brand Model",children:n?.brand_model})]})}),e.jsx("div",{className:"mb-4 mt-4 text-lg font-bold",children:"Realtime information"}),e.jsx(h,{children:e.jsxs("div",{className:"flex w-full flex-col",children:[e.jsxs("div",{className:"flex",children:[e.jsx("span",{className:"mr-4 font-bold",children:"Chargepoint Status:"})," ",n?.chargepoint_status]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"mt-4 flex",children:n?.connectors?.map(f=>e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"mb-2 font-bold",children:f.name}),["L1","L2","L3"].map(p=>e.jsxs("div",{className:"mb-4",children:[e.jsx("p",{children:e.jsx("strong",{children:p})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Time:"})," 12:30:45"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Sequence:"})," 1"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Transactionid:"})," TX123456"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"SoC:"})," 75%"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Power:"})," 50.00"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Current:"})," 20.00"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Energy:"})," 30.00"]})]},p))]},f.name))}),e.jsxs("p",{children:[e.jsx("strong",{children:"Repair Schedule:"})," 2024-12-05 14:30:45"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Service Schedule:"})," 2024-12-05 14:30:45"]})]})]})}),e.jsx(h,{title:"Statistics graphs/information (7 days)",children:e.jsx("div",{className:"flex w-full flex-col",children:e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Charging Session Record"}),e.jsx(o,{width:"100%",height:200,children:e.jsxs(t,{data:_,children:[e.jsx(l,{strokeDasharray:"3 3"}),e.jsx(d,{dataKey:"date"}),e.jsx(c,{}),e.jsx(x,{}),e.jsx(j,{}),e.jsx(a,{type:"monotone",dataKey:"energy",stroke:"#8884d8",name:"Charged Energy Per Day"})]})})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Usage Record"}),e.jsx(o,{width:"100%",height:200,children:e.jsxs(t,{data:k,children:[e.jsx(l,{strokeDasharray:"3 3"}),e.jsx(d,{dataKey:"date"}),e.jsx(c,{}),e.jsx(x,{}),e.jsx(j,{}),e.jsx(a,{type:"monotone",dataKey:"session",stroke:"#82ca9d",name:"Num Of Charge Session Per Day"})]})})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Alert/Fault Record"}),e.jsx(o,{width:"100%",height:200,children:e.jsxs(t,{data:N,children:[e.jsx(l,{strokeDasharray:"3 3"}),e.jsx(d,{dataKey:"type"}),e.jsx(c,{}),e.jsx(x,{}),e.jsx(j,{}),e.jsx(a,{type:"monotone",dataKey:"num",stroke:"#ffc658",name:"Num Of Alert/Fault"})]})})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Online/Offline Record"}),e.jsx(o,{width:"100%",height:200,children:e.jsxs(t,{data:w,children:[e.jsx(l,{strokeDasharray:"3 3"}),e.jsx(d,{dataKey:"date"}),e.jsx(c,{}),e.jsx(x,{}),e.jsx(j,{}),e.jsx(a,{type:"monotone",dataKey:"online_num",stroke:"#8884d8",name:"Num Of Online Record Per Day"}),e.jsx(a,{type:"monotone",dataKey:"offline_num",stroke:"#82ca9d",name:"Num Of Offline Record Per Day"})]})})]})]})})}),e.jsxs("div",{className:"mt-4 flex flex-wrap gap-2",children:[e.jsx(s,{icon:e.jsx(S,{}),onClick:C,children:"Start"}),e.jsx(r,{title:"Areyou sure to stop?",onConfirm:()=>{},children:e.jsx(s,{icon:e.jsx(b,{}),children:"Stop"})}),e.jsx(s,{icon:e.jsx(I,{}),onClick:v,children:"Set Charge Profile"}),e.jsx(s,{icon:e.jsx(A,{}),onClick:R,children:"Edit Connector Availability"}),g&&e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Are you sure to download log?",onConfirm:()=>{},children:e.jsx(s,{icon:e.jsx(K,{}),children:"Download Log"})}),e.jsx(r,{title:"Are you sure to upgrade firmware?",onConfirm:()=>{},children:e.jsx(s,{icon:e.jsx(O,{}),children:"Upgrade Firmware"})}),e.jsx(r,{title:"Are you sure to reset hardware?",onConfirm:()=>{},children:e.jsx(s,{icon:e.jsx(u,{}),children:"Remotely Reset Hardware"})}),e.jsx(r,{title:"Are you sure to reset software?",onConfirm:()=>{},children:e.jsx(s,{icon:e.jsx(u,{}),children:"Remotely Reset Software"})})]})]})]})}export{Y as default};
