import{ak as p,j as e,ag as i,al as x}from"./index-DHG9k9kq.js";import{r as j}from"./vendor-react-BcJS7s_i.js";import{J as s,H as h,I as r,O as b,x as l,ao as I}from"./vendor-antd-DZ11D4bT.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-FiO04Ee5.js";const S=x;function R({title:n,show:o,formValue:a,onOk:d,onCancel:m}){const[t]=s.useForm(),c=p(a.permission).map(u=>u.id);return j.useEffect(()=>{t.setFieldsValue({...a})},[a,t]),e.jsx(h,{title:n,open:o,onOk:d,onCancel:m,children:e.jsxs(s,{initialValues:a,form:t,labelCol:{span:4},wrapperCol:{span:18},layout:"horizontal",children:[e.jsx(s.Item,{label:"Name",name:"name",required:!0,children:e.jsx(r,{})}),e.jsx(s.Item,{label:"Label",name:"label",required:!0,children:e.jsx(r,{})}),e.jsx(s.Item,{label:"Order",name:"order",children:e.jsx(b,{style:{width:"100%"}})}),e.jsx(s.Item,{label:"Status",name:"status",required:!0,children:e.jsxs(l.Group,{optionType:"button",buttonStyle:"solid",children:[e.jsx(l,{value:i.ENABLE,children:" Enable "}),e.jsx(l,{value:i.DISABLE,children:" Disable "})]})}),e.jsx(s.Item,{label:"Desc",name:"desc",children:e.jsx(r.TextArea,{})}),e.jsx(s.Item,{label:"Permission",name:"permission",children:e.jsx(I,{checkable:!0,checkedKeys:c,treeData:S,fieldNames:{key:"id",children:"children",title:"name"}})})]})})}export{R as RoleModal};
