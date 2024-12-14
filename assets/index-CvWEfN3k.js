import{f as C,j as e}from"./index-DloVt6EI.js";import{r as l}from"./vendor-react-BcJS7s_i.js";import I from"./bindEV-BiP1miLc.js";import B from"./detail-BhsHJsvY.js";import M from"./editEV-Co0vibcg.js";import{I as g,w as r,k as i,aq as R,P as d,as as T,z as c,E as _,F as J,H as D,l as O,J as A}from"./vendor-antd-DouGSysN.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-Cpch6Ee7.js";const y=[{key:"1",id:"1",brand:"Tesla",brand_model:"Model 3",year:2021,registration_number:"ABC123",vin:"1HGBH41JXMN109186",owner:"John Doe"},{key:"2",id:"2",brand:"Nissan",brand_model:"Leaf",year:2020,registration_number:"XYZ789",vin:"1N4AZ1CP3LC311439",owner:"Jane Smith"},{key:"3",id:"3",brand:"Chevrolet",brand_model:"Bolt",year:2022,registration_number:"DEF456",vin:"1G1FY6S07L4118595",owner:"Bob Johnson"}];function K(){const[h,k]=l.useState("list"),[t,m]=l.useState([]),[x,u]=l.useState(!1),[N,j]=l.useState(!1),[b,p]=l.useState(!1),[a,E]=l.useState(null),n=C(),v=[{title:"Registration Number",dataIndex:"registration_number",key:"registration_number",render:(s,o)=>e.jsx(i,{type:"link",onClick:()=>f(o),children:s})},{title:"VIN",dataIndex:"vin",key:"vin"},{title:"EV Owner",dataIndex:"owner",key:"owner",render:s=>n?s:null},{title:"Operation",key:"operation",render:(s,o)=>n&&e.jsx(d,{title:"Are you sure you want to unbind this EV?",onConfirm:()=>w(o.id),okText:"Yes",cancelText:"No",children:e.jsx(i,{type:"link",children:"Unbind EV"})})}],w=s=>{},f=s=>{E(s),u(!0)},S={selectedRowKeys:t,onChange:s=>m(s)};return e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"mb-6 grid grid-cols-5 gap-4",children:[e.jsxs("div",{className:"col-span-1",children:[e.jsx("label",{className:"mb-1 block",children:"Registration Number"}),e.jsx(g,{placeholder:"Enter registration number"})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsx("label",{className:"mb-1 block",children:"VIN"}),e.jsx(g,{placeholder:"Enter VIN"})]}),n&&e.jsxs("div",{className:"col-span-1",children:[e.jsx("label",{className:"mb-1 block",children:"EV Owner"}),e.jsxs(r,{className:"w-full",placeholder:"Select EV Owner",children:[e.jsx(r.Option,{value:"john",children:"John Doe"}),e.jsx(r.Option,{value:"jane",children:"Jane Smith"}),e.jsx(r.Option,{value:"bob",children:"Bob Johnson"})]})]}),e.jsx("div",{className:"col-span-1 flex items-end",children:e.jsx(i,{type:"primary",icon:e.jsx(R,{}),children:"Search"})})]}),e.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[e.jsx("div",{children:n&&t.length>0&&e.jsx(d,{title:"Are you sure you want to unbind selected EVs?",onConfirm:()=>{},okText:"Yes",cancelText:"No",children:e.jsx(i,{children:"Unbind EV"})})}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(i,{className:"mr-4",onClick:()=>j(!0),icon:e.jsx(T,{}),children:"Bind a new EV"}),e.jsxs(c.Group,{value:h,onChange:s=>k(s.target.value),children:[e.jsxs(c.Button,{value:"list",children:[e.jsx(_,{})," List"]}),e.jsxs(c.Button,{value:"grid",children:[e.jsx(J,{})," Grid"]})]})]})]}),h==="list"?e.jsx(D,{rowSelection:n?S:void 0,columns:v,dataSource:y,pagination:!1}):e.jsx("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",children:y.map(s=>e.jsxs(O,{className:"w-full",children:[n&&e.jsx("div",{className:"absolute right-2 top-2",children:e.jsx("input",{type:"checkbox",checked:t.includes(s.key),onChange:()=>{const o=t.includes(s.key)?t.filter(V=>V!==s.key):[...t,s.key];m(o)}})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Registration Number:"})," ",e.jsx(i,{type:"link",onClick:()=>f(s),children:s.registration_number})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"VIN:"})," ",s.vin]}),n&&e.jsxs("p",{children:[e.jsx("strong",{children:"EV Owner:"})," ",s.owner]}),n&&e.jsx(d,{title:"Are you sure you want to unbind this EV?",onConfirm:()=>w(s.id),okText:"Yes",cancelText:"No",children:e.jsx(i,{type:"link",children:"Unbind EV"})})]},s.id))}),e.jsx("div",{className:"mt-4 flex justify-end",children:e.jsx(A,{total:100,showSizeChanger:!0,showQuickJumper:!0,showTotal:s=>`Total ${s} items`})}),x&&a&&e.jsx(B,{visible:x,onClose:()=>u(!1),ev:a,onEdit:()=>{p(!0)}}),e.jsx(I,{visible:N,onClose:()=>j(!1)}),b&&a&&e.jsx(M,{visible:b,onClose:()=>p(!1),ev:a})]})}export{K as default};