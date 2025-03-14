import{h as P,j as e,S as r,f as k}from"./index-CYDo1yA3.js";import{r as a}from"./vendor-react-BcJS7s_i.js";import{e as R}from"./ev-PecoakOh.js";import U from"./bindEV-NEiC-JPd.js";import A from"./detail-CJkMOPT0.js";import K from"./editEV-BbxcUR2O.js";import{K as F,w as c,i as t,x,P as u,F as G,y as C,j as L,I as Y,z as H}from"./vendor-antd-B62eGpCx.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-CtEfXJzW.js";const{Option:S}=c,o=[{key:"1",id:"1",brand:"Tesla",brand_model:"Model 3",year:2021,registration_number:"ABC123",vin:"1HGBH41JXMN109186",owner:"John Doe"},{key:"2",id:"2",brand:"Nissan",brand_model:"Leaf",year:2020,registration_number:"XYZ789",vin:"1N4AZ1CP3LC311439",owner:"Jane Smith"},{key:"3",id:"3",brand:"Chevrolet",brand_model:"Bolt",year:2022,registration_number:"DEF456",vin:"1G1FY6S07L4118595",owner:"Bob Johnson"}];function ne(){const[j,p]=a.useState({}),[b,E]=a.useState("list"),[i,d]=a.useState([]),[N,v]=a.useState(!1),[B,y]=a.useState(!1),[m,V]=a.useState("registration_number"),[g,f]=a.useState(!1),[h,I]=a.useState(null),_=()=>{},l=P(),M=[{title:"Registration Number",dataIndex:"registration_number",key:"registration_number",className:"bold",render:(s,n)=>e.jsx(t,{type:"link",onClick:()=>w(n),children:s})},{title:"VIN Number",dataIndex:"vin",key:"vin"},{title:"EV Owner",dataIndex:"owner",key:"owner",render:s=>l?s:null},{title:"Operation",width:"240px",key:"operation",render:()=>e.jsx("div",{className:"operations",children:e.jsx(u,{placement:"bottom",okText:"Confirm",cancelText:"Cancel",title:"Confirm unbind?",onConfirm:()=>{},children:e.jsx(t,{type:"link",icon:e.jsx(r,{icon:"Unbind",size:"20"}),children:"Unbind"})})})}],T=s=>{},w=s=>{I(s),v(!0)},z={selectedRowKeys:i,onChange:s=>d(s)},O=e.jsxs(c,{value:m,onChange:V,style:{width:210},children:[e.jsx(S,{value:"registration_number",children:"Registration Number"}),e.jsx(S,{value:"vin",children:"VIN Number"})]}),D=()=>{o.length===i.length?d([]):d(o.map(s=>s.key))};return e.jsxs("div",{className:"main-content",children:[e.jsxs("div",{className:"search-area flex items-center justify-start",children:[e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"Enter"}),e.jsx(F,{addonBefore:O,placeholder:m==="registration_number"?"Registration Number":"VIN Number",allowClear:!0,value:j[m],onChange:s=>{let n={...j};delete n.registration_number,delete n.vin,n={...n,[m]:s.target.value},p(n)}})]}),l&&e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"EV Owner"}),e.jsxs(c,{style:{width:210},allowClear:!0,className:"w-full",placeholder:"EV Owner",children:[e.jsx(c.Option,{value:"john",children:"John Doe"}),e.jsx(c.Option,{value:"jane",children:"Jane Smith"}),e.jsx(c.Option,{value:"bob",children:"Bob Johnson"})]})]}),e.jsx("div",{className:"search-btn",children:e.jsx(t,{icon:e.jsx(r,{icon:"Search",size:"20"}),type:"primary",onClick:_})}),e.jsx("div",{className:"search-btn clear",children:e.jsx(t,{icon:e.jsx(r,{icon:"Close",size:"24",color:"#999"}),type:"primary",onClick:()=>p({})})})]}),e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("div",{className:"operation-area flex items-center justify-start",children:[e.jsxs(x.Group,{className:"layout-switch",value:b,onChange:s=>E(s.target.value),children:[e.jsx(x.Button,{value:"list",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(k,{icon:"mynaui:list",size:20}),"List"]})}),e.jsx(x.Button,{value:"grid",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(k,{icon:"proicons:grid",size:20}),"Grid"]})})]}),e.jsx(t,{className:"ml-3 mr-3",type:"primary",icon:e.jsx(r,{icon:"Bind",size:"20"}),onClick:()=>y(!0),children:"Bind EV"}),l&&e.jsx(u,{title:"Confirm unbind?",onConfirm:()=>{},okText:"Yes",cancelText:"No",children:e.jsx(t,{disabled:i.length===0,icon:e.jsx(r,{icon:"Unbind",size:"20",color:i.length===0?"#999":"currentColor"}),children:"Bulk Unbind"})})]})}),b==="list"?e.jsx(G,{rowSelection:l?z:void 0,columns:M,bordered:!0,rowKey:"key",pagination:!1,dataSource:o}):e.jsxs("div",{className:"grid-wrapper",children:[e.jsx(C,{className:"check-all",checked:o.length===i.length,onChange:D}),e.jsx("div",{className:"grid",children:o.map(s=>e.jsx("div",{className:"grid-item",children:e.jsxs(L,{children:[e.jsxs("div",{className:"grid-top with-image flex items-center",children:[l&&e.jsx(C,{checked:i.includes(s.key),onChange:()=>{const n=i.includes(s.key)?i.filter(J=>J!==s.key):[...i,s.key];d(n)}}),e.jsx(Y,{src:R,preview:!1,height:184,className:"entity-image object-cover"})]}),e.jsxs("div",{className:"grid-bottom",children:[e.jsx("div",{className:"display-item title",children:e.jsx("span",{className:"value",children:e.jsx(t,{type:"link",className:"detail-link",onClick:()=>{w(s)},children:e.jsx("span",{className:"bold",children:s.registration_number})})})}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"VIN Number:"}),e.jsx("span",{className:"value",children:s.vin})]}),l&&e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"EV Owner:"}),e.jsx("span",{className:"value",children:s.owner})]}),e.jsx("div",{className:"operation-rows",children:e.jsx(u,{title:"Confirm unbind?",onConfirm:()=>T(s.id),okText:"Yes",cancelText:"No",children:e.jsx(t,{type:"link",icon:e.jsx(r,{icon:"Unbind",size:"20"}),children:"Unbind EV"})})})]})]},s.id)}))})]}),e.jsx("div",{className:"mr-4 mt-4 flex justify-end",children:e.jsx(H,{total:o.length,showQuickJumper:!0})}),N&&h&&e.jsx(A,{visible:N,onClose:()=>v(!1),ev:h,onEdit:()=>{f(!0)}}),e.jsx(U,{visible:B,onClose:()=>y(!1)}),g&&h&&e.jsx(K,{visible:g,onClose:()=>f(!1),ev:h})]})}export{ne as default};
