import{j as e}from"./index-CGSwjbrb.js";import{N as r,a4 as a,J as p,k as d,I as u,V as m,w as n,j as y}from"./vendor-antd-BgzZSO1n.js";import{r as f}from"./vendor-react-BcJS7s_i.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-D7_oWXRD.js";function E({visible:h,onCancel:s,onConfirm:j,schedule:t}){const[i]=r.useForm();f.useEffect(()=>{t&&i.setFieldsValue({chargepoint:t.chargepoint,start_time:a(t.time_range[0],"HH:mm"),end_time:a(t.time_range[1],"HH:mm"),recurrency:t.recurrency,charge_setting:{power:t.charge_setting.power,time:a(t.charge_setting.time,"HH:mm")}})},[t,i]);const x=l=>{j(l)},g=(l,o)=>{const c=i.getFieldValue("start_time");return c&&o&&o.isBefore(c)?Promise.reject(new Error("End Time must be after Start Time")):Promise.resolve()};return e.jsx(p,{title:"Edit Charging Schedule",visible:h,onCancel:s,footer:[e.jsx(d,{onClick:s,children:"Cancel"},"cancel"),e.jsx(d,{type:"primary",onClick:i.submit,children:"Confirm"},"submit")],children:e.jsxs(r,{form:i,onFinish:x,layout:"vertical",children:[e.jsx(r.Item,{name:"chargepoint",label:"Charge Point",children:e.jsx(u,{disabled:!0})}),e.jsx(r.Item,{name:"start_time",label:"Start Time",rules:[{required:!0}],children:e.jsx(m,{format:"HH:mm"})}),e.jsx(r.Item,{name:"end_time",label:"End Time",rules:[{required:!0},{validator:g}],children:e.jsx(m,{format:"HH:mm"})}),e.jsx(r.Item,{name:"recurrency",label:"Recurrency Settings",rules:[{required:!0}],children:e.jsxs(n,{children:[e.jsx(n.Option,{value:"daily",children:"Daily"}),e.jsx(n.Option,{value:"weekly",children:"Weekly"}),e.jsx(n.Option,{value:"monthly",children:"Monthly"})]})}),e.jsx(r.Item,{label:"Charge Setting",children:e.jsxs(y.Compact,{children:[e.jsx(r.Item,{name:["charge_setting","time"],noStyle:!0,rules:[{required:!0}],children:e.jsx(m,{format:"HH:mm",style:{width:"50%"}})}),e.jsx(r.Item,{name:["charge_setting","power"],noStyle:!0,rules:[{required:!0}],children:e.jsx(u,{style:{width:"50%"},placeholder:"Power"})})]})})]})})}export{E as default};
