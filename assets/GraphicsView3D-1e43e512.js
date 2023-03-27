import{s as a,e as r,y as s,d as p,b as c,f as n,o as h,g as l}from"./index-22b5b8b0.js";import{A as d}from"./GraphicsProcessor-19e45d5d.js";import"./Graphics3DObjectStates-b8eecbd6.js";import"./optimizedFeatureQueryEngineAdapter-40954e35.js";import"./centroid-b10d045b.js";import"./PooledRBush-da33488e.js";import"./quickselect-56c5966e.js";const u=e=>{let t=class extends a(e){constructor(){super(...arguments),this.graphics=null,this.renderer=null}};return r([s()],t.prototype,"graphics",void 0),r([s()],t.prototype,"renderer",void 0),r([s()],t.prototype,"updating",void 0),r([s()],t.prototype,"view",void 0),t=r([p("esri.views.layers.GraphicsView")],t),t};let o=class extends u(l){constructor(e){super(e),this.processor=null,this.slicePlaneEnabled=!1,this.layer=new y}initialize(){this._set("processor",new d({owner:this}))}destroy(){this._set("processor",c(this.processor))}get graphics(){var e;return(e=this.view)==null?void 0:e.graphics}get loadedGraphics(){return this.graphics}get updating(){var e;return!!((e=this.processor)!=null&&e.updating)}get symbolUpdateType(){return this.processor.graphicsCore.symbolUpdateType}getHit(e){return this.processor.getHit(e)}whenGraphicBounds(e,t){return this.processor.whenGraphicBounds(e,t)}graphicChanged(e){this.processor.graphicsCore.graphicUpdateHandler(e)}get updatePolicy(){return this.processor.graphicsCore.effectiveUpdatePolicy}async queryGraphics(){return this.loadedGraphics}async fetchPopupFeatures(e,t){var i;return((i=n(t))==null?void 0:i.clientGraphics)??[]}highlight(e){return this.processor.highlight(e)}maskOccludee(e){return this.processor.maskOccludee(e)}};r([s({readOnly:!0})],o.prototype,"graphics",null),r([s()],o.prototype,"loadedGraphics",null),r([s({readOnly:!0})],o.prototype,"updating",null),r([s({constructOnly:!0})],o.prototype,"view",void 0),r([s()],o.prototype,"processor",void 0),r([s({type:Boolean})],o.prototype,"slicePlaneEnabled",void 0),r([s()],o.prototype,"layer",void 0),o=r([p("esri.views.3d.layers.GraphicsView3D")],o);class y extends h{constructor(){super(),this.type="graphics-view-3d-dummy",this.id=this.uid}}const O=o;export{O as default};
