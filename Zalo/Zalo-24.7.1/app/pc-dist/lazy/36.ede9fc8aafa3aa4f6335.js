(this.webpackJsonp=this.webpackJsonp||[]).push([[36],{Ds0a:function(e,t,n){"use strict";n.r(t);var a=n("VTBJ"),o=n("q1tI"),r=n.n(o),s=n("T1Xd"),l=n("l4dk"),c=n("PGI9");var i=()=>{const{isEnabled:e}=Object(c.a)(),t=Object(s.j)(l.a),n=Object(o.useMemo)((()=>t.fpsColumns.length>16?t.fpsColumns.slice(t.fpsColumns.length-16):t.fpsColumns),[t.fpsColumns]);return Object(a.a)(Object(a.a)({},t),{},{fpsColumns:n,isEnabled:e})};var u=e=>{const{width:t,height:n,columns:a,isRecorderOpen:r}=e;return{containerStyle:Object(o.useMemo)((()=>({zIndex:9999,position:"relative",width:t,height:n,padding:"2px 8px",backgroundColor:"rgba(14, 31, 115, 0.5)",color:"rgb(116, 242, 255)",fontSize:"12px",boxSizing:"border-box"})),[t,n]),graphStyle:Object(o.useMemo)((()=>({position:"absolute",left:"8px",right:"8px",bottom:"8px",height:r?n-42:n-30,backgroundColor:"rgba(14, 31, 115, 0.45)",overflow:"hidden",transition:"height .3s ease"})),[n,r]),getBarStyle:Object(o.useCallback)(((e,t)=>({position:"absolute",bottom:"0",right:4*(a-1-t)+"px",width:"4px",height:((r?n-42:n-30)-2)*e,backgroundColor:"rgba(116, 242, 255, 0.7)",MozBoxSizing:"border-box",boxSizing:"border-box",transition:"height .05s ease"})),[a,r])}},b=n("N1xz"),g=n("igRa"),p=n("wx14"),d=n("jDHv");const f={zIndex:0,position:"absolute",bottom:0,left:"50%"},m=Object(o.memo)((()=>{const[e,t]=Object(o.useState)([]),n=Object(o.useRef)(0);Object(o.useEffect)((()=>{const e=e=>{++n.current,t((t=>[...t,Object(a.a)(Object(a.a)({},e),{},{id:n.current})]))};return b.a.UIManager.on(g.a.VISUALIZE_INFO,e),()=>{b.a.UIManager.removeListener(g.a.VISUALIZE_INFO,e)}}),[]);const s=Object(o.useCallback)((e=>{t((t=>[...t.filter((t=>t.id!==e))]))}),[]);return r.a.createElement("div",{style:f},e.map((e=>r.a.createElement(h,Object(p.a)({key:e.id},e,{onDone:s})))))})),h=Object(o.memo)((e=>{const t=Object(o.useRef)(),a=Object(o.useRef)(null);Object(o.useEffect)((()=>{let t,n=0,o=0;const r=(e,t)=>Math.floor(Math.random()*(t-e+1))+e;let l=r(5,10),c=r(8,18);const i=r=>{let u,b,g;if(t||(t=r),u=(r-t)/10/1e3,b=500*u/7,g=-1*b*b+l*b+c,n&&n>g){const e=o+1;o=e,a.current.style.transform=`rotate(${e}deg)`}n=g,a.current.style.left=7*b+"px",a.current.style.bottom=7*g+"px",7*g<-1e3||u>=1?e.onDone(e.id):s(i)};s(i)}),[]);const s=Object(o.useCallback)((e=>{try{var a;if(!t.current){const{rAF:e}=n("MnS2"),{requestAnimationFrame:a}=d.ModuleContainer.resolve(e);t.current=a}return null===(a=t.current)||void 0===a?void 0:a.call(t,e,!0)}catch(o){}}),[]);return r.a.createElement("div",{ref:a,style:{position:"absolute",bottom:"0px",left:"0px",color:(()=>{const e=["#593E67","#84495F","#B85B56","#001C44","#0C5776","#4A26AB","#034C5F","#143A51","#5D3B78"];return e[Math.floor(Math.random()*e.length)]})(),fontSize:"24px",userSelect:"none",pointerEvents:"none",textShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}},e.text)}));var O=m;const x=r.a.lazy((()=>n.e(41).then(n.bind(null,"2CG1")))),j=r.a.lazy((()=>n.e(42).then(n.bind(null,"IODd")))),v=Object(o.memo)((e=>{const{width:t=64,height:n=64}=e,{isEnabled:s,fps:l,maxFps:c,fpsColumns:p}=i(),[d,f]=Object(o.useState)(!1),{containerStyle:m,graphStyle:h,getBarStyle:v}=u({width:t,height:n,columns:p.length,isRecorderOpen:d});return Object(o.useEffect)((()=>{const e=e=>{f(e)};var t;s&&(b.a.UIManager.on(g.a.TOGGLE_FPS_FALLING,e),f(!(null===(t=b.a.UIManager.Tool)||void 0===t||!t.isOpen())));return()=>{b.a.UIManager.removeListener(g.a.TOGGLE_FPS_FALLING,e)}}),[s]),s?r.a.createElement("div",{style:m},r.a.createElement(r.a.Suspense,{fallback:null},r.a.createElement(j,null)),d?r.a.createElement(r.a.Suspense,{fallback:null},r.a.createElement(x,null)):r.a.createElement("span",null,l," FPS"),r.a.createElement("div",{style:h},p.map(((e,t)=>r.a.createElement("div",{key:t,style:Object(a.a)({},v(e/c,t))})))),r.a.createElement(O,null)):null}));t.default=v},PGI9:function(e,t,n){"use strict";var a=n("q1tI"),o=n("N1xz"),r=n("KBA3");t.a=()=>{const[e,t]=Object(a.useState)(!1);return Object(a.useEffect)((()=>{const e=()=>{const e=r.a.getConfig().enable_for_staging_account,n=r.a.getConfig().staging_account,a=r.a.getConfig().enable_fps_monitor||r.a.getConfig().enable_fps_monitor_v2,s=!!o.a.UIManager.getRegisteredFpsMonitor()&&(r.a.enable&&a||e&&n);return t(s),s};return e()||r.a.on("staging_account",e),()=>{r.a.removeListener("staging_account",e)}}),[]),{isEnabled:e}}},l4dk:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("T1Xd");const o=Object(a.b)({key:"metricz/fps",default:{fps:0,avgFps:0,maxFps:0,fpsColumns:[]}})}}]);
//# sourceMappingURL=../sourcemaps/lazy/36.ede9fc8aafa3aa4f6335.js.map