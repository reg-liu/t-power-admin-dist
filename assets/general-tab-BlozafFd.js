import{X as j,t as n,j as e}from"./index-BEe1wG_p.js";import{C as i}from"./index-CRKyW_N7.js";import"./vendor-react-DcqtUZ_G.js";import{U as h}from"./upload-avatar-DpiRwDWP.js";import"./format-number-bCysWJVy.js";import{A as u,a1 as r,a2 as s,j as f,q as b,k as t,O as a,I as l}from"./vendor-antd-CLI4Tk7L.js";import"./vendor-ui-BASYQBt4.js";import"./vendor-utils-BSYCMmfc.js";function N(){const{notification:c}=u.useApp(),{avatar:o,username:d,email:m}=j(),x={name:d,email:m,phone:n.phone.number(),address:n.location.county(),city:n.location.city(),code:n.location.zipCode(),about:n.lorem.paragraphs()},p=()=>{c.success({message:"Update success!",duration:3})};return e.jsxs(r,{gutter:[16,16],children:[e.jsx(s,{span:24,lg:8,children:e.jsxs(i,{className:"flex-col !px-6 !pb-10 !pt-20",children:[e.jsx(h,{defaultAvatar:o}),e.jsxs(f,{className:"py-6",children:[e.jsx("div",{children:"Public Profile"}),e.jsx(b,{size:"small"})]}),e.jsx(t,{type:"primary",danger:!0,children:"Delete User"})]})}),e.jsx(s,{span:24,lg:16,children:e.jsx(i,{children:e.jsxs(a,{layout:"vertical",initialValues:x,labelCol:{span:8},className:"w-full",children:[e.jsxs(r,{gutter:16,children:[e.jsx(s,{span:12,children:e.jsx(a.Item,{label:"Username",name:"name",children:e.jsx(l,{})})}),e.jsx(s,{span:12,children:e.jsx(a.Item,{label:"Email",name:"email",children:e.jsx(l,{})})})]}),e.jsxs(r,{gutter:16,children:[e.jsx(s,{span:12,children:e.jsx(a.Item,{label:"Phone",name:"phone",children:e.jsx(l,{})})}),e.jsx(s,{span:12,children:e.jsx(a.Item,{label:"Address",name:"address",children:e.jsx(l,{})})})]}),e.jsxs(r,{gutter:16,children:[e.jsx(s,{span:12,children:e.jsx(a.Item,{label:"City",name:"city",children:e.jsx(l,{})})}),e.jsx(s,{span:12,children:e.jsx(a.Item,{label:"Code",name:"code",children:e.jsx(l,{})})})]}),e.jsx(a.Item,{label:"About",name:"about",children:e.jsx(l.TextArea,{})}),e.jsx("div",{className:"flex w-full justify-end",children:e.jsx(t,{type:"primary",onClick:p,children:"Save Changes"})})]})})})]})}export{N as default};
