import{k as he,e as u,y as d,aj as ge,d as Z,bg as P,g as U,dH as fe,f as me,C as h,_ as Ee,J as m,g4 as we,f_ as J,g5 as _e,ew as X,aK as z,g6 as Se,g7 as H,g8 as be,g9 as Fe,d_ as ve,e3 as Ie,ga as Re,gb as xe,gc as $e,gd as Oe,e4 as je,fD as G,dI as N,cG as T,bB as K,ah as Qe,a as Ce,b as Y,aJ as Me,Z as ee,ge as ke,fO as De,de as W,cA as Ge,aa as Ne,ep as Te,dm as Ae,gf as Je}from"./index-3fca1522.js";import{a as M,n as te,u as re}from"./DefinitionExpressionSceneLayerView-3ff629e1.js";import{f as Pe}from"./WhereClause-544968d0.js";import{Y as Le,X as Ve,m as ne}from"./I3SUtil-eb079328.js";import{e as Be}from"./QueryEngine-784c28ef.js";import{e as Ke}from"./centroid-57d0b643.js";import{L as D}from"./I3SMeshView3D-56e5b5b3.js";const oe="esri.views.3d.layers.i3s.I3SMeshViewFilter",Q=he.getLogger(oe);let f=class extends U{constructor(t){super(t),this._projectionEngineLoaded=!1}initialize(){fe(()=>{var t;return((t=me(this.viewFilter))==null?void 0:t.geometry)||h(this.layerFilter)}).then(()=>this.loadAsyncModule(Ee(()=>import("./geometryEngine-d22e3270.js"),["./geometryEngine-d22e3270.js","./geometryEngineBase-e1a33b0a.js","./hydrated-739aa8cc.js","./index-3fca1522.js","./index-3d973dfe.css"],import.meta.url).then(t=>{this.destroyed||(this._geometryEngine=t)})))}get sortedObjectIds(){if(m(this.viewFilter)||m(this.viewFilter.objectIds))return null;const t=we(this.viewFilter.objectIds);return t.sort(),t}get parsedWhereClause(){const t=h(this.viewFilter)?this.viewFilter.where:null;if(m(t)||!t)return null;try{return Pe.create(t,this.layerFieldsIndex)}catch(e){Q.error(`Failed to parse filter where clause: ${e}`)}return null}addFilters(t,e,r,s){const n=this.sortedObjectIds;h(n)&&t.push(o=>Le(n,!0,o)),this.addSqlFilter(t,this.parsedWhereClause);const i=M(this._layerMaskGeometries),a=this._geometryEngine;if(h(i)&&h(this.layerFilter)&&h(a)){const o=this.layerFilter.spatialRelationship;t.push((l,g)=>ie(a,l,g,s,e,r,i,o))}const c=M(this._viewMaskGeometries);if(h(c)&&h(this.viewFilter)&&h(a)){const o=this.viewFilter.spatialRelationship;t.push((l,g)=>ie(a,l,g,s,e,r,c,o))}}isMBSGeometryVisible(t,e,r){const s=M(this._layerMaskGeometries),n=this._geometryEngine;if(h(s)&&h(this.layerFilter)&&h(n)){const a=this.layerFilter.spatialRelationship,c=s[0].spatialReference||e;return J(t,r,k,c)?se(n,k,s,c,a):(Q.warnOnce("SceneLayer.mask geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}const i=M(this._viewMaskGeometries);if(h(i)&&h(this.viewFilter)&&h(n)){const a=this.viewFilter.spatialRelationship,c=i[0].spatialReference||e;return J(t,r,k,c)?se(n,k,i,c,a):(Q.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}return!0}get parsedGeometry(){const t=M(this._viewMaskGeometries),e=M(this._layerMaskGeometries);return m(t)||m(e)?t||e:e.concat(t)}get _layerMaskGeometries(){const t=this.layerFilter;return m(t)?null:m(this._geometryEngine)?te:t.spatialRelationship==="disjoint"?t.geometries.map(e=>({type:"polygon",rings:e.rings,spatialReference:e.spatialReference,cache:{}})):[t.geometries.reduce((e,r)=>(e.rings=[...e.rings,...r.rings],e),{type:"polygon",rings:[],spatialReference:t.geometries[0].spatialReference,cache:{}})]}get _viewMaskGeometries(){if(m(this.viewFilter))return null;const{geometry:t}=this.viewFilter;if(m(t))return null;if(m(this.viewFilter)||m(this._geometryEngine))return te;const{distance:e,units:r}=this.viewFilter,s=this.viewFilter.spatialRelationship,n=t.type==="mesh"?t.extent:t;if(m(e)||e===0)return A(this._geometryEngine,n,s);const i=r||_e(n.spatialReference);if(n.spatialReference.isWGS84){const o=this._geometryEngine.geodesicBuffer(n,e,i);return A(this._geometryEngine,o,s)}const a=X(n,z.WGS84);if(h(a)){const o=X(this._geometryEngine.geodesicBuffer(a,e,i),n.spatialReference);return A(this._geometryEngine,o,s)}if(!this._projectionEngineLoaded&&(this.loadAsyncModule(Se().then(()=>this._projectionEngineLoaded=!0)),!this._projectionEngineLoaded))return null;let c=null;try{c=H(n,z.WGS84)}catch{}if(c)try{c=H(this._geometryEngine.geodesicBuffer(c,e,i),n.spatialReference)}catch{c=null}return c||Q.error(`Filter by geodesic buffer (distance) unsupported, failed to project input geometry (${n.spatialReference.wkid}) to WGS84.`),A(this._geometryEngine,c,s)}get updating(){return re(this._layerMaskGeometries)||re(this._viewMaskGeometries)}static checkSupport(t){return!m(t)&&(t.timeExtent?(Q.warn("Filters with a timeExtent are not supported for mesh scene layers"),!1):!!We(t.spatialRelationship)||(Q.warn(`Filters with spatialRelationship other than ${ce.join(", ")} are not supported for mesh scene layers`),!1))}};u([d()],f.prototype,"layerFilter",void 0),u([d({type:ge})],f.prototype,"viewFilter",void 0),u([d()],f.prototype,"layerFieldsIndex",void 0),u([d()],f.prototype,"loadAsyncModule",void 0),u([d()],f.prototype,"addSqlFilter",void 0),u([d({readOnly:!0})],f.prototype,"sortedObjectIds",null),u([d({readOnly:!0})],f.prototype,"parsedWhereClause",null),u([d({readOnly:!0})],f.prototype,"parsedGeometry",null),u([d({readOnly:!0})],f.prototype,"_layerMaskGeometries",null),u([d({readOnly:!0})],f.prototype,"_viewMaskGeometries",null),u([d()],f.prototype,"updating",null),u([d()],f.prototype,"_projectionEngineLoaded",void 0),u([d()],f.prototype,"_geometryEngine",void 0),f=u([Z(oe)],f);const ce=(t=>t)(["contains","intersects","disjoint"]);function We(t){return t!=null&&ce.includes(t)}var y;function A(t,e,r){if(m(e))return null;if(r==="disjoint"&&e.type==="polygon"){const s=e.rings.length,n=e.spatialReference,i=new Array(s);for(let o=0;o<s;++o){const l=be(1/0,1/0,-1/0,-1/0);Fe(l,e.rings[o]),i[o]={type:"polygon",rings:[e.rings[o]],spatialReference:n,cache:{},aabr:l}}i.sort((o,l)=>o.aabr[0]-l.aabr[0]);const a=new Set,c=new je;for(let o=0;o<i.length;++o){const l=i[o],g=l.aabr[0];a.forEach(p=>{if(g>=p.aabr[2])return void a.delete(p);if(l.aabr[1]>p.aabr[3]||l.aabr[3]<p.aabr[1]||!t.intersects(l,p))return;l.rings=l.rings.concat(p.rings),ve(l.aabr,p.aabr,l.aabr),l.cache={},a.delete(p);const w=Ie(i,p,i.length,c);i.splice(w,1)}),a.add(l)}for(const o of i)o.aabr=void 0;return i}return[e]}function se(t,e,r,s,n){const i=le(t,e,s);return r.every(a=>ue(t,a,i,n)!==y.DISCARD)}function ie(t,e,r,s,n,i,a,c){const o=a[0].spatialReference||n.spatialReference;if(!J(r.node.mbs,i,k,o))return void Q.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter");const l=le(t,k,o),g=qe(c,n,o,s,r.objectHandle);for(const p of a){if(e.length===0)return;switch(ue(t,p,l,c)){case y.DISCARD:return void(e.length=0);case y.KEEP:continue}Ve(e,r.featureIds,w=>Ze(t,p,w,g))}}(function(t){t[t.KEEP=0]="KEEP",t[t.DISCARD=1]="DISCARD",t[t.TEST=2]="TEST"})(y||(y={}));const k=[0,0,0,0];function qe(t,e,r,s,n){const i=e.renderSpatialReference,a=new Map,c={type:"polygon",rings:[[[0,0,0],[0,0,0],[0,0,0],[0,0,0]]],spatialReference:r};c.rings[0][3]=c.rings[0][0];const o={indices:null,data:null,stride:0,startIndex:0,endIndex:0};let l,g;switch(t){case"intersects":l=(p,w,v)=>p.intersects(w,v)?y.KEEP:y.TEST,g=q;break;case"contains":l=(p,w,v)=>p.contains(w,v)?y.TEST:y.DISCARD,g=q;break;default:l=(p,w,v)=>p.disjoint(w,v)?y.TEST:y.DISCARD,g=de}return{collection:s,object:n,type:t,maskSR:r,renderSR:i,aabbCache:a,triangle:c,positions:o,triangleTest:l,geometryTest:g}}function le(t,e,r){const s={type:"point",x:e[0],y:e[1],hasZ:!1,hasM:!1,spatialReference:r},n=!Re(r)&&!xe(r),i=Number.isNaN(e[3])?0:$e(e[3],0,2*Oe.radius),a=n?t.buffer(s,i,1):t.geodesicBuffer(s,i,1);return a.type="polygon",a}function ue(t,e,r,s){switch(s){case"intersects":case"contains":return q(t,e,r);case"disjoint":return de(t,e,r)}}function q(t,e,r){return t.intersects(e,r)?t.contains(e,r)?y.KEEP:y.TEST:y.DISCARD}function de(t,e,r){return t.intersects(e,r)?t.contains(e,r)?y.DISCARD:y.TEST:y.KEEP}function Ze(t,e,r,s){const{collection:n,object:i,renderSR:a,maskSR:c,geometryTest:o,aabbCache:l}=s;let g=l.get(r);if(!g){const I=n.getObjectTransform(i);n.getComponentAabb(i,r,F);const _=[[F[0],F[1],0],[F[0],F[4],0],[F[3],F[4],0],[F[3],F[1],0]];for(let E=0;E<4;++E)G(_[E],_[E],I.rotationScale),N(_[E],_[E],I.position),T(_[E],a,_[E],c);g={type:"polygon",rings:[_],spatialReference:c,cache:{}},g.rings[0][4]=g.rings[0][0],l.set(r,g)}switch(o(t,e,g)){case y.DISCARD:return!1;case y.KEEP:return!0}const{triangle:p,triangleTest:w,positions:v}=s,x=p.rings[0][0],$=p.rings[0][1],O=p.rings[0][2],C=n.getObjectTransform(i);n.getComponentPositions(i,r,v);const{indices:L,data:b,stride:V,startIndex:pe,endIndex:ye}=v;for(let I=pe;I<ye;I+=3){const _=V*L[I+0],E=V*L[I+1],B=V*L[I+2];switch(K(x,b[_+0],b[_+1],b[_+2]),K($,b[E+0],b[E+1],b[E+2]),K(O,b[B+0],b[B+1],b[B+2]),G(x,x,C.rotationScale),G($,$,C.rotationScale),G(O,O,C.rotationScale),N(x,x,C.position),N($,$,C.position),N(O,O,C.position),T(x,a,x,c),T($,a,$,c),T(O,a,O,c),w(t,e,p)){case y.DISCARD:return!1;case y.KEEP:return!0}}return s.type!=="intersects"}const F=P(),Ue=Be;let R=class extends U{get spatialReference(){return this.layerView.view.spatialReference}get layer(){return this.layerView.i3slayer}get defaultQueryJSON(){return new Qe({outSpatialReference:this.spatialReference}).toJSON()}get _dataQueryEngine(){return this._ensureDataQueryEngine()}constructor(e){super(e),this._handles=new Ce}initialize(){this._handles.add(this.layerView.on("visible-geometry-changed",()=>this.spatialIndex.events.emit("changed")))}destroy(){this._dataQueryEngineInstance=Y(this._dataQueryEngineInstance),this._handles=Y(this._handles),this._set("layerView",null)}async executeQueryForCount(e,r){return this._dataQueryEngine.executeQueryForCount(this._ensureQueryJSON(e),r)}async executeQueryForExtent(e,r){const{count:s,extent:n}=await this._dataQueryEngine.executeQueryForExtent(this._ensureQueryJSON(e),r);return{count:s,extent:Me.fromJSON(n)}}async executeQueryForIds(e,r){return this._dataQueryEngine.executeQueryForIds(this._ensureQueryJSON(e),r)}async executeQuery(e,r){const s=this._ensureQueryJSON(e);if(s.returnGeometry)throw new ee("feature-store:unsupported-query","returnGeometry is not yet supported for mesh scene layer queries");if(s.returnCentroid)throw new ee("feature-store:unsupported-query","returnCentroid is not yet supported for mesh scene layer queries");const n=await this._dataQueryEngine.executeQuery(s,r),i=ke.fromJSON(n);return i.features.forEach(a=>{a.geometry=null}),i}_ensureQueryJSON(e){return m(e)?this.defaultQueryJSON:e.toJSON()}_ensureDataQueryEngine(){var o;if(this._dataQueryEngineInstance)return this._dataQueryEngineInstance;const e=this.layer.objectIdField||De,r="esriGeometryPolygon",s=((o=this.layer.fields)==null?void 0:o.map(l=>l.toJSON()))??[],n=this.layerView.view.resourceController.scheduler,i=this.spatialReference.toJSON(),a=this.priority,c=this.spatialIndex;return this._dataQueryEngineInstance=new Ue({hasZ:!0,hasM:!1,geometryType:r,fields:s,timeInfo:null,spatialReference:i,objectIdField:e,featureStore:c,scheduler:n,priority:a}),this._dataQueryEngineInstance}};u([d({constructOnly:!0})],R.prototype,"layerView",void 0),u([d({constructOnly:!0})],R.prototype,"priority",void 0),u([d({constructOnly:!0})],R.prototype,"spatialIndex",void 0),u([d()],R.prototype,"spatialReference",null),u([d()],R.prototype,"layer",null),u([d()],R.prototype,"defaultQueryJSON",null),R=u([Z("esri.views.3d.layers.i3s.I3SQueryEngine")],R);class ot{constructor(e){this._objectIdField=e.objectIdField,this._getFeatureExtent=e.getFeatureExtent}getObjectId(e){return e.id}getAttributes(e){const{meta:r,index:s}=e,n={};this._objectIdField&&(n[this._objectIdField]=e.id);const i=h(r.attributeInfo)&&r.attributeInfo.attributeData;if(h(i))for(const a of Object.keys(i))n[a]=ne(i[a],s);return n}getAttribute(e,r){if(r===this._objectIdField)return e.id;const{meta:s,index:n}=e,i=h(s.attributeInfo)&&s.attributeInfo.attributeData;return h(i)?ne(i[r],n):null}getGeometry(e){if(e.geometry)return e.geometry;const[r,s,n,i,a]=this._getFeatureExtent(e,ae);return new W([5],[r,s,n,i,s,n,i,a,n,r,a,n,r,s,n])}getCentroid(e,r){if(e.geometry)return Ke(new W,e.geometry,r.hasZ,r.hasM);const[s,n,i,a,c,o]=this._getFeatureExtent(e,ae);return new W([0],[(s+a)/2,(n+c)/2,(i+o)/2])}cloneWithGeometry(e,r){const{id:s,index:n,meta:i}=e;return{id:s,index:n,meta:i,geometry:r}}}const ae=P(),Xe=P();let j=class extends U{constructor(t){super(t),this.events=new Ne}forEach(t){this.forAllFeatures(e=>(t(e),D.CONTINUE))}forEachBounds(t,e){const r=this.getFeatureExtent;for(const s of t)e(r(s,Xe))}forEachInBounds(t,e){this.forAllFeatures(r=>{const s=this.getFeatureExtent(r,ze);return Te(t,Ae(s,He))&&e(r),D.CONTINUE},r=>{if(J(r.node.mbs,this.sourceSpatialReference,S,this.viewSpatialReference),S[0]>=t[0]&&S[2]<=t[2]&&S[1]>=t[1]&&S[3]<=t[3])return D.CONTINUE;const s=Math.max(t[0],Math.min(S[0],t[2])),n=Math.max(t[1],Math.min(S[1],t[3])),i=S[0]-s,a=S[1]-n;return i*i+a*a<=S[3]*S[3]?D.CONTINUE:D.SKIP})}};u([d({constructOnly:!0})],j.prototype,"featureAdapter",void 0),u([d({constructOnly:!0})],j.prototype,"forAllFeatures",void 0),u([d({constructOnly:!0})],j.prototype,"getFeatureExtent",void 0),u([d({constructOnly:!0})],j.prototype,"sourceSpatialReference",void 0),u([d({constructOnly:!0})],j.prototype,"viewSpatialReference",void 0),j=u([Z("esri.views.3d.layers.i3s.I3SQueryFeatureStore")],j);const S=Je(),ze=P(),He=Ge();export{f as P,R as h,j as l,ot as n};
