import{j as e}from"./index-D-ofxrX4.js";import{r as l}from"./vendor-react-BcJS7s_i.js";import I from"./brandModelDetail-BBLVEvvT.js";import E from"./editBrand-COqTN9Tv.js";import{w as n,I as N,k as t,P as x,x as O,y as T,z as p,E as V,F as Y,H as A,l as R,J as F}from"./vendor-antd-mvdqVON1.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-CxBTGS1X.js";import"./addBrand-0_BAMPrK.js";const K=[{id:1,brand:"Tesla",brand_model:"Model S",charge_model:"ac",connector_num:1,phase:"3",ocpp:"1.6",current_max:32,current_min:6,power_max:22,power_min:1.4},{id:2,brand:"Nissan",brand_model:"Nissan LEAF",charge_model:"dc",connector_num:2,phase:"1",ocpp:"2.0",current_max:125,current_min:10,power_max:50,power_min:3},{id:3,brand:"BYD",brand_model:"BYD Tang EV",charge_model:"ac",connector_num:1,phase:"3",ocpp:"1.6",current_max:32,current_min:6,power_max:22,power_min:1.4},{id:4,brand:"Tesla",brand_model:"Model 3",charge_model:"dc",connector_num:2,phase:"1",ocpp:"2.0",current_max:250,current_min:20,power_max:250,power_min:5}],f={Tesla:["Model S","Model 3","Model X"],Nissan:["Nissan LEAF","Nissan Ariya","Nissan e-NV200"],BYD:["BYD Tang EV","BYD Qin EV","BYD Yuan EV"]};function q(){const[s,c]=l.useState({brand:"",brand_model:""}),[d,u]=l.useState([]),[j,k]=l.useState("list"),[o,b]=l.useState(K),[y,i]=l.useState(!1),[v,g]=l.useState(!1),[h,m]=l.useState(null),M=()=>{},_=a=>{},P=()=>{},w=a=>{m(a),i(!0)},C=a=>{m(a||null),g(!0)},S=[{title:"Brand",dataIndex:"brand",key:"brand"},{title:"Brand Model",dataIndex:"brand_model",key:"brand_model",render:(a,r)=>e.jsx(t,{type:"link",onClick:()=>w(r),children:a})},{title:"Charge Model",dataIndex:"charge_model",key:"charge_model"},{title:"Connector Number",dataIndex:"connector_num",key:"connector_num"},{title:"Phase",dataIndex:"phase",key:"phase"},{title:"OCPP",dataIndex:"ocpp",key:"ocpp"},{title:"Current Max",dataIndex:"current_max",key:"current_max"},{title:"Current Min",dataIndex:"current_min",key:"current_min"},{title:"Power Max",dataIndex:"power_max",key:"power_max"},{title:"Power Min",dataIndex:"power_min",key:"power_min"},{title:"Operation",key:"operation",render:(a,r)=>e.jsx(x,{title:"Are you sure you want to delete this charge point?",onConfirm:()=>_(r.id),okText:"Yes",cancelText:"No",children:e.jsx(t,{type:"link",children:"Delete"})})}];return e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"search-area mb-6 flex flex-wrap justify-between",children:[e.jsxs("div",{className:"search-item mb-4 w-1/5 pr-4",children:[e.jsx("label",{className:"mb-2 block",children:"Brand"}),e.jsxs(n,{className:"w-full",value:s.brand,placeholder:"Select Brand",onChange:a=>c({...s,brand:a}),children:[e.jsx(n.Option,{value:"",children:"All"}),Object.keys(f).map(a=>e.jsx(n.Option,{value:a,children:a},a))]})]}),e.jsxs("div",{className:"search-item mb-4 w-1/5 pr-4",children:[e.jsx("label",{className:"mb-2 block",children:"Brand Model"}),e.jsxs(n,{className:"w-full",placeholder:"Select Brand Model",value:s.brand_model,disabled:!s.brand,onChange:a=>c({...s,brand_model:a}),children:[e.jsx(n.Option,{value:"",children:"All"}),s.brand&&f[s.brand].map(a=>e.jsx(n.Option,{value:a,children:a},a))]})]}),e.jsxs("div",{className:"search-item mb-4 w-1/5 pr-4",children:[e.jsx("label",{className:"mb-2 block",children:"Charge Model"}),e.jsxs(n,{className:"w-full",placeholder:"Select Charge Model",onChange:a=>c({...s,charge_model:a}),children:[e.jsx(n.Option,{value:"ac",children:"AC"}),e.jsx(n.Option,{value:"dc",children:"DC"})]})]}),e.jsxs("div",{className:"search-item mb-4 w-1/5 pr-4",children:[e.jsx("label",{className:"mb-2 block",children:"OCPP"}),e.jsx(N,{placeholder:"Enter OCPP",onChange:a=>c({...s,ocpp:a.target.value})})]}),e.jsxs("div",{className:"search-item mb-4 w-1/5 pr-4",children:[e.jsx("label",{className:"mb-2 block",children:"Phase"}),e.jsx(N,{placeholder:"Enter Phase",onChange:a=>c({...s,phase:a.target.value})})]}),e.jsxs("div",{className:"search-item mb-4 w-1/5 pr-4",children:[e.jsx("label",{className:"mb-2 block",children:"Connector Number"}),e.jsxs(n,{className:"w-full",placeholder:"Select Connector Number",onChange:a=>c({...s,connector_num:a}),children:[e.jsx(n.Option,{value:1,children:"1"}),e.jsx(n.Option,{value:2,children:"2"})]})]}),e.jsx("div",{className:"search-btn mb-4 ml-auto flex w-1/5 items-end justify-end pr-4",children:e.jsx(t,{type:"primary",onClick:M,className:"mt-6",children:"Search"})})]}),e.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[e.jsx("div",{children:d.length>0&&e.jsx(x,{title:"Are you sure you want to delete these chargepoints?",onConfirm:()=>{},okText:"Yes",cancelText:"No",children:e.jsx(t,{icon:e.jsx(O,{}),onClick:P,children:"Batch Delete"})})}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(t,{icon:e.jsx(T,{}),onClick:()=>C(),className:"mr-2",children:"Create Chargepoint Brand"}),e.jsxs(p.Group,{value:j,onChange:a=>k(a.target.value),children:[e.jsxs(p.Button,{value:"list",children:[e.jsx(V,{})," List"]}),e.jsxs(p.Button,{value:"grid",children:[e.jsx(Y,{})," Grid"]})]})]})]}),j==="list"?e.jsx(A,{rowSelection:{type:"checkbox",onChange:a=>u(a)},columns:S,dataSource:o,rowKey:"id",pagination:!1}):e.jsx("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",children:o.map(a=>e.jsxs(R,{className:"mb-4",children:[e.jsx("div",{className:"mb-2",children:e.jsx("input",{type:"checkbox",checked:d.includes(a.id),onChange:r=>{const B=r.target.checked?[...d,a.id]:d.filter(D=>D!==a.id);u(B)}})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Brand:"})," ",a.brand]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Brand Model:"})," ",e.jsx(t,{type:"link",onClick:()=>w(a),children:a.brand_model})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Charge Model:"})," ",a.charge_model]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Connector Number:"})," ",a.connector_num]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Phase:"})," ",a.phase]}),e.jsxs("p",{children:[e.jsx("strong",{children:"OCPP:"})," ",a.ocpp]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Current Max:"})," ",a.current_max]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Current Min:"})," ",a.current_min]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Power Max:"})," ",a.power_max]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Power Min:"})," ",a.power_min]}),e.jsx(x,{title:"Are you sure you want to delete this charge point?",onConfirm:()=>_(a.id),okText:"Yes",cancelText:"No",children:e.jsx(t,{type:"link",children:"Delete"})})]},a.id))}),e.jsx("div",{className:"mt-4 flex justify-end",children:e.jsx(F,{total:o.length,showSizeChanger:!0,showQuickJumper:!0,showTotal:a=>`Total ${a} items`})}),e.jsx(I,{visible:y,onClose:()=>i(!1),chargePoint:h,onEdit:()=>{i(!1),C(h)}}),e.jsx(E,{visible:v,onClose:()=>g(!1),record:h,onSave:a=>{b(a?o.map(r=>r.brand_model===a.brand_model?a:r):[...o,a]),m(!1)}})]})}export{q as default};
