!function(n){var a={};function e(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return n[t].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=n,e.c=a,e.d=function(n,a,t){e.o(n,a)||Object.defineProperty(n,a,{enumerable:!0,get:t})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,a){if(1&a&&(n=e(n)),8&a)return n;if(4&a&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&a&&"string"!=typeof n)for(var i in n)e.d(t,i,function(a){return n[a]}.bind(null,i));return t},e.n=function(n){var a=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(a,"a",a),a},e.o=function(n,a){return Object.prototype.hasOwnProperty.call(n,a)},e.p="",e(e.s=0)}([function(n,a,e){"use strict";e.r(a);const t="https://rickandmortyapi.com/api";var i=async(n,a=1)=>{const e=a?`${t}/${n}/?page=${a}`:`${t}/${n}/`;try{const n=await fetch(e);return await n.json()}catch(n){console.log("Fetch Error",n)}};var r=async()=>{let n=Number(location.hash.slice(1).toLocaleLowerCase().split("/")[1]);const a=n?await i("character",n):await i("character");let e=a.info.prev?a.info.prev.split("=")[1]:"",t=e?"Before Page":"",r=a.info.next?a.info.next.split("=")[1]:"";return`\n    <div class="Characters">\n        ${a.results.map(n=>`\n        <article class="Characters-item">\n            <a href="#/character/${n.id}">\n            <img src="${n.image}" alt="${n.name}">\n            <h2>${n.name}</h2>\n            </a>\n        </article>\n        `).join("")}\n    </div>\n    <div class="Pagination">\n    <a id="beforePage" href="#/${e}">${t}</a>\n    <a id="nextPage" href="#/${r}">Next Page: ${r}</a>\n    </div>\n    `};var s=()=>location.hash.slice(location.hash.indexOf("/")+1)||"/";var c=async n=>{const a=n?`${t}/${n}`:""+t;try{const n=await fetch(a);return await n.json()}catch(n){console.log("Fetch Error",n)}};var o=()=>' \n        <div class="Error404">\n           <div class="morty-container">\n            <div class="morty">\n            <img src="images/morty404.png">\n            </div>\n            </div>\n        </div>\n    ';var l=n=>{if(n.includes("character/")){return"/character/:id"}if(n.includes("location/")){return"/location/:id"}if(n.includes("all-locations")){return"/all-locations/:id"}if(n.includes("all-episodes")){return"/all-episodes/:id"}if(n.includes("episode/")){return"/episode/:id"}if(n.length<=3){return"/"===n?n:"/:id"}};var h=async n=>{const a=n;try{const n=await fetch(a);return await n.json()}catch(n){console.log("Fetch Error",n)}};var d=async(n,a)=>{let e=(await c(n))[a].map(async n=>await h(n));return Promise.all(e).then(n=>n)};const p={"/":r,"/character/:id":async()=>{const n=s(),a=await c(n);return`\n    <div class="Characters-inner">\n        <article class="Characters-card">\n            <img src="${a.image}" alt="name">\n            <h2>${a.name}</h2>\n        </article>\n        <article class="Characters-card">\n            <h2>Description</h2>\n            <h3>Episodes:<span>${a.episode.length}</span></h3>\n            <h3>Status:<span>${a.status}</span></h3>\n            <h3>Species:<span>${a.species}</span></h3>\n            <h3>Gender:<span>${a.gender}</span></h3>\n            <h3>Origin:<span>${a.origin.name}</span></h3>\n            <h3>Last Location:<span>${a.location.name}</span></h3>\n        </article>\n    </div>\n    `},"/all-locations/:id":async()=>{let n=location.hash.slice(1).toLocaleLowerCase().split("/")[2];const a=n?await i("location",n):await i("location");let e=a.info.prev?a.info.prev.split("=")[1]:"",t=e?"Before Page":"",r=a.info.next?a.info.next.split("=")[1]:"",s=r?"Next Page":"First Page";return`\n    <div class="Characters">\n    ${a.results.map(n=>`\n        <article class="Characters-item">\n            <a href="#/location/${n.id}">\n            <h2>Location: ${n.id}</h2>\n            <h2>Name: ${n.name}</h2>\n            <h2>Type: ${n.type}</h2>\n            <h2>Dimension: ${n.dimension}</h2>\n            </a>\n        </article>\n        `).join("")}\n    </div>\n    <div class="Pagination">\n    <a id="beforePage" href="#/all-locations/${e}">${t}</a>\n    <a id="nextPage" href="#/all-locations/${r}">${s}:${r}</a>\n    </div>\n    `},"/location/:id":async()=>{const n=s(),a=await c(n),e=await d(n,"residents");return`\n    <div class="Characters-inner">\n        <article class="Characters-card">\n            <h2>Name Location: ${a.name}</h2>\n            <h2>Type: ${a.type} </h2>\n            <h2>Dimension: ${a.dimension} </h2>\n        </article>\n        <article>\n        <h2>Residents: </h2>\n        ${e.length>0?`<div class="Characters">\n            ${e.map(n=>`\n            <a href="#/character/${n.id}">\n            <article class="Characters-card">\n                <img src="${n.image}" alt="name">\n                <h2>${n.name}</h2>\n            </article>\n            </a>\n            `).join("")}\n        </div>`:"There is no residents in this Location"}\n        <article>\n    </div>\n    `},"/all-episodes/:id":async()=>{let n=location.hash.slice(1).toLocaleLowerCase().split("/")[2];const a=n?await i("episode",n):await i("episode");let e=a.info.next?a.info.next.split("=")[1]:"",t=e?"Next Page":"First Page";return`\n    <div class="Characters">\n    ${a.results.map(n=>`\n        <article class="Characters-item">\n            <a href="#/episode/${n.id}">\n            <h2>${n.id}.${n.name}</h2>\n            <h2>Air Date: ${n.air_date}</h2>\n            <h2>Episode: ${n.episode}</h2>\n            </a>\n        </article>\n        `).join("")}\n    </div>\n    <div class="Pagination">\n    <a id="nextPage" href="#/all-episodes/${e}">${t}${e}</a>\n    </div>`},"/episode/:id":async()=>{const n=s(),a=await c(n),e=await d(n,"characters");return`\n    <div class="Characters-inner">\n        <article class="Characters-card">\n            <h2>${a.id}.${a.name}</h2>\n            <h2>Air Date: ${a.air_date}</h2>\n            <h2>Episode: ${a.episode}</h2>\n        </article>\n        <article>\n        <h2>Characters: </h2>\n        ${e.length>0?`<div class="Characters">\n            ${e.map(n=>`\n            <a href="#/character/${n.id}">\n            <article class="Characters-card">\n                <img src="${n.image}" alt="name">\n                <h2>${n.name}</h2>\n            </article>\n            </a>\n            `).join("")}\n        </div>`:"There is no characters in this Location"}\n        <article>\n    </div>\n     `},"/:id":r};var u=async()=>{document.getElementById("header");const n=document.getElementById("content");let a=s(),e=await l(a),t=p[e]?p[e]:o;n.innerHTML=await t()};window.addEventListener("load",u),window.addEventListener("hashchange",u)}]);