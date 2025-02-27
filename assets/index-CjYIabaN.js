import{j as e,S as d,f}from"./index-DojVPh2z.js";import{r as t}from"./vendor-react-BcJS7s_i.js";import{E as F,c as K,a as k}from"./editBrand-DJEg5w1j.js";import{e as W}from"./ev-PecoakOh.js";import q from"./brandModelDetail-DcXBCEyy.js";import{v as l,i as c,w as v,P as N,F as G,x as M,j as L,I as J,y as Q}from"./vendor-antd-IarLURi0.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-Bc-7OOPz.js";import"./addBrand-6XMLg0QR.js";function ne(){const[n,i]=t.useState({}),[r,h]=t.useState([]),[_,P]=t.useState("list"),[o,S]=t.useState([]),[I,O]=t.useState(0),[B,C]=t.useState(!1),[D,y]=t.useState(!1),[x,p]=t.useState(null),[u,A]=t.useState([]),$=()=>{},g=s=>{p(s),C(!0)},w=s=>{p(s||null),y(!0)},z=[{title:"Brand",dataIndex:"brand",key:"brand"},{title:"Brand Model",dataIndex:"brand_model",key:"brand_model",className:"bold",render:(s,a)=>e.jsx(c,{type:"link",onClick:()=>g(a),children:s})},{title:"Charge Model",dataIndex:"charge_model",width:"140px",key:"charge_model"},{title:"Connector No",dataIndex:"connector_no",width:"140px",key:"connector_no"},{title:"Phase",dataIndex:"phase",key:"phase"},{title:"OCPP",dataIndex:"ocpp",key:"ocpp"},{title:"Current Min",dataIndex:"out_current_min",key:"out_current_min",render:s=>e.jsxs("span",{children:[`${s}`,"A"]})},{title:"Current Max",dataIndex:"out_current_max",key:"out_current_max",render:s=>e.jsxs("span",{children:[`${s}`,"A"]})},{title:"Power Min",dataIndex:"out_power_min",key:"out_power_min",render:s=>e.jsxs("span",{children:[`${s}`,"kW"]})},{title:"Power Max",dataIndex:"out_power_max",key:"out_power_max",render:s=>e.jsxs("span",{children:[`${s}`,"kW"]})},{title:"Operation",width:"140px",key:"operation",render:(s,a)=>e.jsx("div",{className:"operations",children:e.jsx(N,{title:"Confirm delete?",placement:"bottom",okText:"Confirm",cancelText:"Cancel",onConfirm:()=>{m(a.id)},children:e.jsx(c,{type:"link",danger:!0,icon:e.jsx(d,{icon:"Delete",size:"20"}),children:"Delete"})})})}],E=()=>{r.length===o.length?h([]):h(o.map(s=>s.id))},R=async()=>{await K.getBrands(),A(u)},m=async s=>{try{const a=await k.del(s?[s]:r)}catch{}},T=s=>s.map(a=>({...a,out_current_max:parseInt(`${a.out_current_max}`,10),out_current_min:parseInt(`${a.out_current_min}`,10),out_power_max:parseInt(`${a.out_power_max}`,10),out_power_min:parseInt(`${a.out_power_min}`,10),out_voltage_max:parseInt(`${a.out_voltage_max}`,10),out_voltage_min:parseInt(`${a.out_voltage_min}`,10),connector_type:a.charge_model==="AC"?"ac - type2":"dc - ccs2"})),b=async()=>{const s=await k.queryAll(),{results:a,count:j}=s;S(T(a||[])),O(j)};return t.useEffect(()=>{R(),b()},[n]),e.jsxs("div",{className:"main-content",children:[e.jsxs("div",{className:"search-area flex items-center justify-start",children:[e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"Brand"}),e.jsx(l,{className:"w-full",value:n.brand,allowClear:!0,style:{width:"120px"},placeholder:"Brand",onChange:s=>i({...n,brand:s}),children:Object.keys(u).map(s=>e.jsx(l.Option,{value:s,children:s},s))})]}),e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"Brand Model"}),e.jsx(l,{className:"w-full",style:{width:"160px"},allowClear:!0,placeholder:"Brand Model",value:n.brand_model,disabled:!n.brand,onChange:s=>i({...n,brand_model:s}),children:n.brand&&u[n.brand].map(s=>e.jsx(l.Option,{value:s,children:s},s))})]}),e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"Charge Model"}),e.jsxs(l,{className:"w-full",style:{width:"160px"},allowClear:!0,placeholder:"Charge Model",onChange:s=>i({...n,charge_model:s}),children:[e.jsx(l.Option,{value:"AC",children:"AC"}),e.jsx(l.Option,{value:"DC",children:"DC"})]})]}),e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"OCPP"}),e.jsxs(l,{placeholder:"OCPP",allowClear:!0,style:{width:"210px"},onChange:s=>i({...n,ocpp:s}),children:[e.jsx(l.Option,{value:"ocpp2.0.1",children:"ocpp2.0.1"}),e.jsx(l.Option,{value:"ocpp1.6",children:"ocpp1.6"})]})]}),e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"Phase"}),e.jsxs(l,{placeholder:"Phase",allowClear:!0,style:{width:"190px"},onChange:s=>i({...n,phase:s}),children:[e.jsx(l.Option,{value:"1p+n",children:"1p+n"}),e.jsx(l.Option,{value:"3p+n",children:"3p+n"})]})]}),e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"Connector No"}),e.jsxs(l,{className:"w-full",style:{width:"190px"},allowClear:!0,placeholder:"Connector No",onChange:s=>i({...n,connector_no:s}),children:[e.jsx(l.Option,{value:1,children:"1"}),e.jsx(l.Option,{value:2,children:"2"})]})]}),e.jsx("div",{className:"search-btn",children:e.jsx(c,{icon:e.jsx(d,{icon:"Search",size:"20"}),type:"primary",onClick:$})}),e.jsx("div",{className:"search-btn clear",children:e.jsx(c,{icon:e.jsx(d,{icon:"Close",size:"24",color:"#999"}),type:"primary",onClick:()=>i({})})})]}),e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("div",{className:"operation-area flex items-center justify-start",children:[e.jsxs(v.Group,{className:"layout-switch",value:_,onChange:s=>P(s.target.value),children:[e.jsx(v.Button,{value:"list",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(f,{icon:"mynaui:list",size:20}),"List"]})}),e.jsx(v.Button,{value:"grid",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(f,{icon:"proicons:grid",size:20}),"Grid"]})})]}),e.jsx(c,{type:"primary",icon:e.jsx(d,{icon:"Add",size:"20"}),className:"ml-3 mr-3",onClick:()=>w(),children:"Add Brand Model"}),e.jsx(N,{title:"Confirm delete?",onConfirm:()=>{m()},placement:"bottom",okText:"Confirm",cancelText:"Cancel",children:e.jsx(c,{disabled:r.length===0,danger:!0,icon:e.jsx(d,{icon:"Delete",size:"20",color:r.length===0?"#999":"currentColor"}),children:"Bulk Delete"})})]})}),_==="list"?e.jsx(G,{rowSelection:{type:"checkbox",onChange:s=>h(s)},bordered:!0,columns:z,dataSource:o,rowKey:"id",pagination:!1}):e.jsxs("div",{className:"grid-wrapper",children:[e.jsx(M,{className:"check-all",checked:o.length===r.length,onChange:E}),e.jsx("div",{className:"grid",children:o.map(s=>e.jsx("div",{className:"grid-item",children:e.jsxs(L,{hoverable:!0,className:"flex flex-col",children:[e.jsxs("div",{className:"grid-top with-image flex items-center",children:[e.jsx(M,{checked:r.includes(s.id),onChange:a=>{const j=a.target.checked?[...r,s.id]:r.filter(V=>V!==s.id);h(j)}}),e.jsx(J,{src:W,preview:!1,height:184,className:"entity-image object-cover"})]}),e.jsxs("div",{className:"grid-bottom",children:[e.jsx("div",{className:"display-item title",children:s.brand}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Brand Model:"}),e.jsx("span",{className:"value",children:e.jsx(c,{type:"link",onClick:()=>{g(s)},children:e.jsx("span",{className:"bold",children:s.brand_model})})})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Charge Model:"}),e.jsx("span",{className:"value",children:s.charge_model})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Connector No:"}),e.jsx("span",{className:"value",children:s.connector_no})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Phase:"}),e.jsx("span",{className:"value",children:s.phase})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"OCPP:"}),e.jsx("span",{className:"value",children:s.ocpp})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Current:"})," ",e.jsxs("span",{className:"value",children:[e.jsxs("span",{className:"value-item",children:[e.jsxs("span",{className:"data",children:[s.out_current_min,"A"]}),e.jsx("span",{className:"tag",children:"min"})]}),e.jsxs("span",{className:"value-item",children:[e.jsxs("span",{className:"data",children:[s.out_current_max,"A"]}),e.jsx("span",{className:"tag",children:"max"})]})]})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Power:"})," ",e.jsx("span",{className:"value",children:e.jsxs("span",{className:"value-item",children:[e.jsxs("span",{className:"data",children:[s.out_power_min,"kW"]}),e.jsx("span",{className:"tag",children:"min"}),e.jsxs("span",{className:"value-item",children:[e.jsxs("span",{className:"data",children:[s.out_power_max,"kW"]}),e.jsx("span",{className:"tag",children:"max"})]})]})})]}),e.jsx("div",{className:"operation-rows",children:e.jsx(N,{title:"Confirm delete?",onConfirm:()=>{m(s.id)},placement:"bottom",okText:"Confirm",cancelText:"Cancel",children:e.jsx(c,{type:"link",danger:!0,icon:e.jsx(d,{icon:"Delete",size:"20",color:"#FF4747"}),children:"Delete"})})})]})]},s.id)}))})]}),e.jsx("div",{className:"mr-4 mt-4 flex justify-end",children:e.jsx(Q,{total:I,showQuickJumper:!0})}),e.jsx(q,{visible:B,onClose:()=>C(!1),onDelete:s=>m(s),chargePoint:x,onEdit:()=>{w(x)}}),e.jsx(F,{visible:D,onClose:()=>y(!1),record:x,onSave:()=>{b(),p(null)}})]})}export{ne as default};
