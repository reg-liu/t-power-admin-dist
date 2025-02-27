import{j as e,f as x}from"./index-DojVPh2z.js";import{r as t}from"./vendor-react-BcJS7s_i.js";import D from"./addRFID-C3pm4EpF.js";import B from"./bind-CYuQs7dM.js";import A from"./bindUser-BKkRw4N_.js";import F from"./detail-B26YP31s.js";import V from"./editAvailable-DmoTYFzs.js";import{K as E,v as n,i,P as U,am as O,an as _,ao as K,J as T,w as o,F as $,j as z,y as M}from"./vendor-antd-IarLURi0.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-Bc-7OOPz.js";const h=[{key:"1",card_number:"RFID001",status:"online"},{key:"2",card_number:"RFID002",status:"offline"},{key:"3",card_number:"RFID003",status:"unknown"}];function Z(){const[d,j]=t.useState("list"),[a,r]=t.useState([]),[f,c]=t.useState(!1),[b,m]=t.useState(!1),[p,u]=t.useState(!1),[v,y]=t.useState(!1),[k,l]=t.useState(!1),N=[{title:"Card Number",dataIndex:"card_number",key:"card_number",className:"bold",render:s=>e.jsx(i,{type:"link",onClick:()=>c(!0),children:s})},{title:"Status",dataIndex:"status",key:"status"},{title:"Operation",key:"operation",render:()=>e.jsx(i,{type:"link",onClick:()=>l(!0),children:"Bind User"})}],w=()=>{},C=()=>{r([])},I={selectedRowKeys:a,onChange:s=>r(s)};return e.jsxs("div",{className:"main-content",children:[e.jsxs("div",{className:"search-area flex items-center justify-start",children:[e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"mb-2",children:"Card Number"}),e.jsx(E,{placeholder:"Enter card number"})]}),e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"Status"}),e.jsxs(n,{className:"w-full",placeholder:"Select status",children:[e.jsx(n.Option,{value:"online",children:"Online"}),e.jsx(n.Option,{value:"offline",children:"Offline"}),e.jsx(n.Option,{value:"unknown",children:"Unknown"})]})]}),e.jsx("div",{className:"search-btn ml-auto flex w-1/5 items-end justify-end",children:e.jsx(i,{type:"primary",onClick:w,className:"mt-6",children:"Search"})})]}),e.jsxs("div",{className:"operation-area flex justify-between",children:[e.jsx("div",{children:a.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(U,{title:"Are you sure you want to delete these assets?",onConfirm:C,okText:"Yes",cancelText:"No",children:e.jsx(i,{icon:e.jsx(O,{}),className:"mr-2",children:"Delete Assets"})}),e.jsx(i,{icon:e.jsx(_,{}),onClick:()=>m(!0),className:"mr-2",children:"Edit Available"}),e.jsx(i,{icon:e.jsx(K,{}),onClick:()=>l(!0),children:"Bind User"})]})}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(i,{icon:e.jsx(T,{}),onClick:()=>u(!0),className:"mr-2",children:"Add New RFID"}),e.jsxs(o.Group,{className:"layout-switch",value:d,onChange:s=>j(s.target.value),children:[e.jsx(o.Button,{value:"list",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(x,{icon:"mynaui:list",size:20}),"List"]})}),e.jsx(o.Button,{value:"grid",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(x,{icon:"proicons:grid",size:20}),"Grid"]})})]})]})]}),d==="list"?e.jsx($,{bordered:!0,rowSelection:I,columns:N,dataSource:h,rowKey:"key"}):e.jsx("div",{className:"grid",children:h.map(s=>e.jsx("div",{className:"grid-item",children:e.jsxs(z,{children:[e.jsxs("div",{className:"mb-2 flex items-center",children:[e.jsx("input",{type:"checkbox",checked:a.includes(s.key),onChange:S=>{const g=S.target.checked?[...a,s.key]:a.filter(R=>R!==s.key);r(g)},className:"mr-2"}),e.jsx("strong",{children:"Card Number:"})," ",e.jsx(i,{type:"link",onClick:()=>c(!0),children:s.card_number})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Status:"})," ",s.status]}),e.jsx(i,{type:"link",onClick:()=>l(!0),children:"Bind User"})]},s.key)}))}),e.jsx("div",{className:"mt-6 flex justify-end",children:e.jsx(M,{total:50,showSizeChanger:!0,showQuickJumper:!0,showTotal:s=>`Total ${s} items`})}),e.jsx(F,{visible:f,onClose:()=>c(!1)}),e.jsx(V,{visible:b,onClose:()=>m(!1)}),e.jsx(D,{visible:p,onClose:()=>u(!1)}),e.jsx(B,{visible:v,onClose:()=>y(!1)}),e.jsx(A,{visible:k,onClose:()=>l(!1)})]})}export{Z as default};
