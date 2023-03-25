import{e as t,y as s,d as n,aM as d,e9 as y,j,fv as Z,rc as D,hW as G,fn as Q,a8 as Y,k as b,C as H,U as ee,S as te,T as re,V as se,r9 as ie,W as oe,rd as le,iS as ne,Z as C,hX as ae,$ as pe,re as ye,a3 as P,rf as ue,fl as de,rg as ce,a6 as he,aK as fe}from"./index-3fca1522.js";import{M as V}from"./BuildingComponentSublayer-5bc7bbd0.js";import{d as c}from"./BuildingGroupSublayer-47c8315b.js";import{E as ge,L as q}from"./SceneService-260dc337.js";import{l as ve}from"./FetchAssociatedFeatureLayer-b7428866.js";import"./capabilities-a18453f6.js";import"./I3SIndexInfo-8130b3ee.js";import"./I3SLayerDefinitions-b73cbd18.js";import"./I3SUtil-eb079328.js";import"./I3SBinaryReader-9bc79bf8.js";import"./popupUtils-03b6c0d5.js";let S=class extends d{constructor(){super(...arguments),this.type=null}};t([s({type:String,readOnly:!0,json:{write:!0}})],S.prototype,"type",void 0),S=t([n("esri.layers.support.BuildingFilterAuthoringInfo")],S);const W=S;var I;let f=I=class extends d{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new I({filterType:this.filterType,filterValues:y(this.filterValues)})}};t([s({type:String,json:{write:!0}})],f.prototype,"filterType",void 0),t([s({type:[String],json:{write:!0}})],f.prototype,"filterValues",void 0),f=I=t([n("esri.layers.support.BuildingFilterAuthoringInfoType")],f);const me=f;var T;const be=j.ofType(me);let w=T=class extends d{clone(){return new T({filterTypes:y(this.filterTypes)})}};t([s({type:be,json:{write:!0}})],w.prototype,"filterTypes",void 0),w=T=t([n("esri.layers.support.BuildingFilterAuthoringInfoBlock")],w);const Se=w;var F;const we=j.ofType(Se);let g=F=class extends W{constructor(){super(...arguments),this.type="checkbox"}clone(){return new F({filterBlocks:y(this.filterBlocks)})}};t([s({type:["checkbox"]})],g.prototype,"type",void 0),t([s({type:we,json:{write:!0}})],g.prototype,"filterBlocks",void 0),g=F=t([n("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],g);const K=g;let $=class extends d{};t([s({readOnly:!0,json:{read:!1}})],$.prototype,"type",void 0),$=t([n("esri.layers.support.BuildingFilterMode")],$);const B=$;var _;let x=_=class extends B{constructor(){super(...arguments),this.type="solid"}clone(){return new _}};t([s({type:["solid"],readOnly:!0,json:{write:!0}})],x.prototype,"type",void 0),x=_=t([n("esri.layers.support.BuildingFilterModeSolid")],x);const A=x;var k;let v=k=class extends B{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new k({edges:y(this.edges)})}};t([Z({wireFrame:"wire-frame"})],v.prototype,"type",void 0),t([s(D)],v.prototype,"edges",void 0),v=k=t([n("esri.layers.support.BuildingFilterModeWireFrame")],v);const U=v;var E;let O=E=class extends B{constructor(){super(...arguments),this.type="x-ray"}clone(){return new E}};t([s({type:["x-ray"],readOnly:!0,json:{write:!0}})],O.prototype,"type",void 0),O=E=t([n("esri.layers.support.BuildingFilterModeXRay")],O);const J=O;var L;const $e={nonNullable:!0,types:{key:"type",base:B,typeMap:{solid:A,"wire-frame":U,"x-ray":J}},json:{read:e=>{switch(e&&e.type){case"solid":return A.fromJSON(e);case"wireFrame":return U.fromJSON(e);case"x-ray":return J.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let h=L=class extends d{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new A,this.title=""}clone(){return new L({filterExpression:this.filterExpression,filterMode:y(this.filterMode),title:this.title})}};t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"filterExpression",void 0),t([s($e)],h.prototype,"filterMode",void 0),t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"title",void 0),h=L=t([n("esri.layers.support.BuildingFilterBlock")],h);const xe=h;var M;const Oe=j.ofType(xe);let u=M=class extends d{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=G(),this.name=null}clone(){return new M({description:this.description,filterBlocks:y(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:y(this.filterAuthoringInfo)})}};t([s({type:String,json:{write:!0}})],u.prototype,"description",void 0),t([s({type:Oe,json:{write:{enabled:!0,isRequired:!0}}})],u.prototype,"filterBlocks",void 0),t([s({types:{key:"type",base:W,typeMap:{checkbox:K}},json:{read:e=>(e&&e.type)==="checkbox"?K.fromJSON(e):null,write:!0}})],u.prototype,"filterAuthoringInfo",void 0),t([s({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],u.prototype,"id",void 0),t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],u.prototype,"name",void 0),u=M=t([n("esri.layers.support.BuildingFilter")],u);const je=u;let p=class extends d{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};t([s({type:String})],p.prototype,"fieldName",void 0),t([s({type:String})],p.prototype,"modelName",void 0),t([s({type:String})],p.prototype,"label",void 0),t([s({type:Number})],p.prototype,"min",void 0),t([s({type:Number})],p.prototype,"max",void 0),t([s({json:{read:e=>Array.isArray(e)&&(e.every(r=>typeof r=="string")||e.every(r=>typeof r=="number"))?e.slice():null}})],p.prototype,"mostFrequentValues",void 0),t([s({type:[Number]})],p.prototype,"subLayerIds",void 0),p=t([n("esri.layers.support.BuildingFieldStatistics")],p);let m=class extends Q.LoadableMixin(Y(d)){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||this.loadStatus==="loading"?this._get("fields"):(b.getLogger(this.declaredClass).error("building summary statistics are not loaded"),null)}load(e){const r=H(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(r)),Promise.resolve(this)}async _fetchService(e){const r=(await ee(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(r,{origin:"service"})}};t([s({constructOnly:!0,type:String})],m.prototype,"url",void 0),t([s({readOnly:!0,type:[p],json:{read:{source:"summary"}}})],m.prototype,"fields",null),m=t([n("esri.layers.support.BuildingSummaryStatistics")],m);const X=m,z=j.ofType(je),N=y(c.sublayersProperty);N.json.origins["web-scene"]={type:[V],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},N.json.origins["portal-item"]={type:[V],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};let o=class extends ge(te(re(se(ie(oe(le(he))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new ne({getCollections:()=>[this.sublayers],getChildrenFunction:r=>r.type==="building-group"?r.sublayers:null}),this.sublayers=null,this._sublayerOverrides=null,this.filters=new z,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.type="building-scene"}normalizeCtorArgs(e){return typeof e=="string"?{url:e}:e??{}}destroy(){this.allSublayers.destroy()}readSublayers(e,r,i){const l=c.readSublayers(e,r,i);return c.forEachSublayer(l,a=>a.layer=this),this._sublayerOverrides&&(this.applySublayerOverrides(l,this._sublayerOverrides),this._sublayerOverrides=null),l}applySublayerOverrides(e,{overrides:r,context:i}){c.forEachSublayer(e,l=>l.read(r.get(l.id),i))}readSublayerOverrides(e,r){var l;const i=new Map;for(const a of e)a!=null&&typeof a=="object"&&typeof a.id=="number"?i.set(a.id,a):(l=r.messages)==null||l.push(new C("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:a}));return{overrides:i,context:r}}writeSublayerOverrides(e,r,i){const l=[];c.forEachSublayer(this.sublayers,a=>{const R=a.write({},i);Object.keys(R).length>1&&l.push(R)}),l.length>0&&(r.sublayers=l)}writeUnappliedOverrides(e,r){r.sublayers=[],e.overrides.forEach(i=>{r.sublayers.push(y(i))})}write(e,r){return e=super.write(e,r),!r||r.origin!=="web-scene"&&r.origin!=="portal-item"||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,r):this._sublayerOverrides&&this.writeUnappliedOverrides(this._sublayerOverrides,e)),e}read(e,r){if(super.read(e,r),r&&(r.origin==="web-scene"||r.origin==="portal-item")&&e!=null&&Array.isArray(e.sublayers)){const i=this.readSublayerOverrides(e.sublayers,r);this.sublayers?this.applySublayerOverrides(this.sublayers,i):this._sublayerOverrides=i}}readSummaryStatistics(e,r){var i;if(typeof r.statisticsHRef=="string"){const l=ae((i=this.parsedUrl)==null?void 0:i.path,r.statisticsHRef);return new X({url:l})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const r=H(e)?e.signal:null,i=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(pe).then(()=>this._fetchService(r)).then(()=>this._fetchAssociatedFeatureService(r));return this.addResolvingPromise(i),Promise.resolve(this)}loadAll(){return ye(this,e=>{c.forEachSublayer(this.sublayers,r=>{r.type!=="building-group"&&e(r)}),this.summaryStatistics&&e(this.summaryStatistics)})}async saveAs(e,r){return this._debouncedSaveOperations(q.SAVE_AS,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(q.SAVE,e)}validateLayer(e){if(!e.layerType||e.layerType!=="Building")throw new C("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&(e.mode!=="absolute-height"&&b.getLogger(this.declaredClass).warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&e.featureExpressionInfo.expression!=="0"&&b.getLogger(this.declaredClass).warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))}async _fetchAssociatedFeatureService(e){const r=new ve(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedFeatureServiceItem=await r.fetchPortalItem()}catch(i){b.getLogger(this.declaredClass).warn("Associated feature service item could not be loaded",i)}}};t([s({type:["BuildingSceneLayer"]})],o.prototype,"operationalLayerType",void 0),t([s({readOnly:!0})],o.prototype,"allSublayers",void 0),t([s(N)],o.prototype,"sublayers",void 0),t([P("service","sublayers")],o.prototype,"readSublayers",null),t([s({type:z,nonNullable:!0,json:{write:!0}})],o.prototype,"filters",void 0),t([s({type:String,json:{write:!0}})],o.prototype,"activeFilterId",void 0),t([s({readOnly:!0,type:X})],o.prototype,"summaryStatistics",void 0),t([P("summaryStatistics",["statisticsHRef"])],o.prototype,"readSummaryStatistics",null),t([s({type:[String],json:{read:!1}})],o.prototype,"outFields",void 0),t([s(ue)],o.prototype,"fullExtent",void 0),t([s({type:["show","hide","hide-children"]})],o.prototype,"listMode",void 0),t([s(de(fe))],o.prototype,"spatialReference",void 0),t([s(ce)],o.prototype,"elevationInfo",null),t([s({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),t([s()],o.prototype,"associatedFeatureServiceItem",void 0),o=t([n("esri.layers.BuildingSceneLayer")],o);const Ce=o;export{Ce as default};
