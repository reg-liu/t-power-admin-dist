import{ak as p,j as e,ag as n,al as x}from"./index--cqiSFsN.js";import{r as j}from"./vendor-react-DcqtUZ_G.js";import{P as s,K as h,I as r,an as b,E as l,aq as I}from"./vendor-antd-DkxSEqSW.js";import"./vendor-ui-BASYQBt4.js";import"./vendor-utils-BnlEJVuT.js";const E=x;function R({title:i,show:o,formValue:a,onOk:d,onCancel:m}){const[t]=s.useForm(),c=p(a.permission).map(u=>u.id);return j.useEffect(()=>{t.setFieldsValue({...a})},[a,t]),e.jsx(h,{title:i,open:o,onOk:d,onCancel:m,children:e.jsxs(s,{initialValues:a,form:t,labelCol:{span:4},wrapperCol:{span:18},layout:"horizontal",children:[e.jsx(s.Item,{label:"Name",name:"name",required:!0,children:e.jsx(r,{})}),e.jsx(s.Item,{label:"Label",name:"label",required:!0,children:e.jsx(r,{})}),e.jsx(s.Item,{label:"Order",name:"order",children:e.jsx(b,{style:{width:"100%"}})}),e.jsx(s.Item,{label:"Status",name:"status",required:!0,children:e.jsxs(l.Group,{optionType:"button",buttonStyle:"solid",children:[e.jsx(l,{value:n.ENABLE,children:" Enable "}),e.jsx(l,{value:n.DISABLE,children:" Disable "})]})}),e.jsx(s.Item,{label:"Desc",name:"desc",children:e.jsx(r.TextArea,{})}),e.jsx(s.Item,{label:"Permission",name:"permission",children:e.jsx(I,{checkable:!0,checkedKeys:c,treeData:E,fieldNames:{key:"id",children:"children",title:"name"}})})]})})}export{R as RoleModal};