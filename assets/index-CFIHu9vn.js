import{j as e}from"./index-D-ofxrX4.js";import{r as t}from"./vendor-react-BcJS7s_i.js";import R from"./addRFID-BQ5r1vnc.js";import D from"./bind-D8HWmYfM.js";import B from"./bindUser-CSpT0cL_.js";import A from"./detail-Bk8yGNaK.js";import V from"./editAvailable-DWJ1zHk0.js";import{I as F,w as a,k as i,P as E,x as U,Z as O,ay as _,y as T,z as o,H as K,l as $,J as M}from"./vendor-antd-mvdqVON1.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-CxBTGS1X.js";const x=[{key:"1",card_number:"RFID001",status:"online"},{key:"2",card_number:"RFID002",status:"offline"},{key:"3",card_number:"RFID003",status:"unknown"}];function W(){const[d,h]=t.useState("list"),[l,r]=t.useState([]),[j,c]=t.useState(!1),[f,m]=t.useState(!1),[b,u]=t.useState(!1),[p,k]=t.useState(!1),[v,n]=t.useState(!1),y=[{title:"Card Number",dataIndex:"card_number",key:"card_number",render:s=>e.jsx(i,{type:"link",onClick:()=>c(!0),children:s})},{title:"Status",dataIndex:"status",key:"status"},{title:"Operation",key:"operation",render:()=>e.jsx(i,{type:"link",onClick:()=>n(!0),children:"Bind User"})}],w=()=>{},N=()=>{r([])},C={selectedRowKeys:l,onChange:s=>r(s)};return e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"search-area mb-6 flex flex-wrap justify-between",children:[e.jsxs("div",{className:"search-item mb-4 w-1/5 pr-4",children:[e.jsx("div",{className:"mb-2",children:"Card Number"}),e.jsx(F,{placeholder:"Enter card number"})]}),e.jsxs("div",{className:"search-item mb-4 w-1/5 pr-4",children:[e.jsx("div",{className:"mb-2",children:"Status"}),e.jsxs(a,{className:"w-full",placeholder:"Select status",children:[e.jsx(a.Option,{value:"online",children:"Online"}),e.jsx(a.Option,{value:"offline",children:"Offline"}),e.jsx(a.Option,{value:"unknown",children:"Unknown"})]})]}),e.jsx("div",{className:"search-btn mb-4 ml-auto flex w-1/5 items-end justify-end pr-4",children:e.jsx(i,{type:"primary",onClick:w,className:"mt-6",children:"Search"})})]}),e.jsxs("div",{className:"mb-6 flex justify-between",children:[e.jsx("div",{children:l.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(E,{title:"Are you sure you want to delete these assets?",onConfirm:N,okText:"Yes",cancelText:"No",children:e.jsx(i,{icon:e.jsx(U,{}),className:"mr-2",children:"Delete Assets"})}),e.jsx(i,{icon:e.jsx(O,{}),onClick:()=>m(!0),className:"mr-2",children:"Edit Available"}),e.jsx(i,{icon:e.jsx(_,{}),onClick:()=>n(!0),children:"Bind User"})]})}),e.jsxs("div",{children:[e.jsx(i,{icon:e.jsx(T,{}),onClick:()=>u(!0),className:"mr-2",children:"Add New RFID"}),e.jsxs(o.Group,{value:d,onChange:s=>h(s.target.value),children:[e.jsx(o.Button,{value:"list",children:"List"}),e.jsx(o.Button,{value:"grid",children:"Grid"})]})]})]}),d==="list"?e.jsx(K,{rowSelection:C,columns:y,dataSource:x,rowKey:"key"}):e.jsx("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",children:x.map(s=>e.jsxs($,{className:"mb-4",children:[e.jsxs("div",{className:"mb-2 flex items-center",children:[e.jsx("input",{type:"checkbox",checked:l.includes(s.key),onChange:I=>{const g=I.target.checked?[...l,s.key]:l.filter(S=>S!==s.key);r(g)},className:"mr-2"}),e.jsx("strong",{children:"Card Number:"})," ",e.jsx(i,{type:"link",onClick:()=>c(!0),children:s.card_number})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Status:"})," ",s.status]}),e.jsx(i,{type:"link",onClick:()=>n(!0),children:"Bind User"})]},s.key))}),e.jsx("div",{className:"mt-6 flex justify-end",children:e.jsx(M,{total:50,showSizeChanger:!0,showQuickJumper:!0,showTotal:s=>`Total ${s} items`})}),e.jsx(A,{visible:j,onClose:()=>c(!1)}),e.jsx(V,{visible:f,onClose:()=>m(!1)}),e.jsx(R,{visible:b,onClose:()=>u(!1)}),e.jsx(D,{visible:p,onClose:()=>k(!1)}),e.jsx(B,{visible:v,onClose:()=>n(!1)})]})}export{W as default};
