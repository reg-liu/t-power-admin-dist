import{a as d,o as c,l as u,n as g,j as e,p as x}from"./index-DHG9k9kq.js";import{ReturnButton as p}from"./ReturnButton-BLwiK7cv.js";import{J as r,I as n,k as h}from"./vendor-antd-DZ11D4bT.js";import"./vendor-react-BcJS7s_i.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-FiO04Ee5.js";function v(){const{t:s}=d(),a=c({mutationFn:x.signup}),{loginState:l,backToLogin:t}=u();if(l!==g.REGISTER)return null;const m=async i=>{await a.mutateAsync(i),t()};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mb-4 text-2xl font-bold xl:text-3xl",children:s("sys.login.signUpFormTitle")}),e.jsxs(r,{name:"normal_login",size:"large",initialValues:{remember:!0},onFinish:m,children:[e.jsx(r.Item,{name:"username",rules:[{required:!0,message:s("sys.login.accountPlaceholder")}],children:e.jsx(n,{placeholder:s("sys.login.userName")})}),e.jsx(r.Item,{name:"email",rules:[{required:!0,message:s("sys.login.emaildPlaceholder")}],children:e.jsx(n,{placeholder:s("sys.login.email")})}),e.jsx(r.Item,{name:"password",rules:[{required:!0,message:s("sys.login.passwordPlaceholder")}],children:e.jsx(n.Password,{type:"password",placeholder:s("sys.login.password")})}),e.jsx(r.Item,{name:"confirmPassword",rules:[{required:!0,message:s("sys.login.confirmPasswordPlaceholder")},({getFieldValue:i})=>({validator(y,o){return!o||i("password")===o?Promise.resolve():Promise.reject(new Error(s("sys.login.diffPwd")))}})],children:e.jsx(n.Password,{type:"password",placeholder:s("sys.login.confirmPassword")})}),e.jsx(r.Item,{children:e.jsx(h,{type:"primary",htmlType:"submit",className:"w-full",children:s("sys.login.registerButton")})}),e.jsxs("div",{className:"mb-2 text-xs text-gray",children:[e.jsx("span",{children:s("sys.login.registerAndAgree")}),e.jsx("a",{href:"./",className:"text-sm !underline",children:s("sys.login.termsOfService")})," & ",e.jsx("a",{href:"./",className:"text-sm !underline",children:s("sys.login.privacyPolicy")})]}),e.jsx(p,{onClick:t})]})]})}export{v as default};
