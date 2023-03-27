import{p as w,al as d,C as e,Z as o,as as V,b as _,ak as c,J as p,at as u,_ as A,e as t,y as l,d as f}from"./index-22b5b8b0.js";import{n as v}from"./LayerView3D-08826eae.js";import{u as m}from"./LayerView-d45ebc57.js";const h="analysis-view-handles";let i=class extends v(m){constructor(s){super(s),this.type="line-of-sight-3d",this._analysisModule=null}initialize(){this.handles.add(w(()=>this.layer.analysis,s=>{this._destroyAnalysisView(),e(s)&&this._createAnalysisView(s)},d),h)}destroy(){this.handles.remove(h),this._destroyAnalysisView()}async whenAnalysisView(){if(e(this.analysisView))return this.analysisView;if(e(this._createAnalysisViewTask))return this._createAnalysisViewTask.promise;throw new o("layerview:no-analysisview-for-analysis","The analysis has not been set on the LineOfSightLayer of this layer view")}isUpdating(){return e(this._createAnalysisViewTask)||e(this.analysisView)&&this.analysisView.updating}_createAnalysisView(s){const n=V(async a=>(this.analysisView=await this._createAnalysisViewPromise(s,a),this._createAnalysisViewTask===n&&(this._createAnalysisViewTask=null),this.analysisView));this._createAnalysisViewTask=n}_destroyAnalysisView(){this.analysisView=_(this.analysisView),this._createAnalysisViewTask=c(this._createAnalysisViewTask)}async _createAnalysisViewPromise(s,n){let a=this._analysisModule;if(p(a)){const y=await this._loadAnalysisModule();this._analysisModule=y,a=y}const r=new a.default({analysis:s,view:this.view,parent:this});if(await r.when(),u(n))throw r.destroy(),new o("layerview:no-analysisview-for-analysis","The analysis has not been added to the LineOfSightLayer of this layer view",{analysis:s});return r}_loadAnalysisModule(){return A(()=>import("./LineOfSightAnalysisView3D-d6ea2e5d.js"),["./LineOfSightAnalysisView3D-d6ea2e5d.js","./index-22b5b8b0.js","./index-3d6e8798.css","./LineVisualElement-935c9105.js","./LineOfSightAnalysisTarget-f2307527.js","./persistable-1a078145.js","./resourceExtension-5afc4980.js","./elevationInfoUtils-4b7016a2.js","./analysisViewUtils-4e6febf3.js","./ImageMaterial-ebc922cc.js","./PointVisualElement-cc1f291e.js","./VisualElementResources-2b8ea6f4.js"],import.meta.url)}};t([l()],i.prototype,"type",void 0),t([l()],i.prototype,"layer",void 0),t([l()],i.prototype,"analysisView",void 0),t([l()],i.prototype,"_createAnalysisViewTask",void 0),i=t([f("esri.views.3d.layers.LineOfSightLayerView3D")],i);const g=i;export{g as default};
