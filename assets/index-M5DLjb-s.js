(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function f(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=f(e);fetch(e.href,t)}})();const l=document.querySelector("#app"),p="My amazing game";document.title=p;const d=document.createElement("h1");d.innerHTML=p;l.append(d);const r=document.createElement("button");r.innerHTML="👾 click me";r.type="button";r.name="funButton";r.title="Click me for fun!";l.append(r);const i=document.createElement("div");let o=0;i.innerHTML=`${o} purple people eaters`;l.append(i);r.addEventListener("click",()=>{o++,i.innerHTML=`${o} purple people eaters`});let u=null;function m(c){if(u!==null){const n=c-u;o+=n/1e3,i.innerHTML=`${o.toFixed(2)} purple people eaters`}u=c,requestAnimationFrame(m)}requestAnimationFrame(m);
