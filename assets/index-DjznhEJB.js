import{j as e}from"./index-_YbBPvdW.js";import{r as n}from"./vendor-react-BcJS7s_i.js";import v from"./addChargingSchedule-Cmw5FIiX.js";import k from"./editChargingSchedule-DuYnraqR.js";import{w as x,k as r,P as N,x as P,y as _,z as d,E as R,F as E,H as I,l as T,J as M,aw as K}from"./vendor-antd-CIRYFt1q.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-BflGZHQy.js";const{RangePicker:$}=K,t=[{id:1,chargepoint:"Charge Point 1",time_range:["08:00","18:00"],charge_setting:{time:"24:00",power:32},recurrency:"Daily"},{id:2,chargepoint:"Charge Point 2",time_range:["09:00","19:00"],charge_setting:{time:"24:00",power:32},recurrency:"Weekly"},{id:3,chargepoint:"Charge Point 3",time_range:["10:00","20:00"],charge_setting:{time:"24:00",power:32},recurrency:"Monthly"}];function J(){const[i,o]=n.useState([]),[h,m]=n.useState("list"),[u,a]=n.useState(!1),[j,l]=n.useState(!1),[p,f]=n.useState(null),y=[{title:"Charge Point",dataIndex:"chargepoint",key:"chargepoint"},{title:"Scheduled Time",dataIndex:"time_range",key:"time_range",render:s=>`${s[0]} - ${s[1]}`},{title:"Charge Setting",dataIndex:"charge_setting",key:"charge_setting",render:s=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:["Time: ",s.time]}),e.jsxs("div",{children:["Power: ",s.power]})]})},{title:"Recurrency Kind",dataIndex:"recurrency",key:"recurrency"},{title:"Operation",key:"operation",render:(s,c)=>e.jsx(r,{type:"link",onClick:()=>g(c),children:"Edit"})}],w=s=>{},C=()=>{},g=s=>{f(s),l(!0)},b={selectedRowKeys:i,onChange:s=>o(s)};return e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"mb-6 flex flex-wrap",children:[e.jsxs("div",{className:"mb-2 w-1/5 px-2",children:[e.jsx("label",{className:"mb-1 block",children:"Charge Point"}),e.jsx(x,{className:"w-full",children:t.map(s=>e.jsx(x.Option,{value:s.chargepoint,children:s.chargepoint},s.id))})]}),e.jsxs("div",{className:"mb-2 w-1/5 px-2",children:[e.jsx("label",{className:"mb-1 block",children:"Charge Point"}),e.jsx($,{className:"w-full"})]}),e.jsx("div",{className:"mb-2 flex w-1/5 items-end px-2",children:e.jsx(r,{type:"primary",onClick:()=>w(),children:"Search"})})]}),e.jsxs("div",{className:"mb-4 flex justify-between",children:[e.jsx("div",{children:i.length>0&&e.jsx(N,{title:"Are you sure to delete?",onConfirm:C,children:e.jsx(r,{icon:e.jsx(P,{}),children:"Delete"})})}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(r,{icon:e.jsx(_,{}),onClick:()=>a(!0),className:"mr-4",children:"Add Charging Schedule"}),e.jsxs(d.Group,{value:h,onChange:s=>m(s.target.value),children:[e.jsxs(d.Button,{value:"list",children:[e.jsx(R,{})," List"]}),e.jsxs(d.Button,{value:"grid",children:[e.jsx(E,{})," Grid"]})]})]})]}),h==="list"?e.jsx(I,{rowSelection:b,columns:y,dataSource:t,rowKey:"id",pagination:!1}):e.jsx("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",children:t.map(s=>e.jsxs(T,{className:"w-full",children:[e.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[e.jsx("h3",{className:"text-lg font-semibold",children:s.chargepoint}),e.jsx("input",{type:"checkbox",checked:i.includes(s.id),onChange:()=>{const c=i.includes(s.id)?i.filter(S=>S!==s.id):[...i,s.id];o(c)}})]}),e.jsxs("p",{children:["Scheduled Time: ",s.time_range[0]," - ",s.time_range[1]]}),e.jsxs("p",{children:["Charge Setting: Time ",s.charge_setting.time,", Power ",s.charge_setting.power]}),e.jsxs("p",{children:["Recurrency Kind: ",s.recurrency]}),e.jsx(r,{type:"link",onClick:()=>g(s),children:"Edit"})]},s.id))}),e.jsx("div",{className:"mt-4 flex justify-end",children:e.jsx(M,{total:t.length,showSizeChanger:!0,showQuickJumper:!0,showTotal:s=>`Total ${s} items`})}),e.jsx(v,{visible:u,onCancel:()=>a(!1),onConfirm:()=>{a(!1)}}),e.jsx(k,{visible:j,onCancel:()=>l(!1),onConfirm:()=>{l(!1)},schedule:p})]})}export{J as default};
