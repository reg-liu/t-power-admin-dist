import{j as i,B as b,E as h,F as y}from"./index-qOmAfSnl.js";import{r as f}from"./vendor-react-BcJS7s_i.js";import"./vendor-ui-DPkccqlC.js";import"./vendor-antd-DmtkV1Ch.js";import"./vendor-utils-BKiv1F2M.js";const p=(e,t=0)=>Array.from({length:e},(a,n)=>n).map(a=>({id:`item-${a+t}-${new Date().getTime()}`,content:`item ${a+t}`})),j=(e,t,a)=>{const n=Array.from(e),[r]=n.splice(t,1);return n.splice(a,0,r),n},I=(e,t,a,n)=>{const r=Array.from(e),o=Array.from(t),[d]=r.splice(a.index,1);o.splice(n.index,0,d);const s={};return s[a.droppableId]=r,s[n.droppableId]=o,s},u=8,C=(e,t)=>({userSelect:"none",padding:u*2,margin:`0 0 ${u}px 0`,background:e?"lightgreen":"grey",...t}),D=e=>({background:e?"lightblue":"lightgrey",padding:u,width:250});function $(){const[e,t]=f.useState([p(10),p(5,10)]),a=n=>{const{source:r,destination:o}=n;if(!o)return;const d=+r.droppableId,s=+o.droppableId;if(d===s){const c=j(e[d],r.index,o.index),l=[...e];l[d]=c,t(l)}else{const c=I(e[d],e[s],r,o),l=[...e];l[d]=c[d],l[s]=c[s],t(l.filter(g=>g.length))}};return i.jsxs("div",{children:[i.jsx("button",{type:"button",onClick:()=>{t([...e,[]])},children:"Add new group"}),i.jsx("button",{type:"button",onClick:()=>{t([...e,p(1)])},children:"Add new item"}),i.jsx("div",{style:{display:"flex"},children:i.jsx(b,{onDragEnd:()=>a,children:e.map((n,r)=>i.jsx(h,{droppableId:`${r}`,children:(o,d)=>i.jsxs("div",{ref:o.innerRef,style:D(d.isDraggingOver),...o.droppableProps,children:[n.map((s,c)=>i.jsx(y,{draggableId:s.id,index:c,children:(l,g)=>i.jsx("div",{ref:l.innerRef,...l.draggableProps,...l.dragHandleProps,style:C(g.isDragging,l.draggableProps.style),children:i.jsxs("div",{style:{display:"flex",justifyContent:"space-around"},children:[s.content,i.jsx("button",{type:"button",onClick:()=>{const m=[...e];m[r].splice(c,1),t(m.filter(x=>x.length))},children:"delete"})]})})},s.id)),o.placeholder]})},r))})})]})}export{$ as default};
