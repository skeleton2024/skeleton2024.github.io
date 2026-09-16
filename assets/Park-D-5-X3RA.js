var is=Object.defineProperty;var rs=(n,e,t)=>e in n?is(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Et=(n,e,t)=>rs(n,typeof e!="symbol"?e+"":e,t);import{f as Nt,V as A,P as os,C as De,F as le,g as Gt,c as Ve,j as o,r as m,b as ue,h as Ye,i as It,S as as,k as gt,Q as ct,B as Ut,M as ut,E as ls,l as Dt,I as Bt,m as cs,O as xt,n as Ot,T as us,o as vt,p as et,L as hs,q as fs,t as ds,v as Wt,w as ps,N as ms,x as gs,y as xs,z as vs,A as bs,G as Ms,H as ys,J as _e,U as Ce,K as Oe,W as ht,X as ft,Y as je,Z as ws,_ as Ss,$ as Ts,a0 as js,a1 as _t,a2 as Es,a3 as Ct,a4 as Pt,a5 as Ds,a6 as _s,a7 as Cs,a8 as Ps,a9 as Rs,aa as As,ab as Rt,a as qe,ac as zs,ad as ks,ae as Ls,af as Fs,ag as Ns,ah as Gs,ai as Vt,aj as Is,ak as Us,al as Bs,u as Ht,am as Os}from"./three-8bHLiiKS.js";import{R as ce,C as bt,P as Ws,u as Vs,a as Hs}from"./physics-BHR2wfz5.js";import{m as Pe,w as ae,i as Se}from"./index-BwkIVPyW.js";import"./react-CWunD31Z.js";const Be=new A;function ne(n,e,t,s,i,r){const a=2*Math.PI*i/4,l=Math.max(r-2*i,0),h=Math.PI/4;Be.copy(e),Be[s]=0,Be.normalize();const c=.5*a/(a+l),u=1-Be.angleTo(n)/h;return Math.sign(Be[t])===1?u*c:l/(a+l)+c+c*(1-u)}class tt extends Nt{constructor(e=1,t=1,s=1,i=2,r=.1){const a=i*2+1;if(r=Math.min(e/2,t/2,s/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:s,segments:i,radius:r},a===1)return;const l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;const h=new A,c=new A,u=new A(e,t,s).divideScalar(2).subScalar(r),f=this.attributes.position.array,p=this.attributes.normal.array,d=this.attributes.uv.array,b=f.length/6,g=new A,M=.5/a;for(let T=0,v=0;T<f.length;T+=3,v+=2)switch(h.fromArray(f,T),c.copy(h),c.x-=Math.sign(c.x)*M,c.y-=Math.sign(c.y)*M,c.z-=Math.sign(c.z)*M,c.normalize(),f[T+0]=u.x*Math.sign(h.x)+c.x*r,f[T+1]=u.y*Math.sign(h.y)+c.y*r,f[T+2]=u.z*Math.sign(h.z)+c.z*r,p[T+0]=c.x,p[T+1]=c.y,p[T+2]=c.z,Math.floor(T/b)){case 0:g.set(1,0,0),d[v+0]=ne(g,c,"z","y",r,s),d[v+1]=1-ne(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),d[v+0]=1-ne(g,c,"z","y",r,s),d[v+1]=1-ne(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),d[v+0]=1-ne(g,c,"x","z",r,e),d[v+1]=ne(g,c,"z","x",r,s);break;case 3:g.set(0,-1,0),d[v+0]=1-ne(g,c,"x","z",r,e),d[v+1]=1-ne(g,c,"z","x",r,s);break;case 4:g.set(0,0,1),d[v+0]=1-ne(g,c,"x","y",r,e),d[v+1]=1-ne(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),d[v+0]=ne(g,c,"x","y",r,e),d[v+1]=1-ne(g,c,"y","x",r,t);break}}static fromJSON(e){return new tt(e.width,e.height,e.depth,e.segments,e.radius)}}function H(n){const e=Math.sin(n*127.1+311.7)*43758.5453;return e-Math.floor(e)}function R(n,e){return .6+3.1*Math.exp(-((n+12)**2+(e+22)**2)/175)+.65*Math.sin(n/13)*Math.cos(e/17)}function Mt(n){return 37.7+2.1*Math.sin(n*3)+1.7*Math.cos(n*5)+.7*Math.sin(n*9)}function Zt(n,e){const t=Math.atan2(e/.8,n),s=Math.hypot(n,e/.8),i=Mt(t);return R(n,e)-Math.max(0,s-i+3)*.94}const Zs=[[-18,17],[-27,12],[-29,-2],[-19,-11],[-7,-14],[10,-7],[22,1],[26,13],[19,23],[2,26],[-10,22]],dt=new Gt(Zs.map(([n,e])=>new A(n,R(n,e)+.035,e)),!0,"catmullrom",.25),Ks=dt.getPoints(200);function yt(n,e){let t=1e3;for(const s of Ks)t=Math.min(t,(n-s.x)**2+(e-s.z)**2);return Math.sqrt(t)}function Qs(){const n=new os(96,82,128,110);n.rotateX(-Math.PI/2);const e=n.attributes.position,t=[],s=new De;for(let i=0;i<e.count;i++){const r=e.getX(i),a=e.getZ(i),l=Zt(r,a),h=Math.atan2(a/.8,r),c=Mt(h),u=Math.hypot(r,a/.8),f=u-c+3;e.setY(i,l),s.set(f>0?"#dec698":"#6e935e");const p=.97+.045*Math.sin(r*.3)*Math.cos(a*.4)+H(i)*.035;s.multiplyScalar(p),t.push(s.r,s.g,s.b)}return n.setAttribute("color",new le(t,3)),n.computeVertexNormals(),n}function qs(){const n=[],e=[],t=[],s=[],i=new De;for(let a=0;a<=320;a++){const l=a/320,h=dt.getPoint(l),c=dt.getTangent(l),u=new A(-c.z,0,c.x).normalize();for(let f=0;f<=8;f++){const p=f/4-1,d=2.5+.16*Math.sin(a*.37),b=h.x+u.x*d*p,g=h.z+u.z*d*p;if(n.push(b,R(b,g)+.07,g),s.push(f/8,l*30),i.set(f===0||f===8?"#aaa66c":f===3||f===5?"#c4ad7a":"#d7be8c"),e.push(i.r,i.g,i.b),a<320&&f<8){const M=a*9+f;t.push(M,M+1,M+9,M+1,M+10,M+9)}}}const r=new Ve;return r.setAttribute("position",new le(n,3)),r.setAttribute("color",new le(e,3)),r.setAttribute("uv",new le(s,2)),r.setIndex(t),r.computeVertexNormals(),r}const Kt="#eddbb3",pt="#785137",Te="#293d3b",Xs=new tt(1,1,1,2,.04),at=new Map;function Qt(n,e=.86){const t=n+e;return at.has(t)||at.set(t,new gt({color:n,roughness:e})),at.get(t)}function z({p:n=[0,0,0],s:e=[1,1,1],c:t=Kt,r:s=[0,0,0],roughness:i=.86}){return o.jsx("mesh",{geometry:Xs,material:Qt(t,i),position:n,scale:e,rotation:s,castShadow:!0,receiveShadow:!0})}function ie({p:n=[0,0,0],r:e=.3,top:t,h:s=1,c:i=pt,rot:r=[0,0,0],n:a=12}){return o.jsx("mesh",{position:n,rotation:r,material:Qt(i),castShadow:!0,receiveShadow:!0,children:o.jsx("cylinderGeometry",{args:[t??e,e,s,a]})})}function de({text:n,p:e,width:t=4}){const s=m.useMemo(()=>{const i=document.createElement("canvas");i.width=768,i.height=192;const r=i.getContext("2d");r.fillStyle="#e9d8ad",r.fillRect(0,0,768,192),r.strokeStyle="#91643c",r.lineWidth=10,r.strokeRect(10,10,748,172),r.fillStyle="#483d2c",r.textAlign="center",r.textBaseline="middle",r.font='600 58px "Microsoft YaHei", sans-serif',r.fillText(n,384,99,700);const a=new It(i);return a.colorSpace=as,a},[n]);return m.useEffect(()=>()=>s.dispose(),[s]),o.jsxs("mesh",{position:e,castShadow:!0,children:[o.jsx("boxGeometry",{args:[t,t/4,.12]}),o.jsx("meshStandardMaterial",{map:s,roughness:1})]})}function Ys({wheels:n,cargo:e,paint:t="#c46737"}){return o.jsxs("group",{children:[o.jsx(z,{p:[0,.18,0],s:[1.55,.52,2.7],c:t,roughness:.38}),o.jsx(z,{p:[0,.62,.28],s:[1.4,.65,1.5],c:t,roughness:.38}),o.jsx(z,{p:[0,.65,-.5],s:[1.2,.4,.08],r:[-.16,0,0],c:"#52716f",roughness:.22}),o.jsx(z,{p:[0,.66,1.06],s:[1.18,.4,.08],c:"#35514e",roughness:.22}),[-.72,.72].map(s=>o.jsxs("group",{children:[o.jsx(z,{p:[s,.66,.28],s:[.05,.43,1.15],c:"#597671"}),o.jsx(z,{p:[s,.64,.2],s:[.065,.5,.06],c:"#d99d61"}),o.jsx(z,{p:[s*1.2,.54,-.4],s:[.25,.18,.25],c:Te})]},s)),o.jsx(z,{p:[0,1.01,.2],s:[1.53,.15,1.65],c:"#e3c997"}),o.jsx(z,{p:[0,1.18,.2],s:[1.3,.16,1.4],c:Te}),[-.6,.6].map(s=>o.jsx(z,{p:[s,1.3,.2],s:[.07,.25,1.5],c:Te},s)),o.jsx(z,{p:[0,1.43,.25],s:[1.05,.46,.83],c:e?"#d7ae65":"#886748"}),o.jsx(z,{p:[0,1.46,.25],s:[.12,.51,.86],c:Kt}),o.jsx(z,{p:[0,.04,-1.45],s:[1.75,.22,.23],c:Te}),o.jsx(z,{p:[0,.04,1.45],s:[1.65,.2,.2],c:Te}),o.jsx(z,{p:[0,.26,-1.39],s:[.64,.23,.05],c:Te}),[-.58,.58].map(s=>o.jsx(z,{p:[s,.27,-1.4],s:[.3,.25,.07],c:"#fff0ad"},s)),o.jsx(ie,{p:[0,.55,1.46],rot:[Math.PI/2,0,0],r:.48,h:.24,c:"#2b302d"}),o.jsx(ie,{p:[0,.55,1.6],rot:[Math.PI/2,0,0],r:.27,h:.05,c:"#b99e72"}),[-.88,.88].flatMap((s,i)=>[-.85,.85].map((r,a)=>o.jsx("group",{ref:l=>{n.current[i*2+a]=l},position:[s,-.3,r],children:o.jsxs("group",{children:[o.jsx(ie,{rot:[0,0,Math.PI/2],r:.46,h:.4,c:"#29322c",n:20}),o.jsx(ie,{p:[Math.sign(s)*.22,0,0],rot:[0,0,Math.PI/2],r:.26,h:.045,c:"#c6b791"}),o.jsx(z,{p:[Math.sign(s)*.25,0,0],s:[.04,.09,.4],c:Te})]})},s+","+r)))]})}function wt({position:n}){const e=m.useRef(null);return ue(({clock:t})=>{e.current&&(e.current.position.y=R(n[0],n[1])+2.5+Math.sin(t.elapsedTime*2)*.2,e.current.rotation.y=t.elapsedTime*.55)}),o.jsxs("group",{children:[o.jsxs("mesh",{position:[n[0],R(n[0],n[1])+.12,n[1]],rotation:[-Math.PI/2,0,0],children:[o.jsx("ringGeometry",{args:[1.7,1.85,48]}),o.jsx("meshBasicMaterial",{color:"#fff1af",side:Ye})]}),o.jsx("group",{ref:e,position:[n[0],3,n[1]],children:o.jsxs("mesh",{children:[o.jsx("octahedronGeometry",{args:[.5,0]}),o.jsx("meshStandardMaterial",{color:"#ffd778",emissive:"#c98625",emissiveIntensity:.25})]})})]})}function Js({steps:n}){return o.jsx(o.Fragment,{children:Pe.flatMap(e=>e.steps.map((t,s)=>{if(s===0)return null;const[i,r]=t.position;return o.jsxs("group",{position:[i,R(i,r),r],children:[o.jsx(ie,{p:[0,.15,0],r:1.6,h:.25,c:"#b5a37d",n:16}),o.jsx(ie,{p:[1.9,.8,0],r:.07,h:1.6}),o.jsx(de,{text:e.id==="agents"?["","行动","人工确认"][s]:e.id==="research"?["","特征","对照"][s]:"交付",p:[1.9,1.55,0],width:1.8}),(n[e.id]??0)>s&&o.jsx(ie,{p:[0,.35,0],r:.6,h:.2,c:"#cc9d49"})]},e.id+s)}))})}function $s({onWin:n,resetKey:e}){const t=m.useRef([]),s=m.useRef(!1),i=m.useRef(new Set),[r,a]=m.useState(0);m.useLayoutEffect(()=>{s.current=!1,i.current.clear(),a(0)},[e]),ue(()=>{t.current.forEach((h,c)=>{h&&new A(0,1,0).applyQuaternion(new ct().copy(h.rotation())).y<.6&&i.current.add(c)}),i.current.size!==r&&a(i.current.size),!s.current&&i.current.size===6&&(s.current=!0,n())});const l=R(1,7);return o.jsxs("group",{children:[o.jsx(ce,{type:"fixed",colliders:"cuboid",children:o.jsx(z,{p:[1,l+.12,7],s:[5,.25,11],c:"#bc9967"})}),o.jsx(de,{text:"BOWLING · "+r+" / 6",p:[1,l+2,1],width:4.5}),Array.from({length:6},(h,c)=>{const u=c<1?0:c<3?1:2,f=c-(u===0?0:u===1?1:3);return o.jsxs(ce,{ref:p=>{t.current[c]=p},position:[1+(f-u/2)*.78,l+.9,4-u*.85],colliders:"hull",mass:.3,restitution:.3,children:[o.jsx(ie,{r:.24,top:.13,h:1.3,c:"#f3e3bd"}),o.jsx(ie,{p:[0,.38,0],r:.16,h:.18,c:"#bf6647"})]},c)}),o.jsx(ce,{position:[1,l+1,10],colliders:"ball",mass:3.2,restitution:.45,children:o.jsxs("mesh",{castShadow:!0,children:[o.jsx("sphereGeometry",{args:[.95,24,16]}),o.jsx("meshStandardMaterial",{color:"#42695d",metalness:.15,roughness:.3})]})}),Array.from({length:8},(h,c)=>{const u=-29+c%3*1.25,f=15+Math.floor(c/3)*1.3;return o.jsxs(ce,{position:[u,R(u,f)+.65,f],colliders:"cuboid",mass:.65,restitution:.12,children:[o.jsx(z,{s:[1.1,1.1,1.1],c:c%2?"#b78c55":"#c4a36b"}),o.jsx(z,{p:[0,0,.56],s:[1,.12,.02],c:pt}),o.jsx(z,{p:[0,0,.57],s:[.12,1,.02],c:pt})]},"crate"+c)})]},e)}function en(n,e=!1){const t=n[0].index!==null,s=new Set(Object.keys(n[0].attributes)),i=new Set(Object.keys(n[0].morphAttributes)),r={},a={},l=n[0].morphTargetsRelative,h=new Ve;let c=0;for(let u=0;u<n.length;++u){const f=n[u];let p=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),p++}if(p!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(l!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(e){let d;if(t)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;h.addGroup(c,d,u),c+=d}}if(t){let u=0;const f=[];for(let p=0;p<n.length;++p){const d=n[p].index;for(let b=0;b<d.count;++b)f.push(d.getX(b)+u);u+=n[p].attributes.position.count}h.setIndex(f)}for(const u in r){const f=At(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;h.setAttribute(u,f)}for(const u in a){const f=a[u][0].length;if(f===0)break;h.morphAttributes=h.morphAttributes||{},h.morphAttributes[u]=[];for(let p=0;p<f;++p){const d=[];for(let g=0;g<a[u].length;++g)d.push(a[u][g][p]);const b=At(d);if(!b)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;h.morphAttributes[u].push(b)}}return h}function At(n){let e,t,s,i=-1,r=0;for(let c=0;c<n.length;++c){const u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(s===void 0&&(s=u.normalized),s!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const a=new e(r),l=new Ut(a,t,s);let h=0;for(let c=0;c<n.length;++c){const u=n[c];if(u.isInterleavedBufferAttribute){const f=h/t;for(let p=0,d=u.count;p<d;p++)for(let b=0;b<t;b++){const g=u.getComponent(p,b);l.setComponent(p+f,b,g)}}else a.set(u.array,h);h+=u.count*t}return i!==void 0&&(l.gpuType=i),l}class pe{constructor(){Et(this,"parts",[])}add(e,t,s=[0,0,0],i=[0,0,0],r=[1,1,1]){const a=e.index?e.toNonIndexed():e;a!==e&&e.dispose(),a.deleteAttribute("uv");const l=new ut().compose(new A(...s),new ct().setFromEuler(new ls(...i)),new A(...r));a.applyMatrix4(l);const h=new De(t),c=new Float32Array(a.attributes.position.count*3);for(let u=0;u<c.length;u+=3)c[u]=h.r,c[u+1]=h.g,c[u+2]=h.b;return a.setAttribute("color",new Ut(c,3)),this.parts.push(a),this}box(e,t,s,i=[0,0,0],r=!1){return this.add(r?new tt(1,1,1,1,.065):new Nt(1,1,1),s,e,i,t)}cyl(e,t,s,i,r=t,a=[0,0,0],l=12){return this.add(new Dt(r,t,s,l),i,e,a)}sphere(e,t,s,i=1){return this.add(new Bt(1,i),s,e,[0,0,0],t)}beam(e,t,s,i){const r=new A(...e),a=new A(...t),l=a.clone().sub(r),h=new Dt(s*.8,s,l.length(),7);return h.applyQuaternion(new ct().setFromUnitVectors(new A(0,1,0),l.normalize())),this.add(h,i,r.add(a).multiplyScalar(.5).toArray())}finish(){const e=en(this.parts);if(this.parts.forEach(t=>t.dispose()),!e)throw Error("Model geometry cannot merge");return e.computeBoundingSphere(),e}}const Je="#ba5939",$e="#d68150",Y="#efe4c8",k="#77523b",Ee="#34443d",St="#547e76",qt=new gt({vertexColors:!0,roughness:.82});function Xt({make:n}){const e=m.useMemo(n,[n]);return o.jsx("mesh",{geometry:e,material:qt,castShadow:!0,receiveShadow:!0})}function Tt(n,e,t,s,i,r,a=Je){const l=new vt;l.moveTo(-i*.45,t-.25),l.lineTo(0,t+i*.25),l.lineTo(i*.45,t-.25),l.closePath(),n.add(new et(l,{depth:r-.6,bevelEnabled:!1}),Y,[e,0,s-(r-.6)/2]);for(const h of[-1,1]){n.box([e+h*i/4,t+i*.125,s],[i*.61,.16,r+1],k,[0,0,-h*.46]);for(let c=0;c<5;c++)for(let u=0;u<Math.ceil((r+1)/.46);u++){const f=h*(c+.45)*i/10,p=t+(i/2-Math.abs(f))*.5,d=s-r/2-.22+u*.46;n.cyl([e+f,p,d],.26,i*.13,(u+c)%4===0?$e:a,.26,[0,0,Math.PI/2-h*.46],8)}}for(let h=0;h<Math.ceil((r+1)/.5);h++)n.cyl([e,t+i*.25+.13,s-r/2-.25+h*.5],.25,.53,$e,.25,[Math.PI/2,0,0],10)}function We(n,e,t,s,i=1.5,r=1.65){n.box([e,t,s],[i+.18,r+.18,.2],k),n.box([e,t,s+.12],[i,r,.05],St),n.box([e,t,s+.17],[.08,r,.05],Y),n.box([e,t,s+.17],[i,.08,.05],Y),n.box([e,t-r/2-.1,s+.3],[i+.55,.18,.55],k);for(const a of[-1,1]){n.box([e+a*(i/2+.34),t,s+.1],[.4,r+.05,.14],"#7a9869");for(let l=0;l<6;l++)n.box([e+a*(i/2+.34),t-r/2+l*r/6,s+.2],[.36,.035,.025],"#557452")}}function be(n,e,t,s=0,i=!0){n.cyl([e,s+.3,t],.32,.6,"#b8704b",.42),n.cyl([e,s+.6,t],.43,.13,"#cc8960"),n.cyl([e,s+.65,t],.35,.04,"#554b32");for(let r=0;r<6;r++){const a=r*2.4,l=e+Math.sin(a)*.25,h=t+Math.cos(a)*.25,c=s+.7+H(r)*.45;n.beam([e,s+.6,t],[l,c,h],.025,"#627944"),n.sphere([l,c,h],[.16,.1,.18],i?["#e8bc60","#f1ddba","#be7954"][r%3]:"#789359")}}function tn(){const n=new pe;n.box([0,.15,1],[11,.35,9],"#cbbd98",void 0,!0),n.box([0,2.15,0],[9.3,4.3,6],Y,void 0,!0),n.box([0,.55,3.06],[9.3,.8,.1],"#d6c3a2");for(const e of[-4.55,0,4.55])n.box([e,2.2,3.12],[.22,4.4,.26],k);for(const e of[1,3.7])n.box([0,e,3.13],[9.3,.16,.24],k);Tt(n,0,4.45,0,10,6.7),We(n,-2.65,2.35,3.1,1.65),We(n,2.65,2.35,3.1,1.65),n.box([0,1.4,3.14],[1.48,2.8,.16],Ee),n.box([0,2.15,3.26],[1.1,1.15,.05],St);for(let e=0;e<6;e++)n.box([-.6+e*.24,.65,3.27],[.025,1.2,.04],k);n.sphere([.48,1.3,3.32],[.08,.08,.08],"#e4b765",2),n.box([0,.25,3.7],[2.2,.22,.8],"#b9ac8c");for(let e=0;e<12;e++){n.box([-4.7+e*.86,3.25,4.58],[.86,.12,2.7],e%2?Y:Je,[.13,0,0]);const t=new vt;t.moveTo(-.43,0);for(let s=0;s<=16;s++){const i=Math.PI+s/16*Math.PI;t.lineTo(Math.cos(i)*.43,Math.sin(i)*.26)}t.closePath(),n.add(new et(t,{depth:.04,bevelEnabled:!1}),e%2?Y:Je,[-4.7+e*.86,3.06,5.9])}for(const e of[-5,5])n.cyl([e,1.58,5.7],.075,3.15,k);n.box([-2.1,1,5.4],[3.7,.16,1.25],k);for(const e of[-3.5,-.65])n.box([e,.5,5.4],[.18,1,.85],k);for(let e=0;e<5;e++)n.box([-3.35+e*.58,1.2,5.4],[.5,.22,.7],["#e9d2ac","#d28154","#739885"][e%3],void 0,!0);n.cyl([3.3,5.6,-1.5],.37,3.6,"#bcaa8b",.34),n.cyl([3.3,7.4,-1.5],.55,.25,k);for(let e=0;e<5;e++)n.box([3.3,4.1+e*.6,-1.88],[.5,.08,.04],"#aa9478");be(n,-5.1,3.65),be(n,4,5.5),be(n,-3.9,5.25,1.1),n.box([3,1,5.1],[1.6,.2,1.4],Ee),n.box([3,.5,5.1],[.4,1,.4],k),n.box([3,1.32,5.1],[1.2,.1,.95],$e,[.1,0,0]);for(const e of[-3.7,-.7])n.beam([e,1.1,3.7],[e,2.85,3.7],.055,k);return n.beam([-3.7,2.85,3.7],[-.7,2.85,3.7],.04,k),n.finish()}function sn(){const n=new pe;n.box([0,.12,0],[11,.25,9],"#b9b899"),n.box([-1.8,2.1,0],[5.5,4.2,6.6],"#d8dbc1",void 0,!0),Tt(n,-1.8,4.35,0,6.2,6.9,"#7b9180"),n.box([3,1.9,0],[3.6,3.8,6.6],"#47766b",void 0,!0);for(let e=-3;e<=3;e+=1.2)n.box([4.85,2.05,e],[.14,4.1,.13],Y),n.beam([1.1,4,e],[3,5.3,e],.07,Y),n.beam([3,5.3,e],[4.9,4,e],.07,Y);for(let e=-2.4;e<=2.4;e+=1.2)n.box([4.93,2,e],[.045,3.65,1.04],"#6e9b89");for(const e of[1.15,3,4.85])n.box([e,4.08,0],[.12,.13,6.6],Y);n.box([3,4.63,0],[2.3,.08,6.5],"#739e8b",[0,0,-.59]),n.box([1.85,4.63,0],[2.3,.08,6.5],"#80a992",[0,0,.59]),We(n,-2.5,2.3,3.4,2.1),n.box([.3,1.4,3.42],[1.25,2.8,.12],Ee),n.box([0,.8,5],[7.5,.2,1.3],k);for(const e of[-3,3])n.box([e,.4,5],[.2,.8,1],k);for(let e=0;e<5;e++)n.box([-2.8+e*1.4,1.1,5],[.8,.45,.75],e===3?$e:"#789b7b",void 0,!0),n.box([-2.8+e*1.4,1.37,5],[.6,.025,.45],Y);return n.cyl([-2,6.6,-1],.09,2.4,Ee),n.add(new Ot(1.1,20,10,0,Math.PI*2,0,Math.PI*.55),"#e2ddbc",[-2,7.5,-1],[0,0,.5],[1,.3,1]),n.beam([-2,7.5,-1],[-1.5,8.3,-1],.04,k),be(n,-4.4,3.9),be(n,4.5,4.4),n.finish()}function nn(){const n=new pe;n.cyl([0,.15,0],5.1,.3,"#b3b39b",5.1,[0,0,0],40),n.cyl([0,2.5,0],3.65,5,Y,3.65,[0,0,0],40);for(let e=0;e<6;e++)for(let t=0;t<24;t++){const s=(t+e%2*.5)*Math.PI/12;n.box([Math.sin(s)*3.68,.45+e*.75,Math.cos(s)*3.68],[.7,.015,.02],"#d1c6a9",[0,s,0])}for(const e of[.35,4.8,5.2])n.cyl([0,e,0],3.88,.2,"#ab9672",3.88,[0,0,0],40);n.add(new Ot(3.8,40,20,0,Math.PI*2,0,Math.PI/2),"#6f9b89",[0,5.3,0]);for(let e=0;e<12;e++){const t=e*Math.PI/6,s=[];for(let i=0;i<=20;i++){const r=i/20*Math.PI/2;s.push(new A(Math.sin(r)*Math.cos(t)*3.82,5.3+Math.cos(r)*3.82,Math.sin(r)*Math.sin(t)*3.82))}n.add(new us(new Gt(s),20,.045,5,!1),"#416e67")}n.box([0,1.25,3.65],[1.25,2.5,.18],k),n.box([0,2.05,3.78],[.8,.65,.04],St);for(const e of[-1,1])We(n,e*2.3,2.5,2.9,.65,1.35);n.cyl([0,6.85,3.35],.38,3.4,Y,.38,[Math.PI/2-.45,0,0],20),n.cyl([0,7.6,4.88],.44,.18,Ee,.44,[Math.PI/2-.45,0,0],20);for(let e=0;e<4;e++)n.box([0,.1+e*.13,5.8-e*.5],[3.4,.22,.6],"#cbbf9f");return n.box([-4.3,1.1,1],[.2,2.2,.2],k),n.box([-4.3,2.1,1],[1.6,.7,.2],Y),be(n,2.3,4.7),n.finish()}function mt(n,e,t,s=1,i=Y){n.box([e,1.5*s,t],[3.5*s,3*s,3.3*s],i,void 0,!0),Tt(n,e,3.1*s,t,4*s,3.7*s),n.box([e,.95*s,t+1.7*s],[.9*s,1.9*s,.12],k),We(n,e-1.1*s,1.9*s,t+1.72*s,.55*s,.8*s),n.cyl([e+1.1*s,4.1*s,t-.6*s],.25*s,2*s,"#aa9477"),be(n,e+1.7*s,t+1.85*s)}function rn(){const n=new pe;mt(n,-2.9,-1,1.1),mt(n,2.7,1,.92,"#d5bd8f"),n.box([4,.1,-3.7],[3,.2,2.8],"#665c3a");for(let e=0;e<5;e++)for(let t=0;t<6;t++)n.sphere([2.8+t*.48,.4,-4.8+e*.5],[.16,.35,.17],e%2?"#b6a260":"#728849");for(let e=0;e<8;e++)n.cyl([-5.5+e*1.45,.7,4.1],.07,1.4,k),e<7&&n.box([-4.8+e*1.45,.85,4.1],[1.45,.12,.1],"#b9a17b");return n.cyl([1,2.75,-5.4],1.25,5.5,"#d3c8a4",.9,[0,0,0],12),n.cyl([1,6,-5.4],1.7,1.8,Je,.05,[0,0,0],12),n.box([1,1,-4.15],[.7,2,.08],k),n.finish()}function on(){const n=m.useRef(null);return ue((e,t)=>{n.current&&(n.current.rotation.z-=t*.35)}),o.jsxs("group",{ref:n,position:[1,4.8,-4.05],children:[[0,1,2,3].map(e=>o.jsxs("group",{rotation:[0,0,e*Math.PI/2],children:[o.jsx(z,{p:[0,1.5,0],s:[.1,3,.12],c:k}),o.jsx(z,{p:[.4,1.8,0],s:[.8,2.4,.08],c:Y}),[0,1,2,3,4].map(t=>o.jsx(z,{p:[.4,.8+t*.47,.06],s:[.82,.04,.04],c:k},t))]},e)),o.jsx(ie,{p:[0,0,.1],r:.25,h:.35,rot:[Math.PI/2,0,0],c:k})]})}function an(){const n={workshop:tn,agents:sn,research:nn,simulation:rn};return o.jsx(o.Fragment,{children:ae.districts.map(e=>o.jsxs("group",{position:[e.position[0],R(e.position[0],e.position[1]),e.position[1]],children:[o.jsx(Xt,{make:n[e.id]}),o.jsx(ce,{type:"fixed",colliders:!1,children:o.jsx(bt,{args:e.id==="research"?[3.6,2.7,3.6]:[4.5,2.2,3],position:[0,2.2,0]})}),o.jsx(de,{text:e.id==="agents"?"TEAMMIND":e.name,p:[0,e.id==="research"?1.25:4.25,e.id==="research"?4.2:3.65],width:e.id==="agents"?5:4}),e.id==="simulation"&&o.jsx(on,{})]},e.id))})}function ln({dusk:n}){const e=m.useRef(null),t=m.useMemo(()=>({uTime:{value:0},uDusk:{value:0}}),[]);return ue(({clock:s})=>{e.current&&(e.current.uniforms.uTime.value=s.elapsedTime,e.current.uniforms.uDusk.value=n?1:0)}),o.jsxs("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-1.15,0],children:[o.jsx("planeGeometry",{args:[1400,1400]}),o.jsx("shaderMaterial",{ref:e,uniforms:t,vertexShader:"varying vec3 vWorld; void main(){vec4 w=modelMatrix*vec4(position,1.);vWorld=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:`
 varying vec3 vWorld;uniform float uTime;uniform float uDusk;
 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 void main(){vec2 p=vWorld.xz;float a=atan(p.y/.8,p.x);float r=length(vec2(p.x,p.y/.8));float edge=37.7+2.1*sin(a*3.)+1.7*cos(a*5.)+.7*sin(a*9.);
 float shore=r-edge;float waves=sin(p.x*.42+sin(p.y*.2)+uTime*.52)*cos(p.y*.39-uTime*.29);float ripple=sin(p.x*2.9+p.y*1.7+uTime)*sin(p.y*3.2-uTime*.65);
 vec3 deep=mix(vec3(.14,.39,.40),vec3(.23,.32,.38),uDusk);vec3 shallow=mix(vec3(.40,.66,.57),vec3(.45,.53,.53),uDusk);
 vec3 col=mix(shallow,deep,smoothstep(1.,30.,shore));col+=waves*.018;
 float foam=(1.-smoothstep(.0,.19,abs(sin((shore-uTime*.24)*2.4))))*(1.-smoothstep(1.,5.,shore))*smoothstep(-1.,.3,shore);col=mix(col,vec3(.84,.89,.76),foam*.65);
 float lightPatch=smoothstep(.62,.95,sin(p.x*.055+p.y*.035+waves*.4));float shine=pow(max(0.,ripple),28.)*.11*smoothstep(1.,7.,shore);col+=shine*lightPatch;gl_FragColor=vec4(col,1.);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
 }`})]})}function cn(){const n=m.useMemo(()=>{const e=new pe;for(let t=0;t<74;t++){const s=t/74*Math.PI*2,i=Mt(s)-1+H(t)*2.5,r=Math.cos(s)*i,a=Math.sin(s)*i*.8,l=Zt(r,a);if(l<-2)continue;const h=.4+H(t+21)*1.25;e.add(new Bt(1,1),["#8e9b8c","#b2b9a2","#a3aa94"][t%3],[r,l+h*.2,a],[H(t),t,H(t+3)],[h,h*.65,h*.9])}for(let t=0;t<700;t++){const s=(H(t+891)-.5)*70,i=(H(t+4678)-.5)*57,r=yt(s,i);if(Math.hypot(s,i/.8)>34||r<2.6||r>3.8)continue;const a=R(s,i);e.sphere([s,a+.07,i],[.12+H(t)*.15,.08,.14],"#b6b18f",0)}for(let t=0;t<27;t++){const s=23+t*.48;e.box([-8,R(-8,23)-.05,s],[4,.16,.44],t%3?"#aa8357":"#b89461")}for(let t=0;t<6;t++)for(const s of[-1,1])e.cyl([-8+s*1.65,-.2,23+t*2.3],.13,3.7,k);e.sphere([-3,-.7,32],[1.1,.6,2.4],"#bd6942",1),e.sphere([-3,-.35,32],[.86,.22,2.05],Y,1),e.box([-3,-.16,32],[1.6,.15,.48],k),e.beam([-3,-.12,30.6],[-3,2.4,30.6],.055,k),e.add(new cs(.85,2.4,3),"#e7d2a4",[-2.7,1.25,30.6],[0,0,-.18],[.1,1,1]);for(const[t,s]of[[-29,9],[-15,13],[-8,24],[7,24],[27,18],[25,3],[17,-8],[-18,-12]]){const i=R(t,s);e.cyl([t,i+1.55,s],.055,3.1,Ee),e.box([t,i+3.15,s],[.42,.6,.42],k),e.box([t,i+3.15,s+.23],[.28,.4,.05],"#f8df95"),e.cyl([t,i+3.58,s],.38,.25,Ee,.1,[0,0,0],4)}for(const t of[-17,-15,-13])be(e,t,9,R(t,9),!0);return e.finish()},[]);return o.jsx("mesh",{geometry:n,material:qt,castShadow:!0,receiveShadow:!0})}function un(){const n=m.useRef(null),e=m.useMemo(()=>{const s=[];for(let i=0;i<8e3;i++){const r=(H(i+9e3)-.5)*75,a=(H(i+26e3)-.5)*59;Math.hypot(r,a/.8)>35||yt(r,a)<3||ae.districts.some(l=>Math.abs(r-l.position[0])<6&&Math.abs(a-l.position[1])<7)||Math.hypot(r-1,a-7)<8||Math.hypot(r+14,a-17)<5||s.push([r,R(r,a),a])}return s},[]);m.useLayoutEffect(()=>{const s=n.current;if(!s)return;const i=new xt,r=new De;e.forEach((a,l)=>{i.position.set(...a),i.rotation.y=l*2.4;const h=.16+H(l)*.35;i.scale.set(.4+H(l+3)*.45,h,.6),i.updateMatrix(),s.setMatrixAt(l,i.matrix),s.setColorAt(l,r.set(["#809447","#9daf62","#b2bb70","#6b8545"][l%4]))}),s.instanceMatrix.needsUpdate=!0,s.instanceColor.needsUpdate=!0,s.computeBoundingSphere()},[e]);const t=m.useMemo(()=>{const s=new Ve;return s.setAttribute("position",new le([-.15,0,0,.15,0,0,.15,.85,0,0,.72,-.15,0,0,-.16,0,0,.16],3)),s.computeVertexNormals(),s},[]);return o.jsx("instancedMesh",{ref:n,args:[t,void 0,e.length],receiveShadow:!0,children:o.jsx("meshStandardMaterial",{side:Ye,roughness:1})})}function hn(){const n=m.useRef(null),e=m.useMemo(()=>{const t=new pe;for(let s=0;s<8;s++){const i=-85+H(s+140)*170,r=-80+H(s+160)*80;for(let a=0;a<4;a++)t.sphere([i+a*4,15+H(s)*3,r],[5,1.1+H(a)*.7,2.5],"#e8e7cc",2)}return t.finish()},[]);return ue(({clock:t})=>{n.current&&(n.current.position.x=Math.sin(t.elapsedTime*.025)*5)}),o.jsx("group",{ref:n,children:o.jsx("mesh",{geometry:e,children:o.jsx("meshBasicMaterial",{vertexColors:!0,transparent:!0,opacity:.45,depthWrite:!1})})})}function fn({dusk:n}){const e=m.useMemo(Qs,[]),t=m.useMemo(qs,[]);return o.jsxs(o.Fragment,{children:[o.jsx(ce,{type:"fixed",colliders:"trimesh",friction:.9,children:o.jsx("mesh",{geometry:e,receiveShadow:!0,children:o.jsx("meshStandardMaterial",{vertexColors:!0,roughness:1})})}),o.jsx("mesh",{geometry:t,receiveShadow:!0,children:o.jsx("meshStandardMaterial",{vertexColors:!0,roughness:1})}),o.jsx(ln,{dusk:n}),o.jsx(cn,{}),o.jsx(un,{}),o.jsx(hn,{}),o.jsxs("group",{position:[-12,R(-12,17),17],children:[o.jsx(ie,{p:[0,1.5,0],r:.07,h:3}),o.jsx(de,{text:"SKELETON →",p:[0,2.8,0],width:3.6}),o.jsx(de,{text:"慢慢逛，总会有发现",p:[0,2.05,0],width:3})]}),o.jsxs("group",{position:[3,R(3,19),19],rotation:[0,-.65,0],children:[o.jsx(ce,{type:"fixed",colliders:"cuboid",children:o.jsx(z,{p:[0,.85,0],s:[4.5,.28,5],r:[-.34,0,0],c:"#a5794e"})}),[-2,2].map(s=>o.jsx(z,{p:[s,.7,-1],s:[.2,1.4,.2],c:k},s)),o.jsx(de,{text:"↟ JUMP",p:[0,.7,2.7],width:2.4})]}),o.jsx(ce,{type:"fixed",colliders:"cuboid",children:o.jsx("mesh",{position:[-8,R(-8,23)-.15,29],visible:!1,children:o.jsx("boxGeometry",{args:[4,.25,13]})})})]})}const dn=()=>{const n=new pe;return mt(n,0,0,.75),n.finish()};function pn(){return o.jsxs("group",{position:[13,R(13,20),20],children:[o.jsx(Xt,{make:dn}),o.jsx(ce,{type:"fixed",colliders:!1,children:o.jsx(bt,{args:[1.4,1.3,1.4],position:[0,1.3,0]})})]})}class mn extends hs{constructor(e){super(e)}load(e,t,s,i){const r=this,a=new fs(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){const h=r.parse(JSON.parse(l));t&&t(h)},s,i)}parse(e){return new gn(e)}}class gn{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const s=[],i=xn(e,t,this.data);for(let r=0,a=i.length;r<a;r++)s.push(...i[r].toShapes());return s}}function xn(n,e,t){const s=Array.from(n),i=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,a=[];let l=0,h=0;for(let c=0;c<s.length;c++){const u=s[c];if(u===`
`)l=0,h-=r;else{const f=vn(u,i,l,h,t);l+=f.offsetX,a.push(f.path)}}return a}function vn(n,e,t,s,i){const r=i.glyphs[n]||i.glyphs["?"];if(!r){console.error('THREE.Font: character "'+n+'" does not exists in font family '+i.familyName+".");return}const a=new ds;let l,h,c,u,f,p,d,b;if(r.o){const g=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let M=0,T=g.length;M<T;)switch(g[M++]){case"m":l=g[M++]*e+t,h=g[M++]*e+s,a.moveTo(l,h);break;case"l":l=g[M++]*e+t,h=g[M++]*e+s,a.lineTo(l,h);break;case"q":c=g[M++]*e+t,u=g[M++]*e+s,f=g[M++]*e+t,p=g[M++]*e+s,a.quadraticCurveTo(f,p,c,u);break;case"b":c=g[M++]*e+t,u=g[M++]*e+s,f=g[M++]*e+t,p=g[M++]*e+s,d=g[M++]*e+t,b=g[M++]*e+s,a.bezierCurveTo(f,p,d,b,c,u);break}}return{offsetX:r.ha*e,path:a}}class bn extends et{constructor(e,t={}){const s=t.font;if(s===void 0)super();else{const i=s.generateShapes(e,t.size);t.depth===void 0&&(t.depth=50),t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t)}this.type="TextGeometry"}}function Mn({resetKey:n}){const e=Wt(mn,"/assets/fonts/island-wordmark.json"),t=m.useMemo(()=>[..."SKELETON"].map(s=>{const i=new bn(s,{font:e,size:2.25,depth:.55,curveSegments:6,bevelEnabled:!0,bevelThickness:.05,bevelSize:.04,bevelSegments:2});i.computeBoundingBox();const r=i.boundingBox.max.x-i.boundingBox.min.x;return i.translate(-r/2,0,-.275),i}),[e]);return o.jsx("group",{children:t.map((s,i)=>{const r=-8+i*2.05,a=-3.5;return o.jsx(ce,{position:[r,R(r,a)+.15,a],rotation:[0,0,(i-3)*.012],colliders:"hull",mass:2.5,restitution:.06,children:o.jsx("mesh",{geometry:s,castShadow:!0,receiveShadow:!0,children:o.jsx("meshStandardMaterial",{color:["#e4d5b3","#bb6c43","#c6be88","#e4d5b3","#71947a","#d1ad70","#e4d5b3","#71947a"][i],roughness:.8})})},i)})},n)}function yn({design:n}){const e=m.useMemo(()=>{const t=new vt;return t.moveTo(-.45,.55),t.lineTo(-.84,.37),t.lineTo(-1.12,-.18),t.lineTo(-.69,-.4),t.lineTo(-.46,0),t.lineTo(-.5,-1.32),t.quadraticCurveTo(0,-1.45,.5,-1.32),t.lineTo(.46,0),t.lineTo(.69,-.4),t.lineTo(1.12,-.18),t.lineTo(.84,.37),t.lineTo(.45,.55),t.quadraticCurveTo(0,.2,-.45,.55),new et(t,{depth:.075,bevelEnabled:!0,bevelThickness:.025,bevelSize:.025,bevelSegments:2})},[]);return o.jsxs("group",{position:[0,2.5,0],children:[o.jsx("mesh",{geometry:e,castShadow:!0,children:o.jsx("meshStandardMaterial",{color:n.color,roughness:1})}),n.pattern==="sun"?o.jsxs(o.Fragment,{children:[o.jsxs("mesh",{position:[0,-.35,.11],children:[o.jsx("circleGeometry",{args:[.25,24]}),o.jsx("meshStandardMaterial",{color:"#f3ddb3"})]}),Array.from({length:10},(t,s)=>o.jsx(z,{p:[Math.sin(s/10*Math.PI*2)*.37,-.35+Math.cos(s/10*Math.PI*2)*.37,.12],s:[.045,.12,.02],r:[0,0,-s/10*Math.PI*2],c:"#f3ddb3"},s))]}):n.pattern==="leaf"?o.jsxs("mesh",{position:[0,-.35,.13],scale:[.5,.8,.07],rotation:[0,0,-.3],children:[o.jsx("sphereGeometry",{args:[.5,16,8]}),o.jsx("meshStandardMaterial",{color:"#f3ddb3"})]}):o.jsx(o.Fragment,{children:[-.2,-.4,-.6].map(t=>o.jsxs("mesh",{position:[0,t,.14],children:[o.jsx("torusGeometry",{args:[.24,.025,6,18,Math.PI]}),o.jsx("meshStandardMaterial",{color:"#f3ddb3"})]},t))})]})}function wn({steps:n,design:e}){return o.jsxs("group",{position:[-6,R(-6,22),22],children:[o.jsx(z,{p:[0,.17,0],s:[3.7,.32,2.6],c:"#ac8c60"}),[-1.5,1.5].map(t=>o.jsx(ie,{p:[t,1.4,0],r:.055,h:2.8,c:"#76543c"},t)),o.jsx(z,{p:[0,2.8,0],s:[3.2,.09,.1],c:"#76543c"}),(n.workshop??0)>=2?o.jsx(yn,{design:e}):o.jsx(de,{text:"留给你的第一件样衣",p:[0,1.5,0],width:3})]})}function Sn(){const n=m.useMemo(()=>{const t=new pe;for(let s=0;s<12;s++){const i=s*2.4,r=H(s)*4;t.sphere([44+Math.sin(i)*r,-.6+H(s+3),-24+Math.cos(i)*r],[2.6,1.8,2.4],["#a3ae98","#b7baa0","#8d9e8e"][s%3],1)}t.cyl([44,4.5,-24],1.45,8,"#e5d9b7",.95,[0,0,0],20),t.cyl([44,6,-24],1.14,1.05,"#b9704b",1.08,[0,0,0],20),t.cyl([44,8.6,-24],1.7,.2,"#705c43",1.7,[0,0,0],20),t.cyl([44,9.15,-24],.93,1,"#b4c8b0",.93,[0,0,0],12),t.cyl([44,10,-24],1.6,.9,"#bd784f",.05,[0,0,0],12);for(let s=0;s<8;s++){const i=s*Math.PI/4;t.beam([44+Math.cos(i),8.7,-24+Math.sin(i)],[44+Math.cos(i),9.7,-24+Math.sin(i)],.04,"#705c43")}return t.box([44,1.65,-22.55],[.6,1.4,.08],"#5e786d"),t.finish()},[]),e=m.useRef(null);return ue(({clock:t})=>{e.current&&(e.current.intensity=5+Math.sin(t.elapsedTime)*2)}),o.jsxs(o.Fragment,{children:[o.jsx("mesh",{geometry:n,castShadow:!0,receiveShadow:!0,children:o.jsx("meshStandardMaterial",{vertexColors:!0,roughness:.85})}),o.jsx("pointLight",{ref:e,position:[44,9.2,-24],color:"#ffdb8e",intensity:5,distance:10})]})}function Tn({cards:n=80,seed:e=5731}={}){let t=e>>>0;const s=()=>(t=Math.imul(t,1664525)+1013904223>>>0)/4294967296,i=[],r=[],a=[],l=[],h=[],c=new A(.48,.55,.7).normalize(),u=new A().crossVectors(new A(0,1,0),c).normalize(),f=new A().crossVectors(c,u).normalize();for(let d=0;d<n;d++){const b=s()*2-1,g=s()*Math.PI*2,M=Math.sqrt(1-b*b),T=Math.pow(s(),1/3),v=new A(Math.cos(g)*M,b,Math.sin(g)*M).multiplyScalar(T),_=v.clone().normalize(),C=s()*Math.PI*2,U=Math.cos(C),q=Math.sin(C),V=.68+s()*.26,G=.84+s()*.16;for(const[N,L,I,Z]of[[-.5,-.5,0,0],[.5,-.5,1,0],[.5,.5,1,1],[-.5,.5,0,1]]){const ee=(N*U-L*q)*V,re=(N*q+L*U)*V,B=v.clone().addScaledVector(u,ee).addScaledVector(f,re);i.push(B.x,B.y,B.z),r.push(_.x,_.y,_.z),a.push(I,Z),l.push(G,G,G)}const D=d*4;h.push(D,D+1,D+2,D,D+2,D+3)}const p=new Ve;return p.setAttribute("position",new le(i,3)),p.setAttribute("normal",new le(r,3)),p.setAttribute("uv",new le(a,2)),p.setAttribute("color",new le(l,3)),p.setIndex(h),p.computeBoundingSphere(),p.boundingSphere.radius+=.25,p}function zt(n,e,t){n.onBeforeCompile=s=>{s.uniforms.uFoliageTime=e,s.uniforms.uFoliageWind=t,s.vertexShader=`uniform float uFoliageTime;
uniform float uFoliageWind;
`+s.vertexShader,s.vertexShader=s.vertexShader.replace("#include <begin_vertex>",`
      #include <begin_vertex>
      float foliagePhase = 0.0;
      #ifdef USE_INSTANCING
        foliagePhase = instanceMatrix[3].x * .39 + instanceMatrix[3].z * .31;
      #endif
      float foliageBend = sin(uFoliageTime * 1.05 + foliagePhase + position.y * 1.3);
      float foliageFlutter = sin(uFoliageTime * 2.3 + foliagePhase * 1.7 + position.x * 6.0);
      transformed.x += (foliageBend * .075 + foliageFlutter * .014) * uFoliageWind;
      transformed.z += cos(uFoliageTime * .87 + foliagePhase + position.y) * .046 * uFoliageWind;
    `)},n.customProgramCacheKey=()=>"handmade-foliage-wind-v1"}function jn(n,{wind:e=1,alphaTest:t=.4}={}){n.colorSpace=ms,n.wrapS=n.wrapT=gs;const s={value:0},i={value:e},r=new gt({color:"#ffffff",vertexColors:!0,alphaMap:n,alphaTest:t,roughness:1,metalness:0,side:Ye,depthWrite:!0,transparent:!1,alphaToCoverage:!1}),a=new xs({depthPacking:vs,alphaMap:n,alphaTest:t,side:Ye});return zt(r,s,i),zt(a,s,i),{material:r,depthMaterial:a,update:l=>{s.value=l},setWind:l=>{i.value=l},dispose:()=>{r.dispose(),a.dispose()}}}function En(n,e,t={}){const s=Tn(t),i=jn(e,t),r=new ps(s,i.material,n.length);r.castShadow=!0,r.receiveShadow=!0,r.customDepthMaterial=i.depthMaterial;const a=new xt,l=new De;return n.forEach((h,c)=>{a.position.fromArray(h.p),a.scale.fromArray(h.s),a.updateMatrix(),r.setMatrixAt(c,a.matrix),r.setColorAt(c,l.set(h.c))}),r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0),r.computeBoundingSphere(),{mesh:r,...i,dispose:()=>{s.dispose(),i.dispose()}}}function Dn(){const n=Wt(bs,"/assets/foliage/leaf-sdf.png"),e=m.useMemo(()=>{const s=new pe,i=[];for(let r=0;r<155;r++){const a=(H(r*3+380)-.5)*71,l=(H(r*3+381)-.5)*56;if(Math.hypot(a,l/.8)>33||yt(a,l)<5.2||ae.districts.some(f=>Math.abs(a-f.position[0])<7&&Math.abs(l-f.position[1])<8)||Pe.some(f=>f.steps.some(p=>Math.hypot(a-p.position[0],l-p.position[1])<4.3))||Math.hypot(a-1,l-7)<9||a>-24&&a<0&&l>8)continue;const h=.75+H(r+50)*.6,c=R(a,l),u=r%3===0;s.beam([a,c,l],[a+.25,c+4.8*h,l+.15],.19*h,u?"#d1ccb2":"#826b43");for(let f=0;f<4;f++){const p=f*2.4,d=a+Math.cos(p)*h,b=l+Math.sin(p)*h,g=c+(3.6+H(r+f)*1.3)*h;s.beam([a,c+2*h,l],[d,g,b],.08*h,u?"#d1ccb2":"#826b43"),i.push({p:[d,g,b],s:[1.35*h,1.08*h,1.35*h],c:["#729750","#96aa5e","#4f7f51","#78a06a"][f%4]})}if(u)for(let f=0;f<7;f++)s.box([a+.04,c+f*.5*h,l+.15],[.18,.055,.12],"#706f51")}return{trunks:s.finish(),clusters:i}},[]),t=m.useMemo(()=>En(e.clusters,n,{cards:80,alphaTest:.45}),[e,n]);return ue(({clock:s})=>t.update(s.elapsedTime)),m.useEffect(()=>()=>t.dispose(),[t]),o.jsxs(o.Fragment,{children:[o.jsx("mesh",{geometry:e.trunks,castShadow:!0,receiveShadow:!0,children:o.jsx("meshStandardMaterial",{vertexColors:!0,roughness:1})}),o.jsx("primitive",{object:t.mesh})]})}function _n({body:n,paused:e}){const t=m.useRef(null),s=m.useRef(null),i=m.useRef(0),r=m.useRef(0),a=m.useRef(0),l=m.useMemo(()=>Array.from({length:64},()=>({p:new A(0,-100,0),life:0})),[]),h=m.useMemo(()=>new xt,[]),c=m.useMemo(()=>{const u=document.createElement("canvas");u.width=u.height=32;const f=u.getContext("2d"),p=f.createRadialGradient(16,16,0,16,16,16);return p.addColorStop(0,"rgba(255,255,255,.65)"),p.addColorStop(1,"rgba(255,255,255,0)"),f.fillStyle=p,f.fillRect(0,0,32,32),new It(u)},[]);return ue(({camera:u},f)=>{const p=n.current;if(!p||!t.current||!s.current||e)return;const d=p.translation(),b=p.linvel(),g=Math.hypot(b.x,b.z),M=d.y-R(d.x,d.z)<1.4;if(i.current+=f,i.current>.075&&M&&g>3){i.current=0;const T=p.rotation(),v=new A(0,0,1).applyQuaternion(T),_=new A(1,0,0).applyQuaternion(T);for(const C of[-1,1]){const U=l[r.current++%64];U.p.set(d.x+v.x+_.x*C*.7,R(d.x,d.z)+.3,d.z+v.z+_.z*C*.7),U.life=1,h.position.set(d.x+_.x*C*.75,R(d.x,d.z)+.09,d.z+_.z*C*.75),h.rotation.set(-Math.PI/2,0,-Math.atan2(v.x,v.z)),h.scale.set(.22,.55,1),h.updateMatrix(),s.current.setMatrixAt(a.current++%160,h.matrix)}s.current.instanceMatrix.needsUpdate=!0}l.forEach((T,v)=>{T.life=Math.max(0,T.life-f*.75),T.p.y+=f*.2,h.position.copy(T.p),h.quaternion.copy(u.quaternion),h.scale.setScalar(T.life>0?(1-T.life)*1.4+.12:0),h.updateMatrix(),t.current.setMatrixAt(v,h.matrix)}),t.current.instanceMatrix.needsUpdate=!0}),o.jsxs(o.Fragment,{children:[o.jsxs("instancedMesh",{ref:t,args:[void 0,void 0,64],frustumCulled:!1,children:[o.jsx("planeGeometry",{}),o.jsx("meshBasicMaterial",{map:c,transparent:!0,opacity:.25,color:"#d0b786",depthWrite:!1})]}),o.jsxs("instancedMesh",{ref:s,args:[void 0,void 0,160],frustumCulled:!1,children:[o.jsx("planeGeometry",{}),o.jsx("meshBasicMaterial",{transparent:!0,opacity:.13,color:"#665b39",depthWrite:!1})]})]})}const Xe={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Re{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Cn=new ys(-1,1,1,-1,0,1);class Pn extends Ve{constructor(){super(),this.setAttribute("position",new le([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new le([0,2,0,0,2,0],2))}}const Rn=new Pn;class jt{constructor(e){this._mesh=new Ms(Rn,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Cn)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Yt extends Re{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof _e?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ce.clone(e.uniforms),this.material=new _e({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new jt(this.material)}render(e,t,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class kt extends Re{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,s){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,l;this.inverse?(a=0,l=1):(a=1,l=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(l),r.buffers.stencil.setLocked(!0),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class An extends Re{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class zn{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const s=e.getSize(new Oe);this._width=s.width,this._height=s.height,t=new ht(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ft}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Yt(Xe),this.copyPass.material.blending=je,this.clock=new ws}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let s=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,s),a.needsSwap){if(s){const l=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),h.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}kt!==void 0&&(a instanceof kt?s=!0:a instanceof An&&(s=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const s=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(s,i),this.renderTarget2.setSize(s,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(s,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class kn extends Re{constructor(e,t,s=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=s,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new De}render(e,t,s){const i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}class Ln{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let s,i,r;const a=.5*(Math.sqrt(3)-1),l=(e+t)*a,h=Math.floor(e+l),c=Math.floor(t+l),u=(3-Math.sqrt(3))/6,f=(h+c)*u,p=h-f,d=c-f,b=e-p,g=t-d;let M,T;b>g?(M=1,T=0):(M=0,T=1);const v=b-M+u,_=g-T+u,C=b-1+2*u,U=g-1+2*u,q=h&255,V=c&255,G=this.perm[q+this.perm[V]]%12,D=this.perm[q+M+this.perm[V+T]]%12,N=this.perm[q+1+this.perm[V+1]]%12;let L=.5-b*b-g*g;L<0?s=0:(L*=L,s=L*L*this._dot(this.grad3[G],b,g));let I=.5-v*v-_*_;I<0?i=0:(I*=I,i=I*I*this._dot(this.grad3[D],v,_));let Z=.5-C*C-U*U;return Z<0?r=0:(Z*=Z,r=Z*Z*this._dot(this.grad3[N],C,U)),70*(s+i+r)}noise3d(e,t,s){let i,r,a,l;const c=(e+t+s)*.3333333333333333,u=Math.floor(e+c),f=Math.floor(t+c),p=Math.floor(s+c),d=1/6,b=(u+f+p)*d,g=u-b,M=f-b,T=p-b,v=e-g,_=t-M,C=s-T;let U,q,V,G,D,N;v>=_?_>=C?(U=1,q=0,V=0,G=1,D=1,N=0):v>=C?(U=1,q=0,V=0,G=1,D=0,N=1):(U=0,q=0,V=1,G=1,D=0,N=1):_<C?(U=0,q=0,V=1,G=0,D=1,N=1):v<C?(U=0,q=1,V=0,G=0,D=1,N=1):(U=0,q=1,V=0,G=1,D=1,N=0);const L=v-U+d,I=_-q+d,Z=C-V+d,ee=v-G+2*d,re=_-D+2*d,B=C-N+2*d,J=v-1+3*d,me=_-1+3*d,K=C-1+3*d,$=u&255,te=f&255,se=p&255,ge=this.perm[$+this.perm[te+this.perm[se]]]%12,Me=this.perm[$+U+this.perm[te+q+this.perm[se+V]]]%12,ye=this.perm[$+G+this.perm[te+D+this.perm[se+N]]]%12,we=this.perm[$+1+this.perm[te+1+this.perm[se+1]]]%12;let x=.6-v*v-_*_-C*C;x<0?i=0:(x*=x,i=x*x*this._dot3(this.grad3[ge],v,_,C));let j=.6-L*L-I*I-Z*Z;j<0?r=0:(j*=j,r=j*j*this._dot3(this.grad3[Me],L,I,Z));let P=.6-ee*ee-re*re-B*B;P<0?a=0:(P*=P,a=P*P*this._dot3(this.grad3[ye],ee,re,B));let w=.6-J*J-me*me-K*K;return w<0?l=0:(w*=w,l=w*w*this._dot3(this.grad3[we],J,me,K)),32*(i+r+a+l)}noise4d(e,t,s,i){const r=this.grad4,a=this.simplex,l=this.perm,h=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let u,f,p,d,b;const g=(e+t+s+i)*h,M=Math.floor(e+g),T=Math.floor(t+g),v=Math.floor(s+g),_=Math.floor(i+g),C=(M+T+v+_)*c,U=M-C,q=T-C,V=v-C,G=_-C,D=e-U,N=t-q,L=s-V,I=i-G,Z=D>N?32:0,ee=D>L?16:0,re=N>L?8:0,B=D>I?4:0,J=N>I?2:0,me=L>I?1:0,K=Z+ee+re+B+J+me,$=a[K][0]>=3?1:0,te=a[K][1]>=3?1:0,se=a[K][2]>=3?1:0,ge=a[K][3]>=3?1:0,Me=a[K][0]>=2?1:0,ye=a[K][1]>=2?1:0,we=a[K][2]>=2?1:0,x=a[K][3]>=2?1:0,j=a[K][0]>=1?1:0,P=a[K][1]>=1?1:0,w=a[K][2]>=1?1:0,y=a[K][3]>=1?1:0,O=D-$+c,Q=N-te+c,he=L-se+c,xe=I-ge+c,S=D-Me+2*c,F=N-ye+2*c,X=L-we+2*c,E=I-x+2*c,W=D-j+3*c,fe=N-P+3*c,oe=L-w+3*c,st=I-y+3*c,nt=D-1+4*c,it=N-1+4*c,rt=L-1+4*c,ot=I-1+4*c,Ae=M&255,ze=T&255,ke=v&255,Le=_&255,$t=l[Ae+l[ze+l[ke+l[Le]]]]%32,es=l[Ae+$+l[ze+te+l[ke+se+l[Le+ge]]]]%32,ts=l[Ae+Me+l[ze+ye+l[ke+we+l[Le+x]]]]%32,ss=l[Ae+j+l[ze+P+l[ke+w+l[Le+y]]]]%32,ns=l[Ae+1+l[ze+1+l[ke+1+l[Le+1]]]]%32;let Fe=.6-D*D-N*N-L*L-I*I;Fe<0?u=0:(Fe*=Fe,u=Fe*Fe*this._dot4(r[$t],D,N,L,I));let Ne=.6-O*O-Q*Q-he*he-xe*xe;Ne<0?f=0:(Ne*=Ne,f=Ne*Ne*this._dot4(r[es],O,Q,he,xe));let Ge=.6-S*S-F*F-X*X-E*E;Ge<0?p=0:(Ge*=Ge,p=Ge*Ge*this._dot4(r[ts],S,F,X,E));let Ie=.6-W*W-fe*fe-oe*oe-st*st;Ie<0?d=0:(Ie*=Ie,d=Ie*Ie*this._dot4(r[ss],W,fe,oe,st));let Ue=.6-nt*nt-it*it-rt*rt-ot*ot;return Ue<0?b=0:(Ue*=Ue,b=Ue*Ue*this._dot4(r[ns],nt,it,rt,ot)),27*(u+f+p+d+b)}_dot(e,t,s){return e[0]*t+e[1]*s}_dot3(e,t,s,i){return e[0]*t+e[1]*s+e[2]*i}_dot4(e,t,s,i,r){return e[0]*t+e[1]*s+e[2]*i+e[3]*r}}const He={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new Oe},cameraProjectionMatrix:{value:new ut},cameraInverseProjectionMatrix:{value:new ut},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;

		uniform vec3 kernel[ KERNEL_SIZE ];

		uniform vec2 resolution;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float kernelRadius;
		uniform float minDistance; // avoid artifacts caused by neighbour fragments with minimal depth difference
		uniform float maxDistance; // avoid the influence of fragments which are too far away

		varying vec2 vUv;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {

			return texture2D( tDepth, screenPosition ).x;

		}

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		float getViewZ( const in float depth ) {

			#if PERSPECTIVE_CAMERA == 1

				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );

			#else

				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );

			#endif

		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {

			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];

			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );

			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;

		}

		vec3 getViewNormal( const in vec2 screenPosition ) {

			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );

		}

		void main() {

			float depth = getDepth( vUv );

			if ( depth == 1.0 ) {

				gl_FragColor = vec4( 1.0 ); // don't influence background

			} else {

				float viewZ = getViewZ( depth );

				vec3 viewPosition = getViewPosition( vUv, depth, viewZ );
				vec3 viewNormal = getViewNormal( vUv );

				vec2 noiseScale = vec2( resolution.x / 4.0, resolution.y / 4.0 );
				vec3 random = vec3( texture2D( tNoise, vUv * noiseScale ).r );

				// compute matrix used to reorient a kernel vector

				vec3 tangent = normalize( random - viewNormal * dot( random, viewNormal ) );
				vec3 bitangent = cross( viewNormal, tangent );
				mat3 kernelMatrix = mat3( tangent, bitangent, viewNormal );

				float occlusion = 0.0;

				for ( int i = 0; i < KERNEL_SIZE; i ++ ) {

					vec3 sampleVector = kernelMatrix * kernel[ i ]; // reorient sample vector in view space
					vec3 samplePoint = viewPosition + ( sampleVector * kernelRadius ); // calculate sample point

					vec4 samplePointNDC = cameraProjectionMatrix * vec4( samplePoint, 1.0 ); // project point and calculate NDC
					samplePointNDC /= samplePointNDC.w;

					vec2 samplePointUv = samplePointNDC.xy * 0.5 + 0.5; // compute uv coordinates

					float realDepth = getLinearDepth( samplePointUv ); // get linear depth from depth texture
					float sampleDepth = viewZToOrthographicDepth( samplePoint.z, cameraNear, cameraFar ); // compute linear depth of the sample view Z value
					float delta = sampleDepth - realDepth;

					if ( delta > minDistance && delta < maxDistance ) { // if fragment is before sample point, increase occlusion

						occlusion += 1.0;

					}

				}

				occlusion = clamp( occlusion / float( KERNEL_SIZE ), 0.0, 1.0 );

				gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );

			}

		}`},Ze={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Ke={uniforms:{tDiffuse:{value:null},resolution:{value:new Oe}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		void main() {

			vec2 texelSize = ( 1.0 / resolution );
			float result = 0.0;

			for ( int i = - 2; i <= 2; i ++ ) {

				for ( int j = - 2; j <= 2; j ++ ) {

					vec2 offset = ( vec2( float( i ), float( j ) ) ) * texelSize;
					result += texture2D( tDiffuse, vUv + offset ).r;

				}

			}

			gl_FragColor = vec4( vec3( result / ( 5.0 * 5.0 ) ), 1.0 );

		}`};class ve extends Re{constructor(e,t,s=512,i=512,r=32){super(),this.width=s,this.height=i,this.clear=!0,this.needsSwap=!1,this.camera=t,this.scene=e,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=[],this._generateSampleKernel(r),this._generateRandomKernelRotations();const a=new Ss;a.format=Ts,a.type=js,this.normalRenderTarget=new ht(this.width,this.height,{minFilter:_t,magFilter:_t,type:ft,depthTexture:a}),this.ssaoRenderTarget=new ht(this.width,this.height,{type:ft}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new _e({defines:Object.assign({},He.defines),uniforms:Ce.clone(He.uniforms),vertexShader:He.vertexShader,fragmentShader:He.fragmentShader,blending:je}),this.ssaoMaterial.defines.KERNEL_SIZE=r,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new Es,this.normalMaterial.blending=je,this.blurMaterial=new _e({defines:Object.assign({},Ke.defines),uniforms:Ce.clone(Ke.uniforms),vertexShader:Ke.vertexShader,fragmentShader:Ke.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new _e({defines:Object.assign({},Ze.defines),uniforms:Ce.clone(Ze.uniforms),vertexShader:Ze.vertexShader,fragmentShader:Ze.fragmentShader,blending:je}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new _e({uniforms:Ce.clone(Xe.uniforms),vertexShader:Xe.vertexShader,fragmentShader:Xe.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:_s,blendDst:Pt,blendEquation:Ct,blendSrcAlpha:Ds,blendDstAlpha:Pt,blendEquationAlpha:Ct}),this._fsQuad=new jt(null),this._originalClearColor=new De}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}render(e,t,s){switch(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this._renderPass(e,this.ssaoMaterial,this.ssaoRenderTarget),this._renderPass(e,this.blurMaterial,this.blurRenderTarget),this.output){case ve.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=je,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:s);break;case ve.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=je,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:s);break;case ve.OUTPUT.Depth:this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:s);break;case ve.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=je,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:s);break;case ve.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Cs,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:s);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}setSize(e,t){this.width=e,this.height=t,this.ssaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.ssaoMaterial.uniforms.resolution.value.set(e,t),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t)}_renderPass(e,t,s,i,r){e.getClearColor(this._originalClearColor);const a=e.getClearAlpha(),l=e.autoClear;e.setRenderTarget(s),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=l,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,s,i,r){e.getClearColor(this._originalClearColor);const a=e.getClearAlpha(),l=e.autoClear;e.setRenderTarget(s),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=l,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_generateSampleKernel(e){const t=this.kernel;for(let s=0;s<e;s++){const i=new A;i.x=Math.random()*2-1,i.y=Math.random()*2-1,i.z=Math.random(),i.normalize();let r=s/e;r=qe.lerp(.1,1,r*r),i.multiplyScalar(r),t.push(i)}}_generateRandomKernelRotations(){const s=new Ln,i=16,r=new Float32Array(i);for(let a=0;a<i;a++){const l=Math.random()*2-1,h=Math.random()*2-1,c=0;r[a]=s.noise3d(l,h,c)}this.noiseTexture=new Ps(r,4,4,Rs,As),this.noiseTexture.wrapS=Rt,this.noiseTexture.wrapT=Rt,this.noiseTexture.needsUpdate=!0}_overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(s){(s.isPoints||s.isLine||s.isLine2)&&s.visible&&(s.visible=!1,t.push(s))})}_restoreVisibility(){const e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}}ve.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const Qe={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Fn extends Re{constructor(){super(),this.uniforms=Ce.clone(Qe.uniforms),this.material=new zs({name:Qe.name,uniforms:this.uniforms,vertexShader:Qe.vertexShader,fragmentShader:Qe.fragmentShader}),this._fsQuad=new jt(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,s){this.uniforms.tDiffuse.value=s.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ks.getTransfer(this._outputColorSpace)===Ls&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Fs?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ns?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Gs?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Vt?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Is?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Us?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Bs&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Nn={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new Oe(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`};function Gn(){const{gl:n,scene:e,camera:t,size:s}=Ht(),i=m.useMemo(()=>{const r=new zn(n);r.setPixelRatio(1);const a=new ve(e,t,1,1,8);a.kernelRadius=2.4,a.minDistance=.002,a.maxDistance=.055;const l=new Fn,h=new Yt(Nn);return r.addPass(new kn(e,t)),r.addPass(a),r.addPass(l),r.addPass(h),{composer:r,ao:a,output:l,fxaa:h}},[n,e,t]);return m.useEffect(()=>{i.composer.setSize(s.width,s.height),i.fxaa.uniforms.resolution.value.set(1/s.width,1/s.height)},[i,s.width,s.height]),m.useEffect(()=>()=>{i.ao.dispose(),i.output.dispose(),i.fxaa.dispose(),i.composer.dispose()},[i]),ue(()=>i.composer.render(),1),null}const lt=[[-27,12],[-29,-2],[-7,-14],[22,1],[26,13],[2,26],[-18,17]],Jt=[{id:"dock",name:"潮汐来信",p:[-8,30]},{id:"hill",name:"山顶的风",p:[-22,-22]},{id:"garden",name:"温室之外",p:[27,-7]}],Lt={KeyW:"forward",ArrowUp:"forward",KeyS:"back",ArrowDown:"back",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",Space:"jump",ShiftLeft:"boost",ShiftRight:"boost",KeyB:"brake",KeyE:"interact"},Ft={x:0,y:0,z:0},Kn=m.forwardRef(function(e,t){const s=m.useRef(null);m.useImperativeHandle(t,()=>({reset:()=>{var a;return(a=s.current)==null?void 0:a.reset()},teleport:a=>{var l;return(l=s.current)==null?void 0:l.teleport(a)},input:(a,l)=>{var h;return(h=s.current)==null?void 0:h.input(a,l)},interact:()=>{var a;return(a=s.current)==null?void 0:a.interact()}}),[]);const i=Pe.find(a=>a.id===e.activeMission),r=i.steps[e.steps[i.id]??0];return o.jsxs(Os,{shadows:!0,dpr:e.quality==="high"?[1,1.5]:1,camera:{position:[0,24,38],fov:42,near:.1,far:600},gl:{antialias:!0,powerPreference:"high-performance",toneMapping:Vt,toneMappingExposure:e.dusk?1:1.02,preserveDrawingBuffer:!0},frameloop:e.paused?"demand":"always",children:[o.jsx("color",{attach:"background",args:[e.dusk?"#b3a79a":"#c1d7d0"]}),o.jsx("fog",{attach:"fog",args:[e.dusk?"#b3a79a":"#c1d7d0",95,260]}),o.jsx("ambientLight",{intensity:e.dusk?.35:.24}),o.jsx("hemisphereLight",{args:[e.dusk?"#b8c7d6":"#d5e7ef","#87936f",e.dusk?.9:1.1]}),o.jsx("directionalLight",{position:e.dusk?[-38,18,25]:[-32,42,25],color:e.dusk?"#ffb479":"#ffe6c6",intensity:e.dusk?2.6:2.8,castShadow:!0,"shadow-mapSize":e.quality==="high"?[2048,2048]:[1024,1024],"shadow-camera-left":-52,"shadow-camera-right":52,"shadow-camera-top":47,"shadow-camera-bottom":-47,"shadow-normalBias":.035,"shadow-bias":-12e-5}),o.jsx(m.Suspense,{fallback:null,children:o.jsxs(Ws,{paused:e.paused,gravity:[0,-16,0],timeStep:1/60,children:[o.jsx(fn,{dusk:e.dusk}),o.jsx(an,{}),o.jsx(Dn,{}),o.jsx(Sn,{}),o.jsx(Mn,{resetKey:e.propsReset}),o.jsx(wn,{steps:e.steps,design:e.design}),(e.steps.simulation??0)>=2&&o.jsx(pn,{}),o.jsx(Js,{steps:e.steps}),o.jsx($s,{onWin:e.onWin,resetKey:e.propsReset}),r&&!e.photo&&!e.race.running&&o.jsx(wt,{position:r.position}),o.jsx(In,{found:e.found}),o.jsx(Un,{race:e.race}),o.jsx(Bn,{ref:s,...e})]})}),e.quality==="high"&&o.jsx(Gn,{})]})});function In({found:n}){return o.jsx(o.Fragment,{children:Jt.filter(e=>!n.includes(e.id)).map(e=>o.jsxs("group",{children:[o.jsx(wt,{position:e.p}),o.jsx(de,{text:e.name,p:[e.p[0],R(...e.p)+1,e.p[1]],width:2})]},e.id))})}function Un({race:n}){return o.jsxs("group",{position:[-18,R(-18,17),17],children:[[-2.7,2.7].map(e=>o.jsxs("mesh",{position:[e,1.1,0],castShadow:!0,children:[o.jsx("cylinderGeometry",{args:[.06,.06,2.2,8]}),o.jsx("meshStandardMaterial",{color:"#755e40"})]},e)),o.jsx(de,{text:n.running?"GO · 环岛计时":"环岛起点",p:[-4.2,1.6,0],width:3})]})}const Bn=m.forwardRef(function(e,t){const{overview:s,paused:i,reduced:r,labelRefs:a,dotRef:l,onNear:h,onReady:c}=e,u=m.useRef(null),f=m.useRef(null),p=m.useRef([]),d=m.useRef(new Set),b=m.useRef(null),g=m.useRef(!1),M=m.useRef(0),T=m.useRef(0),v=m.useRef(!1),_=m.useRef(0),C=m.useRef(0),{world:U,rapier:q}=Vs(),{camera:V,size:G,invalidate:D,gl:N}=Ht(),L=m.useRef(new A),I=m.useRef(new A(-16,0,18)),Z=m.useRef(new A),ee=m.useRef(new A),re=m.useRef(0),B=m.useRef(e);B.current=e;const J=m.useRef({azimuth:.62,elevation:.62,zoom:1,drag:!1,x:0,y:0}),me=m.useRef(0),K=m.useRef(null),$=m.useRef({checkpoint:0,time:0,finished:!1});m.useEffect(()=>{$.current={checkpoint:0,time:0,finished:!1}},[e.race.nonce]);function te(){var x,j;d.current.clear(),(x=u.current)==null||x.setLinvel(Ft,!0),(j=u.current)==null||j.setAngvel(Ft,!0),Se.engine(0,!0)}function se(x){var j,P;te(),K.current=null,(j=u.current)==null||j.setTranslation({x:x[0],y:R(x[0],x[2])+1.5,z:x[2]},!0),(P=u.current)==null||P.setRotation({x:0,y:0,z:0,w:1},!0),D()}function ge(){var y;const x=(y=u.current)==null?void 0:y.translation(),j=B.current,P=Pe.find(O=>O.id===j.activeMission),w=P.steps[j.steps[P.id]??0];!j.paused&&!j.photo&&x&&w&&Math.hypot(x.x-w.position[0],x.z-w.position[1])<3.2&&Math.abs(x.y-R(x.x,x.z))<2.5&&(te(),j.onAdvance())}m.useImperativeHandle(t,()=>({reset:()=>se(ae.spawn),teleport:se,interact:ge,input:(x,j)=>{if(!(B.current.paused||B.current.photo))if(j){if(x==="interact"){ge();return}d.current.add(x),B.current.onDrive()}else d.current.delete(x)}}),[]),m.useEffect(()=>{(i||e.photo)&&te(),D()},[i,e.photo,s,G.width,G.height,D]),m.useEffect(()=>()=>{f.current&&(U.removeVehicleController(f.current),f.current=null),Se.engine(0,!0)},[U]),m.useEffect(()=>{const x=w=>{if(B.current.paused||B.current.photo||w.altKey||w.metaKey||w.ctrlKey||w.target instanceof HTMLInputElement||w.target instanceof HTMLTextAreaElement||w.target instanceof HTMLSelectElement)return;if(w.code==="KeyH"){Se.cue("horn");return}const y=Lt[w.code];if(y){if(w.preventDefault(),y==="interact"){w.repeat||ge();return}if(y==="jump"&&w.repeat)return;d.current.add(y),B.current.onDrive()}},j=w=>{const y=Lt[w.code];y&&d.current.delete(y)},P=()=>te();return window.addEventListener("keydown",x),window.addEventListener("keyup",j),window.addEventListener("blur",P),document.addEventListener("visibilitychange",P),()=>{window.removeEventListener("keydown",x),window.removeEventListener("keyup",j),window.removeEventListener("blur",P),document.removeEventListener("visibilitychange",P)}},[]),m.useEffect(()=>{const x=N.domElement,j=O=>{J.current.drag=!0,J.current.x=O.clientX,J.current.y=O.clientY,x.setPointerCapture(O.pointerId)},P=O=>{const Q=J.current;Q.drag&&(Q.azimuth-=(O.clientX-Q.x)*.004,Q.elevation=qe.clamp(Q.elevation+(O.clientY-Q.y)*.003,.33,1.18),Q.x=O.clientX,Q.y=O.clientY,D())},w=()=>{J.current.drag=!1},y=O=>{B.current.photo&&(O.preventDefault(),J.current.zoom=qe.clamp(J.current.zoom+O.deltaY*.001,.55,1.65),D())};return x.addEventListener("pointerdown",j),x.addEventListener("pointermove",P),x.addEventListener("pointerup",w),x.addEventListener("pointercancel",w),x.addEventListener("wheel",y,{passive:!1}),()=>{x.removeEventListener("pointerdown",j),x.removeEventListener("pointermove",P),x.removeEventListener("pointerup",w),x.removeEventListener("pointercancel",w),x.removeEventListener("wheel",y)}},[N,D]),Hs(()=>{const x=u.current;if(!x||B.current.paused)return;if(!f.current){const E=U.createVehicleController(x);E.indexUpAxis=1,E.setIndexForwardAxis=2;for(const W of[-.88,.88])for(const fe of[-.85,.85]){const oe=E.numWheels();E.addWheel({x:W,y:.1,z:fe},{x:0,y:-1,z:0},{x:-1,y:0,z:0},.42,.46),E.setWheelSuspensionStiffness(oe,32),E.setWheelSuspensionCompression(oe,5),E.setWheelSuspensionRelaxation(oe,5.5),E.setWheelMaxSuspensionForce(oe,120),E.setWheelMaxSuspensionTravel(oe,.3),E.setWheelFrictionSlip(oe,1.9),E.setWheelSideFrictionStiffness(oe,1.3)}f.current=E}const j=f.current,P=1/60,w=d.current,y=Number(w.has("forward"))-Number(w.has("back")),O=Number(w.has("left"))-Number(w.has("right")),Q=w.has("brake"),he=w.has("boost");_.current=Math.hypot(x.linvel().x,x.linvel().z),M.current=qe.damp(M.current,O*.48,9,P);const xe=Q?0:-y*(he?54:32)*(_.current>(he?21:13)?0:1);for(let E=0;E<4;E++)j.setWheelEngineForce(E,xe),j.setWheelBrake(E,Q?3:y?0:.2),j.setWheelSteering(E,E%2===0?M.current:0),j.setWheelSideFrictionStiffness(E,Q&&O?.45:1.3);j.updateVehicle(P,void 0,void 0,E=>{var W;return((W=E.parent())==null?void 0:W.handle)!==x.handle&&!E.isSensor()});const S=v.current;v.current=Array.from({length:4},(E,W)=>j.wheelIsInContact(W)).some(Boolean),v.current&&!S&&x.linvel().y<-1&&Se.cue("land"),T.current=Math.max(0,T.current-P),w.has("jump")&&(w.delete("jump"),v.current&&T.current===0&&(x.applyImpulse({x:0,y:x.mass()*6.8,z:0},!0),T.current=.7,Se.cue("jump")));const F=new A(0,1,0).applyQuaternion(x.rotation());C.current=F.y<.2&&_.current<1?C.current+P:0;const X=x.translation();X.y<-3||Math.abs(X.x)>43||Math.abs(X.z)>35?se(ae.spawn):C.current>2.4&&(se([X.x,0,X.z]),C.current=0)}),ue((x,j)=>{const P=u.current;if(!P)return;const w=Math.min(j,.05),y=P.translation(),O=f.current;if(g.current||(g.current=!0,c()),Se.engine(_.current,i||e.photo||document.hidden),O)for(let S=0;S<4;S++){const F=p.current[S];F&&(F.position.y=.1-(O.wheelSuspensionLength(S)??.42),F.rotation.y=O.wheelSteering(S)??0,F.children[0].rotation.x=O.wheelRotation(S)??0)}if(s)Z.current.set(45,70,75),L.current.set(G.width>900?7:0,0,0),G.width<700&&Z.current.multiplyScalar(1.4);else{const S=J.current,F=(G.width<700?41:32)*S.zoom;Z.current.set(y.x+Math.sin(S.azimuth)*Math.cos(S.elevation)*F,y.y+Math.sin(S.elevation)*F,y.z+Math.cos(S.azimuth)*Math.cos(S.elevation)*F),L.current.set(y.x,y.y+.5,y.z-2);const X=new A(y.x,y.y+1,y.z),E=Z.current.clone().sub(X),W=E.length();E.normalize();const fe=U.castRay(new q.Ray(X,E),W,!0,void 0,void 0,void 0,P);fe&&fe.timeOfImpact<W-1&&(Z.current.y+=Math.min(10,(W-fe.timeOfImpact)*.55))}r?(V.position.copy(Z.current),I.current.copy(L.current)):(V.position.lerp(Z.current,1-Math.exp(-w*3)),I.current.lerp(L.current,1-Math.exp(-w*4))),V.lookAt(I.current),V.updateMatrixWorld(),ae.districts.forEach((S,F)=>{const X=a.current[F];if(!X)return;ee.current.set(S.position[0],R(S.position[0],S.position[1])+10,S.position[1]).project(V);const E=(ee.current.x*.5+.5)*G.width,W=(-ee.current.y*.5+.5)*G.height;X.style.transform="translate("+E+"px,"+W+"px) translate(-50%,-100%)",X.style.visibility=!e.photo&&ee.current.z<1&&E>70&&E<G.width-65&&W>90&&W<G.height-110&&(s||Math.hypot(y.x-S.position[0],y.z-S.position[1])<20)?"visible":"hidden"}),l.current&&(l.current.setAttribute("cx",String(y.x)),l.current.setAttribute("cy",String(y.z)));let Q=null,he=8;ae.districts.forEach(S=>{const F=Math.hypot(y.x-S.arrival[0],y.z-S.arrival[2]);F<he&&(he=F,Q=S.id)}),Q!==b.current&&(b.current=Q,h(Q));const xe=new A(y.x,y.y,y.z);if(K.current&&!i){const S=xe.distanceTo(K.current);S<3&&(me.current+=S)}if(K.current=xe,e.race.running&&!$.current.finished&&!i){const S=$.current;S.time+=j;const F=lt[S.checkpoint];F&&Math.hypot(y.x-F[0],y.z-F[1])<4&&(S.checkpoint++,Se.cue("collect"),S.checkpoint===lt.length&&(S.finished=!0))}if(re.current+=w,re.current>.18){re.current=0;const S=Pe.find(W=>W.id===B.current.activeMission),F=S.steps[B.current.steps[S.id]??0],X=F?Math.hypot(y.x-F.position[0],y.z-F.position[1]):0,E={speed:Math.round(_.current*3.6),distance:Math.round(X),canInteract:!!F&&X<3.2&&Math.abs(y.y-R(y.x,y.z))<2.5,airborne:!v.current,travelled:Math.floor(me.current)};if(B.current.onStatus(E),e.race.running&&B.current.onRace({...$.current}),!i)for(const W of Jt)!e.found.includes(W.id)&&Math.hypot(y.x-W.p[0],y.z-W.p[1])<2.2&&B.current.onDiscover(W.id)}i&&V.position.distanceTo(Z.current)>.02&&D()});const Me=Pe.find(x=>x.id===e.activeMission),ye=e.steps[Me.id]??0,we=e.race.running?lt[$.current.checkpoint]:void 0;return o.jsxs(o.Fragment,{children:[o.jsxs(ce,{ref:u,position:[ae.spawn[0],R(ae.spawn[0],ae.spawn[2])+1.5,ae.spawn[2]],colliders:!1,linearDamping:.1,angularDamping:1.6,ccd:!0,canSleep:!1,restitution:.05,children:[o.jsx(bt,{args:[.73,.3,1.3],position:[0,.15,0],mass:8}),o.jsx(Ys,{wheels:p,cargo:ye>0&&ye<Me.steps.length,paint:e.paint})]}),o.jsx(_n,{body:u,paused:i||e.photo}),we&&o.jsx(wt,{position:we})]})});export{lt as checkpoints,Kn as default,Jt as discoveries};
