(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&u(o)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const i=document.querySelector("#app"),l="My amazing game";document.title=l;const a=document.createElement("h1");a.innerHTML=l;i.append(a);const r=document.createElement("button");r.innerHTML="👾 click me";r.type="button";r.name="funButton";r.title="Click me for fun!";i.append(r);const s=document.createElement("div");let c=0;s.innerHTML=`${c} purple people eaters;`;i.append(s);r.addEventListener("click",()=>{c++,s.innerHTML=`${c} purple people eaters;`});
