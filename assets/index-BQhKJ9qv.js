(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const s=document.querySelector("#app"),l="My amazing game";document.title=l;const p=document.createElement("h1");p.innerHTML=l;s.append(p);const r=document.createElement("button");r.innerHTML="👾 click me";r.type="button";r.name="funButton";r.title="Click me for fun!";s.append(r);const o=document.createElement("div");let n=0;o.innerHTML=`${n} purple people eaters;`;s.append(o);r.addEventListener("click",()=>{n++,o.innerHTML=`${n} purple people eaters;`});setInterval(()=>{n++,o.innerHTML=`${n} purple people eaters`},1e3);