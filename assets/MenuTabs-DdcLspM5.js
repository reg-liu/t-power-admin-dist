import{a as p,j as t}from"./index-Dg_G9Idh.js";import s from"./index-COi1h2c7.js";import g from"./index-CzdFfeHx.js";import c from"./index-IQKQqV1u.js";import h from"./index-BkZz0LIV.js";import{e as l,u}from"./vendor-react-BcJS7s_i.js";import{f as y}from"./vendor-antd-rXbYDupp.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-utils-BT_e3atF.js";import"./brandModelDetail-C1e8o-2F.js";import"./editBrand-CgHk6Gu0.js";import"./addChargepoint-C-gl6MKn.js";import"./detail-vZ0_-STr.js";import"./detail-IGpHTPOk.js";import"./LineChart-D26i5CR9.js";import"./isEqual-Hc_6Fhhx.js";import"./vendor-charts-Cv5x1InZ.js";import"./index-Dj133iwh.js";import"./editConnector-CSGfhC5s.js";import"./setChargeProfile-ZX7vm-en.js";import"./start-D2zjEk3c.js";import"./addChargepoint-Z-ST69u8.js";import"./addUserChargepoint-QkuVX5da.js";import"./index-V80VDNlr.js";import"./index.modern-BgdPXcnK.js";import"./chargepointUserDetail-CrxmvbTM.js";import"./editLocation-DNTkfOLJ.js";import"./unbindUser-f9QWIoZ4.js";function J(){const{t:e}=p(),n=l(),o=u(),r=m=>{n(m)},a=[{key:"/charge-point?type=monitoring",label:e("sys.menu.charge_point.control_monitoring"),children:t.jsx(c,{})},{key:"/charge-point?type=chargepoint-management",label:e("sys.menu.charge_point.chargepoint_management"),children:t.jsx(g,{})},{key:"/charge-point?type=user-management",label:e("sys.menu.charge_point.user_management"),children:t.jsx(h,{})},{key:"/charge-point?type=brand-model-management",label:e("sys.menu.charge_point.brand_model_management"),children:t.jsx(s,{})}],i=`${o.pathname}${o.search}`;return t.jsx(y,{defaultActiveKey:"/charge-point/monitoring",activeKey:o.search.includes("?type=")?i:"/charge-point?type=monitoring",items:a,onChange:r})}export{J as default};