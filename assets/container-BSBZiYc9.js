import{j as o,q as i,c as s}from"./index-DzoF5gIw.js";import{r as n}from"./vendor-react-BcJS7s_i.js";import{m}from"./vendor-ui-DPkccqlC.js";import{g as l}from"./index-DxtkW8gu.js";import{l as c,v as p}from"./vendor-antd-DouGSysN.js";import"./vendor-utils-Cpch6Ee7.js";import"./bounce-B2MxeWzj.js";import"./fade-BQnstbZm.js";function u({children:r,className:t,...e}){return o.jsx(m.div,{initial:"initial",whileInView:"animate",viewport:{once:!0,amount:.3},variants:i(),className:t,...e,children:r})}function C({variant:r}){const{colorBgLayout:t}=s(),e=n.useMemo(()=>l(r),[r]);return o.jsx("div",{className:"h-[480px] overflow-scroll rounded-lg px-20",style:{backgroundColor:t},children:[...Array(40)].map((x,a)=>o.jsx(u,{variants:e,className:"mt-4",children:o.jsx(c,{children:o.jsxs(p,{className:"text-center",children:["Item ",a+1]})})},a))},r)}export{C as default};