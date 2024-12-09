import{j as e}from"./index-DjbdT0yP.js";import{r}from"./vendor-react-BcJS7s_i.js";import N from"./detail-D_KrrqJX.js";import I from"./editAvailability-BeBbGxkZ.js";import{I as n,w as s,k as d,$ as V,z as m,E as B,F as D,H as w,l as M,V as E,J as F}from"./vendor-antd-AsxM9fV-.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-DGcstGqY.js";import"./LineChart-i76Lqa-m.js";import"./isEqual-Hc_6Fhhx.js";import"./vendor-charts-Cv5x1InZ.js";import"./index-Dj133iwh.js";const u=[{id:"1",registration_number:"ABC123",vin:"1HGBH41JXMN109186",status:"online",current_driver:"John Doe",location:{street:"3 Street",city:"Hallam",state:"VIC 3803"},brand:"Tesla",brand_model:"Model 3"},{id:"2",registration_number:"DEF456",vin:"2FMZA5144XBA69635",status:"offline",current_driver:"Jane Smith",location:{street:"5 Street",city:"Hallam",state:"VIC 3803"},brand:"Nissan",brand_model:"Leaf"},{id:"3",registration_number:"GHI789",vin:"JH4DA9370MS016526",status:"unavailable",current_driver:"Bob Johnson",location:{street:"7 Street",city:"Hallam",state:"VIC 3803"},brand:"Chevrolet",brand_model:"Bolt"}],J=[{id:"1",name:"John Doe"},{id:"2",name:"Jane Smith"},{id:"3",name:"Bob Johnson"}];function K(){const[a,i]=r.useState({}),[x,j]=r.useState("table"),[l,o]=r.useState([]),[g,b]=r.useState(!1),[p,c]=r.useState(!1),[f,y]=r.useState(null),_=()=>{},k=()=>{c(!0)},v=t=>{y(t),b(!0)},S=[{title:"Registration Number",dataIndex:"registration_number",key:"registration_number",render:(t,h)=>e.jsx(d,{type:"link",onClick:()=>v(h),children:t})},{title:"VIN",dataIndex:"vin",key:"vin"},{title:"Status",dataIndex:"status",key:"status"},{title:"Current Driver",dataIndex:"current_driver",key:"current_driver"},{title:"Location",dataIndex:"location",key:"location",render:t=>e.jsxs("span",{children:[t.street,", ",t.city,", ",t.state]})},{title:"Brand",dataIndex:"brand",key:"brand"},{title:"Brand Model",dataIndex:"brand_model",key:"brand_model"}];return e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"mb-6 grid grid-cols-5 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"registration_number",className:"block text-sm font-medium text-gray-700",children:"Registration Number"}),e.jsx(n,{id:"registration_number",placeholder:"Registration Number",value:a.registration_number,onChange:t=>i({...a,registration_number:t.target.value})})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"vin",className:"block text-sm font-medium text-gray-700",children:"VIN"}),e.jsx(n,{id:"vin",placeholder:"VIN",value:a.vin,onChange:t=>i({...a,vin:t.target.value})})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"status",className:"block text-sm font-medium text-gray-700",children:"Status"}),e.jsxs(s,{id:"status",placeholder:"Select Status",value:a.status,onChange:t=>i({...a,status:t}),className:"w-full",children:[e.jsx(s.Option,{value:"online",children:"Online"}),e.jsx(s.Option,{value:"offline",children:"Offline"}),e.jsx(s.Option,{value:"unavailable",children:"Unavailable"})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"current_driver",className:"block text-sm font-medium text-gray-700",children:"Driver"}),e.jsx(s,{id:"current_driver",placeholder:"Select Driver",value:a.current_driver,onChange:t=>i({...a,current_driver:t}),className:"w-full",children:J.map(t=>e.jsx(s.Option,{value:t.id,children:t.name},t.id))})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"brand",className:"block text-sm font-medium text-gray-700",children:"Brand"}),e.jsx(n,{id:"brand",placeholder:"Brand",value:a.brand,onChange:t=>i({...a,brand:t.target.value})})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"brand_model",className:"block text-sm font-medium text-gray-700",children:"Brand Model"}),e.jsx(n,{id:"brand_model",placeholder:"Brand Model",value:a.brand_model,onChange:t=>i({...a,brand_model:t.target.value})})]}),e.jsxs("div",{children:[e.jsx("label",{className:"invisible block text-sm font-medium text-gray-700",children:"Search"}),e.jsx(d,{type:"primary",onClick:_,children:"Search"})]})]}),e.jsxs("div",{className:"mb-4 flex justify-between",children:[e.jsx("div",{children:l.length>0&&e.jsx(d,{icon:e.jsx(V,{}),onClick:k,children:"Edit Availability"})}),e.jsx("div",{children:e.jsxs(m.Group,{value:x,onChange:t=>j(t.target.value),children:[e.jsxs(m.Button,{value:"table",children:[e.jsx(B,{})," List"]}),e.jsxs(m.Button,{value:"grid",children:[e.jsx(D,{})," Grid"]})]})})]}),x==="table"?e.jsx(w,{columns:S,dataSource:u,rowKey:"id",pagination:!1,rowSelection:{type:"checkbox",onChange:t=>{o(t)}}}):e.jsx("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",children:u.map(t=>e.jsxs(M,{children:[e.jsx(E,{onChange:h=>{h.target.checked?o([...l,t.id]):o(l.filter(C=>C!==t.id))},checked:l.includes(t.id)}),e.jsx("h3",{className:"text-lg font-semibold",children:e.jsx(d,{type:"link",onClick:()=>v(t),children:t.registration_number})}),e.jsxs("p",{children:["VIN: ",t.vin]}),e.jsxs("p",{children:["Status: ",t.status]}),e.jsxs("p",{children:["Current Driver: ",t.current_driver]}),e.jsxs("p",{children:["Location: ",t.location.street,", ",t.location.city,", ",t.location.state]}),e.jsxs("p",{children:["Brand: ",t.brand]}),e.jsxs("p",{children:["Brand Model: ",t.brand_model]})]},t.id))}),e.jsx("div",{className:"mt-4 flex justify-center",children:e.jsx(F,{total:u.length,showSizeChanger:!0,showQuickJumper:!0,showTotal:t=>`Total ${t} items`})}),e.jsx(N,{visible:g,onCancel:()=>b(!1),vehicle:f}),e.jsx(I,{visible:p,onCancel:()=>c(!1),onConfirm:t=>{c(!1)}})]})}export{K as default};
