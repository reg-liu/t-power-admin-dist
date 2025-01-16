import{j as e,f as y}from"./index-DpY8G7rK.js";import{r as t}from"./vendor-react-BcJS7s_i.js";import{e as D}from"./ev-PecoakOh.js";import E from"./detail-FpHjaPpx.js";import I from"./editBrandModel-B_KgD-GR.js";import{w as N,I as f,k as n,P as b,x as M,y as V,z as v,F as A,l as Y,E as P,O as R,H as z}from"./vendor-antd-Cm1Y6B8R.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-C6QnRqht.js";import"./addBrand-D5Z-PsKs.js";const{Option:x}=N,O=[{id:1,brand:"Tesla",brand_model:"Model S",class:"Sedan",year:2022,plug_type:"Type 2",battery_capacity:100},{id:2,brand:"Nissan",brand_model:"Nissan LEAF",class:"Hatchback",year:2021,plug_type:"CHAdeMO",battery_capacity:62},{id:3,brand:"BYD",brand_model:"BYD Tang EV",class:"SUV",year:2023,plug_type:"GB/T",battery_capacity:86.4}],k=[{value:"Tesla",models:["Model S","Model 3","Model X"]},{value:"Nissan",models:["Nissan LEAF","Nissan Ariya","Nissan e-NV200"]},{value:"BYD",models:["BYD Tang EV","BYD Qin EV","BYD Yuan EV"]}];function X(){const[l,c]=t.useState({brand:"",brand_model:"",class:"",plug_type:""}),[g,C]=t.useState("list"),[d,r]=t.useState([]),[_,o]=t.useState(!1),[w,m]=t.useState(!1),[u,p]=t.useState(null),[i,j]=t.useState(O),B=()=>{},h=a=>{j(i.filter(s=>!a.includes(s.id))),r([])},S=[{title:"Brand",dataIndex:"brand",key:"brand"},{title:"Brand Model",dataIndex:"brand_model",key:"brand_model",className:"bold",render:(a,s)=>e.jsx(n,{type:"link",onClick:()=>{p(s),o(!0)},children:a})},{title:"Class",dataIndex:"class",key:"class"},{title:"Year",dataIndex:"year",key:"year"},{title:"Plug Type",dataIndex:"plug_type",key:"plug_type"},{title:"Battery Capacity (Ah)",dataIndex:"battery_capacity",key:"battery_capacity"},{title:"Operation",key:"operation",render:(a,s)=>e.jsx(b,{title:"Are you sure to delete?",onConfirm:()=>h([s.id]),children:e.jsx(n,{type:"link",children:"Delete"})})}];return e.jsxs("div",{className:"main-content",children:[e.jsxs("div",{className:"search-area flex flex-wrap justify-between",children:[e.jsxs("div",{className:"search-item w-1/5",children:[e.jsx("label",{className:"block",children:"Brand"}),e.jsxs(N,{className:"w-full",value:l.brand,onChange:a=>c({...l,brand:a,brand_model:""}),children:[e.jsx(x,{value:"",children:"All"}),k.map(a=>e.jsx(x,{value:a.value,children:a.value},a.value))]})]}),e.jsxs("div",{className:"search-item w-1/5",children:[e.jsx("label",{className:"block",children:"Brand Model"}),e.jsxs(N,{className:"w-full",value:l.brand_model,disabled:!l.brand,onChange:a=>c({...l,brand_model:a}),children:[e.jsx(x,{value:"",children:"All"}),k.find(a=>a.value===l.brand)?.models.map(a=>e.jsx(x,{value:a,children:a},a))]})]}),e.jsxs("div",{className:"search-item w-1/5",children:[e.jsx("label",{className:"block",children:"Class"}),e.jsx(f,{value:l.class,onChange:a=>c({...l,class:a.target.value})})]}),e.jsxs("div",{className:"search-item w-1/5",children:[e.jsx("label",{className:"block",children:"Plug Type"}),e.jsx(f,{value:l.plug_type,onChange:a=>c({...l,plug_type:a.target.value})})]}),e.jsx("div",{className:"search-btn ml-auto flex w-1/5 items-end justify-end",children:e.jsx(n,{type:"primary",onClick:B,className:"mt-6",children:"Search"})})]}),e.jsxs("div",{className:"operation-area flex justify-between",children:[e.jsx("div",{children:d.length>0&&e.jsx(b,{title:"Are you sure you want to unbind selected EVs?",onConfirm:()=>{},okText:"Yes",cancelText:"No",children:e.jsx(n,{icon:e.jsx(M,{}),danger:!0,onClick:()=>h(d.map(a=>a.id)),disabled:d.length===0,children:"Delete"})})}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(n,{icon:e.jsx(V,{}),onClick:()=>{p(null),m(!0)},className:"mr-2",children:"Create Brand Model"}),e.jsxs(v.Group,{className:"layout-switch",value:g,onChange:a=>C(a.target.value),children:[e.jsx(v.Button,{value:"list",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(y,{icon:"mynaui:list",size:20}),"List"]})}),e.jsx(v.Button,{value:"grid",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(y,{icon:"proicons:grid",size:20}),"Grid"]})})]})]})]}),g==="list"?e.jsx(A,{columns:S,dataSource:i,rowKey:"id",bordered:!0,rowSelection:{type:"checkbox",onChange:(a,s)=>r(s)}}):e.jsx("div",{className:"grid",children:i.map(a=>e.jsx("div",{className:"grid-item",children:e.jsxs(Y,{children:[e.jsxs("div",{className:"grid-top with-image flex items-center",children:[e.jsx(P,{onChange:s=>{s.target.checked?r([...d,a]):r(d.filter(T=>T.id!==a.id))}}),e.jsx(R,{src:D,preview:!1,height:184,className:"entity-image object-cover"})]}),e.jsxs("div",{className:"grid-bottom",children:[e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Brand:"}),e.jsx("span",{className:"value",children:a.brand})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Brand Model:"}),e.jsx("span",{className:"value",children:e.jsx(n,{type:"link",onClick:()=>{p(a),o(!0)},children:a.brand_model})})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Class:"}),e.jsx("span",{className:"value",children:a.class})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Year:"}),e.jsx("span",{className:"value",children:a.year})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Plug Type:"}),e.jsx("span",{className:"value",children:a.plug_type})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Battery Capacity:"}),e.jsx("span",{className:"value",children:a.battery_capacity})]}),e.jsx("div",{className:"operation-rows",children:e.jsx(b,{title:"Are you sure to delete?",onConfirm:()=>h([a.id]),okText:"Yes",cancelText:"No",children:e.jsx(n,{type:"link",icon:e.jsx(y,{icon:"fluent-mdl2:delete",size:16}),children:"Delete"})})})]})]},a.id)}))}),e.jsx(z,{className:"mt-4",total:i.length,showSizeChanger:!0,showQuickJumper:!0,showTotal:a=>`Total ${a} items`}),e.jsx(E,{visible:_,onCancel:()=>o(!1),record:u,onEdit:()=>{m(!0)},onDelete:a=>{h([a]),o(!1)}}),e.jsx(I,{visible:w,onCancel:()=>m(!1),record:u,onSave:a=>{j(u?i.map(s=>s.id===a.id?a:s):[...i,{...a,id:Math.max(...i.map(s=>s.id))+1}]),m(!1)}})]})}export{X as default};
