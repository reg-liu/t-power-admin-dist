import{j as e,w as r,c as l,W as t,P as a}from"./index-zcuIhQnM.js";import{C as i}from"./index-B7VgRe8k.js";import{d as c}from"./vendor-ui-DPkccqlC.js";import{ap as n,v as d}from"./vendor-antd-k76tQrhI.js";import"./vendor-react-BcJS7s_i.js";import"./vendor-utils-DNNqyWRN.js";function x(o){return e.jsx(m,{children:e.jsx(n,{character:e.jsx(r,{icon:"solar:star-bold",size:18}),...o})})}const m=c.div`
  .ant-rate {
    color: rgb(250, 175, 0);
    .ant-rate-star:not(:last-child) {
      margin-inline-end: 0;
    }
  }
`,p=[{logo:e.jsx(r,{icon:"logos:chrome",size:24}),title:"Chrome",platform:"Mac",type:"free",star:4,reviews:"9.91k"},{logo:e.jsx(r,{icon:"logos:google-drive",size:24}),title:"Drive",platform:"Mac",type:"free",star:3.5,reviews:"1.95k"},{logo:e.jsx(r,{icon:"logos:dropbox",size:24}),title:"Dropbox",platform:"Windows",type:"$66.71",star:4.5,reviews:"9.12k"},{logo:e.jsx(r,{icon:"logos:slack-icon",size:24}),title:"Slack",platform:"Mac",type:"free",star:3.5,reviews:"6.98k"},{logo:e.jsx(r,{icon:"logos:discord-icon",size:24}),title:"Discord",platform:"Windows",type:"$52.17",star:.5,reviews:"8.49k"}];function y(){const o=l();return e.jsxs(i,{className:"flex-col",children:[e.jsx("header",{className:"self-start",children:e.jsx(d.Title,{level:5,children:"Top Related Applications"})}),e.jsx("main",{className:"w-full",children:e.jsx(t,{children:p.map(s=>e.jsxs("div",{className:"mb-4 flex",children:[e.jsx("div",{className:"mr-2 flex items-center justify-center",style:{background:o.colorBorderSecondary,borderRadius:"12px",width:"48px",height:"48px"},children:s.logo}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"font-medium",children:s.title}),e.jsxs("div",{className:"flex items-center justify-center text-gray",children:[s.platform==="Mac"?e.jsx(r,{icon:"wpf:mac-os",size:12}):e.jsx(r,{icon:"mingcute:windows-fill",size:12}),e.jsx("span",{className:"mx-1 text-xs font-light",children:s.platform}),e.jsx(a,{color:s.type==="free"?"green":"red",children:s.type})]})]}),e.jsxs("div",{className:"ml-auto flex flex-col self-center",children:[e.jsx(x,{allowHalf:!0,disabled:!0,defaultValue:s.star}),e.jsxs("span",{className:"mt-1 text-right text-xs text-gray-400",children:[s.reviews,"reviews"]})]})]},s.title))})})]})}export{y as default};
