import{a as w,i as c,S as b}from"./assets/vendor-C4-ZuMk8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const E="https://pixabay.com/api/",L="46530442-c13cb086c137fdf8de7cc1a97";async function f(t,o=1,s){const a=`${E}?key=${L}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`;try{const e=await w.get(a,{params:{per_page:s,page:o}});if(e.status===200)return e.data;throw new Error(`Error: ${e.status}`)}catch(e){throw console.error(e),new Error("Failed to fetch photos")}}function m(t){return t.map(({webformatURL:o,largeImageURL:s,tags:a,likes:e,views:r,comments:n,downloads:g})=>`<li class="gallery-card">
        <a href="${s}">
          <img class="gallery-img" width="360" height="152" src="${o}" alt="${a}" />
        </a>
        <ul class="card-stats">
            <li class="card-stats-item">
              <p>Likes</p>
              <p>${e}</p>
            </li>
            <li class="card-stats-item">
              <p>Views</p>
              <p>${r}</p>
            </li>
            <li class="card-stats-item">
              <p>Comments</p>
              <p>${n}</p>
            </li>
            <li class="card-stats-item">
              <p>Downloads</p>
              <p>${g}</p>
            </li>
        </ul>
    </li>`).join("")}const S=document.querySelector(".form"),u=document.querySelector(".js-gallery"),p=document.querySelector(".loader"),i=document.querySelector(".load");let l=1,d="";const h=15;let y;S.addEventListener("submit",$);i.addEventListener("click",M);i.style.display="none";async function $(t){t.preventDefault();const o=t.currentTarget;if(d=o.elements.user_query.value.trim(),d===""){c.show({title:"Error",message:"Input can't be empty!",position:"center",color:"red"});return}u.innerHTML="",l=1,i.style.display="none";try{p.style.display="flex";const s=await f(d,l,h);if(s.total===0){c.show({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!",position:"center",color:"yellow"});return}u.innerHTML=m(s.hits),y=new b(".js-gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),y.refresh();const a=Math.ceil(Math.min(s.totalHits,500)/h);l<a?i.style.display="block":c.show({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"center",color:"blue"})}catch(s){console.error("Error fetching photos:",s)}finally{p.style.display="none",o.reset()}}async function M(){l+=1,i.style.display="none";try{p.style.display="flex";const t=await f(d,l,h);u.insertAdjacentHTML("beforeend",m(t.hits)),y.refresh();const o=Math.ceil(Math.min(t.totalHits,500)/h);l<o?i.style.display="block":c.show({title:"Info",message:"You have reached the end of the search results.",position:"center",color:"blue"}),P()}catch(t){console.error("Error fetching more photos:",t)}finally{p.style.display="none"}}function P(){const{height:t}=u.firstElementChild.getBoundingClientRect();window.scrollBy({top:t*4,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
