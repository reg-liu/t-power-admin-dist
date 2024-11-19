import{j as e}from"./index-CYNmGjvu.js";import{r as o}from"./vendor-react-DcqtUZ_G.js";import B from"./detail-XDjiSJTS.js";import V from"./editConnector-Bj4qQffs.js";import z from"./setChargeProfile-nYeGBfyt.js";import{I as x,w as t,k as n,x as K,P as U,Q as T,V as G,W as J,X as Q,z as v,E as W,F as X,H as Y,l as H,Y as L,K as O,s as r,J as f}from"./vendor-antd-OFsw8wV_.js";import"./vendor-ui-BASYQBt4.js";import"./vendor-utils-Cfno4lyo.js";const b=[{id:"1",name:"Chargepoint A",cp_sn:"CP001",brand:"Brand X",model:"Model 1",charge_model:"AC",connectors:[{name:"Connector 1",status:"Available"},{name:"Connector 2",status:"Charging"}],picture:"https://avatars.githubusercontent.com/u/64935023",status:"Online"},{id:"2",name:"Chargepoint B",cp_sn:"CP002",brand:"Brand Y",model:"Model 2",charge_model:"DC",connectors:[{name:"Connector 1",status:"Unavailable"},{name:"Connector 2",status:"Available"}],picture:"https://avatars.githubusercontent.com/u/64935023",status:"Offline"},{id:"3",name:"Chargepoint C",cp_sn:"CP003",brand:"Brand Z",model:"Model 3",charge_model:"AC/DC",connectors:[{name:"Connector 1",status:"Charging"},{name:"Connector 2",status:"Reserved"}],picture:"https://avatars.githubusercontent.com/u/64935023",status:"Online"},{id:"4",name:"Chargepoint D",cp_sn:"CP004",brand:"Brand W",model:"Model 4",charge_model:"AC",connectors:[{name:"Connector 1",status:"Available"},{name:"Connector 2",status:"Faulted"}],picture:"https://avatars.githubusercontent.com/u/64935023",status:"Unknown"}];function oe(){const[a,i]=o.useState({}),[S,I]=o.useState("table"),[c,k]=o.useState([]),[P,d]=o.useState(!1),[M,h]=o.useState(!1),[R,y]=o.useState(!1),[A,j]=o.useState(null),E=[{title:"Picture",dataIndex:"picture",key:"picture",render:s=>e.jsx(O,{src:s,alt:"Chargepoint",width:50,height:50})},{title:"Name",dataIndex:"name",key:"name",render:(s,l)=>e.jsx(n,{type:"link",onClick:()=>_(l),children:s})},{title:"SN",dataIndex:"cp_sn",key:"cp_sn"},{title:"Charge Model",dataIndex:"charge_model",key:"charge_model"},{title:"Point Status",dataIndex:"connectors",key:"connectors",render:s=>e.jsx("div",{children:s.map((l,m)=>e.jsx("div",{children:`${l.name}: ${l.status}`},m))})},{title:"Operation",key:"operation",render:(s,l)=>e.jsxs("div",{className:"space-x-2",children:[e.jsx(n,{type:"link",onClick:()=>p(),children:"Start"}),e.jsx(n,{type:"link",onClick:()=>g(),children:"Stop"}),e.jsx(n,{type:"link",onClick:()=>N(l),children:"Set Charge Profile"}),e.jsx(n,{type:"link",onClick:()=>w(l),children:"Edit Connector Availability"}),e.jsx(n,{type:"link",danger:!0,onClick:()=>C(),children:"Delete"})]})}],D=()=>{r.success("Search performed")},C=s=>{f.confirm({title:"Are you sure you want to delete this chargepoint?",onOk(){r.success("Chargepoint deleted")}})},p=s=>{f.confirm({title:"Are you sure you want to start this chargepoint?",onOk(){r.success("Chargepoint started")}})},g=s=>{f.confirm({title:"Are you sure you want to stop this chargepoint?",onOk(){r.success("Chargepoint stopped")}})},N=s=>{s&&j(s),d(!0)},w=s=>{j(s),h(!0)},_=s=>{j(s),y(!0)},F={selectedRowKeys:c,onChange:s=>{k(s)}},u=c.length>0;return e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"mb-6 grid grid-cols-5 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Name"}),e.jsx(x,{id:"name",placeholder:"Name",className:"mt-1",value:a.name,onChange:s=>i({...a,name:s.target.value})})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cp_sn",className:"block text-sm font-medium text-gray-700",children:"SN"}),e.jsx(x,{id:"cp_sn",placeholder:"SN",className:"mt-1",value:a.cp_sn,onChange:s=>i({...a,cp_sn:s.target.value})})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"brand",className:"block text-sm font-medium text-gray-700",children:"Brand"}),e.jsx(x,{id:"brand",placeholder:"Brand",className:"mt-1",value:a.brand,onChange:s=>i({...a,brand:s.target.value})})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"model",className:"block text-sm font-medium text-gray-700",children:"Model"}),e.jsx(x,{id:"model",placeholder:"Model",className:"mt-1",value:a.model,onChange:s=>i({...a,model:s.target.value})})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"charge_model",className:"block text-sm font-medium text-gray-700",children:"Charge Model"}),e.jsx(x,{id:"charge_model",placeholder:"Charge Model",className:"mt-1",value:a.charge_model,onChange:s=>i({...a,charge_model:s.target.value})})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"status",className:"block text-sm font-medium text-gray-700",children:"Status"}),e.jsxs(t,{id:"status",placeholder:"Status",className:"mt-1 w-full",value:a.status,onChange:s=>i({...a,status:s}),children:[e.jsx(t.Option,{value:"online",children:"Online"}),e.jsx(t.Option,{value:"offline",children:"Offline"}),e.jsx(t.Option,{value:"unknown",children:"Unknown"})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"connector_status",className:"block text-sm font-medium text-gray-700",children:"Connector Status"}),e.jsxs(t,{id:"connector_status",placeholder:"Connector Status",className:"mt-1 w-full",value:a.connector_status,onChange:s=>i({...a,connector_status:s}),children:[e.jsx(t.Option,{value:"available",children:"Available"}),e.jsx(t.Option,{value:"unavailable",children:"Unavailable"}),e.jsx(t.Option,{value:"preparing",children:"Preparing"}),e.jsx(t.Option,{value:"starting",children:"Starting"}),e.jsx(t.Option,{value:"stopping",children:"Stopping"}),e.jsx(t.Option,{value:"charging",children:"Charging"}),e.jsx(t.Option,{value:"suspended_ev",children:"Suspended EV"}),e.jsx(t.Option,{value:"suspended_evse",children:"Suspended EVSE"}),e.jsx(t.Option,{value:"finishing",children:"Finishing"}),e.jsx(t.Option,{value:"reserved",children:"Reserved"}),e.jsx(t.Option,{value:"faulted",children:"Faulted"}),e.jsx(t.Option,{value:"unknown",children:"Unknown"})]})]}),e.jsx("div",{className:"flex items-end",children:e.jsx(n,{type:"primary",icon:e.jsx(K,{}),onClick:D,children:"Search"})})]}),e.jsxs("div",{className:"mb-4 flex justify-between",children:[e.jsxs("div",{className:"space-x-2",children:[e.jsx(n,{icon:e.jsx(U,{}),onClick:()=>C(),disabled:!u,children:"Delete"}),e.jsx(n,{icon:e.jsx(T,{}),onClick:()=>p(),disabled:!u,children:"Start"}),e.jsx(n,{icon:e.jsx(G,{}),onClick:()=>g(),disabled:!u,children:"Stop"}),e.jsx(n,{icon:e.jsx(J,{}),onClick:()=>d(!0),disabled:!u,children:"Set Charge Profile"}),e.jsx(n,{icon:e.jsx(Q,{}),onClick:()=>h(!0),disabled:!u,children:"Edit Connector Availability"})]}),e.jsxs(v.Group,{value:S,onChange:s=>I(s.target.value),children:[e.jsxs(v.Button,{value:"table",children:[e.jsx(W,{})," List"]}),e.jsxs(v.Button,{value:"grid",children:[e.jsx(X,{})," Grid"]})]})]}),S==="table"?e.jsx(Y,{rowSelection:F,columns:E,dataSource:b,rowKey:"id",pagination:{total:b.length,showSizeChanger:!0,showQuickJumper:!0,showTotal:s=>`Total ${s} items`}}):e.jsx("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",children:b.map(s=>e.jsx(H,{className:"flex",children:e.jsxs("div",{className:"flex items-start",children:[e.jsx(L,{checked:c.includes(s.id),onChange:l=>{const m=l.target.checked?[...c,s.id]:c.filter($=>$!==s.id);k(m)}}),e.jsx(O,{src:s.picture,alt:s.name,width:50,height:50,className:"ml-2"}),e.jsxs("div",{className:"ml-4 flex-grow",children:[e.jsx("h3",{className:"text-lg font-semibold",children:e.jsx(n,{type:"link",onClick:()=>_(s),children:s.name})}),e.jsxs("p",{children:[e.jsx("strong",{children:"SN:"})," ",s.cp_sn]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Brand:"})," ",s.brand]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Model:"})," ",s.model]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Charge Model:"})," ",s.charge_model]}),e.jsx("p",{children:e.jsx("strong",{children:"Point Status:"})}),s.connectors.map((l,m)=>e.jsx("p",{children:`${l.name}: ${l.status}`},m)),e.jsxs("div",{className:"mt-2 space-x-2",children:[e.jsx(n,{size:"small",onClick:()=>p(),children:"Start"}),e.jsx(n,{size:"small",onClick:()=>g(),children:"Stop"}),e.jsx(n,{size:"small",onClick:()=>N(s),children:"Set Charge Profile"}),e.jsx(n,{size:"small",onClick:()=>w(s),children:"Edit Connector Availability"}),e.jsx(n,{size:"small",danger:!0,onClick:()=>C(),children:"Delete"})]})]})]})},s.id))}),e.jsx(z,{visible:P,onCancel:()=>d(!1),onConfirm:s=>{r.success("Charge profile set"),d(!1)}}),e.jsx(V,{visible:M,onCancel:()=>h(!1),onConfirm:s=>{r.success("Connector availability updated"),h(!1)}}),e.jsx(B,{visible:R,onCancel:()=>y(!1),chargepoint:A,onStart:()=>p(),onStop:()=>g(),onSetChargeProfile:()=>d(!0),onEditConnector:()=>h(!0)})]})}export{oe as default};
