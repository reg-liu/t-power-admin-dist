import{a as p,j as t}from"./index--cqiSFsN.js";import s from"./index-BHYZDmyV.js";import c from"./index-Cw383tKn.js";import g from"./index-CmNrtpSR.js";import{f as h,u as l}from"./vendor-react-DcqtUZ_G.js";import{f as u}from"./vendor-antd-DkxSEqSW.js";import"./vendor-ui-BASYQBt4.js";import"./vendor-utils-BnlEJVuT.js";import"./brandModelDetail-Cty20XxS.js";import"./editBrand-ClKGDKmi.js";import"./detail-BpO_Mcra.js";import"./isEqual-0-1QZRPE.js";import"./vendor-charts-CCrp_OZH.js";import"./editConnector-CC1nLByf.js";import"./setChargeProfile-_AJf8dN_.js";import"./start-CID6G6JU.js";import"./addChargepoint-BIrpbFlb.js";import"./addUserChargepoint-BSBk_Tfx.js";import"./chargepointUserDetail-LeiBDhps.js";import"./editLocation-6ConQp4q.js";function R(){const{t:e}=p(),o=h(),n=l(),a=m=>{o(m)},r=[{key:"/charge-point?type=monitoring",label:e("sys.menu.charge_point.control_monitoring"),children:t.jsx(c,{})},{key:"/charge-point?type=user-management",label:e("sys.menu.charge_point.user_management"),children:t.jsx(g,{})},{key:"/charge-point?type=brand-model-management",label:e("sys.menu.charge_point.brand_model_management"),children:t.jsx(s,{})}],i=`${n.pathname}${n.search}`;return t.jsx(u,{defaultActiveKey:"/charge-point/monitoring",activeKey:n.search.includes("?type=")?i:"/charge-point?type=monitoring",items:r,onChange:a})}export{R as default};