parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"BEPh":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});
},{}],"c69T":[function(require,module,exports) {
"use strict";var t=this&&this.__assign||function(){return(t=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},e=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(a,o){function i(t){try{c(r.next(t))}catch(e){o(e)}}function u(t){try{c(r.throw(t))}catch(e){o(e)}}function c(t){var e;t.done?a(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(i,u)}c((r=r.apply(t,e||[])).next())})},n=this&&this.__generator||function(t,e){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=e.call(t,i)}catch(u){o=[6,u],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},r=this&&this.__spreadArrays||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),a=0;for(e=0;e<n;e++)for(var o=arguments[e],i=0,u=o.length;i<u;i++,a++)r[a]=o[i];return r};function a(t){var e=document.createElement("canvas"),n=t.width,r=t.height;e.width=n||0,e.height=r||0;var a=e.getContext("2d");return a.drawImage(t,0,0),a.getImageData(0,0,n,r)}function o(t){return e(this,void 0,Promise,function(){return n(this,function(e){return[2,new Promise(function(e){var n=new Image;n.onload=function(){return e(n)},n.src=t})]})})}function i(t,e,n){return{x:t[0]>=e?t[1]+t[0]>=e?1:-1:0,y:t[2]>=n?1:0}}function u(t){for(var e=[],n=t.width,r=t.height,a=t.data,o=3;o<a.length;o+=4)e.push(0===t.data[o]?0:1);return{bitArray:e,width:n,height:r}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getImageData=a,exports.imageOf=o,exports.getTransition=i,exports.asBitArray=u;var c=function(t,e,n){return n*e+t},h=function(t,e,n){return 4*c(t,e,n)};function s(t,e){var n=e.bitArray,a=e.width,o=e.height,i=new Uint8ClampedArray(a*o*4);n.forEach(function(e,n){for(var a=1===e?r(t,[255]):[0,0,0,0],o=4*n,u=0;+u<=4;u++)i[o+u]=a[u]});var u=document.createElement("canvas");u.width=a,u.height=o;var c=u.getContext("2d").createImageData(a,o);return c.data.set(i),c}function f(t,e,n){var r=n.x,a=n.y,o=n.width,i=n.height,u=function(t,e){var n=(e+t)%e;return[n,e-n]},c=u(r,o),h=c[0],s=c[1],f=u(a,i),l=f[0],d=f[1],g=function(n,r,a,o){return function(i,u){t.putImageData(e,n-i,r-u,i,u,a,o)}};g(0,0,h,l)(s,d),g(h+1,l+1,s-1,d-1)(0,0),g(0,l+1,h,d)(s,0),g(h,0,s,l)(0,d)}exports.colorBitArrayAsImageData=s,exports.layer=function(e){var n=e.container,r=e.x,a=void 0===r?0:r,o=e.y,u=void 0===o?0:o,c=e.matrix,h=s(e.color,e.bitArray),l=h.width,d=h.height,g=document.createElement("canvas");g.width=l,g.height=d,n.append(g);var v=g.getContext("2d"),p={x:a,y:u};return function(){var e=i(c,Math.random(),Math.random()),n=e.x,r=e.y;p.x+=n,p.y+=r,f(v,h,t(t({},p),{width:l,height:d}))}},exports.cursor=function(t,e,n,a,o,i,u){void 0===u&&(u=[82,147,209]),console.log({width:e,height:n}),t.width=e,t.height=n;var c=t.getContext("2d"),s=new ImageData(e,n),f=h(a,o,e);console.log({index:f});var l=!0;return function(){!function(t){void 0===t&&(t=!0),r(t?i:u,[255]).forEach(function(t,e){s.data[f+e]=t}),c.putImageData(s,0,0)}(l=!l)}};
},{}],"BVSQ":[function(require,module,exports) {
var define;
var o,r=function(){var o=String.fromCharCode,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",e={};function t(o,r){if(!e[o]){e[o]={};for(var n=0;n<o.length;n++)e[o][o.charAt(n)]=n}return e[o][r]}var s={compressToBase64:function(o){if(null==o)return"";var n=s._compress(o,6,function(o){return r.charAt(o)});switch(n.length%4){default:case 0:return n;case 1:return n+"===";case 2:return n+"==";case 3:return n+"="}},decompressFromBase64:function(o){return null==o?"":""==o?null:s._decompress(o.length,32,function(n){return t(r,o.charAt(n))})},compressToUTF16:function(r){return null==r?"":s._compress(r,15,function(r){return o(r+32)})+" "},decompressFromUTF16:function(o){return null==o?"":""==o?null:s._decompress(o.length,16384,function(r){return o.charCodeAt(r)-32})},compressToUint8Array:function(o){for(var r=s.compress(o),n=new Uint8Array(2*r.length),e=0,t=r.length;e<t;e++){var i=r.charCodeAt(e);n[2*e]=i>>>8,n[2*e+1]=i%256}return n},decompressFromUint8Array:function(r){if(null==r)return s.decompress(r);for(var n=new Array(r.length/2),e=0,t=n.length;e<t;e++)n[e]=256*r[2*e]+r[2*e+1];var i=[];return n.forEach(function(r){i.push(o(r))}),s.decompress(i.join(""))},compressToEncodedURIComponent:function(o){return null==o?"":s._compress(o,6,function(o){return n.charAt(o)})},decompressFromEncodedURIComponent:function(o){return null==o?"":""==o?null:(o=o.replace(/ /g,"+"),s._decompress(o.length,32,function(r){return t(n,o.charAt(r))}))},compress:function(r){return s._compress(r,16,function(r){return o(r)})},_compress:function(o,r,n){if(null==o)return"";var e,t,s,i={},p={},u="",c="",a="",l=2,f=3,h=2,d=[],m=0,v=0;for(s=0;s<o.length;s+=1)if(u=o.charAt(s),Object.prototype.hasOwnProperty.call(i,u)||(i[u]=f++,p[u]=!0),c=a+u,Object.prototype.hasOwnProperty.call(i,c))a=c;else{if(Object.prototype.hasOwnProperty.call(p,a)){if(a.charCodeAt(0)<256){for(e=0;e<h;e++)m<<=1,v==r-1?(v=0,d.push(n(m)),m=0):v++;for(t=a.charCodeAt(0),e=0;e<8;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;e<h;e++)m=m<<1|t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=a.charCodeAt(0),e=0;e<16;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}0==--l&&(l=Math.pow(2,h),h++),delete p[a]}else for(t=i[a],e=0;e<h;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;0==--l&&(l=Math.pow(2,h),h++),i[c]=f++,a=String(u)}if(""!==a){if(Object.prototype.hasOwnProperty.call(p,a)){if(a.charCodeAt(0)<256){for(e=0;e<h;e++)m<<=1,v==r-1?(v=0,d.push(n(m)),m=0):v++;for(t=a.charCodeAt(0),e=0;e<8;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;e<h;e++)m=m<<1|t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=a.charCodeAt(0),e=0;e<16;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}0==--l&&(l=Math.pow(2,h),h++),delete p[a]}else for(t=i[a],e=0;e<h;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;0==--l&&(l=Math.pow(2,h),h++)}for(t=2,e=0;e<h;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;for(;;){if(m<<=1,v==r-1){d.push(n(m));break}v++}return d.join("")},decompress:function(o){return null==o?"":""==o?null:s._decompress(o.length,32768,function(r){return o.charCodeAt(r)})},_decompress:function(r,n,e){var t,s,i,p,u,c,a,l=[],f=4,h=4,d=3,m="",v=[],w={val:e(0),position:n,index:1};for(t=0;t<3;t+=1)l[t]=t;for(i=0,u=Math.pow(2,2),c=1;c!=u;)p=w.val&w.position,w.position>>=1,0==w.position&&(w.position=n,w.val=e(w.index++)),i|=(p>0?1:0)*c,c<<=1;switch(i){case 0:for(i=0,u=Math.pow(2,8),c=1;c!=u;)p=w.val&w.position,w.position>>=1,0==w.position&&(w.position=n,w.val=e(w.index++)),i|=(p>0?1:0)*c,c<<=1;a=o(i);break;case 1:for(i=0,u=Math.pow(2,16),c=1;c!=u;)p=w.val&w.position,w.position>>=1,0==w.position&&(w.position=n,w.val=e(w.index++)),i|=(p>0?1:0)*c,c<<=1;a=o(i);break;case 2:return""}for(l[3]=a,s=a,v.push(a);;){if(w.index>r)return"";for(i=0,u=Math.pow(2,d),c=1;c!=u;)p=w.val&w.position,w.position>>=1,0==w.position&&(w.position=n,w.val=e(w.index++)),i|=(p>0?1:0)*c,c<<=1;switch(a=i){case 0:for(i=0,u=Math.pow(2,8),c=1;c!=u;)p=w.val&w.position,w.position>>=1,0==w.position&&(w.position=n,w.val=e(w.index++)),i|=(p>0?1:0)*c,c<<=1;l[h++]=o(i),a=h-1,f--;break;case 1:for(i=0,u=Math.pow(2,16),c=1;c!=u;)p=w.val&w.position,w.position>>=1,0==w.position&&(w.position=n,w.val=e(w.index++)),i|=(p>0?1:0)*c,c<<=1;l[h++]=o(i),a=h-1,f--;break;case 2:return v.join("")}if(0==f&&(f=Math.pow(2,d),d++),l[a])m=l[a];else{if(a!==h)return null;m=s+s.charAt(0)}v.push(m),l[h++]=s+m.charAt(0),s=m,0==--f&&(f=Math.pow(2,d),d++)}}};return s}();"function"==typeof o&&o.amd?o(function(){return r}):"undefined"!=typeof module&&null!=module&&(module.exports=r);
},{}],"oId5":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("lz-string");function t(){var t=location.hash.slice(1);return location.hash?e.decompressFromEncodedURIComponent(t):""}function o(t){t.contentEditable="true",t.setAttribute("style","min-height: 100px"),t.addEventListener("keyup",function(){var o=location.origin+"#"+e.compressToEncodedURIComponent(t.innerText);history.replaceState({path:o},"",o)})}exports.getDecodedMessage=t,exports.writeMessage=o;
},{"lz-string":"BVSQ"}],"E7Wx":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./types")),e(require("./image-processing")),e(require("./message"));
},{"./types":"BEPh","./image-processing":"c69T","./message":"oId5"}],"MFIk":[function(require,module,exports) {
module.exports="snow.85c9ac70.png";
},{}],"ZCfc":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(a,o){function i(e){try{c(n.next(e))}catch(t){o(t)}}function u(e){try{c(n.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then(i,u)}c((n=n.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var r,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(u){o=[6,u],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("./lib"),a=r(require("./img/snow.png"));function o(){return e(this,void 0,void 0,function(){var e,r;return t(this,function(t){return e=document.querySelector(".holiday-card--mesage_dynamic"),(r=n.getDecodedMessage())?e.textContent=r:n.writeMessage(e),n.imageOf(a.default).then(function(e){var t=e.width,r=e.height,a=document.querySelector(".holiday-card--picture .background_animation"),o=n.getImageData(e),i=n.asBitArray(o),u=[n.layer({container:a,x:0,y:0,matrix:[.7,.7,.17],color:[24,32,62],bitArray:i}),n.layer({container:a,x:100,y:100,matrix:[.15,.15,.35],bitArray:i,color:[96,107,145]}),n.layer({container:a,x:75,y:15,matrix:[.3,.3,.7],bitArray:i,color:[170,179,211]})];setInterval(function(){u.forEach(function(e,t){e()})},300);var c=document.querySelector(".holiday-card--picture .foreground_animation canvas");setInterval(n.cursor(c,t,r,229,167,[150,227,252]),750)}),[2]})})}o();
},{"./lib":"E7Wx","./img/snow.png":"MFIk"}]},{},["ZCfc"], null)
//# sourceMappingURL=main.8c9cc140.js.map