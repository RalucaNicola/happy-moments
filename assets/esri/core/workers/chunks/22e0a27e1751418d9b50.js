"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[9904],{88669:(e,t,n)=>{function r(){return[0,0,0,0]}function o(e,t,n,r){return[e,t,n,r]}function i(e,t){return new Float64Array(e,t,4)}function s(){return o(1,1,1,1)}function a(){return o(1,0,0,0)}function u(){return o(0,1,0,0)}function c(){return o(0,0,1,0)}function l(){return o(0,0,0,1)}n.d(t,{a:()=>i,c:()=>r,f:()=>o});const d=s(),f=a(),p=u(),h=c(),y=l();Object.freeze(Object.defineProperty({__proto__:null,ONES:d,UNIT_W:y,UNIT_X:f,UNIT_Y:p,UNIT_Z:h,ZEROS:[0,0,0,0],clone:function(e){return[e[0],e[1],e[2],e[3]]},create:r,createView:i,fromArray:function(e){const t=[0,0,0,0],n=Math.min(4,e.length);for(let r=0;r<n;++r)t[r]=e[r];return t},fromValues:o,ones:s,unitW:l,unitX:a,unitY:u,unitZ:c,zeros:function(){return[0,0,0,0]}},Symbol.toStringTag,{value:"Module"}))},62357:(e,t,n)=>{n.d(t,{F2:()=>o,Wz:()=>i,t_:()=>s,vW:()=>a});const r=/^-?(\d+(\.\d+)?)\s*((px)|(pt))?$/i;function o(e){return e?e/72*96:0}function i(e){return e?72*e/96:0}function s(e){if("string"==typeof e){const t=e.match(r);if(t){const n=Number(t[1]),r=t[3]&&t[3].toLowerCase(),o="-"===e.charAt(0),s="px"===r?i(n):n;return o?-s:s}return console.warn("screenUtils.toPt: input not recognized!"),null}return e}function a(e=0,t=0){return{x:e,y:t}}},73572:(e,t,n)=>{n.d(t,{AJ:()=>s,If:()=>u,QM:()=>a,k0:()=>i,nu:()=>o,wx:()=>c}),n(22021);var r=n(62357);n(98766),n(88669);const o=2.4;function i(e){return(0,r.Wz)(e*o)}function s(e){return(0,r.F2)(e)/o}function a(e,t,n,o){const{radius:i,fieldOffset:s,field:a}=t,c=Math.round((0,r.F2)(i)),l=new Float64Array(n*o);let d,f=Number.NEGATIVE_INFINITY;const p=function(e,t){return null!=e?"string"==typeof t?t=>-1*+t.readAttribute(e):n=>+n.readAttribute(e)+t:e=>1}(a,s),h=new Set;for(const t of e){const e=t.getCursor();for(;e.next();){const t=e.getObjectId();if(h.has(t))continue;h.add(t);const r=e.readLegacyPointGeometry(),i=128;if(r.x<-i||r.x>=n+i||r.y<-i||r.y>o+i)continue;const s=+p(e),a=Math.max(0,Math.round(r.x)-c),y=Math.max(0,Math.round(r.y)-c),m=Math.min(o,Math.round(r.y)+c),w=Math.min(n,Math.round(r.x)+c);for(let e=y;e<m;e++)for(let t=a;t<w;t++){const o=e*n+t,i=u(r.x-t,r.y-e,c);d=l[o]+=i*s,d>f&&(f=d)}}}return{matrix:l.buffer,max:f}}function u(e,t,n){const r=Math.sqrt(e**2+t**2)/n;return r>1?0:3/(Math.PI*n**2)*(1-r**2)**2}function c(e,t){return"function"==typeof e?e:e?"string"==typeof t?t=>-1*+t[e]:n=>+n[e]+t:()=>1}},47988:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(43697),o=n(3920),i=n(5600),s=(n(75215),n(67676),n(52011));let a=class extends o.r{initialize(){}destroy(){}get supportsTileUpdates(){return!1}get spatialReference(){const e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}};(0,r._)([(0,i.Cb)({readOnly:!0})],a.prototype,"supportsTileUpdates",null),(0,r._)([(0,i.Cb)({constructOnly:!0})],a.prototype,"remoteClient",void 0),(0,r._)([(0,i.Cb)({constructOnly:!0})],a.prototype,"service",void 0),(0,r._)([(0,i.Cb)()],a.prototype,"spatialReference",null),(0,r._)([(0,i.Cb)({constructOnly:!0})],a.prototype,"tileInfo",void 0),(0,r._)([(0,i.Cb)({constructOnly:!0})],a.prototype,"tileStore",void 0),a=(0,r._)([(0,s.j)("esri.views.2d.layers.features.processors.BaseProcessor")],a);const u=a},49904:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var r=n(43697),o=(n(80442),n(70586)),i=(n(92604),n(75215),n(67676),n(20102),n(52011)),s=n(22862),a=n(73572),u=n(16534),c=n(47988),l=n(14867);class d{constructor(e,t){this.offset=e,this.extent=t}}let f=class extends c.Z{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}async update(e,t){const n=t.schema.processors[0];"heatmap"===n.type&&(0,s.Hg)(this._schema,n)&&(e.mesh=!0,this._schema=n)}onTileUpdate(e){for(const t of e.removed)this._tileKeyToFeatureSets.delete(t.key.id)}onTileClear(e){return this._tileKeyToFeatureSets.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:{clear:!0}})}async onTileMessage(e,t,n){this._tileKeyToFeatureSets.has(e.key.id)||this._tileKeyToFeatureSets.set(e.key.id,new Map);const r=this._tileKeyToFeatureSets.get(e.key.id);if(r&&(0,o.pC)(t.addOrUpdate)&&t.addOrUpdate.hasFeatures&&r.set(t.addOrUpdate.instance,t),t.end){const t=[],r=function(e){const t=e.key,n=new Map,r=256,o=u.I_,i=e.tileInfoView.tileInfo.isWrappable;return n.set((0,l.M)(t,-1,-1,i).id,new d([-o,-o],[o-r,o-r,o,o])),n.set((0,l.M)(t,0,-1,i).id,new d([0,-o],[0,o-r,o,o])),n.set((0,l.M)(t,1,-1,i).id,new d([o,-o],[0,o-r,r,o])),n.set((0,l.M)(t,-1,0,i).id,new d([-o,0],[o-r,0,o,o])),n.set((0,l.M)(t,1,0,i).id,new d([o,0],[0,0,r,o])),n.set((0,l.M)(t,-1,1,i).id,new d([-o,o],[o-r,0,o,r])),n.set((0,l.M)(t,0,1,i).id,new d([0,o],[0,0,o,r])),n.set((0,l.M)(t,1,1,i).id,new d([o,o],[0,0,r,r])),n}(e);this._tileKeyToFeatureSets.forEach(((n,i)=>{if(i===e.key.id)n.forEach((e=>(0,o.yw)(e.addOrUpdate,(e=>t.push(e)))));else if(r.has(i)){const e=r.get(i),[s,a]=e.offset;n.forEach((e=>(0,o.yw)(e.addOrUpdate,(e=>{const n=e.transform(s,a,1,1);t.push(n)}))))}}));const i=(0,a.QM)(t,this._schema.mesh,512,512),s={tileKey:e.key.id,intensityInfo:i},c=[i.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",s,{...n,transferList:c})}}onTileError(e,t,n){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},n)}};f=(0,r._)([(0,i.j)("esri.views.2d.layers.features.processors.HeatmapProcessor")],f);const p=f},14867:(e,t,n)=>{function r(e,t,n,r){const o=e.clone(),i=1<<o.level,s=o.col+t,a=o.row+n;return r&&s<0?(o.col=s+i,o.world-=1):s>=i?(o.col=s-i,o.world+=1):o.col=s,o.row=a,o}n.d(t,{M:()=>r})}}]);