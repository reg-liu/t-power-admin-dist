import{a as p,j as t}from"./index-BEe1wG_p.js";import s from"./index-CxywyzYK.js";import g from"./index-CAFoeJFQ.js";import c from"./index-C8QwYZtZ.js";import h from"./index-BW-NE8zn.js";import{f as l,u}from"./vendor-react-DcqtUZ_G.js";import{f as y}from"./vendor-antd-CLI4Tk7L.js";import"./vendor-ui-BASYQBt4.js";import"./vendor-utils-BSYCMmfc.js";import"./brandModelDetail-QIkSTgCF.js";import"./editBrand-CI1Sc7EY.js";import"./addChargepoint-LFicxn8J.js";import"./detail-wa3kitUu.js";import"./editChargepoint-Dww7ClZ3.js";import"./detail-_7FCs9HM.js";import"./LineChart-CRIF6n4R.js";import"./isEqual-0-1QZRPE.js";import"./vendor-charts-CCrp_OZH.js";import"./editConnector-CoCtrCiu.js";import"./setChargeProfile-2zWs09kY.js";import"./start-B2F_KAxI.js";import"./addChargepoint-DNbvkPKd.js";import"./addUserChargepoint-CaHvr3u3.js";import"./positionPicker-XruHarAi.js";import"./index.modern-DVWZ3PXQ.js";import"./chargepointUserDetail-DnnYgBux.js";import"./editLocation-B5EvaHQl.js";import"./unbindUser-oBP_6eYg.js";function J(){const{t:e}=p(),o=l(),n=u(),r=m=>{o(m)},a=[{key:"/charge-point?type=monitoring",label:e("sys.menu.charge_point.control_monitoring"),children:t.jsx(c,{})},{key:"/charge-point?type=chargepoint-management",label:e("sys.menu.charge_point.chargepoint_management"),children:t.jsx(g,{})},{key:"/charge-point?type=user-management",label:e("sys.menu.charge_point.user_management"),children:t.jsx(h,{})},{key:"/charge-point?type=brand-model-management",label:e("sys.menu.charge_point.brand_model_management"),children:t.jsx(s,{})}],i=`${n.pathname}${n.search}`;return t.jsx(y,{defaultActiveKey:"/charge-point/monitoring",activeKey:n.search.includes("?type=")?i:"/charge-point?type=monitoring",items:a,onChange:r})}export{J as default};