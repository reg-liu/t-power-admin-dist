import{j as e,S as c,f as U}from"./index-pqUbyZ29.js";import{r as o}from"./vendor-react-BcJS7s_i.js";import{c as g}from"./commonService-AHgdGJdu.js";import{c as k}from"./cpMonitorService-3nrwruzV.js";import{c as ve}from"./chargepoint-wPlJlVYc.js";import Ne from"./detail-D5EqTVg_.js";import we from"./editConnector-BRYLADZQ.js";import ke from"./setChargeProfile-5e9wVk1n.js";import Ee from"./start-DeOsjmDh.js";import{F as E,i as r,K as Ie,w as u,x as D,P as C,y as K,j as Me,I as Be,D as F,z as De,s as z}from"./vendor-antd-B62eGpCx.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-CtEfXJzW.js";import"./LineChart-B3rQWP5V.js";import"./isEqual-Hc_6Fhhx.js";import"./vendor-charts-Cv5x1InZ.js";import"./index-Dj133iwh.js";const{Option:I}=u,q={1:"Online",2:"Offline",3:"Unknown"},G={1:"Available",2:"Unavailable",3:"Preparing",4:"Starting",5:"Stopping",6:"Charging",7:"Suspended EV",8:"Suspended EVSE",9:"Finishing",10:"Reserved",11:"Faulted",12:"Unknown"};function Qe(){const[l,x]=o.useState({page:1}),[y,H]=o.useState("name"),[p,T]=o.useState([]),[d,S]=o.useState([]),[O,J]=o.useState("list"),[Q,_]=o.useState(!1),[X,b]=o.useState(!1),[W,M]=o.useState(!1),[Y,v]=o.useState(!1),[Z,P]=o.useState(null),[N,ee]=o.useState(null),[se,$]=o.useState([]),[j,te]=o.useState([]),[ae,ne]=o.useState(0),[ie,h]=o.useState(0),[L,oe]=o.useState({}),[R,le]=o.useState(null);o.useEffect(()=>{const s=j.filter(t=>p.includes(t.key)).flatMap(t=>t.connectors.map(a=>a.key));S(s)},[p]);const re=()=>{const s=d.map(t=>{const[a,n]=t.split(g.rowKeySplit);return{charge_point_id:a,connector_id:n}});w(s,!0)},ce=()=>{const s=d.map(t=>{const[a,n]=t.split(g.rowKeySplit);return{charge_point_id:a,connector_id:n}});A(s,!0)},B=s=>{T(s)},de=s=>{if(d.includes(s.key)){const t=d.filter(a=>a!==s.key);S(t)}else S([...d,s.key])},me=()=>{p.length===j.length?B([]):B(j.map(s=>s.key))},pe=()=>{N?.status==="Charging"?_(!0):z.error("Only the Connector in Charging state supports this operation.")},he=[E.SELECTION_COLUMN,E.EXPAND_COLUMN,{title:"Charge Point",dataIndex:"id_tag",className:"bold",key:"id_tag",render:(s,t)=>e.jsx(r,{type:"link",onClick:()=>{P(t),M(!0)},children:s})},{title:"Status",dataIndex:"charge_point_status",key:"charge_point_status",render:s=>e.jsxs("div",{className:`status-item ${s.toLowerCase()}`,children:[e.jsx("div",{className:"point"}),e.jsx("span",{children:s})]})},{title:"SN",dataIndex:"sn",key:"sn"},{title:"Brand",dataIndex:"brand",key:"brand"},{title:"Brand Model",dataIndex:"brand_model",key:"brand_model"}],V=[{key:"0",label:e.jsx(r,{type:"link",className:" operation-row-item",icon:e.jsx(c,{icon:"AStart",size:"20"}),onClick:()=>v(!0),children:"Advance Start"})},{key:"1",label:e.jsx(r,{type:"link",icon:e.jsx(c,{icon:"Set",size:"20"}),onClick:()=>pe(),children:"Set Charge Profile"})},{key:"2",label:e.jsx(r,{type:"link",icon:e.jsx(c,{icon:"Edit",size:"20"}),onClick:()=>b(!0),children:"Edit Connector Status"})}],ue=s=>{const t=[{title:"ID",className:"bold",width:"160px",dataIndex:"name",key:"name"},{title:"Status",width:"240px",dataIndex:"status",key:"status",render:a=>e.jsx("div",{className:`status ${a.toLowerCase().replace(" ","_")}`,children:e.jsx("span",{children:a})})},{title:"Operation",width:"340px",key:"operation",render:(a,n)=>e.jsxs("div",{className:"operations end",children:[e.jsx(C,{title:"Confirm start?",placement:"bottom",okText:"Confirm",cancelText:"Cancel",onConfirm:()=>w(n),children:e.jsx(r,{type:"link",icon:e.jsx(c,{icon:"Start",size:"20"}),children:"Start"})}),e.jsx(C,{placement:"bottom",okText:"Confirm",cancelText:"Cancel",title:"Confirm stop?",onConfirm:()=>w(n),children:e.jsx(r,{type:"link",icon:e.jsx(c,{icon:"Stop",size:"20"}),children:"Stop"})}),e.jsx(F,{menu:{items:V},trigger:["click"],children:e.jsx("div",{children:e.jsx(r,{onClick:()=>ee(n),type:"link",icon:e.jsx(c,{icon:"Ellipsis",size:"20"})})})})]})}];return e.jsx(E,{columns:t,showHeader:!1,dataSource:s.connectors,pagination:!1,rowKey:"key",bordered:!0,rowSelection:{selectedRowKeys:d,onSelect:de}})},xe=e.jsxs(u,{value:y,onChange:H,style:{width:156},children:[e.jsx(I,{value:"name",children:"Charge Point"}),e.jsx(I,{value:"sn",children:"SN"})]}),je=s=>{const{expanded:t,onExpand:a,record:n}=s;return e.jsx("span",{onClick:m=>a(n,m),children:e.jsx(c,{icon:t?"Down":"Right",size:"17",color:"#d9d9d9",style:{marginTop:"-2px"}})})},w=async(s,t)=>{const a=t?s:[{charge_point_id:s.charge_point_id,connector_id:s.connector_id,mode:"default"}],n=await k.start({cp_id_connector_pairs:a});n?.code===200&&(z.success(n.message),h(Date.now()))},A=async(s,t)=>{const a=t?s:[{charge_point_id:s.charge_point_id,connector_id:s.connector_id}],n=await k.stop({cp_id_connector_pairs:a});n?.code===200&&(z.success(n.message),h(Date.now()))},Ce=()=>{h(Date.now())},fe=s=>{x({...l,page:s}),h(Date.now())},ge=async()=>{const{detail:s}=await g.getBrands(),t={},a={};s.forEach(n=>{t[n.brand]=n.id;const m=[];n.chargepointbrandmodel_set&&n.chargepointbrandmodel_set.forEach(i=>{m.push(i.brand_model)}),a[n.brand]=m}),le(t),oe(a)},ye=(s,t)=>{const a={},n={0:"Connector A",1:"Connector B",2:"Connector C",3:"Connector D",4:"Connector E",5:"Connector F",6:"Connector G",7:"Connector H",8:"Connector I",9:"Connector J"};return t.forEach(i=>{a[i.charge_point_id]={charge_point_status:q[i.charge_point_status],connector_statuses:i.connector_statuses.map((f,be)=>({key:`${i.charge_point_id}${g.rowKeySplit}${f.connector_id}`,name:n[`${be}`],charge_point_id:i.charge_point_id,connector_id:f.connector_id,status:G[f.status]}))}}),s.filter(i=>a[i.id]).map(i=>({key:`${i.id}${g.rowKeySplit}${i.id_tag}`,id:i.id,id_tag:i.id_tag,sn:i.sn,brand:i.brand_model.brand,brand_model:i.brand_model.brand_model,charge_point_status:a[i.id].charge_point_status,picture:i.brand_model.picture,connectors:a[i.id].connector_statuses}))},Se=()=>{x({}),h(Date.now())},_e=async()=>{const s={...l};R&&(s.brand_id=R[s.brand],delete s.brand,s.brand_model||delete s.brand_model);const t=await k.queryAll(s),{results:a,count:n}=t.detail,m=await k.getStatus(),i=ye(a||[],m.detail.results);te(i),$(i.map(f=>f.key)),ne(n)};return o.useEffect(()=>{_e()},[ie]),o.useEffect(()=>{ge(),h(Date.now())},[]),e.jsxs("div",{className:"main-content",children:[e.jsxs("div",{className:"search-area flex items-center justify-start",children:[e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"Enter"}),e.jsx(Ie,{addonBefore:xe,placeholder:y==="name"?"Charge Point":"SN",allowClear:!0,value:l[y],onChange:s=>x({...l,[y]:s.target.value})})]}),e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"Brand"}),e.jsx(u,{className:"w-full",placeholder:"Brand",allowClear:!0,value:l.brand,style:{width:"150px"},onChange:s=>{x({...l,brand:s,brand_model:void 0})},children:Object.keys(L).map(s=>e.jsx(u.Option,{value:s,children:s},s))})]}),e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"Brand Model"}),e.jsx(u,{className:"w-full",allowClear:!0,disabled:!l.brand,placeholder:"Brand Model",style:{width:"160px"},value:l.brand_model,onChange:s=>x({...l,brand_model:s}),children:l.brand&&L[l.brand].map(s=>e.jsx(u.Option,{value:s,children:s},s))})]}),e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"Charge Point Status"}),e.jsx(u,{className:"w-full",style:{width:"210px"},allowClear:!0,value:l.charge_point_status,placeholder:"Charge Point Status",onChange:s=>x({...l,charge_point_status:s}),children:Object.entries(q).map(([s,t])=>e.jsx(I,{value:s,children:`${t}`},s))})]}),e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"Connector Status"}),e.jsx(u,{className:"w-full",style:{width:"190px"},allowClear:!0,placeholder:"Connector Status",value:l.connector_status,onChange:s=>x({...l,connector_status:s}),children:Object.entries(G).map(([s,t])=>e.jsx(I,{value:s,children:`${t}`},s))})]}),e.jsx("div",{className:"search-btn",children:e.jsx(r,{icon:e.jsx(c,{icon:"Search",size:"20"}),type:"primary",onClick:Ce})}),e.jsx("div",{className:"search-btn clear",children:e.jsx(r,{icon:e.jsx(c,{icon:"Close",size:"24",color:"#999"}),type:"primary",onClick:Se})})]}),e.jsxs("div",{className:"operation-area flex items-center justify-start",children:[e.jsxs(D.Group,{className:"layout-switch",value:O,onChange:s=>J(s.target.value),children:[e.jsx(D.Button,{value:"list",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(U,{icon:"mynaui:list",size:20}),"List"]})}),e.jsx(D.Button,{value:"grid",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(U,{icon:"proicons:grid",size:20}),"Grid"]})})]}),e.jsx(C,{placement:"bottom",okText:"Confirm",cancelText:"Cancel",title:"Confirm Start?",onConfirm:()=>re(),children:e.jsx(r,{className:"ml-3 mr-3",disabled:d.length===0,icon:e.jsx(c,{icon:"Start",size:"20",color:d.length===0?"#999":"currentColor"}),children:"Bulk Start"})}),e.jsx(C,{placement:"bottom",okText:"Confirm",cancelText:"Cancel",title:"Confirm stop?",onConfirm:()=>ce(),children:e.jsx(r,{disabled:d.length===0,className:"mr-3",icon:e.jsx(c,{color:d.length===0?"#999":"currentColor",icon:"Stop",size:"20"}),children:"Bulk Stop"})})]}),O==="list"?e.jsx(E,{columns:he,dataSource:j,rowHoverable:!1,bordered:!0,rowKey:"key",pagination:!1,expandable:{expandedRowRender:ue,expandIcon:je,expandedRowKeys:se,onExpand:(s,t)=>{$(a=>s?[...a,t.key]:a.filter(n=>n!==t.key))}},rowSelection:{selectedRowKeys:p,onChange:B}}):e.jsxs("div",{className:"grid-wrapper",children:[e.jsx(K,{className:"check-all",checked:j.length===p.length,onChange:me}),e.jsx("div",{className:"grid",children:j.map(s=>e.jsx("div",{className:"grid-item",children:e.jsxs(Me,{children:[e.jsxs("div",{className:"grid-top with-image flex items-center",children:[e.jsx(K,{checked:p.includes(s.key),onChange:t=>{const a=t.target.checked?[...p,s.key]:p.filter(n=>n!==s.key);T(a)}}),e.jsx(Be,{src:ve,preview:!1,height:184,className:"entity-image object-cover"})]}),e.jsxs("div",{className:"grid-bottom monitor-bottom",children:[e.jsx("div",{className:"display-item",children:e.jsx(r,{type:"link",className:"detail-link",onClick:()=>{P(s),M(!0)},children:s.name})}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Status:"})," ",e.jsx("span",{className:"value",children:e.jsxs("div",{className:`status-item ${s.charge_point_status.toLowerCase().replace(" ","_")}`,children:[e.jsx("div",{className:"point"}),e.jsx("span",{children:s.charge_point_status})]})})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"SN:"})," ",e.jsx("span",{className:"value",children:s.sn})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Brand:"})," ",e.jsx("span",{className:"value",children:s.brand})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Brand Model:"})," ",e.jsx("span",{className:"value",children:s.brand_model})]}),s.charge_point_status!=="Offline"&&e.jsx("div",{className:"display-item  !mb-0 flex-col !items-start gap-2 !px-0",children:s.connectors.map(t=>e.jsxs("div",{className:"connector-wrapper w-full",children:[e.jsxs("div",{className:"connectors",children:[e.jsx(K,{checked:d.includes(t.key),onChange:a=>{const n=a.target.checked?[...d,t.key]:d.filter(m=>m!==t.key);S(n)}}),e.jsx("div",{className:"items flex-auto",children:e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:t.name})," ",e.jsx("span",{className:`value status ${t.status.toLowerCase().replace(" ","_")}`,children:t.status})]})})]}),e.jsx("div",{className:"operation-columns",children:e.jsxs("div",{className:"operation-row",children:[e.jsx(C,{title:"Confirm start?",placement:"bottom",okText:"Confirm",cancelText:"Cancel",onConfirm:()=>w(t),children:e.jsx(r,{type:"link",className:" operation-row-item",icon:e.jsx(c,{icon:"Start",size:"20"}),children:"Start"})}),e.jsx("div",{className:"split"}),e.jsx(C,{title:"Confirm stop?",placement:"bottom",okText:"Confirm",cancelText:"Cancel",onConfirm:()=>A(t),children:e.jsx(r,{className:"operation-row-item",type:"link",icon:e.jsx(c,{icon:"Stop",size:"20"}),children:"Stop"})}),e.jsx("div",{className:"split"}),e.jsx(F,{menu:{items:V},children:e.jsx("div",{className:"operation-row-item",children:e.jsx(r,{type:"link",icon:e.jsx(c,{icon:"Ellipsis",size:"20"})})})})]})})]},t.key))})]})]},s.key)}))})]}),e.jsx("div",{className:"mr-4 mt-4 flex justify-end",children:e.jsx(De,{total:ae,showQuickJumper:!0,onChange:fe})}),e.jsx(ke,{visible:Q,connector:N,onCancel:()=>_(!1),onConfirm:()=>{_(!1),h(Date.now())}}),e.jsx(we,{visible:X,connector:N,onCancel:()=>b(!1),onConfirm:()=>{b(!1)}}),W?e.jsx(Ne,{onCancel:()=>M(!1),chargePoint:Z,onStart:()=>v(!0),onSetChargeProfile:()=>_(!0),onEditConnector:()=>b(!0)}):null,e.jsx(Ee,{visible:Y,connector:N,onCancel:()=>v(!1),onConfirm:()=>{v(!1),h(Date.now())}})]})}export{Qe as default};
