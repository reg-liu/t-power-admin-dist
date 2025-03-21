import{j as s,S as l}from"./index-kUHj67UK.js";import{S as os,i as t,j as k,P as p,U as ms,N as M,O as L,s as x}from"./vendor-antd-DmtkV1Ch.js";import{r as o}from"./vendor-react-BcJS7s_i.js";import{c as h}from"./cpMonitorService-BvKZnonh.js";import{R as N,L as v,C as f,X as y,Y as C,T as w,a as _,b as u}from"./LineChart-9VT-gkYp.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-BKiv1F2M.js";import"./isEqual-Hc_6Fhhx.js";import"./vendor-charts-Cv5x1InZ.js";import"./index-Dj133iwh.js";function ws({onCancel:q,chargePoint:a,onStart:D,onUpdate:E,onSetChargeProfile:B,onEditConnector:R,updateList:G}){const[T,b]=o.useState([]),[z,X]=o.useState([]),[Y,g]=o.useState([]),[I,V]=o.useState([]),[W,J]=o.useState(!0),[Q,$]=o.useState(0),[S,Z]=o.useState({}),[m,P]=o.useState(null),[r,ss]=o.useState(null),O=e=>{a?.status==="Charging"?B(e):x.error("Only the Connector in Charging state supports this operation.")},K=async e=>{const d=[{charge_point_id:e.charge_point_id,connector_id:e.connector_id,mode:"default",soc:{max:.92}}],c=await h.start({cp_id_connector_pairs:d});c?.code===200&&(x.success(c.message),$(Date.now()),E())},A=async e=>{const d=[{charge_point_id:e.charge_point_id,connector_id:e.connector_id}],c=await h.stop({cp_id_connector_pairs:d});c?.code===200&&(x.success(c.message),$(Date.now()),E())},es=async(e,d)=>{const c=await h.getChargeProfile(a?.id,{connector_id:e.connector_id});Z({[e.connector_id]:{start:L(c.detail.profile_start_datetime).format("YYYY-MM-DD HH:mm:ss"),end:L(c.detail.profile_end_datetime).format("YYYY-MM-DD HH:mm:ss")}}),d&&J(!1)},as=async(e,d)=>{const c=await h.getRealtimeInfo(e.charge_point_id,{connector_id:e.connector_id,action:"MeterValues"});if(c.code===200){const j=[];c.detail.L1.length&&j.push("L1"),c.detail.L2.length&&j.push("L2"),c.detail.L3.length&&j.push("L3");const i={...c.detail};i.L1.length&&(i.L1Map={},i.L1.forEach(n=>{n.measurand.includes("Power")&&(i.L1Map.power={...n}),n.measurand.includes("Current")&&(i.L1Map.current={...n}),n.measurand.includes("Energy")&&(i.L1Map.energy={...n})}),i.L2.forEach(n=>{n.measurand.includes("Power")&&(i.L2Map.power={...n}),n.measurand.includes("Current")&&(i.L2Map.current={...n}),n.measurand.includes("Energy")&&(i.L2Map.energy={...n})}),i.L3.forEach(n=>{n.measurand.includes("Power")&&(i.L3Map.power={...n}),n.measurand.includes("Current")&&(i.L3Map.current={...n}),n.measurand.includes("Energy")&&(i.L3Map.energy={...n})})),d===0?(P(i),b(["L1"]),X(j)):(ss(i),g(["L1"]),V(j))}else b([]),g([])};o.useEffect(()=>{const e=(a?.connectors?.length||0)-1;a?.connectors?.forEach((d,c)=>{as(d,c),es(d,c===e)})},[G,Q]);const H=[{date:"2023-06-01",energy:120},{date:"2023-06-02",energy:150},{date:"2023-06-03",energy:180},{date:"2023-06-04",energy:200},{date:"2023-06-05",energy:170},{date:"2023-06-06",energy:190},{date:"2023-06-07",energy:210}],ns=[{date:"2023-06-01",session:5},{date:"2023-06-02",session:8},{date:"2023-06-03",session:6},{date:"2023-06-04",session:10},{date:"2023-06-05",session:7},{date:"2023-06-06",session:9},{date:"2023-06-07",session:11}],is=[{type:"Error",num:3},{type:"Warning",num:5},{type:"Info",num:2}],cs=[{date:"2023-06-01",online_num:20,offline_num:4},{date:"2023-06-02",online_num:22,offline_num:2},{date:"2023-06-03",online_num:21,offline_num:3},{date:"2023-06-04",online_num:23,offline_num:1},{date:"2023-06-05",online_num:20,offline_num:4},{date:"2023-06-06",online_num:24,offline_num:0},{date:"2023-06-07",online_num:22,offline_num:2}],U=e=>{e===0?b(z):g(I)},F=e=>{e===0?b([]):g([])},ls=async e=>{const{file:d,onSuccess:c,onError:j}=e;try{const i=new FormData;i.append("files",d),i.append("charge_point_id",a?.id);const n=await h.updateFirmware(i);n?.code===200&&(x.success(n.message),c())}catch{x.error("Upgrade Firmware failed!"),j()}},ts=async()=>{const e=await h.reset({charge_point_id:a?.id,type:"Soft"});e?.code===200&&x.success(e.message)},rs=async()=>{const e=await h.reset({charge_point_id:a?.id,type:"Hard"});e?.code===200&&x.success(e.message)},ds=async()=>{const e=await h.downloadLog({charge_point_id:a?.id});e?.code===200&&x.success(e.message)};return s.jsx("div",{className:"monitor-detail-page",children:s.jsxs(os,{tip:"Loading...",spinning:W,children:[s.jsxs("div",{className:"title-wrapper",children:[s.jsx("span",{className:"title",children:"Charge Point Monitering Details"}),s.jsx("span",{className:"close-btn",children:s.jsx(t,{type:"link",onClick:q,icon:s.jsx(l,{icon:"icon_close",size:"20",color:"#999"})})})]}),s.jsxs("div",{className:"content-parts monitor-detail",children:[s.jsxs(k,{title:"Basic Information",className:"basic-card no-border",children:[s.jsxs("div",{className:"basic-card-row",children:[s.jsxs("div",{className:"item",children:[s.jsx("div",{className:"label",children:"Charge Point"}),s.jsx("div",{className:"value main-value",children:a?.id_tag})]}),s.jsxs("div",{className:"item",children:[s.jsx("div",{className:"label",children:"SN"}),s.jsx("div",{className:"value",children:a?.sn})]})]}),s.jsxs("div",{className:"basic-card-row",children:[s.jsxs("div",{className:"item",children:[s.jsx("div",{className:"label",children:"Brand"}),s.jsx("div",{className:"value",children:a?.brand})]}),s.jsxs("div",{className:"item",children:[s.jsx("div",{className:"label",children:"Brand Model"}),s.jsx("div",{className:"value",children:a?.brand_model})]})]}),s.jsxs("div",{className:"time-row",children:[s.jsxs("div",{className:"item",children:[s.jsx("div",{className:"label",children:"Repair Schedule"}),s.jsxs("div",{className:"value",children:[s.jsx("div",{className:"sub-label",children:"start:"}),s.jsx("div",{className:"sub-value",children:"2024-12-05"})]})]}),s.jsxs("div",{className:"item",children:[s.jsx("div",{className:"label",children:"Service Schedule"}),s.jsxs("div",{className:"value",children:[s.jsx("div",{className:"sub-label",children:"start:"}),s.jsx("div",{className:"sub-value",children:"2024-12-05"})]})]})]}),s.jsxs("div",{className:"btns",children:[s.jsx(p,{placement:"bottom",okText:"Confirm",cancelText:"Cancel",title:"Confirm remote reset software?",onConfirm:ts,children:s.jsx(t,{icon:s.jsx(l,{icon:"icon_software",size:"20"}),children:"Remote reset software"})}),s.jsx(p,{placement:"bottom",okText:"Confirm",cancelText:"Cancel",title:"Confirm remote reset hardware?",onConfirm:rs,children:s.jsx(t,{className:"ml-3",icon:s.jsx(l,{icon:"icon_hardware",size:"20"}),children:"Remote reset hardware"})}),s.jsx(ms,{customRequest:ls,showUploadList:!1,children:s.jsx(t,{className:"ml-3",icon:s.jsx(l,{icon:"icon_upload",size:"20"}),children:"Upgrade Firmware"})}),s.jsx(p,{placement:"bottom",okText:"Confirm",cancelText:"Cancel",title:"Confirm download log?",onConfirm:ds,children:s.jsx(t,{className:"ml-3",icon:s.jsx(l,{icon:"icon_download",size:"20"}),children:"Download Log"})})]})]}),s.jsx(k,{title:"Realtime Information",className:"realtime-card no-border",children:s.jsxs(M,{column:2,children:[s.jsx(M.Item,{span:2,label:"Charge Point Status",children:s.jsxs("div",{className:`status-item ml-3 ${a?.charge_point_status.toLowerCase()}`,children:[s.jsx("div",{className:"point"}),s.jsx("span",{children:a?.charge_point_status})]})}),s.jsx(M.Item,{span:2,children:s.jsx("div",{className:"flex w-full flex-col",children:s.jsxs("div",{className:"connector-wrapper",children:[a.connectors[0]&&s.jsxs("div",{className:"connector0",children:[s.jsx("div",{className:"part-title",children:a.connectors[0].name}),s.jsxs("div",{className:"part-subtitle",children:[s.jsx("div",{className:"label",children:"Connector Status："}),s.jsx("div",{className:`status ${a.connectors[0].status.toLowerCase()}`,children:s.jsx("span",{children:a.connectors[0].status})})]}),T.map(e=>s.jsxs("div",{className:"level-wrapper",children:[s.jsx("div",{className:"part-title",children:e}),s.jsxs("div",{className:"display-item",children:[s.jsx("span",{className:"label",children:"Time"}),s.jsx("span",{className:"value",children:L(m?.start_time).format("YYYY-MM-DD HH:mm:ss")})]}),s.jsxs("div",{className:"display-item",children:[s.jsx("span",{className:"label",children:"Sequence"}),s.jsx("span",{className:"value",children:m?.sequence_no})]}),s.jsxs("div",{className:"display-item",children:[s.jsx("span",{className:"label",children:"Transactionid"}),s.jsx("span",{className:"value",children:m?.transaction_id})]}),s.jsxs("div",{className:"display-item",children:[s.jsx("span",{className:"label",children:"SoC"}),s.jsx("span",{className:"value",children:r?.soc})]}),s.jsxs("div",{className:"display-item",children:[s.jsx("span",{className:"label",children:"Power"}),s.jsxs("span",{className:"value",children:[m?.[`${e}Map`]?.power?.value,m?.[`${e}Map`]?.power?.unit]})]}),s.jsxs("div",{className:"display-item",children:[s.jsx("span",{className:"label",children:"Current"}),s.jsxs("span",{className:"value",children:[m?.[`${e}Map`]?.current?.value,m?.[`${e}Map`]?.current?.unit]})]}),s.jsxs("div",{className:"display-item",children:[s.jsx("span",{className:"label",children:"Energy"}),s.jsxs("span",{className:"value",children:[m?.[`${e}Map`]?.energy?.value,m?.[`${e}Map`]?.energy?.unit]})]}),e==="L1"&&z.length>1?s.jsxs("div",{className:"display-item collapse-item",children:[s.jsx("span",{className:"label"}),s.jsx("span",{className:"value",children:T.length===1?s.jsx(t,{type:"link",onClick:()=>U(0),icon:s.jsx(l,{icon:"Expand",size:"22"})}):s.jsx(t,{type:"link",onClick:()=>F(0),icon:s.jsx(l,{icon:"Collapse",size:"22"})})})]}):null]},e)),s.jsx("div",{className:"time-row",children:s.jsxs("div",{className:"item",children:[s.jsx("div",{className:"label",children:"Upcoming Charging Schedule "}),s.jsxs("div",{className:"bottom",children:[s.jsxs("div",{className:"value",children:[s.jsx("div",{className:"sub-label",children:"start:"}),s.jsx("div",{className:"sub-value",children:S[a.connectors[0].connector_id]?.start})]}),s.jsxs("div",{className:"value",children:[s.jsx("div",{className:"sub-label",children:"end:"}),s.jsx("div",{className:"sub-value",children:S[a.connectors[0].connector_id]?.end})]})]})]})}),s.jsxs("div",{className:"connector-btns",children:[s.jsx(p,{placement:"bottom",okText:"Confirm",cancelText:"Cancel",title:"Confirm Stop?",onConfirm:()=>A(a.connectors[0]),children:s.jsx(t,{style:{width:"218px"},type:"primary",icon:s.jsx(l,{icon:"Stop",size:"20"}),children:"Stop"})}),s.jsx(p,{placement:"bottom",okText:"Confirm",cancelText:"Cancel",title:"Confirm start?",onConfirm:()=>K(a.connectors[0]),children:s.jsx(t,{style:{width:"218px"},type:"primary",icon:s.jsx(l,{icon:"Start",size:"20"}),children:"Start"})}),s.jsx(t,{style:{width:"158px"},icon:s.jsx(l,{icon:"AStart",size:"20"}),onClick:()=>{D(a.connectors[0])},children:"Advanced Start"}),s.jsx(t,{style:{width:"200px"},icon:s.jsx(l,{icon:"Set",size:"20"}),onClick:()=>{O(a.connectors[0])},children:"Set Charge Profile"}),s.jsx(t,{style:{width:"200px"},icon:s.jsx(l,{icon:"Edit",size:"20"}),onClick:()=>{R(a.connectors[0])},children:"Edit Connector Status"})]})]},a.connectors[0].name),a.connectors[1]&&s.jsxs("div",{className:"connector1",children:[s.jsx("div",{className:"part-title",children:a.connectors[1].name}),s.jsxs("div",{className:"part-subtitle",children:[s.jsx("div",{className:"label",children:"Connector Status："}),s.jsx("div",{className:`status ${a.connectors[1].status.toLowerCase()}`,children:s.jsx("span",{children:a.connectors[1].status})})]}),r&&Y.map(e=>s.jsxs("div",{className:"level-wrapper",children:[s.jsx("div",{className:"part-title",children:e}),s.jsxs("div",{className:"display-item",children:[s.jsx("span",{className:"label",children:"Time"}),s.jsx("span",{className:"value",children:L(r?.start_time).format("YYYY-MM-DD HH:mm:ss")})]}),s.jsxs("div",{className:"display-item",children:[s.jsx("span",{className:"label",children:"Sequence"}),s.jsx("span",{className:"value",children:r?.sequence_no})]}),s.jsxs("div",{className:"display-item",children:[s.jsx("span",{className:"label",children:"Transactionid"}),s.jsx("span",{className:"value",children:r?.transaction_id})]}),s.jsxs("div",{className:"display-item",children:[s.jsx("span",{className:"label",children:"SoC"}),s.jsx("span",{className:"value",children:r?.soc})]}),s.jsxs("div",{className:"display-item",children:[s.jsx("span",{className:"label",children:"Power"}),s.jsxs("span",{className:"value",children:[r?.[`${e}Map`]?.power?.value,r?.[`${e}Map`]?.power?.unit]})]}),s.jsxs("div",{className:"display-item",children:[s.jsx("span",{className:"label",children:"Current"}),s.jsxs("span",{className:"value",children:[r?.[`${e}Map`]?.current?.value,r?.[`${e}Map`]?.current?.unit]})]}),s.jsxs("div",{className:"display-item",children:[s.jsx("span",{className:"label",children:"Energy"}),s.jsxs("span",{className:"value",children:[r?.[`${e}Map`]?.energy?.value,r?.[`${e}Map`]?.energy?.unit]})]}),e==="L1"&&I.length>1?s.jsxs("div",{className:"display-item collapse-item",children:[s.jsx("span",{className:"label"}),s.jsx("span",{className:"value",children:Y.length===1?s.jsx(t,{type:"link",onClick:()=>U(1),icon:s.jsx(l,{icon:"Expand",size:"22"})}):s.jsx(t,{type:"link",onClick:()=>F(1),icon:s.jsx(l,{icon:"Collapse",size:"22"})})})]}):null]},e)),s.jsx("div",{className:"time-row",children:s.jsxs("div",{className:"item",children:[s.jsx("div",{className:"label",children:"Upcoming Charging Schedule "}),s.jsxs("div",{className:"bottom",children:[s.jsxs("div",{className:"value",children:[s.jsx("div",{className:"sub-label",children:"start:"}),s.jsx("div",{className:"sub-value",children:S[a.connectors[1].connector_id]?.start})]}),s.jsxs("div",{className:"value",children:[s.jsx("div",{className:"sub-label",children:"end:"}),s.jsx("div",{className:"sub-value",children:S[a.connectors[1].connector_id]?.end})]})]})]})}),s.jsxs("div",{className:"connector-btns",children:[s.jsx(p,{placement:"bottom",okText:"Confirm",cancelText:"Cancel",title:"Confirm Stop?",onConfirm:()=>A(a.connectors[1]),children:s.jsx(t,{style:{width:"218px"},type:"primary",icon:s.jsx(l,{icon:"Stop",size:"20"}),children:"Stop"})}),s.jsx(p,{placement:"bottom",okText:"Confirm",cancelText:"Cancel",title:"Confirm start?",onConfirm:()=>K(a.connectors[1]),children:s.jsx(t,{style:{width:"218px"},type:"primary",icon:s.jsx(l,{icon:"Start",size:"20"}),children:"Start"})}),s.jsx(t,{style:{width:"158px"},icon:s.jsx(l,{icon:"AStart",size:"20"}),onClick:()=>{D(a.connectors[1])},children:"Advanced Start"}),s.jsx(t,{style:{width:"200px"},icon:s.jsx(l,{icon:"Set",size:"20"}),onClick:()=>{O(a.connectors[1])},children:"Set Charge Profile"}),s.jsx(t,{style:{width:"200px"},icon:s.jsx(l,{icon:"Edit",size:"20"}),onClick:()=>{R(a.connectors[1])},children:"Edit Connector Status"})]})]},a.connectors[1].name)]})})})]})}),s.jsx(k,{title:"Statistics Graphs/Information (7 days)",className:"chart-card no-border",children:s.jsxs("div",{className:"chart-wrapper",children:[s.jsxs("div",{className:"chart-item",children:[s.jsx("div",{className:"chart-title",children:"Energy Consumption"}),s.jsx("div",{className:"chart-content",children:s.jsx(N,{width:"100%",height:200,children:s.jsxs(v,{data:H,children:[s.jsx(f,{strokeDasharray:"3 3"}),s.jsx(y,{dataKey:"date"}),s.jsx(C,{}),s.jsx(w,{}),s.jsx(_,{}),s.jsx(u,{type:"monotone",dataKey:"energy",stroke:"#8884d8",name:"Charged Energy Per Day"})]})})})]}),s.jsxs("div",{className:"chart-item",children:[s.jsx("div",{className:"chart-title",children:"Charging Session Record"}),s.jsx("div",{className:"chart-content",children:s.jsx(N,{width:"100%",height:200,children:s.jsxs(v,{data:H,children:[s.jsx(f,{strokeDasharray:"3 3"}),s.jsx(y,{dataKey:"date"}),s.jsx(C,{}),s.jsx(w,{}),s.jsx(_,{}),s.jsx(u,{type:"monotone",dataKey:"energy",stroke:"#8884d8",name:"Charged Energy Per Day"})]})})})]}),s.jsxs("div",{className:"chart-item",children:[s.jsx("div",{className:"chart-title",children:"Usage Record"}),s.jsx("div",{className:"chart-content",children:s.jsx(N,{width:"100%",height:200,children:s.jsxs(v,{data:ns,children:[s.jsx(f,{strokeDasharray:"3 3"}),s.jsx(y,{dataKey:"date"}),s.jsx(C,{}),s.jsx(w,{}),s.jsx(_,{}),s.jsx(u,{type:"monotone",dataKey:"session",stroke:"#82ca9d",name:"Num Of Charge Session Per Day"})]})})})]}),s.jsxs("div",{className:"chart-item",children:[s.jsx("div",{className:"chart-title",children:"Alert/Fault Record"}),s.jsx("div",{className:"chart-content",children:s.jsx(N,{width:"100%",height:200,children:s.jsxs(v,{data:is,children:[s.jsx(f,{strokeDasharray:"3 3"}),s.jsx(y,{dataKey:"type"}),s.jsx(C,{}),s.jsx(w,{}),s.jsx(_,{}),s.jsx(u,{type:"monotone",dataKey:"num",stroke:"#ffc658",name:"Num Of Alert/Fault"})]})})})]}),s.jsxs("div",{className:"chart-item",children:[s.jsx("div",{className:"chart-title",children:"Online/Offline Record"}),s.jsx("div",{className:"chart-content",children:s.jsx(N,{width:"100%",height:200,children:s.jsxs(v,{data:cs,children:[s.jsx(f,{strokeDasharray:"3 3"}),s.jsx(y,{dataKey:"date"}),s.jsx(C,{}),s.jsx(w,{}),s.jsx(_,{}),s.jsx(u,{type:"monotone",dataKey:"online_num",stroke:"#8884d8",name:"Num Of Online Record Per Day"}),s.jsx(u,{type:"monotone",dataKey:"offline_num",stroke:"#82ca9d",name:"Num Of Offline Record Per Day"})]})})})]})]})})]})]})})}export{ws as default};
