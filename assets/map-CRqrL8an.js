import{j as i,f as t}from"./index-BGJumyCV.js";import{c as m}from"./index.modern-BgdPXcnK.js";import{r}from"./vendor-react-BcJS7s_i.js";import{m as c}from"./vendor-antd-C5sFxZgj.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-C8CVoVQY.js";import"./vendor-charts-Cv5x1InZ.js";import"./index-Dj133iwh.js";const d={online:"#52c41a",offline:"#f5222d",unknown:"#faad14"};function u({entity:s,onClick:o,lat:l,lng:n}){const e=s.type==="Chargepoint"?i.jsx(t,{icon:"material-symbols-light:ev-charger-outline-rounded",color:d[s.status],size:32}):i.jsx(t,{icon:"ph:car-profile-thin",color:d[s.status],size:32});return i.jsx(c,{title:s.type==="EV"?s.registration_number:s.name,children:i.jsx("div",{onClick:()=>o(s),children:e})})}function x({lat:s,lng:o,arrived:l}){return i.jsx("div",{style:{width:"10px",height:"10px",borderRadius:"50%",backgroundColor:l?"green":"gray"}})}function M({entities:s,currentEntity:o,onMarkerClick:l}){const[n,e]=r.useState({lat:-37.975,lng:145.238}),[f,p]=r.useState([]);return r.useEffect(()=>{o&&(e(o.position),o.type==="EV"?p([{position:{lat:o.position.lat-.002,lng:o.position.lng-.002},arrived:!0},{position:{lat:o.position.lat-.001,lng:o.position.lng-.001},arrived:!0},{position:o.position,arrived:!1},{position:{lat:o.position.lat+.001,lng:o.position.lng+.001},arrived:!1},{position:{lat:o.position.lat+.002,lng:o.position.lng+.002},arrived:!1}]):p([]))},[o]),i.jsx("div",{className:"relative h-full w-full",children:i.jsxs(m,{bootstrapURLKeys:{key:"AIzaSyCQc86pm5M44jtKOZydqmr329R3aQszvaw"},center:n,zoom:16,options:{disableDefaultUI:!0},children:[s.map(a=>i.jsx(u,{lat:a.position.lat,lng:a.position.lng,entity:a,onClick:l},a.id)),f.map((a,g)=>i.jsx(x,{lat:a.position.lat,lng:a.position.lng,arrived:a.arrived},g))]})})}export{M as default};
