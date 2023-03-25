import{e as s,y as h,az as w,d as c,b as f,Z as m,aJ as x}from"./index-3fca1522.js";import{q as g}from"./DynamicLayerView3D-e357d8af.js";import{l as P}from"./ExportWMSImageParameters-f5c5076b.js";import"./LayerView3D-97ba5583.js";import"./projectExtentUtils-3c4cd255.js";import"./ImageMaterial-484b2f88.js";import"./LayerView-d64df35c.js";import"./RefreshableLayerView-7e544a95.js";const v=r=>{let e=class extends r{initialize(){this.exportImageParameters=new P({layer:this.layer})}destroy(){this.exportImageParameters=f(this.exportImageParameters)}get exportImageVersion(){var t;return(t=this.exportImageParameters)==null||t.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(t){const{layer:i}=this;if(!t)return Promise.reject(new m("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i}));const{popupEnabled:o}=i;if(!o)return Promise.reject(new m("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:o}));const n=this.createFetchPopupFeaturesQuery(t);if(!n)return Promise.resolve([]);const{extent:p,width:a,height:u,x:d,y}=n;if(!(p&&a&&u))throw new m("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:p,width:a,height:u});return i.fetchFeatureInfo(p,a,u,d,y)}};return s([h()],e.prototype,"exportImageParameters",void 0),s([h({readOnly:!0})],e.prototype,"exportImageVersion",null),s([h()],e.prototype,"layer",void 0),s([h(w)],e.prototype,"timeExtent",void 0),e=s([c("esri.layers.mixins.WMSLayerView")],e),e};let l=class extends v(g){constructor(){super(...arguments),this.type="wms-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new m("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view"))),this.updatingHandles.add(()=>{var r;return(r=this.exportImageParameters)==null?void 0:r.version},()=>{this.updatingHandles.addPromise(this.refreshDebounced())})}createFetchPopupFeaturesQuery(r){const e=this.findExtentInfoAt(r),t=e.extent,i=new x(t[0],t[1],t[2],t[3],this._spatialReference),o=e.imageSize,n=o.width,p=o.height,a=i.width/n;return{extent:i,width:n,height:p,x:Math.round((r.x-i.xmin)/a),y:Math.round((i.ymax-r.y)/a)}}getFetchOptions(){return{timeExtent:this.timeExtent}}};l=s([c("esri.views.3d.layers.WMSLayerView3D")],l);const R=l;export{R as default};
