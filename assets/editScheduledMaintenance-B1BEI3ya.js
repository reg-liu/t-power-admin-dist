import{j as e}from"./index-_YbBPvdW.js";import{O as l,K as s,aa as d,w as r,a8 as c}from"./vendor-antd-CIRYFt1q.js";import"./vendor-react-BcJS7s_i.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-BflGZHQy.js";function m({visible:n,onCancel:a,onConfirm:t}){const[i]=l.useForm();return e.jsx(s,{title:"Edit Scheduled Maintenance",visible:n,onCancel:a,onOk:()=>{i.validateFields().then(()=>{t()})},children:e.jsxs(l,{form:i,layout:"vertical",initialValues:{scheduled_date:d()},children:[e.jsx(l.Item,{name:"ev",label:"EV",rules:[{required:!0}],children:e.jsxs(r,{children:[e.jsx(r.Option,{value:"ev1",children:"EV 1"}),e.jsx(r.Option,{value:"ev2",children:"EV 2"}),e.jsx(r.Option,{value:"ev3",children:"EV 3"})]})}),e.jsx(l.Item,{name:"chargepoint",label:"Charge Point",rules:[{required:!0}],children:e.jsxs(r,{children:[e.jsx(r.Option,{value:"cp1",children:"Charge Point 1"}),e.jsx(r.Option,{value:"cp2",children:"Charge Point 2"}),e.jsx(r.Option,{value:"cp3",children:"Charge Point 3"})]})}),e.jsx(l.Item,{name:"scheduled_date",label:"Scheduled Date",rules:[{required:!0}],children:e.jsx(c,{className:"w-full",format:"YYYY-MM-DD"})}),e.jsx(l.Item,{name:"recurrency",label:"Recurrency Settings",rules:[{required:!0}],children:e.jsxs(r,{children:[e.jsx(r.Option,{value:"daily",children:"Daily"}),e.jsx(r.Option,{value:"weekly",children:"Weekly"}),e.jsx(r.Option,{value:"monthly",children:"Monthly"})]})}),e.jsx(l.Item,{name:"assigned_repairer",label:"Repairer",rules:[{required:!0}],children:e.jsxs(r,{children:[e.jsx(r.Option,{value:"1",children:"John Doe"}),e.jsx(r.Option,{value:"2",children:"Jane Smith"}),e.jsx(r.Option,{value:"3",children:"Bob Johnson"})]})})]})})}export{m as default};
