import{j as r}from"./index-DVfoU12p.js";import{A as m,M as c,a as s}from"./index.modern-DVWZ3PXQ.js";import{r as t}from"./vendor-react-DcqtUZ_G.js";import{m as d}from"./vendor-antd-Cym1MqD8.js";import"./vendor-ui-BASYQBt4.js";import"./vendor-utils-iucGuNxy.js";const h="AIzaSyCQc86pm5M44jtKOZydqmr329R3aQszvaw",v={online:"#52c41a",offline:"#f5222d",unknown:"#faad14"};function j({entities:i,currentEntity:a,onEntityClick:l}){const n=t.useMemo(()=>a?a.position:{lat:-37.976,lng:145.239},[a]),p=t.useMemo(()=>a&&a.type==="EV"?[{position:{lat:-37.975,lng:145.238},arrived:!0},{position:{lat:-37.977,lng:145.24},arrived:!0},{position:{lat:-37.979,lng:145.242},arrived:!1},{position:{lat:-37.981,lng:145.244},arrived:!1}]:[],[a]),f=o=>{const e={path:o.type==="Chargepoint"?"M6 10h6V5H6zm0 9h6v-7H6zm6 0H6zm1 2H5q-.425 0-.712-.288T4 20V5q0-.825.588-1.412T6 3h6q.825 0 1.413.588T14 5v7h1.25q.725 0 1.238.513T17 13.75v4.625q0 .425.35.775t.775.35q.45 0 .788-.35t.337-.775V9H19q-.425 0-.712-.288T18 8V6.5q0-.2.15-.35T18.5 6V5q0-.2.15-.35T19 4.5t.35.15t.15.35v1h1V5q0-.2.15-.35T21 4.5t.35.15t.15.35v1q.2 0 .35.15t.15.35V8q0 .425-.288.713T21 9h-.25v9.375q0 1.05-.763 1.838T18.126 21q-1.075 0-1.85-.788t-.775-1.837V13.75q0-.125-.062-.187t-.188-.063H14V20q0 .425-.288.713T13 21m-4.5-2l2.5-4H9.5v-3L7 16h1.5z":"M15.972 4c1.24 0 2.327.83 2.653 2.026l.953 3.493A2.75 2.75 0 0 1 22 12.25v2.25c0 .865-.4 1.636-1.023 2.14a3.25 3.25 0 0 1-6.32.61H9.843a3.251 3.251 0 0 1-6.258-.258A2.75 2.75 0 0 1 2 14.5v-1.688a2.75 2.75 0 0 1 2.083-2.668l2.182-.546l2.509-4.246A2.75 2.75 0 0 1 11.142 4zm1.206 2.421a1.25 1.25 0 0 0-1.206-.921H14.5v4h3.518zM13 9.5v-4h-1.858a1.25 1.25 0 0 0-1.077.614l-2 3.386zm4.75 5a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5M8.5 16.25a1.75 1.75 0 1 0-3.5 0a1.75 1.75 0 0 0 3.5 0",fillColor:v[o.status],fillOpacity:1,strokeWeight:1,strokeColor:"#ffffff",scale:1};return r.jsx(d,{title:o.type==="EV"?o.registration_number:o.name,children:r.jsx(s,{position:o.position,icon:e,onClick:()=>l(o)},o.id)})};return r.jsx(m,{apiKey:h,children:r.jsxs(c,{center:n,zoom:16,mapId:"8e0a97af9386fef",gestureHandling:"greedy",disableDefaultUI:!0,children:[i.map(f),p.map((o,e)=>r.jsx(s,{position:o.position,icon:{path:google.maps.SymbolPath.CIRCLE,scale:5,fillColor:o.arrived?"#52c41a":"#bfbfbf",fillOpacity:1,strokeWeight:0}},`journey-${e}`))]})})}export{j as default};