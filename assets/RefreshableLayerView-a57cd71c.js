import{e as s,y as t,d,aU as h,q as l,k as o}from"./index-4a6abd83.js";const y=r=>{let e=class extends r{initialize(){this.handles.add(h(()=>this.layer,"refresh",i=>{this.doRefresh(i.dataChanged).catch(a=>{l(a)||o.getLogger(this.declaredClass).error(a)})}),"RefreshableLayerView")}};return s([t()],e.prototype,"layer",void 0),e=s([d("esri.layers.mixins.RefreshableLayerView")],e),e};export{y as i};