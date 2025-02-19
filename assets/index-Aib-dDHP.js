import{g as D,j as e,S as r,f as g}from"./index-BeJwjvqM.js";import{r as i}from"./vendor-react-BcJS7s_i.js";import{e as J}from"./ev-PecoakOh.js";import R from"./bindEV-BBtXKLIN.js";import U from"./detail-COsZAx9c.js";import P from"./editEV-olA5e2IK.js";import{K as A,w as l,k as a,x as m,P as h,F,l as G,y as K,I as L,z as Y}from"./vendor-antd-DOcLYMw-.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-WjIMX4x3.js";const{Option:k}=l,x=[{key:"1",id:"1",brand:"Tesla",brand_model:"Model 3",year:2021,registration_number:"ABC123",vin:"1HGBH41JXMN109186",owner:"John Doe"},{key:"2",id:"2",brand:"Nissan",brand_model:"Leaf",year:2020,registration_number:"XYZ789",vin:"1N4AZ1CP3LC311439",owner:"Jane Smith"},{key:"3",id:"3",brand:"Chevrolet",brand_model:"Bolt",year:2022,registration_number:"DEF456",vin:"1G1FY6S07L4118595",owner:"Bob Johnson"}];function ie(){const[u,C]=i.useState({}),[j,S]=i.useState("list"),[n,b]=i.useState([]),[p,N]=i.useState(!1),[E,v]=i.useState(!1),[o,B]=i.useState("registration_number"),[y,f]=i.useState(!1),[c,V]=i.useState(null),I=()=>{},t=D(),_=[{title:"Registration Number",dataIndex:"registration_number",key:"registration_number",className:"bold",render:(s,d)=>e.jsx(a,{type:"link",onClick:()=>w(d),children:s})},{title:"VIN Number",dataIndex:"vin",key:"vin"},{title:"EV Owner",dataIndex:"owner",key:"owner",render:s=>t?s:null},{title:"Operation",width:"240px",key:"operation",render:()=>e.jsx("div",{className:"operations",children:e.jsx(h,{placement:"bottom",okText:"Confirm",cancelText:"Cancel",title:"Confirm unbind?",onConfirm:()=>{},children:e.jsx(a,{type:"link",icon:e.jsx(r,{icon:"Unbind",size:"20"}),children:"Unbind"})})})}],M=s=>{},w=s=>{V(s),N(!0)},T={selectedRowKeys:n,onChange:s=>b(s)},O=e.jsxs(l,{value:o,onChange:B,style:{width:210},children:[e.jsx(k,{value:"registration_number",children:"Registration Number"}),e.jsx(k,{value:"vin",children:"VIN Number"})]});return e.jsxs("div",{className:"main-content",children:[e.jsxs("div",{className:"search-area flex items-center justify-start",children:[e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"Enter"}),e.jsx(A,{addonBefore:O,placeholder:o==="registration_number"?"Registration Number":"VIN Number",allowClear:!0,value:u[o],onChange:s=>C({...u,[o]:s.target.value})})]}),t&&e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"EV Owner"}),e.jsxs(l,{style:{width:210},allowClear:!0,className:"w-full",placeholder:"EV Owner",children:[e.jsx(l.Option,{value:"john",children:"John Doe"}),e.jsx(l.Option,{value:"jane",children:"Jane Smith"}),e.jsx(l.Option,{value:"bob",children:"Bob Johnson"})]})]}),e.jsx("div",{className:"search-btn",children:e.jsx(a,{icon:e.jsx(r,{icon:"Search",size:"20"}),type:"primary",onClick:I})})]}),e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("div",{className:"operation-area flex items-center justify-start",children:[e.jsxs(m.Group,{className:"layout-switch",value:j,onChange:s=>S(s.target.value),children:[e.jsx(m.Button,{value:"list",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(g,{icon:"mynaui:list",size:20}),"List"]})}),e.jsx(m.Button,{value:"grid",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(g,{icon:"proicons:grid",size:20}),"Grid"]})})]}),e.jsx(a,{className:"ml-3 mr-3",type:"primary",icon:e.jsx(r,{icon:"Bind",size:"20"}),onClick:()=>v(!0),children:"Bind EV"}),t&&e.jsx(h,{title:"Confirm unbind?",onConfirm:()=>{},okText:"Yes",cancelText:"No",children:e.jsx(a,{disabled:n.length===0,icon:e.jsx(r,{icon:"Unbind",size:"20",color:n.length===0?"#999":"currentColor"}),children:"Bulk Unbind"})})]})}),j==="list"?e.jsx(F,{rowSelection:t?T:void 0,columns:_,bordered:!0,pagination:!1,dataSource:x}):e.jsx("div",{className:"grid",children:x.map(s=>e.jsx("div",{className:"grid-item",children:e.jsxs(G,{children:[e.jsxs("div",{className:"grid-top with-image flex items-center",children:[t&&e.jsx(K,{checked:n.includes(s.key),onChange:()=>{const d=n.includes(s.key)?n.filter(z=>z!==s.key):[...n,s.key];b(d)}}),e.jsx(L,{src:J,preview:!1,height:184,className:"entity-image object-cover"})]}),e.jsxs("div",{className:"grid-bottom",children:[e.jsx("div",{className:"display-item title",children:e.jsx("span",{className:"value",children:e.jsx(a,{type:"link",className:"detail-link",onClick:()=>{w(s)},children:e.jsx("span",{className:"bold",children:s.registration_number})})})}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"VIN Number:"}),e.jsx("span",{className:"value",children:s.vin})]}),t&&e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"EV Owner:"}),e.jsx("span",{className:"value",children:s.owner})]}),e.jsx("div",{className:"operation-rows",children:e.jsx(h,{title:"Confirm unbind?",onConfirm:()=>M(s.id),okText:"Yes",cancelText:"No",children:e.jsx(a,{type:"link",icon:e.jsx(r,{icon:"Unbind",size:"20"}),children:"Unbind EV"})})})]})]},s.id)}))}),e.jsx("div",{className:"mr-4 mt-4 flex justify-end",children:e.jsx(Y,{total:x.length,showQuickJumper:!0})}),p&&c&&e.jsx(U,{visible:p,onClose:()=>N(!1),ev:c,onEdit:()=>{f(!0)}}),e.jsx(R,{visible:E,onClose:()=>v(!1)}),y&&c&&e.jsx(P,{visible:y,onClose:()=>f(!1),ev:c})]})}export{ie as default};
