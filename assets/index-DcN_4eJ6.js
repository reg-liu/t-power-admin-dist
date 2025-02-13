import{g as J,j as e,f}from"./index-L59LL-oJ.js";import{r as a}from"./vendor-react-BcJS7s_i.js";import{c as P}from"./chargepoint-wPlJlVYc.js";import F from"./addChargepoint-B_3LEejp.js";import G from"./addUserChargepoint-CSQb3rjE.js";import K from"./chargepointUserDetail-DXdg9CFx.js";import O from"./editLocation-DFk2D158.js";import Q from"./unbindUser-XXbIEadX.js";import{I as $,w as u,k as i,y as h,z as x,F as q,l as W,O as X,H as Y}from"./vendor-antd-C5sFxZgj.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-C8CVoVQY.js";import"./index-Brp3R4OP.js";import"./index.modern-BgdPXcnK.js";import"./vendor-charts-Cv5x1InZ.js";import"./index-Dj133iwh.js";const{Option:j}=u;function xe(){const[p,N]=a.useState({}),[l,C]=a.useState("name"),[b,g]=a.useState(""),[v,w]=a.useState("list"),[y,S]=a.useState([]),[U,t]=a.useState(!1),[k,r]=a.useState(!1),[I,o]=a.useState(!1),[V,c]=a.useState(!1),[M,d]=a.useState(!1),A=J(),n=[{name:"John Doe",email:"john@example.com",phone:"1234567890"},{name:"Jane Smith",email:"jane@example.com",phone:"0987654321"},{name:"Bob Johnson",email:"bob@example.com",phone:"5555555555"}],m=[{id:"1",name:"Chargepoint 1",user:n[0],location:{street:"3 Street",hallam:"Hallam",vic:"VIC 3803"},picture:"https://avatars.githubusercontent.com/u/64935023"},{id:"2",name:"Chargepoint 2",user:n[1],location:{street:"4 Street",hallam:"Hallam",vic:"VIC 3803"},picture:"https://avatars.githubusercontent.com/u/64935023"},{id:"3",name:"Chargepoint 3",user:n[2],location:{street:"5 Street",hallam:"Hallam",vic:"VIC 3803"},picture:"https://avatars.githubusercontent.com/u/64935023"}],L=[{title:"Name",dataIndex:"name",key:"name",className:"bold",render:s=>e.jsx(i,{type:"link",onClick:()=>t(!0),children:s})},{title:"User",dataIndex:"user",key:"user",render:s=>e.jsxs("div",{className:"display-row",children:[e.jsx("div",{className:"row-item split",children:s.name}),e.jsx("div",{className:"row-item split",children:s.email}),e.jsx("div",{className:"row-item",children:s.phone})]})},{title:"Location",dataIndex:"location",key:"location",render:s=>e.jsxs("div",{className:"display-row",children:[e.jsx("div",{className:"row-item",children:s.street}),e.jsx("div",{className:"row-item",children:s.hallam}),e.jsx("div",{className:"row-item",children:s.vic})]})}],B=()=>{},E=()=>{d(!0)},R=()=>{o(!0)},T=()=>{c(!0)},z={onChange:(s,H)=>{S(H)}},D=e.jsxs(u,{value:l,onChange:C,style:{width:90},children:[e.jsx(j,{value:"name",children:"Name"}),e.jsx(j,{value:"sn",children:"SN"})]});return e.jsxs("div",{className:"main-content",children:[e.jsxs("div",{className:"search-area flex items-center justify-start",children:[e.jsxs("div",{className:"search-item",children:[e.jsx("label",{className:"block",children:"Charge Point"}),e.jsx($,{addonBefore:D,placeholder:l==="name"?"Name":"SN",allowClear:!0,value:p[l],onChange:s=>N({...p,[l]:s.target.value})})]}),e.jsxs("div",{className:"search-item",children:[e.jsx("label",{className:"block",children:"User"}),e.jsx(u,{className:"w-full",value:b,onChange:s=>g(s),placeholder:"Select user",children:n.map(s=>e.jsx(j,{value:s.name,children:s.name},s.name))})]}),e.jsx("div",{className:"search-btn ml-auto flex w-1/5 items-end justify-end",children:e.jsx(i,{type:"primary",onClick:B,className:"mt-6",children:"Search"})})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{children:y.length>0&&e.jsx(i,{icon:e.jsx(h,{}),onClick:E,children:"Unbind User"})}),e.jsxs("div",{className:"operation-area flex items-center",children:[A&&e.jsx(i,{icon:e.jsx(h,{}),onClick:R,className:"mr-2",children:"Add New Chargepoint"}),e.jsx(i,{icon:e.jsx(h,{}),onClick:T,className:"mr-2",children:"Add User Chargepoint"}),e.jsxs(x.Group,{className:"layout-switch",value:v,onChange:s=>w(s.target.value),children:[e.jsx(x.Button,{value:"list",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(f,{icon:"mynaui:list",size:20}),"List"]})}),e.jsx(x.Button,{value:"grid",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(f,{icon:"proicons:grid",size:20}),"Grid"]})})]})]})]}),v==="list"?e.jsx(q,{rowSelection:z,columns:L,bordered:!0,dataSource:m,rowKey:"id"}):e.jsx("div",{className:"grid",children:m.map(s=>e.jsx("div",{className:"grid-item",children:e.jsxs(W,{children:[e.jsx("div",{className:"grid-top with-image flex items-center",children:e.jsx(X,{src:P,preview:!1,height:184,className:"entity-image object-cover"})}),e.jsxs("div",{className:"grid-bottom",children:[e.jsx(i,{type:"link",className:"detail-link",onClick:()=>{t(!0)},children:s.name}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"User:"})," ",e.jsx("span",{className:"value",children:e.jsxs("div",{children:[e.jsx("div",{children:s.user.name}),e.jsx("div",{children:s.user.email}),e.jsx("div",{children:s.user.phone})]})})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Location:"})," ",e.jsx("span",{className:"value",children:e.jsxs("div",{children:[e.jsx("div",{children:s.location.street}),e.jsx("div",{children:s.location.hallam}),e.jsx("div",{children:s.location.vic})]})})]})]})]},s.id)}))}),e.jsx("div",{className:"mt-6 flex justify-end",children:e.jsx(Y,{total:m.length,showSizeChanger:!0,showQuickJumper:!0,showTotal:s=>`Total ${s} items`})}),e.jsx(K,{visible:U,onClose:()=>t(!1),onEditLocation:()=>{t(!1),r(!0)}}),e.jsx(O,{visible:k,onCancel:()=>r(!1),onConfirm:()=>r(!1)}),e.jsx(F,{visible:I,onCancel:()=>o(!1),onConfirm:()=>o(!1)}),e.jsx(G,{visible:V,onCancel:()=>c(!1),onConfirm:()=>c(!1)}),e.jsx(Q,{visible:M,onCancel:()=>d(!1),onConfirm:()=>d(!1)})]})}export{xe as default};
