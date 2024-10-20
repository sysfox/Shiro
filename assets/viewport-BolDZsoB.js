import{e as A,j as z,f as b,i as ie,o as se,g as H,h as oe,k as ce,l as fe,v as X,s as ue}from"./owner-BSI_Vh2r.js";import{r as T}from"./index-NXYFgAjv.js";var J=Symbol.for("immer-nothing"),W=Symbol.for("immer-draftable"),f=Symbol.for("immer-state");function a(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var m=Object.getPrototypeOf;function h(e){return!!e&&!!e[f]}function d(e){return e?Q(e)||Array.isArray(e)||!!e[W]||!!e.constructor?.[W]||F(e)||O(e):!1}var ae=Object.prototype.constructor.toString();function Q(e){if(!e||typeof e!="object")return!1;const t=m(e);if(t===null)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===ae}function g(e,t){C(e)===0?Reflect.ownKeys(e).forEach(r=>{t(r,e[r],e)}):e.forEach((r,n)=>t(n,r,e))}function C(e){const t=e[f];return t?t.type_:Array.isArray(e)?1:F(e)?2:O(e)?3:0}function v(e,t){return C(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Y(e,t,r){const n=C(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function le(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function F(e){return e instanceof Map}function O(e){return e instanceof Set}function _(e){return e.copy_||e.base_}function M(e,t){if(F(e))return new Map(e);if(O(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=Q(e);if(t===!0||t==="class_only"&&!r){const n=Object.getOwnPropertyDescriptors(e);delete n[f];let i=Reflect.ownKeys(n);for(let s=0;s<i.length;s++){const o=i[s],c=n[o];c.writable===!1&&(c.writable=!0,c.configurable=!0),(c.get||c.set)&&(n[o]={configurable:!0,writable:!0,enumerable:c.enumerable,value:e[o]})}return Object.create(m(e),n)}else{const n=m(e);if(n!==null&&r)return{...e};const i=Object.create(n);return Object.assign(i,e)}}function j(e,t=!1){return k(e)||h(e)||!d(e)||(C(e)>1&&(e.set=e.add=e.clear=e.delete=_e),Object.freeze(e),t&&Object.entries(e).forEach(([r,n])=>j(n,!0))),e}function _e(){a(2)}function k(e){return Object.isFrozen(e)}var de={};function y(e){const t=de[e];return t||a(0,e),t}var p;function Z(){return p}function ye(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function $(e,t){t&&(y("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function R(e){E(e),e.drafts_.forEach(me),e.drafts_=null}function E(e){e===p&&(p=e.parent_)}function U(e){return p=ye(p,e)}function me(e){const t=e[f];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function B(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return e!==void 0&&e!==r?(r[f].modified_&&(R(t),a(4)),d(e)&&(e=w(t,e),t.parent_||S(t,e)),t.patches_&&y("Patches").generateReplacementPatches_(r[f].base_,e,t.patches_,t.inversePatches_)):e=w(t,r,[]),R(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==J?e:void 0}function w(e,t,r){if(k(t))return t;const n=t[f];if(!n)return g(t,(i,s)=>L(e,n,t,i,s,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return S(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const i=n.copy_;let s=i,o=!1;n.type_===3&&(s=new Set(i),i.clear(),o=!0),g(s,(c,l)=>L(e,n,i,c,l,r,o)),S(e,i,!1),r&&e.patches_&&y("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function L(e,t,r,n,i,s,o){if(h(i)){const c=s&&t&&t.type_!==3&&!v(t.assigned_,n)?s.concat(n):void 0,l=w(e,i,c);if(Y(r,n,l),h(l))e.canAutoFreeze_=!1;else return}else o&&r.add(i);if(d(i)&&!k(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;w(e,i),(!t||!t.scope_.parent_)&&typeof n!="symbol"&&Object.prototype.propertyIsEnumerable.call(r,n)&&S(e,i)}}function S(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&j(t,r)}function he(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:Z(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=n,s=K;r&&(i=[n],s=P);const{revoke:o,proxy:c}=Proxy.revocable(i,s);return n.draft_=c,n.revoke_=o,c}var K={get(e,t){if(t===f)return e;const r=_(e);if(!v(r,t))return pe(e,r,t);const n=r[t];return e.finalized_||!d(n)?n:n===I(e.base_,t)?(D(e),e.copy_[t]=x(n,e)):n},has(e,t){return t in _(e)},ownKeys(e){return Reflect.ownKeys(_(e))},set(e,t,r){const n=V(_(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const i=I(_(e),t),s=i?.[f];if(s&&s.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(le(r,i)&&(r!==void 0||v(e.base_,t)))return!0;D(e),N(e)}return e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty(e,t){return I(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,D(e),N(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const r=_(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty(){a(11)},getPrototypeOf(e){return m(e.base_)},setPrototypeOf(){a(12)}},P={};g(K,(e,t)=>{P[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});P.deleteProperty=function(e,t){return P.set.call(this,e,t,void 0)};P.set=function(e,t,r){return K.set.call(this,e[0],t,r,e[0])};function I(e,t){const r=e[f];return(r?_(r):e)[t]}function pe(e,t,r){const n=V(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}function V(e,t){if(!(t in e))return;let r=m(e);for(;r;){const n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=m(r)}}function N(e){e.modified_||(e.modified_=!0,e.parent_&&N(e.parent_))}function D(e){e.copy_||(e.copy_=M(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var Pe=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,r,n)=>{if(typeof t=="function"&&typeof r!="function"){const s=r;r=t;const o=this;return function(l=s,...re){return o.produce(l,ne=>r.call(this,ne,...re))}}typeof r!="function"&&a(6),n!==void 0&&typeof n!="function"&&a(7);let i;if(d(t)){const s=U(this),o=x(t,void 0);let c=!0;try{i=r(o),c=!1}finally{c?R(s):E(s)}return $(s,n),B(i,s)}else if(!t||typeof t!="object"){if(i=r(t),i===void 0&&(i=t),i===J&&(i=void 0),this.autoFreeze_&&j(i,!0),n){const s=[],o=[];y("Patches").generateReplacementPatches_(t,i,s,o),n(s,o)}return i}else a(1,t)},this.produceWithPatches=(t,r)=>{if(typeof t=="function")return(o,...c)=>this.produceWithPatches(o,l=>t(l,...c));let n,i;return[this.produce(t,r,(o,c)=>{n=o,i=c}),n,i]},typeof e?.autoFreeze=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof e?.useStrictShallowCopy=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){d(e)||a(8),h(e)&&(e=ge(e));const t=U(this),r=x(e,void 0);return r[f].isManual_=!0,E(t),r}finishDraft(e,t){const r=e&&e[f];(!r||!r.isManual_)&&a(9);const{scope_:n}=r;return $(n,t),B(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const i=t[r];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}r>-1&&(t=t.slice(r+1));const n=y("Patches").applyPatches_;return h(e)?n(e,t):this.produce(e,i=>n(i,t))}};function x(e,t){const r=F(e)?y("MapSet").proxyMap_(e,t):O(e)?y("MapSet").proxySet_(e,t):he(e,t);return(t?t.scope_:Z()).drafts_.push(r),r}function ge(e){return h(e)||a(10,e),ee(e)}function ee(e){if(!d(e)||k(e))return e;const t=e[f];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=M(e,t.scope_.immer_.useStrictShallowCopy_)}else r=M(e,!0);return g(r,(n,i)=>{Y(r,n,ee(i))}),t&&(t.finalized_=!1),r}var u=new Pe,we=u.produce;u.produceWithPatches.bind(u);u.setAutoFreeze.bind(u);u.setUseStrictShallowCopy.bind(u);u.applyPatches.bind(u);u.createDraft.bind(u);u.finishDraft.bind(u);const te=A({process:null,media:null}),Ee=e=>z.set(te,t=>({...t,process:e})),Ne=e=>z.set(te,t=>({...t,media:e})),Se=A({}),xe=e=>{z.set(Se,t=>we(t,r=>{delete r[e]}))},Ae=()=>b(ie),ze=()=>b(se),be="shiro",Ce=e=>`@${be}/${e}`,[,,Fe,,Te,je]=H(A(null));H(A({}));const Oe="1234567890abcdefghijklmnopqrstuvwxyz",ke=oe(Oe),q=ke(8),G=Ce("web-session"),Ie=()=>{if(!ce)return"";const e=localStorage.getItem(G);return e||(localStorage.setItem(G,q),q)},Ke=()=>{const e=Fe(),t=ze(),r=Ae();return T.useMemo(()=>{const n=Ie();return r?t?`owner_${t.id}`:n:e?e.id.toLowerCase():n},[t,r,e])},We=()=>b(fe),De=e=>b(ue(X,T.useCallback(t=>e(t),[]))),$e=()=>De(T.useCallback(e=>ve(e),[])),ve=e=>(e.sm||e.md||!e.sm)&&!e.lg,Ue=()=>z.get(X);export{Fe as a,Ae as b,De as c,Ee as d,Ne as e,Ie as f,Ue as g,Ke as h,We as i,xe as j,Ce as k,we as p,je as s,$e as u};
