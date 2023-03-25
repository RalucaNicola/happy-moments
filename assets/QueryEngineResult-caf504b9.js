import{h_ as Me,h$ as Ce,cE as N,h2 as ye,gb as K,i0 as xe,C as q,i1 as Ne,hF as k,fw as qe,J as G,i2 as Ge,i3 as J,i4 as Pe,i5 as X,aR as Ze,aI as Oe,hC as _e,hA as je,i6 as Be,a7 as Le,g5 as Qe,i7 as Ue,i8 as ne,_ as Fe,de as W,i9 as Y,ia as ke,ib as Je,ic as Xe,id as re,Z as A,ie as Ye,ig as He,ih as oe,ii as le,ij as Ke,ik as We,il as et,aZ as tt}from"./index-3fca1522.js";import{f as it}from"./WhereClause-544968d0.js";import{c as B,D as st,m as at,f as ue,d as ce,T as nt,y as rt,x as ot,z as lt,S as ut,M as ct,v as dt,p as ht}from"./utils-4f7e58a0.js";import{t as Ie}from"./json-48e3ea08.js";const L=[0,0];function Se(a,t){if(!t)return null;if("x"in t){const e={x:0,y:0};return[e.x,e.y]=a(t.x,t.y,L),t.z!=null&&(e.z=t.z),t.m!=null&&(e.m=t.m),e}if("xmin"in t){const e={xmin:0,ymin:0,xmax:0,ymax:0};return[e.xmin,e.ymin]=a(t.xmin,t.ymin,L),[e.xmax,e.ymax]=a(t.xmax,t.ymax,L),t.hasZ&&(e.zmin=t.zmin,e.zmax=t.zmax,e.hasZ=!0),t.hasM&&(e.mmin=t.mmin,e.mmax=t.mmax,e.hasM=!0),e}return"rings"in t?{rings:de(t.rings,a),hasM:t.hasM,hasZ:t.hasZ}:"paths"in t?{paths:de(t.paths,a),hasM:t.hasM,hasZ:t.hasZ}:"points"in t?{points:Ve(t.points,a),hasM:t.hasM,hasZ:t.hasZ}:null}function de(a,t){const e=[];for(const i of a)e.push(Ve(i,t));return e}function Ve(a,t){const e=[];for(const i of a){const s=t(i[0],i[1],[0,0]);e.push(s),i.length>2&&s.push(i[2]),i.length>3&&s.push(i[3])}return e}async function Te(a,t){if(!a||!t)return;const e=Array.isArray(a)?a.map(i=>q(i.geometry)?i.geometry.spatialReference:null).filter(q):[a];await Ne(e.map(i=>({source:i,dest:t})))}const we=Se.bind(null,Me),ve=Se.bind(null,Ce);function O(a,t,e,i){if(!a||(e||(e=t,t=a.spatialReference),!k(t)||!k(e)||N(t,e)))return a;if(ye(t,e)){const s=K(e)?we(a):ve(a);return s.spatialReference=e,s}return xe(Ie,[a],t,e,null,i)[0]}let ft=class{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(t,e,i){if(!t||!t.length||!e||!i||N(e,i))return t;const s={geometries:t,inSpatialReference:e,outSpatialReference:i,resolve:null};return this._jobs.push(s),new Promise(n=>{s.resolve=n,this._timer===null&&(this._timer=setTimeout(this._process,10))})}_process(){this._timer=null;const t=this._jobs.shift();if(!t)return;const{geometries:e,inSpatialReference:i,outSpatialReference:s,resolve:n}=t;ye(i,s)?K(s)?n(e.map(we)):n(e.map(ve)):n(xe(Ie,e,i,s,null,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}};const mt=new ft;function zt(a,t,e){return mt.push(a,t,e)}const gt=new qe({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),he=Object.freeze({}),fe=new W,pt=new W,H=new W,R={esriGeometryPoint:Y,esriGeometryPolyline:ke,esriGeometryPolygon:Je,esriGeometryMultipoint:Xe};function me(a,t,e,i=a.hasZ,s=a.hasM){if(G(t))return null;const n=a.hasZ&&i,o=a.hasM&&s;if(e){const r=J(H,t,a.hasZ,a.hasM,"esriGeometryPoint",e,i,s);return Y(r,n,o)}return Y(t,n,o)}function Q(a,t,e,i,s,n,o=t,r=e){var f,m,d;const l=t&&o,u=e&&r,c=q(i)?"coords"in i?i:i.geometry:null;if(G(c))return null;if(s){let h=Ge(pt,c,t,e,a,s,o,r);return n&&(h=J(H,h,l,u,a,n)),((f=R[a])==null?void 0:f.call(R,h,l,u))??null}if(n){const h=J(H,c,t,e,a,n,o,r);return((m=R[a])==null?void 0:m.call(R,h,l,u))??null}return Pe(fe,c,t,e,o,r),((d=R[a])==null?void 0:d.call(R,fe,l,u))??null}async function $t(a,t,e){const{outFields:i,orderByFields:s,groupByFieldsForStatistics:n,outStatistics:o}=a;if(i)for(let r=0;r<i.length;r++)i[r]=i[r].trim();if(s)for(let r=0;r<s.length;r++)s[r]=s[r].trim();if(n)for(let r=0;r<n.length;r++)n[r]=n[r].trim();if(o)for(let r=0;r<o.length;r++)o[r].onStatisticField&&(o[r].onStatisticField=o[r].onStatisticField.trim());return a.geometry&&!a.outSR&&(a.outSR=a.geometry.spatialReference),yt(a,t,e)}async function yt(a,t,e){var n;if(!a)return null;let{where:i}=a;if(a.where=i=i&&i.trim(),(!i||/^1 *= *1$/.test(i)||t&&t===i)&&(a.where=null),!a.geometry)return a;let s=await _t(a);if(a.distance=0,a.units=null,a.spatialRel==="esriSpatialRelEnvelopeIntersects"){const{spatialReference:o}=a.geometry;s=X(s),s.spatialReference=o}if(s){await Te(s.spatialReference,e),s=xt(s,e);const o=(await Ze(Oe(s)))[0];if(G(o))throw he;const r="quantizationParameters"in a&&((n=a.quantizationParameters)==null?void 0:n.tolerance)||"maxAllowableOffset"in a&&a.maxAllowableOffset||0,l=r&&Re(s,e)?{densificationStep:8*r}:void 0,u=o.toJSON(),c=await O(u,u.spatialReference,e,l);if(!c)throw he;c.spatialReference=e,a.geometry=c}return a}function Re(a,t){if(!a)return!1;const e=a.spatialReference;return(_e(a)||je(a)||Be(a))&&!N(e,t)&&!Le(e,t)}function xt(a,t){const e=a.spatialReference;return Re(a,t)&&_e(a)?{spatialReference:e,rings:[[[a.xmin,a.ymin],[a.xmin,a.ymax],[a.xmax,a.ymax],[a.xmax,a.ymin],[a.xmin,a.ymin]]]}:a}async function _t(a){const{distance:t,units:e}=a,i=a.geometry;if(t==null||"vertexAttributes"in i)return i;const s=i.spatialReference,n=e?gt.fromJSON(e):Qe(s),o=s&&(Ue(s)||K(s))?i:await Te(s,ne).then(()=>O(i,ne));return(await Ft())(o.spatialReference,o,t,n)}async function Ft(){return(await Fe(()=>import("./geometryEngineJSON-1e940afe.js"),["./geometryEngineJSON-1e940afe.js","./geometryEngineBase-e1a33b0a.js","./geometryEngineJSON-3f330436.js","./json-48e3ea08.js"],import.meta.url)).geodesicBuffer}function U(a){return a&&be in a?JSON.parse(JSON.stringify(a,It)):a}const be="_geVersion",It=(a,t)=>a!==be?t:void 0;let St=class{constructor(t,e){this._cache=new re(t),this._invalidCache=new re(e)}get(t,e){const i=`${e.uid}:${t}`,s=this._cache.get(i);if(s)return s;if(this._invalidCache.get(i)!==void 0)return null;try{const n=it.create(t,e);return this._cache.put(i,n),n}catch{return this._invalidCache.put(i,null),null}}};const ee=new St(50,500),D="feature-store:unsupported-query",Ae=" as ",Vt=new Set(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeDate"]);function Mt(a,t){if(!t)return!0;const e=ee.get(t,a);if(!e)throw new A(D,"invalid SQL expression",{where:t});if(!e.isStandardized)throw new A(D,"where clause is not standard",{where:t});return te(a,e.fieldNames,"where clause contains missing fields"),!0}function Ct(a,t,e){if(!t)return!0;const i=ee.get(t,a);if(!i)throw new A(D,"invalid SQL expression",{having:t});if(!i.isAggregate)throw new A(D,"having does not contain a valid aggregate function",{having:t});const s=i.fieldNames;if(te(a,s,"having contains missing fields"),!i.getExpressions().every(n=>{var u;const{aggregateType:o,field:r}=n,l=(u=a.get(r))==null?void 0:u.name;return e.some(c=>{var h;const{onStatisticField:f,statisticType:m}=c;return((h=a.get(f))==null?void 0:h.name)===l&&m.toLowerCase().trim()===o})}))throw new A(D,"expressions in having should also exist in outStatistics",{having:t});return!0}function C(a,t){return a?ee.get(a,t):null}function te(a,t,e,i=!0){const s=[];for(const n of t)if(n!=="*"&&!a.has(n))if(i){const o=De(n);try{const r=C(o,a);if(!r)throw new A(D,"invalid SQL expression",{where:o});if(!r.isStandardized)throw new A(D,"expression is not standard",{clause:r});te(a,r.fieldNames,"expression contains missing fields")}catch(r){const l=r&&r.details;if(l&&(l.clause||l.where))throw r;l&&l.missingFields?s.push(...l.missingFields):s.push(n)}}else s.push(n);if(s.length)throw new A(D,e,{missingFields:s})}function De(a){return a.split(Ae)[0]}function Tt(a){return a.split(Ae)[1]}function Nt(a,t){const e=t.get(a);return!!e&&!Vt.has(e.type)}class Z{constructor(t,e,i){this._fieldDataCache=new Map,this._returnDistinctMap=new Map,this.returnDistinctValues=t.returnDistinctValues??!1,this.fieldsIndex=i,this.featureAdapter=e;const s=t.outFields;if(s&&!s.includes("*")){this.outFields=s;let n=0;for(const o of s){const r=De(o),l=this.fieldsIndex.get(r),u=l?null:C(r,i),c=l?l.name:Tt(o)||"FIELD_EXP_"+n++;this._fieldDataCache.set(o,{alias:c,clause:u})}}}countDistinctValues(t){return this.returnDistinctValues?(t.forEach(e=>this.getAttributes(e)),this._returnDistinctMap.size):t.length}getAttributes(t){const e=this._processAttributesForOutFields(t);return this._processAttributesForDistinctValues(e)}getFieldValue(t,e,i){var o;const s=i?i.name:e;let n=null;return this._fieldDataCache.has(s)?n=(o=this._fieldDataCache.get(s))==null?void 0:o.clause:i||(n=C(e,this.fieldsIndex),this._fieldDataCache.set(s,{alias:s,clause:n})),i?this.featureAdapter.getAttribute(t,s):n==null?void 0:n.calculateValue(t,this.featureAdapter)}getDataValue(t,e){const i=e.normalizationType,s=e.normalizationTotal;let n=e.field&&this.getFieldValue(t,e.field,this.fieldsIndex.get(e.field));if(e.field2&&(n=`${B(n)}${e.fieldDelimiter}${B(this.getFieldValue(t,e.field2,this.fieldsIndex.get(e.field2)))}`,e.field3&&(n=`${n}${e.fieldDelimiter}${B(this.getFieldValue(t,e.field3,this.fieldsIndex.get(e.field3)))}`)),i&&Number.isFinite(n)){const o=i==="field"&&e.normalizationField?this.getFieldValue(t,e.normalizationField,this.fieldsIndex.get(e.normalizationField)):null;n=st(n,i,o,s)}return n}getExpressionValue(t,e,i,s){const n={attributes:this.featureAdapter.getAttributes(t),layer:{fields:this.fieldsIndex.fields}},o=s.createExecContext(n,i);return s.executeFunction(e,o)}getExpressionValues(t,e,i,s){const n={fields:this.fieldsIndex.fields};return t.map(o=>{const r={attributes:this.featureAdapter.getAttributes(o),layer:n},l=s.createExecContext(r,i);return s.executeFunction(e,l)})}validateItem(t,e){var i,s;return this._fieldDataCache.has(e)||this._fieldDataCache.set(e,{alias:e,clause:C(e,this.fieldsIndex)}),((s=(i=this._fieldDataCache.get(e))==null?void 0:i.clause)==null?void 0:s.testFeature(t,this.featureAdapter))??!1}validateItems(t,e){var i,s;return this._fieldDataCache.has(e)||this._fieldDataCache.set(e,{alias:e,clause:C(e,this.fieldsIndex)}),((s=(i=this._fieldDataCache.get(e))==null?void 0:i.clause)==null?void 0:s.testSet(t,this.featureAdapter))??!1}_processAttributesForOutFields(t){const e=this.outFields;if(!e||!e.length)return this.featureAdapter.getAttributes(t);const i={};for(const s of e){const{alias:n,clause:o}=this._fieldDataCache.get(s);i[n]=o?o.calculateValue(t,this.featureAdapter):this.featureAdapter.getAttribute(t,n)}return i}_processAttributesForDistinctValues(t){if(G(t)||!this.returnDistinctValues)return t;const e=this.outFields,i=[];if(e)for(const o of e){const{alias:r}=this._fieldDataCache.get(o);i.push(t[r])}else for(const o in t)i.push(t[o]);const s=`${(e||["*"]).join(",")}=${i.join(",")}`;let n=this._returnDistinctMap.get(s)||0;return this._returnDistinctMap.set(s,++n),n>1?null:t}}class qt{constructor(t,e,i){this.items=t,this.query=e,this.geometryType=i.geometryType,this.hasM=i.hasM,this.hasZ=i.hasZ,this.fieldsIndex=i.fieldsIndex,this.objectIdField=i.objectIdField,this.spatialReference=i.spatialReference,this.featureAdapter=i.featureAdapter}get size(){return this.items.length}createQueryResponseForCount(){const t=new Z(this.query,this.featureAdapter,this.fieldsIndex);if(!this.query.outStatistics)return t.countDistinctValues(this.items);const{groupByFieldsForStatistics:e,having:i,outStatistics:s}=this.query;if(!(e==null?void 0:e.length))return 1;const o=new Map,r=new Map,l=new Set;for(const u of s){const{statisticType:c}=u,f=c!=="exceedslimit"?u.onStatisticField:void 0;if(!r.has(f)){const d=[];for(const h of e){const y=this._getAttributeValues(t,h,o);d.push(y)}r.set(f,this._calculateUniqueValues(d,t.returnDistinctValues))}const m=r.get(f);for(const d in m){const{data:h,items:y}=m[d],I=h.join(",");i&&!t.validateItems(y,i)||l.add(I)}}return l.size}async createQueryResponse(){let t;if(this.query.outStatistics?t=this.query.outStatistics.some(e=>e.statisticType==="exceedslimit")?this._createExceedsLimitQueryResponse(this.query):await this._createStatisticsQueryResponse(this.query):t=this._createFeatureQueryResponse(this.query),this.query.returnQueryGeometry){const e=this.query.geometry;k(this.query.outSR)&&!N(e.spatialReference,this.query.outSR)?t.queryGeometry=U({spatialReference:this.query.outSR,...O(e,e.spatialReference,this.query.outSR)}):t.queryGeometry=U({spatialReference:this.query.outSR,...e})}return t}createSnappingResponse(t,e){const i=this.featureAdapter,s=ge(this.hasZ,this.hasM),{point:n,mode:o}=t,r=typeof t.distance=="number"?t.distance:t.distance.x,l=typeof t.distance=="number"?t.distance:t.distance.y,u={candidates:[]},c=this.geometryType==="esriGeometryPolygon",f=this._getPointCreator(o,this.spatialReference,e),m=new pe(null,0),d=new pe(null,0),h={x:0,y:0,z:0};for(const y of this.items){const I=i.getGeometry(y);if(G(I))continue;const{coords:x,lengths:S}=I;if(m.coords=x,d.coords=x,t.types&j.EDGE){let _=0;for(let F=0;F<S.length;F++){const p=S[F];for(let g=0;g<p;g++,_+=s){const V=m;if(V.coordsIndex=_,g!==p-1){const T=d;T.coordsIndex=_+s;const E=h;wt(h,n,V,T);const w=(n.x-E.x)/r,v=(n.y-E.y)/l,z=w*w+v*v;z<=1&&u.candidates.push(Ye(i.getObjectId(y),f(E),Math.sqrt(z),f(V),f(T)))}}}}if(t.types&j.VERTEX){const _=c?x.length-s:x.length;for(let F=0;F<_;F+=s){const p=m;p.coordsIndex=F;const g=(n.x-p.x)/r,V=(n.y-p.y)/l,T=g*g+V*V;T<=1&&u.candidates.push(He(i.getObjectId(y),f(p),Math.sqrt(T)))}}}return u.candidates.sort((y,I)=>y.distance-I.distance),u}_getPointCreator(t,e,i){const s=q(i)&&!N(e,i)?r=>O(r,e,i):r=>r,{hasZ:n}=this,o=0;return t==="3d"?n?({x:r,y:l,z:u})=>s({x:r,y:l,z:u}):({x:r,y:l})=>s({x:r,y:l,z:o}):({x:r,y:l})=>s({x:r,y:l})}async createSummaryStatisticsResponse(t){const{field:e,valueExpression:i,normalizationField:s,normalizationType:n,normalizationTotal:o,minValue:r,maxValue:l,scale:u}=t,c=this.fieldsIndex.isDateField(e),f=await this._getDataValues({field:e,valueExpression:i,normalizationField:s,normalizationType:n,normalizationTotal:o,scale:u}),m=at({normalizationType:n,normalizationField:s,minValue:r,maxValue:l}),d=this.fieldsIndex.get(e),h={value:.5,fieldType:d==null?void 0:d.type},y=oe(d)?ue({values:f,supportsNullCount:m,percentileParams:h}):ce({values:f,minValue:r,maxValue:l,useSampleStdDev:!n,supportsNullCount:m,percentileParams:h});return nt(y,c)}async createUniqueValuesResponse(t){const{field:e,valueExpression:i,domains:s,returnAllCodedValues:n,scale:o}=t,r=await this._getDataValues({field:e,field2:t.field2,field3:t.field3,fieldDelimiter:t.fieldDelimiter,valueExpression:i,scale:o}),l=rt(r);return ot(l,s,n,t.fieldDelimiter)}async createClassBreaksResponse(t){const{field:e,valueExpression:i,normalizationField:s,normalizationType:n,normalizationTotal:o,classificationMethod:r,standardDeviationInterval:l,minValue:u,maxValue:c,numClasses:f,scale:m}=t,d=await this._getDataValues({field:e,valueExpression:i,normalizationField:s,normalizationType:n,normalizationTotal:o,scale:m}),h=lt(d,{field:e,normalizationField:s,normalizationType:n,normalizationTotal:o,classificationMethod:r,standardDeviationInterval:l,minValue:u,maxValue:c,numClasses:f});return ut(h,r)}async createHistogramResponse(t){const{field:e,valueExpression:i,normalizationField:s,normalizationType:n,normalizationTotal:o,classificationMethod:r,standardDeviationInterval:l,minValue:u,maxValue:c,numBins:f,scale:m}=t,d=await this._getDataValues({field:e,valueExpression:i,normalizationField:s,normalizationType:n,normalizationTotal:o,scale:m});return ct(d,{field:e,normalizationField:s,normalizationType:n,normalizationTotal:o,classificationMethod:r,standardDeviationInterval:l,minValue:u,maxValue:c,numBins:f})}_sortFeatures(t,e,i){if(t.length>1&&e&&e.length)for(const s of e.reverse()){const n=s.split(" "),o=n[0],r=this.fieldsIndex.get(o),l=!!n[1]&&n[1].toLowerCase()==="desc",u=dt(r==null?void 0:r.type,l);t.sort((c,f)=>{const m=i(c,o,r),d=i(f,o,r);return u(m,d)})}}_createFeatureQueryResponse(t){const e=this.items,{geometryType:i,hasM:s,hasZ:n,objectIdField:o,spatialReference:r}=this,{outFields:l,outSR:u,quantizationParameters:c,resultRecordCount:f,resultOffset:m,returnZ:d,returnM:h}=t,y=f!=null&&e.length>(m||0)+f,I=l&&(l.includes("*")?[...this.fieldsIndex.fields]:l.map(x=>this.fieldsIndex.get(x)));return{exceededTransferLimit:y,features:this._createFeatures(t,e),fields:I,geometryType:i,hasM:s&&h,hasZ:n&&d,objectIdFieldName:o,spatialReference:U(u||r),transform:c&&le(c)||null}}_createFeatures(t,e){const i=new Z(t,this.featureAdapter,this.fieldsIndex),{hasM:s,hasZ:n}=this,{orderByFields:o,quantizationParameters:r,returnGeometry:l,returnCentroid:u,maxAllowableOffset:c,resultOffset:f,resultRecordCount:m,returnZ:d=!1,returnM:h=!1}=t,y=n&&d,I=s&&h;let x=[],S=0;const _=[...e];if(this._sortFeatures(_,o,(p,g,V)=>i.getFieldValue(p,g,V)),l||u){const p=le(r)??void 0;if(l&&!u)for(const g of _)x[S++]={attributes:i.getAttributes(g),geometry:Q(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(g),c,p,y,I)};else if(!l&&u)for(const g of _)x[S++]={attributes:i.getAttributes(g),centroid:me(this,this.featureAdapter.getCentroid(g,this),p)};else for(const g of _)x[S++]={attributes:i.getAttributes(g),centroid:me(this,this.featureAdapter.getCentroid(g,this),p),geometry:Q(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(g),c,p,y,I)}}else for(const p of _){const g=i.getAttributes(p);g&&(x[S++]={attributes:g})}const F=f||0;if(m!=null){const p=F+m;x=x.slice(F,Math.min(x.length,p))}return x}_createExceedsLimitQueryResponse(t){let e=!1,i=Number.POSITIVE_INFINITY,s=Number.POSITIVE_INFINITY,n=Number.POSITIVE_INFINITY;for(const o of t.outStatistics??[])if(o.statisticType==="exceedslimit"){i=o.maxPointCount!=null?o.maxPointCount:Number.POSITIVE_INFINITY,s=o.maxRecordCount!=null?o.maxRecordCount:Number.POSITIVE_INFINITY,n=o.maxVertexCount!=null?o.maxVertexCount:Number.POSITIVE_INFINITY;break}if(this.geometryType==="esriGeometryPoint")e=this.items.length>i;else if(this.items.length>s)e=!0;else{const o=ge(this.hasZ,this.hasM),r=this.featureAdapter;e=this.items.reduce((l,u)=>{const c=r.getGeometry(u);return l+(q(c)&&c.coords.length||0)},0)/o>n}return{fields:[{name:"exceedslimit",type:"esriFieldTypeInteger",alias:"exceedslimit",sqlType:"sqlTypeInteger",domain:null,defaultValue:null}],features:[{attributes:{exceedslimit:Number(e)}}]}}async _createStatisticsQueryResponse(t){const e={attributes:{}},i=[],s=new Map,n=new Map,o=new Map,r=new Map,l=new Z(t,this.featureAdapter,this.fieldsIndex),u=t.outStatistics,{groupByFieldsForStatistics:c,having:f,orderByFields:m}=t,d=c&&c.length,h=!!d,y=h?c[0]:null,I=h&&!this.fieldsIndex.get(y);for(const S of u??[]){const{outStatisticFieldName:_,statisticType:F}=S,p=S,g=F!=="exceedslimit"?S.onStatisticField:void 0,V=F==="percentile_disc"||F==="percentile_cont",T=F==="EnvelopeAggregate"||F==="CentroidAggregate"||F==="ConvexHullAggregate",E=h&&d===1&&(g===y||I)&&F==="count";if(h){if(!o.has(g)){const v=[];for(const z of c){const P=this._getAttributeValues(l,z,s);v.push(P)}o.set(g,this._calculateUniqueValues(v,!T&&l.returnDistinctValues))}const w=o.get(g);for(const v in w){const{count:z,data:P,items:ie,itemPositions:ze}=w[v],se=P.join(",");if(!f||l.validateItems(ie,f)){const $=r.get(se)||{attributes:{}};if(T){$.aggregateGeometries||($.aggregateGeometries={});const{aggregateGeometries:b,outStatisticFieldName:M}=await this._getAggregateGeometry(p,ie);$.aggregateGeometries[M]=b}else{let b=null;if(E)b=z;else{const M=this._getAttributeValues(l,g,s),ae=ze.map(Ee=>M[Ee]);b=V&&"statisticParameters"in p?this._getPercentileValue(p,ae):this._getStatisticValue(p,ae,null,l.returnDistinctValues)}$.attributes[_]=b}let $e=0;c.forEach((b,M)=>$.attributes[this.fieldsIndex.get(b)?b:"EXPR_"+ ++$e]=P[M]),r.set(se,$)}}}else if(T){e.aggregateGeometries||(e.aggregateGeometries={});const{aggregateGeometries:w,outStatisticFieldName:v}=await this._getAggregateGeometry(p,this.items);e.aggregateGeometries[v]=w}else{const w=this._getAttributeValues(l,g,s);e.attributes[_]=V&&"statisticParameters"in p?this._getPercentileValue(p,w):this._getStatisticValue(p,w,n,l.returnDistinctValues)}i.push({name:_,alias:_,type:"esriFieldTypeDouble"})}const x=h?Array.from(r.values()):[e];return this._sortFeatures(x,m,(S,_)=>S.attributes[_]),{fields:i,features:x}}async _getAggregateGeometry(t,e){const i=await Fe(()=>import("./geometryEngineJSON-1e940afe.js"),["./geometryEngineJSON-1e940afe.js","./geometryEngineBase-e1a33b0a.js","./geometryEngineJSON-3f330436.js","./json-48e3ea08.js"],import.meta.url),{statisticType:s,outStatisticFieldName:n}=t,{featureAdapter:o,spatialReference:r,geometryType:l,hasZ:u,hasM:c}=this,f=e.map(h=>Q(l,u,c,o.getGeometry(h))),m=i.convexHull(r,f,!0)[0],d={aggregateGeometries:null,outStatisticFieldName:null};if(s==="EnvelopeAggregate"){const h=m?Ke(m):X(i.union(r,f));d.aggregateGeometries={...h,spatialReference:r},d.outStatisticFieldName=n||"extent"}else if(s==="CentroidAggregate"){const h=m?We(m):et(X(i.union(r,f)));d.aggregateGeometries={x:h[0],y:h[1],spatialReference:r},d.outStatisticFieldName=n||"centroid"}else s==="ConvexHullAggregate"&&(d.aggregateGeometries=m,d.outStatisticFieldName=n||"convexHull");return d}_getStatisticValue(t,e,i,s){const{onStatisticField:n,statisticType:o}=t;let r=null;return r=i!=null&&i.has(n)?i.get(n):oe(this.fieldsIndex.get(n))?ue({values:e,returnDistinct:s}):ce({values:s?[...new Set(e)]:e,minValue:null,maxValue:null,useSampleStdDev:!0}),i&&i.set(n,r),r[o==="var"?"variance":o]}_getPercentileValue(t,e){const{onStatisticField:i,statisticParameters:s,statisticType:n}=t,{value:o,orderBy:r}=s,l=this.fieldsIndex.get(i);return ht(e,{value:o,orderBy:r,fieldType:l==null?void 0:l.type,isDiscrete:n==="percentile_disc"})}_getAttributeValues(t,e,i){if(i.has(e))return i.get(e);const s=this.fieldsIndex.get(e),n=this.items.map(o=>t.getFieldValue(o,e,s));return i.set(e,n),n}_getAttributeDataValues(t,e){return this.items.map(i=>t.getDataValue(i,{field:e.field,field2:e.field2,field3:e.field3,fieldDelimiter:e.fieldDelimiter,normalizationField:e.normalizationField,normalizationType:e.normalizationType,normalizationTotal:e.normalizationTotal}))}async _getAttributeExpressionValues(t,e,i){const{arcadeUtils:s}=await tt(),n=s.createFunction(e),o=i&&s.getViewInfo(i);return t.getExpressionValues(this.items,n,o,s)}_calculateUniqueValues(t,e){const i={},s=this.items,n=s.length;for(let o=0;o<n;o++){const r=s[o],l=[];for(const c of t)l.push(c[o]);const u=l.join(",");i[u]==null?i[u]={count:1,data:l,items:[r],itemPositions:[o]}:(e||i[u].count++,i[u].items.push(r),i[u].itemPositions.push(o))}return i}async _getDataValues(t){const e=new Z(this.query,this.featureAdapter,this.fieldsIndex),{valueExpression:i,field:s,normalizationField:n,normalizationType:o,normalizationTotal:r,scale:l}=t,u=i?{viewingMode:"map",scale:l,spatialReference:this.query.outSR||this.spatialReference}:null;return i?this._getAttributeExpressionValues(e,i,u):this._getAttributeDataValues(e,{field:s,field2:t.field2,field3:t.field3,fieldDelimiter:t.fieldDelimiter,normalizationField:n,normalizationType:o,normalizationTotal:r})}}function wt(a,t,e,i){const s=i.x-e.x,n=i.y-e.y,o=s*s+n*n,r=(t.x-e.x)*s+(t.y-e.y)*n,l=Math.min(1,Math.max(0,r/o));a.x=e.x+s*l,a.y=e.y+n*l}function ge(a,t){return a?t?4:3:t?3:2}var j;(function(a){a[a.NONE=0]="NONE",a[a.EDGE=1]="EDGE",a[a.VERTEX=2]="VERTEX"})(j||(j={}));class pe{constructor(t,e){this.coords=t,this.coordsIndex=e}get x(){return this.coords[this.coordsIndex]}get y(){return this.coords[this.coordsIndex+1]}get z(){return this.coords[this.coordsIndex+2]}}export{qt as A,j as D,U as E,he as F,yt as J,zt as M,Ct as a,Nt as b,te as c,Te as f,O as g,C as l,Mt as o,Q as v,$t as z};
