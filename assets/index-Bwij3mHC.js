import{c as x,e as m,an as u,j as e,am as h,P as l,ag as r,I as t,f as n}from"./index-BGJumyCV.js";import{l as j,k as p,F as f,P as g}from"./vendor-antd-C5sFxZgj.js";import"./vendor-react-BcJS7s_i.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-C8CVoVQY.js";const y=h;function k(){const{colorTextSecondary:i}=x(),{push:c}=m(),o=u(),d=[{title:"Name",dataIndex:"name",width:300,render:(s,a)=>e.jsxs("div",{className:"flex",children:[e.jsx("img",{alt:"",src:a.avatar,className:"h-10 w-10 rounded-full"}),e.jsxs("div",{className:"ml-2 flex flex-col",children:[e.jsx("span",{className:"text-sm",children:a.username}),e.jsx("span",{style:{color:i},className:"text-xs",children:a.email})]})]})},{title:"Role",dataIndex:"role",align:"center",width:120,render:s=>e.jsx(l,{color:"cyan",children:s.name})},{title:"Status",dataIndex:"status",align:"center",width:120,render:s=>e.jsx(l,{color:s===r.DISABLE?"error":"success",children:s===r.DISABLE?"Disable":"Enable"})},{title:"Action",key:"operation",align:"center",width:100,render:(s,a)=>e.jsxs("div",{className:"flex w-full justify-center text-gray",children:[e.jsx(t,{onClick:()=>{c(`${o}/${a.id}`)},children:e.jsx(n,{icon:"mdi:card-account-details",size:18})}),e.jsx(t,{onClick:()=>{},children:e.jsx(n,{icon:"solar:pen-bold-duotone",size:18})}),e.jsx(g,{title:"Delete the User",okText:"Yes",cancelText:"No",placement:"left",children:e.jsx(t,{children:e.jsx(n,{icon:"mingcute:delete-2-fill",size:18,className:"text-error"})})})]})}];return e.jsx(j,{title:"User List",extra:e.jsx(p,{type:"primary",onClick:()=>{},children:"New"}),children:e.jsx(f,{rowKey:"id",size:"small",scroll:{x:"max-content"},pagination:!1,columns:d,dataSource:y})})}export{k as default};
