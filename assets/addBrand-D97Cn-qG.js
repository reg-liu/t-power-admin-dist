import{j as e}from"./index-DDpD7CQs.js";import{N as r,J as x,k as d,I as l}from"./vendor-antd-Cm1Y6B8R.js";import"./vendor-react-BcJS7s_i.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-C6QnRqht.js";function b({visible:o,onCancel:n,onSave:a}){const[t]=r.useForm(),i=()=>{t.validateFields().then(s=>{const m=s.brand_models.split(`
`).filter(c=>c.trim()!=="");a(s.brand,m),t.resetFields(),n()})};return e.jsx(x,{zIndex:1e3,visible:o,title:"Add Brand",onCancel:n,footer:[e.jsxs("div",{className:"footer-normal-btns",children:[e.jsx(d,{onClick:n,children:"Cancel"},"cancel"),e.jsx(d,{type:"primary",onClick:i,children:"Confirm"},"confirm")]})],children:e.jsxs(r,{form:t,layout:"vertical",children:[e.jsx(r.Item,{name:"brand",label:"Brand",rules:[{required:!0}],children:e.jsx(l,{})}),e.jsx(r.Item,{name:"brand_models",label:"Brand Models",rules:[{required:!0}],children:e.jsx(l.TextArea,{rows:4,placeholder:"Enter one model per line"})})]})})}export{b as default};
