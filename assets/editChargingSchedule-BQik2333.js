import{j as e}from"./index-B0WWVFBn.js";import{H as t,O as r,E as S,i as p,K as l,w as c,a1 as o,ap as d,x as u,j as f}from"./vendor-antd-DmtkV1Ch.js";import{r as i}from"./vendor-react-BcJS7s_i.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-BKiv1F2M.js";function N({visible:b,onCancel:h,onConfirm:v,record:n}){const[s]=t.useForm(),[C,x]=i.useState("current"),[m,j]=i.useState(null),[g,_]=i.useState(24);i.useEffect(()=>{n&&(s.setFieldsValue({...n,start_time:r(n.start_time),connector_1:{...n.charge_setting.connector_1,start_time:r(n.charge_setting.connector_1.start_time)},connector_2:{...n.charge_setting.connector_2,start_time:r(n.charge_setting.connector_2.start_time)}}),x(n.charge_setting.type),j(r(n.start_time)),_(n.duration))},[n,s]),i.useEffect(()=>{if(m){const a=m.add(g,"hour");s.setFieldsValue({end_time:a.format("YYYY-MM-DD HH:mm")})}},[m,g,s]);const y=a=>{x(a.target.value)};return e.jsx(S,{title:"Edit Charging Schedule",open:b,onCancel:h,footer:[e.jsxs("div",{className:"footer-normal-btns",children:[e.jsx(p,{onClick:h,children:"Cancel"},"cancel"),e.jsx(p,{type:"primary",onClick:()=>{s.validateFields().then(a=>{v()})},children:"Confirm"},"confirm")]},"edit-schedule-footer")],zIndex:1001,children:e.jsx("div",{className:"modal-form",children:e.jsxs(t,{form:s,layout:"vertical",children:[e.jsxs("div",{className:"two-column",children:[e.jsx(t.Item,{name:"chargepoint",label:"Charge Point",children:e.jsx(l,{disabled:!0})}),e.jsx(t.Item,{name:"recurrency",label:"Recurrency Settings",children:e.jsxs(c,{allowClear:!0,children:[e.jsx(c.Option,{value:"weekly",children:"Weekly"}),e.jsx(c.Option,{value:"daily",children:"Daily"})]})})]}),e.jsxs("div",{className:"two-column",children:[e.jsx(t.Item,{name:"start_time",label:"Start Time",rules:[{required:!0}],children:e.jsx(o,{showTime:!0,format:"YYYY-MM-DD HH:mm",onChange:a=>j(a)})}),e.jsx(t.Item,{name:"duration",label:"Duration",rules:[{required:!0}],children:e.jsx(d,{min:0,max:24,step:.5,defaultValue:24,onChange:a=>_(a)})})]}),e.jsx(t.Item,{label:"End Time",name:"end_time",children:e.jsx(l,{disabled:!0})}),e.jsxs(t.Item,{label:"Charge Setting",children:[e.jsxs(u.Group,{optionType:"button",onChange:y,value:C,children:[e.jsx(u.Button,{value:"current",children:"Current"}),e.jsx(u.Button,{value:"power",children:"Power"})]}),e.jsxs(f,{className:"mt-4",children:[e.jsx("div",{className:"mb-2 font-bold",children:"Connector 1"}),e.jsx("div",{className:"single-column mb-2",children:e.jsx(t.Item,{name:["connector_1","limit"],label:"Limit",children:e.jsx(l,{type:"number"})})}),e.jsxs("div",{className:"two-column",children:[e.jsx(t.Item,{name:["connector_1","start_time"],label:"Start Time",children:e.jsx(o,{showTime:!0,format:"YYYY-MM-DD HH:mm"})}),e.jsx(t.Item,{name:["connector_1","time_range"],label:"Time Range",children:e.jsx(d,{min:0,max:24,step:.5,defaultValue:24})})]})]}),e.jsxs(f,{className:"mt-4",children:[e.jsx("div",{className:"mb-2 font-bold",children:"Connector 2"}),e.jsx("div",{className:"single-column mb-2",children:e.jsx(t.Item,{name:["connector_2","limit"],label:"Limit",children:e.jsx(l,{type:"number"})})}),e.jsxs("div",{className:"two-column",children:[e.jsx(t.Item,{name:["connector_2","start_time"],label:"Start Time",children:e.jsx(o,{showTime:!0,format:"YYYY-MM-DD HH:mm"})}),e.jsx(t.Item,{name:["connector_2","time_range"],label:"Time Range",children:e.jsx(d,{min:0,max:24,step:.5,defaultValue:24})})]})]})]})]})})})}export{N as default};
