import{j as e,S as v,f as N}from"./index-G5iZ5nLU.js";import{r as t}from"./vendor-react-BcJS7s_i.js";import{e as J}from"./ev-PecoakOh.js";import L from"./detail-BUlPXdrh.js";import H from"./editAvailability-CFFY9Ej6.js";import{K as z,w as i,i as o,x,F as T,y as g,j as F,I as O,z as R}from"./vendor-antd-B62eGpCx.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-CtEfXJzW.js";import"./LineChart-C4LqiVfN.js";import"./isEqual-Hc_6Fhhx.js";import"./vendor-charts-Cv5x1InZ.js";import"./index-Dj133iwh.js";const{Option:h}=i,c=[{id:"1",registration_number:"ABC123",vin:"1HGBH41JXMN109186",status:"available",current_driver:"John Doe",location:{street:"3 Street",city:"Hallam",state:"VIC 3803"},brand:"Tesla",brand_model:"Model 3"},{id:"2",registration_number:"DEF456",vin:"2FMZA5144XBA69635",status:"available",current_driver:"Jane Smith",location:{street:"5 Street",city:"Hallam",state:"VIC 3803"},brand:"Nissan",brand_model:"Leaf"},{id:"3",registration_number:"GHI789",vin:"JH4DA9370MS016526",status:"unavailable",current_driver:"Bob Johnson",location:{street:"7 Street",city:"Hallam",state:"VIC 3803"},brand:"Chevrolet",brand_model:"Bolt"}],Y=[{id:"1",name:"John Doe"},{id:"2",name:"Jane Smith"},{id:"3",name:"Bob Johnson"}],y=[{value:"Tesla",models:["Model S","Model 3","Model X"]},{value:"Nissan",models:["Nissan LEAF","Nissan Ariya","Nissan e-NV200"]},{value:"BYD",models:["BYD Tang EV","BYD Qin EV","BYD Yuan EV"]}];function le(){const[s,r]=t.useState({}),[j,f]=t.useState("list"),[m,C]=t.useState("registration_number"),[n,d]=t.useState([]),[w,b]=t.useState(!1),[G,S]=t.useState(0),[_,u]=t.useState(!1),[k,B]=t.useState(null),I=()=>{S(Date.now())},V=()=>{u(!0)},p=a=>{B(a),b(!0)},D=[{title:"Registration Number",dataIndex:"registration_number",key:"registration_number",className:"bold",render:(a,l)=>e.jsx(o,{type:"link",onClick:()=>p(l),children:a})},{title:"VIN Number",dataIndex:"vin",key:"vin"},{title:"Status",dataIndex:"status",key:"status",render:a=>e.jsx("div",{className:`status ${a.toLowerCase()}`,children:e.jsx("span",{children:a})})},{title:"Brand",dataIndex:"brand",key:"brand"},{title:"Brand Model",dataIndex:"brand_model",key:"brand_model"},{title:"Driver",dataIndex:"current_driver",key:"current_driver"},{title:"Location",dataIndex:"location",key:"location",render:a=>e.jsxs("span",{className:"location",children:[a.street,", ",a.city,", ",a.state]})}],E=e.jsxs(i,{value:m,onChange:C,style:{width:210},children:[e.jsx(h,{value:"registration_number",children:"Registration Number"}),e.jsx(h,{value:"vin",children:"VIN Number"})]}),M=()=>{c.length===n.length?d([]):d(c.map(a=>a.id))};return e.jsxs("div",{className:"main-content",children:[e.jsxs("div",{className:"search-area flex items-center justify-start",children:[e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"Enter"}),e.jsx(z,{addonBefore:E,placeholder:m==="registration_number"?"Registration Number":"VIN Number",allowClear:!0,value:s[m],onChange:a=>{let l={...s};delete l.registration_number,delete l.vin,l={...l,[m]:a.target.value},r(l)}})]}),e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"Status"}),e.jsxs(i,{style:{width:160},placeholder:"Status",allowClear:!0,value:s.status,onChange:a=>r({...s,status:a}),className:"w-full",children:[e.jsx(i.Option,{value:"available",children:"Available"}),e.jsx(i.Option,{value:"unavailable",children:"Unavailable"})]})]}),e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"Driver"}),e.jsx(i,{placeholder:"Driver",allowClear:!0,style:{width:210},value:s.current_driver,onChange:a=>r({...s,current_driver:a}),className:"w-full",children:Y.map(a=>e.jsx(i.Option,{value:a.id,children:a.name},a.id))})]}),e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"Brand"}),e.jsx(i,{style:{width:190},className:"w-full",allowClear:!0,value:s.brand,placeholder:"Brand",onChange:a=>r({...s,brand:a,brand_model:""}),children:y.map(a=>e.jsx(h,{value:a.value,children:a.value},a.value))})]}),e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"Brand Model"}),e.jsx(i,{style:{width:190},allowClear:!0,className:"w-full",disabled:!s.brand,placeholder:"Brand Model",value:s.brand_model,onChange:a=>r({...s,brand_model:a}),children:y.find(a=>a.value===s.brand)?.models.map(a=>e.jsx(h,{value:a,children:a},a))})]}),e.jsx("div",{className:"search-btn",children:e.jsx(o,{icon:e.jsx(v,{icon:"Search",size:"20"}),type:"primary",onClick:I})}),e.jsx("div",{className:"search-btn clear",children:e.jsx(o,{icon:e.jsx(v,{icon:"Close",size:"24",color:"#999"}),type:"primary",onClick:()=>r({})})})]}),e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("div",{className:"operation-area flex items-center justify-start",children:[e.jsxs(x.Group,{className:"layout-switch",value:j,onChange:a=>f(a.target.value),children:[e.jsx(x.Button,{value:"list",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(N,{icon:"mynaui:list",size:20}),"List"]})}),e.jsx(x.Button,{value:"grid",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(N,{icon:"proicons:grid",size:20}),"Grid"]})})]}),e.jsx(o,{disabled:n.length===0,className:"ml-3 mr-3",icon:e.jsx(v,{icon:"Edit",size:"20",color:n.length===0?"#999":"currentColor"}),onClick:V,children:"Status"})]})}),j==="list"?e.jsx(T,{columns:D,dataSource:c,rowKey:"id",bordered:!0,pagination:!1,rowSelection:{type:"checkbox",onChange:a=>{d(a)}}}):e.jsxs("div",{className:"grid-wrapper",children:[e.jsx(g,{className:"check-all",checked:c.length===n.length,onChange:M}),e.jsx("div",{className:"grid",children:c.map(a=>e.jsx("div",{className:"grid-item",children:e.jsxs(F,{children:[e.jsxs("div",{className:"grid-top with-image flex items-center",children:[e.jsx(g,{checked:n.includes(a.id),onChange:l=>{l.target.checked?d([...n,a.id]):d(n.filter(A=>A!==a.id))}}),e.jsx(O,{src:J,preview:!1,height:184,className:"entity-image object-cover"})]}),e.jsxs("div",{className:"grid-bottom",children:[e.jsx("div",{className:"display-item title",children:e.jsx("span",{className:"value",children:e.jsx(o,{type:"link",className:"detail-link",onClick:()=>{p(a)},children:e.jsx("span",{className:"bold",children:a.registration_number})})})}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"VIN Number:"}),e.jsx("span",{className:"value",children:a.vin})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Status:"}),e.jsx("span",{className:`value status ${a.status.toLowerCase()}`,children:a.status})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Brand:"}),e.jsx("span",{className:"value",children:a.brand})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Brand Model:"}),e.jsx("span",{className:"value",children:a.brand_model})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Current Driver:"}),e.jsx("span",{className:"value",children:a.current_driver})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Location:"}),e.jsxs("span",{className:"value location",children:[a.location.street,", ",a.location.city,", ",a.location.state]})]}),e.jsx("div",{className:"bottom-padding"})]})]},a.id)}))})]}),e.jsx("div",{className:"mr-4 mt-4 flex justify-end",children:e.jsx(R,{total:c.length,showQuickJumper:!0})}),w?e.jsx(L,{onCancel:()=>b(!1),vehicle:k}):null,e.jsx(H,{visible:_,onCancel:()=>u(!1),onConfirm:a=>{u(!1)}})]})}export{le as default};
