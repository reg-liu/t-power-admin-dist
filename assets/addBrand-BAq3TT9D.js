import{j as e}from"./index-DloVt6EI.js";import{O as r,K as u,I as s}from"./vendor-antd-DouGSysN.js";import"./vendor-react-BcJS7s_i.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-Cpch6Ee7.js";function b({visible:l,onCancel:t,onSave:o}){const[d]=r.useForm(),a=()=>{d.validateFields().then(n=>{const i=n.brand_models.split(`
`).filter(m=>m.trim()!=="");o(n.brand,i),d.resetFields(),t()})};return e.jsx(u,{zIndex:12,visible:l,title:"Add Brand",onCancel:t,onOk:a,children:e.jsxs(r,{form:d,layout:"vertical",children:[e.jsx(r.Item,{name:"brand",label:"Brand",rules:[{required:!0}],children:e.jsx(s,{})}),e.jsx(r.Item,{name:"brand_models",label:"Brand Models",rules:[{required:!0}],children:e.jsx(s.TextArea,{rows:4,placeholder:"Enter one model per line"})})]})})}export{b as default};