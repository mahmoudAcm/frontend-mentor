import{_ as se,a as y,L as ne,M as W,N as L,O as ie,Q as ae,R as _,S as A,U as oe,V as ue,W as S,X as ce,Y as b,Z as le,$ as de,a0 as he,o as w,a1 as fe,r as U,d as z,j as Q,c as V,m as q,k as H,n as E,q as Y,l as pe,a2 as Z,D as ve,a3 as N,H as J}from"./index-79b17341.js";var Be=function(n){se(i,n);function i(o,r){var e;return e=n.call(this)||this,e.client=o,e.options=r,e.trackedProps=[],e.selectError=null,e.bindMethods(),e.setOptions(r),e}var t=i.prototype;return t.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},t.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),j(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},t.onUnsubscribe=function(){this.listeners.length||this.destroy()},t.shouldFetchOnReconnect=function(){return I(this.currentQuery,this.options,this.options.refetchOnReconnect)},t.shouldFetchOnWindowFocus=function(){return I(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},t.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},t.setOptions=function(r,e){var a=this.options,s=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(r),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=a.queryKey),this.updateQuery();var c=this.hasListeners();c&&B(this.currentQuery,s,this.options,a)&&this.executeFetch(),this.updateResult(e),c&&(this.currentQuery!==s||this.options.enabled!==a.enabled||this.options.staleTime!==a.staleTime)&&this.updateStaleTimeout();var u=this.computeRefetchInterval();c&&(this.currentQuery!==s||this.options.enabled!==a.enabled||u!==this.currentRefetchInterval)&&this.updateRefetchInterval(u)},t.getOptimisticResult=function(r){var e=this.client.defaultQueryObserverOptions(r),a=this.client.getQueryCache().build(this.client,e);return this.createResult(a,e)},t.getCurrentResult=function(){return this.currentResult},t.trackResult=function(r,e){var a=this,s={},c=function(l){a.trackedProps.includes(l)||a.trackedProps.push(l)};return Object.keys(r).forEach(function(u){Object.defineProperty(s,u,{configurable:!1,enumerable:!0,get:function(){return c(u),r[u]}})}),(e.useErrorBoundary||e.suspense)&&c("error"),s},t.getNextResult=function(r){var e=this;return new Promise(function(a,s){var c=e.subscribe(function(u){u.isFetching||(c(),u.isError&&(r!=null&&r.throwOnError)?s(u.error):a(u))})})},t.getCurrentQuery=function(){return this.currentQuery},t.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},t.refetch=function(r){return this.fetch(y({},r,{meta:{refetchPage:r==null?void 0:r.refetchPage}}))},t.fetchOptimistic=function(r){var e=this,a=this.client.defaultQueryObserverOptions(r),s=this.client.getQueryCache().build(this.client,a);return s.fetch().then(function(){return e.createResult(s,a)})},t.fetch=function(r){var e=this;return this.executeFetch(r).then(function(){return e.updateResult(),e.currentResult})},t.executeFetch=function(r){this.updateQuery();var e=this.currentQuery.fetch(this.options,r);return r!=null&&r.throwOnError||(e=e.catch(ne)),e},t.updateStaleTimeout=function(){var r=this;if(this.clearStaleTimeout(),!(W||this.currentResult.isStale||!L(this.options.staleTime))){var e=ie(this.currentResult.dataUpdatedAt,this.options.staleTime),a=e+1;this.staleTimeoutId=setTimeout(function(){r.currentResult.isStale||r.updateResult()},a)}},t.computeRefetchInterval=function(){var r;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(r=this.options.refetchInterval)!=null?r:!1},t.updateRefetchInterval=function(r){var e=this;this.clearRefetchInterval(),this.currentRefetchInterval=r,!(W||this.options.enabled===!1||!L(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(e.options.refetchIntervalInBackground||ae.isFocused())&&e.executeFetch()},this.currentRefetchInterval))},t.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},t.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},t.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},t.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},t.createResult=function(r,e){var a=this.currentQuery,s=this.options,c=this.currentResult,u=this.currentResultState,l=this.currentResultOptions,h=r!==a,p=h?r.state:this.currentQueryInitialState,v=h?this.currentResult:this.previousQueryResult,d=r.state,R=d.dataUpdatedAt,C=d.error,O=d.errorUpdatedAt,T=d.isFetching,f=d.status,F=!1,M=!1,m;if(e.optimisticResults){var $=this.hasListeners(),ee=!$&&j(r,e),te=$&&B(r,a,e,s);(ee||te)&&(T=!0,R||(f="loading"))}if(e.keepPreviousData&&!d.dataUpdateCount&&(v!=null&&v.isSuccess)&&f!=="error")m=v.data,R=v.dataUpdatedAt,f=v.status,F=!0;else if(e.select&&typeof d.data<"u")if(c&&d.data===(u==null?void 0:u.data)&&e.select===this.selectFn)m=this.selectResult;else try{this.selectFn=e.select,m=e.select(d.data),e.structuralSharing!==!1&&(m=_(c==null?void 0:c.data,m)),this.selectResult=m,this.selectError=null}catch(x){A().error(x),this.selectError=x}else m=d.data;if(typeof e.placeholderData<"u"&&typeof m>"u"&&(f==="loading"||f==="idle")){var g;if(c!=null&&c.isPlaceholderData&&e.placeholderData===(l==null?void 0:l.placeholderData))g=c.data;else if(g=typeof e.placeholderData=="function"?e.placeholderData():e.placeholderData,e.select&&typeof g<"u")try{g=e.select(g),e.structuralSharing!==!1&&(g=_(c==null?void 0:c.data,g)),this.selectError=null}catch(x){A().error(x),this.selectError=x}typeof g<"u"&&(f="success",m=g,M=!0)}this.selectError&&(C=this.selectError,m=this.selectResult,O=Date.now(),f="error");var re={status:f,isLoading:f==="loading",isSuccess:f==="success",isError:f==="error",isIdle:f==="idle",data:m,dataUpdatedAt:R,error:C,errorUpdatedAt:O,failureCount:d.fetchFailureCount,errorUpdateCount:d.errorUpdateCount,isFetched:d.dataUpdateCount>0||d.errorUpdateCount>0,isFetchedAfterMount:d.dataUpdateCount>p.dataUpdateCount||d.errorUpdateCount>p.errorUpdateCount,isFetching:T,isRefetching:T&&f!=="loading",isLoadingError:f==="error"&&d.dataUpdatedAt===0,isPlaceholderData:M,isPreviousData:F,isRefetchError:f==="error"&&d.dataUpdatedAt!==0,isStale:P(r,e),refetch:this.refetch,remove:this.remove};return re},t.shouldNotifyListeners=function(r,e){if(!e)return!0;var a=this.options,s=a.notifyOnChangeProps,c=a.notifyOnChangePropsExclusions;if(!s&&!c||s==="tracked"&&!this.trackedProps.length)return!0;var u=s==="tracked"?this.trackedProps:s;return Object.keys(r).some(function(l){var h=l,p=r[h]!==e[h],v=u==null?void 0:u.some(function(R){return R===l}),d=c==null?void 0:c.some(function(R){return R===l});return p&&!d&&(!u||v)})},t.updateResult=function(r){var e=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!oe(this.currentResult,e)){var a={cache:!0};(r==null?void 0:r.listeners)!==!1&&this.shouldNotifyListeners(this.currentResult,e)&&(a.listeners=!0),this.notify(y({},a,r))}},t.updateQuery=function(){var r=this.client.getQueryCache().build(this.client,this.options);if(r!==this.currentQuery){var e=this.currentQuery;this.currentQuery=r,this.currentQueryInitialState=r.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(e==null||e.removeObserver(this),r.addObserver(this))}},t.onQueryUpdate=function(r){var e={};r.type==="success"?e.onSuccess=!0:r.type==="error"&&!ue(r.error)&&(e.onError=!0),this.updateResult(e),this.hasListeners()&&this.updateTimers()},t.notify=function(r){var e=this;S.batch(function(){r.onSuccess?(e.options.onSuccess==null||e.options.onSuccess(e.currentResult.data),e.options.onSettled==null||e.options.onSettled(e.currentResult.data,null)):r.onError&&(e.options.onError==null||e.options.onError(e.currentResult.error),e.options.onSettled==null||e.options.onSettled(void 0,e.currentResult.error)),r.listeners&&e.listeners.forEach(function(a){a(e.currentResult)}),r.cache&&e.client.getQueryCache().notify({query:e.currentQuery,type:"observerResultsUpdated"})})},i}(ce);function me(n,i){return i.enabled!==!1&&!n.state.dataUpdatedAt&&!(n.state.status==="error"&&i.retryOnMount===!1)}function j(n,i){return me(n,i)||n.state.dataUpdatedAt>0&&I(n,i,i.refetchOnMount)}function I(n,i,t){if(i.enabled!==!1){var o=typeof t=="function"?t(n):t;return o==="always"||o!==!1&&P(n,i)}return!1}function B(n,i,t,o){return t.enabled!==!1&&(n!==i||o.enabled===!1)&&(!t.suspense||n.state.status!=="error")&&P(n,t)}function P(n,i){return n.isStaleByTime(i.staleTime)}function ye(){var n=!1;return{clearReset:function(){n=!1},reset:function(){n=!0},isReset:function(){return n}}}var Re=b.createContext(ye()),ge=function(){return b.useContext(Re)};function be(n,i,t){return typeof i=="function"?i.apply(void 0,t):typeof i=="boolean"?i:!!n}function Ge(n,i){var t=b.useRef(!1),o=b.useState(0),r=o[1],e=le(),a=ge(),s=e.defaultQueryObserverOptions(n);s.optimisticResults=!0,s.onError&&(s.onError=S.batchCalls(s.onError)),s.onSuccess&&(s.onSuccess=S.batchCalls(s.onSuccess)),s.onSettled&&(s.onSettled=S.batchCalls(s.onSettled)),s.suspense&&(typeof s.staleTime!="number"&&(s.staleTime=1e3),s.cacheTime===0&&(s.cacheTime=1)),(s.suspense||s.useErrorBoundary)&&(a.isReset()||(s.retryOnMount=!1));var c=b.useState(function(){return new i(e,s)}),u=c[0],l=u.getOptimisticResult(s);if(b.useEffect(function(){t.current=!0,a.clearReset();var h=u.subscribe(S.batchCalls(function(){t.current&&r(function(p){return p+1})}));return u.updateResult(),function(){t.current=!1,h()}},[a,u]),b.useEffect(function(){u.setOptions(s,{listeners:!1})},[s,u]),s.suspense&&l.isLoading)throw u.fetchOptimistic(s).then(function(h){var p=h.data;s.onSuccess==null||s.onSuccess(p),s.onSettled==null||s.onSettled(p,null)}).catch(function(h){a.clearReset(),s.onError==null||s.onError(h),s.onSettled==null||s.onSettled(void 0,h)});if(l.isError&&!a.isReset()&&!l.isFetching&&be(s.suspense,s.useErrorBoundary,[l.error,u.getCurrentQuery()]))throw l.error;return s.notifyOnChangeProps==="tracked"&&(l=u.trackResult(l,s)),l}const Ce=de(),xe=Ce,Se=["className","component","disableGutters","fixed","maxWidth","classes"],Qe=he(),Oe=xe("div",{name:"MuiContainer",slot:"Root",overridesResolver:(n,i)=>{const{ownerState:t}=n;return[i.root,i[`maxWidth${w(String(t.maxWidth))}`],t.fixed&&i.fixed,t.disableGutters&&i.disableGutters]}}),ke=n=>fe({props:n,name:"MuiContainer",defaultTheme:Qe}),Ee=(n,i)=>{const t=c=>H(i,c),{classes:o,fixed:r,disableGutters:e,maxWidth:a}=n,s={root:["root",a&&`maxWidth${w(String(a))}`,r&&"fixed",e&&"disableGutters"]};return q(s,t,o)};function Te(n={}){const{createStyledComponent:i=Oe,useThemeProps:t=ke,componentName:o="MuiContainer"}=n,r=i(({theme:a,ownerState:s})=>y({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!s.disableGutters&&{paddingLeft:a.spacing(2),paddingRight:a.spacing(2),[a.breakpoints.up("sm")]:{paddingLeft:a.spacing(3),paddingRight:a.spacing(3)}}),({theme:a,ownerState:s})=>s.fixed&&Object.keys(a.breakpoints.values).reduce((c,u)=>{const l=u,h=a.breakpoints.values[l];return h!==0&&(c[a.breakpoints.up(l)]={maxWidth:`${h}${a.breakpoints.unit}`}),c},{}),({theme:a,ownerState:s})=>y({},s.maxWidth==="xs"&&{[a.breakpoints.up("xs")]:{maxWidth:Math.max(a.breakpoints.values.xs,444)}},s.maxWidth&&s.maxWidth!=="xs"&&{[a.breakpoints.up(s.maxWidth)]:{maxWidth:`${a.breakpoints.values[s.maxWidth]}${a.breakpoints.unit}`}}));return U.forwardRef(function(s,c){const u=t(s),{className:l,component:h="div",disableGutters:p=!1,fixed:v=!1,maxWidth:d="lg"}=u,R=z(u,Se),C=y({},u,{component:h,disableGutters:p,fixed:v,maxWidth:d}),O=Ee(C,o);return Q.jsx(r,y({as:h,ownerState:C,className:V(O.root,l),ref:c},R))})}function Ie(n){return String(n).match(/[\d.\-+]*\s*(.*)/)[1]||""}function we(n){return parseFloat(n)}const Ue=Te({createStyledComponent:E("div",{name:"MuiContainer",slot:"Root",overridesResolver:(n,i)=>{const{ownerState:t}=n;return[i.root,i[`maxWidth${w(String(t.maxWidth))}`],t.fixed&&i.fixed,t.disableGutters&&i.disableGutters]}}),useThemeProps:n=>Y({props:n,name:"MuiContainer"})}),Pe=Ue;function Fe(n){return H("MuiSkeleton",n)}pe("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const Me=["animation","className","component","height","style","variant","width"];let k=n=>n,G,D,K,X;const $e=n=>{const{classes:i,variant:t,animation:o,hasChildren:r,width:e,height:a}=n;return q({root:["root",t,o,r&&"withChildren",r&&!e&&"fitContent",r&&!a&&"heightAuto"]},Fe,i)},We=Z(G||(G=k`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),Le=Z(D||(D=k`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),_e=E("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(n,i)=>{const{ownerState:t}=n;return[i.root,i[t.variant],t.animation!==!1&&i[t.animation],t.hasChildren&&i.withChildren,t.hasChildren&&!t.width&&i.fitContent,t.hasChildren&&!t.height&&i.heightAuto]}})(({theme:n,ownerState:i})=>{const t=Ie(n.shape.borderRadius)||"px",o=we(n.shape.borderRadius);return y({display:"block",backgroundColor:n.vars?n.vars.palette.Skeleton.bg:ve(n.palette.text.primary,n.palette.mode==="light"?.11:.13),height:"1.2em"},i.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${o}${t}/${Math.round(o/.6*10)/10}${t}`,"&:empty:before":{content:'"\\00a0"'}},i.variant==="circular"&&{borderRadius:"50%"},i.variant==="rounded"&&{borderRadius:(n.vars||n).shape.borderRadius},i.hasChildren&&{"& > *":{visibility:"hidden"}},i.hasChildren&&!i.width&&{maxWidth:"fit-content"},i.hasChildren&&!i.height&&{height:"auto"})},({ownerState:n})=>n.animation==="pulse"&&N(K||(K=k`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),We),({ownerState:n,theme:i})=>n.animation==="wave"&&N(X||(X=k`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),Le,(i.vars||i).palette.action.hover)),Ae=U.forwardRef(function(i,t){const o=Y({props:i,name:"MuiSkeleton"}),{animation:r="pulse",className:e,component:a="span",height:s,style:c,variant:u="text",width:l}=o,h=z(o,Me),p=y({},o,{animation:r,component:a,variant:u,hasChildren:Boolean(h.children)}),v=$e(p);return Q.jsx(_e,y({as:a,ref:t,className:V(v.root,e),ownerState:p},h,{style:y({width:l,height:s},c)}))}),De=Ae,Ne=E(J)(({theme:n})=>({"& .MuiContainer-root":{paddingTop:49},[n.breakpoints.up("lg")]:{"& .MuiContainer-root":{maxWidth:"100%",paddingLeft:"80px",paddingRight:"80px"}}})),Ke=E(function({children:i,...t}){return Q.jsx(Ne,{...t,children:Q.jsx(Pe,{children:Q.jsx(J,{className:"error",children:i})})})})(()=>({"& .error":{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",rowGap:15,marginTop:"25vh"},"& .MuiTypography-root":{fontSize:"clamp(0.92rem, 2vw, 1.5rem)",userSelect:"none"},"& button":{textTransform:"capitalize",paddingLeft:30,paddingRight:30,fontWeight:600,transition:"0s background-color !important"}}));function Xe(n){U.useEffect(()=>(n()?(window.scrollTo({top:0}),document.body.classList.add("overflow-hidden")):document.body.classList.remove("overflow-hidden"),()=>{document.body.classList.remove("overflow-hidden")}),[n])}export{Pe as C,Ke as E,Be as Q,De as S,Xe as a,Ge as u};
