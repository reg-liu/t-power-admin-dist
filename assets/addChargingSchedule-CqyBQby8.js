import{j as e}from"./index-DDpD7CQs.js";import{N as r,J as x,k as o,w as t,V as l,I as c}from"./vendor-antd-Cm1Y6B8R.js";import"./vendor-react-BcJS7s_i.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-C6QnRqht.js";function b({visible:d,onCancel:s,onConfirm:u}){const[i]=r.useForm(),h=n=>{u(n),i.resetFields()},j=(n,a)=>{const m=i.getFieldValue("start_time");return m&&a&&a.isBefore(m)?Promise.reject(new Error("End Time must be after Start Time")):Promise.resolve()};return e.jsx(x,{title:"Add Charging Schedule",visible:d,onCancel:s,footer:[e.jsxs("div",{className:"footer-normal-btns",children:[e.jsx(o,{onClick:s,children:"Cancel"},"cancel"),e.jsx(o,{type:"primary",onClick:i.submit,children:"Confirm"},"submit")]})],children:e.jsx("div",{className:"modal-form",children:e.jsxs(r,{form:i,onFinish:h,layout:"vertical",children:[e.jsxs("div",{className:"two-column",children:[e.jsx(r.Item,{name:"chargepoint",label:"Charge Point",rules:[{required:!0}],children:e.jsxs(t,{children:[e.jsx(t.Option,{value:"cp1",children:"Charge Point 1"}),e.jsx(t.Option,{value:"cp2",children:"Charge Point 2"}),e.jsx(t.Option,{value:"cp3",children:"Charge Point 3"})]})}),e.jsx(r.Item,{name:"start_time",label:"Start Time",rules:[{required:!0}],children:e.jsx(l,{format:"HH:mm"})})]}),e.jsxs("div",{className:"two-column",children:[e.jsx(r.Item,{name:"end_time",label:"End Time",rules:[{required:!0},{validator:j}],children:e.jsx(l,{format:"HH:mm"})}),e.jsx(r.Item,{name:"recurrency",label:"Recurrency Settings",rules:[{required:!0}],children:e.jsxs(t,{children:[e.jsx(t.Option,{value:"daily",children:"Daily"}),e.jsx(t.Option,{value:"weekly",children:"Weekly"}),e.jsx(t.Option,{value:"monthly",children:"Monthly"})]})})]}),e.jsx(r.Item,{label:"Charge Setting",children:e.jsxs(c.Group,{compact:!0,children:[e.jsx(r.Item,{name:["charge_setting","time"],noStyle:!0,rules:[{required:!0}],children:e.jsx(l,{format:"HH:mm",style:{width:"50%"}})}),e.jsx(r.Item,{name:["charge_setting","power"],noStyle:!0,rules:[{required:!0}],children:e.jsx(c,{style:{width:"50%"},placeholder:"Power"})})]})})]})})})}export{b as default};
