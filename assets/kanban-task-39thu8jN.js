import{p as N,c as p,N as w,R as S,C as $,j as e,J as z,w as r,I as d,S as m,y as b}from"./index-zcuIhQnM.js";import{r as j}from"./vendor-react-BcJS7s_i.js";import{d as M}from"./vendor-ui-DPkccqlC.js";import C from"./task-detail-D2bR4KP9.js";import{N as O,ae as h,i as A,w as B}from"./vendor-antd-k76tQrhI.js";var t=(s=>(s.LOW="Low",s.MEDIUM="Medium",s.HIGH="High",s))(t||{}),E=(s=>(s.frontend="FrontEnd",s.backend="BackEnd",s.fullstack="FullStack",s.DevOps="DevOps",s.AI="AI",s.DBA="DBA",s.UI="UI",s.UE="UE",s.QA="QA",s))(E||{}),P=(s=>(s.COLUMN="column",s.TASK="task",s))(P||{});function U({index:s,task:o}){const{themeMode:n}=N(),[i,x]=j.useState(!1),a=p(),f={backdropFilter:"blur(20px)",backgroundImage:`url("${w}"), url("${S}")`,backgroundRepeat:"no-repeat, no-repeat",backgroundColor:$(a.colorBgContainer).alpha(.9).toString(),backgroundPosition:"right top, left bottom",backgroundSize:"50, 50%"},{id:v,title:I,comments:k=[],attachments:l=[],priority:y,assignee:g}=o;return e.jsxs(e.Fragment,{children:[e.jsx(z,{draggableId:v,index:s,children:(c,D)=>e.jsx(L,{ref:c.innerRef,...c.draggableProps,...c.dragHandleProps,$isDragging:D.isDragging,$themeMode:n,children:e.jsxs("div",{children:[l.length>0&&e.jsx(O,{src:l[0],alt:"",className:"mb-4 rounded-md"}),e.jsxs("div",{onClick:()=>x(!0),children:[e.jsx("div",{className:"flex justify-end",children:e.jsx(H,{taskPriority:y})}),e.jsx("div",{children:I}),e.jsxs("div",{className:"mt-4 flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center text-base text-gray-600",children:[e.jsx(r,{icon:"uim:comment-dots",size:16,className:"mr-1"}),e.jsx("span",{className:"text-xs",children:k.length}),e.jsx(r,{icon:"iconamoon:attachment-bold",size:16,className:"ml-2 mr-1"}),e.jsx("span",{className:"text-xs",children:l.length})]}),g?.length&&e.jsx(h.Group,{max:{count:3,style:{color:a.colorPrimary,backgroundColor:a.colorPrimaryBg}},children:g.map(u=>e.jsx(h,{src:u},u))})]})]})]})})}),e.jsx(A,{placement:"right",title:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{children:e.jsx(B,{defaultValue:"To do",size:"large",variant:"borderless",dropdownStyle:{width:"auto"},options:[{value:"To do",label:"To do"},{value:"In progress",label:"In progress"},{value:"Done",label:"Done"}]})}),e.jsxs("div",{className:"flex text-gray",children:[e.jsx(d,{children:e.jsx(r,{icon:"solar:like-bold",size:20,color:a.colorSuccess})}),e.jsx(d,{children:e.jsx(r,{icon:"solar:trash-bin-trash-bold",size:20})}),e.jsx(d,{children:e.jsx(r,{icon:"fontisto:more-v-a",size:20})})]})]}),onClose:()=>x(!1),open:i,closable:!1,width:420,styles:{body:{padding:0},mask:{backgroundColor:"transparent"}},style:f,children:e.jsx(C,{task:o})})]})}const _=j.memo(U);function H({taskPriority:s}){const{colorSuccess:o,colorInfo:n,colorWarning:i}=p();switch(s){case t.HIGH:return e.jsx(m,{icon:"ic_rise",size:20,color:i,className:""});case t.MEDIUM:return e.jsx(m,{icon:"ic_rise",size:20,color:o,className:"rotate-90"});case t.LOW:return e.jsx(m,{icon:"ic_rise",size:20,color:n,className:"rotate-180"})}}const L=M.div`
  width: 248px;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  font-weight: 400;
  font-size: 12px;
  background-color: ${s=>s.$themeMode===b.Light?s.$isDragging?"rgba(255, 255, 255, 0.48)":"rgb(255, 255, 255)":s.$isDragging?"rgba(22, 28, 36, 0.48)":"rgb(22, 28, 36)"};
  backdrop-filter: ${s=>s.$isDragging?"blur(6px)":""};

  &:hover {
    box-shadow: ${s=>s.$themeMode===b.Light?"rgba(145, 158, 171, 0.16) 0px 20px 40px -4px":"rgba(0, 0, 0, 0.16) 0px 20px 40px -4px"};
  }
`,Q=Object.freeze(Object.defineProperty({__proto__:null,default:_},Symbol.toStringTag,{value:"Module"}));export{P as D,_ as K,t as T,E as a,Q as k};
