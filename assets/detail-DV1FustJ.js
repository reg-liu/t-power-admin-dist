import{j as a}from"./index-DVfoU12p.js";import{K as g,l as n,W as e,k as C}from"./vendor-antd-Cym1MqD8.js";import{d as b,B as o,X as s,Y as d,f as k,L as x,C as i,T as r,a as l,b as c}from"./LineChart-DC097XjL.js";import"./vendor-react-DcqtUZ_G.js";import"./vendor-ui-BASYQBt4.js";import"./vendor-utils-iucGuNxy.js";import"./isEqual-0-1QZRPE.js";import"./vendor-charts-CCrp_OZH.js";var h=b({chartName:"BarChart",GraphicalChild:o,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:s},{axisType:"yAxis",AxisComp:d}],formatAxisMap:k});function M({visible:j,onCancel:m,vehicle:t}){if(!t)return null;const u=[{date:"2023-05-01",mileage:50},{date:"2023-05-02",mileage:80},{date:"2023-05-03",mileage:70},{date:"2023-05-04",mileage:90},{date:"2023-05-05",mileage:60},{date:"2023-05-06",mileage:75},{date:"2023-05-07",mileage:85}],p=[{date:"2023-05-01",used:1},{date:"2023-05-02",used:1},{date:"2023-05-03",used:0},{date:"2023-05-04",used:1},{date:"2023-05-05",used:1},{date:"2023-05-06",used:0},{date:"2023-05-07",used:1}],f=[{date:"2023-05-01",soh:.95},{date:"2023-05-02",soh:.94},{date:"2023-05-03",soh:.93},{date:"2023-05-04",soh:.93},{date:"2023-05-05",soh:.92},{date:"2023-05-06",soh:.92},{date:"2023-05-07",soh:.91}],y=[{date:"2023-05-01",alerts:2,faults:0},{date:"2023-05-02",alerts:1,faults:1},{date:"2023-05-03",alerts:3,faults:0},{date:"2023-05-04",alerts:0,faults:2},{date:"2023-05-05",alerts:2,faults:1},{date:"2023-05-06",alerts:1,faults:0},{date:"2023-05-07",alerts:0,faults:1}];return a.jsx(g,{title:"Vehicle Detail",visible:j,onCancel:m,footer:null,width:1e3,children:a.jsxs("div",{className:"space-y-6",children:[a.jsx(n,{title:"Basic static information",children:a.jsxs(e,{column:2,children:[a.jsx(e.Item,{label:"EV Rego",children:t.registration_number}),a.jsx(e.Item,{label:"VIN",children:t.vin}),a.jsx(e.Item,{label:"Brand",children:t.brand}),a.jsx(e.Item,{label:"Brand Model",children:t.brand_model}),a.jsx(e.Item,{label:"Current Driver",children:t.current_driver})]})}),a.jsx(n,{title:"Realtime information",children:a.jsxs(e,{column:2,children:[a.jsx(e.Item,{label:"Status",children:t.status}),a.jsxs(e.Item,{label:"Location",children:[t.location.street,", ",t.location.city,", ",t.location.state]}),a.jsx(e.Item,{label:"SoC",children:"75%"}),a.jsx(e.Item,{label:"Pressure",children:"220 kpa"}),a.jsx(e.Item,{label:"Temperature",children:"22°C"})]})}),a.jsx(n,{title:"Statistics graphs/information (7 days)",children:a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{children:[a.jsx("h4",{children:"Mileage Record"}),a.jsxs(x,{width:600,height:300,data:u,children:[a.jsx(i,{strokeDasharray:"3 3"}),a.jsx(s,{dataKey:"date"}),a.jsx(d,{}),a.jsx(r,{}),a.jsx(l,{}),a.jsx(c,{type:"monotone",dataKey:"mileage",stroke:"#8884d8"})]})]}),a.jsxs("div",{children:[a.jsx("h4",{children:"Attendance Record"}),a.jsxs(h,{width:600,height:300,data:p,children:[a.jsx(i,{strokeDasharray:"3 3"}),a.jsx(s,{dataKey:"date"}),a.jsx(d,{domain:[0,1],ticks:[0,1]}),a.jsx(r,{}),a.jsx(l,{}),a.jsx(o,{dataKey:"used",fill:"#8884d8",name:"Vehicle Used"})]})]}),a.jsxs("div",{children:[a.jsx("h4",{children:"SOH Record"}),a.jsxs(x,{width:600,height:300,data:f,children:[a.jsx(i,{strokeDasharray:"3 3"}),a.jsx(s,{dataKey:"date"}),a.jsx(d,{domain:[0,1]}),a.jsx(r,{}),a.jsx(l,{}),a.jsx(c,{type:"monotone",dataKey:"soh",stroke:"#82ca9d"})]})]}),a.jsxs("div",{children:[a.jsx("h4",{children:"Alert/Fault Record"}),a.jsxs(h,{width:600,height:300,data:y,children:[a.jsx(i,{strokeDasharray:"3 3"}),a.jsx(s,{dataKey:"date"}),a.jsx(d,{}),a.jsx(r,{}),a.jsx(l,{}),a.jsx(o,{dataKey:"alerts",fill:"#8884d8"}),a.jsx(o,{dataKey:"faults",fill:"#82ca9d"})]})]})]})}),a.jsx("div",{className:"flex justify-end space-x-2",children:a.jsx(C,{onClick:()=>{},children:"Edit Availability"})})]})})}export{M as default};