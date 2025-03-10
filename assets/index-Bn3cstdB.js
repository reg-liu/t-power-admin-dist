import{h as G,j as e,S as l,f as g}from"./index-DGG3uvmK.js";import{r as i}from"./vendor-react-BcJS7s_i.js";import{e as K}from"./ev-PecoakOh.js";import X from"./bindTbox-C7KFrj1C.js";import Y from"./detail-fRaLcT0P.js";import F from"./editTboxNumber-h3HI8FYB.js";import J from"./unbindTbox-DbK8qEz-.js";import{w as h,K as C,i as a,x as j,P as N,F as L,y as k,j as Q,I as Z,z as q}from"./vendor-antd-B62eGpCx.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-CtEfXJzW.js";const t=[{key:"1",registration_number:"REG001",vin:"VIN001",brand_model:"Brand A Model X",tbox_number:"TBOX001"},{key:"2",registration_number:"REG002",vin:"VIN002",brand_model:"Brand B Model Y",tbox_number:"TBOX002"},{key:"3",registration_number:"REG003",vin:"VIN003",brand_model:"Brand C Model Z",tbox_number:"TBOX003"}];function oe(){const[r,d]=i.useState({}),[p,T]=i.useState("list"),[n,o]=i.useState([]),[w,m]=i.useState(!1),[c,_]=i.useState("registration_number"),[I,x]=i.useState(!1),[B,b]=i.useState(!1),[S,v]=i.useState(!1),[f,V]=i.useState(null),E=G(),R=[{title:"Registration Number",dataIndex:"registration_number",className:"bold",key:"registration_number",render:(s,u)=>e.jsx(a,{type:"link",onClick:()=>y(u),children:s})},{title:"Vin Number",dataIndex:"vin",key:"vin"},{title:"Brand Model",dataIndex:"brand_model",key:"brand_model"},{title:"Tbox Number",dataIndex:"tbox_number",key:"tbox_number"},{title:"Operation",width:"240px",key:"operation",render:()=>e.jsx("div",{className:"operations",children:e.jsx(N,{placement:"bottom",okText:"Confirm",cancelText:"Cancel",title:"Confirm unbind?",onConfirm:()=>{},children:e.jsx(a,{type:"link",icon:e.jsx(l,{icon:"Unbind",size:"20"}),children:"Unbind"})})})}],y=s=>{V(s),m(!0)},U=()=>{},z=()=>{b(!0)},M=s=>{},D=e.jsxs(h,{value:c,onChange:_,style:{width:210},children:[e.jsx(h.Option,{value:"registration_number",children:"Registration Number"}),e.jsx(h.Option,{value:"vin",children:"VIN Number"})]}),O={selectedRowKeys:n,onChange:s=>{o(s)}},P=()=>{t.length===n.length?o([]):o(t.map(s=>s.key))};return e.jsxs("div",{className:"main-content",children:[e.jsxs("div",{className:"search-area flex items-center justify-start",children:[e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"Enter"}),e.jsx(C,{addonBefore:D,placeholder:c==="registration_number"?"Registration Number":"VIN Number",allowClear:!0,value:r[c],onChange:s=>d({...r,[c]:s.target.value})})]}),e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"Tbox Number"}),e.jsx(C,{placeholder:"Tbox Number",style:{width:190},allowClear:!0,value:r.tbox_number,onChange:s=>d({...r,tbox_number:s.target.value})})]}),e.jsx("div",{className:"search-btn",children:e.jsx(a,{icon:e.jsx(l,{icon:"Search",size:"20"}),type:"primary",onClick:U})}),e.jsx("div",{className:"search-btn clear",children:e.jsx(a,{icon:e.jsx(l,{icon:"Close",size:"24",color:"#999"}),type:"primary",onClick:()=>d({})})})]}),e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("div",{className:"operation-area flex items-center justify-start",children:[e.jsxs(j.Group,{className:"layout-switch",value:p,onChange:s=>T(s.target.value),children:[e.jsx(j.Button,{value:"list",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(g,{icon:"mynaui:list",size:20}),"List"]})}),e.jsx(j.Button,{value:"grid",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(g,{icon:"proicons:grid",size:20}),"Grid"]})})]}),E&&e.jsx(a,{icon:e.jsx(l,{icon:"Bind",size:"20"}),onClick:z,type:"primary",className:"ml-3 mr-3",children:"Bind Tbox"}),e.jsx(N,{title:"Confirm unbind?",onConfirm:()=>{},okText:"Yes",cancelText:"No",children:e.jsx(a,{disabled:n.length===0,icon:e.jsx(l,{icon:"Unbind",size:"20",color:n.length===0?"#999":"currentColor"}),children:"Bulk Unbind"})})]})}),p==="list"?e.jsx(L,{columns:R,dataSource:t,bordered:!0,rowSelection:O,rowKey:"key",pagination:!1}):e.jsxs("div",{className:"grid-wrapper",children:[e.jsx(k,{className:"check-all",checked:t.length===n.length,onChange:P}),e.jsx("div",{className:"grid",children:t.map(s=>e.jsx("div",{className:"grid-item",children:e.jsxs(Q,{className:"w-full",children:[e.jsxs("div",{className:"grid-top flex items-center",children:[e.jsx(k,{checked:n.includes(s.key),onChange:()=>{const u=n.includes(s.key)?n.filter(A=>A!==s.key):[...n,s.key];o(u)}}),e.jsx(Z,{src:K,preview:!1,height:184,className:"entity-image object-cover"})]}),e.jsxs("div",{className:"grid-bottom",children:[e.jsx("div",{className:"display-item title",children:e.jsx("span",{className:"value",children:e.jsx(a,{type:"link",className:"detail-link",onClick:()=>{y(s)},children:e.jsx("span",{className:"bold",children:s.registration_number})})})}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"VIN Number:"}),e.jsx("span",{className:"value",children:s.vin})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Brand Model:"}),e.jsx("span",{className:"value",children:s.brand_model})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Tbox Number:"}),e.jsx("span",{className:"value",children:s.tbox_number})]}),e.jsx("div",{className:"operation-rows",children:e.jsx(N,{title:"Confirm unbind?",onConfirm:()=>M(s.registration_number),okText:"Yes",cancelText:"No",children:e.jsx(a,{type:"link",icon:e.jsx(l,{icon:"Unbind",size:"20"}),children:"Unbind EV"})})})]})]},s.key)}))})]}),e.jsx("div",{className:"mr-4 mt-4 flex justify-end",children:e.jsx(q,{total:t.length,showQuickJumper:!0})}),e.jsx(Y,{visible:w,onCancel:()=>m(!1),data:f,onEditTboxNumber:()=>{x(!0)},onDeleteBoundedTbox:()=>{m(!1)}}),e.jsx(F,{visible:I,onCancel:()=>x(!1),onConfirm:s=>{x(!1)},initialTboxNumber:f?.tbox_number||""}),e.jsx(X,{visible:B,onCancel:()=>b(!1),onConfirm:s=>{b(!1)}}),e.jsx(J,{visible:S,onCancel:()=>v(!1),onConfirm:s=>{v(!1)}})]})}export{oe as default};
