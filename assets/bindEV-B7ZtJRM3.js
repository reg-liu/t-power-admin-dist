import{g as B,j as e}from"./index-C-fC-cor.js";import{r as t}from"./vendor-react-BcJS7s_i.js";import{H as a,E as N,k as u,w as l,K as m}from"./vendor-antd-DhxUoqir.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-Cw5pgUI-.js";const{Option:h}=l;function y({visible:x,onClose:i}){const[r]=a.useForm(),j=B(),d=t.useRef(null),[o,v]=t.useState(""),[s,b]=t.useState({brand:"",model:"",year:""}),c=[{value:"Tesla",models:["Model S","Model 3","Model X"]},{value:"Nissan",models:["Nissan LEAF","Nissan Ariya","Nissan e-NV200"]},{value:"BYD",models:["BYD Tang EV","BYD Qin EV","BYD Yuan EV"]}];t.useEffect(()=>{if(d.current){const n=d.current.getContext("2d");n&&(n.clearRect(0,0,100,100),n.font="12px Arial",n.fillText(s.brand,10,20),n.fillText(s.model,10,40),n.fillText(s.year,10,60))}},[s]);const f=()=>{const n=r.getFieldsValue();b({brand:n.brand||"",model:n.brand_model||"",year:n.year||""})},p=n=>{v(n),r.setFieldsValue({brand_model:void 0})};return e.jsx(N,{title:"Bind a new EV",visible:x,onCancel:i,footer:[e.jsxs("div",{className:"footer-normal-btns",children:[e.jsx(u,{onClick:i,children:"Cancel"},"cancel"),e.jsx(u,{type:"primary",onClick:()=>{r.validateFields().then(n=>{i()})},children:"Confirm"},"confirm")]})],children:e.jsx("div",{className:"modal-form",children:e.jsxs(a,{form:r,layout:"vertical",onValuesChange:f,children:[e.jsxs("div",{className:"two-column",children:[e.jsx(a.Item,{name:"brand",label:"Brand",rules:[{required:!0}],children:e.jsx(l,{onChange:p,children:c.map(n=>e.jsx(h,{value:n.value,children:n.value},n.value))})}),e.jsx(a.Item,{name:"brand_model",label:"Brand Model",rules:[{required:!0}],children:e.jsx(l,{disabled:!o,children:c.find(n=>n.value===o)?.models.map(n=>e.jsx(h,{value:n,children:n},n))})})]}),e.jsxs("div",{className:"two-column",children:[e.jsx(a.Item,{name:"year",label:"Year",rules:[{required:!0}],children:e.jsx(l,{children:[2020,2021,2022,2023].map(n=>e.jsx(l.Option,{value:n,children:n},n))})}),e.jsx(a.Item,{name:"vin",label:"VIN",rules:[{required:!0}],children:e.jsx(m,{})})]}),e.jsxs("div",{className:"two-column",children:[j&&e.jsx(a.Item,{name:"user",label:"User",rules:[{required:!0}],children:e.jsxs(l,{children:[e.jsx(l.Option,{value:"john",children:"John Doe"}),e.jsx(l.Option,{value:"jane",children:"Jane Smith"}),e.jsx(l.Option,{value:"bob",children:"Bob Johnson"})]})}),e.jsx(a.Item,{name:"registration_number",label:"Registration Number",rules:[{required:!0}],children:e.jsx(m,{})})]}),e.jsx(a.Item,{name:"picture",label:"Picture",children:e.jsx("canvas",{ref:d,width:100,height:100})})]})})})}export{y as default};
