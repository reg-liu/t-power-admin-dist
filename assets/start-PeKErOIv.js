import{j as e,S as w}from"./index-_jeLZQ6c.js";import{r as m}from"./vendor-react-BcJS7s_i.js";import{c as b}from"./cpMonitorService-o4_k5C1S.js";import{E as D,i as f,o as E,x as p,j as B,H as A,O as C,s as S}from"./vendor-antd-B62eGpCx.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-CtEfXJzW.js";function V({visible:l,onCancel:g,connector:h,onConfirm:v}){const[u,x]=m.useState(!1),[o,i]=m.useState([{limit:"",startAfter:"",time:0}]),[d,j]=m.useState("current");m.useEffect(()=>{l||i([{limit:"",startAfter:"",time:0}])},[l]);const P=()=>{i([...o,{limit:"",startAfter:"",time:Date.now()}])},y=t=>{const a=o.filter((r,n)=>n!==t);i([...a])},N=(t,a)=>{const r=[...o],n=r.map((c,s)=>s===t?{...r[t]||{limit:"",startAfter:"",time:Date.now()},limit:a}:c);i(n)},_=(t,a)=>{const r=[...o],n=r.map((c,s)=>s===t?{...r[t]||{limit:"",startAfter:"",time:Date.now()},startAfter:a}:c);i(n)},k=t=>{x(t)},I=t=>{j(t),i([{limit:"",startAfter:"",time:Date.now()}])},R=async()=>{let t=!0;const a=o.map(s=>((s.limit===""||s.startAfter==="")&&(t=!1),{limit:s.limit,startPeriod:s.startAfter*60}));let r={charge_point_id:h.charge_point_id,connector_id:h.connector_id};if(u){if(!t||a.length===0){S.error("Please Input Limit and Start After");return}r={...r,mode:"default",charging_profile:{chargingProfileId:1,chargingProfileKind:"Relative",chargingProfilePurpose:"TxProfile",stackLevel:1,chargingSchedule:{chargingRateUnit:d==="current"?"A":"B",chargingSchedulePeriod:a}}}}const n=[r],c=await b.start({cp_id_connector_pairs:n});c?.code===200&&(S.success(c.message),v())};return m.useEffect(()=>{l&&(i([{limit:"",startAfter:"",time:Date.now()}]),x(!1),j("current"))},[l]),e.jsx(D,{title:"Advanced Start",open:l,onCancel:g,zIndex:1001,footer:[e.jsxs("div",{className:"footer-normal-btns",children:[e.jsx(f,{onClick:g,children:"Cancel"},"cancel"),e.jsx(f,{type:"primary",onClick:R,children:"Start"},"confirm")]},"start-footer")],width:500,children:e.jsxs("div",{className:"modal-form one-column",children:[e.jsxs("div",{className:"between-wrapper",children:[e.jsx("div",{className:"title",children:h?.name}),e.jsxs("div",{className:"switch",children:["With Charge Profile",e.jsx(E,{checked:u,onChange:k})]})]}),e.jsxs("div",{className:u?"mt-4":"pointer-events-none mt-4 opacity-50",children:[e.jsxs("div",{className:"between-wrapper",children:[e.jsxs(p.Group,{optionType:"button",value:d,onChange:t=>I(t.target.value),className:"my-4",children:[e.jsx(p.Button,{value:"current",children:"Current"}),e.jsx(p.Button,{value:"power",children:"Power"})]}),e.jsx(f,{type:"link",icon:e.jsx(w,{icon:"Add",size:"28"}),onClick:()=>P()})]}),e.jsx(B,{children:o.map((t,a)=>e.jsxs("div",{className:"advance-start-row",children:[e.jsx("div",{className:"close-row",children:e.jsx(f,{type:"link",onClick:()=>y(a),icon:e.jsx(w,{icon:"Close",size:"20",color:"#C3C3C3"})})}),e.jsxs("div",{className:"label-value-split ",children:[e.jsx(A.Item,{name:"limit",label:"Limit",rules:[{required:!0,message:d==="current"?"Current limit":"Power limit"}],children:e.jsx(C,{min:1,max:1e5,defaultValue:t.limit,placeholder:d==="current"?"Current limit":"Power limit",onChange:r=>N(a,r)})}),e.jsx(A.Item,{name:"startAfter",label:"Start After(Minutes)",rules:[{required:!0,message:"Start After"}],children:e.jsx(C,{min:1,max:1e5,placeholder:"Start After",defaultValue:t.startAfter,onChange:r=>_(a,r)})})]},a)]},`setting-${t.time}`))})]})]})})}export{V as default};
