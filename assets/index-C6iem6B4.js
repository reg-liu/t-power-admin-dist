import{j as e,S as i,f as B}from"./index-L59LL-oJ.js";import{r as l}from"./vendor-react-BcJS7s_i.js";import{c as Q}from"./chargepoint-wPlJlVYc.js";import q from"./detail-DPIc0J2r.js";import J from"./editConnector-EXTadxhm.js";import W from"./setChargeProfile-sqqVuGmT.js";import Z from"./start-EXYc6_bJ.js";import{F as g,k as t,I as ee,w as h,z as N,P as j,l as se,E as I,O as ne,D as A}from"./vendor-antd-C5sFxZgj.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-C8CVoVQY.js";import"./LineChart-DOyBIdWO.js";import"./isEqual-Hc_6Fhhx.js";import"./vendor-charts-Cv5x1InZ.js";import"./index-Dj133iwh.js";const{Option:n}=h,K={Tesla:["Model S","Model 3","Model X"],Nissan:["Nissan LEAF","Nissan Ariya","Nissan e-NV200"],BYD:["BYD Tang EV","BYD Qin EV","BYD Yuan EV"]},k=[{key:"1",name:"Charge Point 1",cp_sn:"CP001",brand:"Tesla",brand_model:"Model S",chargepoint_status:"Online",picture:"https://avatars.githubusercontent.com/u/64935023",connectors:[{key:"1-1",chargePointKey:"1",name:"Connector A",connector_id:"C001",status:"Available"},{key:"1-2",chargePointKey:"1",name:"Connector B",connector_id:"C002",status:"Charging"}]},{key:"2",name:"Charge Point 2",cp_sn:"CP002",brand:"Nissan",brand_model:"Nissan LEAF",chargepoint_status:"Offline",picture:"https://avatars.githubusercontent.com/u/64935023",connectors:[{key:"2-1",chargePointKey:"2",name:"Connector A",connector_id:"C003",status:"Unavailable"},{key:"2-2",chargePointKey:"2",name:"Connector B",connector_id:"C004",status:"Reserved"}]},{key:"3",name:"Charge Point 3",cp_sn:"CP003",brand:"BYD",brand_model:"BYD Tang EV",chargepoint_status:"Unknown",picture:"https://avatars.githubusercontent.com/u/64935023",connectors:[{key:"3-1",chargePointKey:"3",name:"Connector A",connector_id:"C005",status:"Faulted"},{key:"3-2",chargePointKey:"3",name:"Connector B",connector_id:"C006",status:"Unknown"}]},{key:"4",name:"Charge Point 4",cp_sn:"CP004",brand:"Tesla",brand_model:"Model S",chargepoint_status:"Online",picture:"https://avatars.githubusercontent.com/u/64935023",connectors:[{key:"4-1",chargePointKey:"1",name:"Connector A",connector_id:"C007",status:"Available"},{key:"4-2",chargePointKey:"1",name:"Connector B",connector_id:"C008",status:"Charging"}]}];function Ce(){const[r,m]=l.useState({}),[C,V]=l.useState("name"),[d,b]=l.useState([]),[c,S]=l.useState([]),[w,z]=l.useState("list"),[D,v]=l.useState(!1),[M,y]=l.useState(!1),[O,f]=l.useState(!1),[L,u]=l.useState(!1),[R,_]=l.useState(null),[P,T]=l.useState(null);l.useEffect(()=>{const s=k.filter(a=>d.includes(a.key)).flatMap(a=>a.connectors.map(o=>o.key));S(s)},[d]);const U=()=>{},x=s=>{},F=s=>{b(s)},Y=s=>{S(s)},G=[g.SELECTION_COLUMN,g.EXPAND_COLUMN,{title:"Name",dataIndex:"name",className:"bold",key:"name",render:(s,a)=>e.jsx(t,{type:"link",onClick:()=>{_(a),f(!0)},children:s})},{title:"SN",dataIndex:"cp_sn",key:"cp_sn"},{title:"Brand",dataIndex:"brand",key:"brand"},{title:"Brand Model",dataIndex:"brand_model",key:"brand_model"},{title:"Charge Point Status",dataIndex:"chargepoint_status",key:"chargepoint_status",render:s=>e.jsxs("div",{className:"status-item",children:[e.jsx("div",{className:s.toLowerCase()}),e.jsx("span",{children:s})]})}],E=[{key:"0",label:e.jsx(t,{type:"link",className:" operation-row-item",icon:e.jsx(i,{icon:"AStart",size:"20"}),onClick:()=>u(!0),children:"Advance Start"})},{key:"1",label:e.jsx(t,{type:"link",icon:e.jsx(i,{icon:"Set",size:"20"}),onClick:()=>v(!0),children:"Set Charge Profile"})},{key:"2",label:e.jsx(t,{type:"link",icon:e.jsx(i,{icon:"Edit",size:"20"}),onClick:()=>y(!0),children:"Edit Connector Status"})}],H=s=>{const a=[{title:"ID",className:"bold",width:"300px",dataIndex:"connector_id",key:"connector_id"},{title:"Status",width:"240px",dataIndex:"status",key:"status",render:o=>e.jsx("div",{className:`status ${o.toLowerCase()}`,children:e.jsx("span",{children:o})})},{title:"Operation",width:"340px",key:"operation",render:(o,p)=>e.jsxs("div",{className:"operations",children:[e.jsx(j,{title:"Are you sure to start?",onConfirm:()=>x(),children:e.jsx(t,{type:"link",icon:e.jsx(i,{icon:"Start",size:"20"}),children:"Start"})}),e.jsx(j,{title:"Are you sure to stop?",onConfirm:()=>x(),children:e.jsx(t,{type:"link",icon:e.jsx(i,{icon:"Stop",size:"20"}),children:"Stop"})}),e.jsx(A,{menu:{items:E},trigger:["click"],children:e.jsx("div",{children:e.jsx(t,{onClick:()=>T(p),type:"link",icon:e.jsx(i,{icon:"Ellipsis",size:"20"})})})})]})}];return e.jsx(g,{columns:a,showHeader:!1,dataSource:s.connectors,pagination:!1,bordered:!0,rowSelection:{selectedRowKeys:c,onChange:Y}})},X=e.jsxs(h,{value:C,onChange:V,style:{width:156},children:[e.jsx(n,{value:"name",children:"Charge Point"}),e.jsx(n,{value:"sn",children:"SN"})]});return e.jsxs("div",{className:"main-content",children:[e.jsxs("div",{className:"search-area flex items-center justify-start",children:[e.jsx("div",{className:"search-item",children:e.jsx(ee,{addonBefore:X,placeholder:C==="name"?"Charge Point":"SN",allowClear:!0,value:r[C],onChange:s=>m({...r,[C]:s.target.value})})}),e.jsx("div",{className:"search-item",children:e.jsx(h,{className:"w-full",placeholder:"Brand",value:r.brand,style:{width:"150px"},onChange:s=>{m({...r,brand:s,brand_model:void 0})},children:Object.keys(K).map(s=>e.jsx(n,{value:s,children:s},s))})}),e.jsx("div",{className:"search-item",children:e.jsx(h,{className:"w-full",placeholder:"Brand Model",style:{width:"160px"},value:r.brand_model,onChange:s=>m({...r,brand_model:s}),children:r.brand&&K[r.brand].map(s=>e.jsx(n,{value:s,children:s},s))})}),e.jsx("div",{className:"search-item",children:e.jsxs(h,{className:"w-full",style:{width:"210px"},placeholder:"Charge Point Status",onChange:s=>m({...r,chargepoint_status:s}),children:[e.jsx(n,{value:"online",children:"Online"}),e.jsx(n,{value:"offline",children:"Offline"}),e.jsx(n,{value:"unknown",children:"Unknown"})]})}),e.jsx("div",{className:"search-item",children:e.jsxs(h,{className:"w-full",style:{width:"190px"},placeholder:"Connector Status",onChange:s=>m({...r,connector_status:s}),children:[e.jsx(n,{value:"available",children:"Available"}),e.jsx(n,{value:"unavailable",children:"Unavailable"}),e.jsx(n,{value:"preparing",children:"Preparing"}),e.jsx(n,{value:"starting",children:"Starting"}),e.jsx(n,{value:"stopping",children:"Stopping"}),e.jsx(n,{value:"charging",children:"Charging"}),e.jsx(n,{value:"suspended_ev",children:"Suspended EV"}),e.jsx(n,{value:"suspended_evse",children:"Suspended EVSE"}),e.jsx(n,{value:"finishing",children:"Finishing"}),e.jsx(n,{value:"reserved",children:"Reserved"}),e.jsx(n,{value:"faulted",children:"Faulted"}),e.jsx(n,{value:"unknown",children:"Unknown"})]})}),e.jsx("div",{className:"search-btn",children:e.jsx(t,{icon:e.jsx(i,{icon:"Search",size:"20"}),type:"primary",onClick:U})})]}),e.jsxs("div",{className:"operation-area flex items-center justify-start",children:[e.jsxs(N.Group,{className:"layout-switch",value:w,onChange:s=>z(s.target.value),children:[e.jsx(N.Button,{value:"list",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(B,{icon:"mynaui:list",size:20}),"List"]})}),e.jsx(N.Button,{value:"grid",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(B,{icon:"proicons:grid",size:20}),"Grid"]})})]}),e.jsx(j,{title:"Are you sure to Start?",onConfirm:()=>x(),children:e.jsx(t,{className:"ml-3 mr-3",disabled:c.length===0,icon:e.jsx(i,{icon:"Start",size:"20",color:c.length===0?"#999":"currentColor"}),children:"Bulk Start"})}),e.jsx(j,{title:"Are you sure to stop?",onConfirm:()=>x(),children:e.jsx(t,{disabled:c.length===0,className:"mr-3",icon:e.jsx(i,{color:c.length===0?"#999":"currentColor",icon:"Stop",size:"20"}),children:"Bulk Stop"})})]}),w==="list"?e.jsx(g,{columns:G,dataSource:k,rowHoverable:!1,bordered:!0,expandable:{expandedRowRender:H,defaultExpandedRowKeys:k.map(s=>s.key)},rowSelection:{selectedRowKeys:d,onChange:F}}):e.jsx("div",{className:"grid",children:k.map(s=>e.jsx("div",{className:"grid-item",children:e.jsxs(se,{children:[e.jsxs("div",{className:"grid-top with-image flex items-center",children:[e.jsx(I,{checked:d.includes(s.key),onChange:a=>{const o=a.target.checked?[...d,s.key]:d.filter(p=>p!==s.key);b(o)}}),e.jsx(ne,{src:Q,preview:!1,height:184,className:"entity-image object-cover"})]}),e.jsxs("div",{className:"grid-bottom monitor-bottom",children:[e.jsx("div",{className:"display-item",children:e.jsx(t,{type:"link",className:"detail-link",onClick:()=>{_(s),f(!0)},children:s.name})}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Status:"})," ",e.jsx("span",{className:"value",children:e.jsxs("div",{className:"status-item",children:[e.jsx("div",{className:s.chargepoint_status.toLowerCase()}),e.jsx("span",{children:s.chargepoint_status})]})})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"SN:"})," ",e.jsx("span",{className:"value",children:s.cp_sn})]}),e.jsx("div",{className:"display-item  !mb-0 flex-col !items-start gap-2 !px-0",children:s.connectors.map(a=>e.jsxs("div",{className:"connector-wrapper w-full",children:[e.jsxs("div",{className:"connectors",children:[e.jsx(I,{checked:c.includes(a.key),onChange:o=>{const p=o.target.checked?[...c,a.key]:c.filter($=>$!==a.key);S(p)}}),e.jsx("div",{className:"items flex-auto",children:e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:a.connector_id})," ",e.jsx("span",{className:`value status ${a.status.toLowerCase()}`,children:a.status})]})})]}),e.jsx("div",{className:"operation-columns",children:e.jsxs("div",{className:"operation-row",children:[e.jsx(t,{type:"link",className:" operation-row-item",icon:e.jsx(i,{icon:"Start",size:"20"}),onClick:()=>u(!0),children:"Start"}),e.jsx("div",{className:"split"}),e.jsx(j,{title:"Are you sure to stop?",onConfirm:()=>x(),children:e.jsx(t,{className:"operation-row-item",type:"link",icon:e.jsx(i,{icon:"Stop",size:"20"}),children:"Stop"})}),e.jsx("div",{className:"split"}),e.jsx(A,{menu:{items:E},children:e.jsx("div",{className:"operation-row-item",children:e.jsx(t,{type:"link",icon:e.jsx(i,{icon:"Ellipsis",size:"20"})})})})]})})]},a.key))})]})]},s.key)}))}),e.jsx(W,{visible:D,connector:P,onCancel:()=>v(!1),onConfirm:()=>{v(!1)}}),e.jsx(J,{visible:M,onCancel:()=>y(!1),onConfirm:s=>{y(!1)}}),e.jsx(q,{visible:O,onCancel:()=>f(!1),chargePoint:R,onStart:()=>u(!0),onSetChargeProfile:()=>v(!0),onEditConnector:()=>y(!0)}),e.jsx(Z,{visible:L,connector:P,onCancel:()=>u(!1),onConfirm:()=>{u(!1)}})]})}export{Ce as default};
