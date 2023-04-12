import{r as h,d as W,g as A,s as w,v as D,b as f,_ as G,j as y,f as H,h as J,i as K}from"./index-7e4127fc.js";import{u as M}from"./useFormControl-16bdc649.js";function Q({controlled:e,default:n,name:d,state:i="value"}){const{current:s}=h.useRef(e!==void 0),[o,p]=h.useState(n),l=s?e:o,b=h.useCallback(r=>{s||p(r)},[]);return[l,b]}function T(e){return W("PrivateSwitchBase",e)}A("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const X=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Y=e=>{const{classes:n,checked:d,disabled:i,edge:s}=e,o={root:["root",d&&"checked",i&&"disabled",s&&`edge${J(s)}`],input:["input"]};return K(o,T,n)},Z=w(D)(({ownerState:e})=>f({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),ee=w("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),te=h.forwardRef(function(n,d){const{autoFocus:i,checked:s,checkedIcon:o,className:p,defaultChecked:l,disabled:b,disableFocusRipple:r=!1,edge:R=!1,icon:I,id:P,inputProps:v,inputRef:j,name:U,onBlur:m,onChange:k,onFocus:C,readOnly:z,required:E=!1,tabIndex:N,type:u,value:B}=n,_=G(n,X),[x,q]=Q({controlled:s,default:Boolean(l),name:"SwitchBase",state:"checked"}),a=M(),L=t=>{C&&C(t),a&&a.onFocus&&a.onFocus(t)},O=t=>{m&&m(t),a&&a.onBlur&&a.onBlur(t)},V=t=>{if(t.nativeEvent.defaultPrevented)return;const S=t.target.checked;q(S),k&&k(t,S)};let c=b;a&&typeof c>"u"&&(c=a.disabled);const $=u==="checkbox"||u==="radio",g=f({},n,{checked:x,disabled:c,disableFocusRipple:r,edge:R}),F=Y(g);return y.jsxs(Z,f({component:"span",className:H(F.root,p),centerRipple:!0,focusRipple:!r,disabled:c,tabIndex:null,role:void 0,onFocus:L,onBlur:O,ownerState:g,ref:d},_,{children:[y.jsx(ee,f({autoFocus:i,checked:s,defaultChecked:l,className:F.input,disabled:c,id:$&&P,name:U,onChange:V,readOnly:z,ref:j,required:E,ownerState:g,tabIndex:N,type:u},u==="checkbox"&&B===void 0?{}:{value:B},v)),x?o:I]}))}),ne=te;export{ne as S};