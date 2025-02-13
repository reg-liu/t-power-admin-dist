import{af as S,ai as x,j as e,ah as a,ag as j}from"./index-DHG9k9kq.js";import{r as c}from"./vendor-react-BcJS7s_i.js";import{J as n,H as N,x as r,I as u,am as v,an as T,O as w}from"./vendor-antd-DZ11D4bT.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-FiO04Ee5.js";function M({title:b,show:f,formValue:o,onOk:y,onCancel:I}){const[d]=n.useForm(),p=S(),[C,E]=c.useState(x),m=c.useCallback((l,t=p)=>{let s="";if(!t||!l)return s;for(let i=0;i<t.length&&(t[i].id===l?s=t[i].name:t[i].children&&(s=m(l,t[i].children)),!s);i+=1);return s},[p]),h=l=>{E(x.filter(t=>t.value.includes(l.toLowerCase())))};return c.useEffect(()=>{if(d.setFieldsValue({...o}),o.parentId){const l=m(o.parentId);h(l)}},[o,d,m]),e.jsx(N,{title:b,open:f,onOk:y,onCancel:I,children:e.jsxs(n,{initialValues:o,form:d,labelCol:{span:4},wrapperCol:{span:18},layout:"horizontal",children:[e.jsx(n.Item,{label:"Type",name:"type",required:!0,children:e.jsxs(r.Group,{optionType:"button",buttonStyle:"solid",children:[e.jsx(r,{value:a.CATALOGUE,children:"CATALOGUE"}),e.jsx(r,{value:a.MENU,children:"MENU"})]})}),e.jsx(n.Item,{label:"Name",name:"name",required:!0,children:e.jsx(u,{})}),e.jsx(n.Item,{label:"Label",name:"label",required:!0,tooltip:"internationalization config",children:e.jsx(u,{})}),e.jsx(n.Item,{label:"Parent",name:"parentId",required:!0,children:e.jsx(v,{fieldNames:{label:"name",value:"id",children:"children"},allowClear:!0,treeData:p,onChange:(l,t)=>{h(t[0])}})}),e.jsx(n.Item,{label:"Route",name:"route",required:!0,children:e.jsx(u,{})}),e.jsx(n.Item,{noStyle:!0,shouldUpdate:(l,t)=>l.type!==t.type,children:({getFieldValue:l})=>l("type")===a.MENU?e.jsx(n.Item,{label:"Component",name:"component",required:l("type")===a.MENU,children:e.jsx(T,{options:C,filterOption:(t,s)=>(s?.label||"").toLowerCase().includes(t.toLowerCase())})}):null}),e.jsx(n.Item,{label:"Icon",name:"icon",tooltip:"local icon should start with ic",children:e.jsx(u,{})}),e.jsx(n.Item,{label:"Hide",name:"hide",tooltip:"hide in menu",children:e.jsxs(r.Group,{optionType:"button",buttonStyle:"solid",children:[e.jsx(r,{value:!1,children:"Show"}),e.jsx(r,{value:!0,children:"Hide"})]})}),e.jsx(n.Item,{label:"Order",name:"order",children:e.jsx(w,{style:{width:"100%"}})}),e.jsx(n.Item,{label:"Status",name:"status",required:!0,children:e.jsxs(r.Group,{optionType:"button",buttonStyle:"solid",children:[e.jsx(r,{value:j.ENABLE,children:" Enable "}),e.jsx(r,{value:j.DISABLE,children:" Disable "})]})})]})})}export{M as default};
