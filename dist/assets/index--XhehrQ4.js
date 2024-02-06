(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function fa(e,t){const n=new Set(e.split(","));return t?r=>n.has(r.toLowerCase()):r=>n.has(r)}const le={},ln=[],Ze=()=>{},Tu=()=>!1,Hr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),da=e=>e.startsWith("onUpdate:"),Me=Object.assign,pa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Iu=Object.prototype.hasOwnProperty,Q=(e,t)=>Iu.call(e,t),V=Array.isArray,un=e=>zr(e)==="[object Map]",Ds=e=>zr(e)==="[object Set]",U=e=>typeof e=="function",ke=e=>typeof e=="string",wn=e=>typeof e=="symbol",me=e=>e!==null&&typeof e=="object",Bs=e=>(me(e)||U(e))&&U(e.then)&&U(e.catch),Hs=Object.prototype.toString,zr=e=>Hs.call(e),Ru=e=>zr(e).slice(8,-1),zs=e=>zr(e)==="[object Object]",ma=e=>ke(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,_r=fa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ju=/-(\w)/g,ht=Vr(e=>e.replace(ju,(t,n)=>n?n.toUpperCase():"")),Mu=/\B([A-Z])/g,_n=Vr(e=>e.replace(Mu,"-$1").toLowerCase()),Ur=Vr(e=>e.charAt(0).toUpperCase()+e.slice(1)),si=Vr(e=>e?`on${Ur(e)}`:""),Dt=(e,t)=>!Object.is(e,t),li=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Cr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Nu=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Qa;const Vs=()=>Qa||(Qa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ha(e){if(V(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=ke(r)?Bu(r):ha(r);if(i)for(const a in i)t[a]=i[a]}return t}else if(ke(e)||me(e))return e}const Lu=/;(?![^(]*\))/g,Fu=/:([^]+)/,Du=/\/\*[^]*?\*\//g;function Bu(e){const t={};return e.replace(Du,"").split(Lu).forEach(n=>{if(n){const r=n.split(Fu);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Fn(e){let t="";if(ke(e))t=e;else if(V(e))for(let n=0;n<e.length;n++){const r=Fn(e[n]);r&&(t+=r+" ")}else if(me(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Hu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zu=fa(Hu);function Us(e){return!!e||e===""}const Ar=e=>ke(e)?e:e==null?"":V(e)||me(e)&&(e.toString===Hs||!U(e.toString))?JSON.stringify(e,Ws,2):String(e),Ws=(e,t)=>t&&t.__v_isRef?Ws(e,t.value):un(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i],a)=>(n[ui(r,a)+" =>"]=i,n),{})}:Ds(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>ui(n))}:wn(t)?ui(t):me(t)&&!V(t)&&!zs(t)?String(t):t,ui=(e,t="")=>{var n;return wn(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let it;class Vu{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=it,!t&&it&&(this.index=(it.scopes||(it.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=it;try{return it=this,t()}finally{it=n}}}on(){it=this}off(){it=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Uu(e,t=it){t&&t.active&&t.effects.push(e)}function Wu(){return it}let Qt;class ga{constructor(t,n,r,i){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Uu(this,i)}get dirty(){if(this._dirtyLevel===1){tn();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(Ku(n.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),nn()}return this._dirtyLevel>=2}set dirty(t){this._dirtyLevel=t?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Lt,n=Qt;try{return Lt=!0,Qt=this,this._runnings++,Ja(this),this.fn()}finally{Za(this),this._runnings--,Qt=n,Lt=t}}stop(){var t;this.active&&(Ja(this),Za(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function Ku(e){return e.value}function Ja(e){e._trackId++,e._depsLength=0}function Za(e){if(e.deps&&e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)Ks(e.deps[t],e);e.deps.length=e._depsLength}}function Ks(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let Lt=!0,ki=0;const Ys=[];function tn(){Ys.push(Lt),Lt=!1}function nn(){const e=Ys.pop();Lt=e===void 0?!0:e}function va(){ki++}function ba(){for(ki--;!ki&&$i.length;)$i.shift()()}function qs(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&Ks(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const $i=[];function Gs(e,t,n){va();for(const r of e.keys())if(r._dirtyLevel<t&&e.get(r)===r._trackId){const i=r._dirtyLevel;r._dirtyLevel=t,i===0&&(r._shouldSchedule=!0,r.trigger())}Xs(e),ba()}function Xs(e){for(const t of e.keys())t.scheduler&&t._shouldSchedule&&(!t._runnings||t.allowRecurse)&&e.get(t)===t._trackId&&(t._shouldSchedule=!1,$i.push(t.scheduler))}const Qs=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},Ti=new WeakMap,Jt=Symbol(""),Ii=Symbol("");function We(e,t,n){if(Lt&&Qt){let r=Ti.get(e);r||Ti.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=Qs(()=>r.delete(n))),qs(Qt,i)}}function wt(e,t,n,r,i,a){const o=Ti.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&V(e)){const l=Number(r);o.forEach((u,c)=>{(c==="length"||!wn(c)&&c>=l)&&s.push(u)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":V(e)?ma(n)&&s.push(o.get("length")):(s.push(o.get(Jt)),un(e)&&s.push(o.get(Ii)));break;case"delete":V(e)||(s.push(o.get(Jt)),un(e)&&s.push(o.get(Ii)));break;case"set":un(e)&&s.push(o.get(Jt));break}va();for(const l of s)l&&Gs(l,2);ba()}const Yu=fa("__proto__,__v_isRef,__isVue"),Js=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(wn)),eo=qu();function qu(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=te(this);for(let a=0,o=this.length;a<o;a++)We(r,"get",a+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(te)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){tn(),va();const r=te(this)[t].apply(this,n);return ba(),nn(),r}}),e}function Gu(e){const t=te(this);return We(t,"has",e),t.hasOwnProperty(e)}class Zs{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const i=this._isReadonly,a=this._shallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return a;if(n==="__v_raw")return r===(i?a?lc:rl:a?nl:tl).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=V(t);if(!i){if(o&&Q(eo,n))return Reflect.get(eo,n,r);if(n==="hasOwnProperty")return Gu}const s=Reflect.get(t,n,r);return(wn(n)?Js.has(n):Yu(n))||(i||We(t,"get",n),a)?s:Ke(s)?o&&ma(n)?s:s.value:me(s)?i?_a(s):et(s):s}}class el extends Zs{constructor(t=!1){super(!1,t)}set(t,n,r,i){let a=t[n];if(!this._shallow){const l=mn(a);if(!kr(r)&&!mn(r)&&(a=te(a),r=te(r)),!V(t)&&Ke(a)&&!Ke(r))return l?!1:(a.value=r,!0)}const o=V(t)&&ma(n)?Number(n)<t.length:Q(t,n),s=Reflect.set(t,n,r,i);return t===te(i)&&(o?Dt(r,a)&&wt(t,"set",n,r):wt(t,"add",n,r)),s}deleteProperty(t,n){const r=Q(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&r&&wt(t,"delete",n,void 0),i}has(t,n){const r=Reflect.has(t,n);return(!wn(n)||!Js.has(n))&&We(t,"has",n),r}ownKeys(t){return We(t,"iterate",V(t)?"length":Jt),Reflect.ownKeys(t)}}class Xu extends Zs{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Qu=new el,Ju=new Xu,Zu=new el(!0),ya=e=>e,Wr=e=>Reflect.getPrototypeOf(e);function or(e,t,n=!1,r=!1){e=e.__v_raw;const i=te(e),a=te(t);n||(Dt(t,a)&&We(i,"get",t),We(i,"get",a));const{has:o}=Wr(i),s=r?ya:n?Sa:Dn;if(o.call(i,t))return s(e.get(t));if(o.call(i,a))return s(e.get(a));e!==i&&e.get(t)}function sr(e,t=!1){const n=this.__v_raw,r=te(n),i=te(e);return t||(Dt(e,i)&&We(r,"has",e),We(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function lr(e,t=!1){return e=e.__v_raw,!t&&We(te(e),"iterate",Jt),Reflect.get(e,"size",e)}function to(e){e=te(e);const t=te(this);return Wr(t).has.call(t,e)||(t.add(e),wt(t,"add",e,e)),this}function no(e,t){t=te(t);const n=te(this),{has:r,get:i}=Wr(n);let a=r.call(n,e);a||(e=te(e),a=r.call(n,e));const o=i.call(n,e);return n.set(e,t),a?Dt(t,o)&&wt(n,"set",e,t):wt(n,"add",e,t),this}function ro(e){const t=te(this),{has:n,get:r}=Wr(t);let i=n.call(t,e);i||(e=te(e),i=n.call(t,e)),r&&r.call(t,e);const a=t.delete(e);return i&&wt(t,"delete",e,void 0),a}function io(){const e=te(this),t=e.size!==0,n=e.clear();return t&&wt(e,"clear",void 0,void 0),n}function ur(e,t){return function(r,i){const a=this,o=a.__v_raw,s=te(o),l=t?ya:e?Sa:Dn;return!e&&We(s,"iterate",Jt),o.forEach((u,c)=>r.call(i,l(u),l(c),a))}}function cr(e,t,n){return function(...r){const i=this.__v_raw,a=te(i),o=un(a),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=i[e](...r),c=n?ya:t?Sa:Dn;return!t&&We(a,"iterate",l?Ii:Jt),{next(){const{value:f,done:d}=u.next();return d?{value:f,done:d}:{value:s?[c(f[0]),c(f[1])]:c(f),done:d}},[Symbol.iterator](){return this}}}}function kt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function ec(){const e={get(a){return or(this,a)},get size(){return lr(this)},has:sr,add:to,set:no,delete:ro,clear:io,forEach:ur(!1,!1)},t={get(a){return or(this,a,!1,!0)},get size(){return lr(this)},has:sr,add:to,set:no,delete:ro,clear:io,forEach:ur(!1,!0)},n={get(a){return or(this,a,!0)},get size(){return lr(this,!0)},has(a){return sr.call(this,a,!0)},add:kt("add"),set:kt("set"),delete:kt("delete"),clear:kt("clear"),forEach:ur(!0,!1)},r={get(a){return or(this,a,!0,!0)},get size(){return lr(this,!0)},has(a){return sr.call(this,a,!0)},add:kt("add"),set:kt("set"),delete:kt("delete"),clear:kt("clear"),forEach:ur(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=cr(a,!1,!1),n[a]=cr(a,!0,!1),t[a]=cr(a,!1,!0),r[a]=cr(a,!0,!0)}),[e,n,t,r]}const[tc,nc,rc,ic]=ec();function wa(e,t){const n=t?e?ic:rc:e?nc:tc;return(r,i,a)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(Q(n,i)&&i in r?n:r,i,a)}const ac={get:wa(!1,!1)},oc={get:wa(!1,!0)},sc={get:wa(!0,!1)},tl=new WeakMap,nl=new WeakMap,rl=new WeakMap,lc=new WeakMap;function uc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cc(e){return e.__v_skip||!Object.isExtensible(e)?0:uc(Ru(e))}function et(e){return mn(e)?e:xa(e,!1,Qu,ac,tl)}function il(e){return xa(e,!1,Zu,oc,nl)}function _a(e){return xa(e,!0,Ju,sc,rl)}function xa(e,t,n,r,i){if(!me(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=i.get(e);if(a)return a;const o=cc(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function cn(e){return mn(e)?cn(e.__v_raw):!!(e&&e.__v_isReactive)}function mn(e){return!!(e&&e.__v_isReadonly)}function kr(e){return!!(e&&e.__v_isShallow)}function al(e){return cn(e)||mn(e)}function te(e){const t=e&&e.__v_raw;return t?te(t):e}function ol(e){return Cr(e,"__v_skip",!0),e}const Dn=e=>me(e)?et(e):e,Sa=e=>me(e)?_a(e):e;class sl{constructor(t,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ga(()=>t(this._value),()=>xr(this,1),()=>this.dep&&Xs(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=te(this);return(!t._cacheable||t.effect.dirty)&&Dt(t._value,t._value=t.effect.run())&&xr(t,2),ll(t),t.effect._dirtyLevel>=1&&xr(t,1),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function fc(e,t,n=!1){let r,i;const a=U(e);return a?(r=e,i=Ze):(r=e.get,i=e.set),new sl(r,i,a||!i,n)}function ll(e){Lt&&Qt&&(e=te(e),qs(Qt,e.dep||(e.dep=Qs(()=>e.dep=void 0,e instanceof sl?e:void 0))))}function xr(e,t=2,n){e=te(e);const r=e.dep;r&&Gs(r,t)}function Ke(e){return!!(e&&e.__v_isRef===!0)}function oe(e){return ul(e,!1)}function dc(e){return ul(e,!0)}function ul(e,t){return Ke(e)?e:new pc(e,t)}class pc{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:te(t),this._value=n?t:Dn(t)}get value(){return ll(this),this._value}set value(t){const n=this.__v_isShallow||kr(t)||mn(t);t=n?t:te(t),Dt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Dn(t),xr(this,2))}}function De(e){return Ke(e)?e.value:e}const mc={get:(e,t,n)=>De(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Ke(i)&&!Ke(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function cl(e){return cn(e)?e:new Proxy(e,mc)}/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ft(e,t,n,r){let i;try{i=r?e(...r):e()}catch(a){Kr(a,t,n)}return i}function st(e,t,n,r){if(U(e)){const a=Ft(e,t,n,r);return a&&Bs(a)&&a.catch(o=>{Kr(o,t,n)}),a}const i=[];for(let a=0;a<e.length;a++)i.push(st(e[a],t,n,r));return i}function Kr(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let a=t.parent;const o=t.proxy,s=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let c=0;c<u.length;c++)if(u[c](e,o,s)===!1)return}a=a.parent}const l=t.appContext.config.errorHandler;if(l){Ft(l,null,10,[e,o,s]);return}}hc(e,n,i,r)}function hc(e,t,n,r=!0){console.error(e)}let Bn=!1,Ri=!1;const Ne=[];let pt=0;const fn=[];let Rt=null,Yt=0;const fl=Promise.resolve();let Ea=null;function Yr(e){const t=Ea||fl;return e?t.then(this?e.bind(this):e):t}function gc(e){let t=pt+1,n=Ne.length;for(;t<n;){const r=t+n>>>1,i=Ne[r],a=Hn(i);a<e||a===e&&i.pre?t=r+1:n=r}return t}function Oa(e){(!Ne.length||!Ne.includes(e,Bn&&e.allowRecurse?pt+1:pt))&&(e.id==null?Ne.push(e):Ne.splice(gc(e.id),0,e),dl())}function dl(){!Bn&&!Ri&&(Ri=!0,Ea=fl.then(ml))}function vc(e){const t=Ne.indexOf(e);t>pt&&Ne.splice(t,1)}function bc(e){V(e)?fn.push(...e):(!Rt||!Rt.includes(e,e.allowRecurse?Yt+1:Yt))&&fn.push(e),dl()}function ao(e,t,n=Bn?pt+1:0){for(;n<Ne.length;n++){const r=Ne[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;Ne.splice(n,1),n--,r()}}}function pl(e){if(fn.length){const t=[...new Set(fn)].sort((n,r)=>Hn(n)-Hn(r));if(fn.length=0,Rt){Rt.push(...t);return}for(Rt=t,Yt=0;Yt<Rt.length;Yt++)Rt[Yt]();Rt=null,Yt=0}}const Hn=e=>e.id==null?1/0:e.id,yc=(e,t)=>{const n=Hn(e)-Hn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ml(e){Ri=!1,Bn=!0,Ne.sort(yc);try{for(pt=0;pt<Ne.length;pt++){const t=Ne[pt];t&&t.active!==!1&&Ft(t,null,14)}}finally{pt=0,Ne.length=0,pl(),Bn=!1,Ea=null,(Ne.length||fn.length)&&ml()}}function wc(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||le;let i=n;const a=t.startsWith("update:"),o=a&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:d}=r[c]||le;d&&(i=n.map(h=>ke(h)?h.trim():h)),f&&(i=n.map(Nu))}let s,l=r[s=si(t)]||r[s=si(ht(t))];!l&&a&&(l=r[s=si(_n(t))]),l&&st(l,e,6,i);const u=r[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,st(u,e,6,i)}}function hl(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const a=e.emits;let o={},s=!1;if(!U(e)){const l=u=>{const c=hl(u,t,!0);c&&(s=!0,Me(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!a&&!s?(me(e)&&r.set(e,null),null):(V(a)?a.forEach(l=>o[l]=null):Me(o,a),me(e)&&r.set(e,o),o)}function qr(e,t){return!e||!Hr(t)?!1:(t=t.slice(2).replace(/Once$/,""),Q(e,t[0].toLowerCase()+t.slice(1))||Q(e,_n(t))||Q(e,t))}let Ce=null,gl=null;function $r(e){const t=Ce;return Ce=e,gl=e&&e.type.__scopeId||null,t}function Ue(e,t=Ce,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&bo(-1);const a=$r(t);let o;try{o=e(...i)}finally{$r(a),r._d&&bo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ci(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:a,propsOptions:[o],slots:s,attrs:l,emit:u,render:c,renderCache:f,data:d,setupState:h,ctx:_,inheritAttrs:E}=e;let w,v;const x=$r(e);try{if(n.shapeFlag&4){const L=i||r,H=L;w=dt(c.call(H,L,f,a,h,d,_)),v=l}else{const L=t;w=dt(L.length>1?L(a,{attrs:l,slots:s,emit:u}):L(a,null)),v=t.props?l:_c(l)}}catch(L){Tn.length=0,Kr(L,e,1),w=q(Bt)}let A=w;if(v&&E!==!1){const L=Object.keys(v),{shapeFlag:H}=A;L.length&&H&7&&(o&&L.some(da)&&(v=xc(v,o)),A=Ht(A,v))}return n.dirs&&(A=Ht(A),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition&&(A.transition=n.transition),w=A,$r(x),w}const _c=e=>{let t;for(const n in e)(n==="class"||n==="style"||Hr(n))&&((t||(t={}))[n]=e[n]);return t},xc=(e,t)=>{const n={};for(const r in e)(!da(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Sc(e,t,n){const{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:l}=t,u=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?oo(r,o,u):!!o;if(l&8){const c=t.dynamicProps;for(let f=0;f<c.length;f++){const d=c[f];if(o[d]!==r[d]&&!qr(u,d))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?oo(r,o,u):!0:!!o;return!1}function oo(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const a=r[i];if(t[a]!==e[a]&&!qr(n,a))return!0}return!1}function Ec({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const vl="components",Oc="directives";function hn(e,t){return bl(vl,e,!0,t)||e}const Pc=Symbol.for("v-ndc");function Cc(e){return bl(Oc,e)}function bl(e,t,n=!0,r=!1){const i=Ce||je;if(i){const a=i.type;if(e===vl){const s=_f(a,!1);if(s&&(s===t||s===ht(t)||s===Ur(ht(t))))return a}const o=so(i[e]||a[e],t)||so(i.appContext[e],t);return!o&&r?a:o}}function so(e,t){return e&&(e[t]||e[ht(t)]||e[Ur(ht(t))])}const Ac=e=>e.__isSuspense;function kc(e,t){t&&t.pendingBranch?V(e)?t.effects.push(...e):t.effects.push(e):bc(e)}const $c=Symbol.for("v-scx"),Tc=()=>se($c),fr={};function _t(e,t,n){return yl(e,t,n)}function yl(e,t,{immediate:n,deep:r,flush:i,once:a,onTrack:o,onTrigger:s}=le){if(t&&a){const F=t;t=(...W)=>{F(...W),H()}}const l=je,u=F=>r===!0?F:qt(F,r===!1?1:void 0);let c,f=!1,d=!1;if(Ke(e)?(c=()=>e.value,f=kr(e)):cn(e)?(c=()=>u(e),f=!0):V(e)?(d=!0,f=e.some(F=>cn(F)||kr(F)),c=()=>e.map(F=>{if(Ke(F))return F.value;if(cn(F))return u(F);if(U(F))return Ft(F,l,2)})):U(e)?t?c=()=>Ft(e,l,2):c=()=>(h&&h(),st(e,l,3,[_])):c=Ze,t&&r){const F=c;c=()=>qt(F())}let h,_=F=>{h=A.onStop=()=>{Ft(F,l,4),h=A.onStop=void 0}},E;if(Jr)if(_=Ze,t?n&&st(t,l,3,[c(),d?[]:void 0,_]):c(),i==="sync"){const F=Tc();E=F.__watcherHandles||(F.__watcherHandles=[])}else return Ze;let w=d?new Array(e.length).fill(fr):fr;const v=()=>{if(!(!A.active||!A.dirty))if(t){const F=A.run();(r||f||(d?F.some((W,ge)=>Dt(W,w[ge])):Dt(F,w)))&&(h&&h(),st(t,l,3,[F,w===fr?void 0:d&&w[0]===fr?[]:w,_]),w=F)}else A.run()};v.allowRecurse=!!t;let x;i==="sync"?x=v:i==="post"?x=()=>Ve(v,l&&l.suspense):(v.pre=!0,l&&(v.id=l.uid),x=()=>Oa(v));const A=new ga(c,Ze,x),L=Wu(),H=()=>{A.stop(),L&&pa(L.effects,A)};return t?n?v():w=A.run():i==="post"?Ve(A.run.bind(A),l&&l.suspense):A.run(),E&&E.push(H),H}function Ic(e,t,n){const r=this.proxy,i=ke(e)?e.includes(".")?wl(r,e):()=>r[e]:e.bind(r,r);let a;U(t)?a=t:(a=t.handler,n=t);const o=nr(this),s=yl(i,a.bind(r),n);return o(),s}function wl(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function qt(e,t,n=0,r){if(!me(e)||e.__v_skip)return e;if(t&&t>0){if(n>=t)return e;n++}if(r=r||new Set,r.has(e))return e;if(r.add(e),Ke(e))qt(e.value,t,n,r);else if(V(e))for(let i=0;i<e.length;i++)qt(e[i],t,n,r);else if(Ds(e)||un(e))e.forEach(i=>{qt(i,t,n,r)});else if(zs(e))for(const i in e)qt(e[i],t,n,r);return e}function Rc(e,t){if(Ce===null)return e;const n=Zr(Ce)||Ce.proxy,r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[a,o,s,l=le]=t[i];a&&(U(a)&&(a={mounted:a,updated:a}),a.deep&&qt(o),r.push({dir:a,instance:n,value:o,oldValue:void 0,arg:s,modifiers:l}))}return e}function Wt(e,t,n,r){const i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){const s=i[o];a&&(s.oldValue=a[o].value);let l=s.dir[r];l&&(tn(),st(l,n,8,[e.el,s,e,t]),nn())}}/*! #__NO_SIDE_EFFECTS__ */function xn(e,t){return U(e)?Me({name:e.name},t,{setup:e}):e}const kn=e=>!!e.type.__asyncLoader,_l=e=>e.type.__isKeepAlive;function jc(e,t){xl(e,"a",t)}function Mc(e,t){xl(e,"da",t)}function xl(e,t,n=je){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Gr(t,r,n),n){let i=n.parent;for(;i&&i.parent;)_l(i.parent.vnode)&&Nc(r,t,n,i),i=i.parent}}function Nc(e,t,n,r){const i=Gr(t,e,r,!0);Ca(()=>{pa(r[t],i)},n)}function Gr(e,t,n=je,r=!1){if(n){const i=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;tn();const s=nr(n),l=st(t,n,e,o);return s(),nn(),l});return r?i.unshift(a):i.push(a),a}}const Pt=e=>(t,n=je)=>(!Jr||e==="sp")&&Gr(e,(...r)=>t(...r),n),Lc=Pt("bm"),Pa=Pt("m"),Fc=Pt("bu"),Dc=Pt("u"),Bc=Pt("bum"),Ca=Pt("um"),Hc=Pt("sp"),zc=Pt("rtg"),Vc=Pt("rtc");function Uc(e,t=je){Gr("ec",e,t)}function lo(e,t,n,r){let i;const a=n&&n[r];if(V(e)||ke(e)){i=new Array(e.length);for(let o=0,s=e.length;o<s;o++)i[o]=t(e[o],o,void 0,a&&a[o])}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,a&&a[o])}else if(me(e))if(e[Symbol.iterator])i=Array.from(e,(o,s)=>t(o,s,void 0,a&&a[s]));else{const o=Object.keys(e);i=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const u=o[s];i[s]=t(e[u],u,s,a&&a[s])}}else i=[];return n&&(n[r]=i),i}function vt(e,t,n={},r,i){if(Ce.isCE||Ce.parent&&kn(Ce.parent)&&Ce.parent.isCE)return t!=="default"&&(n.name=t),q("slot",n,r&&r());let a=e[t];a&&a._c&&(a._d=!1),ce();const o=a&&Sl(a(n)),s=gn(Be,{key:n.key||o&&o.key||`_${t}`},o||(r?r():[]),o&&e._===1?64:-2);return!i&&s.scopeId&&(s.slotScopeIds=[s.scopeId+"-s"]),a&&a._c&&(a._d=!0),s}function Sl(e){return e.some(t=>Rr(t)?!(t.type===Bt||t.type===Be&&!Sl(t.children)):!0)?e:null}const ji=e=>e?Nl(e)?Zr(e)||e.proxy:ji(e.parent):null,$n=Me(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ji(e.parent),$root:e=>ji(e.root),$emit:e=>e.emit,$options:e=>Aa(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,Oa(e.update)}),$nextTick:e=>e.n||(e.n=Yr.bind(e.proxy)),$watch:e=>Ic.bind(e)}),fi=(e,t)=>e!==le&&!e.__isScriptSetup&&Q(e,t),Wc={get({_:e},t){const{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:s,appContext:l}=e;let u;if(t[0]!=="$"){const h=o[t];if(h!==void 0)switch(h){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else{if(fi(r,t))return o[t]=1,r[t];if(i!==le&&Q(i,t))return o[t]=2,i[t];if((u=e.propsOptions[0])&&Q(u,t))return o[t]=3,a[t];if(n!==le&&Q(n,t))return o[t]=4,n[t];Mi&&(o[t]=0)}}const c=$n[t];let f,d;if(c)return t==="$attrs"&&We(e,"get",t),c(e);if((f=s.__cssModules)&&(f=f[t]))return f;if(n!==le&&Q(n,t))return o[t]=4,n[t];if(d=l.config.globalProperties,Q(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:a}=e;return fi(i,t)?(i[t]=n,!0):r!==le&&Q(r,t)?(r[t]=n,!0):Q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:a}},o){let s;return!!n[o]||e!==le&&Q(e,o)||fi(t,o)||(s=a[0])&&Q(s,o)||Q(r,o)||Q($n,o)||Q(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Q(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function uo(e){return V(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Mi=!0;function Kc(e){const t=Aa(e),n=e.proxy,r=e.ctx;Mi=!1,t.beforeCreate&&co(t.beforeCreate,e,"bc");const{data:i,computed:a,methods:o,watch:s,provide:l,inject:u,created:c,beforeMount:f,mounted:d,beforeUpdate:h,updated:_,activated:E,deactivated:w,beforeDestroy:v,beforeUnmount:x,destroyed:A,unmounted:L,render:H,renderTracked:F,renderTriggered:W,errorCaptured:ge,serverPrefetch:J,expose:Se,inheritAttrs:Le,components:_e,directives:Re,filters:Qe}=t;if(u&&Yc(u,r,null),o)for(const Z in o){const X=o[Z];U(X)&&(r[Z]=X.bind(n))}if(i){const Z=i.call(n,n);me(Z)&&(e.data=et(Z))}if(Mi=!0,a)for(const Z in a){const X=a[Z],Je=U(X)?X.bind(n,n):U(X.get)?X.get.bind(n,n):Ze,tt=!U(X)&&U(X.set)?X.set.bind(n):Ze,Ye=Pe({get:Je,set:tt});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>Ye.value,set:be=>Ye.value=be})}if(s)for(const Z in s)El(s[Z],r,n,Z);if(l){const Z=U(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(X=>{Ge(X,Z[X])})}c&&co(c,e,"c");function ve(Z,X){V(X)?X.forEach(Je=>Z(Je.bind(n))):X&&Z(X.bind(n))}if(ve(Lc,f),ve(Pa,d),ve(Fc,h),ve(Dc,_),ve(jc,E),ve(Mc,w),ve(Uc,ge),ve(Vc,F),ve(zc,W),ve(Bc,x),ve(Ca,L),ve(Hc,J),V(Se))if(Se.length){const Z=e.exposed||(e.exposed={});Se.forEach(X=>{Object.defineProperty(Z,X,{get:()=>n[X],set:Je=>n[X]=Je})})}else e.exposed||(e.exposed={});H&&e.render===Ze&&(e.render=H),Le!=null&&(e.inheritAttrs=Le),_e&&(e.components=_e),Re&&(e.directives=Re)}function Yc(e,t,n=Ze){V(e)&&(e=Ni(e));for(const r in e){const i=e[r];let a;me(i)?"default"in i?a=se(i.from||r,i.default,!0):a=se(i.from||r):a=se(i),Ke(a)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):t[r]=a}}function co(e,t,n){st(V(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function El(e,t,n,r){const i=r.includes(".")?wl(n,r):()=>n[r];if(ke(e)){const a=t[e];U(a)&&_t(i,a)}else if(U(e))_t(i,e.bind(n));else if(me(e))if(V(e))e.forEach(a=>El(a,t,n,r));else{const a=U(e.handler)?e.handler.bind(n):t[e.handler];U(a)&&_t(i,a,e)}}function Aa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t);let l;return s?l=s:!i.length&&!n&&!r?l=t:(l={},i.length&&i.forEach(u=>Tr(l,u,o,!0)),Tr(l,t,o)),me(t)&&a.set(t,l),l}function Tr(e,t,n,r=!1){const{mixins:i,extends:a}=t;a&&Tr(e,a,n,!0),i&&i.forEach(o=>Tr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=qc[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const qc={data:fo,props:po,emits:po,methods:Cn,computed:Cn,beforeCreate:Fe,created:Fe,beforeMount:Fe,mounted:Fe,beforeUpdate:Fe,updated:Fe,beforeDestroy:Fe,beforeUnmount:Fe,destroyed:Fe,unmounted:Fe,activated:Fe,deactivated:Fe,errorCaptured:Fe,serverPrefetch:Fe,components:Cn,directives:Cn,watch:Xc,provide:fo,inject:Gc};function fo(e,t){return t?e?function(){return Me(U(e)?e.call(this,this):e,U(t)?t.call(this,this):t)}:t:e}function Gc(e,t){return Cn(Ni(e),Ni(t))}function Ni(e){if(V(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Fe(e,t){return e?[...new Set([].concat(e,t))]:t}function Cn(e,t){return e?Me(Object.create(null),e,t):t}function po(e,t){return e?V(e)&&V(t)?[...new Set([...e,...t])]:Me(Object.create(null),uo(e),uo(t??{})):t}function Xc(e,t){if(!e)return t;if(!t)return e;const n=Me(Object.create(null),e);for(const r in t)n[r]=Fe(e[r],t[r]);return n}function Ol(){return{app:null,config:{isNativeTag:Tu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qc=0;function Jc(e,t){return function(r,i=null){U(r)||(r=Me({},r)),i!=null&&!me(i)&&(i=null);const a=Ol(),o=new WeakSet;let s=!1;const l=a.app={_uid:Qc++,_component:r,_props:i,_container:null,_context:a,_instance:null,version:Sf,get config(){return a.config},set config(u){},use(u,...c){return o.has(u)||(u&&U(u.install)?(o.add(u),u.install(l,...c)):U(u)&&(o.add(u),u(l,...c))),l},mixin(u){return a.mixins.includes(u)||a.mixins.push(u),l},component(u,c){return c?(a.components[u]=c,l):a.components[u]},directive(u,c){return c?(a.directives[u]=c,l):a.directives[u]},mount(u,c,f){if(!s){const d=q(r,i);return d.appContext=a,f===!0?f="svg":f===!1&&(f=void 0),c&&t?t(d,u):e(d,u,f),s=!0,l._container=u,u.__vue_app__=l,Zr(d.component)||d.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,c){return a.provides[u]=c,l},runWithContext(u){Ir=l;try{return u()}finally{Ir=null}}};return l}}let Ir=null;function Ge(e,t){if(je){let n=je.provides;const r=je.parent&&je.parent.provides;r===n&&(n=je.provides=Object.create(r)),n[e]=t}}function se(e,t,n=!1){const r=je||Ce;if(r||Ir){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Ir._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&U(t)?t.call(r&&r.proxy):t}}function Zc(e,t,n,r=!1){const i={},a={};Cr(a,Qr,1),e.propsDefaults=Object.create(null),Pl(e,t,i,a);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:il(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function ef(e,t,n,r){const{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=te(i),[l]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let f=0;f<c.length;f++){let d=c[f];if(qr(e.emitsOptions,d))continue;const h=t[d];if(l)if(Q(a,d))h!==a[d]&&(a[d]=h,u=!0);else{const _=ht(d);i[_]=Li(l,s,_,h,e,!1)}else h!==a[d]&&(a[d]=h,u=!0)}}}else{Pl(e,t,i,a)&&(u=!0);let c;for(const f in s)(!t||!Q(t,f)&&((c=_n(f))===f||!Q(t,c)))&&(l?n&&(n[f]!==void 0||n[c]!==void 0)&&(i[f]=Li(l,s,f,void 0,e,!0)):delete i[f]);if(a!==s)for(const f in a)(!t||!Q(t,f))&&(delete a[f],u=!0)}u&&wt(e,"set","$attrs")}function Pl(e,t,n,r){const[i,a]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(_r(l))continue;const u=t[l];let c;i&&Q(i,c=ht(l))?!a||!a.includes(c)?n[c]=u:(s||(s={}))[c]=u:qr(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(a){const l=te(n),u=s||le;for(let c=0;c<a.length;c++){const f=a[c];n[f]=Li(i,l,f,u[f],e,!Q(u,f))}}return o}function Li(e,t,n,r,i,a){const o=e[n];if(o!=null){const s=Q(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&U(l)){const{propsDefaults:u}=i;if(n in u)r=u[n];else{const c=nr(i);r=u[n]=l.call(null,t),c()}}else r=l}o[0]&&(a&&!s?r=!1:o[1]&&(r===""||r===_n(n))&&(r=!0))}return r}function Cl(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const a=e.props,o={},s=[];let l=!1;if(!U(e)){const c=f=>{l=!0;const[d,h]=Cl(f,t,!0);Me(o,d),h&&s.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!a&&!l)return me(e)&&r.set(e,ln),ln;if(V(a))for(let c=0;c<a.length;c++){const f=ht(a[c]);mo(f)&&(o[f]=le)}else if(a)for(const c in a){const f=ht(c);if(mo(f)){const d=a[c],h=o[f]=V(d)||U(d)?{type:d}:Me({},d);if(h){const _=vo(Boolean,h.type),E=vo(String,h.type);h[0]=_>-1,h[1]=E<0||_<E,(_>-1||Q(h,"default"))&&s.push(f)}}}const u=[o,s];return me(e)&&r.set(e,u),u}function mo(e){return e[0]!=="$"}function ho(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function go(e,t){return ho(e)===ho(t)}function vo(e,t){return V(t)?t.findIndex(n=>go(n,e)):U(t)&&go(t,e)?0:-1}const Al=e=>e[0]==="_"||e==="$stable",ka=e=>V(e)?e.map(dt):[dt(e)],tf=(e,t,n)=>{if(t._n)return t;const r=Ue((...i)=>ka(t(...i)),n);return r._c=!1,r},kl=(e,t,n)=>{const r=e._ctx;for(const i in e){if(Al(i))continue;const a=e[i];if(U(a))t[i]=tf(i,a,r);else if(a!=null){const o=ka(a);t[i]=()=>o}}},$l=(e,t)=>{const n=ka(t);e.slots.default=()=>n},nf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=te(t),Cr(t,"_",n)):kl(t,e.slots={})}else e.slots={},t&&$l(e,t);Cr(e.slots,Qr,1)},rf=(e,t,n)=>{const{vnode:r,slots:i}=e;let a=!0,o=le;if(r.shapeFlag&32){const s=t._;s?n&&s===1?a=!1:(Me(i,t),!n&&s===1&&delete i._):(a=!t.$stable,kl(t,i)),o=t}else t&&($l(e,t),o={default:1});if(a)for(const s in i)!Al(s)&&o[s]==null&&delete i[s]};function Fi(e,t,n,r,i=!1){if(V(e)){e.forEach((d,h)=>Fi(d,t&&(V(t)?t[h]:t),n,r,i));return}if(kn(r)&&!i)return;const a=r.shapeFlag&4?Zr(r.component)||r.component.proxy:r.el,o=i?null:a,{i:s,r:l}=e,u=t&&t.r,c=s.refs===le?s.refs={}:s.refs,f=s.setupState;if(u!=null&&u!==l&&(ke(u)?(c[u]=null,Q(f,u)&&(f[u]=null)):Ke(u)&&(u.value=null)),U(l))Ft(l,s,12,[o,c]);else{const d=ke(l),h=Ke(l),_=e.f;if(d||h){const E=()=>{if(_){const w=d?Q(f,l)?f[l]:c[l]:l.value;i?V(w)&&pa(w,a):V(w)?w.includes(a)||w.push(a):d?(c[l]=[a],Q(f,l)&&(f[l]=c[l])):(l.value=[a],e.k&&(c[e.k]=l.value))}else d?(c[l]=o,Q(f,l)&&(f[l]=o)):h&&(l.value=o,e.k&&(c[e.k]=o))};i||_?E():(E.id=-1,Ve(E,n))}}}const Ve=kc;function af(e){return of(e)}function of(e,t){const n=Vs();n.__VUE__=!0;const{insert:r,remove:i,patchProp:a,createElement:o,createText:s,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:d,setScopeId:h=Ze,insertStaticContent:_}=e,E=(m,p,g,b=null,y=null,C=null,$=void 0,P=null,k=!!p.dynamicChildren)=>{if(m===p)return;m&&!On(m,p)&&(b=S(m),be(m,y,C,!0),m=null),p.patchFlag===-2&&(k=!1,p.dynamicChildren=null);const{type:O,ref:j,shapeFlag:B}=p;switch(O){case Xr:w(m,p,g,b);break;case Bt:v(m,p,g,b);break;case Sr:m==null&&x(p,g,b,$);break;case Be:_e(m,p,g,b,y,C,$,P,k);break;default:B&1?H(m,p,g,b,y,C,$,P,k):B&6?Re(m,p,g,b,y,C,$,P,k):(B&64||B&128)&&O.process(m,p,g,b,y,C,$,P,k,M)}j!=null&&y&&Fi(j,m&&m.ref,C,p||m,!p)},w=(m,p,g,b)=>{if(m==null)r(p.el=s(p.children),g,b);else{const y=p.el=m.el;p.children!==m.children&&u(y,p.children)}},v=(m,p,g,b)=>{m==null?r(p.el=l(p.children||""),g,b):p.el=m.el},x=(m,p,g,b)=>{[m.el,m.anchor]=_(m.children,p,g,b,m.el,m.anchor)},A=({el:m,anchor:p},g,b)=>{let y;for(;m&&m!==p;)y=d(m),r(m,g,b),m=y;r(p,g,b)},L=({el:m,anchor:p})=>{let g;for(;m&&m!==p;)g=d(m),i(m),m=g;i(p)},H=(m,p,g,b,y,C,$,P,k)=>{p.type==="svg"?$="svg":p.type==="math"&&($="mathml"),m==null?F(p,g,b,y,C,$,P,k):J(m,p,y,C,$,P,k)},F=(m,p,g,b,y,C,$,P)=>{let k,O;const{props:j,shapeFlag:B,transition:D,dirs:z}=m;if(k=m.el=o(m.type,C,j&&j.is,j),B&8?c(k,m.children):B&16&&ge(m.children,k,null,b,y,di(m,C),$,P),z&&Wt(m,null,b,"created"),W(k,m,m.scopeId,$,b),j){for(const ae in j)ae!=="value"&&!_r(ae)&&a(k,ae,null,j[ae],C,m.children,b,y,Ee);"value"in j&&a(k,"value",null,j.value,C),(O=j.onVnodeBeforeMount)&&ft(O,b,m)}z&&Wt(m,null,b,"beforeMount");const K=sf(y,D);K&&D.beforeEnter(k),r(k,p,g),((O=j&&j.onVnodeMounted)||K||z)&&Ve(()=>{O&&ft(O,b,m),K&&D.enter(k),z&&Wt(m,null,b,"mounted")},y)},W=(m,p,g,b,y)=>{if(g&&h(m,g),b)for(let C=0;C<b.length;C++)h(m,b[C]);if(y){let C=y.subTree;if(p===C){const $=y.vnode;W(m,$,$.scopeId,$.slotScopeIds,y.parent)}}},ge=(m,p,g,b,y,C,$,P,k=0)=>{for(let O=k;O<m.length;O++){const j=m[O]=P?jt(m[O]):dt(m[O]);E(null,j,p,g,b,y,C,$,P)}},J=(m,p,g,b,y,C,$)=>{const P=p.el=m.el;let{patchFlag:k,dynamicChildren:O,dirs:j}=p;k|=m.patchFlag&16;const B=m.props||le,D=p.props||le;let z;if(g&&Kt(g,!1),(z=D.onVnodeBeforeUpdate)&&ft(z,g,p,m),j&&Wt(p,m,g,"beforeUpdate"),g&&Kt(g,!0),O?Se(m.dynamicChildren,O,P,g,b,di(p,y),C):$||X(m,p,P,null,g,b,di(p,y),C,!1),k>0){if(k&16)Le(P,p,B,D,g,b,y);else if(k&2&&B.class!==D.class&&a(P,"class",null,D.class,y),k&4&&a(P,"style",B.style,D.style,y),k&8){const K=p.dynamicProps;for(let ae=0;ae<K.length;ae++){const de=K[ae],Te=B[de],rt=D[de];(rt!==Te||de==="value")&&a(P,de,Te,rt,y,m.children,g,b,Ee)}}k&1&&m.children!==p.children&&c(P,p.children)}else!$&&O==null&&Le(P,p,B,D,g,b,y);((z=D.onVnodeUpdated)||j)&&Ve(()=>{z&&ft(z,g,p,m),j&&Wt(p,m,g,"updated")},b)},Se=(m,p,g,b,y,C,$)=>{for(let P=0;P<p.length;P++){const k=m[P],O=p[P],j=k.el&&(k.type===Be||!On(k,O)||k.shapeFlag&70)?f(k.el):g;E(k,O,j,null,b,y,C,$,!0)}},Le=(m,p,g,b,y,C,$)=>{if(g!==b){if(g!==le)for(const P in g)!_r(P)&&!(P in b)&&a(m,P,g[P],null,$,p.children,y,C,Ee);for(const P in b){if(_r(P))continue;const k=b[P],O=g[P];k!==O&&P!=="value"&&a(m,P,O,k,$,p.children,y,C,Ee)}"value"in b&&a(m,"value",g.value,b.value,$)}},_e=(m,p,g,b,y,C,$,P,k)=>{const O=p.el=m?m.el:s(""),j=p.anchor=m?m.anchor:s("");let{patchFlag:B,dynamicChildren:D,slotScopeIds:z}=p;z&&(P=P?P.concat(z):z),m==null?(r(O,g,b),r(j,g,b),ge(p.children||[],g,j,y,C,$,P,k)):B>0&&B&64&&D&&m.dynamicChildren?(Se(m.dynamicChildren,D,g,y,C,$,P),(p.key!=null||y&&p===y.subTree)&&Tl(m,p,!0)):X(m,p,g,j,y,C,$,P,k)},Re=(m,p,g,b,y,C,$,P,k)=>{p.slotScopeIds=P,m==null?p.shapeFlag&512?y.ctx.activate(p,g,b,$,k):Qe(p,g,b,y,C,$,k):ut(m,p,k)},Qe=(m,p,g,b,y,C,$)=>{const P=m.component=hf(m,b,y);if(_l(m)&&(P.ctx.renderer=M),vf(P),P.asyncDep){if(y&&y.registerDep(P,ve),!m.el){const k=P.subTree=q(Bt);v(null,k,p,g)}}else ve(P,m,p,g,y,C,$)},ut=(m,p,g)=>{const b=p.component=m.component;if(Sc(m,p,g))if(b.asyncDep&&!b.asyncResolved){Z(b,p,g);return}else b.next=p,vc(b.update),b.effect.dirty=!0,b.update();else p.el=m.el,b.vnode=p},ve=(m,p,g,b,y,C,$)=>{const P=()=>{if(m.isMounted){let{next:j,bu:B,u:D,parent:z,vnode:K}=m;{const rn=Il(m);if(rn){j&&(j.el=K.el,Z(m,j,$)),rn.asyncDep.then(()=>{m.isUnmounted||P()});return}}let ae=j,de;Kt(m,!1),j?(j.el=K.el,Z(m,j,$)):j=K,B&&li(B),(de=j.props&&j.props.onVnodeBeforeUpdate)&&ft(de,z,j,K),Kt(m,!0);const Te=ci(m),rt=m.subTree;m.subTree=Te,E(rt,Te,f(rt.el),S(rt),m,y,C),j.el=Te.el,ae===null&&Ec(m,Te.el),D&&Ve(D,y),(de=j.props&&j.props.onVnodeUpdated)&&Ve(()=>ft(de,z,j,K),y)}else{let j;const{el:B,props:D}=p,{bm:z,m:K,parent:ae}=m,de=kn(p);if(Kt(m,!1),z&&li(z),!de&&(j=D&&D.onVnodeBeforeMount)&&ft(j,ae,p),Kt(m,!0),B&&ie){const Te=()=>{m.subTree=ci(m),ie(B,m.subTree,m,y,null)};de?p.type.__asyncLoader().then(()=>!m.isUnmounted&&Te()):Te()}else{const Te=m.subTree=ci(m);E(null,Te,g,b,m,y,C),p.el=Te.el}if(K&&Ve(K,y),!de&&(j=D&&D.onVnodeMounted)){const Te=p;Ve(()=>ft(j,ae,Te),y)}(p.shapeFlag&256||ae&&kn(ae.vnode)&&ae.vnode.shapeFlag&256)&&m.a&&Ve(m.a,y),m.isMounted=!0,p=g=b=null}},k=m.effect=new ga(P,Ze,()=>Oa(O),m.scope),O=m.update=()=>{k.dirty&&k.run()};O.id=m.uid,Kt(m,!0),O()},Z=(m,p,g)=>{p.component=m;const b=m.vnode.props;m.vnode=p,m.next=null,ef(m,p.props,b,g),rf(m,p.children,g),tn(),ao(m),nn()},X=(m,p,g,b,y,C,$,P,k=!1)=>{const O=m&&m.children,j=m?m.shapeFlag:0,B=p.children,{patchFlag:D,shapeFlag:z}=p;if(D>0){if(D&128){tt(O,B,g,b,y,C,$,P,k);return}else if(D&256){Je(O,B,g,b,y,C,$,P,k);return}}z&8?(j&16&&Ee(O,y,C),B!==O&&c(g,B)):j&16?z&16?tt(O,B,g,b,y,C,$,P,k):Ee(O,y,C,!0):(j&8&&c(g,""),z&16&&ge(B,g,b,y,C,$,P,k))},Je=(m,p,g,b,y,C,$,P,k)=>{m=m||ln,p=p||ln;const O=m.length,j=p.length,B=Math.min(O,j);let D;for(D=0;D<B;D++){const z=p[D]=k?jt(p[D]):dt(p[D]);E(m[D],z,g,null,y,C,$,P,k)}O>j?Ee(m,y,C,!0,!1,B):ge(p,g,b,y,C,$,P,k,B)},tt=(m,p,g,b,y,C,$,P,k)=>{let O=0;const j=p.length;let B=m.length-1,D=j-1;for(;O<=B&&O<=D;){const z=m[O],K=p[O]=k?jt(p[O]):dt(p[O]);if(On(z,K))E(z,K,g,null,y,C,$,P,k);else break;O++}for(;O<=B&&O<=D;){const z=m[B],K=p[D]=k?jt(p[D]):dt(p[D]);if(On(z,K))E(z,K,g,null,y,C,$,P,k);else break;B--,D--}if(O>B){if(O<=D){const z=D+1,K=z<j?p[z].el:b;for(;O<=D;)E(null,p[O]=k?jt(p[O]):dt(p[O]),g,K,y,C,$,P,k),O++}}else if(O>D)for(;O<=B;)be(m[O],y,C,!0),O++;else{const z=O,K=O,ae=new Map;for(O=K;O<=D;O++){const qe=p[O]=k?jt(p[O]):dt(p[O]);qe.key!=null&&ae.set(qe.key,O)}let de,Te=0;const rt=D-K+1;let rn=!1,qa=0;const En=new Array(rt);for(O=0;O<rt;O++)En[O]=0;for(O=z;O<=B;O++){const qe=m[O];if(Te>=rt){be(qe,y,C,!0);continue}let ct;if(qe.key!=null)ct=ae.get(qe.key);else for(de=K;de<=D;de++)if(En[de-K]===0&&On(qe,p[de])){ct=de;break}ct===void 0?be(qe,y,C,!0):(En[ct-K]=O+1,ct>=qa?qa=ct:rn=!0,E(qe,p[ct],g,null,y,C,$,P,k),Te++)}const Ga=rn?lf(En):ln;for(de=Ga.length-1,O=rt-1;O>=0;O--){const qe=K+O,ct=p[qe],Xa=qe+1<j?p[qe+1].el:b;En[O]===0?E(null,ct,g,Xa,y,C,$,P,k):rn&&(de<0||O!==Ga[de]?Ye(ct,g,Xa,2):de--)}}},Ye=(m,p,g,b,y=null)=>{const{el:C,type:$,transition:P,children:k,shapeFlag:O}=m;if(O&6){Ye(m.component.subTree,p,g,b);return}if(O&128){m.suspense.move(p,g,b);return}if(O&64){$.move(m,p,g,M);return}if($===Be){r(C,p,g);for(let B=0;B<k.length;B++)Ye(k[B],p,g,b);r(m.anchor,p,g);return}if($===Sr){A(m,p,g);return}if(b!==2&&O&1&&P)if(b===0)P.beforeEnter(C),r(C,p,g),Ve(()=>P.enter(C),y);else{const{leave:B,delayLeave:D,afterLeave:z}=P,K=()=>r(C,p,g),ae=()=>{B(C,()=>{K(),z&&z()})};D?D(C,K,ae):ae()}else r(C,p,g)},be=(m,p,g,b=!1,y=!1)=>{const{type:C,props:$,ref:P,children:k,dynamicChildren:O,shapeFlag:j,patchFlag:B,dirs:D}=m;if(P!=null&&Fi(P,null,g,m,!0),j&256){p.ctx.deactivate(m);return}const z=j&1&&D,K=!kn(m);let ae;if(K&&(ae=$&&$.onVnodeBeforeUnmount)&&ft(ae,p,m),j&6)At(m.component,g,b);else{if(j&128){m.suspense.unmount(g,b);return}z&&Wt(m,null,p,"beforeUnmount"),j&64?m.type.remove(m,p,g,y,M,b):O&&(C!==Be||B>0&&B&64)?Ee(O,p,g,!1,!0):(C===Be&&B&384||!y&&j&16)&&Ee(k,p,g),b&&He(m)}(K&&(ae=$&&$.onVnodeUnmounted)||z)&&Ve(()=>{ae&&ft(ae,p,m),z&&Wt(m,null,p,"unmounted")},g)},He=m=>{const{type:p,el:g,anchor:b,transition:y}=m;if(p===Be){nt(g,b);return}if(p===Sr){L(m);return}const C=()=>{i(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(m.shapeFlag&1&&y&&!y.persisted){const{leave:$,delayLeave:P}=y,k=()=>$(g,C);P?P(m.el,C,k):k()}else C()},nt=(m,p)=>{let g;for(;m!==p;)g=d(m),i(m),m=g;i(p)},At=(m,p,g)=>{const{bum:b,scope:y,update:C,subTree:$,um:P}=m;b&&li(b),y.stop(),C&&(C.active=!1,be($,m,p,g)),P&&Ve(P,p),Ve(()=>{m.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ee=(m,p,g,b=!1,y=!1,C=0)=>{for(let $=C;$<m.length;$++)be(m[$],p,g,b,y)},S=m=>m.shapeFlag&6?S(m.component.subTree):m.shapeFlag&128?m.suspense.next():d(m.anchor||m.el);let I=!1;const T=(m,p,g)=>{m==null?p._vnode&&be(p._vnode,null,null,!0):E(p._vnode||null,m,p,null,null,null,g),I||(I=!0,ao(),pl(),I=!1),p._vnode=m},M={p:E,um:be,m:Ye,r:He,mt:Qe,mc:ge,pc:X,pbc:Se,n:S,o:e};let G,ie;return t&&([G,ie]=t(M)),{render:T,hydrate:G,createApp:Jc(T,G)}}function di({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Kt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function sf(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Tl(e,t,n=!1){const r=e.children,i=t.children;if(V(r)&&V(i))for(let a=0;a<r.length;a++){const o=r[a];let s=i[a];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=i[a]=jt(i[a]),s.el=o.el),n||Tl(o,s)),s.type===Xr&&(s.el=o.el)}}function lf(e){const t=e.slice(),n=[0];let r,i,a,o,s;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(i=n[n.length-1],e[i]<u){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<u?a=s+1:o=s;u<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}function Il(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Il(t)}const uf=e=>e.__isTeleport,Be=Symbol.for("v-fgt"),Xr=Symbol.for("v-txt"),Bt=Symbol.for("v-cmt"),Sr=Symbol.for("v-stc"),Tn=[];let at=null;function ce(e=!1){Tn.push(at=e?null:[])}function cf(){Tn.pop(),at=Tn[Tn.length-1]||null}let zn=1;function bo(e){zn+=e}function Rl(e){return e.dynamicChildren=zn>0?at||ln:null,cf(),zn>0&&at&&at.push(e),e}function Oe(e,t,n,r,i,a){return Rl(ee(e,t,n,r,i,a,!0))}function gn(e,t,n,r,i){return Rl(q(e,t,n,r,i,!0))}function Rr(e){return e?e.__v_isVNode===!0:!1}function On(e,t){return e.type===t.type&&e.key===t.key}const Qr="__vInternal",jl=({key:e})=>e??null,Er=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ke(e)||Ke(e)||U(e)?{i:Ce,r:e,k:t,f:!!n}:e:null);function ee(e,t=null,n=null,r=0,i=null,a=e===Be?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&jl(t),ref:t&&Er(t),scopeId:gl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ce};return s?($a(l,n),a&128&&e.normalize(l)):n&&(l.shapeFlag|=ke(n)?8:16),zn>0&&!o&&at&&(l.patchFlag>0||a&6)&&l.patchFlag!==32&&at.push(l),l}const q=ff;function ff(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===Pc)&&(e=Bt),Rr(e)){const s=Ht(e,t,!0);return n&&$a(s,n),zn>0&&!a&&at&&(s.shapeFlag&6?at[at.indexOf(e)]=s:at.push(s)),s.patchFlag|=-2,s}if(xf(e)&&(e=e.__vccOpts),t){t=df(t);let{class:s,style:l}=t;s&&!ke(s)&&(t.class=Fn(s)),me(l)&&(al(l)&&!V(l)&&(l=Me({},l)),t.style=ha(l))}const o=ke(e)?1:Ac(e)?128:uf(e)?64:me(e)?4:U(e)?2:0;return ee(e,t,n,r,i,o,a,!0)}function df(e){return e?al(e)||Qr in e?Me({},e):e:null}function Ht(e,t,n=!1){const{props:r,ref:i,patchFlag:a,children:o}=e,s=t?we(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&jl(s),ref:t&&t.ref?n&&i?V(i)?i.concat(Er(t)):[i,Er(t)]:Er(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Be?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ht(e.ssContent),ssFallback:e.ssFallback&&Ht(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function dn(e=" ",t=0){return q(Xr,null,e,t)}function Ml(e,t){const n=q(Sr,null,e);return n.staticCount=t,n}function bt(e="",t=!1){return t?(ce(),gn(Bt,null,e)):q(Bt,null,e)}function dt(e){return e==null||typeof e=="boolean"?q(Bt):V(e)?q(Be,null,e.slice()):typeof e=="object"?jt(e):q(Xr,null,String(e))}function jt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ht(e)}function $a(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(V(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),$a(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(Qr in t)?t._ctx=Ce:i===3&&Ce&&(Ce.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else U(t)?(t={default:t,_ctx:Ce},n=32):(t=String(t),r&64?(n=16,t=[dn(t)]):n=8);e.children=t,e.shapeFlag|=n}function we(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=Fn([t.class,r.class]));else if(i==="style")t.style=ha([t.style,r.style]);else if(Hr(i)){const a=t[i],o=r[i];o&&a!==o&&!(V(a)&&a.includes(o))&&(t[i]=a?[].concat(a,o):o)}else i!==""&&(t[i]=r[i])}return t}function ft(e,t,n,r=null){st(e,t,7,[n,r])}const pf=Ol();let mf=0;function hf(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||pf,a={uid:mf++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Vu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cl(r,i),emitsOptions:hl(r,i),emit:null,emitted:null,propsDefaults:le,inheritAttrs:r.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=wc.bind(null,a),e.ce&&e.ce(a),a}let je=null;const gf=()=>je||Ce;let jr,Di;{const e=Vs(),t=(n,r)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(r),a=>{i.length>1?i.forEach(o=>o(a)):i[0](a)}};jr=t("__VUE_INSTANCE_SETTERS__",n=>je=n),Di=t("__VUE_SSR_SETTERS__",n=>Jr=n)}const nr=e=>{const t=je;return jr(e),e.scope.on(),()=>{e.scope.off(),jr(t)}},yo=()=>{je&&je.scope.off(),jr(null)};function Nl(e){return e.vnode.shapeFlag&4}let Jr=!1;function vf(e,t=!1){t&&Di(t);const{props:n,children:r}=e.vnode,i=Nl(e);Zc(e,n,i,t),nf(e,r);const a=i?bf(e,t):void 0;return t&&Di(!1),a}function bf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ol(new Proxy(e.ctx,Wc));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?wf(e):null,a=nr(e);tn();const o=Ft(r,e,0,[e.props,i]);if(nn(),a(),Bs(o)){if(o.then(yo,yo),t)return o.then(s=>{wo(e,s,t)}).catch(s=>{Kr(s,e,0)});e.asyncDep=o}else wo(e,o,t)}else Ll(e,t)}function wo(e,t,n){U(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:me(t)&&(e.setupState=cl(t)),Ll(e,n)}let _o;function Ll(e,t,n){const r=e.type;if(!e.render){if(!t&&_o&&!r.render){const i=r.template||Aa(e).template;if(i){const{isCustomElement:a,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,u=Me(Me({isCustomElement:a,delimiters:s},o),l);r.render=_o(i,u)}}e.render=r.render||Ze}{const i=nr(e);tn();try{Kc(e)}finally{nn(),i()}}}function yf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return We(e,"get","$attrs"),t[n]}}))}function wf(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return yf(e)},slots:e.slots,emit:e.emit,expose:t}}function Zr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(cl(ol(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in $n)return $n[n](e)},has(t,n){return n in t||n in $n}}))}function _f(e,t=!0){return U(e)?e.displayName||e.name:e.name||t&&e.__name}function xf(e){return U(e)&&"__vccOpts"in e}const Pe=(e,t)=>fc(e,t,Jr);function Ae(e,t,n){const r=arguments.length;return r===2?me(t)&&!V(t)?Rr(t)?q(e,null,[t]):q(e,t):q(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Rr(n)&&(n=[n]),q(e,t,n))}const Sf="3.4.15";/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Ef="http://www.w3.org/2000/svg",Of="http://www.w3.org/1998/Math/MathML",Mt=typeof document<"u"?document:null,xo=Mt&&Mt.createElement("template"),Pf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t==="svg"?Mt.createElementNS(Ef,e):t==="mathml"?Mt.createElementNS(Of,e):Mt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>Mt.createTextNode(e),createComment:e=>Mt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Mt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,a){const o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{xo.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const s=xo.content;if(r==="svg"||r==="mathml"){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Cf=Symbol("_vtc");function Af(e,t,n){const r=e[Cf];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const kf=Symbol("_vod"),$f=Symbol("");function Tf(e,t,n){const r=e.style,i=r.display,a=ke(n);if(n&&!a){if(t&&!ke(t))for(const o in t)n[o]==null&&Bi(r,o,"");for(const o in n)Bi(r,o,n[o])}else if(a){if(t!==n){const o=r[$f];o&&(n+=";"+o),r.cssText=n}}else t&&e.removeAttribute("style");kf in e&&(r.display=i)}const So=/\s*!important$/;function Bi(e,t,n){if(V(n))n.forEach(r=>Bi(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=If(e,t);So.test(n)?e.setProperty(_n(r),n.replace(So,""),"important"):e[r]=n}}const Eo=["Webkit","Moz","ms"],pi={};function If(e,t){const n=pi[t];if(n)return n;let r=ht(t);if(r!=="filter"&&r in e)return pi[t]=r;r=Ur(r);for(let i=0;i<Eo.length;i++){const a=Eo[i]+r;if(a in e)return pi[t]=a}return t}const Oo="http://www.w3.org/1999/xlink";function Rf(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Oo,t.slice(6,t.length)):e.setAttributeNS(Oo,t,n);else{const a=zu(t);n==null||a&&!Us(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function jf(e,t,n,r,i,a,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,i,a),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const u=s==="OPTION"?e.getAttribute("value"):e.value,c=n??"";u!==c&&(e.value=c),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const u=typeof e[t];u==="boolean"?n=Us(n):n==null&&u==="string"?(n="",l=!0):u==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Mf(e,t,n,r){e.addEventListener(t,n,r)}function Nf(e,t,n,r){e.removeEventListener(t,n,r)}const Po=Symbol("_vei");function Lf(e,t,n,r,i=null){const a=e[Po]||(e[Po]={}),o=a[t];if(r&&o)o.value=r;else{const[s,l]=Ff(t);if(r){const u=a[t]=Hf(r,i);Mf(e,s,u,l)}else o&&(Nf(e,s,o,l),a[t]=void 0)}}const Co=/(?:Once|Passive|Capture)$/;function Ff(e){let t;if(Co.test(e)){t={};let r;for(;r=e.match(Co);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):_n(e.slice(2)),t]}let mi=0;const Df=Promise.resolve(),Bf=()=>mi||(Df.then(()=>mi=0),mi=Date.now());function Hf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;st(zf(r,n.value),t,5,[r])};return n.value=e,n.attached=Bf(),n}function zf(e,t){if(V(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const Ao=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Vf=(e,t,n,r,i,a,o,s,l)=>{const u=i==="svg";t==="class"?Af(e,r,u):t==="style"?Tf(e,n,r):Hr(t)?da(t)||Lf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Uf(e,t,r,u))?jf(e,t,r,a,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Rf(e,t,r,u))};function Uf(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Ao(t)&&U(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Ao(t)&&ke(n)?!1:t in e}const Wf=Me({patchProp:Vf},Pf);let ko;function Kf(){return ko||(ko=af(Wf))}const Yf=(...e)=>{const t=Kf().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=Gf(r);if(!i)return;const a=t._component;!U(a)&&!a.render&&!a.template&&(a.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,qf(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function qf(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Gf(e){return ke(e)?document.querySelector(e):e}const Xf={class:"nav-container"},Qf={class:"nav-btns"},Jf={class:"reading button"},Zf={class:"writing button"},ed={class:"math button"},td={class:"setting-icon-container"},nd={__name:"Navbar",setup(e){return(t,n)=>{const r=hn("font-awesome-icon"),i=hn("router-link");return ce(),Oe("nav",Xf,[q(i,{class:"home-icon",to:"/"},{default:Ue(()=>[q(r,{class:"brain-icon",icon:"fa-solid fa-brain",size:"2xl",style:{color:"#FFD43B"}}),q(r,{class:"lightbulb-icon",icon:"fa-solid fa-lightbulb",size:"2xl",style:{color:"#63E6BE"}})]),_:1}),ee("div",Qf,[ee("button",Jf,[q(i,{to:"/read"},{default:Ue(()=>[q(r,{icon:"fa-solid fa-book",size:"xl",style:{color:"#63E6BE"}}),dn(" Reading")]),_:1})]),ee("button",Zf,[q(i,{to:"/write"},{default:Ue(()=>[q(r,{icon:"fa-solid fa-pen",size:"xl",style:{color:"#B197FC"}}),dn(" Writing")]),_:1})]),ee("button",ed,[q(i,{to:"/math"},{default:Ue(()=>[q(r,{icon:"fa-solid fa-square-root-variable",size:"xl",style:{color:"#ff8ae9"}}),dn(" Math")]),_:1})])]),ee("div",td,[q(i,{to:"/settings"},{default:Ue(()=>[q(r,{class:"setting-icon",icon:"fa-solid fa-gear",size:"2xl",style:{color:"#B197FC"}})]),_:1})])])}}},rd={__name:"App",setup(e){return(t,n)=>{const r=hn("router-view");return ce(),Oe(Be,null,[q(nd),q(r)],64)}}};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const an=typeof window<"u";function id(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const re=Object.assign;function hi(e,t){const n={};for(const r in t){const i=t[r];n[r]=lt(i)?i.map(e):e(i)}return n}const In=()=>{},lt=Array.isArray,ad=/\/$/,od=e=>e.replace(ad,"");function gi(e,t,n="/"){let r,i={},a="",o="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),a=t.slice(l+1,s>-1?s:t.length),i=e(a)),s>-1&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=cd(r??t,n),{fullPath:r+(a&&"?")+a+o,path:r,query:i,hash:o}}function sd(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function $o(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function ld(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&vn(t.matched[r],n.matched[i])&&Fl(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function vn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Fl(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!ud(e[n],t[n]))return!1;return!0}function ud(e,t){return lt(e)?To(e,t):lt(t)?To(t,e):e===t}function To(e,t){return lt(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function cd(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let a=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==".")if(s==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Vn;(function(e){e.pop="pop",e.push="push"})(Vn||(Vn={}));var Rn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Rn||(Rn={}));function fd(e){if(!e)if(an){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),od(e)}const dd=/^[^#]+#/;function pd(e,t){return e.replace(dd,"#")+t}function md(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ei=()=>({left:window.pageXOffset,top:window.pageYOffset});function hd(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=md(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Io(e,t){return(history.state?history.state.position-t:-1)+e}const Hi=new Map;function gd(e,t){Hi.set(e,t)}function vd(e){const t=Hi.get(e);return Hi.delete(e),t}let bd=()=>location.protocol+"//"+location.host;function Dl(e,t){const{pathname:n,search:r,hash:i}=t,a=e.indexOf("#");if(a>-1){let s=i.includes(e.slice(a))?e.slice(a).length:1,l=i.slice(s);return l[0]!=="/"&&(l="/"+l),$o(l,"")}return $o(n,e)+r+i}function yd(e,t,n,r){let i=[],a=[],o=null;const s=({state:d})=>{const h=Dl(e,location),_=n.value,E=t.value;let w=0;if(d){if(n.value=h,t.value=d,o&&o===_){o=null;return}w=E?d.position-E.position:0}else r(h);i.forEach(v=>{v(n.value,_,{delta:w,type:Vn.pop,direction:w?w>0?Rn.forward:Rn.back:Rn.unknown})})};function l(){o=n.value}function u(d){i.push(d);const h=()=>{const _=i.indexOf(d);_>-1&&i.splice(_,1)};return a.push(h),h}function c(){const{history:d}=window;d.state&&d.replaceState(re({},d.state,{scroll:ei()}),"")}function f(){for(const d of a)d();a=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:l,listen:u,destroy:f}}function Ro(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?ei():null}}function wd(e){const{history:t,location:n}=window,r={value:Dl(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(l,u,c){const f=e.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+l:bd()+e+l;try{t[c?"replaceState":"pushState"](u,"",d),i.value=u}catch(h){console.error(h),n[c?"replace":"assign"](d)}}function o(l,u){const c=re({},t.state,Ro(i.value.back,l,i.value.forward,!0),u,{position:i.value.position});a(l,c,!0),r.value=l}function s(l,u){const c=re({},i.value,t.state,{forward:l,scroll:ei()});a(c.current,c,!0);const f=re({},Ro(r.value,l,null),{position:c.position+1},u);a(l,f,!1),r.value=l}return{location:r,state:i,push:s,replace:o}}function _d(e){e=fd(e);const t=wd(e),n=yd(e,t.state,t.location,t.replace);function r(a,o=!0){o||n.pauseListeners(),history.go(a)}const i=re({location:"",base:e,go:r,createHref:pd.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function xd(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),_d(e)}function Sd(e){return typeof e=="string"||e&&typeof e=="object"}function Bl(e){return typeof e=="string"||typeof e=="symbol"}const $t={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Hl=Symbol("");var jo;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(jo||(jo={}));function bn(e,t){return re(new Error,{type:e,[Hl]:!0},t)}function gt(e,t){return e instanceof Error&&Hl in e&&(t==null||!!(e.type&t))}const Mo="[^/]+?",Ed={sensitive:!1,strict:!1,start:!0,end:!0},Od=/[.+*?^${}()[\]/\\]/g;function Pd(e,t){const n=re({},Ed,t),r=[];let i=n.start?"^":"";const a=[];for(const u of e){const c=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let f=0;f<u.length;f++){const d=u[f];let h=40+(n.sensitive?.25:0);if(d.type===0)f||(i+="/"),i+=d.value.replace(Od,"\\$&"),h+=40;else if(d.type===1){const{value:_,repeatable:E,optional:w,regexp:v}=d;a.push({name:_,repeatable:E,optional:w});const x=v||Mo;if(x!==Mo){h+=10;try{new RegExp(`(${x})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${_}" (${x}): `+L.message)}}let A=E?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;f||(A=w&&u.length<2?`(?:/${A})`:"/"+A),w&&(A+="?"),i+=A,h+=20,w&&(h+=-8),E&&(h+=-20),x===".*"&&(h+=-50)}c.push(h)}r.push(c)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function s(u){const c=u.match(o),f={};if(!c)return null;for(let d=1;d<c.length;d++){const h=c[d]||"",_=a[d-1];f[_.name]=h&&_.repeatable?h.split("/"):h}return f}function l(u){let c="",f=!1;for(const d of e){(!f||!c.endsWith("/"))&&(c+="/"),f=!1;for(const h of d)if(h.type===0)c+=h.value;else if(h.type===1){const{value:_,repeatable:E,optional:w}=h,v=_ in u?u[_]:"";if(lt(v)&&!E)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const x=lt(v)?v.join("/"):v;if(!x)if(w)d.length<2&&(c.endsWith("/")?c=c.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);c+=x}}return c||"/"}return{re:o,score:r,keys:a,parse:s,stringify:l}}function Cd(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Ad(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const a=Cd(r[n],i[n]);if(a)return a;n++}if(Math.abs(i.length-r.length)===1){if(No(r))return 1;if(No(i))return-1}return i.length-r.length}function No(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const kd={type:0,value:""},$d=/[a-zA-Z0-9_]/;function Td(e){if(!e)return[[]];if(e==="/")return[[kd]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(h){throw new Error(`ERR (${n})/"${u}": ${h}`)}let n=0,r=n;const i=[];let a;function o(){a&&i.push(a),a=[]}let s=0,l,u="",c="";function f(){u&&(n===0?a.push({type:0,value:u}):n===1||n===2||n===3?(a.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),u="")}function d(){u+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&f(),o()):l===":"?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:$d.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),f(),o(),i}function Id(e,t,n){const r=Pd(Td(e.path),n),i=re(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Rd(e,t){const n=[],r=new Map;t=Do({strict:!1,end:!0,sensitive:!1},t);function i(c){return r.get(c)}function a(c,f,d){const h=!d,_=jd(c);_.aliasOf=d&&d.record;const E=Do(t,c),w=[_];if("alias"in c){const A=typeof c.alias=="string"?[c.alias]:c.alias;for(const L of A)w.push(re({},_,{components:d?d.record.components:_.components,path:L,aliasOf:d?d.record:_}))}let v,x;for(const A of w){const{path:L}=A;if(f&&L[0]!=="/"){const H=f.record.path,F=H[H.length-1]==="/"?"":"/";A.path=f.record.path+(L&&F+L)}if(v=Id(A,f,E),d?d.alias.push(v):(x=x||v,x!==v&&x.alias.push(v),h&&c.name&&!Fo(v)&&o(c.name)),_.children){const H=_.children;for(let F=0;F<H.length;F++)a(H[F],v,d&&d.children[F])}d=d||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&l(v)}return x?()=>{o(x)}:In}function o(c){if(Bl(c)){const f=r.get(c);f&&(r.delete(c),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(c);f>-1&&(n.splice(f,1),c.record.name&&r.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function s(){return n}function l(c){let f=0;for(;f<n.length&&Ad(c,n[f])>=0&&(c.record.path!==n[f].record.path||!zl(c,n[f]));)f++;n.splice(f,0,c),c.record.name&&!Fo(c)&&r.set(c.record.name,c)}function u(c,f){let d,h={},_,E;if("name"in c&&c.name){if(d=r.get(c.name),!d)throw bn(1,{location:c});E=d.record.name,h=re(Lo(f.params,d.keys.filter(x=>!x.optional).map(x=>x.name)),c.params&&Lo(c.params,d.keys.map(x=>x.name))),_=d.stringify(h)}else if("path"in c)_=c.path,d=n.find(x=>x.re.test(_)),d&&(h=d.parse(_),E=d.record.name);else{if(d=f.name?r.get(f.name):n.find(x=>x.re.test(f.path)),!d)throw bn(1,{location:c,currentLocation:f});E=d.record.name,h=re({},f.params,c.params),_=d.stringify(h)}const w=[];let v=d;for(;v;)w.unshift(v.record),v=v.parent;return{name:E,path:_,params:h,matched:w,meta:Nd(w)}}return e.forEach(c=>a(c)),{addRoute:a,resolve:u,removeRoute:o,getRoutes:s,getRecordMatcher:i}}function Lo(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function jd(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Md(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Md(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Fo(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Nd(e){return e.reduce((t,n)=>re(t,n.meta),{})}function Do(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function zl(e,t){return t.children.some(n=>n===e||zl(e,n))}const Vl=/#/g,Ld=/&/g,Fd=/\//g,Dd=/=/g,Bd=/\?/g,Ul=/\+/g,Hd=/%5B/g,zd=/%5D/g,Wl=/%5E/g,Vd=/%60/g,Kl=/%7B/g,Ud=/%7C/g,Yl=/%7D/g,Wd=/%20/g;function Ta(e){return encodeURI(""+e).replace(Ud,"|").replace(Hd,"[").replace(zd,"]")}function Kd(e){return Ta(e).replace(Kl,"{").replace(Yl,"}").replace(Wl,"^")}function zi(e){return Ta(e).replace(Ul,"%2B").replace(Wd,"+").replace(Vl,"%23").replace(Ld,"%26").replace(Vd,"`").replace(Kl,"{").replace(Yl,"}").replace(Wl,"^")}function Yd(e){return zi(e).replace(Dd,"%3D")}function qd(e){return Ta(e).replace(Vl,"%23").replace(Bd,"%3F")}function Gd(e){return e==null?"":qd(e).replace(Fd,"%2F")}function Mr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Xd(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const a=r[i].replace(Ul," "),o=a.indexOf("="),s=Mr(o<0?a:a.slice(0,o)),l=o<0?null:Mr(a.slice(o+1));if(s in t){let u=t[s];lt(u)||(u=t[s]=[u]),u.push(l)}else t[s]=l}return t}function Bo(e){let t="";for(let n in e){const r=e[n];if(n=Yd(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(lt(r)?r.map(a=>a&&zi(a)):[r&&zi(r)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+n,a!=null&&(t+="="+a))})}return t}function Qd(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=lt(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return t}const Jd=Symbol(""),Ho=Symbol(""),Ia=Symbol(""),ql=Symbol(""),Vi=Symbol("");function Pn(){let e=[];function t(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Nt(e,t,n,r,i){const a=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,s)=>{const l=f=>{f===!1?s(bn(4,{from:n,to:t})):f instanceof Error?s(f):Sd(f)?s(bn(2,{from:t,to:f})):(a&&r.enterCallbacks[i]===a&&typeof f=="function"&&a.push(f),o())},u=e.call(r&&r.instances[i],t,n,l);let c=Promise.resolve(u);e.length<3&&(c=c.then(l)),c.catch(f=>s(f))})}function vi(e,t,n,r){const i=[];for(const a of e)for(const o in a.components){let s=a.components[o];if(!(t!=="beforeRouteEnter"&&!a.instances[o]))if(Zd(s)){const u=(s.__vccOpts||s)[t];u&&i.push(Nt(u,n,r,a,o))}else{let l=s();i.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${a.path}"`));const c=id(u)?u.default:u;a.components[o]=c;const d=(c.__vccOpts||c)[t];return d&&Nt(d,n,r,a,o)()}))}}return i}function Zd(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function zo(e){const t=se(Ia),n=se(ql),r=Pe(()=>t.resolve(De(e.to))),i=Pe(()=>{const{matched:l}=r.value,{length:u}=l,c=l[u-1],f=n.matched;if(!c||!f.length)return-1;const d=f.findIndex(vn.bind(null,c));if(d>-1)return d;const h=Vo(l[u-2]);return u>1&&Vo(c)===h&&f[f.length-1].path!==h?f.findIndex(vn.bind(null,l[u-2])):d}),a=Pe(()=>i.value>-1&&rp(n.params,r.value.params)),o=Pe(()=>i.value>-1&&i.value===n.matched.length-1&&Fl(n.params,r.value.params));function s(l={}){return np(l)?t[De(e.replace)?"replace":"push"](De(e.to)).catch(In):Promise.resolve()}return{route:r,href:Pe(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}const ep=xn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:zo,setup(e,{slots:t}){const n=et(zo(e)),{options:r}=se(Ia),i=Pe(()=>({[Uo(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Uo(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=t.default&&t.default(n);return e.custom?a:Ae("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},a)}}}),tp=ep;function np(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function rp(e,t){for(const n in t){const r=t[n],i=e[n];if(typeof r=="string"){if(r!==i)return!1}else if(!lt(i)||i.length!==r.length||r.some((a,o)=>a!==i[o]))return!1}return!0}function Vo(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Uo=(e,t,n)=>e??t??n,ip=xn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=se(Vi),i=Pe(()=>e.route||r.value),a=se(Ho,0),o=Pe(()=>{let u=De(a);const{matched:c}=i.value;let f;for(;(f=c[u])&&!f.components;)u++;return u}),s=Pe(()=>i.value.matched[o.value]);Ge(Ho,Pe(()=>o.value+1)),Ge(Jd,s),Ge(Vi,i);const l=oe();return _t(()=>[l.value,s.value,e.name],([u,c,f],[d,h,_])=>{c&&(c.instances[f]=u,h&&h!==c&&u&&u===d&&(c.leaveGuards.size||(c.leaveGuards=h.leaveGuards),c.updateGuards.size||(c.updateGuards=h.updateGuards))),u&&c&&(!h||!vn(c,h)||!d)&&(c.enterCallbacks[f]||[]).forEach(E=>E(u))},{flush:"post"}),()=>{const u=i.value,c=e.name,f=s.value,d=f&&f.components[c];if(!d)return Wo(n.default,{Component:d,route:u});const h=f.props[c],_=h?h===!0?u.params:typeof h=="function"?h(u):h:null,w=Ae(d,re({},_,t,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(f.instances[c]=null)},ref:l}));return Wo(n.default,{Component:w,route:u})||w}}});function Wo(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const ap=ip;function op(e){const t=Rd(e.routes,e),n=e.parseQuery||Xd,r=e.stringifyQuery||Bo,i=e.history,a=Pn(),o=Pn(),s=Pn(),l=dc($t);let u=$t;an&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=hi.bind(null,S=>""+S),f=hi.bind(null,Gd),d=hi.bind(null,Mr);function h(S,I){let T,M;return Bl(S)?(T=t.getRecordMatcher(S),M=I):M=S,t.addRoute(M,T)}function _(S){const I=t.getRecordMatcher(S);I&&t.removeRoute(I)}function E(){return t.getRoutes().map(S=>S.record)}function w(S){return!!t.getRecordMatcher(S)}function v(S,I){if(I=re({},I||l.value),typeof S=="string"){const p=gi(n,S,I.path),g=t.resolve({path:p.path},I),b=i.createHref(p.fullPath);return re(p,g,{params:d(g.params),hash:Mr(p.hash),redirectedFrom:void 0,href:b})}let T;if("path"in S)T=re({},S,{path:gi(n,S.path,I.path).path});else{const p=re({},S.params);for(const g in p)p[g]==null&&delete p[g];T=re({},S,{params:f(p)}),I.params=f(I.params)}const M=t.resolve(T,I),G=S.hash||"";M.params=c(d(M.params));const ie=sd(r,re({},S,{hash:Kd(G),path:M.path})),m=i.createHref(ie);return re({fullPath:ie,hash:G,query:r===Bo?Qd(S.query):S.query||{}},M,{redirectedFrom:void 0,href:m})}function x(S){return typeof S=="string"?gi(n,S,l.value.path):re({},S)}function A(S,I){if(u!==S)return bn(8,{from:I,to:S})}function L(S){return W(S)}function H(S){return L(re(x(S),{replace:!0}))}function F(S){const I=S.matched[S.matched.length-1];if(I&&I.redirect){const{redirect:T}=I;let M=typeof T=="function"?T(S):T;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=x(M):{path:M},M.params={}),re({query:S.query,hash:S.hash,params:"path"in M?{}:S.params},M)}}function W(S,I){const T=u=v(S),M=l.value,G=S.state,ie=S.force,m=S.replace===!0,p=F(T);if(p)return W(re(x(p),{state:typeof p=="object"?re({},G,p.state):G,force:ie,replace:m}),I||T);const g=T;g.redirectedFrom=I;let b;return!ie&&ld(r,M,T)&&(b=bn(16,{to:g,from:M}),Ye(M,M,!0,!1)),(b?Promise.resolve(b):Se(g,M)).catch(y=>gt(y)?gt(y,2)?y:tt(y):X(y,g,M)).then(y=>{if(y){if(gt(y,2))return W(re({replace:m},x(y.to),{state:typeof y.to=="object"?re({},G,y.to.state):G,force:ie}),I||g)}else y=_e(g,M,!0,m,G);return Le(g,M,y),y})}function ge(S,I){const T=A(S,I);return T?Promise.reject(T):Promise.resolve()}function J(S){const I=nt.values().next().value;return I&&typeof I.runWithContext=="function"?I.runWithContext(S):S()}function Se(S,I){let T;const[M,G,ie]=sp(S,I);T=vi(M.reverse(),"beforeRouteLeave",S,I);for(const p of M)p.leaveGuards.forEach(g=>{T.push(Nt(g,S,I))});const m=ge.bind(null,S,I);return T.push(m),Ee(T).then(()=>{T=[];for(const p of a.list())T.push(Nt(p,S,I));return T.push(m),Ee(T)}).then(()=>{T=vi(G,"beforeRouteUpdate",S,I);for(const p of G)p.updateGuards.forEach(g=>{T.push(Nt(g,S,I))});return T.push(m),Ee(T)}).then(()=>{T=[];for(const p of ie)if(p.beforeEnter)if(lt(p.beforeEnter))for(const g of p.beforeEnter)T.push(Nt(g,S,I));else T.push(Nt(p.beforeEnter,S,I));return T.push(m),Ee(T)}).then(()=>(S.matched.forEach(p=>p.enterCallbacks={}),T=vi(ie,"beforeRouteEnter",S,I),T.push(m),Ee(T))).then(()=>{T=[];for(const p of o.list())T.push(Nt(p,S,I));return T.push(m),Ee(T)}).catch(p=>gt(p,8)?p:Promise.reject(p))}function Le(S,I,T){s.list().forEach(M=>J(()=>M(S,I,T)))}function _e(S,I,T,M,G){const ie=A(S,I);if(ie)return ie;const m=I===$t,p=an?history.state:{};T&&(M||m?i.replace(S.fullPath,re({scroll:m&&p&&p.scroll},G)):i.push(S.fullPath,G)),l.value=S,Ye(S,I,T,m),tt()}let Re;function Qe(){Re||(Re=i.listen((S,I,T)=>{if(!At.listening)return;const M=v(S),G=F(M);if(G){W(re(G,{replace:!0}),M).catch(In);return}u=M;const ie=l.value;an&&gd(Io(ie.fullPath,T.delta),ei()),Se(M,ie).catch(m=>gt(m,12)?m:gt(m,2)?(W(m.to,M).then(p=>{gt(p,20)&&!T.delta&&T.type===Vn.pop&&i.go(-1,!1)}).catch(In),Promise.reject()):(T.delta&&i.go(-T.delta,!1),X(m,M,ie))).then(m=>{m=m||_e(M,ie,!1),m&&(T.delta&&!gt(m,8)?i.go(-T.delta,!1):T.type===Vn.pop&&gt(m,20)&&i.go(-1,!1)),Le(M,ie,m)}).catch(In)}))}let ut=Pn(),ve=Pn(),Z;function X(S,I,T){tt(S);const M=ve.list();return M.length?M.forEach(G=>G(S,I,T)):console.error(S),Promise.reject(S)}function Je(){return Z&&l.value!==$t?Promise.resolve():new Promise((S,I)=>{ut.add([S,I])})}function tt(S){return Z||(Z=!S,Qe(),ut.list().forEach(([I,T])=>S?T(S):I()),ut.reset()),S}function Ye(S,I,T,M){const{scrollBehavior:G}=e;if(!an||!G)return Promise.resolve();const ie=!T&&vd(Io(S.fullPath,0))||(M||!T)&&history.state&&history.state.scroll||null;return Yr().then(()=>G(S,I,ie)).then(m=>m&&hd(m)).catch(m=>X(m,S,I))}const be=S=>i.go(S);let He;const nt=new Set,At={currentRoute:l,listening:!0,addRoute:h,removeRoute:_,hasRoute:w,getRoutes:E,resolve:v,options:e,push:L,replace:H,go:be,back:()=>be(-1),forward:()=>be(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:ve.add,isReady:Je,install(S){const I=this;S.component("RouterLink",tp),S.component("RouterView",ap),S.config.globalProperties.$router=I,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>De(l)}),an&&!He&&l.value===$t&&(He=!0,L(i.location).catch(G=>{}));const T={};for(const G in $t)Object.defineProperty(T,G,{get:()=>l.value[G],enumerable:!0});S.provide(Ia,I),S.provide(ql,il(T)),S.provide(Vi,l);const M=S.unmount;nt.add(S),S.unmount=function(){nt.delete(S),nt.size<1&&(u=$t,Re&&Re(),Re=null,l.value=$t,He=!1,Z=!1),M()}}};function Ee(S){return S.reduce((I,T)=>I.then(()=>J(T)),Promise.resolve())}return At}function sp(e,t){const n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){const s=t.matched[o];s&&(e.matched.find(u=>vn(u,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(u=>vn(u,l))||i.push(l))}return[n,r,i]}/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */const xe={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},Ko={itemsToShow:{default:xe.itemsToShow,type:Number},itemsToScroll:{default:xe.itemsToScroll,type:Number},wrapAround:{default:xe.wrapAround,type:Boolean},throttle:{default:xe.throttle,type:Number},snapAlign:{default:xe.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:xe.transition,type:Number},breakpoints:{default:xe.breakpoints,type:Object},autoplay:{default:xe.autoplay,type:Number},pauseAutoplayOnHover:{default:xe.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:xe.mouseDrag,type:Boolean},touchDrag:{default:xe.touchDrag,type:Boolean},dir:{default:xe.dir,validator(e){return["rtl","ltr"].includes(e)}},i18n:{default:xe.i18n,type:Object},settings:{default(){return{}},type:Object}};function lp({config:e,slidesCount:t}){const{snapAlign:n,wrapAround:r,itemsToShow:i=1}=e;if(r)return Math.max(t-1,0);let a;switch(n){case"start":a=t-i;break;case"end":a=t-1;break;case"center":case"center-odd":a=t-Math.ceil((i-.5)/2);break;case"center-even":a=t-Math.ceil(i/2);break;default:a=0;break}return Math.max(a,0)}function up({config:e,slidesCount:t}){const{wrapAround:n,snapAlign:r,itemsToShow:i=1}=e;let a=0;if(n||i>t)return a;switch(r){case"start":a=0;break;case"end":a=i-1;break;case"center":case"center-odd":a=Math.floor((i-1)/2);break;case"center-even":a=Math.floor((i-2)/2);break;default:a=0;break}return a}function Ui({val:e,max:t,min:n}){return t<n?e:Math.min(Math.max(e,n),t)}function cp({config:e,currentSlide:t,slidesCount:n}){const{snapAlign:r,wrapAround:i,itemsToShow:a=1}=e;let o=t;switch(r){case"center":case"center-odd":o-=(a-1)/2;break;case"center-even":o-=(a-2)/2;break;case"end":o-=a-1;break}return i?o:Ui({val:o,max:n-a,min:0})}function Gl(e){return e?e.reduce((t,n)=>{var r;return n.type===Be?[...t,...Gl(n.children)]:((r=n.type)===null||r===void 0?void 0:r.name)==="CarouselSlide"?[...t,n]:t},[]):[]}function Nr({val:e,max:t,min:n=0}){return e>t?Nr({val:e-(t+1),max:t,min:n}):e<n?Nr({val:e+(t+1),max:t,min:n}):e}function fp(e,t){let n;return t?function(...r){const i=this;n||(e.apply(i,r),n=!0,setTimeout(()=>n=!1,t))}:e}function dp(e,t){let n;return function(...r){n&&clearTimeout(n),n=setTimeout(()=>{e(...r),n=null},t)}}function Xl(e="",t={}){return Object.entries(t).reduce((n,[r,i])=>n.replace(`{${r}}`,String(i)),e)}var pp=xn({name:"ARIA",setup(){const e=se("config",et(Object.assign({},xe))),t=se("currentSlide",oe(0)),n=se("slidesCount",oe(0));return()=>Ae("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},Xl(e.i18n.itemXofY,{currentSlide:t.value+1,slidesCount:n.value}))}}),mp=xn({name:"Carousel",props:Ko,setup(e,{slots:t,emit:n,expose:r}){var i;const a=oe(null),o=oe([]),s=oe(0),l=oe(0),u=et(Object.assign({},xe));let c=Object.assign({},xe),f;const d=oe((i=e.modelValue)!==null&&i!==void 0?i:0),h=oe(0),_=oe(0),E=oe(0),w=oe(0);let v,x;Ge("config",u),Ge("slidesCount",l),Ge("currentSlide",d),Ge("maxSlide",E),Ge("minSlide",w),Ge("slideWidth",s);function A(){f=Object.assign({},e.breakpoints),c=Object.assign(Object.assign(Object.assign({},c),e),{i18n:Object.assign(Object.assign({},c.i18n),e.i18n),breakpoints:void 0}),H(c)}function L(){if(!f||!Object.keys(f).length)return;const p=Object.keys(f).map(b=>Number(b)).sort((b,y)=>+y-+b);let g=Object.assign({},c);p.some(b=>{const y=window.matchMedia(`(min-width: ${b}px)`).matches;return y&&(g=Object.assign(Object.assign({},g),f[b])),y}),H(g)}function H(p){Object.entries(p).forEach(([g,b])=>u[g]=b)}const F=dp(()=>{L(),W()},16);function W(){if(!a.value)return;const p=a.value.getBoundingClientRect();s.value=p.width/u.itemsToShow}function ge(){l.value<=0||(_.value=Math.ceil((l.value-1)/2),E.value=lp({config:u,slidesCount:l.value}),w.value=up({config:u,slidesCount:l.value}),u.wrapAround||(d.value=Ui({val:d.value,max:E.value,min:w.value})))}Pa(()=>{Yr(()=>W()),setTimeout(()=>W(),1e3),L(),tt(),window.addEventListener("resize",F,{passive:!0}),n("init")}),Ca(()=>{x&&clearTimeout(x),v&&clearInterval(v),window.removeEventListener("resize",F,{passive:!0})});let J=!1;const Se={x:0,y:0},Le={x:0,y:0},_e=et({x:0,y:0}),Re=oe(!1),Qe=oe(!1),ut=()=>{Re.value=!0},ve=()=>{Re.value=!1};function Z(p){["INPUT","TEXTAREA","SELECT"].includes(p.target.tagName)||(J=p.type==="touchstart",J||p.preventDefault(),!(!J&&p.button!==0||be.value)&&(Se.x=J?p.touches[0].clientX:p.clientX,Se.y=J?p.touches[0].clientY:p.clientY,document.addEventListener(J?"touchmove":"mousemove",X,!0),document.addEventListener(J?"touchend":"mouseup",Je,!0)))}const X=fp(p=>{Qe.value=!0,Le.x=J?p.touches[0].clientX:p.clientX,Le.y=J?p.touches[0].clientY:p.clientY;const g=Le.x-Se.x,b=Le.y-Se.y;_e.y=b,_e.x=g},u.throttle);function Je(){const p=u.dir==="rtl"?-1:1,g=Math.sign(_e.x)*.4,b=Math.round(_e.x/s.value+g)*p;if(b&&!J){const y=C=>{C.stopPropagation(),window.removeEventListener("click",y,!0)};window.addEventListener("click",y,!0)}He(d.value-b),_e.x=0,_e.y=0,Qe.value=!1,document.removeEventListener(J?"touchmove":"mousemove",X,!0),document.removeEventListener(J?"touchend":"mouseup",Je,!0)}function tt(){!u.autoplay||u.autoplay<=0||(v=setInterval(()=>{u.pauseAutoplayOnHover&&Re.value||nt()},u.autoplay))}function Ye(){v&&(clearInterval(v),v=null),tt()}const be=oe(!1);function He(p){const g=u.wrapAround?p:Ui({val:p,max:E.value,min:w.value});d.value===g||be.value||(n("slide-start",{slidingToIndex:p,currentSlideIndex:d.value,prevSlideIndex:h.value,slidesCount:l.value}),be.value=!0,h.value=d.value,d.value=g,x=setTimeout(()=>{if(u.wrapAround){const b=Nr({val:g,max:E.value,min:0});b!==d.value&&(d.value=b,n("loop",{currentSlideIndex:d.value,slidingToIndex:p}))}n("update:modelValue",d.value),n("slide-end",{currentSlideIndex:d.value,prevSlideIndex:h.value,slidesCount:l.value}),be.value=!1,Ye()},u.transition))}function nt(){He(d.value+u.itemsToScroll)}function At(){He(d.value-u.itemsToScroll)}const Ee={slideTo:He,next:nt,prev:At};Ge("nav",Ee),Ge("isSliding",be);const S=Pe(()=>cp({config:u,currentSlide:d.value,slidesCount:l.value}));Ge("slidesToScroll",S);const I=Pe(()=>{const p=u.dir==="rtl"?-1:1,g=S.value*s.value*p;return{transform:`translateX(${_e.x-g}px)`,transition:`${be.value?u.transition:0}ms`,margin:u.wrapAround?`0 -${l.value*s.value}px`:"",width:"100%"}});function T(){A(),L(),ge(),W(),Ye()}Object.keys(Ko).forEach(p=>{["modelValue"].includes(p)||_t(()=>e[p],T)}),_t(()=>e.modelValue,p=>{p!==d.value&&He(Number(p))}),_t(l,ge),n("before-init"),A();const M={config:u,slidesCount:l,slideWidth:s,next:nt,prev:At,slideTo:He,currentSlide:d,maxSlide:E,minSlide:w,middleSlide:_};r({updateBreakpointsConfigs:L,updateSlidesData:ge,updateSlideWidth:W,initDefaultConfigs:A,restartCarousel:T,slideTo:He,next:nt,prev:At,nav:Ee,data:M});const G=t.default||t.slides,ie=t.addons,m=et(M);return()=>{const p=Gl(G==null?void 0:G(m)),g=(ie==null?void 0:ie(m))||[];p.forEach(($,P)=>$.props.index=P);let b=p;if(u.wrapAround){const $=p.map((k,O)=>Ht(k,{index:-p.length+O,isClone:!0,key:`clone-before-${O}`})),P=p.map((k,O)=>Ht(k,{index:p.length+O,isClone:!0,key:`clone-after-${O}`}));b=[...$,...p,...P]}o.value=p,l.value=Math.max(p.length,1);const y=Ae("ol",{class:"carousel__track",style:I.value,onMousedownCapture:u.mouseDrag?Z:null,onTouchstartPassiveCapture:u.touchDrag?Z:null},b),C=Ae("div",{class:"carousel__viewport"},y);return Ae("section",{ref:a,class:{carousel:!0,"is-sliding":be.value,"is-dragging":Qe.value,"is-hover":Re.value,"carousel--rtl":u.dir==="rtl"},dir:u.dir,"aria-label":u.i18n.ariaGallery,tabindex:"0",onMouseenter:ut,onMouseleave:ve},[C,g,Ae(pp)])}}}),Wi;(function(e){e.arrowUp="arrowUp",e.arrowDown="arrowDown",e.arrowRight="arrowRight",e.arrowLeft="arrowLeft"})(Wi||(Wi={}));const hp={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"};function gp(e){return e in Wi}const Ki=e=>{const t=se("config",et(Object.assign({},xe))),n=String(e.name),r=`icon${n.charAt(0).toUpperCase()+n.slice(1)}`;if(!n||typeof n!="string"||!gp(n))return;const i=hp[n],a=Ae("path",{d:i}),o=t.i18n[r]||e.title||n,s=Ae("title",o);return Ae("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img","aria-label":o},[s,a])};Ki.props={name:String,title:String};const vp=(e,{slots:t,attrs:n})=>{const{next:r,prev:i}=t||{},a=se("config",et(Object.assign({},xe))),o=se("maxSlide",oe(1)),s=se("minSlide",oe(1)),l=se("currentSlide",oe(1)),u=se("nav",{}),{dir:c,wrapAround:f,i18n:d}=a,h=c==="rtl",_=Ae("button",{type:"button",class:["carousel__prev",!f&&l.value<=s.value&&"carousel__prev--disabled",n==null?void 0:n.class],"aria-label":d.ariaPreviousSlide,onClick:u.prev},(i==null?void 0:i())||Ae(Ki,{name:h?"arrowRight":"arrowLeft"})),E=Ae("button",{type:"button",class:["carousel__next",!f&&l.value>=o.value&&"carousel__next--disabled",n==null?void 0:n.class],"aria-label":d.ariaNextSlide,onClick:u.next},(r==null?void 0:r())||Ae(Ki,{name:h?"arrowLeft":"arrowRight"}));return[_,E]},bp=()=>{const e=se("config",et(Object.assign({},xe))),t=se("maxSlide",oe(1)),n=se("minSlide",oe(1)),r=se("currentSlide",oe(1)),i=se("nav",{}),a=s=>Nr({val:r.value,max:t.value,min:0})===s,o=[];for(let s=n.value;s<t.value+1;s++){const l=Ae("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":a(s)},"aria-label":Xl(e.i18n.ariaNavigateToSlide,{slideNumber:s+1}),onClick:()=>i.slideTo(s)}),u=Ae("li",{class:"carousel__pagination-item",key:s},l);o.push(u)}return Ae("ol",{class:"carousel__pagination"},o)};var yp=xn({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(e,{slots:t}){const n=se("config",et(Object.assign({},xe))),r=se("currentSlide",oe(0)),i=se("slidesToScroll",oe(0)),a=se("isSliding",oe(!1)),o=()=>e.index===r.value,s=()=>e.index===r.value-1,l=()=>e.index===r.value+1,u=()=>{const c=Math.floor(i.value),f=Math.ceil(i.value+n.itemsToShow-1);return e.index>=c&&e.index<=f};return()=>{var c;return Ae("li",{style:{width:`${100/n.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":e.isClone,"carousel__slide--visible":u(),"carousel__slide--active":o(),"carousel__slide--prev":s(),"carousel__slide--next":l(),"carousel__slide--sliding":a.value},"aria-hidden":!u()},(c=t.default)===null||c===void 0?void 0:c.call(t))}}});function bi(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=Ra(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(u){throw u},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,s;return{s:function(){n=n.call(e)},n:function(){var u=n.next();return a=u.done,u},e:function(u){o=!0,s=u},f:function(){try{!a&&n.return!=null&&n.return()}finally{if(o)throw s}}}}function wp(e){return Sp(e)||xp(e)||Ra(e)||_p()}function _p(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xp(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Sp(e){if(Array.isArray(e))return Yi(e)}function jn(e){"@babel/helpers - typeof";return jn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},jn(e)}function yi(e,t){return Pp(e)||Op(e,t)||Ra(e,t)||Ep()}function Ep(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ra(e,t){if(e){if(typeof e=="string")return Yi(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Yi(e,t)}}function Yi(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Op(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,o,s=[],l=!0,u=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(c){u=!0,i=c}finally{try{if(!l&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw i}}return s}}function Pp(e){if(Array.isArray(e))return e}var Ie={innerWidth:function(t){if(t){var n=t.offsetWidth,r=getComputedStyle(t);return n+=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),n}return 0},width:function(t){if(t){var n=t.offsetWidth,r=getComputedStyle(t);return n-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),n}return 0},getWindowScrollTop:function(){var t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)},getWindowScrollLeft:function(){var t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)},getOuterWidth:function(t,n){if(t){var r=t.offsetWidth;if(n){var i=getComputedStyle(t);r+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return r}return 0},getOuterHeight:function(t,n){if(t){var r=t.offsetHeight;if(n){var i=getComputedStyle(t);r+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return r}return 0},getClientHeight:function(t,n){if(t){var r=t.clientHeight;if(n){var i=getComputedStyle(t);r+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return r}return 0},getViewport:function(){var t=window,n=document,r=n.documentElement,i=n.getElementsByTagName("body")[0],a=t.innerWidth||r.clientWidth||i.clientWidth,o=t.innerHeight||r.clientHeight||i.clientHeight;return{width:a,height:o}},getOffset:function(t){if(t){var n=t.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}},index:function(t){if(t)for(var n,r=(n=this.getParentNode(t))===null||n===void 0?void 0:n.childNodes,i=0,a=0;a<r.length;a++){if(r[a]===t)return i;r[a].nodeType===1&&i++}return-1},addMultipleClasses:function(t,n){var r=this;t&&n&&[n].flat().filter(Boolean).forEach(function(i){return i.split(" ").forEach(function(a){return r.addClass(t,a)})})},removeMultipleClasses:function(t,n){var r=this;t&&n&&[n].flat().filter(Boolean).forEach(function(i){return i.split(" ").forEach(function(a){return r.removeClass(t,a)})})},addClass:function(t,n){t&&n&&!this.hasClass(t,n)&&(t.classList?t.classList.add(n):t.className+=" "+n)},removeClass:function(t,n){t&&n&&(t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))},hasClass:function(t,n){return t?t.classList?t.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(t.className):!1},addStyles:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};t&&Object.entries(n).forEach(function(r){var i=yi(r,2),a=i[0],o=i[1];return t.style[a]=o})},find:function(t,n){return this.isElement(t)?t.querySelectorAll(n):[]},findSingle:function(t,n){return this.isElement(t)?t.querySelector(n):null},createElement:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(t){var r=document.createElement(t);this.setAttributes(r,n);for(var i=arguments.length,a=new Array(i>2?i-2:0),o=2;o<i;o++)a[o-2]=arguments[o];return r.append.apply(r,a),r}},setAttribute:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0;this.isElement(t)&&r!==null&&r!==void 0&&t.setAttribute(n,r)},setAttributes:function(t){var n=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.isElement(t)){var i=function a(o,s){var l,u,c=t!=null&&(l=t.$attrs)!==null&&l!==void 0&&l[o]?[t==null||(u=t.$attrs)===null||u===void 0?void 0:u[o]]:[];return[s].flat().reduce(function(f,d){if(d!=null){var h=jn(d);if(h==="string"||h==="number")f.push(d);else if(h==="object"){var _=Array.isArray(d)?a(o,d):Object.entries(d).map(function(E){var w=yi(E,2),v=w[0],x=w[1];return o==="style"&&(x||x===0)?"".concat(v.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),":").concat(x):x?v:void 0});f=_.length?f.concat(_.filter(function(E){return!!E})):f}}return f},c)};Object.entries(r).forEach(function(a){var o=yi(a,2),s=o[0],l=o[1];if(l!=null){var u=s.match(/^on(.+)/);u?t.addEventListener(u[1].toLowerCase(),l):s==="p-bind"?n.setAttributes(t,l):(l=s==="class"?wp(new Set(i("class",l))).join(" ").trim():s==="style"?i("style",l).join(";").trim():l,(t.$attrs=t.$attrs||{})&&(t.$attrs[s]=l),t.setAttribute(s,l))}})}},getAttribute:function(t,n){if(this.isElement(t)){var r=t.getAttribute(n);return isNaN(r)?r==="true"||r==="false"?r==="true":r:+r}},isAttributeEquals:function(t,n,r){return this.isElement(t)?this.getAttribute(t,n)===r:!1},isAttributeNotEquals:function(t,n,r){return!this.isAttributeEquals(t,n,r)},getHeight:function(t){if(t){var n=t.offsetHeight,r=getComputedStyle(t);return n-=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),n}return 0},getWidth:function(t){if(t){var n=t.offsetWidth,r=getComputedStyle(t);return n-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight)+parseFloat(r.borderLeftWidth)+parseFloat(r.borderRightWidth),n}return 0},absolutePosition:function(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(t){var i=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=i.height,o=i.width,s=n.offsetHeight,l=n.offsetWidth,u=n.getBoundingClientRect(),c=this.getWindowScrollTop(),f=this.getWindowScrollLeft(),d=this.getViewport(),h,_,E="top";u.top+s+a>d.height?(h=u.top+c-a,E="bottom",h<0&&(h=c)):h=s+u.top+c,u.left+o>d.width?_=Math.max(0,u.left+f+l-o):_=u.left+f,t.style.top=h+"px",t.style.left=_+"px",t.style.transformOrigin=E,r&&(t.style.marginTop=E==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}},relativePosition:function(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(t){var i=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=n.offsetHeight,o=n.getBoundingClientRect(),s=this.getViewport(),l,u,c="top";o.top+a+i.height>s.height?(l=-1*i.height,c="bottom",o.top+l<0&&(l=-1*o.top)):l=a,i.width>s.width?u=o.left*-1:o.left+i.width>s.width?u=(o.left+i.width-s.width)*-1:u=0,t.style.top=l+"px",t.style.left=u+"px",t.style.transformOrigin=c,r&&(t.style.marginTop=c==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}},nestedPosition:function(t,n){if(t){var r=t.parentElement,i=this.getOffset(r),a=this.getViewport(),o=t.offsetParent?t.offsetWidth:this.getHiddenElementOuterWidth(t),s=this.getOuterWidth(r.children[0]),l;parseInt(i.left,10)+s+o>a.width-this.calculateScrollbarWidth()?parseInt(i.left,10)<o?n%2===1?l=parseInt(i.left,10)?"-"+parseInt(i.left,10)+"px":"100%":n%2===0&&(l=a.width-o-this.calculateScrollbarWidth()+"px"):l="-100%":l="100%",t.style.top="0px",t.style.left=l}},getParentNode:function(t){var n=t==null?void 0:t.parentNode;return n&&n instanceof ShadowRoot&&n.host&&(n=n.host),n},getParents:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],r=this.getParentNode(t);return r===null?n:this.getParents(r,n.concat([r]))},getScrollableParents:function(t){var n=[];if(t){var r=this.getParents(t),i=/(auto|scroll)/,a=function(w){try{var v=window.getComputedStyle(w,null);return i.test(v.getPropertyValue("overflow"))||i.test(v.getPropertyValue("overflowX"))||i.test(v.getPropertyValue("overflowY"))}catch{return!1}},o=bi(r),s;try{for(o.s();!(s=o.n()).done;){var l=s.value,u=l.nodeType===1&&l.dataset.scrollselectors;if(u){var c=u.split(","),f=bi(c),d;try{for(f.s();!(d=f.n()).done;){var h=d.value,_=this.findSingle(l,h);_&&a(_)&&n.push(_)}}catch(E){f.e(E)}finally{f.f()}}l.nodeType!==9&&a(l)&&n.push(l)}}catch(E){o.e(E)}finally{o.f()}}return n},getHiddenElementOuterHeight:function(t){if(t){t.style.visibility="hidden",t.style.display="block";var n=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",n}return 0},getHiddenElementOuterWidth:function(t){if(t){t.style.visibility="hidden",t.style.display="block";var n=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",n}return 0},getHiddenElementDimensions:function(t){if(t){var n={};return t.style.visibility="hidden",t.style.display="block",n.width=t.offsetWidth,n.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",n}return 0},fadeIn:function(t,n){if(t){t.style.opacity=0;var r=+new Date,i=0,a=function o(){i=+t.style.opacity+(new Date().getTime()-r)/n,t.style.opacity=i,r=+new Date,+i<1&&(window.requestAnimationFrame&&requestAnimationFrame(o)||setTimeout(o,16))};a()}},fadeOut:function(t,n){if(t)var r=1,i=50,a=n,o=i/a,s=setInterval(function(){r-=o,r<=0&&(r=0,clearInterval(s)),t.style.opacity=r},i)},getUserAgent:function(){return navigator.userAgent},appendChild:function(t,n){if(this.isElement(n))n.appendChild(t);else if(n.el&&n.elElement)n.elElement.appendChild(t);else throw new Error("Cannot append "+n+" to "+t)},isElement:function(t){return(typeof HTMLElement>"u"?"undefined":jn(HTMLElement))==="object"?t instanceof HTMLElement:t&&jn(t)==="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"},scrollInView:function(t,n){var r=getComputedStyle(t).getPropertyValue("borderTopWidth"),i=r?parseFloat(r):0,a=getComputedStyle(t).getPropertyValue("paddingTop"),o=a?parseFloat(a):0,s=t.getBoundingClientRect(),l=n.getBoundingClientRect(),u=l.top+document.body.scrollTop-(s.top+document.body.scrollTop)-i-o,c=t.scrollTop,f=t.clientHeight,d=this.getOuterHeight(n);u<0?t.scrollTop=c+u:u+d>f&&(t.scrollTop=c+u-f+d)},clearSelection:function(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}},getSelection:function(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null},calculateScrollbarWidth:function(){if(this.calculatedScrollbarWidth!=null)return this.calculatedScrollbarWidth;var t=document.createElement("div");this.addStyles(t,{width:"100px",height:"100px",overflow:"scroll",position:"absolute",top:"-9999px"}),document.body.appendChild(t);var n=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),this.calculatedScrollbarWidth=n,n},calculateBodyScrollbarWidth:function(){return window.innerWidth-document.documentElement.offsetWidth},getBrowser:function(){if(!this.browser){var t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser},resolveUserAgent:function(){var t=navigator.userAgent.toLowerCase(),n=/(chrome)[ ]([\w.]+)/.exec(t)||/(webkit)[ ]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ ]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:n[1]||"",version:n[2]||"0"}},isVisible:function(t){return t&&t.offsetParent!=null},invokeElementMethod:function(t,n,r){t[n].apply(t,r)},isExist:function(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&this.getParentNode(t))},isClient:function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)},focus:function(t,n){t&&document.activeElement!==t&&t.focus(n)},isFocusableElement:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return this.isElement(t)?t.matches('button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(n,`,
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n)):!1},getFocusableElements:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=this.find(t,'button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(n,`,
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n)),i=[],a=bi(r),o;try{for(a.s();!(o=a.n()).done;){var s=o.value;getComputedStyle(s).display!="none"&&getComputedStyle(s).visibility!="hidden"&&i.push(s)}}catch(l){a.e(l)}finally{a.f()}return i},getFirstFocusableElement:function(t,n){var r=this.getFocusableElements(t,n);return r.length>0?r[0]:null},getLastFocusableElement:function(t,n){var r=this.getFocusableElements(t,n);return r.length>0?r[r.length-1]:null},getNextFocusableElement:function(t,n,r){var i=this.getFocusableElements(t,r),a=i.length>0?i.findIndex(function(s){return s===n}):-1,o=a>-1&&i.length>=a+1?a+1:-1;return o>-1?i[o]:null},getPreviousElementSibling:function(t,n){for(var r=t.previousElementSibling;r;){if(r.matches(n))return r;r=r.previousElementSibling}return null},getNextElementSibling:function(t,n){for(var r=t.nextElementSibling;r;){if(r.matches(n))return r;r=r.nextElementSibling}return null},isClickable:function(t){if(t){var n=t.nodeName,r=t.parentElement&&t.parentElement.nodeName;return n==="INPUT"||n==="TEXTAREA"||n==="BUTTON"||n==="A"||r==="INPUT"||r==="TEXTAREA"||r==="BUTTON"||r==="A"||!!t.closest(".p-button, .p-checkbox, .p-radiobutton")}return!1},applyStyle:function(t,n){if(typeof n=="string")t.style.cssText=n;else for(var r in n)t.style[r]=n[r]},isIOS:function(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream},isAndroid:function(){return/(android)/i.test(navigator.userAgent)},isTouchDevice:function(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0},hasCSSAnimation:function(t){if(t){var n=getComputedStyle(t),r=parseFloat(n.getPropertyValue("animation-duration")||"0");return r>0}return!1},hasCSSTransition:function(t){if(t){var n=getComputedStyle(t),r=parseFloat(n.getPropertyValue("transition-duration")||"0");return r>0}return!1},exportCSV:function(t,n){var r=new Blob([t],{type:"application/csv;charset=utf-8;"});if(window.navigator.msSaveOrOpenBlob)navigator.msSaveOrOpenBlob(r,n+".csv");else{var i=document.createElement("a");i.download!==void 0?(i.setAttribute("href",URL.createObjectURL(r)),i.setAttribute("download",n+".csv"),i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i)):(t="data:text/csv;charset=utf-8,"+t,window.open(encodeURI(t)))}},blockBodyScroll:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"p-overflow-hidden";document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)},unblockBodyScroll:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"p-overflow-hidden";document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}};function Yo(e,t){return kp(e)||Ap(e,t)||ja(e,t)||Cp()}function Cp(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ap(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,o,s=[],l=!0,u=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(c){u=!0,i=c}finally{try{if(!l&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw i}}return s}}function kp(e){if(Array.isArray(e))return e}function qo(e){return Ip(e)||Tp(e)||ja(e)||$p()}function $p(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Tp(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ip(e){if(Array.isArray(e))return qi(e)}function wi(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=ja(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(u){throw u},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,s;return{s:function(){n=n.call(e)},n:function(){var u=n.next();return a=u.done,u},e:function(u){o=!0,s=u},f:function(){try{!a&&n.return!=null&&n.return()}finally{if(o)throw s}}}}function ja(e,t){if(e){if(typeof e=="string")return qi(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return qi(e,t)}}function qi(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Mn(e){"@babel/helpers - typeof";return Mn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Mn(e)}var Y={equals:function(t,n,r){return r?this.resolveFieldData(t,r)===this.resolveFieldData(n,r):this.deepEquals(t,n)},deepEquals:function(t,n){if(t===n)return!0;if(t&&n&&Mn(t)=="object"&&Mn(n)=="object"){var r=Array.isArray(t),i=Array.isArray(n),a,o,s;if(r&&i){if(o=t.length,o!=n.length)return!1;for(a=o;a--!==0;)if(!this.deepEquals(t[a],n[a]))return!1;return!0}if(r!=i)return!1;var l=t instanceof Date,u=n instanceof Date;if(l!=u)return!1;if(l&&u)return t.getTime()==n.getTime();var c=t instanceof RegExp,f=n instanceof RegExp;if(c!=f)return!1;if(c&&f)return t.toString()==n.toString();var d=Object.keys(t);if(o=d.length,o!==Object.keys(n).length)return!1;for(a=o;a--!==0;)if(!Object.prototype.hasOwnProperty.call(n,d[a]))return!1;for(a=o;a--!==0;)if(s=d[a],!this.deepEquals(t[s],n[s]))return!1;return!0}return t!==t&&n!==n},resolveFieldData:function(t,n){if(!t||!n)return null;try{var r=t[n];if(this.isNotEmpty(r))return r}catch{}if(Object.keys(t).length){if(this.isFunction(n))return n(t);if(n.indexOf(".")===-1)return t[n];for(var i=n.split("."),a=t,o=0,s=i.length;o<s;++o){if(a==null)return null;a=a[i[o]]}return a}return null},getItemValue:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return this.isFunction(t)?t.apply(void 0,r):t},filter:function(t,n,r){var i=[];if(t){var a=wi(t),o;try{for(a.s();!(o=a.n()).done;){var s=o.value,l=wi(n),u;try{for(l.s();!(u=l.n()).done;){var c=u.value;if(String(this.resolveFieldData(s,c)).toLowerCase().indexOf(r.toLowerCase())>-1){i.push(s);break}}}catch(f){l.e(f)}finally{l.f()}}}catch(f){a.e(f)}finally{a.f()}}return i},reorderArray:function(t,n,r){t&&n!==r&&(r>=t.length&&(r%=t.length,n%=t.length),t.splice(r,0,t.splice(n,1)[0]))},findIndexInList:function(t,n){var r=-1;if(n){for(var i=0;i<n.length;i++)if(n[i]===t){r=i;break}}return r},contains:function(t,n){if(t!=null&&n&&n.length){var r=wi(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(this.equals(t,a))return!0}}catch(o){r.e(o)}finally{r.f()}}return!1},insertIntoOrderedArray:function(t,n,r,i){if(r.length>0){for(var a=!1,o=0;o<r.length;o++){var s=this.findIndexInList(r[o],i);if(s>n){r.splice(o,0,t),a=!0;break}}a||r.push(t)}else r.push(t)},removeAccents:function(t){return t&&t.search(/[\xC0-\xFF]/g)>-1&&(t=t.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),t},getVNodeProp:function(t,n){if(t){var r=t.props;if(r){var i=n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=Object.prototype.hasOwnProperty.call(r,i)?i:n;return t.type.extends.props[n].type===Boolean&&r[a]===""?!0:r[a]}}return null},toFlatCase:function(t){return this.isString(t)?t.replace(/(-|_)/g,"").toLowerCase():t},toKebabCase:function(t){return this.isString(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,function(n,r){return r===0?n:"-"+n.toLowerCase()}).toLowerCase():t},toCapitalCase:function(t){return this.isString(t,{empty:!1})?t[0].toUpperCase()+t.slice(1):t},isEmpty:function(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&Mn(t)==="object"&&Object.keys(t).length===0},isNotEmpty:function(t){return!this.isEmpty(t)},isFunction:function(t){return!!(t&&t.constructor&&t.call&&t.apply)},isObject:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t instanceof Object&&t.constructor===Object&&(n||Object.keys(t).length!==0)},isDate:function(t){return t instanceof Date&&t.constructor===Date},isArray:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return Array.isArray(t)&&(n||t.length!==0)},isString:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return typeof t=="string"&&(n||t!=="")},isPrintableCharacter:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return this.isNotEmpty(t)&&t.length===1&&t.match(/\S| /)},findLast:function(t,n){var r;if(this.isNotEmpty(t))try{r=t.findLast(n)}catch{r=qo(t).reverse().find(n)}return r},findLastIndex:function(t,n){var r=-1;if(this.isNotEmpty(t))try{r=t.findLastIndex(n)}catch{r=t.lastIndexOf(qo(t).reverse().find(n))}return r},sort:function(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,i=arguments.length>3?arguments[3]:void 0,a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1,o=this.compare(t,n,i,r),s=r;return(this.isEmpty(t)||this.isEmpty(n))&&(s=a===1?r:a),s*o},compare:function(t,n,r){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,a=-1,o=this.isEmpty(t),s=this.isEmpty(n);return o&&s?a=0:o?a=i:s?a=-i:typeof t=="string"&&typeof n=="string"?a=r(t,n):a=t<n?-1:t>n?1:0,a},localeComparator:function(){return new Intl.Collator(void 0,{numeric:!0}).compare},nestedKeys:function(){var t=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return Object.entries(n).reduce(function(i,a){var o=Yo(a,2),s=o[0],l=o[1],u=r?"".concat(r,".").concat(s):s;return t.isObject(l)?i=i.concat(t.nestedKeys(l,u)):i.push(u),i},[])},stringify:function(t){var n=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,a=" ".repeat(i),o=" ".repeat(i+r);return this.isArray(t)?"["+t.map(function(s){return n.stringify(s,r,i+r)}).join(", ")+"]":this.isDate(t)?t.toISOString():this.isFunction(t)?t.toString():this.isObject(t)?`{
`+Object.entries(t).map(function(s){var l=Yo(s,2),u=l[0],c=l[1];return"".concat(o).concat(u,": ").concat(n.stringify(c,r,i+r))}).join(`,
`)+`
`.concat(a)+"}":JSON.stringify(t)}},Go=0;function Rp(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pv_id_";return Go++,"".concat(e).concat(Go)}function Un(e){"@babel/helpers - typeof";return Un=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Un(e)}function Xo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Qo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Xo(Object(n),!0).forEach(function(r){jp(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function jp(e,t,n){return t=Mp(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Mp(e){var t=Np(e,"string");return Un(t)=="symbol"?t:String(t)}function Np(e,t){if(Un(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Un(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Lp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;gf()?Pa(e):t?e():Yr(e)}var Fp=0;function Ql(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=oe(!1),r=oe(e),i=oe(null),a=Ie.isClient()?window.document:void 0,o=t.document,s=o===void 0?a:o,l=t.immediate,u=l===void 0?!0:l,c=t.manual,f=c===void 0?!1:c,d=t.name,h=d===void 0?"style_".concat(++Fp):d,_=t.id,E=_===void 0?void 0:_,w=t.media,v=w===void 0?void 0:w,x=t.nonce,A=x===void 0?void 0:x,L=t.props,H=L===void 0?{}:L,F=function(){},W=function(Se){var Le=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(s){var _e=Qo(Qo({},H),Le),Re=_e.name||h,Qe=_e.id||E,ut=_e.nonce||A;i.value=s.querySelector('style[data-primevue-style-id="'.concat(Re,'"]'))||s.getElementById(Qe)||s.createElement("style"),i.value.isConnected||(r.value=Se||e,Ie.setAttributes(i.value,{type:"text/css",id:Qe,media:v,nonce:ut}),s.head.appendChild(i.value),Ie.setAttribute(i.value,"data-primevue-style-id",h),Ie.setAttributes(i.value,_e)),!n.value&&(F=_t(r,function(ve){i.value.textContent=ve},{immediate:!0}),n.value=!0)}},ge=function(){!s||!n.value||(F(),Ie.isExist(i.value)&&s.head.removeChild(i.value),n.value=!1)};return u&&!f&&Lp(W),{id:E,name:h,css:r,unload:ge,load:W,isLoaded:_a(n)}}function Wn(e){"@babel/helpers - typeof";return Wn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Wn(e)}function Dp(e,t){return Vp(e)||zp(e,t)||Hp(e,t)||Bp()}function Bp(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Hp(e,t){if(e){if(typeof e=="string")return Jo(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Jo(e,t)}}function Jo(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function zp(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,o,s=[],l=!0,u=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(c){u=!0,i=c}finally{try{if(!l&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw i}}return s}}function Vp(e){if(Array.isArray(e))return e}function Zo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function _i(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zo(Object(n),!0).forEach(function(r){Up(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Up(e,t,n){return t=Wp(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wp(e){var t=Kp(e,"string");return Wn(t)=="symbol"?t:String(t)}function Kp(e,t){if(Wn(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Wn(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Yp=`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: var(--scrollbar-width);
}
`,qp={},Gp={},xt={name:"base",css:Yp,classes:qp,inlineStyles:Gp,loadStyle:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.css?Ql(this.css,_i({name:this.name},t)):{}},getStyleSheet:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.css){var r=Object.entries(n).reduce(function(i,a){var o=Dp(a,2),s=o[0],l=o[1];return i.push("".concat(s,'="').concat(l,'"'))&&i},[]).join(" ");return'<style type="text/css" data-primevue-style-id="'.concat(this.name,'" ').concat(r,">").concat(this.css).concat(t,"</style>")}return""},extend:function(t){return _i(_i({},this),{},{css:void 0},t)}};function Kn(e){"@babel/helpers - typeof";return Kn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Kn(e)}function es(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Xp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?es(Object(n),!0).forEach(function(r){Qp(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):es(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Qp(e,t,n){return t=Jp(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Jp(e){var t=Zp(e,"string");return Kn(t)=="symbol"?t:String(t)}function Zp(e,t){if(Kn(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Kn(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var em=`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    vertical-align: bottom;
    text-align: center;
    overflow: hidden;
    position: relative;
}

