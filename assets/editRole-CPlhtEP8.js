import{j as e}from"./index-BGJumyCV.js";import{r as i}from"./vendor-react-BcJS7s_i.js";import{N as s,w as o}from"./vendor-antd-C5sFxZgj.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-C8CVoVQY.js";function p({user:l}){const[r]=s.useForm();i.useEffect(()=>{r.setFieldsValue({role:l?.role})},[l,r]);const t=a=>{};return e.jsx("div",{className:"modal-form",children:e.jsx(s,{form:r,layout:"vertical",onFinish:t,children:e.jsx(s.Item,{name:"role",label:"Role",rules:[{required:!0,message:"Please select the role!"}],children:e.jsxs(o,{children:[e.jsx(o.Option,{value:"user",children:"User"}),e.jsx(o.Option,{value:"subscriber",children:"Subscriber"})]})})})})}export{p as default};
