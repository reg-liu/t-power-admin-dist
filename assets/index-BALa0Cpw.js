import{j as e}from"./index-BEe1wG_p.js";import{r as o}from"./vendor-react-DcqtUZ_G.js";import c from"./control-panel-Dg4qIhH5.js";import m from"./container-Cjm8Onvi.js";import I from"./toolbar-n4A9KyY4.js";import{l as O,a1 as p,a2 as i}from"./vendor-antd-CLI4Tk7L.js";import"./vendor-ui-BASYQBt4.js";import"./vendor-utils-BSYCMmfc.js";import"./cover_3-CV-jlYCL.js";import"./index-O3g6jrGI.js";import"./bounce-BE-iWbcv.js";import"./fade-kPi6Lov7.js";const x=[{type:"slide in",values:["slideInUp","slideInDown","slideInLeft","slideInRight"]},{type:"slide out",values:["slideOutUp","slideOutDown","slideOutLeft","slideOutRight"]},{type:"fade in",values:["fadeIn","fadeInUp","fadeInDown","fadeInLeft","fadeInRight"]},{type:"fade out",values:["fadeOut","fadeOutUp","fadeOutDown","fadeOutLeft","fadeOutRight"]},{type:"zoom in",values:["zoomIn","zoomInUp","zoomInDown","zoomInLeft","zoomInRight"]},{type:"zoom out",values:["zoomOut","zoomOutUp","zoomOutDown","zoomOutLeft","zoomOutRight"]},{type:"bounce in",values:["bounceIn","bounceInUp","bounceInDown","bounceInLeft","bounceInRight"]},{type:"bounce out",values:["bounceOut","bounceOutUp","bounceOutDown","bounceOutLeft","bounceOutRight"]},{type:"flip in",values:["flipInX","flipInY"]},{type:"flip out",values:["flipOutX","flipOutY"]},{type:"scale in",values:["scaleInX","scaleInY"]},{type:"scale out",values:["scaleOutX","scaleOutY"]},{type:"rotate in",values:["rotateIn"]},{type:"rotate out",values:["rotateOut"]}];function V(){const t=o.useMemo(()=>({isText:!1,isMulti:!1,selectedVariant:"slideInUp"}),[]),[n,a]=o.useState(t.isText),[s,u]=o.useState(t.isMulti),[l,r]=o.useState(t.selectedVariant),d=()=>{a(t.isText),u(t.isMulti),r(t.selectedVariant)};return e.jsxs(O,{children:[e.jsx(p,{children:e.jsx(i,{xs:24,md:18,children:e.jsx(I,{isText:n,onChnageText:()=>a(!n),isMulti:s,onChangeMulti:()=>u(!s),onRefresh:d})})}),e.jsxs(p,{justify:"space-between",children:[e.jsx(i,{xs:24,md:18,children:e.jsx(m,{variant:l,isText:n,isMulti:s})}),e.jsx(i,{xs:24,md:5,children:e.jsx(c,{variantKey:x,selectedVariant:l,onChangeVarient:f=>r(f)})})]})]})}export{V as default};