.p-button-label {
    flex: 1 1 auto;
}

.p-button-icon-right {
    order: 1;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-only {
    justify-content: center;
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
    flex: 0 0 auto;
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-icon-bottom {
    order: 2;
}

.p-buttonset .p-button {
    margin: 0;
}

.p-buttonset .p-button:not(:last-child), .p-buttonset .p-button:not(:last-child):hover {
    border-right: 0 none;
}

.p-buttonset .p-button:not(:first-of-type):not(:last-of-type) {
    border-radius: 0;
}

.p-buttonset .p-button:first-of-type:not(:only-of-type) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-buttonset .p-button:last-of-type:not(:only-of-type) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-buttonset .p-button:focus {
    position: relative;
    z-index: 1;
}
`,tm=`
.p-fluid .p-inputtext {
    width: 100%;
}

/* InputGroup */
.p-inputgroup {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup-addon {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-inputgroup .p-float-label {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-fluid .p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper,
.p-fluid .p-inputgroup .p-input {
    flex: 1 1 auto;
    width: 1%;
}

/* Floating Label */
.p-float-label {
    display: block;
    position: relative;
}

.p-float-label label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    margin-top: -.5rem;
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
}

.p-float-label textarea ~ label {
    top: 1rem;
}

.p-float-label input:focus ~ label,
.p-float-label input.p-filled ~ label,
.p-float-label input:-webkit-autofill ~ label,
.p-float-label textarea:focus ~ label,
.p-float-label textarea.p-filled ~ label,
.p-float-label .p-inputwrapper-focus ~ label,
.p-float-label .p-inputwrapper-filled ~ label {
    top: -.75rem;
    font-size: 12px;
}


.p-float-label .p-placeholder,
.p-float-label input::placeholder,
.p-float-label .p-inputtext::placeholder {
    opacity: 0;
    transition-property: all;
    transition-timing-function: ease;
}

.p-float-label .p-focus .p-placeholder,
.p-float-label input:focus::placeholder,
.p-float-label .p-inputtext:focus::placeholder {
    opacity: 1;
    transition-property: all;
    transition-timing-function: ease;
}

.p-input-icon-left,
.p-input-icon-right {
    position: relative;
    display: inline-block;
}

.p-input-icon-left > i,
.p-input-icon-left > svg,
.p-input-icon-right > i,
.p-input-icon-right > svg {
    position: absolute;
    top: 50%;
    margin-top: -.5rem;
}

.p-fluid .p-input-icon-left,
.p-fluid .p-input-icon-right {
    display: block;
    width: 100%;
}
`,nm=`
@layer primevue {
.p-component, .p-component * {
    box-sizing: border-box;
}

.p-hidden-space {
    visibility: hidden;
}

.p-reset {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    text-decoration: none;
    font-size: 100%;
    list-style: none;
}

.p-disabled, .p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-component-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-unselectable-text {
    user-select: none;
}

.p-sr-only {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    word-wrap: normal;
}

.p-link {
	text-align: left;
	background-color: transparent;
	margin: 0;
	padding: 0;
	border: none;
    cursor: pointer;
    user-select: none;
}

.p-link:disabled {
	cursor: default;
}

/* Non vue overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity .1s linear;
}

/* Vue based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity .1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}
`.concat(em,`
`).concat(tm,`
}
`),xi=xt.extend({name:"common",css:nm,loadGlobalStyle:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Ql(t,Xp({name:"global"},n))}});function Yn(e){"@babel/helpers - typeof";return Yn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Yn(e)}function ts(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function pe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ts(Object(n),!0).forEach(function(r){Gi(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ts(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Gi(e,t,n){return t=rm(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rm(e){var t=im(e,"string");return Yn(t)=="symbol"?t:String(t)}function im(e,t){if(Yn(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Yn(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var ti={name:"BaseComponent",props:{pt:{type:Object,default:void 0},ptOptions:{type:Object,default:void 0},unstyled:{type:Boolean,default:void 0}},inject:{$parentInstance:{default:void 0}},watch:{isUnstyled:{immediate:!0,handler:function(t){if(!t){var n,r;xi.loadStyle({nonce:(n=this.$config)===null||n===void 0||(n=n.csp)===null||n===void 0?void 0:n.nonce}),this.$options.style&&this.$style.loadStyle({nonce:(r=this.$config)===null||r===void 0||(r=r.csp)===null||r===void 0?void 0:r.nonce})}}}},beforeCreate:function(){var t,n,r,i,a,o,s,l,u,c,f,d=(t=this.pt)===null||t===void 0?void 0:t._usept,h=d?(n=this.pt)===null||n===void 0||(n=n.originalValue)===null||n===void 0?void 0:n[this.$.type.name]:void 0,_=d?(r=this.pt)===null||r===void 0||(r=r.value)===null||r===void 0?void 0:r[this.$.type.name]:this.pt;(i=_||h)===null||i===void 0||(i=i.hooks)===null||i===void 0||(a=i.onBeforeCreate)===null||a===void 0||a.call(i);var E=(o=this.$config)===null||o===void 0||(o=o.pt)===null||o===void 0?void 0:o._usept,w=E?(s=this.$primevue)===null||s===void 0||(s=s.config)===null||s===void 0||(s=s.pt)===null||s===void 0?void 0:s.originalValue:void 0,v=E?(l=this.$primevue)===null||l===void 0||(l=l.config)===null||l===void 0||(l=l.pt)===null||l===void 0?void 0:l.value:(u=this.$primevue)===null||u===void 0||(u=u.config)===null||u===void 0?void 0:u.pt;(c=v||w)===null||c===void 0||(c=c[this.$.type.name])===null||c===void 0||(c=c.hooks)===null||c===void 0||(f=c.onBeforeCreate)===null||f===void 0||f.call(c)},created:function(){this._hook("onCreated")},beforeMount:function(){var t;xt.loadStyle({nonce:(t=this.$config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce}),this._loadGlobalStyles(),this._hook("onBeforeMount")},mounted:function(){this._hook("onMounted")},beforeUpdate:function(){this._hook("onBeforeUpdate")},updated:function(){this._hook("onUpdated")},beforeUnmount:function(){this._hook("onBeforeUnmount")},unmounted:function(){this._hook("onUnmounted")},methods:{_hook:function(t){if(!this.$options.hostName){var n=this._usePT(this._getPT(this.pt,this.$.type.name),this._getOptionValue,"hooks.".concat(t)),r=this._useDefaultPT(this._getOptionValue,"hooks.".concat(t));n==null||n(),r==null||r()}},_loadGlobalStyles:function(){var t,n=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);Y.isNotEmpty(n)&&xi.loadGlobalStyle(n,{nonce:(t=this.$config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce})},_getHostInstance:function(t){return t?this.$options.hostName?t.$.type.name===this.$options.hostName?t:this._getHostInstance(t.$parentInstance):t.$parentInstance:void 0},_getPropValue:function(t){var n;return this[t]||((n=this._getHostInstance(this))===null||n===void 0?void 0:n[t])},_getOptionValue:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=Y.toFlatCase(n).split("."),a=i.shift();return a?Y.isObject(t)?this._getOptionValue(Y.getItemValue(t[Object.keys(t).find(function(o){return Y.toFlatCase(o)===a})||""],r),i.join("."),r):void 0:Y.getItemValue(t,r)},_getPTValue:function(){var t,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,o="data-pc-",s=/./g.test(r)&&!!i[r.split(".")[0]],l=this._getPropValue("ptOptions")||((t=this.$config)===null||t===void 0?void 0:t.ptOptions)||{},u=l.mergeSections,c=u===void 0?!0:u,f=l.mergeProps,d=f===void 0?!1:f,h=a?s?this._useGlobalPT(this._getPTClassValue,r,i):this._useDefaultPT(this._getPTClassValue,r,i):void 0,_=s?void 0:this._usePT(this._getPT(n,this.$name),this._getPTClassValue,r,pe(pe({},i),{},{global:h||{}})),E=r!=="transition"&&pe(pe({},r==="root"&&Gi({},"".concat(o,"name"),Y.toFlatCase(this.$.type.name))),{},Gi({},"".concat(o,"section"),Y.toFlatCase(r)));return c||!c&&_?d?we(h,_,E):pe(pe(pe({},h),_),E):pe(pe({},_),E)},_getPTClassValue:function(){var t=this._getOptionValue.apply(this,arguments);return Y.isString(t)||Y.isArray(t)?{class:t}:t},_getPT:function(t){var n=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2?arguments[2]:void 0,a=function(s){var l,u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=i?i(s):s,f=Y.toFlatCase(r),d=Y.toFlatCase(n.$name);return(l=u?f!==d?c==null?void 0:c[f]:void 0:c==null?void 0:c[f])!==null&&l!==void 0?l:c};return t!=null&&t.hasOwnProperty("_usept")?{_usept:t._usept,originalValue:a(t.originalValue),value:a(t.value)}:a(t,!0)},_usePT:function(t,n,r,i){var a=function(E){return n(E,r,i)};if(t!=null&&t.hasOwnProperty("_usept")){var o,s=t._usept||((o=this.$config)===null||o===void 0?void 0:o.ptOptions)||{},l=s.mergeSections,u=l===void 0?!0:l,c=s.mergeProps,f=c===void 0?!1:c,d=a(t.originalValue),h=a(t.value);return d===void 0&&h===void 0?void 0:Y.isString(h)?h:Y.isString(d)?d:u||!u&&h?f?we(d,h):pe(pe({},d),h):h}return a(t)},_useGlobalPT:function(t,n,r){return this._usePT(this.globalPT,t,n,r)},_useDefaultPT:function(t,n,r){return this._usePT(this.defaultPT,t,n,r)},ptm:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this._getPTValue(this.pt,t,pe(pe({},this.$params),n))},ptmo:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this._getPTValue(t,n,pe({instance:this},r),!1)},cx:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.isUnstyled?void 0:this._getOptionValue(this.$style.classes,t,pe(pe({},this.$params),n))},sx:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(n){var i=this._getOptionValue(this.$style.inlineStyles,t,pe(pe({},this.$params),r)),a=this._getOptionValue(xi.inlineStyles,t,pe(pe({},this.$params),r));return[a,i]}}},computed:{globalPT:function(){var t,n=this;return this._getPT((t=this.$config)===null||t===void 0?void 0:t.pt,void 0,function(r){return Y.getItemValue(r,{instance:n})})},defaultPT:function(){var t,n=this;return this._getPT((t=this.$config)===null||t===void 0?void 0:t.pt,void 0,function(r){return n._getOptionValue(r,n.$name,pe({},n.$params))||Y.getItemValue(r,pe({},n.$params))})},isUnstyled:function(){var t;return this.unstyled!==void 0?this.unstyled:(t=this.$config)===null||t===void 0?void 0:t.unstyled},$params:function(){var t=this._getHostInstance(this)||this.$parent;return{instance:this,props:this.$props,state:this.$data,attrs:this.$attrs,parent:{instance:t,props:t==null?void 0:t.$props,state:t==null?void 0:t.$data,attrs:t==null?void 0:t.$attrs},parentInstance:t}},$style:function(){return pe(pe({classes:void 0,inlineStyles:void 0,loadStyle:function(){},loadCustomStyle:function(){}},(this._getHostInstance(this)||{}).$style),this.$options.style)},$config:function(){var t;return(t=this.$primevue)===null||t===void 0?void 0:t.config},$name:function(){return this.$options.hostName||this.$.type.name}}},am={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},om=xt.extend({name:"card",classes:am}),sm={name:"BaseCard",extends:ti,style:om},Jl={name:"Card",extends:sm};function lm(e,t,n,r,i,a){return ce(),Oe("div",we({class:e.cx("root")},e.ptm("root"),{"data-pc-name":"card"}),[e.$slots.header?(ce(),Oe("div",we({key:0,class:e.cx("header")},e.ptm("header")),[vt(e.$slots,"header")],16)):bt("",!0),ee("div",we({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(ce(),Oe("div",we({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(ce(),Oe("div",we({key:0,class:e.cx("title")},e.ptm("title")),[vt(e.$slots,"title")],16)):bt("",!0),e.$slots.subtitle?(ce(),Oe("div",we({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[vt(e.$slots,"subtitle")],16)):bt("",!0)],16)):bt("",!0),ee("div",we({class:e.cx("content")},e.ptm("content")),[vt(e.$slots,"content")],16),e.$slots.footer?(ce(),Oe("div",we({key:1,class:e.cx("footer")},e.ptm("footer")),[vt(e.$slots,"footer")],16)):bt("",!0)],16)],16)}Jl.render=lm;var um=`
@layer primevue {
    .p-badge {
        display: inline-block;
        border-radius: 10px;
        text-align: center;
        padding: 0 .5rem;
    }

    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge .p-badge {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%,-50%);
        transform-origin: 100% 0;
        margin: 0;
    }

    .p-badge-dot {
        width: .5rem;
        min-width: .5rem;
        height: .5rem;
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-no-gutter {
        padding: 0;
        border-radius: 50%;
    }
}
`,cm={root:function(t){var n=t.props,r=t.instance;return["p-badge p-component",{"p-badge-no-gutter":Y.isNotEmpty(n.value)&&String(n.value).length===1,"p-badge-dot":Y.isEmpty(n.value)&&!r.$slots.default,"p-badge-lg":n.size==="large","p-badge-xl":n.size==="xlarge","p-badge-info":n.severity==="info","p-badge-success":n.severity==="success","p-badge-warning":n.severity==="warning","p-badge-danger":n.severity==="danger"}]}},fm=xt.extend({name:"badge",css:um,classes:cm}),dm={name:"BaseBadge",extends:ti,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},style:fm,provide:function(){return{$parentInstance:this}}},Zl={name:"Badge",extends:dm};function pm(e,t,n,r,i,a){return ce(),Oe("span",we({class:e.cx("root")},e.ptm("root"),{"data-pc-name":"badge"}),[vt(e.$slots,"default",{},function(){return[dn(Ar(e.value),1)]})],16)}Zl.render=pm;var mm=`
.p-icon {
    display: inline-block;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,hm=xt.extend({name:"baseicon",css:mm});function qn(e){"@babel/helpers - typeof";return qn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},qn(e)}function ns(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function rs(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ns(Object(n),!0).forEach(function(r){gm(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ns(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function gm(e,t,n){return t=vm(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function vm(e){var t=bm(e,"string");return qn(t)=="symbol"?t:String(t)}function bm(e,t){if(qn(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(qn(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var ym={name:"BaseIcon",extends:ti,props:{label:{type:String,default:void 0},spin:{type:Boolean,default:!1}},style:hm,methods:{pti:function(){var t=Y.isEmpty(this.label);return rs(rs({},!this.isUnstyled&&{class:["p-icon",{"p-icon-spin":this.spin}]}),{},{role:t?void 0:"img","aria-label":t?void 0:this.label,"aria-hidden":t})}},computed:{pathId:function(){return Rp("pv_icon_clip_pv_id_")}}},eu={name:"SpinnerIcon",extends:ym},wm=["clip-path"],_m=ee("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"},null,-1),xm=[_m],Sm=["id"],Em=ee("rect",{width:"14",height:"14",fill:"white"},null,-1),Om=[Em];function Pm(e,t,n,r,i,a){return ce(),Oe("svg",we({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),[ee("g",{"clip-path":"url(#".concat(e.pathId,")")},xm,8,wm),ee("defs",null,[ee("clipPath",{id:"".concat(e.pathId)},Om,8,Sm)])],16)}eu.render=Pm;function Gn(e){"@babel/helpers - typeof";return Gn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Gn(e)}function is(e,t){return $m(e)||km(e,t)||Am(e,t)||Cm()}function Cm(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Am(e,t){if(e){if(typeof e=="string")return as(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return as(e,t)}}function as(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function km(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,o,s=[],l=!0,u=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(c){u=!0,i=c}finally{try{if(!l&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw i}}return s}}function $m(e){if(Array.isArray(e))return e}function os(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function he(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?os(Object(n),!0).forEach(function(r){Xi(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):os(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Xi(e,t,n){return t=Tm(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Tm(e){var t=Im(e,"string");return Gn(t)=="symbol"?t:String(t)}function Im(e,t){if(Gn(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Gn(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var ne={_getMeta:function(){return[Y.isObject(arguments.length<=0?void 0:arguments[0])||arguments.length<=0?void 0:arguments[0],Y.getItemValue(Y.isObject(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:arguments.length<=1?void 0:arguments[1])]},_getConfig:function(t,n){var r,i,a;return(r=(t==null||(i=t.instance)===null||i===void 0?void 0:i.$primevue)||(n==null||(a=n.ctx)===null||a===void 0||(a=a.appContext)===null||a===void 0||(a=a.config)===null||a===void 0||(a=a.globalProperties)===null||a===void 0?void 0:a.$primevue))===null||r===void 0?void 0:r.config},_getOptionValue:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=Y.toFlatCase(n).split("."),a=i.shift();return a?Y.isObject(t)?ne._getOptionValue(Y.getItemValue(t[Object.keys(t).find(function(o){return Y.toFlatCase(o)===a})||""],r),i.join("."),r):void 0:Y.getItemValue(t,r)},_getPTValue:function(){var t,n,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,l=function(){var A=ne._getOptionValue.apply(ne,arguments);return Y.isString(A)||Y.isArray(A)?{class:A}:A},u="data-pc-",c=((t=r.binding)===null||t===void 0||(t=t.value)===null||t===void 0?void 0:t.ptOptions)||((n=r.$config)===null||n===void 0?void 0:n.ptOptions)||{},f=c.mergeSections,d=f===void 0?!0:f,h=c.mergeProps,_=h===void 0?!1:h,E=s?ne._useDefaultPT(r,r.defaultPT(),l,a,o):void 0,w=ne._usePT(r,ne._getPT(i,r.$name),l,a,he(he({},o),{},{global:E||{}})),v=he(he({},a==="root"&&Xi({},"".concat(u,"name"),Y.toFlatCase(r.$name))),{},Xi({},"".concat(u,"section"),Y.toFlatCase(a)));return d||!d&&w?_?we(E,w,v):he(he(he({},E),w),v):he(he({},w),v)},_getPT:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,i=function(o){var s,l=r?r(o):o,u=Y.toFlatCase(n);return(s=l==null?void 0:l[u])!==null&&s!==void 0?s:l};return t!=null&&t.hasOwnProperty("_usept")?{_usept:t._usept,originalValue:i(t.originalValue),value:i(t.value)}:i(t)},_usePT:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0,o=function(w){return r(w,i,a)};if(n!=null&&n.hasOwnProperty("_usept")){var s,l=n._usept||((s=t.$config)===null||s===void 0?void 0:s.ptOptions)||{},u=l.mergeSections,c=u===void 0?!0:u,f=l.mergeProps,d=f===void 0?!1:f,h=o(n.originalValue),_=o(n.value);return h===void 0&&_===void 0?void 0:Y.isString(_)?_:Y.isString(h)?h:c||!c&&_?d?we(h,_):he(he({},h),_):_}return o(n)},_useDefaultPT:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0;return ne._usePT(t,n,r,i,a)},_hook:function(t,n,r,i,a,o){var s,l,u="on".concat(Y.toCapitalCase(n)),c=ne._getConfig(i,a),f=r==null?void 0:r.$instance,d=ne._usePT(f,ne._getPT(i==null||(s=i.value)===null||s===void 0?void 0:s.pt,t),ne._getOptionValue,"hooks.".concat(u)),h=ne._useDefaultPT(f,c==null||(l=c.pt)===null||l===void 0||(l=l.directives)===null||l===void 0?void 0:l[t],ne._getOptionValue,"hooks.".concat(u)),_={el:r,binding:i,vnode:a,prevVnode:o};d==null||d(f,_),h==null||h(f,_)},_extend:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=function(a,o,s,l,u){var c,f;o._$instances=o._$instances||{};var d=ne._getConfig(s,l),h=o._$instances[t]||{},_=Y.isEmpty(h)?he(he({},n),n==null?void 0:n.methods):{};o._$instances[t]=he(he({},h),{},{$name:t,$host:o,$binding:s,$modifiers:s==null?void 0:s.modifiers,$value:s==null?void 0:s.value,$el:h.$el||o||void 0,$style:he({classes:void 0,inlineStyles:void 0,loadStyle:function(){}},n==null?void 0:n.style),$config:d,defaultPT:function(){return ne._getPT(d==null?void 0:d.pt,void 0,function(w){var v;return w==null||(v=w.directives)===null||v===void 0?void 0:v[t]})},isUnstyled:function(){var w,v;return((w=o.$instance)===null||w===void 0||(w=w.$binding)===null||w===void 0||(w=w.value)===null||w===void 0?void 0:w.unstyled)!==void 0?(v=o.$instance)===null||v===void 0||(v=v.$binding)===null||v===void 0||(v=v.value)===null||v===void 0?void 0:v.unstyled:d==null?void 0:d.unstyled},ptm:function(){var w,v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return ne._getPTValue(o.$instance,(w=o.$instance)===null||w===void 0||(w=w.$binding)===null||w===void 0||(w=w.value)===null||w===void 0?void 0:w.pt,v,he({},x))},ptmo:function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",x=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return ne._getPTValue(o.$instance,w,v,x,!1)},cx:function(){var w,v,x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return(w=o.$instance)!==null&&w!==void 0&&w.isUnstyled()?void 0:ne._getOptionValue((v=o.$instance)===null||v===void 0||(v=v.$style)===null||v===void 0?void 0:v.classes,x,he({},A))},sx:function(){var w,v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,A=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return x?ne._getOptionValue((w=o.$instance)===null||w===void 0||(w=w.$style)===null||w===void 0?void 0:w.inlineStyles,v,he({},A)):void 0}},_),o.$instance=o._$instances[t],(c=(f=o.$instance)[a])===null||c===void 0||c.call(f,o,s,l,u),o["$".concat(t)]=o.$instance,ne._hook(t,a,o,s,l,u)};return{created:function(a,o,s,l){r("created",a,o,s,l)},beforeMount:function(a,o,s,l){var u,c,f,d,h=ne._getConfig(o,s);xt.loadStyle({nonce:h==null||(u=h.csp)===null||u===void 0?void 0:u.nonce}),!((c=a.$instance)!==null&&c!==void 0&&c.isUnstyled())&&((f=a.$instance)===null||f===void 0||(f=f.$style)===null||f===void 0||f.loadStyle({nonce:h==null||(d=h.csp)===null||d===void 0?void 0:d.nonce})),r("beforeMount",a,o,s,l)},mounted:function(a,o,s,l){var u,c,f,d,h=ne._getConfig(o,s);xt.loadStyle({nonce:h==null||(u=h.csp)===null||u===void 0?void 0:u.nonce}),!((c=a.$instance)!==null&&c!==void 0&&c.isUnstyled())&&((f=a.$instance)===null||f===void 0||(f=f.$style)===null||f===void 0||f.loadStyle({nonce:h==null||(d=h.csp)===null||d===void 0?void 0:d.nonce})),r("mounted",a,o,s,l)},beforeUpdate:function(a,o,s,l){r("beforeUpdate",a,o,s,l)},updated:function(a,o,s,l){r("updated",a,o,s,l)},beforeUnmount:function(a,o,s,l){r("beforeUnmount",a,o,s,l)},unmounted:function(a,o,s,l){r("unmounted",a,o,s,l)}}},extend:function(){var t=ne._getMeta.apply(ne,arguments),n=is(t,2),r=n[0],i=n[1];return he({extend:function(){var o=ne._getMeta.apply(ne,arguments),s=is(o,2),l=s[0],u=s[1];return ne.extend(l,he(he(he({},i),i==null?void 0:i.methods),u))}},ne._extend(r,i))}},Rm=`
@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}

@layer primevue {
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ink {
        display: block;
        position: absolute;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    .p-ripple-disabled .p-ink {
        display: none;
    }
}
`,jm={root:"p-ink"},Mm=xt.extend({name:"ripple",css:Rm,classes:jm}),Nm=ne.extend({style:Mm});function Lm(e){return Hm(e)||Bm(e)||Dm(e)||Fm()}function Fm(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Dm(e,t){if(e){if(typeof e=="string")return Qi(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Qi(e,t)}}function Bm(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Hm(e){if(Array.isArray(e))return Qi(e)}function Qi(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var zm=Nm.extend("ripple",{mounted:function(t){var n,r=t==null||(n=t.$instance)===null||n===void 0?void 0:n.$config;r&&r.ripple&&(this.create(t),this.bindEvents(t),t.setAttribute("data-pd-ripple",!0))},unmounted:function(t){this.remove(t)},timeout:void 0,methods:{bindEvents:function(t){t.addEventListener("mousedown",this.onMouseDown.bind(this))},unbindEvents:function(t){t.removeEventListener("mousedown",this.onMouseDown.bind(this))},create:function(t){var n=Ie.createElement("span",{role:"presentation","aria-hidden":!0,"data-p-ink":!0,"data-p-ink-active":!1,class:!this.isUnstyled()&&this.cx("root"),onAnimationEnd:this.onAnimationEnd.bind(this),"p-bind":this.ptm("root")});t.appendChild(n),this.$el=n},remove:function(t){var n=this.getInk(t);n&&(this.unbindEvents(t),n.removeEventListener("animationend",this.onAnimationEnd),n.remove())},onMouseDown:function(t){var n=this,r=t.currentTarget,i=this.getInk(r);if(!(!i||getComputedStyle(i,null).display==="none")){if(!this.isUnstyled()&&Ie.removeClass(i,"p-ink-active"),i.setAttribute("data-p-ink-active","false"),!Ie.getHeight(i)&&!Ie.getWidth(i)){var a=Math.max(Ie.getOuterWidth(r),Ie.getOuterHeight(r));i.style.height=a+"px",i.style.width=a+"px"}var o=Ie.getOffset(r),s=t.pageX-o.left+document.body.scrollTop-Ie.getWidth(i)/2,l=t.pageY-o.top+document.body.scrollLeft-Ie.getHeight(i)/2;i.style.top=l+"px",i.style.left=s+"px",!this.isUnstyled()&&Ie.addClass(i,"p-ink-active"),i.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(function(){i&&(!n.isUnstyled()&&Ie.removeClass(i,"p-ink-active"),i.setAttribute("data-p-ink-active","false"))},401)}},onAnimationEnd:function(t){this.timeout&&clearTimeout(this.timeout),!this.isUnstyled()&&Ie.removeClass(t.currentTarget,"p-ink-active"),t.currentTarget.setAttribute("data-p-ink-active","false")},getInk:function(t){return t&&t.children?Lm(t.children).find(function(n){return Ie.getAttribute(n,"data-pc-name")==="ripple"}):void 0}}});function Xn(e){"@babel/helpers - typeof";return Xn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Xn(e)}function Tt(e,t,n){return t=Vm(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Vm(e){var t=Um(e,"string");return Xn(t)=="symbol"?t:String(t)}function Um(e,t){if(Xn(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Xn(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Wm={root:function(t){var n=t.instance,r=t.props;return["p-button p-component",Tt(Tt(Tt(Tt(Tt(Tt(Tt(Tt({"p-button-icon-only":n.hasIcon&&!r.label&&!r.badge,"p-button-vertical":(r.iconPos==="top"||r.iconPos==="bottom")&&r.label,"p-disabled":n.$attrs.disabled||n.$attrs.disabled===""||r.loading,"p-button-loading":r.loading,"p-button-loading-label-only":r.loading&&!n.hasIcon&&r.label,"p-button-link":r.link},"p-button-".concat(r.severity),r.severity),"p-button-raised",r.raised),"p-button-rounded",r.rounded),"p-button-text",r.text),"p-button-outlined",r.outlined),"p-button-sm",r.size==="small"),"p-button-lg",r.size==="large"),"p-button-plain",r.plain)]},loadingIcon:"p-button-loading-icon pi-spin",icon:function(t){var n=t.props;return["p-button-icon",{"p-button-icon-left":n.iconPos==="left"&&n.label,"p-button-icon-right":n.iconPos==="right"&&n.label,"p-button-icon-top":n.iconPos==="top"&&n.label,"p-button-icon-bottom":n.iconPos==="bottom"&&n.label}]},label:"p-button-label"},Km=xt.extend({name:"button",classes:Wm}),Ym={name:"BaseButton",extends:ti,props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:String,default:null},badge:{type:String,default:null},badgeClass:{type:String,default:null},badgeSeverity:{type:String,default:null},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},link:{type:Boolean,default:!1},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},plain:{type:Boolean,default:!1}},style:Km,provide:function(){return{$parentInstance:this}}},Ji={name:"Button",extends:Ym,methods:{getPTOptions:function(t){return this.ptm(t,{context:{disabled:this.disabled}})}},computed:{disabled:function(){return this.$attrs.disabled||this.$attrs.disabled===""||this.loading},defaultAriaLabel:function(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs.ariaLabel},hasIcon:function(){return this.icon||this.$slots.icon}},components:{SpinnerIcon:eu,Badge:Zl},directives:{ripple:zm}},qm=["aria-label","disabled","data-pc-severity"];function Gm(e,t,n,r,i,a){var o=hn("SpinnerIcon"),s=hn("Badge"),l=Cc("ripple");return Rc((ce(),Oe("button",we({class:e.cx("root"),type:"button","aria-label":a.defaultAriaLabel,disabled:a.disabled},a.getPTOptions("root"),{"data-pc-name":"button","data-pc-severity":e.severity}),[vt(e.$slots,"default",{},function(){return[e.loading?vt(e.$slots,"loadingicon",{key:0,class:Fn([e.cx("loadingIcon"),e.cx("icon")])},function(){return[e.loadingIcon?(ce(),Oe("span",we({key:0,class:[e.cx("loadingIcon"),e.cx("icon"),e.loadingIcon]},e.ptm("loadingIcon")),null,16)):(ce(),gn(o,we({key:1,class:[e.cx("loadingIcon"),e.cx("icon")],spin:""},e.ptm("loadingIcon")),null,16,["class"]))]}):vt(e.$slots,"icon",{key:1,class:Fn([e.cx("icon")])},function(){return[e.icon?(ce(),Oe("span",we({key:0,class:[e.cx("icon"),e.icon,e.iconClass]},e.ptm("icon")),null,16)):bt("",!0)]}),ee("span",we({class:e.cx("label")},e.ptm("label")),Ar(e.label||" "),17),e.badge?(ce(),gn(s,we({key:2,value:e.badge,class:e.badgeClass,severity:e.badgeSeverity,unstyled:e.unstyled},e.ptm("badge")),null,16,["value","class","severity","unstyled"])):bt("",!0)]})],16,qm)),[[l]])}Ji.render=Gm;const Xm={class:"container"},Qm={class:"card"},Jm={class:"img"},Zm=["src"],eh={class:"sentence"},th=["onClick"],nh={class:"flex gap-3 mt-1 record-btn"},Si="test doll",ss={__name:"read",setup(e){const t=[{id:1,text:"Bella and Kaylie ran up the hill.",img_url:"public/run_up_hill.gif"},{id:2,text:"They walked back down to the lake.",img_url:"src/assets/gif/run_up_hill.gif"},{id:3,text:"They walked back down to the lake.",img_url:"https://picsum.photos/300/200?q=2"},{id:4,text:"They walked back down to the lake.",img_url:"https://picsum.photos/300/200?q=2"},{id:5,text:"They walked back down to the lake.",img_url:"https://picsum.photos/300/200?q=2"},{id:6,text:"They walked back down to the lake.",img_url:"https://picsum.photos/300/200?q=2"}];let n=oe(!1);window.SpeechRecognition=window.webkitSpeechRecognition||window.SpeechRecognition;let r="",i=new window.SpeechRecognition;i.interimResults=!0,i.maxAlternatives=10,i.continuous=!0,i.onresult=u=>{let c="";for(let f=u.resultIndex,d=u.results.length;f<d;f++){let h=u.results[f][0].transcript;u.results[f].isFinal?r+=h:c+=h}a(c),document.getElementById("text-output").innerHTML=r+"<p>"+c+"</p>"};const a=u=>{console.log(u);let c=u.toLowerCase().split(" ");console.log(c),console.log(Si);let f=Si.toLocaleLowerCase().split(" ");console.log(f);for(let d=0;d<c.length;d++)for(let h=0;h<f.length;h++)return f[h]==c[d]?(console.log("string is the same"),console.log(Si[h]),!0):(console.log("sting is different"),!1)},o=()=>{console.log("recording"),n.value=!0,r="",i.start()},s=()=>{console.log("recording stopped"),n.value=!1,i.abort()},l=u=>{let c=new SpeechSynthesisUtterance(u);speechSynthesis.speak(c)};return(u,c)=>{const f=hn("font-awesome-icon");return ce(),Oe("div",Xm,[q(De(mp),null,{addons:Ue(()=>[q(De(vp)),q(De(bp))]),default:Ue(()=>[(ce(),Oe(Be,null,lo(t,(d,h)=>q(De(yp),{key:d.id},{default:Ue(()=>[ee("div",Qm,[q(De(Jl),{style:{"max-width":"700px",overflow:"hidden","word-wrap":"inherit"}},{header:Ue(()=>[dn(Ar(console.log(d.img_url))+" ",1),ee("div",Jm,[ee("img",{alt:"user header",src:d.img_url},null,8,Zm)])]),content:Ue(()=>[ee("div",eh,[(ce(!0),Oe(Be,null,lo(d.text.split(" "),_=>(ce(),Oe("span",null,[ee("span",{class:"text-btn",onClick:E=>l(_)},Ar(_),9,th)]))),256))])]),footer:Ue(()=>[ee("div",nh,[De(n)?(ce(),gn(De(Ji),{key:0,class:"mic-btn-stop",onClick:s},{default:Ue(()=>[q(f,{icon:"fa-solid fa-microphone"})]),_:1})):bt("",!0),De(n)?bt("",!0):(ce(),gn(De(Ji),{key:1,class:"mic-btn-start",onClick:o},{default:Ue(()=>[q(f,{icon:"fa-solid fa-microphone"})]),_:1}))])]),_:2},1024)])]),_:2},1024)),64))]),_:1})])}}},ni=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},rh={},ih={class:"container"},ah=ee("nav",{class:"nav"},null,-1),oh=ee("button",null,"Home",-1),sh=ee("section",{class:"text-to-read"},null,-1),lh=ee("div",{id:"text-output"},null,-1),uh=ee("div",{class:"mic-btn"},null,-1),ch=[ah,oh,sh,lh,uh];function fh(e,t){return ce(),Oe("div",ih,ch)}const ls=ni(rh,[["render",fh]]),dh={},ph=Ml('<div>Math</div><div class="container"><nav class="nav"></nav><section class="text-to-read"></section><div id="text-output"></div><div class="mic-btn"><button>Math</button></div></div>',2);function mh(e,t){return ph}const us=ni(dh,[["render",mh]]),hh={},gh=Ml('<div>Write</div><div class="container"><nav class="nav"></nav><section class="text-to-read"></section><div id="text-output"></div><div class="mic-btn"><button>Write</button></div></div>',2);function vh(e,t){return gh}const cs=ni(hh,[["render",vh]]),bh={},yh={class:"container"},wh=ee("nav",{class:"nav"},null,-1),_h=ee("section",{class:"text-to-read"},null,-1),xh=ee("div",{id:"text-output"},null,-1),Sh=ee("div",{class:"mic-btn"},[ee("button",null,"Settings")],-1),Eh=[wh,_h,xh,Sh];function Oh(e,t){return ce(),Oe("div",yh,Eh)}const fs=ni(bh,[["render",Oh]]),Ph=[{path:"/",name:ls,component:ls},{path:"/read",name:ss,component:ss},{path:"/write",name:cs,component:cs},{path:"/math",name:us,component:us},{path:"/settings",name:fs,component:fs}],Ch=op({history:xd(),routes:Ph});function ds(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ds(Object(n),!0).forEach(function(r){$e(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ds(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Lr(e){"@babel/helpers - typeof";return Lr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Lr(e)}function Ah(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ps(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function kh(e,t,n){return t&&ps(e.prototype,t),n&&ps(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function $e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ma(e,t){return Th(e)||Rh(e,t)||tu(e,t)||Mh()}function rr(e){return $h(e)||Ih(e)||tu(e)||jh()}function $h(e){if(Array.isArray(e))return Zi(e)}function Th(e){if(Array.isArray(e))return e}function Ih(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Rh(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function tu(e,t){if(e){if(typeof e=="string")return Zi(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Zi(e,t)}}function Zi(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function jh(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Mh(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ms=function(){},Na={},nu={},ru=null,iu={mark:ms,measure:ms};try{typeof window<"u"&&(Na=window),typeof document<"u"&&(nu=document),typeof MutationObserver<"u"&&(ru=MutationObserver),typeof performance<"u"&&(iu=performance)}catch{}var Nh=Na.navigator||{},hs=Nh.userAgent,gs=hs===void 0?"":hs,zt=Na,fe=nu,vs=ru,dr=iu;zt.document;var Ct=!!fe.documentElement&&!!fe.head&&typeof fe.addEventListener=="function"&&typeof fe.createElement=="function",au=~gs.indexOf("MSIE")||~gs.indexOf("Trident/"),pr,mr,hr,gr,vr,St="___FONT_AWESOME___",ea=16,ou="fa",su="svg-inline--fa",Zt="data-fa-i2svg",ta="data-fa-pseudo-element",Lh="data-fa-pseudo-element-pending",La="data-prefix",Fa="data-icon",bs="fontawesome-i2svg",Fh="async",Dh=["HTML","HEAD","STYLE","SCRIPT"],lu=function(){try{return!0}catch{return!1}}(),ue="classic",ye="sharp",Da=[ue,ye];function ir(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ue]}})}var Qn=ir((pr={},$e(pr,ue,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),$e(pr,ye,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),pr)),Jn=ir((mr={},$e(mr,ue,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),$e(mr,ye,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),mr)),Zn=ir((hr={},$e(hr,ue,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),$e(hr,ye,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),hr)),Bh=ir((gr={},$e(gr,ue,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),$e(gr,ye,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),gr)),Hh=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,uu="fa-layers-text",zh=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Vh=ir((vr={},$e(vr,ue,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),$e(vr,ye,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),vr)),cu=[1,2,3,4,5,6,7,8,9,10],Uh=cu.concat([11,12,13,14,15,16,17,18,19,20]),Wh=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Gt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},er=new Set;Object.keys(Jn[ue]).map(er.add.bind(er));Object.keys(Jn[ye]).map(er.add.bind(er));var Kh=[].concat(Da,rr(er),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Gt.GROUP,Gt.SWAP_OPACITY,Gt.PRIMARY,Gt.SECONDARY]).concat(cu.map(function(e){return"".concat(e,"x")})).concat(Uh.map(function(e){return"w-".concat(e)})),Nn=zt.FontAwesomeConfig||{};function Yh(e){var t=fe.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function qh(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(fe&&typeof fe.querySelector=="function"){var Gh=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Gh.forEach(function(e){var t=Ma(e,2),n=t[0],r=t[1],i=qh(Yh(n));i!=null&&(Nn[r]=i)})}var fu={styleDefault:"solid",familyDefault:"classic",cssPrefix:ou,replacementClass:su,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Nn.familyPrefix&&(Nn.cssPrefix=Nn.familyPrefix);var yn=R(R({},fu),Nn);yn.autoReplaceSvg||(yn.observeMutations=!1);var N={};Object.keys(fu).forEach(function(e){Object.defineProperty(N,e,{enumerable:!0,set:function(n){yn[e]=n,Ln.forEach(function(r){return r(N)})},get:function(){return yn[e]}})});Object.defineProperty(N,"familyPrefix",{enumerable:!0,set:function(t){yn.cssPrefix=t,Ln.forEach(function(n){return n(N)})},get:function(){return yn.cssPrefix}});zt.FontAwesomeConfig=N;var Ln=[];function Xh(e){return Ln.push(e),function(){Ln.splice(Ln.indexOf(e),1)}}var It=ea,mt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Qh(e){if(!(!e||!Ct)){var t=fe.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=fe.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return fe.head.insertBefore(t,r),e}}var Jh="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function tr(){for(var e=12,t="";e-- >0;)t+=Jh[Math.random()*62|0];return t}function Sn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ba(e){return e.classList?Sn(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function du(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Zh(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(du(e[n]),'" ')},"").trim()}function ri(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ha(e){return e.size!==mt.size||e.x!==mt.x||e.y!==mt.y||e.rotate!==mt.rotate||e.flipX||e.flipY}function eg(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function tg(e){var t=e.transform,n=e.width,r=n===void 0?ea:n,i=e.height,a=i===void 0?ea:i,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&au?l+="translate(".concat(t.x/It-r/2,"em, ").concat(t.y/It-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/It,"em), calc(-50% + ").concat(t.y/It,"em)) "):l+="translate(".concat(t.x/It,"em, ").concat(t.y/It,"em) "),l+="scale(".concat(t.size/It*(t.flipX?-1:1),", ").concat(t.size/It*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var ng=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function pu(){var e=ou,t=su,n=N.cssPrefix,r=N.replacementClass,i=ng;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var ys=!1;function Ei(){N.autoAddCss&&!ys&&(Qh(pu()),ys=!0)}var rg={mixout:function(){return{dom:{css:pu,insertCss:Ei}}},hooks:function(){return{beforeDOMElementCreation:function(){Ei()},beforeI2svg:function(){Ei()}}}},Et=zt||{};Et[St]||(Et[St]={});Et[St].styles||(Et[St].styles={});Et[St].hooks||(Et[St].hooks={});Et[St].shims||(Et[St].shims=[]);var ot=Et[St],mu=[],ig=function e(){fe.removeEventListener("DOMContentLoaded",e),Fr=1,mu.map(function(t){return t()})},Fr=!1;Ct&&(Fr=(fe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(fe.readyState),Fr||fe.addEventListener("DOMContentLoaded",ig));function ag(e){Ct&&(Fr?setTimeout(e,0):mu.push(e))}function ar(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?du(e):"<".concat(t," ").concat(Zh(r),">").concat(a.map(ar).join(""),"</").concat(t,">")}function ws(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var og=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},Oi=function(t,n,r,i){var a=Object.keys(t),o=a.length,s=i!==void 0?og(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[a[0]]):(l=0,c=r);l<o;l++)u=a[l],c=s(c,t[u],u,t);return c};function sg(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function na(e){var t=sg(e);return t.length===1?t[0].toString(16):null}function lg(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function _s(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function ra(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=_s(t);typeof ot.hooks.addPack=="function"&&!i?ot.hooks.addPack(e,_s(t)):ot.styles[e]=R(R({},ot.styles[e]||{}),a),e==="fas"&&ra("fa",t)}var br,yr,wr,on=ot.styles,ug=ot.shims,cg=(br={},$e(br,ue,Object.values(Zn[ue])),$e(br,ye,Object.values(Zn[ye])),br),za=null,hu={},gu={},vu={},bu={},yu={},fg=(yr={},$e(yr,ue,Object.keys(Qn[ue])),$e(yr,ye,Object.keys(Qn[ye])),yr);function dg(e){return~Kh.indexOf(e)}function pg(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!dg(i)?i:null}var wu=function(){var t=function(a){return Oi(on,function(o,s,l){return o[l]=Oi(s,a,{}),o},{})};hu=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),gu=t(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),yu=t(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in on||N.autoFetchSvg,r=Oi(ug,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});vu=r.names,bu=r.unicodes,za=ii(N.styleDefault,{family:N.familyDefault})};Xh(function(e){za=ii(e.styleDefault,{family:N.familyDefault})});wu();function Va(e,t){return(hu[e]||{})[t]}function mg(e,t){return(gu[e]||{})[t]}function Xt(e,t){return(yu[e]||{})[t]}function _u(e){return vu[e]||{prefix:null,iconName:null}}function hg(e){var t=bu[e],n=Va("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Vt(){return za}var Ua=function(){return{prefix:null,iconName:null,rest:[]}};function ii(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ue:n,i=Qn[r][e],a=Jn[r][e]||Jn[r][i],o=e in ot.styles?e:null;return a||o||null}var xs=(wr={},$e(wr,ue,Object.keys(Zn[ue])),$e(wr,ye,Object.keys(Zn[ye])),wr);function ai(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},$e(t,ue,"".concat(N.cssPrefix,"-").concat(ue)),$e(t,ye,"".concat(N.cssPrefix,"-").concat(ye)),t),o=null,s=ue;(e.includes(a[ue])||e.some(function(u){return xs[ue].includes(u)}))&&(s=ue),(e.includes(a[ye])||e.some(function(u){return xs[ye].includes(u)}))&&(s=ye);var l=e.reduce(function(u,c){var f=pg(N.cssPrefix,c);if(on[c]?(c=cg[s].includes(c)?Bh[s][c]:c,o=c,u.prefix=c):fg[s].indexOf(c)>-1?(o=c,u.prefix=ii(c,{family:s})):f?u.iconName=f:c!==N.replacementClass&&c!==a[ue]&&c!==a[ye]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var d=o==="fa"?_u(u.iconName):{},h=Xt(u.prefix,u.iconName);d.prefix&&(o=null),u.iconName=d.iconName||h||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!on.far&&on.fas&&!N.autoFetchSvg&&(u.prefix="fas")}return u},Ua());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ye&&(on.fass||N.autoFetchSvg)&&(l.prefix="fass",l.iconName=Xt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Vt()||"fas"),l}var gg=function(){function e(){Ah(this,e),this.definitions={}}return kh(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=R(R({},n.definitions[s]||{}),o[s]),ra(s,o[s]);var l=Zn[ue][s];l&&ra(l,o[s]),wu()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[s][f]=u)}),n[s][l]=u}),n}}]),e}(),Ss=[],sn={},pn={},vg=Object.keys(pn);function bg(e,t){var n=t.mixoutsTo;return Ss=e,sn={},Object.keys(pn).forEach(function(r){vg.indexOf(r)===-1&&delete pn[r]}),Ss.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Lr(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){sn[o]||(sn[o]=[]),sn[o].push(a[o])})}r.provides&&r.provides(pn)}),n}function ia(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=sn[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function en(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=sn[e]||[];i.forEach(function(a){a.apply(null,n)})}function Ot(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return pn[e]?pn[e].apply(null,t):void 0}function aa(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Vt();if(t)return t=Xt(n,t)||t,ws(xu.definitions,n,t)||ws(ot.styles,n,t)}var xu=new gg,yg=function(){N.autoReplaceSvg=!1,N.observeMutations=!1,en("noAuto")},wg={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ct?(en("beforeI2svg",t),Ot("pseudoElements2svg",t),Ot("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,ag(function(){xg({autoReplaceSvgRoot:n}),en("watch",t)})}},_g={icon:function(t){if(t===null)return null;if(Lr(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Xt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=ii(t[0]);return{prefix:r,iconName:Xt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(N.cssPrefix,"-"))>-1||t.match(Hh))){var i=ai(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Vt(),iconName:Xt(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=Vt();return{prefix:a,iconName:Xt(a,t)||t}}}},Xe={noAuto:yg,config:N,dom:wg,parse:_g,library:xu,findIconDefinition:aa,toHtml:ar},xg=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?fe:n;(Object.keys(ot.styles).length>0||N.autoFetchSvg)&&Ct&&N.autoReplaceSvg&&Xe.dom.i2svg({node:r})};function oi(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ar(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Ct){var r=fe.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Sg(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(Ha(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};i.style=ri(R(R({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function Eg(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(N.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:R(R({},i),{},{id:o}),children:r}]}]}function Wa(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,d=e.watchable,h=d===void 0?!1:d,_=r.found?r:n,E=_.width,w=_.height,v=i==="fak",x=[N.replacementClass,a?"".concat(N.cssPrefix,"-").concat(a):""].filter(function(J){return f.classes.indexOf(J)===-1}).filter(function(J){return J!==""||!!J}).concat(f.classes).join(" "),A={children:[],attributes:R(R({},f.attributes),{},{"data-prefix":i,"data-icon":a,class:x,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(w)})},L=v&&!~f.classes.indexOf("fa-fw")?{width:"".concat(E/w*16*.0625,"em")}:{};h&&(A.attributes[Zt]=""),l&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(c||tr())},children:[l]}),delete A.attributes.title);var H=R(R({},A),{},{prefix:i,iconName:a,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:R(R({},L),f.styles)}),F=r.found&&n.found?Ot("generateAbstractMask",H)||{children:[],attributes:{}}:Ot("generateAbstractIcon",H)||{children:[],attributes:{}},W=F.children,ge=F.attributes;return H.children=W,H.attributes=ge,s?Eg(H):Sg(H)}function Es(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=R(R(R({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(u[Zt]="");var c=R({},o.styles);Ha(i)&&(c.transform=tg({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=ri(c);f.length>0&&(u.style=f);var d=[];return d.push({tag:"span",attributes:u,children:[t]}),a&&d.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),d}function Og(e){var t=e.content,n=e.title,r=e.extra,i=R(R(R({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=ri(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Pi=ot.styles;function oa(e){var t=e[0],n=e[1],r=e.slice(4),i=Ma(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(N.cssPrefix,"-").concat(Gt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(Gt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(Gt.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var Pg={found:!1,width:512,height:512};function Cg(e,t){!lu&&!N.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function sa(e,t){var n=t;return t==="fa"&&N.styleDefault!==null&&(t=Vt()),new Promise(function(r,i){if(Ot("missingIconAbstract"),n==="fa"){var a=_u(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Pi[t]&&Pi[t][e]){var o=Pi[t][e];return r(oa(o))}Cg(e,t),r(R(R({},Pg),{},{icon:N.showMissingIcons&&e?Ot("missingIconAbstract")||{}:{}}))})}var Os=function(){},la=N.measurePerformance&&dr&&dr.mark&&dr.measure?dr:{mark:Os,measure:Os},An='FA "6.5.1"',Ag=function(t){return la.mark("".concat(An," ").concat(t," begins")),function(){return Su(t)}},Su=function(t){la.mark("".concat(An," ").concat(t," ends")),la.measure("".concat(An," ").concat(t),"".concat(An," ").concat(t," begins"),"".concat(An," ").concat(t," ends"))},Ka={begin:Ag,end:Su},Or=function(){};function Ps(e){var t=e.getAttribute?e.getAttribute(Zt):null;return typeof t=="string"}function kg(e){var t=e.getAttribute?e.getAttribute(La):null,n=e.getAttribute?e.getAttribute(Fa):null;return t&&n}function $g(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(N.replacementClass)}function Tg(){if(N.autoReplaceSvg===!0)return Pr.replace;var e=Pr[N.autoReplaceSvg];return e||Pr.replace}function Ig(e){return fe.createElementNS("http://www.w3.org/2000/svg",e)}function Rg(e){return fe.createElement(e)}function Eu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Ig:Rg:n;if(typeof e=="string")return fe.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(Eu(o,{ceFn:r}))}),i}function jg(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Pr={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Eu(i),n)}),n.getAttribute(Zt)===null&&N.keepOriginalSource){var r=fe.createComment(jg(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ba(n).indexOf(N.replacementClass))return Pr.replace(t);var i=new RegExp("".concat(N.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===N.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return ar(s)}).join(`
`);n.setAttribute(Zt,""),n.innerHTML=o}};function Cs(e){e()}function Ou(e,t){var n=typeof t=="function"?t:Or;if(e.length===0)n();else{var r=Cs;N.mutateApproach===Fh&&(r=zt.requestAnimationFrame||Cs),r(function(){var i=Tg(),a=Ka.begin("mutate");e.map(i),a(),n()})}}var Ya=!1;function Pu(){Ya=!0}function ua(){Ya=!1}var Dr=null;function As(e){if(vs&&N.observeMutations){var t=e.treeCallback,n=t===void 0?Or:t,r=e.nodeCallback,i=r===void 0?Or:r,a=e.pseudoElementsCallback,o=a===void 0?Or:a,s=e.observeMutationsRoot,l=s===void 0?fe:s;Dr=new vs(function(u){if(!Ya){var c=Vt();Sn(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Ps(f.addedNodes[0])&&(N.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&N.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Ps(f.target)&&~Wh.indexOf(f.attributeName))if(f.attributeName==="class"&&kg(f.target)){var d=ai(Ba(f.target)),h=d.prefix,_=d.iconName;f.target.setAttribute(La,h||c),_&&f.target.setAttribute(Fa,_)}else $g(f.target)&&i(f.target)})}}),Ct&&Dr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Mg(){Dr&&Dr.disconnect()}function Ng(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Lg(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=ai(Ba(e));return i.prefix||(i.prefix=Vt()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=mg(i.prefix,e.innerText)||Va(i.prefix,na(e.innerText))),!i.iconName&&N.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Fg(e){var t=Sn(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return N.autoA11y&&(n?t["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(r||tr()):(t["aria-hidden"]="true",t.focusable="false")),t}function Dg(){return{iconName:null,title:null,titleId:null,prefix:null,transform:mt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ks(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Lg(e),r=n.iconName,i=n.prefix,a=n.rest,o=Fg(e),s=ia("parseNodeAttributes",{},e),l=t.styleParser?Ng(e):[];return R({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:mt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var Bg=ot.styles;function Cu(e){var t=N.autoReplaceSvg==="nest"?ks(e,{styleParser:!1}):ks(e);return~t.extra.classes.indexOf(uu)?Ot("generateLayersText",e,t):Ot("generateSvgReplacementMutation",e,t)}var Ut=new Set;Da.map(function(e){Ut.add("fa-".concat(e))});Object.keys(Qn[ue]).map(Ut.add.bind(Ut));Object.keys(Qn[ye]).map(Ut.add.bind(Ut));Ut=rr(Ut);function $s(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ct)return Promise.resolve();var n=fe.documentElement.classList,r=function(f){return n.add("".concat(bs,"-").concat(f))},i=function(f){return n.remove("".concat(bs,"-").concat(f))},a=N.autoFetchSvg?Ut:Da.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Bg));a.includes("fa")||a.push("fa");var o=[".".concat(uu,":not([").concat(Zt,"])")].concat(a.map(function(c){return".".concat(c,":not([").concat(Zt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Sn(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Ka.begin("onTree"),u=s.reduce(function(c,f){try{var d=Cu(f);d&&c.push(d)}catch(h){lu||h.name==="MissingIcon"&&console.error(h)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(d){Ou(d,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(d){l(),f(d)})})}function Hg(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Cu(e).then(function(n){n&&Ou([n],t)})}function zg(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:aa(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:aa(i||{})),e(r,R(R({},n),{},{mask:i}))}}var Vg=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?mt:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,f=n.title,d=f===void 0?null:f,h=n.titleId,_=h===void 0?null:h,E=n.classes,w=E===void 0?[]:E,v=n.attributes,x=v===void 0?{}:v,A=n.styles,L=A===void 0?{}:A;if(t){var H=t.prefix,F=t.iconName,W=t.icon;return oi(R({type:"icon"},t),function(){return en("beforeDOMElementCreation",{iconDefinition:t,params:n}),N.autoA11y&&(d?x["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(_||tr()):(x["aria-hidden"]="true",x.focusable="false")),Wa({icons:{main:oa(W),mask:l?oa(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:F,transform:R(R({},mt),i),symbol:o,title:d,maskId:c,titleId:_,extra:{attributes:x,styles:L,classes:w}})})}},Ug={mixout:function(){return{icon:zg(Vg)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=$s,n.nodeCallback=Hg,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?fe:r,a=n.callback,o=a===void 0?function(){}:a;return $s(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,d=r.extra;return new Promise(function(h,_){Promise.all([sa(i,s),c.iconName?sa(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var w=Ma(E,2),v=w[0],x=w[1];h([n,Wa({icons:{main:v,mask:x},prefix:s,iconName:i,transform:l,symbol:u,maskId:f,title:a,titleId:o,extra:d,watchable:!0})])}).catch(_)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=ri(s);l.length>0&&(i.style=l);var u;return Ha(o)&&(u=Ot("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(u||a.icon),{children:r,attributes:i}}}},Wg={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return oi({type:"layer"},function(){en("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(N.cssPrefix,"-layers")].concat(rr(a)).join(" ")},children:o}]})}}}},Kg={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return oi({type:"counter",content:n},function(){return en("beforeDOMElementCreation",{content:n,params:r}),Og({content:n.toString(),title:a,extra:{attributes:u,styles:f,classes:["".concat(N.cssPrefix,"-layers-counter")].concat(rr(s))}})})}}}},Yg={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?mt:i,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,d=r.styles,h=d===void 0?{}:d;return oi({type:"text",content:n},function(){return en("beforeDOMElementCreation",{content:n,params:r}),Es({content:n,transform:R(R({},mt),a),title:s,extra:{attributes:f,styles:h,classes:["".concat(N.cssPrefix,"-layers-text")].concat(rr(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(au){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return N.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Es({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},qg=new RegExp('"',"ug"),Ts=[1105920,1112319];function Gg(e){var t=e.replace(qg,""),n=lg(t,0),r=n>=Ts[0]&&n<=Ts[1],i=t.length===2?t[0]===t[1]:!1;return{value:na(i?t[0]:t),isSecondary:r||i}}function Is(e,t){var n="".concat(Lh).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=Sn(e.children),o=a.filter(function(W){return W.getAttribute(ta)===t})[0],s=zt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(zh),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var f=s.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?ye:ue,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Jn[d][l[2].toLowerCase()]:Vh[d][u],_=Gg(f),E=_.value,w=_.isSecondary,v=l[0].startsWith("FontAwesome"),x=Va(h,E),A=x;if(v){var L=hg(E);L.iconName&&L.prefix&&(x=L.iconName,h=L.prefix)}if(x&&!w&&(!o||o.getAttribute(La)!==h||o.getAttribute(Fa)!==A)){e.setAttribute(n,A),o&&e.removeChild(o);var H=Dg(),F=H.extra;F.attributes[ta]=t,sa(x,h).then(function(W){var ge=Wa(R(R({},H),{},{icons:{main:W,mask:Ua()},prefix:h,iconName:A,extra:F,watchable:!0})),J=fe.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(J,e.firstChild):e.appendChild(J),J.outerHTML=ge.map(function(Se){return ar(Se)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Xg(e){return Promise.all([Is(e,"::before"),Is(e,"::after")])}function Qg(e){return e.parentNode!==document.head&&!~Dh.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ta)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Rs(e){if(Ct)return new Promise(function(t,n){var r=Sn(e.querySelectorAll("*")).filter(Qg).map(Xg),i=Ka.begin("searchPseudoElements");Pu(),Promise.all(r).then(function(){i(),ua(),t()}).catch(function(){i(),ua(),n()})})}var Jg={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Rs,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?fe:r;N.searchPseudoElements&&Rs(i)}}},js=!1,Zg={mixout:function(){return{dom:{unwatch:function(){Pu(),js=!0}}}},hooks:function(){return{bootstrap:function(){As(ia("mutationObserverCallbacks",{}))},noAuto:function(){Mg()},watch:function(n){var r=n.observeMutationsRoot;js?ua():As(ia("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ms=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},ev={mixout:function(){return{parse:{transform:function(n){return Ms(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Ms(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},d={transform:"translate(".concat(o/2*-1," -256)")},h={outer:s,inner:f,path:d};return{tag:"g",attributes:R({},h.outer),children:[{tag:"g",attributes:R({},h.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:R(R({},r.icon.attributes),h.path)}]}]}}}},Ci={x:0,y:0,width:"100%",height:"100%"};function Ns(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function tv(e){return e.tag==="g"?e.children:[e]}var nv={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?ai(i.split(" ").map(function(o){return o.trim()})):Ua();return a.prefix||(a.prefix=Vt()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,u=a.width,c=a.icon,f=o.width,d=o.icon,h=eg({transform:l,containerWidth:f,iconWidth:u}),_={tag:"rect",attributes:R(R({},Ci),{},{fill:"white"})},E=c.children?{children:c.children.map(Ns)}:{},w={tag:"g",attributes:R({},h.inner),children:[Ns(R({tag:c.tag,attributes:R(R({},c.attributes),h.path)},E))]},v={tag:"g",attributes:R({},h.outer),children:[w]},x="mask-".concat(s||tr()),A="clip-".concat(s||tr()),L={tag:"mask",attributes:R(R({},Ci),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,v]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:tv(d)},L]};return r.push(H,{tag:"rect",attributes:R({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(x,")")},Ci)}),{children:r,attributes:i}}}},rv={provides:function(t){var n=!1;zt.matchMedia&&(n=zt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:R(R({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=R(R({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:R(R({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:R(R({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:R(R({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:R(R({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:R(R({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:R(R({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:R(R({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},iv={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},av=[rg,Ug,Wg,Kg,Yg,Jg,Zg,ev,nv,rv,iv];bg(av,{mixoutsTo:Xe});Xe.noAuto;Xe.config;var ov=Xe.library;Xe.dom;var ca=Xe.parse;Xe.findIconDefinition;Xe.toHtml;var sv=Xe.icon;Xe.layer;Xe.text;Xe.counter;function Ls(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function yt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ls(Object(n),!0).forEach(function(r){ze(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ls(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Br(e){"@babel/helpers - typeof";return Br=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Br(e)}function ze(e,t,n){return t=fv(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function lv(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function uv(e,t){if(e==null)return{};var n=lv(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function cv(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function fv(e){var t=cv(e,"string");return typeof t=="symbol"?t:String(t)}var dv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Au={exports:{}};(function(e){(function(t){var n=function(v,x,A){if(!u(x)||f(x)||d(x)||h(x)||l(x))return x;var L,H=0,F=0;if(c(x))for(L=[],F=x.length;H<F;H++)L.push(n(v,x[H],A));else{L={};for(var W in x)Object.prototype.hasOwnProperty.call(x,W)&&(L[v(W,A)]=n(v,x[W],A))}return L},r=function(v,x){x=x||{};var A=x.separator||"_",L=x.split||/(?=[A-Z])/;return v.split(L).join(A)},i=function(v){return _(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(x,A){return A?A.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},a=function(v){var x=i(v);return x.substr(0,1).toUpperCase()+x.substr(1)},o=function(v,x){return r(v,x).toLowerCase()},s=Object.prototype.toString,l=function(v){return typeof v=="function"},u=function(v){return v===Object(v)},c=function(v){return s.call(v)=="[object Array]"},f=function(v){return s.call(v)=="[object Date]"},d=function(v){return s.call(v)=="[object RegExp]"},h=function(v){return s.call(v)=="[object Boolean]"},_=function(v){return v=v-0,v===v},E=function(v,x){var A=x&&"process"in x?x.process:x;return typeof A!="function"?v:function(L,H){return A(L,v,H)}},w={camelize:i,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(v,x){return n(E(i,x),v)},decamelizeKeys:function(v,x){return n(E(o,x),v,x)},pascalizeKeys:function(v,x){return n(E(a,x),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=w:t.humps=w})(dv)})(Au);var pv=Au.exports,mv=["class","style"];function hv(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=pv.camelize(n.slice(0,r)),a=n.slice(r+1).trim();return t[i]=a,t},{})}function gv(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ku(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ku(l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.class=gv(c);break;case"style":l.style=hv(c);break;default:l.attrs[u]=c}return l},{attrs:{},class:{},style:{}});n.class;var a=n.style,o=a===void 0?{}:a,s=uv(n,mv);return Ae(e.tag,yt(yt(yt({},t),{},{class:i.class,style:yt(yt({},i.style),o)},i.attrs),s),r)}var $u=!1;try{$u=!0}catch{}function vv(){if(!$u&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ai(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ze({},e,t):{}}function bv(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ze(t,"fa-".concat(e.size),e.size!==null),ze(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ze(t,"fa-pull-".concat(e.pull),e.pull!==null),ze(t,"fa-swap-opacity",e.swapOpacity),ze(t,"fa-bounce",e.bounce),ze(t,"fa-shake",e.shake),ze(t,"fa-beat",e.beat),ze(t,"fa-fade",e.fade),ze(t,"fa-beat-fade",e.beatFade),ze(t,"fa-flash",e.flash),ze(t,"fa-spin-pulse",e.spinPulse),ze(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Fs(e){if(e&&Br(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ca.icon)return ca.icon(e);if(e===null)return null;if(Br(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var yv=xn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=Pe(function(){return Fs(t.icon)}),a=Pe(function(){return Ai("classes",bv(t))}),o=Pe(function(){return Ai("transform",typeof t.transform=="string"?ca.transform(t.transform):t.transform)}),s=Pe(function(){return Ai("mask",Fs(t.mask))}),l=Pe(function(){return sv(i.value,yt(yt(yt(yt({},a.value),o.value),s.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});_t(l,function(c){if(!c)return vv("Could not find one or more icon(s)",i.value,s.value)},{immediate:!0});var u=Pe(function(){return l.value?ku(l.value.abstract[0],{},r):null});return function(){return u.value}}}),wv={prefix:"fas",iconName:"lightbulb",icon:[384,512,[128161],"f0eb","M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"]},_v={prefix:"fas",iconName:"microphone",icon:[384,512,[],"f130","M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"]},xv={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"]},Sv={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]},Ev={prefix:"fas",iconName:"square-root-variable",icon:[576,512,["square-root-alt"],"f698","M282.6 78.1c8-27.3 33-46.1 61.4-46.1H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H344L238.7 457c-3.6 12.3-14.1 21.2-26.8 22.8s-25.1-4.6-31.5-15.6L77.6 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H77.6c22.8 0 43.8 12.1 55.3 31.8l65.2 111.8L282.6 78.1zM393.4 233.4c12.5-12.5 32.8-12.5 45.3 0L480 274.7l41.4-41.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L525.3 320l41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L480 365.3l-41.4 41.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 320l-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3z"]},Ov={prefix:"fas",iconName:"gears",icon:[640,512,["cogs"],"f085","M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8h-.7c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},Pv={prefix:"fas",iconName:"book",icon:[448,512,[128212],"f02d","M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]},Cv={prefix:"fas",iconName:"brain",icon:[512,512,[129504],"f5dc","M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56V56c0-30.9 25.1-56 56-56z"]};ov.add(_v,xv,Pv,Ev,wv,Cv,Ov,Sv);Yf(rd).use(Ch).component("font-awesome-icon",yv).mount("#app");
