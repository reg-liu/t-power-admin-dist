import{j as e}from"./index-_YbBPvdW.js";import{O as r,aa as o,a8 as c,w as n,k as d}from"./vendor-antd-CIRYFt1q.js";import{r as f}from"./vendor-react-BcJS7s_i.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-BflGZHQy.js";const{Option:i}=n;function b({schedule:t,onCancel:u,onConfirm:x}){const[s]=r.useForm();f.useEffect(()=>{t&&s.setFieldsValue({...t,start_time:o(t.time_range[0],"YYYY-MM-DD"),end_time:o(t.time_range[1],"YYYY-MM-DD")})},[t,s]);const j=a=>{x(a)},h=(a,l)=>{const m=s.getFieldValue("start_time");return m&&l&&l.isBefore(m)?Promise.reject(new Error("End time must be after start time")):Promise.resolve()};return e.jsxs(r,{form:s,layout:"vertical",onFinish:j,children:[e.jsx(r.Item,{name:"ev",label:"EV",children:e.jsx("span",{className:"ant-form-text",children:t?.rego})}),e.jsx(r.Item,{name:"start_time",label:"Start Time",rules:[{required:!0}],children:e.jsx(c,{format:"YYYY-MM-DD"})}),e.jsx(r.Item,{name:"end_time",label:"End Time",rules:[{required:!0},{validator:h}],children:e.jsx(c,{format:"YYYY-MM-DD"})}),e.jsx(r.Item,{name:"recurrency",label:"Recurrency Settings",rules:[{required:!0}],children:e.jsxs(n,{children:[e.jsx(i,{value:"daily",children:"Daily"}),e.jsx(i,{value:"weekly",children:"Weekly"}),e.jsx(i,{value:"monthly",children:"Monthly"})]})}),e.jsx(r.Item,{name:"assigned_driver",label:"Driver",rules:[{required:!0}],children:e.jsxs(n,{children:[e.jsx(i,{value:"John Doe",children:"John Doe"}),e.jsx(i,{value:"Jane Smith",children:"Jane Smith"}),e.jsx(i,{value:"Bob Johnson",children:"Bob Johnson"})]})}),e.jsx(r.Item,{children:e.jsxs("div",{className:"flex justify-end",children:[e.jsx(d,{onClick:u,className:"mr-2",children:"Cancel"}),e.jsx(d,{type:"primary",htmlType:"submit",children:"Confirm"})]})})]})}export{b as default};
