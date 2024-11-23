import{j as e}from"./index-D2661MC7.js";import{r}from"./vendor-react-DcqtUZ_G.js";import $ from"./detail-BD1F_jSS.js";import K from"./editConnector-DCp-iRyD.js";import T from"./setChargeProfile-jVlavytV.js";import U from"./start-B6jm0XVR.js";import{I as x,w as s,k as t,P as z,Q as G,V as J,W as Q,z as C,E as H,F as L,H as I,l as W,K as _,X,s as O,J as q}from"./vendor-antd-7_-hIQNy.js";import"./vendor-ui-BASYQBt4.js";import"./vendor-utils-B0D_8pEH.js";import"./isEqual-0-1QZRPE.js";import"./vendor-charts-CCrp_OZH.js";const b=[{id:"1",name:"Chargepoint A",cp_sn:"CP001",brand:"Tesla",model:"Model S",charge_model:"AC",picture:"https://avatars.githubusercontent.com/u/64935023",connectors:[{id:"C001",status:"online",available:"available"},{id:"C002",status:"offline",available:"unavailable"}]},{id:"2",name:"Chargepoint B",cp_sn:"CP002",brand:"ChargePoint",model:"CP4000",charge_model:"DC",picture:"https://avatars.githubusercontent.com/u/64935023",connectors:[{id:"C003",status:"online",available:"charging"}]},{id:"3",name:"Chargepoint C",cp_sn:"CP003",brand:"ABB",model:"Terra 54",charge_model:"DC",picture:"https://avatars.githubusercontent.com/u/64935023",connectors:[{id:"C004",status:"unknown",available:"faulted"},{id:"C005",status:"online",available:"available"}]}];function ce(){const[n,o]=r.useState({}),[f,P]=r.useState("table"),[i,E]=r.useState([]),[A,S]=r.useState(!1),[M,h]=r.useState(!1),[R,u]=r.useState(!1),[F,m]=r.useState(!1),[j,p]=r.useState(null),V=[{title:"Picture",dataIndex:"picture",key:"picture",render:a=>e.jsx(_,{src:a,alt:"Chargepoint",width:50})},{title:"Name",dataIndex:"name",key:"name",render:(a,l)=>e.jsx(t,{type:"link",onClick:()=>k(l),children:a})},{title:"SN",dataIndex:"cp_sn",key:"cp_sn"},{title:"Brand",dataIndex:"brand",key:"brand"},{title:"Model",dataIndex:"model",key:"model"},{title:"Charge Model",dataIndex:"charge_model",key:"charge_model"}],D=a=>{const l=[{title:"ID",dataIndex:"id",key:"id"},{title:"Status",dataIndex:"status",key:"status"},{title:"Available",dataIndex:"available",key:"available"},{title:"Operation",key:"operation",render:(d,c)=>e.jsxs("span",{children:[e.jsx(t,{type:"link",onClick:()=>y(a),children:"Start"}),e.jsx(t,{type:"link",onClick:()=>g(a,c),children:"Stop"}),e.jsx(t,{type:"link",onClick:()=>N(a),children:"Set Charge Profile"}),e.jsx(t,{type:"link",onClick:()=>w(a),children:"Edit Connector Availability"})]})}];return e.jsx(I,{rowSelection:{type:"checkbox",selectedRowKeys:i,onChange:d=>v(d)},columns:l,dataSource:a.connectors,pagination:!1,rowKey:"id"})},B=()=>{O.success("Search performed")},k=a=>{p(a),S(!0)},y=(a,l)=>{p(a),m(!0)},g=(a,l)=>{q.confirm({title:"Confirm Stop",content:`Are you sure you want to stop charging for ${a.name} - Connector ${l.id}?`,onOk(){O.success("Stopped successfully")}})},N=(a,l)=>{p(a),h(!0)},w=(a,l)=>{p(a),u(!0)},v=a=>{E(a)};return e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"mb-6 grid grid-cols-5 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Name"}),e.jsx(x,{id:"name",placeholder:"Name",className:"mt-1",value:n.name,onChange:a=>o({...n,name:a.target.value})})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cp_sn",className:"block text-sm font-medium text-gray-700",children:"SN"}),e.jsx(x,{id:"cp_sn",placeholder:"SN",className:"mt-1",value:n.cp_sn,onChange:a=>o({...n,cp_sn:a.target.value})})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"brand",className:"block text-sm font-medium text-gray-700",children:"Brand"}),e.jsx(x,{id:"brand",placeholder:"Brand",className:"mt-1",value:n.brand,onChange:a=>o({...n,brand:a.target.value})})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"model",className:"block text-sm font-medium text-gray-700",children:"Model"}),e.jsx(x,{id:"model",placeholder:"Model",className:"mt-1",value:n.model,onChange:a=>o({...n,model:a.target.value})})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"charge_model",className:"block text-sm font-medium text-gray-700",children:"Charge Model"}),e.jsx(x,{id:"charge_model",placeholder:"Charge Model",className:"mt-1",value:n.charge_model,onChange:a=>o({...n,charge_model:a.target.value})})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"status",className:"block text-sm font-medium text-gray-700",children:"Connector Status"}),e.jsxs(s,{id:"status",placeholder:"Status",className:"mt-1 w-full",value:n.status,onChange:a=>o({...n,status:a}),children:[e.jsx(s.Option,{value:"online",children:"Online"}),e.jsx(s.Option,{value:"offline",children:"Offline"}),e.jsx(s.Option,{value:"unknown",children:"Unknown"})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"available",className:"block text-sm font-medium text-gray-700",children:"Connector Available"}),e.jsxs(s,{id:"available",placeholder:"Available",className:"mt-1 w-full",value:n.available,onChange:a=>o({...n,available:a}),children:[e.jsx(s.Option,{value:"available",children:"Available"}),e.jsx(s.Option,{value:"unavailable",children:"Unavailable"}),e.jsx(s.Option,{value:"preparing",children:"Preparing"}),e.jsx(s.Option,{value:"starting",children:"Starting"}),e.jsx(s.Option,{value:"stopping",children:"Stopping"}),e.jsx(s.Option,{value:"charging",children:"Charging"}),e.jsx(s.Option,{value:"suspended_ev",children:"Suspended EV"}),e.jsx(s.Option,{value:"suspended_evse",children:"Suspended EVSE"}),e.jsx(s.Option,{value:"finishing",children:"Finishing"}),e.jsx(s.Option,{value:"reserved",children:"Reserved"}),e.jsx(s.Option,{value:"faulted",children:"Faulted"}),e.jsx(s.Option,{value:"unknown",children:"Unknown"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"invisible block text-sm font-medium text-gray-700",children:"Search"}),e.jsx(t,{type:"primary",onClick:B,children:"Search"})]})]}),e.jsxs("div",{className:"mb-4 flex justify-between",children:[e.jsx("div",{children:i.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(t,{icon:e.jsx(z,{}),onClick:()=>m(!0),children:"Start"}),e.jsx(t,{icon:e.jsx(G,{}),onClick:()=>g(j,{id:i[0]}),children:"Stop"}),e.jsx(t,{icon:e.jsx(J,{}),onClick:()=>h(!0),children:"Set Charge Profile"}),e.jsx(t,{icon:e.jsx(Q,{}),onClick:()=>u(!0),children:"Edit Connector Availability"})]})}),e.jsx("div",{children:e.jsxs(C.Group,{value:f,onChange:a=>P(a.target.value),children:[e.jsxs(C.Button,{value:"table",children:[e.jsx(H,{})," List"]}),e.jsxs(C.Button,{value:"grid",children:[e.jsx(L,{})," Grid"]})]})})]}),f==="table"?e.jsx(I,{columns:V,expandable:{expandedRowRender:D},dataSource:b,rowKey:"id",pagination:{total:b.length,showSizeChanger:!0,showQuickJumper:!0,showTotal:a=>`Total ${a} items`}}):e.jsx("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",children:b.map(a=>e.jsxs(W,{children:[e.jsxs("div",{className:"flex items-start",children:[e.jsx(_,{src:a.picture,alt:"Chargepoint",width:100,className:"mr-4"}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold",children:e.jsx(t,{type:"link",onClick:()=>k(a),children:a.name})}),e.jsxs("p",{children:[e.jsx("strong",{children:"SN:"})," ",a.cp_sn]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Charge Model:"})," ",a.charge_model]})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsxs(t,{onClick:()=>{const l=a.connectors.map(c=>c.id),d=i.includes(l[0])?i.filter(c=>!l.includes(c)):[...i,...l];v(d)},children:[i.includes(a.connectors[0].id)?"Deselect":"Select"," All Connectors"]}),a.connectors.map(l=>e.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[e.jsx(X,{checked:i.includes(l.id),onChange:d=>v(d.target.checked?[...i,l.id]:i.filter(c=>c!==l.id))}),e.jsxs("span",{children:["ID: ",l.id]}),e.jsxs("span",{children:["Status: ",l.status]}),e.jsxs("span",{children:["Available: ",l.available]}),e.jsxs("span",{children:[e.jsx(t,{type:"link",onClick:()=>y(a),children:"Start"}),e.jsx(t,{type:"link",onClick:()=>g(a,l),children:"Stop"}),e.jsx(t,{type:"link",onClick:()=>N(a),children:"Set Charge Profile"}),e.jsx(t,{type:"link",onClick:()=>w(a),children:"Edit Connector Availability"})]})]},l.id))]})]},a.id))}),e.jsx(T,{visible:M,onCancel:()=>h(!1),onConfirm:a=>{h(!1)}}),e.jsx(K,{visible:R,onCancel:()=>u(!1),onConfirm:a=>{u(!1)}}),e.jsx($,{visible:A,onCancel:()=>S(!1),chargepoint:j,onStart:()=>m(!0),onStop:()=>g(j,{id:i[0]}),onSetChargeProfile:()=>h(!0),onEditConnector:()=>u(!0)}),e.jsx(U,{visible:F,onCancel:()=>m(!1),onConfirm:a=>{m(!1)}})]})}export{ce as default};
