import{j as e,S as j}from"./index-L59LL-oJ.js";import{r as l}from"./vendor-react-BcJS7s_i.js";import{J as b,k as o,q as P,z as h,l as I,N as x,Q as w}from"./vendor-antd-C5sFxZgj.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-C8CVoVQY.js";function E({visible:c,onCancel:p,connector:A,onConfirm:v}){const[f,C]=l.useState(!1),[a,i]=l.useState([{limit:"",startAfter:"",time:0}]),[m,S]=l.useState("current");l.useEffect(()=>{c||i([{limit:"",startAfter:"",time:0}])},[a,c]);const g=()=>{i([...a,{limit:"",startAfter:"",time:Date.now()}])},y=t=>{const r=a.filter((s,n)=>n!==t);i([...r])},N=(t,r)=>{const s=[...a],n=s.map((d,u)=>u===t?{...s[t]||{limit:"",startAfter:"",time:Date.now()},limit:r}:d);i(n)},k=(t,r)=>{const s=[...a],n=s.map((d,u)=>u===t?{...s[t]||{limit:"",startAfter:"",time:Date.now()},startAfter:r}:d);i(n)};return e.jsx(b,{title:"Advanced Start",visible:c,onCancel:p,footer:[e.jsxs("div",{className:"footer-normal-btns",children:[e.jsx(o,{onClick:p,children:"Cancel"},"cancel"),e.jsx(o,{type:"primary",onClick:v,children:"Start"},"confirm")]})],width:500,children:e.jsxs("div",{className:"modal-form one-column",children:[e.jsxs("div",{className:"between-wrapper",children:[e.jsx("div",{className:"title",children:A?.name}),e.jsxs("div",{className:"switch",children:["With Charge Profile",e.jsx(P,{checked:f,onChange:t=>C(t)})]})]}),e.jsxs("div",{className:f?"mt-4":"pointer-events-none mt-4 opacity-50",children:[e.jsxs("div",{className:"between-wrapper",children:[e.jsxs(h.Group,{optionType:"button",value:m,onChange:t=>S(t.target.value),className:"my-4",children:[e.jsx(h.Button,{value:"current",children:"Current"}),e.jsx(h.Button,{value:"power",children:"Power"})]}),e.jsx(o,{type:"link",icon:e.jsx(j,{icon:"Add",size:"28"}),onClick:()=>g()})]}),e.jsx(I,{children:a.map((t,r)=>e.jsxs("div",{className:"advance-start-row",children:[e.jsx("div",{className:"close-row",children:e.jsx(o,{type:"link",onClick:()=>y(r),icon:e.jsx(j,{icon:"Close",size:"20",color:"#C3C3C3"})})}),e.jsxs("div",{className:"label-value-split ",children:[e.jsx(x.Item,{name:"limit",label:"Limit",rules:[{required:!0,message:m==="current"?"Current limit":"Power limit"}],children:e.jsx(w,{min:1,max:1e5,defaultValue:t.limit,placeholder:m==="current"?"Current limit":"Power limit",onChange:s=>N(r,s)})}),e.jsx(x.Item,{name:"startAfter",label:"Start After(Minutes)",rules:[{required:!0,message:"Start After"}],children:e.jsx(w,{min:1,max:1e5,placeholder:"Start After",defaultValue:t.startAfter,onChange:s=>k(r,s)})})]},r)]},`setting-${t.time}`))})]})]})})}export{E as default};
