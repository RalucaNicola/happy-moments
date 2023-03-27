import{h as u,au as c,b as m,iS as y,C as g,j as d,p as h,f,av as b,e as i,y as o,d as v}from"./index-4a6abd83.js";import{b as O,h as I,O as _,g as w,f as S,a as V,D as G}from"./Stop-c5361823.js";import{n as C}from"./LayerView3D-b7afca63.js";import{A as $}from"./GraphicsProcessor-aee85ba3.js";import{l as P}from"./projectExtentUtils-06ee7bc6.js";import{r as R}from"./EventedSet-3599f10c.js";import{u as j}from"./LayerView-9055c868.js";import"./Graphics3DObjectStates-508b84db.js";import"./optimizedFeatureQueryEngineAdapter-d2bebd47.js";import"./centroid-79cee7be.js";import"./PooledRBush-733b6af6.js";import"./quickselect-56c5966e.js";function D(e){return e instanceof O||e instanceof I||e instanceof _||e instanceof w||e instanceof S||e instanceof V||e instanceof G}let r=class extends C(j){constructor(){super(...arguments),this.type="route-3d",this.loadedGraphics=new R,this._byObjectID=new Map,this.slicePlaneEnabled=!1,this.fullExtentInLocalViewSpatialReference=null}initialize(){this._set("processor",new $({owner:this,scaleVisibilityEnabled:!0,frustumVisibilityEnabled:!0})),this.addResolvingPromise(this.processor.initializePromise),this.updatingHandles.addOnCollectionChange(()=>this._routeItems,e=>this._routeItemsChanged(e),u),this.addResolvingPromise(P(this).then(e=>this.fullExtentInLocalViewSpatialReference=e)),this.handles.add(c(()=>{var e,t;return(t=(e=this.view)==null?void 0:e.basemapTerrain)==null?void 0:t.ready},()=>()=>this.notifyChange("updating"),{once:!0}))}destroy(){var e;this.handles.removeAll(),this.updatingHandles.removeAll(),this._set("processor",m(this.processor)),(e=this._get("_routeItems"))==null||e.destroy()}get _routeItems(){return new y({getCollections:()=>[this.layer.pointBarriers,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.stops,this.layer.directionLines,this.layer.directionPoints,g(this.layer.routeInfo)?new d([this.layer.routeInfo]):null]})}_routeItemsChanged(e){if(e.removed.length){this.loadedGraphics.removeMany(e.removed.map(t=>{const s=this._byObjectID.get(t);return this._byObjectID.delete(t),s}));for(const t of e.removed)this.handles.remove(t)}if(e.added.length){this.loadedGraphics.addMany(e.added.map(t=>{const s=t.toGraphic();return this._byObjectID.set(t,s),s}));for(const t of e.added)this.handles.add([h(()=>t.geometry,(s,a)=>{this._updateGraphic(t,"geometry",s,a)}),h(()=>t.symbol,(s,a)=>{this._updateGraphic(t,"symbol",s,a)})],t)}}get legendEnabled(){var e;return this.canResume()&&!((e=this.processor)!=null&&e.frustumVisibilitySuspended)}getSuspendInfo(){var t,s;const e=super.getSuspendInfo();return e.outsideScaleRange=((t=this.processor)==null?void 0:t.scaleVisibilitySuspended)??!1,e.outsideOfView=((s=this.processor)==null?void 0:s.frustumVisibilitySuspended)??!1,e}async fetchPopupFeatures(e,t){var s;return((s=f(t))==null?void 0:s.clientGraphics)??[]}getHit(e){return this.processor.getHit(e)}whenGraphicBounds(e,t){return this.processor.whenGraphicBounds(e,t)}computeAttachmentOrigin(e,t){var s;return(s=this.processor)==null?void 0:s.computeAttachmentOrigin(e,t)}getSymbolLayerSize(e,t){return this.processor.getSymbolLayerSize(e,t)}async queryGraphics(){return new d(this.loadedGraphics.toArray())}maskOccludee(e){return this.processor.maskOccludee(e)}highlight(e){return D(e)&&(e=this._byObjectID.get(e)),this.processor.highlight(e)}get updatePolicy(){var e;return((e=this.processor)==null?void 0:e.graphicsCore.effectiveUpdatePolicy)||b.SYNC}canResume(){var e;return super.canResume()&&!((e=this.processor)!=null&&e.scaleVisibilitySuspended)}isUpdating(){var e,t,s;return!(!((e=this.processor)!=null&&e.updating)&&((s=(t=this.view)==null?void 0:t.basemapTerrain)!=null&&s.ready))}get performanceInfo(){var e,t;return{displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:-1,totalNumberOfFeatures:-1,nodes:0,core:null,updating:this.updating,elevationUpdating:((e=this.processor)==null?void 0:e.elevationAlignment.updating)??!1,visibilityFrustum:!((t=this.processor)!=null&&t.frustumVisibilitySuspended)}}_updateGraphic(e,t,s,a){var p;const l=this._byObjectID.get(e);l[t]=s,n.graphic=l,n.property=t,n.oldValue=a,n.newValue=s,(p=this.processor)==null||p.graphicsCore.graphicUpdateHandler(n)}};i([o()],r.prototype,"_routeItems",null),i([o()],r.prototype,"loadedGraphics",void 0),i([o({readOnly:!0})],r.prototype,"legendEnabled",null),i([o()],r.prototype,"layer",void 0),i([o({readOnly:!0})],r.prototype,"processor",void 0),i([o({type:Boolean})],r.prototype,"slicePlaneEnabled",void 0),r=i([v("esri.views.3d.layers.RouteLayerView3D")],r);const n={graphic:null,property:null,oldValue:null,newValue:null},T=r;export{T as default};