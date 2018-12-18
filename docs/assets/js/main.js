"use strict";const buttonEl=document.querySelector(".button__search"),inputEl=document.querySelector(".input__name"),listResultEl=document.querySelector(".list__result");function handlePrintResult(){listResultEl.innerHTML="Cargando resultados...",fetch(`http://api.tvmaze.com/search/shows?q=${inputEl.value}`).then(t=>t.json()).then(t=>{listResultEl.innerHTML="",0===t.length&&(listResultEl.innerHTML="Resultado no encontrado. Intentalo de nuevo");let e,l,s,n=[];for(let t=0;t<localStorage.length;t++){let e=localStorage.key(t);n.push(e)}for(let i=0;i<t.length;i++){(s=document.createElement("li")).classList.add("item__list");const a=t[i].show.id,o=a.toString();if(s.setAttribute("id",a),n.includes(o)&&s.classList.add("favorite"),e=document.createElement("img"),null===t[i].show.image)e.src="https://via.placeholder.com/210x295/cccccc/666666/?text=TV";else{let l=t[i].show.image.medium;e.src=l}(l=document.createElement("h2")).classList.add("name__film");const c=document.createTextNode(t[i].show.name);l.appendChild(c),s.appendChild(e),s.appendChild(l),listResultEl.appendChild(s)}})}function handleClickFavorite(t){const e=t.target,l=e.parentElement,s=l.id;l.classList.contains("item__list")?l.classList.toggle("favorite"):e.classList.contains("item__list")&&e.classList.toggle("favorite"),l.classList.contains("favorite")?localStorage.setItem(`${s}`,JSON.stringify(s)):localStorage.removeItem(`${s}`)}listResultEl.addEventListener("click",handleClickFavorite),buttonEl.addEventListener("click",handlePrintResult);