import{W as N,c as g,t as s,j as e,f as l,P as i,S as y,I as m,V as T}from"./index-DHG9k9kq.js";import{f as w}from"./utils-cNoDE4Ik.js";import{C as r}from"./index-CtTpzieb.js";import{Q as d,V as o,v as t,ap as I,F as C,a4 as j,ae as P,j as z}from"./vendor-antd-DZ11D4bT.js";import"./vendor-react-BcJS7s_i.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-FiO04Ee5.js";function G(){const{username:x}=N(),c=g(),h=[{icon:e.jsx(l,{icon:"fa-solid:user",size:18}),label:"Full Name",val:x},{icon:e.jsx(l,{icon:"eos-icons:role-binding",size:18}),label:"Role",val:"Developer"},{icon:e.jsx(l,{icon:"tabler:location-filled",size:18}),label:"Country",val:"USA"},{icon:e.jsx(l,{icon:"ion:language",size:18}),label:"Language",val:"English"},{icon:e.jsx(l,{icon:"ph:phone-fill",size:18}),label:"Contact",val:"(123)456-7890"},{icon:e.jsx(l,{icon:"ic:baseline-email",size:18}),label:"Email",val:x}],f=[{avatar:s.image.avatarGitHub(),name:s.person.fullName(),connections:`${s.number.int(100)} Connections`,connected:s.datatype.boolean()},{avatar:s.image.avatarGitHub(),name:s.person.fullName(),connections:`${s.number.int(100)} Connections`,connected:s.datatype.boolean()},{avatar:s.image.avatarGitHub(),name:s.person.fullName(),connections:`${s.number.int(100)} Connections`,connected:s.datatype.boolean()},{avatar:s.image.avatarGitHub(),name:s.person.fullName(),connections:`${s.number.int(100)} Connections`,connected:s.datatype.boolean()},{avatar:s.image.avatarGitHub(),name:s.person.fullName(),connections:`${s.number.int(100)} Connections`,connected:s.datatype.boolean()}],p=[{avatar:e.jsx(l,{icon:"devicon:react",size:36}),name:"React Developers",members:`${s.number.int(100)} Members`,tag:e.jsx(i,{color:"warning",children:"Developer"})},{avatar:e.jsx(l,{icon:"devicon:figma",size:36}),name:"UI Designer",members:`${s.number.int(100)} Members`,tag:e.jsx(i,{color:"cyan",children:"Designer"})},{avatar:e.jsx(l,{icon:"logos:jest",size:36}),name:"Test Team",members:`${s.number.int(100)} Members`,tag:e.jsx(i,{color:"success",children:"Test"})},{avatar:e.jsx(l,{icon:"logos:nestjs",size:36}),name:"Nest.js Developers",members:`${s.number.int(100)} Members`,tag:e.jsx(i,{color:"warning",children:"Developer"})},{avatar:e.jsx(l,{icon:"logos:twitter",size:36}),name:"Digital Marketing",members:`${s.number.int(100)} Members`,tag:e.jsx(i,{children:"Marketing"})}],v=()=>{const a=[];for(let n=0;n<=25;n+=1)a.push({key:s.string.uuid(),avatar:s.image.urlPicsumPhotos(),name:s.company.buzzPhrase(),date:s.date.past().toDateString(),leader:s.person.fullName(),team:w(s.number.int({min:2,max:5})),status:s.number.int({min:50,max:99})});return a},u=[{title:"NAME",dataIndex:"name",render:(a,n)=>e.jsxs("div",{className:"flex items-center",children:[e.jsx("img",{src:n.avatar,alt:"",className:"h-9 w-9 rounded-full"}),e.jsxs("div",{className:"ml-2 flex flex-col",children:[e.jsx("span",{className:"font-semibold",children:n.name}),e.jsx("span",{className:"text-xs opacity-50",children:n.date})]})]})},{title:"LEADER",dataIndex:"leader",render:a=>e.jsx("span",{className:"opacity-50",children:a})},{title:"TEAM",dataIndex:"team",render:a=>e.jsx(j.Group,{children:a.map((n,b)=>e.jsx(j,{src:n},b))})},{title:"STATUS",dataIndex:"status",render:a=>e.jsx(P,{percent:a,strokeColor:c.colorPrimary,trailColor:"transparent"})},{title:"ACTIONS",dataIndex:"action",render:()=>e.jsx(z,{size:"middle",children:e.jsx(m,{children:e.jsx(l,{icon:"fontisto:more-v-a"})})})}];return e.jsxs(e.Fragment,{children:[e.jsxs(d,{gutter:[16,16],children:[e.jsx(o,{span:24,md:12,lg:8,children:e.jsx(r,{className:"flex-col",children:e.jsxs("div",{className:"flex w-full flex-col",children:[e.jsx(t.Title,{level:5,children:"About"}),e.jsx(t.Text,{children:s.lorem.paragraph()}),e.jsx("div",{className:"mt-2 flex flex-col gap-4",children:h.map((a,n)=>e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"mr-2",children:a.icon}),e.jsxs("div",{className:"mr-2",children:[a.label,":"]}),e.jsx("div",{className:"opacity-50",children:a.val})]},n))})]})})}),e.jsx(o,{span:24,md:12,lg:16,children:e.jsxs(r,{className:"flex-col !items-start",children:[e.jsx(t.Title,{level:5,children:"Activity Timeline"}),e.jsx(I,{className:"!mt-4 w-full",items:[{color:c.colorError,children:e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(t.Text,{strong:!0,children:"8 Invoices have been paid"}),e.jsx("div",{className:"opacity-50",children:"Wednesday"})]}),e.jsx(t.Text,{type:"secondary",className:"text-xs",children:"Invoices have been paid to the company."}),e.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[e.jsx(y,{icon:"ic_file_pdf",size:30}),e.jsx("span",{className:"font-medium opacity-60",children:"invoice.pdf"})]})]})},{color:c.colorPrimaryActive,children:e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(t.Text,{strong:!0,children:"Create a new project for client 😎"}),e.jsx("div",{className:"opacity-50",children:"April, 18"})]}),e.jsx(t.Text,{type:"secondary",className:"text-xs",children:"Invoices have been paid to the company."}),e.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[e.jsx("img",{alt:"",src:s.image.avatarGitHub(),className:"h-8 w-8 rounded-full"}),e.jsxs("span",{className:"font-medium opacity-60",children:[s.person.fullName()," (client)"]})]})]})},{color:c.colorInfo,children:e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(t.Text,{strong:!0,children:"Order #37745 from September"}),e.jsx("div",{className:"opacity-50",children:"January, 10"})]}),e.jsx(t.Text,{type:"secondary",className:"text-xs",children:"Invoices have been paid to the company."})]})},{color:c.colorWarning,children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(t.Text,{strong:!0,children:"Public Meeting"}),e.jsx("div",{className:"opacity-50",children:"September, 30"})]})})}]})]})})]}),e.jsxs(d,{gutter:[16,16],className:"mt-4",children:[e.jsx(o,{span:24,md:12,children:e.jsxs(r,{className:"flex-col !items-start",children:[e.jsxs("div",{className:"flex w-full items-center justify-between",children:[e.jsx(t.Title,{level:5,children:"Connections"}),e.jsx(m,{children:e.jsx(l,{icon:"fontisto:more-v-a"})})]}),e.jsx("div",{className:"mt-2 flex w-full flex-col gap-4",children:f.map((a,n)=>e.jsxs("div",{className:"flex",children:[e.jsx("img",{alt:"",src:a.avatar,className:"h-10 w-10 flex-none rounded-full"}),e.jsxs("div",{className:"ml-4 flex flex-1 flex-col",children:[e.jsx("span",{className:"font-semibold",children:a.name}),e.jsx("span",{className:"mt-1 text-xs opacity-50",children:a.connections})]}),e.jsx("div",{className:"flex h-9 w-9 flex-none items-center justify-center rounded",style:{backgroundColor:a.connected?c.colorPrimaryText:"transparent",border:a.connected?"":`1px solid ${c.colorPrimaryText}`},children:e.jsx(l,{icon:"tdesign:user",color:a.connected?"#fff":c.colorPrimaryText,size:20})})]},n))}),e.jsx("div",{className:"mt-4 w-full text-center text-lg",style:{color:c.colorPrimaryText},children:"View all connections"})]})}),e.jsx(o,{span:24,md:12,children:e.jsxs(r,{className:"flex-col !items-start",children:[e.jsxs("div",{className:"flex w-full items-center justify-between",children:[e.jsx(t.Title,{level:5,children:"Teams"}),e.jsx(m,{children:e.jsx(l,{icon:"fontisto:more-v-a"})})]}),e.jsx("div",{className:"mt-2 flex w-full flex-col gap-4",children:p.map((a,n)=>e.jsxs("div",{className:"flex",children:[a.avatar,e.jsxs("div",{className:"ml-4 flex flex-1 flex-col",children:[e.jsx("span",{className:"font-semibold",children:a.name}),e.jsx("span",{className:"mt-1 text-xs opacity-50",children:a.members})]}),a.tag]},n))}),e.jsx("div",{className:"mt-4 w-full text-center text-lg",style:{color:c.colorPrimaryText},children:"View all members"})]})})]}),e.jsx(d,{gutter:[16,16],className:"mt-4",children:e.jsx(o,{span:24,children:e.jsxs(r,{className:"flex-col !items-start",children:[e.jsx(t.Title,{level:5,children:"Projects"}),e.jsx("div",{className:"!mt-4 w-full",children:e.jsx(T,{children:e.jsx(C,{rowSelection:{type:"checkbox"},columns:u,dataSource:v()})})})]})})})]})}export{G as default};
