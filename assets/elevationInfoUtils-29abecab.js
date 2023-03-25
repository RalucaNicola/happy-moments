import{C as s,aG as l,ck as g,J as f}from"./index-3fca1522.js";function v(t){return t?P:p}function h(t,e){return f(e)||!e.mode?v(t).mode:e.mode}function m(t,e){return s(e)?e:v(t)}function b(t,e){return h(!!s(t)&&t.hasZ,e)}function w(t,e){return m(!!s(t)&&!!t.hasZ,e)}function x(t){const e=Z(t),n=b(t.geometry,e);return{mode:n,offset:s(e)&&n!=="on-the-ground"?l(e.offset,0)*g(l(e.unit,"meters")):0}}function Z(t){return t.layer&&"elevationInfo"in t.layer?t.layer.elevationInfo:null}function I(t,e,n,o=null){return d(t,e.x,e.y,e.hasZ?e.z:0,e.spatialReference,n,o)}function k(t,e,n,o,u=null){return d(t,e[0],e[1],e.length>2?e[2]:0,n,o,u)}function d(t,e,n,o,u,a,i=null){if(f(a))return;const r=s(i)?i.mode:"absolute-height";if(r==="on-the-ground")return 0;const{absoluteZ:c}=y(e,n,o,u,t,a);return E(c,e,n,o,u,t,i,r)}function y(t,e,n,o,u,a){const i=s(a.offset)?a.offset:0;switch(a.mode){case"absolute-height":return{absoluteZ:n+i,elevation:0};case"on-the-ground":{const r=l(u.elevationProvider.getElevation(t,e,0,o,"ground"),0);return{absoluteZ:r,elevation:r}}case"relative-to-ground":{const r=l(u.elevationProvider.getElevation(t,e,n,o,"ground"),0);return{absoluteZ:n+r+i,elevation:r}}case"relative-to-scene":{const r=l(u.elevationProvider.getElevation(t,e,n,o,"scene"),0);return{absoluteZ:n+r+i,elevation:r}}}}function E(t,e,n,o,u,a,i,r){const c=s(i)&&s(i.offset)?i.offset:0;switch(r){case"absolute-height":return t-c;case"relative-to-ground":return t-(l(a.elevationProvider.getElevation(e,n,o,u,"ground"),0)+c);case"relative-to-scene":return t-(l(a.elevationProvider.getElevation(e,n,o,u,"scene"),0)+c)}}function z(t,e){if(f(e))return!1;const{mode:n}=e;return s(n)&&(t==="scene"&&n==="relative-to-scene"||t==="ground"&&n!=="absolute-height")}const P={mode:"absolute-height",offset:0},p={mode:"on-the-ground",offset:null};export{P as E,p as Z,w as a,y as b,x as f,I as g,k as h,b as i,z as y};
