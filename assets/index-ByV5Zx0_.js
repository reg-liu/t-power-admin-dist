import{j as e,S as h,f as $}from"./index-B9brM18d.js";import{r as l}from"./vendor-react-BcJS7s_i.js";import{c as g}from"./commonService-D-DJLYtp.js";import{E as ee,c as O}from"./editBrand-CywuJacu.js";import{c as ae}from"./chargepoint-wPlJlVYc.js";import{c as se,o as le,p as ne,a as te}from"./options-BdxPQc9L.js";import re from"./brandModelDetail-ClTaT2Xm.js";import{w as t,i as d,x as w,P as y,F as ce,y as E,j as ie,I as de,z as oe,s as me}from"./vendor-antd-DmtkV1Ch.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-BKiv1F2M.js";import"./addBrand-C8UoRQBe.js";import"./cpManagementService-_u8GUOmq.js";function Ce(){const[n,c]=l.useState({page:1}),[i,x]=l.useState([]),[b,A]=l.useState("list"),[z,C]=l.useState(!1),[R,f]=l.useState(!1),[p,T]=l.useState([]),[K,L]=l.useState(0),[V,k]=l.useState(!1),[N,v]=l.useState(null),[F,o]=l.useState(0),[u,S]=l.useState({}),[j,M]=l.useState(null),I=a=>{v(a),C(!0)},P=a=>{v(a||null),f(!0)},W=[{title:"Brand",dataIndex:"brand",key:"brand"},{title:"Brand Model",dataIndex:"brand_model",key:"brand_model",className:"bold",render:(a,s)=>e.jsx(d,{type:"link",onClick:()=>I(s),children:a})},{title:"Charge Model",dataIndex:"charge_model",width:"140px",key:"charge_model"},{title:"Connector No",dataIndex:"connector_no",width:"140px",key:"connector_no"},{title:"Phase",dataIndex:"phase",key:"phase"},{title:"OCPP",dataIndex:"ocpp",key:"ocpp"},{title:"Current Min",dataIndex:"out_current_min",key:"out_current_min",render:a=>e.jsxs("span",{children:[`${a}`,"A"]})},{title:"Current Max",dataIndex:"out_current_max",key:"out_current_max",render:a=>e.jsxs("span",{children:[`${a}`,"A"]})},{title:"Power Min",dataIndex:"out_power_min",key:"out_power_min",render:a=>e.jsxs("span",{children:[`${a}`,"kW"]})},{title:"Power Max",dataIndex:"out_power_max",key:"out_power_max",render:a=>e.jsxs("span",{children:[`${a}`,"kW"]})},{title:"Operation",width:"140px",key:"operation",render:(a,s)=>e.jsx("div",{className:"operations",children:e.jsx(y,{title:"Confirm delete?",placement:"bottom",okText:"Confirm",cancelText:"Cancel",onConfirm:()=>{_(s.id)},children:e.jsx(d,{type:"link",danger:!0,icon:e.jsx(h,{icon:"Delete",size:"20"}),children:"Delete"})})})}],q=()=>{i.length===p.length?x([]):x(p.map(a=>a.id))},G=()=>{o(Date.now())},J=a=>{c({...n,page:a}),o(Date.now())},D=async()=>{const{detail:a}=await g.getBrands({num:100}),s={},m={};a.results.forEach(r=>{s[r.brand]=r.id;const B=[];r.chargepointbrandmodel_set&&r.chargepointbrandmodel_set.forEach(Z=>{B.push(Z.brand_model)}),m[r.brand]=B}),M(s),S(m)},Q=()=>i.map(a=>a.split(g.rowKeySplit)[0]),_=async a=>{try{const s=await O.del({brand_model_ids:a?[a]:Q()});s?.code===200&&(me.success(s.message),o(Date.now()))}catch{}},U=a=>a.map(s=>({...s,out_current_max:parseInt(`${s.out_current_max}`,10),out_current_min:parseInt(`${s.out_current_min}`,10),out_power_max:parseInt(`${s.out_power_max}`,10),out_power_min:parseInt(`${s.out_power_min}`,10),out_voltage_max:parseInt(`${s.out_voltage_max}`,10),out_voltage_min:parseInt(`${s.out_voltage_min}`,10),connector_type:s.charge_model==="AC"?"ac - type2":"dc - ccs2"})),H=a=>{M({...j,[a.brand]:a.id}),S({...u,[a.brand]:[]})},X=()=>{c({}),o(Date.now())},Y=async()=>{const a={...n};j&&(a.brand_id=j[a.brand],delete a.brand,a.brand_model||delete a.brand_model),k(!0);const s=await O.queryAll(a),{results:m,count:r}=s.detail;T(U(m||[])),L(r),k(!1)};return l.useEffect(()=>{Y()},[F]),l.useEffect(()=>{D(),o(Date.now())},[]),e.jsxs("div",{className:"main-content",children:[e.jsxs("div",{className:"search-area flex items-center justify-start",children:[e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"Brand"}),e.jsx(t,{className:"w-full",value:n.brand,allowClear:!0,style:{width:"120px"},placeholder:"Select",onChange:a=>c({...n,brand:a,brand_model:void 0}),children:Object.keys(u).map(a=>e.jsx(t.Option,{value:a,children:a},a))})]}),e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"Brand Model"}),e.jsx(t,{className:"w-full",style:{width:"160px"},allowClear:!0,placeholder:"Select",value:n.brand_model,disabled:!n.brand,onChange:a=>c({...n,brand_model:a}),children:n.brand&&u[n.brand].map(a=>e.jsx(t.Option,{value:a,children:a},a))})]}),e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"Charge Model"}),e.jsx(t,{className:"w-full",style:{width:"160px"},allowClear:!0,placeholder:"Select",onChange:a=>c({...n,charge_model:a}),children:se.map(a=>e.jsx(t.Option,{value:a,children:a},a))})]}),e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"OCPP"}),e.jsx(t,{placeholder:"Select",allowClear:!0,style:{width:"210px"},onChange:a=>c({...n,ocpp:a}),children:le.map(a=>e.jsx(t.Option,{value:a,children:a},a))})]}),e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"Phase"}),e.jsx(t,{placeholder:"Select",allowClear:!0,style:{width:"190px"},onChange:a=>c({...n,phase:a}),children:ne.map(a=>e.jsx(t.Option,{value:a,children:a},a))})]}),e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"Connector No"}),e.jsx(t,{className:"w-full",style:{width:"190px"},allowClear:!0,placeholder:"Select",onChange:a=>c({...n,connector_no:a}),children:te.map(a=>e.jsx(t.Option,{value:a,children:a},a))})]}),e.jsx("div",{className:"search-btn",children:e.jsx(d,{icon:e.jsx(h,{icon:"Search",size:"20"}),type:"primary",loading:V,onClick:G})}),e.jsx("div",{className:"search-btn clear",children:e.jsx(d,{icon:e.jsx(h,{icon:"Close",size:"24",color:"#999"}),type:"primary",onClick:X})})]}),e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("div",{className:"operation-area flex items-center justify-start",children:[e.jsxs(w.Group,{className:"layout-switch",value:b,onChange:a=>A(a.target.value),children:[e.jsx(w.Button,{value:"list",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx($,{icon:"mynaui:list",size:20}),"List"]})}),e.jsx(w.Button,{value:"grid",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx($,{icon:"proicons:grid",size:20}),"Grid"]})})]}),e.jsx(d,{type:"primary",icon:e.jsx(h,{icon:"Add",size:"20"}),className:"ml-3 mr-3",onClick:()=>P(),children:"Add Brand Model"}),e.jsx(y,{title:"Confirm delete?",onConfirm:()=>{_()},placement:"bottom",okText:"Confirm",cancelText:"Cancel",children:e.jsx(d,{disabled:i.length===0,danger:!0,icon:e.jsx(h,{icon:"Delete",size:"20",color:i.length===0?"#999":"currentColor"}),children:"Bulk Delete"})})]})}),b==="list"?e.jsx(ce,{rowSelection:{type:"checkbox",onChange:a=>x(a)},bordered:!0,columns:W,dataSource:p,rowKey:a=>`${a.id}${g.rowKeySplit}${a.id_tag}`,pagination:!1}):e.jsxs("div",{className:"grid-wrapper",children:[e.jsx(E,{className:"check-all",checked:p.length===i.length,onChange:q}),e.jsx("div",{className:"grid",children:p.map(a=>e.jsx("div",{className:"grid-item",children:e.jsxs(ie,{hoverable:!0,className:"flex flex-col",children:[e.jsxs("div",{className:"grid-top with-image flex items-center",children:[e.jsx(E,{checked:i.includes(a.id),onChange:s=>{const m=s.target.checked?[...i,a.id]:i.filter(r=>r!==a.id);x(m)}}),e.jsx(de,{src:ae,preview:!1,height:184,className:"entity-image object-cover"})]}),e.jsxs("div",{className:"grid-bottom",children:[e.jsx("div",{className:"display-item title",children:a.brand}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Brand Model:"}),e.jsx("span",{className:"value",children:e.jsx(d,{type:"link",onClick:()=>{I(a)},children:e.jsx("span",{className:"bold",children:a.brand_model})})})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Charge Model:"}),e.jsx("span",{className:"value",children:a.charge_model})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Connector No:"}),e.jsx("span",{className:"value",children:a.connector_no})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Phase:"}),e.jsx("span",{className:"value",children:a.phase})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"OCPP:"}),e.jsx("span",{className:"value",children:a.ocpp})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Current:"})," ",e.jsxs("span",{className:"value",children:[e.jsxs("span",{className:"value-item",children:[e.jsxs("span",{className:"data",children:[a.out_current_min,"A"]}),e.jsx("span",{className:"tag",children:"min"})]}),e.jsxs("span",{className:"value-item",children:[e.jsxs("span",{className:"data",children:[a.out_current_max,"A"]}),e.jsx("span",{className:"tag",children:"max"})]})]})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Power:"})," ",e.jsx("span",{className:"value",children:e.jsxs("span",{className:"value-item",children:[e.jsxs("span",{className:"data",children:[a.out_power_min,"kW"]}),e.jsx("span",{className:"tag",children:"min"}),e.jsxs("span",{className:"value-item",children:[e.jsxs("span",{className:"data",children:[a.out_power_max,"kW"]}),e.jsx("span",{className:"tag",children:"max"})]})]})})]}),e.jsx("div",{className:"operation-rows",children:e.jsx(y,{title:"Confirm delete?",onConfirm:()=>{_(a.id)},placement:"bottom",okText:"Confirm",cancelText:"Cancel",children:e.jsx(d,{type:"link",danger:!0,icon:e.jsx(h,{icon:"Delete",size:"20",color:"#FF4747"}),children:"Delete"})})})]})]},a.id)}))})]}),e.jsx("div",{className:"mr-4 mt-4 flex justify-end",children:e.jsx(oe,{total:K,showQuickJumper:!0,onChange:J})}),e.jsx(re,{visible:z,onClose:()=>C(!1),record:N,onDelete:()=>{o(Date.now())},onEdit:()=>{P(N)}}),e.jsx(ee,{visible:R,onClose:()=>f(!1),record:N,brandModels:u,brandMap:j,updateBrandModels:H,onSave:()=>{o(Date.now()),v(null),D()}})]})}export{Ce as default};
