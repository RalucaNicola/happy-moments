import{s as A,g as C,a_ as I,av as V,lm as P,e as _,y as m,d as E,C as k,ld as d,J as o,b1 as b,Q as R,jS as g,fY as G,gu as O,K as v,cJ as D,bZ as f,cw as l,m0 as M,kb as w,l4 as S,kc as $,b7 as Q,p as N,l1 as U,dI as H,ku as p,bv as j,l6 as z,b9 as J,f as Y,k9 as K,b4 as L,b5 as x,b6 as Z,bI as B,cl as W}from"./index-3fca1522.js";import{t as X}from"./LineVisualElement-451dda47.js";import{u as ee}from"./VisualElementResources-2125ab49.js";class re{constructor(e){this._resourceFactory=e,this._resources=null,this._visible=!0,this._attached=!1,this._renderGroup=P.Outline}destroy(){this._destroyResources()}get resources(){return k(this._resources)?this._resources.external:null}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this._syncGeometriesToRenderer())}get attached(){return this._attached}set attached(e){e!==this._attached&&(this._attached=e,this._createOrDestroyResources())}get renderGroup(){return this._renderGroup}set renderGroup(e){var t;this._renderGroup=e;const r=(t=d(this._resources))==null?void 0:t.layerView;r&&(r.renderGroup=e)}recreate(){this.attached&&this._createResources()}recreateGeometry(){this._resourceFactory.recreateGeometry?o(this._resources)||(this._ensureRenderGeometriesRemoved(),this._resourceFactory.recreateGeometry(this._resources.external),this._syncGeometriesToRenderer()):this.recreate()}_createOrDestroyResources(){this._attached?o(this._resources)&&this._createResources():this._destroyResources()}_createResources(){var s;this._destroyResources();const e=this._resourceFactory.createResources(),r=new c({view:this._resourceFactory.view,renderGroup:this._renderGroup}),t=(s=this._resourceFactory.view.basemapTerrain)==null?void 0:s.overlayManager;this._resources={layerView:new c({view:this._resourceFactory.view,renderGroup:this._renderGroup}),external:e,geometriesAdded:!1},t&&(this._resources.drapeSourceRenderer=t.registerGeometryDrapeSource(r)),this._syncGeometriesToRenderer()}_destroyResources(){var r;if(o(this._resources))return;this._ensureRenderGeometriesRemoved();const e=(r=this._resourceFactory.view.basemapTerrain)==null?void 0:r.overlayManager;e&&e.unregisterDrapeSource(this._resources.layerView),this._resourceFactory.destroyResources(this._resources.external),this._resources=null}_syncGeometriesToRenderer(){this._visible?this._ensureRenderGeometriesAdded():this._ensureRenderGeometriesRemoved()}_ensureRenderGeometriesRemoved(){o(this._resources)||o(this._resources.drapeSourceRenderer)||this._resources.geometriesAdded&&(this._resources.drapeSourceRenderer.removeGeometries(this._resources.external.geometries,b.UPDATE),this._resources.geometriesAdded=!1)}_ensureRenderGeometriesAdded(){o(this._resources)||o(this._resources.drapeSourceRenderer)||this._resources.geometriesAdded||(this._resources.drapeSourceRenderer.addGeometries(this._resources.external.geometries,b.UPDATE),this._resources.geometriesAdded=!0)}}let c=class extends A(C){constructor(n){super(n),this.drapeSourceType=I.Features,this.updatePolicy=V.SYNC,this.renderGroup=P.Outline}};_([m({constructOnly:!0})],c.prototype,"view",void 0),_([m({readOnly:!0})],c.prototype,"drapeSourceType",void 0),_([m()],c.prototype,"renderGroup",void 0),c=_([E("DrapedVisualElementLayerView")],c);class te extends X{constructor({view:e,isDraped:r}){super(e),this._isDraped=!1,this.object3dResources=new ee(this.createObject3DResourceFactory(e)),this.drapedResources=new re(this.createDrapedResourceFactory(e)),this.isDraped=r??!1}get isDraped(){return this._isDraped}set isDraped(e){e!==this._isDraped&&(this._isDraped=e,this.object3dResources.attached=this.attached&&!e,this.drapedResources.attached=this.attached&&e)}get renderGroup(){return this.drapedResources.renderGroup}set renderGroup(e){this.drapedResources.renderGroup=e}createResources(){this.object3dResources.attached=!this._isDraped,this.drapedResources.attached=this._isDraped}destroyResources(){this.object3dResources.attached=!1,this.drapedResources.attached=!1}recreate(){this.object3dResources.recreate(),this.drapedResources.recreate()}recreateGeometry(){this.object3dResources.recreateGeometry(),this.drapedResources.recreateGeometry()}destroy(){this.object3dResources.destroy(),this.drapedResources.destroy(),super.destroy()}updateVisibility(e){this.object3dResources.visible=e,this.drapedResources.visible=e}}class ce extends te{constructor(e){super(e),this._maxSize=0,this._position=R(),this._up=R(),this._right=R(),this._renderOccluded=g.OccludeAndTransparent,this._color=G(1,0,0,1),this._outlineColor=G(0,0,0,1),this._outlineSize=0,this._size=32,this._outlineRenderOccluded=g.Opaque,this.applyProps(e)}createObject3DResourceFactory(e){return{view:e,createResources:r=>this._createObject3DResources(r),destroyResources:r=>this._destroyObject3DResources(r),cameraChanged:()=>this._updateTransformObject3D()}}createDrapedResourceFactory(e){return{view:e,createResources:()=>this._createDrapedResources(),destroyResources:r=>this._destroyDrapedResources(r)}}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateQuadMaterial())}get color(){return this._color}set color(e){O(this._color,e),this._updateQuadMaterial()}get outlineColor(){return this._outlineColor}set outlineColor(e){O(this._outlineColor,e),this._updateOutlineMaterial()}get outlineSize(){return this._outlineSize}set outlineSize(e){const r=this._outlineSize===0!=(e===0);this._outlineSize=e,r?this.recreateGeometry():this._updateOutlineMaterial()}get size(){return this._size}set size(e){e!==this._size&&(this._size=e,this._updateTransform())}get outlineRenderOccluded(){return this._outlineRenderOccluded}set outlineRenderOccluded(e){this._outlineRenderOccluded=e,this._updateOutlineMaterial()}set geometry({previous:e,center:r,next:t}){this._maxSize=Math.min(v(r,e),v(r,t))/3,D(this._up,f(this._up,e,r)),D(this._right,f(this._right,t,r)),l(this._position,r),this.recreateGeometry()}_createObject3DResources(e){const r=new M(this._quadMaterialParameters),t=this._outlineSize===0?void 0:new w(this._outlineMaterialParameters);return this._createObject3DGeometries(e,r,t),{quadMaterial:r,outlineMaterial:t,forEach:s=>{s(r),t&&s(t)}}}_destroyObject3DResources(e){var r;e.quadMaterial.dispose(),(r=e.outlineMaterial)==null||r.dispose()}_createObject3DGeometries(e,r,t){if(S(this._up,$)&&S(this._right,$))return;const s=this._createGeometries(r,t);for(const u of s)e.addGeometry(u);this._updateTransformObject3D(e)}_createDrapedResources(){const e=new M(this._quadMaterialParameters),r=this._outlineSize===0?void 0:new w(this._outlineMaterialParameters),t=this._createGeometries(e,r).map(s=>new Q(s,{boundingInfo:s.boundingInfo}));return this._setTransformDraped(t),{quadMaterial:e,outlineMaterial:r,geometries:t,pixelRatioHandle:N(()=>this.view.state.contentPixelRatio,()=>{this.drapedResources.recreateGeometry()})}}_destroyDrapedResources(e){var r;e.pixelRatioHandle.remove(),e.geometries=[],(r=e.outlineMaterial)==null||r.dispose(),e.quadMaterial.dispose()}_createGeometries(e,r){const{up:t,right:s,corner:u}=this._getVertices(),a=this._quadGeometryData(t,s,u,e);return r?[a,U(r,[t,u,s])]:[a]}_getVertices(){let e=this._up,r=this._right;const t=H(p.get(),e,r);return this.isDraped&&(e=l(p.get(),e),r=l(p.get(),r),e[2]=0,r[2]=0,t[2]=0),{up:e,right:r,corner:t}}_updateTransform(){this.isDraped?this.drapedResources.recreateGeometry():this._updateTransformObject3D()}_updateTransformObject3D(e=d(this.object3dResources.object)){if(!e)return;const r=this.view.state.camera,t=this._size*r.computeScreenPixelSizeAt(this._position),s=Math.min(this._maxSize,t);j(i,this._position),z(i,i,[s,s,s]),e.transformation=i}_setTransformDraped(e){if(e.length===0)return;const{view:{basemapTerrain:{overlayManager:r},state:{contentPixelRatio:t}}}=this,{_position:s,_size:u}=this,a=l(p.get(),s);a[2]=J;const h=se;h.spatialReference=Y(r.renderer.spatialReference),h.x=a[0],h.y=a[1];const T=u*(r.overlayPixelSizeInMapUnits(h)*t),y=Math.min(this._maxSize,T);j(i,a),z(i,i,[y,y,1]);for(const q of e)q.updateTransformation(F=>{K(F,i)})}_quadGeometryData(e,r,t,s){return new L(s,[[x.POSITION,new Z([0,0,0,...r,...e,...t],3,!0)]],[[x.POSITION,[0,1,2,1,2,3]]])}get _quadMaterialParameters(){return{color:this._color,transparent:!0,writeDepth:!1,polygonOffset:!0,renderOccluded:this._renderOccluded}}_updateQuadMaterial(){var e,r;(e=d(this.object3dResources.resources))==null||e.quadMaterial.setParameters(this._quadMaterialParameters),(r=d(this.drapedResources.resources))==null||r.quadMaterial.setParameters(this._quadMaterialParameters)}get _outlineMaterialParameters(){return{color:this._outlineColor,width:this._outlineSize,renderOccluded:this._outlineRenderOccluded}}_updateOutlineMaterial(){var e,r,t,s;(r=(e=d(this.object3dResources.resources))==null?void 0:e.outlineMaterial)==null||r.setParameters(this._outlineMaterialParameters),(s=(t=d(this.drapedResources.resources))==null?void 0:t.outlineMaterial)==null||s.setParameters(this._outlineMaterialParameters)}}const i=B(),se=W(0,0,void 0,null);export{ce as S,te as t};
