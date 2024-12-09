import{j as s}from"./index-DjbdT0yP.js";import{l as i,N as j,a0 as n}from"./vendor-antd-AsxM9fV-.js";import"./vendor-react-BcJS7s_i.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-DGcstGqY.js";function u({entity:r}){const{Panel:l}=n,d=e=>s.jsxs(s.Fragment,{children:[s.jsxs(i,{title:"Basic static information",children:[s.jsx(j,{src:e.photo,alt:"EV Photo",width:200}),s.jsxs("p",{children:["Registration Number: ",e.registration_number]}),s.jsxs("p",{children:["VIN: ",e.vin]}),s.jsxs("p",{children:["Status: ",e.status]}),s.jsxs("p",{children:["Position: ",e.position.street,", ",e.position.hallam,", ",e.position.vic_3803]}),s.jsxs("p",{children:["Current Driver: ",e.current_driver]})]}),s.jsxs(i,{title:"Realtime information",children:[s.jsxs("p",{children:["Speed: ",e.speed," mph"]}),s.jsxs("p",{children:["Water Temp: ",e.water_temperature," °C"]}),s.jsxs("p",{children:["Oil Pressure: ",e.oil_pressure," PSI"]}),s.jsxs("p",{children:["Oil Temp: ",e.oil_temperature," °C"]}),s.jsxs("p",{children:["RPM: ",e.RPM]}),s.jsxs("p",{children:["Fuel: ",e.fuel," L"]}),s.jsxs("p",{children:["Switch: ",e.switch]}),s.jsxs("p",{children:["Utilization: ",e.utilization," h"]})]})]}),x=e=>s.jsxs(s.Fragment,{children:[s.jsxs(i,{title:"Basic static information",children:[s.jsxs("p",{children:["Name: ",e.name]}),s.jsxs("p",{children:["SN: ",e.sn]}),s.jsxs("p",{children:["Status: ",e.status]}),s.jsx("p",{children:"Point Status:"}),s.jsx("ul",{children:e.connectors.map((t,a)=>s.jsxs("li",{children:[t.name,": ",t.status]},a))}),s.jsxs("p",{children:["Location: ",e.position.street,", ",e.position.hallam,","," ",e.position.vic_3803]})]}),s.jsxs(i,{title:"Realtime information",children:[s.jsxs("p",{children:["Timestamp: ",e.timestamp]}),s.jsxs("p",{children:["Transaction Id: ",e.transaction_id]}),s.jsxs("p",{children:["SoC: ",e.soc,"%"]}),s.jsxs(n,{children:[s.jsxs(l,{header:"L1",children:[s.jsxs("p",{children:["Voltage: ",e.l1.voltage," V"]}),s.jsxs("p",{children:["Energy: ",e.l1.energy," kWh"]}),s.jsxs("p",{children:["Power: ",e.l1.power," kW"]}),s.jsxs("p",{children:["Current: ",e.l1.current," A"]})]},"1"),s.jsxs(l,{header:"L2",children:[s.jsxs("p",{children:["Voltage: ",e.l2.voltage," V"]}),s.jsxs("p",{children:["Energy: ",e.l2.energy," kWh"]}),s.jsxs("p",{children:["Power: ",e.l2.power," kW"]}),s.jsxs("p",{children:["Current: ",e.l2.current," A"]})]},"2"),s.jsxs(l,{header:"L3",children:[s.jsxs("p",{children:["Voltage: ",e.l3.voltage," V"]}),s.jsxs("p",{children:["Energy: ",e.l3.energy," kWh"]}),s.jsxs("p",{children:["Power: ",e.l3.power," kW"]}),s.jsxs("p",{children:["Current: ",e.l3.current," A"]})]},"3")]})]})]});return s.jsxs("div",{className:"p-4",children:[s.jsx("h2",{className:"mb-4 text-2xl font-bold",children:r.type==="EV"?"EV Details":"Chargepoint Details"}),r.type==="EV"?d(r):x(r)]})}export{u as default};