import{j as e,f as y}from"./index-CGSwjbrb.js";import{r as a}from"./vendor-react-BcJS7s_i.js";import P from"./addEmployee-BSVUmq-p.js";import B from"./detail-Bp5BpxF1.js";import J from"./editEmployee-BYyCkgqL.js";import M from"./editRole-atfJELxT.js";import{I as m,w as h,k as t,y as K,z as p,F as T,as as f,l as F,H as G,J as o}from"./vendor-antd-BgzZSO1n.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-D7_oWXRD.js";import"./LineChart-C6XryqKJ.js";import"./isEqual-Hc_6Fhhx.js";import"./vendor-charts-Cv5x1InZ.js";import"./index-Dj133iwh.js";const v=[{id:1,name:"John Doe",email:"john@example.com",phone:"123-456-7890",role:"driver"},{id:2,name:"Jane Smith",email:"jane@example.com",phone:"098-765-4321",role:"repairer"},{id:3,name:"Bob Johnson",email:"bob@example.com",phone:"555-555-5555",role:"driver"}];function le(){const[s,i]=a.useState({name:"",email:"",phone:"",role:""}),[x,b]=a.useState("list"),[E,w]=a.useState([]),[N,u]=a.useState(!1),[S,n]=a.useState(!1),[C,r]=a.useState(!1),[I,c]=a.useState(!1),[d,g]=a.useState(null),k=[{title:"Name",dataIndex:"name",key:"name",className:"bold",render:(l,A)=>e.jsx(t,{type:"link",onClick:()=>j(A),children:l})},{title:"Email",dataIndex:"email",key:"email"},{title:"Phone",dataIndex:"phone",key:"phone"},{title:"Role",dataIndex:"role",key:"role"}],R=()=>{},j=l=>{g(l),u(!0)},D=()=>{n(!0)},V=()=>{r(!0)},z=()=>{c(!0)};return e.jsxs("div",{className:"main-content",children:[e.jsxs("div",{className:"search-area flex flex-wrap justify-between",children:[e.jsxs("div",{className:"search-item w-1/5",children:[e.jsx("label",{className:"block",children:"Name"}),e.jsx(m,{placeholder:"Search by name",value:s.name,onChange:l=>i({...s,name:l.target.value})})]}),e.jsxs("div",{className:"search-item w-1/5",children:[e.jsx("label",{className:"block",children:"Email"}),e.jsx(m,{placeholder:"Search by email",value:s.email,onChange:l=>i({...s,email:l.target.value})})]}),e.jsxs("div",{className:"search-item w-1/5",children:[e.jsx("label",{className:"block",children:"Phone"}),e.jsx(m,{placeholder:"Search by phone",value:s.phone,onChange:l=>i({...s,phone:l.target.value})})]}),e.jsxs("div",{className:"search-item w-1/5",children:[e.jsx("label",{className:"block",children:"Role"}),e.jsxs(h,{className:"w-full",placeholder:"Select role",value:s.role,onChange:l=>i({...s,role:l}),children:[e.jsx(h.Option,{value:"driver",children:"Driver"}),e.jsx(h.Option,{value:"repairer",children:"Repairer"})]})]}),e.jsx("div",{className:"search-btn ml-auto flex w-1/5 items-end justify-end",children:e.jsx(t,{type:"primary",onClick:R,className:"mt-6",children:"Search"})})]}),e.jsxs("div",{className:"operation-area flex items-center justify-between",children:[e.jsx("div",{}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(t,{type:"primary",icon:e.jsx(K,{}),onClick:D,className:"mr-4",children:"Add a new Employee"}),e.jsxs(p.Group,{className:"layout-switch",value:x,onChange:l=>b(l.target.value),children:[e.jsx(p.Button,{value:"list",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(y,{icon:"mynaui:list",size:20}),"List"]})}),e.jsx(p.Button,{value:"grid",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(y,{icon:"proicons:grid",size:20}),"Grid"]})})]})]})]}),x==="list"?e.jsx(T,{columns:k,dataSource:v,rowKey:"id",bordered:!0,rowSelection:{selectedRowKeys:E,onChange:w}}):e.jsx(f,{grid:{gutter:16,column:4},dataSource:v,renderItem:l=>e.jsx(f.Item,{children:e.jsxs(F,{title:l.name,extra:e.jsx(t,{type:"link",onClick:()=>j(l),children:"Details"}),children:[e.jsxs("p",{children:["Email: ",l.email]}),e.jsxs("p",{children:["Phone: ",l.phone]}),e.jsxs("p",{children:["Role: ",l.role]})]})})}),e.jsx("div",{className:"mt-6 flex justify-end",children:e.jsx(G,{total:100,showSizeChanger:!0,showQuickJumper:!0,showTotal:l=>`Total ${l} items`})}),e.jsx(o,{title:"Employee Detail",visible:N,onCancel:()=>u(!1),footer:null,width:1e3,zIndex:1e3,children:e.jsx(B,{employee:d,onEditBasicInfo:V,onEditRole:z})}),e.jsx(o,{title:"Add a new Employee",visible:S,onCancel:()=>n(!1),footer:null,zIndex:1001,children:e.jsx(P,{onCancel:()=>n(!1)})}),e.jsx(o,{title:"Edit Employee",visible:C,onCancel:()=>r(!1),footer:null,zIndex:1001,children:e.jsx(J,{employee:d,onCancel:()=>r(!1)})}),e.jsx(o,{title:"Edit Role",visible:I,onCancel:()=>c(!1),footer:null,zIndex:1001,children:e.jsx(M,{employee:d,onCancel:()=>c(!1)})})]})}export{le as default};
