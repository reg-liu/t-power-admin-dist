import{j as e}from"./index-qOmAfSnl.js";import{r as c}from"./vendor-react-BcJS7s_i.js";import{e as m}from"./ev-PecoakOh.js";import{E as o,P as x,i as d,j,I as v}from"./vendor-antd-DmtkV1Ch.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-BKiv1F2M.js";function y({visible:l,onCancel:r,record:a,onEdit:t,onDelete:n}){const i=c.useRef(null);return c.useEffect(()=>{if(l&&a&&i.current){const s=i.current.getContext("2d");s&&(s.clearRect(0,0,100,100),s.font="14px Arial",s.fillText(a.brand,10,30),s.fillText(a.brand_model,10,50),s.fillText(a.year.toString(),10,70))}},[l,a]),a?e.jsx(o,{open:l,onCancel:r,title:"Brand Model Details",width:1440,zIndex:1e3,footer:[e.jsxs("div",{className:"footer-normal-btns",children:[e.jsx(x,{title:"Confirm Delete?",onConfirm:()=>n(a.id),children:e.jsx(d,{danger:!0,children:"Delete Brand Model"})}),e.jsx(d,{onClick:t,type:"primary",className:"mr-2",children:"Edit Brand Model Info"})]},"detail-footer")],children:e.jsx("div",{className:"content-parts",children:e.jsxs("div",{className:"content-parts detail-normal",children:[e.jsxs(j,{title:"Basic Information",className:"basic-card no-border",children:[e.jsx("div",{className:"basic-card-row",children:e.jsx(v,{src:m,preview:!1,width:236,className:"entity-image object-cover"})}),e.jsxs("div",{className:"basic-card-row",children:[e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Brand"}),e.jsx("div",{className:"value ",children:a?.brand})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Brand Model"}),e.jsx("div",{className:"value",children:a?.brand_model})]})]}),e.jsxs("div",{className:"basic-card-row",children:[e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Year"}),e.jsx("div",{className:"value ",children:a?.year})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Class"}),e.jsx("div",{className:"value",children:"SUV"})]})]}),e.jsxs("div",{className:"basic-card-row",children:[e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Plug Type"}),e.jsx("div",{className:"value ",children:a?.plug_type})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Battery Capacity"}),e.jsxs("div",{className:"value",children:[a.battery_capacity," Ah"]})]})]})]}),e.jsx("div",{className:"detail-empty"})]})})}):null}export{y as default};
