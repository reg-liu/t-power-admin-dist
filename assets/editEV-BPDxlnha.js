import{h,j as e,S as x}from"./index-DGG3uvmK.js";import{r as t}from"./vendor-react-BcJS7s_i.js";import{e as p}from"./ev-PecoakOh.js";import{H as a,E as j,i as d,w as r,I as f,U as b,K as c}from"./vendor-antd-B62eGpCx.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-CtEfXJzW.js";function S({visible:m,onClose:s,ev:i}){const[n]=a.useForm(),u=h(),o=t.useRef(null);return t.useEffect(()=>{n.setFieldsValue(i)},[i,n]),t.useEffect(()=>{if(o.current){const l=o.current.getContext("2d");l&&(l.clearRect(0,0,100,100),l.font="12px Arial",l.fillText(i.brand,10,20),l.fillText(i.brand_model,10,40),l.fillText(i.year.toString(),10,60))}},[i]),e.jsx(j,{title:"Edit EV",open:m,onCancel:s,footer:[e.jsxs("div",{className:"footer-normal-btns",children:[e.jsx(d,{onClick:s,children:"Cancel"},"cancel"),e.jsx(d,{type:"primary",onClick:()=>{n.validateFields().then(l=>{s()})},children:"Confirm"},"confirm")]})],children:e.jsx("div",{className:"modal-form",children:e.jsxs(a,{form:n,layout:"vertical",children:[e.jsx(a.Item,{name:"brand",label:"Brand",children:e.jsxs(r,{disabled:!0,placeholder:"Select Brand",children:[e.jsx(r.Option,{value:"tesla",children:"Tesla"}),e.jsx(r.Option,{value:"nissan",children:"Nissan"}),e.jsx(r.Option,{value:"chevrolet",children:"Chevrolet"})]})}),e.jsx(a.Item,{name:"brand_model",label:"Brand Model",children:e.jsxs(r,{disabled:!0,placeholder:"Select Brand Model",children:[e.jsx(r.Option,{value:"model3",children:"Model 3"}),e.jsx(r.Option,{value:"leaf",children:"Leaf"}),e.jsx(r.Option,{value:"bolt",children:"Bolt"})]})}),e.jsx(a.Item,{name:"year",label:"Year",children:e.jsx(r,{disabled:!0,placeholder:"Select Year",children:[2020,2021,2022,2023].map(l=>e.jsx(r.Option,{value:l,children:l},l))})}),e.jsx(a.Item,{name:"photo",label:"Photo",valuePropName:"fileList",getValueFromEvent:l=>Array.isArray(l)?l:l&&l.fileList,children:e.jsxs("div",{className:"upload-wrapper",children:[e.jsx(f,{src:p,preview:!1,width:236,className:"entity-image mr-4 object-cover"}),e.jsx(b,{listType:"picture-card",children:e.jsxs("div",{className:"upload-inner",children:[e.jsx(x,{icon:"Add",size:"20",color:"#1CAE70"}),e.jsx("div",{style:{marginTop:4},children:"Upload Picture"})]})})]})}),e.jsx(a.Item,{name:"registration_number",label:"Registration Number",rules:[{required:!0}],children:e.jsx(c,{placeholder:"Enter Registration Number"})}),e.jsx(a.Item,{name:"vin",label:"VIN Number",rules:[{required:!0}],children:e.jsx(c,{})}),u&&e.jsx(a.Item,{name:"owner",label:"User",children:e.jsxs(r,{disabled:!0,placeholder:"Select User",children:[e.jsx(r.Option,{value:"john",children:"John Doe"}),e.jsx(r.Option,{value:"jane",children:"Jane Smith"}),e.jsx(r.Option,{value:"bob",children:"Bob Johnson"})]})})]})})})}export{S as default};
