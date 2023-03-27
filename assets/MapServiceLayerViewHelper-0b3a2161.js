import{C as O,aD as Z,aE as C,aF as W,aG as K,e as l,y,aH as X,aI as Y,aJ as H,aK as ee,aL as te,d as I,aM as Q,aN as re,P as G,a3 as se,aO as ie,aP as ae,aQ as ne,aR as oe,aS as le,aT as ue,U as pe,g as ye,aB as ce,aU as he,Z as T,j as fe,aV as M,_ as de,aW as me,aX as ge,J as be,D as we,aY as ve,E as xe,aZ as $e}from"./index-22b5b8b0.js";import{n as V}from"./floorFilterUtils-080a7cd2.js";import{i as Se}from"./sublayerUtils-71682c44.js";import{d as Ee,s as Fe}from"./popupUtils-dacd0e4b.js";function R(t,e){return e?"xoffset"in e&&e.xoffset?Math.max(t,Math.abs(e.xoffset)):"yoffset"in e&&e.yoffset?Math.max(t,Math.abs(e.yoffset||0)):t:t}function Oe(t){let e=0,s=0;for(let i=0;i<t.length;i++){const r=t[i].size;typeof r=="number"&&(e+=r,s++)}return e/s}function L(t,e){return typeof t=="number"?t:t&&t.stops&&t.stops.length?Oe(t.stops):e}function je(t,e){if(!e)return t;const s=e.filter(n=>n.type==="size").map(n=>{const{maxSize:o,minSize:c}=n;return(L(o,t)+L(c,t))/2});let i=0;const r=s.length;if(r===0)return t;for(let n=0;n<r;n++)i+=s[n];const a=Math.floor(i/r);return Math.max(a,t)}function U(t){var r;const e=t&&t.renderer,s=(t&&t.event&&t.event.pointerType)==="touch"?9:6;if(!e)return s;const i="visualVariables"in e?je(s,e.visualVariables):s;if(e.type==="simple")return R(i,e.symbol);if(e.type==="unique-value"){let a=i;return(r=e.uniqueValueInfos)==null||r.forEach(n=>{a=R(a,n.symbol)}),a}if(e.type==="class-breaks"){let a=i;return e.classBreakInfos.forEach(n=>{a=R(a,n.symbol)}),a}return e.type==="dot-density"||e.type,i}const J=t=>t.spatialReference.wkid||JSON.stringify(t.spatialReference);function Ne(t,e){const{dpi:s,gdbVersion:i,geometry:r,geometryPrecision:a,height:n,layerOption:o,mapExtent:c,maxAllowableOffset:u,returnFieldName:p,returnGeometry:f,returnUnformattedValues:h,returnZ:S,spatialReference:x,timeExtent:w,tolerance:m,width:E}=t.toJSON(),{dynamicLayers:g,layerDefs:b,layerIds:$}=Re(t),A=e&&O(e.geometry)?e.geometry:null,v={geometryPrecision:a,maxAllowableOffset:u,returnFieldName:p,returnGeometry:f,returnUnformattedValues:h,returnZ:S,tolerance:m},j=A&&A.toJSON()||r;if(v.imageDisplay=`${E},${n},${s}`,i&&(v.gdbVersion=i),j&&(delete j.spatialReference,v.geometry=JSON.stringify(j),v.geometryType=Z(j)),x?v.sr=x.wkid||JSON.stringify(x):j&&j.spatialReference?v.sr=J(j):c&&c.spatialReference&&(v.sr=J(c)),v.time=w?[w.start,w.end].join(","):null,c){const{xmin:k,ymin:q,xmax:B,ymax:D}=c;v.mapExtent=`${k},${q},${B},${D}`}return b&&(v.layerDefs=b),g&&!b&&(v.dynamicLayers=g),v.layers=o==="popup"?"visible":o,$&&!g&&(v.layers+=`:${$.join(",")}`),v}function Re(t){var x,w;const{mapExtent:e,floors:s,width:i,sublayers:r,layerIds:a,layerOption:n,gdbVersion:o}=t,c=(w=(x=r==null?void 0:r.find(m=>m.layer!=null))==null?void 0:x.layer)==null?void 0:w.serviceSublayers,u=n==="popup",p={},f=C({extent:e,width:i,spatialReference:e==null?void 0:e.spatialReference}),h=[],S=m=>{const E=f===0,g=m.minScale===0||f<=m.minScale,b=m.maxScale===0||f>=m.maxScale;if(m.visible&&(E||g&&b))if(m.sublayers)m.sublayers.forEach(S);else{if((a==null?void 0:a.includes(m.id))===!1||u&&(!m.popupTemplate||!m.popupEnabled))return;h.unshift(m)}};if(r==null||r.forEach(S),r&&!h.length)p.layerIds=[];else{const m=Se(h,c,o),E=h.map(g=>{const b=V(s,g);return g.toExportImageJSON(b)});if(m)p.dynamicLayers=JSON.stringify(E);else{if(r){let b=h.map(({id:$})=>$);a&&(b=b.filter($=>a.includes($))),p.layerIds=b}else a!=null&&a.length&&(p.layerIds=a);const g=Pe(s,h);if(O(g)&&g.length){const b={};for(const $ of g)$.definitionExpression&&(b[$.id]=$.definitionExpression);Object.keys(b).length&&(p.layerDefs=JSON.stringify(b))}}}return p}function Pe(t,e){const s=!!(t!=null&&t.length),i=e.filter(r=>r.definitionExpression!=null||s&&r.floorInfo!=null);return i.length?i.map(r=>{const a=V(t,r),n=W(a,r.definitionExpression);return{id:r.id,definitionExpression:K(n,void 0)}}):null}var _;let d=_=class extends Q{static from(t){return re(_,t)}constructor(t){super(t),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}};l([y({type:Number,json:{write:!0}})],d.prototype,"dpi",void 0),l([y()],d.prototype,"floors",void 0),l([y({type:String,json:{write:!0}})],d.prototype,"gdbVersion",void 0),l([y({types:X,json:{read:Y,write:!0}})],d.prototype,"geometry",void 0),l([y({type:Number,json:{write:!0}})],d.prototype,"geometryPrecision",void 0),l([y({type:Number,json:{write:!0}})],d.prototype,"height",void 0),l([y({type:[Number],json:{write:!0}})],d.prototype,"layerIds",void 0),l([y({type:["top","visible","all","popup"],json:{write:!0}})],d.prototype,"layerOption",void 0),l([y({type:H,json:{write:!0}})],d.prototype,"mapExtent",void 0),l([y({type:Number,json:{write:!0}})],d.prototype,"maxAllowableOffset",void 0),l([y({type:Boolean,json:{write:!0}})],d.prototype,"returnFieldName",void 0),l([y({type:Boolean,json:{write:!0}})],d.prototype,"returnGeometry",void 0),l([y({type:Boolean,json:{write:!0}})],d.prototype,"returnM",void 0),l([y({type:Boolean,json:{write:!0}})],d.prototype,"returnUnformattedValues",void 0),l([y({type:Boolean,json:{write:!0}})],d.prototype,"returnZ",void 0),l([y({type:ee,json:{write:!0}})],d.prototype,"spatialReference",void 0),l([y()],d.prototype,"sublayers",void 0),l([y({type:te,json:{write:!0}})],d.prototype,"timeExtent",void 0),l([y({type:Number,json:{write:!0}})],d.prototype,"tolerance",void 0),l([y({type:Number,json:{write:!0}})],d.prototype,"width",void 0),d=_=l([I("esri.rest.support.IdentifyParameters")],d);const z=d;let F=class extends Q{constructor(e){super(e),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(e,s){return G.fromJSON({attributes:{...s.attributes},geometry:{...s.geometry}})}writeFeature(e,s){if(!e)return;const{attributes:i,geometry:r}=e;i&&(s.attributes={...i}),O(r)&&(s.geometry=r.toJSON(),s.geometryType=ae.toJSON(r.type))}};l([y({type:String,json:{write:!0}})],F.prototype,"displayFieldName",void 0),l([y({type:G})],F.prototype,"feature",void 0),l([se("feature",["attributes","geometry"])],F.prototype,"readFeature",null),l([ie("feature")],F.prototype,"writeFeature",null),l([y({type:Number,json:{write:!0}})],F.prototype,"layerId",void 0),l([y({type:String,json:{write:!0}})],F.prototype,"layerName",void 0),F=l([I("esri.rest.support.IdentifyResult")],F);const _e=F;async function Ie(t,e,s){const i=(e=Ve(e)).geometry?[e.geometry]:[],r=ne(t);return r.path+="/identify",oe(i).then(a=>{const n=Ne(e,{geometry:a&&a[0]}),o=le({...r.query,f:"json",...n}),c=ue(o,s);return pe(r.path,c).then(Ge).then(u=>Ae(u,e.sublayers))})}function Ge(t){const e=t.data;return e.results=e.results||[],e.exceededTransferLimit=!!e.exceededTransferLimit,e.results=e.results.map(s=>_e.fromJSON(s)),e}function Ve(t){return t=z.from(t)}function Ae(t,e){if(!(e!=null&&e.length))return t;const s=new Map;function i(r){s.set(r.id,r),r.sublayers&&r.sublayers.forEach(i)}e.forEach(i);for(const r of t.results)r.feature.sourceLayer=s.get(r.layerId);return t}let P=null;function qe(t,e){return e.type==="tile"||e.type==="map-image"}let N=class extends ye{constructor(t){super(t),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=ce(async e=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch(()=>{}))})}initialize(){const t=e=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch(()=>{})),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([he(()=>this.highlightGraphics,"change",e=>t(e.added),{onListenerAdd:e=>t(e)})])}async fetchPopupFeatures(t,e){var n,o;const{layerView:{layer:s,view:{scale:i}}}=this;if(!t)throw new T("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:s});const r=Te(s.sublayers,i,e);if(!r.length)return[];const a=await Le(s,r);if(!((((o=(n=s.capabilities)==null?void 0:n.operations)==null?void 0:o.supportsIdentify)??!0)&&s.version>=10.5)&&!a)throw new T("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:s});return a?this._fetchPopupFeaturesUsingQueries(t,r,e):this._fetchPopupFeaturesUsingIdentify(t,r,e)}clearHighlights(){var t;(t=this.highlightGraphics)==null||t.removeAll()}highlight(t){const e=this.highlightGraphics;if(!e)return{remove(){}};let s=null;if(t instanceof G?s=[t]:fe.isCollection(t)&&t.length>0?s=t.toArray():Array.isArray(t)&&t.length>0&&(s=t),s=s==null?void 0:s.filter(O),!s||!s.length)return{remove:()=>{}};for(const i of s){const r=i.sourceLayer;r!=null&&"geometryType"in r&&r.geometryType==="point"&&(i.visible=!1)}return e.addMany(s),{remove:()=>{e.removeMany(s??[])}}}async _updateHighlightedFeaturesSymbols(t){const{layerView:{view:e},highlightGraphics:s,highlightGraphicUpdated:i}=this;if(s&&i)for(const r of t){const a=r.sourceLayer&&"renderer"in r.sourceLayer&&r.sourceLayer.renderer;r.sourceLayer&&"geometryType"in r.sourceLayer&&r.sourceLayer.geometryType==="point"&&a&&"getSymbolAsync"in a&&a.getSymbolAsync(r).then(async n=>{var u;n||(n=new M);let o=null;const c="visualVariables"in a?(u=a.visualVariables)==null?void 0:u.find(p=>p.type==="size"):void 0;c&&(P||(P=(await de(()=>import("./index-22b5b8b0.js").then(p=>p.uq),["./index-22b5b8b0.js","./index-3d6e8798.css"],import.meta.url)).getSize),o=P(c,r,{view:e.type,scale:e.scale,shape:n.type==="simple-marker"?n.style:null})),o||(o="width"in n&&"height"in n&&n.width!=null&&n.height!=null?Math.max(n.width,n.height):"size"in n?n.size:16),s.includes(r)&&(r.symbol=new M({style:"square",size:o,xoffset:"xoffset"in n?n.xoffset:0,yoffset:"yoffset"in n?n.yoffset:0}),i(r,"symbol"),r.visible=!0)})}}async _updateHighlightedFeaturesGeometries(t){const{layerView:{layer:e,view:s},highlightGraphics:i,highlightGraphicUpdated:r}=this;if(this._highlightGeometriesResolution=t,!r||!(i!=null&&i.length)||!e.capabilities.operations.supportsQuery)return;const a=this._getTargetResolution(t),n=new Map;for(const u of i)if(!this._featuresResolutions.has(u)||this._featuresResolutions.get(u)>a){const p=u.sourceLayer;me(n,p,()=>new Map).set(u.getObjectId(),u)}const o=Array.from(n,([u,p])=>{const f=u.createQuery();return f.objectIds=[...p.keys()],f.outFields=[u.objectIdField],f.returnGeometry=!0,f.maxAllowableOffset=a,f.outSpatialReference=s.spatialReference,u.queryFeatures(f)}),c=await Promise.all(o);if(!this.destroyed)for(const{features:u}of c)for(const p of u){const f=p.sourceLayer,h=n.get(f).get(p.getObjectId());h&&i.includes(h)&&(h.geometry=p.geometry,r(h,"geometry"),this._featuresResolutions.set(h,a))}}_getTargetResolution(t){const e=t*ge(this.layerView.view.spatialReference),s=e/16;return s<=10?0:t/e*s}async _fetchPopupFeaturesUsingIdentify(t,e,s){const i=await this._createIdentifyParameters(t,e,s);if(be(i))return[];const{results:r}=await Ie(this.layerView.layer.parsedUrl,i);return r.map(a=>a.feature)}async _createIdentifyParameters(t,e,s){const{floors:i,layer:r,timeExtent:a,view:{spatialReference:n,scale:o}}=this.layerView,c=O(s)?s.event:null;if(!e.length)return null;await Promise.all(e.map(({sublayer:x})=>x.load().catch(()=>{})));const u=Math.min(we("mapservice-popup-identify-max-tolerance"),r.allSublayers.reduce((x,w)=>w.renderer?U({renderer:w.renderer,event:c}):x,2)),p=this.createFetchPopupFeaturesQueryGeometry(t,u),f=ve(o,n),h=Math.round(p.width/f),S=new H({xmin:p.center.x-f*h,ymin:p.center.y-f*h,xmax:p.center.x+f*h,ymax:p.center.y+f*h,spatialReference:p.spatialReference});return new z({floors:i,gdbVersion:"gdbVersion"in r?r.gdbVersion:void 0,geometry:t,height:h,layerOption:"popup",mapExtent:S,returnGeometry:!0,spatialReference:n,sublayers:r.sublayers,timeExtent:a,tolerance:u,width:h})}async _fetchPopupFeaturesUsingQueries(t,e,s){const{layerView:{floors:i,timeExtent:r}}=this,a=O(s)?s.event:null,n=e.map(async({sublayer:o,popupTemplate:c})=>{if(await o.load().catch(()=>{}),o.capabilities&&!o.capabilities.operations.supportsQuery)return[];const u=o.createQuery(),p=U({renderer:o.renderer,event:a}),f=this.createFetchPopupFeaturesQueryGeometry(t,p);if(u.geometry=f,u.outFields=await Ee(o,c),u.timeExtent=r,i){const E=i.clone(),g=V(E,o);O(g)&&(u.where=u.where?`(${u.where}) AND (${g})`:g)}const h=this._getTargetResolution(f.width/p),S=await Me(c),x=o.geometryType==="point"||S&&S.arcadeUtils.hasGeometryOperations(c);x||(u.maxAllowableOffset=h);let{features:w}=await o.queryFeatures(u);const m=x?0:h;w=await Ue(o,w);for(const E of w)this._featuresResolutions.set(E,m);return w});return(await xe(n)).reverse().reduce((o,c)=>c.value?[...o,...c.value]:o,[]).filter(o=>o!=null)}};function Te(t,e,s){const i=[],r=a=>{const n=a.minScale===0||e<=a.minScale,o=a.maxScale===0||e>=a.maxScale;if(a.visible&&n&&o){if(a.sublayers)a.sublayers.forEach(r);else if(a.popupEnabled){const c=Fe(a,{...s,defaultPopupTemplateEnabled:!1});O(c)&&i.unshift({sublayer:a,popupTemplate:c})}}};return((t==null?void 0:t.toArray())??[]).reverse().map(r),i}function Me(t){var e;return(e=t.expressionInfos)!=null&&e.length||Array.isArray(t.content)&&t.content.some(s=>s.type==="expression")?$e():Promise.resolve()}async function Le(t,e){var s,i;if((i=(s=t.capabilities)==null?void 0:s.operations)!=null&&i.supportsQuery)return!0;try{return await Promise.any(e.map(({sublayer:r})=>r.load().then(()=>r.capabilities.operations.supportsQuery)))}catch{return!1}}async function Ue(t,e){const s=t.renderer;return s&&"defaultSymbol"in s&&!s.defaultSymbol&&(e=s.valueExpression?await Promise.all(e.map(i=>s.getSymbolAsync(i).then(r=>r?i:null))).then(i=>i.filter(r=>r!=null)):e.filter(i=>s.getSymbol(i)!=null)),e}l([y({constructOnly:!0})],N.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),l([y({constructOnly:!0})],N.prototype,"layerView",void 0),l([y({constructOnly:!0})],N.prototype,"highlightGraphics",void 0),l([y({constructOnly:!0})],N.prototype,"highlightGraphicUpdated",void 0),l([y({constructOnly:!0})],N.prototype,"updatingHandles",void 0),N=l([I("esri.views.layers.support.MapService")],N);export{qe as P,N as S};
