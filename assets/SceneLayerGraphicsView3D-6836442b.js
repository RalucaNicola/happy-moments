import{bd as q,aa as H,J as f,C as _,dB as U,b,h as C,p as Q,_ as z,et as O,av as T,iY as k,cZ as B,k as E,dX as F,f9 as W,cG as Z,eq as G,bB as J,iZ as Y,P as S,cl as K,f as X,gO as ee,fO as te,f2 as re,ah as A,ai as ie,e as p,y as g,aj as se,aq as oe,d as ae,Q as ne,b6 as de}from"./index-22b5b8b0.js";import{A as M,t as le}from"./I3SOverrides-812630f9.js";import{n as he}from"./LayerView3D-08826eae.js";import{F as ce,p as ue}from"./FeatureLikeLayerView3D-c62d265e.js";import{c as pe,i as ge,u as me,b as _e,E as fe}from"./SceneLayerView-3554d1ab.js";import{g as ye,w as be,J as ve,a as xe,m as L}from"./I3SUtil-d34d29bd.js";import{t as Ee}from"./DefinitionExpressionSceneLayerView-98d20672.js";import{c as Ie}from"./PopupSceneLayerView-6b590add.js";import"./I3SNode-27f792d4.js";import"./I3SBinaryReader-b7e43de8.js";import"./RenderTexture-c8b3407e.js";import"./FeatureLayerView3D-c79f0395.js";import"./FeatureLayerViewBase3D-f6e71414.js";import"./EventedSet-f8c474ce.js";import"./floorFilterUtils-080a7cd2.js";import"./popupUtils-dacd0e4b.js";import"./LayerView-d45ebc57.js";import"./RefreshableLayerView-e8547ee7.js";import"./dehydratedFeatureComparison-00561298.js";import"./queryForSymbologySnapping-313469b0.js";import"./elevationInfoUtils-4b7016a2.js";import"./hash-0ddfbf4b.js";import"./Graphics3DObjectStates-b8eecbd6.js";import"./optimizedFeatureQueryEngineAdapter-40954e35.js";import"./centroid-b10d045b.js";import"./PooledRBush-da33488e.js";import"./quickselect-56c5966e.js";import"./QueryEngine-c6bd6f11.js";import"./QueryEngineResult-f7d668c1.js";import"./WhereClause-ef33f7d1.js";import"./executionError-fb3f283a.js";import"./utils-75d72f4d.js";import"./generateRendererUtils-61f7ab8f.js";import"./json-48e3ea08.js";import"./QueryEngineCapabilities-42e44ded.js";import"./FeatureStore-6241a6a3.js";import"./BoundsStore-acf4faa5.js";import"./projectExtentUtils-dd977381.js";class P extends q{constructor(t){super("SceneLayerWorker","dracoDecompressPointCloudData",{dracoDecompressPointCloudData:i=>[i.geometryBuffer]},t,{hasInitialize:!0})}}class we extends H{constructor(t,i){super(),this._updateAndCompare=t,this._notifyUpdated=i,this._nodes=new Map,this._graphics=new Map,this._duplicates=new Map}clear(){if(this._graphics.size>0){const t=this.toArray();this._graphics.clear(),this.emit("change",{added:[],removed:t})}this._nodes.clear()}get length(){return this._graphics.size}get(t){return this._graphics.get(t)}getNode(t){return this._nodes.get(t)}hasNode(t){return this._nodes.has(t)}nodes(){return this._nodes.values()}addNode(t,i){this._nodes.set(t,i);const r=i.graphics;if(r.length===0)return;const s=new Set;for(let a=0;a<r.length;a++){const n=r[a],d=n.objectId,h=this._graphics.get(d);if(h){s.add(d),n!==h&&(r[a]=h);const l=this._duplicates.get(d);l?l.push(t):this._duplicates.set(d,[h.nodeIndex,t])}else n.nodeIndex=t,this._graphics.set(d,n)}s.size&&this._updateForeignGraphics(i);const o=s.size>0?r.filter(a=>!s.has(a.objectId)):r;o.length>0&&this.emit("change",{added:o,removed:[]})}removeNode(t){const i=this._nodes.get(t);if(!i)return void console.error("Removing unknown node");this._nodes.delete(t);const r=new Set,s=[];for(const o of i.graphics){const a=o.objectId,n=this._graphics.get(a);if(!n)continue;const d=this._duplicates.get(a);if(d){const h=d.indexOf(t);if(h===-1){console.error("error: removing graphic from node that should not reference it.");continue}if(d.splice(h,1),n.nodeIndex===t){let l=this.getNode(d[0]);for(let u=1;u<d.length;u++){const m=this.getNode(d[u]);(f(l)||_(m)&&m.node.level>l.node.level)&&(l=m)}_(l)&&r.add(l)}d.length===1&&this._duplicates.delete(a)}else this._graphics.delete(a),s.push(o)}s.length>0&&this.emit("change",{added:[],removed:s}),r.forEach(o=>this._updateForeignGraphics(o))}_updateForeignGraphics(t){const i=[],r=t.node.index,s=t.node.level;let o=0;for(;o<t.graphics.length;){const a=t.graphics[o].nodeIndex;if(a===r){o++;continue}let n=1;for(;o+n<t.graphics.length&&t.graphics[o+n].nodeIndex===a;)n++;const d=this.getNode(a);if(_(d)&&d.node.level>s)o+=n;else{for(let h=o;h<o+n;h++){const l=t.graphics[h];l.nodeIndex=r,this._updateAndCompare(l,t,h)&&i.push(l)}o+=n}}this._notifyUpdated(i)}toArray(){return Array.from(this._graphics.values())}find(t){let i;return U(this._graphics,r=>!!t(r)&&(i=r,!0)),i}forEach(t){this._graphics.forEach(i=>t(i))}forEachNode(t){this._nodes.forEach((i,r)=>t(i,r))}get nodeCount(){return this._nodes.size}_checkInvariants(){const t=new Map;this._nodes.forEach((r,s)=>{s!==r.node.index&&console.error("Mismatched node index"),r.graphics.forEach(o=>{t.set(o.objectId,1+(t.get(o.objectId)??0));const a=this._duplicates.get(o.objectId);a&&!a.includes(s)&&console.error("Node not listed in duplicate list"),a||o.nodeIndex===s||console.error("Unique graphic does not reference owning node index")})}),this._graphics.size!==t.size&&console.error("Mismatch between actual and expected number of graphics");let i=0;t.forEach((r,s)=>{i+=r>1?1:0;const o=this._graphics.get(s);if(!o)return void console.error("Missing graphic entry");const a=this._nodes.get(o.nodeIndex);if(!a)return void console.error("Graphic references unkown node");const n=this._duplicates.get(s);n?(n.length!==r&&console.error("Wrong number of entries in duplicate list"),n.forEach(d=>{const h=this._nodes.get(d);h?h.node.level>a.node.level&&console.error("Duplicated graphic does not reference highest level node"):console.error("Unknown node in duplicate list")})):r>1&&console.error("Missing duplicates entry")}),this._duplicates.size!==i&&console.error("Mismatch between expected and actual number of duplicate entries")}}const R=_e();let c=class extends Ee(Ie(he(fe))){constructor(){super(...arguments),this.type="scene-layer-graphics-3d",this._queryEngine=null,this._memCache=null,this._interactiveEditingSessions=new Map,this.loadedGraphics=new we((e,t,i)=>Ce(e,t,i),e=>this.processor.graphicsCore.recreateGraphics(e)),this.holeFilling="always",this.progressiveLoadFactor=1,this.supportsHeightUnitConversion=!0,this._coordinatesOutsideExtentErrors=0,this._maxCoordinatesOutsideExtentErrors=20}tryRecycleWith(e,t){return e.url===this.layer.url&&this._i3sOverrides.isEmpty?e.load(t).then(()=>{var r;ye(this.layer,e,this._i3sOverrides),this.layer=e,this._i3sOverrides.destroy();const i=(r=this.view.resourceController)==null?void 0:r.memoryController;this._i3sOverrides=new M({view:this.view,layer:e,memoryController:i}),b(this._queryEngine),this._setupQueryEngine(),this.processor.resetObjectStates()}):null}initialize(){var t,i;this.addResolvingPromise(this.layer.indexInfo);const e=(t=this.view.resourceController)==null?void 0:t.memoryController;this._i3sOverrides=new M({view:this.view,layer:this.layer,memoryController:e}),be(this.layer,this.view.spatialReference,this.view.viewingMode),this._fieldsHelper=new pe({layerView:this}),this.updatingHandles.add(()=>this.layer.rangeInfos,r=>this._rangeInfosChanged(r),C),this.updatingHandles.add(()=>this.layer.renderer,(r,s)=>this._rendererChange(r,s)),this.updatingHandles.add(()=>[this.parsedDefinitionExpression,this._excludeObjectIdsSorted],()=>this._filterChange()),this.handles.add(Q(()=>O.I3S_TREE_SHOW_TILES,r=>{if(r&&!this._treeDebugger){const s=this._controller.crsIndex;z(()=>import("./I3STreeDebugger-005b25d6.js"),["./I3STreeDebugger-005b25d6.js","./index-22b5b8b0.js","./index-3d6e8798.css","./TileTreeDebugger-503fd551.js"],import.meta.url).then(({I3STreeDebugger:o})=>{!this._treeDebugger&&O.I3S_TREE_SHOW_TILES&&(this._treeDebugger=new o({lv:this,view:this.view,nodeSR:s}))})}else r||!this._treeDebugger||O.I3S_TREE_SHOW_TILES||(this._treeDebugger.destroy(),this._treeDebugger=null)},C)),this._set("processor",new ce({owner:this,preferredUpdatePolicy:T.ASYNC,scaleVisibilityEnabled:!0,filterVisibilityEnabled:!0,timeExtentEnabled:!1,frustumVisibilityEnabled:!1,elevationAlignmentEnabled:!0,elevationFeatureExpressionEnabled:!1,setUidToIdOnAdd:!1,dataExtent:this.layer.fullExtent,updateClippingExtent:r=>this._updateClippingExtent(r)})),(i=this.processor.elevationAlignment)==null||i.events.on("invalidate-elevation",r=>this._controller.updateElevationChanged(r.extent,r.spatialReference)),this.supportsHeightUnitConversion&&(this._verticalScale=k("point",this.layer.spatialReference,this.view.spatialReference)),this.addResolvingPromise(this.processor.initializePromise),this._memCache=this.view.resourceController.memoryController.newCache(this.uid),this._controller=new le({layerView:this,scaleVisibilityEnabled:!1}),ve(this.layer.geometryDefinitions)&&(this._worker=new P(r=>this.view.resourceController.immediate.schedule(r))),this.handles.add(this.layer.on("apply-edits",r=>this.updatingHandles.addPromise(r.result))),this.handles.add(this.layer.on("edits",r=>this._handleEdits(r))),this.when(()=>{this._setupQueryEngine(),this.updatingHandles.add(()=>this.maximumNumberOfFeatures,r=>this._controller.featureTarget=r,C),this.updatingHandles.add(()=>this.suspended,r=>{r&&this._removeAllNodeData()})})}destroy(){this._treeDebugger=b(this._treeDebugger),this._i3sOverrides=b(this._i3sOverrides),this._set("processor",b(this.processor)),this._controller=b(this._controller),this._queryEngine=b(this._queryEngine),this._worker=b(this._worker),this._memCache=b(this._memCache),this.loadedGraphics.clear(),this._fieldsHelper=b(this._fieldsHelper)}get i3slayer(){return this.layer}get updatingProgressValue(){var e;return((e=this._controller)==null?void 0:e.updatingProgress)??1}get requiredFields(){var e;return((e=this._fieldsHelper)==null?void 0:e.requiredFields)??[]}get maximumNumberOfFeatures(){var t,i;const e=(i=(t=this.processor)==null?void 0:t.graphicsCore)==null?void 0:i.displayFeatureLimit;return(e==null?void 0:e.maximumNumberOfFeatures)??0}set maximumNumberOfFeatures(e){e!=null?(this._override("maximumNumberOfFeatures",e),this._controller.fixedFeatureTarget=!0):(this._clearOverride("maximumNumberOfFeatures"),this._controller.fixedFeatureTarget=!1)}get maximumNumberOfFeaturesExceeded(){var e;return!this.suspended&&!!((e=this._controller)!=null&&e.useMaximumNumberOfFeatures)&&!this._controller.leavesReached}get _excludeObjectIdsSorted(){const e=this.layer.excludeObjectIds;return e.length?e.toArray().sort((t,i)=>t-i):null}get lodFactor(){return this.layer.semantic==="Labels"?1:this.view.qualitySettings.sceneService.point.lodFactor}get hasM(){return!1}get hasZ(){return!0}async whenGraphicAttributes(e,t){return xe(this.layer,e,this._getObjectIdField(),t,()=>[...this.loadedGraphics.nodes()])}getHit(e){if(!this.loadedGraphics)return null;const t=B(this.loadedGraphics.find(r=>r.uid===e),this.layer),i=this._getObjectIdField();return t&&t.attributes&&t.attributes[i]?(t.layer=this.layer,t.sourceLayer=this.layer,{type:"graphic",graphic:t,layer:t.layer}):null}whenGraphicBounds(e,t){return this.processor.whenGraphicBounds(e,t)}computeAttachmentOrigin(e,t){return this.processor.computeAttachmentOrigin(e,t)}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}isUpdating(){var e,t,i;return!!((e=this._controller)!=null&&e.updating||(t=this.processor)!=null&&t.updating||(i=this._fieldsHelper)!=null&&i.updating||this.layerFilterUpdating)}highlight(e){return this.processor.highlight(e,this.layer.objectIdField)}get updatePolicy(){return this.processor.graphicsCore.effectiveUpdatePolicy}createInteractiveEditSession(e){return ge(this._attributeEditingContext,e)}async _decompressBinaryPointData(e,t){const i={geometryBuffer:e.geometryBuffer};f(this._worker)&&(this._worker=new P(s=>this.view.resourceController.immediate.schedule(s)));const r=await this._worker.invoke(i,t);if(f(r))throw new Error("Failed to decompress Draco point data");return{positionData:r.positions,featureIds:r.featureIds}}async addNode(e,t,i){if(!D(t)&&!Ne(t))throw new Error;if(this.loadedGraphics.hasNode(e.index))return void E.getLogger(this.declaredClass).error("I3S node "+e.id+" already added");const r=_(this.layer.fullExtent)?Oe(this.layer.fullExtent.clone(),.5):null,s=[],{featureIds:o,pointPositions:a}=D(t)?await this._extractBinaryPointPositions(e,t,i):this._extractLegacyPointPositions(t);this._validatePositions(e,o,a,r,s);const n=this._controller.crsVertex,d=this.view.spatialReference;F(a,n,0,a,d,0,o.length);const h=D(t)?e.level:0,l={graphics:this._createGraphics(o,a,e.index,h),featureIds:o,attributeInfo:t.attributeDataInfo,node:e};if(await this._i3sOverrides.apply(l.featureIds,t.attributeDataInfo,i),e.numFeatures=l.graphics.length,this._updateNodeMemory(e),$(l),s.length>0&&(this._computeObb(e,s,n),this._controller.updateVisibility(e.index)),!this._controller.isGeometryVisible(e))return void this._cacheNodeData(l);if(_(this._verticalScale))for(const m of l.graphics)this._verticalScale(m.geometry);const u=this.view._stage.renderView.objectAndLayerIdRenderHelper;if(_(u))for(let m=0;m<l.featureIds.length;m++){const v=l.featureIds[m];u.setUidToObjectAndLayerId(v,l.graphics[m].uid,this.layer.id,this.layer.uid,this.layer.popupEnabled,l.node.resources.attributes,m)}this.loadedGraphics.addNode(e.index,l),this._controller.updateLoadStatus(e.index,!0),this._filterNode(l),this._treeDebugger&&this._treeDebugger.update()}_computeObb(e,t,i){const r=this._controller.crsIndex,s=r.isGeographic?this.view.renderSpatialReference:r;F(t,i,0,t,s,0,t.length/3),e.serviceObb=W(new de(t,3)),r.isGeographic&&Z(e.serviceObb.center,s,e.serviceObb.center,r)}isNodeLoaded(e){return this.loadedGraphics.hasNode(e)}isNodeReloading(){return!1}updateNodeState(){}async _extractBinaryPointPositions(e,t,i){const r=await this._decompressBinaryPointData(t,i),s=r.positionData,o=3,a=s.length/o,n=G(3*a),d=_(e.serviceObb)?e.serviceObb.center:[0,0,0],h=Math.abs(d[2])*2**-20;for(let l=0;l<a;l++){const u=l*o;n[u+0]=s[u+0]+d[0],n[u+1]=s[u+1]+d[1],n[u+2]=s[u+2]+d[2],Math.abs(n[u+2])<h&&(n[u+2]=0)}return{featureIds:r.featureIds?Array.from(r.featureIds):[],pointPositions:n}}_extractLegacyPointPositions(e){var s,o;const t=e.pointData.length,i=G(3*t),r=new Array;for(let a=0;a<t;a++){const n=e.pointData[a],d=n.featureDataPosition,h=d.length,l=((s=n.geometries)==null?void 0:s[0])??De[h],u=n.featureIds[0];if(l.type!=="Embedded"||l.params.type!=="points"||h<2||h>3)continue;const m=((o=l.params.vertexAttributes)==null?void 0:o.position)??[0,0,0],v=3*r.length;i[v+0]=d[0]+m[0],i[v+1]=d[1]+m[1],i[v+2]=h===3?d[2]+m[2]:NaN,r.push(u)}return{featureIds:r,pointPositions:i}}_validatePositions(e,t,i,r,s){if(f(r)&&e.serviceObb)return;const o=t.length,a=3;for(let n=0;n<o;n++){const d=n*a;J(I,i[d],i[d+1],i[d+2]),_(r)&&!Y(r,I)&&(this._coordinatesOutsideExtentErrors<this._maxCoordinatesOutsideExtentErrors&&E.getLogger(this.declaredClass).error("Service Error: Coordinates outside of layer extent"),this._coordinatesOutsideExtentErrors+1===this._maxCoordinatesOutsideExtentErrors&&E.getLogger(this.declaredClass).error("Maximum number of errors reached. Further errors are ignored."),this._coordinatesOutsideExtentErrors++),e.serviceObb||s.push(I[0],I[1],I[2])}}_createGraphics(e,t,i,r){const s=e.length,o=3,a=this._getObjectIdField(),n=this.processor.graphicsCore,d=new Array,h=this.view.spatialReference;for(let l=0;l<s;l++){const u=e[l],m={};u!=null&&(m[a]=u);const v=u??S.generateUID(),w=l*o,j=isNaN(t[w+2])?void 0:t[w+2],N=K(t[w],t[w+1],j,h),x=this.loadedGraphics.get(v);if(_(x))(x.level==null||x.level<r)&&(y.property="geometry",y.graphic=x,y.oldValue=X(x.geometry),y.newValue=N,x.geometry=N,x.level=r,n.graphicUpdateHandler(y)),d.push(x);else{const V=S.generateUID();d.push({objectId:v,uid:V,geometry:N,attributes:m,visible:!0,nodeIndex:i,level:r})}}return d}_updateNodeMemory(e){e.memory=4096+(_(e.numFeatures)?e.numFeatures*this.processor.graphicsCore.usedMemoryPerGraphic:0)}_cacheNodeData(e){const t=e.graphics.reduce((i,r)=>ee(r)+i,512+8*e.featureIds.length+1024);this._memCache.put(this._getMemCacheKey(e.node),e,t)}_getMemCacheKey(e){return`${e.index}`}_removeAllNodeData(){this.loadedGraphics.forEachNode((e,t)=>{if(e){const i=e.node;this._updateNodeMemory(i),this._cacheNodeData(e)}this._controller.updateLoadStatus(t,!1)}),this._treeDebugger&&this._treeDebugger.update(),this.loadedGraphics.clear()}removeNode(e){const t=this._removeNodeStageData(e);t&&(this._updateNodeMemory(t.node),this._cacheNodeData(t))}_removeNodeStageData(e){const t=this.loadedGraphics.getNode(e);return f(t)?null:(this._controller.updateLoadStatus(e,!1),this.loadedGraphics.removeNode(e),this._treeDebugger&&this._treeDebugger.update(),t)}async loadCachedNodeData(e){var t;return(t=this._memCache)==null?void 0:t.pop(this._getMemCacheKey(e))}async addCachedNodeData(e,t,i,r){this.loadedGraphics.hasNode(e.index)?E.getLogger(this.declaredClass).error("I3S node "+e.id+" already added"):(await this._i3sOverrides.apply(t.featureIds,i,r),this.loadedGraphics.addNode(e.index,t),this._controller.updateLoadStatus(e.index,!0),this._updateNodeMemory(e),t.attributeInfo=i,this._attributeValuesChanged(t),this._filterNode(t),this._treeDebugger&&this._treeDebugger.update())}getLoadedNodeIds(){const e=[];return this.loadedGraphics.forEachNode(t=>e.push(t.node.id)),e.sort()}getVisibleNodes(){const e=new Array;return this.loadedGraphics.forEachNode(t=>e.push(t.node)),e}getLoadedNodeIndices(e){this.loadedGraphics.forEachNode((t,i)=>e.push(i))}getLoadedAttributes(e){const t=this.loadedGraphics.getNode(e);if(_(t)&&_(t.attributeInfo))return t.attributeInfo.loadedAttributes}getAttributeData(e){const t=this.loadedGraphics.getNode(e);if(_(t)&&_(t.attributeInfo))return t.attributeInfo.attributeData}_setAttributeData(e,t){const i=this.loadedGraphics.getNode(e);f(i)||f(i.attributeInfo)||(i.attributeInfo.attributeData=t,this._attributeValuesChanged(i))}async updateAttributes(e,t,i){const r=this.loadedGraphics.getNode(e);f(r)||(await this._i3sOverrides.apply(r.featureIds,t,i),r.attributeInfo=t,this._attributeValuesChanged(r))}_attributeValuesChanged(e){if($(e),this._filterNode(e),this.processor.graphicsCore.labelsEnabled){const t=e.graphics.map(i=>i.uid);this.processor.graphicsCore.updateLabelingInfo(t)}}_updateClippingExtent(e){return this._controller&&this._controller.updateClippingArea(e),!1}_getObjectIdField(){return this.layer.objectIdField||te}async _rendererChange(e,t){const{layer:{fieldsIndex:i}}=this,r=new Set;let s,o;e?(await e.collectRequiredFields(r,i),s=Array.from(r).sort()):s=[],r.clear(),t?(await t.collectRequiredFields(r,i),o=Array.from(r).sort()):o=[],s.length===o.length&&s.every((a,n)=>s[n]===o[n])||this._reloadAllNodes()}_rangeInfosChanged(e){e!=null&&e.length>0&&E.getLogger(this.declaredClass).warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")}_filterChange(){this.loadedGraphics.forEachNode(e=>this._filterNode(e))}_reloadAllNodes(){this._removeAllNodeData(),this._controller&&this._controller.restartNodeLoading()}_filterNode(e){const t=this.parsedDefinitionExpression,i=this._excludeObjectIdsSorted,r=this._getObjectIdField();for(const s of e.graphics){const o=s.visible,a=!t||this._evaluateClause(t,s),n=f(i)||re(i,s.attributes[r])<0;s.visible=a&&n,o!==s.visible&&(y.graphic=s,y.property="visible",y.oldValue=o,y.newValue=s.visible,this.processor.graphicsCore.graphicUpdateHandler(y))}}createQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference};return _(this.filter)?this.filter.createQuery(e):new A(e)}queryFeatures(e,t){return this._queryEngine.executeQuery(this._ensureQuery(e),t==null?void 0:t.signal)}queryObjectIds(e,t){return this._queryEngine.executeQueryForIds(this._ensureQuery(e),t==null?void 0:t.signal)}queryFeatureCount(e,t){return this._queryEngine.executeQueryForCount(this._ensureQuery(e),t==null?void 0:t.signal)}queryExtent(e,t){return this._queryEngine.executeQueryForExtent(this._ensureQuery(e),t==null?void 0:t.signal)}_ensureQuery(e){return this._addDefinitionExpressionToQuery(f(e)?this.createQuery():A.from(e))}_setupQueryEngine(){const e=()=>this.processor.featureStore;this._queryEngine=new ue({context:{spatialReference:this.view.spatialReference,layer:this.layer,scheduler:this.view.resourceController.scheduler,get featureStore(){return e()},hasZ:this.hasZ,hasM:this.hasM},priority:ie.FEATURE_QUERY_ENGINE})}getUsedMemory(){var e,t;return((t=(e=this.processor)==null?void 0:e.graphicsCore)==null?void 0:t.usedMemory)??0}getUnloadedMemory(){var e,t,i;return .8*((((e=this._controller)==null?void 0:e.unloadedMemoryEstimate)??0)+(((i=(t=this.processor)==null?void 0:t.graphicsCore)==null?void 0:i.unprocessedMemoryEstimate)??0))}ignoresMemoryFactor(){return this._controller&&this._controller.fixedFeatureTarget}_handleEdits(e){me(this._attributeEditingContext,e)}get _attributeEditingContext(){const e=this._getObjectIdField();return{sessions:this._interactiveEditingSessions,fieldsIndex:this.layer.fieldsIndex,objectIdField:e,forEachNode:t=>this.loadedGraphics.forEachNode(i=>t(i.node,i.featureIds)),attributeStorageInfo:this.i3slayer.attributeStorageInfo??[],i3sOverrides:this._i3sOverrides,getAttributeData:t=>this.getAttributeData(t),setAttributeData:(t,i,r)=>{this._setAttributeData(t,i);const s=this.loadedGraphics.getNode(t);if(_(r)){const o=this.loadedGraphics.get(r.attributes[e]);_(o)&&this.processor.graphicsCore.recreateGraphics([o])}else _(s)&&this.processor.graphicsCore.recreateGraphics(s.graphics)},clearMemCache:()=>{}}}get performanceInfo(){const e={displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:this.maximumNumberOfFeatures,totalNumberOfFeatures:-1,nodes:this.loadedGraphics.nodeCount,core:this.processor.graphicsCore.performanceInfo};return this._controller&&this._controller.updateStats(e),e}get test(){return{controller:this._controller,numNodes:this.loadedGraphics.nodeCount,loadedGraphics:this.loadedGraphics}}};p([g()],c.prototype,"processor",void 0),p([g({type:se})],c.prototype,"filter",void 0),p([g()],c.prototype,"loadedGraphics",void 0),p([g()],c.prototype,"i3slayer",null),p([g()],c.prototype,"_controller",void 0),p([g()],c.prototype,"updating",void 0),p([g()],c.prototype,"suspended",void 0),p([g()],c.prototype,"holeFilling",void 0),p([g(oe)],c.prototype,"updatingProgress",void 0),p([g()],c.prototype,"updatingProgressValue",null),p([g(R.requiredFields)],c.prototype,"requiredFields",null),p([g(R.availableFields)],c.prototype,"availableFields",void 0),p([g()],c.prototype,"_fieldsHelper",void 0),p([g({type:Number})],c.prototype,"maximumNumberOfFeatures",null),p([g({readOnly:!0})],c.prototype,"maximumNumberOfFeaturesExceeded",null),p([g()],c.prototype,"_excludeObjectIdsSorted",null),p([g({readOnly:!0})],c.prototype,"lodFactor",null),p([g({readOnly:!0})],c.prototype,"hasM",null),p([g({readOnly:!0})],c.prototype,"hasZ",null),c=p([ae("esri.views.3d.layers.SceneLayerGraphicsView3D")],c);const pt=c;function Ne(e){return"pointData"in e}function D(e){return"geometryBuffer"in e&&e.geometryBuffer!==null}function Ce(e,t,i){const r=t.attributeInfo;if(f(r)||f(r.loadedAttributes)||f(r.attributeData))return!1;let s=!1;for(const{name:o}of r.loadedAttributes)if(r.attributeData[o]){const a=L(r.attributeData[o],i);a!==e.attributes[o]&&(e.attributes[o]=a,s=!0)}return s}function $(e){const t=e.attributeInfo,i=e.node.index;if(!(f(t)||f(t.loadedAttributes)||f(t.attributeData)))for(let r=0;r<e.graphics.length;r++){const s=e.graphics[r];if(s.nodeIndex===i){s.attributes||(s.attributes={});for(const{name:o}of t.loadedAttributes)t.attributeData[o]&&(s.attributes[o]=L(t.attributeData[o],r))}}}function Oe(e,t){return e.xmin-=t,e.ymin-=t,e.xmax+=t,e.ymax+=t,e.zmin!=null&&e.zmax!=null&&(e.zmin-=t,e.zmax+=t),e.mmin!=null&&e.mmax!=null&&(e.mmin-=t,e.mmax+=t),e}const De={2:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0]}}},3:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0,0]}}}},I=ne(),y={graphic:null,property:null,oldValue:null,newValue:null};export{pt as default};
