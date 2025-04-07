import{c as xe,s as we,j as _,x as ne,C as Z}from"./index-b2nD6dCM.js";import{r as B}from"./vendor-react-BcJS7s_i.js";import{d as _e}from"./vendor-ui-DPkccqlC.js";import"./vendor-antd-DmtkV1Ch.js";import"./vendor-utils-BKiv1F2M.js";function F(e,r){return r||(r=e.slice(0)),e.raw=r,e}var Ge=function(){function e(t){var n=this;this._insertTag=function(a){n.container.insertBefore(a,n.tags.length===0?n.insertionPoint?n.insertionPoint.nextSibling:n.prepend?n.container.firstChild:n.before:n.tags[n.tags.length-1].nextSibling),n.tags.push(a)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(t){t.forEach(this._insertTag)},r.insert=function(t){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(i){var o=document.createElement("style");return o.setAttribute("data-emotion",i.key),i.nonce!==void 0&&o.setAttribute("nonce",i.nonce),o.appendChild(document.createTextNode("")),o.setAttribute("data-s",""),o}(this));var n=this.tags[this.tags.length-1];if(this.isSpeedy){var a=function(i){if(i.sheet)return i.sheet;for(var o=0;o<document.styleSheets.length;o++)if(document.styleSheets[o].ownerNode===i)return document.styleSheets[o]}(n);try{a.insertRule(t,a.cssRules.length)}catch{}}else n.appendChild(document.createTextNode(t));this.ctr++},r.flush=function(){this.tags.forEach(function(t){return t.parentNode&&t.parentNode.removeChild(t)}),this.tags=[],this.ctr=0},e}(),C="-ms-",g="-webkit-",Me=Math.abs,X=String.fromCharCode,Ie=Object.assign;function ke(e){return e.trim()}function f(e,r,t){return e.replace(r,t)}function ae(e,r){return e.indexOf(r)}function $(e,r){return 0|e.charCodeAt(r)}function L(e,r,t){return e.slice(r,t)}function j(e){return e.length}function oe(e){return e.length}function J(e,r){return r.push(e),e}var z=1,M=1,Ce=0,A=0,w=0,I="";function D(e,r,t,n,a,i,o){return{value:e,root:r,parent:t,type:n,props:a,children:i,line:z,column:M,length:o,return:""}}function W(e,r){return Ie(D("",null,null,"",null,null,0),e,{length:-e.length},r)}function We(){return w=A>0?$(I,--A):0,M--,w===10&&(M=1,z--),w}function S(){return w=A<Ce?$(I,A++):0,M++,w===10&&(M=1,z++),w}function E(){return $(I,A)}function K(){return A}function H(e,r){return L(I,e,r)}function q(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function $e(e){return z=M=1,Ce=j(I=e),A=0,[]}function Ae(e){return I="",e}function U(e){return ke(H(A-1,ie(e===91?e+2:e===40?e+1:e)))}function Be(e){for(;(w=E())&&w<33;)S();return q(e)>2||q(w)>3?"":" "}function Le(e,r){for(;--r&&S()&&!(w<48||w>102||w>57&&w<65||w>70&&w<97););return H(e,K()+(r<6&&E()==32&&S()==32))}function ie(e){for(;S();)switch(w){case e:return A;case 34:case 39:e!==34&&e!==39&&ie(w);break;case 40:e===41&&ie(e);break;case 92:S()}return A}function qe(e,r){for(;S()&&e+w!==57&&(e+w!==84||E()!==47););return"/*"+H(r,A-1)+"*"+X(e===47?e:S())}function Fe(e){for(;!q(E());)S();return H(e,A)}function He(e){return Ae(Y("",null,null,null,[""],e=$e(e),0,[0],e))}function Y(e,r,t,n,a,i,o,l,m){for(var v=0,h=0,c=o,s=0,p=0,u=0,x=1,T=1,d=1,y=0,k="",N=a,O=i,P=n,b=k;T;)switch(u=y,y=S()){case 40:if(u!=108&&b.charCodeAt(c-1)==58){ae(b+=f(U(y),"&","&\f"),"&\f")!=-1&&(d=-1);break}case 34:case 39:case 91:b+=U(y);break;case 9:case 10:case 13:case 32:b+=Be(u);break;case 92:b+=Le(K()-1,7);continue;case 47:switch(E()){case 42:case 47:J(Ve(qe(S(),K()),r,t),m);break;default:b+="/"}break;case 123*x:l[v++]=j(b)*d;case 125*x:case 59:case 0:switch(y){case 0:case 125:T=0;case 59+h:p>0&&j(b)-c&&J(p>32?ce(b+";",n,t,c-1):ce(f(b," ","")+";",n,t,c-2),m);break;case 59:b+=";";default:if(J(P=se(b,r,t,v,h,a,l,k,N=[],O=[],c),i),y===123)if(h===0)Y(b,r,P,P,N,i,c,l,O);else switch(s){case 100:case 109:case 115:Y(e,P,P,n&&J(se(e,P,P,0,0,a,l,k,a,N=[],c),O),a,O,c,l,n?N:O);break;default:Y(b,P,P,P,[""],O,0,l,O)}}v=h=p=0,x=d=1,k=b="",c=o;break;case 58:c=1+j(b),p=u;default:if(x<1){if(y==123)--x;else if(y==125&&x++==0&&We()==125)continue}switch(b+=X(y),y*x){case 38:d=h>0?1:(b+="\f",-1);break;case 44:l[v++]=(j(b)-1)*d,d=1;break;case 64:E()===45&&(b+=U(S())),s=E(),h=c=j(k=b+=Fe(K())),y++;break;case 45:u===45&&j(b)==2&&(x=0)}}return i}function se(e,r,t,n,a,i,o,l,m,v,h){for(var c=a-1,s=a===0?i:[""],p=oe(s),u=0,x=0,T=0;u<n;++u)for(var d=0,y=L(e,c+1,c=Me(x=o[u])),k=e;d<p;++d)(k=ke(x>0?s[d]+" "+y:f(y,/&\f/g,s[d])))&&(m[T++]=k);return D(e,r,t,a===0?"rule":l,m,v,h)}function Ve(e,r,t){return D(e,r,t,"comm",X(w),L(e,2,-2),0)}function ce(e,r,t,n){return D(e,r,t,"decl",L(e,0,n),L(e,n+1,-1),n)}function Se(e,r){switch(function(t,n){return(((n<<2^$(t,0))<<2^$(t,1))<<2^$(t,2))<<2^$(t,3)}(e,r)){case 5103:return g+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return g+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return g+e+"-moz-"+e+C+e+e;case 6828:case 4268:return g+e+C+e+e;case 6165:return g+e+C+"flex-"+e+e;case 5187:return g+e+f(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return g+e+C+"flex-item-"+f(e,/flex-|-self/,"")+e;case 4675:return g+e+C+"flex-line-pack"+f(e,/align-content|flex-|-self/,"")+e;case 5548:return g+e+C+f(e,"shrink","negative")+e;case 5292:return g+e+C+f(e,"basis","preferred-size")+e;case 6060:return g+"box-"+f(e,"-grow","")+g+e+C+f(e,"grow","positive")+e;case 4554:return g+f(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return f(f(f(e,/(zoom-|grab)/,g+"$1"),/(image-set)/,g+"$1"),e,"")+e;case 5495:case 3959:return f(e,/(image-set\([^]*)/,g+"$1$`$1");case 4968:return f(f(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+g+e+e;case 4095:case 3583:case 4068:case 2532:return f(e,/(.+)-inline(.+)/,g+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(j(e)-1-r>6)switch($(e,r+1)){case 109:if($(e,r+4)!==45)break;case 102:return f(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1-moz-"+($(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~ae(e,"stretch")?Se(f(e,"stretch","fill-available"),r)+e:e}break;case 4949:if($(e,r+1)!==115)break;case 6444:switch($(e,j(e)-3-(~ae(e,"!important")&&10))){case 107:return f(e,":",":"+g)+e;case 101:return f(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+g+($(e,14)===45?"inline-":"")+"box$3$1"+g+"$2$3$1"+C+"$2box$3")+e}break;case 5936:switch($(e,r+11)){case 114:return g+e+C+f(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return g+e+C+f(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return g+e+C+f(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return g+e+C+e+e}return e}function G(e,r){for(var t="",n=oe(e),a=0;a<n;a++)t+=r(e[a],a,e,r)||"";return t}function Je(e,r,t,n){switch(e.type){case"@import":case"decl":return e.return=e.return||e.value;case"comm":return"";case"@keyframes":return e.return=e.value+"{"+G(e.children,n)+"}";case"rule":e.value=e.props.join(",")}return j(t=G(e.children,n))?e.return=e.value+"{"+t+"}":""}function Ke(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var Ue=function(e,r,t){for(var n=0,a=0;n=a,a=E(),n===38&&a===12&&(r[t]=1),!q(a);)S();return H(e,A)},le=new WeakMap,Ye=function(e){if(e.type==="rule"&&e.parent&&!(e.length<1)){for(var r=e.value,t=e.parent,n=e.column===t.column&&e.line===t.line;t.type!=="rule";)if(!(t=t.parent))return;if((e.props.length!==1||r.charCodeAt(0)===58||le.get(t))&&!n){le.set(e,!0);for(var a=[],i=function(h,c){return Ae(function(s,p){var u=-1,x=44;do switch(q(x)){case 0:x===38&&E()===12&&(p[u]=1),s[u]+=Ue(A-1,p,u);break;case 2:s[u]+=U(x);break;case 4:if(x===44){s[++u]=E()===58?"&\f":"",p[u]=s[u].length;break}default:s[u]+=X(x)}while(x=S());return s}($e(h),c))}(r,a),o=t.props,l=0,m=0;l<i.length;l++)for(var v=0;v<o.length;v++,m++)e.props[m]=a[l]?i[l].replace(/&\f/g,o[v]):o[v]+" "+i[l]}}},Ze=function(e){if(e.type==="decl"){var r=e.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(e.return="",e.value="")}},Qe=[function(e,r,t,n){if(e.length>-1&&!e.return)switch(e.type){case"decl":e.return=Se(e.value,e.length);break;case"@keyframes":return G([W(e,{value:f(e.value,"@","@"+g)})],n);case"rule":if(e.length)return function(a,i){return a.map(i).join("")}(e.props,function(a){switch(function(i,o){return(i=/(::plac\w+|:read-\w+)/.exec(i))?i[0]:i}(a)){case":read-only":case":read-write":return G([W(e,{props:[f(a,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return G([W(e,{props:[f(a,/:(plac\w+)/,":-webkit-input-$1")]}),W(e,{props:[f(a,/:(plac\w+)/,":-moz-$1")]}),W(e,{props:[f(a,/:(plac\w+)/,C+"input-$1")]})],n)}return""})}}],Xe={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ze=/[A-Z]|^ms/g,De=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Pe=function(e){return e.charCodeAt(1)===45},ue=function(e){return e!=null&&typeof e!="boolean"},re=Ke(function(e){return Pe(e)?e:e.replace(ze,"-$&").toLowerCase()}),de=function(e,r){switch(e){case"animation":case"animationName":if(typeof r=="string")return r.replace(De,function(t,n,a){return R={name:n,styles:a,next:R},n})}return Xe[e]===1||Pe(e)||typeof r!="number"||r===0?r:r+"px"};function Q(e,r,t){if(t==null)return"";if(t.__emotion_styles!==void 0)return t;switch(typeof t){case"boolean":return"";case"object":if(t.anim===1)return R={name:t.name,styles:t.styles,next:R},t.name;if(t.styles!==void 0){var n=t.next;if(n!==void 0)for(;n!==void 0;)R={name:n.name,styles:n.styles,next:R},n=n.next;var a=t.styles+";";return a}return function(o,l,m){var v="";if(Array.isArray(m))for(var h=0;h<m.length;h++)v+=Q(o,l,m[h])+";";else for(var c in m){var s=m[c];if(typeof s!="object")l!=null&&l[s]!==void 0?v+=c+"{"+l[s]+"}":ue(s)&&(v+=re(c)+":"+de(c,s)+";");else if(!Array.isArray(s)||typeof s[0]!="string"||l!=null&&l[s[0]]!==void 0){var p=Q(o,l,s);switch(c){case"animation":case"animationName":v+=re(c)+":"+p+";";break;default:v+=c+"{"+p+"}"}}else for(var u=0;u<s.length;u++)ue(s[u])&&(v+=re(c)+":"+de(c,s[u])+";")}return v}(e,r,t)}if(r==null)return t;var i=r[t];return i!==void 0?i:t}var R,fe=/label:\s*([^\s;\n{]+)\s*(;|$)/g,te=function(e,r,t){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var n=!0,a="";R=void 0;var i=e[0];i==null||i.raw===void 0?(n=!1,a+=Q(t,r,i)):a+=i[0];for(var o=1;o<e.length;o++)a+=Q(t,r,e[o]),n&&(a+=i[o]);fe.lastIndex=0;for(var l,m="";(l=fe.exec(a))!==null;)m+="-"+l[1];var v=function(h){for(var c,s=0,p=0,u=h.length;u>=4;++p,u-=4)c=1540483477*(65535&(c=255&h.charCodeAt(p)|(255&h.charCodeAt(++p))<<8|(255&h.charCodeAt(++p))<<16|(255&h.charCodeAt(++p))<<24))+(59797*(c>>>16)<<16),s=1540483477*(65535&(c^=c>>>24))+(59797*(c>>>16)<<16)^1540483477*(65535&s)+(59797*(s>>>16)<<16);switch(u){case 3:s^=(255&h.charCodeAt(p+2))<<16;case 2:s^=(255&h.charCodeAt(p+1))<<8;case 1:s=1540483477*(65535&(s^=255&h.charCodeAt(p)))+(59797*(s>>>16)<<16)}return(((s=1540483477*(65535&(s^=s>>>13))+(59797*(s>>>16)<<16))^s>>>15)>>>0).toString(36)}(a)+m;return{name:v,styles:a,next:R}};function je(e,r,t){var n="";return t.split(" ").forEach(function(a){e[a]!==void 0?r.push(e[a]+";"):n+=a+" "}),n}var er=function(e,r,t){(function(i,o,l){var m=i.key+"-"+o.name;i.registered[m]===void 0&&(i.registered[m]=o.styles)})(e,r);var n=e.key+"-"+r.name;if(e.inserted[r.name]===void 0){var a=r;do e.insert(r===a?"."+n:"",a,e.sheet,!0),a=a.next;while(a!==void 0)}};function he(e,r){if(e.inserted[r.name]===void 0)return e.insert("",r,e.sheet,!0)}function pe(e,r,t){var n=[],a=je(e,n,t);return n.length<2?t:a+r(n)}var ve,ge,me,be,ye,rr=function e(r){for(var t="",n=0;n<r.length;n++){var a=r[n];if(a!=null){var i=void 0;switch(typeof a){case"boolean":break;case"object":if(Array.isArray(a))i=e(a);else for(var o in i="",a)a[o]&&o&&(i&&(i+=" "),i+=o);break;default:i=a}i&&(t&&(t+=" "),t+=i)}}return t},Ee=function(e){var r=function(n){var a=n.key;if(a==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(d){d.getAttribute("data-emotion").indexOf(" ")!==-1&&(document.head.appendChild(d),d.setAttribute("data-s",""))})}var o=n.stylisPlugins||Qe,l,m,v={},h=[];l=n.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+a+' "]'),function(d){for(var y=d.getAttribute("data-emotion").split(" "),k=1;k<y.length;k++)v[y[k]]=!0;h.push(d)});var c=[Ye,Ze],s,p,u=[Je,(p=function(d){s.insert(d)},function(d){d.root||(d=d.return)&&p(d)})],x=function(d){var y=oe(d);return function(k,N,O,P){for(var b="",ee=0;ee<y;ee++)b+=d[ee](k,N,O,P)||"";return b}}(c.concat(o,u));m=function(d,y,k,N){s=k,G(He(d?d+"{"+y.styles+"}":y.styles),x),N&&(T.inserted[y.name]=!0)};var T={key:a,sheet:new Ge({key:a,container:l,nonce:n.nonce,speedy:n.speedy,prepend:n.prepend,insertionPoint:n.insertionPoint}),nonce:n.nonce,inserted:v,registered:{},insert:m};return T.sheet.hydrate(h),T}({key:"css"});r.sheet.speedy=function(n){this.isSpeedy=n},r.compat=!0;var t=function(){for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];var o=te(a,r.registered,void 0);return er(r,o),r.key+"-"+o.name};return{css:t,cx:function(){for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return pe(r.registered,t,rr(a))},injectGlobal:function(){for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];var o=te(a,r.registered);he(r,o)},keyframes:function(){for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];var o=te(a,r.registered),l="animation-"+o.name;return he(r,{name:o.name,styles:"@keyframes "+l+"{"+o.styles+"}"}),l},hydrate:function(n){n.forEach(function(a){r.inserted[a]=!0})},flush:function(){r.registered={},r.inserted={},r.sheet.flush()},sheet:r.sheet,cache:r,getRegisteredStyles:je.bind(null,r.registered),merge:pe.bind(null,r.registered,t)}}(),tr=Ee.cx,V=Ee.css,Oe=V(ve||(ve=F([`
  content: '';
  position: absolute;
  top: 0;
  height: var(--tree-line-height);
  box-sizing: border-box;
`]))),nr=V(ge||(ge=F([`
  display: flex;
  padding-inline-start: 0;
  margin: 0;
  padding-top: var(--tree-line-height);
  position: relative;

  ::before {
    `,`;
    left: calc(50% - var(--tree-line-width) / 2);
    width: 0;
    border-left: var(--tree-line-width) var(--tree-node-line-style)
      var(--tree-line-color);
  }
`])),Oe),ar=V(me||(me=F([`
  flex: auto;
  text-align: center;
  list-style-type: none;
  position: relative;
  padding: var(--tree-line-height) var(--tree-node-padding) 0
    var(--tree-node-padding);
`]))),ir=V(be||(be=F([`
  ::before,
  ::after {
    `,`;
    right: 50%;
    width: 50%;
    border-top: var(--tree-line-width) var(--tree-node-line-style)
      var(--tree-line-color);
  }
  ::after {
    left: 50%;
    border-left: var(--tree-line-width) var(--tree-node-line-style)
      var(--tree-line-color);
  }

  :only-of-type {
    padding: 0;
    ::after,
    :before {
      display: none;
    }
  }

  :first-of-type {
    ::before {
      border: 0 none;
    }
    ::after {
      border-radius: var(--tree-line-border-radius) 0 0 0;
    }
  }

  :last-of-type {
    ::before {
      border-right: var(--tree-line-width) var(--tree-node-line-style)
        var(--tree-line-color);
      border-radius: 0 var(--tree-line-border-radius) 0 0;
    }
    ::after {
      border: 0 none;
    }
  }
`])),Oe);function Te(e){var r=e.children,t=e.label;return B.createElement("li",{className:tr(ar,ir,e.className)},t,B.Children.count(r)>0&&B.createElement("ul",{className:nr},r))}function or(e){var r=e.children,t=e.label,n=e.lineHeight,a=n===void 0?"20px":n,i=e.lineWidth,o=i===void 0?"1px":i,l=e.lineColor,m=l===void 0?"black":l,v=e.nodePadding,h=v===void 0?"5px":v,c=e.lineStyle,s=c===void 0?"solid":c,p=e.lineBorderRadius,u=p===void 0?"5px":p;return B.createElement("ul",{className:V(ye||(ye=F([`
        padding-inline-start: 0;
        margin: 0;
        display: flex;

        --line-height: `,`;
        --line-width: `,`;
        --line-color: `,`;
        --line-border-radius: `,`;
        --line-style: `,`;
        --node-padding: `,`;

        --tree-line-height: var(--line-height, 20px);
        --tree-line-width: var(--line-width, 1px);
        --tree-line-color: var(--line-color, black);
        --tree-line-border-radius: var(--line-border-radius, 5px);
        --tree-node-line-style: var(--line-style, solid);
        --tree-node-padding: var(--node-padding, 5px);
      `])),a,o,m,u,s,h)},B.createElement(Te,{label:t},r))}function fr({organizations:e=[]}){const r=xe(),{themeMode:t}=we();return _.jsx(or,{lineWidth:"1px",lineColor:t===ne.Light?r.colorPrimaryBorder:r.colorPrimary,lineBorderRadius:"24px",label:_.jsx(Re,{$textColor:t===ne.Light?r.colorPrimaryTextActive:r.colorPrimaryText,$backgroundColor:Z(r.colorPrimary).alpha(.08).toString(),$borderColor:Z(r.colorPrimaryBorder).alpha(.24).toString(),children:"Root"}),children:e.map(n=>_.jsx(Ne,{organization:n},n.id))})}function Ne({organization:{name:e,children:r}}){const t=xe(),{themeMode:n}=we();return _.jsx(Te,{label:_.jsx(Re,{$textColor:n===ne.Light?t.colorPrimaryTextActive:t.colorPrimaryText,$backgroundColor:Z(t.colorPrimary).alpha(.08).toString(),$borderColor:Z(t.colorPrimaryBorder).alpha(.24).toString(),children:e}),children:r?.map(a=>_.jsx(Ne,{organization:a},a.id))})}const Re=_e.div`
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  overflow: hidden;
  position: relative;
  z-index: 0;
  padding: 16px;
  border-radius: 12px;
  display: inline-flex;
  text-transform: capitalize;
  color: ${e=>e.$textColor};
  background-color: ${e=>e.$backgroundColor};
  border: 1px solid ${e=>e.$borderColor};
`;export{fr as default};
