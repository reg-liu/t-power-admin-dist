import{g as p,j as a,S as l}from"./index-HZVAOrSI.js";import{K as H,w as d,i as c,F as $,z as F,$ as L,s as O,O as m}from"./vendor-antd-DNjhvzFa.js";import{r as n}from"./vendor-react-DcqtUZ_G.js";import{c as R}from"./commonService-C5_OVy05.js";import{e as U}from"./options-yFwWHVHa.js";import"./vendor-ui-BASYQBt4.js";import"./vendor-utils-DuhXCHR2.js";const z=t=>p.get({url:"/charge-sessions/",params:t}),A=t=>p.post({url:"/history-download/",data:t}),h={queryAll:z,download:A},{RangePicker:q}=L,{Option:K}=d;function Z(){const[t,r]=n.useState({}),[x,i]=n.useState(0),[y,f]=n.useState([]),[_,g]=n.useState([]),[j,u]=n.useState(!1),[w,v]=n.useState(0),C=()=>{const e={...t};delete e.page,r(e),i(Date.now())},S=[{title:"Record ID",dataIndex:"id",key:"id"},{title:"Charge Point",dataIndex:"id_tag",key:"id_tag"},{title:"Start Time",dataIndex:"start_time",key:"start_time"},{title:"End Time",dataIndex:"end_time",key:"end_time"},{title:"Duration",dataIndex:"duration",key:"duration"},{title:"Energy Type",dataIndex:"session_mode",key:"session_mode"},{title:"Amount(kWh)",dataIndex:"amount",key:"amount"},{title:"User",dataIndex:"user",key:"user"}],D=e=>{r({...t,page:e}),i(Date.now())},N=()=>{r({}),i(Date.now())},k=async()=>{const{detail:e}=await R.getUsers({num:100});f(e.results.map(s=>({name:`${s.first_name} ${s.last_name}`,phone:s.phone,email:s.email,user_id:s.user_id})))},b=async()=>{const e=await h.download({start_date:t.start_date,end_date:t.end_date,id_tag:t.id_tag,energy_type:t.energy_type,user_id:t.user_id});if(e.code===200&&(O.success(e.message),e.detail.url)){const s=document.createElement("a");s.download=e.detail.filename,s.style.display="none",s.href=e.detail.url,document.body.appendChild(s),s.click(),document.body.removeChild(s)}},Y=e=>e.map(s=>{const o=parseFloat(s.duration),M=Math.floor(o/3600),P=Math.floor(o%3600/60),E=Math.floor(o%60),T=m().startOf("day").add(M,"hour").add(P,"minute").add(E,"second").format("HH:mm:ss");return{...s,amount:s.cs_energy,user:`${s.user_firstname} ${s.user_lastname}`,session_mode:s.session_mode===1?"Charge":"Discharge",duration:T,start_time:m(s.cs_start_datetime).format("YYYY-MM-DD HH:mm:ss"),end_time:m(s.cs_end_datetime).format("YYYY-MM-DD HH:mm:ss")}}),I=async()=>{u(!0);const e=await h.queryAll(t),{results:s,count:o}=e.detail;g(Y(s||[])),v(o),u(!1)};return n.useEffect(()=>{I()},[x]),n.useEffect(()=>{k(),i(Date.now())},[]),a.jsxs("div",{className:"main-content",children:[a.jsxs("div",{className:"search-area flex items-center justify-start",children:[a.jsxs("div",{className:"search-item",children:[a.jsx("div",{className:"label mb-2",children:"Time Range"}),a.jsx(q,{className:"w-full",format:"YYYY-MM-DD",onChange:(e,[s,o])=>{r({...t,start_date:s,end_date:o})}})]}),a.jsxs("div",{className:"search-item",children:[a.jsx("div",{className:"label mb-2",children:"Charge Point"}),a.jsx(H,{className:"w-full",placeholder:"Enter",onChange:e=>{r({...t,id_tag:e.target.value})}})]}),a.jsxs("div",{className:"search-item",children:[a.jsx("div",{className:"label",children:"Energy Type"}),a.jsx(d,{placeholder:"Select",allowClear:!0,style:{width:"210px"},onChange:e=>{r({...t,mode:e})},children:U.map(e=>a.jsx(d.Option,{value:e.value,children:e.label},e.value))})]}),a.jsxs("div",{className:"search-item",children:[a.jsx("div",{className:"label",children:"User"}),a.jsx(d,{className:"w-full",allowClear:!0,value:t.user_id,style:{width:"150px"},onChange:e=>{r({...t,user_id:e})},placeholder:"Select",children:y.map(e=>a.jsx(K,{value:e.user_id,children:e.name},e.user_id))})]}),a.jsx("div",{className:"search-btn",children:a.jsx(c,{icon:a.jsx(l,{icon:"Search",size:"20"}),type:"primary",loading:j,onClick:C})}),a.jsx("div",{className:"search-btn clear",children:a.jsx(c,{icon:a.jsx(l,{icon:"Close",size:"24",color:"#999"}),type:"primary",onClick:N})})]}),a.jsx("div",{className:"flex items-center justify-between",children:a.jsxs("div",{className:"operation-area flex items-center justify-start",children:[a.jsx("span",{className:"mr-4 font-bold",children:"Charge Point Record"}),a.jsx(c,{type:"primary",icon:a.jsx(l,{icon:"Download",size:"20",color:"#FF4747"}),onClick:b,children:"Download"})]})}),a.jsx($,{columns:S,bordered:!0,rowKey:"id",pagination:!1,dataSource:_}),a.jsx("div",{className:"mr-4 mt-4 flex justify-end",children:a.jsx(F,{total:w,showQuickJumper:!0,onChange:D})})]})}export{Z as default};
