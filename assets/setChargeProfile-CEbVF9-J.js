import{j as e,S as h}from"./index-DHG9k9kq.js";import{r as u}from"./vendor-react-BcJS7s_i.js";import{H as N,k as l,x as p,l as k,J as j,O as x}from"./vendor-antd-DZ11D4bT.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-FiO04Ee5.js";function D({visible:o,onCancel:f,connector:A,onConfirm:w}){const[a,i]=u.useState([{limit:"",startAfter:"",time:0}]),[c,C]=u.useState("current");u.useEffect(()=>{o||i([{limit:"",startAfter:"",time:0}])},[a,o]);const v=()=>{i([...a,{limit:"",startAfter:"",time:Date.now()}])},g=t=>{const r=a.filter((s,n)=>n!==t);i([...r])},S=(t,r)=>{const s=[...a],n=s.map((m,d)=>d===t?{...s[t]||{limit:"",startAfter:"",time:Date.now()},limit:r}:m);i(n)},y=(t,r)=>{const s=[...a],n=s.map((m,d)=>d===t?{...s[t]||{limit:"",startAfter:"",time:Date.now()},startAfter:r}:m);i(n)};return e.jsx(N,{title:"Set Charge Profile",visible:o,onCancel:f,footer:[e.jsxs("div",{className:"footer-normal-btns",children:[e.jsx(l,{onClick:f,children:"Cancel"},"cancel"),e.jsx(l,{type:"primary",onClick:w,children:"Start"},"confirm")]})],width:500,children:e.jsxs("div",{className:"modal-form one-column",children:[e.jsx("div",{className:"between-wrapper",children:e.jsx("div",{className:"title",children:A?.name})}),e.jsxs("div",{className:"mt-4",children:[e.jsxs("div",{className:"between-wrapper",children:[e.jsxs(p.Group,{optionType:"button",value:c,onChange:t=>C(t.target.value),className:"my-4",children:[e.jsx(p.Button,{value:"current",children:"Current"}),e.jsx(p.Button,{value:"power",children:"Power"})]}),e.jsx(l,{type:"link",icon:e.jsx(h,{icon:"Add",size:"28"}),onClick:()=>v()})]}),e.jsx(k,{children:a.map((t,r)=>e.jsxs("div",{className:"advance-start-row",children:[e.jsx("div",{className:"close-row",children:e.jsx(l,{type:"link",onClick:()=>g(r),icon:e.jsx(h,{icon:"Close",size:"20",color:"#C3C3C3"})})}),e.jsxs("div",{className:"label-value-split ",children:[e.jsx(j.Item,{name:"limit",label:"Limit",rules:[{required:!0,message:c==="current"?"Current limit":"Power limit"}],children:e.jsx(x,{min:1,max:1e5,defaultValue:t.limit,placeholder:c==="current"?"Current limit":"Power limit",onChange:s=>S(r,s)})}),e.jsx(j.Item,{name:"startAfter",label:"Start After(Minutes)",rules:[{required:!0,message:"Start After"}],children:e.jsx(x,{min:1,max:1e5,placeholder:"Start After",defaultValue:t.startAfter,onChange:s=>y(r,s)})})]},r)]},`setting-${t.time}`))})]})]})})}export{D as default};
