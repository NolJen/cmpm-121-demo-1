(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))g(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&g(p)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function g(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const a=document.querySelector("#app"),L="My amazing game";document.title=L;const y=document.createElement("h1");y.innerHTML=L;a.append(y);const i=document.createElement("button");i.innerHTML="👾 Purple People Eater";i.type="button";i.name="funButton";i.title="Click me for fun!";a.append(i);const l=document.createElement("div");let s=0;l.innerHTML=`${s} purple people eaters`;a.append(l);i.addEventListener("click",()=>{s++,h()});const c=[{name:"🩳 short shorts",cost:10,rate:.1,count:0,description:""},{name:"🎸 rock and roll band",cost:100,rate:2,count:0,description:""},{name:"📺 TV show",cost:1e3,rate:50,count:0,description:""},{name:"📺 TV show",cost:5e3,rate:50,count:0,description:""},{name:"📺 TV show",cost:1e4,rate:50,count:0,description:""}];let u=0;const $=[];c.forEach((e,n)=>{const r=document.createElement("button");r.innerHTML=`${e.name} (${e.rate} units/sec)`,r.type="button",r.disabled=!0,r.title=`Costs ${e.cost.toFixed(2)} purple people eaters - ${e.description}`,a.append(r),$.push(r),r.addEventListener("click",()=>{s>=e.cost&&(s-=e.cost,u+=e.rate,c[n].count++,c[n].cost*=1.15,h())})});const m=document.createElement("div");m.innerHTML=`Growth rate: ${u.toFixed(2)} units/sec`;a.append(m);const f=document.createElement("div");f.innerHTML=c.map(e=>`${e.name}: ${e.count} purchased`).join("<br>");a.append(f);function h(){l.innerHTML=`${s.toFixed(2)} purple people eaters`,m.innerHTML=`Growth rate: ${u.toFixed(2)} units/sec`,f.innerHTML=c.map(e=>`${e.name}: ${e.count} purchased`).join("<br>"),$.forEach((e,n)=>{e.disabled=s<c[n].cost,e.title=`Costs ${c[n].cost.toFixed(2)} purple people eaters - ${c[n].description}`})}let d=null;function b(e){if(d!==null){const n=e-d;s+=n/1e3*u,h()}d=e,requestAnimationFrame(b)}requestAnimationFrame(b);
