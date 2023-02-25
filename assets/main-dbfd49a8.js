import{j as r,u as ke,L as B,O as Ne,a as Ae,c as Pe,b as Le,R as Ie,d as I}from"./index-81a7a782.js";import{r as x,d as T,R as N}from"./wallet-0d6fe0b8.js";import{r as De,S as $,D as We,a as Ue,m as Me,B as Q,b as Be,L as $e,n as Fe,c as F,C as ze,d as Ke,t as He,e as G,M as qe,R as Ve,f as K,g as Ge,F as Je,h as Ye,i as ge,j as H,k as se,l as ce}from"./ui-828740c4.js";import{D as Qe,C as Xe,a as Ze,U as et,b as tt,c as rt,M as nt,d as ot}from"./icons-bd61ed92.js";const at="modulepreload",st=function(e){return"/CONCORDIUM_TASK_4/"+e},ie={},z=function(t,n,s){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(u=>{if(u=st(u),u in ie)return;ie[u]=!0;const m=u.endsWith(".css"),h=m?'[rel="stylesheet"]':"";if(!!s)for(let d=o.length-1;d>=0;d--){const _=o[d];if(_.href===u&&(!m||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${h}`))return;const f=document.createElement("link");if(f.rel=m?"stylesheet":at,m||(f.as="script",f.crossOrigin=""),f.href=u,document.head.appendChild(f),m)return new Promise((d,_)=>{f.addEventListener("load",d),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})})).then(()=>t())};var J={},le=De;J.createRoot=le.createRoot,J.hydrateRoot=le.hydrateRoot;function ct({selected:e,options:t,select:n}){let s=[],o=1;const u=h=>h.name=="mainnet";for(let h of t)s.push({label:h.name,key:o,onClick:()=>n(h),danger:u(h),icon:u(h)?r.jsx(Xe,{}):r.jsx(Qe,{})}),o++;const m=h=>{Me.info("Click on menu item."),console.log("click",h)};return r.jsx($,{direction:"vertical",children:r.jsx(We.Button,{size:"large",menu:{items:s},onClick:m,icon:r.jsx(Ue,{}),arrow:!0,danger:u(e),children:e.name})})}const it="4221332d34e1694168c2a0c0b3fd0f273809612cb13d000d5c2e00e85f50f796",lt="9dd9ca4d19e9393877d2c44b70f89acbfc0883c2243e5eeaecc0d1cd0503f478",X={name:"testnet",genesisHash:it,jsonRpcUrl:"https://json-rpc.testnet.concordium.com",ccdScanBaseUrl:"https://testnet.ccdscan.io"},ut={name:"mainnet",genesisHash:lt,jsonRpcUrl:"https://json-rpc.mainnet.concordium.software",ccdScanBaseUrl:"https://ccdscan.io"};var xe={},Y={},dt={get exports(){return Y},set exports(e){Y=e}},ft="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ht=ft,pt=ht;function je(){}function _e(){}_e.resetWarningCache=je;var mt=function(){function e(s,o,u,m,h,i){if(i!==pt){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:_e,resetWarningCache:je};return n.PropTypes=n,n};dt.exports=mt();Object.defineProperty(xe,"__esModule",{value:!0});var ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},vt=function(){function e(t,n){for(var s=0;s<n.length;s++){var o=n[s];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),Ce=x,yt=Se(Ce),gt=Y,D=Se(gt);function Se(e){return e&&e.__esModule?e:{default:e}}function xt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function jt(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function _t(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Z=function(e){_t(t,e);function t(n){xt(this,t);var s=jt(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return s.generateIdenticon=s.generateIdenticon.bind(s),s}return vt(t,[{key:"componentDidMount",value:function(){this.generateIdenticon(ue({},this.props))}},{key:"componentWillUpdate",value:function(s){this.isEquivalent(this.props,s)||this.generateIdenticon(ue({},s))}},{key:"isEquivalent",value:function(s,o){var u=Object.getOwnPropertyNames(s),m=Object.getOwnPropertyNames(o);if(u.length!=m.length)return!1;for(var h=0;h<u.length;h++){var i=u[h];if(s[i]!==o[i])return!1}return!0}},{key:"generateIdenticon",value:function(s){var o=new Array(4);function u(l){for(var c=0;c<o.length;c++)o[c]=0;for(var a=0;a<l.length;a++)o[a%4]=(o[a%4]<<5)-o[a%4]+l.charCodeAt(a)}function m(){var l=o[0]^o[0]<<11;return o[0]=o[1],o[1]=o[2],o[2]=o[3],o[3]=o[3]^o[3]>>19^l^l>>8,(o[3]>>>0)/(1<<31>>>0)}function h(){var l=Math.floor(m()*360),c=m()*60+40+"%",a=(m()+m()+m()+m())*25+"%",p="hsl("+l+","+c+","+a+")";return p}function i(l){for(var c=l,a=l,p=Math.ceil(c/2),v=c-p,w=[],E=0;E<a;E++){for(var j=[],S=0;S<p;S++)j[S]=Math.floor(m()*2.3);var b=j.slice(0,v);b.reverse(),j=j.concat(b);for(var R=0;R<j.length;R++)w.push(j[R])}return w}function f(l,c,a,p,v,w){var E=Math.sqrt(c.length),j=E*p;l.width=j,l.style.width=j+"px",l.height=j,l.style.height=j+"px";var S=l.getContext("2d");S.fillStyle=v,S.fillRect(0,0,l.width,l.height),S.fillStyle=a;for(var b=0;b<c.length;b++)if(S.fillStyle=c[b]===1?a:w,c[b]){var R=Math.floor(b/E),L=b%E;S.fillRect(L*p,R*p,p,p)}}var d=s||{},_=d.size||8,A=d.scale||4,O=d.seed||Math.floor(Math.random()*Math.pow(10,16)).toString(16);u(O);var P=d.color||h(),M=d.bgColor||h(),C=d.spotColor||h(),y=i(_),g=f(this.identicon,y,P,A,M,C);return g}},{key:"render",value:function(){var s=this;return yt.default.createElement("canvas",{ref:function(u){s.identicon=u},className:this.props.className})}}]),t}(Ce.Component),Ct=xe.default=Z;Z.defaultProps={className:"identicon"};Z.propTypes={seed:D.default.string.isRequired,size:D.default.number,scale:D.default.number,color:D.default.string,bgColor:D.default.string,spotColor:D.default.string};function St(e){const t=x.useContext(ee),n=e.address;let s=(n==null?void 0:n.slice(0,5))+"..."+(n==null?void 0:n.slice(-4));const o=t.network.ccdScanBaseUrl+"/?dcount=1&dentity=account&daddress="+n;return r.jsx(r.Fragment,{children:n&&r.jsx(Q,{type:"dashed",size:"large",children:r.jsxs($,{direction:"horizontal",children:[r.jsx(Be,{size:"small",icon:r.jsx(Ct,{seed:n.toLowerCase(),size:8,scale:e.fontSize?e.fontSize/7:4})}),r.jsx($e,{copyable:{text:n},href:o,target:"_blank",rel:"noopener noreferrer",children:s})]})})})}function bt(e,t){return`${e.ccdScanBaseUrl}/?dcount=1&dentity=account&daddress=${t}`}function Et({connection:e,account:t,network:n}){const[s,o]=x.useState(),[u,m]=x.useState("");x.useEffect(()=>{e&&o(void 0),e&&t&&(o(void 0),T.withJsonRpcClient(e,d=>d.getAccountInfo(t)).then(d=>{o(d),m(""),d&&f(d)}).catch(d=>{o(void 0),m(d)}))},[e,t]);const[h,i]=Fe.useNotification(),f=d=>{h.info({message:`Notification ${n.name}`,description:r.jsxs(r.Fragment,{children:[u&&r.jsx(F,{message:"Error querying account info: {infoError}"}),t&&r.jsxs(r.Fragment,{children:["Connected to account"," ",r.jsx("a",{target:"_blank",rel:"noreferrer",href:bt(n,t),children:r.jsx("code",{children:t})})," ","on ",r.jsx("b",{children:n.name})]}),r.jsx(Tt,{account:d})]})})};return r.jsxs(r.Fragment,{children:[s&&r.jsx(St,{address:s.accountAddress}),i]})}function Tt({account:e}){return r.jsx(r.Fragment,{children:r.jsx(F,{message:r.jsxs("ul",{className:"mb-0",children:[r.jsxs("li",{children:["Address: ",e.accountAddress]}),r.jsxs("li",{children:["Nonce: ",e.accountNonce.toString()]}),r.jsxs("li",{children:["Balance: ",e.accountAmount.toString()]}),r.jsxs("li",{children:["Index: ",e.accountIndex.toString()]})]})})})}function de(e){const{connection:t,connectorType:n,connectorName:s}=e,{isSelected:o,isConnected:u,isDisabled:m,select:h}=T.useWalletConnectorSelector(n,t,e),i=u?"Disconnect":o?"Using":"Use",f=u?r.jsx(Ze,{}):o?r.jsx(ze,{}):r.jsx(Ke,{});return r.jsx(Q,{size:"large",className:"w-100",disabled:m,onClick:h,icon:f,children:`${i} ${s}`})}const Rt="19225c963ab9231c4aeef948e34d423a",Ot={projectId:Rt,metadata:{name:"become_the_richest Contract Update",description:"Become the Richest dApp demo",url:"#",icons:["https://walletconnect.com/walletconnect-logo.png"]}},q=T.ephemeralConnectorType(T.BrowserWalletConnector.create),fe=T.ephemeralConnectorType(T.WalletConnectConnector.create.bind(void 0,Ot));function wt(e){return e.message||e}const kt="/CONCORDIUM_TASK_4/assets/concordium_logo_white-1c74f7eb.webp",{Header:Nt,Sider:At,Content:Pt}=G,ee=x.createContext({network:X,setNetwork:e=>{}});function Lt(){const[e,t]=x.useState(X);return r.jsx(ee.Provider,{value:{network:e,setNetwork:t},children:r.jsx(T.WithWalletConnector,{network:e,children:n=>r.jsx(It,{...n})})})}function It(e){const{activeConnectorType:t,activeConnector:n,activeConnectorError:s,network:o,connectedAccounts:u,genesisHashes:m}=e,h=x.useContext(ee),{connection:i,setConnection:f,account:d,genesisHash:_}=T.useConnection(u,m),{connect:A,isConnecting:O,connectError:P}=T.useConnect(n,f),[M,C]=x.useState(),[y,g]=x.useState(""),[l,c]=x.useState(!1),a=x.useRef(null),p=x.useRef(null),v=ke(),{isSelected:w,isConnected:E,isDisabled:j,select:S}=T.useWalletConnectorSelector(q,i,e),[b,R]=x.useState({connection:i,account:d,network:o,refNavBar:p,refConnectButtons:a}),L="Nabetse ©2023 Created by Nabetse",{token:{colorBgContainer:ne}}=He.useToken();x.useEffect(()=>{const oe=Date.now(),ae=new Date(oe);!i&&!n&&(console.log(ae.toLocaleTimeString()+"> the is NO connection"),S()),i&&(console.log(ae.toLocaleTimeString()+"> the is a connection"),C(void 0),T.withJsonRpcClient(i,async W=>(await W.getConsensusStatus()).genesisBlock).then(W=>{C(W),g("")}).catch(W=>{C(void 0),g(wt(W))})),i&&d&&R({connection:i,account:d,network:o,refNavBar:p,refConnectButtons:a}),i&&!d&&R({connection:i,account:d,network:o,refNavBar:p,refConnectButtons:a})},[i,_,o,d,n]);function we(){switch(v.pathname){case k:return["0"];case k+"account-info":return["1"];case k+"token-info":return["2"];case k+"concordium-swap":return["3"];default:return["0"]}}return r.jsx(r.Fragment,{children:r.jsxs(G,{children:[r.jsxs(At,{trigger:null,collapsible:!0,collapsed:l,children:[r.jsx(B,{to:k,children:r.jsx("img",{src:kt,className:"logo",alt:"Concordium"})}),r.jsx(qe,{ref:p,theme:"dark",mode:"inline",defaultSelectedKeys:["1"],selectedKeys:we(),items:[{key:"1",icon:r.jsx(et,{}),label:r.jsx(B,{to:k+"account-info",children:"Account Info"})},{key:"2",icon:r.jsx(tt,{}),label:r.jsx(B,{to:k+"token-info",children:"TokenA displenser"})},{key:"3",icon:r.jsx(rt,{}),label:r.jsx(B,{to:k+"concordium-swap",children:"Concordium Swap"})}]})]}),r.jsxs(G,{className:"site-layout",children:[r.jsx(Nt,{style:{padding:0,background:ne},children:r.jsxs(Ve,{children:[r.jsx(K,{span:3,children:x.createElement(l?nt:ot,{className:"trigger",onClick:()=>c(!l)})}),r.jsx(K,{span:4,flex:"auto"}),r.jsx(K,{span:12,ref:a,children:r.jsxs($,{size:"small",children:[r.jsx(Et,{connection:i,account:d,network:o}),r.jsx(de,{connectorName:"Browser wallet",connectorType:q,connection:i,...e}),r.jsx(de,{connectorType:fe,connectorName:"WalletConnect",connection:i,...e}),r.jsx(r.Fragment,{children:n&&!d&&r.jsxs(Q,{size:"large",onClick:A,disabled:O,children:[O&&"Connecting...",!O&&t===q&&"Connect Browser Wallet",!O&&t===fe&&"Connect Mobile Wallet"]})}),r.jsx(ct,{selected:h.network,options:[X,ut],select:h.setNetwork})]})})]})}),r.jsx(Pt,{style:{margin:"48px 48px",padding:48,minHeight:"100vh",background:ne},children:r.jsxs($,{align:"center",direction:"vertical",size:"large",style:{display:"flex"},children:[r.jsx(Ne,{context:b}),r.jsx("hr",{}),s&&r.jsx(F,{message:"activeConnectorError ",description:s,type:"error",showIcon:!0}),!s&&t&&!n&&r.jsx(Ge,{}),P&&r.jsx(F,{message:"connectError ",description:P,type:"error",showIcon:!0})]})}),r.jsx(Je,{style:{textAlign:"center"},children:L})]})]})})}function he(){const e=Ae();return console.error(e),r.jsxs("div",{id:"error-page",children:[r.jsx("h1",{children:"Oops!"}),r.jsx("p",{children:"Sorry, an unexpected error has occurred."}),r.jsx("p",{children:r.jsx("i",{children:e.statusText||e.message})})]})}function Dt(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Ye(e,t)}var te=ge,Wt={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ut={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Mt={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},be={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},re={};re[te.ForwardRef]=Mt;re[te.Memo]=be;function pe(e){return te.isMemo(e)?be:re[e.$$typeof]||Wt}var Bt=Object.defineProperty,$t=Object.getOwnPropertyNames,me=Object.getOwnPropertySymbols,Ft=Object.getOwnPropertyDescriptor,zt=Object.getPrototypeOf,ve=Object.prototype;function Ee(e,t,n){if(typeof t!="string"){if(ve){var s=zt(t);s&&s!==ve&&Ee(e,s,n)}var o=$t(t);me&&(o=o.concat(me(t)));for(var u=pe(e),m=pe(t),h=0;h<o.length;++h){var i=o[h];if(!Ut[i]&&!(n&&n[i])&&!(m&&m[i])&&!(u&&u[i])){var f=Ft(t,i);try{Bt(e,i,f)}catch{}}}}return e}var Kt=Ee;function Ht(e,t){if(!e){var n=new Error("loadable: "+t);throw n.framesToPop=1,n.name="Invariant Violation",n}}var qt=N.createContext(),Vt={initialChunks:{}},ye="PENDING",Gt="RESOLVED",V="REJECTED";function Jt(e){return typeof e=="function"?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}var Yt=function(t){var n=function(o){return N.createElement(qt.Consumer,null,function(u){return N.createElement(t,Object.assign({__chunkExtractor:u},o))})};return t.displayName&&(n.displayName=t.displayName+"WithChunkExtractor"),n},Qt=function(t){return t};function Te(e){var t=e.defaultResolveComponent,n=t===void 0?Qt:t,s=e.render,o=e.onLoad;function u(h,i){i===void 0&&(i={});var f=Jt(h),d={};function _(y){return i.cacheKey?i.cacheKey(y):f.resolve?f.resolve(y):"static"}function A(y,g,l){var c=i.resolveComponent?i.resolveComponent(y,g):n(y);if(i.resolveComponent&&!ge.isValidElementType(c))throw new Error("resolveComponent returned something that is not a React component!");return Kt(l,c,{preload:!0}),c}var O=function(g){var l=_(g),c=d[l];return(!c||c.status===V)&&(c=f.requireAsync(g),c.status=ye,d[l]=c,c.then(function(){c.status=Gt},function(a){console.error("loadable-components: failed to asynchronously load component",{fileName:f.resolve(g),chunkName:f.chunkName(g),error:a&&a.message}),c.status=V})),c},P=function(y){Dt(g,y),g.getDerivedStateFromProps=function(a,p){var v=_(a);return H({},p,{cacheKey:v,loading:p.loading||p.cacheKey!==v})};function g(c){var a;return a=y.call(this,c)||this,a.state={result:null,error:null,loading:!0,cacheKey:_(c)},Ht(!c.__chunkExtractor||f.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),c.__chunkExtractor?i.ssr===!1?se(a):(f.requireAsync(c).catch(function(){return null}),a.loadSync(),c.__chunkExtractor.addChunk(f.chunkName(c)),se(a)):(i.ssr!==!1&&(f.isReady&&f.isReady(c)||f.chunkName&&Vt.initialChunks[f.chunkName(c)])&&a.loadSync(),a)}var l=g.prototype;return l.componentDidMount=function(){this.mounted=!0;var a=this.getCache();a&&a.status===V&&this.setCache(),this.state.loading&&this.loadAsync()},l.componentDidUpdate=function(a,p){p.cacheKey!==this.state.cacheKey&&this.loadAsync()},l.componentWillUnmount=function(){this.mounted=!1},l.safeSetState=function(a,p){this.mounted&&this.setState(a,p)},l.getCacheKey=function(){return _(this.props)},l.getCache=function(){return d[this.getCacheKey()]},l.setCache=function(a){a===void 0&&(a=void 0),d[this.getCacheKey()]=a},l.triggerOnLoad=function(){var a=this;o&&setTimeout(function(){o(a.state.result,a.props)})},l.loadSync=function(){if(this.state.loading)try{var a=f.requireSync(this.props),p=A(a,this.props,C);this.state.result=p,this.state.loading=!1}catch(v){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:f.resolve(this.props),chunkName:f.chunkName(this.props),error:v&&v.message}),this.state.error=v}},l.loadAsync=function(){var a=this,p=this.resolveAsync();return p.then(function(v){var w=A(v,a.props,C);a.safeSetState({result:w,loading:!1},function(){return a.triggerOnLoad()})}).catch(function(v){return a.safeSetState({error:v,loading:!1})}),p},l.resolveAsync=function(){var a=this.props;a.__chunkExtractor,a.forwardedRef;var p=ce(a,["__chunkExtractor","forwardedRef"]);return O(p)},l.render=function(){var a=this.props,p=a.forwardedRef,v=a.fallback;a.__chunkExtractor;var w=ce(a,["forwardedRef","fallback","__chunkExtractor"]),E=this.state,j=E.error,S=E.loading,b=E.result;if(i.suspense){var R=this.getCache()||this.loadAsync();if(R.status===ye)throw this.loadAsync()}if(j)throw j;var L=v||i.fallback||null;return S?L:s({fallback:L,result:b,options:i,props:H({},w,{ref:p})})},g}(N.Component),M=Yt(P),C=N.forwardRef(function(y,g){return N.createElement(M,Object.assign({forwardedRef:g},y))});return C.displayName="Loadable",C.preload=function(y){C.load(y)},C.load=function(y){return O(y)},C}function m(h,i){return u(h,H({},i,{suspense:!0}))}return{loadable:u,lazy:m}}function Xt(e){return e.__esModule?e.default:e.default||e}var Re=Te({defaultResolveComponent:Xt,render:function(t){var n=t.result,s=t.props;return N.createElement(n,s)}}),Zt=Re.loadable,er=Re.lazy,Oe=Te({onLoad:function(t,n){t&&n.forwardedRef&&(typeof n.forwardedRef=="function"?n.forwardedRef(t):n.forwardedRef.current=t)},render:function(t){var n=t.result,s=t.props;return s.children?s.children(n):null}}),tr=Oe.loadable,rr=Oe.lazy,U=Zt;U.lib=tr;var nr=er;nr.lib=rr;const k="/",or=U(()=>z(()=>import("./AccountInfoPage-6d762af9.js"),["assets/AccountInfoPage-6d762af9.js","assets/index-81a7a782.js","assets/wallet-0d6fe0b8.js","assets/ui-828740c4.js","assets/NoAccount-efe08d43.js","assets/icons-bd61ed92.js"]),{resolveComponent:e=>e.AccountInfoPage}),ar=U(()=>z(()=>import("./TokenAPage-0b650600.js"),["assets/TokenAPage-0b650600.js","assets/index-81a7a782.js","assets/wallet-0d6fe0b8.js","assets/NoAccount-efe08d43.js","assets/ui-828740c4.js","assets/tokenAFn-b5d97af9.js","assets/icons-bd61ed92.js"]),{resolveComponent:e=>e.TokenAPage}),sr=U(()=>z(()=>import("./SwapPage-4851b4ad.js"),["assets/SwapPage-4851b4ad.js","assets/index-81a7a782.js","assets/wallet-0d6fe0b8.js","assets/NoAccount-efe08d43.js","assets/ui-828740c4.js","assets/tokenAFn-b5d97af9.js","assets/icons-bd61ed92.js"]),{resolveComponent:e=>e.SwapPage}),cr=U(()=>z(()=>import("./IndexPage-816957ca.js"),["assets/IndexPage-816957ca.js","assets/index-81a7a782.js","assets/wallet-0d6fe0b8.js","assets/NoAccount-efe08d43.js","assets/ui-828740c4.js"]),{resolveComponent:e=>e.IndexPage}),ir=Pe(Le(r.jsx(I,{path:k,element:r.jsx(Lt,{}),errorElement:r.jsx(he,{}),children:r.jsxs(I,{errorElement:r.jsx(he,{}),children:[r.jsx(I,{index:!0,element:r.jsx(cr,{})}),r.jsx(I,{path:"account-info/",element:r.jsx(or,{})}),r.jsx(I,{path:"token-info/",element:r.jsx(ar,{})}),r.jsx(I,{path:"concordium-swap/",element:r.jsx(sr,{})})]})})));J.createRoot(document.getElementById("root")).render(r.jsx(N.StrictMode,{children:r.jsx(Ie,{router:ir})}));export{k as b};
