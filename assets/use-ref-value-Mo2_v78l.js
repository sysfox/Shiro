import{r as a}from"./index-NXYFgAjv.js";const d=(e,t,r={})=>{let o,s,n;const i=()=>{o=void 0,s!==void 0&&(e.apply(void 0,s),s=void 0,n=Date.now(),o=setTimeout(i,t))};return function(...u){const c=Date.now();n===void 0&&r.leading===!1&&(n=c);const f=t-(c-(n??0));f<=0||f>t?(o!==void 0&&clearTimeout(o),e.apply(this,u),n=c,o=setTimeout(i,t)):r.trailing!==!1&&(s=u,o===void 0&&(o=setTimeout(i,f)))}},p=e=>e===void 0,l=e=>{if(Array.isArray(e))return e.map(l);if(typeof e=="object"&&e!==null){const t={};for(const r in e)t[r]=l(e[r]);return t}else return e},y=e=>e[Math.floor(Math.random()*e.length)],g=(...e)=>{const t={};for(const r of e)for(const o in r)t[o]=r[o];return t};function T(e,t){const r=t.split(".");let o=e;for(const s of r)if(o=o[s],o===void 0)return o;return o}const h=e=>{const t=a.useRef();return t.current||(t.current=e()),t.current};export{l as c,T as g,p as i,g as m,y as s,d as t,h as u};
