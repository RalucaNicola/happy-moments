import{C as _,J as a,hw as t,dA as l,av as d,ka as y,ba as b,p as v,h as m}from"./index-3fca1522.js";class f{constructor(e){this._resourceFactory=e,this._resources=null,this._visible=!0,this._attached=!1}destroy(){this._destroyResources()}get object(){return _(this._resources)?this._resources.object:null}get resources(){return _(this._resources)?this._resources.external:null}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this._syncVisible())}get attached(){return this._attached}set attached(e){e!==this._attached&&(this._attached=e,this._createOrDestroyResources())}recreate(){this.attached&&this._createResources()}recreateGeometry(){if(!this._resourceFactory.recreateGeometry)return void this.recreate();const e=this._resourceFactory.view._stage;if(a(this._resources)||!e)return;const r=this._resources.object;this._resources.external.forEach(s=>{s.type!==t.Mesh&&s.type!==t.Line&&s.type!==t.Point||e.remove(s)}),r.removeAllGeometries(),this._resourceFactory.recreateGeometry(this._resources.external,r,this._resources.layer),this._resources.external.forEach(s=>{s.type!==t.Mesh&&s.type!==t.Line&&s.type!==t.Point||e.add(s)})}_createOrDestroyResources(){this._attached?this._resources||this._createResources():this._destroyResources()}_createResources(){this._destroyResources();const e=this._resourceFactory,r=e.view,s=r._stage;if(!s)return;const o=new l({pickable:!1,updatePolicy:d.SYNC});s.add(o);const i=new y({castShadow:!1}),h=e.createResources(i,o);h.forEach(c=>{s.add(c),c instanceof b&&s.loadImmediate(c)}),s.add(i),o.add(i);const u=e.cameraChanged,n=u?v(()=>r.state.camera,c=>u(c),m):null;this._resources={layer:o,object:i,external:h,cameraHandle:n},this._syncVisible()}_destroyResources(){var r;if(a(this._resources))return;const e=this._resourceFactory.view._stage;e&&(e.remove(this._resources.object),e.remove(this._resources.layer),this._resources.external.forEach(s=>e.remove(s))),this._resources.object.dispose(),(r=this._resources.cameraHandle)==null||r.remove(),this._resourceFactory.destroyResources(this._resources.external),this._resources=null}_syncVisible(){a(this._resources)||(this._resources.object.visible=this._visible)}}export{f as u};
