import{j as e,f as p}from"./index-HZVAOrSI.js";import{r as t}from"./vendor-react-DcqtUZ_G.js";import b from"./addScheduledMaintenance-Dvq9Vw2z.js";import w from"./editScheduledMaintenance-D9UH9pf3.js";import _ from"./editStatus-TBl6D3V2.js";import{w as i,i as a,P as h,al as M,J as E,x as u,F as R,j as I,y as A,$ as D}from"./vendor-antd-DNjhvzFa.js";import"./vendor-ui-BASYQBt4.js";import"./vendor-utils-DuhXCHR2.js";const{RangePicker:O}=D;function K(){const[n,o]=t.useState({time_range:null,assigned_repairer:"",status:""}),[m,g]=t.useState("list"),[l,f]=t.useState([]),[v,d]=t.useState(!1),[k,r]=t.useState(!1),[y,c]=t.useState(!1),S=s=>{},x=[{key:"1",rego:"ABC123",time_range:"2023-05-01 - 2023-05-02",assigned_repairer:"John Doe",status:"online"},{key:"2",rego:"DEF456",time_range:"2023-05-03 - 2023-05-04",assigned_repairer:"Jane Smith",status:"offline"},{key:"3",rego:"GHI789",time_range:"2023-05-05 - 2023-05-06",assigned_repairer:"Bob Johnson",status:"unknown"}],C=[{title:"Rego",className:"bold",dataIndex:"rego",key:"rego"},{title:"Scheduled Datetime",dataIndex:"time_range",key:"time_range"},{title:"Assigned Repairer",dataIndex:"assigned_repairer",key:"assigned_repairer"},{title:"Status",dataIndex:"status",key:"status"},{title:"Operation",key:"operation",render:s=>e.jsxs("span",{className:"space-x-2",children:[e.jsx(a,{type:"link",onClick:()=>r(!0),children:"Edit"}),e.jsx(a,{type:"link",onClick:()=>c(!0),children:"Edit Status"}),e.jsx(h,{title:"Are you sure?",onConfirm:()=>{},children:e.jsx(a,{type:"link",children:"Calendar"})})]})}],j=s=>{f(s)},N={selectedRowKeys:l,onChange:j};return e.jsxs("div",{className:"main-content",children:[e.jsxs("div",{className:"search-area flex items-center justify-start",children:[e.jsxs("div",{className:"search-item",children:[e.jsx("label",{className:"block",children:"Scheduled Time"}),e.jsx(O,{className:"w-full",format:"YYYY-MM-DD",value:n.time_range,onChange:s=>o({...n,time_range:s})})]}),e.jsxs("div",{className:"search-item",children:[e.jsx("label",{className:"block",children:"Repairer"}),e.jsxs(i,{className:"w-full",value:n.assigned_repairer,onChange:s=>o({...n,assigned_repairer:s}),children:[e.jsx(i.Option,{value:"1",children:"John Doe"}),e.jsx(i.Option,{value:"2",children:"Jane Smith"}),e.jsx(i.Option,{value:"3",children:"Bob Johnson"})]})]}),e.jsxs("div",{className:"search-item",children:[e.jsx("label",{className:"block",children:"Status"}),e.jsxs(i,{className:"w-full",value:n.status,onChange:s=>o({...n,status:s}),children:[e.jsx(i.Option,{value:"online",children:"Online"}),e.jsx(i.Option,{value:"offline",children:"Offline"}),e.jsx(i.Option,{value:"unknown",children:"Unknown"})]})]}),e.jsx("div",{className:"search-btn ml-auto flex w-1/5 items-end justify-end",children:e.jsx(a,{type:"primary",onClick:S,className:"mt-6",children:"Search"})})]}),e.jsxs("div",{className:"operation-area flex items-center justify-between",children:[e.jsx("div",{children:l.length>0&&e.jsx(h,{title:"Are you sure to delete?",onConfirm:()=>{},children:e.jsx(a,{icon:e.jsx(M,{}),children:"Delete"})})}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(a,{className:"mr-4",icon:e.jsx(E,{}),onClick:()=>d(!0),children:"Add Scheduled Maintenance"}),e.jsxs(u.Group,{className:"layout-switch",value:m,onChange:s=>g(s.target.value),children:[e.jsx(u.Button,{value:"list",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(p,{icon:"mynaui:list",size:20}),"List"]})}),e.jsx(u.Button,{value:"grid",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(p,{icon:"proicons:grid",size:20}),"Grid"]})})]})]})]}),m==="list"?e.jsx(R,{rowSelection:N,columns:C,dataSource:x,bordered:!0}):e.jsx("div",{className:"grid",children:x.map(s=>e.jsx("div",{className:"grid-item",children:e.jsxs(I,{className:"w-full",children:[e.jsx(A,{checked:l.includes(s.key),onChange:()=>j([...l,s.key])}),e.jsxs("p",{children:[e.jsx("strong",{children:"Rego:"})," ",s.rego]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Scheduled Datetime:"})," ",s.time_range]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Assigned Repairer:"})," ",s.assigned_repairer]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Status:"})," ",s.status]}),e.jsxs("div",{className:"mt-4 space-x-2",children:[e.jsx(a,{type:"link",onClick:()=>r(!0),children:"Edit"}),e.jsx(a,{type:"link",onClick:()=>c(!0),children:"Edit Status"}),e.jsx(h,{title:"Are you sure?",onConfirm:()=>{},children:e.jsx(a,{type:"link",children:"Calendar"})})]})]},s.key)}))}),e.jsx(b,{visible:v,onCancel:()=>d(!1),onConfirm:()=>{d(!1)}}),e.jsx(w,{visible:k,onCancel:()=>r(!1),onConfirm:()=>{r(!1)}}),e.jsx(_,{visible:y,onCancel:()=>c(!1),onConfirm:()=>{c(!1)}})]})}export{K as default};
