import{C as y,na as U,J as v,Z as d,i1 as q,g7 as I,nb as b,gP as Q,nc as L,aX as A,gG as E,$ as O,E as W,ef as N,cA as J,cq as X,e6 as R,e5 as B,aA as V,d$ as k}from"./index-3fca1522.js";class G{constructor(e,t=null){if(this.tile=e,y(t)&&y(e)){const i=e.extent;this._samplerData=new U(t,i)}}get zmin(){return y(this._samplerData)?this._samplerData.data.minValue:0}get zmax(){return y(this._samplerData)?this._samplerData.data.maxValue:0}sample(e,t){if(v(this._samplerData))return;const{safeWidth:i,data:s,dx:l,dy:n,y1:a,x0:o}=this._samplerData,{width:r,values:c,noDataValue:p}=s,h=P(n*(a-t),0,i),u=P(l*(e-o),0,i),D=Math.floor(h),C=Math.floor(u),g=D*r+C,F=g+r,x=c[g],_=c[F],M=c[g+1],z=c[F+1];if(x!==p&&_!==p&&M!==p&&z!==p){const S=u-C,$=x+(M-x)*S;return $+(_+(z-_)*S-$)*(h-D)}}}function P(f,e,t){return f<e?e:f>t?t:f}class ee{async queryAll(e,t,i){if(!(e=i&&i.ignoreInvisibleLayers?e.filter(r=>r.visible):e.slice()).length)throw new d("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");const s=T.fromGeometry(t);let l=!1;i&&i.returnSampleInfo||(l=!0);const n={...w,...i,returnSampleInfo:!0},a=await this.query(e[e.length-1],s,n),o=await this._queryAllContinue(e,a,n);return o.geometry=o.geometry.export(),l&&delete o.sampleInfo,o}async query(e,t,i){if(!e)throw new d("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||!(t instanceof T)&&t.type!=="point"&&t.type!=="multipoint"&&t.type!=="polyline")throw new d("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");const s={...w,...i},l=new H(e,t.spatialReference,s),n=s.signal;return await e.load({signal:n}),await this._createGeometryDescriptor(l,t,n),await this._selectTiles(l,n),await this._populateElevationTiles(l,n),this._sampleGeometryWithElevation(l),this._createQueryResult(l,n)}async createSampler(e,t,i){if(!e)throw new d("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||t.type!=="extent")throw new d("elevation-query:invalid-extent","Invalid or undefined extent");const s={...w,...i};return this._createSampler(e,t,s)}async createSamplerAll(e,t,i){if(!(e=i&&i.ignoreInvisibleLayers?e.filter(n=>n.visible):e.slice()).length)throw new d("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");if(!t||t.type!=="extent")throw new d("elevation-query:invalid-extent","Invalid or undefined extent");const s={...w,...i,returnSampleInfo:!0},l=await this._createSampler(e[e.length-1],t,s);return this._createSamplerAllContinue(e,t,l,s)}async _createSampler(e,t,i,s){const l=i.signal;await e.load({signal:l});const n=t.spatialReference,a=e.tileInfo.spatialReference;n.equals(a)||(await q([{source:n,dest:a}],{signal:l}),t=I(t,a));const o=new K(e,t,i,s);return await this._selectTiles(o,l),await this._populateElevationTiles(o,l),new b(o.elevationTiles,o.layer.tileInfo,o.options.noDataValue)}async _createSamplerAllContinue(e,t,i,s){if(e.pop(),!e.length)return i;const l=i.samplers.map(r=>Q(r.extent)),n=await this._createSampler(e[e.length-1],t,s,l);if(n.samplers.length===0)return i;const a=i.samplers.concat(n.samplers),o=new b(a,s.noDataValue);return this._createSamplerAllContinue(e,t,o,s)}async _queryAllContinue(e,t,i){const s=e.pop(),l=t.geometry.coordinates,n=t.sampleInfo;L(n);const a=[],o=[];for(let h=0;h<l.length;h++){const u=n[h];u.demResolution>=0?u.source||(u.source=s):e.length&&(a.push(l[h]),o.push(h))}if(!e.length||a.length===0)return t;const r=t.geometry.clone(a),c=await this.query(e[e.length-1],r,i),p=c.sampleInfo;if(!p)throw new Error("no sampleInfo");return o.forEach((h,u)=>{l[h].z=c.geometry.coordinates[u].z,n[h].demResolution=p[u].demResolution}),this._queryAllContinue(e,t,i)}async _createQueryResult(e,t){const i=await e.geometry.project(e.outSpatialReference,t);L(i);const s={geometry:i.export(),noDataValue:e.options.noDataValue};return e.options.returnSampleInfo&&(s.sampleInfo=this._extractSampleInfo(e)),e.geometry.coordinates.forEach(l=>{l.tile=null,l.elevationTile=null}),s}async _createGeometryDescriptor(e,t,i){let s;const l=e.layer.tileInfo.spatialReference;if(t instanceof T?s=await t.project(l,i):(await q([{source:t.spatialReference,dest:l}],{signal:i}),s=I(t,l)),!s)throw new d("elevation-query:spatial-reference-mismatch",`Cannot query elevation in '${t.spatialReference.wkid}' on an elevation service in '${l.wkid}'`);e.geometry=T.fromGeometry(s)}async _selectTiles(e,t){const i=e.options.demResolution;if(e.type==="geometry"&&this._preselectOutsideLayerExtent(e),typeof i=="number")this._selectTilesClosestResolution(e);else if(i==="finest-contiguous")await this._selectTilesFinestContiguous(e,t);else{if(i!=="auto")throw new d("elevation-query:invalid-dem-resolution",`Invalid dem resolution value '${i}', expected a number, "finest-contiguous" or "auto"`);await this._selectTilesAuto(e,t)}}_preselectOutsideLayerExtent(e){if(v(e.layer.fullExtent))return;const t=new G(null);t.sample=()=>e.options.noDataValue,e.outsideExtentTile=t;const i=e.layer.fullExtent;e.geometry.coordinates.forEach(s=>{const l=s.x,n=s.y;(l<i.xmin||l>i.xmax||n<i.ymin||n>i.ymax)&&(s.elevationTile=t)})}_selectTilesClosestResolution(e){const t=e.layer.tileInfo,i=this._findNearestDemResolutionLODIndex(t,e.options.demResolution);e.selectTilesAtLOD(i)}_findNearestDemResolutionLODIndex(e,t){const i=t/A(e.spatialReference);let s=e.lods[0],l=0;for(let n=1;n<e.lods.length;n++){const a=e.lods[n];Math.abs(a.resolution-i)<Math.abs(s.resolution-i)&&(s=a,l=n)}return l}async _selectTilesFinestContiguous(e,t){const i=Z(e.layer.tileInfo,e.options.minDemResolution);await this._selectTilesFinestContiguousAt(e,i,t)}async _selectTilesFinestContiguousAt(e,t,i){const s=e.layer;if(e.selectTilesAtLOD(t),t<0)return;const l=s.tilemapCache,n=e.getTilesToFetch();try{if(l)await E(Promise.all(n.map(a=>l.fetchAvailability(a.level,a.row,a.col,{signal:i}))),i);else if(await this._populateElevationTiles(e,i),!e.allElevationTilesFetched())throw e.clearElevationTiles(),new d("elevation-query:has-unavailable-tiles")}catch(a){O(a),await this._selectTilesFinestContiguousAt(e,t-1,i)}}async _populateElevationTiles(e,t){const i=e.getTilesToFetch(),s={},l=e.options.cache,n=e.options.noDataValue,a=i.map(async o=>{if(o.id==null)return;const r=`${e.layer.uid}:${o.id}:${n}`,c=y(l)?l.get(r):null,p=y(c)?c:await e.layer.fetchTile(o.level,o.row,o.col,{noDataValue:n,signal:t});y(l)&&l.put(r,p),s[o.id]=new G(o,p)});await E(W(a),t),e.populateElevationTiles(s)}async _selectTilesAuto(e,t){this._selectTilesAutoFinest(e),this._reduceTilesForMaximumRequests(e);const i=e.layer.tilemapCache;if(!i)return this._selectTilesAutoPrefetchUpsample(e,t);const s=e.getTilesToFetch(),l={},n=s.map(async a=>{const o=new N(null,0,0,0,J()),r=await X(i.fetchAvailabilityUpsample(a.level,a.row,a.col,o,{signal:t}));r.ok!==!1?a.id!=null&&(l[a.id]=o):O(r.error)});await E(Promise.all(n),t),e.remapTiles(l)}_reduceTilesForMaximumRequests(e){const t=e.layer.tileInfo;let i=0;const s={},l=o=>{o.id!=null&&(o.id in s?s[o.id]++:(s[o.id]=1,i++))},n=o=>{if(o.id==null)return;const r=s[o.id];r===1?(delete s[o.id],i--):s[o.id]=r-1};e.forEachTileToFetch(l,n);let a=!0;for(;a&&(a=!1,e.forEachTileToFetch(o=>{i<=e.options.maximumAutoTileRequests||(n(o),t.upsampleTile(o)&&(a=!0),l(o))},n),a););}_selectTilesAutoFinest(e){const t=Z(e.layer.tileInfo,e.options.minDemResolution);e.selectTilesAtLOD(t,e.options.maximumAutoTileRequests)}async _selectTilesAutoPrefetchUpsample(e,t){const i=e.layer.tileInfo;await this._populateElevationTiles(e,t);let s=!1;e.forEachTileToFetch((l,n)=>{i.upsampleTile(l)?s=!0:n()}),s&&await this._selectTilesAutoPrefetchUpsample(e,t)}_sampleGeometryWithElevation(e){e.geometry.coordinates.forEach(t=>{const i=t.elevationTile;let s=e.options.noDataValue;if(i){const l=i.sample(t.x,t.y);y(l)?s=l:t.elevationTile=null}t.z=s})}_extractSampleInfo(e){const t=e.layer.tileInfo,i=A(t.spatialReference);return e.geometry.coordinates.map(s=>{let l=-1;return s.elevationTile&&s.elevationTile!==e.outsideExtentTile&&(l=t.lodAt(s.elevationTile.tile.level).resolution*i),{demResolution:l}})}}class T{export(){return this._exporter(this.coordinates,this.spatialReference)}clone(e){const t=new T;return t.geometry=this.geometry,t.spatialReference=this.spatialReference,t.coordinates=e||this.coordinates.map(i=>i.clone()),t._exporter=this._exporter,t}async project(e,t){if(this.spatialReference.equals(e))return this.clone();await q([{source:this.spatialReference,dest:e}],{signal:t});const i=new R({spatialReference:this.spatialReference,points:this.coordinates.map(a=>[a.x,a.y])}),s=I(i,e);if(!s)return null;const l=this.coordinates.map((a,o)=>{const r=a.clone(),c=s.points[o];return r.x=c[0],r.y=c[1],r}),n=this.clone(l);return n.spatialReference=e,n}static fromGeometry(e){const t=new T;if(t.geometry=e,t.spatialReference=e.spatialReference,e instanceof T)t.coordinates=e.coordinates.map(i=>i.clone()),t._exporter=(i,s)=>{const l=e.clone(i);return l.spatialReference=s,l};else switch(e.type){case"point":{const i=e,{hasZ:s,hasM:l}=i;t.coordinates=s&&l?[new m(i.x,i.y,i.z,i.m)]:s?[new m(i.x,i.y,i.z)]:l?[new m(i.x,i.y,null,i.m)]:[new m(i.x,i.y)],t._exporter=(n,a)=>e.hasM?new V(n[0].x,n[0].y,n[0].z,n[0].m,a):new V(n[0].x,n[0].y,n[0].z,a);break}case"multipoint":{const i=e,{hasZ:s,hasM:l}=i;t.coordinates=s&&l?i.points.map(n=>new m(n[0],n[1],n[2],n[3])):s?i.points.map(n=>new m(n[0],n[1],n[2])):l?i.points.map(n=>new m(n[0],n[1],null,n[2])):i.points.map(n=>new m(n[0],n[1])),t._exporter=(n,a)=>e.hasM?new R({points:n.map(o=>[o.x,o.y,o.z,o.m]),hasZ:!0,hasM:!0,spatiaReference:a}):new R(n.map(o=>[o.x,o.y,o.z]),a);break}case"polyline":{const i=e,s=[],l=[],{hasZ:n,hasM:a}=e;let o=0;for(const r of i.paths)if(l.push([o,o+r.length]),o+=r.length,n&&a)for(const c of r)s.push(new m(c[0],c[1],c[2],c[3]));else if(n)for(const c of r)s.push(new m(c[0],c[1],c[2]));else if(a)for(const c of r)s.push(new m(c[0],c[1],null,c[2]));else for(const c of r)s.push(new m(c[0],c[1]));t.coordinates=s,t._exporter=(r,c)=>{const p=e.hasM?r.map(u=>[u.x,u.y,u.z,u.m]):r.map(u=>[u.x,u.y,u.z]),h=l.map(u=>p.slice(u[0],u[1]));return new B({paths:h,hasM:e.hasM,hasZ:!0,spatialReference:c})};break}}return t}}class m{constructor(e,t,i=null,s=null,l=null,n=null){this.x=e,this.y=t,this.z=i,this.m=s,this.tile=l,this.elevationTile=n}clone(){return new m(this.x,this.y,this.z,this.m)}}class j{constructor(e,t){this.layer=e,this.options=t}}class H extends j{constructor(e,t,i){super(e,i),this.outSpatialReference=t,this.type="geometry"}selectTilesAtLOD(e){if(e<0)this.geometry.coordinates.forEach(t=>{t.tile=null});else{const t=this.layer.tileInfo,i=t.lods[e].level;this.geometry.coordinates.forEach(s=>{s.tile=t.tileAt(i,s.x,s.y)})}}allElevationTilesFetched(){return!this.geometry.coordinates.some(e=>!e.elevationTile)}clearElevationTiles(){for(const e of this.geometry.coordinates)e.elevationTile!==this.outsideExtentTile&&(e.elevationTile=null)}populateElevationTiles(e){var t;for(const i of this.geometry.coordinates)!i.elevationTile&&((t=i.tile)!=null&&t.id)&&(i.elevationTile=e[i.tile.id])}remapTiles(e){var t;for(const i of this.geometry.coordinates){const s=(t=i.tile)==null?void 0:t.id;i.tile=s?e[s]:null}}getTilesToFetch(){var i;const e={},t=[];for(const s of this.geometry.coordinates){const l=s.tile;if(!l)continue;const n=(i=s.tile)==null?void 0:i.id;s.elevationTile||!n||e[n]||(e[n]=l,t.push(l))}return t}forEachTileToFetch(e){for(const t of this.geometry.coordinates)t.tile&&!t.elevationTile&&e(t.tile,()=>{t.tile=null})}}class K extends j{constructor(e,t,i,s){super(e,i),this.type="extent",this.elevationTiles=[],this._candidateTiles=[],this._fetchedCandidates=new Set,this.extent=t.intersection(e.fullExtent),this.maskExtents=s}selectTilesAtLOD(e,t){const i=this._maximumLodForRequests(t),s=Math.min(i,e);s<0?this._candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(s)}_maximumLodForRequests(e){const t=this.layer.tileInfo;if(!e)return t.lods.length-1;const i=this.extent;if(v(i))return-1;for(let s=t.lods.length-1;s>=0;s--){const l=t.lods[s],n=l.resolution*t.size[0],a=l.resolution*t.size[1];if(Math.ceil(i.width/n)*Math.ceil(i.height/a)<=e)return s}return-1}allElevationTilesFetched(){return this._candidateTiles.length===this.elevationTiles.length}clearElevationTiles(){this.elevationTiles.length=0,this._fetchedCandidates.clear()}populateElevationTiles(e){for(const t of this._candidateTiles){const i=t.id&&e[t.id];i&&(this._fetchedCandidates.add(t),this.elevationTiles.push(i))}}remapTiles(e){this._candidateTiles=this._uniqueNonOverlappingTiles(this._candidateTiles.map(t=>e[t.id]))}getTilesToFetch(){return this._candidateTiles}forEachTileToFetch(e,t){const i=this._candidateTiles;this._candidateTiles=[],i.forEach(s=>{if(this._fetchedCandidates.has(s))return void(t&&t(s));let l=!1;e(s,()=>l=!0),l?t&&t(s):this._candidateTiles.push(s)}),this._candidateTiles=this._uniqueNonOverlappingTiles(this._candidateTiles,t)}_uniqueNonOverlappingTiles(e,t){const i={},s=[];for(const n of e){const a=n.id;a&&!i[a]?(i[a]=n,s.push(n)):t&&t(n)}const l=s.sort((n,a)=>n.level-a.level);return l.filter((n,a)=>{for(let o=0;o<a;o++){const r=l[o].extent;if(r&&n.extent&&k(r,n.extent))return t&&t(n),!1}return!0})}_selectCandidateTilesCoveringExtentAt(e){this._candidateTiles.length=0;const t=this.extent;if(v(t))return;const i=this.layer.tileInfo,s=i.lods[e],l=i.tileAt(s.level,t.xmin,t.ymin),n=l.extent;if(v(n))return;const a=s.resolution*i.size[0],o=s.resolution*i.size[1],r=Math.ceil((t.xmax-n[0])/a),c=Math.ceil((t.ymax-n[1])/o);for(let p=0;p<c;p++)for(let h=0;h<r;h++){const u=new N(null,l.level,l.row-p,l.col+h);i.updateTileInfo(u),this._tileIsMasked(u)||this._candidateTiles.push(u)}}_tileIsMasked(e){return!!this.maskExtents&&this.maskExtents.some(t=>e.extent&&k(t,e.extent))}}function Z(f,e=0){let t=f.lods.length-1;if(e>0){const i=e/A(f.spatialReference),s=f.lods.findIndex(l=>l.resolution<i);s===0?t=0:s>0&&(t=s-1)}return t}const w={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0};export{ee as ElevationQuery,T as GeometryDescriptor,Z as getFinestLodIndex};
