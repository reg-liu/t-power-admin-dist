import{j as t}from"./index-DloVt6EI.js";import{O as n,K as s,w as e}from"./vendor-antd-DouGSysN.js";import"./vendor-react-BcJS7s_i.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-Cpch6Ee7.js";function p({visible:r,onCancel:l,onConfirm:o}){const[i]=n.useForm();return t.jsx(s,{title:"Edit Status",visible:r,onCancel:l,onOk:()=>{i.validateFields().then(()=>{o()})},children:t.jsx(n,{form:i,layout:"vertical",children:t.jsx(n.Item,{name:"status",label:"Status",rules:[{required:!0}],children:t.jsxs(e,{children:[t.jsx(e.Option,{value:"online",children:"Online"}),t.jsx(e.Option,{value:"offline",children:"Offline"}),t.jsx(e.Option,{value:"unknown",children:"Unknown"})]})})})})}export{p as default};