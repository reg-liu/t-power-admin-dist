import{h as G,j as e,S as t,f as y}from"./index-CYDo1yA3.js";import{r as a}from"./vendor-react-BcJS7s_i.js";import{e as K}from"./ev-PecoakOh.js";import X from"./bindTbox-Dg-f3QJ_.js";import Y from"./detail-DC716uUG.js";import F from"./editTboxNumber-CzhxiQbX.js";import J from"./unbindTbox-CmF33O0e.js";import{w as h,K as C,i as l,x as j,P as N,F as L,y as k,j as Q,I as Z,z as q}from"./vendor-antd-B62eGpCx.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-CtEfXJzW.js";const r=[{key:"1",registration_number:"REG001",vin:"VIN001",brand_model:"Brand A Model X",tbox_number:"TBOX001"},{key:"2",registration_number:"REG002",vin:"VIN002",brand_model:"Brand B Model Y",tbox_number:"TBOX002"},{key:"3",registration_number:"REG003",vin:"VIN003",brand_model:"Brand C Model Z",tbox_number:"TBOX003"}];function oe(){const[o,m]=a.useState({}),[p,T]=a.useState("list"),[n,c]=a.useState([]),[_,x]=a.useState(!1),[d,w]=a.useState("registration_number"),[I,b]=a.useState(!1),[B,u]=a.useState(!1),[S,v]=a.useState(!1),[f,V]=a.useState(null),E=G(),R=[{title:"Registration Number",dataIndex:"registration_number",className:"bold",key:"registration_number",render:(s,i)=>e.jsx(l,{type:"link",onClick:()=>g(i),children:s})},{title:"Vin Number",dataIndex:"vin",key:"vin"},{title:"Brand Model",dataIndex:"brand_model",key:"brand_model"},{title:"Tbox Number",dataIndex:"tbox_number",key:"tbox_number"},{title:"Operation",width:"240px",key:"operation",render:()=>e.jsx("div",{className:"operations",children:e.jsx(N,{placement:"bottom",okText:"Confirm",cancelText:"Cancel",title:"Confirm unbind?",onConfirm:()=>{},children:e.jsx(l,{type:"link",icon:e.jsx(t,{icon:"Unbind",size:"20"}),children:"Unbind"})})})}],g=s=>{V(s),x(!0)},U=()=>{},z=()=>{u(!0)},M=s=>{},P=e.jsxs(h,{value:d,onChange:w,style:{width:210},children:[e.jsx(h.Option,{value:"registration_number",children:"Registration Number"}),e.jsx(h.Option,{value:"vin",children:"VIN Number"})]}),D={selectedRowKeys:n,onChange:s=>{c(s)}},O=()=>{r.length===n.length?c([]):c(r.map(s=>s.key))};return e.jsxs("div",{className:"main-content",children:[e.jsxs("div",{className:"search-area flex items-center justify-start",children:[e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"Enter"}),e.jsx(C,{addonBefore:P,placeholder:d==="registration_number"?"Registration Number":"VIN Number",allowClear:!0,value:o[d],onChange:s=>{let i={...o};delete i.registration_number,delete i.vin,i={...i,[d]:s.target.value},m(i)}})]}),e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"Tbox Number"}),e.jsx(C,{placeholder:"Tbox Number",style:{width:190},allowClear:!0,value:o.tbox_number,onChange:s=>m({...o,tbox_number:s.target.value})})]}),e.jsx("div",{className:"search-btn",children:e.jsx(l,{icon:e.jsx(t,{icon:"Search",size:"20"}),type:"primary",onClick:U})}),e.jsx("div",{className:"search-btn clear",children:e.jsx(l,{icon:e.jsx(t,{icon:"Close",size:"24",color:"#999"}),type:"primary",onClick:()=>m({})})})]}),e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("div",{className:"operation-area flex items-center justify-start",children:[e.jsxs(j.Group,{className:"layout-switch",value:p,onChange:s=>T(s.target.value),children:[e.jsx(j.Button,{value:"list",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(y,{icon:"mynaui:list",size:20}),"List"]})}),e.jsx(j.Button,{value:"grid",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(y,{icon:"proicons:grid",size:20}),"Grid"]})})]}),E&&e.jsx(l,{icon:e.jsx(t,{icon:"Bind",size:"20"}),onClick:z,type:"primary",className:"ml-3 mr-3",children:"Bind Tbox"}),e.jsx(N,{title:"Confirm unbind?",onConfirm:()=>{},okText:"Yes",cancelText:"No",children:e.jsx(l,{disabled:n.length===0,icon:e.jsx(t,{icon:"Unbind",size:"20",color:n.length===0?"#999":"currentColor"}),children:"Bulk Unbind"})})]})}),p==="list"?e.jsx(L,{columns:R,dataSource:r,bordered:!0,rowSelection:D,rowKey:"key",pagination:!1}):e.jsxs("div",{className:"grid-wrapper",children:[e.jsx(k,{className:"check-all",checked:r.length===n.length,onChange:O}),e.jsx("div",{className:"grid",children:r.map(s=>e.jsx("div",{className:"grid-item",children:e.jsxs(Q,{className:"w-full",children:[e.jsxs("div",{className:"grid-top flex items-center",children:[e.jsx(k,{checked:n.includes(s.key),onChange:()=>{const i=n.includes(s.key)?n.filter(A=>A!==s.key):[...n,s.key];c(i)}}),e.jsx(Z,{src:K,preview:!1,height:184,className:"entity-image object-cover"})]}),e.jsxs("div",{className:"grid-bottom",children:[e.jsx("div",{className:"display-item title",children:e.jsx("span",{className:"value",children:e.jsx(l,{type:"link",className:"detail-link",onClick:()=>{g(s)},children:e.jsx("span",{className:"bold",children:s.registration_number})})})}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"VIN Number:"}),e.jsx("span",{className:"value",children:s.vin})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Brand Model:"}),e.jsx("span",{className:"value",children:s.brand_model})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Tbox Number:"}),e.jsx("span",{className:"value",children:s.tbox_number})]}),e.jsx("div",{className:"operation-rows",children:e.jsx(N,{title:"Confirm unbind?",onConfirm:()=>M(s.registration_number),okText:"Yes",cancelText:"No",children:e.jsx(l,{type:"link",icon:e.jsx(t,{icon:"Unbind",size:"20"}),children:"Unbind EV"})})})]})]},s.key)}))})]}),e.jsx("div",{className:"mr-4 mt-4 flex justify-end",children:e.jsx(q,{total:r.length,showQuickJumper:!0})}),e.jsx(Y,{visible:_,onCancel:()=>x(!1),data:f,onEditTboxNumber:()=>{b(!0)},onDeleteBoundedTbox:()=>{x(!1)}}),e.jsx(F,{visible:I,onCancel:()=>b(!1),onConfirm:s=>{b(!1)},initialTboxNumber:f?.tbox_number||""}),e.jsx(X,{visible:B,onCancel:()=>u(!1),onConfirm:s=>{u(!1)}}),e.jsx(J,{visible:S,onCancel:()=>v(!1),onConfirm:s=>{v(!1)}})]})}export{oe as default};
