import{j as e}from"./index-qOmAfSnl.js";import{r as p}from"./vendor-react-BcJS7s_i.js";import{c as h}from"./cpMonitorService-DM4J4oTW.js";import{E as v,i as l,w as s,s as f}from"./vendor-antd-DmtkV1Ch.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-BKiv1F2M.js";const{Option:r}=s;function _({visible:n,onCancel:i,connector:t,onConfirm:c}){const[o,d]=p.useState(),m=async()=>{const a=await h.changeAvailability({charge_point_id:t.charge_point_id,connector_id:t.connector_id,type:o?"Operative":"Inoperative"});a?.code===200&&(c(),f.success(a.message))};return e.jsx(v,{title:"Edit",open:n,onCancel:i,footer:[e.jsxs("div",{className:"footer-normal-btns",children:[e.jsx(l,{onClick:i,children:"Cancel"},"cancel"),e.jsx(l,{type:"primary",onClick:m,children:"Confirm"},"confirm")]},"edit-connector-footer")],children:e.jsx("div",{className:"modal-form one-column",children:e.jsxs("div",{className:"modal-form-item",children:[e.jsx("label",{htmlFor:"availability",children:"Connector Status"}),e.jsxs(s,{id:"availability",className:"w-full",value:o,onChange:a=>d(a),placeholder:"Select",children:[e.jsx(r,{value:"available",children:"Available"}),e.jsx(r,{value:"unavailable",children:"Unavailable"})]})]})})})}export{_ as default};
