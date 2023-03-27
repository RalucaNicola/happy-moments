import{J as w,C as v}from"./index-22b5b8b0.js";import{a as A,b as I,d as x}from"./PointCloudUniqueValueRenderer-36db8770.js";import{w as O,l as R,c as S,I as V}from"./I3SBinaryReader-b7e43de8.js";function T(l,o,d,c){const{rendererJSON:f,isRGBRenderer:p}=l;let r=null,s=null;if(o&&p)r=o;else if(o&&(f==null?void 0:f.type)==="pointCloudUniqueValueRenderer"){s=A.fromJSON(f);const e=s.colorUniqueValueInfos;r=new Uint8Array(3*c);const a=m(s.fieldTransformType);for(let t=0;t<c;t++){const i=(a?a(o[t]):o[t])+"";for(let n=0;n<e.length;n++)if(e[n].values.includes(i)){r[3*t]=e[n].color.r,r[3*t+1]=e[n].color.g,r[3*t+2]=e[n].color.b;break}}}else if(o&&(f==null?void 0:f.type)==="pointCloudStretchRenderer"){s=I.fromJSON(f);const e=s.stops;r=new Uint8Array(3*c);const a=m(s.fieldTransformType);for(let t=0;t<c;t++){const i=a?a(o[t]):o[t],n=e.length-1;if(i<e[0].value)r[3*t]=e[0].color.r,r[3*t+1]=e[0].color.g,r[3*t+2]=e[0].color.b;else if(i>=e[n].value)r[3*t]=e[n].color.r,r[3*t+1]=e[n].color.g,r[3*t+2]=e[n].color.b;else for(let u=1;u<e.length;u++)if(i<e[u].value){const b=(i-e[u-1].value)/(e[u].value-e[u-1].value);r[3*t]=e[u].color.r*b+e[u-1].color.r*(1-b),r[3*t+1]=e[u].color.g*b+e[u-1].color.g*(1-b),r[3*t+2]=e[u].color.b*b+e[u-1].color.b*(1-b);break}}}else if(o&&(f==null?void 0:f.type)==="pointCloudClassBreaksRenderer"){s=x.fromJSON(f);const e=s.colorClassBreakInfos;r=new Uint8Array(3*c);const a=m(s.fieldTransformType);for(let t=0;t<c;t++){const i=a?a(o[t]):o[t];for(let n=0;n<e.length;n++)if(i>=e[n].minValue&&i<=e[n].maxValue){r[3*t]=e[n].color.r,r[3*t+1]=e[n].color.g,r[3*t+2]=e[n].color.b;break}}}else{r=new Uint8Array(3*c);for(let e=0;e<r.length;e++)r[e]=255}if(d&&s&&s.colorModulation){const e=s.colorModulation.minValue,a=s.colorModulation.maxValue,t=.3;for(let i=0;i<c;i++){const n=d[i],u=n>=a?1:n<=e?t:t+(1-t)*(n-e)/(a-e);r[3*i]=u*r[3*i],r[3*i+1]=u*r[3*i+1],r[3*i+2]=u*r[3*i+2]}}return r}function U(l,o){if(l.encoding==null||l.encoding===""){const d=O(o,l);if(w(d.vertexAttributes.position))return;const c=R(o,d.vertexAttributes.position),f=d.header.fields,p=[f.offsetX,f.offsetY,f.offsetZ],r=[f.scaleX,f.scaleY,f.scaleZ],s=c.length/3,e=new Float64Array(3*s);for(let a=0;a<s;a++)e[3*a]=c[3*a]*r[0]+p[0],e[3*a+1]=c[3*a+1]*r[1]+p[1],e[3*a+2]=c[3*a+2]*r[2]+p[2];return e}if(l.encoding==="lepcc-xyz")return S(o).result}function F(l,o,d){return v(l)&&l.attributeInfo.useElevation?o?$(o,d):null:v(l)&&l.attributeInfo.storageInfo?V(l.attributeInfo.storageInfo,l.buffer,d):null}function $(l,o){const d=new Float64Array(o);for(let c=0;c<o;c++)d[c]=l[3*c+2];return d}function N(l,o,d,c,f){const p=l.length/3;let r=0;for(let s=0;s<p;s++){let e=!0;for(let a=0;a<c.length&&e;a++){const{filterJSON:t}=c[a],i=f[a].values[s];switch(t.type){case"pointCloudValueFilter":{const n=t.mode==="exclude";t.values.includes(i)===n&&(e=!1);break}case"pointCloudBitfieldFilter":{const n=C(t.requiredSetBits),u=C(t.requiredClearBits);(i&n)===n&&!(i&u)||(e=!1);break}case"pointCloudReturnFilter":{const n=15&i,u=i>>>4&15,b=u>1,k=n===1,y=n===u;let h=!1;for(const g of t.includedReturns)if(g==="last"&&y||g==="firstOfMany"&&k&&b||g==="lastOfMany"&&y&&b||g==="single"&&!b){h=!0;break}h||(e=!1);break}}}e&&(d[r]=s,l[3*r]=l[3*s],l[3*r+1]=l[3*s+1],l[3*r+2]=l[3*s+2],o[3*r]=o[3*s],o[3*r+1]=o[3*s+1],o[3*r+2]=o[3*s+2],r++)}return r}function m(l){return l==null||l==="none"?null:l==="low-four-bit"?o=>15&o:l==="high-four-bit"?o=>(240&o)>>4:l==="absolute-value"?o=>Math.abs(o):l==="modulo-ten"?o=>o%10:null}function C(l){let o=0;for(const d of l||[])o|=1<<d;return o}export{F as a,U as c,$ as d,T as f,N as m};
