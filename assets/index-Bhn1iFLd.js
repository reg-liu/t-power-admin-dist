import{j as t,aj as m,ag as s,P as u,I as l,f as r}from"./index-DHG9k9kq.js";import{l as f,k as h,F as p,P as j}from"./vendor-antd-DZ11D4bT.js";import{r as w}from"./vendor-react-BcJS7s_i.js";import{RoleModal as E}from"./role-modal-roPsjTX_.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-FiO04Ee5.js";const I=m,i={id:"",name:"",label:"",status:s.ENABLE,permission:[]};function y(){const[n,a]=w.useState({formValue:{...i},title:"New",show:!1,onOk:()=>{a(e=>({...e,show:!1}))},onCancel:()=>{a(e=>({...e,show:!1}))}}),c=[{title:"Name",dataIndex:"name",width:300},{title:"Label",dataIndex:"label"},{title:"Order",dataIndex:"order",width:60},{title:"Status",dataIndex:"status",align:"center",width:120,render:e=>t.jsx(u,{color:e===s.DISABLE?"error":"success",children:e===s.DISABLE?"Disable":"Enable"})},{title:"Desc",dataIndex:"desc"},{title:"Action",key:"operation",align:"center",width:100,render:(e,o)=>t.jsxs("div",{className:"flex w-full justify-center text-gray",children:[t.jsx(l,{onClick:()=>x(o),children:t.jsx(r,{icon:"solar:pen-bold-duotone",size:18})}),t.jsx(j,{title:"Delete the Role",okText:"Yes",cancelText:"No",placement:"left",children:t.jsx(l,{children:t.jsx(r,{icon:"mingcute:delete-2-fill",size:18,className:"text-error"})})})]})}],d=()=>{a(e=>({...e,show:!0,title:"Create New",formValue:{...e.formValue,...i}}))},x=e=>{a(o=>({...o,show:!0,title:"Edit",formValue:e}))};return t.jsxs(f,{title:"Role List",extra:t.jsx(h,{type:"primary",onClick:d,children:"New"}),children:[t.jsx(p,{rowKey:"id",size:"small",scroll:{x:"max-content"},pagination:!1,columns:c,dataSource:I}),t.jsx(E,{...n})]})}export{y as default};
