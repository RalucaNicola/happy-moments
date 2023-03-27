import{e as n,y as l,az as j,d as z,f as w,Z as v,J as x,C as T,P,dH as L,j0 as O,j1 as _}from"./index-4a6abd83.js";import{n as G}from"./LayerView3D-b7afca63.js";import{c as J}from"./TiledLayerView3D-c4e34d9f.js";import{v as S,J as M}from"./rasterProjectionHelper-146bf442.js";import{s as $}from"./popupUtils-bc502c54.js";import{u as k}from"./LayerView-9055c868.js";import{i as A}from"./RefreshableLayerView-a57cd71c.js";import{a as V}from"./drapedUtils-4ac21887.js";const W=i=>{let e=class extends i{constructor(){super(...arguments),this._rasterFieldPrefix="Raster.",this.layer=null,this.view=null,this.tileInfo=null}get fullExtent(){return this._getfullExtent()}_getfullExtent(){return this.projectFullExtent(this.view.spatialReference)}get hasTilingEffects(){return this.layer.renderer&&"dynamicRangeAdjustment"in this.layer.renderer&&this.layer.renderer.dynamicRangeAdjustment}get datumTransformation(){return S(w(this.layer.fullExtent),this.view.spatialReference,!0)}supportsSpatialReference(t){return!!this.projectFullExtent(t)}projectFullExtent(t){const a=w(this.layer.fullExtent),r=S(a,t,!1);return M(a,t,r)}async fetchPopupFeatures(t,a){const{layer:r}=this;if(!t)throw new v("imageryTileLayerView:fetchPopupFeatures","Nothing to fetch without area",{layer:r});const{popupEnabled:u}=r,y=$(r,a);if(!u||x(y))throw new v("imageryTileLayerView:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:u,popupTemplate:y});const p=[],{value:o,magdirValue:s}=await r.identify(t,{timeExtent:this.timeExtent});let g="";if(o&&o.length){g=r.type==="imagery-tile"&&r.hasStandardTime()&&o[0]!=null?o.map(b=>r.getStandardTimeValue(b)).join(", "):o.join(", ");const d={ObjectId:0};d["Raster.ServicePixelValue"]=g;const I=r.rasterInfo.attributeTable;if(T(I)){const{fields:b,features:F}=I,E=b.find(({name:h})=>h.toLowerCase()==="value"),f=E?F.find(h=>String(h.attributes[E.name])===g):null;if(f)for(const h in f.attributes)f.attributes.hasOwnProperty(h)&&(d[this._rasterFieldPrefix+h]=f.attributes[h])}const R=r.rasterInfo.dataType;R!=="vector-magdir"&&R!=="vector-uv"||(d["Raster.Magnitude"]=s==null?void 0:s[0],d["Raster.Direction"]=s==null?void 0:s[1]);const c=new P(this.fullExtent.clone(),null,d);c.layer=r,c.sourceLayer=c.layer,p.push(c)}return p}};return n([l()],e.prototype,"layer",void 0),n([l(j)],e.prototype,"timeExtent",void 0),n([l()],e.prototype,"view",void 0),n([l()],e.prototype,"fullExtent",null),n([l()],e.prototype,"tileInfo",void 0),n([l({readOnly:!0})],e.prototype,"hasTilingEffects",null),n([l()],e.prototype,"datumTransformation",null),e=n([z("esri.views.layers.ImageryTileLayerView")],e),e};let m=class extends W(A(J(G(k)))){constructor(){super(...arguments),this.type="imagery-tile-3d",this.isAlignedMapTile=!0}initialize(){this.layer.increaseRasterJobHandlerUsage(),this.fullExtent==null&&this.addResolvingPromise(Promise.reject(new v("layerview:spatial-reference-incompatible","The layer extent cannot be projected to the view's spatial reference",{layer:this.layer})));const i=L(()=>{var e,t;return(t=(e=this.view)==null?void 0:e.basemapTerrain)==null?void 0:t.tilingSchemeLocked}).then(()=>{const e=this.view.basemapTerrain.tilingScheme,t=this.layer.tileInfo,a=["png","png24","png32","jpg","mixed"].includes(t.format)&&e.compatibleWith(t);this.isAlignedMapTile=a;const r=a?t:e.toTileInfo();this.tileInfo=r,this.updatingHandles.add(()=>[this.layer.renderer,this.layer.interpolation,this.layer.bandIds,this.layer.multidimensionalDefinition,this.layer.multidimensionalSubset,this.layer.rasterFunction,this.timeExtent],()=>this.refresh())});this.addResolvingPromise(i)}destroy(){this.layer.decreaseRasterJobHandlerUsage(),this.view=null}get _blankTile(){const i=document.createElement("canvas"),e=i.getContext("2d"),[t,a]=this.tileInfo.size;return i.width=t,i.height=a,e.clearRect(0,0,t,a),e.getImageData(0,0,t,a)}get imageFormatIsOpaque(){return this.layer.tileInfo.format==="jpg"}get hasMixedImageFormats(){return this.layer.tileInfo.format==="mixed"}get dataLevelRange(){const i=this.tileInfo.lods,e=this.layer.tileInfo.lods,t=i[0].scale,a=e[e.length-1].scale;return this.levelRangeFromScaleRange(t,a)}_getfullExtent(){return this.projectFullExtent(this.view.basemapTerrain&&T(this.view.basemapTerrain.spatialReference)?this.view.basemapTerrain.spatialReference:this.view.spatialReference)}async fetchTile(i,e,t,a){const r=this.tileInfo,u=this._canSymbolizeInWebGL(),y={tileInfo:r,requestRawData:u,signal:w(a.signal),timeExtent:this.timeExtent,requestAsImageElement:this.isAlignedMapTile},p=await this.layer.fetchTile(i,e,t,y);if(p instanceof HTMLImageElement)return p;let o=p&&p.pixelBlock;if(x(o))return this._blankTile;if(!u&&(o=await this.layer.applyRenderer(p),x(o)))return this._blankTile;const s=new O([i,e,t],o,r.size[0],r.size[1]);return u?(s.symbolizerRenderer=this.layer.symbolizer.rendererJSON,s.symbolizerParameters=this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(i)),s.transformGrid=p.transformGrid):s.isRendereredSource=!0,s.interpolation=this.layer.interpolation,s.bandIds=this.layer.bandIds,s}_getSymbolizerOptions(i){const e=this.tileInfo.lodAt(i).resolution;return{pixelBlock:null,isGCS:this.view.basemapTerrain&&T(this.view.basemapTerrain.spatialReference)?this.view.basemapTerrain.spatialReference.isGeographic:this.view.spatialReference.isGeographic,resolution:{x:e,y:e},bandIds:this.layer.bandIds}}ensureSymbolizerParameters(i){this._canSymbolizeInWebGL()&&JSON.stringify(i.symbolizerRenderer)!==JSON.stringify(this.layer.symbolizer.rendererJSON)&&(i.symbolizerParameters=this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(i.lij[0])))}createFetchPopupFeaturesQueryGeometry(i,e){return V(i,e,this.view)}refresh(){this.emit("data-changed")}async doRefresh(){this.suspended||this.emit("data-changed")}_canSymbolizeInWebGL(){return _("3d").supportsTextureFloat&&this.layer.symbolizer.canRenderInWebGL}};n([l({readOnly:!0})],m.prototype,"_blankTile",null),n([l({readOnly:!0})],m.prototype,"imageFormatIsOpaque",null),n([l({readOnly:!0})],m.prototype,"hasMixedImageFormats",null),n([l({readOnly:!0})],m.prototype,"dataLevelRange",null),m=n([z("esri.views.3d.layers.ImageryTileLayerView3D")],m);const Z=m;export{Z as default};