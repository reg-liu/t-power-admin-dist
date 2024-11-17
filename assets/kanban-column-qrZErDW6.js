import{N as S,O as D,Q as E,m as z,T as K,j as e,F as L,o,E as M,l as u}from"./index-CsPTJzJh.js";import{r as l}from"./vendor-react-DcqtUZ_G.js";import{D as _,K as A,T as F}from"./kanban-task-DZ94g7fI.js";import{I as b,D as V,k as h}from"./vendor-antd-Dnh3Ma4s.js";var B=E?window:null,j=function(t){return!!t.addEventListener},g=function(t){return!!t.on},H=function(t,s,n,r){n===void 0&&(n=B),l.useEffect(function(){if(s&&n)return j(n)?S(n,t,s,r):g(n)&&n.on(t,s,r),function(){j(n)?D(n,t,s,r):g(n)&&n.off(t,s,r)}},[t,s,n,JSON.stringify(r)])};function G({index:t,column:s,tasks:n,createTask:r,clearColumn:k,deleteColumn:y,renameColumn:T}){const{themeMode:N}=z(),C={height:"100%",padding:"16px",borderRadius:"16px",backgroundColor:N===K.Light?"rgb(244, 246, 248)":"rgba(145, 158, 171, 0.12)"},v=[{key:"1",label:e.jsxs("div",{className:"flex items-center text-gray",onClick:()=>{p(!0)},children:[e.jsx(o,{icon:"solar:pen-bold"}),e.jsx("span",{className:"ml-2",children:"rename"})]})},{key:"2",label:e.jsxs("div",{className:"flex items-center text-gray",onClick:()=>k(s.id),children:[e.jsx(o,{icon:"solar:eraser-bold"}),e.jsx("span",{className:"ml-2",children:"clear"})]})},{key:"3",label:e.jsxs("div",{className:"flex items-center text-warning",onClick:()=>y(s.id),children:[e.jsx(o,{icon:"solar:trash-bin-trash-bold"}),e.jsx("span",{className:"ml-2",children:"delete"})]})}],[I,f]=l.useState(!1),c=l.useRef(null);H("click",i=>{if(c.current&&!c.current.input?.contains(i.target)){const a=c.current.input?.value;a&&r(s.id,{id:u.string.uuid(),title:a,reporter:u.image.avatarGitHub(),priority:u.helpers.enumValue(F)}),f(!1)}if(d.current&&!d.current.input?.contains(i.target)){const a=d.current.input?.value;a&&T({...s,title:a}),p(!1)}});const[R,p]=l.useState(!1),d=l.useRef(null),[w,x]=l.useState(!1),O=i=>{x(!1),i.domEvent.stopPropagation()};return e.jsx(L,{draggableId:s.id,index:t,children:i=>e.jsx("div",{ref:i.innerRef,...i.draggableProps,children:e.jsxs("div",{style:C,children:[e.jsxs("header",{...i.dragHandleProps,className:"mb-4 flex select-none items-center justify-between text-base font-semibold",children:[R?e.jsx(b,{ref:d,size:"large",autoFocus:!0}):s.title,e.jsx(V,{open:w,onOpenChange:a=>x(a),menu:{items:v,onClick:O},placement:"bottomRight",trigger:["click"],children:e.jsx(h,{shape:"circle",type:"text",className:"!text-gray",children:e.jsx(o,{icon:"dashicons:ellipsis"})})})]}),e.jsx(M,{droppableId:s.id,type:_.TASK,children:a=>e.jsxs("main",{ref:a.innerRef,...a.droppableProps,className:"min-h-[10px]",children:[n.map((m,P)=>e.jsx(A,{task:m,index:P},m.id)),a.placeholder]})}),e.jsx("footer",{className:"w-[248px]",children:I?e.jsx(b,{ref:c,size:"large",placeholder:"Task Name",autoFocus:!0}):e.jsxs(h,{onClick:a=>{a.stopPropagation(),f(!0)},className:"!flex items-center justify-center !text-xs !font-medium",type:"text",block:!0,size:"large",children:[e.jsx(o,{icon:"carbon:add",size:20}),e.jsx("span",{children:"Add Task"})]})})]})})})}const X=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));export{G as K,X as k,H as u};
