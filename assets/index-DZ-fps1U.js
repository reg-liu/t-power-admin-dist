import{g as R,j as e,S as t,f as b}from"./index-B4m4Hung.js";import{r as a}from"./vendor-react-BcJS7s_i.js";import{c as D}from"./chargepoint-wPlJlVYc.js";import J from"./addChargepoint-D7FstXzv.js";import H from"./chargepointUserDetail-CkegbC5_.js";import F from"./editLocation-BcHdrGTF.js";import G from"./unbindUser-DoCNSsbW.js";import{K as O,w as p,k as i,x as h,P as x,F as Q,l as q,y as W,I as X,z as Y}from"./vendor-antd-DOcLYMw-.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-WjIMX4x3.js";import"./index-BcPavN3T.js";import"./index.modern-BgdPXcnK.js";import"./vendor-charts-Cv5x1InZ.js";import"./index-Dj133iwh.js";const{Option:j}=p;function he(){const[u,N]=a.useState({}),[l,g]=a.useState("name"),[y,w]=a.useState(),[v,S]=a.useState("list"),[n,f]=a.useState([]),[k,o]=a.useState(!1),[U,c]=a.useState(!1),[I,d]=a.useState(!1);a.useState(!1);const[V,C]=a.useState(!1),M=R(),r=[{name:"John Doe",email:"john@example.com",phone:"1234567890"},{name:"Jane Smith",email:"jane@example.com",phone:"0987654321"},{name:"Bob Johnson",email:"bob@example.com",phone:"5555555555"}],m=[{id:"1",name:"Chargepoint 1",user:r[0],location:{street:"3 Street",hallam:"Hallam",vic:"VIC 3803"},picture:"https://avatars.githubusercontent.com/u/64935023"},{id:"2",name:"Chargepoint 2",user:r[1],location:{street:"4 Street",hallam:"Hallam",vic:"VIC 3803"},picture:"https://avatars.githubusercontent.com/u/64935023"},{id:"3",name:"Chargepoint 3",user:r[2],location:{street:"5 Street",hallam:"Hallam",vic:"VIC 3803"},picture:"https://avatars.githubusercontent.com/u/64935023"}],B=[{title:"Charge Point",dataIndex:"name",key:"name",className:"bold",render:s=>e.jsx(i,{type:"link",onClick:()=>o(!0),children:s})},{title:"User",dataIndex:"user",key:"user",render:s=>e.jsxs("div",{className:"display-row",children:[e.jsx("div",{className:"row-item split",children:s.name}),e.jsx("div",{className:"row-item split",children:s.email}),e.jsx("div",{className:"row-item",children:s.phone})]})},{title:"Location",dataIndex:"location",key:"location",render:s=>e.jsxs("div",{className:"display-row location",children:[e.jsx("div",{className:"row-item",children:s.street}),e.jsx("div",{className:"row-item",children:s.hallam}),e.jsx("div",{className:"row-item",children:s.vic})]})},{title:"Operation",width:"140px",key:"operation",render:()=>e.jsx("div",{className:"operations",children:e.jsx(x,{placement:"bottom",okText:"Confirm",cancelText:"Cancel",title:"Confirm unbind?",onConfirm:()=>{},children:e.jsx(i,{type:"link",icon:e.jsx(t,{icon:"Unbind",size:"20"}),children:"Unbind"})})})}],P=()=>{},T=()=>{d(!0)},z={selectedRowKeys:n,onChange:s=>{f(s)}},E=e.jsxs(p,{value:l,onChange:g,style:{width:156},children:[e.jsx(j,{value:"name",children:"Charge Point"}),e.jsx(j,{value:"sn",children:"SN"})]});return e.jsxs("div",{className:"main-content",children:[e.jsxs("div",{className:"search-area flex items-center justify-start",children:[e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"Enter"}),e.jsx(O,{addonBefore:E,placeholder:l==="name"?"Charge Point":"SN",allowClear:!0,value:u[l],onChange:s=>N({...u,[l]:s.target.value})})]}),e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"User"}),e.jsx(p,{className:"w-full",allowClear:!0,value:y,style:{width:"150px"},onChange:s=>w(s),placeholder:"User",children:r.map(s=>e.jsx(j,{value:s.name,children:s.name},s.name))})]}),e.jsx("div",{className:"search-btn",children:e.jsx(i,{icon:e.jsx(t,{icon:"Search",size:"20"}),type:"primary",onClick:P})})]}),e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("div",{className:"operation-area flex items-center justify-start",children:[e.jsxs(h.Group,{className:"layout-switch",value:v,onChange:s=>S(s.target.value),children:[e.jsx(h.Button,{value:"list",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(b,{icon:"mynaui:list",size:20}),"List"]})}),e.jsx(h.Button,{value:"grid",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(b,{icon:"proicons:grid",size:20}),"Grid"]})})]}),M&&e.jsx(i,{icon:e.jsx(t,{icon:"Bind",size:"20"}),type:"primary",onClick:T,className:"ml-3 mr-3",children:"Bind User and Charge Point"}),e.jsx(x,{placement:"bottom",okText:"Confirm",cancelText:"Cancel",title:"Confirm unbind?",onConfirm:()=>{},children:e.jsx(i,{disabled:n.length===0,icon:e.jsx(t,{icon:"Unbind",size:"20",color:n.length===0?"#999":"currentColor"}),children:"Bulk Unbind"})})]})}),v==="list"?e.jsx(Q,{rowSelection:z,columns:B,bordered:!0,dataSource:m,rowKey:"id",pagination:!1}):e.jsx("div",{className:"grid",children:m.map(s=>e.jsx("div",{className:"grid-item",children:e.jsxs(q,{children:[e.jsxs("div",{className:"grid-top with-image flex items-center",children:[e.jsx(W,{checked:n.includes(s.id),onChange:L=>{const A=L.target.checked?[...n,s.id]:n.filter(K=>K!==s.id);f(A)}}),e.jsx(X,{src:D,preview:!1,height:184,className:"entity-image object-cover"})]}),e.jsxs("div",{className:"grid-bottom",children:[e.jsx("div",{className:"display-item",children:e.jsx(i,{type:"link",className:"detail-link",onClick:()=>{o(!0)},children:s.name})}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label bold",children:"User:"})," ",e.jsx("span",{className:"value",children:e.jsxs("div",{children:[e.jsx("div",{children:s.user.name}),e.jsx("div",{children:s.user.email}),e.jsx("div",{children:s.user.phone})]})})]}),e.jsxs("div",{className:"display-item location",children:[e.jsx("span",{className:"label",children:"Location:"})," ",e.jsxs("span",{className:"value",children:[e.jsx("span",{className:"mr-1",children:s.location.street}),e.jsx("span",{className:"mr-1",children:s.location.hallam}),e.jsx("span",{children:s.location.vic})]})]}),e.jsx("div",{className:"operation-rows",children:e.jsx(x,{placement:"bottom",okText:"Confirm",cancelText:"Cancel",title:"Confirm unbind?",onConfirm:()=>{},children:e.jsx(i,{type:"link",icon:e.jsx(t,{icon:"Unbind",size:"20"}),children:"Unbind"})})})]})]},s.id)}))}),e.jsx("div",{className:"mr-4 mt-4 flex justify-end",children:e.jsx(Y,{total:m.length,showQuickJumper:!0})}),e.jsx(H,{visible:k,onClose:()=>o(!1),onEditLocation:()=>{o(!1),c(!0)}}),e.jsx(F,{visible:U,onCancel:()=>c(!1),onConfirm:()=>c(!1)}),e.jsx(J,{visible:I,onCancel:()=>d(!1),onConfirm:()=>d(!1)}),e.jsx(G,{visible:V,onCancel:()=>C(!1),onConfirm:()=>C(!1)})]})}export{he as default};
