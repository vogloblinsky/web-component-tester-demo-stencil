/*! Built with http://stenciljs.com */
((w,d,x,n,h,c,r)=>{((s)=>{s&&(r=s.getAttribute('data-resources-url'))})(d.querySelector("script[data-namespace='nova']"));
function e(e,t){return"sc-"+e.t+(t&&t!==l?"-"+t:"")}function t(e,t){return e+(t?"-h":"-s")}function o(e,t){let n,o,l=null,i=!1,s=!1,r=arguments.length;for(;r-- >2;)$.push(arguments[r]);for(;$.length>0;){let t=$.pop();if(t&&void 0!==t.pop)for(r=t.length;r--;)$.push(t[r]);else"boolean"==typeof t&&(t=null),(s="function"!=typeof e)&&(null==t?t="":"number"==typeof t?t=String(t):"string"!=typeof t&&(s=!1)),s&&i?l[l.length-1].vtext+=t:null===l?l=[s?{vtext:t}:t]:l.push(s?{vtext:t}:t),i=s}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(r in t.class)t.class[r]&&$.push(r);t.class=$.join(" "),$.length=0}null!=t.key&&(n=t.key),null!=t.name&&(o=t.name)}return"function"==typeof e?e(t,l||[],g):{vtag:e,vchildren:l,vtext:void 0,vattrs:t,vkey:n,vname:o,o:void 0,l:!1}}const l="$",i={},s=(t,n,o,i)=>{let s=o.t+l,r=o[s];if((2===o.i||1===o.i&&!t.u.s)&&(i["s-sc"]=r?e(o,i.mode):e(o)),r){let e=n.p.head;if(n.s)if(1===o.i)e=i.shadowRoot;else{const t=i.getRootNode();t.host&&(e=t)}let l=t.m.get(e);if(l||t.m.set(e,l={}),!l[s]){let t;{t=r.content.cloneNode(!0),l[s]=!0;const o=e.querySelectorAll("[data-styles]");n.v(e,t,o.length&&o[o.length-1].nextSibling||e.firstChild)}}}},a=e=>null!=e,f=e=>e.toLowerCase(),u=(e,t,n,o,l,i)=>{if("class"!==n||i)if("style"===n){for(const e in o)l&&null!=l[e]||(/-/.test(e)?t.style.removeProperty(e):t.style[e]="");for(const e in l)o&&l[e]===o[e]||(/-/.test(e)?t.style.setProperty(e,l[e]):t.style[e]=l[e])}else if("o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in t)if("list"!==n&&"type"!==n&&!i&&(n in t||-1!==["object","function"].indexOf(typeof l)&&null!==l)){const o=e.M(t);o&&o.g&&o.g[n]?m(t,n,l):"ref"!==n&&(m(t,n,null==l?"":l),null!=l&&!1!==l||e.u.k(t,n))}else null!=l&&"key"!==n?((e,t,n,o="boolean"==typeof n,l)=>{l=t!==(t=t.replace(/^xlink\:?/,"")),null==n||o&&(!n||"false"===n)?l?e.removeAttributeNS("http://www.w3.org/1999/xlink",f(t)):e.removeAttribute(t):"function"!=typeof n&&(n=o?"":n.toString(),l?e.setAttributeNS("http://www.w3.org/1999/xlink",f(t),n):e.setAttribute(t,n))})(t,n,l):(i||e.u.C(t,n)&&(null==l||!1===l))&&e.u.k(t,n);else n=f(n)in t?f(n.substring(2)):f(n[2])+n.substring(3),l?l!==o&&e.u.j(t,n,l,0):e.u.W(t,n,0);else if(o!==l){const e=p(o),n=p(l),i=e.filter(e=>!n.includes(e)),s=p(t.className).filter(e=>!i.includes(e)),r=n.filter(t=>!e.includes(t)&&!s.includes(t));s.push(...r),t.className=s.join(" ")}},p=e=>null==e||""===e?[]:e.trim().split(/\s+/),m=(e,t,n)=>{try{e[t]=n}catch(e){}},v=(e,t,n,o,l)=>{const s=11===n.o.nodeType&&n.o.host?n.o.host:n.o,r=t&&t.vattrs||i,a=n.vattrs||i;for(l in r)a&&null!=a[l]||null==r[l]||u(e,s,l,r[l],void 0,o,n.l);for(l in a)l in r&&a[l]===("value"===l||"checked"===l?s[l]:r[l])||u(e,s,l,r[l],a[l],o,n.l)};let b=!1;const y=(e,t)=>{e&&(e.vattrs&&e.vattrs.ref&&e.vattrs.ref(t?null:e.o),e.vchildren&&e.vchildren.forEach(e=>{y(e,t)}))},M=(e,t)=>{{let n=0,o=!1;const l=()=>t.performance.now(),i=!1!==e.asyncQueue,s=Promise.resolve(),r=[],a=[],c=[],f=[],u=t=>n=>{t.push(n),o||(o=!0,e.raf(m))},p=e=>{for(let t=0;t<e.length;t++)try{e[t](l())}catch(e){console.error(e)}e.length=0},d=(e,t)=>{let n,o=0;for(;o<e.length&&(n=l())<t;)try{e[o++](n)}catch(e){console.error(e)}o===e.length?e.length=0:0!==o&&e.splice(0,o)},m=()=>{n++,p(a);const t=i?l()+7*Math.ceil(n*(1/22)):Infinity;d(c,t),d(f,t),c.length>0&&(f.push(...c),c.length=0),(o=a.length+c.length+f.length>0)?e.raf(m):n=0};return e.raf||(e.raf=t.requestAnimationFrame.bind(t)),{tick(e){r.push(e),1===r.length&&s.then(()=>p(r))},read:u(a),write:u(c)}}},$=[],g={forEach:(e,t)=>e.forEach(t),map:(e,t)=>e.map(t)},k=(e,t,n)=>{const[o,l,,i,s,r]=e,a={color:{N:"color"}};if(i)for(t=0;t<i.length;t++)a[(n=i[t])[0]]={S:n[1],O:!!n[2],N:"string"==typeof n[3]?n[3]:n[3]?n[0]:0,A:n[4]};return{t:o,T:l,g:Object.assign({},a),i:s,R:r?r.map(C):void 0}},C=e=>({L:e[0],D:e[1],q:!!e[2],B:!!e[3],I:!!e[4]}),j=(e,t)=>a(t)&&"object"!=typeof t&&"function"!=typeof t?e===Boolean||4===e?"false"!==t&&(""===t||!!t):e===Number||8===e?parseFloat(t):e===String||2===e?t.toString():t:t,W=(e,t,n)=>{e.P.add(t),e.F.has(t)||(e.F.set(t,!0),e.H?e.queue.write(()=>N(e,t,n)):e.queue.tick(()=>N(e,t,n)))},N=async(e,n,l,i,s,r)=>{if(e.F.delete(n),!e.U.has(n)){if(!(s=e.Z.get(n))){if((r=e.G.get(n))&&!r["s-rn"])return void(r["s-rc"]=r["s-rc"]||[]).push(()=>{N(e,n,l)});if(s=T(e,n,e.J.get(n),l))try{s.componentWillLoad&&await s.componentWillLoad()}catch(t){e.K(t,3,n)}}((e,n,l,i)=>{try{const s=n.V.host,r=n.V.encapsulation,a="shadow"===r&&e.u.s;let c,f=l;if(a&&(f=l.shadowRoot),!l["s-rn"]){e.X(e,e.u,n,l);const o=l["s-sc"];o&&(e.u.Y(l,t(o,!0)),"scoped"===r&&e.u.Y(l,t(o)))}if(i.render||i.hostData||s||c){e._=!0;const t=i.render&&i.render();let n;e._=!1;const s=o(null,n,t),c=e.ee.get(l)||{};c.o=f,e.ee.set(l,e.render(l,c,s,a,r))}l["s-rn"]=!0,l["s-rc"]&&(l["s-rc"].forEach(e=>e()),l["s-rc"]=null)}catch(t){e._=!1,e.K(t,8,l,!0)}})(e,e.M(n),n,s),n["s-init"]()}},S=(e,t,n,o,l,i,s,r,c)=>{if(t.type){const f=e.te.get(n);!t.attr||void 0!==f[l]&&""!==f[l]||(r=i&&i.ne)&&a(c=r[t.attr])&&(f[l]=j(t.type,c)),n.hasOwnProperty(l)&&(void 0===f[l]&&(f[l]=j(t.type,n[l])),"mode"!==l&&delete n[l]),o.hasOwnProperty(l)&&void 0===f[l]&&(f[l]=o[l]),t.watchCallbacks&&(f[A+l]=t.watchCallbacks.slice()),O(o,l,function f(t){return(t=e.te.get(e.oe.get(this)))&&t[l]},function u(n,o){(o=e.oe.get(this))&&t.mutable&&E(e,o,l,n,s)})}},E=(e,t,n,o,l,i,s)=>{(s=e.te.get(t))||e.te.set(t,s={});const r=s[n];if(o!==r&&(s[n]=o,i=e.Z.get(t))){{const e=s[A+n];if(e)for(let t=0;t<e.length;t++)try{i[e[t]].call(i,o,r,n)}catch(e){console.error(e)}}!e._&&t["s-rn"]&&W(e,t,l)}},O=(e,t,n,o)=>{Object.defineProperty(e,t,{configurable:!0,get:n,set:o})},A="wc-",T=(e,t,n,o,l,i)=>{try{l=new(i=e.M(t).V),((e,t,n,o,l,i)=>{e.oe.set(o,n),e.te.has(n)||e.te.set(n,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(([t,s])=>{S(e,s,n,o,t,l,i)})})(e,i,t,l,n,o)}catch(n){l={},e.K(n,7,t,!0)}return e.Z.set(t,l),l},R=(e,t,n,o,l,i)=>{if(e.P.delete(t),(l=e.G.get(t))&&((o=l["s-ld"])&&((n=o.indexOf(t))>-1&&o.splice(n,1),o.length||l["s-init"]&&l["s-init"]()),e.G.delete(t)),e.le.length&&!e.P.size)for(;i=e.le.shift();)i()},L=(e,t,n,o)=>{t.forEach(([t,l])=>{3&l.S&&O(n,t,function n(){return(e.te.get(this)||{})[t]},function n(i){E(e,this,t,j(l.A,i),o)})})},D=(e,t,n,o,l)=>{if(n.connectedCallback=function(){((e,t,n)=>{e.U.delete(n),e.ie.has(n)||(e.se=!0,e.P.add(n),e.ie.set(n,!0),((e,t,n)=>{for(n=t;n=e.u.re(n);)if(e.ae(n)){e.ce.has(t)||(e.G.set(t,n),(n["s-ld"]=n["s-ld"]||[]).push(t));break}})(e,n),e.queue.tick(()=>{e.J.set(n,((e,t,n,o,l)=>(n.mode||(n.mode=e.fe(n)),n["s-cr"]||e.ue(n,"ssrv")||e.s&&1===t.i||(n["s-cr"]=e.pe(""),n["s-cr"]["s-cn"]=!0,e.v(n,n["s-cr"],e.de(n)[0])),1===t.i&&e.s&&!n.shadowRoot&&e.me(n,{mode:"open"}),o={ne:{}},t.g&&Object.keys(t.g).forEach(i=>{(l=t.g[i].N)&&(o.ne[l]=e.ue(n,l))}),o))(e.u,t,n)),e.ve(t,n)}))})(e,t,this)},n.disconnectedCallback=function(){((e,t)=>{!e.be&&((e,t)=>{for(;t;){if(!e.he(t))return 9!==e.ye(t);t=e.he(t)}})(e.u,t)&&(e.U.set(t,!0),R(e,t),y(e.ee.get(t),!0),e.u.W(t),e.we.delete(t),[e.G,e.Me,e.J].forEach(e=>e.delete(t)))})(e,this)},n["s-init"]=function(){((e,t,n,o,l,i)=>{if(e.Z.get(t)&&!e.U.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){e.ce.set(t,!0),e.$e.has(t)||(e.$e.set(t,!0),t["s-ld"]=void 0,e.u.Y(t,n));try{y(e.ee.get(t)),(i=e.Me.get(t))&&(i.forEach(e=>e(t)),e.Me.delete(t))}catch(n){e.K(n,4,t)}R(e,t)}})(e,this,o)},n.forceUpdate=function(){W(e,this,l)},t.g){const o=Object.entries(t.g);{let e={};o.forEach(([t,{N:n}])=>{n&&(e[n]=t)}),e=Object.assign({},e),n.attributeChangedCallback=function(t,n,o){(function l(e,t,n,o){const l=e[f(n)];l&&(t[l]=o)})(e,this,t,o)}}L(e,o,n,l)}};((e,t,n,i,r,c,u)=>{const p=n.performance,d={html:{}},m=n[e]=n[e]||{},h=((e,t,n)=>{const o=new WeakMap,l={p:n,s:!!n.documentElement.attachShadow,ge:!1,ye:e=>e.nodeType,ke:e=>n.createElement(e),Ce:(e,t)=>n.createElementNS(e,t),pe:e=>n.createTextNode(e),je:e=>n.createComment(e),v:(e,t,n)=>e.insertBefore(t,n),We:e=>e.remove(),Ne:(e,t)=>e.appendChild(t),Y:(e,t)=>{e.classList.add(t)},de:e=>e.childNodes,he:e=>e.parentNode,Se:e=>e.nextSibling,xe:e=>e.previousSibling,Ee:e=>f(e.nodeName),Oe:e=>e.textContent,Ae:(e,t)=>e.textContent=t,ue:(e,t)=>e.getAttribute(t),Te:(e,t,n)=>e.setAttribute(t,n),k:(e,t)=>e.removeAttribute(t),C:(e,t)=>e.hasAttribute(t),fe:t=>t.getAttribute("mode")||(e.Context||{}).mode,Re:(e,o)=>"child"===o?e.firstElementChild:"parent"===o?l.re(e):"body"===o?n.body:"document"===o?n:"window"===o?t:e,j:(t,n,i,s,r,a,c,f,u,p)=>{let d=t,m=i,v=o.get(t);p=n+s,v&&v[p]&&v[p](),"object"==typeof c&&(d=c),d&&(f=l.ge?{capture:!!r,passive:!!a}:!!r,e.ael(d,n,m,f),v||o.set(t,v={}),v[p]=(()=>{d&&e.rel(d,n,m,f),v[p]=null}))},W:(e,t,n,l)=>{(l=o.get(e))&&(t?l[t+n]&&l[t+n]():Object.keys(l).forEach(e=>{l[e]&&l[e]()}))},Le:(e,n,o,l)=>(l=new t.CustomEvent(n,o),e&&e.dispatchEvent(l),l),re:(e,t)=>(t=l.he(e))&&11===l.ye(t)?t.host:t,De:(e,t,n,o)=>e.setAttributeNS(t,n,o),me:(e,t)=>e.attachShadow(t)};return e.ael||(e.ael=((e,t,n,o)=>e.addEventListener(t,n,o)),e.rel=((e,t,n,o)=>e.removeEventListener(t,n,o))),l})(m,n,i),y=h.p.documentElement,w=n["s-defined"]=n["s-defined"]||{},$=(e,t)=>{n.customElements.get(e.t)||(D(g,d[e.t]=e,t.prototype,c,p),t.observedAttributes=Object.values(e.g).map(e=>e.N).filter(e=>!!e),n.customElements.define(e.t,t))},g={u:h,qe:$,M:e=>d[h.Ee(e)],Be:e=>t[e],isClient:!0,ae:e=>!(!w[h.Ee(e)]&&!g.M(e)),K:(e,t,n)=>console.error(e,t,n&&n.tagName),queue:t.queue=M(m,n),ve:(e,t)=>{{const n=e.T,o=!h.s;let i=r+n+(o?".sc":"")+".entry.js";import(i).then(n=>{try{e.V=n[(e=>f(e).split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""))(e.t)],function o(e,t,n,i,s){if(i){const n=t.t+(s||l);if(!t[n]){const o=e.ke("template");t[n]=o,o.innerHTML=`<style>${i}</style>`,e.Ne(e.p.head,o)}}}(h,e,e.i,e.V.style,e.V.styleMode),W(g,t,p)}catch(t){console.error(t),e.V=class{}}},e=>console.error(e,i))}},_:!1,H:!1,be:!1,X:s,G:new WeakMap,m:new WeakMap,ie:new WeakMap,we:new WeakMap,$e:new WeakMap,ce:new WeakMap,oe:new WeakMap,J:new WeakMap,Z:new WeakMap,U:new WeakMap,F:new WeakMap,Me:new WeakMap,Ie:new WeakMap,ee:new WeakMap,te:new WeakMap,P:new Set,le:[]};return t.isServer=t.isPrerender=!(t.isClient=!0),t.window=n,t.location=n.location,t.document=i,t.resourcesUrl=t.publicPath=r,m.h=o,m.Context=t,m.onReady=(()=>new Promise(e=>g.queue.write(()=>g.P.size?g.le.push(e):e()))),g.render=((e,t)=>{let n,o,l,i,s,r,c;const f=(l,p,d,m,h,y,w,M,$)=>{if(M=p.vchildren[d],n||(i=!0,"slot"===M.vtag&&(o&&t.Y(m,o+"-s"),M.vchildren?M.Pe=!0:M.Fe=!0)),a(M.vtext))M.o=t.pe(M.vtext);else if(M.Fe)M.o=t.pe("");else{if(y=M.o=b||"svg"===M.vtag?t.Ce("http://www.w3.org/2000/svg",M.vtag):t.ke(M.Pe?"slot-fb":M.vtag),e.ae(y)&&e.ce.delete(c),b="svg"===M.vtag||"foreignObject"!==M.vtag&&b,v(e,null,M,b),a(o)&&y["s-si"]!==o&&t.Y(y,y["s-si"]=o),M.vchildren)for(h=0;h<M.vchildren.length;++h)(w=f(l,M,h,y))&&t.Ne(y,w);"svg"===M.vtag&&(b=!1)}return M.o["s-hn"]=r,(M.Pe||M.Fe)&&(M.o["s-sr"]=!0,M.o["s-cr"]=s,M.o["s-sn"]=M.vname||"",($=l&&l.vchildren&&l.vchildren[d])&&$.vtag===M.vtag&&l.o&&u(l.o)),M.o},u=(n,o,l,s)=>{e.be=!0;const a=t.de(n);for(l=a.length-1;l>=0;l--)(s=a[l])["s-hn"]!==r&&s["s-ol"]&&(t.We(s),t.v(y(s),s,h(s)),t.We(s["s-ol"]),s["s-ol"]=null,i=!0),o&&u(s,o);e.be=!1},p=(e,n,o,l,i,s,c,u)=>{const p=e["s-cr"];for((c=p&&t.he(p)||e).shadowRoot&&t.Ee(c)===r&&(c=c.shadowRoot);i<=s;++i)l[i]&&(u=a(l[i].vtext)?t.pe(l[i].vtext):f(null,o,i,e))&&(l[i].o=u,t.v(c,u,h(n)))},d=(e,n,o,i)=>{for(;n<=o;++n)a(e[n])&&(i=e[n].o,l=!0,i["s-ol"]?t.We(i["s-ol"]):u(i,!0),t.We(i))},m=(e,t)=>e.vtag===t.vtag&&e.vkey===t.vkey&&("slot"!==e.vtag||e.vname===t.vname),h=e=>e&&e["s-ol"]?e["s-ol"]:e,y=e=>t.he(e["s-ol"]?e["s-ol"]:e),w=(n,o,l)=>{const i=o.o=n.o,s=n.vchildren,r=o.vchildren;b=o.o&&a(t.re(o.o))&&void 0!==o.o.ownerSVGElement,b="svg"===o.vtag||"foreignObject"!==o.vtag&&b,a(o.vtext)?(l=i["s-cr"])?t.Ae(t.he(l),o.vtext):n.vtext!==o.vtext&&t.Ae(i,o.vtext):("slot"!==o.vtag&&v(e,n,o,b),a(s)&&a(r)?((e,n,o,l,i,s,r,c)=>{let v=0,b=0,M=n.length-1,$=n[0],g=n[M],k=l.length-1,C=l[0],j=l[k];for(;v<=M&&b<=k;)if(null==$)$=n[++v];else if(null==g)g=n[--M];else if(null==C)C=l[++b];else if(null==j)j=l[--k];else if(m($,C))w($,C),$=n[++v],C=l[++b];else if(m(g,j))w(g,j),g=n[--M],j=l[--k];else if(m($,j))"slot"!==$.vtag&&"slot"!==j.vtag||u(t.he($.o)),w($,j),t.v(e,$.o,t.Se(g.o)),$=n[++v],j=l[--k];else if(m(g,C))"slot"!==$.vtag&&"slot"!==j.vtag||u(t.he(g.o)),w(g,C),t.v(e,g.o,$.o),g=n[--M],C=l[++b];else{for(i=null,s=v;s<=M;++s)if(n[s]&&a(n[s].vkey)&&n[s].vkey===C.vkey){i=s;break}a(i)?((c=n[i]).vtag!==C.vtag?r=f(n&&n[b],o,i,e):(w(c,C),n[i]=void 0,r=c.o),C=l[++b]):(r=f(n&&n[b],o,b,e),C=l[++b]),r&&t.v(y($.o),r,h($.o))}v>M?p(e,null==l[k+1]?null:l[k+1].o,o,l,b,k):b>k&&d(n,v,M)})(i,s,o,r):a(r)?(a(n.vtext)&&t.Ae(i,""),p(i,null,o,r,0,r.length-1)):a(s)&&d(s,0,s.length-1)),b&&"svg"===o.vtag&&(b=!1)},M=(e,n,o,l,i,s,r,a)=>{for(l=0,i=(o=t.de(e)).length;l<i;l++)if(n=o[l],1===t.ye(n)){if(n["s-sr"])for(r=n["s-sn"],n.hidden=!1,s=0;s<i;s++)if(o[s]["s-hn"]!==n["s-hn"])if(a=t.ye(o[s]),""!==r){if(1===a&&r===t.ue(o[s],"slot")){n.hidden=!0;break}}else if(1===a||3===a&&""!==t.Oe(o[s]).trim()){n.hidden=!0;break}M(n)}},$=[],g=(e,n,o,i,s,r,a,c,f,u)=>{for(s=0,r=(n=t.de(e)).length;s<r;s++){if((o=n[s])["s-sr"]&&(i=o["s-cr"]))for(c=t.de(t.he(i)),f=o["s-sn"],a=c.length-1;a>=0;a--)(i=c[a])["s-cn"]||i["s-nr"]||i["s-hn"]===o["s-hn"]||((3===(u=t.ye(i))||8===u)&&""===f||1===u&&null===t.ue(i,"slot")&&""===f||1===u&&t.ue(i,"slot")===f)&&($.some(e=>e.He===i)||(l=!0,i["s-sn"]=f,$.push({Qe:o,He:i})));1===t.ye(o)&&g(o)}};return(a,f,u,p,d,m,v,b,h,y,k,C)=>{if(c=a,r=t.Ee(c),s=c["s-cr"],n=p,o=c["s-sc"],i=l=!1,w(f,u),i){for(g(u.o),v=0;v<$.length;v++)(b=$[v]).He["s-ol"]||((h=t.pe(""))["s-nr"]=b.He,t.v(t.he(b.He),b.He["s-ol"]=h,b.He));for(e.be=!0,v=0;v<$.length;v++){for(b=$[v],k=t.he(b.Qe),C=t.Se(b.Qe),h=b.He["s-ol"];h=t.xe(h);)if((y=h["s-nr"])&&y&&y["s-sn"]===b.He["s-sn"]&&k===t.he(y)&&(y=t.Se(y))&&y&&!y["s-nr"]){C=y;break}(!C&&k!==t.he(b.He)||t.Se(b.He)!==C)&&b.He!==C&&(t.We(b.He),t.v(k,b.He,C))}e.be=!1}return l&&M(u.o),$.length=0,u}})(g,h),y["s-ld"]=[],y["s-rn"]=!0,y["s-init"]=(()=>{g.ce.set(y,m.loaded=g.H=!0),h.Le(n,"appload",{detail:{namespace:e}})}),u.map(k).forEach(e=>$(e,class extends HTMLElement{})),g.se||y["s-init"](),((e,t,n,o,l,i)=>{if(t.componentOnReady=((t,n)=>{if(!t.nodeName.includes("-"))return n(null),!1;const o=e.M(t);if(o)if(e.ce.has(t))n(t);else{const o=e.Me.get(t)||[];o.push(n),e.Me.set(t,o)}return!!o}),l){for(i=l.length-1;i>=0;i--)t.componentOnReady(l[i][0],l[i][1])&&l.splice(i,1);for(i=0;i<o.length;i++)if(!n[o[i]].componentOnReady)return;for(i=0;i<l.length;i++)l[i][1](null);l.length=0}})(g,m,n,n["s-apps"],n["s-cr"]),m.initialized=!0,g})(n,x,w,d,r,h,c);
})(window,document,{},"nova","hydrated",[["nova-badge","nsrgswbr",1,[["score",2,0,1,2]],1]]);