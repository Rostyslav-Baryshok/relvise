const t=document.querySelectorAll("[data-spollers]");if(t.length>0){const l=Array.from(t).filter((function(t,e,o){return!t.dataset.spollers.split(",")[0]}));l.length>0&&e(l);const n=Array.from(t).filter((function(t,e,o){return t.dataset.spollers.split(",")[0]}));if(n.length>0){const a=[];n.forEach((t=>{const e={},o=t.dataset.spollers.split(",");e.value=o[0],e.type=o[1]?o[1].trim():"max",e.item=t,a.push(e)}));let d=a.map((function(t){return"("+t.type+"-width: "+t.value+"px),"+t.value+","+t.type}));d=d.filter((function(t,e,o){return o.indexOf(t)===e})),d.forEach((t=>{const o=t.split(","),i=o[1],s=o[2],r=window.matchMedia(o[0]),l=a.filter((function(t){if(t.value===i&&t.type===s)return!0}));r.addListener((function(){e(l,r)})),e(l,r)}))}function e(t,e=!1){t.forEach((t=>{t=e?t.item:t,e.matches||!e?(t.classList.add("_init"),o(t),t.addEventListener("click",i)):(t.classList.remove("_init"),o(t,!1),t.removeEventListener("click",i))}))}function o(t,e=!0){const o=t.querySelectorAll("[data-spoller]");o.length>0&&o.forEach((t=>{e?(t.removeAttribute("tabindex"),t.classList.contains("_active")||(t.nextElementSibling.hidden=!0)):(t.setAttribute("tabindex","-1"),t.nextElementSibling.hidden=!1)}))}function i(t){const e=t.target;if(e.hasAttribute("data-spoller")||e.closest("[data-spoller]")){const o=e.hasAttribute("data-spoller")?e:e.closest("[data-spoller]"),i=o.closest("[data-spollers]"),l=!!i.hasAttribute("data-one-spoller");i.querySelectorAll("._slide").length||(l&&!o.classList.contains("_active")&&function(t){const e=t.querySelector("[data-spoller]._active");e&&(e.classList.remove("_active"),s(e.nextElementSibling,500))}(i),o.classList.toggle("_active"),r(o.nextElementSibling,500)),t.preventDefault()}}}let s=(t,e=500)=>{t.classList.contains("_slide")||(t.classList.add("_slide"),t.style.transitionProperty="height, margin, padding",t.style.transitionDuration=e+"ms",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.overflow="hidden",t.style.height=0,t.style.paddingTop=0,t.style.paddingBottom=0,t.style.marginTop=0,t.style.marginBottom=0,window.setTimeout((()=>{t.hidden=!0,t.style.removeProperty("height"),t.style.removeProperty("padding-top"),t.style.removeProperty("padding-bottom"),t.style.removeProperty("margin-top"),t.style.removeProperty("margin-bottom"),t.style.removeProperty("overflow"),t.style.removeProperty("transition-duration"),t.style.removeProperty("transition-property"),t.classList.remove("_slide")}),e))},r=(t,e=500)=>t.hidden?((t,e=500)=>{if(!t.classList.contains("_slide")){t.classList.add("_slide"),t.hidden&&(t.hidden=!1);let o=t.offsetHeight;t.style.overflow="hidden",t.style.height=0,t.style.paddingTop=0,t.style.paddingBottom=0,t.style.marginTop=0,t.style.marginBottom=0,t.offsetHeight,t.style.transitionProperty="height, margin, padding",t.style.transitionDuration=e+"ms",t.style.height=o+"px",t.style.removeProperty("padding-top"),t.style.removeProperty("padding-bottom"),t.style.removeProperty("margin-top"),t.style.removeProperty("margin-bottom"),window.setTimeout((()=>{t.style.removeProperty("height"),t.style.removeProperty("overflow"),t.style.removeProperty("transition-duration"),t.style.removeProperty("transition-property"),t.classList.remove("_slide")}),e)}})(t,e):s(t,e);
//# sourceMappingURL=index.b0b96b47.js.map
