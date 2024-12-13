import{j as e}from"./index-Dg_G9Idh.js";import{r as c}from"./vendor-react-BcJS7s_i.js";import D from"./brandModelDetail-C1e8o-2F.js";import I from"./editBrand-CgHk6Gu0.js";import{w as s,I as C,k as r,P as h,x as E,y as T,z as x,E as O,F as V,H as Y,l as R,J as A}from"./vendor-antd-rXbYDupp.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-BT_e3atF.js";const m=[{id:1,brand:"Tesla",brand_model:"Model S",charge_model:"ac",connector_num:1,phase:"3",ocpp:"1.6",current_max:32,current_min:6,power_max:22,power_min:1.4},{id:2,brand:"Nissan",brand_model:"Nissan LEAF",charge_model:"dc",connector_num:2,phase:"1",ocpp:"2.0",current_max:125,current_min:10,power_max:50,power_min:3},{id:3,brand:"BYD",brand_model:"BYD Tang EV",charge_model:"ac",connector_num:1,phase:"3",ocpp:"1.6",current_max:32,current_min:6,power_max:22,power_min:1.4},{id:4,brand:"Tesla",brand_model:"Model 3",charge_model:"dc",connector_num:2,phase:"1",ocpp:"2.0",current_max:250,current_min:20,power_max:250,power_min:5}],N={Tesla:["Model S","Model 3","Model X"],Nissan:["Nissan LEAF","Nissan Ariya","Nissan e-NV200"],BYD:["BYD Tang EV","BYD Qin EV","BYD Yuan EV"]};function Q(){const[a,l]=c.useState({}),[t,p]=c.useState([]),[u,k]=c.useState("list"),[f,d]=c.useState(!1),[y,j]=c.useState(!1),[i,b]=c.useState(null),M=()=>{},g=n=>{},v=()=>{},_=n=>{b(n),d(!0)},w=n=>{b(n||null),j(!0)},P=[{title:"Brand",dataIndex:"brand",key:"brand"},{title:"Brand Model",dataIndex:"brand_model",key:"brand_model",render:(n,o)=>e.jsx(r,{type:"link",onClick:()=>_(o),children:n})},{title:"Charge Model",dataIndex:"charge_model",key:"charge_model"},{title:"Connector Number",dataIndex:"connector_num",key:"connector_num"},{title:"Phase",dataIndex:"phase",key:"phase"},{title:"OCPP",dataIndex:"ocpp",key:"ocpp"},{title:"Current Max",dataIndex:"current_max",key:"current_max"},{title:"Current Min",dataIndex:"current_min",key:"current_min"},{title:"Power Max",dataIndex:"power_max",key:"power_max"},{title:"Power Min",dataIndex:"power_min",key:"power_min"},{title:"Operation",key:"operation",render:(n,o)=>e.jsx(h,{title:"Are you sure you want to delete this charge point?",onConfirm:()=>g(o.id),okText:"Yes",cancelText:"No",children:e.jsx(r,{type:"link",children:"Delete"})})}];return e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"mb-6 flex flex-wrap",children:[e.jsxs("div",{className:"mb-4 w-1/5 pr-4",children:[e.jsx("label",{className:"mb-2 block",children:"Brand"}),e.jsx(s,{className:"w-full",placeholder:"Select Brand",onChange:n=>l({...a,brand:n}),children:Object.keys(N).map(n=>e.jsx(s.Option,{value:n,children:n},n))})]}),e.jsxs("div",{className:"mb-4 w-1/5 pr-4",children:[e.jsx("label",{className:"mb-2 block",children:"Brand Model"}),e.jsx(s,{className:"w-full",placeholder:"Select Brand Model",disabled:!a.brand,onChange:n=>l({...a,brand_model:n}),children:a.brand&&N[a.brand].map(n=>e.jsx(s.Option,{value:n,children:n},n))})]}),e.jsxs("div",{className:"mb-4 w-1/5 pr-4",children:[e.jsx("label",{className:"mb-2 block",children:"Charge Model"}),e.jsxs(s,{className:"w-full",placeholder:"Select Charge Model",onChange:n=>l({...a,charge_model:n}),children:[e.jsx(s.Option,{value:"ac",children:"AC"}),e.jsx(s.Option,{value:"dc",children:"DC"})]})]}),e.jsxs("div",{className:"mb-4 w-1/5 pr-4",children:[e.jsx("label",{className:"mb-2 block",children:"OCPP"}),e.jsx(C,{placeholder:"Enter OCPP",onChange:n=>l({...a,ocpp:n.target.value})})]}),e.jsxs("div",{className:"mb-4 w-1/5 pr-4",children:[e.jsx("label",{className:"mb-2 block",children:"Phase"}),e.jsx(C,{placeholder:"Enter Phase",onChange:n=>l({...a,phase:n.target.value})})]}),e.jsxs("div",{className:"mb-4 w-1/5 pr-4",children:[e.jsx("label",{className:"mb-2 block",children:"Connector Number"}),e.jsxs(s,{className:"w-full",placeholder:"Select Connector Number",onChange:n=>l({...a,connector_num:n}),children:[e.jsx(s.Option,{value:1,children:"1"}),e.jsx(s.Option,{value:2,children:"2"})]})]}),e.jsx("div",{className:"mb-4 flex w-1/5 items-end pr-4",children:e.jsx(r,{type:"primary",onClick:M,className:"mt-6",children:"Search"})})]}),e.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[e.jsx("div",{children:t.length>0&&e.jsx(h,{title:"Are you sure you want to delete these chargepoints?",onConfirm:()=>{},okText:"Yes",cancelText:"No",children:e.jsx(r,{icon:e.jsx(E,{}),onClick:v,children:"Batch Delete"})})}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(r,{icon:e.jsx(T,{}),onClick:()=>w(),className:"mr-2",children:"Create Chargepoint Brand"}),e.jsxs(x.Group,{value:u,onChange:n=>k(n.target.value),children:[e.jsxs(x.Button,{value:"list",children:[e.jsx(O,{})," List"]}),e.jsxs(x.Button,{value:"grid",children:[e.jsx(V,{})," Grid"]})]})]})]}),u==="list"?e.jsx(Y,{rowSelection:{type:"checkbox",onChange:n=>p(n)},columns:P,dataSource:m,rowKey:"id",pagination:!1}):e.jsx("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",children:m.map(n=>e.jsxs(R,{className:"mb-4",children:[e.jsx("div",{className:"mb-2",children:e.jsx("input",{type:"checkbox",checked:t.includes(n.id),onChange:o=>{const B=o.target.checked?[...t,n.id]:t.filter(S=>S!==n.id);p(B)}})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Brand:"})," ",n.brand]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Brand Model:"})," ",e.jsx(r,{type:"link",onClick:()=>_(n),children:n.brand_model})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Charge Model:"})," ",n.charge_model]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Connector Number:"})," ",n.connector_num]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Phase:"})," ",n.phase]}),e.jsxs("p",{children:[e.jsx("strong",{children:"OCPP:"})," ",n.ocpp]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Current Max:"})," ",n.current_max]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Current Min:"})," ",n.current_min]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Power Max:"})," ",n.power_max]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Power Min:"})," ",n.power_min]}),e.jsx(h,{title:"Are you sure you want to delete this charge point?",onConfirm:()=>g(n.id),okText:"Yes",cancelText:"No",children:e.jsx(r,{type:"link",children:"Delete"})})]},n.id))}),e.jsx("div",{className:"mt-4 flex justify-end",children:e.jsx(A,{total:m.length,showSizeChanger:!0,showQuickJumper:!0,showTotal:n=>`Total ${n} items`})}),e.jsx(D,{visible:f,onClose:()=>d(!1),chargePoint:i,onEdit:()=>{d(!1),w(i)}}),e.jsx(I,{visible:y,onClose:()=>j(!1),chargePoint:i})]})}export{Q as default};