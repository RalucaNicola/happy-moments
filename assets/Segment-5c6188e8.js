import{J as dt,cM as pt,aG as ut,kf as xt,kg as T,jY as _t,kh as mt,ki as yt,kj as ft,kk as vt,kl as gt,km as bt,cl as St,Q as m,kn as O,cw as it,k5 as st,k6 as F,k7 as $,e as a,y as h,d as ot,g as rt,cQ as P,a as wt,C as $t,ko as b,by as N,kp as z,kq as j,kr as Ct,p as kt,dI as G,ks as V,kt as nt,bZ as w,cJ as L,ku as Rt,b$ as It,kv as U,cG as k,f5 as Pt,a7 as Tt,kw as zt,kx as jt}from"./index-22b5b8b0.js";import{t as Mt}from"./LineVisualElement-935c9105.js";import{h as At}from"./elevationInfoUtils-4b7016a2.js";function Zt(e){var r,o;const t="metric";if(dt(e))return t;const i=e.map,s=(i&&"portalItem"in i?(r=i.portalItem)==null?void 0:r.portal:null)??pt.getDefault();switch(((o=s.user)==null?void 0:o.units)??s.units){case t:return t;case"english":return"imperial"}return ut(xt(e.spatialReference),t)}function Lt(e,t){return{type:T(t),value:e,unit:t}}function Yt(e,t){return{type:T(t),value:e,unit:t}}function Xt(e,t){return{type:T(t),value:e,unit:t}}function Bt(e,t,i="arithmetic"){return{type:T(t),value:e,unit:t,rotationType:i}}function Ot(e,t){return Lt(_t(e.value,e.unit,t),t)}Yt(0,"meters");Xt(0,"square-meters");Bt(0,"radians");function Kt(e,t,i,s=2,r="abbr"){return mt(e,Ot(t,i).value,i,s,r)}function te(e,t,i=2,s="abbr"){return yt(e,t.value,t.unit,i,s)}function ee(e,t,i=2,s="abbr"){return ft(e,t.value,t.unit,i,s)}function ie(e,t,i=2,s="abbr"){return vt(e,t.value,t.unit,i,s)}function se(e,t,i=2,s="abbr"){return gt(e,t.value,t.unit,i,s)}function Ft(e,t,i,s){i.projectToRenderScreen(e,D),i.projectToRenderScreen(t,H),st(s,H,D),F(s,s)}function Gt(e,t,i,s,r=m()){const o=it(Y,e);return o[2]=At(s,o,t,i)||0,s.renderCoordsHelper.toRenderCoords(o,t,r),r}function oe(e,t,i,s){return s.type==="2d"?(R.x=e[0],R.y=e[1],R.spatialReference=t,s.toScreen(R)):(Gt(e,t,i,s,Y),s.state.camera.projectToScreen(Y,M),bt(M[0],M[1]))}const R=St(0,0,0,null),Y=m(),D=$(),H=$(),M=O();let Vt=e=>({vnodeSelector:"",properties:void 0,children:void 0,text:e.toString(),domNode:null}),at=(e,t,i)=>{for(let s=0,r=t.length;s<r;s++){let o=t[s];Array.isArray(o)?at(e,o,i):o!=null&&o!==!1&&(typeof o=="string"&&(o=Vt(o)),i.push(o))}};function I(e,t,i){if(Array.isArray(t))i=t,t=void 0;else if(t&&(typeof t=="string"||t.hasOwnProperty("vnodeSelector"))||i&&(typeof i=="string"||i.hasOwnProperty("vnodeSelector")))throw new Error("h called with invalid arguments");let s,r;return i&&i.length===1&&typeof i[0]=="string"?s=i[0]:i&&(r=[],at(e,i,r),r.length===0&&(r=void 0)),{vnodeSelector:e,properties:t,children:r,text:s===""?void 0:s,domNode:null}}let _=class extends rt{get startPosition(){return[this.startX,this.startY]}set startPosition(e){this._set("startX",e[0]),this._set("startY",e[1])}get endPosition(){return[this.endX,this.endY]}set endPosition(e){this._set("endX",e[0]),this._set("endY",e[1])}constructor(e){super(e),this.startX=0,this.startY=0,this.endX=0,this.endY=0,this.width=1,this.color=[0,0,0,.5],this.visible=!0}get _strokeStyle(){const e=this.color;return`rgba(${e[0]}, ${e[1]}, ${e[2]}, ${e[3]})`}get _lineCap(){return"round"}render(){const{height:e,left:t,top:i,width:s,x1:r,x2:o,y1:u,y2:c}=this._calculateCoordinates(Q),l=`stroke: ${this._strokeStyle}; stroke-width: ${this.width}; stroke-linecap: ${this._lineCap};`;return I("div",{classes:{"esri-line-overlay-item":!0},styles:{left:t+"px",top:i+"px",width:s+"px",height:e+"px",visibility:this.visible?"visible":"hidden"}},[I("svg",{width:s,height:e},[I("line",{x1:r,y1:u,x2:o,y2:c,style:l})])])}renderCanvas(e){if(!this.visible)return;e.strokeStyle=this._strokeStyle,e.lineWidth=this.width,e.lineCap=this._lineCap;const t=this._calculateCoordinates(Q);e.beginPath(),e.moveTo(t.left+t.x1,t.top+t.y1),e.lineTo(t.left+t.x2,t.top+t.y2),e.stroke()}_calculateCoordinates(e){const t=Math.min(this.startX,this.endX),i=Math.max(this.startX,this.endX),s=Math.min(this.startY,this.endY),r=Math.max(this.startY,this.endY),o=this.width;return e.left=t-o,e.top=s-o,e.width=i-t+2*o,e.height=Math.max(20,r-s+2*o),e.x1=this.startX-t+o,e.y1=this.startY-s+o,e.x2=this.endX-t+o,e.y2=this.endY-s+o,e}};a([h()],_.prototype,"startX",void 0),a([h()],_.prototype,"startY",void 0),a([h()],_.prototype,"endX",void 0),a([h()],_.prototype,"endY",void 0),a([h()],_.prototype,"startPosition",null),a([h()],_.prototype,"endPosition",null),a([h()],_.prototype,"width",void 0),a([h()],_.prototype,"color",void 0),a([h()],_.prototype,"visible",void 0),a([h({readOnly:!0})],_.prototype,"_strokeStyle",null),_=a([ot("esri.views.overlay.LineOverlayItem")],_);const Q={left:0,top:0,width:0,height:0,x1:0,y1:0,x2:0,y2:0},qt=_,E={bottom:"esri-text-overlay-item-anchor-bottom","bottom-right":"esri-text-overlay-item-anchor-bottom-right","bottom-left":"esri-text-overlay-item-anchor-bottom-left",top:"esri-text-overlay-item-anchor-top","top-right":"esri-text-overlay-item-anchor-top-right","top-left":"esri-text-overlay-item-anchor-top-left",center:"esri-text-overlay-item-anchor-center",right:"esri-text-overlay-item-anchor-right",left:"esri-text-overlay-item-anchor-left"};let p=class extends rt{get position(){return[this.x,this.y]}set position(e){this._set("x",e[0]),this._set("y",e[1])}get _textShadowColor(){return this.backgroundColor}get _textShadow(){const e=this._textShadowColor.toCss(!1);return`0 0 ${this._textShadowSize}px ${e}`}get _padding(){return .5*this.fontSize}get _borderRadius(){return this._padding}constructor(e){super(e),this.x=0,this.y=0,this.text="-",this.fontSize=14,this.anchor="center",this.visible=!0,this.backgroundColor=new P([0,0,0,.6]),this.textColor=new P([255,255,255]),this._textShadowSize=1}render(){return I("div",{classes:this._cssClasses(),styles:{left:Math.floor(this.x)+"px",top:Math.floor(this.y)+"px",visibility:this.visible?"visible":"hidden",fontSize:this.fontSize+"px",lineHeight:this.fontSize+"px",backgroundColor:this.backgroundColor.toCss(!0),color:this.textColor.toCss(!0),padding:this._padding+"px",borderRadius:this._borderRadius+"px",textShadow:this._textShadow}},[this.text])}renderCanvas(e){if(!this.visible)return;const t=e.font.replace(/^(.*?)px/,"");e.font=`${this.fontSize}px ${t}`;const i=this._padding,s=this._borderRadius,r=e.measureText(this.text).width,o=this.fontSize,u=Jt[this.anchor];e.textAlign="center",e.textBaseline="middle";const c=r+2*i,l=o+2*i,x=this.x+u.x*c,C=this.y+u.y*l;this._roundedRect(e,x,C,c,l,s),e.fillStyle=this.backgroundColor.toCss(!0),e.fill();const q=this.x+(u.x+.5)*c,J=this.y+(u.y+.5)*l;this._renderTextShadow(e,this.text,q,J),e.fillStyle=this.textColor.toCss(!0),e.fillText(this.text,q,J)}_renderTextShadow(e,t,i,s){e.lineJoin="miter",e.fillStyle=`rgba(${this._textShadowColor.r}, ${this._textShadowColor.g}, ${this._textShadowColor.b}, ${1/X.length})`;const r=this._textShadowSize;for(const[o,u]of X)e.fillText(t,i+r*o,s+r*u)}_roundedRect(e,t,i,s,r,o){e.beginPath(),e.moveTo(t,i+o),e.arcTo(t,i,t+o,i,o),e.lineTo(t+s-o,i),e.arcTo(t+s,i,t+s,i+o,o),e.lineTo(t+s,i+r-o),e.arcTo(t+s,i+r,t+s-o,i+r,o),e.lineTo(t+o,i+r),e.arcTo(t,i+r,t,i+r-o,o),e.closePath()}_cssClasses(){const e={"esri-text-overlay-item":!0};for(const t in E)e[E[t]]=this.anchor===t;return e}};a([h()],p.prototype,"x",void 0),a([h()],p.prototype,"y",void 0),a([h()],p.prototype,"position",null),a([h()],p.prototype,"text",void 0),a([h()],p.prototype,"fontSize",void 0),a([h()],p.prototype,"anchor",void 0),a([h()],p.prototype,"visible",void 0),a([h()],p.prototype,"backgroundColor",void 0),a([h()],p.prototype,"textColor",void 0),a([h()],p.prototype,"_textShadowSize",void 0),a([h()],p.prototype,"_textShadowColor",null),a([h()],p.prototype,"_textShadow",null),a([h()],p.prototype,"_padding",null),a([h()],p.prototype,"_borderRadius",null),p=a([ot("esri.views.overlay.TextOverlayItem")],p);const Jt={bottom:{x:-.5,y:-1,textAlign:"center",textBaseline:"bottom"},"bottom-left":{x:0,y:-1,textAlign:"left",textBaseline:"bottom"},"bottom-right":{x:-1,y:-1,textAlign:"right",textBaseline:"bottom"},center:{x:-.5,y:-.5,textAlign:"center",textBaseline:"middle"},left:{x:0,y:-.5,textAlign:"left",textBaseline:"middle"},right:{x:-1,y:-.5,textAlign:"right",textBaseline:"middle"},top:{x:-.5,y:0,textAlign:"center",textBaseline:"top"},"top-left":{x:0,y:0,textAlign:"left",textBaseline:"top"},"top-right":{x:-1,y:0,textAlign:"right",textBaseline:"top"}},X=[];for(let t=0;t<360;t+=360/16)X.push([Math.cos(Math.PI*t/180),Math.sin(Math.PI*t/180)]);const Nt=p;class re extends Mt{constructor(t){super(t.view),this._handles=new wt,this._textItem=null,this._calloutItem=null,this._showCallout=!0,this._showText=!0,this._geometry=null,this._text="-",this._fontSize=14,this._backgroundColor=new P([0,0,0,.6]),this._textColor=new P([255,255,255]),this._distance=25,this._anchor="right",this.updatePositionOnCameraMove=!0,this.applyProps(t)}get geometry(){return this._geometry}set geometry(t){this._geometry=t,this.updateLabelPosition()}get textItem(){return this._textItem}get text(){return this._text}set text(t){this._text=t,this.attached&&(this._textItem.text=this._text)}get fontSize(){return this._fontSize}set fontSize(t){this._fontSize=t,this.attached&&(this._textItem.fontSize=this._fontSize)}get backgroundColor(){return this._backgroundColor}set backgroundColor(t){this._backgroundColor=t,this.attached&&(this._textItem.backgroundColor=this._backgroundColor)}get textColor(){return this._textColor}set textColor(t){this._textColor=t,this.attached&&(this._textItem.textColor=this._textColor)}get distance(){return this._distance}set distance(t){this._distance!==t&&(this._distance=t,this.updateLabelPosition())}get anchor(){return this._anchor}set anchor(t){this._anchor!==t&&(this._anchor=t,this.updateLabelPosition())}overlaps(t){var i;return!!this.attached&&this.textItem.visible&&t.textItem.visible&&!!((i=this.view.overlay)!=null&&i.overlaps(this._textItem,t.textItem))}updateLabelPosition(){if(!this.attached)return;this._showText=!1,this._showCallout=!1;const{geometry:t,view:i,visible:s}=this;if($t(t)&&i._stage)switch(t.type){case"point":if(!this._computeLabelPositionFromPoint(t.point,y))break;if(t.callout){const r=i.state.camera,o=t.callout.distance;b(d,d,[0,t.callout.offset]),r.renderToScreen(d,y),N(n,0,1),z(n,n,o*r.pixelRatio),b(n,n,d),r.renderToScreen(n,v),this._showCallout=this._updatePosition(y,v)}else this._textItem.position=[y[0],y[1]],this._textItem.anchor="center";this._showText=!0;break;case"corner":if(!this._computeLabelPositionFromCorner(t,this._distance,y,v))break;this._showCallout=this._updatePosition(y,v),this._showText=!0;break;case"segment":{if(!this._computeLabelPositionFromSegment(t,this._distance,this._anchor,y,v))break;this._showText=!0;const r=this._updatePosition(y,v);this._showCallout=t.callout!==!1&&r,this._showCallout||(this._textItem.anchor="center")}}this.updateVisibility(s)}_computeLabelPositionFromPoint(t,i){const s=this.view.state.camera;return s.projectToRenderScreen(t,d),!(d[2]<0||d[2]>1)&&(s.renderToScreen(d,i),!0)}_computeLabelPositionFromCorner(t,i,s,r){if(!t)return!1;const o=this.view.state.camera;return W(t.left,1,o,f),j(f,f),W(t.right,0,o,tt),b(n,f,tt),j(n,n),F(n,n),o.projectToRenderScreen(t.left.endRenderSpace,d),!(d[2]<0||d[2]>1)&&(o.renderToScreen(d,s),z(n,n,i*o.pixelRatio),b(n,n,d),o.renderToScreen(n,r),!0)}_computeLabelPositionFromSegment(t,i,s,r,o){if(!t)return!1;const u=t.segment,c=this.view.state.camera;Ft(u.startRenderSpace,u.endRenderSpace,c,f),N(n,-f[1],f[0]);let l=!1;switch(s){case"top":l=n[1]<0;break;case"bottom":l=n[1]>0;break;case"left":l=n[0]>0;break;case"right":l=n[0]<0}if(l&&j(n,n),Ct(n)===0)switch(s){case"top":n[1]=1;break;case"bottom":n[1]=-1;break;case"left":n[0]=-1;break;case"right":n[0]=1}return u.eval(Ht[t.sampleLocation],et),c.projectToRenderScreen(et,d),!(d[2]<0||d[2]>1)&&(c.renderToScreen(d,r),z(n,n,i*c.pixelRatio),b(n,n,d),c.renderToScreen(n,o),!0)}_updatePosition(t,i){if(i){const s=i[0]-t[0],r=i[1]-t[1];return this._textItem.position=[i[0],i[1]],this._textItem.anchor=Math.abs(s)>Math.abs(r)?s>0?"left":"right":r>0?"top":"bottom",this._calloutItem.startPosition=[t[0],t[1]],this._calloutItem.endPosition=[i[0],i[1]],!0}return this._textItem.position=[t[0],t[1]],this._textItem.anchor="center",!1}createResources(){var t;this._textItem=new Nt({visible:!0,text:this._text,fontSize:this._fontSize,backgroundColor:this._backgroundColor,textColor:this._textColor}),this._calloutItem=new qt({visible:!0,width:2}),this.updateLabelPosition(),(t=this.view.overlay)==null||t.items.addMany([this._textItem,this._calloutItem]),this.updatePositionOnCameraMove&&this._handles.add(kt(()=>this.view.state.camera,()=>this.updateLabelPosition()))}destroyResources(){this.view.overlay&&!this.view.overlay.destroyed&&this.view.overlay.items.removeMany([this._textItem,this._calloutItem]),this._handles.removeAll()}updateVisibility(t){this._textItem.visible=this._showText&&t,this._calloutItem.visible=this._showCallout&&t}}function W(e,t,i,s){e.eval(t,A,K),G(Z,A,K),i.projectToRenderScreen(A,ht),i.projectToRenderScreen(Z,lt),st(s,Dt,Ut),F(s,s)}function ne(e){switch(e){case"top":return"bottom";case"right":return"left";case"bottom":return"top";case"left":return"right"}}const A=m(),Z=m(),K=m(),f=V(),tt=V(),n=V(),et=m(),d=$(),y=O(),v=O(),ht=$(),Ut=ht,lt=$(),Dt=lt,Ht={start:0,center:.5,end:1};class ct{constructor(t=m(),i=m()){this.startRenderSpace=t,this.endRenderSpace=i,this.type="euclidean"}eval(t,i,s){return nt(i,this.startRenderSpace,this.endRenderSpace,t),s&&(w(s,this.endRenderSpace,this.startRenderSpace),L(s,s)),i}createRenderGeometry(t,i){const s=[],r=[],o=(c,l)=>{const x=B;w(x,c,t),s.push([x[0],x[1],x[2]]),r.push([l[0],l[1],l[2]])},u=i.worldUpAtPosition(this.eval(.5,g),Rt.get());return o(this.startRenderSpace,u),o(this.endRenderSpace,u),{points:s,normals:r}}static fromPositionAndVector(t,i,s=1){return It(g,i,s),G(g,t,g),new ct(U(t),U(g))}}class ae{_projectIn(t,i){this._project?k(t,this.renderSpatialReference,i,this._pcpf):it(i,t)}constructor(t,i,s){this.startRenderSpace=t,this.endRenderSpace=i,this.renderSpatialReference=s,this.type="geodesic",this._start=m(),this._end=m(),this._pcpf=Pt(s),this._project=Tt(s,this._pcpf),this._projectIn(t,this._start),this._projectIn(i,this._end)}eval(t,i,s){if(this._project)if(s){const r=B;zt(this._start,this._end,t,i,r),G(S,i,r),k(i,this._pcpf,i,this.renderSpatialReference),k(S,this._pcpf,S,this.renderSpatialReference),w(s,S,i),L(s,s)}else jt(this._start,this._end,t,i),k(i,this._pcpf,i,this.renderSpatialReference);else nt(i,this._start,this._end,t),s&&(w(s,this._end,this._start),L(s,s));return i}createRenderGeometry(t,i){const s=[],r=[],o=(c,l)=>{const x=S;w(x,c,t),s.push([x[0],x[1],x[2]]),r.push([l[0],l[1],l[2]])};for(let c=0;c<128;++c){const l=c/127,x=g,C=B;this.eval(l,x),i.worldUpAtPosition(x,C),o(x,C)}return{points:s,normals:r}}}const g=m(),B=m(),S=m();export{ne as I,te as M,Yt as a,Kt as b,Gt as c,ct as f,re as g,Zt as i,se as j,ae as m,Xt as o,Lt as r,oe as u,Ot as v,ee as w,ie as y};
