import{_ as O,pb as L,J as S,Z as P,pc as T,C as m,nj as g,cO as C,cL as v}from"./index-4a6abd83.js";import{t as d,r as F}from"./fetchService-592c7919.js";import{a as J}from"./lazyLayerLoader-8fd6ddde.js";const N={FeatureLayer:!0,SceneLayer:!0};async function q(r){var t;const l=(t=r.properties)==null?void 0:t.customParameters,e=await U(r.url,l),a={...r.properties,url:r.url};if(!e.sublayerIds)return e.layerOrTableId!=null&&(a.layerId=e.layerOrTableId,a.sourceJSON=e.sourceJSON),new e.Constructor(a);const s=new(await O(()=>import("./GroupLayer-48c6bb0d.js"),["./GroupLayer-48c6bb0d.js","./index-4a6abd83.js","./index-ae27767d.css","./lazyLayerLoader-8fd6ddde.js"],import.meta.url)).default({title:e.parsedUrl.title});return _(s,e,a),s}function w(r,l){return r?r.find(e=>e.id===l):null}function _(r,l,e){function a(s,t){const u={...e,layerId:s,sublayerTitleMode:"service-name"};return m(t)&&(u.sourceJSON=t),new l.Constructor(u)}l.sublayerIds.forEach(s=>{const t=a(s,w(l.sublayerInfos,s));r.add(t)}),l.tableIds.forEach(s=>{const t=a(s,w(l.tableInfos,s));r.tables.add(t)})}async function U(r,l){var p,f,I,b;let e=L(r);if(S(e)&&(e=await V(r,l)),S(e))throw new P("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:r});const{serverType:a,sublayer:s}=e;let t;const u={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(a){case"MapServer":s!=null?t="FeatureLayer":t=await M(r,l)?"TileLayer":"MapImageLayer";break;case"ImageServer":{const n=await d(r,{customParameters:l}),{tileInfo:c,cacheType:y}=n;t=c?((p=c==null?void 0:c.format)==null?void 0:p.toUpperCase())!=="LERC"||y&&y.toLowerCase()!=="elevation"?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const n=await d(e.url.path,{customParameters:l});if(t="SceneLayer",n){const c=n==null?void 0:n.layers;if((n==null?void 0:n.layerType)==="Voxel")t="VoxelLayer";else if(c!=null&&c.length){const y=(f=c[0])==null?void 0:f.layerType;y!=null&&v[y]!=null&&(t=v[y])}}break}default:t=u[a]}const o=a==="FeatureServer",i={parsedUrl:e,Constructor:null,layerOrTableId:o?s:void 0,sublayerIds:null,tableIds:null};if(N[t]&&s==null){const n=await x(r,a,l);o&&(i.sublayerInfos=n.layerInfos,i.tableInfos=n.tableInfos),n.layerIds.length+n.tableIds.length!==1?(i.sublayerIds=n.layerIds,i.tableIds=n.tableIds):o&&(i.layerOrTableId=n.layerIds[0]??n.tableIds[0],i.sourceJSON=((I=n.layerInfos)==null?void 0:I[0])??((b=n.tableInfos)==null?void 0:b[0]))}return i.Constructor=await E(t),i}async function V(r,l){var o;const e=await d(r,{customParameters:l});let a=null,s=null;const t=e.type;if(t==="Feature Layer"||t==="Table"?(a="FeatureServer",s=e.id??null):t==="indexedVector"?a="VectorTileServer":e.hasOwnProperty("mapName")?a="MapServer":e.hasOwnProperty("bandCount")&&e.hasOwnProperty("pixelSizeX")?a="ImageServer":e.hasOwnProperty("maxRecordCount")&&e.hasOwnProperty("allowGeometryUpdates")?a="FeatureServer":e.hasOwnProperty("streamUrls")?a="StreamServer":h(e)?(a="SceneServer",s=e.id):e.hasOwnProperty("layers")&&h((o=e.layers)==null?void 0:o[0])&&(a="SceneServer"),!a)return null;const u=s!=null?T(r):null;return{title:m(u)&&e.name||g(r),serverType:a,sublayer:s,url:{path:m(u)?u.serviceUrl:C(r).path}}}function h(r){return r!=null&&r.hasOwnProperty("store")&&r.hasOwnProperty("id")&&typeof r.id=="number"}async function x(r,l,e){let a,s=!1;if(l==="FeatureServer"){const o=await F(r,{customParameters:e});s=!!o.layersJSON,a=o.layersJSON||o.serviceJSON}else a=await d(r,{customParameters:e});const t=a==null?void 0:a.layers,u=a==null?void 0:a.tables;return{layerIds:(t==null?void 0:t.map(o=>o.id).reverse())||[],tableIds:(u==null?void 0:u.map(o=>o.id).reverse())||[],layerInfos:s?t:[],tableInfos:s?u:[]}}async function E(r){return(0,J[r])()}async function M(r,l){return(await d(r,{customParameters:l})).tileInfo}export{q as fromUrl};