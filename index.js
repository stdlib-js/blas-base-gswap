// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).gswap=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(r){return"string"==typeof r}var l=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,y=String.prototype.replace,p=/e\+(\d)$/,h=/e-(\d)$/,g=/^(\d+)$/,m=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function d(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=y.call(n,v,"$1e"),n=y.call(n,b,"e"),n=y.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=y.call(n,p,"e+0$1"),n=y.call(n,h,"e-0$1"),r.alternate&&(n=y.call(n,g,"$1."),n=y.call(n,m,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):c.call(n)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function A(r,e,t){var n=e-r.length;return n<0?r:r=t?r+E(n):E(n)+r}var T=String.fromCharCode,_=isNaN,x=Array.isArray;function j(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,o,a,l,c,s,y;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",c=1,s=0;s<r.length;s++)if(f(n=r[s]))l+=n;else{if(e=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,y=0;y<t.length;y++)switch(o=t.charAt(y)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,_(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=d(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),l+=n.arg||"",c+=1}return l}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function L(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function R(r){var e,t,n,i;for(t=[],i=0,n=V.exec(r);n;)(e=r.slice(i,V.lastIndex-n[0].length)).length&&t.push(e),t.push(L(n)),i=V.lastIndex,n=V.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function S(r){return"string"==typeof r}function B(r){var e,t,n;if(!S(r))throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=R(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var I,C=Object.prototype,F=C.toString,P=C.__defineGetter__,O=C.__defineSetter__,M=C.__lookupGetter__,U=C.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(M.call(r,e)||U.call(r,e)?(n=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&P&&P.call(r,e,t.get),a&&O&&O.call(r,e,t.set),r};var N=I;function Y(r,e,t){N(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var W="function";var $={float64:function(r,e){return r[e]},float32:function(r,e){return r[e]},int32:function(r,e){return r[e]},int16:function(r,e){return r[e]},int8:function(r,e){return r[e]},uint32:function(r,e){return r[e]},uint16:function(r,e){return r[e]},uint8:function(r,e){return r[e]},uint8c:function(r,e){return r[e]},generic:function(r,e){return r[e]},default:function(r,e){return r[e]}};function G(r){var e=$[r];return"function"==typeof e?e:$.default}var Z={float64:function(r,e,t){r[e]=t},float32:function(r,e,t){r[e]=t},int32:function(r,e,t){r[e]=t},int16:function(r,e,t){r[e]=t},int8:function(r,e,t){r[e]=t},uint32:function(r,e,t){r[e]=t},uint16:function(r,e,t){r[e]=t},uint8:function(r,e,t){r[e]=t},uint8c:function(r,e,t){r[e]=t},generic:function(r,e,t){r[e]=t},default:function(r,e,t){r[e]=t}};function X(r){var e=Z[r];return"function"==typeof e?e:Z.default}var J={complex128:function(r,e){return r.get(e)},complex64:function(r,e){return r.get(e)},default:function(r,e){return r.get(e)}};function z(r){var e=J[r];return"function"==typeof e?e:J.default}var q={complex128:function(r,e,t){r.set(t,e)},complex64:function(r,e,t){r.set(t,e)},default:function(r,e,t){r.set(t,e)}};function D(r){var e=q[r];return"function"==typeof e?e:q.default}var H="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function K(){return H&&"symbol"==typeof Symbol.toStringTag}var Q=Object.prototype.toString;var rr=Object.prototype.hasOwnProperty;function er(r,e){return null!=r&&rr.call(r,e)}var tr="function"==typeof Symbol?Symbol:void 0,nr="function"==typeof tr?tr.toStringTag:"";var ir=K()?function(r){var e,t,n;if(null==r)return Q.call(r);t=r[nr],e=er(r,nr);try{r[nr]=void 0}catch(e){return Q.call(r)}return n=Q.call(r),e?r[nr]=t:delete r[nr],n}:function(r){return Q.call(r)};var or=Array.isArray?Array.isArray:function(r){return"[object Array]"===ir(r)};function ar(r){return null!==r&&"object"==typeof r}function ur(r){return ar(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function fr(){return/^\s*function\s*([^(]*)/i}Y(ar,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!or(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(ar));var lr=/^\s*function\s*([^(]*)/i;function cr(r){var e,t,n;if(("Object"===(t=ir(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=lr.exec(n.toString()))return e[1]}return ur(r)?"Buffer":t}Y(fr,"REGEXP",lr);var sr={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},yr="function"==typeof Float64Array;var pr="function"==typeof Float64Array?Float64Array:null;var hr="function"==typeof Float64Array?Float64Array:void 0;var gr=function(){var r,e,t;if("function"!=typeof pr)return!1;try{e=new pr([1,3.14,-3.14,NaN]),t=e,r=(yr&&t instanceof Float64Array||"[object Float64Array]"===ir(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?hr:function(){throw new Error("not implemented")},mr="function"==typeof Float32Array;var wr=Number.POSITIVE_INFINITY,br="function"==typeof Float32Array?Float32Array:null;var vr="function"==typeof Float32Array?Float32Array:void 0;var dr=function(){var r,e,t;if("function"!=typeof br)return!1;try{e=new br([1,3.14,-3.14,5e40]),t=e,r=(mr&&t instanceof Float32Array||"[object Float32Array]"===ir(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===wr}catch(e){r=!1}return r}()?vr:function(){throw new Error("not implemented")},Er="function"==typeof Uint32Array;var Ar="function"==typeof Uint32Array?Uint32Array:null;var Tr="function"==typeof Uint32Array?Uint32Array:void 0;var _r=function(){var r,e,t;if("function"!=typeof Ar)return!1;try{e=new Ar(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Er&&t instanceof Uint32Array||"[object Uint32Array]"===ir(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Tr:function(){throw new Error("not implemented")},xr="function"==typeof Int32Array;var jr="function"==typeof Int32Array?Int32Array:null;var kr="function"==typeof Int32Array?Int32Array:void 0;var Vr=function(){var r,e,t;if("function"!=typeof jr)return!1;try{e=new jr([1,3.14,-3.14,2147483648]),t=e,r=(xr&&t instanceof Int32Array||"[object Int32Array]"===ir(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?kr:function(){throw new Error("not implemented")},Lr="function"==typeof Uint16Array;var Rr="function"==typeof Uint16Array?Uint16Array:null;var Sr="function"==typeof Uint16Array?Uint16Array:void 0;var Br=function(){var r,e,t;if("function"!=typeof Rr)return!1;try{e=new Rr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Lr&&t instanceof Uint16Array||"[object Uint16Array]"===ir(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Sr:function(){throw new Error("not implemented")},Ir="function"==typeof Int16Array;var Cr="function"==typeof Int16Array?Int16Array:null;var Fr="function"==typeof Int16Array?Int16Array:void 0;var Pr=function(){var r,e,t;if("function"!=typeof Cr)return!1;try{e=new Cr([1,3.14,-3.14,32768]),t=e,r=(Ir&&t instanceof Int16Array||"[object Int16Array]"===ir(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?Fr:function(){throw new Error("not implemented")},Or="function"==typeof Uint8Array;var Mr="function"==typeof Uint8Array?Uint8Array:null;var Ur="function"==typeof Uint8Array?Uint8Array:void 0;var Nr=function(){var r,e,t;if("function"!=typeof Mr)return!1;try{e=new Mr(e=[1,3.14,-3.14,256,257]),t=e,r=(Or&&t instanceof Uint8Array||"[object Uint8Array]"===ir(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ur:function(){throw new Error("not implemented")},Yr="function"==typeof Uint8ClampedArray;var Wr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var $r="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var Gr=function(){var r,e,t;if("function"!=typeof Wr)return!1;try{e=new Wr([-1,0,1,3.14,4.99,255,256]),t=e,r=(Yr&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===ir(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?$r:function(){throw new Error("not implemented")},Zr="function"==typeof Int8Array;var Xr="function"==typeof Int8Array?Int8Array:null;var Jr="function"==typeof Int8Array?Int8Array:void 0;var zr=function(){var r,e,t;if("function"!=typeof Xr)return!1;try{e=new Xr([1,3.14,-3.14,128]),t=e,r=(Zr&&t instanceof Int8Array||"[object Int8Array]"===ir(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?Jr:function(){throw new Error("not implemented")};function qr(r){return"number"==typeof r}var Dr=Number,Hr=Dr.prototype.toString;var Kr=K();function Qr(r){return"object"==typeof r&&(r instanceof Dr||(Kr?function(r){try{return Hr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===ir(r)))}function re(r){return qr(r)||Qr(r)}Y(re,"isPrimitive",qr),Y(re,"isObject",Qr);var ee=Dr.NEGATIVE_INFINITY,te=Math.floor;function ne(r){return te(r)===r}function ie(r){return r<wr&&r>ee&&ne(r)}function oe(r){return qr(r)&&ie(r)}function ae(r){return Qr(r)&&ie(r.valueOf())}function ue(r){return oe(r)||ae(r)}function fe(r){return oe(r)&&r>=0}function le(r){return ae(r)&&r.valueOf()>=0}function ce(r){return fe(r)||le(r)}Y(ue,"isPrimitive",oe),Y(ue,"isObject",ae),Y(ce,"isPrimitive",fe),Y(ce,"isObject",le);function se(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&ne(r.length)&&r.length>=0&&r.length<=4294967295}function ye(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&ne(r.length)&&r.length>=0&&r.length<=9007199254740991}var pe="function"==typeof ArrayBuffer;function he(r){return pe&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===ir(r)}function ge(r){return"object"==typeof r&&null!==r&&!or(r)}var me=/./;function we(r){return"boolean"==typeof r}var be=Boolean,ve=Boolean.prototype.toString;var de=K();function Ee(r){return"object"==typeof r&&(r instanceof be||(de?function(r){try{return ve.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===ir(r)))}function Ae(r){return we(r)||Ee(r)}function Te(){return new Function("return this;")()}Y(Ae,"isPrimitive",we),Y(Ae,"isObject",Ee);var _e="object"==typeof self?self:null,xe="object"==typeof window?window:null,je="object"==typeof global?global:null,ke="object"==typeof globalThis?globalThis:null;var Ve=function(r){if(arguments.length){if(!we(r))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Te()}if(ke)return ke;if(_e)return _e;if(xe)return xe;if(je)return je;throw new Error("unexpected error. Unable to resolve global object.")}(),Le=Ve.document&&Ve.document.childNodes,Re=Int8Array;var Se="function"==typeof me||"object"==typeof Re||"function"==typeof Le?function(r){return cr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?cr(r).toLowerCase():e};function Be(r){return"function"===Se(r)}function Ie(r,e){if(!(this instanceof Ie))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!qr(r))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",r));if(!qr(e))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return N(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),N(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}Y(Ie,"BYTES_PER_ELEMENT",8),Y(Ie.prototype,"BYTES_PER_ELEMENT",8),Y(Ie.prototype,"byteLength",16),Y(Ie.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),Y(Ie.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var Ce="function"==typeof Math.fround?Math.fround:null,Fe=new dr(1);var Pe="function"==typeof Ce?Ce:function(r){return Fe[0]=r,Fe[0]};function Oe(r,e){if(!(this instanceof Oe))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!qr(r))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",r));if(!qr(e))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return N(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Pe(r)}),N(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Pe(e)}),this}function Me(r){return r instanceof Ie||r instanceof Oe||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function Ue(r){return ne(r/2)}function Ne(){return"function"==typeof tr&&"symbol"==typeof tr("foo")&&er(tr,"iterator")&&"symbol"==typeof tr.iterator}Y(Oe,"BYTES_PER_ELEMENT",4),Y(Oe.prototype,"BYTES_PER_ELEMENT",4),Y(Oe.prototype,"byteLength",8),Y(Oe.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),Y(Oe.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var Ye=Ne()?Symbol.iterator:null;function We(r,e,t){N(r,e,{configurable:!1,enumerable:!1,get:t})}function $e(r){return r.re}function Ge(r){return r.im}function Ze(r,e){return new dr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function Xe(r,e){return new gr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function Je(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(se(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Me(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push($e(n),Ge(n))}return e}function ze(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,se(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Me(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push($e(o),Ge(o))}return n}function qe(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Me(n=e[i]))return null;r[o]=$e(n),r[o+1]=Ge(n),o+=2}return r}var De=2*dr.BYTES_PER_ELEMENT,He=Ne();function Ke(r){return r instanceof tt||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function Qe(r){return r===tt||"Complex128Array"===r.name}function rt(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===De}function et(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===2*De}function tt(){var r,e,t,n;if(e=arguments.length,!(this instanceof tt))return 0===e?new tt:1===e?new tt(arguments[0]):2===e?new tt(arguments[0],arguments[1]):new tt(arguments[0],arguments[1],arguments[2]);if(0===e)t=new dr(0);else if(1===e)if(fe(arguments[0]))t=new dr(2*arguments[0]);else if(ye(arguments[0]))if((n=(t=arguments[0]).length)&&or(t)&&Me(t[0])){if(null===(t=qe(new dr(2*n),t))){if(!Ue(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new dr(arguments[0])}}else{if(rt(t))t=Ze(t,0);else if(et(t))t=Xe(t,0);else if(!Ue(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new dr(t)}else if(he(arguments[0])){if(!ne((t=arguments[0]).byteLength/De))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",De,t.byteLength));t=new dr(t)}else{if(!ge(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===He)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Be(t[Ye]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Be((t=t[Ye]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=Je(t))instanceof Error)throw t;t=new dr(t)}else{if(!he(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!fe(r=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!ne(r/De))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",De,r));if(2===e){if(!ne((n=t.byteLength-r)/De))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",De,n));t=new dr(t,r)}else{if(!fe(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*De>t.byteLength-r)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*De));t=new dr(t,r,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}function nt(r){return r.re}function it(r){return r.im}function ot(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(se(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Me(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(nt(n),it(n))}return e}function at(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,se(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Me(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(nt(o),it(o))}return n}function ut(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Me(n=e[i]))return null;r[o]=nt(n),r[o+1]=it(n),o+=2}return r}Y(tt,"BYTES_PER_ELEMENT",De),Y(tt,"name","Complex64Array"),Y(tt,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,s,y;if(!Be(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Qe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Be(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(e=arguments[2])}if(Ke(r)){if(f=r.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Me(c=n.call(e,r.get(s),s)))o[y]=$e(c),o[y+1]=Ge(c);else{if(!(se(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(ye(r)){if(n){for(f=r.length,u=r.get&&r.set?z("default"):G("default"),s=0;s<f;s++)if(!Me(u(r,s))){l=!0;break}if(l){if(!Ue(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(e,u(r,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Me(c=n.call(e,u(r,s),s)))o[y]=$e(c),o[y+1]=Ge(c);else{if(!(se(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(ge(r)&&He&&Be(r[Ye])){if(!Be((o=r[Ye]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((a=n?ze(o,n,e):Je(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),Y(tt,"of",(function(){var r,e;if(!Be(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Qe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),We(tt.prototype,"buffer",(function(){return this._buffer.buffer})),We(tt.prototype,"byteLength",(function(){return this._buffer.byteLength})),We(tt.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(tt.prototype,"BYTES_PER_ELEMENT",tt.BYTES_PER_ELEMENT),Y(tt.prototype,"copyWithin",(function(r,e){if(!Ke(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),Y(tt.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!Ke(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Oe(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),Y(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Ye&&Y(t,Ye,(function(){return e.entries()})),t})),Y(tt.prototype,"get",(function(r){var e;if(!Ke(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!fe(r))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new Oe((e=this._buffer)[r*=2],e[r+1])})),We(tt.prototype,"length",(function(){return this._length})),Y(tt.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!Ke(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!fe(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Me(r)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=$e(r),void(n[t+1]=Ge(r))}if(Ke(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*De,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new dr(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!ye(r))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Me(r[f])){o=!0;break}if(o){if(!Ue(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*De,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new dr(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=$e(u),n[t+1]=Ge(u),t+=2}}));var ft=2*gr.BYTES_PER_ELEMENT,lt=Ne();function ct(r){return r instanceof ht||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function st(r){return r===ht||"Complex64Array"===r.name}function yt(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===ft/2}function pt(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===ft}function ht(){var r,e,t,n;if(e=arguments.length,!(this instanceof ht))return 0===e?new ht:1===e?new ht(arguments[0]):2===e?new ht(arguments[0],arguments[1]):new ht(arguments[0],arguments[1],arguments[2]);if(0===e)t=new gr(0);else if(1===e)if(fe(arguments[0]))t=new gr(2*arguments[0]);else if(ye(arguments[0]))if((n=(t=arguments[0]).length)&&or(t)&&Me(t[0])){if(null===(t=ut(new gr(2*n),t))){if(!Ue(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new gr(arguments[0])}}else{if(yt(t))t=Ze(t,0);else if(pt(t))t=Xe(t,0);else if(!Ue(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new gr(t)}else if(he(arguments[0])){if(!ne((t=arguments[0]).byteLength/ft))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",ft,t.byteLength));t=new gr(t)}else{if(!ge(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===lt)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Be(t[Ye]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Be((t=t[Ye]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=ot(t))instanceof Error)throw t;t=new gr(t)}else{if(!he(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!fe(r=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!ne(r/ft))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",ft,r));if(2===e){if(!ne((n=t.byteLength-r)/ft))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",ft,n));t=new gr(t,r)}else{if(!fe(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*ft>t.byteLength-r)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*ft));t=new gr(t,r,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}Y(ht,"BYTES_PER_ELEMENT",ft),Y(ht,"name","Complex128Array"),Y(ht,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,s,y;if(!Be(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!st(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Be(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(e=arguments[2])}if(ct(r)){if(f=r.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Me(c=n.call(e,r.get(s),s)))o[y]=nt(c),o[y+1]=it(c);else{if(!(se(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(ye(r)){if(n){for(f=r.length,u=r.get&&r.set?z("default"):G("default"),s=0;s<f;s++)if(!Me(u(r,s))){l=!0;break}if(l){if(!Ue(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(e,u(r,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Me(c=n.call(e,u(r,s),s)))o[y]=nt(c),o[y+1]=it(c);else{if(!(se(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(ge(r)&&lt&&Be(r[Ye])){if(!Be((o=r[Ye]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((a=n?at(o,n,e):ot(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),Y(ht,"of",(function(){var r,e;if(!Be(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!st(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),We(ht.prototype,"buffer",(function(){return this._buffer.buffer})),We(ht.prototype,"byteLength",(function(){return this._buffer.byteLength})),We(ht.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(ht.prototype,"BYTES_PER_ELEMENT",ht.BYTES_PER_ELEMENT),Y(ht.prototype,"copyWithin",(function(r,e){if(!ct(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),Y(ht.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!ct(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Ie(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),Y(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Ye&&Y(t,Ye,(function(){return e.entries()})),t})),Y(ht.prototype,"get",(function(r){var e;if(!ct(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!fe(r))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new Ie((e=this._buffer)[r*=2],e[r+1])})),We(ht.prototype,"length",(function(){return this._length})),Y(ht.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!ct(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!fe(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Me(r)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=nt(r),void(n[t+1]=it(r))}if(ct(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*ft,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new gr(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!ye(r))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Me(r[f])){o=!0;break}if(o){if(!Ue(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*ft,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new gr(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=nt(u),n[t+1]=it(u),t+=2}}));var gt=[gr,dr,Vr,_r,Pr,Br,zr,Nr,Gr,tt,ht],mt=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],wt=mt.length;function bt(r){var e,t=function(r){var e;if(or(r))return"generic";if(ur(r))return null;for(e=0;e<wt;e++)if(r instanceof gt[e])return mt[e];return sr[cr(r)]||null}(r);return typeof(e=r).get===W&&typeof e.set===W?{accessorProtocol:!0,accessors:[z(t),D(t)]}:{accessorProtocol:!1,accessors:[G(t),X(t)]}}function vt(r){var e=bt(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}function dt(r,e,t,n,i,o,a){var u,f,l,c,s,y,p,h;for(u=e.data,f=i.data,c=e.accessors[0],l=i.accessors[1],y=n,p=a,h=0;h<r;h++)s=c(u,y),l(u,y,c(f,p)),l(f,p,s),y+=t,p+=o;return e}function Et(r,e,t,n,i){var o,a,u,f,l,c,s,y;if(r<=0)return n;if(f=vt(e),l=vt(n),f.accessorProtocol||l.accessorProtocol)return dt(r,f,t,a=t<0?(1-r)*t:0,l,i,u=i<0?(1-r)*i:0),l.data;if(1===t&&1===i){if((c=r%3)>0)for(s=0;s<c;s++)o=e[s],e[s]=n[s],n[s]=o;if(r<3)return n;for(s=c;s<r;s+=3)o=e[s],e[s]=n[s],n[s]=o,o=e[y=s+1],e[y]=n[y],n[y]=o,o=e[y+=1],e[y]=n[y],n[y]=o;return n}for(a=t<0?(1-r)*t:0,u=i<0?(1-r)*i:0,s=0;s<r;s++)o=e[a],e[a]=n[u],n[u]=o,a+=t,u+=i;return n}return Y(Et,"ndarray",(function(r,e,t,n,i,o,a){var u,f,l,c,s,y,p;if(r<=0)return i;if(c=vt(e),s=vt(i),c.accessorProtocol||s.accessorProtocol)return dt(r,c,t,n,s,o,a),s.data;if(f=n,l=a,1===t&&1===o){if((y=r%3)>0)for(p=0;p<y;p++)u=e[f],e[f]=i[l],i[l]=u,f+=t,l+=o;if(r<3)return i;for(p=y;p<r;p+=3)u=e[f],e[f]=i[l],i[l]=u,u=e[f+1],e[f+1]=i[l+1],i[l+1]=u,u=e[f+2],e[f+2]=i[l+2],i[l+2]=u,f+=3,l+=3;return i}for(p=0;p<r;p++)u=e[f],e[f]=i[l],i[l]=u,f+=t,l+=o;return i})),Et}));
//# sourceMappingURL=index.js.map
