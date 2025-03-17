import{j as s,f as v}from"./index-CpU-mLyV.js";import{r as d}from"./vendor-react-BcJS7s_i.js";import{a as k}from"./format-number-SN7d1Fn0.js";import{d as c}from"./vendor-ui-DPkccqlC.js";import{s as p,v as T,U as y}from"./vendor-antd-B62eGpCx.js";const W=c.div`
  .ant-upload {
    border: none !important;
  }
  .ant-upload-list {
    display: ${a=>a.$thumbnail?"flex":"block"};
    flex-wrap: wrap;
  }
`,O=c.div`
  transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  .ant-upload,
  .ant-upload-select {
    border: none !important;
  }
`,X=c.div`
  .ant-upload {
    border: none !important;
  }
  .ant-upload-list {
    display: none;
  }
`,j=["pdf"],U=["txt"],R=["psd"],A=["doc","docx"],M=["xls","xlsx"],w=["zip","rar","iso"],F=["ai","esp"],P=["ppt","pptx"],z=["wav","aif","mp3","aac"],I=["jpg","jpeg","gif","bmp","png","svg"],S=["m4v","avi","mpg","mp4","webm"];function E(a){let e;switch(!0){case j.includes(t(a)):e="pdf";break;case U.includes(t(a)):e="txt";break;case R.includes(t(a)):e="psd";break;case A.includes(t(a)):e="word";break;case M.includes(t(a)):e="excel";break;case w.includes(t(a)):e="zip";break;case F.includes(t(a)):e="ai";break;case P.includes(t(a)):e="ppt";break;case z.includes(t(a)):e="audio";break;case I.includes(t(a)):e="img";break;case S.includes(t(a)):e="video";break;default:e=t(a)}return e}function $(a){let e;switch(E(a)){case"txt":e="ic_file_txt";break;case"zip":e="ic_file_zip";break;case"audio":e="ic_file_audio";break;case"video":e="ic_file_video";break;case"word":e="ic_file_word";break;case"excel":e="ic_file_excel";break;case"ppt":e="ic_file_ppt";break;case"pdf":e="ic_file_pdf";break;case"psd":e="ic_file_psd";break;case"ai":e="ic_file_ai";break;case"img":e="ic_file_img";break;case"folder":e="ic_folder";break;default:e="ic_file"}return e}function t(a=""){return a&&a.split(".").pop()||"folder"}function L(a){const e=a.type==="image/jpeg"||a.type==="image/png";e||p.error("You can only upload JPG/PNG file!");const r=a.size/1024/1024<2;return r||p.error("Image must smaller than 2MB!"),e&&r}function B(a){const e=new Blob([a]);return URL.createObjectURL(e)}function V({helperText:a,defaultAvatar:e="",...r}){const[l,u]=d.useState(e),[n,f]=d.useState(!1),i=o=>{f(o)},b=o=>{o.file.status!=="uploading"&&["done","error"].includes(o.file.status)&&u(B(o.file.originFileObj))},m=s.jsx("img",{src:l,alt:"",className:"absolute rounded-full"}),x=s.jsxs("div",{style:{backgroundColor:!l||n?"rgba(22, 28, 36, 0.64)":"transparent",color:"#fff"},className:"absolute z-10 flex h-full w-full flex-col items-center justify-center",children:[s.jsx(v,{icon:"solar:camera-add-bold",size:32}),s.jsx("div",{className:"mt-1 text-xs",children:"Upload Photo"})]}),_=s.jsxs("div",{className:"relative flex h-full w-full items-center justify-center overflow-hidden rounded-full",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[l?m:null,!l||n?x:null]}),g=s.jsxs(T.Text,{type:"secondary",style:{fontSize:12},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",s.jsx("br",{})," max size of ",k(3145728)]}),h=s.jsx("div",{className:"text-center",children:a||g});return s.jsxs(O,{children:[s.jsx(y,{name:"avatar",showUploadList:!1,listType:"picture-circle",className:"avatar-uploader !flex items-center justify-center",...r,beforeUpload:L,onChange:b,children:_}),h]})}export{W as S,V as U,E as a,B as b,X as c,$ as g};
