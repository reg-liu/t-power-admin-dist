import{j as a}from"./index-DDpD7CQs.js";import{l as r,K as e,al as t,F as i}from"./vendor-antd-Cm1Y6B8R.js";import{R as l,L as d,C as c,X as o,Y as m,T as x,a as u,b as h}from"./LineChart-CCvlGDhT.js";import"./vendor-react-BcJS7s_i.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-C6QnRqht.js";import"./isEqual-Hc_6Fhhx.js";import"./vendor-charts-Cv5x1InZ.js";import"./index-Dj133iwh.js";function T({user:n}){const j=[{day:"Mon",duration:"02:30:00"},{day:"Tue",duration:"03:15:00"},{day:"Wed",duration:"01:45:00"},{day:"Thu",duration:"04:00:00"},{day:"Fri",duration:"02:00:00"},{day:"Sat",duration:"03:30:00"},{day:"Sun",duration:"02:45:00"}],p=[{day:"Mon",mileage:120},{day:"Tue",mileage:150},{day:"Wed",mileage:100},{day:"Thu",mileage:180},{day:"Fri",mileage:130},{day:"Sat",mileage:90},{day:"Sun",mileage:110}],y=[{registration_number:"ABC123",vin:"VIN123456",status:"Active"},{registration_number:"DEF456",vin:"VIN789012",status:"Inactive"},{registration_number:"GHI789",vin:"VIN345678",status:"Active"}],g=[{name:"Charger 1",cp_sn:"CP001"},{name:"Charger 2",cp_sn:"CP002"},{name:"Charger 3",cp_sn:"CP003"}],b=[{card_number:"RFID001",status:"Active"},{card_number:"RFID002",status:"Inactive"},{card_number:"RFID003",status:"Active"}],I=[{tbox_number:"TB001",vin:"VIN123456",status:"Active"},{tbox_number:"TB002",vin:"VIN789012",status:"Inactive"},{tbox_number:"TB003",vin:"VIN345678",status:"Active"}];return a.jsxs("div",{className:"content-parts",children:[a.jsx(r,{title:"Basic static information",children:a.jsxs(e,{column:2,children:[a.jsx(e.Item,{label:"Name",span:1,children:n?.name}),a.jsx(e.Item,{label:"Email",span:1,children:n?.email}),a.jsx(e.Item,{label:"Phone",span:1,children:n?.phone}),a.jsx(e.Item,{label:"Role",span:1,children:n?.role})]})}),a.jsx(r,{title:"Statistics graphs/information (7 days)",className:"mt-4",children:a.jsxs("div",{className:"chart-wrapper",children:[a.jsxs("div",{className:"chart-item",children:[a.jsx("div",{className:"chart-title",children:"Charging Sessions"}),a.jsx("div",{className:"chart-content",children:a.jsx(l,{width:"100%",height:200,children:a.jsxs(d,{data:j,children:[a.jsx(c,{strokeDasharray:"3 3"}),a.jsx(o,{dataKey:"day"}),a.jsx(m,{}),a.jsx(x,{labelFormatter:s=>`Day: ${s}`,formatter:s=>[`Duration: ${s}`,"Charging Sessions"]}),a.jsx(u,{}),a.jsx(h,{type:"monotone",dataKey:"duration",stroke:"#8884d8",name:"Charging Sessions"})]})})})]}),a.jsxs("div",{className:"chart-item",children:[a.jsx("div",{className:"chart-title",children:"Mileage"}),a.jsx("div",{className:"chart-content",children:a.jsx(l,{width:"100%",height:200,children:a.jsxs(d,{data:p,children:[a.jsx(c,{strokeDasharray:"3 3"}),a.jsx(o,{dataKey:"day"}),a.jsx(m,{}),a.jsx(x,{labelFormatter:s=>`Day: ${s}`,formatter:s=>[`${s} km`,"Mileage"]}),a.jsx(u,{}),a.jsx(h,{type:"monotone",dataKey:"mileage",stroke:"#82ca9d",name:"Mileage"})]})})})]})]})}),a.jsx(r,{title:"Assets",className:"mt-4",children:a.jsxs(e,{column:2,children:[a.jsx(e.Item,{label:"",span:1,children:a.jsx(t,{className:"w-full",defaultActiveKey:[],children:a.jsx(t.Panel,{header:"EVs",children:a.jsx(i,{dataSource:y,columns:[{title:"Registration Number",dataIndex:"registration_number",key:"registration_number"},{title:"VIN",dataIndex:"vin",key:"vin"},{title:"Status",dataIndex:"status",key:"status"}],pagination:!1})},"1")})}),a.jsx(e.Item,{label:"",span:1,children:a.jsx(t,{className:"w-full",defaultActiveKey:[],children:a.jsx(t.Panel,{header:"Chargepoints",children:a.jsx(i,{dataSource:g,columns:[{title:"Name",dataIndex:"name",key:"name"},{title:"SN",dataIndex:"cp_sn",key:"cp_sn"}],pagination:!1})},"1")})}),a.jsx(e.Item,{label:"",span:1,children:a.jsx(t,{className:"w-full",defaultActiveKey:[],children:a.jsx(t.Panel,{header:"RFIDs",children:a.jsx(i,{dataSource:b,columns:[{title:"Card Number",dataIndex:"card_number",key:"card_number"},{title:"Status",dataIndex:"status",key:"status"}],pagination:!1})},"1")})}),a.jsx(e.Item,{label:"",span:1,children:a.jsx(t,{className:"w-full",defaultActiveKey:[],children:a.jsx(t.Panel,{header:"Tbox",children:a.jsx(i,{dataSource:I,columns:[{title:"TBox Number",dataIndex:"tbox_number",key:"tbox_number"},{title:"VIN",dataIndex:"vin",key:"vin"},{title:"Status",dataIndex:"status",key:"status"}],pagination:!1})},"1")})})]})})]})}export{T as default};
