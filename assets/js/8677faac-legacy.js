System.register(["./c5bc9a2a-legacy.js","./057197ac-legacy.js"],(function(e,t){"use strict";var n,r,o,s,i,a,c,u,l,f,d,h,p,m,b=document.createElement("style");return b.innerHTML=".avatars[data-v-d804b684]{position:relative;width:143px;text-align:center}.avatars .avatar[data-v-d804b684]{width:80px;color:transparent;user-select:none;background-image:linear-gradient(135deg,#bc533b 10%,#3b88bc 40%,#8a3ccf 100%);background-clip:text;-webkit-background-clip:text}.avatars .avatar img[data-v-d804b684],.avatars .avatar .loading-container[data-v-d804b684]{width:80px;height:80px;display:block;border-radius:50%;border:1px solid #fff;box-sizing:border-box}.avatars .avatar .loading-container[data-v-d804b684]{border:none;display:flex}.avatars .avatar .loading-container .loading[data-v-d804b684]{margin:auto}.avatars .avatar-right[data-v-d804b684]{position:absolute;top:0;left:63px}.home[data-v-2b8ebdb1]{min-height:100vh;display:flex;flex-flow:column;justify-content:center;align-items:center}.home .title[data-v-2b8ebdb1]{font-size:20px;margin:10px auto}.home .description[data-v-2b8ebdb1]{height:4em}\n",document.head.appendChild(b),{setters:[e=>{n=e.s,r=e.L},e=>{o=e.d,s=e.m,i=e.o,a=e.c,c=e.a,u=e.u,l=e.b,f=e.x,d=e.y,h=e._,p=e.C,m=e.t}],execute:function(){function t(e,t){return function(){return e.apply(t,arguments)}}const{toString:b}=Object.prototype,{getPrototypeOf:g}=Object,y=(w=Object.create(null),e=>{const t=b.call(e);return w[t]||(w[t]=t.slice(8,-1).toLowerCase())});var w;const E=e=>(e=e.toLowerCase(),t=>y(t)===e),O=e=>t=>typeof t===e,{isArray:v}=Array,R=O("undefined"),S=E("ArrayBuffer"),x=O("string"),A=O("function"),j=O("number"),T=e=>null!==e&&"object"==typeof e,C=e=>{if("object"!==y(e))return!1;const t=g(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},_=E("Date"),N=E("File"),P=E("Blob"),U=E("FileList"),B=E("URLSearchParams");function F(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),v(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}const D=(L="undefined"!=typeof Uint8Array&&g(Uint8Array),e=>L&&e instanceof L);var L;const k=E("HTMLFormElement"),z=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),I=E("RegExp"),M=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};F(n,((n,o)=>{!1!==t(n,o,e)&&(r[o]=n)})),Object.defineProperties(e,r)},q={isArray:v,isArrayBuffer:S,isBuffer:function(e){return null!==e&&!R(e)&&null!==e.constructor&&!R(e.constructor)&&A(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{const t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||b.call(e)===t||A(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&S(e.buffer),t},isString:x,isNumber:j,isBoolean:e=>!0===e||!1===e,isObject:T,isPlainObject:C,isUndefined:R,isDate:_,isFile:N,isBlob:P,isRegExp:I,isFunction:A,isStream:e=>T(e)&&A(e.pipe),isURLSearchParams:B,isTypedArray:D,isFileList:U,forEach:F,merge:function e(){const t={},n=(n,r)=>{C(t[r])&&C(n)?t[r]=e(t[r],n):C(n)?t[r]=e({},n):v(n)?t[r]=n.slice():t[r]=n};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&F(arguments[r],n);return t},extend:(e,n,r,{allOwnKeys:o}={})=>(F(n,((n,o)=>{r&&A(n)?e[o]=t(n,r):e[o]=n}),{allOwnKeys:o}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,s,i;const a={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],r&&!r(i,e,t)||a[i]||(t[i]=e[i],a[i]=!0);e=!1!==n&&g(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:y,kindOfTest:E,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(v(e))return e;let t=e.length;if(!j(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:k,hasOwnProperty:z,hasOwnProp:z,reduceDescriptors:M,freezeMethods:e=>{M(e,((t,n)=>{const r=e[n];A(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return v(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t)};function H(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}q.inherits(H,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const J=H.prototype,V={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{V[e]={value:e}})),Object.defineProperties(H,V),Object.defineProperty(J,"isAxiosError",{value:!0}),H.from=(e,t,n,r,o,s)=>{const i=Object.create(J);return q.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),H.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};var W="object"==typeof self?self.FormData:window.FormData;function K(e){return q.isPlainObject(e)||q.isArray(e)}function $(e){return q.endsWith(e,"[]")?e.slice(0,-2):e}function X(e,t,n){return e?e.concat(t).map((function(e,t){return e=$(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const Q=q.toFlatObject(q,{},null,(function(e){return/^is[A-Z]/.test(e)}));function G(e,t,n){if(!q.isObject(e))throw new TypeError("target must be an object");t=t||new(W||FormData);const r=(n=q.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!q.isUndefined(t[e])}))).metaTokens,o=n.visitor||l,s=n.dots,i=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&(c=t)&&q.isFunction(c.append)&&"FormData"===c[Symbol.toStringTag]&&c[Symbol.iterator];var c;if(!q.isFunction(o))throw new TypeError("visitor must be a function");function u(e){if(null===e)return"";if(q.isDate(e))return e.toISOString();if(!a&&q.isBlob(e))throw new H("Blob is not supported. Use a Buffer instead.");return q.isArrayBuffer(e)||q.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(q.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(q.isArray(e)&&function(e){return q.isArray(e)&&!e.some(K)}(e)||q.isFileList(e)||q.endsWith(n,"[]")&&(a=q.toArray(e)))return n=$(n),a.forEach((function(e,r){!q.isUndefined(e)&&null!==e&&t.append(!0===i?X([n],r,s):null===i?n:n+"[]",u(e))})),!1;return!!K(e)||(t.append(X(o,n,s),u(e)),!1)}const f=[],d=Object.assign(Q,{defaultVisitor:l,convertValue:u,isVisitable:K});if(!q.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!q.isUndefined(n)){if(-1!==f.indexOf(n))throw Error("Circular reference detected in "+r.join("."));f.push(n),q.forEach(n,(function(n,s){!0===(!(q.isUndefined(n)||null===n)&&o.call(t,n,q.isString(s)?s.trim():s,r,d))&&e(n,r?r.concat(s):[s])})),f.pop()}}(e),t}function Y(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Z(e,t){this._pairs=[],e&&G(e,this,t)}const ee=Z.prototype;function te(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ne(e,t,n){if(!t)return e;const r=n&&n.encode||te,o=n&&n.serialize;let s;if(s=o?o(t,n):q.isURLSearchParams(t)?t.toString():new Z(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}ee.append=function(e,t){this._pairs.push([e,t])},ee.toString=function(e){const t=e?function(t){return e.call(this,t,Y)}:Y;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};class re{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){q.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}const oe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},se="undefined"!=typeof URLSearchParams?URLSearchParams:Z,ie=FormData,ae=(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&"undefined"!=typeof window&&"undefined"!=typeof document})(),ce={isBrowser:!0,classes:{URLSearchParams:se,FormData:ie,Blob:Blob},isStandardBrowserEnv:ae,protocols:["http","https","file","blob","url","data"]};function ue(e){function t(e,n,r,o){let s=e[o++];const i=Number.isFinite(+s),a=o>=e.length;return s=!s&&q.isArray(r)?r.length:s,a?(q.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!i):(r[s]&&q.isObject(r[s])||(r[s]=[]),t(e,n,r[s],o)&&q.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}(r[s])),!i)}if(q.isFormData(e)&&q.isFunction(e.entries)){const n={};return q.forEachEntry(e,((e,r)=>{t(function(e){return q.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null}const le=ce.isStandardBrowserEnv?{write:function(e,t,n,r,o,s){const i=[];i.push(e+"="+encodeURIComponent(t)),q.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),q.isString(r)&&i.push("path="+r),q.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function fe(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const de=ce.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=q.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function he(e,t,n){H.call(this,null==e?"canceled":e,H.ERR_CANCELED,t,n),this.name="CanceledError"}q.inherits(he,H,{__CANCEL__:!0});const pe=q.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),me=Symbol("internals"),be=Symbol("defaults");function ge(e){return e&&String(e).trim().toLowerCase()}function ye(e){return!1===e||null==e?e:q.isArray(e)?e.map(ye):String(e)}function we(e,t,n,r){return q.isFunction(r)?r.call(this,t,n):q.isString(t)?q.isString(r)?-1!==t.indexOf(r):q.isRegExp(r)?r.test(t):void 0:void 0}function Ee(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}function Oe(e,t){e&&this.set(e),this[be]=t||null}function ve(e,t){let n=0;const r=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[i];o||(o=c),n[s]=a,r[s]=c;let l=i,f=0;for(;l!==s;)f+=n[l++],l%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const d=u&&c-u;return d?Math.round(1e3*f/d):void 0}}(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,a=s-n,c=r(a);n=s;const u={loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&s<=i?(i-s)/c:void 0};u[t?"download":"upload"]=!0,e(u)}}function Re(e){return new Promise((function(t,n){let r=e.data;const o=Oe.from(e.headers).normalize(),s=e.responseType;let i;function a(){e.cancelToken&&e.cancelToken.unsubscribe(i),e.signal&&e.signal.removeEventListener("abort",i)}q.isFormData(r)&&ce.isStandardBrowserEnv&&o.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const u=fe(e.baseURL,e.url);function l(){if(!c)return;const r=Oe.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());!function(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new H("Request failed with status code "+n.status,[H.ERR_BAD_REQUEST,H.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),a()}),(function(e){n(e),a()}),{data:s&&"text"!==s&&"json"!==s?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:r,config:e,request:c}),c=null}if(c.open(e.method.toUpperCase(),ne(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=l:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(l)},c.onabort=function(){c&&(n(new H("Request aborted",H.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new H("Network Error",H.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||oe;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new H(t,r.clarifyTimeoutError?H.ETIMEDOUT:H.ECONNABORTED,e,c)),c=null},ce.isStandardBrowserEnv){const t=(e.withCredentials||de(u))&&e.xsrfCookieName&&le.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in c&&q.forEach(o.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),q.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),s&&"json"!==s&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",ve(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",ve(e.onUploadProgress)),(e.cancelToken||e.signal)&&(i=t=>{c&&(n(!t||t.type?new he(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(i),e.signal&&(e.signal.aborted?i():e.signal.addEventListener("abort",i)));const f=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(u);f&&-1===ce.protocols.indexOf(f)?n(new H("Unsupported protocol "+f+":",H.ERR_BAD_REQUEST,e)):c.send(r||null)}))}Object.assign(Oe.prototype,{set:function(e,t,n){const r=this;function o(e,t,n){const o=ge(t);if(!o)throw new Error("header name must be a non-empty string");const s=Ee(r,o);(!s||!0===n||!1!==r[s]&&!1!==n)&&(r[s||t]=ye(e))}return q.isPlainObject(e)?q.forEach(e,((e,n)=>{o(e,n,t)})):o(t,e,n),this},get:function(e,t){if(!(e=ge(e)))return;const n=Ee(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(q.isFunction(t))return t.call(this,e,n);if(q.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}},has:function(e,t){if(e=ge(e)){const n=Ee(this,e);return!(!n||t&&!we(0,this[n],n,t))}return!1},delete:function(e,t){const n=this;let r=!1;function o(e){if(e=ge(e)){const o=Ee(n,e);!o||t&&!we(0,n[o],o,t)||(delete n[o],r=!0)}}return q.isArray(e)?e.forEach(o):o(e),r},clear:function(){return Object.keys(this).forEach(this.delete.bind(this))},normalize:function(e){const t=this,n={};return q.forEach(this,((r,o)=>{const s=Ee(n,o);if(s)return t[s]=ye(r),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();i!==o&&delete t[o],t[i]=ye(r),n[i]=!0})),this},toJSON:function(e){const t=Object.create(null);return q.forEach(Object.assign({},this[be]||null,this),((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&q.isArray(n)?n.join(", "):n)})),t}}),Object.assign(Oe,{from:function(e){return q.isString(e)?new this((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&pe[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e)):e instanceof this?e:new this(e)},accessor:function(e){const t=(this[me]=this[me]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=ge(e);t[r]||(function(e,t){const n=q.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return q.isArray(e)?e.forEach(r):r(e),this}}),Oe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),q.freezeMethods(Oe.prototype),q.freezeMethods(Oe);const Se={http:Re,xhr:Re},xe=e=>{if(q.isString(e)){const t=Se[e];if(!e)throw Error(q.hasOwnProp(e)?`Adapter '${e}' is not available in the build`:`Can not resolve adapter '${e}'`);return t}if(!q.isFunction(e))throw new TypeError("adapter is not a function");return e},Ae={"Content-Type":"application/x-www-form-urlencoded"},je={transitional:oe,adapter:function(){let e;return"undefined"!=typeof XMLHttpRequest?e=xe("xhr"):"undefined"!=typeof process&&"process"===q.kindOf(process)&&(e=xe("http")),e}(),transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=q.isObject(e);if(o&&q.isHTMLForm(e)&&(e=new FormData(e)),q.isFormData(e))return r&&r?JSON.stringify(ue(e)):e;if(q.isArrayBuffer(e)||q.isBuffer(e)||q.isStream(e)||q.isFile(e)||q.isBlob(e))return e;if(q.isArrayBufferView(e))return e.buffer;if(q.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return G(e,new ce.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return ce.isNode&&q.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=q.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return G(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(q.isString(e))try{return(t||JSON.parse)(e),q.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||je.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&q.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(o){if(n){if("SyntaxError"===o.name)throw H.from(o,H.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ce.classes.FormData,Blob:ce.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};function Te(e,t){const n=this||je,r=t||n,o=Oe.from(r.headers);let s=r.data;return q.forEach(e,(function(e){s=e.call(n,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function Ce(e){return!(!e||!e.__CANCEL__)}function _e(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new he}function Ne(e){return _e(e),e.headers=Oe.from(e.headers),e.data=Te.call(e,e.transformRequest),(e.adapter||je.adapter)(e).then((function(t){return _e(e),t.data=Te.call(e,e.transformResponse,t),t.headers=Oe.from(t.headers),t}),(function(t){return Ce(t)||(_e(e),t&&t.response&&(t.response.data=Te.call(e,e.transformResponse,t.response),t.response.headers=Oe.from(t.response.headers))),Promise.reject(t)}))}function Pe(e,t){t=t||{};const n={};function r(e,t){return q.isPlainObject(e)&&q.isPlainObject(t)?q.merge(e,t):q.isPlainObject(t)?q.merge({},t):q.isArray(t)?t.slice():t}function o(n){return q.isUndefined(t[n])?q.isUndefined(e[n])?void 0:r(void 0,e[n]):r(e[n],t[n])}function s(e){if(!q.isUndefined(t[e]))return r(void 0,t[e])}function i(n){return q.isUndefined(t[n])?q.isUndefined(e[n])?void 0:r(void 0,e[n]):r(void 0,t[n])}function a(n){return n in t?r(e[n],t[n]):n in e?r(void 0,e[n]):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a};return q.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){const t=c[e]||o,r=t(e);q.isUndefined(r)&&t!==a||(n[e]=r)})),n}q.forEach(["delete","get","head"],(function(e){je.headers[e]={}})),q.forEach(["post","put","patch"],(function(e){je.headers[e]=q.merge(Ae)}));const Ue="1.1.3",Be={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Be[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Fe={};Be.transitional=function(e,t,n){function r(e,t){return"[Axios v1.1.3] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,s)=>{if(!1===e)throw new H(r(o," has been removed"+(t?" in "+t:"")),H.ERR_DEPRECATED);return t&&!Fe[o]&&(Fe[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,s)}};const De={assertOptions:function(e,t,n){if("object"!=typeof e)throw new H("options must be an object",H.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new H("option "+s+" must be "+n,H.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new H("Unknown option "+s,H.ERR_BAD_OPTION)}},validators:Be},Le=De.validators;class ke{constructor(e){this.defaults=e,this.interceptors={request:new re,response:new re}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Pe(this.defaults,t);const{transitional:n,paramsSerializer:r}=t;void 0!==n&&De.assertOptions(n,{silentJSONParsing:Le.transitional(Le.boolean),forcedJSONParsing:Le.transitional(Le.boolean),clarifyTimeoutError:Le.transitional(Le.boolean)},!1),void 0!==r&&De.assertOptions(r,{encode:Le.function,serialize:Le.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();const o=t.headers&&q.merge(t.headers.common,t.headers[t.method]);o&&q.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]})),t.headers=new Oe(t.headers,o);const s=[];let i=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(i=i&&e.synchronous,s.unshift(e.fulfilled,e.rejected))}));const a=[];let c;this.interceptors.response.forEach((function(e){a.push(e.fulfilled,e.rejected)}));let u,l=0;if(!i){const e=[Ne.bind(this),void 0];for(e.unshift.apply(e,s),e.push.apply(e,a),u=e.length,c=Promise.resolve(t);l<u;)c=c.then(e[l++],e[l++]);return c}u=s.length;let f=t;for(l=0;l<u;){const e=s[l++],t=s[l++];try{f=e(f)}catch(d){t.call(this,d);break}}try{c=Ne.call(this,f)}catch(d){return Promise.reject(d)}for(l=0,u=a.length;l<u;)c=c.then(a[l++],a[l++]);return c}getUri(e){return ne(fe((e=Pe(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}q.forEach(["delete","get","head","options"],(function(e){ke.prototype[e]=function(t,n){return this.request(Pe(n||{},{method:e,url:t,data:(n||{}).data}))}})),q.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Pe(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}ke.prototype[e]=t(),ke.prototype[e+"Form"]=t(!0)}));class ze{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new he(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new ze((function(t){e=t})),cancel:e}}}const Ie=function e(n){const r=new ke(n),o=t(ke.prototype.request,r);return q.extend(o,ke.prototype,r,{allOwnKeys:!0}),q.extend(o,r,null,{allOwnKeys:!0}),o.create=function(t){return e(Pe(n,t))},o}(je);Ie.Axios=ke,Ie.CanceledError=he,Ie.CancelToken=ze,Ie.isCancel=Ce,Ie.VERSION=Ue,Ie.toFormData=G,Ie.AxiosError=H,Ie.Cancel=Ie.CanceledError,Ie.all=function(e){return Promise.all(e)},Ie.spread=function(e){return function(t){return e.apply(null,t)}},Ie.isAxiosError=function(e){return q.isObject(e)&&!0===e.isAxiosError},Ie.formToJSON=e=>ue(q.isHTMLForm(e)?new FormData(e):e);const Me=e=>(f("data-v-d804b684"),e=e(),d(),e),qe={class:"avatars"},He={class:"avatar avatar-left"},Je={key:0,class:"loading-container"},Ve=["src"],We=Me((()=>c("div",null,"夏枯",-1))),Ke={class:"avatar avatar-right"},$e={key:0,class:"loading-container"},Xe=["src"],Qe=Me((()=>c("div",null,"无恙",-1))),Ge=h(o({__name:"Avatars",setup(e){const t=e=>Ie({method:"get",url:e,responseType:"arraybuffer"}).then((e=>"data:image/png;base64,"+btoa(new Uint8Array(e.data).reduce(((e,t)=>e+String.fromCharCode(t)),""))));let o=s(),f=s();return t("/assets/jpg/83a6a80b.jpg").then((e=>{f.value=e,n.loadingSuccessCountUp("夏枯的头像")})).catch((()=>{n.loadingFalseCountUp("夏枯的头像")})),t("/assets/jpg/960f4a58.jpg").then((e=>{o.value=e,n.loadingSuccessCountUp("无恙的头像")})).catch((()=>{n.loadingFalseCountUp("无恙的头像")})),(e,t)=>(i(),a("div",qe,[c("div",He,[u(f)?(i(),a("img",{key:1,src:u(f),alt:"头像"},null,8,Ve)):(i(),a("div",Je,[l(r)])),We]),c("div",Ke,[u(o)?(i(),a("img",{key:1,src:u(o),alt:"头像"},null,8,Xe)):(i(),a("div",$e,[l(r)])),Qe])]))}}),[["__scopeId","data-v-d804b684"]]),Ye={class:"home"},Ze=(e=>(f("data-v-2b8ebdb1"),e=e(),d(),e))((()=>c("div",{class:"title"},"夏枯与无恙的小屋",-1))),et={class:"description"};e("default",h(o({__name:"indexHome",setup(e){const t={title:"夏枯和无恙的小屋",descriptions:["夏枯与他的小朋友，小朋友最大。","牵起小手一起走。","执子之手 与子偕老。","喜欢你，何止是一直。"]};let n="夏枯与他的小朋友，小朋友最大";const r=s("");let o,u=s(!1);return p(u,(e=>{o&&clearInterval(o);let s,i=n.length;e?(s=i,o=setInterval((()=>{r.value=n.slice(0,s),s-=1,s<0&&(u.value=!1)}),80)):(n=t.descriptions[Math.floor(Math.random()*t.descriptions.length)],s=0,o=setInterval((()=>{r.value=n.slice(0,s),s+=1,s>i+5&&(u.value=!0)}),150))}),{immediate:!0}),(e,t)=>(i(),a("div",Ye,[l(Ge),Ze,c("div",et,m(r.value),1)]))}}),[["__scopeId","data-v-2b8ebdb1"]]))}}}));