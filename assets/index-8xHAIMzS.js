import{Z,$ as B,a0 as m,a1 as D,a2 as j,a3 as X,a4 as k,a5 as H,a6 as ee,a7 as te,a8 as se,a9 as V,aa as J,ab as re,ac as ie,ad as ae,j as r,P as I,I as q,w as K,ae as ne}from"./index-BEe1wG_p.js";import{r as f}from"./vendor-react-DcqtUZ_G.js";import{O as b,j as oe,l as E,a1 as le,a2 as T,I as z,w as Q,k as F,H as ce,P as he,J as ue,ap as de,z as P}from"./vendor-antd-CLI4Tk7L.js";import fe from"./organization-chart-CYRhvmk4.js";import"./vendor-ui-BASYQBt4.js";import"./vendor-utils-BSYCMmfc.js";var pe=class extends Z{constructor(e,t){super(),this.options=t,this.#s=e,this.#r=null,this.#i=B(),this.options.experimental_prefetchInRender||this.#i.reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(t)}#s;#e=void 0;#p=void 0;#t=void 0;#n;#h;#i;#r;#m;#u;#d;#o;#l;#a;#f=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.#e.addObserver(this),W(this.#e,this.options)?this.#c():this.updateResult(),this.#x())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return N(this.#e,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return N(this.#e,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#v(),this.#R(),this.#e.removeObserver(this)}setOptions(e,t){const s=this.options,i=this.#e;if(this.options=this.#s.defaultQueryOptions(e),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof m(this.options.enabled,this.#e)!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#O(),this.#e.setOptions(this.options),s._defaulted&&!D(this.options,s)&&this.#s.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#e,observer:this});const c=this.hasListeners();c&&$(this.#e,i,this.options,s)&&this.#c(),this.updateResult(t),c&&(this.#e!==i||m(this.options.enabled,this.#e)!==m(s.enabled,this.#e)||j(this.options.staleTime,this.#e)!==j(s.staleTime,this.#e))&&this.#b();const l=this.#g();c&&(this.#e!==i||m(this.options.enabled,this.#e)!==m(s.enabled,this.#e)||l!==this.#a)&&this.#y(l)}getOptimisticResult(e){const t=this.#s.getQueryCache().build(this.#s,e),s=this.createResult(t,e);return be(this,s)&&(this.#t=s,this.#h=this.options,this.#n=this.#e.state),s}getCurrentResult(){return this.#t}trackResult(e,t){const s={};return Object.keys(e).forEach(i=>{Object.defineProperty(s,i,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(i),t?.(i),e[i])})}),s}trackProp(e){this.#f.add(e)}getCurrentQuery(){return this.#e}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){const t=this.#s.defaultQueryOptions(e),s=this.#s.getQueryCache().build(this.#s,t);return s.fetch().then(()=>this.createResult(s,t))}fetch(e){return this.#c({...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#t))}#c(e){this.#O();let t=this.#e.fetch(this.options,e);return e?.throwOnError||(t=t.catch(X)),t}#b(){this.#v();const e=j(this.options.staleTime,this.#e);if(k||this.#t.isStale||!H(e))return;const s=ee(this.#t.dataUpdatedAt,e)+1;this.#o=setTimeout(()=>{this.#t.isStale||this.updateResult()},s)}#g(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.#e):this.options.refetchInterval)??!1}#y(e){this.#R(),this.#a=e,!(k||m(this.options.enabled,this.#e)===!1||!H(this.#a)||this.#a===0)&&(this.#l=setInterval(()=>{(this.options.refetchIntervalInBackground||te.isFocused())&&this.#c()},this.#a))}#x(){this.#b(),this.#y(this.#g())}#v(){this.#o&&(clearTimeout(this.#o),this.#o=void 0)}#R(){this.#l&&(clearInterval(this.#l),this.#l=void 0)}createResult(e,t){const s=this.#e,i=this.options,c=this.#t,l=this.#n,o=this.#h,h=e!==s?e.state:this.#p,{state:a}=e;let n={...a},x=!1,d;if(t._optimisticResults){const u=this.hasListeners(),v=!u&&W(e,t),R=u&&$(e,s,t,i);(v||R)&&(n={...n,...se(a.data,e.options)}),t._optimisticResults==="isRestoring"&&(n.fetchStatus="idle")}let{error:M,errorUpdatedAt:L,status:y}=n;if(t.select&&n.data!==void 0)if(c&&n.data===l?.data&&t.select===this.#m)d=this.#u;else try{this.#m=t.select,d=t.select(n.data),d=V(c?.data,d,t),this.#u=d,this.#r=null}catch(u){this.#r=u}else d=n.data;if(t.placeholderData!==void 0&&d===void 0&&y==="pending"){let u;if(c?.isPlaceholderData&&t.placeholderData===o?.placeholderData)u=c.data;else if(u=typeof t.placeholderData=="function"?t.placeholderData(this.#d?.state.data,this.#d):t.placeholderData,t.select&&u!==void 0)try{u=t.select(u),this.#r=null}catch(v){this.#r=v}u!==void 0&&(y="success",d=V(c?.data,u,t),x=!0)}this.#r&&(M=this.#r,d=this.#u,L=Date.now(),y="error");const C=n.fetchStatus==="fetching",w=y==="pending",S=y==="error",_=w&&C,A=d!==void 0,p={status:y,fetchStatus:n.fetchStatus,isPending:w,isSuccess:y==="success",isError:S,isInitialLoading:_,isLoading:_,data:d,dataUpdatedAt:n.dataUpdatedAt,error:M,errorUpdatedAt:L,failureCount:n.fetchFailureCount,failureReason:n.fetchFailureReason,errorUpdateCount:n.errorUpdateCount,isFetched:n.dataUpdateCount>0||n.errorUpdateCount>0,isFetchedAfterMount:n.dataUpdateCount>h.dataUpdateCount||n.errorUpdateCount>h.errorUpdateCount,isFetching:C,isRefetching:C&&!w,isLoadingError:S&&!A,isPaused:n.fetchStatus==="paused",isPlaceholderData:x,isRefetchError:S&&A,isStale:U(e,t),refetch:this.refetch,promise:this.#i};if(this.options.experimental_prefetchInRender){const u=O=>{p.status==="error"?O.reject(p.error):p.data!==void 0&&O.resolve(p.data)},v=()=>{const O=this.#i=p.promise=B();u(O)},R=this.#i;switch(R.status){case"pending":e.queryHash===s.queryHash&&u(R);break;case"fulfilled":(p.status==="error"||p.data!==R.value)&&v();break;case"rejected":(p.status!=="error"||p.error!==R.reason)&&v();break}}return p}updateResult(e){const t=this.#t,s=this.createResult(this.#e,this.options);if(this.#n=this.#e.state,this.#h=this.options,this.#n.data!==void 0&&(this.#d=this.#e),D(s,t))return;this.#t=s;const i={},c=()=>{if(!t)return!0;const{notifyOnChangeProps:l}=this.options,o=typeof l=="function"?l():l;if(o==="all"||!o&&!this.#f.size)return!0;const g=new Set(o??this.#f);return this.options.throwOnError&&g.add("error"),Object.keys(this.#t).some(h=>{const a=h;return this.#t[a]!==t[a]&&g.has(a)})};e?.listeners!==!1&&c()&&(i.listeners=!0),this.#j({...i,...e})}#O(){const e=this.#s.getQueryCache().build(this.#s,this.options);if(e===this.#e)return;const t=this.#e;this.#e=e,this.#p=e.state,this.hasListeners()&&(t?.removeObserver(this),e.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#x()}#j(e){J.batch(()=>{e.listeners&&this.listeners.forEach(t=>{t(this.#t)}),this.#s.getQueryCache().notify({query:this.#e,type:"observerResultsUpdated"})})}};function me(e,t){return m(t.enabled,e)!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&t.retryOnMount===!1)}function W(e,t){return me(e,t)||e.state.data!==void 0&&N(e,t,t.refetchOnMount)}function N(e,t,s){if(m(t.enabled,e)!==!1){const i=typeof s=="function"?s(e):s;return i==="always"||i!==!1&&U(e,t)}return!1}function $(e,t,s,i){return(e!==t||m(i.enabled,e)===!1)&&(!s.suspense||e.state.status!=="error")&&U(e,s)}function U(e,t){return m(t.enabled,e)!==!1&&e.isStaleByTime(j(t.staleTime,e))}function be(e,t){return!D(e.getCurrentResult(),t)}var Y=f.createContext(!1),ge=()=>f.useContext(Y);Y.Provider;function ye(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var xe=f.createContext(ye()),ve=()=>f.useContext(xe),Re=(e,t)=>{(e.suspense||e.throwOnError)&&(t.isReset()||(e.retryOnMount=!1))},Oe=e=>{f.useEffect(()=>{e.clearReset()},[e])},je=({result:e,errorResetBoundary:t,throwOnError:s,query:i})=>e.isError&&!t.isReset()&&!e.isFetching&&i&&re(s,[e.error,i]),Ce=e=>{e.suspense&&(e.staleTime===void 0&&(e.staleTime=1e3),typeof e.gcTime=="number"&&(e.gcTime=Math.max(e.gcTime,1e3)))},we=(e,t)=>e.isLoading&&e.isFetching&&!t,Se=(e,t)=>e?.suspense&&t.isPending,G=(e,t,s)=>t.fetchOptimistic(e).catch(()=>{s.clearReset()});function Ie(e,t,s){const i=ie(),c=ge(),l=ve(),o=i.defaultQueryOptions(e);i.getDefaultOptions().queries?._experimental_beforeQuery?.(o),o._optimisticResults=c?"isRestoring":"optimistic",Ce(o),Re(o,l),Oe(l);const g=!i.getQueryCache().get(o.queryHash),[h]=f.useState(()=>new t(i,o)),a=h.getOptimisticResult(o);if(f.useSyncExternalStore(f.useCallback(n=>{const x=c?()=>{}:h.subscribe(J.batchCalls(n));return h.updateResult(),x},[h,c]),()=>h.getCurrentResult(),()=>h.getCurrentResult()),f.useEffect(()=>{h.setOptions(o,{listeners:!1})},[o,h]),Se(o,a))throw G(o,h,l);if(je({result:a,errorResetBoundary:l,throwOnError:o.throwOnError,query:i.getQueryCache().get(o.queryHash)}))throw a.error;return i.getDefaultOptions().queries?._experimental_afterQuery?.(o,a),o.experimental_prefetchInRender&&!k&&we(a,c)&&(g?G(o,h,l):i.getQueryCache().get(o.queryHash)?.promise)?.catch(ae).finally(()=>{h.updateResult()}),o.notifyOnChangeProps?a:h.trackResult(a)}function Ee(e,t){return Ie(e,pe)}function Ue(){const[e]=b.useForm(),[t,s]=f.useState({formValue:{id:"",name:"",status:"enable"},title:"New",show:!1,onOk:()=>{s(a=>({...a,show:!1}))},onCancel:()=>{s(a=>({...a,show:!1}))}}),i=[{title:"Name",dataIndex:"name",width:300},{title:"Order",dataIndex:"order",align:"center",width:60},{title:"Status",dataIndex:"status",align:"center",width:120,render:a=>r.jsx(I,{color:a==="enable"?"success":"error",children:a})},{title:"Desc",dataIndex:"desc",align:"center",width:300},{title:"Action",key:"operation",align:"center",width:100,render:(a,n)=>r.jsxs("div",{className:"flex w-full justify-center text-gray",children:[r.jsx(q,{onClick:()=>h(n),children:r.jsx(K,{icon:"solar:pen-bold-duotone",size:18})}),r.jsx(he,{title:"Delete the Organization",okText:"Yes",cancelText:"No",placement:"left",children:r.jsx(q,{children:r.jsx(K,{icon:"mingcute:delete-2-fill",size:18,className:"text-error"})})})]})}],c={onChange:(a,n)=>{},onSelect:(a,n,x)=>{},onSelectAll:(a,n,x)=>{}},{data:l}=Ee({queryKey:["orgs"],queryFn:ne.getOrgList}),o=()=>{e.resetFields()},g=()=>{s(a=>({...a,show:!0,title:"Create New",formValue:{...a.formValue,id:"",name:"",order:1,desc:"",status:"enable"}}))},h=a=>{s(n=>({...n,show:!0,title:"Edit",formValue:a}))};return r.jsxs(oe,{direction:"vertical",size:"large",className:"w-full",children:[r.jsx(E,{children:r.jsx(b,{form:e,children:r.jsxs(le,{gutter:[16,16],children:[r.jsx(T,{span:24,lg:6,children:r.jsx(b.Item,{label:"Name",name:"name",className:"!mb-0",children:r.jsx(z,{})})}),r.jsx(T,{span:24,lg:6,children:r.jsx(b.Item,{label:"Status",name:"status",className:"!mb-0",children:r.jsxs(Q,{children:[r.jsx(Q.Option,{value:"enable",children:r.jsx(I,{color:"success",children:"Enable"})}),r.jsx(Q.Option,{value:"disable",children:r.jsx(I,{color:"error",children:"Disable"})})]})})}),r.jsx(T,{span:24,lg:12,children:r.jsxs("div",{className:"flex justify-end",children:[r.jsx(F,{onClick:o,children:"Reset"}),r.jsx(F,{type:"primary",className:"ml-4",children:"Search"})]})})]})})}),r.jsx(E,{title:"Organization List",extra:r.jsx(F,{type:"primary",onClick:g,children:"New"}),children:r.jsx(ce,{rowKey:"id",size:"small",scroll:{x:"max-content"},pagination:!1,columns:i,dataSource:l,rowSelection:{...c}})}),r.jsx(E,{title:"Organization Chart",children:r.jsx(fe,{organizations:l})}),r.jsx(Te,{...t})]})}function Te({title:e,show:t,formValue:s,onOk:i,onCancel:c}){const[l]=b.useForm();return f.useEffect(()=>{l.setFieldsValue({...s})},[s,l]),r.jsx(ue,{title:e,open:t,onOk:i,onCancel:c,children:r.jsxs(b,{initialValues:s,form:l,labelCol:{span:4},wrapperCol:{span:18},layout:"horizontal",children:[r.jsx(b.Item,{label:"Name",name:"name",required:!0,children:r.jsx(z,{})}),r.jsx(b.Item,{label:"Order",name:"order",required:!0,children:r.jsx(de,{style:{width:"100%"}})}),r.jsx(b.Item,{label:"Status",name:"status",required:!0,children:r.jsxs(P.Group,{optionType:"button",buttonStyle:"solid",children:[r.jsx(P,{value:"enable",children:" Enable "}),r.jsx(P,{value:"disable",children:" Disable "})]})}),r.jsx(b.Item,{label:"Desc",name:"desc",children:r.jsx(z.TextArea,{})})]})})}export{Ue as default};
