import{j as e}from"./index-DzoF5gIw.js";import{r as i}from"./vendor-react-BcJS7s_i.js";import{K as l,I as u}from"./vendor-antd-DouGSysN.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-Cpch6Ee7.js";function f({visible:t,onCancel:o,onConfirm:s,initialTboxNumber:a}){const[r,m]=i.useState(a),n=()=>{s(r)};return e.jsx(l,{title:"Edit Tbox Number",visible:t,onCancel:o,onOk:n,children:e.jsxs("div",{children:[e.jsx("label",{className:"mb-1 block",children:"Tbox Number"}),e.jsx(u,{value:r,onChange:b=>m(b.target.value),placeholder:"Enter new Tbox Number"})]})})}export{f as default};