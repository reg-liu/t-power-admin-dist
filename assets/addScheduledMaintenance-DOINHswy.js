import{j as e}from"./index-qOmAfSnl.js";import{H as l,E as d,i as a,w as r,a1 as c}from"./vendor-antd-DmtkV1Ch.js";import"./vendor-react-BcJS7s_i.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-BKiv1F2M.js";function j({visible:s,onCancel:n,onConfirm:t}){const[i]=l.useForm();return e.jsx(d,{title:"Add Scheduled Maintenance",open:s,onCancel:n,footer:[e.jsxs("div",{className:"footer-normal-btns",children:[e.jsx(a,{onClick:n,children:"Cancel"},"cancel"),e.jsx(a,{type:"primary",onClick:()=>{i.validateFields().then(()=>{i.resetFields(),t()})},children:"Confirm"},"confirm")]},"add-scheduled-footer")],children:e.jsx("div",{className:"modal-form",children:e.jsxs(l,{form:i,layout:"vertical",children:[e.jsx(l.Item,{name:"ev",label:"EV",rules:[{required:!0}],children:e.jsxs(r,{children:[e.jsx(r.Option,{value:"ev1",children:"EV 1"}),e.jsx(r.Option,{value:"ev2",children:"EV 2"}),e.jsx(r.Option,{value:"ev3",children:"EV 3"})]})}),e.jsx(l.Item,{name:"chargepoint",label:"Charge Point",rules:[{required:!0}],children:e.jsxs(r,{children:[e.jsx(r.Option,{value:"cp1",children:"Charge Point 1"}),e.jsx(r.Option,{value:"cp2",children:"Charge Point 2"}),e.jsx(r.Option,{value:"cp3",children:"Charge Point 3"})]})}),e.jsx(l.Item,{name:"scheduled_date",label:"Scheduled Date",rules:[{required:!0}],children:e.jsx(c,{className:"w-full",format:"YYYY-MM-DD"})}),e.jsx(l.Item,{name:"recurrency",label:"Recurrency Settings",rules:[{required:!0}],children:e.jsxs(r,{children:[e.jsx(r.Option,{value:"daily",children:"Daily"}),e.jsx(r.Option,{value:"weekly",children:"Weekly"}),e.jsx(r.Option,{value:"monthly",children:"Monthly"})]})}),e.jsx(l.Item,{name:"assigned_repairer",label:"Repairer",rules:[{required:!0}],children:e.jsxs(r,{children:[e.jsx(r.Option,{value:"1",children:"John Doe"}),e.jsx(r.Option,{value:"2",children:"Jane Smith"}),e.jsx(r.Option,{value:"3",children:"Bob Johnson"})]})})]})})})}export{j as default};
