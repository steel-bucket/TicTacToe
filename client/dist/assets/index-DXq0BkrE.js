(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function dv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var cm={exports:{}},Rl={},dm={exports:{}},He={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fa=Symbol.for("react.element"),fv=Symbol.for("react.portal"),hv=Symbol.for("react.fragment"),pv=Symbol.for("react.strict_mode"),mv=Symbol.for("react.profiler"),_v=Symbol.for("react.provider"),gv=Symbol.for("react.context"),vv=Symbol.for("react.forward_ref"),yv=Symbol.for("react.suspense"),xv=Symbol.for("react.memo"),Sv=Symbol.for("react.lazy"),xf=Symbol.iterator;function Mv(t){return t===null||typeof t!="object"?null:(t=xf&&t[xf]||t["@@iterator"],typeof t=="function"?t:null)}var fm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hm=Object.assign,pm={};function Ls(t,e,n){this.props=t,this.context=e,this.refs=pm,this.updater=n||fm}Ls.prototype.isReactComponent={};Ls.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ls.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function mm(){}mm.prototype=Ls.prototype;function ld(t,e,n){this.props=t,this.context=e,this.refs=pm,this.updater=n||fm}var ud=ld.prototype=new mm;ud.constructor=ld;hm(ud,Ls.prototype);ud.isPureReactComponent=!0;var Sf=Array.isArray,_m=Object.prototype.hasOwnProperty,cd={current:null},gm={key:!0,ref:!0,__self:!0,__source:!0};function vm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)_m.call(e,i)&&!gm.hasOwnProperty(i)&&(r[i]=e[i]);var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}if(t&&t.defaultProps)for(i in l=t.defaultProps,l)r[i]===void 0&&(r[i]=l[i]);return{$$typeof:Fa,type:t,key:s,ref:o,props:r,_owner:cd.current}}function Ev(t,e){return{$$typeof:Fa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function dd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fa}function wv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Mf=/\/+/g;function Zl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?wv(""+t.key):e.toString(36)}function Oo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Fa:case fv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Zl(o,0):i,Sf(r)?(n="",t!=null&&(n=t.replace(Mf,"$&/")+"/"),Oo(r,e,n,"",function(u){return u})):r!=null&&(dd(r)&&(r=Ev(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Mf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Sf(t))for(var l=0;l<t.length;l++){s=t[l];var a=i+Zl(s,l);o+=Oo(s,e,n,a,r)}else if(a=Mv(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=i+Zl(s,l++),o+=Oo(s,e,n,a,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ja(t,e,n){if(t==null)return t;var i=[],r=0;return Oo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Tv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Kt={current:null},Fo={transition:null},Av={ReactCurrentDispatcher:Kt,ReactCurrentBatchConfig:Fo,ReactCurrentOwner:cd};function ym(){throw Error("act(...) is not supported in production builds of React.")}He.Children={map:Ja,forEach:function(t,e,n){Ja(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ja(t,function(){e++}),e},toArray:function(t){return Ja(t,function(e){return e})||[]},only:function(t){if(!dd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};He.Component=Ls;He.Fragment=hv;He.Profiler=mv;He.PureComponent=ld;He.StrictMode=pv;He.Suspense=yv;He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Av;He.act=ym;He.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=hm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=cd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)_m.call(e,a)&&!gm.hasOwnProperty(a)&&(i[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}return{$$typeof:Fa,type:t.type,key:r,ref:s,props:i,_owner:o}};He.createContext=function(t){return t={$$typeof:gv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:_v,_context:t},t.Consumer=t};He.createElement=vm;He.createFactory=function(t){var e=vm.bind(null,t);return e.type=t,e};He.createRef=function(){return{current:null}};He.forwardRef=function(t){return{$$typeof:vv,render:t}};He.isValidElement=dd;He.lazy=function(t){return{$$typeof:Sv,_payload:{_status:-1,_result:t},_init:Tv}};He.memo=function(t,e){return{$$typeof:xv,type:t,compare:e===void 0?null:e}};He.startTransition=function(t){var e=Fo.transition;Fo.transition={};try{t()}finally{Fo.transition=e}};He.unstable_act=ym;He.useCallback=function(t,e){return Kt.current.useCallback(t,e)};He.useContext=function(t){return Kt.current.useContext(t)};He.useDebugValue=function(){};He.useDeferredValue=function(t){return Kt.current.useDeferredValue(t)};He.useEffect=function(t,e){return Kt.current.useEffect(t,e)};He.useId=function(){return Kt.current.useId()};He.useImperativeHandle=function(t,e,n){return Kt.current.useImperativeHandle(t,e,n)};He.useInsertionEffect=function(t,e){return Kt.current.useInsertionEffect(t,e)};He.useLayoutEffect=function(t,e){return Kt.current.useLayoutEffect(t,e)};He.useMemo=function(t,e){return Kt.current.useMemo(t,e)};He.useReducer=function(t,e,n){return Kt.current.useReducer(t,e,n)};He.useRef=function(t){return Kt.current.useRef(t)};He.useState=function(t){return Kt.current.useState(t)};He.useSyncExternalStore=function(t,e,n){return Kt.current.useSyncExternalStore(t,e,n)};He.useTransition=function(){return Kt.current.useTransition()};He.version="18.3.1";dm.exports=He;var Ge=dm.exports;const Pv=dv(Ge);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rv=Ge,bv=Symbol.for("react.element"),Cv=Symbol.for("react.fragment"),Lv=Object.prototype.hasOwnProperty,Uv=Rv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Nv={key:!0,ref:!0,__self:!0,__source:!0};function xm(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Lv.call(e,i)&&!Nv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:bv,type:t,key:s,ref:o,props:r,_owner:Uv.current}}Rl.Fragment=Cv;Rl.jsx=xm;Rl.jsxs=xm;cm.exports=Rl;var W=cm.exports,rc={},Sm={exports:{}},yn={},Mm={exports:{}},Em={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,G){var B=D.length;D.push(G);e:for(;0<B;){var C=B-1>>>1,I=D[C];if(0<r(I,G))D[C]=G,D[B]=I,B=C;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var G=D[0],B=D.pop();if(B!==G){D[0]=B;e:for(var C=0,I=D.length,ue=I>>>1;C<ue;){var ce=2*(C+1)-1,me=D[ce],ye=ce+1,Ne=D[ye];if(0>r(me,B))ye<I&&0>r(Ne,me)?(D[C]=Ne,D[ye]=B,C=ye):(D[C]=me,D[ce]=B,C=ce);else if(ye<I&&0>r(Ne,B))D[C]=Ne,D[ye]=B,C=ye;else break e}}return G}function r(D,G){var B=D.sortIndex-G.sortIndex;return B!==0?B:D.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],c=1,d=null,f=3,p=!1,v=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(D){for(var G=n(u);G!==null;){if(G.callback===null)i(u);else if(G.startTime<=D)i(u),G.sortIndex=G.expirationTime,e(a,G);else break;G=n(u)}}function x(D){if(y=!1,_(D),!v)if(n(a)!==null)v=!0,J(w);else{var G=n(u);G!==null&&Y(x,G.startTime-D)}}function w(D,G){v=!1,y&&(y=!1,h(U),U=-1),p=!0;var B=f;try{for(_(G),d=n(a);d!==null&&(!(d.expirationTime>G)||D&&!q());){var C=d.callback;if(typeof C=="function"){d.callback=null,f=d.priorityLevel;var I=C(d.expirationTime<=G);G=t.unstable_now(),typeof I=="function"?d.callback=I:d===n(a)&&i(a),_(G)}else i(a);d=n(a)}if(d!==null)var ue=!0;else{var ce=n(u);ce!==null&&Y(x,ce.startTime-G),ue=!1}return ue}finally{d=null,f=B,p=!1}}var R=!1,A=null,U=-1,M=5,T=-1;function q(){return!(t.unstable_now()-T<M)}function $(){if(A!==null){var D=t.unstable_now();T=D;var G=!0;try{G=A(!0,D)}finally{G?K():(R=!1,A=null)}}else R=!1}var K;if(typeof g=="function")K=function(){g($)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,j=L.port2;L.port1.onmessage=$,K=function(){j.postMessage(null)}}else K=function(){m($,0)};function J(D){A=D,R||(R=!0,K())}function Y(D,G){U=m(function(){D(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,J(w))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var G=3;break;default:G=f}var B=f;f=G;try{return D()}finally{f=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,G){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var B=f;f=D;try{return G()}finally{f=B}},t.unstable_scheduleCallback=function(D,G,B){var C=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?C+B:C):B=C,D){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=B+I,D={id:c++,callback:G,priorityLevel:D,startTime:B,expirationTime:I,sortIndex:-1},B>C?(D.sortIndex=B,e(u,D),n(a)===null&&D===n(u)&&(y?(h(U),U=-1):y=!0,Y(x,B-C))):(D.sortIndex=I,e(a,D),v||p||(v=!0,J(w))),D},t.unstable_shouldYield=q,t.unstable_wrapCallback=function(D){var G=f;return function(){var B=f;f=G;try{return D.apply(this,arguments)}finally{f=B}}}})(Em);Mm.exports=Em;var Dv=Mm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iv=Ge,vn=Dv;function Q(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wm=new Set,ga={};function Nr(t,e){xs(t,e),xs(t+"Capture",e)}function xs(t,e){for(ga[t]=e,t=0;t<e.length;t++)wm.add(e[t])}var yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sc=Object.prototype.hasOwnProperty,Ov=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ef={},wf={};function Fv(t){return sc.call(wf,t)?!0:sc.call(Ef,t)?!1:Ov.test(t)?wf[t]=!0:(Ef[t]=!0,!1)}function kv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Bv(t,e,n,i){if(e===null||typeof e>"u"||kv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Zt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){It[t]=new Zt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];It[e]=new Zt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){It[t]=new Zt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){It[t]=new Zt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){It[t]=new Zt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){It[t]=new Zt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){It[t]=new Zt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){It[t]=new Zt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){It[t]=new Zt(t,5,!1,t.toLowerCase(),null,!1,!1)});var fd=/[\-:]([a-z])/g;function hd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(fd,hd);It[e]=new Zt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(fd,hd);It[e]=new Zt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(fd,hd);It[e]=new Zt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){It[t]=new Zt(t,1,!1,t.toLowerCase(),null,!1,!1)});It.xlinkHref=new Zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){It[t]=new Zt(t,1,!1,t.toLowerCase(),null,!0,!0)});function pd(t,e,n,i){var r=It.hasOwnProperty(e)?It[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Bv(e,n,r,i)&&(n=null),i||r===null?Fv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var wi=Iv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$a=Symbol.for("react.element"),Zr=Symbol.for("react.portal"),Qr=Symbol.for("react.fragment"),md=Symbol.for("react.strict_mode"),ac=Symbol.for("react.profiler"),Tm=Symbol.for("react.provider"),Am=Symbol.for("react.context"),_d=Symbol.for("react.forward_ref"),oc=Symbol.for("react.suspense"),lc=Symbol.for("react.suspense_list"),gd=Symbol.for("react.memo"),Li=Symbol.for("react.lazy"),Pm=Symbol.for("react.offscreen"),Tf=Symbol.iterator;function ks(t){return t===null||typeof t!="object"?null:(t=Tf&&t[Tf]||t["@@iterator"],typeof t=="function"?t:null)}var lt=Object.assign,Ql;function Zs(t){if(Ql===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ql=e&&e[1]||""}return`
`+Ql+t}var eu=!1;function tu(t,e){if(!t||eu)return"";eu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,l=s.length-1;1<=o&&0<=l&&r[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(r[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||r[o]!==s[l]){var a=`
`+r[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{eu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Zs(t):""}function zv(t){switch(t.tag){case 5:return Zs(t.type);case 16:return Zs("Lazy");case 13:return Zs("Suspense");case 19:return Zs("SuspenseList");case 0:case 2:case 15:return t=tu(t.type,!1),t;case 11:return t=tu(t.type.render,!1),t;case 1:return t=tu(t.type,!0),t;default:return""}}function uc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Qr:return"Fragment";case Zr:return"Portal";case ac:return"Profiler";case md:return"StrictMode";case oc:return"Suspense";case lc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Am:return(t.displayName||"Context")+".Consumer";case Tm:return(t._context.displayName||"Context")+".Provider";case _d:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case gd:return e=t.displayName||null,e!==null?e:uc(t.type)||"Memo";case Li:e=t._payload,t=t._init;try{return uc(t(e))}catch{}}return null}function Gv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return uc(e);case 8:return e===md?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ki(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Rm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Hv(t){var e=Rm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ka(t){t._valueTracker||(t._valueTracker=Hv(t))}function bm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Rm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function $o(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function cc(t,e){var n=e.checked;return lt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Af(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ki(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Cm(t,e){e=e.checked,e!=null&&pd(t,"checked",e,!1)}function dc(t,e){Cm(t,e);var n=Ki(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?fc(t,e.type,n):e.hasOwnProperty("defaultValue")&&fc(t,e.type,Ki(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Pf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function fc(t,e,n){(e!=="number"||$o(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Qs=Array.isArray;function fs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ki(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function hc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Q(91));return lt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Rf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Q(92));if(Qs(n)){if(1<n.length)throw Error(Q(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ki(n)}}function Lm(t,e){var n=Ki(e.value),i=Ki(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function bf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Um(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Um(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Za,Nm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Za=Za||document.createElement("div"),Za.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Za.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function va(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var oa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vv=["Webkit","ms","Moz","O"];Object.keys(oa).forEach(function(t){Vv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),oa[e]=oa[t]})});function Dm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||oa.hasOwnProperty(t)&&oa[t]?(""+e).trim():e+"px"}function Im(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Dm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Wv=lt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mc(t,e){if(e){if(Wv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Q(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Q(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Q(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Q(62))}}function _c(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gc=null;function vd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var vc=null,hs=null,ps=null;function Cf(t){if(t=za(t)){if(typeof vc!="function")throw Error(Q(280));var e=t.stateNode;e&&(e=Nl(e),vc(t.stateNode,t.type,e))}}function Om(t){hs?ps?ps.push(t):ps=[t]:hs=t}function Fm(){if(hs){var t=hs,e=ps;if(ps=hs=null,Cf(t),e)for(t=0;t<e.length;t++)Cf(e[t])}}function km(t,e){return t(e)}function Bm(){}var nu=!1;function zm(t,e,n){if(nu)return t(e,n);nu=!0;try{return km(t,e,n)}finally{nu=!1,(hs!==null||ps!==null)&&(Bm(),Fm())}}function ya(t,e){var n=t.stateNode;if(n===null)return null;var i=Nl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Q(231,e,typeof n));return n}var yc=!1;if(yi)try{var Bs={};Object.defineProperty(Bs,"passive",{get:function(){yc=!0}}),window.addEventListener("test",Bs,Bs),window.removeEventListener("test",Bs,Bs)}catch{yc=!1}function jv(t,e,n,i,r,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var la=!1,Ko=null,Zo=!1,xc=null,qv={onError:function(t){la=!0,Ko=t}};function Xv(t,e,n,i,r,s,o,l,a){la=!1,Ko=null,jv.apply(qv,arguments)}function Yv(t,e,n,i,r,s,o,l,a){if(Xv.apply(this,arguments),la){if(la){var u=Ko;la=!1,Ko=null}else throw Error(Q(198));Zo||(Zo=!0,xc=u)}}function Dr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Gm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Lf(t){if(Dr(t)!==t)throw Error(Q(188))}function Jv(t){var e=t.alternate;if(!e){if(e=Dr(t),e===null)throw Error(Q(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Lf(r),t;if(s===i)return Lf(r),e;s=s.sibling}throw Error(Q(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,l=r.child;l;){if(l===n){o=!0,n=r,i=s;break}if(l===i){o=!0,i=r,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,i=r;break}if(l===i){o=!0,i=s,n=r;break}l=l.sibling}if(!o)throw Error(Q(189))}}if(n.alternate!==i)throw Error(Q(190))}if(n.tag!==3)throw Error(Q(188));return n.stateNode.current===n?t:e}function Hm(t){return t=Jv(t),t!==null?Vm(t):null}function Vm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Vm(t);if(e!==null)return e;t=t.sibling}return null}var Wm=vn.unstable_scheduleCallback,Uf=vn.unstable_cancelCallback,$v=vn.unstable_shouldYield,Kv=vn.unstable_requestPaint,pt=vn.unstable_now,Zv=vn.unstable_getCurrentPriorityLevel,yd=vn.unstable_ImmediatePriority,jm=vn.unstable_UserBlockingPriority,Qo=vn.unstable_NormalPriority,Qv=vn.unstable_LowPriority,qm=vn.unstable_IdlePriority,bl=null,Qn=null;function e0(t){if(Qn&&typeof Qn.onCommitFiberRoot=="function")try{Qn.onCommitFiberRoot(bl,t,void 0,(t.current.flags&128)===128)}catch{}}var Vn=Math.clz32?Math.clz32:i0,t0=Math.log,n0=Math.LN2;function i0(t){return t>>>=0,t===0?32:31-(t0(t)/n0|0)|0}var Qa=64,eo=4194304;function ea(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function el(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~r;l!==0?i=ea(l):(s&=o,s!==0&&(i=ea(s)))}else o=n&~r,o!==0?i=ea(o):s!==0&&(i=ea(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Vn(e),r=1<<n,i|=t[n],e&=~r;return i}function r0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function s0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Vn(s),l=1<<o,a=r[o];a===-1?(!(l&n)||l&i)&&(r[o]=r0(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Sc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Xm(){var t=Qa;return Qa<<=1,!(Qa&4194240)&&(Qa=64),t}function iu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ka(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Vn(e),t[e]=n}function a0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Vn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function xd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Vn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var $e=0;function Ym(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Jm,Sd,$m,Km,Zm,Mc=!1,to=[],Bi=null,zi=null,Gi=null,xa=new Map,Sa=new Map,Ni=[],o0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nf(t,e){switch(t){case"focusin":case"focusout":Bi=null;break;case"dragenter":case"dragleave":zi=null;break;case"mouseover":case"mouseout":Gi=null;break;case"pointerover":case"pointerout":xa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sa.delete(e.pointerId)}}function zs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=za(e),e!==null&&Sd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function l0(t,e,n,i,r){switch(e){case"focusin":return Bi=zs(Bi,t,e,n,i,r),!0;case"dragenter":return zi=zs(zi,t,e,n,i,r),!0;case"mouseover":return Gi=zs(Gi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return xa.set(s,zs(xa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Sa.set(s,zs(Sa.get(s)||null,t,e,n,i,r)),!0}return!1}function Qm(t){var e=gr(t.target);if(e!==null){var n=Dr(e);if(n!==null){if(e=n.tag,e===13){if(e=Gm(n),e!==null){t.blockedOn=e,Zm(t.priority,function(){$m(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ko(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ec(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);gc=i,n.target.dispatchEvent(i),gc=null}else return e=za(n),e!==null&&Sd(e),t.blockedOn=n,!1;e.shift()}return!0}function Df(t,e,n){ko(t)&&n.delete(e)}function u0(){Mc=!1,Bi!==null&&ko(Bi)&&(Bi=null),zi!==null&&ko(zi)&&(zi=null),Gi!==null&&ko(Gi)&&(Gi=null),xa.forEach(Df),Sa.forEach(Df)}function Gs(t,e){t.blockedOn===e&&(t.blockedOn=null,Mc||(Mc=!0,vn.unstable_scheduleCallback(vn.unstable_NormalPriority,u0)))}function Ma(t){function e(r){return Gs(r,t)}if(0<to.length){Gs(to[0],t);for(var n=1;n<to.length;n++){var i=to[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Bi!==null&&Gs(Bi,t),zi!==null&&Gs(zi,t),Gi!==null&&Gs(Gi,t),xa.forEach(e),Sa.forEach(e),n=0;n<Ni.length;n++)i=Ni[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ni.length&&(n=Ni[0],n.blockedOn===null);)Qm(n),n.blockedOn===null&&Ni.shift()}var ms=wi.ReactCurrentBatchConfig,tl=!0;function c0(t,e,n,i){var r=$e,s=ms.transition;ms.transition=null;try{$e=1,Md(t,e,n,i)}finally{$e=r,ms.transition=s}}function d0(t,e,n,i){var r=$e,s=ms.transition;ms.transition=null;try{$e=4,Md(t,e,n,i)}finally{$e=r,ms.transition=s}}function Md(t,e,n,i){if(tl){var r=Ec(t,e,n,i);if(r===null)hu(t,e,i,nl,n),Nf(t,i);else if(l0(r,t,e,n,i))i.stopPropagation();else if(Nf(t,i),e&4&&-1<o0.indexOf(t)){for(;r!==null;){var s=za(r);if(s!==null&&Jm(s),s=Ec(t,e,n,i),s===null&&hu(t,e,i,nl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else hu(t,e,i,null,n)}}var nl=null;function Ec(t,e,n,i){if(nl=null,t=vd(i),t=gr(t),t!==null)if(e=Dr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Gm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return nl=t,null}function e_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zv()){case yd:return 1;case jm:return 4;case Qo:case Qv:return 16;case qm:return 536870912;default:return 16}default:return 16}}var Ii=null,Ed=null,Bo=null;function t_(){if(Bo)return Bo;var t,e=Ed,n=e.length,i,r="value"in Ii?Ii.value:Ii.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Bo=r.slice(t,1<i?1-i:void 0)}function zo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function no(){return!0}function If(){return!1}function xn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?no:If,this.isPropagationStopped=If,this}return lt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=no)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=no)},persist:function(){},isPersistent:no}),e}var Us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wd=xn(Us),Ba=lt({},Us,{view:0,detail:0}),f0=xn(Ba),ru,su,Hs,Cl=lt({},Ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Td,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Hs&&(Hs&&t.type==="mousemove"?(ru=t.screenX-Hs.screenX,su=t.screenY-Hs.screenY):su=ru=0,Hs=t),ru)},movementY:function(t){return"movementY"in t?t.movementY:su}}),Of=xn(Cl),h0=lt({},Cl,{dataTransfer:0}),p0=xn(h0),m0=lt({},Ba,{relatedTarget:0}),au=xn(m0),_0=lt({},Us,{animationName:0,elapsedTime:0,pseudoElement:0}),g0=xn(_0),v0=lt({},Us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),y0=xn(v0),x0=lt({},Us,{data:0}),Ff=xn(x0),S0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},E0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function w0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=E0[t])?!!e[t]:!1}function Td(){return w0}var T0=lt({},Ba,{key:function(t){if(t.key){var e=S0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=zo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?M0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Td,charCode:function(t){return t.type==="keypress"?zo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),A0=xn(T0),P0=lt({},Cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kf=xn(P0),R0=lt({},Ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Td}),b0=xn(R0),C0=lt({},Us,{propertyName:0,elapsedTime:0,pseudoElement:0}),L0=xn(C0),U0=lt({},Cl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),N0=xn(U0),D0=[9,13,27,32],Ad=yi&&"CompositionEvent"in window,ua=null;yi&&"documentMode"in document&&(ua=document.documentMode);var I0=yi&&"TextEvent"in window&&!ua,n_=yi&&(!Ad||ua&&8<ua&&11>=ua),Bf=" ",zf=!1;function i_(t,e){switch(t){case"keyup":return D0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function r_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var es=!1;function O0(t,e){switch(t){case"compositionend":return r_(e);case"keypress":return e.which!==32?null:(zf=!0,Bf);case"textInput":return t=e.data,t===Bf&&zf?null:t;default:return null}}function F0(t,e){if(es)return t==="compositionend"||!Ad&&i_(t,e)?(t=t_(),Bo=Ed=Ii=null,es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return n_&&e.locale!=="ko"?null:e.data;default:return null}}var k0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!k0[t.type]:e==="textarea"}function s_(t,e,n,i){Om(i),e=il(e,"onChange"),0<e.length&&(n=new wd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ca=null,Ea=null;function B0(t){__(t,0)}function Ll(t){var e=is(t);if(bm(e))return t}function z0(t,e){if(t==="change")return e}var a_=!1;if(yi){var ou;if(yi){var lu="oninput"in document;if(!lu){var Hf=document.createElement("div");Hf.setAttribute("oninput","return;"),lu=typeof Hf.oninput=="function"}ou=lu}else ou=!1;a_=ou&&(!document.documentMode||9<document.documentMode)}function Vf(){ca&&(ca.detachEvent("onpropertychange",o_),Ea=ca=null)}function o_(t){if(t.propertyName==="value"&&Ll(Ea)){var e=[];s_(e,Ea,t,vd(t)),zm(B0,e)}}function G0(t,e,n){t==="focusin"?(Vf(),ca=e,Ea=n,ca.attachEvent("onpropertychange",o_)):t==="focusout"&&Vf()}function H0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ll(Ea)}function V0(t,e){if(t==="click")return Ll(e)}function W0(t,e){if(t==="input"||t==="change")return Ll(e)}function j0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jn=typeof Object.is=="function"?Object.is:j0;function wa(t,e){if(jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!sc.call(e,r)||!jn(t[r],e[r]))return!1}return!0}function Wf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jf(t,e){var n=Wf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wf(n)}}function l_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?l_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function u_(){for(var t=window,e=$o();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=$o(t.document)}return e}function Pd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function q0(t){var e=u_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&l_(n.ownerDocument.documentElement,n)){if(i!==null&&Pd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=jf(n,s);var o=jf(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var X0=yi&&"documentMode"in document&&11>=document.documentMode,ts=null,wc=null,da=null,Tc=!1;function qf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tc||ts==null||ts!==$o(i)||(i=ts,"selectionStart"in i&&Pd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),da&&wa(da,i)||(da=i,i=il(wc,"onSelect"),0<i.length&&(e=new wd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ts)))}function io(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ns={animationend:io("Animation","AnimationEnd"),animationiteration:io("Animation","AnimationIteration"),animationstart:io("Animation","AnimationStart"),transitionend:io("Transition","TransitionEnd")},uu={},c_={};yi&&(c_=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function Ul(t){if(uu[t])return uu[t];if(!ns[t])return t;var e=ns[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in c_)return uu[t]=e[n];return t}var d_=Ul("animationend"),f_=Ul("animationiteration"),h_=Ul("animationstart"),p_=Ul("transitionend"),m_=new Map,Xf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(t,e){m_.set(t,e),Nr(e,[t])}for(var cu=0;cu<Xf.length;cu++){var du=Xf[cu],Y0=du.toLowerCase(),J0=du[0].toUpperCase()+du.slice(1);er(Y0,"on"+J0)}er(d_,"onAnimationEnd");er(f_,"onAnimationIteration");er(h_,"onAnimationStart");er("dblclick","onDoubleClick");er("focusin","onFocus");er("focusout","onBlur");er(p_,"onTransitionEnd");xs("onMouseEnter",["mouseout","mouseover"]);xs("onMouseLeave",["mouseout","mouseover"]);xs("onPointerEnter",["pointerout","pointerover"]);xs("onPointerLeave",["pointerout","pointerover"]);Nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ta));function Yf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Yv(i,e,void 0,t),t.currentTarget=null}function __(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var l=i[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&r.isPropagationStopped())break e;Yf(r,l,u),s=a}else for(o=0;o<i.length;o++){if(l=i[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&r.isPropagationStopped())break e;Yf(r,l,u),s=a}}}if(Zo)throw t=xc,Zo=!1,xc=null,t}function nt(t,e){var n=e[Cc];n===void 0&&(n=e[Cc]=new Set);var i=t+"__bubble";n.has(i)||(g_(e,t,2,!1),n.add(i))}function fu(t,e,n){var i=0;e&&(i|=4),g_(n,t,i,e)}var ro="_reactListening"+Math.random().toString(36).slice(2);function Ta(t){if(!t[ro]){t[ro]=!0,wm.forEach(function(n){n!=="selectionchange"&&($0.has(n)||fu(n,!1,t),fu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ro]||(e[ro]=!0,fu("selectionchange",!1,e))}}function g_(t,e,n,i){switch(e_(e)){case 1:var r=c0;break;case 4:r=d0;break;default:r=Md}n=r.bind(null,e,n,t),r=void 0,!yc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function hu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var l=i.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===r||a.nodeType===8&&a.parentNode===r))return;o=o.return}for(;l!==null;){if(o=gr(l),o===null)return;if(a=o.tag,a===5||a===6){i=s=o;continue e}l=l.parentNode}}i=i.return}zm(function(){var u=s,c=vd(n),d=[];e:{var f=m_.get(t);if(f!==void 0){var p=wd,v=t;switch(t){case"keypress":if(zo(n)===0)break e;case"keydown":case"keyup":p=A0;break;case"focusin":v="focus",p=au;break;case"focusout":v="blur",p=au;break;case"beforeblur":case"afterblur":p=au;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Of;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=p0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=b0;break;case d_:case f_:case h_:p=g0;break;case p_:p=L0;break;case"scroll":p=f0;break;case"wheel":p=N0;break;case"copy":case"cut":case"paste":p=y0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=kf}var y=(e&4)!==0,m=!y&&t==="scroll",h=y?f!==null?f+"Capture":null:f;y=[];for(var g=u,_;g!==null;){_=g;var x=_.stateNode;if(_.tag===5&&x!==null&&(_=x,h!==null&&(x=ya(g,h),x!=null&&y.push(Aa(g,x,_)))),m)break;g=g.return}0<y.length&&(f=new p(f,v,null,n,c),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==gc&&(v=n.relatedTarget||n.fromElement)&&(gr(v)||v[xi]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?gr(v):null,v!==null&&(m=Dr(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(y=Of,x="onMouseLeave",h="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=kf,x="onPointerLeave",h="onPointerEnter",g="pointer"),m=p==null?f:is(p),_=v==null?f:is(v),f=new y(x,g+"leave",p,n,c),f.target=m,f.relatedTarget=_,x=null,gr(c)===u&&(y=new y(h,g+"enter",v,n,c),y.target=_,y.relatedTarget=m,x=y),m=x,p&&v)t:{for(y=p,h=v,g=0,_=y;_;_=Ir(_))g++;for(_=0,x=h;x;x=Ir(x))_++;for(;0<g-_;)y=Ir(y),g--;for(;0<_-g;)h=Ir(h),_--;for(;g--;){if(y===h||h!==null&&y===h.alternate)break t;y=Ir(y),h=Ir(h)}y=null}else y=null;p!==null&&Jf(d,f,p,y,!1),v!==null&&m!==null&&Jf(d,m,v,y,!0)}}e:{if(f=u?is(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var w=z0;else if(Gf(f))if(a_)w=W0;else{w=H0;var R=G0}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(w=V0);if(w&&(w=w(t,u))){s_(d,w,n,c);break e}R&&R(t,f,u),t==="focusout"&&(R=f._wrapperState)&&R.controlled&&f.type==="number"&&fc(f,"number",f.value)}switch(R=u?is(u):window,t){case"focusin":(Gf(R)||R.contentEditable==="true")&&(ts=R,wc=u,da=null);break;case"focusout":da=wc=ts=null;break;case"mousedown":Tc=!0;break;case"contextmenu":case"mouseup":case"dragend":Tc=!1,qf(d,n,c);break;case"selectionchange":if(X0)break;case"keydown":case"keyup":qf(d,n,c)}var A;if(Ad)e:{switch(t){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else es?i_(t,n)&&(U="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(n_&&n.locale!=="ko"&&(es||U!=="onCompositionStart"?U==="onCompositionEnd"&&es&&(A=t_()):(Ii=c,Ed="value"in Ii?Ii.value:Ii.textContent,es=!0)),R=il(u,U),0<R.length&&(U=new Ff(U,t,null,n,c),d.push({event:U,listeners:R}),A?U.data=A:(A=r_(n),A!==null&&(U.data=A)))),(A=I0?O0(t,n):F0(t,n))&&(u=il(u,"onBeforeInput"),0<u.length&&(c=new Ff("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=A))}__(d,e)})}function Aa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function il(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ya(t,n),s!=null&&i.unshift(Aa(t,s,r)),s=ya(t,e),s!=null&&i.push(Aa(t,s,r))),t=t.return}return i}function Ir(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jf(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===i)break;l.tag===5&&u!==null&&(l=u,r?(a=ya(n,s),a!=null&&o.unshift(Aa(n,a,l))):r||(a=ya(n,s),a!=null&&o.push(Aa(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var K0=/\r\n?/g,Z0=/\u0000|\uFFFD/g;function $f(t){return(typeof t=="string"?t:""+t).replace(K0,`
`).replace(Z0,"")}function so(t,e,n){if(e=$f(e),$f(t)!==e&&n)throw Error(Q(425))}function rl(){}var Ac=null,Pc=null;function Rc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bc=typeof setTimeout=="function"?setTimeout:void 0,Q0=typeof clearTimeout=="function"?clearTimeout:void 0,Kf=typeof Promise=="function"?Promise:void 0,ey=typeof queueMicrotask=="function"?queueMicrotask:typeof Kf<"u"?function(t){return Kf.resolve(null).then(t).catch(ty)}:bc;function ty(t){setTimeout(function(){throw t})}function pu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ma(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ma(e)}function Hi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Zf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ns=Math.random().toString(36).slice(2),Zn="__reactFiber$"+Ns,Pa="__reactProps$"+Ns,xi="__reactContainer$"+Ns,Cc="__reactEvents$"+Ns,ny="__reactListeners$"+Ns,iy="__reactHandles$"+Ns;function gr(t){var e=t[Zn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xi]||n[Zn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Zf(t);t!==null;){if(n=t[Zn])return n;t=Zf(t)}return e}t=n,n=t.parentNode}return null}function za(t){return t=t[Zn]||t[xi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function is(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Q(33))}function Nl(t){return t[Pa]||null}var Lc=[],rs=-1;function tr(t){return{current:t}}function rt(t){0>rs||(t.current=Lc[rs],Lc[rs]=null,rs--)}function tt(t,e){rs++,Lc[rs]=t.current,t.current=e}var Zi={},Wt=tr(Zi),sn=tr(!1),Tr=Zi;function Ss(t,e){var n=t.type.contextTypes;if(!n)return Zi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function an(t){return t=t.childContextTypes,t!=null}function sl(){rt(sn),rt(Wt)}function Qf(t,e,n){if(Wt.current!==Zi)throw Error(Q(168));tt(Wt,e),tt(sn,n)}function v_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Q(108,Gv(t)||"Unknown",r));return lt({},n,i)}function al(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zi,Tr=Wt.current,tt(Wt,t),tt(sn,sn.current),!0}function eh(t,e,n){var i=t.stateNode;if(!i)throw Error(Q(169));n?(t=v_(t,e,Tr),i.__reactInternalMemoizedMergedChildContext=t,rt(sn),rt(Wt),tt(Wt,t)):rt(sn),tt(sn,n)}var fi=null,Dl=!1,mu=!1;function y_(t){fi===null?fi=[t]:fi.push(t)}function ry(t){Dl=!0,y_(t)}function nr(){if(!mu&&fi!==null){mu=!0;var t=0,e=$e;try{var n=fi;for($e=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}fi=null,Dl=!1}catch(r){throw fi!==null&&(fi=fi.slice(t+1)),Wm(yd,nr),r}finally{$e=e,mu=!1}}return null}var ss=[],as=0,ol=null,ll=0,En=[],wn=0,Ar=null,pi=1,mi="";function cr(t,e){ss[as++]=ll,ss[as++]=ol,ol=t,ll=e}function x_(t,e,n){En[wn++]=pi,En[wn++]=mi,En[wn++]=Ar,Ar=t;var i=pi;t=mi;var r=32-Vn(i)-1;i&=~(1<<r),n+=1;var s=32-Vn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,pi=1<<32-Vn(e)+r|n<<r|i,mi=s+t}else pi=1<<s|n<<r|i,mi=t}function Rd(t){t.return!==null&&(cr(t,1),x_(t,1,0))}function bd(t){for(;t===ol;)ol=ss[--as],ss[as]=null,ll=ss[--as],ss[as]=null;for(;t===Ar;)Ar=En[--wn],En[wn]=null,mi=En[--wn],En[wn]=null,pi=En[--wn],En[wn]=null}var _n=null,mn=null,st=!1,Bn=null;function S_(t,e){var n=Rn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function th(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,_n=t,mn=Hi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,_n=t,mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ar!==null?{id:pi,overflow:mi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,_n=t,mn=null,!0):!1;default:return!1}}function Uc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Nc(t){if(st){var e=mn;if(e){var n=e;if(!th(t,e)){if(Uc(t))throw Error(Q(418));e=Hi(n.nextSibling);var i=_n;e&&th(t,e)?S_(i,n):(t.flags=t.flags&-4097|2,st=!1,_n=t)}}else{if(Uc(t))throw Error(Q(418));t.flags=t.flags&-4097|2,st=!1,_n=t}}}function nh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;_n=t}function ao(t){if(t!==_n)return!1;if(!st)return nh(t),st=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Rc(t.type,t.memoizedProps)),e&&(e=mn)){if(Uc(t))throw M_(),Error(Q(418));for(;e;)S_(t,e),e=Hi(e.nextSibling)}if(nh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Q(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){mn=Hi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}mn=null}}else mn=_n?Hi(t.stateNode.nextSibling):null;return!0}function M_(){for(var t=mn;t;)t=Hi(t.nextSibling)}function Ms(){mn=_n=null,st=!1}function Cd(t){Bn===null?Bn=[t]:Bn.push(t)}var sy=wi.ReactCurrentBatchConfig;function Vs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Q(309));var i=n.stateNode}if(!i)throw Error(Q(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=r.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(Q(284));if(!n._owner)throw Error(Q(290,t))}return t}function oo(t,e){throw t=Object.prototype.toString.call(e),Error(Q(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ih(t){var e=t._init;return e(t._payload)}function E_(t){function e(h,g){if(t){var _=h.deletions;_===null?(h.deletions=[g],h.flags|=16):_.push(g)}}function n(h,g){if(!t)return null;for(;g!==null;)e(h,g),g=g.sibling;return null}function i(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function r(h,g){return h=qi(h,g),h.index=0,h.sibling=null,h}function s(h,g,_){return h.index=_,t?(_=h.alternate,_!==null?(_=_.index,_<g?(h.flags|=2,g):_):(h.flags|=2,g)):(h.flags|=1048576,g)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function l(h,g,_,x){return g===null||g.tag!==6?(g=Mu(_,h.mode,x),g.return=h,g):(g=r(g,_),g.return=h,g)}function a(h,g,_,x){var w=_.type;return w===Qr?c(h,g,_.props.children,x,_.key):g!==null&&(g.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Li&&ih(w)===g.type)?(x=r(g,_.props),x.ref=Vs(h,g,_),x.return=h,x):(x=Xo(_.type,_.key,_.props,null,h.mode,x),x.ref=Vs(h,g,_),x.return=h,x)}function u(h,g,_,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=Eu(_,h.mode,x),g.return=h,g):(g=r(g,_.children||[]),g.return=h,g)}function c(h,g,_,x,w){return g===null||g.tag!==7?(g=Sr(_,h.mode,x,w),g.return=h,g):(g=r(g,_),g.return=h,g)}function d(h,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Mu(""+g,h.mode,_),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case $a:return _=Xo(g.type,g.key,g.props,null,h.mode,_),_.ref=Vs(h,null,g),_.return=h,_;case Zr:return g=Eu(g,h.mode,_),g.return=h,g;case Li:var x=g._init;return d(h,x(g._payload),_)}if(Qs(g)||ks(g))return g=Sr(g,h.mode,_,null),g.return=h,g;oo(h,g)}return null}function f(h,g,_,x){var w=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return w!==null?null:l(h,g,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case $a:return _.key===w?a(h,g,_,x):null;case Zr:return _.key===w?u(h,g,_,x):null;case Li:return w=_._init,f(h,g,w(_._payload),x)}if(Qs(_)||ks(_))return w!==null?null:c(h,g,_,x,null);oo(h,_)}return null}function p(h,g,_,x,w){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(_)||null,l(g,h,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case $a:return h=h.get(x.key===null?_:x.key)||null,a(g,h,x,w);case Zr:return h=h.get(x.key===null?_:x.key)||null,u(g,h,x,w);case Li:var R=x._init;return p(h,g,_,R(x._payload),w)}if(Qs(x)||ks(x))return h=h.get(_)||null,c(g,h,x,w,null);oo(g,x)}return null}function v(h,g,_,x){for(var w=null,R=null,A=g,U=g=0,M=null;A!==null&&U<_.length;U++){A.index>U?(M=A,A=null):M=A.sibling;var T=f(h,A,_[U],x);if(T===null){A===null&&(A=M);break}t&&A&&T.alternate===null&&e(h,A),g=s(T,g,U),R===null?w=T:R.sibling=T,R=T,A=M}if(U===_.length)return n(h,A),st&&cr(h,U),w;if(A===null){for(;U<_.length;U++)A=d(h,_[U],x),A!==null&&(g=s(A,g,U),R===null?w=A:R.sibling=A,R=A);return st&&cr(h,U),w}for(A=i(h,A);U<_.length;U++)M=p(A,h,U,_[U],x),M!==null&&(t&&M.alternate!==null&&A.delete(M.key===null?U:M.key),g=s(M,g,U),R===null?w=M:R.sibling=M,R=M);return t&&A.forEach(function(q){return e(h,q)}),st&&cr(h,U),w}function y(h,g,_,x){var w=ks(_);if(typeof w!="function")throw Error(Q(150));if(_=w.call(_),_==null)throw Error(Q(151));for(var R=w=null,A=g,U=g=0,M=null,T=_.next();A!==null&&!T.done;U++,T=_.next()){A.index>U?(M=A,A=null):M=A.sibling;var q=f(h,A,T.value,x);if(q===null){A===null&&(A=M);break}t&&A&&q.alternate===null&&e(h,A),g=s(q,g,U),R===null?w=q:R.sibling=q,R=q,A=M}if(T.done)return n(h,A),st&&cr(h,U),w;if(A===null){for(;!T.done;U++,T=_.next())T=d(h,T.value,x),T!==null&&(g=s(T,g,U),R===null?w=T:R.sibling=T,R=T);return st&&cr(h,U),w}for(A=i(h,A);!T.done;U++,T=_.next())T=p(A,h,U,T.value,x),T!==null&&(t&&T.alternate!==null&&A.delete(T.key===null?U:T.key),g=s(T,g,U),R===null?w=T:R.sibling=T,R=T);return t&&A.forEach(function($){return e(h,$)}),st&&cr(h,U),w}function m(h,g,_,x){if(typeof _=="object"&&_!==null&&_.type===Qr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case $a:e:{for(var w=_.key,R=g;R!==null;){if(R.key===w){if(w=_.type,w===Qr){if(R.tag===7){n(h,R.sibling),g=r(R,_.props.children),g.return=h,h=g;break e}}else if(R.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Li&&ih(w)===R.type){n(h,R.sibling),g=r(R,_.props),g.ref=Vs(h,R,_),g.return=h,h=g;break e}n(h,R);break}else e(h,R);R=R.sibling}_.type===Qr?(g=Sr(_.props.children,h.mode,x,_.key),g.return=h,h=g):(x=Xo(_.type,_.key,_.props,null,h.mode,x),x.ref=Vs(h,g,_),x.return=h,h=x)}return o(h);case Zr:e:{for(R=_.key;g!==null;){if(g.key===R)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(h,g.sibling),g=r(g,_.children||[]),g.return=h,h=g;break e}else{n(h,g);break}else e(h,g);g=g.sibling}g=Eu(_,h.mode,x),g.return=h,h=g}return o(h);case Li:return R=_._init,m(h,g,R(_._payload),x)}if(Qs(_))return v(h,g,_,x);if(ks(_))return y(h,g,_,x);oo(h,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(h,g.sibling),g=r(g,_),g.return=h,h=g):(n(h,g),g=Mu(_,h.mode,x),g.return=h,h=g),o(h)):n(h,g)}return m}var Es=E_(!0),w_=E_(!1),ul=tr(null),cl=null,os=null,Ld=null;function Ud(){Ld=os=cl=null}function Nd(t){var e=ul.current;rt(ul),t._currentValue=e}function Dc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function _s(t,e){cl=t,Ld=os=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(rn=!0),t.firstContext=null)}function Ln(t){var e=t._currentValue;if(Ld!==t)if(t={context:t,memoizedValue:e,next:null},os===null){if(cl===null)throw Error(Q(308));os=t,cl.dependencies={lanes:0,firstContext:t}}else os=os.next=t;return e}var vr=null;function Dd(t){vr===null?vr=[t]:vr.push(t)}function T_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Dd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Si(t,i)}function Si(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ui=!1;function Id(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function A_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function vi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Vi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Si(t,n)}return r=i.interleaved,r===null?(e.next=e,Dd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Si(t,n)}function Go(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,xd(t,n)}}function rh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function dl(t,e,n,i){var r=t.updateQueue;Ui=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var c=t.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(s!==null){var d=r.baseState;o=0,c=u=a=null,l=s;do{var f=l.lane,p=l.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,y=l;switch(f=e,p=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(p,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,f=typeof v=="function"?v.call(p,d,f):v,f==null)break e;d=lt({},d,f);break e;case 2:Ui=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=p,a=d):c=c.next=p,o|=f;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;f=l,l=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(a=d),r.baseState=a,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Rr|=o,t.lanes=o,t.memoizedState=d}}function sh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Q(191,r));r.call(i)}}}var Ga={},ei=tr(Ga),Ra=tr(Ga),ba=tr(Ga);function yr(t){if(t===Ga)throw Error(Q(174));return t}function Od(t,e){switch(tt(ba,e),tt(Ra,t),tt(ei,Ga),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:pc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=pc(e,t)}rt(ei),tt(ei,e)}function ws(){rt(ei),rt(Ra),rt(ba)}function P_(t){yr(ba.current);var e=yr(ei.current),n=pc(e,t.type);e!==n&&(tt(Ra,t),tt(ei,n))}function Fd(t){Ra.current===t&&(rt(ei),rt(Ra))}var at=tr(0);function fl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _u=[];function kd(){for(var t=0;t<_u.length;t++)_u[t]._workInProgressVersionPrimary=null;_u.length=0}var Ho=wi.ReactCurrentDispatcher,gu=wi.ReactCurrentBatchConfig,Pr=0,ot=null,yt=null,Rt=null,hl=!1,fa=!1,Ca=0,ay=0;function Ft(){throw Error(Q(321))}function Bd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!jn(t[n],e[n]))return!1;return!0}function zd(t,e,n,i,r,s){if(Pr=s,ot=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ho.current=t===null||t.memoizedState===null?cy:dy,t=n(i,r),fa){s=0;do{if(fa=!1,Ca=0,25<=s)throw Error(Q(301));s+=1,Rt=yt=null,e.updateQueue=null,Ho.current=fy,t=n(i,r)}while(fa)}if(Ho.current=pl,e=yt!==null&&yt.next!==null,Pr=0,Rt=yt=ot=null,hl=!1,e)throw Error(Q(300));return t}function Gd(){var t=Ca!==0;return Ca=0,t}function $n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?ot.memoizedState=Rt=t:Rt=Rt.next=t,Rt}function Un(){if(yt===null){var t=ot.alternate;t=t!==null?t.memoizedState:null}else t=yt.next;var e=Rt===null?ot.memoizedState:Rt.next;if(e!==null)Rt=e,yt=t;else{if(t===null)throw Error(Q(310));yt=t,t={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},Rt===null?ot.memoizedState=Rt=t:Rt=Rt.next=t}return Rt}function La(t,e){return typeof e=="function"?e(t):e}function vu(t){var e=Un(),n=e.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=t;var i=yt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var l=o=null,a=null,u=s;do{var c=u.lane;if((Pr&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,o=i):a=a.next=d,ot.lanes|=c,Rr|=c}u=u.next}while(u!==null&&u!==s);a===null?o=i:a.next=l,jn(i,e.memoizedState)||(rn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=a,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ot.lanes|=s,Rr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function yu(t){var e=Un(),n=e.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);jn(s,e.memoizedState)||(rn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function R_(){}function b_(t,e){var n=ot,i=Un(),r=e(),s=!jn(i.memoizedState,r);if(s&&(i.memoizedState=r,rn=!0),i=i.queue,Hd(U_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Rt!==null&&Rt.memoizedState.tag&1){if(n.flags|=2048,Ua(9,L_.bind(null,n,i,r,e),void 0,null),Ct===null)throw Error(Q(349));Pr&30||C_(n,e,r)}return r}function C_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ot.updateQueue,e===null?(e={lastEffect:null,stores:null},ot.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function L_(t,e,n,i){e.value=n,e.getSnapshot=i,N_(e)&&D_(t)}function U_(t,e,n){return n(function(){N_(e)&&D_(t)})}function N_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!jn(t,n)}catch{return!0}}function D_(t){var e=Si(t,1);e!==null&&Wn(e,t,1,-1)}function ah(t){var e=$n();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:t},e.queue=t,t=t.dispatch=uy.bind(null,ot,t),[e.memoizedState,t]}function Ua(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ot.updateQueue,e===null?(e={lastEffect:null,stores:null},ot.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function I_(){return Un().memoizedState}function Vo(t,e,n,i){var r=$n();ot.flags|=t,r.memoizedState=Ua(1|e,n,void 0,i===void 0?null:i)}function Il(t,e,n,i){var r=Un();i=i===void 0?null:i;var s=void 0;if(yt!==null){var o=yt.memoizedState;if(s=o.destroy,i!==null&&Bd(i,o.deps)){r.memoizedState=Ua(e,n,s,i);return}}ot.flags|=t,r.memoizedState=Ua(1|e,n,s,i)}function oh(t,e){return Vo(8390656,8,t,e)}function Hd(t,e){return Il(2048,8,t,e)}function O_(t,e){return Il(4,2,t,e)}function F_(t,e){return Il(4,4,t,e)}function k_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function B_(t,e,n){return n=n!=null?n.concat([t]):null,Il(4,4,k_.bind(null,e,t),n)}function Vd(){}function z_(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Bd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function G_(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Bd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function H_(t,e,n){return Pr&21?(jn(n,e)||(n=Xm(),ot.lanes|=n,Rr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,rn=!0),t.memoizedState=n)}function oy(t,e){var n=$e;$e=n!==0&&4>n?n:4,t(!0);var i=gu.transition;gu.transition={};try{t(!1),e()}finally{$e=n,gu.transition=i}}function V_(){return Un().memoizedState}function ly(t,e,n){var i=ji(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},W_(t))j_(e,n);else if(n=T_(t,e,n,i),n!==null){var r=$t();Wn(n,t,i,r),q_(n,e,i)}}function uy(t,e,n){var i=ji(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(W_(t))j_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(r.hasEagerState=!0,r.eagerState=l,jn(l,o)){var a=e.interleaved;a===null?(r.next=r,Dd(e)):(r.next=a.next,a.next=r),e.interleaved=r;return}}catch{}finally{}n=T_(t,e,r,i),n!==null&&(r=$t(),Wn(n,t,i,r),q_(n,e,i))}}function W_(t){var e=t.alternate;return t===ot||e!==null&&e===ot}function j_(t,e){fa=hl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function q_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,xd(t,n)}}var pl={readContext:Ln,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useInsertionEffect:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useMutableSource:Ft,useSyncExternalStore:Ft,useId:Ft,unstable_isNewReconciler:!1},cy={readContext:Ln,useCallback:function(t,e){return $n().memoizedState=[t,e===void 0?null:e],t},useContext:Ln,useEffect:oh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Vo(4194308,4,k_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Vo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Vo(4,2,t,e)},useMemo:function(t,e){var n=$n();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=$n();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ly.bind(null,ot,t),[i.memoizedState,t]},useRef:function(t){var e=$n();return t={current:t},e.memoizedState=t},useState:ah,useDebugValue:Vd,useDeferredValue:function(t){return $n().memoizedState=t},useTransition:function(){var t=ah(!1),e=t[0];return t=oy.bind(null,t[1]),$n().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ot,r=$n();if(st){if(n===void 0)throw Error(Q(407));n=n()}else{if(n=e(),Ct===null)throw Error(Q(349));Pr&30||C_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,oh(U_.bind(null,i,s,t),[t]),i.flags|=2048,Ua(9,L_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=$n(),e=Ct.identifierPrefix;if(st){var n=mi,i=pi;n=(i&~(1<<32-Vn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ca++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ay++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},dy={readContext:Ln,useCallback:z_,useContext:Ln,useEffect:Hd,useImperativeHandle:B_,useInsertionEffect:O_,useLayoutEffect:F_,useMemo:G_,useReducer:vu,useRef:I_,useState:function(){return vu(La)},useDebugValue:Vd,useDeferredValue:function(t){var e=Un();return H_(e,yt.memoizedState,t)},useTransition:function(){var t=vu(La)[0],e=Un().memoizedState;return[t,e]},useMutableSource:R_,useSyncExternalStore:b_,useId:V_,unstable_isNewReconciler:!1},fy={readContext:Ln,useCallback:z_,useContext:Ln,useEffect:Hd,useImperativeHandle:B_,useInsertionEffect:O_,useLayoutEffect:F_,useMemo:G_,useReducer:yu,useRef:I_,useState:function(){return yu(La)},useDebugValue:Vd,useDeferredValue:function(t){var e=Un();return yt===null?e.memoizedState=t:H_(e,yt.memoizedState,t)},useTransition:function(){var t=yu(La)[0],e=Un().memoizedState;return[t,e]},useMutableSource:R_,useSyncExternalStore:b_,useId:V_,unstable_isNewReconciler:!1};function Fn(t,e){if(t&&t.defaultProps){e=lt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ic(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:lt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ol={isMounted:function(t){return(t=t._reactInternals)?Dr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=$t(),r=ji(t),s=vi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Vi(t,s,r),e!==null&&(Wn(e,t,r,i),Go(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=$t(),r=ji(t),s=vi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Vi(t,s,r),e!==null&&(Wn(e,t,r,i),Go(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=$t(),i=ji(t),r=vi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Vi(t,r,i),e!==null&&(Wn(e,t,i,n),Go(e,t,i))}};function lh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!wa(n,i)||!wa(r,s):!0}function X_(t,e,n){var i=!1,r=Zi,s=e.contextType;return typeof s=="object"&&s!==null?s=Ln(s):(r=an(e)?Tr:Wt.current,i=e.contextTypes,s=(i=i!=null)?Ss(t,r):Zi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ol,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function uh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ol.enqueueReplaceState(e,e.state,null)}function Oc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Id(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Ln(s):(s=an(e)?Tr:Wt.current,r.context=Ss(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ic(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ol.enqueueReplaceState(r,r.state,null),dl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ts(t,e){try{var n="",i=e;do n+=zv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function xu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Fc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var hy=typeof WeakMap=="function"?WeakMap:Map;function Y_(t,e,n){n=vi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){_l||(_l=!0,Xc=i),Fc(t,e)},n}function J_(t,e,n){n=vi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Fc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Fc(t,e),typeof i!="function"&&(Wi===null?Wi=new Set([this]):Wi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ch(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new hy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Py.bind(null,t,e,n),e.then(t,t))}function dh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function fh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=vi(-1,1),e.tag=2,Vi(n,e,1))),n.lanes|=1),t)}var py=wi.ReactCurrentOwner,rn=!1;function Yt(t,e,n,i){e.child=t===null?w_(e,null,n,i):Es(e,t.child,n,i)}function hh(t,e,n,i,r){n=n.render;var s=e.ref;return _s(e,r),i=zd(t,e,n,i,s,r),n=Gd(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Mi(t,e,r)):(st&&n&&Rd(e),e.flags|=1,Yt(t,e,i,r),e.child)}function ph(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Kd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,$_(t,e,s,i,r)):(t=Xo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:wa,n(o,i)&&t.ref===e.ref)return Mi(t,e,r)}return e.flags|=1,t=qi(s,i),t.ref=e.ref,t.return=e,e.child=t}function $_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(wa(s,i)&&t.ref===e.ref)if(rn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(rn=!0);else return e.lanes=t.lanes,Mi(t,e,r)}return kc(t,e,n,i,r)}function K_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},tt(us,pn),pn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,tt(us,pn),pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,tt(us,pn),pn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,tt(us,pn),pn|=i;return Yt(t,e,r,n),e.child}function Z_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function kc(t,e,n,i,r){var s=an(n)?Tr:Wt.current;return s=Ss(e,s),_s(e,r),n=zd(t,e,n,i,s,r),i=Gd(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Mi(t,e,r)):(st&&i&&Rd(e),e.flags|=1,Yt(t,e,n,r),e.child)}function mh(t,e,n,i,r){if(an(n)){var s=!0;al(e)}else s=!1;if(_s(e,r),e.stateNode===null)Wo(t,e),X_(e,n,i),Oc(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ln(u):(u=an(n)?Tr:Wt.current,u=Ss(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==i||a!==u)&&uh(e,o,i,u),Ui=!1;var f=e.memoizedState;o.state=f,dl(e,i,o,r),a=e.memoizedState,l!==i||f!==a||sn.current||Ui?(typeof c=="function"&&(Ic(e,n,c,i),a=e.memoizedState),(l=Ui||lh(e,n,l,i,f,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=a),o.props=i,o.state=a,o.context=u,i=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,A_(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:Fn(e.type,l),o.props=u,d=e.pendingProps,f=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ln(a):(a=an(n)?Tr:Wt.current,a=Ss(e,a));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||f!==a)&&uh(e,o,i,a),Ui=!1,f=e.memoizedState,o.state=f,dl(e,i,o,r);var v=e.memoizedState;l!==d||f!==v||sn.current||Ui?(typeof p=="function"&&(Ic(e,n,p,i),v=e.memoizedState),(u=Ui||lh(e,n,u,i,f,v,a)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=a,i=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Bc(t,e,n,i,s,r)}function Bc(t,e,n,i,r,s){Z_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&eh(e,n,!1),Mi(t,e,s);i=e.stateNode,py.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Es(e,t.child,null,s),e.child=Es(e,null,l,s)):Yt(t,e,l,s),e.memoizedState=i.state,r&&eh(e,n,!0),e.child}function Q_(t){var e=t.stateNode;e.pendingContext?Qf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Qf(t,e.context,!1),Od(t,e.containerInfo)}function _h(t,e,n,i,r){return Ms(),Cd(r),e.flags|=256,Yt(t,e,n,i),e.child}var zc={dehydrated:null,treeContext:null,retryLane:0};function Gc(t){return{baseLanes:t,cachePool:null,transitions:null}}function eg(t,e,n){var i=e.pendingProps,r=at.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(r&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),tt(at,r&1),t===null)return Nc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Bl(o,i,0,null),t=Sr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Gc(n),e.memoizedState=zc,t):Wd(e,o));if(r=t.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return my(t,e,o,i,l,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,l=r.sibling;var a={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=a,e.deletions=null):(i=qi(r,a),i.subtreeFlags=r.subtreeFlags&14680064),l!==null?s=qi(l,s):(s=Sr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Gc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=zc,i}return s=t.child,t=s.sibling,i=qi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Wd(t,e){return e=Bl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function lo(t,e,n,i){return i!==null&&Cd(i),Es(e,t.child,null,n),t=Wd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function my(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=xu(Error(Q(422))),lo(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Bl({mode:"visible",children:i.children},r,0,null),s=Sr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Es(e,t.child,null,o),e.child.memoizedState=Gc(o),e.memoizedState=zc,s);if(!(e.mode&1))return lo(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var l=i.dgst;return i=l,s=Error(Q(419)),i=xu(s,i,void 0),lo(t,e,o,i)}if(l=(o&t.childLanes)!==0,rn||l){if(i=Ct,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Si(t,r),Wn(i,t,r,-1))}return $d(),i=xu(Error(Q(421))),lo(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Ry.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,mn=Hi(r.nextSibling),_n=e,st=!0,Bn=null,t!==null&&(En[wn++]=pi,En[wn++]=mi,En[wn++]=Ar,pi=t.id,mi=t.overflow,Ar=e),e=Wd(e,i.children),e.flags|=4096,e)}function gh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Dc(t.return,e,n)}function Su(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function tg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Yt(t,e,i.children,n),i=at.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gh(t,n,e);else if(t.tag===19)gh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(tt(at,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&fl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Su(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&fl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Su(e,!0,n,null,s);break;case"together":Su(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Wo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Rr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Q(153));if(e.child!==null){for(t=e.child,n=qi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=qi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function _y(t,e,n){switch(e.tag){case 3:Q_(e),Ms();break;case 5:P_(e);break;case 1:an(e.type)&&al(e);break;case 4:Od(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;tt(ul,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(tt(at,at.current&1),e.flags|=128,null):n&e.child.childLanes?eg(t,e,n):(tt(at,at.current&1),t=Mi(t,e,n),t!==null?t.sibling:null);tt(at,at.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return tg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),tt(at,at.current),i)break;return null;case 22:case 23:return e.lanes=0,K_(t,e,n)}return Mi(t,e,n)}var ng,Hc,ig,rg;ng=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hc=function(){};ig=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,yr(ei.current);var s=null;switch(n){case"input":r=cc(t,r),i=cc(t,i),s=[];break;case"select":r=lt({},r,{value:void 0}),i=lt({},i,{value:void 0}),s=[];break;case"textarea":r=hc(t,r),i=hc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=rl)}mc(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var l=r[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ga.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var a=i[u];if(l=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ga.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&nt("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};rg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ws(t,e){if(!st)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function gy(t,e,n){var i=e.pendingProps;switch(bd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return an(e.type)&&sl(),kt(e),null;case 3:return i=e.stateNode,ws(),rt(sn),rt(Wt),kd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ao(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Bn!==null&&($c(Bn),Bn=null))),Hc(t,e),kt(e),null;case 5:Fd(e);var r=yr(ba.current);if(n=e.type,t!==null&&e.stateNode!=null)ig(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Q(166));return kt(e),null}if(t=yr(ei.current),ao(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Zn]=e,i[Pa]=s,t=(e.mode&1)!==0,n){case"dialog":nt("cancel",i),nt("close",i);break;case"iframe":case"object":case"embed":nt("load",i);break;case"video":case"audio":for(r=0;r<ta.length;r++)nt(ta[r],i);break;case"source":nt("error",i);break;case"img":case"image":case"link":nt("error",i),nt("load",i);break;case"details":nt("toggle",i);break;case"input":Af(i,s),nt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},nt("invalid",i);break;case"textarea":Rf(i,s),nt("invalid",i)}mc(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?i.textContent!==l&&(s.suppressHydrationWarning!==!0&&so(i.textContent,l,t),r=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&so(i.textContent,l,t),r=["children",""+l]):ga.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&nt("scroll",i)}switch(n){case"input":Ka(i),Pf(i,s,!0);break;case"textarea":Ka(i),bf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=rl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Um(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Zn]=e,t[Pa]=i,ng(t,e,!1,!1),e.stateNode=t;e:{switch(o=_c(n,i),n){case"dialog":nt("cancel",t),nt("close",t),r=i;break;case"iframe":case"object":case"embed":nt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ta.length;r++)nt(ta[r],t);r=i;break;case"source":nt("error",t),r=i;break;case"img":case"image":case"link":nt("error",t),nt("load",t),r=i;break;case"details":nt("toggle",t),r=i;break;case"input":Af(t,i),r=cc(t,i),nt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=lt({},i,{value:void 0}),nt("invalid",t);break;case"textarea":Rf(t,i),r=hc(t,i),nt("invalid",t);break;default:r=i}mc(n,r),l=r;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Im(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Nm(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&va(t,a):typeof a=="number"&&va(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ga.hasOwnProperty(s)?a!=null&&s==="onScroll"&&nt("scroll",t):a!=null&&pd(t,s,a,o))}switch(n){case"input":Ka(t),Pf(t,i,!1);break;case"textarea":Ka(t),bf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ki(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?fs(t,!!i.multiple,s,!1):i.defaultValue!=null&&fs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=rl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return kt(e),null;case 6:if(t&&e.stateNode!=null)rg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Q(166));if(n=yr(ba.current),yr(ei.current),ao(e)){if(i=e.stateNode,n=e.memoizedProps,i[Zn]=e,(s=i.nodeValue!==n)&&(t=_n,t!==null))switch(t.tag){case 3:so(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&so(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Zn]=e,e.stateNode=i}return kt(e),null;case 13:if(rt(at),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(st&&mn!==null&&e.mode&1&&!(e.flags&128))M_(),Ms(),e.flags|=98560,s=!1;else if(s=ao(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(Q(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Q(317));s[Zn]=e}else Ms(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;kt(e),s=!1}else Bn!==null&&($c(Bn),Bn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||at.current&1?xt===0&&(xt=3):$d())),e.updateQueue!==null&&(e.flags|=4),kt(e),null);case 4:return ws(),Hc(t,e),t===null&&Ta(e.stateNode.containerInfo),kt(e),null;case 10:return Nd(e.type._context),kt(e),null;case 17:return an(e.type)&&sl(),kt(e),null;case 19:if(rt(at),s=e.memoizedState,s===null)return kt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ws(s,!1);else{if(xt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=fl(t),o!==null){for(e.flags|=128,Ws(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return tt(at,at.current&1|2),e.child}t=t.sibling}s.tail!==null&&pt()>As&&(e.flags|=128,i=!0,Ws(s,!1),e.lanes=4194304)}else{if(!i)if(t=fl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ws(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!st)return kt(e),null}else 2*pt()-s.renderingStartTime>As&&n!==1073741824&&(e.flags|=128,i=!0,Ws(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=pt(),e.sibling=null,n=at.current,tt(at,i?n&1|2:n&1),e):(kt(e),null);case 22:case 23:return Jd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?pn&1073741824&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),null;case 24:return null;case 25:return null}throw Error(Q(156,e.tag))}function vy(t,e){switch(bd(e),e.tag){case 1:return an(e.type)&&sl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ws(),rt(sn),rt(Wt),kd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Fd(e),null;case 13:if(rt(at),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Q(340));Ms()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return rt(at),null;case 4:return ws(),null;case 10:return Nd(e.type._context),null;case 22:case 23:return Jd(),null;case 24:return null;default:return null}}var uo=!1,Gt=!1,yy=typeof WeakSet=="function"?WeakSet:Set,pe=null;function ls(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ft(t,e,i)}else n.current=null}function Vc(t,e,n){try{n()}catch(i){ft(t,e,i)}}var vh=!1;function xy(t,e){if(Ac=tl,t=u_(),Pd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(l=o+r),d!==s||i!==0&&d.nodeType!==3||(a=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++u===r&&(l=o),f===s&&++c===i&&(a=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pc={focusedElem:t,selectionRange:n},tl=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,m=v.memoizedState,h=e.stateNode,g=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:Fn(e.type,y),m);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Q(163))}}catch(x){ft(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return v=vh,vh=!1,v}function ha(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Vc(e,n,s)}r=r.next}while(r!==i)}}function Fl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Wc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function sg(t){var e=t.alternate;e!==null&&(t.alternate=null,sg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Zn],delete e[Pa],delete e[Cc],delete e[ny],delete e[iy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ag(t){return t.tag===5||t.tag===3||t.tag===4}function yh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ag(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=rl));else if(i!==4&&(t=t.child,t!==null))for(jc(t,e,n),t=t.sibling;t!==null;)jc(t,e,n),t=t.sibling}function qc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(qc(t,e,n),t=t.sibling;t!==null;)qc(t,e,n),t=t.sibling}var Lt=null,kn=!1;function Ti(t,e,n){for(n=n.child;n!==null;)og(t,e,n),n=n.sibling}function og(t,e,n){if(Qn&&typeof Qn.onCommitFiberUnmount=="function")try{Qn.onCommitFiberUnmount(bl,n)}catch{}switch(n.tag){case 5:Gt||ls(n,e);case 6:var i=Lt,r=kn;Lt=null,Ti(t,e,n),Lt=i,kn=r,Lt!==null&&(kn?(t=Lt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Lt.removeChild(n.stateNode));break;case 18:Lt!==null&&(kn?(t=Lt,n=n.stateNode,t.nodeType===8?pu(t.parentNode,n):t.nodeType===1&&pu(t,n),Ma(t)):pu(Lt,n.stateNode));break;case 4:i=Lt,r=kn,Lt=n.stateNode.containerInfo,kn=!0,Ti(t,e,n),Lt=i,kn=r;break;case 0:case 11:case 14:case 15:if(!Gt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Vc(n,e,o),r=r.next}while(r!==i)}Ti(t,e,n);break;case 1:if(!Gt&&(ls(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(l){ft(n,e,l)}Ti(t,e,n);break;case 21:Ti(t,e,n);break;case 22:n.mode&1?(Gt=(i=Gt)||n.memoizedState!==null,Ti(t,e,n),Gt=i):Ti(t,e,n);break;default:Ti(t,e,n)}}function xh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new yy),e.forEach(function(i){var r=by.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Nn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Lt=l.stateNode,kn=!1;break e;case 3:Lt=l.stateNode.containerInfo,kn=!0;break e;case 4:Lt=l.stateNode.containerInfo,kn=!0;break e}l=l.return}if(Lt===null)throw Error(Q(160));og(s,o,r),Lt=null,kn=!1;var a=r.alternate;a!==null&&(a.return=null),r.return=null}catch(u){ft(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)lg(e,t),e=e.sibling}function lg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Nn(e,t),Xn(t),i&4){try{ha(3,t,t.return),Fl(3,t)}catch(y){ft(t,t.return,y)}try{ha(5,t,t.return)}catch(y){ft(t,t.return,y)}}break;case 1:Nn(e,t),Xn(t),i&512&&n!==null&&ls(n,n.return);break;case 5:if(Nn(e,t),Xn(t),i&512&&n!==null&&ls(n,n.return),t.flags&32){var r=t.stateNode;try{va(r,"")}catch(y){ft(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Cm(r,s),_c(l,o);var u=_c(l,s);for(o=0;o<a.length;o+=2){var c=a[o],d=a[o+1];c==="style"?Im(r,d):c==="dangerouslySetInnerHTML"?Nm(r,d):c==="children"?va(r,d):pd(r,c,d,u)}switch(l){case"input":dc(r,s);break;case"textarea":Lm(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?fs(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?fs(r,!!s.multiple,s.defaultValue,!0):fs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Pa]=s}catch(y){ft(t,t.return,y)}}break;case 6:if(Nn(e,t),Xn(t),i&4){if(t.stateNode===null)throw Error(Q(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){ft(t,t.return,y)}}break;case 3:if(Nn(e,t),Xn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ma(e.containerInfo)}catch(y){ft(t,t.return,y)}break;case 4:Nn(e,t),Xn(t);break;case 13:Nn(e,t),Xn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Xd=pt())),i&4&&xh(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Gt=(u=Gt)||c,Nn(e,t),Gt=u):Nn(e,t),Xn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(pe=t,c=t.child;c!==null;){for(d=pe=c;pe!==null;){switch(f=pe,p=f.child,f.tag){case 0:case 11:case 14:case 15:ha(4,f,f.return);break;case 1:ls(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){ft(i,n,y)}}break;case 5:ls(f,f.return);break;case 22:if(f.memoizedState!==null){Mh(d);continue}}p!==null?(p.return=f,pe=p):Mh(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Dm("display",o))}catch(y){ft(t,t.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){ft(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Nn(e,t),Xn(t),i&4&&xh(t);break;case 21:break;default:Nn(e,t),Xn(t)}}function Xn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ag(n)){var i=n;break e}n=n.return}throw Error(Q(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(va(r,""),i.flags&=-33);var s=yh(t);qc(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,l=yh(t);jc(t,l,o);break;default:throw Error(Q(161))}}catch(a){ft(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Sy(t,e,n){pe=t,ug(t)}function ug(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||uo;if(!o){var l=r.alternate,a=l!==null&&l.memoizedState!==null||Gt;l=uo;var u=Gt;if(uo=o,(Gt=a)&&!u)for(pe=r;pe!==null;)o=pe,a=o.child,o.tag===22&&o.memoizedState!==null?Eh(r):a!==null?(a.return=o,pe=a):Eh(r);for(;s!==null;)pe=s,ug(s),s=s.sibling;pe=r,uo=l,Gt=u}Sh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):Sh(t)}}function Sh(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Gt||Fl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Gt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Fn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&sh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}sh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Ma(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Q(163))}Gt||e.flags&512&&Wc(e)}catch(f){ft(e,e.return,f)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function Mh(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function Eh(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Fl(4,e)}catch(a){ft(e,n,a)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(a){ft(e,r,a)}}var s=e.return;try{Wc(e)}catch(a){ft(e,s,a)}break;case 5:var o=e.return;try{Wc(e)}catch(a){ft(e,o,a)}}}catch(a){ft(e,e.return,a)}if(e===t){pe=null;break}var l=e.sibling;if(l!==null){l.return=e.return,pe=l;break}pe=e.return}}var My=Math.ceil,ml=wi.ReactCurrentDispatcher,jd=wi.ReactCurrentOwner,Cn=wi.ReactCurrentBatchConfig,je=0,Ct=null,vt=null,Dt=0,pn=0,us=tr(0),xt=0,Na=null,Rr=0,kl=0,qd=0,pa=null,tn=null,Xd=0,As=1/0,di=null,_l=!1,Xc=null,Wi=null,co=!1,Oi=null,gl=0,ma=0,Yc=null,jo=-1,qo=0;function $t(){return je&6?pt():jo!==-1?jo:jo=pt()}function ji(t){return t.mode&1?je&2&&Dt!==0?Dt&-Dt:sy.transition!==null?(qo===0&&(qo=Xm()),qo):(t=$e,t!==0||(t=window.event,t=t===void 0?16:e_(t.type)),t):1}function Wn(t,e,n,i){if(50<ma)throw ma=0,Yc=null,Error(Q(185));ka(t,n,i),(!(je&2)||t!==Ct)&&(t===Ct&&(!(je&2)&&(kl|=n),xt===4&&Di(t,Dt)),on(t,i),n===1&&je===0&&!(e.mode&1)&&(As=pt()+500,Dl&&nr()))}function on(t,e){var n=t.callbackNode;s0(t,e);var i=el(t,t===Ct?Dt:0);if(i===0)n!==null&&Uf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Uf(n),e===1)t.tag===0?ry(wh.bind(null,t)):y_(wh.bind(null,t)),ey(function(){!(je&6)&&nr()}),n=null;else{switch(Ym(i)){case 1:n=yd;break;case 4:n=jm;break;case 16:n=Qo;break;case 536870912:n=qm;break;default:n=Qo}n=gg(n,cg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function cg(t,e){if(jo=-1,qo=0,je&6)throw Error(Q(327));var n=t.callbackNode;if(gs()&&t.callbackNode!==n)return null;var i=el(t,t===Ct?Dt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=vl(t,i);else{e=i;var r=je;je|=2;var s=fg();(Ct!==t||Dt!==e)&&(di=null,As=pt()+500,xr(t,e));do try{Ty();break}catch(l){dg(t,l)}while(!0);Ud(),ml.current=s,je=r,vt!==null?e=0:(Ct=null,Dt=0,e=xt)}if(e!==0){if(e===2&&(r=Sc(t),r!==0&&(i=r,e=Jc(t,r))),e===1)throw n=Na,xr(t,0),Di(t,i),on(t,pt()),n;if(e===6)Di(t,i);else{if(r=t.current.alternate,!(i&30)&&!Ey(r)&&(e=vl(t,i),e===2&&(s=Sc(t),s!==0&&(i=s,e=Jc(t,s))),e===1))throw n=Na,xr(t,0),Di(t,i),on(t,pt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Q(345));case 2:dr(t,tn,di);break;case 3:if(Di(t,i),(i&130023424)===i&&(e=Xd+500-pt(),10<e)){if(el(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){$t(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=bc(dr.bind(null,t,tn,di),e);break}dr(t,tn,di);break;case 4:if(Di(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Vn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*My(i/1960))-i,10<i){t.timeoutHandle=bc(dr.bind(null,t,tn,di),i);break}dr(t,tn,di);break;case 5:dr(t,tn,di);break;default:throw Error(Q(329))}}}return on(t,pt()),t.callbackNode===n?cg.bind(null,t):null}function Jc(t,e){var n=pa;return t.current.memoizedState.isDehydrated&&(xr(t,e).flags|=256),t=vl(t,e),t!==2&&(e=tn,tn=n,e!==null&&$c(e)),t}function $c(t){tn===null?tn=t:tn.push.apply(tn,t)}function Ey(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!jn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Di(t,e){for(e&=~qd,e&=~kl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Vn(e),i=1<<n;t[n]=-1,e&=~i}}function wh(t){if(je&6)throw Error(Q(327));gs();var e=el(t,0);if(!(e&1))return on(t,pt()),null;var n=vl(t,e);if(t.tag!==0&&n===2){var i=Sc(t);i!==0&&(e=i,n=Jc(t,i))}if(n===1)throw n=Na,xr(t,0),Di(t,e),on(t,pt()),n;if(n===6)throw Error(Q(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,dr(t,tn,di),on(t,pt()),null}function Yd(t,e){var n=je;je|=1;try{return t(e)}finally{je=n,je===0&&(As=pt()+500,Dl&&nr())}}function br(t){Oi!==null&&Oi.tag===0&&!(je&6)&&gs();var e=je;je|=1;var n=Cn.transition,i=$e;try{if(Cn.transition=null,$e=1,t)return t()}finally{$e=i,Cn.transition=n,je=e,!(je&6)&&nr()}}function Jd(){pn=us.current,rt(us)}function xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Q0(n)),vt!==null)for(n=vt.return;n!==null;){var i=n;switch(bd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&sl();break;case 3:ws(),rt(sn),rt(Wt),kd();break;case 5:Fd(i);break;case 4:ws();break;case 13:rt(at);break;case 19:rt(at);break;case 10:Nd(i.type._context);break;case 22:case 23:Jd()}n=n.return}if(Ct=t,vt=t=qi(t.current,null),Dt=pn=e,xt=0,Na=null,qd=kl=Rr=0,tn=pa=null,vr!==null){for(e=0;e<vr.length;e++)if(n=vr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}vr=null}return t}function dg(t,e){do{var n=vt;try{if(Ud(),Ho.current=pl,hl){for(var i=ot.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}hl=!1}if(Pr=0,Rt=yt=ot=null,fa=!1,Ca=0,jd.current=null,n===null||n.return===null){xt=1,Na=e,vt=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Dt,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=dh(o);if(p!==null){p.flags&=-257,fh(p,o,l,s,e),p.mode&1&&ch(s,u,e),e=p,a=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(a),e.updateQueue=y}else v.add(a);break e}else{if(!(e&1)){ch(s,u,e),$d();break e}a=Error(Q(426))}}else if(st&&l.mode&1){var m=dh(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),fh(m,o,l,s,e),Cd(Ts(a,l));break e}}s=a=Ts(a,l),xt!==4&&(xt=2),pa===null?pa=[s]:pa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Y_(s,a,e);rh(s,h);break e;case 1:l=a;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Wi===null||!Wi.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=J_(s,l,e);rh(s,x);break e}}s=s.return}while(s!==null)}pg(n)}catch(w){e=w,vt===n&&n!==null&&(vt=n=n.return);continue}break}while(!0)}function fg(){var t=ml.current;return ml.current=pl,t===null?pl:t}function $d(){(xt===0||xt===3||xt===2)&&(xt=4),Ct===null||!(Rr&268435455)&&!(kl&268435455)||Di(Ct,Dt)}function vl(t,e){var n=je;je|=2;var i=fg();(Ct!==t||Dt!==e)&&(di=null,xr(t,e));do try{wy();break}catch(r){dg(t,r)}while(!0);if(Ud(),je=n,ml.current=i,vt!==null)throw Error(Q(261));return Ct=null,Dt=0,xt}function wy(){for(;vt!==null;)hg(vt)}function Ty(){for(;vt!==null&&!$v();)hg(vt)}function hg(t){var e=_g(t.alternate,t,pn);t.memoizedProps=t.pendingProps,e===null?pg(t):vt=e,jd.current=null}function pg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=vy(n,e),n!==null){n.flags&=32767,vt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xt=6,vt=null;return}}else if(n=gy(n,e,pn),n!==null){vt=n;return}if(e=e.sibling,e!==null){vt=e;return}vt=e=t}while(e!==null);xt===0&&(xt=5)}function dr(t,e,n){var i=$e,r=Cn.transition;try{Cn.transition=null,$e=1,Ay(t,e,n,i)}finally{Cn.transition=r,$e=i}return null}function Ay(t,e,n,i){do gs();while(Oi!==null);if(je&6)throw Error(Q(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Q(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(a0(t,s),t===Ct&&(vt=Ct=null,Dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||co||(co=!0,gg(Qo,function(){return gs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Cn.transition,Cn.transition=null;var o=$e;$e=1;var l=je;je|=4,jd.current=null,xy(t,n),lg(n,t),q0(Pc),tl=!!Ac,Pc=Ac=null,t.current=n,Sy(n),Kv(),je=l,$e=o,Cn.transition=s}else t.current=n;if(co&&(co=!1,Oi=t,gl=r),s=t.pendingLanes,s===0&&(Wi=null),e0(n.stateNode),on(t,pt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(_l)throw _l=!1,t=Xc,Xc=null,t;return gl&1&&t.tag!==0&&gs(),s=t.pendingLanes,s&1?t===Yc?ma++:(ma=0,Yc=t):ma=0,nr(),null}function gs(){if(Oi!==null){var t=Ym(gl),e=Cn.transition,n=$e;try{if(Cn.transition=null,$e=16>t?16:t,Oi===null)var i=!1;else{if(t=Oi,Oi=null,gl=0,je&6)throw Error(Q(331));var r=je;for(je|=4,pe=t.current;pe!==null;){var s=pe,o=s.child;if(pe.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(pe=u;pe!==null;){var c=pe;switch(c.tag){case 0:case 11:case 15:ha(8,c,s)}var d=c.child;if(d!==null)d.return=c,pe=d;else for(;pe!==null;){c=pe;var f=c.sibling,p=c.return;if(sg(c),c===u){pe=null;break}if(f!==null){f.return=p,pe=f;break}pe=p}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ha(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,pe=h;break e}pe=s.return}}var g=t.current;for(pe=g;pe!==null;){o=pe;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,pe=_;else e:for(o=g;pe!==null;){if(l=pe,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Fl(9,l)}}catch(w){ft(l,l.return,w)}if(l===o){pe=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,pe=x;break e}pe=l.return}}if(je=r,nr(),Qn&&typeof Qn.onPostCommitFiberRoot=="function")try{Qn.onPostCommitFiberRoot(bl,t)}catch{}i=!0}return i}finally{$e=n,Cn.transition=e}}return!1}function Th(t,e,n){e=Ts(n,e),e=Y_(t,e,1),t=Vi(t,e,1),e=$t(),t!==null&&(ka(t,1,e),on(t,e))}function ft(t,e,n){if(t.tag===3)Th(t,t,n);else for(;e!==null;){if(e.tag===3){Th(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Wi===null||!Wi.has(i))){t=Ts(n,t),t=J_(e,t,1),e=Vi(e,t,1),t=$t(),e!==null&&(ka(e,1,t),on(e,t));break}}e=e.return}}function Py(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=$t(),t.pingedLanes|=t.suspendedLanes&n,Ct===t&&(Dt&n)===n&&(xt===4||xt===3&&(Dt&130023424)===Dt&&500>pt()-Xd?xr(t,0):qd|=n),on(t,e)}function mg(t,e){e===0&&(t.mode&1?(e=eo,eo<<=1,!(eo&130023424)&&(eo=4194304)):e=1);var n=$t();t=Si(t,e),t!==null&&(ka(t,e,n),on(t,n))}function Ry(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),mg(t,n)}function by(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Q(314))}i!==null&&i.delete(e),mg(t,n)}var _g;_g=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||sn.current)rn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return rn=!1,_y(t,e,n);rn=!!(t.flags&131072)}else rn=!1,st&&e.flags&1048576&&x_(e,ll,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Wo(t,e),t=e.pendingProps;var r=Ss(e,Wt.current);_s(e,n),r=zd(null,e,i,t,r,n);var s=Gd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,an(i)?(s=!0,al(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Id(e),r.updater=Ol,e.stateNode=r,r._reactInternals=e,Oc(e,i,t,n),e=Bc(null,e,i,!0,s,n)):(e.tag=0,st&&s&&Rd(e),Yt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Wo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ly(i),t=Fn(i,t),r){case 0:e=kc(null,e,i,t,n);break e;case 1:e=mh(null,e,i,t,n);break e;case 11:e=hh(null,e,i,t,n);break e;case 14:e=ph(null,e,i,Fn(i.type,t),n);break e}throw Error(Q(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),kc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),mh(t,e,i,r,n);case 3:e:{if(Q_(e),t===null)throw Error(Q(387));i=e.pendingProps,s=e.memoizedState,r=s.element,A_(t,e),dl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ts(Error(Q(423)),e),e=_h(t,e,i,n,r);break e}else if(i!==r){r=Ts(Error(Q(424)),e),e=_h(t,e,i,n,r);break e}else for(mn=Hi(e.stateNode.containerInfo.firstChild),_n=e,st=!0,Bn=null,n=w_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ms(),i===r){e=Mi(t,e,n);break e}Yt(t,e,i,n)}e=e.child}return e;case 5:return P_(e),t===null&&Nc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Rc(i,r)?o=null:s!==null&&Rc(i,s)&&(e.flags|=32),Z_(t,e),Yt(t,e,o,n),e.child;case 6:return t===null&&Nc(e),null;case 13:return eg(t,e,n);case 4:return Od(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Es(e,null,i,n):Yt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),hh(t,e,i,r,n);case 7:return Yt(t,e,e.pendingProps,n),e.child;case 8:return Yt(t,e,e.pendingProps.children,n),e.child;case 12:return Yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,tt(ul,i._currentValue),i._currentValue=o,s!==null)if(jn(s.value,o)){if(s.children===r.children&&!sn.current){e=Mi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===i){if(s.tag===1){a=vi(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Dc(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Q(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Dc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Yt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,_s(e,n),r=Ln(r),i=i(r),e.flags|=1,Yt(t,e,i,n),e.child;case 14:return i=e.type,r=Fn(i,e.pendingProps),r=Fn(i.type,r),ph(t,e,i,r,n);case 15:return $_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),Wo(t,e),e.tag=1,an(i)?(t=!0,al(e)):t=!1,_s(e,n),X_(e,i,r),Oc(e,i,r,n),Bc(null,e,i,!0,t,n);case 19:return tg(t,e,n);case 22:return K_(t,e,n)}throw Error(Q(156,e.tag))};function gg(t,e){return Wm(t,e)}function Cy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(t,e,n,i){return new Cy(t,e,n,i)}function Kd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ly(t){if(typeof t=="function")return Kd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===_d)return 11;if(t===gd)return 14}return 2}function qi(t,e){var n=t.alternate;return n===null?(n=Rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Xo(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Kd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Qr:return Sr(n.children,r,s,e);case md:o=8,r|=8;break;case ac:return t=Rn(12,n,e,r|2),t.elementType=ac,t.lanes=s,t;case oc:return t=Rn(13,n,e,r),t.elementType=oc,t.lanes=s,t;case lc:return t=Rn(19,n,e,r),t.elementType=lc,t.lanes=s,t;case Pm:return Bl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Tm:o=10;break e;case Am:o=9;break e;case _d:o=11;break e;case gd:o=14;break e;case Li:o=16,i=null;break e}throw Error(Q(130,t==null?t:typeof t,""))}return e=Rn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Sr(t,e,n,i){return t=Rn(7,t,i,e),t.lanes=n,t}function Bl(t,e,n,i){return t=Rn(22,t,i,e),t.elementType=Pm,t.lanes=n,t.stateNode={isHidden:!1},t}function Mu(t,e,n){return t=Rn(6,t,null,e),t.lanes=n,t}function Eu(t,e,n){return e=Rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Uy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=iu(0),this.expirationTimes=iu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=iu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Zd(t,e,n,i,r,s,o,l,a){return t=new Uy(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Rn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Id(s),t}function Ny(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function vg(t){if(!t)return Zi;t=t._reactInternals;e:{if(Dr(t)!==t||t.tag!==1)throw Error(Q(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(an(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Q(171))}if(t.tag===1){var n=t.type;if(an(n))return v_(t,n,e)}return e}function yg(t,e,n,i,r,s,o,l,a){return t=Zd(n,i,!0,t,r,s,o,l,a),t.context=vg(null),n=t.current,i=$t(),r=ji(n),s=vi(i,r),s.callback=e??null,Vi(n,s,r),t.current.lanes=r,ka(t,r,i),on(t,i),t}function zl(t,e,n,i){var r=e.current,s=$t(),o=ji(r);return n=vg(n),e.context===null?e.context=n:e.pendingContext=n,e=vi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Vi(r,e,o),t!==null&&(Wn(t,r,o,s),Go(t,r,o)),o}function yl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ah(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Qd(t,e){Ah(t,e),(t=t.alternate)&&Ah(t,e)}function Dy(){return null}var xg=typeof reportError=="function"?reportError:function(t){console.error(t)};function ef(t){this._internalRoot=t}Gl.prototype.render=ef.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Q(409));zl(t,e,null,null)};Gl.prototype.unmount=ef.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;br(function(){zl(null,t,null,null)}),e[xi]=null}};function Gl(t){this._internalRoot=t}Gl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Km();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ni.length&&e!==0&&e<Ni[n].priority;n++);Ni.splice(n,0,t),n===0&&Qm(t)}};function tf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Hl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ph(){}function Iy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=yl(o);s.call(u)}}var o=yg(e,i,t,0,null,!1,!1,"",Ph);return t._reactRootContainer=o,t[xi]=o.current,Ta(t.nodeType===8?t.parentNode:t),br(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var l=i;i=function(){var u=yl(a);l.call(u)}}var a=Zd(t,0,!1,null,null,!1,!1,"",Ph);return t._reactRootContainer=a,t[xi]=a.current,Ta(t.nodeType===8?t.parentNode:t),br(function(){zl(e,a,n,i)}),a}function Vl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var l=r;r=function(){var a=yl(o);l.call(a)}}zl(e,o,t,r)}else o=Iy(n,e,t,r,i);return yl(o)}Jm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ea(e.pendingLanes);n!==0&&(xd(e,n|1),on(e,pt()),!(je&6)&&(As=pt()+500,nr()))}break;case 13:br(function(){var i=Si(t,1);if(i!==null){var r=$t();Wn(i,t,1,r)}}),Qd(t,1)}};Sd=function(t){if(t.tag===13){var e=Si(t,134217728);if(e!==null){var n=$t();Wn(e,t,134217728,n)}Qd(t,134217728)}};$m=function(t){if(t.tag===13){var e=ji(t),n=Si(t,e);if(n!==null){var i=$t();Wn(n,t,e,i)}Qd(t,e)}};Km=function(){return $e};Zm=function(t,e){var n=$e;try{return $e=t,e()}finally{$e=n}};vc=function(t,e,n){switch(e){case"input":if(dc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Nl(i);if(!r)throw Error(Q(90));bm(i),dc(i,r)}}}break;case"textarea":Lm(t,n);break;case"select":e=n.value,e!=null&&fs(t,!!n.multiple,e,!1)}};km=Yd;Bm=br;var Oy={usingClientEntryPoint:!1,Events:[za,is,Nl,Om,Fm,Yd]},js={findFiberByHostInstance:gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fy={bundleType:js.bundleType,version:js.version,rendererPackageName:js.rendererPackageName,rendererConfig:js.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Hm(t),t===null?null:t.stateNode},findFiberByHostInstance:js.findFiberByHostInstance||Dy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fo.isDisabled&&fo.supportsFiber)try{bl=fo.inject(Fy),Qn=fo}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Oy;yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tf(e))throw Error(Q(200));return Ny(t,e,null,n)};yn.createRoot=function(t,e){if(!tf(t))throw Error(Q(299));var n=!1,i="",r=xg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Zd(t,1,!1,null,null,n,!1,i,r),t[xi]=e.current,Ta(t.nodeType===8?t.parentNode:t),new ef(e)};yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Q(188)):(t=Object.keys(t).join(","),Error(Q(268,t)));return t=Hm(e),t=t===null?null:t.stateNode,t};yn.flushSync=function(t){return br(t)};yn.hydrate=function(t,e,n){if(!Hl(e))throw Error(Q(200));return Vl(null,t,e,!0,n)};yn.hydrateRoot=function(t,e,n){if(!tf(t))throw Error(Q(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=xg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=yg(e,null,t,1,n??null,r,!1,s,o),t[xi]=e.current,Ta(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Gl(e)};yn.render=function(t,e,n){if(!Hl(e))throw Error(Q(200));return Vl(null,t,e,!1,n)};yn.unmountComponentAtNode=function(t){if(!Hl(t))throw Error(Q(40));return t._reactRootContainer?(br(function(){Vl(null,null,t,!1,function(){t._reactRootContainer=null,t[xi]=null})}),!0):!1};yn.unstable_batchedUpdates=Yd;yn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Hl(n))throw Error(Q(200));if(t==null||t._reactInternals===void 0)throw Error(Q(38));return Vl(t,e,n,!1,i)};yn.version="18.3.1-next-f1338f8080-20240426";function Sg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sg)}catch(t){console.error(t)}}Sg(),Sm.exports=yn;var ky=Sm.exports,Rh=ky;rc.createRoot=Rh.createRoot,rc.hydrateRoot=Rh.hydrateRoot;const Mg=Ge.createContext(),By=()=>{const t=Ge.useContext(Mg);if(!t)throw new Error("useTheme must be used within ThemeProvider");return t},bh=({children:t})=>{const[e,n]=Ge.useState("light");Ge.useEffect(()=>{const r=localStorage.getItem("theme")||"light";n(r),document.documentElement.setAttribute("data-theme",r)},[]);const i=()=>{const r=e==="light"?"dark":"light";n(r),localStorage.setItem("theme",r),document.documentElement.setAttribute("data-theme",r)};return W.jsx(Mg.Provider,{value:{theme:e,toggleTheme:i},children:t})};function zy(){const{theme:t,toggleTheme:e}=By();return W.jsxs("div",{className:"theme-toggle",children:[W.jsxs("label",{className:"switch",children:[W.jsx("input",{type:"checkbox",checked:t==="dark",onChange:e}),W.jsx("span",{className:"slider"})]}),W.jsx("span",{className:"theme-label",children:t==="dark"?"🌙":"☀️"})]})}var Gy=Object.defineProperty,Ch=Object.getOwnPropertySymbols,Hy=Object.prototype.hasOwnProperty,Vy=Object.prototype.propertyIsEnumerable,Lh=(t,e,n)=>e in t?Gy(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Yo=(t,e)=>{for(var n in e||(e={}))Hy.call(e,n)&&Lh(t,n,e[n]);if(Ch)for(var n of Ch(e))Vy.call(e,n)&&Lh(t,n,e[n]);return t},Z=(t,e,n)=>new Promise((i,r)=>{var s=a=>{try{l(n.next(a))}catch(u){r(u)}},o=a=>{try{l(n.throw(a))}catch(u){r(u)}},l=a=>a.done?i(a.value):Promise.resolve(a.value).then(s,o);l((n=n.apply(t,e)).next())}),Ht=typeof globalThis<"u"&&globalThis||typeof self<"u"&&self||typeof Ht<"u"&&Ht,en={searchParams:"URLSearchParams"in Ht,iterable:"Symbol"in Ht&&"iterator"in Symbol,blob:"FileReader"in Ht&&"Blob"in Ht&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in Ht,arrayBuffer:"ArrayBuffer"in Ht};function Wy(t){return t&&DataView.prototype.isPrototypeOf(t)}en.arrayBuffer&&(Uh=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],Eg=ArrayBuffer.isView||function(t){return t&&Uh.indexOf(Object.prototype.toString.call(t))>-1});var Uh,Eg;function Ha(t){if(typeof t!="string"&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t)||t==="")throw new TypeError('Invalid character in header field name: "'+t+'"');return t.toLowerCase()}function nf(t){return typeof t!="string"&&(t=String(t)),t}function rf(t){var e={next:function(){var n=t.shift();return{done:n===void 0,value:n}}};return en.iterable&&(e[Symbol.iterator]=function(){return e}),e}function Mt(t){this.map={},t instanceof Mt?t.forEach(function(e,n){this.append(n,e)},this):Array.isArray(t)?t.forEach(function(e){this.append(e[0],e[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}Mt.prototype.append=function(t,e){t=Ha(t),e=nf(e);var n=this.map[t];this.map[t]=n?n+", "+e:e};Mt.prototype.delete=function(t){delete this.map[Ha(t)]};Mt.prototype.get=function(t){return t=Ha(t),this.has(t)?this.map[t]:null};Mt.prototype.has=function(t){return this.map.hasOwnProperty(Ha(t))};Mt.prototype.set=function(t,e){this.map[Ha(t)]=nf(e)};Mt.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)};Mt.prototype.keys=function(){var t=[];return this.forEach(function(e,n){t.push(n)}),rf(t)};Mt.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),rf(t)};Mt.prototype.entries=function(){var t=[];return this.forEach(function(e,n){t.push([n,e])}),rf(t)};en.iterable&&(Mt.prototype[Symbol.iterator]=Mt.prototype.entries);function wu(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function wg(t){return new Promise(function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function jy(t){var e=new FileReader,n=wg(e);return e.readAsArrayBuffer(t),n}function qy(t){var e=new FileReader,n=wg(e);return e.readAsText(t),n}function Xy(t){for(var e=new Uint8Array(t),n=new Array(e.length),i=0;i<e.length;i++)n[i]=String.fromCharCode(e[i]);return n.join("")}function Nh(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function Tg(){return this.bodyUsed=!1,this._initBody=function(t){this.bodyUsed=this.bodyUsed,this._bodyInit=t,t?typeof t=="string"?this._bodyText=t:en.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:en.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:en.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():en.arrayBuffer&&en.blob&&Wy(t)?(this._bodyArrayBuffer=Nh(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):en.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||Eg(t))?this._bodyArrayBuffer=Nh(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||(typeof t=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):en.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},en.blob&&(this.blob=function(){var t=wu(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var t=wu(this);return t||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}else return this.blob().then(jy)}),this.text=function(){var t=wu(this);if(t)return t;if(this._bodyBlob)return qy(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(Xy(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},en.formData&&(this.formData=function(){return this.text().then($y)}),this.json=function(){return this.text().then(JSON.parse)},this}var Yy=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function Jy(t){var e=t.toUpperCase();return Yy.indexOf(e)>-1?e:t}function Cr(t,e){if(!(this instanceof Cr))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');e=e||{};var n=e.body;if(t instanceof Cr){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new Mt(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,!n&&t._bodyInit!=null&&(n=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",(e.headers||!this.headers)&&(this.headers=new Mt(e.headers)),this.method=Jy(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&n)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(n),(this.method==="GET"||this.method==="HEAD")&&(e.cache==="no-store"||e.cache==="no-cache")){var i=/([?&])_=[^&]*/;if(i.test(this.url))this.url=this.url.replace(i,"$1_="+new Date().getTime());else{var r=/\?/;this.url+=(r.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}Cr.prototype.clone=function(){return new Cr(this,{body:this._bodyInit})};function $y(t){var e=new FormData;return t.trim().split("&").forEach(function(n){if(n){var i=n.split("="),r=i.shift().replace(/\+/g," "),s=i.join("=").replace(/\+/g," ");e.append(decodeURIComponent(r),decodeURIComponent(s))}}),e}function Ky(t){var e=new Mt,n=t.replace(/\r?\n[\t ]+/g," ");return n.split("\r").map(function(i){return i.indexOf(`
`)===0?i.substr(1,i.length):i}).forEach(function(i){var r=i.split(":"),s=r.shift().trim();if(s){var o=r.join(":").trim();e.append(s,o)}}),e}Tg.call(Cr.prototype);function ii(t,e){if(!(this instanceof ii))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');e||(e={}),this.type="default",this.status=e.status===void 0?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText=e.statusText===void 0?"":""+e.statusText,this.headers=new Mt(e.headers),this.url=e.url||"",this._initBody(t)}Tg.call(ii.prototype);ii.prototype.clone=function(){return new ii(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new Mt(this.headers),url:this.url})};ii.error=function(){var t=new ii(null,{status:0,statusText:""});return t.type="error",t};var Zy=[301,302,303,307,308];ii.redirect=function(t,e){if(Zy.indexOf(e)===-1)throw new RangeError("Invalid status code");return new ii(null,{status:e,headers:{location:t}})};var pr=Ht.DOMException;try{new pr}catch{pr=function(e,n){this.message=e,this.name=n;var i=Error(e);this.stack=i.stack},pr.prototype=Object.create(Error.prototype),pr.prototype.constructor=pr}function Ag(t,e){return new Promise(function(n,i){var r=new Cr(t,e);if(r.signal&&r.signal.aborted)return i(new pr("Aborted","AbortError"));var s=new XMLHttpRequest;function o(){s.abort()}s.onload=function(){var a={status:s.status,statusText:s.statusText,headers:Ky(s.getAllResponseHeaders()||"")};a.url="responseURL"in s?s.responseURL:a.headers.get("X-Request-URL");var u="response"in s?s.response:s.responseText;setTimeout(function(){n(new ii(u,a))},0)},s.onerror=function(){setTimeout(function(){i(new TypeError("Network request failed"))},0)},s.ontimeout=function(){setTimeout(function(){i(new TypeError("Network request failed"))},0)},s.onabort=function(){setTimeout(function(){i(new pr("Aborted","AbortError"))},0)};function l(a){try{return a===""&&Ht.location.href?Ht.location.href:a}catch{return a}}s.open(r.method,l(r.url),!0),r.credentials==="include"?s.withCredentials=!0:r.credentials==="omit"&&(s.withCredentials=!1),"responseType"in s&&(en.blob?s.responseType="blob":en.arrayBuffer&&r.headers.get("Content-Type")&&r.headers.get("Content-Type").indexOf("application/octet-stream")!==-1&&(s.responseType="arraybuffer")),e&&typeof e.headers=="object"&&!(e.headers instanceof Mt)?Object.getOwnPropertyNames(e.headers).forEach(function(a){s.setRequestHeader(a,nf(e.headers[a]))}):r.headers.forEach(function(a,u){s.setRequestHeader(u,a)}),r.signal&&(r.signal.addEventListener("abort",o),s.onreadystatechange=function(){s.readyState===4&&r.signal.removeEventListener("abort",o)}),s.send(typeof r._bodyInit>"u"?null:r._bodyInit)})}Ag.polyfill=!0;Ht.fetch||(Ht.fetch=Ag,Ht.Headers=Mt,Ht.Request=Cr,Ht.Response=ii);var Qy=typeof atob=="function",ex=typeof btoa=="function",Ds=typeof Buffer=="function",Dh=typeof TextDecoder=="function"?new TextDecoder:void 0,Ih=typeof TextEncoder=="function"?new TextEncoder:void 0,tx="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",na=Array.prototype.slice.call(tx),ho=(t=>{let e={};return t.forEach((n,i)=>e[n]=i),e})(na),nx=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,Ut=String.fromCharCode.bind(String),Oh=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):t=>new Uint8Array(Array.prototype.slice.call(t,0)),ix=t=>t.replace(/=/g,"").replace(/[+\/]/g,e=>e=="+"?"-":"_"),Pg=t=>t.replace(/[^A-Za-z0-9\+\/]/g,""),rx=t=>{let e,n,i,r,s="";const o=t.length%3;for(let l=0;l<t.length;){if((n=t.charCodeAt(l++))>255||(i=t.charCodeAt(l++))>255||(r=t.charCodeAt(l++))>255)throw new TypeError("invalid character found");e=n<<16|i<<8|r,s+=na[e>>18&63]+na[e>>12&63]+na[e>>6&63]+na[e&63]}return o?s.slice(0,o-3)+"===".substring(o):s},xl=ex?t=>btoa(t):Ds?t=>Buffer.from(t,"binary").toString("base64"):rx,sx=Ds?t=>Buffer.from(t).toString("base64"):t=>{let n=[];for(let i=0,r=t.length;i<r;i+=4096)n.push(Ut.apply(null,t.subarray(i,i+4096)));return xl(n.join(""))},ax=t=>{if(t.length<2){var e=t.charCodeAt(0);return e<128?t:e<2048?Ut(192|e>>>6)+Ut(128|e&63):Ut(224|e>>>12&15)+Ut(128|e>>>6&63)+Ut(128|e&63)}else{var e=65536+(t.charCodeAt(0)-55296)*1024+(t.charCodeAt(1)-56320);return Ut(240|e>>>18&7)+Ut(128|e>>>12&63)+Ut(128|e>>>6&63)+Ut(128|e&63)}},ox=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,lx=t=>t.replace(ox,ax),Fh=Ds?t=>Buffer.from(t,"utf8").toString("base64"):Ih?t=>sx(Ih.encode(t)):t=>xl(lx(t)),Yn=(t,e=!1)=>e?ix(Fh(t)):Fh(t),ux=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,cx=t=>{switch(t.length){case 4:var e=(7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3),n=e-65536;return Ut((n>>>10)+55296)+Ut((n&1023)+56320);case 3:return Ut((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return Ut((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},dx=t=>t.replace(ux,cx),fx=t=>{if(t=t.replace(/\s+/g,""),!nx.test(t))throw new TypeError("malformed base64.");t+="==".slice(2-(t.length&3));let e,n="",i,r;for(let s=0;s<t.length;)e=ho[t.charAt(s++)]<<18|ho[t.charAt(s++)]<<12|(i=ho[t.charAt(s++)])<<6|(r=ho[t.charAt(s++)]),n+=i===64?Ut(e>>16&255):r===64?Ut(e>>16&255,e>>8&255):Ut(e>>16&255,e>>8&255,e&255);return n},Sl=Qy?t=>atob(Pg(t)):Ds?t=>Buffer.from(t,"base64").toString("binary"):fx,hx=Ds?t=>Oh(Buffer.from(t,"base64")):t=>Oh(Sl(t).split("").map(e=>e.charCodeAt(0))),px=Ds?t=>Buffer.from(t,"base64").toString("utf8"):Dh?t=>Dh.decode(hx(t)):t=>dx(Sl(t)),mx=t=>Pg(t.replace(/[-_]/g,e=>e=="-"?"+":"/")),kh=t=>px(mx(t));function ne(t,e,n){const i=Yo(Yo({},{method:t}),e);if(i.headers=Yo({},e.headers),typeof XMLHttpRequest<"u"){const r=Object.getOwnPropertyDescriptor(XMLHttpRequest.prototype,"withCredentials");r!=null&&r.set||(i.credentials="cocos-ignore")}return Object.keys(i.headers).includes("Accept")||(i.headers.Accept="application/json"),Object.keys(i.headers).includes("Content-Type")||(i.headers["Content-Type"]="application/json"),Object.keys(i.headers).forEach(r=>{i.headers[r]||delete i.headers[r]}),n&&(i.body=n),i}var _x=class{constructor(t,e,n){this.serverKey=t,this.basePath=e,this.timeoutMs=n}healthcheck(t,e={}){const n="/healthcheck",i=new Map;let r="";const s=this.buildFullUrl(this.basePath,n,i),o=ne("GET",e,r);return t&&(o.headers.Authorization="Bearer "+t),Promise.race([fetch(s,o).then(l=>{if(l.status==204)return l;if(l.status>=200&&l.status<300)return l.json();throw l}),new Promise((l,a)=>setTimeout(a,this.timeoutMs,"Request timed out."))])}deleteAccount(t,e={}){const n="/v2/account",i=new Map;let r="";const s=this.buildFullUrl(this.basePath,n,i),o=ne("DELETE",e,r);return t&&(o.headers.Authorization="Bearer "+t),Promise.race([fetch(s,o).then(l=>{if(l.status==204)return l;if(l.status>=200&&l.status<300)return l.json();throw l}),new Promise((l,a)=>setTimeout(a,this.timeoutMs,"Request timed out."))])}getAccount(t,e={}){const n="/v2/account",i=new Map;let r="";const s=this.buildFullUrl(this.basePath,n,i),o=ne("GET",e,r);return t&&(o.headers.Authorization="Bearer "+t),Promise.race([fetch(s,o).then(l=>{if(l.status==204)return l;if(l.status>=200&&l.status<300)return l.json();throw l}),new Promise((l,a)=>setTimeout(a,this.timeoutMs,"Request timed out."))])}updateAccount(t,e,n={}){if(e==null)throw new Error("'body' is a required parameter but is null or undefined.");const i="/v2/account",r=new Map;let s="";s=JSON.stringify(e||{});const o=this.buildFullUrl(this.basePath,i,r),l=ne("PUT",n,s);return t&&(l.headers.Authorization="Bearer "+t),Promise.race([fetch(o,l).then(a=>{if(a.status==204)return a;if(a.status>=200&&a.status<300)return a.json();throw a}),new Promise((a,u)=>setTimeout(u,this.timeoutMs,"Request timed out."))])}authenticateApple(t,e,n,i,r,s={}){if(n==null)throw new Error("'account' is a required parameter but is null or undefined.");const o="/v2/account/authenticate/apple",l=new Map;l.set("create",i),l.set("username",r);let a="";a=JSON.stringify(n||{});const u=this.buildFullUrl(this.basePath,o,l),c=ne("POST",s,a);return t&&(c.headers.Authorization="Basic "+Yn(t+":"+e)),Promise.race([fetch(u,c).then(d=>{if(d.status==204)return d;if(d.status>=200&&d.status<300)return d.json();throw d}),new Promise((d,f)=>setTimeout(f,this.timeoutMs,"Request timed out."))])}authenticateCustom(t,e,n,i,r,s={}){if(n==null)throw new Error("'account' is a required parameter but is null or undefined.");const o="/v2/account/authenticate/custom",l=new Map;l.set("create",i),l.set("username",r);let a="";a=JSON.stringify(n||{});const u=this.buildFullUrl(this.basePath,o,l),c=ne("POST",s,a);return t&&(c.headers.Authorization="Basic "+Yn(t+":"+e)),Promise.race([fetch(u,c).then(d=>{if(d.status==204)return d;if(d.status>=200&&d.status<300)return d.json();throw d}),new Promise((d,f)=>setTimeout(f,this.timeoutMs,"Request timed out."))])}authenticateDevice(t,e,n,i,r,s={}){if(n==null)throw new Error("'account' is a required parameter but is null or undefined.");const o="/v2/account/authenticate/device",l=new Map;l.set("create",i),l.set("username",r);let a="";a=JSON.stringify(n||{});const u=this.buildFullUrl(this.basePath,o,l),c=ne("POST",s,a);return t&&(c.headers.Authorization="Basic "+Yn(t+":"+e)),Promise.race([fetch(u,c).then(d=>{if(d.status==204)return d;if(d.status>=200&&d.status<300)return d.json();throw d}),new Promise((d,f)=>setTimeout(f,this.timeoutMs,"Request timed out."))])}authenticateEmail(t,e,n,i,r,s={}){if(n==null)throw new Error("'account' is a required parameter but is null or undefined.");const o="/v2/account/authenticate/email",l=new Map;l.set("create",i),l.set("username",r);let a="";a=JSON.stringify(n||{});const u=this.buildFullUrl(this.basePath,o,l),c=ne("POST",s,a);return t&&(c.headers.Authorization="Basic "+Yn(t+":"+e)),Promise.race([fetch(u,c).then(d=>{if(d.status==204)return d;if(d.status>=200&&d.status<300)return d.json();throw d}),new Promise((d,f)=>setTimeout(f,this.timeoutMs,"Request timed out."))])}authenticateFacebook(t,e,n,i,r,s,o={}){if(n==null)throw new Error("'account' is a required parameter but is null or undefined.");const l="/v2/account/authenticate/facebook",a=new Map;a.set("create",i),a.set("username",r),a.set("sync",s);let u="";u=JSON.stringify(n||{});const c=this.buildFullUrl(this.basePath,l,a),d=ne("POST",o,u);return t&&(d.headers.Authorization="Basic "+Yn(t+":"+e)),Promise.race([fetch(c,d).then(f=>{if(f.status==204)return f;if(f.status>=200&&f.status<300)return f.json();throw f}),new Promise((f,p)=>setTimeout(p,this.timeoutMs,"Request timed out."))])}authenticateFacebookInstantGame(t,e,n,i,r,s={}){if(n==null)throw new Error("'account' is a required parameter but is null or undefined.");const o="/v2/account/authenticate/facebookinstantgame",l=new Map;l.set("create",i),l.set("username",r);let a="";a=JSON.stringify(n||{});const u=this.buildFullUrl(this.basePath,o,l),c=ne("POST",s,a);return t&&(c.headers.Authorization="Basic "+Yn(t+":"+e)),Promise.race([fetch(u,c).then(d=>{if(d.status==204)return d;if(d.status>=200&&d.status<300)return d.json();throw d}),new Promise((d,f)=>setTimeout(f,this.timeoutMs,"Request timed out."))])}authenticateGameCenter(t,e,n,i,r,s={}){if(n==null)throw new Error("'account' is a required parameter but is null or undefined.");const o="/v2/account/authenticate/gamecenter",l=new Map;l.set("create",i),l.set("username",r);let a="";a=JSON.stringify(n||{});const u=this.buildFullUrl(this.basePath,o,l),c=ne("POST",s,a);return t&&(c.headers.Authorization="Basic "+Yn(t+":"+e)),Promise.race([fetch(u,c).then(d=>{if(d.status==204)return d;if(d.status>=200&&d.status<300)return d.json();throw d}),new Promise((d,f)=>setTimeout(f,this.timeoutMs,"Request timed out."))])}authenticateGoogle(t,e,n,i,r,s={}){if(n==null)throw new Error("'account' is a required parameter but is null or undefined.");const o="/v2/account/authenticate/google",l=new Map;l.set("create",i),l.set("username",r);let a="";a=JSON.stringify(n||{});const u=this.buildFullUrl(this.basePath,o,l),c=ne("POST",s,a);return t&&(c.headers.Authorization="Basic "+Yn(t+":"+e)),Promise.race([fetch(u,c).then(d=>{if(d.status==204)return d;if(d.status>=200&&d.status<300)return d.json();throw d}),new Promise((d,f)=>setTimeout(f,this.timeoutMs,"Request timed out."))])}authenticateSteam(t,e,n,i,r,s,o={}){if(n==null)throw new Error("'account' is a required parameter but is null or undefined.");const l="/v2/account/authenticate/steam",a=new Map;a.set("create",i),a.set("username",r),a.set("sync",s);let u="";u=JSON.stringify(n||{});const c=this.buildFullUrl(this.basePath,l,a),d=ne("POST",o,u);return t&&(d.headers.Authorization="Basic "+Yn(t+":"+e)),Promise.race([fetch(c,d).then(f=>{if(f.status==204)return f;if(f.status>=200&&f.status<300)return f.json();throw f}),new Promise((f,p)=>setTimeout(p,this.timeoutMs,"Request timed out."))])}linkApple(t,e,n={}){if(e==null)throw new Error("'body' is a required parameter but is null or undefined.");const i="/v2/account/link/apple",r=new Map;let s="";s=JSON.stringify(e||{});const o=this.buildFullUrl(this.basePath,i,r),l=ne("POST",n,s);return t&&(l.headers.Authorization="Bearer "+t),Promise.race([fetch(o,l).then(a=>{if(a.status==204)return a;if(a.status>=200&&a.status<300)return a.json();throw a}),new Promise((a,u)=>setTimeout(u,this.timeoutMs,"Request timed out."))])}linkCustom(t,e,n={}){if(e==null)throw new Error("'body' is a required parameter but is null or undefined.");const i="/v2/account/link/custom",r=new Map;let s="";s=JSON.stringify(e||{});const o=this.buildFullUrl(this.basePath,i,r),l=ne("POST",n,s);return t&&(l.headers.Authorization="Bearer "+t),Promise.race([fetch(o,l).then(a=>{if(a.status==204)return a;if(a.status>=200&&a.status<300)return a.json();throw a}),new Promise((a,u)=>setTimeout(u,this.timeoutMs,"Request timed out."))])}linkDevice(t,e,n={}){if(e==null)throw new Error("'body' is a required parameter but is null or undefined.");const i="/v2/account/link/device",r=new Map;let s="";s=JSON.stringify(e||{});const o=this.buildFullUrl(this.basePath,i,r),l=ne("POST",n,s);return t&&(l.headers.Authorization="Bearer "+t),Promise.race([fetch(o,l).then(a=>{if(a.status==204)return a;if(a.status>=200&&a.status<300)return a.json();throw a}),new Promise((a,u)=>setTimeout(u,this.timeoutMs,"Request timed out."))])}linkEmail(t,e,n={}){if(e==null)throw new Error("'body' is a required parameter but is null or undefined.");const i="/v2/account/link/email",r=new Map;let s="";s=JSON.stringify(e||{});const o=this.buildFullUrl(this.basePath,i,r),l=ne("POST",n,s);return t&&(l.headers.Authorization="Bearer "+t),Promise.race([fetch(o,l).then(a=>{if(a.status==204)return a;if(a.status>=200&&a.status<300)return a.json();throw a}),new Promise((a,u)=>setTimeout(u,this.timeoutMs,"Request timed out."))])}linkFacebook(t,e,n,i={}){if(e==null)throw new Error("'account' is a required parameter but is null or undefined.");const r="/v2/account/link/facebook",s=new Map;s.set("sync",n);let o="";o=JSON.stringify(e||{});const l=this.buildFullUrl(this.basePath,r,s),a=ne("POST",i,o);return t&&(a.headers.Authorization="Bearer "+t),Promise.race([fetch(l,a).then(u=>{if(u.status==204)return u;if(u.status>=200&&u.status<300)return u.json();throw u}),new Promise((u,c)=>setTimeout(c,this.timeoutMs,"Request timed out."))])}linkFacebookInstantGame(t,e,n={}){if(e==null)throw new Error("'body' is a required parameter but is null or undefined.");const i="/v2/account/link/facebookinstantgame",r=new Map;let s="";s=JSON.stringify(e||{});const o=this.buildFullUrl(this.basePath,i,r),l=ne("POST",n,s);return t&&(l.headers.Authorization="Bearer "+t),Promise.race([fetch(o,l).then(a=>{if(a.status==204)return a;if(a.status>=200&&a.status<300)return a.json();throw a}),new Promise((a,u)=>setTimeout(u,this.timeoutMs,"Request timed out."))])}linkGameCenter(t,e,n={}){if(e==null)throw new Error("'body' is a required parameter but is null or undefined.");const i="/v2/account/link/gamecenter",r=new Map;let s="";s=JSON.stringify(e||{});const o=this.buildFullUrl(this.basePath,i,r),l=ne("POST",n,s);return t&&(l.headers.Authorization="Bearer "+t),Promise.race([fetch(o,l).then(a=>{if(a.status==204)return a;if(a.status>=200&&a.status<300)return a.json();throw a}),new Promise((a,u)=>setTimeout(u,this.timeoutMs,"Request timed out."))])}linkGoogle(t,e,n={}){if(e==null)throw new Error("'body' is a required parameter but is null or undefined.");const i="/v2/account/link/google",r=new Map;let s="";s=JSON.stringify(e||{});const o=this.buildFullUrl(this.basePath,i,r),l=ne("POST",n,s);return t&&(l.headers.Authorization="Bearer "+t),Promise.race([fetch(o,l).then(a=>{if(a.status==204)return a;if(a.status>=200&&a.status<300)return a.json();throw a}),new Promise((a,u)=>setTimeout(u,this.timeoutMs,"Request timed out."))])}linkSteam(t,e,n={}){if(e==null)throw new Error("'body' is a required parameter but is null or undefined.");const i="/v2/account/link/steam",r=new Map;let s="";s=JSON.stringify(e||{});const o=this.buildFullUrl(this.basePath,i,r),l=ne("POST",n,s);return t&&(l.headers.Authorization="Bearer "+t),Promise.race([fetch(o,l).then(a=>{if(a.status==204)return a;if(a.status>=200&&a.status<300)return a.json();throw a}),new Promise((a,u)=>setTimeout(u,this.timeoutMs,"Request timed out."))])}sessionRefresh(t,e,n,i={}){if(n==null)throw new Error("'body' is a required parameter but is null or undefined.");const r="/v2/account/session/refresh",s=new Map;let o="";o=JSON.stringify(n||{});const l=this.buildFullUrl(this.basePath,r,s),a=ne("POST",i,o);return t&&(a.headers.Authorization="Basic "+Yn(t+":"+e)),Promise.race([fetch(l,a).then(u=>{if(u.status==204)return u;if(u.status>=200&&u.status<300)return u.json();throw u}),new Promise((u,c)=>setTimeout(c,this.timeoutMs,"Request timed out."))])}unlinkApple(t,e,n={}){if(e==null)throw new Error("'body' is a required parameter but is null or undefined.");const i="/v2/account/unlink/apple",r=new Map;let s="";s=JSON.stringify(e||{});const o=this.buildFullUrl(this.basePath,i,r),l=ne("POST",n,s);return t&&(l.headers.Authorization="Bearer "+t),Promise.race([fetch(o,l).then(a=>{if(a.status==204)return a;if(a.status>=200&&a.status<300)return a.json();throw a}),new Promise((a,u)=>setTimeout(u,this.timeoutMs,"Request timed out."))])}unlinkCustom(t,e,n={}){if(e==null)throw new Error("'body' is a required parameter but is null or undefined.");const i="/v2/account/unlink/custom",r=new Map;let s="";s=JSON.stringify(e||{});const o=this.buildFullUrl(this.basePath,i,r),l=ne("POST",n,s);return t&&(l.headers.Authorization="Bearer "+t),Promise.race([fetch(o,l).then(a=>{if(a.status==204)return a;if(a.status>=200&&a.status<300)return a.json();throw a}),new Promise((a,u)=>setTimeout(u,this.timeoutMs,"Request timed out."))])}unlinkDevice(t,e,n={}){if(e==null)throw new Error("'body' is a required parameter but is null or undefined.");const i="/v2/account/unlink/device",r=new Map;let s="";s=JSON.stringify(e||{});const o=this.buildFullUrl(this.basePath,i,r),l=ne("POST",n,s);return t&&(l.headers.Authorization="Bearer "+t),Promise.race([fetch(o,l).then(a=>{if(a.status==204)return a;if(a.status>=200&&a.status<300)return a.json();throw a}),new Promise((a,u)=>setTimeout(u,this.timeoutMs,"Request timed out."))])}unlinkEmail(t,e,n={}){if(e==null)throw new Error("'body' is a required parameter but is null or undefined.");const i="/v2/account/unlink/email",r=new Map;let s="";s=JSON.stringify(e||{});const o=this.buildFullUrl(this.basePath,i,r),l=ne("POST",n,s);return t&&(l.headers.Authorization="Bearer "+t),Promise.race([fetch(o,l).then(a=>{if(a.status==204)return a;if(a.status>=200&&a.status<300)return a.json();throw a}),new Promise((a,u)=>setTimeout(u,this.timeoutMs,"Request timed out."))])}unlinkFacebook(t,e,n={}){if(e==null)throw new Error("'body' is a required parameter but is null or undefined.");const i="/v2/account/unlink/facebook",r=new Map;let s="";s=JSON.stringify(e||{});const o=this.buildFullUrl(this.basePath,i,r),l=ne("POST",n,s);return t&&(l.headers.Authorization="Bearer "+t),Promise.race([fetch(o,l).then(a=>{if(a.status==204)return a;if(a.status>=200&&a.status<300)return a.json();throw a}),new Promise((a,u)=>setTimeout(u,this.timeoutMs,"Request timed out."))])}unlinkFacebookInstantGame(t,e,n={}){if(e==null)throw new Error("'body' is a required parameter but is null or undefined.");const i="/v2/account/unlink/facebookinstantgame",r=new Map;let s="";s=JSON.stringify(e||{});const o=this.buildFullUrl(this.basePath,i,r),l=ne("POST",n,s);return t&&(l.headers.Authorization="Bearer "+t),Promise.race([fetch(o,l).then(a=>{if(a.status==204)return a;if(a.status>=200&&a.status<300)return a.json();throw a}),new Promise((a,u)=>setTimeout(u,this.timeoutMs,"Request timed out."))])}unlinkGameCenter(t,e,n={}){if(e==null)throw new Error("'body' is a required parameter but is null or undefined.");const i="/v2/account/unlink/gamecenter",r=new Map;let s="";s=JSON.stringify(e||{});const o=this.buildFullUrl(this.basePath,i,r),l=ne("POST",n,s);return t&&(l.headers.Authorization="Bearer "+t),Promise.race([fetch(o,l).then(a=>{if(a.status==204)return a;if(a.status>=200&&a.status<300)return a.json();throw a}),new Promise((a,u)=>setTimeout(u,this.timeoutMs,"Request timed out."))])}unlinkGoogle(t,e,n={}){if(e==null)throw new Error("'body' is a required parameter but is null or undefined.");const i="/v2/account/unlink/google",r=new Map;let s="";s=JSON.stringify(e||{});const o=this.buildFullUrl(this.basePath,i,r),l=ne("POST",n,s);return t&&(l.headers.Authorization="Bearer "+t),Promise.race([fetch(o,l).then(a=>{if(a.status==204)return a;if(a.status>=200&&a.status<300)return a.json();throw a}),new Promise((a,u)=>setTimeout(u,this.timeoutMs,"Request timed out."))])}unlinkSteam(t,e,n={}){if(e==null)throw new Error("'body' is a required parameter but is null or undefined.");const i="/v2/account/unlink/steam",r=new Map;let s="";s=JSON.stringify(e||{});const o=this.buildFullUrl(this.basePath,i,r),l=ne("POST",n,s);return t&&(l.headers.Authorization="Bearer "+t),Promise.race([fetch(o,l).then(a=>{if(a.status==204)return a;if(a.status>=200&&a.status<300)return a.json();throw a}),new Promise((a,u)=>setTimeout(u,this.timeoutMs,"Request timed out."))])}listChannelMessages(t,e,n,i,r,s={}){if(e==null)throw new Error("'channelId' is a required parameter but is null or undefined.");const o="/v2/channel/{channelId}".replace("{channelId}",encodeURIComponent(String(e))),l=new Map;l.set("limit",n),l.set("forward",i),l.set("cursor",r);let a="";const u=this.buildFullUrl(this.basePath,o,l),c=ne("GET",s,a);return t&&(c.headers.Authorization="Bearer "+t),Promise.race([fetch(u,c).then(d=>{if(d.status==204)return d;if(d.status>=200&&d.status<300)return d.json();throw d}),new Promise((d,f)=>setTimeout(f,this.timeoutMs,"Request timed out."))])}event(t,e,n={}){if(e==null)throw new Error("'body' is a required parameter but is null or undefined.");const i="/v2/event",r=new Map;let s="";s=JSON.stringify(e||{});const o=this.buildFullUrl(this.basePath,i,r),l=ne("POST",n,s);return t&&(l.headers.Authorization="Bearer "+t),Promise.race([fetch(o,l).then(a=>{if(a.status==204)return a;if(a.status>=200&&a.status<300)return a.json();throw a}),new Promise((a,u)=>setTimeout(u,this.timeoutMs,"Request timed out."))])}deleteFriends(t,e,n,i={}){const r="/v2/friend",s=new Map;s.set("ids",e),s.set("usernames",n);let o="";const l=this.buildFullUrl(this.basePath,r,s),a=ne("DELETE",i,o);return t&&(a.headers.Authorization="Bearer "+t),Promise.race([fetch(l,a).then(u=>{if(u.status==204)return u;if(u.status>=200&&u.status<300)return u.json();throw u}),new Promise((u,c)=>setTimeout(c,this.timeoutMs,"Request timed out."))])}listFriends(t,e,n,i,r={}){const s="/v2/friend",o=new Map;o.set("limit",e),o.set("state",n),o.set("cursor",i);let l="";const a=this.buildFullUrl(this.basePath,s,o),u=ne("GET",r,l);return t&&(u.headers.Authorization="Bearer "+t),Promise.race([fetch(a,u).then(c=>{if(c.status==204)return c;if(c.status>=200&&c.status<300)return c.json();throw c}),new Promise((c,d)=>setTimeout(d,this.timeoutMs,"Request timed out."))])}addFriends(t,e,n,i={}){const r="/v2/friend",s=new Map;s.set("ids",e),s.set("usernames",n);let o="";const l=this.buildFullUrl(this.basePath,r,s),a=ne("POST",i,o);return t&&(a.headers.Authorization="Bearer "+t),Promise.race([fetch(l,a).then(u=>{if(u.status==204)return u;if(u.status>=200&&u.status<300)return u.json();throw u}),new Promise((u,c)=>setTimeout(c,this.timeoutMs,"Request timed out."))])}blockFriends(t,e,n,i={}){const r="/v2/friend/block",s=new Map;s.set("ids",e),s.set("usernames",n);let o="";const l=this.buildFullUrl(this.basePath,r,s),a=ne("POST",i,o);return t&&(a.headers.Authorization="Bearer "+t),Promise.race([fetch(l,a).then(u=>{if(u.status==204)return u;if(u.status>=200&&u.status<300)return u.json();throw u}),new Promise((u,c)=>setTimeout(c,this.timeoutMs,"Request timed out."))])}importFacebookFriends(t,e,n,i={}){if(e==null)throw new Error("'account' is a required parameter but is null or undefined.");const r="/v2/friend/facebook",s=new Map;s.set("reset",n);let o="";o=JSON.stringify(e||{});const l=this.buildFullUrl(this.basePath,r,s),a=ne("POST",i,o);return t&&(a.headers.Authorization="Bearer "+t),Promise.race([fetch(l,a).then(u=>{if(u.status==204)return u;if(u.status>=200&&u.status<300)return u.json();throw u}),new Promise((u,c)=>setTimeout(c,this.timeoutMs,"Request timed out."))])}listFriendsOfFriends(t,e,n,i={}){const r="/v2/friend/friends",s=new Map;s.set("limit",e),s.set("cursor",n);let o="";const l=this.buildFullUrl(this.basePath,r,s),a=ne("GET",i,o);return t&&(a.headers.Authorization="Bearer "+t),Promise.race([fetch(l,a).then(u=>{if(u.status==204)return u;if(u.status>=200&&u.status<300)return u.json();throw u}),new Promise((u,c)=>setTimeout(c,this.timeoutMs,"Request timed out."))])}importSteamFriends(t,e,n,i={}){if(e==null)throw new Error("'account' is a required parameter but is null or undefined.");const r="/v2/friend/steam",s=new Map;s.set("reset",n);let o="";o=JSON.stringify(e||{});const l=this.buildFullUrl(this.basePath,r,s),a=ne("POST",i,o);return t&&(a.headers.Authorization="Bearer "+t),Promise.race([fetch(l,a).then(u=>{if(u.status==204)return u;if(u.status>=200&&u.status<300)return u.json();throw u}),new Promise((u,c)=>setTimeout(c,this.timeoutMs,"Request timed out."))])}listGroups(t,e,n,i,r,s,o,l={}){const a="/v2/group",u=new Map;u.set("name",e),u.set("cursor",n),u.set("limit",i),u.set("lang_tag",r),u.set("members",s),u.set("open",o);let c="";const d=this.buildFullUrl(this.basePath,a,u),f=ne("GET",l,c);return t&&(f.headers.Authorization="Bearer "+t),Promise.race([fetch(d,f).then(p=>{if(p.status==204)return p;if(p.status>=200&&p.status<300)return p.json();throw p}),new Promise((p,v)=>setTimeout(v,this.timeoutMs,"Request timed out."))])}createGroup(t,e,n={}){if(e==null)throw new Error("'body' is a required parameter but is null or undefined.");const i="/v2/group",r=new Map;let s="";s=JSON.stringify(e||{});const o=this.buildFullUrl(this.basePath,i,r),l=ne("POST",n,s);return t&&(l.headers.Authorization="Bearer "+t),Promise.race([fetch(o,l).then(a=>{if(a.status==204)return a;if(a.status>=200&&a.status<300)return a.json();throw a}),new Promise((a,u)=>setTimeout(u,this.timeoutMs,"Request timed out."))])}deleteGroup(t,e,n={}){if(e==null)throw new Error("'groupId' is a required parameter but is null or undefined.");const i="/v2/group/{groupId}".replace("{groupId}",encodeURIComponent(String(e))),r=new Map;let s="";const o=this.buildFullUrl(this.basePath,i,r),l=ne("DELETE",n,s);return t&&(l.headers.Authorization="Bearer "+t),Promise.race([fetch(o,l).then(a=>{if(a.status==204)return a;if(a.status>=200&&a.status<300)return a.json();throw a}),new Promise((a,u)=>setTimeout(u,this.timeoutMs,"Request timed out."))])}updateGroup(t,e,n,i={}){if(e==null)throw new Error("'groupId' is a required parameter but is null or undefined.");if(n==null)throw new Error("'body' is a required parameter but is null or undefined.");const r="/v2/group/{groupId}".replace("{groupId}",encodeURIComponent(String(e))),s=new Map;let o="";o=JSON.stringify(n||{});const l=this.buildFullUrl(this.basePath,r,s),a=ne("PUT",i,o);return t&&(a.headers.Authorization="Bearer "+t),Promise.race([fetch(l,a).then(u=>{if(u.status==204)return u;if(u.status>=200&&u.status<300)return u.json();throw u}),new Promise((u,c)=>setTimeout(c,this.timeoutMs,"Request timed out."))])}addGroupUsers(t,e,n,i={}){if(e==null)throw new Error("'groupId' is a required parameter but is null or undefined.");const r="/v2/group/{groupId}/add".replace("{groupId}",encodeURIComponent(String(e))),s=new Map;s.set("user_ids",n);let o="";const l=this.buildFullUrl(this.basePath,r,s),a=ne("POST",i,o);return t&&(a.headers.Authorization="Bearer "+t),Promise.race([fetch(l,a).then(u=>{if(u.status==204)return u;if(u.status>=200&&u.status<300)return u.json();throw u}),new Promise((u,c)=>setTimeout(c,this.timeoutMs,"Request timed out."))])}banGroupUsers(t,e,n,i={}){if(e==null)throw new Error("'groupId' is a required parameter but is null or undefined.");const r="/v2/group/{groupId}/ban".replace("{groupId}",encodeURIComponent(String(e))),s=new Map;s.set("user_ids",n);let o="";const l=this.buildFullUrl(this.basePath,r,s),a=ne("POST",i,o);return t&&(a.headers.Authorization="Bearer "+t),Promise.race([fetch(l,a).then(u=>{if(u.status==204)return u;if(u.status>=200&&u.status<300)return u.json();throw u}),new Promise((u,c)=>setTimeout(c,this.timeoutMs,"Request timed out."))])}demoteGroupUsers(t,e,n,i={}){if(e==null)throw new Error("'groupId' is a required parameter but is null or undefined.");const r="/v2/group/{groupId}/demote".replace("{groupId}",encodeURIComponent(String(e))),s=new Map;s.set("user_ids",n);let o="";const l=this.buildFullUrl(this.basePath,r,s),a=ne("POST",i,o);return t&&(a.headers.Authorization="Bearer "+t),Promise.race([fetch(l,a).then(u=>{if(u.status==204)return u;if(u.status>=200&&u.status<300)return u.json();throw u}),new Promise((u,c)=>setTimeout(c,this.timeoutMs,"Request timed out."))])}joinGroup(t,e,n={}){if(e==null)throw new Error("'groupId' is a required parameter but is null or undefined.");const i="/v2/group/{groupId}/join".replace("{groupId}",encodeURIComponent(String(e))),r=new Map;let s="";const o=this.buildFullUrl(this.basePath,i,r),l=ne("POST",n,s);return t&&(l.headers.Authorization="Bearer "+t),Promise.race([fetch(o,l).then(a=>{if(a.status==204)return a;if(a.status>=200&&a.status<300)return a.json();throw a}),new Promise((a,u)=>setTimeout(u,this.timeoutMs,"Request timed out."))])}kickGroupUsers(t,e,n,i={}){if(e==null)throw new Error("'groupId' is a required parameter but is null or undefined.");const r="/v2/group/{groupId}/kick".replace("{groupId}",encodeURIComponent(String(e))),s=new Map;s.set("user_ids",n);let o="";const l=this.buildFullUrl(this.basePath,r,s),a=ne("POST",i,o);return t&&(a.headers.Authorization="Bearer "+t),Promise.race([fetch(l,a).then(u=>{if(u.status==204)return u;if(u.status>=200&&u.status<300)return u.json();throw u}),new Promise((u,c)=>setTimeout(c,this.timeoutMs,"Request timed out."))])}leaveGroup(t,e,n={}){if(e==null)throw new Error("'groupId' is a required parameter but is null or undefined.");const i="/v2/group/{groupId}/leave".replace("{groupId}",encodeURIComponent(String(e))),r=new Map;let s="";const o=this.buildFullUrl(this.basePath,i,r),l=ne("POST",n,s);return t&&(l.headers.Authorization="Bearer "+t),Promise.race([fetch(o,l).then(a=>{if(a.status==204)return a;if(a.status>=200&&a.status<300)return a.json();throw a}),new Promise((a,u)=>setTimeout(u,this.timeoutMs,"Request timed out."))])}promoteGroupUsers(t,e,n,i={}){if(e==null)throw new Error("'groupId' is a required parameter but is null or undefined.");const r="/v2/group/{groupId}/promote".replace("{groupId}",encodeURIComponent(String(e))),s=new Map;s.set("user_ids",n);let o="";const l=this.buildFullUrl(this.basePath,r,s),a=ne("POST",i,o);return t&&(a.headers.Authorization="Bearer "+t),Promise.race([fetch(l,a).then(u=>{if(u.status==204)return u;if(u.status>=200&&u.status<300)return u.json();throw u}),new Promise((u,c)=>setTimeout(c,this.timeoutMs,"Request timed out."))])}listGroupUsers(t,e,n,i,r,s={}){if(e==null)throw new Error("'groupId' is a required parameter but is null or undefined.");const o="/v2/group/{groupId}/user".replace("{groupId}",encodeURIComponent(String(e))),l=new Map;l.set("limit",n),l.set("state",i),l.set("cursor",r);let a="";const u=this.buildFullUrl(this.basePath,o,l),c=ne("GET",s,a);return t&&(c.headers.Authorization="Bearer "+t),Promise.race([fetch(u,c).then(d=>{if(d.status==204)return d;if(d.status>=200&&d.status<300)return d.json();throw d}),new Promise((d,f)=>setTimeout(f,this.timeoutMs,"Request timed out."))])}validatePurchaseApple(t,e,n={}){if(e==null)throw new Error("'body' is a required parameter but is null or undefined.");const i="/v2/iap/purchase/apple",r=new Map;let s="";s=JSON.stringify(e||{});const o=this.buildFullUrl(this.basePath,i,r),l=ne("POST",n,s);return t&&(l.headers.Authorization="Bearer "+t),Promise.race([fetch(o,l).then(a=>{if(a.status==204)return a;if(a.status>=200&&a.status<300)return a.json();throw a}),new Promise((a,u)=>setTimeout(u,this.timeoutMs,"Request timed out."))])}validatePurchaseFacebookInstant(t,e,n={}){if(e==null)throw new Error("'body' is a required parameter but is null or undefined.");const i="/v2/iap/purchase/facebookinstant",r=new Map;let s="";s=JSON.stringify(e||{});const o=this.buildFullUrl(this.basePath,i,r),l=ne("POST",n,s);return t&&(l.headers.Authorization="Bearer "+t),Promise.race([fetch(o,l).then(a=>{if(a.status==204)return a;if(a.status>=200&&a.status<300)return a.json();throw a}),new Promise((a,u)=>setTimeout(u,this.timeoutMs,"Request timed out."))])}validatePurchaseGoogle(t,e,n={}){if(e==null)throw new Error("'body' is a required parameter but is null or undefined.");const i="/v2/iap/purchase/google",r=new Map;let s="";s=JSON.stringify(e||{});const o=this.buildFullUrl(this.basePath,i,r),l=ne("POST",n,s);return t&&(l.headers.Authorization="Bearer "+t),Promise.race([fetch(o,l).then(a=>{if(a.status==204)return a;if(a.status>=200&&a.status<300)return a.json();throw a}),new Promise((a,u)=>setTimeout(u,this.timeoutMs,"Request timed out."))])}validatePurchaseHuawei(t,e,n={}){if(e==null)throw new Error("'body' is a required parameter but is null or undefined.");const i="/v2/iap/purchase/huawei",r=new Map;let s="";s=JSON.stringify(e||{});const o=this.buildFullUrl(this.basePath,i,r),l=ne("POST",n,s);return t&&(l.headers.Authorization="Bearer "+t),Promise.race([fetch(o,l).then(a=>{if(a.status==204)return a;if(a.status>=200&&a.status<300)return a.json();throw a}),new Promise((a,u)=>setTimeout(u,this.timeoutMs,"Request timed out."))])}listSubscriptions(t,e,n={}){if(e==null)throw new Error("'body' is a required parameter but is null or undefined.");const i="/v2/iap/subscription",r=new Map;let s="";s=JSON.stringify(e||{});const o=this.buildFullUrl(this.basePath,i,r),l=ne("POST",n,s);return t&&(l.headers.Authorization="Bearer "+t),Promise.race([fetch(o,l).then(a=>{if(a.status==204)return a;if(a.status>=200&&a.status<300)return a.json();throw a}),new Promise((a,u)=>setTimeout(u,this.timeoutMs,"Request timed out."))])}validateSubscriptionApple(t,e,n={}){if(e==null)throw new Error("'body' is a required parameter but is null or undefined.");const i="/v2/iap/subscription/apple",r=new Map;let s="";s=JSON.stringify(e||{});const o=this.buildFullUrl(this.basePath,i,r),l=ne("POST",n,s);return t&&(l.headers.Authorization="Bearer "+t),Promise.race([fetch(o,l).then(a=>{if(a.status==204)return a;if(a.status>=200&&a.status<300)return a.json();throw a}),new Promise((a,u)=>setTimeout(u,this.timeoutMs,"Request timed out."))])}validateSubscriptionGoogle(t,e,n={}){if(e==null)throw new Error("'body' is a required parameter but is null or undefined.");const i="/v2/iap/subscription/google",r=new Map;let s="";s=JSON.stringify(e||{});const o=this.buildFullUrl(this.basePath,i,r),l=ne("POST",n,s);return t&&(l.headers.Authorization="Bearer "+t),Promise.race([fetch(o,l).then(a=>{if(a.status==204)return a;if(a.status>=200&&a.status<300)return a.json();throw a}),new Promise((a,u)=>setTimeout(u,this.timeoutMs,"Request timed out."))])}getSubscription(t,e,n={}){if(e==null)throw new Error("'productId' is a required parameter but is null or undefined.");const i="/v2/iap/subscription/{productId}".replace("{productId}",encodeURIComponent(String(e))),r=new Map;let s="";const o=this.buildFullUrl(this.basePath,i,r),l=ne("GET",n,s);return t&&(l.headers.Authorization="Bearer "+t),Promise.race([fetch(o,l).then(a=>{if(a.status==204)return a;if(a.status>=200&&a.status<300)return a.json();throw a}),new Promise((a,u)=>setTimeout(u,this.timeoutMs,"Request timed out."))])}deleteLeaderboardRecord(t,e,n={}){if(e==null)throw new Error("'leaderboardId' is a required parameter but is null or undefined.");const i="/v2/leaderboard/{leaderboardId}".replace("{leaderboardId}",encodeURIComponent(String(e))),r=new Map;let s="";const o=this.buildFullUrl(this.basePath,i,r),l=ne("DELETE",n,s);return t&&(l.headers.Authorization="Bearer "+t),Promise.race([fetch(o,l).then(a=>{if(a.status==204)return a;if(a.status>=200&&a.status<300)return a.json();throw a}),new Promise((a,u)=>setTimeout(u,this.timeoutMs,"Request timed out."))])}listLeaderboardRecords(t,e,n,i,r,s,o={}){if(e==null)throw new Error("'leaderboardId' is a required parameter but is null or undefined.");const l="/v2/leaderboard/{leaderboardId}".replace("{leaderboardId}",encodeURIComponent(String(e))),a=new Map;a.set("owner_ids",n),a.set("limit",i),a.set("cursor",r),a.set("expiry",s);let u="";const c=this.buildFullUrl(this.basePath,l,a),d=ne("GET",o,u);return t&&(d.headers.Authorization="Bearer "+t),Promise.race([fetch(c,d).then(f=>{if(f.status==204)return f;if(f.status>=200&&f.status<300)return f.json();throw f}),new Promise((f,p)=>setTimeout(p,this.timeoutMs,"Request timed out."))])}writeLeaderboardRecord(t,e,n,i={}){if(e==null)throw new Error("'leaderboardId' is a required parameter but is null or undefined.");if(n==null)throw new Error("'record' is a required parameter but is null or undefined.");const r="/v2/leaderboard/{leaderboardId}".replace("{leaderboardId}",encodeURIComponent(String(e))),s=new Map;let o="";o=JSON.stringify(n||{});const l=this.buildFullUrl(this.basePath,r,s),a=ne("POST",i,o);return t&&(a.headers.Authorization="Bearer "+t),Promise.race([fetch(l,a).then(u=>{if(u.status==204)return u;if(u.status>=200&&u.status<300)return u.json();throw u}),new Promise((u,c)=>setTimeout(c,this.timeoutMs,"Request timed out."))])}listLeaderboardRecordsAroundOwner(t,e,n,i,r,s,o={}){if(e==null)throw new Error("'leaderboardId' is a required parameter but is null or undefined.");if(n==null)throw new Error("'ownerId' is a required parameter but is null or undefined.");const l="/v2/leaderboard/{leaderboardId}/owner/{ownerId}".replace("{leaderboardId}",encodeURIComponent(String(e))).replace("{ownerId}",encodeURIComponent(String(n))),a=new Map;a.set("limit",i),a.set("expiry",r),a.set("cursor",s);let u="";const c=this.buildFullUrl(this.basePath,l,a),d=ne("GET",o,u);return t&&(d.headers.Authorization="Bearer "+t),Promise.race([fetch(c,d).then(f=>{if(f.status==204)return f;if(f.status>=200&&f.status<300)return f.json();throw f}),new Promise((f,p)=>setTimeout(p,this.timeoutMs,"Request timed out."))])}listMatches(t,e,n,i,r,s,o,l={}){const a="/v2/match",u=new Map;u.set("limit",e),u.set("authoritative",n),u.set("label",i),u.set("min_size",r),u.set("max_size",s),u.set("query",o);let c="";const d=this.buildFullUrl(this.basePath,a,u),f=ne("GET",l,c);return t&&(f.headers.Authorization="Bearer "+t),Promise.race([fetch(d,f).then(p=>{if(p.status==204)return p;if(p.status>=200&&p.status<300)return p.json();throw p}),new Promise((p,v)=>setTimeout(v,this.timeoutMs,"Request timed out."))])}deleteNotifications(t,e,n={}){const i="/v2/notification",r=new Map;r.set("ids",e);let s="";const o=this.buildFullUrl(this.basePath,i,r),l=ne("DELETE",n,s);return t&&(l.headers.Authorization="Bearer "+t),Promise.race([fetch(o,l).then(a=>{if(a.status==204)return a;if(a.status>=200&&a.status<300)return a.json();throw a}),new Promise((a,u)=>setTimeout(u,this.timeoutMs,"Request timed out."))])}listNotifications(t,e,n,i={}){const r="/v2/notification",s=new Map;s.set("limit",e),s.set("cacheable_cursor",n);let o="";const l=this.buildFullUrl(this.basePath,r,s),a=ne("GET",i,o);return t&&(a.headers.Authorization="Bearer "+t),Promise.race([fetch(l,a).then(u=>{if(u.status==204)return u;if(u.status>=200&&u.status<300)return u.json();throw u}),new Promise((u,c)=>setTimeout(c,this.timeoutMs,"Request timed out."))])}rpcFunc2(t,e,n,i,r={}){if(e==null)throw new Error("'id' is a required parameter but is null or undefined.");const s="/v2/rpc/{id}".replace("{id}",encodeURIComponent(String(e))),o=new Map;o.set("payload",n),o.set("http_key",i);let l="";const a=this.buildFullUrl(this.basePath,s,o),u=ne("GET",r,l);return t&&(u.headers.Authorization="Bearer "+t),Promise.race([fetch(a,u).then(c=>{if(c.status==204)return c;if(c.status>=200&&c.status<300)return c.json();throw c}),new Promise((c,d)=>setTimeout(d,this.timeoutMs,"Request timed out."))])}rpcFunc(t,e,n,i,r={}){if(e==null)throw new Error("'id' is a required parameter but is null or undefined.");if(n==null)throw new Error("'body' is a required parameter but is null or undefined.");const s="/v2/rpc/{id}".replace("{id}",encodeURIComponent(String(e))),o=new Map;o.set("http_key",i);let l="";l=JSON.stringify(n||{});const a=this.buildFullUrl(this.basePath,s,o),u=ne("POST",r,l);return t&&(u.headers.Authorization="Bearer "+t),Promise.race([fetch(a,u).then(c=>{if(c.status==204)return c;if(c.status>=200&&c.status<300)return c.json();throw c}),new Promise((c,d)=>setTimeout(d,this.timeoutMs,"Request timed out."))])}sessionLogout(t,e,n={}){if(e==null)throw new Error("'body' is a required parameter but is null or undefined.");const i="/v2/session/logout",r=new Map;let s="";s=JSON.stringify(e||{});const o=this.buildFullUrl(this.basePath,i,r),l=ne("POST",n,s);return t&&(l.headers.Authorization="Bearer "+t),Promise.race([fetch(o,l).then(a=>{if(a.status==204)return a;if(a.status>=200&&a.status<300)return a.json();throw a}),new Promise((a,u)=>setTimeout(u,this.timeoutMs,"Request timed out."))])}readStorageObjects(t,e,n={}){if(e==null)throw new Error("'body' is a required parameter but is null or undefined.");const i="/v2/storage",r=new Map;let s="";s=JSON.stringify(e||{});const o=this.buildFullUrl(this.basePath,i,r),l=ne("POST",n,s);return t&&(l.headers.Authorization="Bearer "+t),Promise.race([fetch(o,l).then(a=>{if(a.status==204)return a;if(a.status>=200&&a.status<300)return a.json();throw a}),new Promise((a,u)=>setTimeout(u,this.timeoutMs,"Request timed out."))])}writeStorageObjects(t,e,n={}){if(e==null)throw new Error("'body' is a required parameter but is null or undefined.");const i="/v2/storage",r=new Map;let s="";s=JSON.stringify(e||{});const o=this.buildFullUrl(this.basePath,i,r),l=ne("PUT",n,s);return t&&(l.headers.Authorization="Bearer "+t),Promise.race([fetch(o,l).then(a=>{if(a.status==204)return a;if(a.status>=200&&a.status<300)return a.json();throw a}),new Promise((a,u)=>setTimeout(u,this.timeoutMs,"Request timed out."))])}deleteStorageObjects(t,e,n={}){if(e==null)throw new Error("'body' is a required parameter but is null or undefined.");const i="/v2/storage/delete",r=new Map;let s="";s=JSON.stringify(e||{});const o=this.buildFullUrl(this.basePath,i,r),l=ne("PUT",n,s);return t&&(l.headers.Authorization="Bearer "+t),Promise.race([fetch(o,l).then(a=>{if(a.status==204)return a;if(a.status>=200&&a.status<300)return a.json();throw a}),new Promise((a,u)=>setTimeout(u,this.timeoutMs,"Request timed out."))])}listStorageObjects(t,e,n,i,r,s={}){if(e==null)throw new Error("'collection' is a required parameter but is null or undefined.");const o="/v2/storage/{collection}".replace("{collection}",encodeURIComponent(String(e))),l=new Map;l.set("user_id",n),l.set("limit",i),l.set("cursor",r);let a="";const u=this.buildFullUrl(this.basePath,o,l),c=ne("GET",s,a);return t&&(c.headers.Authorization="Bearer "+t),Promise.race([fetch(u,c).then(d=>{if(d.status==204)return d;if(d.status>=200&&d.status<300)return d.json();throw d}),new Promise((d,f)=>setTimeout(f,this.timeoutMs,"Request timed out."))])}listStorageObjects2(t,e,n,i,r,s={}){if(e==null)throw new Error("'collection' is a required parameter but is null or undefined.");if(n==null)throw new Error("'userId' is a required parameter but is null or undefined.");const o="/v2/storage/{collection}/{userId}".replace("{collection}",encodeURIComponent(String(e))).replace("{userId}",encodeURIComponent(String(n))),l=new Map;l.set("limit",i),l.set("cursor",r);let a="";const u=this.buildFullUrl(this.basePath,o,l),c=ne("GET",s,a);return t&&(c.headers.Authorization="Bearer "+t),Promise.race([fetch(u,c).then(d=>{if(d.status==204)return d;if(d.status>=200&&d.status<300)return d.json();throw d}),new Promise((d,f)=>setTimeout(f,this.timeoutMs,"Request timed out."))])}listTournaments(t,e,n,i,r,s,o,l={}){const a="/v2/tournament",u=new Map;u.set("category_start",e),u.set("category_end",n),u.set("start_time",i),u.set("end_time",r),u.set("limit",s),u.set("cursor",o);let c="";const d=this.buildFullUrl(this.basePath,a,u),f=ne("GET",l,c);return t&&(f.headers.Authorization="Bearer "+t),Promise.race([fetch(d,f).then(p=>{if(p.status==204)return p;if(p.status>=200&&p.status<300)return p.json();throw p}),new Promise((p,v)=>setTimeout(v,this.timeoutMs,"Request timed out."))])}deleteTournamentRecord(t,e,n={}){if(e==null)throw new Error("'tournamentId' is a required parameter but is null or undefined.");const i="/v2/tournament/{tournamentId}".replace("{tournamentId}",encodeURIComponent(String(e))),r=new Map;let s="";const o=this.buildFullUrl(this.basePath,i,r),l=ne("DELETE",n,s);return t&&(l.headers.Authorization="Bearer "+t),Promise.race([fetch(o,l).then(a=>{if(a.status==204)return a;if(a.status>=200&&a.status<300)return a.json();throw a}),new Promise((a,u)=>setTimeout(u,this.timeoutMs,"Request timed out."))])}listTournamentRecords(t,e,n,i,r,s,o={}){if(e==null)throw new Error("'tournamentId' is a required parameter but is null or undefined.");const l="/v2/tournament/{tournamentId}".replace("{tournamentId}",encodeURIComponent(String(e))),a=new Map;a.set("owner_ids",n),a.set("limit",i),a.set("cursor",r),a.set("expiry",s);let u="";const c=this.buildFullUrl(this.basePath,l,a),d=ne("GET",o,u);return t&&(d.headers.Authorization="Bearer "+t),Promise.race([fetch(c,d).then(f=>{if(f.status==204)return f;if(f.status>=200&&f.status<300)return f.json();throw f}),new Promise((f,p)=>setTimeout(p,this.timeoutMs,"Request timed out."))])}writeTournamentRecord2(t,e,n,i={}){if(e==null)throw new Error("'tournamentId' is a required parameter but is null or undefined.");if(n==null)throw new Error("'record' is a required parameter but is null or undefined.");const r="/v2/tournament/{tournamentId}".replace("{tournamentId}",encodeURIComponent(String(e))),s=new Map;let o="";o=JSON.stringify(n||{});const l=this.buildFullUrl(this.basePath,r,s),a=ne("POST",i,o);return t&&(a.headers.Authorization="Bearer "+t),Promise.race([fetch(l,a).then(u=>{if(u.status==204)return u;if(u.status>=200&&u.status<300)return u.json();throw u}),new Promise((u,c)=>setTimeout(c,this.timeoutMs,"Request timed out."))])}writeTournamentRecord(t,e,n,i={}){if(e==null)throw new Error("'tournamentId' is a required parameter but is null or undefined.");if(n==null)throw new Error("'record' is a required parameter but is null or undefined.");const r="/v2/tournament/{tournamentId}".replace("{tournamentId}",encodeURIComponent(String(e))),s=new Map;let o="";o=JSON.stringify(n||{});const l=this.buildFullUrl(this.basePath,r,s),a=ne("PUT",i,o);return t&&(a.headers.Authorization="Bearer "+t),Promise.race([fetch(l,a).then(u=>{if(u.status==204)return u;if(u.status>=200&&u.status<300)return u.json();throw u}),new Promise((u,c)=>setTimeout(c,this.timeoutMs,"Request timed out."))])}joinTournament(t,e,n={}){if(e==null)throw new Error("'tournamentId' is a required parameter but is null or undefined.");const i="/v2/tournament/{tournamentId}/join".replace("{tournamentId}",encodeURIComponent(String(e))),r=new Map;let s="";const o=this.buildFullUrl(this.basePath,i,r),l=ne("POST",n,s);return t&&(l.headers.Authorization="Bearer "+t),Promise.race([fetch(o,l).then(a=>{if(a.status==204)return a;if(a.status>=200&&a.status<300)return a.json();throw a}),new Promise((a,u)=>setTimeout(u,this.timeoutMs,"Request timed out."))])}listTournamentRecordsAroundOwner(t,e,n,i,r,s,o={}){if(e==null)throw new Error("'tournamentId' is a required parameter but is null or undefined.");if(n==null)throw new Error("'ownerId' is a required parameter but is null or undefined.");const l="/v2/tournament/{tournamentId}/owner/{ownerId}".replace("{tournamentId}",encodeURIComponent(String(e))).replace("{ownerId}",encodeURIComponent(String(n))),a=new Map;a.set("limit",i),a.set("expiry",r),a.set("cursor",s);let u="";const c=this.buildFullUrl(this.basePath,l,a),d=ne("GET",o,u);return t&&(d.headers.Authorization="Bearer "+t),Promise.race([fetch(c,d).then(f=>{if(f.status==204)return f;if(f.status>=200&&f.status<300)return f.json();throw f}),new Promise((f,p)=>setTimeout(p,this.timeoutMs,"Request timed out."))])}getUsers(t,e,n,i,r={}){const s="/v2/user",o=new Map;o.set("ids",e),o.set("usernames",n),o.set("facebook_ids",i);let l="";const a=this.buildFullUrl(this.basePath,s,o),u=ne("GET",r,l);return t&&(u.headers.Authorization="Bearer "+t),Promise.race([fetch(a,u).then(c=>{if(c.status==204)return c;if(c.status>=200&&c.status<300)return c.json();throw c}),new Promise((c,d)=>setTimeout(d,this.timeoutMs,"Request timed out."))])}listUserGroups(t,e,n,i,r,s={}){if(e==null)throw new Error("'userId' is a required parameter but is null or undefined.");const o="/v2/user/{userId}/group".replace("{userId}",encodeURIComponent(String(e))),l=new Map;l.set("limit",n),l.set("state",i),l.set("cursor",r);let a="";const u=this.buildFullUrl(this.basePath,o,l),c=ne("GET",s,a);return t&&(c.headers.Authorization="Bearer "+t),Promise.race([fetch(u,c).then(d=>{if(d.status==204)return d;if(d.status>=200&&d.status<300)return d.json();throw d}),new Promise((d,f)=>setTimeout(f,this.timeoutMs,"Request timed out."))])}buildFullUrl(t,e,n){let i=t+e+"?";for(let[r,s]of n)s instanceof Array?i+=s.reduce((o,l)=>o+encodeURIComponent(r)+"="+encodeURIComponent(l)+"&",""):s!=null&&(i+=encodeURIComponent(r)+"="+encodeURIComponent(s)+"&");return i}},Jn=class{constructor(t,e,n){this.created=n,this.token=t,this.refresh_token=e,this.created_at=Math.floor(new Date().getTime()/1e3),this.update(t,e)}isexpired(t){return this.expires_at-t<0}isrefreshexpired(t){return this.refresh_expires_at-t<0}update(t,e){const n=t.split(".");if(n.length!=3)throw"jwt is not valid.";const i=JSON.parse(Sl(n[1])),r=Math.floor(parseInt(i.exp));if(e){const s=e.split(".");if(s.length!=3)throw"refresh jwt is not valid.";const o=JSON.parse(Sl(s[1])),l=Math.floor(parseInt(o.exp));this.refresh_expires_at=l,this.refresh_token=e}this.token=t,this.expires_at=r,this.username=i.usn,this.user_id=i.uid,this.vars=i.vrs}static restore(t,e){return new Jn(t,e,!1)}},cs="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ia=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(qs=0;qs<cs.length;qs++)ia[cs.charCodeAt(qs)]=qs;var qs,Bh=function(t){var e=new Uint8Array(t),n,i=e.length,r="";for(n=0;n<i;n+=3)r+=cs[e[n]>>2],r+=cs[(e[n]&3)<<4|e[n+1]>>4],r+=cs[(e[n+1]&15)<<2|e[n+2]>>6],r+=cs[e[n+2]&63];return i%3===2?r=r.substring(0,r.length-1)+"=":i%3===1&&(r=r.substring(0,r.length-2)+"=="),r},zh=function(t){var e=t.length*.75,n=t.length,i,r=0,s,o,l,a;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);var u=new ArrayBuffer(e),c=new Uint8Array(u);for(i=0;i<n;i+=4)s=ia[t.charCodeAt(i)],o=ia[t.charCodeAt(i+1)],l=ia[t.charCodeAt(i+2)],a=ia[t.charCodeAt(i+3)],c[r++]=s<<2|o>>4,c[r++]=(o&15)<<4|l>>2,c[r++]=(l&3)<<6|a&63;return u},Rg=class{get onClose(){return this._socket.onclose}set onClose(t){this._socket.onclose=t}get onError(){return this._socket.onerror}set onError(t){this._socket.onerror=t}get onMessage(){return this._socket.onmessage}set onMessage(t){t?this._socket.onmessage=e=>{const n=JSON.parse(e.data);n.match_data&&n.match_data.data?n.match_data.data=new Uint8Array(zh(n.match_data.data)):n.party_data&&n.party_data.data&&(n.party_data.data=new Uint8Array(zh(n.party_data.data))),t(n)}:t=null}get onOpen(){return this._socket.onopen}set onOpen(t){this._socket.onopen=t}isOpen(){var t;return((t=this._socket)==null?void 0:t.readyState)==WebSocket.OPEN}connect(t,e,n,i,r){const s=`${t}${e}:${n}/ws?lang=en&status=${encodeURIComponent(i.toString())}&token=${encodeURIComponent(r)}`;this._socket=new WebSocket(s)}close(){this._socket.close(),this._socket=void 0}send(t){if(t.match_data_send){t.match_data_send.op_code=t.match_data_send.op_code.toString();let e=t.match_data_send.data;e&&e instanceof Uint8Array?t.match_data_send.data=Bh(e.buffer):e&&(t.match_data_send.data=xl(e))}else if(t.party_data_send){t.party_data_send.op_code=t.party_data_send.op_code.toString();let e=t.party_data_send.data;e&&e instanceof Uint8Array?t.party_data_send.data=Bh(e.buffer):e&&(t.party_data_send.data=xl(e))}this._socket.send(JSON.stringify(t))}},ra=class{constructor(t,e,n=!1,i=!1,r=new Rg,s=ra.DefaultSendTimeoutMs){this.host=t,this.port=e,this.useSSL=n,this.verbose=i,this.adapter=r,this.sendTimeoutMs=s,this.cIds={},this.nextCid=1,this._heartbeatTimeoutMs=ra.DefaultHeartbeatTimeoutMs}generatecid(){const t=this.nextCid.toString();return++this.nextCid,t}connect(t,e=!1,n=ra.DefaultConnectTimeoutMs){if(this.adapter.isOpen())return Promise.resolve(t);const i=this.useSSL?"wss://":"ws://";return this.adapter.connect(i,this.host,this.port,e,t.token),this.adapter.onClose=r=>{this.ondisconnect(r)},this.adapter.onError=r=>{this.onerror(r)},this.adapter.onMessage=r=>{if(this.verbose&&window&&window.console&&console.log("Response: %o",JSON.stringify(r)),!r.cid)r.notifications?r.notifications.notifications.forEach(s=>{s.content=s.content?JSON.parse(s.content):void 0,this.onnotification(s)}):r.match_data?(r.match_data.op_code=parseInt(r.match_data.op_code),this.onmatchdata(r.match_data)):r.match_presence_event?this.onmatchpresence(r.match_presence_event):r.matchmaker_ticket?this.onmatchmakerticket(r.matchmaker_ticket):r.matchmaker_matched?this.onmatchmakermatched(r.matchmaker_matched):r.status_presence_event?this.onstatuspresence(r.status_presence_event):r.stream_presence_event?this.onstreampresence(r.stream_presence_event):r.stream_data?this.onstreamdata(r.stream_data):r.channel_message?(r.channel_message.content=JSON.parse(r.channel_message.content),this.onchannelmessage(r.channel_message)):r.channel_presence_event?this.onchannelpresence(r.channel_presence_event):r.party_data?(r.party_data.op_code=parseInt(r.party_data.op_code),this.onpartydata(r.party_data)):r.party_close?this.onpartyclose(r.party_close):r.party_join_request?this.onpartyjoinrequest(r.party_join_request):r.party_leader?this.onpartyleader(r.party_leader):r.party_matchmaker_ticket?this.onpartymatchmakerticket(r.party_matchmaker_ticket):r.party_presence_event?this.onpartypresence(r.party_presence_event):r.party?this.onparty(r.party):this.verbose&&window&&window.console&&console.log("Unrecognized message received: %o",r);else{const s=this.cIds[r.cid];if(!s){this.verbose&&window&&window.console&&console.error("No promise executor for message: %o",r);return}delete this.cIds[r.cid],r.error?s.reject(r.error):s.resolve(r)}},new Promise((r,s)=>{this.adapter.onOpen=o=>{this.verbose&&window&&window.console&&console.log(o),this.pingPong(),r(t)},this.adapter.onError=o=>{s(o),this.adapter.close()},setTimeout(()=>{s("The socket timed out when trying to connect.")},n)})}disconnect(t=!0){this.adapter.isOpen()&&this.adapter.close(),t&&this.ondisconnect({})}setHeartbeatTimeoutMs(t){this._heartbeatTimeoutMs=t}getHeartbeatTimeoutMs(){return this._heartbeatTimeoutMs}ondisconnect(t){this.verbose&&window&&window.console&&console.log(t)}onerror(t){this.verbose&&window&&window.console&&console.log(t)}onchannelmessage(t){this.verbose&&window&&window.console&&console.log(t)}onchannelpresence(t){this.verbose&&window&&window.console&&console.log(t)}onnotification(t){this.verbose&&window&&window.console&&console.log(t)}onmatchdata(t){this.verbose&&window&&window.console&&console.log(t)}onmatchpresence(t){this.verbose&&window&&window.console&&console.log(t)}onmatchmakerticket(t){this.verbose&&window&&window.console&&console.log(t)}onmatchmakermatched(t){this.verbose&&window&&window.console&&console.log(t)}onparty(t){this.verbose&&window&&window.console&&console.log(t)}onpartyclose(t){this.verbose&&window&&window.console&&console.log("Party closed: "+t)}onpartyjoinrequest(t){this.verbose&&window&&window.console&&console.log(t)}onpartydata(t){this.verbose&&window&&window.console&&console.log(t)}onpartyleader(t){this.verbose&&window&&window.console&&console.log(t)}onpartymatchmakerticket(t){this.verbose&&window&&window.console&&console.log(t)}onpartypresence(t){this.verbose&&window&&window.console&&console.log(t)}onstatuspresence(t){this.verbose&&window&&window.console&&console.log(t)}onstreampresence(t){this.verbose&&window&&window.console&&console.log(t)}onstreamdata(t){this.verbose&&window&&window.console&&console.log(t)}onheartbeattimeout(){this.verbose&&window&&window.console&&console.log("Heartbeat timeout.")}send(t,e=ra.DefaultSendTimeoutMs){const n=t;return new Promise((i,r)=>{if(!this.adapter.isOpen())r("Socket connection has not been established yet.");else if(n.match_data_send)this.adapter.send(n),i();else if(n.party_data_send)this.adapter.send(n),i();else{n.channel_message_send?n.channel_message_send.content=JSON.stringify(n.channel_message_send.content):n.channel_message_update&&(n.channel_message_update.content=JSON.stringify(n.channel_message_update.content));const s=this.generatecid();this.cIds[s]={resolve:i,reject:r},setTimeout(()=>{r("The socket timed out while waiting for a response.")},e),n.cid=s,this.adapter.send(n)}if(this.verbose&&window&&window.console){const s=Yo({},n);s.match_data_send&&s.match_data_send.data?s.match_data_send.data=kh(s.match_data_send.data):s.party_data_send&&s.party_data_send.data&&(s.party_data_send.data=kh(s.party_data_send.data)),console.log("Sent message: %o",JSON.stringify(s))}})}acceptPartyMember(t,e){return this.send({party_accept:{party_id:t,presence:e}})}addMatchmaker(t,e,n,i,r){return Z(this,null,function*(){return(yield this.send({matchmaker_add:{min_count:e,max_count:n,query:t,string_properties:i,numeric_properties:r}})).matchmaker_ticket})}addMatchmakerParty(t,e,n,i,r,s){return Z(this,null,function*(){return(yield this.send({party_matchmaker_add:{party_id:t,min_count:n,max_count:i,query:e,string_properties:r,numeric_properties:s}})).party_matchmaker_ticket})}closeParty(t){return Z(this,null,function*(){return yield this.send({party_close:{party_id:t}})})}createMatch(t){return Z(this,null,function*(){return(yield this.send({match_create:{name:t}})).match})}createParty(t,e){return Z(this,null,function*(){return(yield this.send({party_create:{open:t,max_size:e}})).party})}followUsers(t){return Z(this,null,function*(){return(yield this.send({status_follow:{user_ids:t}})).status})}joinChat(t,e,n,i){return Z(this,null,function*(){return(yield this.send({channel_join:{target:t,type:e,persistence:n,hidden:i}})).channel})}joinMatch(t,e,n){return Z(this,null,function*(){const i={match_join:{metadata:n}};return e?i.match_join.token=e:i.match_join.match_id=t,(yield this.send(i)).match})}joinParty(t){return Z(this,null,function*(){return yield this.send({party_join:{party_id:t}})})}leaveChat(t){return this.send({channel_leave:{channel_id:t}})}leaveMatch(t){return this.send({match_leave:{match_id:t}})}leaveParty(t){return this.send({party_leave:{party_id:t}})}listPartyJoinRequests(t){return Z(this,null,function*(){return(yield this.send({party_join_request_list:{party_id:t}})).party_join_request})}promotePartyMember(t,e){return Z(this,null,function*(){return(yield this.send({party_promote:{party_id:t,presence:e}})).party_leader})}removeChatMessage(t,e){return Z(this,null,function*(){return(yield this.send({channel_message_remove:{channel_id:t,message_id:e}})).channel_message_ack})}removeMatchmaker(t){return this.send({matchmaker_remove:{ticket:t}})}removeMatchmakerParty(t,e){return this.send({party_matchmaker_remove:{party_id:t,ticket:e}})}removePartyMember(t,e){return Z(this,null,function*(){return this.send({party_remove:{party_id:t,presence:e}})})}rpc(t,e,n){return Z(this,null,function*(){return(yield this.send({rpc:{id:t,payload:e,http_key:n}})).rpc})}sendMatchState(t,e,n,i,r){return Z(this,null,function*(){return this.send({match_data_send:{match_id:t,op_code:e,data:n,presences:i??[],reliable:r}})})}sendPartyData(t,e,n){return this.send({party_data_send:{party_id:t,op_code:e,data:n}})}unfollowUsers(t){return this.send({status_unfollow:{user_ids:t}})}updateChatMessage(t,e,n){return Z(this,null,function*(){return(yield this.send({channel_message_update:{channel_id:t,message_id:e,content:n}})).channel_message_ack})}updateStatus(t){return this.send({status_update:{status:t}})}writeChatMessage(t,e){return Z(this,null,function*(){return(yield this.send({channel_message_send:{channel_id:t,content:e}})).channel_message_ack})}pingPong(){return Z(this,null,function*(){if(this.adapter.isOpen()){try{yield this.send({ping:{}},this._heartbeatTimeoutMs)}catch{this.adapter.isOpen()&&(window&&window.console&&console.error("Server unreachable from heartbeat."),this.onheartbeattimeout(),this.adapter.close());return}setTimeout(()=>this.pingPong(),this._heartbeatTimeoutMs)}})}},Da=ra;Da.DefaultHeartbeatTimeoutMs=1e4;Da.DefaultSendTimeoutMs=1e4;Da.DefaultConnectTimeoutMs=3e4;var gx="127.0.0.1",vx="7350",yx="defaultkey",xx=7e3,Sx=5*60*1e3,Mx=class{constructor(t=yx,e=gx,n=vx,i=!1,r=xx,s=!0){this.serverkey=t,this.host=e,this.port=n,this.useSSL=i,this.timeout=r,this.autoRefreshSession=s,this.expiredTimespanMs=Sx;const l=`${i?"https://":"http://"}${e}:${n}`;this.apiClient=new _x(t,l,r)}addGroupUsers(t,e,n){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.addGroupUsers(t.token,e,n).then(i=>i!==void 0)})}addFriends(t,e,n){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.addFriends(t.token,e,n).then(i=>i!==void 0)})}authenticateApple(t,e,n){return Z(this,arguments,function*(i,r,s,o={},l={}){const a={token:i,vars:o};return this.apiClient.authenticateApple(this.serverkey,"",a,r,s,l).then(u=>new Jn(u.token||"",u.refresh_token||"",u.created||!1))})}authenticateCustom(t,e,n,i={},r={}){const s={id:t,vars:i};return this.apiClient.authenticateCustom(this.serverkey,"",s,e,n,r).then(o=>new Jn(o.token||"",o.refresh_token||"",o.created||!1))}authenticateDevice(t,e,n,i){const r={id:t,vars:i};return this.apiClient.authenticateDevice(this.serverkey,"",r,e,n).then(s=>new Jn(s.token||"",s.refresh_token||"",s.created||!1))}authenticateEmail(t,e,n,i,r){const s={email:t,password:e,vars:r};return this.apiClient.authenticateEmail(this.serverkey,"",s,n,i).then(o=>new Jn(o.token||"",o.refresh_token||"",o.created||!1))}authenticateFacebookInstantGame(t,e,n,i,r={}){const s={signed_player_info:t,vars:i};return this.apiClient.authenticateFacebookInstantGame(this.serverkey,"",{signed_player_info:s.signed_player_info,vars:s.vars},e,n,r).then(o=>new Jn(o.token||"",o.refresh_token||"",o.created||!1))}authenticateFacebook(t,e,n,i,r,s={}){const o={token:t,vars:r};return this.apiClient.authenticateFacebook(this.serverkey,"",o,e,n,i,s).then(l=>new Jn(l.token||"",l.refresh_token||"",l.created||!1))}authenticateGoogle(t,e,n,i){return Z(this,arguments,function*(r,s,o,l,a={}){const u={token:r,vars:l},c=yield this.apiClient.authenticateGoogle(this.serverkey,"",u,s,o,a);return new Jn(c.token||"",c.refresh_token||"",c.created||!1)})}authenticateGameCenter(t,e,n,i,r,s,o,l,a){return Z(this,arguments,function*(u,c,d,f,p,v,y,m,h,g={}){const _={bundle_id:u,player_id:c,public_key_url:d,salt:f,signature:p,timestamp_seconds:v,vars:h},x=yield this.apiClient.authenticateGameCenter(this.serverkey,"",_,m,y,g);return new Jn(x.token||"",x.refresh_token||"",x.created||!1)})}authenticateSteam(t,e,n,i,r){return Z(this,null,function*(){const s={token:t,vars:r,sync:i};return this.apiClient.authenticateSteam(this.serverkey,"",s,e,n).then(o=>new Jn(o.token||"",o.refresh_token||"",o.created||!1))})}banGroupUsers(t,e,n){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.banGroupUsers(t.token,e,n).then(i=>i!==void 0)})}blockFriends(t,e,n){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.blockFriends(t.token,e,n).then(i=>Promise.resolve(i!=null))})}createGroup(t,e){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.createGroup(t.token,e).then(n=>Promise.resolve({avatar_url:n.avatar_url,create_time:n.create_time,creator_id:n.creator_id,description:n.description,edge_count:n.edge_count?Number(n.edge_count):0,id:n.id,lang_tag:n.lang_tag,max_count:n.max_count?Number(n.max_count):0,metadata:n.metadata?JSON.parse(n.metadata):void 0,name:n.name,open:n.open,update_time:n.update_time}))})}createSocket(t=!1,e=!1,n=new Rg,i=Da.DefaultSendTimeoutMs){return new Da(this.host,this.port,t,e,n,i)}deleteAccount(t){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.deleteAccount(t.token).then(e=>e!==void 0)})}deleteFriends(t,e,n){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.deleteFriends(t.token,e,n).then(i=>i!==void 0)})}deleteGroup(t,e){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.deleteGroup(t.token,e).then(n=>n!==void 0)})}deleteNotifications(t,e){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.deleteNotifications(t.token,e).then(n=>Promise.resolve(n!=null))})}deleteStorageObjects(t,e){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.deleteStorageObjects(t.token,e).then(n=>Promise.resolve(n!=null))})}deleteTournamentRecord(t,e){return Z(this,null,function*(){return this.apiClient.deleteTournamentRecord(t.token,e)})}demoteGroupUsers(t,e,n){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.demoteGroupUsers(t.token,e,n).then(i=>Promise.resolve(i!=null))})}emitEvent(t,e){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.event(t.token,e).then(n=>Promise.resolve(n!=null))})}getAccount(t){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.getAccount(t.token)})}getSubscription(t,e){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.getSubscription(t.token,e)})}importFacebookFriends(t,e){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.importFacebookFriends(t.token,e).then(n=>n!==void 0)})}importSteamFriends(t,e,n){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.importSteamFriends(t.token,e,n).then(i=>i!==void 0)})}getUsers(t,e,n,i){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.getUsers(t.token,e,n,i).then(r=>{var s={users:[]};return r.users==null||r.users.forEach(o=>{s.users.push({avatar_url:o.avatar_url,create_time:o.create_time,display_name:o.display_name,edge_count:o.edge_count?Number(o.edge_count):0,facebook_id:o.facebook_id,gamecenter_id:o.gamecenter_id,google_id:o.google_id,id:o.id,lang_tag:o.lang_tag,location:o.location,online:o.online,steam_id:o.steam_id,timezone:o.timezone,update_time:o.update_time,username:o.username,metadata:o.metadata?JSON.parse(o.metadata):void 0})}),Promise.resolve(s)})})}joinGroup(t,e){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.joinGroup(t.token,e,{}).then(n=>n!==void 0)})}joinTournament(t,e){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.joinTournament(t.token,e,{}).then(n=>n!==void 0)})}kickGroupUsers(t,e,n){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.kickGroupUsers(t.token,e,n).then(i=>Promise.resolve(i!=null))})}leaveGroup(t,e){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.leaveGroup(t.token,e,{}).then(n=>n!==void 0)})}listChannelMessages(t,e,n,i,r){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.listChannelMessages(t.token,e,n,i,r).then(s=>{var o={messages:[],next_cursor:s.next_cursor,prev_cursor:s.prev_cursor,cacheable_cursor:s.cacheable_cursor};return s.messages==null||s.messages.forEach(l=>{o.messages.push({channel_id:l.channel_id,code:l.code?Number(l.code):0,create_time:l.create_time,message_id:l.message_id,persistent:l.persistent,sender_id:l.sender_id,update_time:l.update_time,username:l.username,content:l.content?JSON.parse(l.content):void 0,group_id:l.group_id,room_name:l.room_name,user_id_one:l.user_id_one,user_id_two:l.user_id_two})}),Promise.resolve(o)})})}listGroupUsers(t,e,n,i,r){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.listGroupUsers(t.token,e,i,n,r).then(s=>{var o={group_users:[],cursor:s.cursor};return s.group_users==null||s.group_users.forEach(l=>{o.group_users.push({user:{avatar_url:l.user.avatar_url,create_time:l.user.create_time,display_name:l.user.display_name,edge_count:l.user.edge_count?Number(l.user.edge_count):0,facebook_id:l.user.facebook_id,gamecenter_id:l.user.gamecenter_id,google_id:l.user.google_id,id:l.user.id,lang_tag:l.user.lang_tag,location:l.user.location,online:l.user.online,steam_id:l.user.steam_id,timezone:l.user.timezone,update_time:l.user.update_time,username:l.user.username,metadata:l.user.metadata?JSON.parse(l.user.metadata):void 0},state:l.state?Number(l.state):0})}),Promise.resolve(o)})})}listUserGroups(t,e,n,i,r){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.listUserGroups(t.token,e,n,i,r).then(s=>{var o={user_groups:[],cursor:s.cursor};return s.user_groups==null||s.user_groups.forEach(l=>{o.user_groups.push({group:{avatar_url:l.group.avatar_url,create_time:l.group.create_time,creator_id:l.group.creator_id,description:l.group.description,edge_count:l.group.edge_count?Number(l.group.edge_count):0,id:l.group.id,lang_tag:l.group.lang_tag,max_count:l.group.max_count,metadata:l.group.metadata?JSON.parse(l.group.metadata):void 0,name:l.group.name,open:l.group.open,update_time:l.group.update_time},state:l.state?Number(l.state):0})}),Promise.resolve(o)})})}listGroups(t,e,n,i){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.listGroups(t.token,e,n,i).then(r=>{var s={groups:[]};return r.groups==null||(s.cursor=r.cursor,r.groups.forEach(o=>{s.groups.push({avatar_url:o.avatar_url,create_time:o.create_time,creator_id:o.creator_id,description:o.description,edge_count:o.edge_count?Number(o.edge_count):0,id:o.id,lang_tag:o.lang_tag,max_count:o.max_count,metadata:o.metadata?JSON.parse(o.metadata):void 0,name:o.name,open:o.open,update_time:o.update_time})})),Promise.resolve(s)})})}linkApple(t,e){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.linkApple(t.token,e).then(n=>n!==void 0)})}linkCustom(t,e){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.linkCustom(t.token,e).then(n=>n!==void 0)})}linkDevice(t,e){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.linkDevice(t.token,e).then(n=>n!==void 0)})}linkEmail(t,e){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.linkEmail(t.token,e).then(n=>n!==void 0)})}linkFacebook(t,e){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.linkFacebook(t.token,e).then(n=>n!==void 0)})}linkFacebookInstantGame(t,e){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.linkFacebookInstantGame(t.token,e).then(n=>n!==void 0)})}linkGoogle(t,e){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.linkGoogle(t.token,e).then(n=>n!==void 0)})}linkGameCenter(t,e){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.linkGameCenter(t.token,e).then(n=>n!==void 0)})}linkSteam(t,e){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.linkSteam(t.token,e).then(n=>n!==void 0)})}listFriends(t,e,n,i){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.listFriends(t.token,n,e,i).then(r=>{var s={friends:[],cursor:r.cursor};return r.friends==null||r.friends.forEach(o=>{s.friends.push({user:{avatar_url:o.user.avatar_url,create_time:o.user.create_time,display_name:o.user.display_name,edge_count:o.user.edge_count?Number(o.user.edge_count):0,facebook_id:o.user.facebook_id,gamecenter_id:o.user.gamecenter_id,google_id:o.user.google_id,id:o.user.id,lang_tag:o.user.lang_tag,location:o.user.location,online:o.user.online,steam_id:o.user.steam_id,timezone:o.user.timezone,update_time:o.user.update_time,username:o.user.username,metadata:o.user.metadata?JSON.parse(o.user.metadata):void 0,facebook_instant_game_id:o.user.facebook_instant_game_id},state:o.state})}),Promise.resolve(s)})})}listFriendsOfFriends(t,e,n){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.listFriendsOfFriends(t.token,e,n).then(i=>{var r={friends_of_friends:[],cursor:i.cursor};return i.friends_of_friends==null||i.friends_of_friends.forEach(s=>{r.friends_of_friends.push({referrer:s.referrer,user:{avatar_url:s.user.avatar_url,create_time:s.user.create_time,display_name:s.user.display_name,edge_count:s.user.edge_count?Number(s.user.edge_count):0,facebook_id:s.user.facebook_id,gamecenter_id:s.user.gamecenter_id,google_id:s.user.google_id,id:s.user.id,lang_tag:s.user.lang_tag,location:s.user.location,online:s.user.online,steam_id:s.user.steam_id,timezone:s.user.timezone,update_time:s.user.update_time,username:s.user.username,metadata:s.user.metadata?JSON.parse(s.user.metadata):void 0,facebook_instant_game_id:s.user.facebook_instant_game_id}})}),Promise.resolve(r)})})}listLeaderboardRecords(t,e,n,i,r,s){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.listLeaderboardRecords(t.token,e,n,i,r,s).then(o=>{var l={next_cursor:o.next_cursor,prev_cursor:o.prev_cursor,rank_count:o.rank_count?Number(o.rank_count):0,owner_records:[],records:[]};return o.owner_records!=null&&o.owner_records.forEach(a=>{l.owner_records.push({expiry_time:a.expiry_time,leaderboard_id:a.leaderboard_id,metadata:a.metadata?JSON.parse(a.metadata):void 0,num_score:a.num_score?Number(a.num_score):0,owner_id:a.owner_id,rank:a.rank?Number(a.rank):0,score:a.score?Number(a.score):0,subscore:a.subscore?Number(a.subscore):0,update_time:a.update_time,username:a.username,max_num_score:a.max_num_score?Number(a.max_num_score):0})}),o.records!=null&&o.records.forEach(a=>{l.records.push({expiry_time:a.expiry_time,leaderboard_id:a.leaderboard_id,metadata:a.metadata?JSON.parse(a.metadata):void 0,num_score:a.num_score?Number(a.num_score):0,owner_id:a.owner_id,rank:a.rank?Number(a.rank):0,score:a.score?Number(a.score):0,subscore:a.subscore?Number(a.subscore):0,update_time:a.update_time,username:a.username,max_num_score:a.max_num_score?Number(a.max_num_score):0})}),Promise.resolve(l)})})}listLeaderboardRecordsAroundOwner(t,e,n,i,r,s){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.listLeaderboardRecordsAroundOwner(t.token,e,n,i,r,s).then(o=>{var l={next_cursor:o.next_cursor,prev_cursor:o.prev_cursor,rank_count:o.rank_count?Number(o.rank_count):0,owner_records:[],records:[]};return o.owner_records!=null&&o.owner_records.forEach(a=>{l.owner_records.push({expiry_time:a.expiry_time,leaderboard_id:a.leaderboard_id,metadata:a.metadata?JSON.parse(a.metadata):void 0,num_score:a.num_score?Number(a.num_score):0,owner_id:a.owner_id,rank:a.rank?Number(a.rank):0,score:a.score?Number(a.score):0,subscore:a.subscore?Number(a.subscore):0,update_time:a.update_time,username:a.username,max_num_score:a.max_num_score?Number(a.max_num_score):0})}),o.records!=null&&o.records.forEach(a=>{l.records.push({expiry_time:a.expiry_time,leaderboard_id:a.leaderboard_id,metadata:a.metadata?JSON.parse(a.metadata):void 0,num_score:a.num_score?Number(a.num_score):0,owner_id:a.owner_id,rank:a.rank?Number(a.rank):0,score:a.score?Number(a.score):0,subscore:a.subscore?Number(a.subscore):0,update_time:a.update_time,username:a.username,max_num_score:a.max_num_score?Number(a.max_num_score):0})}),Promise.resolve(l)})})}listMatches(t,e,n,i,r,s,o){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.listMatches(t.token,e,n,i,r,s,o)})}listNotifications(t,e,n){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.listNotifications(t.token,e,n).then(i=>{var r={cacheable_cursor:i.cacheable_cursor,notifications:[]};return i.notifications==null||i.notifications.forEach(s=>{r.notifications.push({code:s.code?Number(s.code):0,create_time:s.create_time,id:s.id,persistent:s.persistent,sender_id:s.sender_id,subject:s.subject,content:s.content?JSON.parse(s.content):void 0})}),Promise.resolve(r)})})}listStorageObjects(t,e,n,i,r){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.listStorageObjects(t.token,e,n,i,r).then(s=>{var o={objects:[],cursor:s.cursor};return s.objects==null||s.objects.forEach(l=>{o.objects.push({collection:l.collection,key:l.key,permission_read:l.permission_read?Number(l.permission_read):0,permission_write:l.permission_write?Number(l.permission_write):0,value:l.value?JSON.parse(l.value):void 0,version:l.version,user_id:l.user_id,create_time:l.create_time,update_time:l.update_time})}),Promise.resolve(o)})})}listTournaments(t,e,n,i,r,s,o){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.listTournaments(t.token,e,n,i,r,s,o).then(l=>{var a={cursor:l.cursor,tournaments:[]};return l.tournaments!=null&&l.tournaments.forEach(u=>{a.tournaments.push({id:u.id,title:u.title,description:u.description,duration:u.duration?Number(u.duration):0,category:u.category?Number(u.category):0,sort_order:u.sort_order?Number(u.sort_order):0,size:u.size?Number(u.size):0,max_size:u.max_size?Number(u.max_size):0,max_num_score:u.max_num_score?Number(u.max_num_score):0,can_enter:u.can_enter,end_active:u.end_active?Number(u.end_active):0,next_reset:u.next_reset?Number(u.next_reset):0,metadata:u.metadata?JSON.parse(u.metadata):void 0,create_time:u.create_time,start_time:u.start_time,end_time:u.end_time,start_active:u.start_active,authoritative:u.authoritative})}),Promise.resolve(a)})})}listSubscriptions(t,e,n){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.listSubscriptions(t.token,{cursor:e,limit:n})})}listTournamentRecords(t,e,n,i,r,s){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.listTournamentRecords(t.token,e,n,i,r,s).then(o=>{var l={next_cursor:o.next_cursor,prev_cursor:o.prev_cursor,owner_records:[],records:[]};return o.owner_records!=null&&o.owner_records.forEach(a=>{l.owner_records.push({expiry_time:a.expiry_time,leaderboard_id:a.leaderboard_id,metadata:a.metadata?JSON.parse(a.metadata):void 0,num_score:a.num_score?Number(a.num_score):0,owner_id:a.owner_id,rank:a.rank?Number(a.rank):0,score:a.score?Number(a.score):0,subscore:a.subscore?Number(a.subscore):0,update_time:a.update_time,username:a.username,max_num_score:a.max_num_score?Number(a.max_num_score):0})}),o.records!=null&&o.records.forEach(a=>{l.records.push({expiry_time:a.expiry_time,leaderboard_id:a.leaderboard_id,metadata:a.metadata?JSON.parse(a.metadata):void 0,num_score:a.num_score?Number(a.num_score):0,owner_id:a.owner_id,rank:a.rank?Number(a.rank):0,score:a.score?Number(a.score):0,subscore:a.subscore?Number(a.subscore):0,update_time:a.update_time,username:a.username,max_num_score:a.max_num_score?Number(a.max_num_score):0})}),Promise.resolve(l)})})}listTournamentRecordsAroundOwner(t,e,n,i,r,s){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.listTournamentRecordsAroundOwner(t.token,e,n,i,r,s).then(o=>{var l={next_cursor:o.next_cursor,prev_cursor:o.prev_cursor,owner_records:[],records:[]};return o.owner_records!=null&&o.owner_records.forEach(a=>{l.owner_records.push({expiry_time:a.expiry_time,leaderboard_id:a.leaderboard_id,metadata:a.metadata?JSON.parse(a.metadata):void 0,num_score:a.num_score?Number(a.num_score):0,owner_id:a.owner_id,rank:a.rank?Number(a.rank):0,score:a.score?Number(a.score):0,subscore:a.subscore?Number(a.subscore):0,update_time:a.update_time,username:a.username,max_num_score:a.max_num_score?Number(a.max_num_score):0})}),o.records!=null&&o.records.forEach(a=>{l.records.push({expiry_time:a.expiry_time,leaderboard_id:a.leaderboard_id,metadata:a.metadata?JSON.parse(a.metadata):void 0,num_score:a.num_score?Number(a.num_score):0,owner_id:a.owner_id,rank:a.rank?Number(a.rank):0,score:a.score?Number(a.score):0,subscore:a.subscore?Number(a.subscore):0,update_time:a.update_time,username:a.username,max_num_score:a.max_num_score?Number(a.max_num_score):0})}),Promise.resolve(l)})})}promoteGroupUsers(t,e,n){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.promoteGroupUsers(t.token,e,n)})}readStorageObjects(t,e){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.readStorageObjects(t.token,e).then(n=>{var i={objects:[]};return n.objects==null||n.objects.forEach(r=>{i.objects.push({collection:r.collection,key:r.key,permission_read:r.permission_read?Number(r.permission_read):0,permission_write:r.permission_write?Number(r.permission_write):0,value:r.value?JSON.parse(r.value):void 0,version:r.version,user_id:r.user_id,create_time:r.create_time,update_time:r.update_time})}),Promise.resolve(i)})})}rpc(t,e,n){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.rpcFunc(t.token,e,JSON.stringify(n)).then(i=>Promise.resolve({id:i.id,payload:i.payload?JSON.parse(i.payload):void 0}))})}rpcHttpKey(t,e,n){return Z(this,null,function*(){return this.apiClient.rpcFunc2("",e,n&&JSON.stringify(n)||"",t).then(i=>Promise.resolve({id:i.id,payload:i.payload?JSON.parse(i.payload):void 0})).catch(i=>{throw i})})}sessionLogout(t,e,n){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.sessionLogout(t.token,{refresh_token:n,token:e}).then(i=>i!==void 0)})}sessionRefresh(t){return Z(this,arguments,function*(e,n={}){if(!e)return console.error("Cannot refresh a null session."),e;e.created&&e.expires_at-e.created_at<70&&console.warn("Session lifetime too short, please set '--session.token_expiry_sec' option. See the documentation for more info: https://heroiclabs.com/docs/nakama/getting-started/configuration/#session"),e.created&&e.refresh_expires_at-e.created_at<3700&&console.warn("Session refresh lifetime too short, please set '--session.refresh_token_expiry_sec' option. See the documentation for more info: https://heroiclabs.com/docs/nakama/getting-started/configuration/#session");const i=yield this.apiClient.sessionRefresh(this.serverkey,"",{token:e.refresh_token,vars:n});return e.update(i.token,i.refresh_token),e})}unlinkApple(t,e){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.unlinkApple(t.token,e).then(n=>n!==void 0)})}unlinkCustom(t,e){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.unlinkCustom(t.token,e).then(n=>n!==void 0)})}unlinkDevice(t,e){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.unlinkDevice(t.token,e).then(n=>n!==void 0)})}unlinkEmail(t,e){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.unlinkEmail(t.token,e).then(n=>n!==void 0)})}unlinkFacebook(t,e){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.unlinkFacebook(t.token,e).then(n=>n!==void 0)})}unlinkFacebookInstantGame(t,e){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.unlinkFacebookInstantGame(t.token,e).then(n=>n!==void 0)})}unlinkGoogle(t,e){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.unlinkGoogle(t.token,e).then(n=>n!==void 0)})}unlinkGameCenter(t,e){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.unlinkGameCenter(t.token,e).then(n=>n!==void 0)})}unlinkSteam(t,e){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.unlinkSteam(t.token,e).then(n=>n!==void 0)})}updateAccount(t,e){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.updateAccount(t.token,e).then(n=>n!==void 0)})}updateGroup(t,e,n){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.updateGroup(t.token,e,n).then(i=>i!==void 0)})}validatePurchaseApple(t,e,n=!0){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.validatePurchaseApple(t.token,{receipt:e,persist:n})})}validatePurchaseFacebookInstant(t,e,n=!0){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.validatePurchaseFacebookInstant(t.token,{signed_request:e,persist:n})})}validatePurchaseGoogle(t,e,n=!0){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.validatePurchaseGoogle(t.token,{purchase:e,persist:n})})}validatePurchaseHuawei(t,e,n,i=!0){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.validatePurchaseHuawei(t.token,{purchase:e,signature:n,persist:i})})}validateSubscriptionApple(t,e,n=!0){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.validateSubscriptionApple(t.token,{receipt:e,persist:n})})}validateSubscriptionGoogle(t,e,n=!0){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.validateSubscriptionGoogle(t.token,{receipt:e,persist:n})})}writeLeaderboardRecord(t,e,n){return Z(this,null,function*(){return this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t)),this.apiClient.writeLeaderboardRecord(t.token,e,{metadata:n.metadata?JSON.stringify(n.metadata):void 0,score:n.score,subscore:n.subscore}).then(i=>Promise.resolve({expiry_time:i.expiry_time,leaderboard_id:i.leaderboard_id,metadata:i.metadata?JSON.parse(i.metadata):void 0,num_score:i.num_score?Number(i.num_score):0,owner_id:i.owner_id,score:i.score?Number(i.score):0,subscore:i.subscore?Number(i.subscore):0,update_time:i.update_time,username:i.username,max_num_score:i.max_num_score?Number(i.max_num_score):0,rank:i.rank?Number(i.rank):0}))})}writeStorageObjects(t,e){return Z(this,null,function*(){this.autoRefreshSession&&t.refresh_token&&t.isexpired((Date.now()+this.expiredTimespanMs)/1e3)&&(yield this.sessionRefresh(t));var n={objects:[]};return e.forEach(i=>{n.objects.push({collection:i.collection,key:i.key,permission_read:i.permission_read,permission_write:i.permission_write,value:JSON.stringify(i.value),version:i.version})}),this.apiClient.writeStorageObjects(t.token,n)})}writeTournamentRecord(t,e,n){return Z(this,null,function*(){return this.apiClient.writeTournamentRecord(t.token,e,{metadata:n.metadata?JSON.stringify(n.metadata):void 0,score:n.score,subscore:n.subscore}).then(i=>Promise.resolve({expiry_time:i.expiry_time,leaderboard_id:i.leaderboard_id,metadata:i.metadata?JSON.parse(i.metadata):void 0,num_score:i.num_score?Number(i.num_score):0,owner_id:i.owner_id,score:i.score?Number(i.score):0,subscore:i.subscore?Number(i.subscore):0,update_time:i.update_time,username:i.username,max_num_score:i.max_num_score?Number(i.max_num_score):0,rank:i.rank?Number(i.rank):0}))})}};class Ex{constructor(){this.client=new Mx("admin","localhost","7350",!1),this.session=null,this.socket=null}async authenticate(){const e=this.getDeviceId();return this.session=await this.client.authenticateDevice(e,!0),this.session}getDeviceId(){let e=localStorage.getItem("deviceId");return e||(e=this.generateUUID(),localStorage.setItem("deviceId",e)),e}generateUUID(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const n=Math.random()*16|0;return(e==="x"?n:n&3|8).toString(16)})}async createSocket(){return this.socket=this.client.createSocket(!1,!1),await this.socket.connect(this.session),this.socket}async findMatch(e="classic"){this.socket||await this.createSocket();const n="+properties.mode:"+e,i=2,r=2,s={mode:e};return await this.socket.addMatchmaker(n,i,r,s)}async joinMatch(e){return this.socket||await this.createSocket(),await this.socket.joinMatch(e)}async leaveMatch(e){this.socket&&await this.socket.leaveMatch(e)}async sendMatchState(e,n,i){this.socket&&await this.socket.sendMatchState(e,n,JSON.stringify(i))}async rpcCall(e,n={}){return await this.client.rpc(this.session,e,JSON.stringify(n))}async getLeaderboard(){const e=await this.rpcCall("get_leaderboard");return JSON.parse(e.payload)}async getPlayerStats(){const e=await this.rpcCall("get_player_stats");return JSON.parse(e.payload)}disconnectSocket(){this.socket&&(this.socket.disconnect(),this.socket=null)}}const _i=new Ex;function wx({session:t,onMatchFound:e,onShowLeaderboard:n}){const[i,r]=Ge.useState(!1),[s,o]=Ge.useState("classic"),[l,a]=Ge.useState(null),[u,c]=Ge.useState(null);Ge.useEffect(()=>{d()},[]);const d=async()=>{try{const v=await _i.getPlayerStats();c(v.stats)}catch(v){console.error("Failed to load player stats:",v)}},f=async()=>{r(!0);try{const v=await _i.createSocket();v.onmatchmakermatched=async m=>{if(m.ticket===(l==null?void 0:l.ticket)){const h=await _i.joinMatch(m.match_id);e(h),r(!1)}};const y=await _i.findMatch(s);a(y)}catch(v){console.error("Matchmaking failed:",v),r(!1)}},p=()=>{r(!1),a(null)};return W.jsx("div",{className:"lobby",children:W.jsxs("div",{className:"lobby-content",children:[W.jsxs("div",{className:"player-card",children:[W.jsx("h2",{children:"Player Stats"}),u?W.jsxs("div",{className:"stats-grid",children:[W.jsxs("div",{className:"stat-item",children:[W.jsx("span",{className:"stat-label",children:"Wins"}),W.jsx("span",{className:"stat-value",children:u.wins})]}),W.jsxs("div",{className:"stat-item",children:[W.jsx("span",{className:"stat-label",children:"Losses"}),W.jsx("span",{className:"stat-value",children:u.losses})]}),W.jsxs("div",{className:"stat-item",children:[W.jsx("span",{className:"stat-label",children:"Win Streak"}),W.jsx("span",{className:"stat-value",children:u.winStreak})]}),W.jsxs("div",{className:"stat-item",children:[W.jsx("span",{className:"stat-label",children:"Best Streak"}),W.jsx("span",{className:"stat-value",children:u.maxWinStreak})]})]}):W.jsx("p",{children:"Loading stats..."})]}),W.jsxs("div",{className:"mode-selector",children:[W.jsx("h3",{children:"Select Game Mode"}),W.jsxs("div",{className:"mode-buttons",children:[W.jsxs("button",{className:`mode-btn ${s==="classic"?"active":""}`,onClick:()=>o("classic"),disabled:i,children:[W.jsx("div",{className:"mode-icon",children:"♾️"}),W.jsx("div",{className:"mode-name",children:"Classic"}),W.jsx("div",{className:"mode-desc",children:"No time limit"})]}),W.jsxs("button",{className:`mode-btn ${s==="timed"?"active":""}`,onClick:()=>o("timed"),disabled:i,children:[W.jsx("div",{className:"mode-icon",children:"⏱️"}),W.jsx("div",{className:"mode-name",children:"Timed"}),W.jsx("div",{className:"mode-desc",children:"30 seconds per turn"})]})]})]}),W.jsxs("div",{className:"action-buttons",children:[i?W.jsxs("div",{className:"searching",children:[W.jsx("div",{className:"spinner"}),W.jsx("p",{children:"Searching for opponent..."}),W.jsx("button",{className:"btn-secondary",onClick:p,children:"Cancel"})]}):W.jsx("button",{className:"btn-primary",onClick:f,children:"Find Match"}),W.jsx("button",{className:"btn-secondary",onClick:n,children:"View Leaderboard"})]})]})})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sf="158",Tx=0,Gh=1,Ax=2,bg=1,Px=2,ci=3,Qi=0,ln=1,hi=2,Xi=0,vs=1,Hh=2,Vh=3,Wh=4,Rx=5,mr=100,bx=101,Cx=102,jh=103,qh=104,Lx=200,Ux=201,Nx=202,Dx=203,Kc=204,Zc=205,Ix=206,Ox=207,Fx=208,kx=209,Bx=210,zx=211,Gx=212,Hx=213,Vx=214,Wx=0,jx=1,qx=2,Ml=3,Xx=4,Yx=5,Jx=6,$x=7,Cg=0,Kx=1,Zx=2,Yi=0,Qx=1,eS=2,tS=3,nS=4,iS=5,Lg=300,Ps=301,Rs=302,Qc=303,ed=304,Wl=306,td=1e3,Gn=1001,nd=1002,Jt=1003,Xh=1004,Tu=1005,Tn=1006,rS=1007,Ia=1008,Ji=1009,sS=1010,aS=1011,af=1012,Ug=1013,Fi=1014,ki=1015,Oa=1016,Ng=1017,Dg=1018,Mr=1020,oS=1021,Hn=1023,lS=1024,uS=1025,Er=1026,bs=1027,cS=1028,Ig=1029,dS=1030,Og=1031,Fg=1033,Au=33776,Pu=33777,Ru=33778,bu=33779,Yh=35840,Jh=35841,$h=35842,Kh=35843,fS=36196,Zh=37492,Qh=37496,ep=37808,tp=37809,np=37810,ip=37811,rp=37812,sp=37813,ap=37814,op=37815,lp=37816,up=37817,cp=37818,dp=37819,fp=37820,hp=37821,Cu=36492,pp=36494,mp=36495,hS=36283,_p=36284,gp=36285,vp=36286,kg=3e3,wr=3001,pS=3200,mS=3201,Bg=0,_S=1,Pn="",Nt="srgb",Ei="srgb-linear",of="display-p3",jl="display-p3-linear",El="linear",it="srgb",wl="rec709",Tl="p3",Or=7680,yp=519,gS=512,vS=513,yS=514,xS=515,SS=516,MS=517,ES=518,wS=519,xp=35044,Sp="300 es",id=1035,gi=2e3,Al=2001;class Is{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lu=Math.PI/180,rd=180/Math.PI;function Va(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[t&255]+Bt[t>>8&255]+Bt[t>>16&255]+Bt[t>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[n&63|128]+Bt[n>>8&255]+"-"+Bt[n>>16&255]+Bt[n>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function nn(t,e,n){return Math.max(e,Math.min(n,t))}function TS(t,e){return(t%e+e)%e}function Uu(t,e,n){return(1-n)*t+n*e}function Mp(t){return(t&t-1)===0&&t!==0}function sd(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Xs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,n=0){Je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,n,i,r,s,o,l,a,u){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,l,a,u)}set(e,n,i,r,s,o,l,a,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=l,c[3]=n,c[4]=s,c[5]=a,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],l=i[3],a=i[6],u=i[1],c=i[4],d=i[7],f=i[2],p=i[5],v=i[8],y=r[0],m=r[3],h=r[6],g=r[1],_=r[4],x=r[7],w=r[2],R=r[5],A=r[8];return s[0]=o*y+l*g+a*w,s[3]=o*m+l*_+a*R,s[6]=o*h+l*x+a*A,s[1]=u*y+c*g+d*w,s[4]=u*m+c*_+d*R,s[7]=u*h+c*x+d*A,s[2]=f*y+p*g+v*w,s[5]=f*m+p*_+v*R,s[8]=f*h+p*x+v*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],l=e[5],a=e[6],u=e[7],c=e[8];return n*o*c-n*l*u-i*s*c+i*l*a+r*s*u-r*o*a}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],l=e[5],a=e[6],u=e[7],c=e[8],d=c*o-l*u,f=l*a-c*s,p=u*s-o*a,v=n*d+i*f+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=d*y,e[1]=(r*u-c*i)*y,e[2]=(l*i-r*o)*y,e[3]=f*y,e[4]=(c*n-r*a)*y,e[5]=(r*s-l*n)*y,e[6]=p*y,e[7]=(i*a-u*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,l){const a=Math.cos(s),u=Math.sin(s);return this.set(i*a,i*u,-i*(a*o+u*l)+o+e,-r*u,r*a,-r*(-u*o+a*l)+l+n,0,0,1),this}scale(e,n){return this.premultiply(Nu.makeScale(e,n)),this}rotate(e){return this.premultiply(Nu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Nu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nu=new ze;function zg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Pl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function AS(){const t=Pl("canvas");return t.style.display="block",t}const Ep={};function _a(t){t in Ep||(Ep[t]=!0,console.warn(t))}const wp=new ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Tp=new ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),po={[Ei]:{transfer:El,primaries:wl,toReference:t=>t,fromReference:t=>t},[Nt]:{transfer:it,primaries:wl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[jl]:{transfer:El,primaries:Tl,toReference:t=>t.applyMatrix3(Tp),fromReference:t=>t.applyMatrix3(wp)},[of]:{transfer:it,primaries:Tl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Tp),fromReference:t=>t.applyMatrix3(wp).convertLinearToSRGB()}},PS=new Set([Ei,jl]),Ze={enabled:!0,_workingColorSpace:Ei,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!PS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=po[e].toReference,r=po[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return po[t].primaries},getTransfer:function(t){return t===Pn?El:po[t].transfer}};function ys(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Du(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Fr;class Gg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fr===void 0&&(Fr=Pl("canvas")),Fr.width=e.width,Fr.height=e.height;const i=Fr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Fr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Pl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ys(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ys(n[i]/255)*255):n[i]=ys(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let RS=0;class Hg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=Va(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,l=r.length;o<l;o++)r[o].isDataTexture?s.push(Iu(r[o].image)):s.push(Iu(r[o]))}else s=Iu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Iu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Gg.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bS=0;class gn extends Is{constructor(e=gn.DEFAULT_IMAGE,n=gn.DEFAULT_MAPPING,i=Gn,r=Gn,s=Tn,o=Ia,l=Hn,a=Ji,u=gn.DEFAULT_ANISOTROPY,c=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=Va(),this.name="",this.source=new Hg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=a,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(_a("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===wr?Nt:Pn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case td:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case nd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case td:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case nd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return _a("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Nt?wr:kg}set encoding(e){_a("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===wr?Nt:Pn}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=Lg;gn.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,n=0,i=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const a=e.elements,u=a[0],c=a[4],d=a[8],f=a[1],p=a[5],v=a[9],y=a[2],m=a[6],h=a[10];if(Math.abs(c-f)<.01&&Math.abs(d-y)<.01&&Math.abs(v-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+y)<.1&&Math.abs(v+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,x=(p+1)/2,w=(h+1)/2,R=(c+f)/4,A=(d+y)/4,U=(v+m)/4;return _>x&&_>w?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=R/i,s=A/i):x>w?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=R/r,s=U/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=A/s,r=U/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-v)*(m-v)+(d-y)*(d-y)+(f-c)*(f-c));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(d-y)/g,this.z=(f-c)/g,this.w=Math.acos((u+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class CS extends Is{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(_a("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===wr?Nt:Pn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new gn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Hg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lr extends CS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Vg extends gn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class LS extends gn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,l){let a=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],v=s[o+2],y=s[o+3];if(l===0){e[n+0]=a,e[n+1]=u,e[n+2]=c,e[n+3]=d;return}if(l===1){e[n+0]=f,e[n+1]=p,e[n+2]=v,e[n+3]=y;return}if(d!==y||a!==f||u!==p||c!==v){let m=1-l;const h=a*f+u*p+c*v+d*y,g=h>=0?1:-1,_=1-h*h;if(_>Number.EPSILON){const w=Math.sqrt(_),R=Math.atan2(w,h*g);m=Math.sin(m*R)/w,l=Math.sin(l*R)/w}const x=l*g;if(a=a*m+f*x,u=u*m+p*x,c=c*m+v*x,d=d*m+y*x,m===1-l){const w=1/Math.sqrt(a*a+u*u+c*c+d*d);a*=w,u*=w,c*=w,d*=w}}e[n]=a,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const l=i[r],a=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],p=s[o+2],v=s[o+3];return e[n]=l*v+c*d+a*p-u*f,e[n+1]=a*v+c*f+u*d-l*p,e[n+2]=u*v+c*p+l*f-a*d,e[n+3]=c*v-l*d-a*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,l=Math.cos,a=Math.sin,u=l(i/2),c=l(r/2),d=l(s/2),f=a(i/2),p=a(r/2),v=a(s/2);switch(o){case"XYZ":this._x=f*c*d+u*p*v,this._y=u*p*d-f*c*v,this._z=u*c*v+f*p*d,this._w=u*c*d-f*p*v;break;case"YXZ":this._x=f*c*d+u*p*v,this._y=u*p*d-f*c*v,this._z=u*c*v-f*p*d,this._w=u*c*d+f*p*v;break;case"ZXY":this._x=f*c*d-u*p*v,this._y=u*p*d+f*c*v,this._z=u*c*v+f*p*d,this._w=u*c*d-f*p*v;break;case"ZYX":this._x=f*c*d-u*p*v,this._y=u*p*d+f*c*v,this._z=u*c*v-f*p*d,this._w=u*c*d+f*p*v;break;case"YZX":this._x=f*c*d+u*p*v,this._y=u*p*d+f*c*v,this._z=u*c*v-f*p*d,this._w=u*c*d-f*p*v;break;case"XZY":this._x=f*c*d-u*p*v,this._y=u*p*d-f*c*v,this._z=u*c*v+f*p*d,this._w=u*c*d+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],l=n[5],a=n[9],u=n[2],c=n[6],d=n[10],f=i+l+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-a)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>l&&i>d){const p=2*Math.sqrt(1+i-l-d);this._w=(c-a)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(l>d){const p=2*Math.sqrt(1+l-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(a+c)/p}else{const p=2*Math.sqrt(1+d-i-l);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(a+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,l=n._x,a=n._y,u=n._z,c=n._w;return this._x=i*c+o*l+r*u-s*a,this._y=r*c+o*a+s*l-i*u,this._z=s*c+o*u+i*a-r*l,this._w=o*c-i*l-r*a-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let l=o*e._w+i*e._x+r*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const a=1-l*l;if(a<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(a),c=Math.atan2(u,l),d=Math.sin((1-n)*c)/u,f=Math.sin(n*c)/u;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,n=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ap.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ap.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,l=e.z,a=e.w,u=2*(o*r-l*i),c=2*(l*n-s*r),d=2*(s*i-o*n);return this.x=n+a*u+o*d-l*c,this.y=i+a*c+l*u-s*d,this.z=r+a*d+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,l=n.y,a=n.z;return this.x=r*a-s*l,this.y=s*o-i*a,this.z=i*l-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ou.copy(this).projectOnVector(e),this.sub(Ou)}reflect(e){return this.sub(Ou.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ou=new F,Ap=new Wa;class ja{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Dn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Dn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Dn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=s.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,Dn):Dn.fromBufferAttribute(s,o),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),mo.copy(i.boundingBox)),mo.applyMatrix4(e.matrixWorld),this.union(mo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ys),_o.subVectors(this.max,Ys),kr.subVectors(e.a,Ys),Br.subVectors(e.b,Ys),zr.subVectors(e.c,Ys),Ai.subVectors(Br,kr),Pi.subVectors(zr,Br),ar.subVectors(kr,zr);let n=[0,-Ai.z,Ai.y,0,-Pi.z,Pi.y,0,-ar.z,ar.y,Ai.z,0,-Ai.x,Pi.z,0,-Pi.x,ar.z,0,-ar.x,-Ai.y,Ai.x,0,-Pi.y,Pi.x,0,-ar.y,ar.x,0];return!Fu(n,kr,Br,zr,_o)||(n=[1,0,0,0,1,0,0,0,1],!Fu(n,kr,Br,zr,_o))?!1:(go.crossVectors(Ai,Pi),n=[go.x,go.y,go.z],Fu(n,kr,Br,zr,_o))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const si=[new F,new F,new F,new F,new F,new F,new F,new F],Dn=new F,mo=new ja,kr=new F,Br=new F,zr=new F,Ai=new F,Pi=new F,ar=new F,Ys=new F,_o=new F,go=new F,or=new F;function Fu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){or.fromArray(t,s);const l=r.x*Math.abs(or.x)+r.y*Math.abs(or.y)+r.z*Math.abs(or.z),a=e.dot(or),u=n.dot(or),c=i.dot(or);if(Math.max(-Math.max(a,u,c),Math.min(a,u,c))>l)return!1}return!0}const US=new ja,Js=new F,ku=new F;class lf{constructor(e=new F,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):US.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);const n=Js.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Js,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ku.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(ku)),this.expandByPoint(Js.copy(e.center).sub(ku))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new F,Bu=new F,vo=new F,Ri=new F,zu=new F,yo=new F,Gu=new F;class Wg{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ai.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,n),ai.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Bu.copy(e).add(n).multiplyScalar(.5),vo.copy(n).sub(e).normalize(),Ri.copy(this.origin).sub(Bu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(vo),l=Ri.dot(this.direction),a=-Ri.dot(vo),u=Ri.lengthSq(),c=Math.abs(1-o*o);let d,f,p,v;if(c>0)if(d=o*a-l,f=o*l-a,v=s*c,d>=0)if(f>=-v)if(f<=v){const y=1/c;d*=y,f*=y,p=d*(d+o*f+2*l)+f*(o*d+f+2*a)+u}else f=s,d=Math.max(0,-(o*f+l)),p=-d*d+f*(f+2*a)+u;else f=-s,d=Math.max(0,-(o*f+l)),p=-d*d+f*(f+2*a)+u;else f<=-v?(d=Math.max(0,-(-o*s+l)),f=d>0?-s:Math.min(Math.max(-s,-a),s),p=-d*d+f*(f+2*a)+u):f<=v?(d=0,f=Math.min(Math.max(-s,-a),s),p=f*(f+2*a)+u):(d=Math.max(0,-(o*s+l)),f=d>0?s:Math.min(Math.max(-s,-a),s),p=-d*d+f*(f+2*a)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+l)),p=-d*d+f*(f+2*a)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Bu).addScaledVector(vo,f),p}intersectSphere(e,n){ai.subVectors(e.center,this.origin);const i=ai.dot(this.direction),r=ai.dot(ai)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),l=i-o,a=i+o;return a<0?null:l<0?this.at(a,n):this.at(l,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,l,a;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(l=(e.min.z-f.z)*d,a=(e.max.z-f.z)*d):(l=(e.max.z-f.z)*d,a=(e.min.z-f.z)*d),i>a||l>r)||((l>i||i!==i)&&(i=l),(a<r||r!==r)&&(r=a),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,n,i,r,s){zu.subVectors(n,e),yo.subVectors(i,e),Gu.crossVectors(zu,yo);let o=this.direction.dot(Gu),l;if(o>0){if(r)return null;l=1}else if(o<0)l=-1,o=-o;else return null;Ri.subVectors(this.origin,e);const a=l*this.direction.dot(yo.crossVectors(Ri,yo));if(a<0)return null;const u=l*this.direction.dot(zu.cross(Ri));if(u<0||a+u>o)return null;const c=-l*Ri.dot(Gu);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(e,n,i,r,s,o,l,a,u,c,d,f,p,v,y,m){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,l,a,u,c,d,f,p,v,y,m)}set(e,n,i,r,s,o,l,a,u,c,d,f,p,v,y,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=l,h[13]=a,h[2]=u,h[6]=c,h[10]=d,h[14]=f,h[3]=p,h[7]=v,h[11]=y,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Gr.setFromMatrixColumn(e,0).length(),s=1/Gr.setFromMatrixColumn(e,1).length(),o=1/Gr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),l=Math.sin(i),a=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,p=o*d,v=l*c,y=l*d;n[0]=a*c,n[4]=-a*d,n[8]=u,n[1]=p+v*u,n[5]=f-y*u,n[9]=-l*a,n[2]=y-f*u,n[6]=v+p*u,n[10]=o*a}else if(e.order==="YXZ"){const f=a*c,p=a*d,v=u*c,y=u*d;n[0]=f+y*l,n[4]=v*l-p,n[8]=o*u,n[1]=o*d,n[5]=o*c,n[9]=-l,n[2]=p*l-v,n[6]=y+f*l,n[10]=o*a}else if(e.order==="ZXY"){const f=a*c,p=a*d,v=u*c,y=u*d;n[0]=f-y*l,n[4]=-o*d,n[8]=v+p*l,n[1]=p+v*l,n[5]=o*c,n[9]=y-f*l,n[2]=-o*u,n[6]=l,n[10]=o*a}else if(e.order==="ZYX"){const f=o*c,p=o*d,v=l*c,y=l*d;n[0]=a*c,n[4]=v*u-p,n[8]=f*u+y,n[1]=a*d,n[5]=y*u+f,n[9]=p*u-v,n[2]=-u,n[6]=l*a,n[10]=o*a}else if(e.order==="YZX"){const f=o*a,p=o*u,v=l*a,y=l*u;n[0]=a*c,n[4]=y-f*d,n[8]=v*d+p,n[1]=d,n[5]=o*c,n[9]=-l*c,n[2]=-u*c,n[6]=p*d+v,n[10]=f-y*d}else if(e.order==="XZY"){const f=o*a,p=o*u,v=l*a,y=l*u;n[0]=a*c,n[4]=-d,n[8]=u*c,n[1]=f*d+y,n[5]=o*c,n[9]=p*d-v,n[2]=v*d-p,n[6]=l*c,n[10]=y*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(NS,e,DS)}lookAt(e,n,i){const r=this.elements;return fn.subVectors(e,n),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),bi.crossVectors(i,fn),bi.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),bi.crossVectors(i,fn)),bi.normalize(),xo.crossVectors(fn,bi),r[0]=bi.x,r[4]=xo.x,r[8]=fn.x,r[1]=bi.y,r[5]=xo.y,r[9]=fn.y,r[2]=bi.z,r[6]=xo.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],l=i[4],a=i[8],u=i[12],c=i[1],d=i[5],f=i[9],p=i[13],v=i[2],y=i[6],m=i[10],h=i[14],g=i[3],_=i[7],x=i[11],w=i[15],R=r[0],A=r[4],U=r[8],M=r[12],T=r[1],q=r[5],$=r[9],K=r[13],L=r[2],j=r[6],J=r[10],Y=r[14],D=r[3],G=r[7],B=r[11],C=r[15];return s[0]=o*R+l*T+a*L+u*D,s[4]=o*A+l*q+a*j+u*G,s[8]=o*U+l*$+a*J+u*B,s[12]=o*M+l*K+a*Y+u*C,s[1]=c*R+d*T+f*L+p*D,s[5]=c*A+d*q+f*j+p*G,s[9]=c*U+d*$+f*J+p*B,s[13]=c*M+d*K+f*Y+p*C,s[2]=v*R+y*T+m*L+h*D,s[6]=v*A+y*q+m*j+h*G,s[10]=v*U+y*$+m*J+h*B,s[14]=v*M+y*K+m*Y+h*C,s[3]=g*R+_*T+x*L+w*D,s[7]=g*A+_*q+x*j+w*G,s[11]=g*U+_*$+x*J+w*B,s[15]=g*M+_*K+x*Y+w*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],l=e[5],a=e[9],u=e[13],c=e[2],d=e[6],f=e[10],p=e[14],v=e[3],y=e[7],m=e[11],h=e[15];return v*(+s*a*d-r*u*d-s*l*f+i*u*f+r*l*p-i*a*p)+y*(+n*a*p-n*u*f+s*o*f-r*o*p+r*u*c-s*a*c)+m*(+n*u*d-n*l*p-s*o*d+i*o*p+s*l*c-i*u*c)+h*(-r*l*c-n*a*d+n*l*f+r*o*d-i*o*f+i*a*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],l=e[5],a=e[6],u=e[7],c=e[8],d=e[9],f=e[10],p=e[11],v=e[12],y=e[13],m=e[14],h=e[15],g=d*m*u-y*f*u+y*a*p-l*m*p-d*a*h+l*f*h,_=v*f*u-c*m*u-v*a*p+o*m*p+c*a*h-o*f*h,x=c*y*u-v*d*u+v*l*p-o*y*p-c*l*h+o*d*h,w=v*d*a-c*y*a-v*l*f+o*y*f+c*l*m-o*d*m,R=n*g+i*_+r*x+s*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=g*A,e[1]=(y*f*s-d*m*s-y*r*p+i*m*p+d*r*h-i*f*h)*A,e[2]=(l*m*s-y*a*s+y*r*u-i*m*u-l*r*h+i*a*h)*A,e[3]=(d*a*s-l*f*s-d*r*u+i*f*u+l*r*p-i*a*p)*A,e[4]=_*A,e[5]=(c*m*s-v*f*s+v*r*p-n*m*p-c*r*h+n*f*h)*A,e[6]=(v*a*s-o*m*s-v*r*u+n*m*u+o*r*h-n*a*h)*A,e[7]=(o*f*s-c*a*s+c*r*u-n*f*u-o*r*p+n*a*p)*A,e[8]=x*A,e[9]=(v*d*s-c*y*s-v*i*p+n*y*p+c*i*h-n*d*h)*A,e[10]=(o*y*s-v*l*s+v*i*u-n*y*u-o*i*h+n*l*h)*A,e[11]=(c*l*s-o*d*s-c*i*u+n*d*u+o*i*p-n*l*p)*A,e[12]=w*A,e[13]=(c*y*r-v*d*r+v*i*f-n*y*f-c*i*m+n*d*m)*A,e[14]=(v*l*r-o*y*r-v*i*a+n*y*a+o*i*m-n*l*m)*A,e[15]=(o*d*r-c*l*r+c*i*a-n*d*a-o*i*f+n*l*f)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,l=e.y,a=e.z,u=s*o,c=s*l;return this.set(u*o+i,u*l-r*a,u*a+r*l,0,u*l+r*a,c*l+i,c*a-r*o,0,u*a-r*l,c*a+r*o,s*a*a+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,l=n._z,a=n._w,u=s+s,c=o+o,d=l+l,f=s*u,p=s*c,v=s*d,y=o*c,m=o*d,h=l*d,g=a*u,_=a*c,x=a*d,w=i.x,R=i.y,A=i.z;return r[0]=(1-(y+h))*w,r[1]=(p+x)*w,r[2]=(v-_)*w,r[3]=0,r[4]=(p-x)*R,r[5]=(1-(f+h))*R,r[6]=(m+g)*R,r[7]=0,r[8]=(v+_)*A,r[9]=(m-g)*A,r[10]=(1-(f+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Gr.set(r[0],r[1],r[2]).length();const o=Gr.set(r[4],r[5],r[6]).length(),l=Gr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],In.copy(this);const u=1/s,c=1/o,d=1/l;return In.elements[0]*=u,In.elements[1]*=u,In.elements[2]*=u,In.elements[4]*=c,In.elements[5]*=c,In.elements[6]*=c,In.elements[8]*=d,In.elements[9]*=d,In.elements[10]*=d,n.setFromRotationMatrix(In),i.x=s,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,o,l=gi){const a=this.elements,u=2*s/(n-e),c=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let p,v;if(l===gi)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(l===Al)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return a[0]=u,a[4]=0,a[8]=d,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=p,a[14]=v,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,s,o,l=gi){const a=this.elements,u=1/(n-e),c=1/(i-r),d=1/(o-s),f=(n+e)*u,p=(i+r)*c;let v,y;if(l===gi)v=(o+s)*d,y=-2*d;else if(l===Al)v=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return a[0]=2*u,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-p,a[2]=0,a[6]=0,a[10]=y,a[14]=-v,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Gr=new F,In=new St,NS=new F(0,0,0),DS=new F(1,1,1),bi=new F,xo=new F,fn=new F,Pp=new St,Rp=new Wa;class ql{constructor(e=0,n=0,i=0,r=ql.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],l=r[8],a=r[1],u=r[5],c=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(l,p),this._z=Math.atan2(a,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(nn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(a,s));break;case"ZYX":this._y=Math.asin(-nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(a,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(l,p));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Pp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Rp.setFromEuler(this),this.setFromQuaternion(Rp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ql.DEFAULT_ORDER="XYZ";class uf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let IS=0;const bp=new F,Hr=new Wa,oi=new St,So=new F,$s=new F,OS=new F,FS=new Wa,Cp=new F(1,0,0),Lp=new F(0,1,0),Up=new F(0,0,1),kS={type:"added"},BS={type:"removed"};class Vt extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=Va(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new F,n=new ql,i=new Wa,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new ze}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new uf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Hr.setFromAxisAngle(e,n),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(e,n){return Hr.setFromAxisAngle(e,n),this.quaternion.premultiply(Hr),this}rotateX(e){return this.rotateOnAxis(Cp,e)}rotateY(e){return this.rotateOnAxis(Lp,e)}rotateZ(e){return this.rotateOnAxis(Up,e)}translateOnAxis(e,n){return bp.copy(e).applyQuaternion(this.quaternion),this.position.add(bp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Cp,e)}translateY(e){return this.translateOnAxis(Lp,e)}translateZ(e){return this.translateOnAxis(Up,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?So.copy(e):So.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt($s,So,this.up):oi.lookAt(So,$s,this.up),this.quaternion.setFromRotationMatrix(oi),r&&(oi.extractRotation(r.matrixWorld),Hr.setFromRotationMatrix(oi),this.quaternion.premultiply(Hr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(kS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(BS)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,OS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,FS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const l=r[s];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(l,a){return l[a.uuid]===void 0&&(l[a.uuid]=a.toJSON(e)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const a=l.shapes;if(Array.isArray(a))for(let u=0,c=a.length;u<c;u++){const d=a[u];s(e.shapes,d)}else s(e.shapes,a)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let a=0,u=this.material.length;a<u;a++)l.push(s(e.materials,this.material[a]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const a=this.animations[l];r.animations.push(s(e.animations,a))}}if(n){const l=o(e.geometries),a=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),v=o(e.nodes);l.length>0&&(i.geometries=l),a.length>0&&(i.materials=a),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(l){const a=[];for(const u in l){const c=l[u];delete c.metadata,a.push(c)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Vt.DEFAULT_UP=new F(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new F,li=new F,Hu=new F,ui=new F,Vr=new F,Wr=new F,Np=new F,Vu=new F,Wu=new F,ju=new F;let Mo=!1;class zn{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),On.subVectors(e,n),r.cross(On);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){On.subVectors(r,n),li.subVectors(i,n),Hu.subVectors(e,n);const o=On.dot(On),l=On.dot(li),a=On.dot(Hu),u=li.dot(li),c=li.dot(Hu),d=o*u-l*l;if(d===0)return s.set(-2,-1,-1);const f=1/d,p=(u*a-l*c)*f,v=(o*c-l*a)*f;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ui),ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getUV(e,n,i,r,s,o,l,a){return Mo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Mo=!0),this.getInterpolation(e,n,i,r,s,o,l,a)}static getInterpolation(e,n,i,r,s,o,l,a){return this.getBarycoord(e,n,i,r,ui),a.setScalar(0),a.addScaledVector(s,ui.x),a.addScaledVector(o,ui.y),a.addScaledVector(l,ui.z),a}static isFrontFacing(e,n,i,r){return On.subVectors(i,n),li.subVectors(e,n),On.cross(li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),li.subVectors(this.a,this.b),On.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return zn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Mo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Mo=!0),zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,l;Vr.subVectors(r,i),Wr.subVectors(s,i),Vu.subVectors(e,i);const a=Vr.dot(Vu),u=Wr.dot(Vu);if(a<=0&&u<=0)return n.copy(i);Wu.subVectors(e,r);const c=Vr.dot(Wu),d=Wr.dot(Wu);if(c>=0&&d<=c)return n.copy(r);const f=a*d-c*u;if(f<=0&&a>=0&&c<=0)return o=a/(a-c),n.copy(i).addScaledVector(Vr,o);ju.subVectors(e,s);const p=Vr.dot(ju),v=Wr.dot(ju);if(v>=0&&p<=v)return n.copy(s);const y=p*u-a*v;if(y<=0&&u>=0&&v<=0)return l=u/(u-v),n.copy(i).addScaledVector(Wr,l);const m=c*v-p*d;if(m<=0&&d-c>=0&&p-v>=0)return Np.subVectors(s,r),l=(d-c)/(d-c+(p-v)),n.copy(r).addScaledVector(Np,l);const h=1/(m+y+f);return o=y*h,l=f*h,n.copy(i).addScaledVector(Vr,o).addScaledVector(Wr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},Eo={h:0,s:0,l:0};function qu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=TS(e,1),n=nn(n,0,1),i=nn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=qu(o,s,e+1/3),this.g=qu(o,s,e),this.b=qu(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,n=Nt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],l=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Nt){const i=jg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}copyLinearToSRGB(e){return this.r=Du(e.r),this.g=Du(e.g),this.b=Du(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return Ze.fromWorkingColorSpace(zt.copy(this),e),Math.round(nn(zt.r*255,0,255))*65536+Math.round(nn(zt.g*255,0,255))*256+Math.round(nn(zt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.fromWorkingColorSpace(zt.copy(this),n);const i=zt.r,r=zt.g,s=zt.b,o=Math.max(i,r,s),l=Math.min(i,r,s);let a,u;const c=(l+o)/2;if(l===o)a=0,u=0;else{const d=o-l;switch(u=c<=.5?d/(o+l):d/(2-o-l),o){case i:a=(r-s)/d+(r<s?6:0);break;case r:a=(s-i)/d+2;break;case s:a=(i-r)/d+4;break}a/=6}return e.h=a,e.s=u,e.l=c,e}getRGB(e,n=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(zt.copy(this),n),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Nt){Ze.fromWorkingColorSpace(zt.copy(this),e);const n=zt.r,i=zt.g,r=zt.b;return e!==Nt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+n,Ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ci),e.getHSL(Eo);const i=Uu(Ci.h,Eo.h,n),r=Uu(Ci.s,Eo.s,n),s=Uu(Ci.l,Eo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new qe;qe.NAMES=jg;let zS=0;class qa extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=Va(),this.name="",this.type="Material",this.blending=vs,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kc,this.blendDst=Zc,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ml,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(i.blending=this.blending),this.side!==Qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Kc&&(i.blendSrc=this.blendSrc),this.blendDst!==Zc&&(i.blendDst=this.blendDst),this.blendEquation!==mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ml&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Or&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Or&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Or&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const l in s){const a=s[l];delete a.metadata,o.push(a)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qg extends qa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Cg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new F,wo=new Je;class ti{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=xp,this.updateRange={offset:0,count:-1},this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)wo.fromBufferAttribute(this,n),wo.applyMatrix3(e),this.setXY(n,wo.x,wo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.applyMatrix3(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.applyMatrix4(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.applyNormalMatrix(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.transformDirection(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Xs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Qt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Xs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Xs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Xs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Xs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array),s=Qt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xp&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Xg extends ti{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Yg extends ti{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ni extends ti{constructor(e,n,i){super(new Float32Array(e),n,i)}}let GS=0;const Mn=new St,Xu=new Vt,jr=new F,hn=new ja,Ks=new ja,Pt=new F;class ir extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=Va(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zg(e)?Yg:Xg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,n,i){return Mn.makeTranslation(e,n,i),this.applyMatrix4(Mn),this}scale(e,n,i){return Mn.makeScale(e,n,i),this.applyMatrix4(Mn),this}lookAt(e){return Xu.lookAt(e),Xu.updateMatrix(),this.applyMatrix4(Xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ni(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ja);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const l=n[s];Ks.setFromBufferAttribute(l),this.morphTargetsRelative?(Pt.addVectors(hn.min,Ks.min),hn.expandByPoint(Pt),Pt.addVectors(hn.max,Ks.max),hn.expandByPoint(Pt)):(hn.expandByPoint(Ks.min),hn.expandByPoint(Ks.max))}hn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(n)for(let s=0,o=n.length;s<o;s++){const l=n[s],a=this.morphTargetsRelative;for(let u=0,c=l.count;u<c;u++)Pt.fromBufferAttribute(l,u),a&&(jr.fromBufferAttribute(e,u),Pt.add(jr)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,l=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ti(new Float32Array(4*l),4));const a=this.getAttribute("tangent").array,u=[],c=[];for(let T=0;T<l;T++)u[T]=new F,c[T]=new F;const d=new F,f=new F,p=new F,v=new Je,y=new Je,m=new Je,h=new F,g=new F;function _(T,q,$){d.fromArray(r,T*3),f.fromArray(r,q*3),p.fromArray(r,$*3),v.fromArray(o,T*2),y.fromArray(o,q*2),m.fromArray(o,$*2),f.sub(d),p.sub(d),y.sub(v),m.sub(v);const K=1/(y.x*m.y-m.x*y.y);isFinite(K)&&(h.copy(f).multiplyScalar(m.y).addScaledVector(p,-y.y).multiplyScalar(K),g.copy(p).multiplyScalar(y.x).addScaledVector(f,-m.x).multiplyScalar(K),u[T].add(h),u[q].add(h),u[$].add(h),c[T].add(g),c[q].add(g),c[$].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let T=0,q=x.length;T<q;++T){const $=x[T],K=$.start,L=$.count;for(let j=K,J=K+L;j<J;j+=3)_(i[j+0],i[j+1],i[j+2])}const w=new F,R=new F,A=new F,U=new F;function M(T){A.fromArray(s,T*3),U.copy(A);const q=u[T];w.copy(q),w.sub(A.multiplyScalar(A.dot(q))).normalize(),R.crossVectors(U,q);const K=R.dot(c[T])<0?-1:1;a[T*4]=w.x,a[T*4+1]=w.y,a[T*4+2]=w.z,a[T*4+3]=K}for(let T=0,q=x.length;T<q;++T){const $=x[T],K=$.start,L=$.count;for(let j=K,J=K+L;j<J;j+=3)M(i[j+0]),M(i[j+1]),M(i[j+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ti(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new F,s=new F,o=new F,l=new F,a=new F,u=new F,c=new F,d=new F;if(e)for(let f=0,p=e.count;f<p;f+=3){const v=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),l.fromBufferAttribute(i,v),a.fromBufferAttribute(i,y),u.fromBufferAttribute(i,m),l.add(c),a.add(c),u.add(c),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Pt.fromBufferAttribute(e,n),Pt.normalize(),e.setXYZ(n,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(l,a){const u=l.array,c=l.itemSize,d=l.normalized,f=new u.constructor(a.length*c);let p=0,v=0;for(let y=0,m=a.length;y<m;y++){l.isInterleavedBufferAttribute?p=a[y]*l.data.stride+l.offset:p=a[y]*c;for(let h=0;h<c;h++)f[v++]=u[p++]}return new ti(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ir,i=this.index.array,r=this.attributes;for(const l in r){const a=r[l],u=e(a,i);n.setAttribute(l,u)}const s=this.morphAttributes;for(const l in s){const a=[],u=s[l];for(let c=0,d=u.length;c<d;c++){const f=u[c],p=e(f,i);a.push(p)}n.morphAttributes[l]=a}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,a=o.length;l<a;l++){const u=o[l];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const u in a)a[u]!==void 0&&(e[u]=a[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const a in i){const u=i[a];e.data.attributes[a]=u.toJSON(e.data)}const r={};let s=!1;for(const a in this.morphAttributes){const u=this.morphAttributes[a],c=[];for(let d=0,f=u.length;d<f;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[a]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,p=d.length;f<p;f++)c.push(d[f].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dp=new St,lr=new Wg,To=new lf,Ip=new F,qr=new F,Xr=new F,Yr=new F,Yu=new F,Ao=new F,Po=new Je,Ro=new Je,bo=new Je,Op=new F,Fp=new F,kp=new F,Co=new F,Lo=new F;class bn extends Vt{constructor(e=new ir,n=new qg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){Ao.set(0,0,0);for(let a=0,u=s.length;a<u;a++){const c=l[a],d=s[a];c!==0&&(Yu.fromBufferAttribute(d,e),o?Ao.addScaledVector(Yu,c):Ao.addScaledVector(Yu.sub(n),c))}n.add(Ao)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),To.copy(i.boundingSphere),To.applyMatrix4(s),lr.copy(e.ray).recast(e.near),!(To.containsPoint(lr.origin)===!1&&(lr.intersectSphere(To,Ip)===null||lr.origin.distanceToSquared(Ip)>(e.far-e.near)**2))&&(Dp.copy(s).invert(),lr.copy(e.ray).applyMatrix4(Dp),!(i.boundingBox!==null&&lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,lr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,l=s.index,a=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(l!==null)if(Array.isArray(o))for(let v=0,y=f.length;v<y;v++){const m=f[v],h=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=g,w=_;x<w;x+=3){const R=l.getX(x),A=l.getX(x+1),U=l.getX(x+2);r=Uo(this,h,e,i,u,c,d,R,A,U),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=v,h=y;m<h;m+=3){const g=l.getX(m),_=l.getX(m+1),x=l.getX(m+2);r=Uo(this,o,e,i,u,c,d,g,_,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(a!==void 0)if(Array.isArray(o))for(let v=0,y=f.length;v<y;v++){const m=f[v],h=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=g,w=_;x<w;x+=3){const R=x,A=x+1,U=x+2;r=Uo(this,h,e,i,u,c,d,R,A,U),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=v,h=y;m<h;m+=3){const g=m,_=m+1,x=m+2;r=Uo(this,o,e,i,u,c,d,g,_,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function HS(t,e,n,i,r,s,o,l){let a;if(e.side===ln?a=i.intersectTriangle(o,s,r,!0,l):a=i.intersectTriangle(r,s,o,e.side===Qi,l),a===null)return null;Lo.copy(l),Lo.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Lo);return u<n.near||u>n.far?null:{distance:u,point:Lo.clone(),object:t}}function Uo(t,e,n,i,r,s,o,l,a,u){t.getVertexPosition(l,qr),t.getVertexPosition(a,Xr),t.getVertexPosition(u,Yr);const c=HS(t,e,n,i,qr,Xr,Yr,Co);if(c){r&&(Po.fromBufferAttribute(r,l),Ro.fromBufferAttribute(r,a),bo.fromBufferAttribute(r,u),c.uv=zn.getInterpolation(Co,qr,Xr,Yr,Po,Ro,bo,new Je)),s&&(Po.fromBufferAttribute(s,l),Ro.fromBufferAttribute(s,a),bo.fromBufferAttribute(s,u),c.uv1=zn.getInterpolation(Co,qr,Xr,Yr,Po,Ro,bo,new Je),c.uv2=c.uv1),o&&(Op.fromBufferAttribute(o,l),Fp.fromBufferAttribute(o,a),kp.fromBufferAttribute(o,u),c.normal=zn.getInterpolation(Co,qr,Xr,Yr,Op,Fp,kp,new F),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a:l,b:a,c:u,normal:new F,materialIndex:0};zn.getNormal(qr,Xr,Yr,d.normal),c.face=d}return c}class $i extends ir{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const l=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const a=[],u=[],c=[],d=[];let f=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(a),this.setAttribute("position",new ni(u,3)),this.setAttribute("normal",new ni(c,3)),this.setAttribute("uv",new ni(d,2));function v(y,m,h,g,_,x,w,R,A,U,M){const T=x/A,q=w/U,$=x/2,K=w/2,L=R/2,j=A+1,J=U+1;let Y=0,D=0;const G=new F;for(let B=0;B<J;B++){const C=B*q-K;for(let I=0;I<j;I++){const ue=I*T-$;G[y]=ue*g,G[m]=C*_,G[h]=L,u.push(G.x,G.y,G.z),G[y]=0,G[m]=0,G[h]=R>0?1:-1,c.push(G.x,G.y,G.z),d.push(I/A),d.push(1-B/U),Y+=1}}for(let B=0;B<U;B++)for(let C=0;C<A;C++){const I=f+C+j*B,ue=f+C+j*(B+1),ce=f+(C+1)+j*(B+1),me=f+(C+1)+j*B;a.push(I,ue,me),a.push(ue,ce,me),D+=6}l.addGroup(p,D,M),p+=D,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Xt(t){const e={};for(let n=0;n<t.length;n++){const i=Cs(t[n]);for(const r in i)e[r]=i[r]}return e}function VS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Jg(t){return t.getRenderTarget()===null?t.outputColorSpace:Ze.workingColorSpace}const WS={clone:Cs,merge:Xt};var jS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ur extends qa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jS,this.fragmentShader=qS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=VS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class $g extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=gi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class An extends $g{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=rd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rd*2*Math.atan(Math.tan(Lu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Lu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const a=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/a,n-=o.offsetY*i/u,r*=o.width/a,i*=o.height/u}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Jr=-90,$r=1;class XS extends Vt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new An(Jr,$r,e,n);r.layers=this.layers,this.add(r);const s=new An(Jr,$r,e,n);s.layers=this.layers,this.add(s);const o=new An(Jr,$r,e,n);o.layers=this.layers,this.add(o);const l=new An(Jr,$r,e,n);l.layers=this.layers,this.add(l);const a=new An(Jr,$r,e,n);a.layers=this.layers,this.add(a);const u=new An(Jr,$r,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,l,a]=n;for(const u of n)this.remove(u);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===Al)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,l,a,u,c]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,l),e.setRenderTarget(i,3,r),e.render(n,a),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(d,f,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Kg extends gn{constructor(e,n,i,r,s,o,l,a,u,c){e=e!==void 0?e:[],n=n!==void 0?n:Ps,super(e,n,i,r,s,o,l,a,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class YS extends Lr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(_a("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===wr?Nt:Pn),this.texture=new Kg(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Tn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new $i(5,5,5),s=new Ur({name:"CubemapFromEquirect",uniforms:Cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:Xi});s.uniforms.tEquirect.value=n;const o=new bn(r,s),l=n.minFilter;return n.minFilter===Ia&&(n.minFilter=Tn),new XS(1,10,this).update(e,o),n.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Ju=new F,JS=new F,$S=new ze;class fr{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ju.subVectors(i,n).cross(JS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ju),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||$S.getNormalMatrix(e),r=this.coplanarPoint(Ju).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new lf,No=new F;class cf{constructor(e=new fr,n=new fr,i=new fr,r=new fr,s=new fr,o=new fr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const l=this.planes;return l[0].copy(e),l[1].copy(n),l[2].copy(i),l[3].copy(r),l[4].copy(s),l[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=gi){const i=this.planes,r=e.elements,s=r[0],o=r[1],l=r[2],a=r[3],u=r[4],c=r[5],d=r[6],f=r[7],p=r[8],v=r[9],y=r[10],m=r[11],h=r[12],g=r[13],_=r[14],x=r[15];if(i[0].setComponents(a-s,f-u,m-p,x-h).normalize(),i[1].setComponents(a+s,f+u,m+p,x+h).normalize(),i[2].setComponents(a+o,f+c,m+v,x+g).normalize(),i[3].setComponents(a-o,f-c,m-v,x-g).normalize(),i[4].setComponents(a-l,f-d,m-y,x-_).normalize(),n===gi)i[5].setComponents(a+l,f+d,m+y,x+_).normalize();else if(n===Al)i[5].setComponents(l,d,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(No.x=r.normal.x>0?e.max.x:e.min.x,No.y=r.normal.y>0?e.max.y:e.min.y,No.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(No)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zg(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function KS(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,f=u.usage,p=t.createBuffer();t.bindBuffer(c,p),t.bufferData(c,d,f),u.onUploadCallback();let v;if(d instanceof Float32Array)v=t.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)v=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=t.SHORT;else if(d instanceof Uint32Array)v=t.UNSIGNED_INT;else if(d instanceof Int32Array)v=t.INT;else if(d instanceof Int8Array)v=t.BYTE;else if(d instanceof Uint8Array)v=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,d){const f=c.array,p=c.updateRange;t.bindBuffer(d,u),p.count===-1?t.bufferSubData(d,0,f):(n?t.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):t.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function l(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function a(u,c){if(u.isGLBufferAttribute){const f=i.get(u);(!f||f.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,c)):d.version<u.version&&(s(d.buffer,u,c),d.version=u.version)}return{get:o,remove:l,update:a}}class df extends ir{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,l=Math.floor(i),a=Math.floor(r),u=l+1,c=a+1,d=e/l,f=n/a,p=[],v=[],y=[],m=[];for(let h=0;h<c;h++){const g=h*f-o;for(let _=0;_<u;_++){const x=_*d-s;v.push(x,-g,0),y.push(0,0,1),m.push(_/l),m.push(1-h/a)}}for(let h=0;h<a;h++)for(let g=0;g<l;g++){const _=g+u*h,x=g+u*(h+1),w=g+1+u*(h+1),R=g+1+u*h;p.push(_,x,R),p.push(x,w,R)}this.setIndex(p),this.setAttribute("position",new ni(v,3)),this.setAttribute("normal",new ni(y,3)),this.setAttribute("uv",new ni(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new df(e.width,e.height,e.widthSegments,e.heightSegments)}}var ZS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,QS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,eM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,iM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_M=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,vM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,SM=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,MM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,EM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AM="gl_FragColor = linearToOutputTexel( gl_FragColor );",PM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,RM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,CM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,LM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,NM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,DM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,FM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,BM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,VM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,WM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,XM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,JM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$M=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,KM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ZM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,QM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,nE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,iE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,aE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,dE=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,fE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,hE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_E=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,SE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ME=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,EE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,TE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,RE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,UE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,NE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,DE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,IE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,FE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,BE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,VE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,WE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,XE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,YE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const JE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$E=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ew=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tw=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,iw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ow=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uw=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_w=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ew=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ww=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tw=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Aw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ie={alphahash_fragment:ZS,alphahash_pars_fragment:QS,alphamap_fragment:eM,alphamap_pars_fragment:tM,alphatest_fragment:nM,alphatest_pars_fragment:iM,aomap_fragment:rM,aomap_pars_fragment:sM,begin_vertex:aM,beginnormal_vertex:oM,bsdfs:lM,iridescence_fragment:uM,bumpmap_pars_fragment:cM,clipping_planes_fragment:dM,clipping_planes_pars_fragment:fM,clipping_planes_pars_vertex:hM,clipping_planes_vertex:pM,color_fragment:mM,color_pars_fragment:_M,color_pars_vertex:gM,color_vertex:vM,common:yM,cube_uv_reflection_fragment:xM,defaultnormal_vertex:SM,displacementmap_pars_vertex:MM,displacementmap_vertex:EM,emissivemap_fragment:wM,emissivemap_pars_fragment:TM,colorspace_fragment:AM,colorspace_pars_fragment:PM,envmap_fragment:RM,envmap_common_pars_fragment:bM,envmap_pars_fragment:CM,envmap_pars_vertex:LM,envmap_physical_pars_fragment:VM,envmap_vertex:UM,fog_vertex:NM,fog_pars_vertex:DM,fog_fragment:IM,fog_pars_fragment:OM,gradientmap_pars_fragment:FM,lightmap_fragment:kM,lightmap_pars_fragment:BM,lights_lambert_fragment:zM,lights_lambert_pars_fragment:GM,lights_pars_begin:HM,lights_toon_fragment:WM,lights_toon_pars_fragment:jM,lights_phong_fragment:qM,lights_phong_pars_fragment:XM,lights_physical_fragment:YM,lights_physical_pars_fragment:JM,lights_fragment_begin:$M,lights_fragment_maps:KM,lights_fragment_end:ZM,logdepthbuf_fragment:QM,logdepthbuf_pars_fragment:eE,logdepthbuf_pars_vertex:tE,logdepthbuf_vertex:nE,map_fragment:iE,map_pars_fragment:rE,map_particle_fragment:sE,map_particle_pars_fragment:aE,metalnessmap_fragment:oE,metalnessmap_pars_fragment:lE,morphcolor_vertex:uE,morphnormal_vertex:cE,morphtarget_pars_vertex:dE,morphtarget_vertex:fE,normal_fragment_begin:hE,normal_fragment_maps:pE,normal_pars_fragment:mE,normal_pars_vertex:_E,normal_vertex:gE,normalmap_pars_fragment:vE,clearcoat_normal_fragment_begin:yE,clearcoat_normal_fragment_maps:xE,clearcoat_pars_fragment:SE,iridescence_pars_fragment:ME,opaque_fragment:EE,packing:wE,premultiplied_alpha_fragment:TE,project_vertex:AE,dithering_fragment:PE,dithering_pars_fragment:RE,roughnessmap_fragment:bE,roughnessmap_pars_fragment:CE,shadowmap_pars_fragment:LE,shadowmap_pars_vertex:UE,shadowmap_vertex:NE,shadowmask_pars_fragment:DE,skinbase_vertex:IE,skinning_pars_vertex:OE,skinning_vertex:FE,skinnormal_vertex:kE,specularmap_fragment:BE,specularmap_pars_fragment:zE,tonemapping_fragment:GE,tonemapping_pars_fragment:HE,transmission_fragment:VE,transmission_pars_fragment:WE,uv_pars_fragment:jE,uv_pars_vertex:qE,uv_vertex:XE,worldpos_vertex:YE,background_vert:JE,background_frag:$E,backgroundCube_vert:KE,backgroundCube_frag:ZE,cube_vert:QE,cube_frag:ew,depth_vert:tw,depth_frag:nw,distanceRGBA_vert:iw,distanceRGBA_frag:rw,equirect_vert:sw,equirect_frag:aw,linedashed_vert:ow,linedashed_frag:lw,meshbasic_vert:uw,meshbasic_frag:cw,meshlambert_vert:dw,meshlambert_frag:fw,meshmatcap_vert:hw,meshmatcap_frag:pw,meshnormal_vert:mw,meshnormal_frag:_w,meshphong_vert:gw,meshphong_frag:vw,meshphysical_vert:yw,meshphysical_frag:xw,meshtoon_vert:Sw,meshtoon_frag:Mw,points_vert:Ew,points_frag:ww,shadow_vert:Tw,shadow_frag:Aw,sprite_vert:Pw,sprite_frag:Rw},le={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Kn={basic:{uniforms:Xt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Xt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Xt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Xt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Xt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Xt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Xt([le.points,le.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Xt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Xt([le.common,le.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Xt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Xt([le.sprite,le.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:Xt([le.common,le.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:Xt([le.lights,le.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Kn.physical={uniforms:Xt([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const Do={r:0,b:0,g:0};function bw(t,e,n,i,r,s,o){const l=new qe(0);let a=s===!0?0:1,u,c,d=null,f=0,p=null;function v(m,h){let g=!1,_=h.isScene===!0?h.background:null;_&&_.isTexture&&(_=(h.backgroundBlurriness>0?n:e).get(_)),_===null?y(l,a):_&&_.isColor&&(y(_,1),g=!0);const x=t.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Wl)?(c===void 0&&(c=new bn(new $i(1,1,1),new Ur({name:"BackgroundCubeMaterial",uniforms:Cs(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(_.colorSpace)!==it,(d!==_||f!==_.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=_,f=_.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new bn(new df(2,2),new Ur({name:"BackgroundMaterial",uniforms:Cs(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=Ze.getTransfer(_.colorSpace)!==it,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=_,f=_.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function y(m,h){m.getRGB(Do,Jg(t)),i.buffers.color.setClear(Do.r,Do.g,Do.b,h,o)}return{getClearColor:function(){return l},setClearColor:function(m,h=1){l.set(m),a=h,y(l,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,y(l,a)},render:v}}function Cw(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,l={},a=m(null);let u=a,c=!1;function d(L,j,J,Y,D){let G=!1;if(o){const B=y(Y,J,j);u!==B&&(u=B,p(u.object)),G=h(L,Y,J,D),G&&g(L,Y,J,D)}else{const B=j.wireframe===!0;(u.geometry!==Y.id||u.program!==J.id||u.wireframe!==B)&&(u.geometry=Y.id,u.program=J.id,u.wireframe=B,G=!0)}D!==null&&n.update(D,t.ELEMENT_ARRAY_BUFFER),(G||c)&&(c=!1,U(L,j,J,Y),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(D).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(L){return i.isWebGL2?t.bindVertexArray(L):s.bindVertexArrayOES(L)}function v(L){return i.isWebGL2?t.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function y(L,j,J){const Y=J.wireframe===!0;let D=l[L.id];D===void 0&&(D={},l[L.id]=D);let G=D[j.id];G===void 0&&(G={},D[j.id]=G);let B=G[Y];return B===void 0&&(B=m(f()),G[Y]=B),B}function m(L){const j=[],J=[],Y=[];for(let D=0;D<r;D++)j[D]=0,J[D]=0,Y[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:J,attributeDivisors:Y,object:L,attributes:{},index:null}}function h(L,j,J,Y){const D=u.attributes,G=j.attributes;let B=0;const C=J.getAttributes();for(const I in C)if(C[I].location>=0){const ce=D[I];let me=G[I];if(me===void 0&&(I==="instanceMatrix"&&L.instanceMatrix&&(me=L.instanceMatrix),I==="instanceColor"&&L.instanceColor&&(me=L.instanceColor)),ce===void 0||ce.attribute!==me||me&&ce.data!==me.data)return!0;B++}return u.attributesNum!==B||u.index!==Y}function g(L,j,J,Y){const D={},G=j.attributes;let B=0;const C=J.getAttributes();for(const I in C)if(C[I].location>=0){let ce=G[I];ce===void 0&&(I==="instanceMatrix"&&L.instanceMatrix&&(ce=L.instanceMatrix),I==="instanceColor"&&L.instanceColor&&(ce=L.instanceColor));const me={};me.attribute=ce,ce&&ce.data&&(me.data=ce.data),D[I]=me,B++}u.attributes=D,u.attributesNum=B,u.index=Y}function _(){const L=u.newAttributes;for(let j=0,J=L.length;j<J;j++)L[j]=0}function x(L){w(L,0)}function w(L,j){const J=u.newAttributes,Y=u.enabledAttributes,D=u.attributeDivisors;J[L]=1,Y[L]===0&&(t.enableVertexAttribArray(L),Y[L]=1),D[L]!==j&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,j),D[L]=j)}function R(){const L=u.newAttributes,j=u.enabledAttributes;for(let J=0,Y=j.length;J<Y;J++)j[J]!==L[J]&&(t.disableVertexAttribArray(J),j[J]=0)}function A(L,j,J,Y,D,G,B){B===!0?t.vertexAttribIPointer(L,j,J,D,G):t.vertexAttribPointer(L,j,J,Y,D,G)}function U(L,j,J,Y){if(i.isWebGL2===!1&&(L.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const D=Y.attributes,G=J.getAttributes(),B=j.defaultAttributeValues;for(const C in G){const I=G[C];if(I.location>=0){let ue=D[C];if(ue===void 0&&(C==="instanceMatrix"&&L.instanceMatrix&&(ue=L.instanceMatrix),C==="instanceColor"&&L.instanceColor&&(ue=L.instanceColor)),ue!==void 0){const ce=ue.normalized,me=ue.itemSize,ye=n.get(ue);if(ye===void 0)continue;const Ne=ye.buffer,Re=ye.type,De=ye.bytesPerElement,ut=i.isWebGL2===!0&&(Re===t.INT||Re===t.UNSIGNED_INT||ue.gpuType===Ug);if(ue.isInterleavedBufferAttribute){const Fe=ue.data,O=Fe.stride,un=ue.offset;if(Fe.isInstancedInterleavedBuffer){for(let xe=0;xe<I.locationSize;xe++)w(I.location+xe,Fe.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Fe.meshPerAttribute*Fe.count)}else for(let xe=0;xe<I.locationSize;xe++)x(I.location+xe);t.bindBuffer(t.ARRAY_BUFFER,Ne);for(let xe=0;xe<I.locationSize;xe++)A(I.location+xe,me/I.locationSize,Re,ce,O*De,(un+me/I.locationSize*xe)*De,ut)}else{if(ue.isInstancedBufferAttribute){for(let Fe=0;Fe<I.locationSize;Fe++)w(I.location+Fe,ue.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Fe=0;Fe<I.locationSize;Fe++)x(I.location+Fe);t.bindBuffer(t.ARRAY_BUFFER,Ne);for(let Fe=0;Fe<I.locationSize;Fe++)A(I.location+Fe,me/I.locationSize,Re,ce,me*De,me/I.locationSize*Fe*De,ut)}}else if(B!==void 0){const ce=B[C];if(ce!==void 0)switch(ce.length){case 2:t.vertexAttrib2fv(I.location,ce);break;case 3:t.vertexAttrib3fv(I.location,ce);break;case 4:t.vertexAttrib4fv(I.location,ce);break;default:t.vertexAttrib1fv(I.location,ce)}}}}R()}function M(){$();for(const L in l){const j=l[L];for(const J in j){const Y=j[J];for(const D in Y)v(Y[D].object),delete Y[D];delete j[J]}delete l[L]}}function T(L){if(l[L.id]===void 0)return;const j=l[L.id];for(const J in j){const Y=j[J];for(const D in Y)v(Y[D].object),delete Y[D];delete j[J]}delete l[L.id]}function q(L){for(const j in l){const J=l[j];if(J[L.id]===void 0)continue;const Y=J[L.id];for(const D in Y)v(Y[D].object),delete Y[D];delete J[L.id]}}function $(){K(),c=!0,u!==a&&(u=a,p(u.object))}function K(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:$,resetDefaultState:K,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:q,initAttributes:_,enableAttribute:x,disableUnusedAttributes:R}}function Lw(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function l(u,c){t.drawArrays(s,u,c),n.update(c,s,1)}function a(u,c,d){if(d===0)return;let f,p;if(r)f=t,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,u,c,d),n.update(c,s,d)}this.setMode=o,this.render=l,this.renderInstances=a}function Uw(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let l=n.precision!==void 0?n.precision:"highp";const a=s(l);a!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",a,"instead."),l=a);const u=o||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),h=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,x=o||e.has("OES_texture_float"),w=_&&x,R=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:l,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:v,maxAttributes:y,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:g,vertexTextures:_,floatFragmentTextures:x,floatVertexTextures:w,maxSamples:R}}function Nw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new fr,l=new ze,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=c(d,f,0)},this.setState=function(d,f,p){const v=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,h=t.get(d);if(!r||v===null||v.length===0||s&&!m)s?c(null):u();else{const g=s?0:i,_=g*4;let x=h.clippingState||null;a.value=x,x=c(v,f,_,p);for(let w=0;w!==_;++w)x[w]=n[w];h.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function u(){a.value!==n&&(a.value=n,a.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,p,v){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=a.value,v!==!0||m===null){const h=p+y*4,g=f.matrixWorldInverse;l.getNormalMatrix(g),(m===null||m.length<h)&&(m=new Float32Array(h));for(let _=0,x=p;_!==y;++_,x+=4)o.copy(d[_]).applyMatrix4(g,l),o.normal.toArray(m,x),m[x+3]=o.constant}a.value=m,a.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function Dw(t){let e=new WeakMap;function n(o,l){return l===Qc?o.mapping=Ps:l===ed&&(o.mapping=Rs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const l=o.mapping;if(l===Qc||l===ed)if(e.has(o)){const a=e.get(o).texture;return n(a,o.mapping)}else{const a=o.image;if(a&&a.height>0){const u=new YS(a.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const l=o.target;l.removeEventListener("dispose",r);const a=e.get(l);a!==void 0&&(e.delete(l),a.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Qg extends $g{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,l=r+n,a=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,l-=c*this.view.offsetY,a=l-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,l,a,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ds=4,Bp=[.125,.215,.35,.446,.526,.582],_r=20,$u=new Qg,zp=new qe;let Ku=null,Zu=0,Qu=0;const hr=(1+Math.sqrt(5))/2,Kr=1/hr,Gp=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,hr,Kr),new F(0,hr,-Kr),new F(Kr,0,hr),new F(-Kr,0,hr),new F(hr,Kr,0),new F(-hr,Kr,0)];class Hp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ku=this._renderer.getRenderTarget(),Zu=this._renderer.getActiveCubeFace(),Qu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ku,Zu,Qu),e.scissorTest=!1,Io(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ps||e.mapping===Rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ku=this._renderer.getRenderTarget(),Zu=this._renderer.getActiveCubeFace(),Qu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:Oa,format:Hn,colorSpace:Ei,depthBuffer:!1},r=Vp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Iw(s)),this._blurMaterial=Ow(s,e,n)}return r}_compileMaterial(e){const n=new bn(this._lodPlanes[0],e);this._renderer.compile(n,$u)}_sceneToCubeUV(e,n,i,r){const l=new An(90,1,n,i),a=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(zp),c.toneMapping=Yi,c.autoClear=!1;const p=new qg({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),v=new bn(new $i,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(zp),y=!0);for(let h=0;h<6;h++){const g=h%3;g===0?(l.up.set(0,a[h],0),l.lookAt(u[h],0,0)):g===1?(l.up.set(0,0,a[h]),l.lookAt(0,u[h],0)):(l.up.set(0,a[h],0),l.lookAt(0,0,u[h]));const _=this._cubeSize;Io(r,g*_,h>2?_:0,_,_),c.setRenderTarget(r),y&&c.render(v,l),c.render(e,l)}v.geometry.dispose(),v.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ps||e.mapping===Rs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new bn(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;const a=this._cubeSize;Io(n,0,0,3*a,2*a),i.setRenderTarget(n),i.render(o,$u)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Gp[(r-1)%Gp.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,l){const a=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new bn(this._lodPlanes[r],u),f=u.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*_r-1),y=s/v,m=isFinite(s)?1+Math.floor(c*y):_r;m>_r&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_r}`);const h=[];let g=0;for(let A=0;A<_r;++A){const U=A/y,M=Math.exp(-U*U/2);h.push(M),A===0?g+=M:A<m&&(g+=2*M)}for(let A=0;A<h.length;A++)h[A]=h[A]/g;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",l&&(f.poleAxis.value=l);const{_lodMax:_}=this;f.dTheta.value=v,f.mipInt.value=_-i;const x=this._sizeLods[r],w=3*x*(r>_-ds?r-_+ds:0),R=4*(this._cubeSize-x);Io(n,w,R,3*x,2*x),a.setRenderTarget(n),a.render(d,$u)}}function Iw(t){const e=[],n=[],i=[];let r=t;const s=t-ds+1+Bp.length;for(let o=0;o<s;o++){const l=Math.pow(2,r);n.push(l);let a=1/l;o>t-ds?a=Bp[o-t+ds-1]:o===0&&(a=0),i.push(a);const u=1/(l-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,v=6,y=3,m=2,h=1,g=new Float32Array(y*v*p),_=new Float32Array(m*v*p),x=new Float32Array(h*v*p);for(let R=0;R<p;R++){const A=R%3*2/3-1,U=R>2?0:-1,M=[A,U,0,A+2/3,U,0,A+2/3,U+1,0,A,U,0,A+2/3,U+1,0,A,U+1,0];g.set(M,y*v*R),_.set(f,m*v*R);const T=[R,R,R,R,R,R];x.set(T,h*v*R)}const w=new ir;w.setAttribute("position",new ti(g,y)),w.setAttribute("uv",new ti(_,m)),w.setAttribute("faceIndex",new ti(x,h)),e.push(w),r>ds&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Vp(t,e,n){const i=new Lr(t,e,n);return i.texture.mapping=Wl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Io(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Ow(t,e,n){const i=new Float32Array(_r),r=new F(0,1,0);return new Ur({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Wp(){return new Ur({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function jp(){return new Ur({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function ff(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Fw(t){let e=new WeakMap,n=null;function i(l){if(l&&l.isTexture){const a=l.mapping,u=a===Qc||a===ed,c=a===Ps||a===Rs;if(u||c)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let d=e.get(l);return n===null&&(n=new Hp(t)),d=u?n.fromEquirectangular(l,d):n.fromCubemap(l,d),e.set(l,d),d.texture}else{if(e.has(l))return e.get(l).texture;{const d=l.image;if(u&&d&&d.height>0||c&&d&&r(d)){n===null&&(n=new Hp(t));const f=u?n.fromEquirectangular(l):n.fromCubemap(l);return e.set(l,f),l.addEventListener("dispose",s),f.texture}else return null}}}return l}function r(l){let a=0;const u=6;for(let c=0;c<u;c++)l[c]!==void 0&&a++;return a===u}function s(l){const a=l.target;a.removeEventListener("dispose",s);const u=e.get(a);u!==void 0&&(e.delete(a),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function kw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Bw(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const y=f.morphAttributes[v];for(let m=0,h=y.length;m<h;m++)e.remove(y[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function l(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function a(d){const f=d.attributes;for(const v in f)e.update(f[v],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const v in p){const y=p[v];for(let m=0,h=y.length;m<h;m++)e.update(y[m],t.ARRAY_BUFFER)}}function u(d){const f=[],p=d.index,v=d.attributes.position;let y=0;if(p!==null){const g=p.array;y=p.version;for(let _=0,x=g.length;_<x;_+=3){const w=g[_+0],R=g[_+1],A=g[_+2];f.push(w,R,R,A,A,w)}}else if(v!==void 0){const g=v.array;y=v.version;for(let _=0,x=g.length/3-1;_<x;_+=3){const w=_+0,R=_+1,A=_+2;f.push(w,R,R,A,A,w)}}else return;const m=new(zg(f)?Yg:Xg)(f,1);m.version=y;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function c(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:l,update:a,getWireframeAttribute:c}}function zw(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}let l,a;function u(f){l=f.type,a=f.bytesPerElement}function c(f,p){t.drawElements(s,p,l,f*a),n.update(p,s,1)}function d(f,p,v){if(v===0)return;let y,m;if(r)y=t,m="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[m](s,p,l,f*a,v),n.update(p,s,v)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d}function Gw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,l){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=l*(s/3);break;case t.LINES:n.lines+=l*(s/2);break;case t.LINE_STRIP:n.lines+=l*(s-1);break;case t.LINE_LOOP:n.lines+=l*s;break;case t.POINTS:n.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Hw(t,e){return t[0]-e[0]}function Vw(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Ww(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new bt,l=[];for(let u=0;u<8;u++)l[u]=[u,0];function a(u,c,d){const f=u.morphTargetInfluences;if(e.isWebGL2===!0){const v=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,y=v!==void 0?v.length:0;let m=s.get(c);if(m===void 0||m.count!==y){let j=function(){K.dispose(),s.delete(c),c.removeEventListener("dispose",j)};var p=j;m!==void 0&&m.texture.dispose();const _=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,w=c.morphAttributes.color!==void 0,R=c.morphAttributes.position||[],A=c.morphAttributes.normal||[],U=c.morphAttributes.color||[];let M=0;_===!0&&(M=1),x===!0&&(M=2),w===!0&&(M=3);let T=c.attributes.position.count*M,q=1;T>e.maxTextureSize&&(q=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const $=new Float32Array(T*q*4*y),K=new Vg($,T,q,y);K.type=ki,K.needsUpdate=!0;const L=M*4;for(let J=0;J<y;J++){const Y=R[J],D=A[J],G=U[J],B=T*q*4*J;for(let C=0;C<Y.count;C++){const I=C*L;_===!0&&(o.fromBufferAttribute(Y,C),$[B+I+0]=o.x,$[B+I+1]=o.y,$[B+I+2]=o.z,$[B+I+3]=0),x===!0&&(o.fromBufferAttribute(D,C),$[B+I+4]=o.x,$[B+I+5]=o.y,$[B+I+6]=o.z,$[B+I+7]=0),w===!0&&(o.fromBufferAttribute(G,C),$[B+I+8]=o.x,$[B+I+9]=o.y,$[B+I+10]=o.z,$[B+I+11]=G.itemSize===4?o.w:1)}}m={count:y,texture:K,size:new Je(T,q)},s.set(c,m),c.addEventListener("dispose",j)}let h=0;for(let _=0;_<f.length;_++)h+=f[_];const g=c.morphTargetsRelative?1:1-h;d.getUniforms().setValue(t,"morphTargetBaseInfluence",g),d.getUniforms().setValue(t,"morphTargetInfluences",f),d.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const v=f===void 0?0:f.length;let y=i[c.id];if(y===void 0||y.length!==v){y=[];for(let x=0;x<v;x++)y[x]=[x,0];i[c.id]=y}for(let x=0;x<v;x++){const w=y[x];w[0]=x,w[1]=f[x]}y.sort(Vw);for(let x=0;x<8;x++)x<v&&y[x][1]?(l[x][0]=y[x][0],l[x][1]=y[x][1]):(l[x][0]=Number.MAX_SAFE_INTEGER,l[x][1]=0);l.sort(Hw);const m=c.morphAttributes.position,h=c.morphAttributes.normal;let g=0;for(let x=0;x<8;x++){const w=l[x],R=w[0],A=w[1];R!==Number.MAX_SAFE_INTEGER&&A?(m&&c.getAttribute("morphTarget"+x)!==m[R]&&c.setAttribute("morphTarget"+x,m[R]),h&&c.getAttribute("morphNormal"+x)!==h[R]&&c.setAttribute("morphNormal"+x,h[R]),r[x]=A,g+=A):(m&&c.hasAttribute("morphTarget"+x)===!0&&c.deleteAttribute("morphTarget"+x),h&&c.hasAttribute("morphNormal"+x)===!0&&c.deleteAttribute("morphNormal"+x),r[x]=0)}const _=c.morphTargetsRelative?1:1-g;d.getUniforms().setValue(t,"morphTargetBaseInfluence",_),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:a}}function jw(t,e,n,i){let r=new WeakMap;function s(a){const u=i.render.frame,c=a.geometry,d=e.get(a,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),a.isInstancedMesh&&(a.hasEventListener("dispose",l)===!1&&a.addEventListener("dispose",l),r.get(a)!==u&&(n.update(a.instanceMatrix,t.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,t.ARRAY_BUFFER),r.set(a,u))),a.isSkinnedMesh){const f=a.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function l(a){const u=a.target;u.removeEventListener("dispose",l),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const ev=new gn,tv=new Vg,nv=new LS,iv=new Kg,qp=[],Xp=[],Yp=new Float32Array(16),Jp=new Float32Array(9),$p=new Float32Array(4);function Os(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=qp[r];if(s===void 0&&(s=new Float32Array(r),qp[r]=s),e!==0){i.toArray(s,0);for(let o=1,l=0;o!==e;++o)l+=n,t[o].toArray(s,l)}return s}function Et(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function wt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Xl(t,e){let n=Xp[e];n===void 0&&(n=new Int32Array(e),Xp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function qw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Xw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2fv(this.addr,e),wt(n,e)}}function Yw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Et(n,e))return;t.uniform3fv(this.addr,e),wt(n,e)}}function Jw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4fv(this.addr,e),wt(n,e)}}function $w(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),wt(n,e)}else{if(Et(n,i))return;$p.set(i),t.uniformMatrix2fv(this.addr,!1,$p),wt(n,i)}}function Kw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),wt(n,e)}else{if(Et(n,i))return;Jp.set(i),t.uniformMatrix3fv(this.addr,!1,Jp),wt(n,i)}}function Zw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),wt(n,e)}else{if(Et(n,i))return;Yp.set(i),t.uniformMatrix4fv(this.addr,!1,Yp),wt(n,i)}}function Qw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function eT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2iv(this.addr,e),wt(n,e)}}function tT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3iv(this.addr,e),wt(n,e)}}function nT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4iv(this.addr,e),wt(n,e)}}function iT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function rT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2uiv(this.addr,e),wt(n,e)}}function sT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3uiv(this.addr,e),wt(n,e)}}function aT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4uiv(this.addr,e),wt(n,e)}}function oT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||ev,r)}function lT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||nv,r)}function uT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||iv,r)}function cT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||tv,r)}function dT(t){switch(t){case 5126:return qw;case 35664:return Xw;case 35665:return Yw;case 35666:return Jw;case 35674:return $w;case 35675:return Kw;case 35676:return Zw;case 5124:case 35670:return Qw;case 35667:case 35671:return eT;case 35668:case 35672:return tT;case 35669:case 35673:return nT;case 5125:return iT;case 36294:return rT;case 36295:return sT;case 36296:return aT;case 35678:case 36198:case 36298:case 36306:case 35682:return oT;case 35679:case 36299:case 36307:return lT;case 35680:case 36300:case 36308:case 36293:return uT;case 36289:case 36303:case 36311:case 36292:return cT}}function fT(t,e){t.uniform1fv(this.addr,e)}function hT(t,e){const n=Os(e,this.size,2);t.uniform2fv(this.addr,n)}function pT(t,e){const n=Os(e,this.size,3);t.uniform3fv(this.addr,n)}function mT(t,e){const n=Os(e,this.size,4);t.uniform4fv(this.addr,n)}function _T(t,e){const n=Os(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function gT(t,e){const n=Os(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function vT(t,e){const n=Os(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function yT(t,e){t.uniform1iv(this.addr,e)}function xT(t,e){t.uniform2iv(this.addr,e)}function ST(t,e){t.uniform3iv(this.addr,e)}function MT(t,e){t.uniform4iv(this.addr,e)}function ET(t,e){t.uniform1uiv(this.addr,e)}function wT(t,e){t.uniform2uiv(this.addr,e)}function TT(t,e){t.uniform3uiv(this.addr,e)}function AT(t,e){t.uniform4uiv(this.addr,e)}function PT(t,e,n){const i=this.cache,r=e.length,s=Xl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||ev,s[o])}function RT(t,e,n){const i=this.cache,r=e.length,s=Xl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||nv,s[o])}function bT(t,e,n){const i=this.cache,r=e.length,s=Xl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||iv,s[o])}function CT(t,e,n){const i=this.cache,r=e.length,s=Xl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||tv,s[o])}function LT(t){switch(t){case 5126:return fT;case 35664:return hT;case 35665:return pT;case 35666:return mT;case 35674:return _T;case 35675:return gT;case 35676:return vT;case 5124:case 35670:return yT;case 35667:case 35671:return xT;case 35668:case 35672:return ST;case 35669:case 35673:return MT;case 5125:return ET;case 36294:return wT;case 36295:return TT;case 36296:return AT;case 35678:case 36198:case 36298:case 36306:case 35682:return PT;case 35679:case 36299:case 36307:return RT;case 35680:case 36300:case 36308:case 36293:return bT;case 36289:case 36303:case 36311:case 36292:return CT}}class UT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=dT(n.type)}}class NT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=LT(n.type)}}class DT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const l=r[s];l.setValue(e,n[l.id],i)}}}const ec=/(\w+)(\])?(\[|\.)?/g;function Kp(t,e){t.seq.push(e),t.map[e.id]=e}function IT(t,e,n){const i=t.name,r=i.length;for(ec.lastIndex=0;;){const s=ec.exec(i),o=ec.lastIndex;let l=s[1];const a=s[2]==="]",u=s[3];if(a&&(l=l|0),u===void 0||u==="["&&o+2===r){Kp(n,u===void 0?new UT(l,t,e):new NT(l,t,e));break}else{let d=n.map[l];d===void 0&&(d=new DT(l),Kp(n,d)),n=d}}}class Jo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);IT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const l=n[s],a=i[l.id];a.needsUpdate!==!1&&l.setValue(e,a.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Zp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const OT=37297;let FT=0;function kT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const l=o+1;i.push(`${l===e?">":" "} ${l}: ${n[o]}`)}return i.join(`
`)}function BT(t){const e=Ze.getPrimaries(Ze.workingColorSpace),n=Ze.getPrimaries(t);let i;switch(e===n?i="":e===Tl&&n===wl?i="LinearDisplayP3ToLinearSRGB":e===wl&&n===Tl&&(i="LinearSRGBToLinearDisplayP3"),t){case Ei:case jl:return[i,"LinearTransferOETF"];case Nt:case of:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Qp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+kT(t.getShaderSource(e),o)}else return r}function zT(t,e){const n=BT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function GT(t,e){let n;switch(e){case Qx:n="Linear";break;case eS:n="Reinhard";break;case tS:n="OptimizedCineon";break;case nS:n="ACESFilmic";break;case iS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function HT(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(sa).join(`
`)}function VT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function WT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let l=1;s.type===t.FLOAT_MAT2&&(l=2),s.type===t.FLOAT_MAT3&&(l=3),s.type===t.FLOAT_MAT4&&(l=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:l}}return n}function sa(t){return t!==""}function em(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jT=/^[ \t]*#include +<([\w\d./]+)>/gm;function ad(t){return t.replace(jT,XT)}const qT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function XT(t,e){let n=Ie[e];if(n===void 0){const i=qT.get(e);if(i!==void 0)n=Ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ad(n)}const YT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nm(t){return t.replace(YT,JT)}function JT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function im(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $T(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===bg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Px?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ci&&(e="SHADOWMAP_TYPE_VSM"),e}function KT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ps:case Rs:e="ENVMAP_TYPE_CUBE";break;case Wl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ZT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Rs:e="ENVMAP_MODE_REFRACTION";break}return e}function QT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Cg:e="ENVMAP_BLENDING_MULTIPLY";break;case Kx:e="ENVMAP_BLENDING_MIX";break;case Zx:e="ENVMAP_BLENDING_ADD";break}return e}function eA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function tA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,l=n.fragmentShader;const a=$T(n),u=KT(n),c=ZT(n),d=QT(n),f=eA(n),p=n.isWebGL2?"":HT(n),v=VT(s),y=r.createProgram();let m,h,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(sa).join(`
`),m.length>0&&(m+=`
`),h=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(sa).join(`
`),h.length>0&&(h+=`
`)):(m=[im(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+a:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),h=[p,im(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+a:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Yi?"#define TONE_MAPPING":"",n.toneMapping!==Yi?Ie.tonemapping_pars_fragment:"",n.toneMapping!==Yi?GT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,zT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(sa).join(`
`)),o=ad(o),o=em(o,n),o=tm(o,n),l=ad(l),l=em(l,n),l=tm(l,n),o=nm(o),l=nm(l),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Sp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Sp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const _=g+m+o,x=g+h+l,w=Zp(r,r.VERTEX_SHADER,_),R=Zp(r,r.FRAGMENT_SHADER,x);r.attachShader(y,w),r.attachShader(y,R),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function A(q){if(t.debug.checkShaderErrors){const $=r.getProgramInfoLog(y).trim(),K=r.getShaderInfoLog(w).trim(),L=r.getShaderInfoLog(R).trim();let j=!0,J=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,w,R);else{const Y=Qp(r,w,"vertex"),D=Qp(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Program Info Log: `+$+`
`+Y+`
`+D)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(K===""||L==="")&&(J=!1);J&&(q.diagnostics={runnable:j,programLog:$,vertexShader:{log:K,prefix:m},fragmentShader:{log:L,prefix:h}})}r.deleteShader(w),r.deleteShader(R),U=new Jo(r,y),M=WT(r,y)}let U;this.getUniforms=function(){return U===void 0&&A(this),U};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(y,OT)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=FT++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=R,this}let nA=0;class iA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new rA(e),n.set(e,i)),i}}class rA{constructor(e){this.id=nA++,this.code=e,this.usedTimes=0}}function sA(t,e,n,i,r,s,o){const l=new uf,a=new iA,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return M===0?"uv":`uv${M}`}function m(M,T,q,$,K){const L=$.fog,j=K.geometry,J=M.isMeshStandardMaterial?$.environment:null,Y=(M.isMeshStandardMaterial?n:e).get(M.envMap||J),D=Y&&Y.mapping===Wl?Y.image.height:null,G=v[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const B=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,C=B!==void 0?B.length:0;let I=0;j.morphAttributes.position!==void 0&&(I=1),j.morphAttributes.normal!==void 0&&(I=2),j.morphAttributes.color!==void 0&&(I=3);let ue,ce,me,ye;if(G){const mt=Kn[G];ue=mt.vertexShader,ce=mt.fragmentShader}else ue=M.vertexShader,ce=M.fragmentShader,a.update(M),me=a.getVertexShaderID(M),ye=a.getFragmentShaderID(M);const Ne=t.getRenderTarget(),Re=K.isInstancedMesh===!0,De=!!M.map,ut=!!M.matcap,Fe=!!Y,O=!!M.aoMap,un=!!M.lightMap,xe=!!M.bumpMap,be=!!M.normalMap,Pe=!!M.displacementMap,ct=!!M.emissiveMap,ke=!!M.metalnessMap,Be=!!M.roughnessMap,Qe=M.anisotropy>0,Tt=M.clearcoat>0,Ot=M.iridescence>0,P=M.sheen>0,S=M.transmission>0,k=Qe&&!!M.anisotropyMap,ie=Tt&&!!M.clearcoatMap,ee=Tt&&!!M.clearcoatNormalMap,re=Tt&&!!M.clearcoatRoughnessMap,ge=Ot&&!!M.iridescenceMap,oe=Ot&&!!M.iridescenceThicknessMap,fe=P&&!!M.sheenColorMap,we=P&&!!M.sheenRoughnessMap,Xe=!!M.specularMap,te=!!M.specularColorMap,Ke=!!M.specularIntensityMap,Ce=S&&!!M.transmissionMap,Te=S&&!!M.thicknessMap,Se=!!M.gradientMap,_e=!!M.alphaMap,We=M.alphaTest>0,b=!!M.alphaHash,de=!!M.extensions,se=!!j.attributes.uv1,X=!!j.attributes.uv2,ae=!!j.attributes.uv3;let Me=Yi;return M.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(Me=t.toneMapping),{isWebGL2:c,shaderID:G,shaderType:M.type,shaderName:M.name,vertexShader:ue,fragmentShader:ce,defines:M.defines,customVertexShaderID:me,customFragmentShaderID:ye,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:Re,instancingColor:Re&&K.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ne===null?t.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:Ei,map:De,matcap:ut,envMap:Fe,envMapMode:Fe&&Y.mapping,envMapCubeUVHeight:D,aoMap:O,lightMap:un,bumpMap:xe,normalMap:be,displacementMap:f&&Pe,emissiveMap:ct,normalMapObjectSpace:be&&M.normalMapType===_S,normalMapTangentSpace:be&&M.normalMapType===Bg,metalnessMap:ke,roughnessMap:Be,anisotropy:Qe,anisotropyMap:k,clearcoat:Tt,clearcoatMap:ie,clearcoatNormalMap:ee,clearcoatRoughnessMap:re,iridescence:Ot,iridescenceMap:ge,iridescenceThicknessMap:oe,sheen:P,sheenColorMap:fe,sheenRoughnessMap:we,specularMap:Xe,specularColorMap:te,specularIntensityMap:Ke,transmission:S,transmissionMap:Ce,thicknessMap:Te,gradientMap:Se,opaque:M.transparent===!1&&M.blending===vs,alphaMap:_e,alphaTest:We,alphaHash:b,combine:M.combine,mapUv:De&&y(M.map.channel),aoMapUv:O&&y(M.aoMap.channel),lightMapUv:un&&y(M.lightMap.channel),bumpMapUv:xe&&y(M.bumpMap.channel),normalMapUv:be&&y(M.normalMap.channel),displacementMapUv:Pe&&y(M.displacementMap.channel),emissiveMapUv:ct&&y(M.emissiveMap.channel),metalnessMapUv:ke&&y(M.metalnessMap.channel),roughnessMapUv:Be&&y(M.roughnessMap.channel),anisotropyMapUv:k&&y(M.anisotropyMap.channel),clearcoatMapUv:ie&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:ee&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:we&&y(M.sheenRoughnessMap.channel),specularMapUv:Xe&&y(M.specularMap.channel),specularColorMapUv:te&&y(M.specularColorMap.channel),specularIntensityMapUv:Ke&&y(M.specularIntensityMap.channel),transmissionMapUv:Ce&&y(M.transmissionMap.channel),thicknessMapUv:Te&&y(M.thicknessMap.channel),alphaMapUv:_e&&y(M.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(be||Qe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,vertexUv1s:se,vertexUv2s:X,vertexUv3s:ae,pointsUvs:K.isPoints===!0&&!!j.attributes.uv&&(De||_e),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:K.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:C,morphTextureStride:I,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&q.length>0,shadowMapType:t.shadowMap.type,toneMapping:Me,useLegacyLights:t._useLegacyLights,decodeVideoTexture:De&&M.map.isVideoTexture===!0&&Ze.getTransfer(M.map.colorSpace)===it,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===hi,flipSided:M.side===ln,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:de&&M.extensions.derivatives===!0,extensionFragDepth:de&&M.extensions.fragDepth===!0,extensionDrawBuffers:de&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:de&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const q in M.defines)T.push(q),T.push(M.defines[q]);return M.isRawShaderMaterial===!1&&(g(T,M),_(T,M),T.push(t.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function g(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function _(M,T){l.disableAll(),T.isWebGL2&&l.enable(0),T.supportsVertexTextures&&l.enable(1),T.instancing&&l.enable(2),T.instancingColor&&l.enable(3),T.matcap&&l.enable(4),T.envMap&&l.enable(5),T.normalMapObjectSpace&&l.enable(6),T.normalMapTangentSpace&&l.enable(7),T.clearcoat&&l.enable(8),T.iridescence&&l.enable(9),T.alphaTest&&l.enable(10),T.vertexColors&&l.enable(11),T.vertexAlphas&&l.enable(12),T.vertexUv1s&&l.enable(13),T.vertexUv2s&&l.enable(14),T.vertexUv3s&&l.enable(15),T.vertexTangents&&l.enable(16),T.anisotropy&&l.enable(17),T.alphaHash&&l.enable(18),M.push(l.mask),l.disableAll(),T.fog&&l.enable(0),T.useFog&&l.enable(1),T.flatShading&&l.enable(2),T.logarithmicDepthBuffer&&l.enable(3),T.skinning&&l.enable(4),T.morphTargets&&l.enable(5),T.morphNormals&&l.enable(6),T.morphColors&&l.enable(7),T.premultipliedAlpha&&l.enable(8),T.shadowMapEnabled&&l.enable(9),T.useLegacyLights&&l.enable(10),T.doubleSided&&l.enable(11),T.flipSided&&l.enable(12),T.useDepthPacking&&l.enable(13),T.dithering&&l.enable(14),T.transmission&&l.enable(15),T.sheen&&l.enable(16),T.opaque&&l.enable(17),T.pointsUvs&&l.enable(18),T.decodeVideoTexture&&l.enable(19),M.push(l.mask)}function x(M){const T=v[M.type];let q;if(T){const $=Kn[T];q=WS.clone($.uniforms)}else q=M.uniforms;return q}function w(M,T){let q;for(let $=0,K=u.length;$<K;$++){const L=u[$];if(L.cacheKey===T){q=L,++q.usedTimes;break}}return q===void 0&&(q=new tA(t,T,M,s),u.push(q)),q}function R(M){if(--M.usedTimes===0){const T=u.indexOf(M);u[T]=u[u.length-1],u.pop(),M.destroy()}}function A(M){a.remove(M)}function U(){a.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:x,acquireProgram:w,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:U}}function aA(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,l){t.get(s)[o]=l}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function oA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function rm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function sm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,p,v,y,m){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:v,renderOrder:d.renderOrder,z:y,group:m},t[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=v,h.renderOrder=d.renderOrder,h.z=y,h.group=m),e++,h}function l(d,f,p,v,y,m){const h=o(d,f,p,v,y,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function a(d,f,p,v,y,m){const h=o(d,f,p,v,y,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function u(d,f){n.length>1&&n.sort(d||oA),i.length>1&&i.sort(f||rm),r.length>1&&r.sort(f||rm)}function c(){for(let d=e,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:a,finish:c,sort:u}}function lA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new sm,t.set(i,[o])):r>=s.length?(o=new sm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function uA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new qe};break;case"SpotLight":n={position:new F,direction:new F,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function cA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let dA=0;function fA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function hA(t,e){const n=new uA,i=cA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new F);const s=new F,o=new St,l=new St;function a(c,d){let f=0,p=0,v=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let y=0,m=0,h=0,g=0,_=0,x=0,w=0,R=0,A=0,U=0,M=0;c.sort(fA);const T=d===!0?Math.PI:1;for(let $=0,K=c.length;$<K;$++){const L=c[$],j=L.color,J=L.intensity,Y=L.distance,D=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=j.r*J*T,p+=j.g*J*T,v+=j.b*J*T;else if(L.isLightProbe){for(let G=0;G<9;G++)r.probe[G].addScaledVector(L.sh.coefficients[G],J);M++}else if(L.isDirectionalLight){const G=n.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity*T),L.castShadow){const B=L.shadow,C=i.get(L);C.shadowBias=B.bias,C.shadowNormalBias=B.normalBias,C.shadowRadius=B.radius,C.shadowMapSize=B.mapSize,r.directionalShadow[y]=C,r.directionalShadowMap[y]=D,r.directionalShadowMatrix[y]=L.shadow.matrix,x++}r.directional[y]=G,y++}else if(L.isSpotLight){const G=n.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(j).multiplyScalar(J*T),G.distance=Y,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,r.spot[h]=G;const B=L.shadow;if(L.map&&(r.spotLightMap[A]=L.map,A++,B.updateMatrices(L),L.castShadow&&U++),r.spotLightMatrix[h]=B.matrix,L.castShadow){const C=i.get(L);C.shadowBias=B.bias,C.shadowNormalBias=B.normalBias,C.shadowRadius=B.radius,C.shadowMapSize=B.mapSize,r.spotShadow[h]=C,r.spotShadowMap[h]=D,R++}h++}else if(L.isRectAreaLight){const G=n.get(L);G.color.copy(j).multiplyScalar(J),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),r.rectArea[g]=G,g++}else if(L.isPointLight){const G=n.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity*T),G.distance=L.distance,G.decay=L.decay,L.castShadow){const B=L.shadow,C=i.get(L);C.shadowBias=B.bias,C.shadowNormalBias=B.normalBias,C.shadowRadius=B.radius,C.shadowMapSize=B.mapSize,C.shadowCameraNear=B.camera.near,C.shadowCameraFar=B.camera.far,r.pointShadow[m]=C,r.pointShadowMap[m]=D,r.pointShadowMatrix[m]=L.shadow.matrix,w++}r.point[m]=G,m++}else if(L.isHemisphereLight){const G=n.get(L);G.skyColor.copy(L.color).multiplyScalar(J*T),G.groundColor.copy(L.groundColor).multiplyScalar(J*T),r.hemi[_]=G,_++}}g>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=v;const q=r.hash;(q.directionalLength!==y||q.pointLength!==m||q.spotLength!==h||q.rectAreaLength!==g||q.hemiLength!==_||q.numDirectionalShadows!==x||q.numPointShadows!==w||q.numSpotShadows!==R||q.numSpotMaps!==A||q.numLightProbes!==M)&&(r.directional.length=y,r.spot.length=h,r.rectArea.length=g,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=R+A-U,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=M,q.directionalLength=y,q.pointLength=m,q.spotLength=h,q.rectAreaLength=g,q.hemiLength=_,q.numDirectionalShadows=x,q.numPointShadows=w,q.numSpotShadows=R,q.numSpotMaps=A,q.numLightProbes=M,r.version=dA++)}function u(c,d){let f=0,p=0,v=0,y=0,m=0;const h=d.matrixWorldInverse;for(let g=0,_=c.length;g<_;g++){const x=c[g];if(x.isDirectionalLight){const w=r.directional[f];w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(h),f++}else if(x.isSpotLight){const w=r.spot[v];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(h),w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(h),v++}else if(x.isRectAreaLight){const w=r.rectArea[y];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(h),l.identity(),o.copy(x.matrixWorld),o.premultiply(h),l.extractRotation(o),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(l),w.halfHeight.applyMatrix4(l),y++}else if(x.isPointLight){const w=r.point[p];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(h),p++}else if(x.isHemisphereLight){const w=r.hemi[m];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(h),m++}}}return{setup:a,setupView:u,state:r}}function am(t,e){const n=new hA(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function l(d){r.push(d)}function a(d){n.setup(i,d)}function u(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:a,setupLightsView:u,pushLight:o,pushShadow:l}}function pA(t,e){let n=new WeakMap;function i(s,o=0){const l=n.get(s);let a;return l===void 0?(a=new am(t,e),n.set(s,[a])):o>=l.length?(a=new am(t,e),l.push(a)):a=l[o],a}function r(){n=new WeakMap}return{get:i,dispose:r}}class mA extends qa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _A extends qa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yA(t,e,n){let i=new cf;const r=new Je,s=new Je,o=new bt,l=new mA({depthPacking:mS}),a=new _A,u={},c=n.maxTextureSize,d={[Qi]:ln,[ln]:Qi,[hi]:hi},f=new Ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:gA,fragmentShader:vA}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new ir;v.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new bn(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bg;let h=this.type;this.render=function(w,R,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const U=t.getRenderTarget(),M=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),q=t.state;q.setBlending(Xi),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const $=h!==ci&&this.type===ci,K=h===ci&&this.type!==ci;for(let L=0,j=w.length;L<j;L++){const J=w[L],Y=J.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const D=Y.getFrameExtents();if(r.multiply(D),s.copy(Y.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/D.x),r.x=s.x*D.x,Y.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/D.y),r.y=s.y*D.y,Y.mapSize.y=s.y)),Y.map===null||$===!0||K===!0){const B=this.type!==ci?{minFilter:Jt,magFilter:Jt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Lr(r.x,r.y,B),Y.map.texture.name=J.name+".shadowMap",Y.camera.updateProjectionMatrix()}t.setRenderTarget(Y.map),t.clear();const G=Y.getViewportCount();for(let B=0;B<G;B++){const C=Y.getViewport(B);o.set(s.x*C.x,s.y*C.y,s.x*C.z,s.y*C.w),q.viewport(o),Y.updateMatrices(J,B),i=Y.getFrustum(),x(R,A,Y.camera,J,this.type)}Y.isPointLightShadow!==!0&&this.type===ci&&g(Y,A),Y.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(U,M,T)};function g(w,R){const A=e.update(y);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Lr(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(R,null,A,f,y,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(R,null,A,p,y,null)}function _(w,R,A,U){let M=null;const T=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(T!==void 0)M=T;else if(M=A.isPointLight===!0?a:l,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const q=M.uuid,$=R.uuid;let K=u[q];K===void 0&&(K={},u[q]=K);let L=K[$];L===void 0&&(L=M.clone(),K[$]=L),M=L}if(M.visible=R.visible,M.wireframe=R.wireframe,U===ci?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:d[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const q=t.properties.get(M);q.light=A}return M}function x(w,R,A,U,M){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===ci)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);const $=e.update(w),K=w.material;if(Array.isArray(K)){const L=$.groups;for(let j=0,J=L.length;j<J;j++){const Y=L[j],D=K[Y.materialIndex];if(D&&D.visible){const G=_(w,D,U,M);t.renderBufferDirect(A,null,$,G,w,Y)}}}else if(K.visible){const L=_(w,K,U,M);t.renderBufferDirect(A,null,$,L,w,null)}}const q=w.children;for(let $=0,K=q.length;$<K;$++)x(q[$],R,A,U,M)}}function xA(t,e,n){const i=n.isWebGL2;function r(){let b=!1;const de=new bt;let se=null;const X=new bt(0,0,0,0);return{setMask:function(ae){se!==ae&&!b&&(t.colorMask(ae,ae,ae,ae),se=ae)},setLocked:function(ae){b=ae},setClear:function(ae,Me,Ye,mt,Sn){Sn===!0&&(ae*=mt,Me*=mt,Ye*=mt),de.set(ae,Me,Ye,mt),X.equals(de)===!1&&(t.clearColor(ae,Me,Ye,mt),X.copy(de))},reset:function(){b=!1,se=null,X.set(-1,0,0,0)}}}function s(){let b=!1,de=null,se=null,X=null;return{setTest:function(ae){ae?De(t.DEPTH_TEST):ut(t.DEPTH_TEST)},setMask:function(ae){de!==ae&&!b&&(t.depthMask(ae),de=ae)},setFunc:function(ae){if(se!==ae){switch(ae){case Wx:t.depthFunc(t.NEVER);break;case jx:t.depthFunc(t.ALWAYS);break;case qx:t.depthFunc(t.LESS);break;case Ml:t.depthFunc(t.LEQUAL);break;case Xx:t.depthFunc(t.EQUAL);break;case Yx:t.depthFunc(t.GEQUAL);break;case Jx:t.depthFunc(t.GREATER);break;case $x:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}se=ae}},setLocked:function(ae){b=ae},setClear:function(ae){X!==ae&&(t.clearDepth(ae),X=ae)},reset:function(){b=!1,de=null,se=null,X=null}}}function o(){let b=!1,de=null,se=null,X=null,ae=null,Me=null,Ye=null,mt=null,Sn=null;return{setTest:function(et){b||(et?De(t.STENCIL_TEST):ut(t.STENCIL_TEST))},setMask:function(et){de!==et&&!b&&(t.stencilMask(et),de=et)},setFunc:function(et,jt,qn){(se!==et||X!==jt||ae!==qn)&&(t.stencilFunc(et,jt,qn),se=et,X=jt,ae=qn)},setOp:function(et,jt,qn){(Me!==et||Ye!==jt||mt!==qn)&&(t.stencilOp(et,jt,qn),Me=et,Ye=jt,mt=qn)},setLocked:function(et){b=et},setClear:function(et){Sn!==et&&(t.clearStencil(et),Sn=et)},reset:function(){b=!1,de=null,se=null,X=null,ae=null,Me=null,Ye=null,mt=null,Sn=null}}}const l=new r,a=new s,u=new o,c=new WeakMap,d=new WeakMap;let f={},p={},v=new WeakMap,y=[],m=null,h=!1,g=null,_=null,x=null,w=null,R=null,A=null,U=null,M=new qe(0,0,0),T=0,q=!1,$=null,K=null,L=null,j=null,J=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,G=0;const B=t.getParameter(t.VERSION);B.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(B)[1]),D=G>=1):B.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),D=G>=2);let C=null,I={};const ue=t.getParameter(t.SCISSOR_BOX),ce=t.getParameter(t.VIEWPORT),me=new bt().fromArray(ue),ye=new bt().fromArray(ce);function Ne(b,de,se,X){const ae=new Uint8Array(4),Me=t.createTexture();t.bindTexture(b,Me),t.texParameteri(b,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(b,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ye=0;Ye<se;Ye++)i&&(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)?t.texImage3D(de,0,t.RGBA,1,1,X,0,t.RGBA,t.UNSIGNED_BYTE,ae):t.texImage2D(de+Ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ae);return Me}const Re={};Re[t.TEXTURE_2D]=Ne(t.TEXTURE_2D,t.TEXTURE_2D,1),Re[t.TEXTURE_CUBE_MAP]=Ne(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Re[t.TEXTURE_2D_ARRAY]=Ne(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Re[t.TEXTURE_3D]=Ne(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),l.setClear(0,0,0,1),a.setClear(1),u.setClear(0),De(t.DEPTH_TEST),a.setFunc(Ml),ke(!1),Be(Gh),De(t.CULL_FACE),Pe(Xi);function De(b){f[b]!==!0&&(t.enable(b),f[b]=!0)}function ut(b){f[b]!==!1&&(t.disable(b),f[b]=!1)}function Fe(b,de){return p[b]!==de?(t.bindFramebuffer(b,de),p[b]=de,i&&(b===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=de),b===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=de)),!0):!1}function O(b,de){let se=y,X=!1;if(b)if(se=v.get(de),se===void 0&&(se=[],v.set(de,se)),b.isWebGLMultipleRenderTargets){const ae=b.texture;if(se.length!==ae.length||se[0]!==t.COLOR_ATTACHMENT0){for(let Me=0,Ye=ae.length;Me<Ye;Me++)se[Me]=t.COLOR_ATTACHMENT0+Me;se.length=ae.length,X=!0}}else se[0]!==t.COLOR_ATTACHMENT0&&(se[0]=t.COLOR_ATTACHMENT0,X=!0);else se[0]!==t.BACK&&(se[0]=t.BACK,X=!0);X&&(n.isWebGL2?t.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function un(b){return m!==b?(t.useProgram(b),m=b,!0):!1}const xe={[mr]:t.FUNC_ADD,[bx]:t.FUNC_SUBTRACT,[Cx]:t.FUNC_REVERSE_SUBTRACT};if(i)xe[jh]=t.MIN,xe[qh]=t.MAX;else{const b=e.get("EXT_blend_minmax");b!==null&&(xe[jh]=b.MIN_EXT,xe[qh]=b.MAX_EXT)}const be={[Lx]:t.ZERO,[Ux]:t.ONE,[Nx]:t.SRC_COLOR,[Kc]:t.SRC_ALPHA,[Bx]:t.SRC_ALPHA_SATURATE,[Fx]:t.DST_COLOR,[Ix]:t.DST_ALPHA,[Dx]:t.ONE_MINUS_SRC_COLOR,[Zc]:t.ONE_MINUS_SRC_ALPHA,[kx]:t.ONE_MINUS_DST_COLOR,[Ox]:t.ONE_MINUS_DST_ALPHA,[zx]:t.CONSTANT_COLOR,[Gx]:t.ONE_MINUS_CONSTANT_COLOR,[Hx]:t.CONSTANT_ALPHA,[Vx]:t.ONE_MINUS_CONSTANT_ALPHA};function Pe(b,de,se,X,ae,Me,Ye,mt,Sn,et){if(b===Xi){h===!0&&(ut(t.BLEND),h=!1);return}if(h===!1&&(De(t.BLEND),h=!0),b!==Rx){if(b!==g||et!==q){if((_!==mr||R!==mr)&&(t.blendEquation(t.FUNC_ADD),_=mr,R=mr),et)switch(b){case vs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Hh:t.blendFunc(t.ONE,t.ONE);break;case Vh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Wh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case vs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Hh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Vh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Wh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}x=null,w=null,A=null,U=null,M.set(0,0,0),T=0,g=b,q=et}return}ae=ae||de,Me=Me||se,Ye=Ye||X,(de!==_||ae!==R)&&(t.blendEquationSeparate(xe[de],xe[ae]),_=de,R=ae),(se!==x||X!==w||Me!==A||Ye!==U)&&(t.blendFuncSeparate(be[se],be[X],be[Me],be[Ye]),x=se,w=X,A=Me,U=Ye),(mt.equals(M)===!1||Sn!==T)&&(t.blendColor(mt.r,mt.g,mt.b,Sn),M.copy(mt),T=Sn),g=b,q=!1}function ct(b,de){b.side===hi?ut(t.CULL_FACE):De(t.CULL_FACE);let se=b.side===ln;de&&(se=!se),ke(se),b.blending===vs&&b.transparent===!1?Pe(Xi):Pe(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),a.setFunc(b.depthFunc),a.setTest(b.depthTest),a.setMask(b.depthWrite),l.setMask(b.colorWrite);const X=b.stencilWrite;u.setTest(X),X&&(u.setMask(b.stencilWriteMask),u.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),u.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),Tt(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?De(t.SAMPLE_ALPHA_TO_COVERAGE):ut(t.SAMPLE_ALPHA_TO_COVERAGE)}function ke(b){$!==b&&(b?t.frontFace(t.CW):t.frontFace(t.CCW),$=b)}function Be(b){b!==Tx?(De(t.CULL_FACE),b!==K&&(b===Gh?t.cullFace(t.BACK):b===Ax?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ut(t.CULL_FACE),K=b}function Qe(b){b!==L&&(D&&t.lineWidth(b),L=b)}function Tt(b,de,se){b?(De(t.POLYGON_OFFSET_FILL),(j!==de||J!==se)&&(t.polygonOffset(de,se),j=de,J=se)):ut(t.POLYGON_OFFSET_FILL)}function Ot(b){b?De(t.SCISSOR_TEST):ut(t.SCISSOR_TEST)}function P(b){b===void 0&&(b=t.TEXTURE0+Y-1),C!==b&&(t.activeTexture(b),C=b)}function S(b,de,se){se===void 0&&(C===null?se=t.TEXTURE0+Y-1:se=C);let X=I[se];X===void 0&&(X={type:void 0,texture:void 0},I[se]=X),(X.type!==b||X.texture!==de)&&(C!==se&&(t.activeTexture(se),C=se),t.bindTexture(b,de||Re[b]),X.type=b,X.texture=de)}function k(){const b=I[C];b!==void 0&&b.type!==void 0&&(t.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function ie(){try{t.compressedTexImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function re(){try{t.texSubImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ge(){try{t.texSubImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function oe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function fe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function we(){try{t.texStorage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Xe(){try{t.texStorage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function te(){try{t.texImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ke(){try{t.texImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ce(b){me.equals(b)===!1&&(t.scissor(b.x,b.y,b.z,b.w),me.copy(b))}function Te(b){ye.equals(b)===!1&&(t.viewport(b.x,b.y,b.z,b.w),ye.copy(b))}function Se(b,de){let se=d.get(de);se===void 0&&(se=new WeakMap,d.set(de,se));let X=se.get(b);X===void 0&&(X=t.getUniformBlockIndex(de,b.name),se.set(b,X))}function _e(b,de){const X=d.get(de).get(b);c.get(de)!==X&&(t.uniformBlockBinding(de,X,b.__bindingPointIndex),c.set(de,X))}function We(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},C=null,I={},p={},v=new WeakMap,y=[],m=null,h=!1,g=null,_=null,x=null,w=null,R=null,A=null,U=null,M=new qe(0,0,0),T=0,q=!1,$=null,K=null,L=null,j=null,J=null,me.set(0,0,t.canvas.width,t.canvas.height),ye.set(0,0,t.canvas.width,t.canvas.height),l.reset(),a.reset(),u.reset()}return{buffers:{color:l,depth:a,stencil:u},enable:De,disable:ut,bindFramebuffer:Fe,drawBuffers:O,useProgram:un,setBlending:Pe,setMaterial:ct,setFlipSided:ke,setCullFace:Be,setLineWidth:Qe,setPolygonOffset:Tt,setScissorTest:Ot,activeTexture:P,bindTexture:S,unbindTexture:k,compressedTexImage2D:ie,compressedTexImage3D:ee,texImage2D:te,texImage3D:Ke,updateUBOMapping:Se,uniformBlockBinding:_e,texStorage2D:we,texStorage3D:Xe,texSubImage2D:re,texSubImage3D:ge,compressedTexSubImage2D:oe,compressedTexSubImage3D:fe,scissor:Ce,viewport:Te,reset:We}}function SA(t,e,n,i,r,s,o){const l=r.isWebGL2,a=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let y;const m=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,S){return h?new OffscreenCanvas(P,S):Pl("canvas")}function _(P,S,k,ie){let ee=1;if((P.width>ie||P.height>ie)&&(ee=ie/Math.max(P.width,P.height)),ee<1||S===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const re=S?sd:Math.floor,ge=re(ee*P.width),oe=re(ee*P.height);y===void 0&&(y=g(ge,oe));const fe=k?g(ge,oe):y;return fe.width=ge,fe.height=oe,fe.getContext("2d").drawImage(P,0,0,ge,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+ge+"x"+oe+")."),fe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function x(P){return Mp(P.width)&&Mp(P.height)}function w(P){return l?!1:P.wrapS!==Gn||P.wrapT!==Gn||P.minFilter!==Jt&&P.minFilter!==Tn}function R(P,S){return P.generateMipmaps&&S&&P.minFilter!==Jt&&P.minFilter!==Tn}function A(P){t.generateMipmap(P)}function U(P,S,k,ie,ee=!1){if(l===!1)return S;if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let re=S;if(S===t.RED&&(k===t.FLOAT&&(re=t.R32F),k===t.HALF_FLOAT&&(re=t.R16F),k===t.UNSIGNED_BYTE&&(re=t.R8)),S===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(re=t.R8UI),k===t.UNSIGNED_SHORT&&(re=t.R16UI),k===t.UNSIGNED_INT&&(re=t.R32UI),k===t.BYTE&&(re=t.R8I),k===t.SHORT&&(re=t.R16I),k===t.INT&&(re=t.R32I)),S===t.RG&&(k===t.FLOAT&&(re=t.RG32F),k===t.HALF_FLOAT&&(re=t.RG16F),k===t.UNSIGNED_BYTE&&(re=t.RG8)),S===t.RGBA){const ge=ee?El:Ze.getTransfer(ie);k===t.FLOAT&&(re=t.RGBA32F),k===t.HALF_FLOAT&&(re=t.RGBA16F),k===t.UNSIGNED_BYTE&&(re=ge===it?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT_4_4_4_4&&(re=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(re=t.RGB5_A1)}return(re===t.R16F||re===t.R32F||re===t.RG16F||re===t.RG32F||re===t.RGBA16F||re===t.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function M(P,S,k){return R(P,k)===!0||P.isFramebufferTexture&&P.minFilter!==Jt&&P.minFilter!==Tn?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function T(P){return P===Jt||P===Xh||P===Tu?t.NEAREST:t.LINEAR}function q(P){const S=P.target;S.removeEventListener("dispose",q),K(S),S.isVideoTexture&&v.delete(S)}function $(P){const S=P.target;S.removeEventListener("dispose",$),j(S)}function K(P){const S=i.get(P);if(S.__webglInit===void 0)return;const k=P.source,ie=m.get(k);if(ie){const ee=ie[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&L(P),Object.keys(ie).length===0&&m.delete(k)}i.remove(P)}function L(P){const S=i.get(P);t.deleteTexture(S.__webglTexture);const k=P.source,ie=m.get(k);delete ie[S.__cacheKey],o.memory.textures--}function j(P){const S=P.texture,k=i.get(P),ie=i.get(S);if(ie.__webglTexture!==void 0&&(t.deleteTexture(ie.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(k.__webglFramebuffer[ee]))for(let re=0;re<k.__webglFramebuffer[ee].length;re++)t.deleteFramebuffer(k.__webglFramebuffer[ee][re]);else t.deleteFramebuffer(k.__webglFramebuffer[ee]);k.__webglDepthbuffer&&t.deleteRenderbuffer(k.__webglDepthbuffer[ee])}else{if(Array.isArray(k.__webglFramebuffer))for(let ee=0;ee<k.__webglFramebuffer.length;ee++)t.deleteFramebuffer(k.__webglFramebuffer[ee]);else t.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&t.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&t.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let ee=0;ee<k.__webglColorRenderbuffer.length;ee++)k.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(k.__webglColorRenderbuffer[ee]);k.__webglDepthRenderbuffer&&t.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ee=0,re=S.length;ee<re;ee++){const ge=i.get(S[ee]);ge.__webglTexture&&(t.deleteTexture(ge.__webglTexture),o.memory.textures--),i.remove(S[ee])}i.remove(S),i.remove(P)}let J=0;function Y(){J=0}function D(){const P=J;return P>=a&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+a),J+=1,P}function G(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function B(P,S){const k=i.get(P);if(P.isVideoTexture&&Tt(P),P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){const ie=P.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{De(k,P,S);return}}n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+S)}function C(P,S){const k=i.get(P);if(P.version>0&&k.__version!==P.version){De(k,P,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+S)}function I(P,S){const k=i.get(P);if(P.version>0&&k.__version!==P.version){De(k,P,S);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+S)}function ue(P,S){const k=i.get(P);if(P.version>0&&k.__version!==P.version){ut(k,P,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+S)}const ce={[td]:t.REPEAT,[Gn]:t.CLAMP_TO_EDGE,[nd]:t.MIRRORED_REPEAT},me={[Jt]:t.NEAREST,[Xh]:t.NEAREST_MIPMAP_NEAREST,[Tu]:t.NEAREST_MIPMAP_LINEAR,[Tn]:t.LINEAR,[rS]:t.LINEAR_MIPMAP_NEAREST,[Ia]:t.LINEAR_MIPMAP_LINEAR},ye={[gS]:t.NEVER,[wS]:t.ALWAYS,[vS]:t.LESS,[xS]:t.LEQUAL,[yS]:t.EQUAL,[ES]:t.GEQUAL,[SS]:t.GREATER,[MS]:t.NOTEQUAL};function Ne(P,S,k){if(k?(t.texParameteri(P,t.TEXTURE_WRAP_S,ce[S.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,ce[S.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,ce[S.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,me[S.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,me[S.minFilter])):(t.texParameteri(P,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(P,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(S.wrapS!==Gn||S.wrapT!==Gn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(P,t.TEXTURE_MAG_FILTER,T(S.magFilter)),t.texParameteri(P,t.TEXTURE_MIN_FILTER,T(S.minFilter)),S.minFilter!==Jt&&S.minFilter!==Tn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,ye[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Jt||S.minFilter!==Tu&&S.minFilter!==Ia||S.type===ki&&e.has("OES_texture_float_linear")===!1||l===!1&&S.type===Oa&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(t.texParameterf(P,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function Re(P,S){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",q));const ie=S.source;let ee=m.get(ie);ee===void 0&&(ee={},m.set(ie,ee));const re=G(S);if(re!==P.__cacheKey){ee[re]===void 0&&(ee[re]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ee[re].usedTimes++;const ge=ee[P.__cacheKey];ge!==void 0&&(ee[P.__cacheKey].usedTimes--,ge.usedTimes===0&&L(S)),P.__cacheKey=re,P.__webglTexture=ee[re].texture}return k}function De(P,S,k){let ie=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ie=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ie=t.TEXTURE_3D);const ee=Re(P,S),re=S.source;n.bindTexture(ie,P.__webglTexture,t.TEXTURE0+k);const ge=i.get(re);if(re.version!==ge.__version||ee===!0){n.activeTexture(t.TEXTURE0+k);const oe=Ze.getPrimaries(Ze.workingColorSpace),fe=S.colorSpace===Pn?null:Ze.getPrimaries(S.colorSpace),we=S.colorSpace===Pn||oe===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Xe=w(S)&&x(S.image)===!1;let te=_(S.image,Xe,!1,c);te=Ot(S,te);const Ke=x(te)||l,Ce=s.convert(S.format,S.colorSpace);let Te=s.convert(S.type),Se=U(S.internalFormat,Ce,Te,S.colorSpace,S.isVideoTexture);Ne(ie,S,Ke);let _e;const We=S.mipmaps,b=l&&S.isVideoTexture!==!0,de=ge.__version===void 0||ee===!0,se=M(S,te,Ke);if(S.isDepthTexture)Se=t.DEPTH_COMPONENT,l?S.type===ki?Se=t.DEPTH_COMPONENT32F:S.type===Fi?Se=t.DEPTH_COMPONENT24:S.type===Mr?Se=t.DEPTH24_STENCIL8:Se=t.DEPTH_COMPONENT16:S.type===ki&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Er&&Se===t.DEPTH_COMPONENT&&S.type!==af&&S.type!==Fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Fi,Te=s.convert(S.type)),S.format===bs&&Se===t.DEPTH_COMPONENT&&(Se=t.DEPTH_STENCIL,S.type!==Mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Mr,Te=s.convert(S.type))),de&&(b?n.texStorage2D(t.TEXTURE_2D,1,Se,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,Se,te.width,te.height,0,Ce,Te,null));else if(S.isDataTexture)if(We.length>0&&Ke){b&&de&&n.texStorage2D(t.TEXTURE_2D,se,Se,We[0].width,We[0].height);for(let X=0,ae=We.length;X<ae;X++)_e=We[X],b?n.texSubImage2D(t.TEXTURE_2D,X,0,0,_e.width,_e.height,Ce,Te,_e.data):n.texImage2D(t.TEXTURE_2D,X,Se,_e.width,_e.height,0,Ce,Te,_e.data);S.generateMipmaps=!1}else b?(de&&n.texStorage2D(t.TEXTURE_2D,se,Se,te.width,te.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,te.width,te.height,Ce,Te,te.data)):n.texImage2D(t.TEXTURE_2D,0,Se,te.width,te.height,0,Ce,Te,te.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){b&&de&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,Se,We[0].width,We[0].height,te.depth);for(let X=0,ae=We.length;X<ae;X++)_e=We[X],S.format!==Hn?Ce!==null?b?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,_e.width,_e.height,te.depth,Ce,_e.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,X,Se,_e.width,_e.height,te.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):b?n.texSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,_e.width,_e.height,te.depth,Ce,Te,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,X,Se,_e.width,_e.height,te.depth,0,Ce,Te,_e.data)}else{b&&de&&n.texStorage2D(t.TEXTURE_2D,se,Se,We[0].width,We[0].height);for(let X=0,ae=We.length;X<ae;X++)_e=We[X],S.format!==Hn?Ce!==null?b?n.compressedTexSubImage2D(t.TEXTURE_2D,X,0,0,_e.width,_e.height,Ce,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,X,Se,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):b?n.texSubImage2D(t.TEXTURE_2D,X,0,0,_e.width,_e.height,Ce,Te,_e.data):n.texImage2D(t.TEXTURE_2D,X,Se,_e.width,_e.height,0,Ce,Te,_e.data)}else if(S.isDataArrayTexture)b?(de&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,Se,te.width,te.height,te.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,Ce,Te,te.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Se,te.width,te.height,te.depth,0,Ce,Te,te.data);else if(S.isData3DTexture)b?(de&&n.texStorage3D(t.TEXTURE_3D,se,Se,te.width,te.height,te.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,Ce,Te,te.data)):n.texImage3D(t.TEXTURE_3D,0,Se,te.width,te.height,te.depth,0,Ce,Te,te.data);else if(S.isFramebufferTexture){if(de)if(b)n.texStorage2D(t.TEXTURE_2D,se,Se,te.width,te.height);else{let X=te.width,ae=te.height;for(let Me=0;Me<se;Me++)n.texImage2D(t.TEXTURE_2D,Me,Se,X,ae,0,Ce,Te,null),X>>=1,ae>>=1}}else if(We.length>0&&Ke){b&&de&&n.texStorage2D(t.TEXTURE_2D,se,Se,We[0].width,We[0].height);for(let X=0,ae=We.length;X<ae;X++)_e=We[X],b?n.texSubImage2D(t.TEXTURE_2D,X,0,0,Ce,Te,_e):n.texImage2D(t.TEXTURE_2D,X,Se,Ce,Te,_e);S.generateMipmaps=!1}else b?(de&&n.texStorage2D(t.TEXTURE_2D,se,Se,te.width,te.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ce,Te,te)):n.texImage2D(t.TEXTURE_2D,0,Se,Ce,Te,te);R(S,Ke)&&A(ie),ge.__version=re.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function ut(P,S,k){if(S.image.length!==6)return;const ie=Re(P,S),ee=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+k);const re=i.get(ee);if(ee.version!==re.__version||ie===!0){n.activeTexture(t.TEXTURE0+k);const ge=Ze.getPrimaries(Ze.workingColorSpace),oe=S.colorSpace===Pn?null:Ze.getPrimaries(S.colorSpace),fe=S.colorSpace===Pn||ge===oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const we=S.isCompressedTexture||S.image[0].isCompressedTexture,Xe=S.image[0]&&S.image[0].isDataTexture,te=[];for(let X=0;X<6;X++)!we&&!Xe?te[X]=_(S.image[X],!1,!0,u):te[X]=Xe?S.image[X].image:S.image[X],te[X]=Ot(S,te[X]);const Ke=te[0],Ce=x(Ke)||l,Te=s.convert(S.format,S.colorSpace),Se=s.convert(S.type),_e=U(S.internalFormat,Te,Se,S.colorSpace),We=l&&S.isVideoTexture!==!0,b=re.__version===void 0||ie===!0;let de=M(S,Ke,Ce);Ne(t.TEXTURE_CUBE_MAP,S,Ce);let se;if(we){We&&b&&n.texStorage2D(t.TEXTURE_CUBE_MAP,de,_e,Ke.width,Ke.height);for(let X=0;X<6;X++){se=te[X].mipmaps;for(let ae=0;ae<se.length;ae++){const Me=se[ae];S.format!==Hn?Te!==null?We?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ae,0,0,Me.width,Me.height,Te,Me.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ae,_e,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ae,0,0,Me.width,Me.height,Te,Se,Me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ae,_e,Me.width,Me.height,0,Te,Se,Me.data)}}}else{se=S.mipmaps,We&&b&&(se.length>0&&de++,n.texStorage2D(t.TEXTURE_CUBE_MAP,de,_e,te[0].width,te[0].height));for(let X=0;X<6;X++)if(Xe){We?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,te[X].width,te[X].height,Te,Se,te[X].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,_e,te[X].width,te[X].height,0,Te,Se,te[X].data);for(let ae=0;ae<se.length;ae++){const Ye=se[ae].image[X].image;We?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ae+1,0,0,Ye.width,Ye.height,Te,Se,Ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ae+1,_e,Ye.width,Ye.height,0,Te,Se,Ye.data)}}else{We?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Te,Se,te[X]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,_e,Te,Se,te[X]);for(let ae=0;ae<se.length;ae++){const Me=se[ae];We?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ae+1,0,0,Te,Se,Me.image[X]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ae+1,_e,Te,Se,Me.image[X])}}}R(S,Ce)&&A(t.TEXTURE_CUBE_MAP),re.__version=ee.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function Fe(P,S,k,ie,ee,re){const ge=s.convert(k.format,k.colorSpace),oe=s.convert(k.type),fe=U(k.internalFormat,ge,oe,k.colorSpace);if(!i.get(S).__hasExternalTextures){const Xe=Math.max(1,S.width>>re),te=Math.max(1,S.height>>re);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,re,fe,Xe,te,S.depth,0,ge,oe,null):n.texImage2D(ee,re,fe,Xe,te,0,ge,oe,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),Qe(S)?f.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,ee,i.get(k).__webglTexture,0,Be(S)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ie,ee,i.get(k).__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function O(P,S,k){if(t.bindRenderbuffer(t.RENDERBUFFER,P),S.depthBuffer&&!S.stencilBuffer){let ie=l===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(k||Qe(S)){const ee=S.depthTexture;ee&&ee.isDepthTexture&&(ee.type===ki?ie=t.DEPTH_COMPONENT32F:ee.type===Fi&&(ie=t.DEPTH_COMPONENT24));const re=Be(S);Qe(S)?f.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,ie,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,re,ie,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,ie,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,P)}else if(S.depthBuffer&&S.stencilBuffer){const ie=Be(S);k&&Qe(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,S.width,S.height):Qe(S)?f.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,P)}else{const ie=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ee=0;ee<ie.length;ee++){const re=ie[ee],ge=s.convert(re.format,re.colorSpace),oe=s.convert(re.type),fe=U(re.internalFormat,ge,oe,re.colorSpace),we=Be(S);k&&Qe(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,we,fe,S.width,S.height):Qe(S)?f.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,we,fe,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,fe,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function un(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),B(S.depthTexture,0);const ie=i.get(S.depthTexture).__webglTexture,ee=Be(S);if(S.depthTexture.format===Er)Qe(S)?f.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(S.depthTexture.format===bs)Qe(S)?f.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function xe(P){const S=i.get(P),k=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");un(S.__webglFramebuffer,P)}else if(k){S.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[ie]),S.__webglDepthbuffer[ie]=t.createRenderbuffer(),O(S.__webglDepthbuffer[ie],P,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),O(S.__webglDepthbuffer,P,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function be(P,S,k){const ie=i.get(P);S!==void 0&&Fe(ie.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&xe(P)}function Pe(P){const S=P.texture,k=i.get(P),ie=i.get(S);P.addEventListener("dispose",$),P.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture()),ie.__version=S.version,o.memory.textures++);const ee=P.isWebGLCubeRenderTarget===!0,re=P.isWebGLMultipleRenderTargets===!0,ge=x(P)||l;if(ee){k.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(l&&S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[oe]=[];for(let fe=0;fe<S.mipmaps.length;fe++)k.__webglFramebuffer[oe][fe]=t.createFramebuffer()}else k.__webglFramebuffer[oe]=t.createFramebuffer()}else{if(l&&S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let oe=0;oe<S.mipmaps.length;oe++)k.__webglFramebuffer[oe]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(re)if(r.drawBuffers){const oe=P.texture;for(let fe=0,we=oe.length;fe<we;fe++){const Xe=i.get(oe[fe]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&P.samples>0&&Qe(P)===!1){const oe=re?S:[S];k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let fe=0;fe<oe.length;fe++){const we=oe[fe];k.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[fe]);const Xe=s.convert(we.format,we.colorSpace),te=s.convert(we.type),Ke=U(we.internalFormat,Xe,te,we.colorSpace,P.isXRRenderTarget===!0),Ce=Be(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,Ke,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,k.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),O(k.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),Ne(t.TEXTURE_CUBE_MAP,S,ge);for(let oe=0;oe<6;oe++)if(l&&S.mipmaps&&S.mipmaps.length>0)for(let fe=0;fe<S.mipmaps.length;fe++)Fe(k.__webglFramebuffer[oe][fe],P,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe);else Fe(k.__webglFramebuffer[oe],P,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);R(S,ge)&&A(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(re){const oe=P.texture;for(let fe=0,we=oe.length;fe<we;fe++){const Xe=oe[fe],te=i.get(Xe);n.bindTexture(t.TEXTURE_2D,te.__webglTexture),Ne(t.TEXTURE_2D,Xe,ge),Fe(k.__webglFramebuffer,P,Xe,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),R(Xe,ge)&&A(t.TEXTURE_2D)}n.unbindTexture()}else{let oe=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(l?oe=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(oe,ie.__webglTexture),Ne(oe,S,ge),l&&S.mipmaps&&S.mipmaps.length>0)for(let fe=0;fe<S.mipmaps.length;fe++)Fe(k.__webglFramebuffer[fe],P,S,t.COLOR_ATTACHMENT0,oe,fe);else Fe(k.__webglFramebuffer,P,S,t.COLOR_ATTACHMENT0,oe,0);R(S,ge)&&A(oe),n.unbindTexture()}P.depthBuffer&&xe(P)}function ct(P){const S=x(P)||l,k=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ie=0,ee=k.length;ie<ee;ie++){const re=k[ie];if(R(re,S)){const ge=P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,oe=i.get(re).__webglTexture;n.bindTexture(ge,oe),A(ge),n.unbindTexture()}}}function ke(P){if(l&&P.samples>0&&Qe(P)===!1){const S=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],k=P.width,ie=P.height;let ee=t.COLOR_BUFFER_BIT;const re=[],ge=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=i.get(P),fe=P.isWebGLMultipleRenderTargets===!0;if(fe)for(let we=0;we<S.length;we++)n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let we=0;we<S.length;we++){re.push(t.COLOR_ATTACHMENT0+we),P.depthBuffer&&re.push(ge);const Xe=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(Xe===!1&&(P.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),fe&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,oe.__webglColorRenderbuffer[we]),Xe===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ge]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ge])),fe){const te=i.get(S[we]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,te,0)}t.blitFramebuffer(0,0,k,ie,0,0,k,ie,ee,t.NEAREST),p&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,re)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let we=0;we<S.length;we++){n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,oe.__webglColorRenderbuffer[we]);const Xe=i.get(S[we]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,Xe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function Be(P){return Math.min(d,P.samples)}function Qe(P){const S=i.get(P);return l&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Tt(P){const S=o.render.frame;v.get(P)!==S&&(v.set(P,S),P.update())}function Ot(P,S){const k=P.colorSpace,ie=P.format,ee=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===id||k!==Ei&&k!==Pn&&(Ze.getTransfer(k)===it?l===!1?e.has("EXT_sRGB")===!0&&ie===Hn?(P.format=id,P.minFilter=Tn,P.generateMipmaps=!1):S=Gg.sRGBToLinear(S):(ie!==Hn||ee!==Ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}this.allocateTextureUnit=D,this.resetTextureUnits=Y,this.setTexture2D=B,this.setTexture2DArray=C,this.setTexture3D=I,this.setTextureCube=ue,this.rebindTextures=be,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=Qe}function MA(t,e,n){const i=n.isWebGL2;function r(s,o=Pn){let l;const a=Ze.getTransfer(o);if(s===Ji)return t.UNSIGNED_BYTE;if(s===Ng)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Dg)return t.UNSIGNED_SHORT_5_5_5_1;if(s===sS)return t.BYTE;if(s===aS)return t.SHORT;if(s===af)return t.UNSIGNED_SHORT;if(s===Ug)return t.INT;if(s===Fi)return t.UNSIGNED_INT;if(s===ki)return t.FLOAT;if(s===Oa)return i?t.HALF_FLOAT:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(s===oS)return t.ALPHA;if(s===Hn)return t.RGBA;if(s===lS)return t.LUMINANCE;if(s===uS)return t.LUMINANCE_ALPHA;if(s===Er)return t.DEPTH_COMPONENT;if(s===bs)return t.DEPTH_STENCIL;if(s===id)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(s===cS)return t.RED;if(s===Ig)return t.RED_INTEGER;if(s===dS)return t.RG;if(s===Og)return t.RG_INTEGER;if(s===Fg)return t.RGBA_INTEGER;if(s===Au||s===Pu||s===Ru||s===bu)if(a===it)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Au)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Pu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ru)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===bu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Au)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Pu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ru)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===bu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Yh||s===Jh||s===$h||s===Kh)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===Yh)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Jh)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===$h)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Kh)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===fS)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Zh||s===Qh)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===Zh)return a===it?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===Qh)return a===it?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ep||s===tp||s===np||s===ip||s===rp||s===sp||s===ap||s===op||s===lp||s===up||s===cp||s===dp||s===fp||s===hp)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===ep)return a===it?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===tp)return a===it?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===np)return a===it?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ip)return a===it?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===rp)return a===it?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===sp)return a===it?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ap)return a===it?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===op)return a===it?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===lp)return a===it?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===up)return a===it?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===cp)return a===it?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===dp)return a===it?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===fp)return a===it?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===hp)return a===it?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Cu||s===pp||s===mp)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===Cu)return a===it?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===pp)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===mp)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===hS||s===_p||s===gp||s===vp)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Cu)return l.COMPRESSED_RED_RGTC1_EXT;if(s===_p)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===gp)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===vp)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Mr?i?t.UNSIGNED_INT_24_8:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class EA extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class aa extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wA={type:"move"};class tc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new aa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new aa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new aa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const l=this._targetRay,a=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),h=this._getHandJoint(u,y);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),p=.02,v=.005;u.inputState.pinching&&f>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else a!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1));l!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(wA)))}return l!==null&&(l.visible=r!==null),a!==null&&(a.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new aa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class TA extends gn{constructor(e,n,i,r,s,o,l,a,u,c){if(c=c!==void 0?c:Er,c!==Er&&c!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Er&&(i=Fi),i===void 0&&c===bs&&(i=Mr),super(null,r,s,o,l,a,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=l!==void 0?l:Jt,this.minFilter=a!==void 0?a:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class AA extends Is{constructor(e,n){super();const i=this;let r=null,s=1,o=null,l="local-floor",a=1,u=null,c=null,d=null,f=null,p=null,v=null;const y=n.getContextAttributes();let m=null,h=null;const g=[],_=[],x=new An;x.layers.enable(1),x.viewport=new bt;const w=new An;w.layers.enable(2),w.viewport=new bt;const R=[x,w],A=new EA;A.layers.enable(1),A.layers.enable(2);let U=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(C){let I=g[C];return I===void 0&&(I=new tc,g[C]=I),I.getTargetRaySpace()},this.getControllerGrip=function(C){let I=g[C];return I===void 0&&(I=new tc,g[C]=I),I.getGripSpace()},this.getHand=function(C){let I=g[C];return I===void 0&&(I=new tc,g[C]=I),I.getHandSpace()};function T(C){const I=_.indexOf(C.inputSource);if(I===-1)return;const ue=g[I];ue!==void 0&&(ue.update(C.inputSource,C.frame,u||o),ue.dispatchEvent({type:C.type,data:C.inputSource}))}function q(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",$);for(let C=0;C<g.length;C++){const I=_[C];I!==null&&(_[C]=null,g[C].disconnect(I))}U=null,M=null,e.setRenderTarget(m),p=null,f=null,d=null,r=null,h=null,B.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(C){s=C,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(C){l=C,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(C){u=C},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(C){if(r=C,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",q),r.addEventListener("inputsourceschange",$),y.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const I={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,I),r.updateRenderState({baseLayer:p}),h=new Lr(p.framebufferWidth,p.framebufferHeight,{format:Hn,type:Ji,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let I=null,ue=null,ce=null;y.depth&&(ce=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,I=y.stencil?bs:Er,ue=y.stencil?Mr:Fi);const me={colorFormat:n.RGBA8,depthFormat:ce,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(me),r.updateRenderState({layers:[f]}),h=new Lr(f.textureWidth,f.textureHeight,{format:Hn,type:Ji,depthTexture:new TA(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,I),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const ye=e.properties.get(h);ye.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(a),u=null,o=await r.requestReferenceSpace(l),B.setContext(r),B.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function $(C){for(let I=0;I<C.removed.length;I++){const ue=C.removed[I],ce=_.indexOf(ue);ce>=0&&(_[ce]=null,g[ce].disconnect(ue))}for(let I=0;I<C.added.length;I++){const ue=C.added[I];let ce=_.indexOf(ue);if(ce===-1){for(let ye=0;ye<g.length;ye++)if(ye>=_.length){_.push(ue),ce=ye;break}else if(_[ye]===null){_[ye]=ue,ce=ye;break}if(ce===-1)break}const me=g[ce];me&&me.connect(ue)}}const K=new F,L=new F;function j(C,I,ue){K.setFromMatrixPosition(I.matrixWorld),L.setFromMatrixPosition(ue.matrixWorld);const ce=K.distanceTo(L),me=I.projectionMatrix.elements,ye=ue.projectionMatrix.elements,Ne=me[14]/(me[10]-1),Re=me[14]/(me[10]+1),De=(me[9]+1)/me[5],ut=(me[9]-1)/me[5],Fe=(me[8]-1)/me[0],O=(ye[8]+1)/ye[0],un=Ne*Fe,xe=Ne*O,be=ce/(-Fe+O),Pe=be*-Fe;I.matrixWorld.decompose(C.position,C.quaternion,C.scale),C.translateX(Pe),C.translateZ(be),C.matrixWorld.compose(C.position,C.quaternion,C.scale),C.matrixWorldInverse.copy(C.matrixWorld).invert();const ct=Ne+be,ke=Re+be,Be=un-Pe,Qe=xe+(ce-Pe),Tt=De*Re/ke*ct,Ot=ut*Re/ke*ct;C.projectionMatrix.makePerspective(Be,Qe,Tt,Ot,ct,ke),C.projectionMatrixInverse.copy(C.projectionMatrix).invert()}function J(C,I){I===null?C.matrixWorld.copy(C.matrix):C.matrixWorld.multiplyMatrices(I.matrixWorld,C.matrix),C.matrixWorldInverse.copy(C.matrixWorld).invert()}this.updateCamera=function(C){if(r===null)return;A.near=w.near=x.near=C.near,A.far=w.far=x.far=C.far,(U!==A.near||M!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),U=A.near,M=A.far);const I=C.parent,ue=A.cameras;J(A,I);for(let ce=0;ce<ue.length;ce++)J(ue[ce],I);ue.length===2?j(A,x,w):A.projectionMatrix.copy(x.projectionMatrix),Y(C,A,I)};function Y(C,I,ue){ue===null?C.matrix.copy(I.matrixWorld):(C.matrix.copy(ue.matrixWorld),C.matrix.invert(),C.matrix.multiply(I.matrixWorld)),C.matrix.decompose(C.position,C.quaternion,C.scale),C.updateMatrixWorld(!0),C.projectionMatrix.copy(I.projectionMatrix),C.projectionMatrixInverse.copy(I.projectionMatrixInverse),C.isPerspectiveCamera&&(C.fov=rd*2*Math.atan(1/C.projectionMatrix.elements[5]),C.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(f===null&&p===null))return a},this.setFoveation=function(C){a=C,f!==null&&(f.fixedFoveation=C),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=C)};let D=null;function G(C,I){if(c=I.getViewerPose(u||o),v=I,c!==null){const ue=c.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let ce=!1;ue.length!==A.cameras.length&&(A.cameras.length=0,ce=!0);for(let me=0;me<ue.length;me++){const ye=ue[me];let Ne=null;if(p!==null)Ne=p.getViewport(ye);else{const De=d.getViewSubImage(f,ye);Ne=De.viewport,me===0&&(e.setRenderTargetTextures(h,De.colorTexture,f.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(h))}let Re=R[me];Re===void 0&&(Re=new An,Re.layers.enable(me),Re.viewport=new bt,R[me]=Re),Re.matrix.fromArray(ye.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(ye.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),me===0&&(A.matrix.copy(Re.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ce===!0&&A.cameras.push(Re)}}for(let ue=0;ue<g.length;ue++){const ce=_[ue],me=g[ue];ce!==null&&me!==void 0&&me.update(ce,I,u||o)}D&&D(C,I),I.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:I}),v=null}const B=new Zg;B.setAnimationLoop(G),this.setAnimationLoop=function(C){D=C},this.dispose=function(){}}}function PA(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Jg(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,g,_,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),c(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,x)):h.isMeshMatcapMaterial?(s(m,h),v(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),y(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&l(m,h)):h.isPointsMaterial?a(m,h,g,_):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===ln&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===ln&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const g=e.get(h).envMap;if(g&&(m.envMap.value=g,m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const _=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*_,n(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function l(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function a(m,h,g,_){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*g,m.scale.value=_*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,g){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ln&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function y(m,h){const g=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function RA(t,e,n,i){let r={},s={},o=[];const l=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function a(g,_){const x=_.program;i.uniformBlockBinding(g,x)}function u(g,_){let x=r[g.id];x===void 0&&(v(g),x=c(g),r[g.id]=x,g.addEventListener("dispose",m));const w=_.program;i.updateUBOMapping(g,w);const R=e.render.frame;s[g.id]!==R&&(f(g),s[g.id]=R)}function c(g){const _=d();g.__bindingPointIndex=_;const x=t.createBuffer(),w=g.__size,R=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,w,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,x),x}function d(){for(let g=0;g<l;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const _=r[g.id],x=g.uniforms,w=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let R=0,A=x.length;R<A;R++){const U=x[R];if(p(U,R,w)===!0){const M=U.__offset,T=Array.isArray(U.value)?U.value:[U.value];let q=0;for(let $=0;$<T.length;$++){const K=T[$],L=y(K);typeof K=="number"?(U.__data[0]=K,t.bufferSubData(t.UNIFORM_BUFFER,M+q,U.__data)):K.isMatrix3?(U.__data[0]=K.elements[0],U.__data[1]=K.elements[1],U.__data[2]=K.elements[2],U.__data[3]=K.elements[0],U.__data[4]=K.elements[3],U.__data[5]=K.elements[4],U.__data[6]=K.elements[5],U.__data[7]=K.elements[0],U.__data[8]=K.elements[6],U.__data[9]=K.elements[7],U.__data[10]=K.elements[8],U.__data[11]=K.elements[0]):(K.toArray(U.__data,q),q+=L.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,M,U.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,_,x){const w=g.value;if(x[_]===void 0){if(typeof w=="number")x[_]=w;else{const R=Array.isArray(w)?w:[w],A=[];for(let U=0;U<R.length;U++)A.push(R[U].clone());x[_]=A}return!0}else if(typeof w=="number"){if(x[_]!==w)return x[_]=w,!0}else{const R=Array.isArray(x[_])?x[_]:[x[_]],A=Array.isArray(w)?w:[w];for(let U=0;U<R.length;U++){const M=R[U];if(M.equals(A[U])===!1)return M.copy(A[U]),!0}}return!1}function v(g){const _=g.uniforms;let x=0;const w=16;let R=0;for(let A=0,U=_.length;A<U;A++){const M=_[A],T={boundary:0,storage:0},q=Array.isArray(M.value)?M.value:[M.value];for(let $=0,K=q.length;$<K;$++){const L=q[$],j=y(L);T.boundary+=j.boundary,T.storage+=j.storage}if(M.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=x,A>0){R=x%w;const $=w-R;R!==0&&$-T.boundary<0&&(x+=w-R,M.__offset=x)}x+=T.storage}return R=x%w,R>0&&(x+=w-R),g.__size=x,g.__cache={},this}function y(g){const _={boundary:0,storage:0};return typeof g=="number"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){const _=g.target;_.removeEventListener("dispose",m);const x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function h(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:a,update:u,dispose:h}}class rv{constructor(e={}){const{canvas:n=AS(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:l=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const p=new Uint32Array(4),v=new Int32Array(4);let y=null,m=null;const h=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nt,this._useLegacyLights=!1,this.toneMapping=Yi,this.toneMappingExposure=1;const _=this;let x=!1,w=0,R=0,A=null,U=-1,M=null;const T=new bt,q=new bt;let $=null;const K=new qe(0);let L=0,j=n.width,J=n.height,Y=1,D=null,G=null;const B=new bt(0,0,j,J),C=new bt(0,0,j,J);let I=!1;const ue=new cf;let ce=!1,me=!1,ye=null;const Ne=new St,Re=new Je,De=new F,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Fe(){return A===null?Y:1}let O=i;function un(E,N){for(let z=0;z<E.length;z++){const H=E[z],V=n.getContext(H,N);if(V!==null)return V}return null}try{const E={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:a,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${sf}`),n.addEventListener("webglcontextlost",We,!1),n.addEventListener("webglcontextrestored",b,!1),n.addEventListener("webglcontextcreationerror",de,!1),O===null){const N=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&N.shift(),O=un(N,E),O===null)throw un(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let xe,be,Pe,ct,ke,Be,Qe,Tt,Ot,P,S,k,ie,ee,re,ge,oe,fe,we,Xe,te,Ke,Ce,Te;function Se(){xe=new kw(O),be=new Uw(O,xe,e),xe.init(be),Ke=new MA(O,xe,be),Pe=new xA(O,xe,be),ct=new Gw(O),ke=new aA,Be=new SA(O,xe,Pe,ke,be,Ke,ct),Qe=new Dw(_),Tt=new Fw(_),Ot=new KS(O,be),Ce=new Cw(O,xe,Ot,be),P=new Bw(O,Ot,ct,Ce),S=new jw(O,P,Ot,ct),we=new Ww(O,be,Be),ge=new Nw(ke),k=new sA(_,Qe,Tt,xe,be,Ce,ge),ie=new PA(_,ke),ee=new lA,re=new pA(xe,be),fe=new bw(_,Qe,Tt,Pe,S,f,a),oe=new yA(_,S,be),Te=new RA(O,ct,be,Pe),Xe=new Lw(O,xe,ct,be),te=new zw(O,xe,ct,be),ct.programs=k.programs,_.capabilities=be,_.extensions=xe,_.properties=ke,_.renderLists=ee,_.shadowMap=oe,_.state=Pe,_.info=ct}Se();const _e=new AA(_,O);this.xr=_e,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const E=xe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=xe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(E){E!==void 0&&(Y=E,this.setSize(j,J,!1))},this.getSize=function(E){return E.set(j,J)},this.setSize=function(E,N,z=!0){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=E,J=N,n.width=Math.floor(E*Y),n.height=Math.floor(N*Y),z===!0&&(n.style.width=E+"px",n.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(j*Y,J*Y).floor()},this.setDrawingBufferSize=function(E,N,z){j=E,J=N,Y=z,n.width=Math.floor(E*z),n.height=Math.floor(N*z),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(B)},this.setViewport=function(E,N,z,H){E.isVector4?B.set(E.x,E.y,E.z,E.w):B.set(E,N,z,H),Pe.viewport(T.copy(B).multiplyScalar(Y).floor())},this.getScissor=function(E){return E.copy(C)},this.setScissor=function(E,N,z,H){E.isVector4?C.set(E.x,E.y,E.z,E.w):C.set(E,N,z,H),Pe.scissor(q.copy(C).multiplyScalar(Y).floor())},this.getScissorTest=function(){return I},this.setScissorTest=function(E){Pe.setScissorTest(I=E)},this.setOpaqueSort=function(E){D=E},this.setTransparentSort=function(E){G=E},this.getClearColor=function(E){return E.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor.apply(fe,arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha.apply(fe,arguments)},this.clear=function(E=!0,N=!0,z=!0){let H=0;if(E){let V=!1;if(A!==null){const he=A.texture.format;V=he===Fg||he===Og||he===Ig}if(V){const he=A.texture.type,ve=he===Ji||he===Fi||he===af||he===Mr||he===Ng||he===Dg,Ee=fe.getClearColor(),Ae=fe.getClearAlpha(),Oe=Ee.r,Le=Ee.g,Ue=Ee.b;ve?(p[0]=Oe,p[1]=Le,p[2]=Ue,p[3]=Ae,O.clearBufferuiv(O.COLOR,0,p)):(v[0]=Oe,v[1]=Le,v[2]=Ue,v[3]=Ae,O.clearBufferiv(O.COLOR,0,v))}else H|=O.COLOR_BUFFER_BIT}N&&(H|=O.DEPTH_BUFFER_BIT),z&&(H|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",We,!1),n.removeEventListener("webglcontextrestored",b,!1),n.removeEventListener("webglcontextcreationerror",de,!1),ee.dispose(),re.dispose(),ke.dispose(),Qe.dispose(),Tt.dispose(),S.dispose(),Ce.dispose(),Te.dispose(),k.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Sn),_e.removeEventListener("sessionend",et),ye&&(ye.dispose(),ye=null),jt.stop()};function We(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function b(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const E=ct.autoReset,N=oe.enabled,z=oe.autoUpdate,H=oe.needsUpdate,V=oe.type;Se(),ct.autoReset=E,oe.enabled=N,oe.autoUpdate=z,oe.needsUpdate=H,oe.type=V}function de(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function se(E){const N=E.target;N.removeEventListener("dispose",se),X(N)}function X(E){ae(E),ke.remove(E)}function ae(E){const N=ke.get(E).programs;N!==void 0&&(N.forEach(function(z){k.releaseProgram(z)}),E.isShaderMaterial&&k.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,z,H,V,he){N===null&&(N=ut);const ve=V.isMesh&&V.matrixWorld.determinant()<0,Ee=ov(E,N,z,H,V);Pe.setMaterial(H,ve);let Ae=z.index,Oe=1;if(H.wireframe===!0){if(Ae=P.getWireframeAttribute(z),Ae===void 0)return;Oe=2}const Le=z.drawRange,Ue=z.attributes.position;let ht=Le.start*Oe,cn=(Le.start+Le.count)*Oe;he!==null&&(ht=Math.max(ht,he.start*Oe),cn=Math.min(cn,(he.start+he.count)*Oe)),Ae!==null?(ht=Math.max(ht,0),cn=Math.min(cn,Ae.count)):Ue!=null&&(ht=Math.max(ht,0),cn=Math.min(cn,Ue.count));const At=cn-ht;if(At<0||At===1/0)return;Ce.setup(V,H,Ee,z,Ae);let ri,dt=Xe;if(Ae!==null&&(ri=Ot.get(Ae),dt=te,dt.setIndex(ri)),V.isMesh)H.wireframe===!0?(Pe.setLineWidth(H.wireframeLinewidth*Fe()),dt.setMode(O.LINES)):dt.setMode(O.TRIANGLES);else if(V.isLine){let Ve=H.linewidth;Ve===void 0&&(Ve=1),Pe.setLineWidth(Ve*Fe()),V.isLineSegments?dt.setMode(O.LINES):V.isLineLoop?dt.setMode(O.LINE_LOOP):dt.setMode(O.LINE_STRIP)}else V.isPoints?dt.setMode(O.POINTS):V.isSprite&&dt.setMode(O.TRIANGLES);if(V.isInstancedMesh)dt.renderInstances(ht,At,V.count);else if(z.isInstancedBufferGeometry){const Ve=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Yl=Math.min(z.instanceCount,Ve);dt.renderInstances(ht,At,Yl)}else dt.render(ht,At)};function Me(E,N,z){E.transparent===!0&&E.side===hi&&E.forceSinglePass===!1?(E.side=ln,E.needsUpdate=!0,Ya(E,N,z),E.side=Qi,E.needsUpdate=!0,Ya(E,N,z),E.side=hi):Ya(E,N,z)}this.compile=function(E,N,z=null){z===null&&(z=E),m=re.get(z),m.init(),g.push(m),z.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),E!==z&&E.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(_._useLegacyLights);const H=new Set;return E.traverse(function(V){const he=V.material;if(he)if(Array.isArray(he))for(let ve=0;ve<he.length;ve++){const Ee=he[ve];Me(Ee,z,V),H.add(Ee)}else Me(he,z,V),H.add(he)}),g.pop(),m=null,H},this.compileAsync=function(E,N,z=null){const H=this.compile(E,N,z);return new Promise(V=>{function he(){if(H.forEach(function(ve){ke.get(ve).currentProgram.isReady()&&H.delete(ve)}),H.size===0){V(E);return}setTimeout(he,10)}xe.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Ye=null;function mt(E){Ye&&Ye(E)}function Sn(){jt.stop()}function et(){jt.start()}const jt=new Zg;jt.setAnimationLoop(mt),typeof self<"u"&&jt.setContext(self),this.setAnimationLoop=function(E){Ye=E,_e.setAnimationLoop(E),E===null?jt.stop():jt.start()},_e.addEventListener("sessionstart",Sn),_e.addEventListener("sessionend",et),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(N),N=_e.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,N,A),m=re.get(E,g.length),m.init(),g.push(m),Ne.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ue.setFromProjectionMatrix(Ne),me=this.localClippingEnabled,ce=ge.init(this.clippingPlanes,me),y=ee.get(E,h.length),y.init(),h.push(y),qn(E,N,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(D,G),this.info.render.frame++,ce===!0&&ge.beginShadows();const z=m.state.shadowsArray;if(oe.render(z,E,N),ce===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),fe.render(y,E),m.setupLights(_._useLegacyLights),N.isArrayCamera){const H=N.cameras;for(let V=0,he=H.length;V<he;V++){const ve=H[V];pf(y,E,ve,ve.viewport)}}else pf(y,E,N);A!==null&&(Be.updateMultisampleRenderTarget(A),Be.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(_,E,N),Ce.resetDefaultState(),U=-1,M=null,g.pop(),g.length>0?m=g[g.length-1]:m=null,h.pop(),h.length>0?y=h[h.length-1]:y=null};function qn(E,N,z,H){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ue.intersectsSprite(E)){H&&De.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ne);const ve=S.update(E),Ee=E.material;Ee.visible&&y.push(E,ve,Ee,z,De.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ue.intersectsObject(E))){const ve=S.update(E),Ee=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),De.copy(E.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),De.copy(ve.boundingSphere.center)),De.applyMatrix4(E.matrixWorld).applyMatrix4(Ne)),Array.isArray(Ee)){const Ae=ve.groups;for(let Oe=0,Le=Ae.length;Oe<Le;Oe++){const Ue=Ae[Oe],ht=Ee[Ue.materialIndex];ht&&ht.visible&&y.push(E,ve,ht,z,De.z,Ue)}}else Ee.visible&&y.push(E,ve,Ee,z,De.z,null)}}const he=E.children;for(let ve=0,Ee=he.length;ve<Ee;ve++)qn(he[ve],N,z,H)}function pf(E,N,z,H){const V=E.opaque,he=E.transmissive,ve=E.transparent;m.setupLightsView(z),ce===!0&&ge.setGlobalState(_.clippingPlanes,z),he.length>0&&av(V,he,N,z),H&&Pe.viewport(T.copy(H)),V.length>0&&Xa(V,N,z),he.length>0&&Xa(he,N,z),ve.length>0&&Xa(ve,N,z),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function av(E,N,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;const he=be.isWebGL2;ye===null&&(ye=new Lr(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?Oa:Ji,minFilter:Ia,samples:he?4:0})),_.getDrawingBufferSize(Re),he?ye.setSize(Re.x,Re.y):ye.setSize(sd(Re.x),sd(Re.y));const ve=_.getRenderTarget();_.setRenderTarget(ye),_.getClearColor(K),L=_.getClearAlpha(),L<1&&_.setClearColor(16777215,.5),_.clear();const Ee=_.toneMapping;_.toneMapping=Yi,Xa(E,z,H),Be.updateMultisampleRenderTarget(ye),Be.updateRenderTargetMipmap(ye);let Ae=!1;for(let Oe=0,Le=N.length;Oe<Le;Oe++){const Ue=N[Oe],ht=Ue.object,cn=Ue.geometry,At=Ue.material,ri=Ue.group;if(At.side===hi&&ht.layers.test(H.layers)){const dt=At.side;At.side=ln,At.needsUpdate=!0,mf(ht,z,H,cn,At,ri),At.side=dt,At.needsUpdate=!0,Ae=!0}}Ae===!0&&(Be.updateMultisampleRenderTarget(ye),Be.updateRenderTargetMipmap(ye)),_.setRenderTarget(ve),_.setClearColor(K,L),_.toneMapping=Ee}function Xa(E,N,z){const H=N.isScene===!0?N.overrideMaterial:null;for(let V=0,he=E.length;V<he;V++){const ve=E[V],Ee=ve.object,Ae=ve.geometry,Oe=H===null?ve.material:H,Le=ve.group;Ee.layers.test(z.layers)&&mf(Ee,N,z,Ae,Oe,Le)}}function mf(E,N,z,H,V,he){E.onBeforeRender(_,N,z,H,V,he),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(_,N,z,H,E,he),V.transparent===!0&&V.side===hi&&V.forceSinglePass===!1?(V.side=ln,V.needsUpdate=!0,_.renderBufferDirect(z,N,H,V,E,he),V.side=Qi,V.needsUpdate=!0,_.renderBufferDirect(z,N,H,V,E,he),V.side=hi):_.renderBufferDirect(z,N,H,V,E,he),E.onAfterRender(_,N,z,H,V,he)}function Ya(E,N,z){N.isScene!==!0&&(N=ut);const H=ke.get(E),V=m.state.lights,he=m.state.shadowsArray,ve=V.state.version,Ee=k.getParameters(E,V.state,he,N,z),Ae=k.getProgramCacheKey(Ee);let Oe=H.programs;H.environment=E.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(E.isMeshStandardMaterial?Tt:Qe).get(E.envMap||H.environment),Oe===void 0&&(E.addEventListener("dispose",se),Oe=new Map,H.programs=Oe);let Le=Oe.get(Ae);if(Le!==void 0){if(H.currentProgram===Le&&H.lightsStateVersion===ve)return gf(E,Ee),Le}else Ee.uniforms=k.getUniforms(E),E.onBuild(z,Ee,_),E.onBeforeCompile(Ee,_),Le=k.acquireProgram(Ee,Ae),Oe.set(Ae,Le),H.uniforms=Ee.uniforms;const Ue=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ue.clippingPlanes=ge.uniform),gf(E,Ee),H.needsLights=uv(E),H.lightsStateVersion=ve,H.needsLights&&(Ue.ambientLightColor.value=V.state.ambient,Ue.lightProbe.value=V.state.probe,Ue.directionalLights.value=V.state.directional,Ue.directionalLightShadows.value=V.state.directionalShadow,Ue.spotLights.value=V.state.spot,Ue.spotLightShadows.value=V.state.spotShadow,Ue.rectAreaLights.value=V.state.rectArea,Ue.ltc_1.value=V.state.rectAreaLTC1,Ue.ltc_2.value=V.state.rectAreaLTC2,Ue.pointLights.value=V.state.point,Ue.pointLightShadows.value=V.state.pointShadow,Ue.hemisphereLights.value=V.state.hemi,Ue.directionalShadowMap.value=V.state.directionalShadowMap,Ue.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ue.spotShadowMap.value=V.state.spotShadowMap,Ue.spotLightMatrix.value=V.state.spotLightMatrix,Ue.spotLightMap.value=V.state.spotLightMap,Ue.pointShadowMap.value=V.state.pointShadowMap,Ue.pointShadowMatrix.value=V.state.pointShadowMatrix),H.currentProgram=Le,H.uniformsList=null,Le}function _f(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=Jo.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function gf(E,N){const z=ke.get(E);z.outputColorSpace=N.outputColorSpace,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function ov(E,N,z,H,V){N.isScene!==!0&&(N=ut),Be.resetTextureUnits();const he=N.fog,ve=H.isMeshStandardMaterial?N.environment:null,Ee=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ei,Ae=(H.isMeshStandardMaterial?Tt:Qe).get(H.envMap||ve),Oe=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Le=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ue=!!z.morphAttributes.position,ht=!!z.morphAttributes.normal,cn=!!z.morphAttributes.color;let At=Yi;H.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(At=_.toneMapping);const ri=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,dt=ri!==void 0?ri.length:0,Ve=ke.get(H),Yl=m.state.lights;if(ce===!0&&(me===!0||E!==M)){const dn=E===M&&H.id===U;ge.setState(H,E,dn)}let _t=!1;H.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Yl.state.version||Ve.outputColorSpace!==Ee||V.isInstancedMesh&&Ve.instancing===!1||!V.isInstancedMesh&&Ve.instancing===!0||V.isSkinnedMesh&&Ve.skinning===!1||!V.isSkinnedMesh&&Ve.skinning===!0||V.isInstancedMesh&&Ve.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ve.instancingColor===!1&&V.instanceColor!==null||Ve.envMap!==Ae||H.fog===!0&&Ve.fog!==he||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==ge.numPlanes||Ve.numIntersection!==ge.numIntersection)||Ve.vertexAlphas!==Oe||Ve.vertexTangents!==Le||Ve.morphTargets!==Ue||Ve.morphNormals!==ht||Ve.morphColors!==cn||Ve.toneMapping!==At||be.isWebGL2===!0&&Ve.morphTargetsCount!==dt)&&(_t=!0):(_t=!0,Ve.__version=H.version);let rr=Ve.currentProgram;_t===!0&&(rr=Ya(H,N,V));let vf=!1,Fs=!1,Jl=!1;const qt=rr.getUniforms(),sr=Ve.uniforms;if(Pe.useProgram(rr.program)&&(vf=!0,Fs=!0,Jl=!0),H.id!==U&&(U=H.id,Fs=!0),vf||M!==E){qt.setValue(O,"projectionMatrix",E.projectionMatrix),qt.setValue(O,"viewMatrix",E.matrixWorldInverse);const dn=qt.map.cameraPosition;dn!==void 0&&dn.setValue(O,De.setFromMatrixPosition(E.matrixWorld)),be.logarithmicDepthBuffer&&qt.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&qt.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Fs=!0,Jl=!0)}if(V.isSkinnedMesh){qt.setOptional(O,V,"bindMatrix"),qt.setOptional(O,V,"bindMatrixInverse");const dn=V.skeleton;dn&&(be.floatVertexTextures?(dn.boneTexture===null&&dn.computeBoneTexture(),qt.setValue(O,"boneTexture",dn.boneTexture,Be),qt.setValue(O,"boneTextureSize",dn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const $l=z.morphAttributes;if(($l.position!==void 0||$l.normal!==void 0||$l.color!==void 0&&be.isWebGL2===!0)&&we.update(V,z,rr),(Fs||Ve.receiveShadow!==V.receiveShadow)&&(Ve.receiveShadow=V.receiveShadow,qt.setValue(O,"receiveShadow",V.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(sr.envMap.value=Ae,sr.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),Fs&&(qt.setValue(O,"toneMappingExposure",_.toneMappingExposure),Ve.needsLights&&lv(sr,Jl),he&&H.fog===!0&&ie.refreshFogUniforms(sr,he),ie.refreshMaterialUniforms(sr,H,Y,J,ye),Jo.upload(O,_f(Ve),sr,Be)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Jo.upload(O,_f(Ve),sr,Be),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&qt.setValue(O,"center",V.center),qt.setValue(O,"modelViewMatrix",V.modelViewMatrix),qt.setValue(O,"normalMatrix",V.normalMatrix),qt.setValue(O,"modelMatrix",V.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const dn=H.uniformsGroups;for(let Kl=0,cv=dn.length;Kl<cv;Kl++)if(be.isWebGL2){const yf=dn[Kl];Te.update(yf,rr),Te.bind(yf,rr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return rr}function lv(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function uv(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,N,z){ke.get(E.texture).__webglTexture=N,ke.get(E.depthTexture).__webglTexture=z;const H=ke.get(E);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,N){const z=ke.get(E);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,z=0){A=E,w=N,R=z;let H=!0,V=null,he=!1,ve=!1;if(E){const Ae=ke.get(E);Ae.__useDefaultFramebuffer!==void 0?(Pe.bindFramebuffer(O.FRAMEBUFFER,null),H=!1):Ae.__webglFramebuffer===void 0?Be.setupRenderTarget(E):Ae.__hasExternalTextures&&Be.rebindTextures(E,ke.get(E.texture).__webglTexture,ke.get(E.depthTexture).__webglTexture);const Oe=E.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ve=!0);const Le=ke.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Le[N])?V=Le[N][z]:V=Le[N],he=!0):be.isWebGL2&&E.samples>0&&Be.useMultisampledRTT(E)===!1?V=ke.get(E).__webglMultisampledFramebuffer:Array.isArray(Le)?V=Le[z]:V=Le,T.copy(E.viewport),q.copy(E.scissor),$=E.scissorTest}else T.copy(B).multiplyScalar(Y).floor(),q.copy(C).multiplyScalar(Y).floor(),$=I;if(Pe.bindFramebuffer(O.FRAMEBUFFER,V)&&be.drawBuffers&&H&&Pe.drawBuffers(E,V),Pe.viewport(T),Pe.scissor(q),Pe.setScissorTest($),he){const Ae=ke.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ae.__webglTexture,z)}else if(ve){const Ae=ke.get(E.texture),Oe=N||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ae.__webglTexture,z||0,Oe)}U=-1},this.readRenderTargetPixels=function(E,N,z,H,V,he,ve){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=ke.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ve!==void 0&&(Ee=Ee[ve]),Ee){Pe.bindFramebuffer(O.FRAMEBUFFER,Ee);try{const Ae=E.texture,Oe=Ae.format,Le=Ae.type;if(Oe!==Hn&&Ke.convert(Oe)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=Le===Oa&&(xe.has("EXT_color_buffer_half_float")||be.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Le!==Ji&&Ke.convert(Le)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Le===ki&&(be.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-H&&z>=0&&z<=E.height-V&&O.readPixels(N,z,H,V,Ke.convert(Oe),Ke.convert(Le),he)}finally{const Ae=A!==null?ke.get(A).__webglFramebuffer:null;Pe.bindFramebuffer(O.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(E,N,z=0){const H=Math.pow(2,-z),V=Math.floor(N.image.width*H),he=Math.floor(N.image.height*H);Be.setTexture2D(N,0),O.copyTexSubImage2D(O.TEXTURE_2D,z,0,0,E.x,E.y,V,he),Pe.unbindTexture()},this.copyTextureToTexture=function(E,N,z,H=0){const V=N.image.width,he=N.image.height,ve=Ke.convert(z.format),Ee=Ke.convert(z.type);Be.setTexture2D(z,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment),N.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,H,E.x,E.y,V,he,ve,Ee,N.image.data):N.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,H,E.x,E.y,N.mipmaps[0].width,N.mipmaps[0].height,ve,N.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,H,E.x,E.y,ve,Ee,N.image),H===0&&z.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(E,N,z,H,V=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=E.max.x-E.min.x+1,ve=E.max.y-E.min.y+1,Ee=E.max.z-E.min.z+1,Ae=Ke.convert(H.format),Oe=Ke.convert(H.type);let Le;if(H.isData3DTexture)Be.setTexture3D(H,0),Le=O.TEXTURE_3D;else if(H.isDataArrayTexture)Be.setTexture2DArray(H,0),Le=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment);const Ue=O.getParameter(O.UNPACK_ROW_LENGTH),ht=O.getParameter(O.UNPACK_IMAGE_HEIGHT),cn=O.getParameter(O.UNPACK_SKIP_PIXELS),At=O.getParameter(O.UNPACK_SKIP_ROWS),ri=O.getParameter(O.UNPACK_SKIP_IMAGES),dt=z.isCompressedTexture?z.mipmaps[0]:z.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,dt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,dt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,E.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,E.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,E.min.z),z.isDataTexture||z.isData3DTexture?O.texSubImage3D(Le,V,N.x,N.y,N.z,he,ve,Ee,Ae,Oe,dt.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Le,V,N.x,N.y,N.z,he,ve,Ee,Ae,dt.data)):O.texSubImage3D(Le,V,N.x,N.y,N.z,he,ve,Ee,Ae,Oe,dt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ue),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ht),O.pixelStorei(O.UNPACK_SKIP_PIXELS,cn),O.pixelStorei(O.UNPACK_SKIP_ROWS,At),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ri),V===0&&H.generateMipmaps&&O.generateMipmap(Le),Pe.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Be.setTextureCube(E,0):E.isData3DTexture?Be.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Be.setTexture2DArray(E,0):Be.setTexture2D(E,0),Pe.unbindTexture()},this.resetState=function(){w=0,R=0,A=null,Pe.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===of?"display-p3":"srgb",n.unpackColorSpace=Ze.workingColorSpace===jl?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Nt?wr:kg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===wr?Nt:Ei}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class bA extends rv{}bA.prototype.isWebGL1Renderer=!0;class CA extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class hf extends ir{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],l=[],a=[],u=[],c=new F,d=new F,f=new F;for(let p=0;p<=i;p++)for(let v=0;v<=r;v++){const y=v/r*s,m=p/i*Math.PI*2;d.x=(e+n*Math.cos(m))*Math.cos(y),d.y=(e+n*Math.cos(m))*Math.sin(y),d.z=n*Math.sin(m),l.push(d.x,d.y,d.z),c.x=e*Math.cos(y),c.y=e*Math.sin(y),f.subVectors(d,c).normalize(),a.push(f.x,f.y,f.z),u.push(v/r),u.push(p/i)}for(let p=1;p<=i;p++)for(let v=1;v<=r;v++){const y=(r+1)*p+v-1,m=(r+1)*(p-1)+v-1,h=(r+1)*(p-1)+v,g=(r+1)*p+v;o.push(y,m,g),o.push(m,h,g)}this.setIndex(o),this.setAttribute("position",new ni(l,3)),this.setAttribute("normal",new ni(a,3)),this.setAttribute("uv",new ni(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class nc extends qa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bg,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sv extends Vt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const ic=new St,om=new F,lm=new F;class LA{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cf,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;om.setFromMatrixPosition(e.matrixWorld),n.position.copy(om),lm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(lm),n.updateMatrixWorld(),ic.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ic),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ic)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class UA extends LA{constructor(){super(new Qg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class NA extends sv{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new UA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class DA extends sv{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class IA{constructor(e,n,i=0,r=1/0){this.ray=new Wg(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new uf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return od(e,this,i,n),i.sort(um),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)od(e[r],this,i,n);return i.sort(um),i}}function um(t,e){return t.distance-e.distance}function od(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)od(r[s],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sf);function OA({board:t,onCellClick:e,disabled:n,currentPlayer:i}){const r=Ge.useRef(null),s=Ge.useRef(null),o=Ge.useRef(null),l=Ge.useRef(null),a=Ge.useRef([]),u=Ge.useRef(new IA),c=Ge.useRef(new Je);Ge.useEffect(()=>{if(!r.current)return;const f=new CA;s.current=f;const p=document.documentElement.getAttribute("data-theme")==="dark";f.background=new qe(p?1710638:15790320);const v=new An(50,r.current.clientWidth/r.current.clientHeight,.1,1e3);v.position.set(0,5,7),v.lookAt(0,0,0),o.current=v;const y=new rv({antialias:!0});y.setSize(r.current.clientWidth,r.current.clientHeight),y.shadowMap.enabled=!0,r.current.appendChild(y.domElement),l.current=y;const m=new DA(16777215,.6);f.add(m);const h=new NA(16777215,.8);h.position.set(5,10,5),h.castShadow=!0,f.add(h);const g=3,_=1,x=.1;for(let A=0;A<9;A++){const U=Math.floor(A/g),T=(A%g-1)*(_+x),q=(U-1)*(_+x),$=new $i(_,.1,_),K=new nc({color:p?1450302:14540253,metalness:.3,roughness:.7}),L=new bn($,K);L.position.set(T,0,q),L.receiveShadow=!0,L.userData={index:A},f.add(L),a.current.push(L)}const w=()=>{requestAnimationFrame(w),y.render(f,v)};w();const R=()=>{r.current&&(v.aspect=r.current.clientWidth/r.current.clientHeight,v.updateProjectionMatrix(),y.setSize(r.current.clientWidth,r.current.clientHeight))};return window.addEventListener("resize",R),()=>{window.removeEventListener("resize",R),y.dispose(),r.current&&y.domElement.parentNode===r.current&&r.current.removeChild(y.domElement)}},[]),Ge.useEffect(()=>{if(!s.current)return;const f=s.current;f.children.filter(p=>p.userData.symbol).forEach(p=>{f.remove(p)}),t.forEach((p,v)=>{if(p){const y=a.current[v];if(!y)return;const m=document.documentElement.getAttribute("data-theme")==="dark";if(p==="X"){const h=new aa,g=new nc({color:m?16739179:16729156,metalness:.5,roughness:.5}),_=new bn(new $i(.1,.6,.6),g);_.rotation.y=Math.PI/4,_.castShadow=!0;const x=new bn(new $i(.1,.6,.6),g);x.rotation.y=-Math.PI/4,x.castShadow=!0,h.add(_),h.add(x),h.position.copy(y.position),h.position.y=.3,h.userData.symbol="X",f.add(h)}else if(p==="O"){const h=new hf(.25,.08,16,32),g=new nc({color:m?5164484:43775,metalness:.5,roughness:.5}),_=new bn(h,g);_.position.copy(y.position),_.position.y=.3,_.rotation.x=Math.PI/2,_.castShadow=!0,_.userData.symbol="O",f.add(_)}}})},[t]);const d=f=>{if(n)return;const p=r.current.getBoundingClientRect();c.current.x=(f.clientX-p.left)/p.width*2-1,c.current.y=-((f.clientY-p.top)/p.height)*2+1,u.current.setFromCamera(c.current,o.current);const v=u.current.intersectObjects(a.current);if(v.length>0){const y=v[0].object.userData.index;t[y]===""&&e(y)}};return W.jsx("div",{ref:r,className:"board-3d",onClick:d,style:{cursor:n?"not-allowed":"pointer"}})}function FA({startTime:t,timeLimit:e,onTimeout:n}){const[i,r]=Ge.useState(e);if(Ge.useEffect(()=>{if(e===0)return;const a=setInterval(()=>{const u=Date.now()-t,c=Math.max(0,e-u);r(c),c===0&&n()},100);return()=>clearInterval(a)},[t,e,n]),e===0)return null;const s=Math.ceil(i/1e3),o=i/e*100,l=o<30;return W.jsxs("div",{className:"timer-container",children:[W.jsx("div",{className:"timer-label",children:"Time Remaining"}),W.jsxs("div",{className:`timer-display ${l?"warning":""}`,children:[s,"s"]}),W.jsx("div",{className:"timer-bar",children:W.jsx("div",{className:`timer-progress ${l?"warning":""}`,style:{width:`${o}%`}})})]})}function kA({session:t,match:e,onBackToLobby:n}){const[i,r]=Ge.useState({board:Array(9).fill(""),currentPlayer:"X",players:{},winner:null,gameOver:!1,turnStartTime:Date.now(),timeLimit:0,mode:"classic"}),[s,o]=Ge.useState(null),[l,a]=Ge.useState("Waiting...");Ge.useEffect(()=>{const v=_i.socket;if(v)return v.onmatchdata=y=>{const m=JSON.parse(new TextDecoder().decode(y.data));m.type==="player_joined"?(r(m.state),m.userId===t.user_id&&o(m.symbol)):m.type==="game_start"||m.type==="move_made"?r(m.state):m.type==="player_left"?(r(m.state),alert("Opponent left the game")):m.type==="timeout"&&r(m.state)},v.onmatchpresence=y=>{y.joins&&y.joins.forEach(m=>{m.user_id!==t.user_id&&a(m.username||"Opponent")})},()=>{v.onmatchdata=null,v.onmatchpresence=null}},[t,e]);const u=Ge.useCallback(async v=>{if(!i.gameOver&&i.players[t.user_id]===i.currentPlayer&&i.board[v]==="")try{await _i.sendMatchState(e.match_id,1,{type:"move",position:v})}catch(y){console.error("Failed to send move:",y)}},[i,t,e]),c=Ge.useCallback(()=>{!i.gameOver&&i.players[t.user_id]===i.currentPlayer&&alert("Time expired! You lose.")},[i,t]),d=async()=>{try{await _i.leaveMatch(e.match_id),n()}catch(v){console.error("Failed to leave match:",v),n()}},f=i.players[t.user_id]===i.currentPlayer,p=Object.keys(i.players).length;return W.jsxs("div",{className:"game-room",children:[W.jsxs("div",{className:"game-header",children:[W.jsx("button",{className:"btn-leave",onClick:d,children:"Leave Game"}),W.jsx("div",{className:"game-mode-badge",children:i.mode==="timed"?"⏱️ Timed Mode":"♾️ Classic Mode"})]}),W.jsxs("div",{className:"game-container",children:[W.jsxs("div",{className:"game-sidebar",children:[W.jsxs("div",{className:"player-info",children:[W.jsxs("div",{className:`player-card ${f&&!i.gameOver?"active":""}`,children:[W.jsx("div",{className:"player-symbol",children:s||"?"}),W.jsx("div",{className:"player-name",children:"You"}),f&&!i.gameOver&&W.jsx("div",{className:"turn-indicator",children:"Your Turn"})]}),W.jsx("div",{className:"vs-divider",children:"VS"}),W.jsxs("div",{className:`player-card ${!f&&!i.gameOver?"active":""}`,children:[W.jsx("div",{className:"player-symbol",children:s==="X"?"O":"X"}),W.jsx("div",{className:"player-name",children:l}),!f&&!i.gameOver&&W.jsx("div",{className:"turn-indicator",children:"Their Turn"})]})]}),i.mode==="timed"&&!i.gameOver&&p===2&&W.jsx(FA,{startTime:i.turnStartTime,timeLimit:i.timeLimit,onTimeout:c}),i.gameOver&&W.jsxs("div",{className:"game-result",children:[i.winner==="draw"?W.jsxs("div",{className:"result-draw",children:[W.jsx("div",{className:"result-icon",children:"🤝"}),W.jsx("div",{className:"result-text",children:"It's a Draw!"})]}):i.winner===s?W.jsxs("div",{className:"result-win",children:[W.jsx("div",{className:"result-icon",children:"🎉"}),W.jsx("div",{className:"result-text",children:"You Win!"})]}):W.jsxs("div",{className:"result-lose",children:[W.jsx("div",{className:"result-icon",children:"😔"}),W.jsx("div",{className:"result-text",children:"You Lose!"})]}),W.jsx("button",{className:"btn-primary",onClick:n,children:"Back to Lobby"})]}),p<2&&W.jsxs("div",{className:"waiting-opponent",children:[W.jsx("div",{className:"spinner"}),W.jsx("p",{children:"Waiting for opponent..."})]})]}),W.jsx("div",{className:"game-board-container",children:W.jsx(OA,{board:i.board,onCellClick:u,disabled:!f||i.gameOver||p<2,currentPlayer:i.currentPlayer})})]})]})}function BA({session:t,onBack:e}){const[n,i]=Ge.useState([]),[r,s]=Ge.useState(!0);Ge.useEffect(()=>{o()},[]);const o=async()=>{try{const a=await _i.getLeaderboard();i(a.leaderboard),s(!1)}catch(a){console.error("Failed to load leaderboard:",a),s(!1)}},l=a=>a===1?"🥇":a===2?"🥈":a===3?"🥉":a;return W.jsxs("div",{className:"leaderboard",children:[W.jsxs("div",{className:"leaderboard-header",children:[W.jsx("button",{className:"btn-back",onClick:e,children:"← Back"}),W.jsx("h2",{children:"Global Leaderboard"}),W.jsx("button",{className:"btn-refresh",onClick:o,children:"🔄"})]}),r?W.jsx("div",{className:"loading-container",children:W.jsx("div",{className:"spinner"})}):W.jsxs("div",{className:"leaderboard-table",children:[W.jsxs("div",{className:"table-header",children:[W.jsx("div",{className:"col-rank",children:"Rank"}),W.jsx("div",{className:"col-player",children:"Player"}),W.jsx("div",{className:"col-score",children:"Score"}),W.jsx("div",{className:"col-wins",children:"Wins"}),W.jsx("div",{className:"col-losses",children:"Losses"}),W.jsx("div",{className:"col-streak",children:"Streak"})]}),W.jsx("div",{className:"table-body",children:n.length===0?W.jsx("div",{className:"no-data",children:"No players yet. Be the first!"}):n.map(a=>W.jsxs("div",{className:`table-row ${a.rank<=3?"top-player":""}`,children:[W.jsx("div",{className:"col-rank",children:l(a.rank)}),W.jsx("div",{className:"col-player",children:a.username}),W.jsx("div",{className:"col-score",children:a.score}),W.jsx("div",{className:"col-wins",children:a.wins}),W.jsx("div",{className:"col-losses",children:a.losses}),W.jsx("div",{className:"col-streak",children:a.maxWinStreak})]},a.username))})]})]})}function zA(){const[t,e]=Ge.useState("lobby"),[n,i]=Ge.useState(null),[r,s]=Ge.useState(null),[o,l]=Ge.useState(!0);Ge.useEffect(()=>{a()},[]);const a=async()=>{try{const f=await _i.authenticate();i(f),l(!1)}catch(f){console.error("Authentication failed:",f),l(!1)}},u=f=>{s(f),e("game")},c=()=>{s(null),e("lobby")},d=()=>{e("leaderboard")};return o?W.jsx(bh,{children:W.jsx("div",{className:"app",children:W.jsxs("div",{className:"loading-container",children:[W.jsx("div",{className:"spinner"}),W.jsx("p",{children:"Connecting to server..."})]})})}):W.jsx(bh,{children:W.jsxs("div",{className:"app",children:[W.jsxs("header",{className:"app-header",children:[W.jsx("h1",{children:"Multiplayer Tic-Tac-Toe"}),W.jsx(zy,{})]}),W.jsxs("main",{className:"app-main",children:[t==="lobby"&&W.jsx(wx,{session:n,onMatchFound:u,onShowLeaderboard:d}),t==="game"&&r&&W.jsx(kA,{session:n,match:r,onBackToLobby:c}),t==="leaderboard"&&W.jsx(BA,{session:n,onBack:()=>e("lobby")})]})]})})}rc.createRoot(document.getElementById("root")).render(W.jsx(Pv.StrictMode,{children:W.jsx(zA,{})}));
