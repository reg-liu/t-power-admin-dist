import{j as s}from"./index-BG77QkcC.js";import{c as K}from"./index.modern-DDXp5BPH.js";import{r as n}from"./vendor-react-DcqtUZ_G.js";import{E as Q,i as j,w as C,S as v}from"./vendor-antd-DC1bX4vL.js";const G="AIzaSyCQc86pm5M44jtKOZydqmr329R3aQszvaw";function I(){const[m,u]=n.useState(!1);return n.useEffect(()=>{if(document.querySelector('script[src^="https://maps.googleapis.com/maps/api/js"]'))u(!0);else{const a=document.createElement("script");a.src=`https://maps.googleapis.com/maps/api/js?key=${G}&libraries=places`,a.async=!0,a.onload=()=>u(!0),document.body.appendChild(a)}},[]),m}const{Option:N}=C;function D({visible:m,defaultPosition:u,onClose:a,onSelect:O}){const[L,g]=n.useState(""),[M,_]=n.useState([]),[S,b]=n.useState(null),[A,E]=n.useState({lat:-37.975,lng:145.238}),[R,x]=n.useState(!1),f=n.useRef(null),h=n.useRef(null),y=I();n.useEffect(()=>{y&&window.google&&(f.current=new window.google.maps.places.AutocompleteService,h.current=new window.google.maps.Geocoder)},[y]);const $=e=>{g(e),e.length>2&&f.current?(x(!0),f.current.getPlacePredictions({input:e},(o,i)=>{i===window.google.maps.places.PlacesServiceStatus.OK&&_(o),x(!1)})):_([])},k=e=>{h.current&&h.current.geocode({placeId:e},(o,i)=>{if(i==="OK"&&o[0]){const c=o[0],{lat:d,lng:p}=c.geometry.location,r=c.address_components,t={cp_address:c.formatted_address,latlng:`${d()},${p()}`,cp_country:r.find(l=>l.types.includes("country"))?.long_name,cp_state:r.find(l=>l.types.includes("administrative_area_level_1"))?.long_name,cp_suburb:r.find(l=>l.types.includes("locality"))?.long_name,cp_postcode:r.find(l=>l.types.includes("postal_code"))?.long_name},z=c.formatted_address||P(c);E({lat:d(),lng:p()}),b(t),g(z)}})},P=e=>{const o=e.address_components,i=o.find(t=>t.types.includes("country"))?.short_name||"",c=o.find(t=>t.types.includes("administrative_area_level_1"))?.short_name||"",d=o.find(t=>t.types.includes("administrative_area_level_2"))?.short_name||"",p=o.find(t=>t.types.includes("locality"))?.short_name||"",r=o.find(t=>t.types.includes("postal_code"))?.long_name||"";return`${i}, ${c}, ${d}, ${p}, ${r}`},w=()=>{S&&O(S),a()};return s.jsxs(Q,{title:"Location Picker",open:m,onOk:w,onCancel:a,width:800,styles:{body:{height:"600px",display:"flex",flexDirection:"column"}},footer:[s.jsxs("div",{className:"footer-normal-btns",children:[s.jsx(j,{onClick:a,children:"Cancel"},"cancel"),s.jsx(j,{type:"primary",onClick:w,children:"Confirm"},"confirm")]},"location-footer")],children:[s.jsx("div",{children:s.jsx(C,{showSearch:!0,value:L,placeholder:"Search for a location",defaultActiveFirstOption:!1,filterOption:!1,onSearch:$,onChange:k,notFoundContent:R?s.jsx(v,{size:"small"}):null,style:{width:"100%"},children:M.map(e=>s.jsx(N,{value:e.place_id,children:e.description},e.place_id))})}),s.jsx("div",{className:"relative mt-3 flex-grow",children:y?s.jsx(K,{bootstrapURLKeys:{key:"AIzaSyCQc86pm5M44jtKOZydqmr329R3aQszvaw"},center:A,zoom:16,style:{height:"100%",width:"100%"}}):s.jsx(v,{className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"})})]})}export{D as M};
