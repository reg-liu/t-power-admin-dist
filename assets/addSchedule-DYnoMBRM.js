import{j as e}from"./index-DloVt6EI.js";import{O as i,w as s,aa as m,k as o}from"./vendor-antd-DouGSysN.js";import"./vendor-react-BcJS7s_i.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-Cpch6Ee7.js";const{Option:r}=s;function E({onCancel:d,onConfirm:c}){const[t]=i.useForm(),u=l=>{c(l)},h=(l,n)=>{const a=t.getFieldValue("start_time");return a&&n&&n.isBefore(a)?Promise.reject(new Error("End time must be after start time")):Promise.resolve()};return e.jsxs(i,{form:t,layout:"vertical",onFinish:u,children:[e.jsx(i.Item,{name:"ev",label:"EV",rules:[{required:!0}],children:e.jsxs(s,{children:[e.jsx(r,{value:"EV001",children:"EV001"}),e.jsx(r,{value:"EV002",children:"EV002"}),e.jsx(r,{value:"EV003",children:"EV003"})]})}),e.jsx(i.Item,{name:"start_time",label:"Start Time",rules:[{required:!0}],children:e.jsx(m,{format:"YYYY-MM-DD"})}),e.jsx(i.Item,{name:"end_time",label:"End Time",rules:[{required:!0},{validator:h}],children:e.jsx(m,{format:"YYYY-MM-DD"})}),e.jsx(i.Item,{name:"recurrency",label:"Recurrency Settings",rules:[{required:!0}],children:e.jsxs(s,{children:[e.jsx(r,{value:"daily",children:"Daily"}),e.jsx(r,{value:"weekly",children:"Weekly"}),e.jsx(r,{value:"monthly",children:"Monthly"})]})}),e.jsx(i.Item,{name:"assigned_driver",label:"Driver",rules:[{required:!0}],children:e.jsxs(s,{children:[e.jsx(r,{value:"John Doe",children:"John Doe"}),e.jsx(r,{value:"Jane Smith",children:"Jane Smith"}),e.jsx(r,{value:"Bob Johnson",children:"Bob Johnson"})]})}),e.jsx(i.Item,{children:e.jsxs("div",{className:"flex justify-end",children:[e.jsx(o,{onClick:d,className:"mr-2",children:"Cancel"}),e.jsx(o,{type:"primary",htmlType:"submit",children:"Confirm"})]})})]})}export{E as default};