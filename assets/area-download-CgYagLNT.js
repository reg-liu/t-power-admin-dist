import{j as a}from"./index-5T_VQxhD.js";import{r as o}from"./vendor-react-BcJS7s_i.js";import{C as l}from"./index-vmGEF3Z1.js";import{u as i,C as n}from"./useChart-yaJw5Y5b.js";import{v as m,w as c}from"./vendor-antd-B62eGpCx.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-CtEfXJzW.js";import"./vendor-charts-Cv5x1InZ.js";function A(){const[e,t]=o.useState("2023"),r={2022:[{name:"China",data:[10,41,35,51,49,61,69,91,148,35,51]},{name:"America",data:[10,34,13,56,77,88,99,45,13,56,77]}],2023:[{name:"China",data:[51,35,41,10,91,69,62,148,91,35,51]},{name:"America",data:[56,13,34,10,77,99,88,45,13,56,77]}]};return a.jsxs(l,{className:"flex-col",children:[a.jsxs("header",{className:"flex w-full justify-between self-start",children:[a.jsx(m.Title,{level:5,children:"Area Installed"}),a.jsx(c,{size:"small",defaultValue:e,onChange:s=>t(s),options:[{value:2023,label:"2023"},{value:2022,label:"2022"}]})]}),a.jsx("main",{className:"w-full",children:a.jsx(p,{series:r[e]})})]})}function p({series:e}){const t=i({xaxis:{type:"category",categories:["Jan","Feb","Mar","Apr","May","Jun","Jut","Aug","Sep","Oct","Nov","Dec"]},tooltip:{}});return a.jsx(n,{type:"area",series:e,options:t,height:300})}export{A as default};
