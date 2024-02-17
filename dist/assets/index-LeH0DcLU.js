(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function gs(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const _e={},qn=[],lt=()=>{},Bh=()=>!1,po=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),vs=t=>t.startsWith("onUpdate:"),Fe=Object.assign,bs=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Uh=Object.prototype.hasOwnProperty,le=(t,e)=>Uh.call(t,e),G=Array.isArray,Yn=t=>mo(t)==="[object Map]",Gu=t=>mo(t)==="[object Set]",Q=t=>typeof t=="function",ke=t=>typeof t=="string",cr=t=>typeof t=="symbol",Ee=t=>t!==null&&typeof t=="object",qu=t=>(Ee(t)||Q(t))&&Q(t.then)&&Q(t.catch),Yu=Object.prototype.toString,mo=t=>Yu.call(t),Hh=t=>mo(t).slice(8,-1),Xu=t=>mo(t)==="[object Object]",ys=t=>ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ni=gs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),go=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Vh=/-(\w)/g,Ot=go(t=>t.replace(Vh,(e,n)=>n?n.toUpperCase():"")),zh=/\B([A-Z])/g,ur=go(t=>t.replace(zh,"-$1").toLowerCase()),vo=go(t=>t.charAt(0).toUpperCase()+t.slice(1)),Uo=go(t=>t?`on${vo(t)}`:""),hn=(t,e)=>!Object.is(t,e),Mi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ki=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},_a=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Wh=t=>{const e=ke(t)?Number(t):NaN;return isNaN(e)?t:e};let yl;const Ju=()=>yl||(yl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _s(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=ke(r)?Yh(r):_s(r);if(i)for(const o in i)e[o]=i[o]}return e}else if(ke(t)||Ee(t))return t}const Kh=/;(?![^(]*\))/g,Gh=/:([^]+)/,qh=/\/\*[^]*?\*\//g;function Yh(t){const e={};return t.replace(qh,"").split(Kh).forEach(n=>{if(n){const r=n.split(Gh);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function sn(t){let e="";if(ke(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const r=sn(t[n]);r&&(e+=r+" ")}else if(Ee(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Xh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jh=gs(Xh);function Zu(t){return!!t||t===""}const Et=t=>ke(t)?t:t==null?"":G(t)||Ee(t)&&(t.toString===Yu||!Q(t.toString))?JSON.stringify(t,Qu,2):String(t),Qu=(t,e)=>e&&e.__v_isRef?Qu(t,e.value):Yn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i],o)=>(n[Ho(r,o)+" =>"]=i,n),{})}:Gu(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ho(n))}:cr(e)?Ho(e):Ee(e)&&!G(e)&&!Xu(e)?String(e):e,Ho=(t,e="")=>{var n;return cr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pt;class Zh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=pt,!e&&pt&&(this.index=(pt.scopes||(pt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=pt;try{return pt=this,e()}finally{pt=n}}}on(){pt=this}off(){pt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Qh(t,e=pt){e&&e.active&&e.effects.push(t)}function ep(){return pt}let kn;class ws{constructor(e,n,r,i){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Qh(this,i)}get dirty(){if(this._dirtyLevel===1){Fn();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(tp(n.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),jn()}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=ln,n=kn;try{return ln=!0,kn=this,this._runnings++,_l(this),this.fn()}finally{wl(this),this._runnings--,kn=n,ln=e}}stop(){var e;this.active&&(_l(this),wl(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function tp(t){return t.value}function _l(t){t._trackId++,t._depsLength=0}function wl(t){if(t.deps&&t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)ef(t.deps[e],t);t.deps.length=t._depsLength}}function ef(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let ln=!0,wa=0;const tf=[];function Fn(){tf.push(ln),ln=!1}function jn(){const t=tf.pop();ln=t===void 0?!0:t}function Ss(){wa++}function Es(){for(wa--;!wa&&Sa.length;)Sa.shift()()}function nf(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&ef(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Sa=[];function rf(t,e,n){Ss();for(const r of t.keys())if(r._dirtyLevel<e&&t.get(r)===r._trackId){const i=r._dirtyLevel;r._dirtyLevel=e,i===0&&(r._shouldSchedule=!0,r.trigger())}of(t),Es()}function of(t){for(const e of t.keys())e.scheduler&&e._shouldSchedule&&(!e._runnings||e.allowRecurse)&&t.get(e)===e._trackId&&(e._shouldSchedule=!1,Sa.push(e.scheduler))}const af=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Ea=new WeakMap,Rn=Symbol(""),Ca=Symbol("");function Ze(t,e,n){if(ln&&kn){let r=Ea.get(t);r||Ea.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=af(()=>r.delete(n))),nf(kn,i)}}function Nt(t,e,n,r,i,o){const a=Ea.get(t);if(!a)return;let s=[];if(e==="clear")s=[...a.values()];else if(n==="length"&&G(t)){const l=Number(r);a.forEach((c,u)=>{(u==="length"||!cr(u)&&u>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(a.get(n)),e){case"add":G(t)?ys(n)&&s.push(a.get("length")):(s.push(a.get(Rn)),Yn(t)&&s.push(a.get(Ca)));break;case"delete":G(t)||(s.push(a.get(Rn)),Yn(t)&&s.push(a.get(Ca)));break;case"set":Yn(t)&&s.push(a.get(Rn));break}Ss();for(const l of s)l&&rf(l,2);Es()}const np=gs("__proto__,__v_isRef,__isVue"),sf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(cr)),Sl=rp();function rp(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ue(this);for(let o=0,a=this.length;o<a;o++)Ze(r,"get",o+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(ue)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Fn(),Ss();const r=ue(this)[e].apply(this,n);return Es(),jn(),r}}),t}function ip(t){const e=ue(this);return Ze(e,"has",t),e.hasOwnProperty(t)}class lf{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const i=this._isReadonly,o=this._shallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return o;if(n==="__v_raw")return r===(i?o?vp:df:o?ff:uf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=G(e);if(!i){if(a&&le(Sl,n))return Reflect.get(Sl,n,r);if(n==="hasOwnProperty")return ip}const s=Reflect.get(e,n,r);return(cr(n)?sf.has(n):np(n))||(i||Ze(e,"get",n),o)?s:Qe(s)?a&&ys(n)?s:s.value:Ee(s)?i?Ts(s):it(s):s}}class cf extends lf{constructor(e=!1){super(!1,e)}set(e,n,r,i){let o=e[n];if(!this._shallow){const l=rr(o);if(!Gi(r)&&!rr(r)&&(o=ue(o),r=ue(r)),!G(e)&&Qe(o)&&!Qe(r))return l?!1:(o.value=r,!0)}const a=G(e)&&ys(n)?Number(n)<e.length:le(e,n),s=Reflect.set(e,n,r,i);return e===ue(i)&&(a?hn(r,o)&&Nt(e,"set",n,r):Nt(e,"add",n,r)),s}deleteProperty(e,n){const r=le(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&r&&Nt(e,"delete",n,void 0),i}has(e,n){const r=Reflect.has(e,n);return(!cr(n)||!sf.has(n))&&Ze(e,"has",n),r}ownKeys(e){return Ze(e,"iterate",G(e)?"length":Rn),Reflect.ownKeys(e)}}class op extends lf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ap=new cf,sp=new op,lp=new cf(!0),Cs=t=>t,bo=t=>Reflect.getPrototypeOf(t);function vi(t,e,n=!1,r=!1){t=t.__v_raw;const i=ue(t),o=ue(e);n||(hn(e,o)&&Ze(i,"get",e),Ze(i,"get",o));const{has:a}=bo(i),s=r?Cs:n?Os:Lr;if(a.call(i,e))return s(t.get(e));if(a.call(i,o))return s(t.get(o));t!==i&&t.get(e)}function bi(t,e=!1){const n=this.__v_raw,r=ue(n),i=ue(t);return e||(hn(t,i)&&Ze(r,"has",t),Ze(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function yi(t,e=!1){return t=t.__v_raw,!e&&Ze(ue(t),"iterate",Rn),Reflect.get(t,"size",t)}function El(t){t=ue(t);const e=ue(this);return bo(e).has.call(e,t)||(e.add(t),Nt(e,"add",t,t)),this}function Cl(t,e){e=ue(e);const n=ue(this),{has:r,get:i}=bo(n);let o=r.call(n,t);o||(t=ue(t),o=r.call(n,t));const a=i.call(n,t);return n.set(t,e),o?hn(e,a)&&Nt(n,"set",t,e):Nt(n,"add",t,e),this}function Il(t){const e=ue(this),{has:n,get:r}=bo(e);let i=n.call(e,t);i||(t=ue(t),i=n.call(e,t)),r&&r.call(e,t);const o=e.delete(t);return i&&Nt(e,"delete",t,void 0),o}function Tl(){const t=ue(this),e=t.size!==0,n=t.clear();return e&&Nt(t,"clear",void 0,void 0),n}function _i(t,e){return function(r,i){const o=this,a=o.__v_raw,s=ue(a),l=e?Cs:t?Os:Lr;return!t&&Ze(s,"iterate",Rn),a.forEach((c,u)=>r.call(i,l(c),l(u),o))}}function wi(t,e,n){return function(...r){const i=this.__v_raw,o=ue(i),a=Yn(o),s=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,c=i[t](...r),u=n?Cs:e?Os:Lr;return!e&&Ze(o,"iterate",l?Ca:Rn),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:s?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function zt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function cp(){const t={get(o){return vi(this,o)},get size(){return yi(this)},has:bi,add:El,set:Cl,delete:Il,clear:Tl,forEach:_i(!1,!1)},e={get(o){return vi(this,o,!1,!0)},get size(){return yi(this)},has:bi,add:El,set:Cl,delete:Il,clear:Tl,forEach:_i(!1,!0)},n={get(o){return vi(this,o,!0)},get size(){return yi(this,!0)},has(o){return bi.call(this,o,!0)},add:zt("add"),set:zt("set"),delete:zt("delete"),clear:zt("clear"),forEach:_i(!0,!1)},r={get(o){return vi(this,o,!0,!0)},get size(){return yi(this,!0)},has(o){return bi.call(this,o,!0)},add:zt("add"),set:zt("set"),delete:zt("delete"),clear:zt("clear"),forEach:_i(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{t[o]=wi(o,!1,!1),n[o]=wi(o,!0,!1),e[o]=wi(o,!1,!0),r[o]=wi(o,!0,!0)}),[t,n,e,r]}const[up,fp,dp,hp]=cp();function Is(t,e){const n=e?t?hp:dp:t?fp:up;return(r,i,o)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(le(n,i)&&i in r?n:r,i,o)}const pp={get:Is(!1,!1)},mp={get:Is(!1,!0)},gp={get:Is(!0,!1)},uf=new WeakMap,ff=new WeakMap,df=new WeakMap,vp=new WeakMap;function bp(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yp(t){return t.__v_skip||!Object.isExtensible(t)?0:bp(Hh(t))}function it(t){return rr(t)?t:As(t,!1,ap,pp,uf)}function hf(t){return As(t,!1,lp,mp,ff)}function Ts(t){return As(t,!0,sp,gp,df)}function As(t,e,n,r,i){if(!Ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=i.get(t);if(o)return o;const a=yp(t);if(a===0)return t;const s=new Proxy(t,a===2?r:n);return i.set(t,s),s}function Xn(t){return rr(t)?Xn(t.__v_raw):!!(t&&t.__v_isReactive)}function rr(t){return!!(t&&t.__v_isReadonly)}function Gi(t){return!!(t&&t.__v_isShallow)}function pf(t){return Xn(t)||rr(t)}function ue(t){const e=t&&t.__v_raw;return e?ue(e):t}function mf(t){return Ki(t,"__v_skip",!0),t}const Lr=t=>Ee(t)?it(t):t,Os=t=>Ee(t)?Ts(t):t;class gf{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ws(()=>e(this._value),()=>Di(this,1),()=>this.dep&&of(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=ue(this);return(!e._cacheable||e.effect.dirty)&&hn(e._value,e._value=e.effect.run())&&Di(e,2),vf(e),e.effect._dirtyLevel>=1&&Di(e,1),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function _p(t,e,n=!1){let r,i;const o=Q(t);return o?(r=t,i=lt):(r=t.get,i=t.set),new gf(r,i,o||!i,n)}function vf(t){ln&&kn&&(t=ue(t),nf(kn,t.dep||(t.dep=af(()=>t.dep=void 0,t instanceof gf?t:void 0))))}function Di(t,e=2,n){t=ue(t);const r=t.dep;r&&rf(r,e)}function Qe(t){return!!(t&&t.__v_isRef===!0)}function ce(t){return bf(t,!1)}function wp(t){return bf(t,!0)}function bf(t,e){return Qe(t)?t:new Sp(t,e)}class Sp{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ue(e),this._value=n?e:Lr(e)}get value(){return vf(this),this._value}set value(e){const n=this.__v_isShallow||Gi(e)||rr(e);e=n?e:ue(e),hn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Lr(e),Di(this,2))}}function Ae(t){return Qe(t)?t.value:t}const Ep={get:(t,e,n)=>Ae(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Qe(i)&&!Qe(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function yf(t){return Xn(t)?t:new Proxy(t,Ep)}/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function cn(t,e,n,r){let i;try{i=r?t(...r):t()}catch(o){yo(o,e,n)}return i}function ct(t,e,n,r){if(Q(t)){const o=cn(t,e,n,r);return o&&qu(o)&&o.catch(a=>{yo(a,e,n)}),o}const i=[];for(let o=0;o<t.length;o++)i.push(ct(t[o],e,n,r));return i}function yo(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let o=e.parent;const a=e.proxy,s=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const c=o.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,a,s)===!1)return}o=o.parent}const l=e.appContext.config.errorHandler;if(l){cn(l,null,10,[t,a,s]);return}}Cp(t,n,i,r)}function Cp(t,e,n,r=!0){console.error(t)}let $r=!1,Ia=!1;const Ke=[];let St=0;const Jn=[];let Jt=null,Tn=0;const _f=Promise.resolve();let Ps=null;function _o(t){const e=Ps||_f;return t?e.then(this?t.bind(this):t):e}function Ip(t){let e=St+1,n=Ke.length;for(;e<n;){const r=e+n>>>1,i=Ke[r],o=Nr(i);o<t||o===t&&i.pre?e=r+1:n=r}return e}function xs(t){(!Ke.length||!Ke.includes(t,$r&&t.allowRecurse?St+1:St))&&(t.id==null?Ke.push(t):Ke.splice(Ip(t.id),0,t),wf())}function wf(){!$r&&!Ia&&(Ia=!0,Ps=_f.then(Ef))}function Tp(t){const e=Ke.indexOf(t);e>St&&Ke.splice(e,1)}function Ap(t){G(t)?Jn.push(...t):(!Jt||!Jt.includes(t,t.allowRecurse?Tn+1:Tn))&&Jn.push(t),wf()}function Al(t,e,n=$r?St+1:0){for(;n<Ke.length;n++){const r=Ke[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;Ke.splice(n,1),n--,r()}}}function Sf(t){if(Jn.length){const e=[...new Set(Jn)].sort((n,r)=>Nr(n)-Nr(r));if(Jn.length=0,Jt){Jt.push(...e);return}for(Jt=e,Tn=0;Tn<Jt.length;Tn++)Jt[Tn]();Jt=null,Tn=0}}const Nr=t=>t.id==null?1/0:t.id,Op=(t,e)=>{const n=Nr(t)-Nr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ef(t){Ia=!1,$r=!0,Ke.sort(Op);try{for(St=0;St<Ke.length;St++){const e=Ke[St];e&&e.active!==!1&&cn(e,null,14)}}finally{St=0,Ke.length=0,Sf(),$r=!1,Ps=null,(Ke.length||Jn.length)&&Ef()}}function Pp(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||_e;let i=n;const o=e.startsWith("update:"),a=o&&e.slice(7);if(a&&a in r){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:d}=r[u]||_e;d&&(i=n.map(m=>ke(m)?m.trim():m)),f&&(i=n.map(_a))}let s,l=r[s=Uo(e)]||r[s=Uo(Ot(e))];!l&&o&&(l=r[s=Uo(ur(e))]),l&&ct(l,t,6,i);const c=r[s+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[s])return;t.emitted[s]=!0,ct(c,t,6,i)}}function Cf(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const o=t.emits;let a={},s=!1;if(!Q(t)){const l=c=>{const u=Cf(c,e,!0);u&&(s=!0,Fe(a,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!o&&!s?(Ee(t)&&r.set(t,null),null):(G(o)?o.forEach(l=>a[l]=null):Fe(a,o),Ee(t)&&r.set(t,a),a)}function wo(t,e){return!t||!po(e)?!1:(e=e.slice(2).replace(/Once$/,""),le(t,e[0].toLowerCase()+e.slice(1))||le(t,ur(e))||le(t,e))}let De=null,If=null;function qi(t){const e=De;return De=t,If=t&&t.type.__scopeId||null,e}function He(t,e=De,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Vl(-1);const o=qi(e);let a;try{a=t(...i)}finally{qi(o),r._d&&Vl(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Vo(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:o,propsOptions:[a],slots:s,attrs:l,emit:c,render:u,renderCache:f,data:d,setupState:m,ctx:b,inheritAttrs:y}=t;let _,g;const w=qi(t);try{if(n.shapeFlag&4){const L=i||r,F=L;_=wt(u.call(F,L,f,o,m,d,b)),g=l}else{const L=e;_=wt(L.length>1?L(o,{attrs:l,slots:s,emit:c}):L(o,null)),g=e.props?l:xp(l)}}catch(L){Ir.length=0,yo(L,t,1),_=ee(ut)}let T=_;if(g&&y!==!1){const L=Object.keys(g),{shapeFlag:F}=T;L.length&&F&7&&(a&&L.some(vs)&&(g=kp(g,a)),T=Pt(T,g))}return n.dirs&&(T=Pt(T),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&(T.transition=n.transition),_=T,qi(w),_}const xp=t=>{let e;for(const n in t)(n==="class"||n==="style"||po(n))&&((e||(e={}))[n]=t[n]);return e},kp=(t,e)=>{const n={};for(const r in t)(!vs(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Rp(t,e,n){const{props:r,children:i,component:o}=t,{props:a,children:s,patchFlag:l}=e,c=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ol(r,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(a[d]!==r[d]&&!wo(c,d))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===a?!1:r?a?Ol(r,a,c):!0:!!a;return!1}function Ol(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(e[o]!==t[o]&&!wo(n,o))return!0}return!1}function Lp({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const ks="components",$p="directives";function pn(t,e){return Rs(ks,t,!0,e)||t}const Tf=Symbol.for("v-ndc");function Pl(t){return ke(t)?Rs(ks,t,!1)||t:t||Tf}function Ta(t){return Rs($p,t)}function Rs(t,e,n=!0,r=!1){const i=De||ze;if(i){const o=i.type;if(t===ks){const s=xm(o,!1);if(s&&(s===e||s===Ot(e)||s===vo(Ot(e))))return o}const a=xl(i[t]||o[t],e)||xl(i.appContext[t],e);return!a&&r?o:a}}function xl(t,e){return t&&(t[e]||t[Ot(e)]||t[vo(Ot(e))])}const Np=t=>t.__isSuspense;function Mp(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):Ap(t)}const Dp=Symbol.for("v-scx"),Fp=()=>me(Dp),Si={};function Mt(t,e,n){return Af(t,e,n)}function Af(t,e,{immediate:n,deep:r,flush:i,once:o,onTrack:a,onTrigger:s}=_e){if(e&&o){const k=e;e=(...z)=>{k(...z),F()}}const l=ze,c=k=>r===!0?k:On(k,r===!1?1:void 0);let u,f=!1,d=!1;if(Qe(t)?(u=()=>t.value,f=Gi(t)):Xn(t)?(u=()=>c(t),f=!0):G(t)?(d=!0,f=t.some(k=>Xn(k)||Gi(k)),u=()=>t.map(k=>{if(Qe(k))return k.value;if(Xn(k))return c(k);if(Q(k))return cn(k,l,2)})):Q(t)?e?u=()=>cn(t,l,2):u=()=>(m&&m(),ct(t,l,3,[b])):u=lt,e&&r){const k=u;u=()=>On(k())}let m,b=k=>{m=T.onStop=()=>{cn(k,l,4),m=T.onStop=void 0}},y;if(Ao)if(b=lt,e?n&&ct(e,l,3,[u(),d?[]:void 0,b]):u(),i==="sync"){const k=Fp();y=k.__watcherHandles||(k.__watcherHandles=[])}else return lt;let _=d?new Array(t.length).fill(Si):Si;const g=()=>{if(!(!T.active||!T.dirty))if(e){const k=T.run();(r||f||(d?k.some((z,j)=>hn(z,_[j])):hn(k,_)))&&(m&&m(),ct(e,l,3,[k,_===Si?void 0:d&&_[0]===Si?[]:_,b]),_=k)}else T.run()};g.allowRecurse=!!e;let w;i==="sync"?w=g:i==="post"?w=()=>Je(g,l&&l.suspense):(g.pre=!0,l&&(g.id=l.uid),w=()=>xs(g));const T=new ws(u,lt,w),L=ep(),F=()=>{T.stop(),L&&bs(L.effects,T)};return e?n?g():_=T.run():i==="post"?Je(T.run.bind(T),l&&l.suspense):T.run(),y&&y.push(F),F}function jp(t,e,n){const r=this.proxy,i=ke(t)?t.includes(".")?Of(r,t):()=>r[t]:t.bind(r,r);let o;Q(e)?o=e:(o=e.handler,n=e);const a=oi(this),s=Af(i,o.bind(r),n);return a(),s}function Of(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function On(t,e,n=0,r){if(!Ee(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),Qe(t))On(t.value,e,n,r);else if(G(t))for(let i=0;i<t.length;i++)On(t[i],e,n,r);else if(Gu(t)||Yn(t))t.forEach(i=>{On(i,e,n,r)});else if(Xu(t))for(const i in t)On(t[i],e,n,r);return t}function Zn(t,e){if(De===null)return t;const n=Oo(De)||De.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,s,l=_e]=e[i];o&&(Q(o)&&(o={mounted:o,updated:o}),o.deep&&On(a),r.push({dir:o,instance:n,value:a,oldValue:void 0,arg:s,modifiers:l}))}return t}function wn(t,e,n,r){const i=t.dirs,o=e&&e.dirs;for(let a=0;a<i.length;a++){const s=i[a];o&&(s.oldValue=o[a].value);let l=s.dir[r];l&&(Fn(),ct(l,n,8,[t.el,s,t,e]),jn())}}const Zt=Symbol("_leaveCb"),Ei=Symbol("_enterCb");function Bp(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Co(()=>{t.isMounted=!0}),Lf(()=>{t.isUnmounting=!0}),t}const st=[Function,Array],Pf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:st,onEnter:st,onAfterEnter:st,onEnterCancelled:st,onBeforeLeave:st,onLeave:st,onAfterLeave:st,onLeaveCancelled:st,onBeforeAppear:st,onAppear:st,onAfterAppear:st,onAppearCancelled:st},Up={name:"BaseTransition",props:Pf,setup(t,{slots:e}){const n=Kf(),r=Bp();let i;return()=>{const o=e.default&&kf(e.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){for(const y of o)if(y.type!==ut){a=y;break}}const s=ue(t),{mode:l}=s;if(r.isLeaving)return zo(a);const c=kl(a);if(!c)return zo(a);const u=Aa(c,s,r,n);Oa(c,u);const f=n.subTree,d=f&&kl(f);let m=!1;const{getTransitionKey:b}=c.type;if(b){const y=b();i===void 0?i=y:y!==i&&(i=y,m=!0)}if(d&&d.type!==ut&&(!An(c,d)||m)){const y=Aa(d,s,r,n);if(Oa(d,y),l==="out-in")return r.isLeaving=!0,y.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},zo(a);l==="in-out"&&c.type!==ut&&(y.delayLeave=(_,g,w)=>{const T=xf(r,d);T[String(d.key)]=d,_[Zt]=()=>{g(),_[Zt]=void 0,delete u.delayedLeave},u.delayedLeave=w})}return a}}},Hp=Up;function xf(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Aa(t,e,n,r){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:s,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:d,onAfterLeave:m,onLeaveCancelled:b,onBeforeAppear:y,onAppear:_,onAfterAppear:g,onAppearCancelled:w}=e,T=String(t.key),L=xf(n,t),F=(j,U)=>{j&&ct(j,r,9,U)},k=(j,U)=>{const Z=U[1];F(j,U),G(j)?j.every(fe=>fe.length<=1)&&Z():j.length<=1&&Z()},z={mode:o,persisted:a,beforeEnter(j){let U=s;if(!n.isMounted)if(i)U=y||s;else return;j[Zt]&&j[Zt](!0);const Z=L[T];Z&&An(t,Z)&&Z.el[Zt]&&Z.el[Zt](),F(U,[j])},enter(j){let U=l,Z=c,fe=u;if(!n.isMounted)if(i)U=_||l,Z=g||c,fe=w||u;else return;let $=!1;const ne=j[Ei]=Oe=>{$||($=!0,Oe?F(fe,[j]):F(Z,[j]),z.delayedLeave&&z.delayedLeave(),j[Ei]=void 0)};U?k(U,[j,ne]):ne()},leave(j,U){const Z=String(t.key);if(j[Ei]&&j[Ei](!0),n.isUnmounting)return U();F(f,[j]);let fe=!1;const $=j[Zt]=ne=>{fe||(fe=!0,U(),ne?F(b,[j]):F(m,[j]),j[Zt]=void 0,L[Z]===t&&delete L[Z])};L[Z]=t,d?k(d,[j,$]):$()},clone(j){return Aa(j,e,n,r)}};return z}function zo(t){if(So(t))return t=Pt(t),t.children=null,t}function kl(t){return So(t)?t.children?t.children[0]:void 0:t}function Oa(t,e){t.shapeFlag&6&&t.component?Oa(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function kf(t,e=!1,n){let r=[],i=0;for(let o=0;o<t.length;o++){let a=t[o];const s=n==null?a.key:String(n)+String(a.key!=null?a.key:o);a.type===Ue?(a.patchFlag&128&&i++,r=r.concat(kf(a.children,e,s))):(e||a.type!==ut)&&r.push(s!=null?Pt(a,{key:s}):a)}if(i>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function fr(t,e){return Q(t)?Fe({name:t.name},e,{setup:t}):t}const Sr=t=>!!t.type.__asyncLoader,So=t=>t.type.__isKeepAlive;function Vp(t,e){Rf(t,"a",e)}function zp(t,e){Rf(t,"da",e)}function Rf(t,e,n=ze){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Eo(e,r,n),n){let i=n.parent;for(;i&&i.parent;)So(i.parent.vnode)&&Wp(r,e,n,i),i=i.parent}}function Wp(t,e,n,r){const i=Eo(e,t,r,!0);Ls(()=>{bs(r[e],i)},n)}function Eo(t,e,n=ze,r=!1){if(n){const i=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...a)=>{if(n.isUnmounted)return;Fn();const s=oi(n),l=ct(e,n,t,a);return s(),jn(),l});return r?i.unshift(o):i.push(o),o}}const Ut=t=>(e,n=ze)=>(!Ao||t==="sp")&&Eo(t,(...r)=>e(...r),n),Kp=Ut("bm"),Co=Ut("m"),Gp=Ut("bu"),qp=Ut("u"),Lf=Ut("bum"),Ls=Ut("um"),Yp=Ut("sp"),Xp=Ut("rtg"),Jp=Ut("rtc");function Zp(t,e=ze){Eo("ec",t,e)}function Rl(t,e,n,r){let i;const o=n&&n[r];if(G(t)||ke(t)){i=new Array(t.length);for(let a=0,s=t.length;a<s;a++)i[a]=e(t[a],a,void 0,o&&o[a])}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,o&&o[a])}else if(Ee(t))if(t[Symbol.iterator])i=Array.from(t,(a,s)=>e(a,s,void 0,o&&o[s]));else{const a=Object.keys(t);i=new Array(a.length);for(let s=0,l=a.length;s<l;s++){const c=a[s];i[s]=e(t[c],c,s,o&&o[s])}}else i=[];return n&&(n[r]=i),i}function Ve(t,e,n={},r,i){if(De.isCE||De.parent&&Sr(De.parent)&&De.parent.isCE)return e!=="default"&&(n.name=e),ee("slot",n,r&&r());let o=t[e];o&&o._c&&(o._d=!1),J();const a=o&&$f(o(n)),s=It(Ue,{key:n.key||a&&a.key||`_${e}`},a||(r?r():[]),a&&t._===1?64:-2);return!i&&s.scopeId&&(s.slotScopeIds=[s.scopeId+"-s"]),o&&o._c&&(o._d=!0),s}function $f(t){return t.some(e=>Ji(e)?!(e.type===ut||e.type===Ue&&!$f(e.children)):!0)?t:null}const Pa=t=>t?Gf(t)?Oo(t)||t.proxy:Pa(t.parent):null,Er=Fe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Pa(t.parent),$root:t=>Pa(t.root),$emit:t=>t.emit,$options:t=>$s(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,xs(t.update)}),$nextTick:t=>t.n||(t.n=_o.bind(t.proxy)),$watch:t=>jp.bind(t)}),Wo=(t,e)=>t!==_e&&!t.__isScriptSetup&&le(t,e),Qp={get({_:t},e){const{ctx:n,setupState:r,data:i,props:o,accessCache:a,type:s,appContext:l}=t;let c;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return o[e]}else{if(Wo(r,e))return a[e]=1,r[e];if(i!==_e&&le(i,e))return a[e]=2,i[e];if((c=t.propsOptions[0])&&le(c,e))return a[e]=3,o[e];if(n!==_e&&le(n,e))return a[e]=4,n[e];xa&&(a[e]=0)}}const u=Er[e];let f,d;if(u)return e==="$attrs"&&Ze(t,"get",e),u(t);if((f=s.__cssModules)&&(f=f[e]))return f;if(n!==_e&&le(n,e))return a[e]=4,n[e];if(d=l.config.globalProperties,le(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:o}=t;return Wo(i,e)?(i[e]=n,!0):r!==_e&&le(r,e)?(r[e]=n,!0):le(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:o}},a){let s;return!!n[a]||t!==_e&&le(t,a)||Wo(e,a)||(s=o[0])&&le(s,a)||le(r,a)||le(Er,a)||le(i.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:le(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ll(t){return G(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let xa=!0;function em(t){const e=$s(t),n=t.proxy,r=t.ctx;xa=!1,e.beforeCreate&&$l(e.beforeCreate,t,"bc");const{data:i,computed:o,methods:a,watch:s,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:b,activated:y,deactivated:_,beforeDestroy:g,beforeUnmount:w,destroyed:T,unmounted:L,render:F,renderTracked:k,renderTriggered:z,errorCaptured:j,serverPrefetch:U,expose:Z,inheritAttrs:fe,components:$,directives:ne,filters:Oe}=e;if(c&&tm(c,r,null),a)for(const de in a){const se=a[de];Q(se)&&(r[de]=se.bind(n))}if(i){const de=i.call(n,n);Ee(de)&&(t.data=it(de))}if(xa=!0,o)for(const de in o){const se=o[de],at=Q(se)?se.bind(n,n):Q(se.get)?se.get.bind(n,n):lt,ft=!Q(se)&&Q(se.set)?se.set.bind(n):lt,tt=Re({get:at,set:ft});Object.defineProperty(r,de,{enumerable:!0,configurable:!0,get:()=>tt.value,set:Pe=>tt.value=Pe})}if(s)for(const de in s)Nf(s[de],r,n,de);if(l){const de=Q(l)?l.call(n):l;Reflect.ownKeys(de).forEach(se=>{rt(se,de[se])})}u&&$l(u,t,"c");function ye(de,se){G(se)?se.forEach(at=>de(at.bind(n))):se&&de(se.bind(n))}if(ye(Kp,f),ye(Co,d),ye(Gp,m),ye(qp,b),ye(Vp,y),ye(zp,_),ye(Zp,j),ye(Jp,k),ye(Xp,z),ye(Lf,w),ye(Ls,L),ye(Yp,U),G(Z))if(Z.length){const de=t.exposed||(t.exposed={});Z.forEach(se=>{Object.defineProperty(de,se,{get:()=>n[se],set:at=>n[se]=at})})}else t.exposed||(t.exposed={});F&&t.render===lt&&(t.render=F),fe!=null&&(t.inheritAttrs=fe),$&&(t.components=$),ne&&(t.directives=ne)}function tm(t,e,n=lt){G(t)&&(t=ka(t));for(const r in t){const i=t[r];let o;Ee(i)?"default"in i?o=me(i.from||r,i.default,!0):o=me(i.from||r):o=me(i),Qe(o)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function $l(t,e,n){ct(G(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Nf(t,e,n,r){const i=r.includes(".")?Of(n,r):()=>n[r];if(ke(t)){const o=e[t];Q(o)&&Mt(i,o)}else if(Q(t))Mt(i,t.bind(n));else if(Ee(t))if(G(t))t.forEach(o=>Nf(o,e,n,r));else{const o=Q(t.handler)?t.handler.bind(n):e[t.handler];Q(o)&&Mt(i,o,t)}}function $s(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,s=o.get(e);let l;return s?l=s:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(c=>Yi(l,c,a,!0)),Yi(l,e,a)),Ee(e)&&o.set(e,l),l}function Yi(t,e,n,r=!1){const{mixins:i,extends:o}=e;o&&Yi(t,o,n,!0),i&&i.forEach(a=>Yi(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const s=nm[a]||n&&n[a];t[a]=s?s(t[a],e[a]):e[a]}return t}const nm={data:Nl,props:Ml,emits:Ml,methods:br,computed:br,beforeCreate:qe,created:qe,beforeMount:qe,mounted:qe,beforeUpdate:qe,updated:qe,beforeDestroy:qe,beforeUnmount:qe,destroyed:qe,unmounted:qe,activated:qe,deactivated:qe,errorCaptured:qe,serverPrefetch:qe,components:br,directives:br,watch:im,provide:Nl,inject:rm};function Nl(t,e){return e?t?function(){return Fe(Q(t)?t.call(this,this):t,Q(e)?e.call(this,this):e)}:e:t}function rm(t,e){return br(ka(t),ka(e))}function ka(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function qe(t,e){return t?[...new Set([].concat(t,e))]:e}function br(t,e){return t?Fe(Object.create(null),t,e):e}function Ml(t,e){return t?G(t)&&G(e)?[...new Set([...t,...e])]:Fe(Object.create(null),Ll(t),Ll(e??{})):e}function im(t,e){if(!t)return e;if(!e)return t;const n=Fe(Object.create(null),t);for(const r in e)n[r]=qe(t[r],e[r]);return n}function Mf(){return{app:null,config:{isNativeTag:Bh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let om=0;function am(t,e){return function(r,i=null){Q(r)||(r=Fe({},r)),i!=null&&!Ee(i)&&(i=null);const o=Mf(),a=new WeakSet;let s=!1;const l=o.app={_uid:om++,_component:r,_props:i,_container:null,_context:o,_instance:null,version:Rm,get config(){return o.config},set config(c){},use(c,...u){return a.has(c)||(c&&Q(c.install)?(a.add(c),c.install(l,...u)):Q(c)&&(a.add(c),c(l,...u))),l},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),l},component(c,u){return u?(o.components[c]=u,l):o.components[c]},directive(c,u){return u?(o.directives[c]=u,l):o.directives[c]},mount(c,u,f){if(!s){const d=ee(r,i);return d.appContext=o,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(d,c):t(d,c,f),s=!0,l._container=c,c.__vue_app__=l,Oo(d.component)||d.component.proxy}},unmount(){s&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return o.provides[c]=u,l},runWithContext(c){Xi=l;try{return c()}finally{Xi=null}}};return l}}let Xi=null;function rt(t,e){if(ze){let n=ze.provides;const r=ze.parent&&ze.parent.provides;r===n&&(n=ze.provides=Object.create(r)),n[t]=e}}function me(t,e,n=!1){const r=ze||De;if(r||Xi){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Xi._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Q(e)?e.call(r&&r.proxy):e}}function sm(t,e,n,r=!1){const i={},o={};Ki(o,To,1),t.propsDefaults=Object.create(null),Df(t,e,i,o);for(const a in t.propsOptions[0])a in i||(i[a]=void 0);n?t.props=r?i:hf(i):t.type.props?t.props=i:t.props=o,t.attrs=o}function lm(t,e,n,r){const{props:i,attrs:o,vnode:{patchFlag:a}}=t,s=ue(i),[l]=t.propsOptions;let c=!1;if((r||a>0)&&!(a&16)){if(a&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(wo(t.emitsOptions,d))continue;const m=e[d];if(l)if(le(o,d))m!==o[d]&&(o[d]=m,c=!0);else{const b=Ot(d);i[b]=Ra(l,s,b,m,t,!1)}else m!==o[d]&&(o[d]=m,c=!0)}}}else{Df(t,e,i,o)&&(c=!0);let u;for(const f in s)(!e||!le(e,f)&&((u=ur(f))===f||!le(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=Ra(l,s,f,void 0,t,!0)):delete i[f]);if(o!==s)for(const f in o)(!e||!le(e,f))&&(delete o[f],c=!0)}c&&Nt(t,"set","$attrs")}function Df(t,e,n,r){const[i,o]=t.propsOptions;let a=!1,s;if(e)for(let l in e){if(Ni(l))continue;const c=e[l];let u;i&&le(i,u=Ot(l))?!o||!o.includes(u)?n[u]=c:(s||(s={}))[u]=c:wo(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,a=!0)}if(o){const l=ue(n),c=s||_e;for(let u=0;u<o.length;u++){const f=o[u];n[f]=Ra(i,l,f,c[f],t,!le(c,f))}}return a}function Ra(t,e,n,r,i,o){const a=t[n];if(a!=null){const s=le(a,"default");if(s&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Q(l)){const{propsDefaults:c}=i;if(n in c)r=c[n];else{const u=oi(i);r=c[n]=l.call(null,e),u()}}else r=l}a[0]&&(o&&!s?r=!1:a[1]&&(r===""||r===ur(n))&&(r=!0))}return r}function Ff(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const o=t.props,a={},s=[];let l=!1;if(!Q(t)){const u=f=>{l=!0;const[d,m]=Ff(f,e,!0);Fe(a,d),m&&s.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!o&&!l)return Ee(t)&&r.set(t,qn),qn;if(G(o))for(let u=0;u<o.length;u++){const f=Ot(o[u]);Dl(f)&&(a[f]=_e)}else if(o)for(const u in o){const f=Ot(u);if(Dl(f)){const d=o[u],m=a[f]=G(d)||Q(d)?{type:d}:Fe({},d);if(m){const b=Bl(Boolean,m.type),y=Bl(String,m.type);m[0]=b>-1,m[1]=y<0||b<y,(b>-1||le(m,"default"))&&s.push(f)}}}const c=[a,s];return Ee(t)&&r.set(t,c),c}function Dl(t){return t[0]!=="$"}function Fl(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function jl(t,e){return Fl(t)===Fl(e)}function Bl(t,e){return G(e)?e.findIndex(n=>jl(n,t)):Q(e)&&jl(e,t)?0:-1}const jf=t=>t[0]==="_"||t==="$stable",Ns=t=>G(t)?t.map(wt):[wt(t)],cm=(t,e,n)=>{if(e._n)return e;const r=He((...i)=>Ns(e(...i)),n);return r._c=!1,r},Bf=(t,e,n)=>{const r=t._ctx;for(const i in t){if(jf(i))continue;const o=t[i];if(Q(o))e[i]=cm(i,o,r);else if(o!=null){const a=Ns(o);e[i]=()=>a}}},Uf=(t,e)=>{const n=Ns(e);t.slots.default=()=>n},um=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ue(e),Ki(e,"_",n)):Bf(e,t.slots={})}else t.slots={},e&&Uf(t,e);Ki(t.slots,To,1)},fm=(t,e,n)=>{const{vnode:r,slots:i}=t;let o=!0,a=_e;if(r.shapeFlag&32){const s=e._;s?n&&s===1?o=!1:(Fe(i,e),!n&&s===1&&delete i._):(o=!e.$stable,Bf(e,i)),a=e}else e&&(Uf(t,e),a={default:1});if(o)for(const s in i)!jf(s)&&a[s]==null&&delete i[s]};function La(t,e,n,r,i=!1){if(G(t)){t.forEach((d,m)=>La(d,e&&(G(e)?e[m]:e),n,r,i));return}if(Sr(r)&&!i)return;const o=r.shapeFlag&4?Oo(r.component)||r.component.proxy:r.el,a=i?null:o,{i:s,r:l}=t,c=e&&e.r,u=s.refs===_e?s.refs={}:s.refs,f=s.setupState;if(c!=null&&c!==l&&(ke(c)?(u[c]=null,le(f,c)&&(f[c]=null)):Qe(c)&&(c.value=null)),Q(l))cn(l,s,12,[a,u]);else{const d=ke(l),m=Qe(l),b=t.f;if(d||m){const y=()=>{if(b){const _=d?le(f,l)?f[l]:u[l]:l.value;i?G(_)&&bs(_,o):G(_)?_.includes(o)||_.push(o):d?(u[l]=[o],le(f,l)&&(f[l]=u[l])):(l.value=[o],t.k&&(u[t.k]=l.value))}else d?(u[l]=a,le(f,l)&&(f[l]=a)):m&&(l.value=a,t.k&&(u[t.k]=a))};i||b?y():(y.id=-1,Je(y,n))}}}const Je=Mp;function dm(t){return hm(t)}function hm(t,e){const n=Ju();n.__VUE__=!0;const{insert:r,remove:i,patchProp:o,createElement:a,createText:s,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=lt,insertStaticContent:b}=t,y=(p,h,v,S=null,E=null,O=null,x=void 0,A=null,P=!!h.dynamicChildren)=>{if(p===h)return;p&&!An(p,h)&&(S=C(p),Pe(p,E,O,!0),p=null),h.patchFlag===-2&&(P=!1,h.dynamicChildren=null);const{type:I,ref:D,shapeFlag:K}=h;switch(I){case Io:_(p,h,v,S);break;case ut:g(p,h,v,S);break;case Fi:p==null&&w(h,v,S,x);break;case Ue:$(p,h,v,S,E,O,x,A,P);break;default:K&1?F(p,h,v,S,E,O,x,A,P):K&6?ne(p,h,v,S,E,O,x,A,P):(K&64||K&128)&&I.process(p,h,v,S,E,O,x,A,P,B)}D!=null&&E&&La(D,p&&p.ref,O,h||p,!h)},_=(p,h,v,S)=>{if(p==null)r(h.el=s(h.children),v,S);else{const E=h.el=p.el;h.children!==p.children&&c(E,h.children)}},g=(p,h,v,S)=>{p==null?r(h.el=l(h.children||""),v,S):h.el=p.el},w=(p,h,v,S)=>{[p.el,p.anchor]=b(p.children,h,v,S,p.el,p.anchor)},T=({el:p,anchor:h},v,S)=>{let E;for(;p&&p!==h;)E=d(p),r(p,v,S),p=E;r(h,v,S)},L=({el:p,anchor:h})=>{let v;for(;p&&p!==h;)v=d(p),i(p),p=v;i(h)},F=(p,h,v,S,E,O,x,A,P)=>{h.type==="svg"?x="svg":h.type==="math"&&(x="mathml"),p==null?k(h,v,S,E,O,x,A,P):U(p,h,E,O,x,A,P)},k=(p,h,v,S,E,O,x,A)=>{let P,I;const{props:D,shapeFlag:K,transition:W,dirs:Y}=p;if(P=p.el=a(p.type,O,D&&D.is,D),K&8?u(P,p.children):K&16&&j(p.children,P,null,S,E,Ko(p,O),x,A),Y&&wn(p,null,S,"created"),z(P,p,p.scopeId,x,S),D){for(const ve in D)ve!=="value"&&!Ni(ve)&&o(P,ve,null,D[ve],O,p.children,S,E,Me);"value"in D&&o(P,"value",null,D.value,O),(I=D.onVnodeBeforeMount)&&_t(I,S,p)}Y&&wn(p,null,S,"beforeMount");const re=pm(E,W);re&&W.beforeEnter(P),r(P,h,v),((I=D&&D.onVnodeMounted)||re||Y)&&Je(()=>{I&&_t(I,S,p),re&&W.enter(P),Y&&wn(p,null,S,"mounted")},E)},z=(p,h,v,S,E)=>{if(v&&m(p,v),S)for(let O=0;O<S.length;O++)m(p,S[O]);if(E){let O=E.subTree;if(h===O){const x=E.vnode;z(p,x,x.scopeId,x.slotScopeIds,E.parent)}}},j=(p,h,v,S,E,O,x,A,P=0)=>{for(let I=P;I<p.length;I++){const D=p[I]=A?Qt(p[I]):wt(p[I]);y(null,D,h,v,S,E,O,x,A)}},U=(p,h,v,S,E,O,x)=>{const A=h.el=p.el;let{patchFlag:P,dynamicChildren:I,dirs:D}=h;P|=p.patchFlag&16;const K=p.props||_e,W=h.props||_e;let Y;if(v&&Sn(v,!1),(Y=W.onVnodeBeforeUpdate)&&_t(Y,v,h,p),D&&wn(h,p,v,"beforeUpdate"),v&&Sn(v,!0),I?Z(p.dynamicChildren,I,A,v,S,Ko(h,E),O):x||se(p,h,A,null,v,S,Ko(h,E),O,!1),P>0){if(P&16)fe(A,h,K,W,v,S,E);else if(P&2&&K.class!==W.class&&o(A,"class",null,W.class,E),P&4&&o(A,"style",K.style,W.style,E),P&8){const re=h.dynamicProps;for(let ve=0;ve<re.length;ve++){const Ce=re[ve],Be=K[Ce],ht=W[Ce];(ht!==Be||Ce==="value")&&o(A,Ce,Be,ht,E,p.children,v,S,Me)}}P&1&&p.children!==h.children&&u(A,h.children)}else!x&&I==null&&fe(A,h,K,W,v,S,E);((Y=W.onVnodeUpdated)||D)&&Je(()=>{Y&&_t(Y,v,h,p),D&&wn(h,p,v,"updated")},S)},Z=(p,h,v,S,E,O,x)=>{for(let A=0;A<h.length;A++){const P=p[A],I=h[A],D=P.el&&(P.type===Ue||!An(P,I)||P.shapeFlag&70)?f(P.el):v;y(P,I,D,null,S,E,O,x,!0)}},fe=(p,h,v,S,E,O,x)=>{if(v!==S){if(v!==_e)for(const A in v)!Ni(A)&&!(A in S)&&o(p,A,v[A],null,x,h.children,E,O,Me);for(const A in S){if(Ni(A))continue;const P=S[A],I=v[A];P!==I&&A!=="value"&&o(p,A,I,P,x,h.children,E,O,Me)}"value"in S&&o(p,"value",v.value,S.value,x)}},$=(p,h,v,S,E,O,x,A,P)=>{const I=h.el=p?p.el:s(""),D=h.anchor=p?p.anchor:s("");let{patchFlag:K,dynamicChildren:W,slotScopeIds:Y}=h;Y&&(A=A?A.concat(Y):Y),p==null?(r(I,v,S),r(D,v,S),j(h.children||[],v,D,E,O,x,A,P)):K>0&&K&64&&W&&p.dynamicChildren?(Z(p.dynamicChildren,W,v,E,O,x,A),(h.key!=null||E&&h===E.subTree)&&Ms(p,h,!0)):se(p,h,v,D,E,O,x,A,P)},ne=(p,h,v,S,E,O,x,A,P)=>{h.slotScopeIds=A,p==null?h.shapeFlag&512?E.ctx.activate(h,v,S,x,P):Oe(h,v,S,E,O,x,P):et(p,h,P)},Oe=(p,h,v,S,E,O,x)=>{const A=p.component=Im(p,S,E);if(So(p)&&(A.ctx.renderer=B),Tm(A),A.asyncDep){if(E&&E.registerDep(A,ye),!p.el){const P=A.subTree=ee(ut);g(null,P,h,v)}}else ye(A,p,h,v,E,O,x)},et=(p,h,v)=>{const S=h.component=p.component;if(Rp(p,h,v))if(S.asyncDep&&!S.asyncResolved){de(S,h,v);return}else S.next=h,Tp(S.update),S.effect.dirty=!0,S.update();else h.el=p.el,S.vnode=h},ye=(p,h,v,S,E,O,x)=>{const A=()=>{if(p.isMounted){let{next:D,bu:K,u:W,parent:Y,vnode:re}=p;{const Un=Hf(p);if(Un){D&&(D.el=re.el,de(p,D,x)),Un.asyncDep.then(()=>{p.isUnmounted||A()});return}}let ve=D,Ce;Sn(p,!1),D?(D.el=re.el,de(p,D,x)):D=re,K&&Mi(K),(Ce=D.props&&D.props.onVnodeBeforeUpdate)&&_t(Ce,Y,D,re),Sn(p,!0);const Be=Vo(p),ht=p.subTree;p.subTree=Be,y(ht,Be,f(ht.el),C(ht),p,E,O),D.el=Be.el,ve===null&&Lp(p,Be.el),W&&Je(W,E),(Ce=D.props&&D.props.onVnodeUpdated)&&Je(()=>_t(Ce,Y,D,re),E)}else{let D;const{el:K,props:W}=h,{bm:Y,m:re,parent:ve}=p,Ce=Sr(h);if(Sn(p,!1),Y&&Mi(Y),!Ce&&(D=W&&W.onVnodeBeforeMount)&&_t(D,ve,h),Sn(p,!0),K&&ge){const Be=()=>{p.subTree=Vo(p),ge(K,p.subTree,p,E,null)};Ce?h.type.__asyncLoader().then(()=>!p.isUnmounted&&Be()):Be()}else{const Be=p.subTree=Vo(p);y(null,Be,v,S,p,E,O),h.el=Be.el}if(re&&Je(re,E),!Ce&&(D=W&&W.onVnodeMounted)){const Be=h;Je(()=>_t(D,ve,Be),E)}(h.shapeFlag&256||ve&&Sr(ve.vnode)&&ve.vnode.shapeFlag&256)&&p.a&&Je(p.a,E),p.isMounted=!0,h=v=S=null}},P=p.effect=new ws(A,lt,()=>xs(I),p.scope),I=p.update=()=>{P.dirty&&P.run()};I.id=p.uid,Sn(p,!0),I()},de=(p,h,v)=>{h.component=p;const S=p.vnode.props;p.vnode=h,p.next=null,lm(p,h.props,S,v),fm(p,h.children,v),Fn(),Al(p),jn()},se=(p,h,v,S,E,O,x,A,P=!1)=>{const I=p&&p.children,D=p?p.shapeFlag:0,K=h.children,{patchFlag:W,shapeFlag:Y}=h;if(W>0){if(W&128){ft(I,K,v,S,E,O,x,A,P);return}else if(W&256){at(I,K,v,S,E,O,x,A,P);return}}Y&8?(D&16&&Me(I,E,O),K!==I&&u(v,K)):D&16?Y&16?ft(I,K,v,S,E,O,x,A,P):Me(I,E,O,!0):(D&8&&u(v,""),Y&16&&j(K,v,S,E,O,x,A,P))},at=(p,h,v,S,E,O,x,A,P)=>{p=p||qn,h=h||qn;const I=p.length,D=h.length,K=Math.min(I,D);let W;for(W=0;W<K;W++){const Y=h[W]=P?Qt(h[W]):wt(h[W]);y(p[W],Y,v,null,E,O,x,A,P)}I>D?Me(p,E,O,!0,!1,K):j(h,v,S,E,O,x,A,P,K)},ft=(p,h,v,S,E,O,x,A,P)=>{let I=0;const D=h.length;let K=p.length-1,W=D-1;for(;I<=K&&I<=W;){const Y=p[I],re=h[I]=P?Qt(h[I]):wt(h[I]);if(An(Y,re))y(Y,re,v,null,E,O,x,A,P);else break;I++}for(;I<=K&&I<=W;){const Y=p[K],re=h[W]=P?Qt(h[W]):wt(h[W]);if(An(Y,re))y(Y,re,v,null,E,O,x,A,P);else break;K--,W--}if(I>K){if(I<=W){const Y=W+1,re=Y<D?h[Y].el:S;for(;I<=W;)y(null,h[I]=P?Qt(h[I]):wt(h[I]),v,re,E,O,x,A,P),I++}}else if(I>W)for(;I<=K;)Pe(p[I],E,O,!0),I++;else{const Y=I,re=I,ve=new Map;for(I=re;I<=W;I++){const nt=h[I]=P?Qt(h[I]):wt(h[I]);nt.key!=null&&ve.set(nt.key,I)}let Ce,Be=0;const ht=W-re+1;let Un=!1,gl=0;const mr=new Array(ht);for(I=0;I<ht;I++)mr[I]=0;for(I=Y;I<=K;I++){const nt=p[I];if(Be>=ht){Pe(nt,E,O,!0);continue}let yt;if(nt.key!=null)yt=ve.get(nt.key);else for(Ce=re;Ce<=W;Ce++)if(mr[Ce-re]===0&&An(nt,h[Ce])){yt=Ce;break}yt===void 0?Pe(nt,E,O,!0):(mr[yt-re]=I+1,yt>=gl?gl=yt:Un=!0,y(nt,h[yt],v,null,E,O,x,A,P),Be++)}const vl=Un?mm(mr):qn;for(Ce=vl.length-1,I=ht-1;I>=0;I--){const nt=re+I,yt=h[nt],bl=nt+1<D?h[nt+1].el:S;mr[I]===0?y(null,yt,v,bl,E,O,x,A,P):Un&&(Ce<0||I!==vl[Ce]?tt(yt,v,bl,2):Ce--)}}},tt=(p,h,v,S,E=null)=>{const{el:O,type:x,transition:A,children:P,shapeFlag:I}=p;if(I&6){tt(p.component.subTree,h,v,S);return}if(I&128){p.suspense.move(h,v,S);return}if(I&64){x.move(p,h,v,B);return}if(x===Ue){r(O,h,v);for(let K=0;K<P.length;K++)tt(P[K],h,v,S);r(p.anchor,h,v);return}if(x===Fi){T(p,h,v);return}if(S!==2&&I&1&&A)if(S===0)A.beforeEnter(O),r(O,h,v),Je(()=>A.enter(O),E);else{const{leave:K,delayLeave:W,afterLeave:Y}=A,re=()=>r(O,h,v),ve=()=>{K(O,()=>{re(),Y&&Y()})};W?W(O,re,ve):ve()}else r(O,h,v)},Pe=(p,h,v,S=!1,E=!1)=>{const{type:O,props:x,ref:A,children:P,dynamicChildren:I,shapeFlag:D,patchFlag:K,dirs:W}=p;if(A!=null&&La(A,null,v,p,!0),D&256){h.ctx.deactivate(p);return}const Y=D&1&&W,re=!Sr(p);let ve;if(re&&(ve=x&&x.onVnodeBeforeUnmount)&&_t(ve,h,p),D&6)Vt(p.component,v,S);else{if(D&128){p.suspense.unmount(v,S);return}Y&&wn(p,null,h,"beforeUnmount"),D&64?p.type.remove(p,h,v,E,B,S):I&&(O!==Ue||K>0&&K&64)?Me(I,h,v,!1,!0):(O===Ue&&K&384||!E&&D&16)&&Me(P,h,v),S&&Ye(p)}(re&&(ve=x&&x.onVnodeUnmounted)||Y)&&Je(()=>{ve&&_t(ve,h,p),Y&&wn(p,null,h,"unmounted")},v)},Ye=p=>{const{type:h,el:v,anchor:S,transition:E}=p;if(h===Ue){dt(v,S);return}if(h===Fi){L(p);return}const O=()=>{i(v),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(p.shapeFlag&1&&E&&!E.persisted){const{leave:x,delayLeave:A}=E,P=()=>x(v,O);A?A(p.el,O,P):P()}else O()},dt=(p,h)=>{let v;for(;p!==h;)v=d(p),i(p),p=v;i(h)},Vt=(p,h,v)=>{const{bum:S,scope:E,update:O,subTree:x,um:A}=p;S&&Mi(S),E.stop(),O&&(O.active=!1,Pe(x,p,h,v)),A&&Je(A,h),Je(()=>{p.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Me=(p,h,v,S=!1,E=!1,O=0)=>{for(let x=O;x<p.length;x++)Pe(p[x],h,v,S,E)},C=p=>p.shapeFlag&6?C(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el);let N=!1;const R=(p,h,v)=>{p==null?h._vnode&&Pe(h._vnode,null,null,!0):y(h._vnode||null,p,h,null,null,null,v),N||(N=!0,Al(),Sf(),N=!1),h._vnode=p},B={p:y,um:Pe,m:tt,r:Ye,mt:Oe,mc:j,pc:se,pbc:Z,n:C,o:t};let oe,ge;return e&&([oe,ge]=e(B)),{render:R,hydrate:oe,createApp:am(R,oe)}}function Ko({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Sn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function pm(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ms(t,e,n=!1){const r=t.children,i=e.children;if(G(r)&&G(i))for(let o=0;o<r.length;o++){const a=r[o];let s=i[o];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=i[o]=Qt(i[o]),s.el=a.el),n||Ms(a,s)),s.type===Io&&(s.el=a.el)}}function mm(t){const e=t.slice(),n=[0];let r,i,o,a,s;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}for(o=0,a=n.length-1;o<a;)s=o+a>>1,t[n[s]]<c?o=s+1:a=s;c<t[n[o]]&&(o>0&&(e[r]=n[o-1]),n[o]=r)}}for(o=n.length,a=n[o-1];o-- >0;)n[o]=a,a=e[a];return n}function Hf(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Hf(e)}const gm=t=>t.__isTeleport,Cr=t=>t&&(t.disabled||t.disabled===""),Ul=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Hl=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,$a=(t,e)=>{const n=t&&t.to;return ke(n)?e?e(n):null:n},vm={name:"Teleport",__isTeleport:!0,process(t,e,n,r,i,o,a,s,l,c){const{mc:u,pc:f,pbc:d,o:{insert:m,querySelector:b,createText:y,createComment:_}}=c,g=Cr(e.props);let{shapeFlag:w,children:T,dynamicChildren:L}=e;if(t==null){const F=e.el=y(""),k=e.anchor=y("");m(F,n,r),m(k,n,r);const z=e.target=$a(e.props,b),j=e.targetAnchor=y("");z&&(m(j,z),a==="svg"||Ul(z)?a="svg":(a==="mathml"||Hl(z))&&(a="mathml"));const U=(Z,fe)=>{w&16&&u(T,Z,fe,i,o,a,s,l)};g?U(n,k):z&&U(z,j)}else{e.el=t.el;const F=e.anchor=t.anchor,k=e.target=t.target,z=e.targetAnchor=t.targetAnchor,j=Cr(t.props),U=j?n:k,Z=j?F:z;if(a==="svg"||Ul(k)?a="svg":(a==="mathml"||Hl(k))&&(a="mathml"),L?(d(t.dynamicChildren,L,U,i,o,a,s),Ms(t,e,!0)):l||f(t,e,U,Z,i,o,a,s,!1),g)j?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Ci(e,n,F,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const fe=e.target=$a(e.props,b);fe&&Ci(e,fe,null,c,0)}else j&&Ci(e,k,z,c,1)}Vf(e)},remove(t,e,n,r,{um:i,o:{remove:o}},a){const{shapeFlag:s,children:l,anchor:c,targetAnchor:u,target:f,props:d}=t;if(f&&o(u),a&&o(c),s&16){const m=a||!Cr(d);for(let b=0;b<l.length;b++){const y=l[b];i(y,e,n,m,!!y.dynamicChildren)}}},move:Ci,hydrate:bm};function Ci(t,e,n,{o:{insert:r},m:i},o=2){o===0&&r(t.targetAnchor,e,n);const{el:a,anchor:s,shapeFlag:l,children:c,props:u}=t,f=o===2;if(f&&r(a,e,n),(!f||Cr(u))&&l&16)for(let d=0;d<c.length;d++)i(c[d],e,n,2);f&&r(s,e,n)}function bm(t,e,n,r,i,o,{o:{nextSibling:a,parentNode:s,querySelector:l}},c){const u=e.target=$a(e.props,l);if(u){const f=u._lpa||u.firstChild;if(e.shapeFlag&16)if(Cr(e.props))e.anchor=c(a(t),e,s(t),n,r,i,o),e.targetAnchor=f;else{e.anchor=a(t);let d=f;for(;d;)if(d=a(d),d&&d.nodeType===8&&d.data==="teleport anchor"){e.targetAnchor=d,u._lpa=e.targetAnchor&&a(e.targetAnchor);break}c(f,e,u,n,r,i,o)}Vf(e)}return e.anchor&&a(e.anchor)}const ym=vm;function Vf(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const Ue=Symbol.for("v-fgt"),Io=Symbol.for("v-txt"),ut=Symbol.for("v-cmt"),Fi=Symbol.for("v-stc"),Ir=[];let mt=null;function J(t=!1){Ir.push(mt=t?null:[])}function _m(){Ir.pop(),mt=Ir[Ir.length-1]||null}let Mr=1;function Vl(t){Mr+=t}function zf(t){return t.dynamicChildren=Mr>0?mt||qn:null,_m(),Mr>0&&mt&&mt.push(t),t}function ae(t,e,n,r,i,o){return zf(V(t,e,n,r,i,o,!0))}function It(t,e,n,r,i){return zf(ee(t,e,n,r,i,!0))}function Ji(t){return t?t.__v_isVNode===!0:!1}function An(t,e){return t.type===e.type&&t.key===e.key}const To="__vInternal",Wf=({key:t})=>t??null,ji=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ke(t)||Qe(t)||Q(t)?{i:De,r:t,k:e,f:!!n}:t:null);function V(t,e=null,n=null,r=0,i=null,o=t===Ue?0:1,a=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Wf(e),ref:e&&ji(e),scopeId:If,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:De};return s?(Fs(l,n),o&128&&t.normalize(l)):n&&(l.shapeFlag|=ke(n)?8:16),Mr>0&&!a&&mt&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&mt.push(l),l}const ee=wm;function wm(t,e=null,n=null,r=0,i=null,o=!1){if((!t||t===Tf)&&(t=ut),Ji(t)){const s=Pt(t,e,!0);return n&&Fs(s,n),Mr>0&&!o&&mt&&(s.shapeFlag&6?mt[mt.indexOf(t)]=s:mt.push(s)),s.patchFlag|=-2,s}if(km(t)&&(t=t.__vccOpts),e){e=Sm(e);let{class:s,style:l}=e;s&&!ke(s)&&(e.class=sn(s)),Ee(l)&&(pf(l)&&!G(l)&&(l=Fe({},l)),e.style=_s(l))}const a=ke(t)?1:Np(t)?128:gm(t)?64:Ee(t)?4:Q(t)?2:0;return V(t,e,n,r,i,a,o,!0)}function Sm(t){return t?pf(t)||To in t?Fe({},t):t:null}function Pt(t,e,n=!1){const{props:r,ref:i,patchFlag:o,children:a}=t,s=e?ie(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:s,key:s&&Wf(s),ref:e&&e.ref?n&&i?G(i)?i.concat(ji(e)):[i,ji(e)]:ji(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ue?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Pt(t.ssContent),ssFallback:t.ssFallback&&Pt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function un(t=" ",e=0){return ee(Io,null,t,e)}function Ds(t,e){const n=ee(Fi,null,t);return n.staticCount=e,n}function $e(t="",e=!1){return e?(J(),It(ut,null,t)):ee(ut,null,t)}function wt(t){return t==null||typeof t=="boolean"?ee(ut):G(t)?ee(Ue,null,t.slice()):typeof t=="object"?Qt(t):ee(Io,null,String(t))}function Qt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Pt(t)}function Fs(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Fs(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(To in e)?e._ctx=De:i===3&&De&&(De.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Q(e)?(e={default:e,_ctx:De},n=32):(e=String(e),r&64?(n=16,e=[un(e)]):n=8);t.children=e,t.shapeFlag|=n}function ie(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=sn([e.class,r.class]));else if(i==="style")e.style=_s([e.style,r.style]);else if(po(i)){const o=e[i],a=r[i];a&&o!==a&&!(G(o)&&o.includes(a))&&(e[i]=o?[].concat(o,a):a)}else i!==""&&(e[i]=r[i])}return e}function _t(t,e,n,r=null){ct(t,e,7,[n,r])}const Em=Mf();let Cm=0;function Im(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||Em,o={uid:Cm++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Zh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ff(r,i),emitsOptions:Cf(r,i),emit:null,emitted:null,propsDefaults:_e,inheritAttrs:r.inheritAttrs,ctx:_e,data:_e,props:_e,attrs:_e,slots:_e,refs:_e,setupState:_e,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Pp.bind(null,o),t.ce&&t.ce(o),o}let ze=null;const Kf=()=>ze||De;let Zi,Na;{const t=Ju(),e=(n,r)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(r),o=>{i.length>1?i.forEach(a=>a(o)):i[0](o)}};Zi=e("__VUE_INSTANCE_SETTERS__",n=>ze=n),Na=e("__VUE_SSR_SETTERS__",n=>Ao=n)}const oi=t=>{const e=ze;return Zi(t),t.scope.on(),()=>{t.scope.off(),Zi(e)}},zl=()=>{ze&&ze.scope.off(),Zi(null)};function Gf(t){return t.vnode.shapeFlag&4}let Ao=!1;function Tm(t,e=!1){e&&Na(e);const{props:n,children:r}=t.vnode,i=Gf(t);sm(t,n,i,e),um(t,r);const o=i?Am(t,e):void 0;return e&&Na(!1),o}function Am(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=mf(new Proxy(t.ctx,Qp));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?Pm(t):null,o=oi(t);Fn();const a=cn(r,t,0,[t.props,i]);if(jn(),o(),qu(a)){if(a.then(zl,zl),e)return a.then(s=>{Wl(t,s,e)}).catch(s=>{yo(s,t,0)});t.asyncDep=a}else Wl(t,a,e)}else qf(t,e)}function Wl(t,e,n){Q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ee(e)&&(t.setupState=yf(e)),qf(t,n)}let Kl;function qf(t,e,n){const r=t.type;if(!t.render){if(!e&&Kl&&!r.render){const i=r.template||$s(t).template;if(i){const{isCustomElement:o,compilerOptions:a}=t.appContext.config,{delimiters:s,compilerOptions:l}=r,c=Fe(Fe({isCustomElement:o,delimiters:s},a),l);r.render=Kl(i,c)}}t.render=r.render||lt}{const i=oi(t);Fn();try{em(t)}finally{jn(),i()}}}function Om(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Ze(t,"get","$attrs"),e[n]}}))}function Pm(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Om(t)},slots:t.slots,emit:t.emit,expose:e}}function Oo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(yf(mf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Er)return Er[n](t)},has(e,n){return n in e||n in Er}}))}function xm(t,e=!0){return Q(t)?t.displayName||t.name:t.name||e&&t.__name}function km(t){return Q(t)&&"__vccOpts"in t}const Re=(t,e)=>_p(t,e,Ao);function Ne(t,e,n){const r=arguments.length;return r===2?Ee(e)&&!G(e)?Ji(e)?ee(t,null,[e]):ee(t,e):ee(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ji(n)&&(n=[n]),ee(t,e,n))}const Rm="3.4.15";/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Lm="http://www.w3.org/2000/svg",$m="http://www.w3.org/1998/Math/MathML",en=typeof document<"u"?document:null,Gl=en&&en.createElement("template"),Nm={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e==="svg"?en.createElementNS(Lm,t):e==="mathml"?en.createElementNS($m,t):en.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>en.createTextNode(t),createComment:t=>en.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>en.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,o){const a=n?n.previousSibling:e.lastChild;if(i&&(i===o||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===o||!(i=i.nextSibling)););else{Gl.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const s=Gl.content;if(r==="svg"||r==="mathml"){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}e.insertBefore(s,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Wt="transition",gr="animation",Dr=Symbol("_vtc"),js=(t,{slots:e})=>Ne(Hp,Mm(t),e);js.displayName="Transition";const Yf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};js.props=Fe({},Pf,Yf);const En=(t,e=[])=>{G(t)?t.forEach(n=>n(...e)):t&&t(...e)},ql=t=>t?G(t)?t.some(e=>e.length>1):t.length>1:!1;function Mm(t){const e={};for(const $ in t)$ in Yf||(e[$]=t[$]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:c=a,appearToClass:u=s,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,b=Dm(i),y=b&&b[0],_=b&&b[1],{onBeforeEnter:g,onEnter:w,onEnterCancelled:T,onLeave:L,onLeaveCancelled:F,onBeforeAppear:k=g,onAppear:z=w,onAppearCancelled:j=T}=e,U=($,ne,Oe)=>{Cn($,ne?u:s),Cn($,ne?c:a),Oe&&Oe()},Z=($,ne)=>{$._isLeaving=!1,Cn($,f),Cn($,m),Cn($,d),ne&&ne()},fe=$=>(ne,Oe)=>{const et=$?z:w,ye=()=>U(ne,$,Oe);En(et,[ne,ye]),Yl(()=>{Cn(ne,$?l:o),Kt(ne,$?u:s),ql(et)||Xl(ne,r,y,ye)})};return Fe(e,{onBeforeEnter($){En(g,[$]),Kt($,o),Kt($,a)},onBeforeAppear($){En(k,[$]),Kt($,l),Kt($,c)},onEnter:fe(!1),onAppear:fe(!0),onLeave($,ne){$._isLeaving=!0;const Oe=()=>Z($,ne);Kt($,f),Bm(),Kt($,d),Yl(()=>{$._isLeaving&&(Cn($,f),Kt($,m),ql(L)||Xl($,r,_,Oe))}),En(L,[$,Oe])},onEnterCancelled($){U($,!1),En(T,[$])},onAppearCancelled($){U($,!0),En(j,[$])},onLeaveCancelled($){Z($),En(F,[$])}})}function Dm(t){if(t==null)return null;if(Ee(t))return[Go(t.enter),Go(t.leave)];{const e=Go(t);return[e,e]}}function Go(t){return Wh(t)}function Kt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Dr]||(t[Dr]=new Set)).add(e)}function Cn(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Dr];n&&(n.delete(e),n.size||(t[Dr]=void 0))}function Yl(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Fm=0;function Xl(t,e,n,r){const i=t._endId=++Fm,o=()=>{i===t._endId&&r()};if(n)return setTimeout(o,n);const{type:a,timeout:s,propCount:l}=jm(t,e);if(!a)return r();const c=a+"end";let u=0;const f=()=>{t.removeEventListener(c,d),o()},d=m=>{m.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},s+1),t.addEventListener(c,d)}function jm(t,e){const n=window.getComputedStyle(t),r=b=>(n[b]||"").split(", "),i=r(`${Wt}Delay`),o=r(`${Wt}Duration`),a=Jl(i,o),s=r(`${gr}Delay`),l=r(`${gr}Duration`),c=Jl(s,l);let u=null,f=0,d=0;e===Wt?a>0&&(u=Wt,f=a,d=o.length):e===gr?c>0&&(u=gr,f=c,d=l.length):(f=Math.max(a,c),u=f>0?a>c?Wt:gr:null,d=u?u===Wt?o.length:l.length:0);const m=u===Wt&&/\b(transform|all)(,|$)/.test(r(`${Wt}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:m}}function Jl(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Zl(n)+Zl(t[r])))}function Zl(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Bm(){return document.body.offsetHeight}function Um(t,e,n){const r=t[Dr];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Hm=Symbol("_vod"),Vm=Symbol("");function zm(t,e,n){const r=t.style,i=r.display,o=ke(n);if(n&&!o){if(e&&!ke(e))for(const a in e)n[a]==null&&Ma(r,a,"");for(const a in n)Ma(r,a,n[a])}else if(o){if(e!==n){const a=r[Vm];a&&(n+=";"+a),r.cssText=n}}else e&&t.removeAttribute("style");Hm in t&&(r.display=i)}const Ql=/\s*!important$/;function Ma(t,e,n){if(G(n))n.forEach(r=>Ma(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Wm(t,e);Ql.test(n)?t.setProperty(ur(r),n.replace(Ql,""),"important"):t[r]=n}}const ec=["Webkit","Moz","ms"],qo={};function Wm(t,e){const n=qo[e];if(n)return n;let r=Ot(e);if(r!=="filter"&&r in t)return qo[e]=r;r=vo(r);for(let i=0;i<ec.length;i++){const o=ec[i]+r;if(o in t)return qo[e]=o}return e}const tc="http://www.w3.org/1999/xlink";function Km(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(tc,e.slice(6,e.length)):t.setAttributeNS(tc,e,n);else{const o=Jh(e);n==null||o&&!Zu(n)?t.removeAttribute(e):t.setAttribute(e,o?"":n)}}function Gm(t,e,n,r,i,o,a){if(e==="innerHTML"||e==="textContent"){r&&a(r,i,o),t[e]=n??"";return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){t._value=n;const c=s==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Zu(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Vn(t,e,n,r){t.addEventListener(e,n,r)}function qm(t,e,n,r){t.removeEventListener(e,n,r)}const nc=Symbol("_vei");function Ym(t,e,n,r,i=null){const o=t[nc]||(t[nc]={}),a=o[e];if(r&&a)a.value=r;else{const[s,l]=Xm(e);if(r){const c=o[e]=Qm(r,i);Vn(t,s,c,l)}else a&&(qm(t,s,a,l),o[e]=void 0)}}const rc=/(?:Once|Passive|Capture)$/;function Xm(t){let e;if(rc.test(t)){e={};let r;for(;r=t.match(rc);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ur(t.slice(2)),e]}let Yo=0;const Jm=Promise.resolve(),Zm=()=>Yo||(Jm.then(()=>Yo=0),Yo=Date.now());function Qm(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ct(eg(r,n.value),e,5,[r])};return n.value=t,n.attached=Zm(),n}function eg(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const ic=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,tg=(t,e,n,r,i,o,a,s,l)=>{const c=i==="svg";e==="class"?Um(t,r,c):e==="style"?zm(t,n,r):po(e)?vs(e)||Ym(t,e,n,r,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ng(t,e,r,c))?Gm(t,e,r,o,a,s,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Km(t,e,r,c))};function ng(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&ic(e)&&Q(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return ic(e)&&ke(n)?!1:e in t}const oc=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?n=>Mi(e,n):e};function rg(t){t.target.composing=!0}function ac(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Xo=Symbol("_assign"),sc={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t[Xo]=oc(i);const o=r||i.props&&i.props.type==="number";Vn(t,e?"change":"input",a=>{if(a.target.composing)return;let s=t.value;n&&(s=s.trim()),o&&(s=_a(s)),t[Xo](s)}),n&&Vn(t,"change",()=>{t.value=t.value.trim()}),e||(Vn(t,"compositionstart",rg),Vn(t,"compositionend",ac),Vn(t,"change",ac))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},o){if(t[Xo]=oc(o),t.composing)return;const a=i||t.type==="number"?_a(t.value):t.value,s=e??"";a!==s&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===s)||(t.value=s))}},ig=["ctrl","shift","alt","meta"],og={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>ig.some(n=>t[`${n}Key`]&&!e.includes(n))},ag=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(i,...o)=>{for(let a=0;a<e.length;a++){const s=og[e[a]];if(s&&s(i,e))return}return t(i,...o)})},sg=Fe({patchProp:tg},Nm);let lc;function lg(){return lc||(lc=dm(sg))}const cg=(...t)=>{const e=lg().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=fg(r);if(!i)return;const o=e._component;!Q(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.innerHTML="";const a=n(i,!1,ug(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},e};function ug(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function fg(t){return ke(t)?document.querySelector(t):t}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const zn=typeof window<"u";function dg(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const pe=Object.assign;function Jo(t,e){const n={};for(const r in e){const i=e[r];n[r]=vt(i)?i.map(t):t(i)}return n}const Tr=()=>{},vt=Array.isArray,hg=/\/$/,pg=t=>t.replace(hg,"");function Zo(t,e,n="/"){let r,i={},o="",a="";const s=e.indexOf("#");let l=e.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=e.slice(0,l),o=e.slice(l+1,s>-1?s:e.length),i=t(o)),s>-1&&(r=r||e.slice(0,s),a=e.slice(s,e.length)),r=bg(r??e,n),{fullPath:r+(o&&"?")+o+a,path:r,query:i,hash:a}}function mg(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function cc(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function gg(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&ir(e.matched[r],n.matched[i])&&Xf(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ir(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Xf(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!vg(t[n],e[n]))return!1;return!0}function vg(t,e){return vt(t)?uc(t,e):vt(e)?uc(e,t):t===e}function uc(t,e){return vt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function bg(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let o=n.length-1,a,s;for(a=0;a<r.length;a++)if(s=r[a],s!==".")if(s==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+r.slice(a-(a===r.length?1:0)).join("/")}var Fr;(function(t){t.pop="pop",t.push="push"})(Fr||(Fr={}));var Ar;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ar||(Ar={}));function yg(t){if(!t)if(zn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),pg(t)}const _g=/^[^#]+#/;function wg(t,e){return t.replace(_g,"#")+e}function Sg(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Po=()=>({left:window.pageXOffset,top:window.pageYOffset});function Eg(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Sg(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function fc(t,e){return(history.state?history.state.position-e:-1)+t}const Da=new Map;function Cg(t,e){Da.set(t,e)}function Ig(t){const e=Da.get(t);return Da.delete(t),e}let Tg=()=>location.protocol+"//"+location.host;function Jf(t,e){const{pathname:n,search:r,hash:i}=e,o=t.indexOf("#");if(o>-1){let s=i.includes(t.slice(o))?t.slice(o).length:1,l=i.slice(s);return l[0]!=="/"&&(l="/"+l),cc(l,"")}return cc(n,t)+r+i}function Ag(t,e,n,r){let i=[],o=[],a=null;const s=({state:d})=>{const m=Jf(t,location),b=n.value,y=e.value;let _=0;if(d){if(n.value=m,e.value=d,a&&a===b){a=null;return}_=y?d.position-y.position:0}else r(m);i.forEach(g=>{g(n.value,b,{delta:_,type:Fr.pop,direction:_?_>0?Ar.forward:Ar.back:Ar.unknown})})};function l(){a=n.value}function c(d){i.push(d);const m=()=>{const b=i.indexOf(d);b>-1&&i.splice(b,1)};return o.push(m),m}function u(){const{history:d}=window;d.state&&d.replaceState(pe({},d.state,{scroll:Po()}),"")}function f(){for(const d of o)d();o=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function dc(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?Po():null}}function Og(t){const{history:e,location:n}=window,r={value:Jf(t,n)},i={value:e.state};i.value||o(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:Tg()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(m){console.error(m),n[u?"replace":"assign"](d)}}function a(l,c){const u=pe({},e.state,dc(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});o(l,u,!0),r.value=l}function s(l,c){const u=pe({},i.value,e.state,{forward:l,scroll:Po()});o(u.current,u,!0);const f=pe({},dc(r.value,l,null),{position:u.position+1},c);o(l,f,!1),r.value=l}return{location:r,state:i,push:s,replace:a}}function Pg(t){t=yg(t);const e=Og(t),n=Ag(t,e.state,e.location,e.replace);function r(o,a=!0){a||n.pauseListeners(),history.go(o)}const i=pe({location:"",base:t,go:r,createHref:wg.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function xg(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Pg(t)}function kg(t){return typeof t=="string"||t&&typeof t=="object"}function Zf(t){return typeof t=="string"||typeof t=="symbol"}const Gt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Qf=Symbol("");var hc;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(hc||(hc={}));function or(t,e){return pe(new Error,{type:t,[Qf]:!0},e)}function kt(t,e){return t instanceof Error&&Qf in t&&(e==null||!!(t.type&e))}const pc="[^/]+?",Rg={sensitive:!1,strict:!1,start:!0,end:!0},Lg=/[.+*?^${}()[\]/\\]/g;function $g(t,e){const n=pe({},Rg,e),r=[];let i=n.start?"^":"";const o=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let f=0;f<c.length;f++){const d=c[f];let m=40+(n.sensitive?.25:0);if(d.type===0)f||(i+="/"),i+=d.value.replace(Lg,"\\$&"),m+=40;else if(d.type===1){const{value:b,repeatable:y,optional:_,regexp:g}=d;o.push({name:b,repeatable:y,optional:_});const w=g||pc;if(w!==pc){m+=10;try{new RegExp(`(${w})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${b}" (${w}): `+L.message)}}let T=y?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;f||(T=_&&c.length<2?`(?:/${T})`:"/"+T),_&&(T+="?"),i+=T,m+=20,_&&(m+=-8),y&&(m+=-20),w===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const a=new RegExp(i,n.sensitive?"":"i");function s(c){const u=c.match(a),f={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",b=o[d-1];f[b.name]=m&&b.repeatable?m.split("/"):m}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:b,repeatable:y,optional:_}=m,g=b in c?c[b]:"";if(vt(g)&&!y)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const w=vt(g)?g.join("/"):g;if(!w)if(_)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${b}"`);u+=w}}return u||"/"}return{re:a,score:r,keys:o,parse:s,stringify:l}}function Ng(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Mg(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const o=Ng(r[n],i[n]);if(o)return o;n++}if(Math.abs(i.length-r.length)===1){if(mc(r))return 1;if(mc(i))return-1}return i.length-r.length}function mc(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Dg={type:0,value:""},Fg=/[a-zA-Z0-9_]/;function jg(t){if(!t)return[[]];if(t==="/")return[[Dg]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,r=n;const i=[];let o;function a(){o&&i.push(o),o=[]}let s=0,l,c="",u="";function f(){c&&(n===0?o.push({type:0,value:c}):n===1||n===2||n===3?(o.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;s<t.length;){if(l=t[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),a()):l===":"?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:Fg.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),a(),i}function Bg(t,e,n){const r=$g(jg(t.path),n),i=pe(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function Ug(t,e){const n=[],r=new Map;e=bc({strict:!1,end:!0,sensitive:!1},e);function i(u){return r.get(u)}function o(u,f,d){const m=!d,b=Hg(u);b.aliasOf=d&&d.record;const y=bc(e,u),_=[b];if("alias"in u){const T=typeof u.alias=="string"?[u.alias]:u.alias;for(const L of T)_.push(pe({},b,{components:d?d.record.components:b.components,path:L,aliasOf:d?d.record:b}))}let g,w;for(const T of _){const{path:L}=T;if(f&&L[0]!=="/"){const F=f.record.path,k=F[F.length-1]==="/"?"":"/";T.path=f.record.path+(L&&k+L)}if(g=Bg(T,f,y),d?d.alias.push(g):(w=w||g,w!==g&&w.alias.push(g),m&&u.name&&!vc(g)&&a(u.name)),b.children){const F=b.children;for(let k=0;k<F.length;k++)o(F[k],g,d&&d.children[k])}d=d||g,(g.record.components&&Object.keys(g.record.components).length||g.record.name||g.record.redirect)&&l(g)}return w?()=>{a(w)}:Tr}function a(u){if(Zf(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function s(){return n}function l(u){let f=0;for(;f<n.length&&Mg(u,n[f])>=0&&(u.record.path!==n[f].record.path||!ed(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!vc(u)&&r.set(u.record.name,u)}function c(u,f){let d,m={},b,y;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw or(1,{location:u});y=d.record.name,m=pe(gc(f.params,d.keys.filter(w=>!w.optional).map(w=>w.name)),u.params&&gc(u.params,d.keys.map(w=>w.name))),b=d.stringify(m)}else if("path"in u)b=u.path,d=n.find(w=>w.re.test(b)),d&&(m=d.parse(b),y=d.record.name);else{if(d=f.name?r.get(f.name):n.find(w=>w.re.test(f.path)),!d)throw or(1,{location:u,currentLocation:f});y=d.record.name,m=pe({},f.params,u.params),b=d.stringify(m)}const _=[];let g=d;for(;g;)_.unshift(g.record),g=g.parent;return{name:y,path:b,params:m,matched:_,meta:zg(_)}}return t.forEach(u=>o(u)),{addRoute:o,resolve:c,removeRoute:a,getRoutes:s,getRecordMatcher:i}}function gc(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Hg(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Vg(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Vg(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function vc(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function zg(t){return t.reduce((e,n)=>pe(e,n.meta),{})}function bc(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ed(t,e){return e.children.some(n=>n===t||ed(t,n))}const td=/#/g,Wg=/&/g,Kg=/\//g,Gg=/=/g,qg=/\?/g,nd=/\+/g,Yg=/%5B/g,Xg=/%5D/g,rd=/%5E/g,Jg=/%60/g,id=/%7B/g,Zg=/%7C/g,od=/%7D/g,Qg=/%20/g;function Bs(t){return encodeURI(""+t).replace(Zg,"|").replace(Yg,"[").replace(Xg,"]")}function ev(t){return Bs(t).replace(id,"{").replace(od,"}").replace(rd,"^")}function Fa(t){return Bs(t).replace(nd,"%2B").replace(Qg,"+").replace(td,"%23").replace(Wg,"%26").replace(Jg,"`").replace(id,"{").replace(od,"}").replace(rd,"^")}function tv(t){return Fa(t).replace(Gg,"%3D")}function nv(t){return Bs(t).replace(td,"%23").replace(qg,"%3F")}function rv(t){return t==null?"":nv(t).replace(Kg,"%2F")}function Qi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function iv(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const o=r[i].replace(nd," "),a=o.indexOf("="),s=Qi(a<0?o:o.slice(0,a)),l=a<0?null:Qi(o.slice(a+1));if(s in e){let c=e[s];vt(c)||(c=e[s]=[c]),c.push(l)}else e[s]=l}return e}function yc(t){let e="";for(let n in t){const r=t[n];if(n=tv(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(vt(r)?r.map(o=>o&&Fa(o)):[r&&Fa(r)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+n,o!=null&&(e+="="+o))})}return e}function ov(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=vt(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const av=Symbol(""),_c=Symbol(""),xo=Symbol(""),Us=Symbol(""),ja=Symbol("");function vr(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function tn(t,e,n,r,i){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((a,s)=>{const l=f=>{f===!1?s(or(4,{from:n,to:e})):f instanceof Error?s(f):kg(f)?s(or(2,{from:e,to:f})):(o&&r.enterCallbacks[i]===o&&typeof f=="function"&&o.push(f),a())},c=t.call(r&&r.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(f=>s(f))})}function Qo(t,e,n,r){const i=[];for(const o of t)for(const a in o.components){let s=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(sv(s)){const c=(s.__vccOpts||s)[e];c&&i.push(tn(c,n,r,o,a))}else{let l=s();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const u=dg(c)?c.default:c;o.components[a]=u;const d=(u.__vccOpts||u)[e];return d&&tn(d,n,r,o,a)()}))}}return i}function sv(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function wc(t){const e=me(xo),n=me(Us),r=Re(()=>e.resolve(Ae(t.to))),i=Re(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(ir.bind(null,u));if(d>-1)return d;const m=Sc(l[c-2]);return c>1&&Sc(u)===m&&f[f.length-1].path!==m?f.findIndex(ir.bind(null,l[c-2])):d}),o=Re(()=>i.value>-1&&fv(n.params,r.value.params)),a=Re(()=>i.value>-1&&i.value===n.matched.length-1&&Xf(n.params,r.value.params));function s(l={}){return uv(l)?e[Ae(t.replace)?"replace":"push"](Ae(t.to)).catch(Tr):Promise.resolve()}return{route:r,href:Re(()=>r.value.href),isActive:o,isExactActive:a,navigate:s}}const lv=fr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:wc,setup(t,{slots:e}){const n=it(wc(t)),{options:r}=me(xo),i=Re(()=>({[Ec(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ec(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=e.default&&e.default(n);return t.custom?o:Ne("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},o)}}}),cv=lv;function uv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function fv(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!vt(i)||i.length!==r.length||r.some((o,a)=>o!==i[a]))return!1}return!0}function Sc(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ec=(t,e,n)=>t??e??n,dv=fr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=me(ja),i=Re(()=>t.route||r.value),o=me(_c,0),a=Re(()=>{let c=Ae(o);const{matched:u}=i.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),s=Re(()=>i.value.matched[a.value]);rt(_c,Re(()=>a.value+1)),rt(av,s),rt(ja,i);const l=ce();return Mt(()=>[l.value,s.value,t.name],([c,u,f],[d,m,b])=>{u&&(u.instances[f]=c,m&&m!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!ir(u,m)||!d)&&(u.enterCallbacks[f]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,f=s.value,d=f&&f.components[u];if(!d)return Cc(n.default,{Component:d,route:c});const m=f.props[u],b=m?m===!0?c.params:typeof m=="function"?m(c):m:null,_=Ne(d,pe({},b,e,{onVnodeUnmounted:g=>{g.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Cc(n.default,{Component:_,route:c})||_}}});function Cc(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const hv=dv;function pv(t){const e=Ug(t.routes,t),n=t.parseQuery||iv,r=t.stringifyQuery||yc,i=t.history,o=vr(),a=vr(),s=vr(),l=wp(Gt);let c=Gt;zn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Jo.bind(null,C=>""+C),f=Jo.bind(null,rv),d=Jo.bind(null,Qi);function m(C,N){let R,B;return Zf(C)?(R=e.getRecordMatcher(C),B=N):B=C,e.addRoute(B,R)}function b(C){const N=e.getRecordMatcher(C);N&&e.removeRoute(N)}function y(){return e.getRoutes().map(C=>C.record)}function _(C){return!!e.getRecordMatcher(C)}function g(C,N){if(N=pe({},N||l.value),typeof C=="string"){const h=Zo(n,C,N.path),v=e.resolve({path:h.path},N),S=i.createHref(h.fullPath);return pe(h,v,{params:d(v.params),hash:Qi(h.hash),redirectedFrom:void 0,href:S})}let R;if("path"in C)R=pe({},C,{path:Zo(n,C.path,N.path).path});else{const h=pe({},C.params);for(const v in h)h[v]==null&&delete h[v];R=pe({},C,{params:f(h)}),N.params=f(N.params)}const B=e.resolve(R,N),oe=C.hash||"";B.params=u(d(B.params));const ge=mg(r,pe({},C,{hash:ev(oe),path:B.path})),p=i.createHref(ge);return pe({fullPath:ge,hash:oe,query:r===yc?ov(C.query):C.query||{}},B,{redirectedFrom:void 0,href:p})}function w(C){return typeof C=="string"?Zo(n,C,l.value.path):pe({},C)}function T(C,N){if(c!==C)return or(8,{from:N,to:C})}function L(C){return z(C)}function F(C){return L(pe(w(C),{replace:!0}))}function k(C){const N=C.matched[C.matched.length-1];if(N&&N.redirect){const{redirect:R}=N;let B=typeof R=="function"?R(C):R;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=w(B):{path:B},B.params={}),pe({query:C.query,hash:C.hash,params:"path"in B?{}:C.params},B)}}function z(C,N){const R=c=g(C),B=l.value,oe=C.state,ge=C.force,p=C.replace===!0,h=k(R);if(h)return z(pe(w(h),{state:typeof h=="object"?pe({},oe,h.state):oe,force:ge,replace:p}),N||R);const v=R;v.redirectedFrom=N;let S;return!ge&&gg(r,B,R)&&(S=or(16,{to:v,from:B}),tt(B,B,!0,!1)),(S?Promise.resolve(S):Z(v,B)).catch(E=>kt(E)?kt(E,2)?E:ft(E):se(E,v,B)).then(E=>{if(E){if(kt(E,2))return z(pe({replace:p},w(E.to),{state:typeof E.to=="object"?pe({},oe,E.to.state):oe,force:ge}),N||v)}else E=$(v,B,!0,p,oe);return fe(v,B,E),E})}function j(C,N){const R=T(C,N);return R?Promise.reject(R):Promise.resolve()}function U(C){const N=dt.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(C):C()}function Z(C,N){let R;const[B,oe,ge]=mv(C,N);R=Qo(B.reverse(),"beforeRouteLeave",C,N);for(const h of B)h.leaveGuards.forEach(v=>{R.push(tn(v,C,N))});const p=j.bind(null,C,N);return R.push(p),Me(R).then(()=>{R=[];for(const h of o.list())R.push(tn(h,C,N));return R.push(p),Me(R)}).then(()=>{R=Qo(oe,"beforeRouteUpdate",C,N);for(const h of oe)h.updateGuards.forEach(v=>{R.push(tn(v,C,N))});return R.push(p),Me(R)}).then(()=>{R=[];for(const h of ge)if(h.beforeEnter)if(vt(h.beforeEnter))for(const v of h.beforeEnter)R.push(tn(v,C,N));else R.push(tn(h.beforeEnter,C,N));return R.push(p),Me(R)}).then(()=>(C.matched.forEach(h=>h.enterCallbacks={}),R=Qo(ge,"beforeRouteEnter",C,N),R.push(p),Me(R))).then(()=>{R=[];for(const h of a.list())R.push(tn(h,C,N));return R.push(p),Me(R)}).catch(h=>kt(h,8)?h:Promise.reject(h))}function fe(C,N,R){s.list().forEach(B=>U(()=>B(C,N,R)))}function $(C,N,R,B,oe){const ge=T(C,N);if(ge)return ge;const p=N===Gt,h=zn?history.state:{};R&&(B||p?i.replace(C.fullPath,pe({scroll:p&&h&&h.scroll},oe)):i.push(C.fullPath,oe)),l.value=C,tt(C,N,R,p),ft()}let ne;function Oe(){ne||(ne=i.listen((C,N,R)=>{if(!Vt.listening)return;const B=g(C),oe=k(B);if(oe){z(pe(oe,{replace:!0}),B).catch(Tr);return}c=B;const ge=l.value;zn&&Cg(fc(ge.fullPath,R.delta),Po()),Z(B,ge).catch(p=>kt(p,12)?p:kt(p,2)?(z(p.to,B).then(h=>{kt(h,20)&&!R.delta&&R.type===Fr.pop&&i.go(-1,!1)}).catch(Tr),Promise.reject()):(R.delta&&i.go(-R.delta,!1),se(p,B,ge))).then(p=>{p=p||$(B,ge,!1),p&&(R.delta&&!kt(p,8)?i.go(-R.delta,!1):R.type===Fr.pop&&kt(p,20)&&i.go(-1,!1)),fe(B,ge,p)}).catch(Tr)}))}let et=vr(),ye=vr(),de;function se(C,N,R){ft(C);const B=ye.list();return B.length?B.forEach(oe=>oe(C,N,R)):console.error(C),Promise.reject(C)}function at(){return de&&l.value!==Gt?Promise.resolve():new Promise((C,N)=>{et.add([C,N])})}function ft(C){return de||(de=!C,Oe(),et.list().forEach(([N,R])=>C?R(C):N()),et.reset()),C}function tt(C,N,R,B){const{scrollBehavior:oe}=t;if(!zn||!oe)return Promise.resolve();const ge=!R&&Ig(fc(C.fullPath,0))||(B||!R)&&history.state&&history.state.scroll||null;return _o().then(()=>oe(C,N,ge)).then(p=>p&&Eg(p)).catch(p=>se(p,C,N))}const Pe=C=>i.go(C);let Ye;const dt=new Set,Vt={currentRoute:l,listening:!0,addRoute:m,removeRoute:b,hasRoute:_,getRoutes:y,resolve:g,options:t,push:L,replace:F,go:Pe,back:()=>Pe(-1),forward:()=>Pe(1),beforeEach:o.add,beforeResolve:a.add,afterEach:s.add,onError:ye.add,isReady:at,install(C){const N=this;C.component("RouterLink",cv),C.component("RouterView",hv),C.config.globalProperties.$router=N,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>Ae(l)}),zn&&!Ye&&l.value===Gt&&(Ye=!0,L(i.location).catch(oe=>{}));const R={};for(const oe in Gt)Object.defineProperty(R,oe,{get:()=>l.value[oe],enumerable:!0});C.provide(xo,N),C.provide(Us,hf(R)),C.provide(ja,l);const B=C.unmount;dt.add(C),C.unmount=function(){dt.delete(C),dt.size<1&&(c=Gt,ne&&ne(),ne=null,l.value=Gt,Ye=!1,de=!1),B()}}};function Me(C){return C.reduce((N,R)=>N.then(()=>U(R)),Promise.resolve())}return Vt}function mv(t,e){const n=[],r=[],i=[],o=Math.max(e.matched.length,t.matched.length);for(let a=0;a<o;a++){const s=e.matched[a];s&&(t.matched.find(c=>ir(c,s))?r.push(s):n.push(s));const l=t.matched[a];l&&(e.matched.find(c=>ir(c,l))||i.push(l))}return[n,r,i]}function gv(){return me(xo)}function vv(){return me(Us)}/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */const Le={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},Ic={itemsToShow:{default:Le.itemsToShow,type:Number},itemsToScroll:{default:Le.itemsToScroll,type:Number},wrapAround:{default:Le.wrapAround,type:Boolean},throttle:{default:Le.throttle,type:Number},snapAlign:{default:Le.snapAlign,validator(t){return["start","end","center","center-even","center-odd"].includes(t)}},transition:{default:Le.transition,type:Number},breakpoints:{default:Le.breakpoints,type:Object},autoplay:{default:Le.autoplay,type:Number},pauseAutoplayOnHover:{default:Le.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:Le.mouseDrag,type:Boolean},touchDrag:{default:Le.touchDrag,type:Boolean},dir:{default:Le.dir,validator(t){return["rtl","ltr"].includes(t)}},i18n:{default:Le.i18n,type:Object},settings:{default(){return{}},type:Object}};function bv({config:t,slidesCount:e}){const{snapAlign:n,wrapAround:r,itemsToShow:i=1}=t;if(r)return Math.max(e-1,0);let o;switch(n){case"start":o=e-i;break;case"end":o=e-1;break;case"center":case"center-odd":o=e-Math.ceil((i-.5)/2);break;case"center-even":o=e-Math.ceil(i/2);break;default:o=0;break}return Math.max(o,0)}function yv({config:t,slidesCount:e}){const{wrapAround:n,snapAlign:r,itemsToShow:i=1}=t;let o=0;if(n||i>e)return o;switch(r){case"start":o=0;break;case"end":o=i-1;break;case"center":case"center-odd":o=Math.floor((i-1)/2);break;case"center-even":o=Math.floor((i-2)/2);break;default:o=0;break}return o}function Ba({val:t,max:e,min:n}){return e<n?t:Math.min(Math.max(t,n),e)}function _v({config:t,currentSlide:e,slidesCount:n}){const{snapAlign:r,wrapAround:i,itemsToShow:o=1}=t;let a=e;switch(r){case"center":case"center-odd":a-=(o-1)/2;break;case"center-even":a-=(o-2)/2;break;case"end":a-=o-1;break}return i?a:Ba({val:a,max:n-o,min:0})}function ad(t){return t?t.reduce((e,n)=>{var r;return n.type===Ue?[...e,...ad(n.children)]:((r=n.type)===null||r===void 0?void 0:r.name)==="CarouselSlide"?[...e,n]:e},[]):[]}function eo({val:t,max:e,min:n=0}){return t>e?eo({val:t-(e+1),max:e,min:n}):t<n?eo({val:t+(e+1),max:e,min:n}):t}function wv(t,e){let n;return e?function(...r){const i=this;n||(t.apply(i,r),n=!0,setTimeout(()=>n=!1,e))}:t}function Sv(t,e){let n;return function(...r){n&&clearTimeout(n),n=setTimeout(()=>{t(...r),n=null},e)}}function sd(t="",e={}){return Object.entries(e).reduce((n,[r,i])=>n.replace(`{${r}}`,String(i)),t)}var Ev=fr({name:"ARIA",setup(){const t=me("config",it(Object.assign({},Le))),e=me("currentSlide",ce(0)),n=me("slidesCount",ce(0));return()=>Ne("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},sd(t.i18n.itemXofY,{currentSlide:e.value+1,slidesCount:n.value}))}}),Cv=fr({name:"Carousel",props:Ic,setup(t,{slots:e,emit:n,expose:r}){var i;const o=ce(null),a=ce([]),s=ce(0),l=ce(0),c=it(Object.assign({},Le));let u=Object.assign({},Le),f;const d=ce((i=t.modelValue)!==null&&i!==void 0?i:0),m=ce(0),b=ce(0),y=ce(0),_=ce(0);let g,w;rt("config",c),rt("slidesCount",l),rt("currentSlide",d),rt("maxSlide",y),rt("minSlide",_),rt("slideWidth",s);function T(){f=Object.assign({},t.breakpoints),u=Object.assign(Object.assign(Object.assign({},u),t),{i18n:Object.assign(Object.assign({},u.i18n),t.i18n),breakpoints:void 0}),F(u)}function L(){if(!f||!Object.keys(f).length)return;const h=Object.keys(f).map(S=>Number(S)).sort((S,E)=>+E-+S);let v=Object.assign({},u);h.some(S=>{const E=window.matchMedia(`(min-width: ${S}px)`).matches;return E&&(v=Object.assign(Object.assign({},v),f[S])),E}),F(v)}function F(h){Object.entries(h).forEach(([v,S])=>c[v]=S)}const k=Sv(()=>{L(),z()},16);function z(){if(!o.value)return;const h=o.value.getBoundingClientRect();s.value=h.width/c.itemsToShow}function j(){l.value<=0||(b.value=Math.ceil((l.value-1)/2),y.value=bv({config:c,slidesCount:l.value}),_.value=yv({config:c,slidesCount:l.value}),c.wrapAround||(d.value=Ba({val:d.value,max:y.value,min:_.value})))}Co(()=>{_o(()=>z()),setTimeout(()=>z(),1e3),L(),ft(),window.addEventListener("resize",k,{passive:!0}),n("init")}),Ls(()=>{w&&clearTimeout(w),g&&clearInterval(g),window.removeEventListener("resize",k,{passive:!0})});let U=!1;const Z={x:0,y:0},fe={x:0,y:0},$=it({x:0,y:0}),ne=ce(!1),Oe=ce(!1),et=()=>{ne.value=!0},ye=()=>{ne.value=!1};function de(h){["INPUT","TEXTAREA","SELECT"].includes(h.target.tagName)||(U=h.type==="touchstart",U||h.preventDefault(),!(!U&&h.button!==0||Pe.value)&&(Z.x=U?h.touches[0].clientX:h.clientX,Z.y=U?h.touches[0].clientY:h.clientY,document.addEventListener(U?"touchmove":"mousemove",se,!0),document.addEventListener(U?"touchend":"mouseup",at,!0)))}const se=wv(h=>{Oe.value=!0,fe.x=U?h.touches[0].clientX:h.clientX,fe.y=U?h.touches[0].clientY:h.clientY;const v=fe.x-Z.x,S=fe.y-Z.y;$.y=S,$.x=v},c.throttle);function at(){const h=c.dir==="rtl"?-1:1,v=Math.sign($.x)*.4,S=Math.round($.x/s.value+v)*h;if(S&&!U){const E=O=>{O.stopPropagation(),window.removeEventListener("click",E,!0)};window.addEventListener("click",E,!0)}Ye(d.value-S),$.x=0,$.y=0,Oe.value=!1,document.removeEventListener(U?"touchmove":"mousemove",se,!0),document.removeEventListener(U?"touchend":"mouseup",at,!0)}function ft(){!c.autoplay||c.autoplay<=0||(g=setInterval(()=>{c.pauseAutoplayOnHover&&ne.value||dt()},c.autoplay))}function tt(){g&&(clearInterval(g),g=null),ft()}const Pe=ce(!1);function Ye(h){const v=c.wrapAround?h:Ba({val:h,max:y.value,min:_.value});d.value===v||Pe.value||(n("slide-start",{slidingToIndex:h,currentSlideIndex:d.value,prevSlideIndex:m.value,slidesCount:l.value}),Pe.value=!0,m.value=d.value,d.value=v,w=setTimeout(()=>{if(c.wrapAround){const S=eo({val:v,max:y.value,min:0});S!==d.value&&(d.value=S,n("loop",{currentSlideIndex:d.value,slidingToIndex:h}))}n("update:modelValue",d.value),n("slide-end",{currentSlideIndex:d.value,prevSlideIndex:m.value,slidesCount:l.value}),Pe.value=!1,tt()},c.transition))}function dt(){Ye(d.value+c.itemsToScroll)}function Vt(){Ye(d.value-c.itemsToScroll)}const Me={slideTo:Ye,next:dt,prev:Vt};rt("nav",Me),rt("isSliding",Pe);const C=Re(()=>_v({config:c,currentSlide:d.value,slidesCount:l.value}));rt("slidesToScroll",C);const N=Re(()=>{const h=c.dir==="rtl"?-1:1,v=C.value*s.value*h;return{transform:`translateX(${$.x-v}px)`,transition:`${Pe.value?c.transition:0}ms`,margin:c.wrapAround?`0 -${l.value*s.value}px`:"",width:"100%"}});function R(){T(),L(),j(),z(),tt()}Object.keys(Ic).forEach(h=>{["modelValue"].includes(h)||Mt(()=>t[h],R)}),Mt(()=>t.modelValue,h=>{h!==d.value&&Ye(Number(h))}),Mt(l,j),n("before-init"),T();const B={config:c,slidesCount:l,slideWidth:s,next:dt,prev:Vt,slideTo:Ye,currentSlide:d,maxSlide:y,minSlide:_,middleSlide:b};r({updateBreakpointsConfigs:L,updateSlidesData:j,updateSlideWidth:z,initDefaultConfigs:T,restartCarousel:R,slideTo:Ye,next:dt,prev:Vt,nav:Me,data:B});const oe=e.default||e.slides,ge=e.addons,p=it(B);return()=>{const h=ad(oe==null?void 0:oe(p)),v=(ge==null?void 0:ge(p))||[];h.forEach((x,A)=>x.props.index=A);let S=h;if(c.wrapAround){const x=h.map((P,I)=>Pt(P,{index:-h.length+I,isClone:!0,key:`clone-before-${I}`})),A=h.map((P,I)=>Pt(P,{index:h.length+I,isClone:!0,key:`clone-after-${I}`}));S=[...x,...h,...A]}a.value=h,l.value=Math.max(h.length,1);const E=Ne("ol",{class:"carousel__track",style:N.value,onMousedownCapture:c.mouseDrag?de:null,onTouchstartPassiveCapture:c.touchDrag?de:null},S),O=Ne("div",{class:"carousel__viewport"},E);return Ne("section",{ref:o,class:{carousel:!0,"is-sliding":Pe.value,"is-dragging":Oe.value,"is-hover":ne.value,"carousel--rtl":c.dir==="rtl"},dir:c.dir,"aria-label":c.i18n.ariaGallery,tabindex:"0",onMouseenter:et,onMouseleave:ye},[O,v,Ne(Ev)])}}}),Ua;(function(t){t.arrowUp="arrowUp",t.arrowDown="arrowDown",t.arrowRight="arrowRight",t.arrowLeft="arrowLeft"})(Ua||(Ua={}));const Iv={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"};function Tv(t){return t in Ua}const Ha=t=>{const e=me("config",it(Object.assign({},Le))),n=String(t.name),r=`icon${n.charAt(0).toUpperCase()+n.slice(1)}`;if(!n||typeof n!="string"||!Tv(n))return;const i=Iv[n],o=Ne("path",{d:i}),a=e.i18n[r]||t.title||n,s=Ne("title",a);return Ne("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img","aria-label":a},[s,o])};Ha.props={name:String,title:String};const Av=(t,{slots:e,attrs:n})=>{const{next:r,prev:i}=e||{},o=me("config",it(Object.assign({},Le))),a=me("maxSlide",ce(1)),s=me("minSlide",ce(1)),l=me("currentSlide",ce(1)),c=me("nav",{}),{dir:u,wrapAround:f,i18n:d}=o,m=u==="rtl",b=Ne("button",{type:"button",class:["carousel__prev",!f&&l.value<=s.value&&"carousel__prev--disabled",n==null?void 0:n.class],"aria-label":d.ariaPreviousSlide,onClick:c.prev},(i==null?void 0:i())||Ne(Ha,{name:m?"arrowRight":"arrowLeft"})),y=Ne("button",{type:"button",class:["carousel__next",!f&&l.value>=a.value&&"carousel__next--disabled",n==null?void 0:n.class],"aria-label":d.ariaNextSlide,onClick:c.next},(r==null?void 0:r())||Ne(Ha,{name:m?"arrowLeft":"arrowRight"}));return[b,y]},Ov=()=>{const t=me("config",it(Object.assign({},Le))),e=me("maxSlide",ce(1)),n=me("minSlide",ce(1)),r=me("currentSlide",ce(1)),i=me("nav",{}),o=s=>eo({val:r.value,max:e.value,min:0})===s,a=[];for(let s=n.value;s<e.value+1;s++){const l=Ne("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":o(s)},"aria-label":sd(t.i18n.ariaNavigateToSlide,{slideNumber:s+1}),onClick:()=>i.slideTo(s)}),c=Ne("li",{class:"carousel__pagination-item",key:s},l);a.push(c)}return Ne("ol",{class:"carousel__pagination"},a)};var Pv=fr({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(t,{slots:e}){const n=me("config",it(Object.assign({},Le))),r=me("currentSlide",ce(0)),i=me("slidesToScroll",ce(0)),o=me("isSliding",ce(!1)),a=()=>t.index===r.value,s=()=>t.index===r.value-1,l=()=>t.index===r.value+1,c=()=>{const u=Math.floor(i.value),f=Math.ceil(i.value+n.itemsToShow-1);return t.index>=u&&t.index<=f};return()=>{var u;return Ne("li",{style:{width:`${100/n.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":t.isClone,"carousel__slide--visible":c(),"carousel__slide--active":a(),"carousel__slide--prev":s(),"carousel__slide--next":l(),"carousel__slide--sliding":o.value},"aria-hidden":!c()},(u=e.default)===null||u===void 0?void 0:u.call(e))}}});function ea(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=Hs(t))||e&&t&&typeof t.length=="number"){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(c){throw c},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,a=!1,s;return{s:function(){n=n.call(t)},n:function(){var c=n.next();return o=c.done,c},e:function(c){a=!0,s=c},f:function(){try{!o&&n.return!=null&&n.return()}finally{if(a)throw s}}}}function xv(t){return Lv(t)||Rv(t)||Hs(t)||kv()}function kv(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rv(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Lv(t){if(Array.isArray(t))return Va(t)}function Or(t){"@babel/helpers - typeof";return Or=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Or(t)}function ta(t,e){return Mv(t)||Nv(t,e)||Hs(t,e)||$v()}function $v(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Hs(t,e){if(t){if(typeof t=="string")return Va(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Va(t,e)}}function Va(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Nv(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,i,o,a,s=[],l=!0,c=!1;try{if(o=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(s.push(r.value),s.length!==e);l=!0);}catch(u){c=!0,i=u}finally{try{if(!l&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return s}}function Mv(t){if(Array.isArray(t))return t}var X={innerWidth:function(e){if(e){var n=e.offsetWidth,r=getComputedStyle(e);return n+=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),n}return 0},width:function(e){if(e){var n=e.offsetWidth,r=getComputedStyle(e);return n-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),n}return 0},getWindowScrollTop:function(){var e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)},getWindowScrollLeft:function(){var e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)},getOuterWidth:function(e,n){if(e){var r=e.offsetWidth;if(n){var i=getComputedStyle(e);r+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return r}return 0},getOuterHeight:function(e,n){if(e){var r=e.offsetHeight;if(n){var i=getComputedStyle(e);r+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return r}return 0},getClientHeight:function(e,n){if(e){var r=e.clientHeight;if(n){var i=getComputedStyle(e);r+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return r}return 0},getViewport:function(){var e=window,n=document,r=n.documentElement,i=n.getElementsByTagName("body")[0],o=e.innerWidth||r.clientWidth||i.clientWidth,a=e.innerHeight||r.clientHeight||i.clientHeight;return{width:o,height:a}},getOffset:function(e){if(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}},index:function(e){if(e)for(var n,r=(n=this.getParentNode(e))===null||n===void 0?void 0:n.childNodes,i=0,o=0;o<r.length;o++){if(r[o]===e)return i;r[o].nodeType===1&&i++}return-1},addMultipleClasses:function(e,n){var r=this;e&&n&&[n].flat().filter(Boolean).forEach(function(i){return i.split(" ").forEach(function(o){return r.addClass(e,o)})})},removeMultipleClasses:function(e,n){var r=this;e&&n&&[n].flat().filter(Boolean).forEach(function(i){return i.split(" ").forEach(function(o){return r.removeClass(e,o)})})},addClass:function(e,n){e&&n&&!this.hasClass(e,n)&&(e.classList?e.classList.add(n):e.className+=" "+n)},removeClass:function(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))},hasClass:function(e,n){return e?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1},addStyles:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};e&&Object.entries(n).forEach(function(r){var i=ta(r,2),o=i[0],a=i[1];return e.style[o]=a})},find:function(e,n){return this.isElement(e)?e.querySelectorAll(n):[]},findSingle:function(e,n){return this.isElement(e)?e.querySelector(n):null},createElement:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e){var r=document.createElement(e);this.setAttributes(r,n);for(var i=arguments.length,o=new Array(i>2?i-2:0),a=2;a<i;a++)o[a-2]=arguments[a];return r.append.apply(r,o),r}},setAttribute:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0;this.isElement(e)&&r!==null&&r!==void 0&&e.setAttribute(n,r)},setAttributes:function(e){var n=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.isElement(e)){var i=function o(a,s){var l,c,u=e!=null&&(l=e.$attrs)!==null&&l!==void 0&&l[a]?[e==null||(c=e.$attrs)===null||c===void 0?void 0:c[a]]:[];return[s].flat().reduce(function(f,d){if(d!=null){var m=Or(d);if(m==="string"||m==="number")f.push(d);else if(m==="object"){var b=Array.isArray(d)?o(a,d):Object.entries(d).map(function(y){var _=ta(y,2),g=_[0],w=_[1];return a==="style"&&(w||w===0)?"".concat(g.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),":").concat(w):w?g:void 0});f=b.length?f.concat(b.filter(function(y){return!!y})):f}}return f},u)};Object.entries(r).forEach(function(o){var a=ta(o,2),s=a[0],l=a[1];if(l!=null){var c=s.match(/^on(.+)/);c?e.addEventListener(c[1].toLowerCase(),l):s==="p-bind"?n.setAttributes(e,l):(l=s==="class"?xv(new Set(i("class",l))).join(" ").trim():s==="style"?i("style",l).join(";").trim():l,(e.$attrs=e.$attrs||{})&&(e.$attrs[s]=l),e.setAttribute(s,l))}})}},getAttribute:function(e,n){if(this.isElement(e)){var r=e.getAttribute(n);return isNaN(r)?r==="true"||r==="false"?r==="true":r:+r}},isAttributeEquals:function(e,n,r){return this.isElement(e)?this.getAttribute(e,n)===r:!1},isAttributeNotEquals:function(e,n,r){return!this.isAttributeEquals(e,n,r)},getHeight:function(e){if(e){var n=e.offsetHeight,r=getComputedStyle(e);return n-=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),n}return 0},getWidth:function(e){if(e){var n=e.offsetWidth,r=getComputedStyle(e);return n-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight)+parseFloat(r.borderLeftWidth)+parseFloat(r.borderRightWidth),n}return 0},absolutePosition:function(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(e){var i=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),o=i.height,a=i.width,s=n.offsetHeight,l=n.offsetWidth,c=n.getBoundingClientRect(),u=this.getWindowScrollTop(),f=this.getWindowScrollLeft(),d=this.getViewport(),m,b,y="top";c.top+s+o>d.height?(m=c.top+u-o,y="bottom",m<0&&(m=u)):m=s+c.top+u,c.left+a>d.width?b=Math.max(0,c.left+f+l-a):b=c.left+f,e.style.top=m+"px",e.style.left=b+"px",e.style.transformOrigin=y,r&&(e.style.marginTop=y==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}},relativePosition:function(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(e){var i=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),o=n.offsetHeight,a=n.getBoundingClientRect(),s=this.getViewport(),l,c,u="top";a.top+o+i.height>s.height?(l=-1*i.height,u="bottom",a.top+l<0&&(l=-1*a.top)):l=o,i.width>s.width?c=a.left*-1:a.left+i.width>s.width?c=(a.left+i.width-s.width)*-1:c=0,e.style.top=l+"px",e.style.left=c+"px",e.style.transformOrigin=u,r&&(e.style.marginTop=u==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}},nestedPosition:function(e,n){if(e){var r=e.parentElement,i=this.getOffset(r),o=this.getViewport(),a=e.offsetParent?e.offsetWidth:this.getHiddenElementOuterWidth(e),s=this.getOuterWidth(r.children[0]),l;parseInt(i.left,10)+s+a>o.width-this.calculateScrollbarWidth()?parseInt(i.left,10)<a?n%2===1?l=parseInt(i.left,10)?"-"+parseInt(i.left,10)+"px":"100%":n%2===0&&(l=o.width-a-this.calculateScrollbarWidth()+"px"):l="-100%":l="100%",e.style.top="0px",e.style.left=l}},getParentNode:function(e){var n=e==null?void 0:e.parentNode;return n&&n instanceof ShadowRoot&&n.host&&(n=n.host),n},getParents:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],r=this.getParentNode(e);return r===null?n:this.getParents(r,n.concat([r]))},getScrollableParents:function(e){var n=[];if(e){var r=this.getParents(e),i=/(auto|scroll)/,o=function(_){try{var g=window.getComputedStyle(_,null);return i.test(g.getPropertyValue("overflow"))||i.test(g.getPropertyValue("overflowX"))||i.test(g.getPropertyValue("overflowY"))}catch{return!1}},a=ea(r),s;try{for(a.s();!(s=a.n()).done;){var l=s.value,c=l.nodeType===1&&l.dataset.scrollselectors;if(c){var u=c.split(","),f=ea(u),d;try{for(f.s();!(d=f.n()).done;){var m=d.value,b=this.findSingle(l,m);b&&o(b)&&n.push(b)}}catch(y){f.e(y)}finally{f.f()}}l.nodeType!==9&&o(l)&&n.push(l)}}catch(y){a.e(y)}finally{a.f()}}return n},getHiddenElementOuterHeight:function(e){if(e){e.style.visibility="hidden",e.style.display="block";var n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}return 0},getHiddenElementOuterWidth:function(e){if(e){e.style.visibility="hidden",e.style.display="block";var n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}return 0},getHiddenElementDimensions:function(e){if(e){var n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}return 0},fadeIn:function(e,n){if(e){e.style.opacity=0;var r=+new Date,i=0,o=function a(){i=+e.style.opacity+(new Date().getTime()-r)/n,e.style.opacity=i,r=+new Date,+i<1&&(window.requestAnimationFrame&&requestAnimationFrame(a)||setTimeout(a,16))};o()}},fadeOut:function(e,n){if(e)var r=1,i=50,o=n,a=i/o,s=setInterval(function(){r-=a,r<=0&&(r=0,clearInterval(s)),e.style.opacity=r},i)},getUserAgent:function(){return navigator.userAgent},appendChild:function(e,n){if(this.isElement(n))n.appendChild(e);else if(n.el&&n.elElement)n.elElement.appendChild(e);else throw new Error("Cannot append "+n+" to "+e)},isElement:function(e){return(typeof HTMLElement>"u"?"undefined":Or(HTMLElement))==="object"?e instanceof HTMLElement:e&&Or(e)==="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"},scrollInView:function(e,n){var r=getComputedStyle(e).getPropertyValue("borderTopWidth"),i=r?parseFloat(r):0,o=getComputedStyle(e).getPropertyValue("paddingTop"),a=o?parseFloat(o):0,s=e.getBoundingClientRect(),l=n.getBoundingClientRect(),c=l.top+document.body.scrollTop-(s.top+document.body.scrollTop)-i-a,u=e.scrollTop,f=e.clientHeight,d=this.getOuterHeight(n);c<0?e.scrollTop=u+c:c+d>f&&(e.scrollTop=u+c-f+d)},clearSelection:function(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}},getSelection:function(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null},calculateScrollbarWidth:function(){if(this.calculatedScrollbarWidth!=null)return this.calculatedScrollbarWidth;var e=document.createElement("div");this.addStyles(e,{width:"100px",height:"100px",overflow:"scroll",position:"absolute",top:"-9999px"}),document.body.appendChild(e);var n=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n},calculateBodyScrollbarWidth:function(){return window.innerWidth-document.documentElement.offsetWidth},getBrowser:function(){if(!this.browser){var e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser},resolveUserAgent:function(){var e=navigator.userAgent.toLowerCase(),n=/(chrome)[ ]([\w.]+)/.exec(e)||/(webkit)[ ]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ ]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}},isVisible:function(e){return e&&e.offsetParent!=null},invokeElementMethod:function(e,n,r){e[n].apply(e,r)},isExist:function(e){return!!(e!==null&&typeof e<"u"&&e.nodeName&&this.getParentNode(e))},isClient:function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)},focus:function(e,n){e&&document.activeElement!==e&&e.focus(n)},isFocusableElement:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return this.isElement(e)?e.matches('button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(n,`,
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n)):!1},getFocusableElements:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=this.find(e,'button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(n,`,
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n)),i=[],o=ea(r),a;try{for(o.s();!(a=o.n()).done;){var s=a.value;getComputedStyle(s).display!="none"&&getComputedStyle(s).visibility!="hidden"&&i.push(s)}}catch(l){o.e(l)}finally{o.f()}return i},getFirstFocusableElement:function(e,n){var r=this.getFocusableElements(e,n);return r.length>0?r[0]:null},getLastFocusableElement:function(e,n){var r=this.getFocusableElements(e,n);return r.length>0?r[r.length-1]:null},getNextFocusableElement:function(e,n,r){var i=this.getFocusableElements(e,r),o=i.length>0?i.findIndex(function(s){return s===n}):-1,a=o>-1&&i.length>=o+1?o+1:-1;return a>-1?i[a]:null},getPreviousElementSibling:function(e,n){for(var r=e.previousElementSibling;r;){if(r.matches(n))return r;r=r.previousElementSibling}return null},getNextElementSibling:function(e,n){for(var r=e.nextElementSibling;r;){if(r.matches(n))return r;r=r.nextElementSibling}return null},isClickable:function(e){if(e){var n=e.nodeName,r=e.parentElement&&e.parentElement.nodeName;return n==="INPUT"||n==="TEXTAREA"||n==="BUTTON"||n==="A"||r==="INPUT"||r==="TEXTAREA"||r==="BUTTON"||r==="A"||!!e.closest(".p-button, .p-checkbox, .p-radiobutton")}return!1},applyStyle:function(e,n){if(typeof n=="string")e.style.cssText=n;else for(var r in n)e.style[r]=n[r]},isIOS:function(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream},isAndroid:function(){return/(android)/i.test(navigator.userAgent)},isTouchDevice:function(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0},hasCSSAnimation:function(e){if(e){var n=getComputedStyle(e),r=parseFloat(n.getPropertyValue("animation-duration")||"0");return r>0}return!1},hasCSSTransition:function(e){if(e){var n=getComputedStyle(e),r=parseFloat(n.getPropertyValue("transition-duration")||"0");return r>0}return!1},exportCSV:function(e,n){var r=new Blob([e],{type:"application/csv;charset=utf-8;"});if(window.navigator.msSaveOrOpenBlob)navigator.msSaveOrOpenBlob(r,n+".csv");else{var i=document.createElement("a");i.download!==void 0?(i.setAttribute("href",URL.createObjectURL(r)),i.setAttribute("download",n+".csv"),i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i)):(e="data:text/csv;charset=utf-8,"+e,window.open(encodeURI(e)))}},blockBodyScroll:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"p-overflow-hidden";document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)},unblockBodyScroll:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"p-overflow-hidden";document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}};function Tc(t,e){return jv(t)||Fv(t,e)||Vs(t,e)||Dv()}function Dv(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fv(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,i,o,a,s=[],l=!0,c=!1;try{if(o=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(s.push(r.value),s.length!==e);l=!0);}catch(u){c=!0,i=u}finally{try{if(!l&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return s}}function jv(t){if(Array.isArray(t))return t}function Ac(t){return Hv(t)||Uv(t)||Vs(t)||Bv()}function Bv(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Uv(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Hv(t){if(Array.isArray(t))return za(t)}function na(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=Vs(t))||e&&t&&typeof t.length=="number"){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(c){throw c},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,a=!1,s;return{s:function(){n=n.call(t)},n:function(){var c=n.next();return o=c.done,c},e:function(c){a=!0,s=c},f:function(){try{!o&&n.return!=null&&n.return()}finally{if(a)throw s}}}}function Vs(t,e){if(t){if(typeof t=="string")return za(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return za(t,e)}}function za(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Pr(t){"@babel/helpers - typeof";return Pr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Pr(t)}var te={equals:function(e,n,r){return r?this.resolveFieldData(e,r)===this.resolveFieldData(n,r):this.deepEquals(e,n)},deepEquals:function(e,n){if(e===n)return!0;if(e&&n&&Pr(e)=="object"&&Pr(n)=="object"){var r=Array.isArray(e),i=Array.isArray(n),o,a,s;if(r&&i){if(a=e.length,a!=n.length)return!1;for(o=a;o--!==0;)if(!this.deepEquals(e[o],n[o]))return!1;return!0}if(r!=i)return!1;var l=e instanceof Date,c=n instanceof Date;if(l!=c)return!1;if(l&&c)return e.getTime()==n.getTime();var u=e instanceof RegExp,f=n instanceof RegExp;if(u!=f)return!1;if(u&&f)return e.toString()==n.toString();var d=Object.keys(e);if(a=d.length,a!==Object.keys(n).length)return!1;for(o=a;o--!==0;)if(!Object.prototype.hasOwnProperty.call(n,d[o]))return!1;for(o=a;o--!==0;)if(s=d[o],!this.deepEquals(e[s],n[s]))return!1;return!0}return e!==e&&n!==n},resolveFieldData:function(e,n){if(!e||!n)return null;try{var r=e[n];if(this.isNotEmpty(r))return r}catch{}if(Object.keys(e).length){if(this.isFunction(n))return n(e);if(n.indexOf(".")===-1)return e[n];for(var i=n.split("."),o=e,a=0,s=i.length;a<s;++a){if(o==null)return null;o=o[i[a]]}return o}return null},getItemValue:function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return this.isFunction(e)?e.apply(void 0,r):e},filter:function(e,n,r){var i=[];if(e){var o=na(e),a;try{for(o.s();!(a=o.n()).done;){var s=a.value,l=na(n),c;try{for(l.s();!(c=l.n()).done;){var u=c.value;if(String(this.resolveFieldData(s,u)).toLowerCase().indexOf(r.toLowerCase())>-1){i.push(s);break}}}catch(f){l.e(f)}finally{l.f()}}}catch(f){o.e(f)}finally{o.f()}}return i},reorderArray:function(e,n,r){e&&n!==r&&(r>=e.length&&(r%=e.length,n%=e.length),e.splice(r,0,e.splice(n,1)[0]))},findIndexInList:function(e,n){var r=-1;if(n){for(var i=0;i<n.length;i++)if(n[i]===e){r=i;break}}return r},contains:function(e,n){if(e!=null&&n&&n.length){var r=na(n),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;if(this.equals(e,o))return!0}}catch(a){r.e(a)}finally{r.f()}}return!1},insertIntoOrderedArray:function(e,n,r,i){if(r.length>0){for(var o=!1,a=0;a<r.length;a++){var s=this.findIndexInList(r[a],i);if(s>n){r.splice(a,0,e),o=!0;break}}o||r.push(e)}else r.push(e)},removeAccents:function(e){return e&&e.search(/[\xC0-\xFF]/g)>-1&&(e=e.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),e},getVNodeProp:function(e,n){if(e){var r=e.props;if(r){var i=n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),o=Object.prototype.hasOwnProperty.call(r,i)?i:n;return e.type.extends.props[n].type===Boolean&&r[o]===""?!0:r[o]}}return null},toFlatCase:function(e){return this.isString(e)?e.replace(/(-|_)/g,"").toLowerCase():e},toKebabCase:function(e){return this.isString(e)?e.replace(/(_)/g,"-").replace(/[A-Z]/g,function(n,r){return r===0?n:"-"+n.toLowerCase()}).toLowerCase():e},toCapitalCase:function(e){return this.isString(e,{empty:!1})?e[0].toUpperCase()+e.slice(1):e},isEmpty:function(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&Pr(e)==="object"&&Object.keys(e).length===0},isNotEmpty:function(e){return!this.isEmpty(e)},isFunction:function(e){return!!(e&&e.constructor&&e.call&&e.apply)},isObject:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e instanceof Object&&e.constructor===Object&&(n||Object.keys(e).length!==0)},isDate:function(e){return e instanceof Date&&e.constructor===Date},isArray:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return Array.isArray(e)&&(n||e.length!==0)},isString:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return typeof e=="string"&&(n||e!=="")},isPrintableCharacter:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return this.isNotEmpty(e)&&e.length===1&&e.match(/\S| /)},findLast:function(e,n){var r;if(this.isNotEmpty(e))try{r=e.findLast(n)}catch{r=Ac(e).reverse().find(n)}return r},findLastIndex:function(e,n){var r=-1;if(this.isNotEmpty(e))try{r=e.findLastIndex(n)}catch{r=e.lastIndexOf(Ac(e).reverse().find(n))}return r},sort:function(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,i=arguments.length>3?arguments[3]:void 0,o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1,a=this.compare(e,n,i,r),s=r;return(this.isEmpty(e)||this.isEmpty(n))&&(s=o===1?r:o),s*a},compare:function(e,n,r){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,o=-1,a=this.isEmpty(e),s=this.isEmpty(n);return a&&s?o=0:a?o=i:s?o=-i:typeof e=="string"&&typeof n=="string"?o=r(e,n):o=e<n?-1:e>n?1:0,o},localeComparator:function(){return new Intl.Collator(void 0,{numeric:!0}).compare},nestedKeys:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return Object.entries(n).reduce(function(i,o){var a=Tc(o,2),s=a[0],l=a[1],c=r?"".concat(r,".").concat(s):s;return e.isObject(l)?i=i.concat(e.nestedKeys(l,c)):i.push(c),i},[])},stringify:function(e){var n=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=" ".repeat(i),a=" ".repeat(i+r);return this.isArray(e)?"["+e.map(function(s){return n.stringify(s,r,i+r)}).join(", ")+"]":this.isDate(e)?e.toISOString():this.isFunction(e)?e.toString():this.isObject(e)?`{
`+Object.entries(e).map(function(s){var l=Tc(s,2),c=l[0],u=l[1];return"".concat(a).concat(c,": ").concat(n.stringify(u,r,i+r))}).join(`,
`)+`
`.concat(o)+"}":JSON.stringify(e)}},Oc=0;function Wa(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pv_id_";return Oc++,"".concat(t).concat(Oc)}function Vv(t){return Gv(t)||Kv(t)||Wv(t)||zv()}function zv(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wv(t,e){if(t){if(typeof t=="string")return Ka(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ka(t,e)}}function Kv(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Gv(t){if(Array.isArray(t))return Ka(t)}function Ka(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function qv(){var t=[],e=function(s,l){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:999,u=i(s,l,c),f=u.value+(u.key===s?0:c)+1;return t.push({key:s,value:f}),f},n=function(s){t=t.filter(function(l){return l.value!==s})},r=function(s,l){return i(s,l).value},i=function(s,l){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;return Vv(t).reverse().find(function(u){return l?!0:u.key===s})||{key:s,value:c}},o=function(s){return s&&parseInt(s.style.zIndex,10)||0};return{get:o,set:function(s,l,c){l&&(l.style.zIndex=String(e(s,!0,c)))},clear:function(s){s&&(n(o(s)),s.style.zIndex="")},getCurrent:function(s){return r(s,!0)}}}var ra=qv();function jr(t){"@babel/helpers - typeof";return jr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},jr(t)}function Pc(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function xc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Pc(Object(n),!0).forEach(function(r){Yv(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Pc(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Yv(t,e,n){return e=Xv(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Xv(t){var e=Jv(t,"string");return jr(e)=="symbol"?e:String(e)}function Jv(t,e){if(jr(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(jr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Zv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;Kf()?Co(t):e?t():_o(t)}var Qv=0;function ld(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=ce(!1),r=ce(t),i=ce(null),o=X.isClient()?window.document:void 0,a=e.document,s=a===void 0?o:a,l=e.immediate,c=l===void 0?!0:l,u=e.manual,f=u===void 0?!1:u,d=e.name,m=d===void 0?"style_".concat(++Qv):d,b=e.id,y=b===void 0?void 0:b,_=e.media,g=_===void 0?void 0:_,w=e.nonce,T=w===void 0?void 0:w,L=e.props,F=L===void 0?{}:L,k=function(){},z=function(Z){var fe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(s){var $=xc(xc({},F),fe),ne=$.name||m,Oe=$.id||y,et=$.nonce||T;i.value=s.querySelector('style[data-primevue-style-id="'.concat(ne,'"]'))||s.getElementById(Oe)||s.createElement("style"),i.value.isConnected||(r.value=Z||t,X.setAttributes(i.value,{type:"text/css",id:Oe,media:g,nonce:et}),s.head.appendChild(i.value),X.setAttribute(i.value,"data-primevue-style-id",m),X.setAttributes(i.value,$)),!n.value&&(k=Mt(r,function(ye){i.value.textContent=ye},{immediate:!0}),n.value=!0)}},j=function(){!s||!n.value||(k(),X.isExist(i.value)&&s.head.removeChild(i.value),n.value=!1)};return c&&!f&&Zv(z),{id:y,name:m,css:r,unload:j,load:z,isLoaded:Ts(n)}}function Br(t){"@babel/helpers - typeof";return Br=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Br(t)}function e1(t,e){return i1(t)||r1(t,e)||n1(t,e)||t1()}function t1(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function n1(t,e){if(t){if(typeof t=="string")return kc(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return kc(t,e)}}function kc(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function r1(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,i,o,a,s=[],l=!0,c=!1;try{if(o=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(s.push(r.value),s.length!==e);l=!0);}catch(u){c=!0,i=u}finally{try{if(!l&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return s}}function i1(t){if(Array.isArray(t))return t}function Rc(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function ia(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Rc(Object(n),!0).forEach(function(r){o1(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Rc(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function o1(t,e,n){return e=a1(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a1(t){var e=s1(t,"string");return Br(e)=="symbol"?e:String(e)}function s1(t,e){if(Br(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Br(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var l1=`
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
`,c1={},u1={},xt={name:"base",css:l1,classes:c1,inlineStyles:u1,loadStyle:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.css?ld(this.css,ia({name:this.name},e)):{}},getStyleSheet:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.css){var r=Object.entries(n).reduce(function(i,o){var a=e1(o,2),s=a[0],l=a[1];return i.push("".concat(s,'="').concat(l,'"'))&&i},[]).join(" ");return'<style type="text/css" data-primevue-style-id="'.concat(this.name,'" ').concat(r,">").concat(this.css).concat(e,"</style>")}return""},extend:function(e){return ia(ia({},this),{},{css:void 0},e)}};function Ur(t){"@babel/helpers - typeof";return Ur=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ur(t)}function Lc(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function f1(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Lc(Object(n),!0).forEach(function(r){d1(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Lc(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function d1(t,e,n){return e=h1(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function h1(t){var e=p1(t,"string");return Ur(e)=="symbol"?e:String(e)}function p1(t,e){if(Ur(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Ur(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var m1=`
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
`,g1=`
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
`,v1=`
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
`.concat(m1,`
`).concat(g1,`
}
`),oa=xt.extend({name:"common",css:v1,loadGlobalStyle:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return ld(e,f1({name:"global"},n))}});function Hr(t){"@babel/helpers - typeof";return Hr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Hr(t)}function $c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Ie(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?$c(Object(n),!0).forEach(function(r){Ga(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$c(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ga(t,e,n){return e=b1(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b1(t){var e=y1(t,"string");return Hr(e)=="symbol"?e:String(e)}function y1(t,e){if(Hr(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Hr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var ai={name:"BaseComponent",props:{pt:{type:Object,default:void 0},ptOptions:{type:Object,default:void 0},unstyled:{type:Boolean,default:void 0}},inject:{$parentInstance:{default:void 0}},watch:{isUnstyled:{immediate:!0,handler:function(e){if(!e){var n,r;oa.loadStyle({nonce:(n=this.$config)===null||n===void 0||(n=n.csp)===null||n===void 0?void 0:n.nonce}),this.$options.style&&this.$style.loadStyle({nonce:(r=this.$config)===null||r===void 0||(r=r.csp)===null||r===void 0?void 0:r.nonce})}}}},beforeCreate:function(){var e,n,r,i,o,a,s,l,c,u,f,d=(e=this.pt)===null||e===void 0?void 0:e._usept,m=d?(n=this.pt)===null||n===void 0||(n=n.originalValue)===null||n===void 0?void 0:n[this.$.type.name]:void 0,b=d?(r=this.pt)===null||r===void 0||(r=r.value)===null||r===void 0?void 0:r[this.$.type.name]:this.pt;(i=b||m)===null||i===void 0||(i=i.hooks)===null||i===void 0||(o=i.onBeforeCreate)===null||o===void 0||o.call(i);var y=(a=this.$config)===null||a===void 0||(a=a.pt)===null||a===void 0?void 0:a._usept,_=y?(s=this.$primevue)===null||s===void 0||(s=s.config)===null||s===void 0||(s=s.pt)===null||s===void 0?void 0:s.originalValue:void 0,g=y?(l=this.$primevue)===null||l===void 0||(l=l.config)===null||l===void 0||(l=l.pt)===null||l===void 0?void 0:l.value:(c=this.$primevue)===null||c===void 0||(c=c.config)===null||c===void 0?void 0:c.pt;(u=g||_)===null||u===void 0||(u=u[this.$.type.name])===null||u===void 0||(u=u.hooks)===null||u===void 0||(f=u.onBeforeCreate)===null||f===void 0||f.call(u)},created:function(){this._hook("onCreated")},beforeMount:function(){var e;xt.loadStyle({nonce:(e=this.$config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce}),this._loadGlobalStyles(),this._hook("onBeforeMount")},mounted:function(){this._hook("onMounted")},beforeUpdate:function(){this._hook("onBeforeUpdate")},updated:function(){this._hook("onUpdated")},beforeUnmount:function(){this._hook("onBeforeUnmount")},unmounted:function(){this._hook("onUnmounted")},methods:{_hook:function(e){if(!this.$options.hostName){var n=this._usePT(this._getPT(this.pt,this.$.type.name),this._getOptionValue,"hooks.".concat(e)),r=this._useDefaultPT(this._getOptionValue,"hooks.".concat(e));n==null||n(),r==null||r()}},_loadGlobalStyles:function(){var e,n=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);te.isNotEmpty(n)&&oa.loadGlobalStyle(n,{nonce:(e=this.$config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce})},_getHostInstance:function(e){return e?this.$options.hostName?e.$.type.name===this.$options.hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0},_getPropValue:function(e){var n;return this[e]||((n=this._getHostInstance(this))===null||n===void 0?void 0:n[e])},_getOptionValue:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=te.toFlatCase(n).split("."),o=i.shift();return o?te.isObject(e)?this._getOptionValue(te.getItemValue(e[Object.keys(e).find(function(a){return te.toFlatCase(a)===o})||""],r),i.join("."),r):void 0:te.getItemValue(e,r)},_getPTValue:function(){var e,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,a="data-pc-",s=/./g.test(r)&&!!i[r.split(".")[0]],l=this._getPropValue("ptOptions")||((e=this.$config)===null||e===void 0?void 0:e.ptOptions)||{},c=l.mergeSections,u=c===void 0?!0:c,f=l.mergeProps,d=f===void 0?!1:f,m=o?s?this._useGlobalPT(this._getPTClassValue,r,i):this._useDefaultPT(this._getPTClassValue,r,i):void 0,b=s?void 0:this._usePT(this._getPT(n,this.$name),this._getPTClassValue,r,Ie(Ie({},i),{},{global:m||{}})),y=r!=="transition"&&Ie(Ie({},r==="root"&&Ga({},"".concat(a,"name"),te.toFlatCase(this.$.type.name))),{},Ga({},"".concat(a,"section"),te.toFlatCase(r)));return u||!u&&b?d?ie(m,b,y):Ie(Ie(Ie({},m),b),y):Ie(Ie({},b),y)},_getPTClassValue:function(){var e=this._getOptionValue.apply(this,arguments);return te.isString(e)||te.isArray(e)?{class:e}:e},_getPT:function(e){var n=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2?arguments[2]:void 0,o=function(s){var l,c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=i?i(s):s,f=te.toFlatCase(r),d=te.toFlatCase(n.$name);return(l=c?f!==d?u==null?void 0:u[f]:void 0:u==null?void 0:u[f])!==null&&l!==void 0?l:u};return e!=null&&e.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:o(e.originalValue),value:o(e.value)}:o(e,!0)},_usePT:function(e,n,r,i){var o=function(y){return n(y,r,i)};if(e!=null&&e.hasOwnProperty("_usept")){var a,s=e._usept||((a=this.$config)===null||a===void 0?void 0:a.ptOptions)||{},l=s.mergeSections,c=l===void 0?!0:l,u=s.mergeProps,f=u===void 0?!1:u,d=o(e.originalValue),m=o(e.value);return d===void 0&&m===void 0?void 0:te.isString(m)?m:te.isString(d)?d:c||!c&&m?f?ie(d,m):Ie(Ie({},d),m):m}return o(e)},_useGlobalPT:function(e,n,r){return this._usePT(this.globalPT,e,n,r)},_useDefaultPT:function(e,n,r){return this._usePT(this.defaultPT,e,n,r)},ptm:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this._getPTValue(this.pt,e,Ie(Ie({},this.$params),n))},ptmo:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this._getPTValue(e,n,Ie({instance:this},r),!1)},cx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.isUnstyled?void 0:this._getOptionValue(this.$style.classes,e,Ie(Ie({},this.$params),n))},sx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(n){var i=this._getOptionValue(this.$style.inlineStyles,e,Ie(Ie({},this.$params),r)),o=this._getOptionValue(oa.inlineStyles,e,Ie(Ie({},this.$params),r));return[o,i]}}},computed:{globalPT:function(){var e,n=this;return this._getPT((e=this.$config)===null||e===void 0?void 0:e.pt,void 0,function(r){return te.getItemValue(r,{instance:n})})},defaultPT:function(){var e,n=this;return this._getPT((e=this.$config)===null||e===void 0?void 0:e.pt,void 0,function(r){return n._getOptionValue(r,n.$name,Ie({},n.$params))||te.getItemValue(r,Ie({},n.$params))})},isUnstyled:function(){var e;return this.unstyled!==void 0?this.unstyled:(e=this.$config)===null||e===void 0?void 0:e.unstyled},$params:function(){var e=this._getHostInstance(this)||this.$parent;return{instance:this,props:this.$props,state:this.$data,attrs:this.$attrs,parent:{instance:e,props:e==null?void 0:e.$props,state:e==null?void 0:e.$data,attrs:e==null?void 0:e.$attrs},parentInstance:e}},$style:function(){return Ie(Ie({classes:void 0,inlineStyles:void 0,loadStyle:function(){},loadCustomStyle:function(){}},(this._getHostInstance(this)||{}).$style),this.$options.style)},$config:function(){var e;return(e=this.$primevue)===null||e===void 0?void 0:e.config},$name:function(){return this.$options.hostName||this.$.type.name}}},_1={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},w1=xt.extend({name:"card",classes:_1}),S1={name:"BaseCard",extends:ai,style:w1},cd={name:"Card",extends:S1};function E1(t,e,n,r,i,o){return J(),ae("div",ie({class:t.cx("root")},t.ptm("root"),{"data-pc-name":"card"}),[t.$slots.header?(J(),ae("div",ie({key:0,class:t.cx("header")},t.ptm("header")),[Ve(t.$slots,"header")],16)):$e("",!0),V("div",ie({class:t.cx("body")},t.ptm("body")),[t.$slots.title||t.$slots.subtitle?(J(),ae("div",ie({key:0,class:t.cx("caption")},t.ptm("caption")),[t.$slots.title?(J(),ae("div",ie({key:0,class:t.cx("title")},t.ptm("title")),[Ve(t.$slots,"title")],16)):$e("",!0),t.$slots.subtitle?(J(),ae("div",ie({key:1,class:t.cx("subtitle")},t.ptm("subtitle")),[Ve(t.$slots,"subtitle")],16)):$e("",!0)],16)):$e("",!0),V("div",ie({class:t.cx("content")},t.ptm("content")),[Ve(t.$slots,"content")],16),t.$slots.footer?(J(),ae("div",ie({key:1,class:t.cx("footer")},t.ptm("footer")),[Ve(t.$slots,"footer")],16)):$e("",!0)],16)],16)}cd.render=E1;var C1=`
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
`,I1={root:function(e){var n=e.props,r=e.instance;return["p-badge p-component",{"p-badge-no-gutter":te.isNotEmpty(n.value)&&String(n.value).length===1,"p-badge-dot":te.isEmpty(n.value)&&!r.$slots.default,"p-badge-lg":n.size==="large","p-badge-xl":n.size==="xlarge","p-badge-info":n.severity==="info","p-badge-success":n.severity==="success","p-badge-warning":n.severity==="warning","p-badge-danger":n.severity==="danger"}]}},T1=xt.extend({name:"badge",css:C1,classes:I1}),A1={name:"BaseBadge",extends:ai,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},style:T1,provide:function(){return{$parentInstance:this}}},ud={name:"Badge",extends:A1};function O1(t,e,n,r,i,o){return J(),ae("span",ie({class:t.cx("root")},t.ptm("root"),{"data-pc-name":"badge"}),[Ve(t.$slots,"default",{},function(){return[un(Et(t.value),1)]})],16)}ud.render=O1;var P1=`
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
`,x1=xt.extend({name:"baseicon",css:P1});function Vr(t){"@babel/helpers - typeof";return Vr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Vr(t)}function Nc(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Mc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Nc(Object(n),!0).forEach(function(r){k1(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Nc(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function k1(t,e,n){return e=R1(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function R1(t){var e=L1(t,"string");return Vr(e)=="symbol"?e:String(e)}function L1(t,e){if(Vr(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Vr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var ko={name:"BaseIcon",extends:ai,props:{label:{type:String,default:void 0},spin:{type:Boolean,default:!1}},style:x1,methods:{pti:function(){var e=te.isEmpty(this.label);return Mc(Mc({},!this.isUnstyled&&{class:["p-icon",{"p-icon-spin":this.spin}]}),{},{role:e?void 0:"img","aria-label":e?void 0:this.label,"aria-hidden":e})}},computed:{pathId:function(){return Wa("pv_icon_clip_pv_id_")}}},fd={name:"SpinnerIcon",extends:ko},$1=["clip-path"],N1=V("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"},null,-1),M1=[N1],D1=["id"],F1=V("rect",{width:"14",height:"14",fill:"white"},null,-1),j1=[F1];function B1(t,e,n,r,i,o){return J(),ae("svg",ie({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),[V("g",{"clip-path":"url(#".concat(t.pathId,")")},M1,8,$1),V("defs",null,[V("clipPath",{id:"".concat(t.pathId)},j1,8,D1)])],16)}fd.render=B1;function zr(t){"@babel/helpers - typeof";return zr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},zr(t)}function Dc(t,e){return z1(t)||V1(t,e)||H1(t,e)||U1()}function U1(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function H1(t,e){if(t){if(typeof t=="string")return Fc(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Fc(t,e)}}function Fc(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function V1(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,i,o,a,s=[],l=!0,c=!1;try{if(o=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(s.push(r.value),s.length!==e);l=!0);}catch(u){c=!0,i=u}finally{try{if(!l&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return s}}function z1(t){if(Array.isArray(t))return t}function jc(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Te(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?jc(Object(n),!0).forEach(function(r){qa(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):jc(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function qa(t,e,n){return e=W1(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function W1(t){var e=K1(t,"string");return zr(e)=="symbol"?e:String(e)}function K1(t,e){if(zr(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(zr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var he={_getMeta:function(){return[te.isObject(arguments.length<=0?void 0:arguments[0])||arguments.length<=0?void 0:arguments[0],te.getItemValue(te.isObject(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:arguments.length<=1?void 0:arguments[1])]},_getConfig:function(e,n){var r,i,o;return(r=(e==null||(i=e.instance)===null||i===void 0?void 0:i.$primevue)||(n==null||(o=n.ctx)===null||o===void 0||(o=o.appContext)===null||o===void 0||(o=o.config)===null||o===void 0||(o=o.globalProperties)===null||o===void 0?void 0:o.$primevue))===null||r===void 0?void 0:r.config},_getOptionValue:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=te.toFlatCase(n).split("."),o=i.shift();return o?te.isObject(e)?he._getOptionValue(te.getItemValue(e[Object.keys(e).find(function(a){return te.toFlatCase(a)===o})||""],r),i.join("."),r):void 0:te.getItemValue(e,r)},_getPTValue:function(){var e,n,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,l=function(){var T=he._getOptionValue.apply(he,arguments);return te.isString(T)||te.isArray(T)?{class:T}:T},c="data-pc-",u=((e=r.binding)===null||e===void 0||(e=e.value)===null||e===void 0?void 0:e.ptOptions)||((n=r.$config)===null||n===void 0?void 0:n.ptOptions)||{},f=u.mergeSections,d=f===void 0?!0:f,m=u.mergeProps,b=m===void 0?!1:m,y=s?he._useDefaultPT(r,r.defaultPT(),l,o,a):void 0,_=he._usePT(r,he._getPT(i,r.$name),l,o,Te(Te({},a),{},{global:y||{}})),g=Te(Te({},o==="root"&&qa({},"".concat(c,"name"),te.toFlatCase(r.$name))),{},qa({},"".concat(c,"section"),te.toFlatCase(o)));return d||!d&&_?b?ie(y,_,g):Te(Te(Te({},y),_),g):Te(Te({},_),g)},_getPT:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,i=function(a){var s,l=r?r(a):a,c=te.toFlatCase(n);return(s=l==null?void 0:l[c])!==null&&s!==void 0?s:l};return e!=null&&e.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:i(e.originalValue),value:i(e.value)}:i(e)},_usePT:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0,a=function(_){return r(_,i,o)};if(n!=null&&n.hasOwnProperty("_usept")){var s,l=n._usept||((s=e.$config)===null||s===void 0?void 0:s.ptOptions)||{},c=l.mergeSections,u=c===void 0?!0:c,f=l.mergeProps,d=f===void 0?!1:f,m=a(n.originalValue),b=a(n.value);return m===void 0&&b===void 0?void 0:te.isString(b)?b:te.isString(m)?m:u||!u&&b?d?ie(m,b):Te(Te({},m),b):b}return a(n)},_useDefaultPT:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;return he._usePT(e,n,r,i,o)},_hook:function(e,n,r,i,o,a){var s,l,c="on".concat(te.toCapitalCase(n)),u=he._getConfig(i,o),f=r==null?void 0:r.$instance,d=he._usePT(f,he._getPT(i==null||(s=i.value)===null||s===void 0?void 0:s.pt,e),he._getOptionValue,"hooks.".concat(c)),m=he._useDefaultPT(f,u==null||(l=u.pt)===null||l===void 0||(l=l.directives)===null||l===void 0?void 0:l[e],he._getOptionValue,"hooks.".concat(c)),b={el:r,binding:i,vnode:o,prevVnode:a};d==null||d(f,b),m==null||m(f,b)},_extend:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=function(o,a,s,l,c){var u,f;a._$instances=a._$instances||{};var d=he._getConfig(s,l),m=a._$instances[e]||{},b=te.isEmpty(m)?Te(Te({},n),n==null?void 0:n.methods):{};a._$instances[e]=Te(Te({},m),{},{$name:e,$host:a,$binding:s,$modifiers:s==null?void 0:s.modifiers,$value:s==null?void 0:s.value,$el:m.$el||a||void 0,$style:Te({classes:void 0,inlineStyles:void 0,loadStyle:function(){}},n==null?void 0:n.style),$config:d,defaultPT:function(){return he._getPT(d==null?void 0:d.pt,void 0,function(_){var g;return _==null||(g=_.directives)===null||g===void 0?void 0:g[e]})},isUnstyled:function(){var _,g;return((_=a.$instance)===null||_===void 0||(_=_.$binding)===null||_===void 0||(_=_.value)===null||_===void 0?void 0:_.unstyled)!==void 0?(g=a.$instance)===null||g===void 0||(g=g.$binding)===null||g===void 0||(g=g.value)===null||g===void 0?void 0:g.unstyled:d==null?void 0:d.unstyled},ptm:function(){var _,g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return he._getPTValue(a.$instance,(_=a.$instance)===null||_===void 0||(_=_.$binding)===null||_===void 0||(_=_.value)===null||_===void 0?void 0:_.pt,g,Te({},w))},ptmo:function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return he._getPTValue(a.$instance,_,g,w,!1)},cx:function(){var _,g,w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return(_=a.$instance)!==null&&_!==void 0&&_.isUnstyled()?void 0:he._getOptionValue((g=a.$instance)===null||g===void 0||(g=g.$style)===null||g===void 0?void 0:g.classes,w,Te({},T))},sx:function(){var _,g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,T=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return w?he._getOptionValue((_=a.$instance)===null||_===void 0||(_=_.$style)===null||_===void 0?void 0:_.inlineStyles,g,Te({},T)):void 0}},b),a.$instance=a._$instances[e],(u=(f=a.$instance)[o])===null||u===void 0||u.call(f,a,s,l,c),a["$".concat(e)]=a.$instance,he._hook(e,o,a,s,l,c)};return{created:function(o,a,s,l){r("created",o,a,s,l)},beforeMount:function(o,a,s,l){var c,u,f,d,m=he._getConfig(a,s);xt.loadStyle({nonce:m==null||(c=m.csp)===null||c===void 0?void 0:c.nonce}),!((u=o.$instance)!==null&&u!==void 0&&u.isUnstyled())&&((f=o.$instance)===null||f===void 0||(f=f.$style)===null||f===void 0||f.loadStyle({nonce:m==null||(d=m.csp)===null||d===void 0?void 0:d.nonce})),r("beforeMount",o,a,s,l)},mounted:function(o,a,s,l){var c,u,f,d,m=he._getConfig(a,s);xt.loadStyle({nonce:m==null||(c=m.csp)===null||c===void 0?void 0:c.nonce}),!((u=o.$instance)!==null&&u!==void 0&&u.isUnstyled())&&((f=o.$instance)===null||f===void 0||(f=f.$style)===null||f===void 0||f.loadStyle({nonce:m==null||(d=m.csp)===null||d===void 0?void 0:d.nonce})),r("mounted",o,a,s,l)},beforeUpdate:function(o,a,s,l){r("beforeUpdate",o,a,s,l)},updated:function(o,a,s,l){r("updated",o,a,s,l)},beforeUnmount:function(o,a,s,l){r("beforeUnmount",o,a,s,l)},unmounted:function(o,a,s,l){r("unmounted",o,a,s,l)}}},extend:function(){var e=he._getMeta.apply(he,arguments),n=Dc(e,2),r=n[0],i=n[1];return Te({extend:function(){var a=he._getMeta.apply(he,arguments),s=Dc(a,2),l=s[0],c=s[1];return he.extend(l,Te(Te(Te({},i),i==null?void 0:i.methods),c))}},he._extend(r,i))}},G1=`
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
`,q1={root:"p-ink"},Y1=xt.extend({name:"ripple",css:G1,classes:q1}),X1=he.extend({style:Y1});function J1(t){return tb(t)||eb(t)||Q1(t)||Z1()}function Z1(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Q1(t,e){if(t){if(typeof t=="string")return Ya(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ya(t,e)}}function eb(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function tb(t){if(Array.isArray(t))return Ya(t)}function Ya(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var dd=X1.extend("ripple",{mounted:function(e){var n,r=e==null||(n=e.$instance)===null||n===void 0?void 0:n.$config;r&&r.ripple&&(this.create(e),this.bindEvents(e),e.setAttribute("data-pd-ripple",!0))},unmounted:function(e){this.remove(e)},timeout:void 0,methods:{bindEvents:function(e){e.addEventListener("mousedown",this.onMouseDown.bind(this))},unbindEvents:function(e){e.removeEventListener("mousedown",this.onMouseDown.bind(this))},create:function(e){var n=X.createElement("span",{role:"presentation","aria-hidden":!0,"data-p-ink":!0,"data-p-ink-active":!1,class:!this.isUnstyled()&&this.cx("root"),onAnimationEnd:this.onAnimationEnd.bind(this),"p-bind":this.ptm("root")});e.appendChild(n),this.$el=n},remove:function(e){var n=this.getInk(e);n&&(this.unbindEvents(e),n.removeEventListener("animationend",this.onAnimationEnd),n.remove())},onMouseDown:function(e){var n=this,r=e.currentTarget,i=this.getInk(r);if(!(!i||getComputedStyle(i,null).display==="none")){if(!this.isUnstyled()&&X.removeClass(i,"p-ink-active"),i.setAttribute("data-p-ink-active","false"),!X.getHeight(i)&&!X.getWidth(i)){var o=Math.max(X.getOuterWidth(r),X.getOuterHeight(r));i.style.height=o+"px",i.style.width=o+"px"}var a=X.getOffset(r),s=e.pageX-a.left+document.body.scrollTop-X.getWidth(i)/2,l=e.pageY-a.top+document.body.scrollLeft-X.getHeight(i)/2;i.style.top=l+"px",i.style.left=s+"px",!this.isUnstyled()&&X.addClass(i,"p-ink-active"),i.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(function(){i&&(!n.isUnstyled()&&X.removeClass(i,"p-ink-active"),i.setAttribute("data-p-ink-active","false"))},401)}},onAnimationEnd:function(e){this.timeout&&clearTimeout(this.timeout),!this.isUnstyled()&&X.removeClass(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")},getInk:function(e){return e&&e.children?J1(e.children).find(function(n){return X.getAttribute(n,"data-pc-name")==="ripple"}):void 0}}});function Wr(t){"@babel/helpers - typeof";return Wr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Wr(t)}function qt(t,e,n){return e=nb(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function nb(t){var e=rb(t,"string");return Wr(e)=="symbol"?e:String(e)}function rb(t,e){if(Wr(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Wr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var ib={root:function(e){var n=e.instance,r=e.props;return["p-button p-component",qt(qt(qt(qt(qt(qt(qt(qt({"p-button-icon-only":n.hasIcon&&!r.label&&!r.badge,"p-button-vertical":(r.iconPos==="top"||r.iconPos==="bottom")&&r.label,"p-disabled":n.$attrs.disabled||n.$attrs.disabled===""||r.loading,"p-button-loading":r.loading,"p-button-loading-label-only":r.loading&&!n.hasIcon&&r.label,"p-button-link":r.link},"p-button-".concat(r.severity),r.severity),"p-button-raised",r.raised),"p-button-rounded",r.rounded),"p-button-text",r.text),"p-button-outlined",r.outlined),"p-button-sm",r.size==="small"),"p-button-lg",r.size==="large"),"p-button-plain",r.plain)]},loadingIcon:"p-button-loading-icon pi-spin",icon:function(e){var n=e.props;return["p-button-icon",{"p-button-icon-left":n.iconPos==="left"&&n.label,"p-button-icon-right":n.iconPos==="right"&&n.label,"p-button-icon-top":n.iconPos==="top"&&n.label,"p-button-icon-bottom":n.iconPos==="bottom"&&n.label}]},label:"p-button-label"},ob=xt.extend({name:"button",classes:ib}),ab={name:"BaseButton",extends:ai,props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:String,default:null},badge:{type:String,default:null},badgeClass:{type:String,default:null},badgeSeverity:{type:String,default:null},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},link:{type:Boolean,default:!1},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},plain:{type:Boolean,default:!1}},style:ob,provide:function(){return{$parentInstance:this}}},to={name:"Button",extends:ab,methods:{getPTOptions:function(e){return this.ptm(e,{context:{disabled:this.disabled}})}},computed:{disabled:function(){return this.$attrs.disabled||this.$attrs.disabled===""||this.loading},defaultAriaLabel:function(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs.ariaLabel},hasIcon:function(){return this.icon||this.$slots.icon}},components:{SpinnerIcon:fd,Badge:ud},directives:{ripple:dd}},sb=["aria-label","disabled","data-pc-severity"];function lb(t,e,n,r,i,o){var a=pn("SpinnerIcon"),s=pn("Badge"),l=Ta("ripple");return Zn((J(),ae("button",ie({class:t.cx("root"),type:"button","aria-label":o.defaultAriaLabel,disabled:o.disabled},o.getPTOptions("root"),{"data-pc-name":"button","data-pc-severity":t.severity}),[Ve(t.$slots,"default",{},function(){return[t.loading?Ve(t.$slots,"loadingicon",{key:0,class:sn([t.cx("loadingIcon"),t.cx("icon")])},function(){return[t.loadingIcon?(J(),ae("span",ie({key:0,class:[t.cx("loadingIcon"),t.cx("icon"),t.loadingIcon]},t.ptm("loadingIcon")),null,16)):(J(),It(a,ie({key:1,class:[t.cx("loadingIcon"),t.cx("icon")],spin:""},t.ptm("loadingIcon")),null,16,["class"]))]}):Ve(t.$slots,"icon",{key:1,class:sn([t.cx("icon")])},function(){return[t.icon?(J(),ae("span",ie({key:0,class:[t.cx("icon"),t.icon,t.iconClass]},t.ptm("icon")),null,16)):$e("",!0)]}),V("span",ie({class:t.cx("label")},t.ptm("label")),Et(t.label||" "),17),t.badge?(J(),It(s,ie({key:2,value:t.badge,class:t.badgeClass,severity:t.badgeSeverity,unstyled:t.unstyled},t.ptm("badge")),null,16,["value","class","severity","unstyled"])):$e("",!0)]})],16,sb)),[[l]])}to.render=lb;const cb={class:"container"},ub={class:"card"},fb={class:"img"},db=["src"],hb={class:"level-text"},pb={class:"sentence"},mb=["onClick"],gb={class:"flex gap-3 mt-1 record-btn"},aa="test doll",vb={__name:"read",setup(t){const{isAuthenticated:e,logout:n,user:r}=hi();console.log(e.value);const i=[{id:1,data:"Bella and Kay ran up the hill.",img_url:"run_up_hill.gif",level:3,category:"reading"},{id:2,data:"They walked back down to the lake.",img_url:"run_up_hill.gif",level:3,category:"reading"},{id:3,data:"The sisters are playing near the lake.",img_url:"https://picsum.photos/300/200?q=2",level:1,category:"reading"}];let o=ce(!1);window.SpeechRecognition=window.webkitSpeechRecognition||window.SpeechRecognition;let a="",s=new window.SpeechRecognition;s.interimResults=!0,s.maxAlternatives=10,s.continuous=!0,s.onresult=d=>{let m="";for(let b=d.resultIndex,y=d.results.length;b<y;b++){let _=d.results[b][0].transcript;d.results[b].isFinal?a+=_:m+=_}l(m),document.getElementById("text-output").innerHTML=a+"<p>"+m+"</p>"};const l=d=>{console.log(d);let m=d.toLowerCase().split(" ");console.log(m),console.log(aa);let b=aa.toLocaleLowerCase().split(" ");console.log(b);for(let y=0;y<m.length;y++)for(let _=0;_<b.length;_++)return b[_]==m[y]?(console.log("string is the same"),console.log(aa[_]),!0):(console.log("sting is different"),!1)},c=()=>{console.log("recording"),o.value=!0,a="",s.start()},u=()=>{console.log("recording stopped"),o.value=!1,s.abort()},f=d=>{let m=new SpeechSynthesisUtterance(d);speechSynthesis.speak(m)};return(d,m)=>{const b=pn("font-awesome-icon");return J(),ae("div",cb,[ee(Ae(Cv),null,{addons:He(()=>[ee(Ae(Av)),ee(Ae(Ov))]),default:He(()=>[(J(),ae(Ue,null,Rl(i,(y,_)=>ee(Ae(Pv),{key:y.id},{default:He(()=>[V("div",ub,[ee(Ae(cd),{style:{"max-width":"700px",overflow:"hidden","word-wrap":"inherit"}},{header:He(()=>[un(Et(console.log(y.img_url))+" ",1),V("div",fb,[V("img",{alt:"user header",src:y.img_url},null,8,db)]),V("span",null,Et(console.log(y.level)),1)]),content:He(()=>[V("span",hb,"level "+Et(y.level),1),V("div",pb,[(J(!0),ae(Ue,null,Rl(y.data.split(" "),g=>(J(),ae("span",null,[V("span",{class:"text-btn",onClick:w=>f(g)},Et(g),9,mb)]))),256))])]),footer:He(()=>[V("div",gb,[Ae(o)?(J(),It(Ae(to),{key:0,class:"mic-btn-stop",onClick:u},{default:He(()=>[ee(b,{icon:"fa-solid fa-microphone"})]),_:1})):$e("",!0),Ae(o)?$e("",!0):(J(),It(Ae(to),{key:1,class:"mic-btn-start",onClick:c},{default:He(()=>[ee(b,{icon:"fa-solid fa-microphone"})]),_:1}))])]),_:2},1024)])]),_:2},1024)),64))]),_:1})])}}},bb={class:"container"},yb=V("nav",{class:"nav"},null,-1),_b=V("div",null,"Home",-1),wb=V("div",{id:"text-output"},null,-1),Sb=V("div",{class:"mic-btn"},null,-1),Eb={__name:"home",setup(t){const{isAuthenticated:e,logout:n,user:r}=hi();return console.log(e),console.log(r),(i,o)=>(J(),ae("div",bb,[yb,_b,V("section",null," welcome "+Et(Ae(r).email),1),wb,Sb]))}},zs=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},Cb={},Ib=Ds('<div>Math</div><div class="container"><nav class="nav"></nav><section class="text-to-read"></section><div id="text-output"></div><div class="mic-btn"><button>Math</button></div></div>',2);function Tb(t,e){return Ib}const Ab=zs(Cb,[["render",Tb]]),Ob={},Pb=Ds('<div>Write</div><div class="container"><nav class="nav"></nav><section class="text-to-read"></section><div id="text-output"></div><div class="mic-btn"><button>Write</button></div></div>',2);function xb(t,e){return Pb}const kb=zs(Ob,[["render",xb]]),Rb="/learn-to-read/assets/penguin_noEyes-4UZ287ly.png",Lb="/learn-to-read/assets/penguin_arms-iss6F5Vp.png",$b=V("br",null,null,-1),Nb=V("br",null,null,-1),Mb={class:"login-form"},Db=Ds('<br><div class="form-top"><div class="main-wrapper"><div class="img-wrapper"><div class="penguin-face"><img class="penguin-img" src="'+Rb+'" alt="face"><div class="eyes-wrapper"><div class="eyes"><div class="eye-brow"></div><div class="eye-ball"></div></div><div class="eyes"><div class="eye-brow"></div><div class="eye-ball"></div></div></div></div><img class="penguin-hand" src="'+Lb+'" alt="hand"></div></div></div>',2),Fb={class:"username"},jb=V("label",{for:"username",class:"username-label"},"Username",-1),Bb={class:"password"},Ub=V("label",{for:"password",class:"password-label"},"Password",-1),Hb={__name:"loginPage",setup(t){const{login:e,logout:n,isAuthenticated:r}=hi();console.log(r._value),console.log(r);const i=gv(),o=vv(),a=ce(""),s=ce(""),l=async()=>{await e(a.value,s.value)?o.query.redirect?i.push({name:"home"}):i.push({name:"home"}):n()},c=u=>{u.target.value!==""?(document.querySelector(".penguin-hand").style.transform="translateY(-1px)",console.log(u.target.value)):document.querySelector(".penguin-hand").style.transform="translateY(110px)"};return(u,f)=>(J(),ae(Ue,null,[$b,Nb,V("div",Mb,[Db,V("form",{action:"",onSubmit:f[2]||(f[2]=ag(()=>{},["prevent"])),class:"form-input"},[V("div",Fb,[jb,Zn(V("input",{id:"email","onUpdate:modelValue":f[0]||(f[0]=d=>a.value=d),type:"email",placeholder:"username",class:"username-input"},null,512),[[sc,a.value]])]),V("div",Bb,[Ub,Zn(V("input",{id:"password","onUpdate:modelValue":f[1]||(f[1]=d=>s.value=d),type:"password",placeholder:"Password",class:"password-input",onInput:c},null,544),[[sc,s.value]])]),V("button",{onClick:l,class:"login-btn"},"LOGIN")],32)])],64))}},Vb={},zb={class:"container"},Wb=V("nav",{class:"nav"},null,-1),Kb=V("section",{class:"text-to-read"},null,-1),Gb=V("div",{id:"text-output"},null,-1),qb=V("div",{class:"mic-btn"},[V("button",null,"Settings")],-1),Yb=[Wb,Kb,Gb,qb];function Xb(t,e){return J(),ae("div",zb,Yb)}const Jb=zs(Vb,[["render",Xb]]);var Bc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Zb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],a=t[n++],s=t[n++],l=((i&7)<<18|(o&63)<<12|(a&63)<<6|s&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},pd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],a=i+1<t.length,s=a?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=o>>2,f=(o&3)<<4|s>>4;let d=(s&15)<<2|c>>6,m=c&63;l||(m=64,a||(d=64)),r.push(n[u],n[f],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(hd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Zb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],s=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||s==null||c==null||f==null)throw new Qb;const d=o<<2|s>>4;if(r.push(d),c!==64){const m=s<<4&240|c>>2;if(r.push(m),f!==64){const b=c<<6&192|f;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Qb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ey=function(t){const e=hd(t);return pd.encodeByteArray(e,!0)},md=function(t){return ey(t).replace(/\./g,"")},gd=function(t){try{return pd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny=()=>ty().__FIREBASE_DEFAULTS__,ry=()=>{if(typeof process>"u"||typeof Bc>"u")return;const t=Bc.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},iy=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&gd(t[1]);return e&&JSON.parse(e)},Ws=()=>{try{return ny()||ry()||iy()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},oy=t=>{var e,n;return(n=(e=Ws())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},vd=()=>{var t;return(t=Ws())===null||t===void 0?void 0:t.config},bd=t=>{var e;return(e=Ws())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ge())}function ly(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uy(){const t=Ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function fy(){try{return typeof indexedDB=="object"}catch{return!1}}function dy(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy="FirebaseError";class bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=hy,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,si.prototype.create)}}class si{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?py(o,r):"Error",s=`${this.serviceName}: ${a} (${i}).`;return new bn(i,s,r)}}function py(t,e){return t.replace(my,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const my=/\{\$([^}]+)}/g;function gy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function no(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],a=e[i];if(Uc(o)&&Uc(a)){if(!no(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Uc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function yr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function _r(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function vy(t,e){const n=new by(t,e);return n.subscribe.bind(n)}class by{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");yy(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=sa),i.error===void 0&&(i.error=sa),i.complete===void 0&&(i.complete=sa);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yy(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function sa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(t){return t&&t._delegate?t._delegate:t}class ar{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ay;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Sy(e))try{this.getOrInitializeService({instanceIdentifier:In})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=In){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=In){return this.instances.has(e)}getOptions(e=In){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,a]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(o);r===s&&a.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&e(a,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wy(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=In){return this.component?this.component.multipleInstances?e:In:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wy(t){return t===In?void 0:t}function Sy(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _y(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(be||(be={}));const Cy={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},Iy=be.INFO,Ty={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},Ay=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Ty[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yd{constructor(e){this.name=e,this._logLevel=Iy,this._logHandler=Ay,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Cy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}const Oy=(t,e)=>e.some(n=>t instanceof n);let Hc,Vc;function Py(){return Hc||(Hc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xy(){return Vc||(Vc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _d=new WeakMap,Xa=new WeakMap,wd=new WeakMap,la=new WeakMap,Ks=new WeakMap;function ky(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{n(fn(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&_d.set(n,t)}).catch(()=>{}),Ks.set(e,t),e}function Ry(t){if(Xa.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});Xa.set(t,e)}let Ja={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xa.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ly(t){Ja=t(Ja)}function $y(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ca(this),e,...n);return wd.set(r,e.sort?e.sort():[e]),fn(r)}:xy().includes(t)?function(...e){return t.apply(ca(this),e),fn(_d.get(this))}:function(...e){return fn(t.apply(ca(this),e))}}function Ny(t){return typeof t=="function"?$y(t):(t instanceof IDBTransaction&&Ry(t),Oy(t,Py())?new Proxy(t,Ja):t)}function fn(t){if(t instanceof IDBRequest)return ky(t);if(la.has(t))return la.get(t);const e=Ny(t);return e!==t&&(la.set(t,e),Ks.set(e,t)),e}const ca=t=>Ks.get(t);function My(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(t,e),s=fn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(fn(a.result),l.oldVersion,l.newVersion,fn(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),s.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),s}const Dy=["get","getKey","getAll","getAllKeys","count"],Fy=["put","add","delete","clear"],ua=new Map;function zc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ua.get(e))return ua.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Fy.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Dy.includes(n)))return;const o=async function(a,...s){const l=this.transaction(a,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(s.shift())),(await Promise.all([c[n](...s),i&&l.done]))[0]};return ua.set(e,o),o}Ly(t=>({...t,get:(e,n,r)=>zc(e,n)||t.get(e,n,r),has:(e,n)=>!!zc(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(By(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function By(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Za="@firebase/app",Wc="0.9.27";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=new yd("@firebase/app"),Uy="@firebase/app-compat",Hy="@firebase/analytics-compat",Vy="@firebase/analytics",zy="@firebase/app-check-compat",Wy="@firebase/app-check",Ky="@firebase/auth",Gy="@firebase/auth-compat",qy="@firebase/database",Yy="@firebase/database-compat",Xy="@firebase/functions",Jy="@firebase/functions-compat",Zy="@firebase/installations",Qy="@firebase/installations-compat",e0="@firebase/messaging",t0="@firebase/messaging-compat",n0="@firebase/performance",r0="@firebase/performance-compat",i0="@firebase/remote-config",o0="@firebase/remote-config-compat",a0="@firebase/storage",s0="@firebase/storage-compat",l0="@firebase/firestore",c0="@firebase/firestore-compat",u0="firebase",f0="10.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa="[DEFAULT]",d0={[Za]:"fire-core",[Uy]:"fire-core-compat",[Vy]:"fire-analytics",[Hy]:"fire-analytics-compat",[Wy]:"fire-app-check",[zy]:"fire-app-check-compat",[Ky]:"fire-auth",[Gy]:"fire-auth-compat",[qy]:"fire-rtdb",[Yy]:"fire-rtdb-compat",[Xy]:"fire-fn",[Jy]:"fire-fn-compat",[Zy]:"fire-iid",[Qy]:"fire-iid-compat",[e0]:"fire-fcm",[t0]:"fire-fcm-compat",[n0]:"fire-perf",[r0]:"fire-perf-compat",[i0]:"fire-rc",[o0]:"fire-rc-compat",[a0]:"fire-gcs",[s0]:"fire-gcs-compat",[l0]:"fire-fst",[c0]:"fire-fst-compat","fire-js":"fire-js",[u0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro=new Map,es=new Map;function h0(t,e){try{t.container.addComponent(e)}catch(n){$n.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Kr(t){const e=t.name;if(es.has(e))return $n.debug(`There were multiple attempts to register component ${e}.`),!1;es.set(e,t);for(const n of ro.values())h0(n,t);return!0}function Sd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},dn=new si("app","Firebase",p0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=f0;function Ed(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qa,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw dn.create("bad-app-name",{appName:String(i)});if(n||(n=vd()),!n)throw dn.create("no-options");const o=ro.get(i);if(o){if(no(n,o.options)&&no(r,o.config))return o;throw dn.create("duplicate-app",{appName:i})}const a=new Ey(i);for(const l of es.values())a.addComponent(l);const s=new m0(n,r,a);return ro.set(i,s),s}function g0(t=Qa){const e=ro.get(t);if(!e&&t===Qa&&vd())return Ed();if(!e)throw dn.create("no-app",{appName:t});return e}function Qn(t,e,n){var r;let i=(r=d0[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const s=[`Unable to register library "${i}" with version "${e}":`];o&&s.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&s.push("and"),a&&s.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$n.warn(s.join(" "));return}Kr(new ar(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0="firebase-heartbeat-database",b0=1,Gr="firebase-heartbeat-store";let fa=null;function Cd(){return fa||(fa=My(v0,b0,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Gr)}catch(n){console.warn(n)}}}}).catch(t=>{throw dn.create("idb-open",{originalErrorMessage:t.message})})),fa}async function y0(t){try{const n=(await Cd()).transaction(Gr),r=await n.objectStore(Gr).get(Id(t));return await n.done,r}catch(e){if(e instanceof bn)$n.warn(e.message);else{const n=dn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$n.warn(n.message)}}}async function Kc(t,e){try{const r=(await Cd()).transaction(Gr,"readwrite");await r.objectStore(Gr).put(e,Id(t)),await r.done}catch(n){if(n instanceof bn)$n.warn(n.message);else{const r=dn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$n.warn(r.message)}}}function Id(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0=1024,w0=30*24*60*60*1e3;class S0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new C0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Gc();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const s=new Date(a.date).valueOf();return Date.now()-s<=w0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gc(),{heartbeatsToSend:r,unsentEntries:i}=E0(this._heartbeatsCache.heartbeats),o=md(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Gc(){return new Date().toISOString().substring(0,10)}function E0(t,e=_0){const n=[];let r=t.slice();for(const i of t){const o=n.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),qc(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),qc(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class C0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fy()?dy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await y0(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function qc(t){return md(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(t){Kr(new ar("platform-logger",e=>new jy(e),"PRIVATE")),Kr(new ar("heartbeat",e=>new S0(e),"PRIVATE")),Qn(Za,Wc,t),Qn(Za,Wc,"esm2017"),Qn("fire-js","")}I0("");var T0="firebase",A0="10.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qn(T0,A0,"app");const O0={apiKey:"AIzaSyBbTa9BhO58ahcwiDFnK5EwlviueLRyr-U",authDomain:"brain-bright.firebaseapp.com",projectId:"brain-bright",storageBucket:"brain-bright.appspot.com",messagingSenderId:"517459296528",appId:"1:517459296528:web:1a5e0ff36eacb311b9a595"},Td=Ed(O0);function Gs(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Ad(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const P0=Ad,Od=new si("auth","Firebase",Ad());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io=new yd("@firebase/auth");function x0(t,...e){io.logLevel<=be.WARN&&io.warn(`Auth (${ci}): ${t}`,...e)}function Bi(t,...e){io.logLevel<=be.ERROR&&io.error(`Auth (${ci}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,...e){throw qs(t,...e)}function Tt(t,...e){return qs(t,...e)}function k0(t,e,n){const r=Object.assign(Object.assign({},P0()),{[e]:n});return new si("auth","Firebase",r).create(e,{appName:t.name})}function qs(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Od.create(t,...e)}function q(t,e,...n){if(!t)throw qs(e,...n)}function Lt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Bi(e),new Error(e)}function Dt(t,e){t||Lt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function R0(){return Yc()==="http:"||Yc()==="https:"}function Yc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(R0()||ly()||"connection"in navigator)?navigator.onLine:!0}function $0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dt(n>e,"Short delay should be less than long delay!"),this.isMobile=sy()||cy()}get(){return L0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(t,e){Dt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0=new ui(3e4,6e4);function Bn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function _n(t,e,n,r,i={}){return xd(t,i,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const s=li(Object.assign({key:t.config.apiKey},a)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Pd.fetch()(kd(t,t.config.apiHost,n,s),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},o))})}async function xd(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},N0),e);try{const i=new F0(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Ii(t,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const s=o.ok?a.errorMessage:a.error.message,[l,c]=s.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ii(t,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Ii(t,"email-already-in-use",a);if(l==="USER_DISABLED")throw Ii(t,"user-disabled",a);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw k0(t,u,c);bt(t,u)}}catch(i){if(i instanceof bn)throw i;bt(t,"network-request-failed",{message:String(i)})}}async function Ro(t,e,n,r,i={}){const o=await _n(t,e,n,r,i);return"mfaPendingCredential"in o&&bt(t,"multi-factor-auth-required",{_serverResponse:o}),o}function kd(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ys(t.config,i):`${t.config.apiScheme}://${i}`}function D0(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class F0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Tt(this.auth,"network-request-failed")),M0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ii(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Tt(t,e,r);return i.customData._tokenResponse=n,i}function Xc(t){return t!==void 0&&t.enterprise!==void 0}class j0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return D0(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function B0(t,e){return _n(t,"GET","/v2/recaptchaConfig",Bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U0(t,e){return _n(t,"POST","/v1/accounts:delete",e)}async function H0(t,e){return _n(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function V0(t,e=!1){const n=yn(t),r=await n.getIdToken(e),i=Xs(r);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:xr(da(i.auth_time)),issuedAtTime:xr(da(i.iat)),expirationTime:xr(da(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function da(t){return Number(t)*1e3}function Xs(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Bi("JWT malformed, contained fewer than 3 sections"),null;try{const i=gd(n);return i?JSON.parse(i):(Bi("Failed to decode base64 JWT payload"),null)}catch(i){return Bi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function z0(t){const e=Xs(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof bn&&W0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function W0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xr(this.lastLoginAt),this.creationTime=xr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await qr(t,H0(n,{idToken:r}));q(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Y0(o.providerUserInfo):[],s=q0(t.providerData,a),l=t.isAnonymous,c=!(t.email&&o.passwordHash)&&!(s!=null&&s.length),u=l?c:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:s,metadata:new Rd(o.createdAt,o.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function G0(t){const e=yn(t);await oo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function q0(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Y0(t){return t.map(e=>{var{providerId:n}=e,r=Gs(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X0(t,e){const n=await xd(t,{},async()=>{const r=li({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,a=kd(t,i,"/v1/token",`key=${o}`),s=await t._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",Pd.fetch()(a,{method:"POST",headers:s,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function J0(t,e){return _n(t,"POST","/v2/accounts:revokeToken",Bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):z0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await X0(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,a=new Yr;return r&&(q(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(q(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yr,this.toJSON())}_performRefresh(){return Lt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ln{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=Gs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new K0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Rd(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await qr(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return V0(this,e)}reload(){return G0(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await oo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await qr(this,U0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,a,s,l,c,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,b=(a=n.photoURL)!==null&&a!==void 0?a:void 0,y=(s=n.tenantId)!==null&&s!==void 0?s:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:T,emailVerified:L,isAnonymous:F,providerData:k,stsTokenManager:z}=n;q(T&&z,e,"internal-error");const j=Yr.fromJSON(this.name,z);q(typeof T=="string",e,"internal-error"),Yt(f,e.name),Yt(d,e.name),q(typeof L=="boolean",e,"internal-error"),q(typeof F=="boolean",e,"internal-error"),Yt(m,e.name),Yt(b,e.name),Yt(y,e.name),Yt(_,e.name),Yt(g,e.name),Yt(w,e.name);const U=new Ln({uid:T,auth:e,email:d,emailVerified:L,displayName:f,isAnonymous:F,photoURL:b,phoneNumber:m,tenantId:y,stsTokenManager:j,createdAt:g,lastLoginAt:w});return k&&Array.isArray(k)&&(U.providerData=k.map(Z=>Object.assign({},Z))),_&&(U._redirectEventId=_),U}static async _fromIdTokenResponse(e,n,r=!1){const i=new Yr;i.updateFromServerResponse(n);const o=new Ln({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await oo(o),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc=new Map;function $t(t){Dt(t instanceof Function,"Expected a class definition");let e=Jc.get(t);return e?(Dt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jc.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ld.type="NONE";const Zc=Ld;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(t,e,n){return`firebase:${t}:${e}:${n}`}class er{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Ui(this.userKey,i.apiKey,o),this.fullPersistenceKey=Ui("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ln._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new er($t(Zc),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let o=i[0]||$t(Zc);const a=Ui(r,e.config.apiKey,e.name);let s=null;for(const c of n)try{const u=await c._get(a);if(u){const f=Ln._fromJSON(e,u);c!==o&&(s=f),o=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new er(o,e,r):(o=l[0],s&&await o._set(a,s.toJSON()),await Promise.all(n.map(async c=>{if(c!==o)try{await c._remove(a)}catch{}})),new er(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Md(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($d(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Fd(e))return"Blackberry";if(jd(e))return"Webos";if(Js(e))return"Safari";if((e.includes("chrome/")||Nd(e))&&!e.includes("edge/"))return"Chrome";if(Dd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $d(t=Ge()){return/firefox\//i.test(t)}function Js(t=Ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Nd(t=Ge()){return/crios\//i.test(t)}function Md(t=Ge()){return/iemobile/i.test(t)}function Dd(t=Ge()){return/android/i.test(t)}function Fd(t=Ge()){return/blackberry/i.test(t)}function jd(t=Ge()){return/webos/i.test(t)}function Lo(t=Ge()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Z0(t=Ge()){var e;return Lo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Q0(){return uy()&&document.documentMode===10}function Bd(t=Ge()){return Lo(t)||Dd(t)||jd(t)||Fd(t)||/windows phone/i.test(t)||Md(t)}function e_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(t,e=[]){let n;switch(t){case"Browser":n=Qc(Ge());break;case"Worker":n=`${Qc(Ge())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ci}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((a,s)=>{try{const l=e(o);a(l)}catch(l){s(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n_(t,e={}){return _n(t,"GET","/v2/passwordPolicy",Bn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_=6;class i_{constructor(e){var n,r,i,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:r_,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,a,s;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(s=l.containsNonAlphanumericCharacter)!==null&&s!==void 0?s:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new eu(this),this.idTokenSubscription=new eu(this),this.beforeStateQueue=new t_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Od,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=$t(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await er.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===s)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await oo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?yn(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence($t(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await n_(this),n=new i_(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new si("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await J0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&$t(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await er.create(this,[$t(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let a=!1;const s=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(s,this,"internal-error"),s.then(()=>{a||o(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{a=!0,l()}}else{const l=e.addObserver(n);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ud(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&x0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function dr(t){return yn(t)}class eu{constructor(e){this.auth=e,this.observer=null,this.addObserver=vy(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $o={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function a_(t){$o=t}function Hd(t){return $o.loadJS(t)}function s_(){return $o.recaptchaEnterpriseScript}function l_(){return $o.gapiScript}function c_(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const u_="recaptcha-enterprise",f_="NO_RECAPTCHA";class d_{constructor(e){this.type=u_,this.auth=dr(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,s)=>{B0(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)s(new Error("recaptcha Enterprise site key undefined"));else{const c=new j0(l);return o.tenantId==null?o._agentRecaptchaConfig=c:o._tenantRecaptchaConfigs[o.tenantId]=c,a(c.siteKey)}}).catch(l=>{s(l)})})}function i(o,a,s){const l=window.grecaptcha;Xc(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:e}).then(c=>{a(c)}).catch(()=>{a(f_)})}):s(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,a)=>{r(this.auth).then(s=>{if(!n&&Xc(window.grecaptcha))i(s,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=s_();l.length!==0&&(l+=s),Hd(l).then(()=>{i(s,o,a)}).catch(c=>{a(c)})}}).catch(s=>{a(s)})})}}async function tu(t,e,n,r=!1){const i=new d_(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function nu(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await tu(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await tu(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(t,e){const n=Sd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(no(o,e??{}))return i;bt(i,"already-initialized")}return n.initialize({options:e})}function p_(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map($t);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function m_(t,e,n){const r=dr(t);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=Vd(e),{host:a,port:s}=g_(e),l=s===null?"":`:${s}`;r.config.emulator={url:`${o}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:s,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||v_()}function Vd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function g_(t){const e=Vd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:ru(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:ru(a)}}}function ru(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function v_(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Lt("not implemented")}_getIdTokenResponse(e){return Lt("not implemented")}_linkToIdToken(e,n){return Lt("not implemented")}_getReauthenticationResolver(e){return Lt("not implemented")}}async function b_(t,e){return _n(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y_(t,e){return Ro(t,"POST","/v1/accounts:signInWithPassword",Bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function __(t,e){return Ro(t,"POST","/v1/accounts:signInWithEmailLink",Bn(t,e))}async function w_(t,e){return Ro(t,"POST","/v1/accounts:signInWithEmailLink",Bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends Zs{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Xr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Xr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nu(e,n,"signInWithPassword",y_);case"emailLink":return __(e,{email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nu(e,r,"signUpPassword",b_);case"emailLink":return w_(e,{idToken:n,email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tr(t,e){return Ro(t,"POST","/v1/accounts:signInWithIdp",Bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_="http://localhost";class Nn extends Zs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Nn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=Gs(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Nn(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return tr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,tr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,tr(e,n)}buildRequest(){const e={requestUri:S_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=li(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E_(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function C_(t){const e=yr(_r(t)).link,n=e?yr(_r(e)).deep_link_id:null,r=yr(_r(t)).deep_link_id;return(r?yr(_r(r)).link:null)||r||n||e||t}class Qs{constructor(e){var n,r,i,o,a,s;const l=yr(_r(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,f=E_((i=l.mode)!==null&&i!==void 0?i:null);q(c&&u&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=u,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(a=l.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(s=l.tenantId)!==null&&s!==void 0?s:null}static parseLink(e){const n=C_(e);try{return new Qs(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(){this.providerId=hr.PROVIDER_ID}static credential(e,n){return Xr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Qs.parseLink(n);return q(r,"argument-error"),Xr._fromEmailAndCode(e,r.code,r.tenantId)}}hr.PROVIDER_ID="password";hr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";hr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends zd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends fi{constructor(){super("facebook.com")}static credential(e){return Nn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nn.credential(e.oauthAccessToken)}catch{return null}}}nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";nn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends fi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Nn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return rn.credential(n,r)}catch{return null}}}rn.GOOGLE_SIGN_IN_METHOD="google.com";rn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends fi{constructor(){super("github.com")}static credential(e){return Nn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return on.credential(e.oauthAccessToken)}catch{return null}}}on.GITHUB_SIGN_IN_METHOD="github.com";on.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends fi{constructor(){super("twitter.com")}static credential(e,n){return Nn._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return an.credential(n,r)}catch{return null}}}an.TWITTER_SIGN_IN_METHOD="twitter.com";an.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await Ln._fromIdTokenResponse(e,r,i),a=iu(r);return new sr({user:o,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=iu(r);return new sr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function iu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao extends bn{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ao.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ao(e,n,r,i)}}function Wd(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ao._fromErrorAndOperation(t,o,e,r):o})}async function I_(t,e,n=!1){const r=await qr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return sr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T_(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const o=await qr(t,Wd(r,i,e,t),n);q(o.idToken,r,"internal-error");const a=Xs(o.idToken);q(a,r,"internal-error");const{sub:s}=a;return q(t.uid===s,r,"user-mismatch"),sr._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&bt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kd(t,e,n=!1){const r="signIn",i=await Wd(t,r,e),o=await sr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function A_(t,e){return Kd(dr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O_(t){const e=dr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function P_(t,e,n){return A_(yn(t),hr.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&O_(t),r})}function x_(t,e,n,r){return yn(t).onIdTokenChanged(e,n,r)}function k_(t,e,n){return yn(t).beforeAuthStateChanged(e,n)}function R_(t){return yn(t).signOut()}const so="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(so,"1"),this.storage.removeItem(so),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(){const t=Ge();return Js(t)||Lo(t)}const $_=1e3,N_=10;class qd extends Gd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=L_()&&e_(),this.fallbackToPolling=Bd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,s,l)=>{this.notifyListeners(a,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);Q0()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,N_):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},$_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}qd.type="LOCAL";const M_=qd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd extends Gd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Yd.type="SESSION";const Xd=Yd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new No(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const s=Array.from(a).map(async c=>c(n.origin,o)),l=await D_(s);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}No.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((s,l)=>{const c=el("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),s(d.data.response);break;default:clearTimeout(u),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(){return window}function j_(t){At().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(){return typeof At().WorkerGlobalScope<"u"&&typeof At().importScripts=="function"}async function B_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function U_(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function H_(){return Jd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd="firebaseLocalStorageDb",V_=1,lo="firebaseLocalStorage",Qd="fbase_key";class di{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Mo(t,e){return t.transaction([lo],e?"readwrite":"readonly").objectStore(lo)}function z_(){const t=indexedDB.deleteDatabase(Zd);return new di(t).toPromise()}function ns(){const t=indexedDB.open(Zd,V_);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(lo,{keyPath:Qd})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(lo)?e(r):(r.close(),await z_(),e(await ns()))})})}async function ou(t,e,n){const r=Mo(t,!0).put({[Qd]:e,value:n});return new di(r).toPromise()}async function W_(t,e){const n=Mo(t,!1).get(e),r=await new di(n).toPromise();return r===void 0?null:r.value}function au(t,e){const n=Mo(t,!0).delete(e);return new di(n).toPromise()}const K_=800,G_=3;class eh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ns(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>G_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Jd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=No._getInstance(H_()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await B_(),!this.activeServiceWorker)return;this.sender=new F_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||U_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ns();return await ou(e,so,"1"),await au(e,so),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ou(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>W_(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>au(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Mo(i,!1).getAll();return new di(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),K_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}eh.type="LOCAL";const q_=eh;new ui(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(t,e){return e?$t(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl extends Zs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return tr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return tr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return tr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function X_(t){return Kd(t.auth,new tl(t),t.bypassAuthState)}function J_(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),T_(n,new tl(t),t.bypassAuthState)}async function Z_(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),I_(n,new tl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:a,type:s}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return X_;case"linkViaPopup":case"linkViaRedirect":return Z_;case"reauthViaPopup":case"reauthViaRedirect":return J_;default:bt(this.auth,"internal-error")}}resolve(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=new ui(2e3,1e4);class Wn extends th{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Wn.currentPopupAction&&Wn.currentPopupAction.cancel(),Wn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Dt(this.filter.length===1,"Popup operations only handle one event");const e=el();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Q_.get())};e()}}Wn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew="pendingRedirect",Hi=new Map;class tw extends th{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Hi.get(this.auth._key());if(!e){try{const r=await nw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Hi.set(this.auth._key(),e)}return this.bypassAuthState||Hi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nw(t,e){const n=ow(e),r=iw(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function rw(t,e){Hi.set(t._key(),e)}function iw(t){return $t(t._redirectPersistence)}function ow(t){return Ui(ew,t.config.apiKey,t.name)}async function aw(t,e,n=!1){const r=dr(t),i=Y_(r,e),a=await new tw(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw=10*60*1e3;class lw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!nh(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Tt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sw&&this.cachedEventUids.clear(),this.cachedEventUids.has(su(e))}saveEventToCache(e){this.cachedEventUids.add(su(e)),this.lastProcessedEventTime=Date.now()}}function su(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function nh({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nh(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uw(t,e={}){return _n(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dw=/^https?/;async function hw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await uw(t);for(const n of e)try{if(pw(n))return}catch{}bt(t,"unauthorized-domain")}function pw(t){const e=ts(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!dw.test(n))return!1;if(fw.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw=new ui(3e4,6e4);function lu(){const t=At().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gw(t){return new Promise((e,n)=>{var r,i,o;function a(){lu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{lu(),n(Tt(t,"network-request-failed"))},timeout:mw.get()})}if(!((i=(r=At().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=At().gapi)===null||o===void 0)&&o.load)a();else{const s=c_("iframefcb");return At()[s]=()=>{gapi.load?a():n(Tt(t,"network-request-failed"))},Hd(`${l_()}?onload=${s}`).catch(l=>n(l))}}).catch(e=>{throw Vi=null,e})}let Vi=null;function vw(t){return Vi=Vi||gw(t),Vi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw=new ui(5e3,15e3),yw="__/auth/iframe",_w="emulator/auth/iframe",ww={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ew(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ys(e,_w):`https://${t.config.authDomain}/${yw}`,r={apiKey:e.apiKey,appName:t.name,v:ci},i=Sw.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${li(r).slice(1)}`}async function Cw(t){const e=await vw(t),n=At().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:Ew(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ww,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=Tt(t,"network-request-failed"),s=At().setTimeout(()=>{o(a)},bw.get());function l(){At().clearTimeout(s),i(r)}r.ping(l).then(l,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Tw=500,Aw=600,Ow="_blank",Pw="http://localhost";class cu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xw(t,e,n,r=Tw,i=Aw){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const l=Object.assign(Object.assign({},Iw),{width:r.toString(),height:i.toString(),top:o,left:a}),c=Ge().toLowerCase();n&&(s=Nd(c)?Ow:n),$d(c)&&(e=e||Pw,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[m,b])=>`${d}${m}=${b},`,"");if(Z0(c)&&s!=="_self")return kw(e||"",s),new cu(null);const f=window.open(e||"",s,u);q(f,t,"popup-blocked");try{f.focus()}catch{}return new cu(f)}function kw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw="__/auth/handler",Lw="emulator/auth/handler",$w=encodeURIComponent("fac");async function uu(t,e,n,r,i,o){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ci,eventId:i};if(e instanceof zd){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",gy(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries(o||{}))a[u]=f}if(e instanceof fi){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(a.scopes=u.join(","))}t.tenantId&&(a.tid=t.tenantId);const s=a;for(const u of Object.keys(s))s[u]===void 0&&delete s[u];const l=await t._getAppCheckToken(),c=l?`#${$w}=${encodeURIComponent(l)}`:"";return`${Nw(t)}?${li(s).slice(1)}${c}`}function Nw({config:t}){return t.emulator?Ys(t,Lw):`https://${t.authDomain}/${Rw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha="webStorageSupport";class Mw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xd,this._completeRedirectFn=aw,this._overrideRedirectResult=rw}async _openPopup(e,n,r,i){var o;Dt((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await uu(e,n,r,ts(),i);return xw(e,a,el())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await uu(e,n,r,ts(),i);return j_(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Dt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Cw(e),r=new lw(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ha,{type:ha},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[ha];a!==void 0&&n(!!a),bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Bd()||Js()||Lo()}}const Dw=Mw;var fu="@firebase/auth",du="1.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Bw(t){Kr(new ar("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:s}=r.options;q(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ud(t)},c=new o_(r,i,o,l);return p_(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Kr(new ar("auth-internal",e=>{const n=dr(e.getProvider("auth").getImmediate());return(r=>new Fw(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qn(fu,du,jw(t)),Qn(fu,du,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw=5*60,Hw=bd("authIdTokenMaxAge")||Uw;let hu=null;const Vw=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Hw)return;const i=n==null?void 0:n.token;hu!==i&&(hu=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function rh(t=g0()){const e=Sd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=h_(t,{popupRedirectResolver:Dw,persistence:[q_,M_,Xd]}),r=bd("authTokenSyncURL");if(r){const o=Vw(r);k_(n,o,()=>o(n.currentUser)),x_(n,a=>o(a))}const i=oy("auth");return i&&m_(n,`http://${i}`),n}function zw(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}a_({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=Tt("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",zw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Bw("Browser");function ih(t){const e=ce(t.currentUser),n=Re(()=>!!e.value);return t.onIdTokenChanged(r=>e.value=r),{isAuthenticated:n,user:e}}const Ww=rh(Td),{isAuthenticated:Kw,user:XE}=ih(Ww),Gw=[{path:"/",name:"home",component:Eb,meta:{requiresAuth:!0}},{path:"/read",name:"read",component:vb,meta:{requiresAuth:!0}},{path:"/write",name:"write",component:kb,meta:{requiresAuth:!0}},{path:"/math",name:"math",component:Ab,meta:{requiresAuth:!0}},{path:"/settings",name:"settings",component:Jb,meta:{requiresAuth:!0}},{path:"/loginPage",name:"loginPage",component:Hb}],nl=pv({history:xg(),routes:Gw});nl.beforeEach((t,e,n)=>{t.meta.requiresAuth&&!Kw.value?n({name:"loginPage",query:{redirect:t.fullPath}}):n()});const rs=rh(Td),{isAuthenticated:pu,user:qw}=ih(rs),hi=()=>({isAuthenticated:pu,user:qw,login:async(n,r)=>(await P_(rs,n,r),pu.value),logout:async()=>{await R_(rs),nl.push({name:"loginPage"})}});var Yw={},Xw=he.extend({style:Yw});function Jr(t){"@babel/helpers - typeof";return Jr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Jr(t)}function mu(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function gu(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?mu(Object(n),!0).forEach(function(r){Jw(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):mu(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Jw(t,e,n){return e=Zw(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Zw(t){var e=Qw(t,"string");return Jr(e)=="symbol"?e:String(e)}function Qw(t,e){if(Jr(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Jr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var e2=Xw.extend("focustrap",{mounted:function(e,n){var r=n.value||{},i=r.disabled;i||(this.createHiddenFocusableElements(e,n),this.bind(e,n),this.autoElementFocus(e,n)),e.setAttribute("data-pd-focustrap",!0),this.$el=e},updated:function(e,n){var r=n.value||{},i=r.disabled;i&&this.unbind(e)},unmounted:function(e){this.unbind(e)},methods:{getComputedSelector:function(e){return':not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])'.concat(e??"")},bind:function(e,n){var r=this,i=n.value||{},o=i.onFocusIn,a=i.onFocusOut;e.$_pfocustrap_mutationobserver=new MutationObserver(function(s){s.forEach(function(l){if(l.type==="childList"&&!e.contains(document.activeElement)){var c=function u(f){var d=X.isFocusableElement(f)?X.isFocusableElement(f,r.getComputedSelector(e.$_pfocustrap_focusableselector))?f:X.getFirstFocusableElement(e,r.getComputedSelector(e.$_pfocustrap_focusableselector)):X.getFirstFocusableElement(f);return te.isNotEmpty(d)?d:f.nextSibling&&u(f.nextSibling)};X.focus(c(l.nextSibling))}})}),e.$_pfocustrap_mutationobserver.disconnect(),e.$_pfocustrap_mutationobserver.observe(e,{childList:!0}),e.$_pfocustrap_focusinlistener=function(s){return o&&o(s)},e.$_pfocustrap_focusoutlistener=function(s){return a&&a(s)},e.addEventListener("focusin",e.$_pfocustrap_focusinlistener),e.addEventListener("focusout",e.$_pfocustrap_focusoutlistener)},unbind:function(e){e.$_pfocustrap_mutationobserver&&e.$_pfocustrap_mutationobserver.disconnect(),e.$_pfocustrap_focusinlistener&&e.removeEventListener("focusin",e.$_pfocustrap_focusinlistener)&&(e.$_pfocustrap_focusinlistener=null),e.$_pfocustrap_focusoutlistener&&e.removeEventListener("focusout",e.$_pfocustrap_focusoutlistener)&&(e.$_pfocustrap_focusoutlistener=null)},autoFocus:function(e){this.autoElementFocus(this.$el,{value:gu(gu({},e),{},{autoFocus:!0})})},autoElementFocus:function(e,n){var r=n.value||{},i=r.autoFocusSelector,o=i===void 0?"":i,a=r.firstFocusableSelector,s=a===void 0?"":a,l=r.autoFocus,c=l===void 0?!1:l,u=X.getFirstFocusableElement(e,"[autofocus]".concat(this.getComputedSelector(o)));c&&!u&&(u=X.getFirstFocusableElement(e,this.getComputedSelector(s))),X.focus(u)},onFirstHiddenElementFocus:function(e){var n,r=e.currentTarget,i=e.relatedTarget,o=i===r.$_pfocustrap_lasthiddenfocusableelement||!((n=this.$el)!==null&&n!==void 0&&n.contains(i))?X.getFirstFocusableElement(r.parentElement,this.getComputedSelector(r.$_pfocustrap_focusableselector)):r.$_pfocustrap_lasthiddenfocusableelement;X.focus(o)},onLastHiddenElementFocus:function(e){var n,r=e.currentTarget,i=e.relatedTarget,o=i===r.$_pfocustrap_firsthiddenfocusableelement||!((n=this.$el)!==null&&n!==void 0&&n.contains(i))?X.getLastFocusableElement(r.parentElement,this.getComputedSelector(r.$_pfocustrap_focusableselector)):r.$_pfocustrap_firsthiddenfocusableelement;X.focus(o)},createHiddenFocusableElements:function(e,n){var r=this,i=n.value||{},o=i.tabIndex,a=o===void 0?0:o,s=i.firstFocusableSelector,l=s===void 0?"":s,c=i.lastFocusableSelector,u=c===void 0?"":c,f=function(y){return X.createElement("span",{class:"p-hidden-accessible p-hidden-focusable",tabIndex:a,role:"presentation","aria-hidden":!0,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0,onFocus:y==null?void 0:y.bind(r)})},d=f(this.onFirstHiddenElementFocus),m=f(this.onLastHiddenElementFocus);d.$_pfocustrap_lasthiddenfocusableelement=m,d.$_pfocustrap_focusableselector=l,d.setAttribute("data-pc-section","firstfocusableelement"),m.$_pfocustrap_firsthiddenfocusableelement=d,m.$_pfocustrap_focusableselector=u,m.setAttribute("data-pc-section","lastfocusableelement"),e.prepend(d),e.append(m)}}}),oh={name:"TimesIcon",extends:ko},t2=V("path",{d:"M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",fill:"currentColor"},null,-1),n2=[t2];function r2(t,e,n,r,i,o){return J(),ae("svg",ie({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),n2,16)}oh.render=r2;var ah={name:"WindowMaximizeIcon",extends:ko},i2=["clip-path"],o2=V("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z",fill:"currentColor"},null,-1),a2=[o2],s2=["id"],l2=V("rect",{width:"14",height:"14",fill:"white"},null,-1),c2=[l2];function u2(t,e,n,r,i,o){return J(),ae("svg",ie({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),[V("g",{"clip-path":"url(#".concat(t.pathId,")")},a2,8,i2),V("defs",null,[V("clipPath",{id:"".concat(t.pathId)},c2,8,s2)])],16)}ah.render=u2;var sh={name:"WindowMinimizeIcon",extends:ko},f2=["clip-path"],d2=V("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z",fill:"currentColor"},null,-1),h2=[d2],p2=["id"],m2=V("rect",{width:"14",height:"14",fill:"white"},null,-1),g2=[m2];function v2(t,e,n,r,i,o){return J(),ae("svg",ie({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),[V("g",{"clip-path":"url(#".concat(t.pathId,")")},h2,8,f2),V("defs",null,[V("clipPath",{id:"".concat(t.pathId)},g2,8,p2)])],16)}sh.render=v2;var lh={name:"Portal",props:{appendTo:{type:[String,Object],default:"body"},disabled:{type:Boolean,default:!1}},data:function(){return{mounted:!1}},mounted:function(){this.mounted=X.isClient()},computed:{inline:function(){return this.disabled||this.appendTo==="self"}}};function b2(t,e,n,r,i,o){return o.inline?Ve(t.$slots,"default",{key:0}):i.mounted?(J(),It(ym,{key:1,to:n.appendTo},[Ve(t.$slots,"default")],8,["to"])):$e("",!0)}lh.render=b2;var y2=`
@layer primevue {
    .p-dialog-mask.p-component-overlay {
        pointer-events: auto;
    }

    .p-dialog {
        max-height: 90%;
        transform: scale(1);
    }

    .p-dialog-content {
        overflow-y: auto;
    }

    .p-dialog-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
    }

    .p-dialog-footer {
        flex-shrink: 0;
    }

    .p-dialog .p-dialog-header-icons {
        display: flex;
        align-items: center;
    }

    .p-dialog .p-dialog-header-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
    }

    /* Fluid */
    .p-fluid .p-dialog-footer .p-button {
        width: auto;
    }

    /* Animation */
    /* Center */
    .p-dialog-enter-active {
        transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
    }
    .p-dialog-leave-active {
        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    .p-dialog-enter-from,
    .p-dialog-leave-to {
        opacity: 0;
        transform: scale(0.7);
    }

    /* Top, Bottom, Left, Right, Top* and Bottom* */
    .p-dialog-top .p-dialog,
    .p-dialog-bottom .p-dialog,
    .p-dialog-left .p-dialog,
    .p-dialog-right .p-dialog,
    .p-dialog-topleft .p-dialog,
    .p-dialog-topright .p-dialog,
    .p-dialog-bottomleft .p-dialog,
    .p-dialog-bottomright .p-dialog {
        margin: 0.75rem;
        transform: translate3d(0px, 0px, 0px);
    }
    .p-dialog-top .p-dialog-enter-active,
    .p-dialog-top .p-dialog-leave-active,
    .p-dialog-bottom .p-dialog-enter-active,
    .p-dialog-bottom .p-dialog-leave-active,
    .p-dialog-left .p-dialog-enter-active,
    .p-dialog-left .p-dialog-leave-active,
    .p-dialog-right .p-dialog-enter-active,
    .p-dialog-right .p-dialog-leave-active,
    .p-dialog-topleft .p-dialog-enter-active,
    .p-dialog-topleft .p-dialog-leave-active,
    .p-dialog-topright .p-dialog-enter-active,
    .p-dialog-topright .p-dialog-leave-active,
    .p-dialog-bottomleft .p-dialog-enter-active,
    .p-dialog-bottomleft .p-dialog-leave-active,
    .p-dialog-bottomright .p-dialog-enter-active,
    .p-dialog-bottomright .p-dialog-leave-active {
        transition: all 0.3s ease-out;
    }
    .p-dialog-top .p-dialog-enter-from,
    .p-dialog-top .p-dialog-leave-to {
        transform: translate3d(0px, -100%, 0px);
    }
    .p-dialog-bottom .p-dialog-enter-from,
    .p-dialog-bottom .p-dialog-leave-to {
        transform: translate3d(0px, 100%, 0px);
    }
    .p-dialog-left .p-dialog-enter-from,
    .p-dialog-left .p-dialog-leave-to,
    .p-dialog-topleft .p-dialog-enter-from,
    .p-dialog-topleft .p-dialog-leave-to,
    .p-dialog-bottomleft .p-dialog-enter-from,
    .p-dialog-bottomleft .p-dialog-leave-to {
        transform: translate3d(-100%, 0px, 0px);
    }
    .p-dialog-right .p-dialog-enter-from,
    .p-dialog-right .p-dialog-leave-to,
    .p-dialog-topright .p-dialog-enter-from,
    .p-dialog-topright .p-dialog-leave-to,
    .p-dialog-bottomright .p-dialog-enter-from,
    .p-dialog-bottomright .p-dialog-leave-to {
        transform: translate3d(100%, 0px, 0px);
    }

    /* Maximize */
    .p-dialog-maximized {
        width: 100vw !important;
        height: 100vh !important;
        top: 0px !important;
        left: 0px !important;
        max-height: 100%;
        height: 100%;
    }
    .p-dialog-maximized .p-dialog-content {
        flex-grow: 1;
    }

    .p-confirm-dialog .p-dialog-content {
        display: flex;
        align-items: center;
    }
}
`,_2={mask:function(e){var n=e.position,r=e.modal;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:n==="left"||n==="topleft"||n==="bottomleft"?"flex-start":n==="right"||n==="topright"||n==="bottomright"?"flex-end":"center",alignItems:n==="top"||n==="topleft"||n==="topright"?"flex-start":n==="bottom"||n==="bottomleft"||n==="bottomright"?"flex-end":"center",pointerEvents:r?"auto":"none"}},root:{display:"flex",flexDirection:"column",pointerEvents:"auto"}},w2={mask:function(e){var n=e.props,r=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"],i=r.find(function(o){return o===n.position});return["p-dialog-mask",{"p-component-overlay p-component-overlay-enter":n.modal},i?"p-dialog-".concat(i):""]},root:function(e){var n=e.props,r=e.instance;return["p-dialog p-component",{"p-dialog-rtl":n.rtl,"p-dialog-maximized":n.maximizable&&r.maximized,"p-input-filled":r.$primevue.config.inputStyle==="filled","p-ripple-disabled":r.$primevue.config.ripple===!1}]},header:"p-dialog-header",title:"p-dialog-title",icons:"p-dialog-header-icons",maximizableButton:"p-dialog-header-icon p-dialog-header-maximize p-link",maximizableIcon:"p-dialog-header-maximize-icon",closeButton:"p-dialog-header-icon p-dialog-header-close p-link",closeButtonIcon:"p-dialog-header-close-icon",content:"p-dialog-content",footer:"p-dialog-footer"},S2=xt.extend({name:"dialog",css:y2,classes:w2,inlineStyles:_2}),E2={name:"BaseDialog",extends:ai,props:{header:{type:null,default:null},footer:{type:null,default:null},visible:{type:Boolean,default:!1},modal:{type:Boolean,default:null},contentStyle:{type:null,default:null},contentClass:{type:String,default:null},contentProps:{type:null,default:null},rtl:{type:Boolean,default:null},maximizable:{type:Boolean,default:!1},dismissableMask:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:[String,Object],default:"body"},closeIcon:{type:String,default:void 0},maximizeIcon:{type:String,default:void 0},minimizeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null},_instance:null},style:S2,provide:function(){return{$parentInstance:this}}},ch={name:"Dialog",extends:E2,inheritAttrs:!1,emits:["update:visible","show","hide","after-hide","maximize","unmaximize","dragend"],provide:function(){var e=this;return{dialogRef:Re(function(){return e._instance})}},data:function(){return{containerVisible:this.visible,maximized:!1,focusableMax:null,focusableClose:null}},documentKeydownListener:null,container:null,mask:null,content:null,headerContainer:null,footerContainer:null,maximizableButton:null,closeButton:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask&&this.autoZIndex&&ra.clear(this.mask),this.container=null,this.mask=null},mounted:function(){this.breakpoints&&this.createStyle()},methods:{close:function(){this.$emit("update:visible",!1)},onBeforeEnter:function(e){e.setAttribute(this.attributeSelector,"")},onEnter:function(){this.$emit("show"),this.focus(),this.enableDocumentSettings(),this.bindGlobalListeners(),this.autoZIndex&&ra.set("modal",this.mask,this.baseZIndex+this.$primevue.config.zIndex.modal)},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&X.addClass(this.mask,"p-component-overlay-leave")},onLeave:function(){this.$emit("hide"),this.focusableClose=null,this.focusableMax=null},onAfterLeave:function(){this.autoZIndex&&ra.clear(this.mask),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners(),this.$emit("after-hide")},onMaskClick:function(e){this.dismissableMask&&this.modal&&this.mask===e.target&&this.close()},focus:function(){var e=function(i){return i&&i.querySelector("[autofocus]")},n=this.$slots.footer&&e(this.footerContainer);n||(n=this.$slots.header&&e(this.headerContainer),n||(n=this.$slots.default&&e(this.content),n||(this.maximizable?(this.focusableMax=!0,n=this.maximizableButton):(this.focusableClose=!0,n=this.closeButton)))),n&&X.focus(n,{focusVisible:!0})},maximize:function(e){this.maximized?(this.maximized=!1,this.$emit("unmaximize",e)):(this.maximized=!0,this.$emit("maximize",e)),this.modal||(this.maximized?X.blockBodyScroll():X.unblockBodyScroll())},enableDocumentSettings:function(){(this.modal||!this.modal&&this.blockScroll||this.maximizable&&this.maximized)&&X.blockBodyScroll()},unbindDocumentState:function(){(this.modal||!this.modal&&this.blockScroll||this.maximizable&&this.maximized)&&X.unblockBodyScroll()},onKeyDown:function(e){e.code==="Escape"&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},containerRef:function(e){this.container=e},maskRef:function(e){this.mask=e},contentRef:function(e){this.content=e},headerContainerRef:function(e){this.headerContainer=e},footerContainerRef:function(e){this.footerContainer=e},maximizableRef:function(e){this.maximizableButton=e},closeButtonRef:function(e){this.closeButton=e},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var e;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",X.setAttribute(this.styleElement,"nonce",(e=this.$primevue)===null||e===void 0||(e=e.config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce),document.head.appendChild(this.styleElement);var n="";for(var r in this.breakpoints)n+=`
                        @media screen and (max-width: `.concat(r,`) {
                            .p-dialog[`).concat(this.attributeSelector,`] {
                                width: `).concat(this.breakpoints[r],` !important;
                            }
                        }
                    `);this.styleElement.innerHTML=n}},destroyStyle:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag:function(e){e.target.closest("div").getAttribute("data-pc-section")!=="icons"&&this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",!this.isUnstyled&&X.addClass(document.body,"p-unselectable-text"))},bindGlobalListeners:function(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners:function(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener:function(){var e=this;this.documentDragListener=function(n){if(e.dragging){var r=X.getOuterWidth(e.container),i=X.getOuterHeight(e.container),o=n.pageX-e.lastPageX,a=n.pageY-e.lastPageY,s=e.container.getBoundingClientRect(),l=s.left+o,c=s.top+a,u=X.getViewport(),f=getComputedStyle(e.container),d=parseFloat(f.marginLeft),m=parseFloat(f.marginTop);e.container.style.position="fixed",e.keepInViewport?(l>=e.minX&&l+r<u.width&&(e.lastPageX=n.pageX,e.container.style.left=l-d+"px"),c>=e.minY&&c+i<u.height&&(e.lastPageY=n.pageY,e.container.style.top=c-m+"px")):(e.lastPageX=n.pageX,e.container.style.left=l-d+"px",e.lastPageY=n.pageY,e.container.style.top=c-m+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener:function(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener:function(){var e=this;this.documentDragEndListener=function(n){e.dragging&&(e.dragging=!1,!e.isUnstyled&&X.removeClass(document.body,"p-unselectable-text"),e.$emit("dragend",n))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener:function(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maximizeIconComponent:function(){return this.maximized?this.minimizeIcon?"span":"WindowMinimizeIcon":this.maximizeIcon?"span":"WindowMaximizeIcon"},ariaId:function(){return Wa()},ariaLabelledById:function(){return this.header!=null||this.$attrs["aria-labelledby"]!==null?this.ariaId+"_header":null},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},attributeSelector:function(){return Wa()}},directives:{ripple:dd,focustrap:e2},components:{Portal:lh,WindowMinimizeIcon:sh,WindowMaximizeIcon:ah,TimesIcon:oh}};function Zr(t){"@babel/helpers - typeof";return Zr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Zr(t)}function vu(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Hn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?vu(Object(n),!0).forEach(function(r){C2(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):vu(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function C2(t,e,n){return e=I2(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function I2(t){var e=T2(t,"string");return Zr(e)=="symbol"?e:String(e)}function T2(t,e){if(Zr(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Zr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var A2=["aria-labelledby","aria-modal"],O2=["id"],P2=["autofocus","tabindex"],x2=["autofocus","aria-label"];function k2(t,e,n,r,i,o){var a=pn("Portal"),s=Ta("ripple"),l=Ta("focustrap");return J(),It(a,{appendTo:t.appendTo},{default:He(function(){return[i.containerVisible?(J(),ae("div",ie({key:0,ref:o.maskRef,class:t.cx("mask"),style:t.sx("mask",!0,{position:t.position,modal:t.modal}),onClick:e[3]||(e[3]=function(){return o.onMaskClick&&o.onMaskClick.apply(o,arguments)})},t.ptm("mask")),[ee(js,ie({name:"p-dialog",onBeforeEnter:o.onBeforeEnter,onEnter:o.onEnter,onBeforeLeave:o.onBeforeLeave,onLeave:o.onLeave,onAfterLeave:o.onAfterLeave,appear:""},t.ptm("transition")),{default:He(function(){return[t.visible?Zn((J(),ae("div",ie({key:0,ref:o.containerRef,class:t.cx("root"),style:t.sx("root"),role:"dialog","aria-labelledby":o.ariaLabelledById,"aria-modal":t.modal},Hn(Hn({},t.$attrs),t.ptm("root"))),[t.$slots.container?Ve(t.$slots,"container",{key:0,onClose:o.close,onMaximize:function(u){return o.maximize(u)},closeCallback:o.close,maximizeCallback:function(u){return o.maximize(u)}}):(J(),ae(Ue,{key:1},[t.showHeader?(J(),ae("div",ie({key:0,ref:o.headerContainerRef,class:t.cx("header"),onMousedown:e[2]||(e[2]=function(){return o.initDrag&&o.initDrag.apply(o,arguments)})},t.ptm("header")),[Ve(t.$slots,"header",{class:sn(t.cx("title"))},function(){return[t.header?(J(),ae("span",ie({key:0,id:o.ariaLabelledById,class:t.cx("title")},t.ptm("title")),Et(t.header),17,O2)):$e("",!0)]}),V("div",ie({class:t.cx("icons")},t.ptm("icons")),[t.maximizable?Zn((J(),ae("button",ie({key:0,ref:o.maximizableRef,autofocus:i.focusableMax,class:t.cx("maximizableButton"),onClick:e[0]||(e[0]=function(){return o.maximize&&o.maximize.apply(o,arguments)}),type:"button",tabindex:t.maximizable?"0":"-1"},t.ptm("maximizableButton"),{"data-pc-group-section":"headericon"}),[Ve(t.$slots,"maximizeicon",{maximized:i.maximized,class:sn(t.cx("maximizableIcon"))},function(){return[(J(),It(Pl(o.maximizeIconComponent),ie({class:[t.cx("maximizableIcon"),i.maximized?t.minimizeIcon:t.maximizeIcon]},t.ptm("maximizableIcon")),null,16,["class"]))]})],16,P2)),[[s]]):$e("",!0),t.closable?Zn((J(),ae("button",ie({key:1,ref:o.closeButtonRef,autofocus:i.focusableClose,class:t.cx("closeButton"),onClick:e[1]||(e[1]=function(){return o.close&&o.close.apply(o,arguments)}),"aria-label":o.closeAriaLabel,type:"button"},Hn(Hn({},t.closeButtonProps),t.ptm("closeButton")),{"data-pc-group-section":"headericon"}),[Ve(t.$slots,"closeicon",{class:sn(t.cx("closeButtonIcon"))},function(){return[(J(),It(Pl(t.closeIcon?"span":"TimesIcon"),ie({class:[t.cx("closeButtonIcon"),t.closeIcon]},t.ptm("closeButtonIcon")),null,16,["class"]))]})],16,x2)),[[s]]):$e("",!0)],16)],16)):$e("",!0),V("div",ie({ref:o.contentRef,class:[t.cx("content"),t.contentClass],style:t.contentStyle},Hn(Hn({},t.contentProps),t.ptm("content"))),[Ve(t.$slots,"default")],16),t.footer||t.$slots.footer?(J(),ae("div",ie({key:1,ref:o.footerContainerRef,class:t.cx("footer")},t.ptm("footer")),[Ve(t.$slots,"footer",{},function(){return[un(Et(t.footer),1)]})],16)):$e("",!0)],64))],16,A2)),[[l,{disabled:!t.modal}]]):$e("",!0)]}),_:3},16,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):$e("",!0)]}),_:3},8,["appendTo"])}ch.render=k2;const R2={class:"card flex justify-content-center"},L2={key:0},$2={class:"logout-btn-wrapper"},N2={__name:"ProfileModal",setup(t){const{isAuthenticated:e,logout:n,user:r}=hi(),i=ce("topright"),o=ce(!1),a=s=>{i.value=s,o.value=!0};return console.log(e),(s,l)=>{const c=pn("font-awesome-icon");return J(),ae("div",R2,[V("button",{onClick:l[0]||(l[0]=u=>a("topright")),class:"setting-btn"},[ee(c,{class:"setting-icon",icon:"fa-solid fa-gear",size:"sm",style:{color:"#B197FC"}})]),ee(Ae(ch),{visible:o.value,"onUpdate:visible":l[1]||(l[1]=u=>o.value=u),modal:"",header:"Settings",style:{width:"25rem"}},{default:He(()=>[Ae(e)?(J(),ae("div",L2,[V("div",null,Et(Ae(r).email),1),V("div",$2,[ee(Ae(to),{onClick:Ae(n),class:"logout-btn"},{default:He(()=>[un("Logout")]),_:1},8,["onClick"])])])):$e("",!0)]),_:1},8,["visible"])])}}},M2={key:0,class:"nav-container"},D2={class:"nav-btns"},F2={class:"reading button"},j2={class:"writing button"},B2={class:"math button"},U2={key:0},H2={__name:"Navbar",setup(t){const{isAuthenticated:e,logout:n,user:r}=hi();return(i,o)=>{const a=pn("font-awesome-icon"),s=pn("RouterLink");return Ae(e)?(J(),ae("nav",M2,[ee(s,{class:"home-icon",to:"/"},{default:He(()=>[ee(a,{class:"brain-icon",icon:"fa-solid fa-brain",size:"2xl",style:{color:"#FFD43B"}}),ee(a,{class:"lightbulb-icon",icon:"fa-solid fa-lightbulb",size:"2xl",style:{color:"#63E6BE"}})]),_:1}),V("div",D2,[V("button",F2,[ee(s,{to:"/read"},{default:He(()=>[ee(a,{icon:"fa-solid fa-book",size:"xl",style:{color:"#63E6BE"}}),un(" Reading")]),_:1})]),V("button",j2,[ee(s,{to:"/write"},{default:He(()=>[ee(a,{icon:"fa-solid fa-pen",size:"xl",style:{color:"#B197FC"}}),un(" Writing")]),_:1})]),V("button",B2,[ee(s,{to:"/math"},{default:He(()=>[ee(a,{icon:"fa-solid fa-square-root-variable",size:"xl",style:{color:"#ff8ae9"}}),un(" Math")]),_:1})])]),Ae(e)?(J(),ae("div",U2,[ee(N2)])):$e("",!0)])):$e("",!0)}}},V2={__name:"App",setup(t){return(e,n)=>{const r=pn("router-view");return J(),ae(Ue,null,[ee(H2),ee(r)],64)}}};function bu(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?bu(Object(n),!0).forEach(function(r){je(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):bu(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function co(t){"@babel/helpers - typeof";return co=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},co(t)}function z2(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function yu(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function W2(t,e,n){return e&&yu(t.prototype,e),n&&yu(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function je(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function rl(t,e){return G2(t)||Y2(t,e)||uh(t,e)||J2()}function pi(t){return K2(t)||q2(t)||uh(t)||X2()}function K2(t){if(Array.isArray(t))return is(t)}function G2(t){if(Array.isArray(t))return t}function q2(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Y2(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,a,s;try{for(n=n.call(t);!(i=(a=n.next()).done)&&(r.push(a.value),!(e&&r.length===e));i=!0);}catch(l){o=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw s}}return r}}function uh(t,e){if(t){if(typeof t=="string")return is(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return is(t,e)}}function is(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function X2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var _u=function(){},il={},fh={},dh=null,hh={mark:_u,measure:_u};try{typeof window<"u"&&(il=window),typeof document<"u"&&(fh=document),typeof MutationObserver<"u"&&(dh=MutationObserver),typeof performance<"u"&&(hh=performance)}catch{}var Z2=il.navigator||{},wu=Z2.userAgent,Su=wu===void 0?"":wu,mn=il,Se=fh,Eu=dh,Ti=hh;mn.document;var Ht=!!Se.documentElement&&!!Se.head&&typeof Se.addEventListener=="function"&&typeof Se.createElement=="function",ph=~Su.indexOf("MSIE")||~Su.indexOf("Trident/"),Ai,Oi,Pi,xi,ki,Ft="___FONT_AWESOME___",os=16,mh="fa",gh="svg-inline--fa",Mn="data-fa-i2svg",as="data-fa-pseudo-element",Q2="data-fa-pseudo-element-pending",ol="data-prefix",al="data-icon",Cu="fontawesome-i2svg",eS="async",tS=["HTML","HEAD","STYLE","SCRIPT"],vh=function(){try{return!0}catch{return!1}}(),we="classic",xe="sharp",sl=[we,xe];function mi(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[we]}})}var Qr=mi((Ai={},je(Ai,we,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),je(Ai,xe,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Ai)),ei=mi((Oi={},je(Oi,we,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),je(Oi,xe,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Oi)),ti=mi((Pi={},je(Pi,we,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),je(Pi,xe,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Pi)),nS=mi((xi={},je(xi,we,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),je(xi,xe,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),xi)),rS=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,bh="fa-layers-text",iS=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,oS=mi((ki={},je(ki,we,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),je(ki,xe,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),ki)),yh=[1,2,3,4,5,6,7,8,9,10],aS=yh.concat([11,12,13,14,15,16,17,18,19,20]),sS=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Pn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ni=new Set;Object.keys(ei[we]).map(ni.add.bind(ni));Object.keys(ei[xe]).map(ni.add.bind(ni));var lS=[].concat(sl,pi(ni),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Pn.GROUP,Pn.SWAP_OPACITY,Pn.PRIMARY,Pn.SECONDARY]).concat(yh.map(function(t){return"".concat(t,"x")})).concat(aS.map(function(t){return"w-".concat(t)})),kr=mn.FontAwesomeConfig||{};function cS(t){var e=Se.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function uS(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Se&&typeof Se.querySelector=="function"){var fS=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];fS.forEach(function(t){var e=rl(t,2),n=e[0],r=e[1],i=uS(cS(n));i!=null&&(kr[r]=i)})}var _h={styleDefault:"solid",familyDefault:"classic",cssPrefix:mh,replacementClass:gh,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};kr.familyPrefix&&(kr.cssPrefix=kr.familyPrefix);var lr=M(M({},_h),kr);lr.autoReplaceSvg||(lr.observeMutations=!1);var H={};Object.keys(_h).forEach(function(t){Object.defineProperty(H,t,{enumerable:!0,set:function(n){lr[t]=n,Rr.forEach(function(r){return r(H)})},get:function(){return lr[t]}})});Object.defineProperty(H,"familyPrefix",{enumerable:!0,set:function(e){lr.cssPrefix=e,Rr.forEach(function(n){return n(H)})},get:function(){return lr.cssPrefix}});mn.FontAwesomeConfig=H;var Rr=[];function dS(t){return Rr.push(t),function(){Rr.splice(Rr.indexOf(t),1)}}var Xt=os,Ct={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function hS(t){if(!(!t||!Ht)){var e=Se.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Se.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],a=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=o)}return Se.head.insertBefore(e,r),t}}var pS="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ri(){for(var t=12,e="";t-- >0;)e+=pS[Math.random()*62|0];return e}function pr(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function ll(t){return t.classList?pr(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function wh(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function mS(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(wh(t[n]),'" ')},"").trim()}function Do(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function cl(t){return t.size!==Ct.size||t.x!==Ct.x||t.y!==Ct.y||t.rotate!==Ct.rotate||t.flipX||t.flipY}function gS(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),a="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(o," ").concat(a," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function vS(t){var e=t.transform,n=t.width,r=n===void 0?os:n,i=t.height,o=i===void 0?os:i,a=t.startCentered,s=a===void 0?!1:a,l="";return s&&ph?l+="translate(".concat(e.x/Xt-r/2,"em, ").concat(e.y/Xt-o/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/Xt,"em), calc(-50% + ").concat(e.y/Xt,"em)) "):l+="translate(".concat(e.x/Xt,"em, ").concat(e.y/Xt,"em) "),l+="scale(".concat(e.size/Xt*(e.flipX?-1:1),", ").concat(e.size/Xt*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var bS=`:root, :host {
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
}`;function Sh(){var t=mh,e=gh,n=H.cssPrefix,r=H.replacementClass,i=bS;if(n!==t||r!==e){var o=new RegExp("\\.".concat(t,"\\-"),"g"),a=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");i=i.replace(o,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var Iu=!1;function pa(){H.autoAddCss&&!Iu&&(hS(Sh()),Iu=!0)}var yS={mixout:function(){return{dom:{css:Sh,insertCss:pa}}},hooks:function(){return{beforeDOMElementCreation:function(){pa()},beforeI2svg:function(){pa()}}}},jt=mn||{};jt[Ft]||(jt[Ft]={});jt[Ft].styles||(jt[Ft].styles={});jt[Ft].hooks||(jt[Ft].hooks={});jt[Ft].shims||(jt[Ft].shims=[]);var gt=jt[Ft],Eh=[],_S=function t(){Se.removeEventListener("DOMContentLoaded",t),uo=1,Eh.map(function(e){return e()})},uo=!1;Ht&&(uo=(Se.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Se.readyState),uo||Se.addEventListener("DOMContentLoaded",_S));function wS(t){Ht&&(uo?setTimeout(t,0):Eh.push(t))}function gi(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,o=i===void 0?[]:i;return typeof t=="string"?wh(t):"<".concat(e," ").concat(mS(r),">").concat(o.map(gi).join(""),"</").concat(e,">")}function Tu(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var SS=function(e,n){return function(r,i,o,a){return e.call(n,r,i,o,a)}},ma=function(e,n,r,i){var o=Object.keys(e),a=o.length,s=i!==void 0?SS(n,i):n,l,c,u;for(r===void 0?(l=1,u=e[o[0]]):(l=0,u=r);l<a;l++)c=o[l],u=s(u,e[c],c,e);return u};function ES(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=t.charCodeAt(n++);(o&64512)==56320?e.push(((i&1023)<<10)+(o&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function ss(t){var e=ES(t);return e.length===1?e[0].toString(16):null}function CS(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Au(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function ls(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=Au(e);typeof gt.hooks.addPack=="function"&&!i?gt.hooks.addPack(t,Au(e)):gt.styles[t]=M(M({},gt.styles[t]||{}),o),t==="fas"&&ls("fa",e)}var Ri,Li,$i,Kn=gt.styles,IS=gt.shims,TS=(Ri={},je(Ri,we,Object.values(ti[we])),je(Ri,xe,Object.values(ti[xe])),Ri),ul=null,Ch={},Ih={},Th={},Ah={},Oh={},AS=(Li={},je(Li,we,Object.keys(Qr[we])),je(Li,xe,Object.keys(Qr[xe])),Li);function OS(t){return~lS.indexOf(t)}function PS(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!OS(i)?i:null}var Ph=function(){var e=function(o){return ma(Kn,function(a,s,l){return a[l]=ma(s,o,{}),a},{})};Ch=e(function(i,o,a){if(o[3]&&(i[o[3]]=a),o[2]){var s=o[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=a})}return i}),Ih=e(function(i,o,a){if(i[a]=a,o[2]){var s=o[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=a})}return i}),Oh=e(function(i,o,a){var s=o[2];return i[a]=a,s.forEach(function(l){i[l]=a}),i});var n="far"in Kn||H.autoFetchSvg,r=ma(IS,function(i,o){var a=o[0],s=o[1],l=o[2];return s==="far"&&!n&&(s="fas"),typeof a=="string"&&(i.names[a]={prefix:s,iconName:l}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});Th=r.names,Ah=r.unicodes,ul=Fo(H.styleDefault,{family:H.familyDefault})};dS(function(t){ul=Fo(t.styleDefault,{family:H.familyDefault})});Ph();function fl(t,e){return(Ch[t]||{})[e]}function xS(t,e){return(Ih[t]||{})[e]}function xn(t,e){return(Oh[t]||{})[e]}function xh(t){return Th[t]||{prefix:null,iconName:null}}function kS(t){var e=Ah[t],n=fl("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function gn(){return ul}var dl=function(){return{prefix:null,iconName:null,rest:[]}};function Fo(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?we:n,i=Qr[r][t],o=ei[r][t]||ei[r][i],a=t in gt.styles?t:null;return o||a||null}var Ou=($i={},je($i,we,Object.keys(ti[we])),je($i,xe,Object.keys(ti[xe])),$i);function jo(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(e={},je(e,we,"".concat(H.cssPrefix,"-").concat(we)),je(e,xe,"".concat(H.cssPrefix,"-").concat(xe)),e),a=null,s=we;(t.includes(o[we])||t.some(function(c){return Ou[we].includes(c)}))&&(s=we),(t.includes(o[xe])||t.some(function(c){return Ou[xe].includes(c)}))&&(s=xe);var l=t.reduce(function(c,u){var f=PS(H.cssPrefix,u);if(Kn[u]?(u=TS[s].includes(u)?nS[s][u]:u,a=u,c.prefix=u):AS[s].indexOf(u)>-1?(a=u,c.prefix=Fo(u,{family:s})):f?c.iconName=f:u!==H.replacementClass&&u!==o[we]&&u!==o[xe]&&c.rest.push(u),!i&&c.prefix&&c.iconName){var d=a==="fa"?xh(c.iconName):{},m=xn(c.prefix,c.iconName);d.prefix&&(a=null),c.iconName=d.iconName||m||c.iconName,c.prefix=d.prefix||c.prefix,c.prefix==="far"&&!Kn.far&&Kn.fas&&!H.autoFetchSvg&&(c.prefix="fas")}return c},dl());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===xe&&(Kn.fass||H.autoFetchSvg)&&(l.prefix="fass",l.iconName=xn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||a==="fa")&&(l.prefix=gn()||"fas"),l}var RS=function(){function t(){z2(this,t),this.definitions={}}return W2(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var a=i.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(s){n.definitions[s]=M(M({},n.definitions[s]||{}),a[s]),ls(s,a[s]);var l=ti[we][s];l&&ls(l,a[s]),Ph()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var a=i[o],s=a.prefix,l=a.iconName,c=a.icon,u=c[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[s][f]=c)}),n[s][l]=c}),n}}]),t}(),Pu=[],Gn={},nr={},LS=Object.keys(nr);function $S(t,e){var n=e.mixoutsTo;return Pu=t,Gn={},Object.keys(nr).forEach(function(r){LS.indexOf(r)===-1&&delete nr[r]}),Pu.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(a){typeof i[a]=="function"&&(n[a]=i[a]),co(i[a])==="object"&&Object.keys(i[a]).forEach(function(s){n[a]||(n[a]={}),n[a][s]=i[a][s]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(a){Gn[a]||(Gn[a]=[]),Gn[a].push(o[a])})}r.provides&&r.provides(nr)}),n}function cs(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=Gn[t]||[];return o.forEach(function(a){e=a.apply(null,[e].concat(r))}),e}function Dn(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Gn[t]||[];i.forEach(function(o){o.apply(null,n)})}function Bt(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return nr[t]?nr[t].apply(null,e):void 0}function us(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||gn();if(e)return e=xn(n,e)||e,Tu(kh.definitions,n,e)||Tu(gt.styles,n,e)}var kh=new RS,NS=function(){H.autoReplaceSvg=!1,H.observeMutations=!1,Dn("noAuto")},MS={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ht?(Dn("beforeI2svg",e),Bt("pseudoElements2svg",e),Bt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;H.autoReplaceSvg===!1&&(H.autoReplaceSvg=!0),H.observeMutations=!0,wS(function(){FS({autoReplaceSvgRoot:n}),Dn("watch",e)})}},DS={icon:function(e){if(e===null)return null;if(co(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:xn(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Fo(e[0]);return{prefix:r,iconName:xn(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(H.cssPrefix,"-"))>-1||e.match(rS))){var i=jo(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||gn(),iconName:xn(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var o=gn();return{prefix:o,iconName:xn(o,e)||e}}}},ot={noAuto:NS,config:H,dom:MS,parse:DS,library:kh,findIconDefinition:us,toHtml:gi},FS=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Se:n;(Object.keys(gt.styles).length>0||H.autoFetchSvg)&&Ht&&H.autoReplaceSvg&&ot.dom.i2svg({node:r})};function Bo(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return gi(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Ht){var r=Se.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function jS(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,o=t.styles,a=t.transform;if(cl(a)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};i.style=Do(M(M({},o),{},{"transform-origin":"".concat(c.x+a.x/16,"em ").concat(c.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function BS(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,o=t.symbol,a=o===!0?"".concat(e,"-").concat(H.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:M(M({},i),{},{id:a}),children:r}]}]}function hl(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,o=t.iconName,a=t.transform,s=t.symbol,l=t.title,c=t.maskId,u=t.titleId,f=t.extra,d=t.watchable,m=d===void 0?!1:d,b=r.found?r:n,y=b.width,_=b.height,g=i==="fak",w=[H.replacementClass,o?"".concat(H.cssPrefix,"-").concat(o):""].filter(function(U){return f.classes.indexOf(U)===-1}).filter(function(U){return U!==""||!!U}).concat(f.classes).join(" "),T={children:[],attributes:M(M({},f.attributes),{},{"data-prefix":i,"data-icon":o,class:w,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(_)})},L=g&&!~f.classes.indexOf("fa-fw")?{width:"".concat(y/_*16*.0625,"em")}:{};m&&(T.attributes[Mn]=""),l&&(T.children.push({tag:"title",attributes:{id:T.attributes["aria-labelledby"]||"title-".concat(u||ri())},children:[l]}),delete T.attributes.title);var F=M(M({},T),{},{prefix:i,iconName:o,main:n,mask:r,maskId:c,transform:a,symbol:s,styles:M(M({},L),f.styles)}),k=r.found&&n.found?Bt("generateAbstractMask",F)||{children:[],attributes:{}}:Bt("generateAbstractIcon",F)||{children:[],attributes:{}},z=k.children,j=k.attributes;return F.children=z,F.attributes=j,s?BS(F):jS(F)}function xu(t){var e=t.content,n=t.width,r=t.height,i=t.transform,o=t.title,a=t.extra,s=t.watchable,l=s===void 0?!1:s,c=M(M(M({},a.attributes),o?{title:o}:{}),{},{class:a.classes.join(" ")});l&&(c[Mn]="");var u=M({},a.styles);cl(i)&&(u.transform=vS({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var f=Do(u);f.length>0&&(c.style=f);var d=[];return d.push({tag:"span",attributes:c,children:[e]}),o&&d.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),d}function US(t){var e=t.content,n=t.title,r=t.extra,i=M(M(M({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=Do(r.styles);o.length>0&&(i.style=o);var a=[];return a.push({tag:"span",attributes:i,children:[e]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var ga=gt.styles;function fs(t){var e=t[0],n=t[1],r=t.slice(4),i=rl(r,1),o=i[0],a=null;return Array.isArray(o)?a={tag:"g",attributes:{class:"".concat(H.cssPrefix,"-").concat(Pn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(Pn.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(Pn.PRIMARY),fill:"currentColor",d:o[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:e,height:n,icon:a}}var HS={found:!1,width:512,height:512};function VS(t,e){!vh&&!H.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ds(t,e){var n=e;return e==="fa"&&H.styleDefault!==null&&(e=gn()),new Promise(function(r,i){if(Bt("missingIconAbstract"),n==="fa"){var o=xh(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&ga[e]&&ga[e][t]){var a=ga[e][t];return r(fs(a))}VS(t,e),r(M(M({},HS),{},{icon:H.showMissingIcons&&t?Bt("missingIconAbstract")||{}:{}}))})}var ku=function(){},hs=H.measurePerformance&&Ti&&Ti.mark&&Ti.measure?Ti:{mark:ku,measure:ku},wr='FA "6.5.1"',zS=function(e){return hs.mark("".concat(wr," ").concat(e," begins")),function(){return Rh(e)}},Rh=function(e){hs.mark("".concat(wr," ").concat(e," ends")),hs.measure("".concat(wr," ").concat(e),"".concat(wr," ").concat(e," begins"),"".concat(wr," ").concat(e," ends"))},pl={begin:zS,end:Rh},zi=function(){};function Ru(t){var e=t.getAttribute?t.getAttribute(Mn):null;return typeof e=="string"}function WS(t){var e=t.getAttribute?t.getAttribute(ol):null,n=t.getAttribute?t.getAttribute(al):null;return e&&n}function KS(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(H.replacementClass)}function GS(){if(H.autoReplaceSvg===!0)return Wi.replace;var t=Wi[H.autoReplaceSvg];return t||Wi.replace}function qS(t){return Se.createElementNS("http://www.w3.org/2000/svg",t)}function YS(t){return Se.createElement(t)}function Lh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?qS:YS:n;if(typeof t=="string")return Se.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(a){i.setAttribute(a,t.attributes[a])});var o=t.children||[];return o.forEach(function(a){i.appendChild(Lh(a,{ceFn:r}))}),i}function XS(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Wi={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(Lh(i),n)}),n.getAttribute(Mn)===null&&H.keepOriginalSource){var r=Se.createComment(XS(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~ll(n).indexOf(H.replacementClass))return Wi.replace(e);var i=new RegExp("".concat(H.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(s,l){return l===H.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var a=r.map(function(s){return gi(s)}).join(`
`);n.setAttribute(Mn,""),n.innerHTML=a}};function Lu(t){t()}function $h(t,e){var n=typeof e=="function"?e:zi;if(t.length===0)n();else{var r=Lu;H.mutateApproach===eS&&(r=mn.requestAnimationFrame||Lu),r(function(){var i=GS(),o=pl.begin("mutate");t.map(i),o(),n()})}}var ml=!1;function Nh(){ml=!0}function ps(){ml=!1}var fo=null;function $u(t){if(Eu&&H.observeMutations){var e=t.treeCallback,n=e===void 0?zi:e,r=t.nodeCallback,i=r===void 0?zi:r,o=t.pseudoElementsCallback,a=o===void 0?zi:o,s=t.observeMutationsRoot,l=s===void 0?Se:s;fo=new Eu(function(c){if(!ml){var u=gn();pr(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Ru(f.addedNodes[0])&&(H.searchPseudoElements&&a(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&H.searchPseudoElements&&a(f.target.parentNode),f.type==="attributes"&&Ru(f.target)&&~sS.indexOf(f.attributeName))if(f.attributeName==="class"&&WS(f.target)){var d=jo(ll(f.target)),m=d.prefix,b=d.iconName;f.target.setAttribute(ol,m||u),b&&f.target.setAttribute(al,b)}else KS(f.target)&&i(f.target)})}}),Ht&&fo.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function JS(){fo&&fo.disconnect()}function ZS(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var o=i.split(":"),a=o[0],s=o.slice(1);return a&&s.length>0&&(r[a]=s.join(":").trim()),r},{})),n}function QS(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=jo(ll(t));return i.prefix||(i.prefix=gn()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=xS(i.prefix,t.innerText)||fl(i.prefix,ss(t.innerText))),!i.iconName&&H.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function eE(t){var e=pr(t.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return H.autoA11y&&(n?e["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(r||ri()):(e["aria-hidden"]="true",e.focusable="false")),e}function tE(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ct,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Nu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=QS(t),r=n.iconName,i=n.prefix,o=n.rest,a=eE(t),s=cs("parseNodeAttributes",{},t),l=e.styleParser?ZS(t):[];return M({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Ct,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:a}},s)}var nE=gt.styles;function Mh(t){var e=H.autoReplaceSvg==="nest"?Nu(t,{styleParser:!1}):Nu(t);return~e.extra.classes.indexOf(bh)?Bt("generateLayersText",t,e):Bt("generateSvgReplacementMutation",t,e)}var vn=new Set;sl.map(function(t){vn.add("fa-".concat(t))});Object.keys(Qr[we]).map(vn.add.bind(vn));Object.keys(Qr[xe]).map(vn.add.bind(vn));vn=pi(vn);function Mu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ht)return Promise.resolve();var n=Se.documentElement.classList,r=function(f){return n.add("".concat(Cu,"-").concat(f))},i=function(f){return n.remove("".concat(Cu,"-").concat(f))},o=H.autoFetchSvg?vn:sl.map(function(u){return"fa-".concat(u)}).concat(Object.keys(nE));o.includes("fa")||o.push("fa");var a=[".".concat(bh,":not([").concat(Mn,"])")].concat(o.map(function(u){return".".concat(u,":not([").concat(Mn,"])")})).join(", ");if(a.length===0)return Promise.resolve();var s=[];try{s=pr(t.querySelectorAll(a))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=pl.begin("onTree"),c=s.reduce(function(u,f){try{var d=Mh(f);d&&u.push(d)}catch(m){vh||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise(function(u,f){Promise.all(c).then(function(d){$h(d,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(d){l(),f(d)})})}function rE(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Mh(t).then(function(n){n&&$h([n],e)})}function iE(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:us(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:us(i||{})),t(r,M(M({},n),{},{mask:i}))}}var oE=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Ct:r,o=n.symbol,a=o===void 0?!1:o,s=n.mask,l=s===void 0?null:s,c=n.maskId,u=c===void 0?null:c,f=n.title,d=f===void 0?null:f,m=n.titleId,b=m===void 0?null:m,y=n.classes,_=y===void 0?[]:y,g=n.attributes,w=g===void 0?{}:g,T=n.styles,L=T===void 0?{}:T;if(e){var F=e.prefix,k=e.iconName,z=e.icon;return Bo(M({type:"icon"},e),function(){return Dn("beforeDOMElementCreation",{iconDefinition:e,params:n}),H.autoA11y&&(d?w["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(b||ri()):(w["aria-hidden"]="true",w.focusable="false")),hl({icons:{main:fs(z),mask:l?fs(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:F,iconName:k,transform:M(M({},Ct),i),symbol:a,title:d,maskId:u,titleId:b,extra:{attributes:w,styles:L,classes:_}})})}},aE={mixout:function(){return{icon:iE(oE)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Mu,n.nodeCallback=rE,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Se:r,o=n.callback,a=o===void 0?function(){}:o;return Mu(i,a)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,a=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,u=r.mask,f=r.maskId,d=r.extra;return new Promise(function(m,b){Promise.all([ds(i,s),u.iconName?ds(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var _=rl(y,2),g=_[0],w=_[1];m([n,hl({icons:{main:g,mask:w},prefix:s,iconName:i,transform:l,symbol:c,maskId:f,title:o,titleId:a,extra:d,watchable:!0})])}).catch(b)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,a=n.transform,s=n.styles,l=Do(s);l.length>0&&(i.style=l);var c;return cl(a)&&(c=Bt("generateAbstractTransformGrouping",{main:o,transform:a,containerWidth:o.width,iconWidth:o.width})),r.push(c||o.icon),{children:r,attributes:i}}}},sE={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return Bo({type:"layer"},function(){Dn("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(s){Array.isArray(s)?s.map(function(l){a=a.concat(l.abstract)}):a=a.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(H.cssPrefix,"-layers")].concat(pi(o)).join(" ")},children:a}]})}}}},lE={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,a=r.classes,s=a===void 0?[]:a,l=r.attributes,c=l===void 0?{}:l,u=r.styles,f=u===void 0?{}:u;return Bo({type:"counter",content:n},function(){return Dn("beforeDOMElementCreation",{content:n,params:r}),US({content:n.toString(),title:o,extra:{attributes:c,styles:f,classes:["".concat(H.cssPrefix,"-layers-counter")].concat(pi(s))}})})}}}},cE={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?Ct:i,a=r.title,s=a===void 0?null:a,l=r.classes,c=l===void 0?[]:l,u=r.attributes,f=u===void 0?{}:u,d=r.styles,m=d===void 0?{}:d;return Bo({type:"text",content:n},function(){return Dn("beforeDOMElementCreation",{content:n,params:r}),xu({content:n,transform:M(M({},Ct),o),title:s,extra:{attributes:f,styles:m,classes:["".concat(H.cssPrefix,"-layers-text")].concat(pi(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,o=r.transform,a=r.extra,s=null,l=null;if(ph){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/c,l=u.height/c}return H.autoA11y&&!i&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,xu({content:n.innerHTML,width:s,height:l,transform:o,title:i,extra:a,watchable:!0})])}}},uE=new RegExp('"',"ug"),Du=[1105920,1112319];function fE(t){var e=t.replace(uE,""),n=CS(e,0),r=n>=Du[0]&&n<=Du[1],i=e.length===2?e[0]===e[1]:!1;return{value:ss(i?e[0]:e),isSecondary:r||i}}function Fu(t,e){var n="".concat(Q2).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var o=pr(t.children),a=o.filter(function(z){return z.getAttribute(as)===e})[0],s=mn.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(iS),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(a&&!l)return t.removeChild(a),r();if(l&&u!=="none"&&u!==""){var f=s.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?xe:we,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ei[d][l[2].toLowerCase()]:oS[d][c],b=fE(f),y=b.value,_=b.isSecondary,g=l[0].startsWith("FontAwesome"),w=fl(m,y),T=w;if(g){var L=kS(y);L.iconName&&L.prefix&&(w=L.iconName,m=L.prefix)}if(w&&!_&&(!a||a.getAttribute(ol)!==m||a.getAttribute(al)!==T)){t.setAttribute(n,T),a&&t.removeChild(a);var F=tE(),k=F.extra;k.attributes[as]=e,ds(w,m).then(function(z){var j=hl(M(M({},F),{},{icons:{main:z,mask:dl()},prefix:m,iconName:T,extra:k,watchable:!0})),U=Se.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(U,t.firstChild):t.appendChild(U),U.outerHTML=j.map(function(Z){return gi(Z)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function dE(t){return Promise.all([Fu(t,"::before"),Fu(t,"::after")])}function hE(t){return t.parentNode!==document.head&&!~tS.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(as)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function ju(t){if(Ht)return new Promise(function(e,n){var r=pr(t.querySelectorAll("*")).filter(hE).map(dE),i=pl.begin("searchPseudoElements");Nh(),Promise.all(r).then(function(){i(),ps(),e()}).catch(function(){i(),ps(),n()})})}var pE={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ju,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Se:r;H.searchPseudoElements&&ju(i)}}},Bu=!1,mE={mixout:function(){return{dom:{unwatch:function(){Nh(),Bu=!0}}}},hooks:function(){return{bootstrap:function(){$u(cs("mutationObserverCallbacks",{}))},noAuto:function(){JS()},watch:function(n){var r=n.observeMutationsRoot;Bu?ps():$u(cs("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Uu=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),a=o[0],s=o.slice(1).join("-");if(a&&s==="h")return r.flipX=!0,r;if(a&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(a){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},gE={mixout:function(){return{parse:{transform:function(n){return Uu(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Uu(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,a=n.iconWidth,s={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},d={transform:"translate(".concat(a/2*-1," -256)")},m={outer:s,inner:f,path:d};return{tag:"g",attributes:M({},m.outer),children:[{tag:"g",attributes:M({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:M(M({},r.icon.attributes),m.path)}]}]}}}},va={x:0,y:0,width:"100%",height:"100%"};function Hu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function vE(t){return t.tag==="g"?t.children:[t]}var bE={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?jo(i.split(" ").map(function(a){return a.trim()})):dl();return o.prefix||(o.prefix=gn()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,a=n.mask,s=n.maskId,l=n.transform,c=o.width,u=o.icon,f=a.width,d=a.icon,m=gS({transform:l,containerWidth:f,iconWidth:c}),b={tag:"rect",attributes:M(M({},va),{},{fill:"white"})},y=u.children?{children:u.children.map(Hu)}:{},_={tag:"g",attributes:M({},m.inner),children:[Hu(M({tag:u.tag,attributes:M(M({},u.attributes),m.path)},y))]},g={tag:"g",attributes:M({},m.outer),children:[_]},w="mask-".concat(s||ri()),T="clip-".concat(s||ri()),L={tag:"mask",attributes:M(M({},va),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,g]},F={tag:"defs",children:[{tag:"clipPath",attributes:{id:T},children:vE(d)},L]};return r.push(F,{tag:"rect",attributes:M({fill:"currentColor","clip-path":"url(#".concat(T,")"),mask:"url(#".concat(w,")")},va)}),{children:r,attributes:i}}}},yE={provides:function(e){var n=!1;mn.matchMedia&&(n=mn.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:M(M({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=M(M({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:M(M({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:M(M({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:M(M({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:M(M({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:M(M({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:M(M({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:M(M({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},_E={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},wE=[yS,aE,sE,lE,cE,pE,mE,gE,bE,yE,_E];$S(wE,{mixoutsTo:ot});ot.noAuto;ot.config;var SE=ot.library;ot.dom;var ms=ot.parse;ot.findIconDefinition;ot.toHtml;var EE=ot.icon;ot.layer;ot.text;ot.counter;function Vu(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Rt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Vu(Object(n),!0).forEach(function(r){Xe(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Vu(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ho(t){"@babel/helpers - typeof";return ho=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ho(t)}function Xe(t,e,n){return e=AE(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function CE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function IE(t,e){if(t==null)return{};var n=CE(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function TE(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function AE(t){var e=TE(t,"string");return typeof e=="symbol"?e:String(e)}var OE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Dh={exports:{}};(function(t){(function(e){var n=function(g,w,T){if(!c(w)||f(w)||d(w)||m(w)||l(w))return w;var L,F=0,k=0;if(u(w))for(L=[],k=w.length;F<k;F++)L.push(n(g,w[F],T));else{L={};for(var z in w)Object.prototype.hasOwnProperty.call(w,z)&&(L[g(z,T)]=n(g,w[z],T))}return L},r=function(g,w){w=w||{};var T=w.separator||"_",L=w.split||/(?=[A-Z])/;return g.split(L).join(T)},i=function(g){return b(g)?g:(g=g.replace(/[\-_\s]+(.)?/g,function(w,T){return T?T.toUpperCase():""}),g.substr(0,1).toLowerCase()+g.substr(1))},o=function(g){var w=i(g);return w.substr(0,1).toUpperCase()+w.substr(1)},a=function(g,w){return r(g,w).toLowerCase()},s=Object.prototype.toString,l=function(g){return typeof g=="function"},c=function(g){return g===Object(g)},u=function(g){return s.call(g)=="[object Array]"},f=function(g){return s.call(g)=="[object Date]"},d=function(g){return s.call(g)=="[object RegExp]"},m=function(g){return s.call(g)=="[object Boolean]"},b=function(g){return g=g-0,g===g},y=function(g,w){var T=w&&"process"in w?w.process:w;return typeof T!="function"?g:function(L,F){return T(L,g,F)}},_={camelize:i,decamelize:a,pascalize:o,depascalize:a,camelizeKeys:function(g,w){return n(y(i,w),g)},decamelizeKeys:function(g,w){return n(y(a,w),g,w)},pascalizeKeys:function(g,w){return n(y(o,w),g)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=_:e.humps=_})(OE)})(Dh);var PE=Dh.exports,xE=["class","style"];function kE(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=PE.camelize(n.slice(0,r)),o=n.slice(r+1).trim();return e[i]=o,e},{})}function RE(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Fh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Fh(l)}),i=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=RE(u);break;case"style":l.style=kE(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var o=n.style,a=o===void 0?{}:o,s=IE(n,xE);return Ne(t.tag,Rt(Rt(Rt({},e),{},{class:i.class,style:Rt(Rt({},i.style),a)},i.attrs),s),r)}var jh=!1;try{jh=!0}catch{}function LE(){if(!jh&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ba(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Xe({},t,e):{}}function $E(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Xe(e,"fa-".concat(t.size),t.size!==null),Xe(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),Xe(e,"fa-pull-".concat(t.pull),t.pull!==null),Xe(e,"fa-swap-opacity",t.swapOpacity),Xe(e,"fa-bounce",t.bounce),Xe(e,"fa-shake",t.shake),Xe(e,"fa-beat",t.beat),Xe(e,"fa-fade",t.fade),Xe(e,"fa-beat-fade",t.beatFade),Xe(e,"fa-flash",t.flash),Xe(e,"fa-spin-pulse",t.spinPulse),Xe(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function zu(t){if(t&&ho(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(ms.icon)return ms.icon(t);if(t===null)return null;if(ho(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var NE=fr({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,i=Re(function(){return zu(e.icon)}),o=Re(function(){return ba("classes",$E(e))}),a=Re(function(){return ba("transform",typeof e.transform=="string"?ms.transform(e.transform):e.transform)}),s=Re(function(){return ba("mask",zu(e.mask))}),l=Re(function(){return EE(i.value,Rt(Rt(Rt(Rt({},o.value),a.value),s.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});Mt(l,function(u){if(!u)return LE("Could not find one or more icon(s)",i.value,s.value)},{immediate:!0});var c=Re(function(){return l.value?Fh(l.value.abstract[0],{},r):null});return function(){return c.value}}}),ME={prefix:"fas",iconName:"lightbulb",icon:[384,512,[128161],"f0eb","M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"]},DE={prefix:"fas",iconName:"microphone",icon:[384,512,[],"f130","M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"]},FE={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"]},jE={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]},BE={prefix:"fas",iconName:"square-root-variable",icon:[576,512,["square-root-alt"],"f698","M282.6 78.1c8-27.3 33-46.1 61.4-46.1H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H344L238.7 457c-3.6 12.3-14.1 21.2-26.8 22.8s-25.1-4.6-31.5-15.6L77.6 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H77.6c22.8 0 43.8 12.1 55.3 31.8l65.2 111.8L282.6 78.1zM393.4 233.4c12.5-12.5 32.8-12.5 45.3 0L480 274.7l41.4-41.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L525.3 320l41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L480 365.3l-41.4 41.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 320l-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3z"]},UE={prefix:"fas",iconName:"gears",icon:[640,512,["cogs"],"f085","M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8h-.7c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},HE={prefix:"fas",iconName:"book",icon:[448,512,[128212],"f02d","M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]},VE={prefix:"fas",iconName:"brain",icon:[512,512,[129504],"f5dc","M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56V56c0-30.9 25.1-56 56-56z"]},We={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"};function ii(t){"@babel/helpers - typeof";return ii=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ii(t)}function Wu(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function ya(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Wu(Object(n),!0).forEach(function(r){zE(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Wu(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function zE(t,e,n){return e=WE(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function WE(t){var e=KE(t,"string");return ii(e)=="symbol"?e:String(e)}function KE(t,e){if(ii(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(ii(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Ku={ripple:!1,inputStyle:"outlined",locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",completed:"Completed",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,showMonthAfterYear:!1,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"Page {page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left"}},filterMatchModeOptions:{text:[We.STARTS_WITH,We.CONTAINS,We.NOT_CONTAINS,We.ENDS_WITH,We.EQUALS,We.NOT_EQUALS],numeric:[We.EQUALS,We.NOT_EQUALS,We.LESS_THAN,We.LESS_THAN_OR_EQUAL_TO,We.GREATER_THAN,We.GREATER_THAN_OR_EQUAL_TO],date:[We.DATE_IS,We.DATE_IS_NOT,We.DATE_BEFORE,We.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100},pt:void 0,ptOptions:{mergeSections:!0,mergeProps:!1},unstyled:!1,csp:{nonce:void 0}},GE=Symbol();function qE(t,e,n,r){if(t!==e){var i=document.getElementById(n),o=i.cloneNode(!0),a=i.getAttribute("href").replace(t,e);o.setAttribute("id",n+"-clone"),o.setAttribute("href",a),o.addEventListener("load",function(){i.remove(),o.setAttribute("id",n),r&&r()}),i.parentNode&&i.parentNode.insertBefore(o,i.nextSibling)}}var YE={install:function(e,n){var r=n?ya(ya({},Ku),n):ya({},Ku),i={config:it(r),changeTheme:qE};e.config.globalProperties.$primevue=i,e.provide(GE,i)}};SE.add(DE,FE,HE,BE,ME,VE,UE,jE);cg(V2).use(nl).use(YE).component("font-awesome-icon",NE).mount("#app");
