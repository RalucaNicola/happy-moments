import{eb as x,cj as m,C as g,J as b,ck as I,aW as v,a2 as z,e9 as y,nY as _}from"./index-3fca1522.js";function J(s=!1,e){if(s){const{elevationInfo:t,alignPointsInFeatures:n,spatialReference:a}=e;return new V(t,n,a)}return new w}let w=class{async alignCandidates(e,t){return e}notifyElevationSourceChange(){}};const j=1024;class V{constructor(e,t,n){this._elevationInfo=e,this._alignPointsInFeatures=t,this.spatialReference=n,this._alignmentsCache=new x(j),this._cacheVersion=0,this._metersPerVerticalUnit=m(n)}async alignCandidates(e,t){const n=this._elevationInfo;return g(n)&&n.mode==="absolute-height"&&!n.featureExpressionInfo?(this._alignAbsoluteElevationCandidates(e,n),e):this._alignComputedElevationCandidates(e,t)}notifyElevationSourceChange(){this._alignmentsCache.clear(),this._cacheVersion++}_alignAbsoluteElevationCandidates(e,t){const{offset:n,unit:a}=t;if(b(n))return;const i=n*(I(a??"meters")/this._metersPerVerticalUnit);for(const o of e)switch(o.type){case"edge":o.start.z+=i,o.end.z+=i;continue;case"vertex":o.target.z+=i;continue}}async _alignComputedElevationCandidates(e,t){const n=new Map;for(const r of e)v(n,r.objectId,S).push(r);const[a,i,o]=this._prepareQuery(n),c=await this._alignPointsInFeatures(a,t);if(z(t),o!==this._cacheVersion)return this._alignComputedElevationCandidates(e,t);this._applyCacheAndResponse(a,c,i);const{drapedObjectIds:h,failedObjectIds:d}=c,l=[];for(const r of e){const{objectId:u}=r;h.has(u)&&r.type==="edge"&&(r.draped=!0),d.has(u)||l.push(r)}return l}_prepareQuery(e){const t=[],n=[];for(const[a,i]of e){const o=[];for(const c of i)this._addToQueriesOrCachedResult(a,c.target,o,n),c.type==="edge"&&(this._addToQueriesOrCachedResult(a,c.start,o,n),this._addToQueriesOrCachedResult(a,c.end,o,n));o.length!==0&&t.push({objectId:a,points:o})}return[t,n,this._cacheVersion]}_addToQueriesOrCachedResult(e,t,n,a){const i=C(e,t),o=this._alignmentsCache.get(i);g(o)?a.push(new E(t,o)):n.push(t)}_applyCacheAndResponse(e,{elevations:t,drapedObjectIds:n,failedObjectIds:a},i){for(const h of i)h.apply();let o=0;const c=this._alignmentsCache;for(const{objectId:h,points:d}of e){if(a.has(h)){o+=d.length;continue}const l=!n.has(h);for(const r of d){const u=C(h,r),f=t[o++];r.z=f,l&&c.put(u,f,1)}}}}class E{constructor(e,t){this.point=e,this.z=t}apply(){this.point.z=this.z}}function C(s,{x:e,y:t,z:n}){return`${s}-${e}-${t}-${n??0}}`}function S(){return[]}class O{filter(e,t){return t}notifyElevationSourceChange(){}}let R=class{filter(e,t){const{point:n,distance:a}=e,{z:i}=n;if(i==null||t.length===0)return t;const o=A(a),c=this._updateCandidatesTo3D(t,n,o).filter(Q);return c.sort(F),c}_updateCandidatesTo3D(e,t,n){for(const a of e)switch(a.type){case"edge":T(a,t,n);continue;case"vertex":P(a,t,n);continue}return e}};function Q(s){return s.distance<=1}function Y(s=!1){return s?new R:new O}function T(s,e,{x:t,y:n,z:a}){const{start:i,end:o,target:c}=s;s.draped||M(c,e,i,o);const h=(e.x-c.x)/t,d=(e.y-c.y)/n,l=(e.z-c.z)/a;s.distance=Math.sqrt(h*h+d*d+l*l)}function M(s,e,t,n){const a=n.x-t.x,i=n.y-t.y,o=n.z-t.z,c=a*a+i*i+o*o,h=(e.x-t.x)*a+(e.y-t.y)*i+o*(e.z-t.z),d=Math.min(1,Math.max(0,h/c)),l=t.x+a*d,r=t.y+i*d,u=t.z+o*d;s.x=l,s.y=r,s.z=u}function P(s,e,{x:t,y:n,z:a}){const{target:i}=s,o=(e.x-i.x)/t,c=(e.y-i.y)/n,h=(e.z-i.z)/a,d=Math.sqrt(o*o+c*c+h*h);s.distance=d}function A(s){return typeof s=="number"?{x:s,y:s,z:s}:s}function F(s,e){return s.distance-e.distance}function B(s=!1,e){return s?new U(e):new q}class q{async fetch(){return[]}notifySymbologyChange(){}}const D=1024;class U{constructor(e){this._getSymbologyCandidates=e,this._candidatesCache=new x(D),this._cacheVersion=0}async fetch(e,t){if(e.length===0)return[];const n=[],a=[],i=this._candidatesCache;for(const r of e){const u=$(r),f=i.get(u);if(f)for(const p of f)a.push(y(p));else n.push(r),i.put(u,[],1)}if(n.length===0)return a;const o=this._cacheVersion,{candidates:c,sourceCandidateIndices:h}=await this._getSymbologyCandidates(n,t);if(z(t),o!==this._cacheVersion)return this.fetch(e,t);const d=[],{length:l}=c;for(let r=0;r<l;++r){const u=c[r],f=$(n[h[r]]),p=i.get(f);p.push(u),i.put(f,p,p.length),d.push(y(u))}return a.concat(d)}notifySymbologyChange(){this._candidatesCache.clear(),this._cacheVersion++}}function $(s){switch(s.type){case"vertex":{const{objectId:e,target:t}=s,n=`${e}-vertex-${t.x}-${t.y}-${t.z??0}`;return _(n).toString()}case"edge":{const{objectId:e,start:t,end:n}=s,a=`${e}-edge-${t.x}-${t.y}-${t.z??0}-to-${n.x}-${n.y}-${n.z??0}`;return _(a).toString()}default:return""}}export{Y as a,B as n,J as r};
