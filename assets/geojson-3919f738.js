import{Z as P,nh as M,ht as $,df as C,de as J}from"./index-22b5b8b0.js";const Z={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function b(n){return Z[n]}function*k(n){switch(n.type){case"Feature":yield n;break;case"FeatureCollection":for(const t of n.features)t&&(yield t)}}function*v(n){if(n)switch(n.type){case"Point":yield n.coordinates;break;case"LineString":case"MultiPoint":yield*n.coordinates;break;case"MultiLineString":case"Polygon":for(const t of n.coordinates)yield*t;break;case"MultiPolygon":for(const t of n.coordinates)for(const o of t)yield*o}}function*x(n,t={}){const{geometryType:o,objectIdField:e}=t;for(const r of n){const{geometry:s,properties:d,id:i}=r;if(s&&b(s.type)!==o)continue;const l=d||{};let c;e&&(c=l[e],i==null||c||(l[e]=c=i)),yield new C(s?R(new J,s,t):null,l,null,c??void 0)}}function A(n){for(const t of n)if(t.length>2)return!0;return!1}function D(n){return!T(n)}function E(n){return T(n)}function T(n){let t=0;for(let o=0;o<n.length;o++){const e=n[o],r=n[(o+1)%n.length];t+=e[0]*r[1]-r[0]*e[1]}return t<=0}function L(n){const t=n[0],o=n[n.length-1];return t[0]===o[0]&&t[1]===o[1]&&t[2]===o[2]||n.push(t),n}function R(n,t,o){switch(t.type){case"LineString":return H(n,t,o);case"MultiLineString":return q(n,t,o);case"MultiPoint":return z(n,t,o);case"MultiPolygon":return B(n,t,o);case"Point":return K(n,t,o);case"Polygon":return Q(n,t,o)}}function H(n,t,o){return g(n,t.coordinates,o),n}function q(n,t,o){for(const e of t.coordinates)g(n,e,o);return n}function z(n,t,o){return g(n,t.coordinates,o),n}function B(n,t,o){for(const e of t.coordinates){O(n,e[0],o);for(let r=1;r<e.length;r++)I(n,e[r],o)}return n}function K(n,t,o){return S(n,t.coordinates,o),n}function Q(n,t,o){const e=t.coordinates;O(n,e[0],o);for(let r=1;r<e.length;r++)I(n,e[r],o);return n}function O(n,t,o){const e=L(t);D(e)?N(n,e,o):g(n,e,o)}function I(n,t,o){const e=L(t);E(e)?N(n,e,o):g(n,e,o)}function g(n,t,o){for(const e of t)S(n,e,o);n.lengths.push(t.length)}function N(n,t,o){for(let e=t.length-1;e>=0;e--)S(n,t[e],o);n.lengths.push(t.length)}function S(n,t,o){const[e,r,s]=t;n.coords.push(e,r),o.hasZ&&n.coords.push(s||0)}function U(n){switch(typeof n){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function W(n){if(!n)throw new P("geojson-layer:empty","GeoJSON data is empty");if(n.type!=="Feature"&&n.type!=="FeatureCollection")throw new P("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:n});const{crs:t}=n;if(!t)return;const o=typeof t=="string"?t:t.type==="name"?t.properties.name:t.type==="EPSG"?t.properties.code:null,e=new RegExp(".*(CRS84H?|4326)$","i");if(!o||!e.test(o))throw new P("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}function X(n,t={}){const o=[],e=new Set,r=new Set;let s,d=!1,i=null,l=!1,{geometryType:c=null}=t,m=!1;for(const p of k(n)){const{geometry:h,properties:u,id:a}=p;if((!h||(c||(c=b(h.type)),b(h.type)===c))&&(d||(d=A(v(h))),l||(l=a!=null,l&&(s=typeof a,u&&(i=Object.keys(u).filter(y=>u[y]===a)))),u&&i&&l&&a!=null&&(i.length>1?i=i.filter(y=>u[y]===a):i.length===1&&(i=u[i[0]]===a?i:[])),!m&&u)){let y=!0;for(const f in u){if(e.has(f))continue;const F=u[f];if(F==null){y=!1,r.add(f);continue}const j=U(F);if(j==="unknown"){r.add(f);continue}r.delete(f),e.add(f);const G=M(f);G&&o.push({name:G,alias:f,type:j})}m=y}}const w=M((i==null?void 0:i.length)===1&&i[0]||null)??void 0;if(w){for(const p of o)if(p.name===w&&$(p)){p.type="esriFieldTypeOID";break}}return{fields:o,geometryType:c,hasZ:d,objectIdFieldName:w,objectIdFieldType:s,unknownFields:Array.from(r)}}function Y(n,t){return Array.from(x(k(n),t))}export{Y as I,X as L,W as T,b as s};
