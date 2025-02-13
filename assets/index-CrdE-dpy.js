import{j as e}from"./index-DHG9k9kq.js";import{r as u}from"./vendor-react-BcJS7s_i.js";import{f as c,J as s,I as i,a6 as h,a7 as p,a8 as g,y as j,k as a,s as t,a9 as f,aa as b,ab as y,h as N}from"./vendor-antd-DZ11D4bT.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-FiO04Ee5.js";const{TabPane:l}=c;function R(){const[r,n]=u.useState("signin"),o=x=>{t.success(`${r==="signin"?"Signed in":"Signed up"} successfully!`)},d=x=>{t.error("Please check your input and try again.")},m=()=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex justify-center space-x-4",children:[e.jsx(a,{icon:e.jsx(f,{}),shape:"circle",size:"large",className:"text-blue-600"}),e.jsx(a,{icon:e.jsx(b,{}),shape:"circle",size:"large"}),e.jsx(a,{icon:e.jsx(y,{}),shape:"circle",size:"large",className:"text-red-500"})]}),e.jsx(N,{plain:!0,className:"text-gray-500",children:"or"})]});return e.jsx("div",{className:"flex min-h-screen items-center justify-center bg-gray-100",children:e.jsxs("div",{className:"bg-white w-full max-w-md rounded-lg p-8 shadow-md",children:[e.jsxs(c,{activeKey:r,onChange:n,centered:!0,children:[e.jsxs(l,{tab:"Sign In",children:[e.jsx("h2",{className:"mb-6 text-3xl font-bold text-gray-800",children:"Welcome Back"}),m()]},"signin"),e.jsx(l,{tab:"Sign Up",children:e.jsx("h2",{className:"mb-6 text-3xl font-bold text-gray-800",children:"Register with"})},"signup")]}),e.jsxs(s,{name:"login",initialValues:{remember:!0},onFinish:o,onFinishFailed:d,children:[r==="signup"&&e.jsx(s.Item,{name:"name",rules:[{required:!0,message:"Please input your name!"}],children:e.jsx(i,{prefix:e.jsx(h,{}),placeholder:"Your full name",className:"rounded-md"})}),e.jsx(s.Item,{name:"email",rules:[{required:!0,message:"Please input your email!"},{type:"email",message:"Please enter a valid email address!"}],children:e.jsx(i,{prefix:e.jsx(p,{}),placeholder:"Your email address",className:"rounded-md"})}),e.jsx(s.Item,{name:"password",rules:[{required:!0,message:"Please input your password!"}],children:e.jsx(i.Password,{prefix:e.jsx(g,{}),placeholder:"Your password",className:"rounded-md"})}),e.jsx(s.Item,{name:"remember",valuePropName:"checked",children:e.jsx(j,{children:"Remember me"})}),e.jsx(s.Item,{children:e.jsx(a,{type:"primary",htmlType:"submit",className:"bg-teal-500 hover:bg-teal-600 border-teal-500 hover:border-teal-600 w-full rounded-md",children:r==="signin"?"SIGN IN":"SIGN UP"})})]}),e.jsx("div",{className:"text-center",children:r==="signin"?e.jsx("span",{className:"text-gray-600",children:e.jsx(a,{onClick:()=>n("signup"),className:"text-teal-500 hover:text-teal-600 cursor-pointer",children:"Sign up"})}):e.jsxs("span",{className:"text-gray-600",children:["Already have an account?"," ",e.jsx(a,{onClick:()=>n("signin"),className:"text-teal-500 hover:text-teal-600 cursor-pointer",children:"Sign in"})]})})]})})}export{R as default};
