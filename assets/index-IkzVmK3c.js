import{j as e,f as m}from"./index-DGG3uvmK.js";import{r as a}from"./vendor-react-BcJS7s_i.js";import _ from"./addSchedule-DTbTvXJe.js";import w from"./editSchedule-DsnOFv0q.js";import{w as j,i,P as V,am as D,J as M,x as c,F as R,j as A,y as I,E as u,a0 as P}from"./vendor-antd-B62eGpCx.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-CtEfXJzW.js";const{RangePicker:Y}=P,{Option:B}=j,x=[{key:"1",rego:"EV001",recurrency:"daily",time_range:["2023-06-01","2023-06-02"],assigned_driver:"John Doe"},{key:"2",rego:"EV002",recurrency:"weekly",time_range:["2023-06-02","2023-06-03"],assigned_driver:"Jane Smith"},{key:"3",rego:"EV003",recurrency:"monthly",time_range:["2023-06-03","2023-06-04"],assigned_driver:"Bob Johnson"}],J=[{value:"EV001",label:"EV001"},{value:"EV002",label:"EV002"},{value:"EV003",label:"EV003"}];function L(){const[l,d]=a.useState({time_range:null,assigned_driver:""}),[o,g]=a.useState("list"),[t,f]=a.useState([]),[v,n]=a.useState(!1),[y,r]=a.useState(!1),[p,k]=a.useState(null),S=[{title:"Rego",className:"bold",dataIndex:"rego",key:"rego"},{title:"Scheduled Datetime",dataIndex:"time_range",key:"time_range",render:s=>`${s[0]} - ${s[1]}`},{title:"Assigned Driver",dataIndex:"assigned_driver",key:"assigned_driver"},{title:"Operation",key:"operation",render:(s,E)=>e.jsx(i,{type:"link",onClick:()=>h(E),children:"Edit"})}],h=s=>{k(s),r(!0)},C=s=>{f(s)},b=s=>{},N={selectedRowKeys:t,onChange:C};return e.jsxs("div",{className:"main-content",children:[e.jsxs("div",{className:"search-area flex items-center justify-start",children:[e.jsxs("div",{className:"search-item",children:[e.jsx("label",{className:"block",children:"EV"}),e.jsx(j,{className:"w-full",value:l.assigned_driver,onChange:s=>d({...l,assigned_driver:s}),children:J.map(s=>e.jsx(B,{value:s.value,children:s.label},s.value))})]}),e.jsxs("div",{className:"search-item",children:[e.jsx("label",{className:"block",children:"Scheduled Time"}),e.jsx(Y,{className:"w-full",format:"YYYY-MM-DD",value:l.time_range,onChange:s=>d({...l,time_range:s})})]}),e.jsx("div",{className:"search-btn ml-auto flex w-1/5 items-end justify-end",children:e.jsx(i,{type:"primary",onClick:b,className:"mt-6",children:"Search"})})]}),e.jsxs("div",{className:"operation-area flex items-center justify-between",children:[e.jsx("div",{children:t.length>0&&e.jsx(V,{title:"Are you sure you want to delete these items?",onConfirm:()=>{},okText:"Yes",cancelText:"No",children:e.jsx(i,{icon:e.jsx(D,{}),danger:!0,children:"Delete"})})}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(i,{icon:e.jsx(M,{}),onClick:()=>n(!0),className:"mr-4",children:"Add Schedule"}),e.jsxs(c.Group,{className:"layout-switch",value:o,onChange:s=>g(s.target.value),children:[e.jsx(c.Button,{value:"list",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(m,{icon:"mynaui:list",size:20}),"List"]})}),e.jsx(c.Button,{value:"grid",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(m,{icon:"proicons:grid",size:20}),"Grid"]})})]})]})]}),o==="list"?e.jsx(R,{rowSelection:N,columns:S,bordered:!0,dataSource:x}):e.jsx("div",{className:"grid",children:x.map(s=>e.jsx("div",{className:"grid-item",children:e.jsxs(A,{className:"w-full",children:[e.jsx(I,{checked:t.includes(s.key),onChange:()=>{}}),e.jsxs("p",{children:[e.jsx("strong",{children:"Rego:"})," ",s.rego]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Scheduled Datetime:"})," ",s.time_range[0]," - ",s.time_range[1]]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Assigned Driver:"})," ",s.assigned_driver]}),e.jsx(i,{type:"link",onClick:()=>h(s),children:"Edit"})]},s.key)}))}),e.jsx(u,{title:"Add Schedule",visible:v,onCancel:()=>n(!1),footer:[e.jsxs("div",{className:"footer-normal-btns",children:[e.jsx(i,{onClick:()=>n(!1),children:"Cancel"},"cancel"),e.jsx(i,{type:"primary",onClick:()=>n(!1),children:"Confirm"},"confirm")]})],children:e.jsx(_,{onConfirm:()=>{}})}),e.jsx(u,{title:"Edit Schedule",visible:y,onCancel:()=>r(!1),footer:[e.jsxs("div",{className:"footer-normal-btns",children:[e.jsx(i,{onClick:()=>r(!1),children:"Cancel"},"cancel"),e.jsx(i,{type:"primary",onClick:()=>r(!1),children:"Confirm"},"confirm")]})],children:e.jsx(w,{schedule:p,onConfirm:()=>{}})})]})}export{L as default};
