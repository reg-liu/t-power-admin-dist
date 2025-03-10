import{j as e,S as d,f}from"./index-DGG3uvmK.js";import{r as c}from"./vendor-react-BcJS7s_i.js";import{e as P}from"./ev-PecoakOh.js";import Y from"./detail-BGovYKUf.js";import z from"./editBrandModel-B7rUrPi0.js";import{w as N,K as C,i as t,x as y,P as v,F,y as k,j as K,I as R,z as L}from"./vendor-antd-B62eGpCx.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-CtEfXJzW.js";import"./addBrand-Db-ZDfNm.js";const{Option:w}=N,x=[{id:1,brand:"Tesla",brand_model:"Model S",class:"Sedan",year:2022,plug_type:"Type 2",battery_capacity:100},{id:2,brand:"Nissan",brand_model:"Nissan LEAF",class:"Hatchback",year:2021,plug_type:"Type 2",battery_capacity:62},{id:3,brand:"BYD",brand_model:"BYD Tang EV",class:"SUV",year:2023,plug_type:"Type 2",battery_capacity:86.4}],S=[{value:"Tesla",models:["Model S","Model 3","Model X"]},{value:"Nissan",models:["Nissan LEAF","Nissan Ariya","Nissan e-NV200"]},{value:"BYD",models:["BYD Tang EV","BYD Qin EV","BYD Yuan EV"]}];function $(){const[s,r]=c.useState({}),[b,_]=c.useState("list"),[i,o]=c.useState([]),[B,m]=c.useState(!1),[D,h]=c.useState(!1),[p,u]=c.useState(null),[n,j]=c.useState(x),T=()=>{},g=a=>{j(n.filter(l=>!a.includes(l.id))),o([])},M=[{title:"Brand",dataIndex:"brand",key:"brand"},{title:"Brand Model",dataIndex:"brand_model",key:"brand_model",className:"bold",render:(a,l)=>e.jsx(t,{type:"link",onClick:()=>{u(l),m(!0)},children:a})},{title:"Class",dataIndex:"class",key:"class"},{title:"Year",dataIndex:"year",key:"year"},{title:"Plug Type",dataIndex:"plug_type",key:"plug_type"},{title:"Battery Capacity (Ah)",dataIndex:"battery_capacity",key:"battery_capacity"},{title:"Operation",width:"140px",key:"operation",render:()=>e.jsx("div",{className:"operations",children:e.jsx(v,{placement:"bottom",okText:"Confirm",cancelText:"Cancel",title:"Confirm delete?",onConfirm:()=>{},children:e.jsx(t,{danger:!0,type:"link",icon:e.jsx(d,{icon:"Delete",size:"20"}),children:"Delete"})})})}],I={selectedRowKeys:i,onChange:a=>{o(a)}},E=()=>{x.length===i.length?o([]):o(x.map(a=>a.id))};return e.jsxs("div",{className:"main-content",children:[e.jsxs("div",{className:"search-area flex items-center justify-start",children:[e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"Brand"}),e.jsx(N,{className:"w-full",value:s.brand,placeholder:"Brand",allowClear:!0,style:{width:190},onChange:a=>r({...s,brand:a,brand_model:""}),children:S.map(a=>e.jsx(w,{value:a.value,children:a.value},a.value))})]}),e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"Brand Model"}),e.jsx(N,{className:"w-full",value:s.brand_model,style:{width:190},disabled:!s.brand,allowClear:!0,placeholder:"Brand Model",onChange:a=>r({...s,brand_model:a}),children:S.find(a=>a.value===s.brand)?.models.map(a=>e.jsx(w,{value:a,children:a},a))})]}),e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"Class"}),e.jsx(C,{style:{width:160},value:s.class,placeholder:"Class",allowClear:!0,onChange:a=>r({...s,class:a.target.value})})]}),e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"Plug Type"}),e.jsx(C,{value:s.plug_type,placeholder:"Plug Type",style:{width:210},allowClear:!0,onChange:a=>r({...s,plug_type:a.target.value})})]}),e.jsx("div",{className:"search-btn",children:e.jsx(t,{icon:e.jsx(d,{icon:"Search",size:"20"}),type:"primary",onClick:T})}),e.jsx("div",{className:"search-btn clear",children:e.jsx(t,{icon:e.jsx(d,{icon:"Close",size:"24",color:"#999"}),type:"primary",onClick:()=>r({})})})]}),e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("div",{className:"operation-area flex items-center justify-start",children:[e.jsxs(y.Group,{className:"layout-switch",value:b,onChange:a=>_(a.target.value),children:[e.jsx(y.Button,{value:"list",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(f,{icon:"mynaui:list",size:20}),"List"]})}),e.jsx(y.Button,{value:"grid",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(f,{icon:"proicons:grid",size:20}),"Grid"]})})]}),e.jsx(t,{className:"ml-3 mr-3",icon:e.jsx(d,{icon:"Add",size:"20"}),type:"primary",onClick:()=>{u(null),h(!0)},children:"Add Brand Model"}),e.jsx(v,{title:"Confirm delete?",onConfirm:()=>{},placement:"bottom",okText:"Confirm",cancelText:"Cancel",children:e.jsx(t,{disabled:i.length===0,danger:!0,icon:e.jsx(d,{icon:"Delete",size:"20",color:i.length===0?"#999":"currentColor"}),children:"Bulk Delete"})})]})}),b==="list"?e.jsx(F,{columns:M,dataSource:n,bordered:!0,pagination:!1,rowSelection:I,rowKey:"id"}):e.jsxs("div",{className:"grid-wrapper",children:[e.jsx(k,{className:"check-all",checked:x.length===i.length,onChange:E}),e.jsx("div",{className:"grid",children:n.map(a=>e.jsx("div",{className:"grid-item",children:e.jsxs(K,{children:[e.jsxs("div",{className:"grid-top with-image flex items-center",children:[e.jsx(k,{checked:i.includes(a.id),onChange:l=>{const V=l.target.checked?[...i,a.id]:i.filter(A=>A!==a.id);o(V)}}),e.jsx(R,{src:P,preview:!1,height:184,className:"entity-image object-cover"})]}),e.jsxs("div",{className:"grid-bottom",children:[e.jsx("div",{className:"display-item title",children:e.jsx("span",{className:"value",children:e.jsx("span",{className:"bold",children:a.brand})})}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Brand Model:"}),e.jsx("span",{className:"value",children:e.jsx(t,{type:"link",onClick:()=>{u(a),m(!0)},children:a.brand_model})})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Class:"}),e.jsx("span",{className:"value",children:a.class})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Year:"}),e.jsx("span",{className:"value",children:a.year})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Plug Type:"}),e.jsx("span",{className:"value",children:a.plug_type})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Battery Capacity:"}),e.jsxs("span",{className:"value",children:[a.battery_capacity,"Ah"]})]}),e.jsx("div",{className:"operation-rows",children:e.jsx(v,{title:"Are you sure to delete?",onConfirm:()=>g([a.id]),okText:"Yes",cancelText:"No",children:e.jsx(t,{type:"link",danger:!0,icon:e.jsx(d,{icon:"Delete",size:"20",color:"#FF4747"}),children:"Delete"})})})]})]},a.id)}))})]}),e.jsx("div",{className:"mr-4 mt-4 flex justify-end",children:e.jsx(L,{total:n.length,showQuickJumper:!0})}),e.jsx(Y,{visible:B,onCancel:()=>m(!1),record:p,onEdit:()=>{h(!0)},onDelete:a=>{g([a]),m(!1)}}),e.jsx(z,{visible:D,onCancel:()=>h(!1),record:p,onSave:a=>{j(p?n.map(l=>l.id===a.id?a:l):[...n,{...a,id:Math.max(...n.map(l=>l.id))+1}]),h(!1)}})]})}export{$ as default};
