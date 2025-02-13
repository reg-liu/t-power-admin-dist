import{g as I,j as e,f as c}from"./index-L59LL-oJ.js";import{r as t}from"./vendor-react-BcJS7s_i.js";import M from"./bindEV-CiPKg-Ms.js";import T from"./detail-DwhMczs5.js";import _ from"./editEV-CuJR7q01.js";import{I as v,w as o,k as n,P as d,aj as D,z as m,F as J,l as O,E as A,H as R}from"./vendor-antd-C5sFxZgj.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-C8CVoVQY.js";const f=[{key:"1",id:"1",brand:"Tesla",brand_model:"Model 3",year:2021,registration_number:"ABC123",vin:"1HGBH41JXMN109186",owner:"John Doe"},{key:"2",id:"2",brand:"Nissan",brand_model:"Leaf",year:2020,registration_number:"XYZ789",vin:"1N4AZ1CP3LC311439",owner:"Jane Smith"},{key:"3",id:"3",brand:"Chevrolet",brand_model:"Bolt",year:2022,registration_number:"DEF456",vin:"1G1FY6S07L4118595",owner:"Bob Johnson"}];function K(){const[h,k]=t.useState("list"),[a,x]=t.useState([]),[u,j]=t.useState(!1),[E,b]=t.useState(!1),[N,p]=t.useState(!1),[r,g]=t.useState(null),S=()=>{},i=I(),C=[{title:"Registration Number",dataIndex:"registration_number",key:"registration_number",className:"bold",render:(s,l)=>e.jsx(n,{type:"link",onClick:()=>w(l),children:s})},{title:"VIN",dataIndex:"vin",key:"vin"},{title:"EV Owner",dataIndex:"owner",key:"owner",render:s=>i?s:null},{title:"Operation",key:"operation",render:(s,l)=>i&&e.jsx(d,{title:"Are you sure you want to unbind this EV?",onConfirm:()=>y(l.id),okText:"Yes",cancelText:"No",children:e.jsx(n,{type:"link",children:"Unbind EV"})})}],y=s=>{},w=s=>{g(s),j(!0)},V={selectedRowKeys:a,onChange:s=>x(s)};return e.jsxs("div",{className:"main-content",children:[e.jsxs("div",{className:"search-area flex items-center justify-start",children:[e.jsxs("div",{className:"search-item",children:[e.jsx("label",{className:"mb-1 block",children:"Registration Number"}),e.jsx(v,{placeholder:"Enter registration number"})]}),e.jsxs("div",{className:"search-item",children:[e.jsx("label",{className:"mb-1 block",children:"VIN"}),e.jsx(v,{placeholder:"Enter VIN"})]}),i&&e.jsxs("div",{className:"search-item",children:[e.jsx("label",{className:"mb-1 block",children:"EV Owner"}),e.jsxs(o,{className:"w-full",placeholder:"Select EV Owner",children:[e.jsx(o.Option,{value:"john",children:"John Doe"}),e.jsx(o.Option,{value:"jane",children:"Jane Smith"}),e.jsx(o.Option,{value:"bob",children:"Bob Johnson"})]})]}),e.jsx("div",{className:"search-btn ml-auto flex w-1/5 items-end justify-end",children:e.jsx(n,{type:"primary",onClick:S,className:"mt-6",children:"Search"})})]}),e.jsxs("div",{className:"operation-area flex items-center justify-between",children:[e.jsx("div",{children:i&&a.length>0&&e.jsx(d,{title:"Are you sure you want to unbind selected EVs?",onConfirm:()=>{},okText:"Yes",cancelText:"No",children:e.jsx(n,{children:"Unbind EV"})})}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(n,{className:"mr-4",onClick:()=>b(!0),icon:e.jsx(D,{}),children:"Bind a new EV"}),e.jsxs(m.Group,{className:"layout-switch",value:h,onChange:s=>k(s.target.value),children:[e.jsx(m.Button,{value:"list",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(c,{icon:"mynaui:list",size:20}),"List"]})}),e.jsx(m.Button,{value:"grid",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(c,{icon:"proicons:grid",size:20}),"Grid"]})})]})]})]}),h==="list"?e.jsx(J,{rowSelection:i?V:void 0,columns:C,bordered:!0,dataSource:f,pagination:!1}):e.jsx("div",{className:"grid",children:f.map(s=>e.jsx("div",{className:"grid-item",children:e.jsxs(O,{children:[e.jsxs("div",{className:"grid-top flex items-center",children:[i&&e.jsx(A,{checked:a.includes(s.key),onChange:()=>{const l=a.includes(s.key)?a.filter(B=>B!==s.key):[...a,s.key];x(l)}}),e.jsx("div",{className:"card-title",children:e.jsx(n,{type:"link",className:"detail-link",onClick:()=>w(s),children:s.registration_number})})]}),e.jsxs("div",{className:"grid-bottom",children:[e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"VIN:"}),e.jsx("span",{className:"value",children:s.vin})]}),i&&e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"EV Owner:"}),e.jsx("span",{className:"value",children:s.owner})]}),e.jsx("div",{className:"operation-rows",children:e.jsx(d,{title:"Are you sure you want to unbind this EV?",onConfirm:()=>y(s.id),okText:"Yes",cancelText:"No",children:e.jsx(n,{type:"link",icon:e.jsx(c,{icon:"iconoir:remove-link",size:16}),children:"Unbind EV"})})})]})]},s.id)}))}),e.jsx("div",{className:"mt-4 flex justify-end",children:e.jsx(R,{total:100,showSizeChanger:!0,showQuickJumper:!0,showTotal:s=>`Total ${s} items`})}),u&&r&&e.jsx(T,{visible:u,onClose:()=>j(!1),ev:r,onEdit:()=>{p(!0)}}),e.jsx(M,{visible:E,onClose:()=>b(!1)}),N&&r&&e.jsx(_,{visible:N,onClose:()=>p(!1),ev:r})]})}export{K as default};
