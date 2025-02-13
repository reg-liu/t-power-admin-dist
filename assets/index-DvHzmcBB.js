import{g as I,j as e,S as r,f as b}from"./index-DHG9k9kq.js";import{r as n}from"./vendor-react-BcJS7s_i.js";import{c as Y}from"./chargepoint-wPlJlVYc.js";import V from"./addChargepoint-D_dU1USJ.js";import E from"./detail-CGFs7MAd.js";import{I as z,w as c,k as i,x as h,P as m,F,l as R,y as K,z as O,E as L}from"./vendor-antd-DZ11D4bT.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-FiO04Ee5.js";const{Option:s}=c,G=[{value:"Tesla",label:"Tesla"},{value:"Nissan",label:"Nissan"},{value:"BYD",label:"BYD"}],Q={Tesla:["Model S","Model 3","Model X"],Nissan:["Nissan LEAF","Nissan Ariya","Nissan e-NV200"],BYD:["BYD Tang EV","BYD Qin EV","BYD Yuan EV"]},u=[{id:1,name:"Charger 1",cp_sn:"CP001",brand:"Tesla",brand_model:"Model S",charge_model:"AC",picture:"https://avatars.githubusercontent.com/u/64935023"},{id:2,name:"Charger 2",cp_sn:"CP002",brand:"Nissan",brand_model:"Nissan LEAF",charge_model:"DC",picture:"https://avatars.githubusercontent.com/u/64935023"},{id:3,name:"Charger 3",cp_sn:"CP003",brand:"BYD",brand_model:"BYD Tang EV",charge_model:"AC",picture:"https://avatars.githubusercontent.com/u/64935023"},{id:4,name:"Charger 4",cp_sn:"CP004",brand:"Tesla",brand_model:"Model X",charge_model:"DC",picture:"https://avatars.githubusercontent.com/u/64935023"}];function ae(){const[t,x]=n.useState([]),[p,C]=n.useState("list"),[y,j]=n.useState(!1),[f,g]=n.useState(!1),[w,S]=n.useState(null),[d,k]=n.useState("name"),[l,v]=n.useState({}),_=I(),D=()=>{},B=[{title:"Charge Point",dataIndex:"name",key:"name",className:"bold",render:(a,o)=>e.jsx(i,{type:"link",onClick:()=>N(o),children:a})},{title:"SN",dataIndex:"cp_sn",key:"cp_sn"},{title:"Brand",dataIndex:"brand",key:"brand"},{title:"Brand Model",dataIndex:"brand_model",key:"brand_model"},{title:"Charge Model",dataIndex:"charge_model",key:"charge_model"},{title:"Operation",width:"140px",key:"operation",render:()=>e.jsx("div",{className:"operations",children:e.jsx(m,{title:"Are you sure to Delete ChargePoint?",onConfirm:()=>{},children:e.jsx(i,{type:"link",danger:!0,icon:e.jsx(r,{icon:"Delete",size:"20",color:"#FF4747"}),children:"Delete"})})})}],P={selectedRowKeys:t,onChange:a=>{x(a)}},N=a=>{S(a),j(!0)},A=e.jsxs(c,{value:d,onChange:k,style:{width:156},children:[e.jsx(s,{value:"name",children:"Charge Point"}),e.jsx(s,{value:"sn",children:"SN"})]});return e.jsxs("div",{className:"main-content",children:[e.jsxs("div",{className:"search-area flex items-center justify-start",children:[e.jsx("div",{className:"search-item",children:e.jsx(z,{addonBefore:A,placeholder:d==="name"?"Charge Point":"SN",allowClear:!0,value:l[d],onChange:a=>v({...l,[d]:a.target.value})})}),e.jsx("div",{className:"search-item ",children:e.jsxs(c,{placeholder:"Brand",className:"w-full",style:{width:"150px"},value:l.brand,onChange:a=>v({...l,brand:a,brand_model:""}),children:[e.jsx(s,{value:"",children:"All"}),G.map(a=>e.jsx(s,{value:a.value,children:a.label},a.value))]})}),e.jsx("div",{className:"search-item ",children:e.jsxs(c,{value:l.brand_model,placeholder:"Brand Model",style:{width:"160px"},className:"w-full",children:[e.jsx(s,{value:"",children:"All"}),l.brand&&Q[l.brand].map(a=>e.jsx(s,{value:a,children:a},a))]})}),e.jsx("div",{className:"search-item ",children:e.jsxs(c,{style:{width:"160px"},placeholder:"Charge Model",className:"w-full",children:[e.jsx(s,{value:"ac",children:"AC"}),e.jsx(s,{value:"dc",children:"DC"})]})}),e.jsx("div",{className:"search-btn",children:e.jsx(i,{icon:e.jsx(r,{icon:"Search",size:"20"}),type:"primary",onClick:D})})]}),e.jsxs("div",{className:"operation-area flex items-center justify-start",children:[e.jsxs(h.Group,{className:"layout-switch",value:p,onChange:a=>C(a.target.value),children:[e.jsx(h.Button,{value:"list",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(b,{icon:"mynaui:list",size:20}),"List"]})}),e.jsx(h.Button,{value:"grid",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(b,{icon:"proicons:grid",size:20}),"Grid"]})})]}),e.jsx(i,{className:"ml-3 mr-3",type:"primary",icon:e.jsx(r,{icon:"Add",size:"20"}),onClick:()=>g(!0),children:"Add Charge Point"}),e.jsx(m,{title:"Are you sure you want to delete these Charge Points?",onConfirm:()=>{},okText:"Yes",cancelText:"No",children:e.jsx(i,{disabled:t.length===0,danger:!0,icon:e.jsx(r,{icon:"Delete",size:"20",color:t.length===0?"#999":"currentColor"}),children:"Bulk Delete"})})]}),p==="list"?e.jsx(F,{bordered:!0,rowSelection:P,columns:B,dataSource:u,pagination:!1,rowKey:"id"}):e.jsx("div",{className:"grid",children:u.map(a=>e.jsx("div",{className:"grid-item",children:e.jsxs(R,{hoverable:!0,className:"flex flex-col",children:[e.jsxs("div",{className:"grid-top with-image flex items-center",children:[e.jsx(K,{checked:t.includes(a.id),onChange:o=>{const M=o.target.checked?[...t,a.id]:t.filter(T=>T!==a.id);x(M)}}),e.jsx(O,{src:Y,preview:!1,height:184,className:"entity-image object-cover"})]}),e.jsxs("div",{className:"grid-bottom",children:[e.jsx("div",{className:"display-item",children:e.jsx(i,{type:"link",className:"detail-link",onClick:()=>{N(a)},children:a.name})}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"SN:"})," ",e.jsx("span",{className:"value",children:a.cp_sn})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Brand:"})," ",e.jsx("span",{className:"value",children:a.brand})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Brand Model:"})," ",e.jsx("span",{className:"value",children:a.brand_model})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Charge Model:"})," ",e.jsx("span",{className:"value",children:a.charge_model.toUpperCase()})]}),e.jsx("div",{className:"operation-rows",children:e.jsx(m,{title:"Are you sure you want to delete this charge point?",onConfirm:()=>{},okText:"Yes",cancelText:"No",children:e.jsx(i,{type:"link",danger:!0,icon:e.jsx(r,{icon:"Delete",size:"20",color:"#FF4747"}),children:"Delete"})})})]})]},a.id)}))}),e.jsx("div",{className:"mr-4 mt-4 flex justify-end",children:e.jsx(L,{total:u.length,showQuickJumper:!0})}),e.jsx(E,{visible:y,onClose:()=>j(!1),chargePoint:w,isAdmin:_}),e.jsx(V,{visible:f,onClose:()=>g(!1)})]})}export{ae as default};
