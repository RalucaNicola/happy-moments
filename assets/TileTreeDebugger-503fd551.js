import{e as r,g as z,cP as M,P as $,C as g,cQ as j,cR as x,cS as O,cT as A,J as L,y as p,d as T,cU as P}from"./index-22b5b8b0.js";const k=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]];let a=class extends z{constructor(s){super(s),this.updating=!1,this.enablePolygons=!0,this.enableLabels=!0,this._polygons=new Map,this._labels=new Map,this._enabled=!0}initialize(){this._symbols=k.map(s=>new M({color:[s[0],s[1],s[2],.6],outline:{color:"black",width:1}})),this.update()}destroy(){this._enabled=!1,this.clear()}get enabled(){return this._enabled}set enabled(s){this._enabled!==s&&(this._enabled=s,this.update())}update(){if(!this._enabled)return void this.clear();const s=e=>{if(g(e.label))return e.label;let l=e.lij.toString();return g(e.loadPriority)&&(l+=` (${e.loadPriority})`),l},h=this.getTiles(),y=new Array,d=new Set((this._labels.size,this._labels.keys()));h.forEach((e,l)=>{const t=e.lij.toString();d.delete(t);const S=e.lij[0],u=e.geometry;if(this.enablePolygons&&!this._polygons.has(t)){const i=new $({geometry:u,symbol:this._symbols[S%this._symbols.length]});this._polygons.set(t,i),y.push(i)}if(this.enableLabels){const i=s(e),_=l/(h.length-1),b=P(0,200,_),w=P(20,6,_)/.75,m=g(e.loadPriority)&&e.loadPriority>=h.length,v=new j([b,m?0:b,m?0:b]),f=this.view.type==="3d"?()=>new x({verticalOffset:{screenLength:40/.75},callout:{type:"line",color:"white",border:{color:"black"}},symbolLayers:[new O({text:i,halo:{color:"white",size:1/.75},material:{color:v},size:w})]}):()=>new A({text:i,haloColor:"white",haloSize:1/.75,color:v,size:w}),n=this._labels.get(t);if(n){const o=f();(L(n.symbol)||JSON.stringify(o)!==JSON.stringify(n.symbol))&&(n.symbol=o)}else{const o=new $({geometry:u.extent.center,symbol:f()});this._labels.set(t,o),y.push(o)}}});const c=new Array;d.forEach(e=>{const l=this._polygons.get(e);l!=null&&(c.push(l),this._polygons.delete(e));const t=this._labels.get(e);t!=null&&(c.push(t),this._labels.delete(e))}),this.view.graphics.removeMany(c),this.view.graphics.addMany(y)}clear(){this.view.graphics.removeMany(Array.from(this._polygons.values())),this.view.graphics.removeMany(Array.from(this._labels.values())),this._polygons.clear(),this._labels.clear()}};r([p({constructOnly:!0})],a.prototype,"view",void 0),r([p({readOnly:!0})],a.prototype,"updating",void 0),r([p()],a.prototype,"enabled",null),a=r([T("esri.views.support.TileTreeDebugger")],a);export{a as b};
