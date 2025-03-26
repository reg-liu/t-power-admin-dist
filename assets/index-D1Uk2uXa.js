import{j as e,f}from"./index-qOmAfSnl.js";import{r as i}from"./vendor-react-BcJS7s_i.js";import z from"./addEmployee-DhhjeVFN.js";import A from"./detail-DHqxUwNP.js";import P from"./editEmployee-DKcAgjUP.js";import B from"./editRole-DfJtx7k_.js";import{K as m,w as h,i as s,J,x,F as M,aq as y,j as T,z as F,E as c}from"./vendor-antd-DmtkV1Ch.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-BKiv1F2M.js";import"./LineChart-CtHa2h5R.js";import"./isEqual-Hc_6Fhhx.js";import"./vendor-charts-Cv5x1InZ.js";import"./index-Dj133iwh.js";const v=[{id:1,name:"John Doe",email:"john@example.com",phone:"123-456-7890",role:"driver"},{id:2,name:"Jane Smith",email:"jane@example.com",phone:"098-765-4321",role:"repairer"},{id:3,name:"Bob Johnson",email:"bob@example.com",phone:"555-555-5555",role:"driver"}];function _(){const[a,o]=i.useState({name:"",email:"",phone:"",role:""}),[p,b]=i.useState("list"),[E,j]=i.useState(!1),[C,t]=i.useState(!1),[N,r]=i.useState(!1),[k,n]=i.useState(!1),[d,w]=i.useState(null),S=[{title:"Name",dataIndex:"name",key:"name",className:"bold",render:(l,V)=>e.jsx(s,{type:"link",onClick:()=>u(V),children:l})},{title:"Email",dataIndex:"email",key:"email"},{title:"Phone",dataIndex:"phone",key:"phone"},{title:"Role",dataIndex:"role",key:"role"}],I=()=>{},u=l=>{w(l),j(!0)},g=()=>{t(!0)},R=()=>{r(!0)},D=()=>{n(!0)};return e.jsxs("div",{className:"main-content",children:[e.jsxs("div",{className:"search-area flex items-center justify-start",children:[e.jsxs("div",{className:"search-item",children:[e.jsx("label",{className:"block",children:"Name"}),e.jsx(m,{placeholder:"Search by name",value:a.name,onChange:l=>o({...a,name:l.target.value})})]}),e.jsxs("div",{className:"search-item",children:[e.jsx("label",{className:"block",children:"Email"}),e.jsx(m,{placeholder:"Search by email",value:a.email,onChange:l=>o({...a,email:l.target.value})})]}),e.jsxs("div",{className:"search-item",children:[e.jsx("label",{className:"block",children:"Phone"}),e.jsx(m,{placeholder:"Search by phone",value:a.phone,onChange:l=>o({...a,phone:l.target.value})})]}),e.jsxs("div",{className:"search-item",children:[e.jsx("label",{className:"block",children:"Role"}),e.jsxs(h,{className:"w-full",placeholder:"Select role",value:a.role,onChange:l=>o({...a,role:l}),children:[e.jsx(h.Option,{value:"driver",children:"Driver"}),e.jsx(h.Option,{value:"repairer",children:"Repairer"})]})]}),e.jsx("div",{className:"search-btn ml-auto flex w-1/5 items-end justify-end",children:e.jsx(s,{type:"primary",onClick:I,className:"mt-6",children:"Search"})})]}),e.jsxs("div",{className:"operation-area flex items-center justify-between",children:[e.jsx("div",{}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(s,{type:"primary",icon:e.jsx(J,{}),onClick:g,className:"mr-4",children:"Add a new Employee"}),e.jsxs(x.Group,{className:"layout-switch",value:p,onChange:l=>b(l.target.value),children:[e.jsx(x.Button,{value:"list",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(f,{icon:"mynaui:list",size:20}),"List"]})}),e.jsx(x.Button,{value:"grid",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(f,{icon:"proicons:grid",size:20}),"Grid"]})})]})]})]}),p==="list"?e.jsx(M,{columns:S,dataSource:v,rowKey:"id",bordered:!0}):e.jsx(y,{grid:{gutter:16,column:4},dataSource:v,renderItem:l=>e.jsx(y.Item,{children:e.jsxs(T,{title:l.name,extra:e.jsx(s,{type:"link",onClick:()=>u(l),children:"Details"}),children:[e.jsxs("p",{children:["Email: ",l.email]}),e.jsxs("p",{children:["Phone: ",l.phone]}),e.jsxs("p",{children:["Role: ",l.role]})]})})}),e.jsx("div",{className:"mt-6 flex justify-end",children:e.jsx(F,{total:100,showSizeChanger:!0,showQuickJumper:!0,showTotal:l=>`Total ${l} items`})}),e.jsx(c,{title:"Employee Detail",visible:E,onCancel:()=>j(!1),footer:[e.jsxs("div",{className:"footer-normal-btns",children:[e.jsx(s,{type:"primary",onClick:R,children:"Edit Basic Information"}),e.jsx(s,{type:"primary",onClick:D,children:"Edit Role"})]},"detail-footer")],width:1e3,zIndex:1e3,children:e.jsx(A,{employee:d})}),e.jsx(c,{title:"Add a new Employee",visible:C,onCancel:()=>t(!1),footer:[e.jsxs("div",{className:"footer-normal-btns",children:[e.jsx(s,{onClick:()=>t(!1),children:"Cancel"},"cancel"),e.jsx(s,{type:"primary",onClick:()=>t(!1),children:"Confirm"},"confirm")]},"add-employee-footer")],zIndex:1001,children:e.jsx(z,{})}),e.jsx(c,{title:"Edit Employee",visible:N,onCancel:()=>r(!1),footer:[e.jsxs("div",{className:"footer-normal-btns",children:[e.jsx(s,{onClick:()=>r(!1),children:"Cancel"},"cancel"),e.jsx(s,{type:"primary",onClick:()=>r(!1),children:"Confirm"},"confirm")]},"edit-employee-footer")],zIndex:1001,children:e.jsx(P,{employee:d})}),e.jsx(c,{title:"Edit Role",visible:k,onCancel:()=>n(!1),footer:[e.jsxs("div",{className:"footer-normal-btns",children:[e.jsx(s,{onClick:()=>n(!1),children:"Cancel"},"cancel"),e.jsx(s,{type:"primary",onClick:()=>n(!1),children:"Confirm"},"confirm")]},"edit-role-footer")],zIndex:1001,children:e.jsx(B,{employee:d})})]})}export{_ as default};
