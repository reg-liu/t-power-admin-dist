import{a as g,m as f,o as b,j as e}from"./index-5T_VQxhD.js";import{r as a}from"./vendor-react-BcJS7s_i.js";import{ReturnButton as y}from"./ReturnButton-BS1mxK70.js";import{H as n,K as m,Q as S,V as c,i as u,Y as w}from"./vendor-antd-B62eGpCx.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-CtEfXJzW.js";const{Countdown:C}=w;function E(){const{t:s}=g(),d=i=>{},[t,o]=a.useState(0),[x,l]=a.useState(0),{loginState:h,backToLogin:j}=f();if(h!==b.MOBILE)return null;const p=()=>{o(60),l(60)},r=()=>{o(0),l(60)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mb-4 text-2xl font-bold xl:text-3xl",children:s("sys.login.mobileSignInFormTitle")}),e.jsxs(n,{name:"normal_login",size:"large",initialValues:{remember:!0},onFinish:d,children:[e.jsx(n.Item,{name:"phone",rules:[{required:!0,message:"Please input your Phone!"}],children:e.jsx(m,{placeholder:s("sys.login.mobile")})}),e.jsx(n.Item,{name:"code",rules:[{required:!0,message:s("sys.login.mobilePlaceholder")}],children:e.jsxs(S,{justify:"space-between",children:[e.jsx(c,{span:14,children:e.jsx(m,{placeholder:s("sys.login.smsCode")})}),e.jsx(c,{span:9,flex:1,children:e.jsx(u,{disabled:t!==0,className:"w-full !text-sm",onClick:p,children:t===0?e.jsx("span",{children:s("sys.login.sendSmsButton")}):e.jsxs("div",{className:"flex items-center justify-center",children:[e.jsx(C,{className:"hidden",value:Date.now()+t*1e3,onChange:i=>{o(Number(i)/1e3),l(Math.floor(Number(i)/1e3))},format:"ss",onFinish:r}),e.jsx("span",{className:"ml-1",children:s("sys.login.sendSmsText",{second:x})})]})})})]})}),e.jsx(n.Item,{children:e.jsx(u,{type:"primary",htmlType:"submit",className:"w-full",children:s("sys.login.loginButton")})}),e.jsx(y,{onClick:()=>{r(),j()}})]})]})}export{E as default};
