import{f as x,j as e}from"./index-CxhHUcuD.js";import{r as o}from"./vendor-react-BcJS7s_i.js";import{K as m,k as l,P as f,V as n}from"./vendor-antd-DouGSysN.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-Cpch6Ee7.js";function I({visible:a,onClose:s,ev:t,onEdit:c}){const d=x(),i=o.useRef(null);return o.useEffect(()=>{if(i.current){const r=i.current.getContext("2d");r&&(r.clearRect(0,0,100,100),r.font="12px Arial",r.fillText(t.brand,10,20),r.fillText(t.brand_model,10,40),r.fillText(t.year.toString(),10,60))}},[t]),e.jsx(m,{title:"EV Details",visible:a,onCancel:s,footer:[e.jsx(l,{onClick:c,children:"Edit EV"},"edit"),d&&e.jsx(f,{title:"Are you sure you want to unbind this EV?",onConfirm:()=>{},okText:"Yes",cancelText:"No",children:e.jsx(l,{children:"Unbind EV"})},"unbind"),e.jsx(l,{onClick:s,children:"Close"},"close")],children:e.jsxs(n,{column:2,children:[e.jsx(n.Item,{label:"Registration Number",children:t.registration_number}),e.jsx(n.Item,{label:"VIN",children:t.vin}),e.jsx(n.Item,{label:"Brand",children:t.brand}),e.jsx(n.Item,{label:"Brand Model",children:t.brand_model}),e.jsx(n.Item,{label:"Year",children:t.year}),e.jsx(n.Item,{label:"Class",children:"SUV"}),e.jsx(n.Item,{label:"Photo",span:2,children:e.jsx("canvas",{ref:i,width:100,height:100})})]})})}export{I as default};
