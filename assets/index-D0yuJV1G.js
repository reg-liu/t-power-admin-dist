import{g as E,j as e,f as v}from"./index-DHG9k9kq.js";import{r as a}from"./vendor-react-BcJS7s_i.js";import R from"./bindTbox-DYFgLZcv.js";import M from"./detail-DPQTCTqu.js";import D from"./editTboxNumber-kq3MOBz_.js";import G from"./unbindTbox-zOvYkg3d.js";import{I as x,k as l,ai as U,aj as A,x as u,F as P,l as X,y as z,E as O}from"./vendor-antd-DZ11D4bT.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-FiO04Ee5.js";const f=[{key:"1",registration_number:"REG001",vin:"VIN001",brand_model:"Brand A Model X",tbox_number:"TBOX001"},{key:"2",registration_number:"REG002",vin:"VIN002",brand_model:"Brand B Model Y",tbox_number:"TBOX002"},{key:"3",registration_number:"REG003",vin:"VIN003",brand_model:"Brand C Model Z",tbox_number:"TBOX003"}];function K(){const[i,r]=a.useState({registration_number:"",vin:"",tbox_number:""}),[h,p]=a.useState("list"),[t,o]=a.useState([]),[g,c]=a.useState(!1),[T,d]=a.useState(!1),[y,m]=a.useState(!1),[k,b]=a.useState(!1),[j,_]=a.useState(null),C=E(),I=[{title:"Registration Number",dataIndex:"registration_number",className:"bold",key:"registration_number",render:(s,n)=>e.jsx(l,{type:"link",onClick:()=>N(n),children:s})},{title:"Vin Number",dataIndex:"vin",key:"vin"},{title:"Brand Model",dataIndex:"brand_model",key:"brand_model"},{title:"Tbox Number",dataIndex:"tbox_number",key:"tbox_number"}],N=s=>{_(s),c(!0)},B=()=>{},w=()=>{b(!0)},V=()=>{m(!0)};return e.jsxs("div",{className:"main-content",children:[e.jsxs("div",{className:"search-area flex items-center justify-start",children:[e.jsxs("div",{className:"search-item",children:[e.jsx("label",{className:"block",children:"Registration Number"}),e.jsx(x,{placeholder:"Enter Registration Number",value:i.registration_number,onChange:s=>r({...i,registration_number:s.target.value})})]}),e.jsxs("div",{className:"search-item",children:[e.jsx("label",{className:"block",children:"Vin Number"}),e.jsx(x,{placeholder:"Enter Vin Number",value:i.vin,onChange:s=>r({...i,vin:s.target.value})})]}),e.jsxs("div",{className:"search-item",children:[e.jsx("label",{className:"block",children:"Tbox Number"}),e.jsx(x,{placeholder:"Enter Tbox Number",value:i.tbox_number,onChange:s=>r({...i,tbox_number:s.target.value})})]}),e.jsx("div",{className:"search-btn ml-auto flex w-1/5 items-end justify-end",children:e.jsx(l,{type:"primary",onClick:B,className:"mt-6",children:"Search"})})]}),e.jsxs("div",{className:"operation-area flex items-center justify-between",children:[e.jsx("div",{children:t.length>0&&e.jsx(l,{icon:e.jsx(U,{}),onClick:w,children:"Unbind Tbox"})}),e.jsxs("div",{className:"flex items-center",children:[C&&t.length>0&&e.jsx(l,{icon:e.jsx(A,{}),onClick:V,className:"mr-4",children:"Bind Tbox"}),e.jsxs(u.Group,{className:"layout-switch",value:h,onChange:s=>p(s.target.value),children:[e.jsx(u.Button,{value:"list",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(v,{icon:"mynaui:list",size:20}),"List"]})}),e.jsx(u.Button,{value:"grid",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(v,{icon:"proicons:grid",size:20}),"Grid"]})})]})]})]}),h==="list"?e.jsx(P,{columns:I,dataSource:f,bordered:!0,rowSelection:{type:"checkbox",onChange:(s,n)=>o(n)}}):e.jsx("div",{className:"grid",children:f.map(s=>e.jsx("div",{className:"grid-item",children:e.jsxs(X,{className:"w-full",children:[e.jsxs("div",{className:"grid-top flex items-center",children:[e.jsx(z,{onChange:n=>{n.target.checked?o([...t,s]):o(t.filter(S=>S.key!==s.key))}}),e.jsx("div",{className:"card-title",children:e.jsx(l,{type:"link",className:"detail-link",onClick:()=>N(s),children:s.registration_number})})]}),e.jsxs("div",{className:"grid-bottom",children:[e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"VIN:"}),e.jsx("span",{className:"value",children:s.vin})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Brand Model:"}),e.jsx("span",{className:"value",children:s.brand_model})]}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label",children:"Tbox Number:"}),e.jsx("span",{className:"value",children:s.tbox_number})]})]})]},s.key)}))}),e.jsx("div",{className:"mt-4 flex justify-end",children:e.jsx(O,{total:50,showSizeChanger:!0,showQuickJumper:!0,showTotal:s=>`Total ${s} items`})}),e.jsx(M,{visible:g,onCancel:()=>c(!1),data:j,onEditTboxNumber:()=>{d(!0)},onDeleteBoundedTbox:()=>{c(!1)}}),e.jsx(D,{visible:T,onCancel:()=>d(!1),onConfirm:s=>{d(!1)},initialTboxNumber:j?.tbox_number||""}),e.jsx(R,{visible:y,onCancel:()=>m(!1),onConfirm:s=>{m(!1)}}),e.jsx(G,{visible:k,onCancel:()=>b(!1),onConfirm:s=>{b(!1)}})]})}export{K as default};
