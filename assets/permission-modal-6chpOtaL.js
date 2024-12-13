import{af as S,ai as x,j as e,ah as o,ag as j}from"./index-DzoF5gIw.js";import{r as m}from"./vendor-react-BcJS7s_i.js";import{O as n,K as v,z as r,I as u,av as N,aw as w,a2 as T}from"./vendor-antd-DouGSysN.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-Cpch6Ee7.js";function M({title:b,show:f,formValue:a,onOk:y,onCancel:I}){const[d]=n.useForm(),p=S(),[C,E]=m.useState(x),c=m.useCallback((l,t=p)=>{let s="";if(!t||!l)return s;for(let i=0;i<t.length&&(t[i].id===l?s=t[i].name:t[i].children&&(s=c(l,t[i].children)),!s);i+=1);return s},[p]),h=l=>{E(x.filter(t=>t.value.includes(l.toLowerCase())))};return m.useEffect(()=>{if(d.setFieldsValue({...a}),a.parentId){const l=c(a.parentId);h(l)}},[a,d,c]),e.jsx(v,{title:b,open:f,onOk:y,onCancel:I,children:e.jsxs(n,{initialValues:a,form:d,labelCol:{span:4},wrapperCol:{span:18},layout:"horizontal",children:[e.jsx(n.Item,{label:"Type",name:"type",required:!0,children:e.jsxs(r.Group,{optionType:"button",buttonStyle:"solid",children:[e.jsx(r,{value:o.CATALOGUE,children:"CATALOGUE"}),e.jsx(r,{value:o.MENU,children:"MENU"})]})}),e.jsx(n.Item,{label:"Name",name:"name",required:!0,children:e.jsx(u,{})}),e.jsx(n.Item,{label:"Label",name:"label",required:!0,tooltip:"internationalization config",children:e.jsx(u,{})}),e.jsx(n.Item,{label:"Parent",name:"parentId",required:!0,children:e.jsx(N,{fieldNames:{label:"name",value:"id",children:"children"},allowClear:!0,treeData:p,onChange:(l,t)=>{h(t[0])}})}),e.jsx(n.Item,{label:"Route",name:"route",required:!0,children:e.jsx(u,{})}),e.jsx(n.Item,{noStyle:!0,shouldUpdate:(l,t)=>l.type!==t.type,children:({getFieldValue:l})=>l("type")===o.MENU?e.jsx(n.Item,{label:"Component",name:"component",required:l("type")===o.MENU,children:e.jsx(w,{options:C,filterOption:(t,s)=>(s?.label||"").toLowerCase().includes(t.toLowerCase())})}):null}),e.jsx(n.Item,{label:"Icon",name:"icon",tooltip:"local icon should start with ic",children:e.jsx(u,{})}),e.jsx(n.Item,{label:"Hide",name:"hide",tooltip:"hide in menu",children:e.jsxs(r.Group,{optionType:"button",buttonStyle:"solid",children:[e.jsx(r,{value:!1,children:"Show"}),e.jsx(r,{value:!0,children:"Hide"})]})}),e.jsx(n.Item,{label:"Order",name:"order",children:e.jsx(T,{style:{width:"100%"}})}),e.jsx(n.Item,{label:"Status",name:"status",required:!0,children:e.jsxs(r.Group,{optionType:"button",buttonStyle:"solid",children:[e.jsx(r,{value:j.ENABLE,children:" Enable "}),e.jsx(r,{value:j.DISABLE,children:" Disable "})]})})]})})}export{M as default};