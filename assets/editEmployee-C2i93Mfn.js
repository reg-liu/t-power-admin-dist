import{j as e}from"./index-DloVt6EI.js";import{r as u}from"./vendor-react-BcJS7s_i.js";import{O as r,I as l,w as t,k as m}from"./vendor-antd-DouGSysN.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-Cpch6Ee7.js";function j({employee:a,onCancel:i}){const[s]=r.useForm();u.useEffect(()=>{s.setFieldsValue(a)},[a,s]);const n=o=>{i()};return e.jsxs(r,{form:s,layout:"vertical",onFinish:n,children:[e.jsx(r.Item,{name:"name",label:"Name",rules:[{required:!0,message:"Please input the name!"}],children:e.jsx(l,{})}),e.jsx(r.Item,{name:"email",label:"Email",rules:[{required:!0,message:"Please input the email!"},{type:"email",message:"Please enter a valid email!"}],children:e.jsx(l,{})}),e.jsx(r.Item,{name:"phone",label:"Phone",rules:[{required:!0,message:"Please input the phone number!"}],children:e.jsx(l,{})}),e.jsx(r.Item,{name:"role",label:"Role",rules:[{required:!0,message:"Please select the role!"}],children:e.jsxs(t,{children:[e.jsx(t.Option,{value:"driver",children:"Driver"}),e.jsx(t.Option,{value:"repairer",children:"Repairer"})]})}),e.jsxs(r.Item,{children:[e.jsx(m,{type:"primary",htmlType:"submit",children:"Confirm"}),e.jsx(m,{onClick:i,style:{marginLeft:8},children:"Cancel"})]})]})}export{j as default};
