import{j as e}from"./index-D-ofxrX4.js";import{r as t}from"./vendor-react-BcJS7s_i.js";import S from"./addTBox-DrBS8ncZ.js";import g from"./detail-BiEFngCf.js";import y from"./editAvailable-CAGHeWM8.js";import C from"./editTBox-DE6AoVi4.js";import{I as A,w as a,k as l,P as E,x as I,Z as R,y as V,z as n,E as _,F as D,H as O,l as $,J as F}from"./vendor-antd-mvdqVON1.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-CxBTGS1X.js";function U(){const[o,m]=t.useState("list"),[u,b]=t.useState([]),[h,i]=t.useState(!1),[j,r]=t.useState(!1),[f,c]=t.useState(!1),[p,d]=t.useState(!1),x=[{tbox_number:"TB001",status:"online"},{tbox_number:"TB002",status:"offline"},{tbox_number:"TB003",status:"unknown"}],v=[{title:"TBox Number",dataIndex:"tbox_number",key:"tbox_number",render:s=>e.jsx(l,{type:"link",onClick:()=>i(!0),children:s})},{title:"Status",dataIndex:"status",key:"status"}],w=s=>{},N=()=>{},k=()=>{r(!0)},T=()=>{c(!0)};return e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"search-area mb-6 flex flex-wrap justify-between",children:[e.jsxs("div",{className:"search-item mb-4 w-1/5 pr-4",children:[e.jsx("label",{className:"mb-2 block",children:"TBox Number"}),e.jsx(A,{placeholder:"Enter TBox Number"})]}),e.jsxs("div",{className:"search-item mb-4 w-1/5 pr-4",children:[e.jsx("label",{className:"mb-2 block",children:"Status"}),e.jsxs(a,{className:"w-full",placeholder:"Select Status",children:[e.jsx(a.Option,{value:"online",children:"Online"}),e.jsx(a.Option,{value:"offline",children:"Offline"}),e.jsx(a.Option,{value:"unknown",children:"Unknown"})]})]}),e.jsx("div",{className:"search-btn mb-4 ml-auto flex w-1/5 items-end justify-end pr-4",children:e.jsx(l,{type:"primary",onClick:w,className:"mt-6",children:"Search"})})]}),e.jsxs("div",{className:"mb-6 flex items-center justify-between",children:[e.jsx("div",{children:u.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(E,{title:"Are you sure you want to delete these assets?",onConfirm:N,okText:"Yes",cancelText:"No",children:e.jsx(l,{icon:e.jsx(I,{}),className:"mr-2",children:"Delete Assets"})}),e.jsx(l,{icon:e.jsx(R,{}),onClick:k,children:"Edit Available"})]})}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(l,{icon:e.jsx(V,{}),onClick:T,className:"mr-2",children:"Add New TBox"}),e.jsxs(n.Group,{value:o,onChange:s=>m(s.target.value),children:[e.jsxs(n.Button,{value:"list",children:[e.jsx(_,{})," List"]}),e.jsxs(n.Button,{value:"grid",children:[e.jsx(D,{})," Grid"]})]})]})]}),o==="list"?e.jsx(O,{rowSelection:{type:"checkbox",onChange:(s,B)=>b(B)},columns:v,dataSource:x,rowKey:"tbox_number",pagination:!1}):e.jsx("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",children:x.map(s=>e.jsx($,{className:"w-full",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(l,{type:"link",onClick:()=>i(!0),children:s.tbox_number}),e.jsx("span",{children:s.status})]})},s.tbox_number))}),e.jsx("div",{className:"mt-6 flex justify-end",children:e.jsx(F,{total:100,showSizeChanger:!0,showQuickJumper:!0,showTotal:s=>`Total ${s} items`})}),e.jsx(g,{visible:h,onClose:()=>i(!1),onEdit:()=>{i(!1),d(!0)}}),e.jsx(y,{visible:j,onClose:()=>r(!1)}),e.jsx(S,{visible:f,onClose:()=>c(!1)}),e.jsx(C,{visible:p,onClose:()=>d(!1)})]})}export{U as default};
