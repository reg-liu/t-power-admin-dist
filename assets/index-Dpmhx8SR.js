import{f as L,j as e}from"./index-DloVt6EI.js";import{r}from"./vendor-react-BcJS7s_i.js";import z from"./detail-T4_sUkiP.js";import G from"./editConnector-CO-GLBvd.js";import Q from"./setChargeProfile-C53YN2C4.js";import X from"./start-Bm6y7Ukn.js";import{I,w as g,k as t,W as b,P as j,X as p,Y as k,Z as S,z as N,H as A,l as J,N as W}from"./vendor-antd-DouGSysN.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-Cpch6Ee7.js";import"./LineChart-BI6ffp6z.js";import"./isEqual-Hc_6Fhhx.js";import"./vendor-charts-Cv5x1InZ.js";import"./index-Dj133iwh.js";const{Option:s}=g,B={Tesla:["Model S","Model 3","Model X"],Nissan:["Nissan LEAF","Nissan Ariya","Nissan e-NV200"],BYD:["BYD Tang EV","BYD Qin EV","BYD Yuan EV"]},C=[{key:"1",name:"ChargePoint 1",cp_sn:"CP001",brand:"Tesla",brand_model:"Model S",chargepoint_status:"Online",picture:"https://avatars.githubusercontent.com/u/64935023",connectors:[{key:"1-1",chargePointKey:"1",name:"Connector A",connector_id:"C001",status:"Available"},{key:"1-2",chargePointKey:"1",name:"Connector B",connector_id:"C002",status:"Charging"}]},{key:"2",name:"ChargePoint 2",cp_sn:"CP002",brand:"Nissan",brand_model:"Nissan LEAF",chargepoint_status:"Offline",picture:"https://avatars.githubusercontent.com/u/64935023",connectors:[{key:"2-1",chargePointKey:"2",name:"Connector A",connector_id:"C003",status:"Unavailable"},{key:"2-2",chargePointKey:"2",name:"Connector B",connector_id:"C004",status:"Reserved"}]},{key:"3",name:"ChargePoint 3",cp_sn:"CP003",brand:"BYD",brand_model:"BYD Tang EV",chargepoint_status:"Unknown",picture:"https://avatars.githubusercontent.com/u/64935023",connectors:[{key:"3-1",chargePointKey:"3",name:"Connector A",connector_id:"C005",status:"Faulted"},{key:"3-2",chargePointKey:"3",name:"Connector B",connector_id:"C006",status:"Unknown"}]}];function he(){const[i,l]=r.useState({brand:"",brand_model:""}),[o,w]=r.useState([]),[u,v]=r.useState([]),[_,E]=r.useState("list"),[R,c]=r.useState(!1),[K,d]=r.useState(!1),[V,y]=r.useState(!1),[M,h]=r.useState(!1),[D,P]=r.useState(null),F=L();r.useEffect(()=>{const n=C.filter(a=>o.includes(a.key)).flatMap(a=>a.connectors.map(x=>x.key));v(n)},[o]);const O=()=>{},m=n=>{},Y=n=>{w(n)},T=n=>{v(n)},U=[{title:"Name",dataIndex:"name",key:"name",render:(n,a)=>e.jsx(t,{type:"link",onClick:()=>{P(a),y(!0)},children:n})},{title:"SN",dataIndex:"cp_sn",key:"cp_sn"},{title:"Brand",dataIndex:"brand",key:"brand"},{title:"Brand Model",dataIndex:"brand_model",key:"brand_model"},{title:"ChargePoint Status",dataIndex:"chargepoint_status",key:"chargepoint_status"}],$=n=>{const a=[{title:"ID",dataIndex:"connector_id",key:"connector_id"},{title:"Status",dataIndex:"status",key:"status"},{title:"Operation",key:"operation",render:()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{type:"link",icon:e.jsx(b,{}),onClick:()=>h(!0),children:"Start"}),e.jsx(j,{title:"Are you sure to stop?",onConfirm:()=>m(),children:e.jsx(t,{type:"link",icon:e.jsx(p,{}),children:"Stop"})}),e.jsx(t,{type:"link",icon:e.jsx(k,{}),onClick:()=>c(!0),children:"Set Charge Profile"}),e.jsx(t,{type:"link",icon:e.jsx(S,{}),onClick:()=>d(!0),children:"Edit Connector Availability"})]})}];return e.jsx(A,{columns:a,showHeader:!1,dataSource:n.connectors,pagination:!1,rowSelection:{selectedRowKeys:u,onChange:T}})};return e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"mb-6 flex flex-wrap",children:[e.jsxs("div",{className:"mb-2 w-1/5 pr-2",children:[e.jsx("div",{children:"Name"}),e.jsx(I,{placeholder:"Name",onChange:n=>l({...i,name:n.target.value})})]}),e.jsxs("div",{className:"mb-2 w-1/5 pr-2",children:[e.jsx("div",{children:"SN"}),e.jsx(I,{placeholder:"SN",onChange:n=>l({...i,cp_sn:n.target.value})})]}),e.jsxs("div",{className:"mb-2 w-1/5 pr-2",children:[e.jsx("div",{children:"Brand"}),e.jsxs(g,{className:"w-full",placeholder:"Brand",value:i.brand,onChange:n=>{l({...i,brand:n,brand_model:void 0})},children:[e.jsx(s,{value:"",children:"All"}),Object.keys(B).map(n=>e.jsx(s,{value:n,children:n},n))]})]}),e.jsxs("div",{className:"mb-2 w-1/5 pr-2",children:[e.jsx("div",{children:"Brand Model"}),e.jsxs(g,{className:"w-full",placeholder:"Brand Model",value:i.brand,disabled:!i.brand,onChange:n=>l({...i,brand_model:n}),children:[e.jsx(s,{value:"",children:"All"}),i.brand&&B[i.brand].map(n=>e.jsx(s,{value:n,children:n},n))]})]}),e.jsxs("div",{className:"mb-2 w-1/5 pr-2",children:[e.jsx("div",{children:"ChargePoint Status"}),e.jsxs(g,{className:"w-full",placeholder:"ChargePoint Status",onChange:n=>l({...i,chargepoint_status:n}),children:[e.jsx(s,{value:"online",children:"Online"}),e.jsx(s,{value:"offline",children:"Offline"}),e.jsx(s,{value:"unknown",children:"Unknown"})]})]}),e.jsxs("div",{className:"mb-2 w-1/5 pr-2",children:[e.jsx("div",{children:"Connector Status"}),e.jsxs(g,{className:"w-full",placeholder:"Connector Status",onChange:n=>l({...i,connector_status:n}),children:[e.jsx(s,{value:"available",children:"Available"}),e.jsx(s,{value:"unavailable",children:"Unavailable"}),e.jsx(s,{value:"preparing",children:"Preparing"}),e.jsx(s,{value:"starting",children:"Starting"}),e.jsx(s,{value:"stopping",children:"Stopping"}),e.jsx(s,{value:"charging",children:"Charging"}),e.jsx(s,{value:"suspended_ev",children:"Suspended EV"}),e.jsx(s,{value:"suspended_evse",children:"Suspended EVSE"}),e.jsx(s,{value:"finishing",children:"Finishing"}),e.jsx(s,{value:"reserved",children:"Reserved"}),e.jsx(s,{value:"faulted",children:"Faulted"}),e.jsx(s,{value:"unknown",children:"Unknown"})]})]}),e.jsxs("div",{className:"w-1/5",children:[e.jsx("label",{className:"invisible block text-sm font-medium text-gray-700",children:"Search"}),e.jsx(t,{type:"primary",onClick:O,children:"Search"})]})]}),e.jsxs("div",{className:"mb-6 flex items-center justify-between",children:[e.jsx("div",{children:u.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(t,{className:"mr-2",icon:e.jsx(b,{}),onClick:()=>h(!0),children:"Start"}),e.jsx(j,{title:"Are you sure to stop?",onConfirm:()=>m(),children:e.jsx(t,{className:"mr-2",icon:e.jsx(p,{}),children:"Stop"})}),e.jsx(t,{className:"mr-2",icon:e.jsx(k,{}),onClick:()=>c(!0),children:"Set Charge Profile"}),e.jsx(t,{className:"mr-2",icon:e.jsx(S,{}),onClick:()=>d(!0),children:"Edit Connector Availability"}),e.jsxs(e.Fragment,{children:[e.jsx(j,{title:"Are you sure to remotely reset hardware?",onConfirm:()=>m(),children:e.jsx(t,{className:"mr-2",icon:e.jsx(p,{}),children:"Remotely Reset Hardware"})}),e.jsx(j,{title:"Are you sure to remotely reset software?",onConfirm:()=>m(),children:e.jsx(t,{className:"mr-2",icon:e.jsx(p,{}),children:"Remotely Reset Software"})})]})]})}),e.jsxs(N.Group,{value:_,onChange:n=>E(n.target.value),children:[e.jsx(N.Button,{value:"list",children:"List"}),e.jsx(N.Button,{value:"grid",children:"Grid"})]})]}),_==="list"?e.jsx(A,{columns:U,dataSource:C,expandable:{expandedRowRender:$,defaultExpandedRowKeys:C.map(n=>n.key)},rowSelection:{selectedRowKeys:o,onChange:Y},pagination:{total:C.length,showSizeChanger:!0,showQuickJumper:!0,showTotal:n=>`Total ${n} items`}}):e.jsx("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",children:C.map(n=>e.jsxs(J,{className:"mb-4",children:[e.jsx("div",{className:"mb-4 flex items-center",children:e.jsx("input",{type:"checkbox",checked:o.includes(n.key),onChange:a=>{const x=a.target.checked?[...o,n.key]:o.filter(f=>f!==n.key);w(x)}})}),e.jsxs("div",{className:"flex",children:[e.jsx(W,{src:n.picture,width:64,height:64}),e.jsxs("div",{className:"ml-4",children:[e.jsx("h3",{children:e.jsx(t,{type:"link",onClick:()=>{P(n),y(!0)},children:n.name})}),e.jsxs("p",{children:["SN: ",n.cp_sn]}),e.jsxs("p",{children:["Brand: ",n.brand]}),e.jsxs("p",{children:["Model: ",n.brand_model]})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h4",{children:"Connectors:"}),n.connectors.map(a=>e.jsxs("div",{className:"mt-2 flex items-center justify-between",children:[e.jsx("input",{type:"checkbox",checked:u.includes(a.key),onChange:x=>{const f=x.target.checked?[...u,a.key]:u.filter(H=>H!==a.key);v(f)}}),e.jsxs("span",{children:["ID: ",a.connector_id]}),e.jsxs("span",{children:["Status: ",a.status]}),e.jsxs("div",{children:[e.jsx(t,{type:"link",icon:e.jsx(b,{}),onClick:()=>h(!0),children:"Start"}),e.jsx(j,{title:"Are you sure to stop?",onConfirm:()=>m(),children:e.jsx(t,{type:"link",icon:e.jsx(p,{}),children:"Stop"})}),e.jsx(t,{type:"link",icon:e.jsx(k,{}),onClick:()=>c(!0),children:"Set Charge Profile"}),e.jsx(t,{type:"link",icon:e.jsx(S,{}),onClick:()=>d(!0),children:"Edit Connector Availability"})]})]},a.key))]})]},n.key))}),e.jsx(Q,{visible:R,onCancel:()=>c(!1),onConfirm:()=>{c(!1)}}),e.jsx(G,{visible:K,onCancel:()=>d(!1),onConfirm:n=>{d(!1)}}),e.jsx(z,{visible:V,onCancel:()=>y(!1),chargePoint:D,onStart:()=>h(!0),onSetChargeProfile:()=>c(!0),onEditConnector:()=>d(!0),isAdmin:F}),e.jsx(X,{visible:M,onCancel:()=>h(!1),onConfirm:()=>{h(!1)}})]})}export{he as default};