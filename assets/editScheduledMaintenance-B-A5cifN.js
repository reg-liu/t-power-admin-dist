import{j as e}from"./index-DDpD7CQs.js";import{N as l,J as d,k as a,a4 as c,w as r,a2 as o}from"./vendor-antd-Cm1Y6B8R.js";import"./vendor-react-BcJS7s_i.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-C6QnRqht.js";function p({visible:s,onCancel:i,onConfirm:t}){const[n]=l.useForm();return e.jsx(d,{title:"Edit Scheduled Maintenance",visible:s,onCancel:i,footer:[e.jsxs("div",{className:"footer-normal-btns",children:[e.jsx(a,{onClick:i,children:"Cancel"},"cancel"),e.jsx(a,{type:"primary",onClick:()=>{n.validateFields().then(()=>{t()})},children:"Confirm"},"confirm")]})],children:e.jsx("div",{className:"modal-form",children:e.jsxs(l,{form:n,layout:"vertical",initialValues:{scheduled_date:c()},children:[e.jsx(l.Item,{name:"ev",label:"EV",rules:[{required:!0}],children:e.jsxs(r,{children:[e.jsx(r.Option,{value:"ev1",children:"EV 1"}),e.jsx(r.Option,{value:"ev2",children:"EV 2"}),e.jsx(r.Option,{value:"ev3",children:"EV 3"})]})}),e.jsx(l.Item,{name:"chargepoint",label:"Charge Point",rules:[{required:!0}],children:e.jsxs(r,{children:[e.jsx(r.Option,{value:"cp1",children:"Charge Point 1"}),e.jsx(r.Option,{value:"cp2",children:"Charge Point 2"}),e.jsx(r.Option,{value:"cp3",children:"Charge Point 3"})]})}),e.jsx(l.Item,{name:"scheduled_date",label:"Scheduled Date",rules:[{required:!0}],children:e.jsx(o,{className:"w-full",format:"YYYY-MM-DD"})}),e.jsx(l.Item,{name:"recurrency",label:"Recurrency Settings",rules:[{required:!0}],children:e.jsxs(r,{children:[e.jsx(r.Option,{value:"daily",children:"Daily"}),e.jsx(r.Option,{value:"weekly",children:"Weekly"}),e.jsx(r.Option,{value:"monthly",children:"Monthly"})]})}),e.jsx(l.Item,{name:"assigned_repairer",label:"Repairer",rules:[{required:!0}],children:e.jsxs(r,{children:[e.jsx(r.Option,{value:"1",children:"John Doe"}),e.jsx(r.Option,{value:"2",children:"Jane Smith"}),e.jsx(r.Option,{value:"3",children:"Bob Johnson"})]})})]})})})}export{p as default};
