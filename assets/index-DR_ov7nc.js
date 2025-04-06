import{h as re,j as e,S as r,f as I}from"./index-B9brM18d.js";import{r as t}from"./vendor-react-BcJS7s_i.js";import{c as M}from"./commonService-D-DJLYtp.js";import{C as de,c as D}from"./chargepointUserDetail-CRIylivx.js";import{c as me}from"./chargepoint-wPlJlVYc.js";import ue from"./addChargepoint-A6DqVzPB.js";import he from"./editLocation-B5BPzhgh.js";import pe from"./unbindUser-DrJQMKWi.js";import{K as xe,w as v,i as l,x as f,P as g,F as je,y as L,j as _e,I as fe,k as ge,z as be,s as ve}from"./vendor-antd-DmtkV1Ch.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-BKiv1F2M.js";import"./index-CQW-ewGW.js";import"./index.modern-BgdPXcnK.js";import"./vendor-charts-Cv5x1InZ.js";import"./index-Dj133iwh.js";const{Option:b}=v;function Be(){const[o,u]=t.useState({page:1}),[P,c]=t.useState(0),[T,z]=t.useState(null),[p,A]=t.useState("id_tag"),[B,E]=t.useState([]),[d,V]=t.useState([]),[R,K]=t.useState(0),[O,C]=t.useState(!1),[y,q]=t.useState("list"),[i,h]=t.useState([]),[F,w]=t.useState(!1),[G,N]=t.useState(!1),[J,x]=t.useState(!1);t.useState(!1);const[Q,S]=t.useState(!1),H=re(),k=s=>{z(s),w(!0)},W=[{title:"Charge Point",dataIndex:"id_tag",key:"id_tag",className:"bold",render:(s,a)=>e.jsx(l,{type:"link",onClick:()=>k(a),children:s})},{title:"User",dataIndex:"user",key:"user"},{title:"Location",dataIndex:"location",key:"location",render:s=>e.jsx("div",{className:"display-row location",children:e.jsx("div",{className:"row-item",children:`${s.cp_address} ${s.cp_suburb} ${s.cp_state} ${s.cp_postcode}`})})},{title:"Operation",width:"140px",key:"operation",render:(s,a)=>e.jsx("div",{className:"operations",children:e.jsx(g,{placement:"bottom",okText:"Confirm",cancelText:"Cancel",title:"Confirm unbind?",onConfirm:()=>j(a.id),children:e.jsx(l,{type:"link",icon:e.jsx(r,{icon:"Unbind",size:"20"}),children:"Unbind"})})})}],X=()=>{x(!0)},Y={selectedRowKeys:i,onChange:s=>{h(s)}},Z=e.jsxs(v,{value:p,onChange:A,style:{width:156},children:[e.jsx(b,{value:"id_tag",children:"Charge Point"}),e.jsx(b,{value:"sn",children:"SN"})]}),ee=()=>{i.length===d.length?h([]):h(d.map(s=>s.key))},j=async s=>{try{const a=await D.unbind({charge_point_user_ids:s?[s]:i});a?.code===200&&(ve.success(a.message),c(Date.now()))}catch{}},se=()=>{c(Date.now())},ae=s=>{u({...o,page:s}),c(Date.now())},te=async()=>{const{detail:s}=await M.getUsers({num:100});E(s.results.map(a=>({name:`${a.first_name} ${a.last_name}`,phone:a.phone,email:a.email,user_id:a.user_id})))},ne=s=>s.map(a=>{const{id:m,first_name:_,last_name:oe,charge_point:$}=a,{charge_point_detail:U,brand_model:n,sn:ce}=$;return{id:m,user:`${_} ${oe}`,picture:n.picture,location:U,latlng:U.latlng,key:`${a.id}${M.rowKeySplit}${a.charge_point_id}`,sn:ce,id_tag:$.id_tag,brand:n.brand,brand_model:n.brand_model,charge_model:n.charge_model,connector_no:n.connector_no,ocpp:n.ocpp,phase:n.phase,out_current_max:parseInt(`${n.out_current_max}`,10),out_current_min:parseInt(`${n.out_current_min}`,10),out_power_max:parseInt(`${n.out_power_max}`,10),out_power_min:parseInt(`${n.out_power_min}`,10),out_voltage_max:parseInt(`${n.out_voltage_max}`,10),out_voltage_min:parseInt(`${n.out_voltage_min}`,10),connector_type:n.charge_model==="AC"?"ac - type2":"dc - ccs2"}}),ie=()=>{u({}),c(Date.now())},le=async()=>{C(!0);const s=await D.queryAll(o),{results:a,count:m}=s.detail;V(ne(a||[])),K(m),C(!1)};return t.useEffect(()=>{le()},[P]),t.useEffect(()=>{te(),c(Date.now())},[]),e.jsxs("div",{className:"main-content",children:[e.jsxs("div",{className:"search-area flex items-center justify-start",children:[e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"Enter"}),e.jsx(xe,{addonBefore:Z,placeholder:"Enter",allowClear:!0,value:o[p],onChange:s=>{let a={...o};delete a.id_tag,delete a.sn,a={...a,[p]:s.target.value},u(a)}})]}),e.jsxs("div",{className:"search-item",children:[e.jsx("div",{className:"label",children:"User"}),e.jsx(v,{className:"w-full",allowClear:!0,value:o.user_id,style:{width:"150px"},onChange:s=>{u({...o,user_id:s})},placeholder:"Select",children:B.map(s=>e.jsx(b,{value:s.user_id,children:s.name},s.name))})]}),e.jsx("div",{className:"search-btn",children:e.jsx(l,{icon:e.jsx(r,{icon:"Search",size:"20"}),type:"primary",loading:O,onClick:se})}),e.jsx("div",{className:"search-btn clear",children:e.jsx(l,{icon:e.jsx(r,{icon:"Close",size:"24",color:"#999"}),type:"primary",onClick:ie})})]}),e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("div",{className:"operation-area flex items-center justify-start",children:[e.jsxs(f.Group,{className:"layout-switch",value:y,onChange:s=>q(s.target.value),children:[e.jsx(f.Button,{value:"list",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(I,{icon:"mynaui:list",size:20}),"List"]})}),e.jsx(f.Button,{value:"grid",children:e.jsxs("div",{className:"layout-switch-item",children:[e.jsx(I,{icon:"proicons:grid",size:20}),"Grid"]})})]}),H&&e.jsx(l,{icon:e.jsx(r,{icon:"Bind",size:"20"}),type:"primary",onClick:X,className:"ml-3 mr-3",children:"Bind User and Charge Point"}),e.jsx(g,{placement:"bottom",okText:"Confirm",cancelText:"Cancel",title:"Confirm unbind?",onConfirm:()=>j(),children:e.jsx(l,{disabled:i.length===0,className:"ml-3",icon:e.jsx(r,{icon:"Unbind",size:"20",color:i.length===0?"#999":"currentColor"}),children:"Bulk Unbind"})})]})}),y==="list"?e.jsx(je,{rowSelection:Y,rowKey:"id",columns:W,bordered:!0,dataSource:d,pagination:!1}):e.jsxs("div",{className:"grid-wrapper",children:[e.jsx(L,{className:"check-all",checked:d.length===i.length,onChange:ee}),e.jsx("div",{className:"grid",children:d.map(s=>e.jsx("div",{className:"grid-item",children:e.jsxs(_e,{children:[e.jsxs("div",{className:"grid-top with-image flex items-center",children:[e.jsx(L,{checked:i.includes(s.id),onChange:a=>{const m=a.target.checked?[...i,s.id]:i.filter(_=>_!==s.id);h(m)}}),e.jsx(fe,{src:me,preview:!1,height:184,className:"entity-image object-cover"})]}),e.jsxs("div",{className:"grid-bottom",children:[e.jsx("div",{className:"display-item",children:e.jsx(l,{type:"link",className:"detail-link",onClick:()=>{k(s)},children:s.id_tag})}),e.jsxs("div",{className:"display-item",children:[e.jsx("span",{className:"label bold",children:"User:"})," ",e.jsx("span",{className:"value",children:e.jsx("div",{children:e.jsx("div",{children:s.user})})})]}),e.jsxs("div",{className:"display-item location",children:[e.jsx("span",{className:"label",children:"Location:"})," ",e.jsx("span",{className:"value",children:e.jsx(ge,{placement:"topLeft",title:`${s.location.cp_address} ${s.location.cp_suburb} ${s.location.cp_state} ${s.location.cp_postcode}`,children:e.jsx("span",{className:"truncated-text mr-1",children:`${s.location.cp_address} ${s.location.cp_suburb} ${s.location.cp_state} ${s.location.cp_postcode}`})})})]}),e.jsx("div",{className:"operation-rows",children:e.jsx(g,{placement:"bottom",okText:"Confirm",cancelText:"Cancel",title:"Confirm unbind?",onConfirm:()=>j(s.id),children:e.jsx(l,{type:"link",icon:e.jsx(r,{icon:"Unbind",size:"20"}),children:"Unbind"})})})]})]},s.id)}))})]}),e.jsx("div",{className:"mr-4 mt-4 flex justify-end",children:e.jsx(be,{total:R,showQuickJumper:!0,onChange:ae})}),e.jsx(de,{record:T,visible:F,onClose:()=>{w(!1),c(Date.now())}}),e.jsx(he,{visible:G,onCancel:()=>N(!1),onConfirm:()=>N(!1)}),e.jsx(ue,{visible:J,onCancel:()=>x(!1),onConfirm:()=>x(!1)}),e.jsx(pe,{visible:Q,onCancel:()=>S(!1),onConfirm:()=>S(!1)})]})}export{Be as default};
