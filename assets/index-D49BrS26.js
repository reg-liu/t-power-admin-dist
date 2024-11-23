import{j as e}from"./index-D2661MC7.js";import{r}from"./vendor-react-DcqtUZ_G.js";import I from"./brandModelDetail-BceFD3CL.js";import D from"./editBrand-CS-TT-C2.js";import{I as c,w as t,k as s,x as A,y as O,z as h,E as $,F as E,H as F,l as R,s as x,J as k}from"./vendor-antd-7_-hIQNy.js";import"./vendor-ui-BASYQBt4.js";import"./vendor-utils-B0D_8pEH.js";const u=[{id:"1",brand:"Tesla",brand_model:"Model S",charge_model:"AC",connector_num:1,phase:"3",ocpp:"1.6",current_max:"32A",current_min:"6A",power_max:"22kW",power_min:"1.4kW"},{id:"2",brand:"ChargePoint",brand_model:"CP4000",charge_model:"DC",connector_num:2,phase:"3",ocpp:"2.0",current_max:"125A",current_min:"10A",power_max:"50kW",power_min:"2.5kW"},{id:"3",brand:"ABB",brand_model:"Terra 54",charge_model:"DC",connector_num:2,phase:"3",ocpp:"1.6",current_max:"200A",current_min:"20A",power_max:"50kW",power_min:"5kW"},{id:"4",brand:"Siemens",brand_model:"VersiCharge",charge_model:"AC",connector_num:1,phase:"1",ocpp:"1.6",current_max:"32A",current_min:"6A",power_max:"7.4kW",power_min:"1.4kW"}];function L(){const[a,l]=r.useState({}),[p,f]=r.useState("table"),[o,j]=r.useState([]),[v,i]=r.useState(!1),[w,d]=r.useState(!1),[g,y]=r.useState(null),[M,_]=r.useState(!1),N=[{title:"Brand",dataIndex:"brand",key:"brand",render:(n,m)=>e.jsx(s,{type:"link",onClick:()=>b(m),children:n})},{title:"Brand Model",dataIndex:"brand_model",key:"brand_model"},{title:"Charge Model",dataIndex:"charge_model",key:"charge_model"},{title:"Connector Number",dataIndex:"connector_num",key:"connector_num"},{title:"Phase",dataIndex:"phase",key:"phase"},{title:"OCPP",dataIndex:"ocpp",key:"ocpp"},{title:"Current Max",dataIndex:"current_max",key:"current_max"},{title:"Current Min",dataIndex:"current_min",key:"current_min"},{title:"Power Max",dataIndex:"power_max",key:"power_max"},{title:"Power Min",dataIndex:"power_min",key:"power_min"},{title:"Operation",key:"operation",render:(n,m)=>e.jsx(s,{type:"link",onClick:()=>C(m),children:"Delete"})}],S=()=>{x.success("Search performed")},b=n=>{y(n),i(!0)},C=n=>{k.confirm({title:"Confirm Delete",content:`Are you sure you want to delete ${n.brand} ${n.brand_model}?`,onOk(){x.success(`Deleted ${n.brand} ${n.brand_model}`)}})},B=()=>{k.confirm({title:"Confirm Batch Delete",content:`Are you sure you want to delete ${o.length} items?`,onOk(){x.success(`Deleted ${o.length} items`),j([])}})},P={selectedRowKeys:o,onChange:n=>{j(n)}};return e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"mb-6 grid grid-cols-5 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"brand",className:"block text-sm font-medium text-gray-700",children:"Brand"}),e.jsx(c,{id:"brand",placeholder:"Brand",className:"mt-1",value:a.brand,onChange:n=>l({...a,brand:n.target.value})})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"brand_model",className:"block text-sm font-medium text-gray-700",children:"Brand Model"}),e.jsx(c,{id:"brand_model",placeholder:"Brand Model",className:"mt-1",value:a.brand_model,onChange:n=>l({...a,brand_model:n.target.value})})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"charge_model",className:"block text-sm font-medium text-gray-700",children:"Charge Model"}),e.jsxs(t,{id:"charge_model",placeholder:"Charge Model",className:"mt-1 w-full",value:a.charge_model,onChange:n=>l({...a,charge_model:n}),children:[e.jsx(t.Option,{value:"ac",children:"AC"}),e.jsx(t.Option,{value:"dc",children:"DC"})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"ocpp",className:"block text-sm font-medium text-gray-700",children:"OCPP"}),e.jsx(c,{id:"ocpp",placeholder:"OCPP",className:"mt-1",value:a.ocpp,onChange:n=>l({...a,ocpp:n.target.value})})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"phase",className:"block text-sm font-medium text-gray-700",children:"Phase"}),e.jsx(c,{id:"phase",placeholder:"Phase",className:"mt-1",value:a.phase,onChange:n=>l({...a,phase:n.target.value})})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"connector_num",className:"block text-sm font-medium text-gray-700",children:"Connector Number"}),e.jsxs(t,{id:"connector_num",placeholder:"Connector Number",className:"mt-1 w-full",value:a.connector_num,onChange:n=>l({...a,connector_num:n}),children:[e.jsx(t.Option,{value:1,children:"1"}),e.jsx(t.Option,{value:2,children:"2"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"invisible block text-sm font-medium text-gray-700",children:"Search"}),e.jsx(s,{type:"primary",onClick:S,children:"Search"})]})]}),e.jsxs("div",{className:"mb-4 flex justify-between",children:[e.jsx("div",{children:o.length>0&&e.jsx(s,{icon:e.jsx(A,{}),onClick:B,children:"Batch Delete"})}),e.jsxs("div",{children:[e.jsx(s,{icon:e.jsx(O,{}),onClick:()=>{_(!1),d(!0)},children:"Create Chargepoint Brand"}),e.jsxs(h.Group,{value:p,onChange:n=>f(n.target.value),className:"ml-4",children:[e.jsxs(h.Button,{value:"table",children:[e.jsx($,{})," List"]}),e.jsxs(h.Button,{value:"grid",children:[e.jsx(E,{})," Grid"]})]})]})]}),p==="table"?e.jsx(F,{rowSelection:P,columns:N,dataSource:u,rowKey:"id",pagination:{total:u.length,showSizeChanger:!0,showQuickJumper:!0,showTotal:n=>`Total ${n} items`}}):e.jsx("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",children:u.map(n=>e.jsxs(R,{className:"flex flex-col justify-between",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold",children:e.jsx(s,{type:"link",onClick:()=>b(n),children:n.brand})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Brand Model:"})," ",n.brand_model]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Charge Model:"})," ",n.charge_model]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Connector Number:"})," ",n.connector_num]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Phase:"})," ",n.phase]}),e.jsxs("p",{children:[e.jsx("strong",{children:"OCPP:"})," ",n.ocpp]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Current Max:"})," ",n.current_max]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Current Min:"})," ",n.current_min]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Power Max:"})," ",n.power_max]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Power Min:"})," ",n.power_min]})]}),e.jsx("div",{className:"mt-4",children:e.jsx(s,{type:"link",danger:!0,onClick:()=>C(n),children:"Delete"})})]},n.id))}),e.jsx(I,{visible:v,onCancel:()=>i(!1),brand:g,onEdit:()=>{_(!0),i(!1),d(!0)}}),e.jsx(D,{visible:w,onCancel:()=>d(!1),onConfirm:n=>{d(!1)},initialValues:M?g:void 0})]})}export{L as default};
