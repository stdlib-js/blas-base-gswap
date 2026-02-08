"use strict";var b=function(u,r){return function(){return r||u((r={exports:{}}).exports,r),r.exports}};var g=b(function(I,j){
function A(u,r,n,f,a,t,l){var e,c,v,p,o,i,s,m;for(e=r.data,c=a.data,p=r.accessors[0],v=a.accessors[1],i=f,s=l,m=0;m<u;m++)o=p(e,i),v(e,i,p(c,s)),v(c,s,o),i+=n,s+=t;return r}j.exports=A
});var M=b(function(J,k){
var w=require('@stdlib/array-base-arraylike2object/dist'),B=g(),P=3;function C(u,r,n,f,a){var t,l,e,c,v,p,o,i;if(u<=0)return f;if(c=w(r),v=w(f),c.accessorProtocol||v.accessorProtocol)return n<0?l=(1-u)*n:l=0,a<0?e=(1-u)*a:e=0,B(u,c,n,l,v,a,e),v.data;if(n===1&&a===1){if(p=u%P,p>0)for(o=0;o<p;o++)t=r[o],r[o]=f[o],f[o]=t;if(u<P)return f;for(o=p;o<u;o+=P)t=r[o],r[o]=f[o],f[o]=t,i=o+1,t=r[i],r[i]=f[i],f[i]=t,i+=1,t=r[i],r[i]=f[i],f[i]=t;return f}for(n<0?l=(1-u)*n:l=0,a<0?e=(1-u)*a:e=0,o=0;o<u;o++)t=r[l],r[l]=f[e],f[e]=t,l+=n,e+=a;return f}k.exports=C
});var h=b(function(K,R){
var O=require('@stdlib/array-base-arraylike2object/dist'),D=g(),q=3;function E(u,r,n,f,a,t,l){var e,c,v,p,o,i,s;if(u<=0)return a;if(p=O(r),o=O(a),p.accessorProtocol||o.accessorProtocol)return D(u,p,n,f,o,t,l),o.data;if(c=f,v=l,n===1&&t===1){if(i=u%q,i>0)for(s=0;s<i;s++)e=r[c],r[c]=a[v],a[v]=e,c+=n,v+=t;if(u<q)return a;for(s=i;s<u;s+=q)e=r[c],r[c]=a[v],a[v]=e,e=r[c+1],r[c+1]=a[v+1],a[v+1]=e,e=r[c+2],r[c+2]=a[v+2],a[v+2]=e,c+=q,v+=q;return a}for(s=0;s<u;s++)e=r[c],r[c]=a[v],a[v]=e,c+=n,v+=t;return a}R.exports=E
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=M(),G=h();F(z,"ndarray",G);module.exports=z;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
