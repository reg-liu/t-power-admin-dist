import{j as e,S as c,f as H}from"./index-B0WWVFBn.js";import{r as o}from"./vendor-react-BcJS7s_i.js";import{c as f}from"./commonService-9aZz8NBw.js";import{c as k}from"./cpMonitorService-7eD3BGUJ.js";import{c as we}from"./chargepoint-wPlJlVYc.js";import ke from"./detail-ygNRa-0b.js";import Ee from"./editConnector-BXiBQ7xy.js";import Ie from"./setChargeProfile-BL0zTrnd.js";import Me from"./start-lvl3T11P.js";import{F as E,i as r,K as De,w as u,x as P,P as C,y as O,j as Be,I as Ke,D as J,z as ze,s as $}from"./vendor-antd-DmtkV1Ch.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-BKiv1F2M.js";import"./LineChart-CMheHx8v.js";import"./isEqual-Hc_6Fhhx.js";import"./vendor-charts-Cv5x1InZ.js";import"./index-Dj133iwh.js";const{Option:I}=u,Q={1:"Online",2:"Offline",3:"Unknown"},X={1:"Available",2:"Unavailable",3:"Preparing",4:"Starting",5:"Stopping",6:"Charging",7:"Suspended EV",8:"Suspended EVSE",9:"Finishing",10:"Reserved",11:"Faulted",12:"Unknown"};function We(){const[l,x]=o.useState({page:1}),[g,W]=o.useState("id_tag"),[h,L]=o.useState([]),[d,y]=o.useState([]),[R,Y]=o.useState("list"),[Z,_]=o.useState(!1),[ee,S]=o.useState(!1),[se,M]=o.useState(!1),[te,b]=o.useState(!1),[D,v]=o.useState(null),[N,w]=o.useState(null),[ae,V]=o.useState([]),[j,ne]=o.useState([]),[ie,A]=o.useState(!1),[oe,le]=o.useState(0),[U,p]=o.useState(0),[F,re]=o.useState({}),[q,ce]=o.useState(null);o.useEffect(()=>{const s=j.filter(t=>h.includes(t.key)).flatMap(t=>t.connectors.map(a=>a.key));y(s)},[h]);const de=()=>{const s=d.map(t=>{const[a,n]=t.split(f.rowKeySplit);return{charge_point_id:a,connector_id:n}});K(s,!0)},me=()=>{const s=d.map(t=>{const[a,n]=t.split(f.rowKeySplit);return{charge_point_id:a,connector_id:n}});z(s,!0)},B=s=>{L(s)},pe=s=>{if(d.includes(s.key)){const t=d.filter(a=>a!==s.key);y(t)}else y([...d,s.key])},he=()=>{h.length===j.length?B([]):B(j.map(s=>s.key))},ue=()=>{N?.status==="Charging"?_(!0):$.error("Only the Connector in Charging state supports this operation.")},xe=[E.SELECTION_COLUMN,E.EXPAND_COLUMN,{title:"Charge Point",dataIndex:"id_tag",className:"bold",key:"id_tag",render:(s,t)=>e.jsx(r,{type:"link",onClick:()=>{v(t),M(!0)},children:s})},{title:"Status",dataIndex:"charge_point_status",key:"charge_point_status",render:s=>e.jsxs("div",{className:`status-item ${s.toLowerCase()}`,children:[e.jsx("div",{className:"point"}),e.jsx("span",{children:s})]})},{title:"SN",dataIndex:"sn",key:"sn"},{title:"Brand",dataIndex:"brand",key:"brand"},{title:"Brand Model",dataIndex:"brand_model",key:"brand_model"}],G=[{key:"0",label:e.jsx(r,{type:"link",className:" operation-row-item",icon:e.jsx(c,{icon:"AStart",size:"20"}),onClick:()=>b(!0),children:"Advance Start"})},{key:"1",label:e.jsx(r,{type:"link",icon:e.jsx(c,{icon:"Set",size:"20"}),onClick:()=>ue(),children:"Set Charge Profile"})},{key:"2",label:e.jsx(r,{type:"link",icon:e.jsx(c,{icon:"Edit",size:"20"}),onClick:()=>S(!0),children:"Edit Connector Status"})}],je=s=>{const t=[{title:"ID",className:"bold",width:"140px",dataIndex:"name",key:"name"},{title:"Status",width:"240px",dataIndex:"status",key:"status",render:a=>e.jsx("div",{className:`status ${a.toLowerCase().replace(" ","_")}`,children:e.jsx("span",{children:a})})},{title:"Operation",width:"340px",key:"operation",render:(a,n)=>e.jsxs("div",{className:"operations end",children:[e.jsx(C,{title:"Confirm start?",placement:"bottom",okText:"Confirm",cancelText:"Cancel",onConfirm:()=>K(n),children:e.jsx(r,{type:"link",icon:e.jsx(c,{icon:"Start",size:"20"}),children:"Start"})}),e.jsx(C,{placement:"bottom",okText:"Confirm",cancelText:"Cancel",title:"Confirm stop?",onConfirm:()=>z(n),children:e.jsx(r,{type:"link",icon:e.jsx(c,{icon:"Stop",size:"20"}),children:"Stop"})}),e.jsx(J,{menu:{items:G},trigger:["click"],children:e.jsx("div",{children:e.jsx(r,{onClick:()=>w(n),type:"link",icon:e.jsx(c,{icon:"Ellipsis",size:"20"})})})})]})}];return e.jsx(E,{columns:t,showHeader:!1,dataSource:s.connectors,pagination:!1,rowKey:"key",bordered:!0,rowSelection:{selectedRowKeys:d,onSelect:pe}})},Ce=e.jsxs(u,{value:g,onChange:W,style:{width:156},children:[e.jsx(I,{value:"id_tag",children:"Charge Point"}),e.jsx(I,{value:"sn",children:"SN"})]}),fe=s=>{const{expanded:t,onExpand:a,record:n}=s;return e.jsx("span",{onClick:m=>a(n,m),children:e.jsx(c,{icon:t?"Down":"Right",size:"17",color:"#d9d9d9",style:{marginTop:"-2px"}})})},K=async(s,t)=>{const a=t?s:[{charge_point_id:s.charge_point_id,connector_id:s.connector_id,mode:"default",soc:{max:.92}}],n=await k.start({cp_id_connector_pairs:a});n?.code===200&&($.success(n.message),p(Date.now()))},z=async(s,t)=>{const a=t?s:[{charge_point_id:s.charge_point_id,connector_id:s.connector_id}],n=await k.stop({cp_id_connector_pairs:a});n?.code===200&&($.success(n.message),p(Date.now()))},ge=()=>{p(Date.now())},ye=s=>{x({...l,page:s}),p(Date.now())},_e=async()=>{const{detail:s}=await f.getBrands({num:100}),t={},a={};s.results.forEach(n=>{t[n.brand]=n.id;const m=[];n.chargepointbrandmodel_set&&n.chargepointbrandmodel_set.forEach(i=>{m.push(i.brand_model)}),a[n.brand]=m}),ce(t),re(a)},Se=(s,t)=>{const a={},n={0:"Connector A",1:"Connector B",2:"Connector C",3:"Connector D",4:"Connector E",5:"Connector F",6:"Connector G",7:"Connector H",8:"Connector I",9:"Connector J"};return t.forEach(i=>{a[i.charge_point_id]={charge_point_status:Q[i.charge_point_status],connector_statuses:i.connector_statuses.map((T,Ne)=>({key:`${i.charge_point_id}${f.rowKeySplit}${T.connector_id}`,name:n[`${Ne}`],charge_point_id:i.charge_point_id,connector_id:T.connector_id,status:X[T.status]}))}}),s.filter(i=>a[i.id]).map(i=>({key:`${i.id}${f.rowKeySplit}${i.id_tag}`,id:i.id,id_tag:i.id_tag,sn:i.sn,brand:i.brand_model.brand,brand_model:i.brand_model.brand_model,charge_point_status:a[i.id].charge_point_status,picture:i.brand_model.picture,connectors:a[i.id].connector_statuses}))},be=()=>{x({}),p(Date.now())},ve=async()=>{const s={...l};q&&(s.brand_id=q[s.brand],delete s.brand,s.brand_model||delete s.brand_model),A(!0);const t=await k.queryAll({num:100}),{results:a}=t.detail,n=await k.getStatus(s),m=Se(a||[],n.detail.results);ne(m),D&&m.length&&m.forEach(i=>{i.key===D.key&&v(i)}),V(m.map(i=>i.key)),le(n.detail.count),A(!1)};return o.useEffect(()=>{ve()},[U]),o.useEffect(()=>{_e(),p(Date.now())},[]),e.jsxs("div",{className:"main-content",children:[e.jsxs("div",{className:"search-area flex items-center justify-start",children:[e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"Enter"}),e.jsx(De,{addonBefore:Ce,placeholder:g==="id_tag"?"Charge Point":"SN",allowClear:!0,value:l[g],onChange:s=>{let t={...l};delete t.id_tag,delete t.sn,t={...t,[g]:s.target.value},x(t)}})]}),e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"Brand"}),e.jsx(u,{className:"w-full",placeholder:"Brand",allowClear:!0,value:l.brand,style:{width:"150px"},onChange:s=>{x({...l,brand:s,brand_model:void 0})},children:Object.keys(F).map(s=>e.jsx(u.Option,{value:s,children:s},s))})]}),e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"Brand Model"}),e.jsx(u,{className:"w-full",allowClear:!0,disabled:!l.brand,placeholder:"Brand Model",style:{width:"160px"},value:l.brand_model,onChange:s=>x({...l,brand_model:s}),children:l.brand&&F[l.brand].map(s=>e.jsx(u.Option,{value:s,children:s},s))})]}),e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"Charge Point Status"}),e.jsx(u,{className:"w-full",style:{width:"210px"},allowClear:!0,value:l.charge_point_status,placeholder:"Charge Point Status",onChange:s=>x({...l,charge_point_status:s}),children:Object.entries(Q).map(([s,t])=>e.jsx(I,{value:s,children:`${t}`},s))})]}),e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"Connector Status"}),e.jsx(u,{className:"w-full",style:{width:"190px"},allowClear:!0,placeholder:"Connector Status",value:l.connector_status,onChange:s=>x({...l,connector_status:s}),children:Object.entries(X).map(([s,t])=>e.jsx(I,{value:s,children:`${t}`},s))})]}),e.jsx("div",{className:"search-btn",children:e.jsx(r,{icon:e.jsx(c,{icon:"Search",size:"20"}),type:"primary",loading:ie,onClick:ge})}),e.jsx("div",{className:"search-btn clear",children:e.jsx(r,{icon:e.jsx(c,{icon:"Close",size:"24",color:"#999"}),type:"primary",onClick:be})})]}),e.jsxs("div",{className:"operation-area flex items-center justify-start",children:[e.jsxs(P.Group,{className:"layout-switch",value:R,onChange:s=>Y(s.target.value),children:[e.jsx(P.Button,{value:"list",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(H,{icon:"mynaui:list",size:20}),"List"]})}),e.jsx(P.Button,{value:"grid",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(H,{icon:"proicons:grid",size:20}),"Grid"]})})]}),e.jsx(C,{placement:"bottom",okText:"Confirm",cancelText:"Cancel",title:"Confirm Start?",onConfirm:()=>de(),children:e.jsx(r,{className:"ml-3 mr-3",disabled:d.length===0,icon:e.jsx(c,{icon:"Start",size:"20",color:d.length===0?"#999":"currentColor"}),children:"Bulk Start"})}),e.jsx(C,{placement:"bottom",okText:"Confirm",cancelText:"Cancel",title:"Confirm stop?",onConfirm:()=>me(),children:e.jsx(r,{disabled:d.length===0,className:"mr-3",icon:e.jsx(c,{color:d.length===0?"#999":"currentColor",icon:"Stop",size:"20"}),children:"Bulk Stop"})})]}),R==="list"?e.jsx(E,{columns:xe,dataSource:j,rowHoverable:!1,bordered:!0,rowKey:"key",pagination:!1,expandable:{expandedRowRender:je,expandIcon:fe,expandedRowKeys:ae,onExpand:(s,t)=>{V(a=>s?[...a,t.key]:a.filter(n=>n!==t.key))}},rowSelection:{selectedRowKeys:h,onChange:B}}):e.jsxs("div",{className:"grid-wrapper",children:[e.jsx(O,{className:"check-all",checked:j.length===h.length,onChange:he}),e.jsx("div",{className:"grid",children:j.map(s=>e.jsx("div",{className:"grid-item",children:e.jsxs(Be,{children:[e.jsxs("div",{className:"grid-top with-image flex items-center",children:[e.jsx(O,{checked:h.includes(s.key),onChange:t=>{const a=t.target.checked?[...h,s.key]:h.filter(n=>n!==s.key);L(a)}}),e.jsx(Ke,{src:we,preview:!1,height:184,className:"entity-image object-cover"})]}),e.jsxs("div",{className:"grid-bottom monitor-bottom",children:[e.jsx("div",{className:"display-item",children:e.jsx(r,{type:"link",className:"detail-link",onClick:()=>{v(s),M(!0)},children:s.name})}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Status:"})," ",e.jsx("span",{className:"value",children:e.jsxs("div",{className:`status-item ${s.charge_point_status.toLowerCase().replace(" ","_")}`,children:[e.jsx("div",{className:"point"}),e.jsx("span",{children:s.charge_point_status})]})})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"SN:"})," ",e.jsx("span",{className:"value",children:s.sn})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Brand:"})," ",e.jsx("span",{className:"value",children:s.brand})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Brand Model:"})," ",e.jsx("span",{className:"value",children:s.brand_model})]}),s.charge_point_status!=="Offline"&&e.jsx("div",{className:"display-item  !mb-0 flex-col !items-start gap-2 !px-0",children:s.connectors.map(t=>e.jsxs("div",{className:"connector-wrapper w-full",children:[e.jsxs("div",{className:"connectors",children:[e.jsx(O,{checked:d.includes(t.key),onChange:a=>{const n=a.target.checked?[...d,t.key]:d.filter(m=>m!==t.key);y(n)}}),e.jsx("div",{className:"items flex-auto",children:e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:t.name})," ",e.jsx("span",{className:`value status ${t.status.toLowerCase().replace(" ","_")}`,children:t.status})]})})]}),e.jsx("div",{className:"operation-columns",children:e.jsxs("div",{className:"operation-row",children:[e.jsx(C,{title:"Confirm start?",placement:"bottom",okText:"Confirm",cancelText:"Cancel",onConfirm:()=>K(t),children:e.jsx(r,{type:"link",className:" operation-row-item",icon:e.jsx(c,{icon:"Start",size:"20"}),children:"Start"})}),e.jsx("div",{className:"split"}),e.jsx(C,{title:"Confirm stop?",placement:"bottom",okText:"Confirm",cancelText:"Cancel",onConfirm:()=>z(t),children:e.jsx(r,{className:"operation-row-item",type:"link",icon:e.jsx(c,{icon:"Stop",size:"20"}),children:"Stop"})}),e.jsx("div",{className:"split"}),e.jsx(J,{menu:{items:G},children:e.jsx("div",{className:"operation-row-item",children:e.jsx(r,{type:"link",icon:e.jsx(c,{icon:"Ellipsis",size:"20"})})})})]})})]},t.key))})]})]},s.key)}))})]}),e.jsx("div",{className:"mr-4 mt-4 flex justify-end",children:e.jsx(ze,{total:oe,showQuickJumper:!0,onChange:ye})}),e.jsx(Ie,{visible:Z,connector:N,onCancel:()=>_(!1),onConfirm:()=>{_(!1),p(Date.now())}}),e.jsx(Ee,{visible:ee,connector:N,onCancel:()=>S(!1),onConfirm:()=>{S(!1)}}),se?e.jsx(ke,{onCancel:()=>{v(null),M(!1),p(Date.now())},updateList:U,chargePoint:D,onStart:s=>{w(s),b(!0)},onUpdate:()=>{p(Date.now())},onSetChargeProfile:s=>{w(s),_(!0)},onEditConnector:s=>{w(s),S(!0)}}):null,e.jsx(Me,{visible:te,connector:N,onCancel:()=>b(!1),onConfirm:()=>{b(!1),p(Date.now())}})]})}export{We as default};
