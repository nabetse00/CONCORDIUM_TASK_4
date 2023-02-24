function HG(A,I){for(var g=0;g<I.length;g++){const B=I[g];if(typeof B!="string"&&!Array.isArray(B)){for(const i in B)if(i!=="default"&&!(i in A)){const o=Object.getOwnPropertyDescriptor(B,i);o&&Object.defineProperty(A,i,o.get?o:{enumerable:!0,get:()=>B[i]})}}}return Object.freeze(Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}))}var bA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function dG(A){return A&&A.__esModule&&Object.prototype.hasOwnProperty.call(A,"default")?A.default:A}function MQ(A){if(A.__esModule)return A;var I=A.default;if(typeof I=="function"){var g=function B(){if(this instanceof B){var i=[null];i.push.apply(i,arguments);var o=Function.bind.apply(I,i);return new o}return I.apply(this,arguments)};g.prototype=I.prototype}else g={};return Object.defineProperty(g,"__esModule",{value:!0}),Object.keys(A).forEach(function(B){var i=Object.getOwnPropertyDescriptor(A,B);Object.defineProperty(g,B,i.get?i:{enumerable:!0,get:function(){return A[B]}})}),g}var Ag={},OG={get exports(){return Ag},set exports(A){Ag=A}},LA={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sQ=Symbol.for("react.element"),mG=Symbol.for("react.portal"),ZG=Symbol.for("react.fragment"),LG=Symbol.for("react.strict_mode"),fG=Symbol.for("react.profiler"),jG=Symbol.for("react.provider"),bG=Symbol.for("react.context"),uG=Symbol.for("react.forward_ref"),WG=Symbol.for("react.suspense"),VG=Symbol.for("react.memo"),TG=Symbol.for("react.lazy"),fE=Symbol.iterator;function xG(A){return A===null||typeof A!="object"?null:(A=fE&&A[fE]||A["@@iterator"],typeof A=="function"?A:null)}var fD={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jD=Object.assign,bD={};function Vg(A,I,g){this.props=A,this.context=I,this.refs=bD,this.updater=g||fD}Vg.prototype.isReactComponent={};Vg.prototype.setState=function(A,I){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,I,"setState")};Vg.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function uD(){}uD.prototype=Vg.prototype;function ZC(A,I,g){this.props=A,this.context=I,this.refs=bD,this.updater=g||fD}var LC=ZC.prototype=new uD;LC.constructor=ZC;jD(LC,Vg.prototype);LC.isPureReactComponent=!0;var jE=Array.isArray,WD=Object.prototype.hasOwnProperty,fC={current:null},VD={key:!0,ref:!0,__self:!0,__source:!0};function TD(A,I,g){var B,i={},o=null,Q=null;if(I!=null)for(B in I.ref!==void 0&&(Q=I.ref),I.key!==void 0&&(o=""+I.key),I)WD.call(I,B)&&!VD.hasOwnProperty(B)&&(i[B]=I[B]);var C=arguments.length-2;if(C===1)i.children=g;else if(1<C){for(var E=Array(C),h=0;h<C;h++)E[h]=arguments[h+2];i.children=E}if(A&&A.defaultProps)for(B in C=A.defaultProps,C)i[B]===void 0&&(i[B]=C[B]);return{$$typeof:sQ,type:A,key:o,ref:Q,props:i,_owner:fC.current}}function XG(A,I){return{$$typeof:sQ,type:A.type,key:I,ref:A.ref,props:A.props,_owner:A._owner}}function jC(A){return typeof A=="object"&&A!==null&&A.$$typeof===sQ}function zG(A){var I={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(g){return I[g]})}var bE=/\/+/g;function fB(A,I){return typeof A=="object"&&A!==null&&A.key!=null?zG(""+A.key):I.toString(36)}function WQ(A,I,g,B,i){var o=typeof A;(o==="undefined"||o==="boolean")&&(A=null);var Q=!1;if(A===null)Q=!0;else switch(o){case"string":case"number":Q=!0;break;case"object":switch(A.$$typeof){case sQ:case mG:Q=!0}}if(Q)return Q=A,i=i(Q),A=B===""?"."+fB(Q,0):B,jE(i)?(g="",A!=null&&(g=A.replace(bE,"$&/")+"/"),WQ(i,I,g,"",function(h){return h})):i!=null&&(jC(i)&&(i=XG(i,g+(!i.key||Q&&Q.key===i.key?"":(""+i.key).replace(bE,"$&/")+"/")+A)),I.push(i)),1;if(Q=0,B=B===""?".":B+":",jE(A))for(var C=0;C<A.length;C++){o=A[C];var E=B+fB(o,C);Q+=WQ(o,I,g,E,i)}else if(E=xG(A),typeof E=="function")for(A=E.call(A),C=0;!(o=A.next()).done;)o=o.value,E=B+fB(o,C++),Q+=WQ(o,I,g,E,i);else if(o==="object")throw I=String(A),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.");return Q}function mQ(A,I,g){if(A==null)return A;var B=[],i=0;return WQ(A,B,"","",function(o){return I.call(g,o,i++)}),B}function vG(A){if(A._status===-1){var I=A._result;I=I(),I.then(function(g){(A._status===0||A._status===-1)&&(A._status=1,A._result=g)},function(g){(A._status===0||A._status===-1)&&(A._status=2,A._result=g)}),A._status===-1&&(A._status=0,A._result=I)}if(A._status===1)return A._result.default;throw A._result}var nI={current:null},VQ={transition:null},PG={ReactCurrentDispatcher:nI,ReactCurrentBatchConfig:VQ,ReactCurrentOwner:fC};LA.Children={map:mQ,forEach:function(A,I,g){mQ(A,function(){I.apply(this,arguments)},g)},count:function(A){var I=0;return mQ(A,function(){I++}),I},toArray:function(A){return mQ(A,function(I){return I})||[]},only:function(A){if(!jC(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};LA.Component=Vg;LA.Fragment=ZG;LA.Profiler=fG;LA.PureComponent=ZC;LA.StrictMode=LG;LA.Suspense=WG;LA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=PG;LA.cloneElement=function(A,I,g){if(A==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+A+".");var B=jD({},A.props),i=A.key,o=A.ref,Q=A._owner;if(I!=null){if(I.ref!==void 0&&(o=I.ref,Q=fC.current),I.key!==void 0&&(i=""+I.key),A.type&&A.type.defaultProps)var C=A.type.defaultProps;for(E in I)WD.call(I,E)&&!VD.hasOwnProperty(E)&&(B[E]=I[E]===void 0&&C!==void 0?C[E]:I[E])}var E=arguments.length-2;if(E===1)B.children=g;else if(1<E){C=Array(E);for(var h=0;h<E;h++)C[h]=arguments[h+2];B.children=C}return{$$typeof:sQ,type:A.type,key:i,ref:o,props:B,_owner:Q}};LA.createContext=function(A){return A={$$typeof:bG,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},A.Provider={$$typeof:jG,_context:A},A.Consumer=A};LA.createElement=TD;LA.createFactory=function(A){var I=TD.bind(null,A);return I.type=A,I};LA.createRef=function(){return{current:null}};LA.forwardRef=function(A){return{$$typeof:uG,render:A}};LA.isValidElement=jC;LA.lazy=function(A){return{$$typeof:TG,_payload:{_status:-1,_result:A},_init:vG}};LA.memo=function(A,I){return{$$typeof:VG,type:A,compare:I===void 0?null:I}};LA.startTransition=function(A){var I=VQ.transition;VQ.transition={};try{A()}finally{VQ.transition=I}};LA.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};LA.useCallback=function(A,I){return nI.current.useCallback(A,I)};LA.useContext=function(A){return nI.current.useContext(A)};LA.useDebugValue=function(){};LA.useDeferredValue=function(A){return nI.current.useDeferredValue(A)};LA.useEffect=function(A,I){return nI.current.useEffect(A,I)};LA.useId=function(){return nI.current.useId()};LA.useImperativeHandle=function(A,I,g){return nI.current.useImperativeHandle(A,I,g)};LA.useInsertionEffect=function(A,I){return nI.current.useInsertionEffect(A,I)};LA.useLayoutEffect=function(A,I){return nI.current.useLayoutEffect(A,I)};LA.useMemo=function(A,I){return nI.current.useMemo(A,I)};LA.useReducer=function(A,I,g){return nI.current.useReducer(A,I,g)};LA.useRef=function(A){return nI.current.useRef(A)};LA.useState=function(A){return nI.current.useState(A)};LA.useSyncExternalStore=function(A,I,g){return nI.current.useSyncExternalStore(A,I,g)};LA.useTransition=function(){return nI.current.useTransition()};LA.version="18.2.0";(function(A){A.exports=LA})(OG);const _G=dG(Ag),fy=HG({__proto__:null,default:_G},[Ag]);var $G={},oB={},Tg={};Object.defineProperty(Tg,"__esModule",{value:!0});Tg.errorString=void 0;function Ak(A){return A.message||A}Tg.errorString=Ak;Object.defineProperty(oB,"__esModule",{value:!0});oB.useConnect=void 0;const jB=Ag,Ik=Tg;function gk(A,I){const[g,B]=(0,jB.useState)(!1),[i,o]=(0,jB.useState)("");return{connect:(0,jB.useCallback)(()=>{if(!A)throw new Error("no connector to connect from");B(!0),A.connect().then(C=>{C&&(I(C),o(""))}).catch(C=>o((0,Ik.errorString)(C))).finally(()=>B(!1))},[A,I]),isConnecting:g,connectError:i}}oB.useConnect=gk;var aB={};Object.defineProperty(aB,"__esModule",{value:!0});aB.useConnection=void 0;const uE=Ag;function Qk(A,I){const[g,B]=(0,uE.useState)();return(0,uE.useEffect)(()=>{g&&!A.has(g)&&B(void 0)},[A]),{connection:g,setConnection:B,genesisHash:g&&I.get(g),account:g&&A.get(g)}}aB.useConnection=Qk;var wB={},xD=bA&&bA.__awaiter||function(A,I,g,B){function i(o){return o instanceof g?o:new g(function(Q){Q(o)})}return new(g||(g=Promise))(function(o,Q){function C(a){try{h(B.next(a))}catch(t){Q(t)}}function E(a){try{h(B.throw(a))}catch(t){Q(t)}}function h(a){a.done?o(a.value):i(a.value).then(C,E)}h((B=B.apply(A,I||[])).next())})};Object.defineProperty(wB,"__esModule",{value:!0});wB.useContractSelector=void 0;const ZQ=Ag,Bk=Tg;function Ck(A,I){return xD(this,void 0,void 0,function*(){const g=yield A.getInstanceInfo({index:I,subindex:BigInt(0)});if(!g)throw new Error(`contract ${I} not found`);const{version:B,name:i,owner:o,amount:Q,methods:C,sourceModule:E}=g,h="init_";if(!i.startsWith(h))throw new Error(`name "${i}" doesn't start with "init_"`);return{version:B,index:I,name:i.substring(h.length),amount:Q,owner:o,methods:C,moduleRef:E.moduleRef}})}function Ek(A){try{return BigInt(A)}catch{throw new Error(`invalid contract index '${A}'`)}}function ik(A,I){return xD(this,void 0,void 0,function*(){const g=Ek(I);return Ck(A,g)})}function Dk(A,I){const[g,B]=(0,ZQ.useState)(),[i,o]=(0,ZQ.useState)(!1),[Q,C]=(0,ZQ.useState)("");return(0,ZQ.useEffect)(()=>{B(void 0),C(""),A&&I&&(o(!0),ik(A,I).then(B).catch(E=>{C((0,Bk.errorString)(E)),B(void 0)}).finally(()=>o(!1)))},[A,I]),{selected:g,isLoading:i,error:Q}}wB.useContractSelector=Dk;var GB={};Object.defineProperty(GB,"__esModule",{value:!0});GB.useWalletConnectorSelector=void 0;const ok=Ag;function ak(A,I,g){const{activeConnectorType:B,activeConnector:i,setActiveConnectorType:o}=g,Q=B===A,C=(0,ok.useCallback)(()=>o(Q?void 0:A),[Q,A]),E=Boolean(Q&&I&&I.getConnector()===i),h=Boolean(!Q&&B&&I);return{isSelected:Q,isConnected:E,isDisabled:h,select:C}}GB.useWalletConnectorSelector=ak;var og={},wk=bA&&bA.__awaiter||function(A,I,g,B){function i(o){return o instanceof g?o:new g(function(Q){Q(o)})}return new(g||(g=Promise))(function(o,Q){function C(a){try{h(B.next(a))}catch(t){Q(t)}}function E(a){try{h(B.throw(a))}catch(t){Q(t)}}function h(a){a.done?o(a.value):i(a.value).then(C,E)}h((B=B.apply(A,I||[])).next())})};Object.defineProperty(og,"__esModule",{value:!0});og.WithWalletConnector=og.persistentConnectorType=og.ephemeralConnectorType=void 0;const Gk=Ag,WE=Tg;function kk(A){return{activate:A,deactivate:(I,g)=>g.disconnect()}}og.ephemeralConnectorType=kk;function Nk(A){const I=new Map;return{activate:(g,B)=>{const i=I.get(g)||new Map;I.set(g,i);const o=i.get(B)||A(g,B);return i.set(B,o),o},deactivate:()=>wk(this,void 0,void 0,function*(){})}}og.persistentConnectorType=Nk;function bB(A,I,g){const B=new Map(A);return I!==void 0&&(g!==void 0?B.set(I,g):B.delete(I)),B}class ck extends Gk.Component{constructor(I){super(I),this.setActiveConnectorType=g=>{console.debug("WithWalletConnector: calling 'setActiveConnectorType'",{type:g,state:this.state});const{network:B}=this.props,{activeConnectorType:i,activeConnector:o}=this.state;this.setState({activeConnectorType:g,activeConnector:void 0,activeConnectorError:""}),i&&o&&i.deactivate(this,o).catch(Q=>this.setState(C=>C.activeConnectorType!==g?C:Object.assign(Object.assign({},C),{activeConnectorError:(0,WE.errorString)(Q)}))),g&&g.activate(this,B).then(Q=>{console.log("WithWalletConnector: setting active connector",{connector:Q}),this.setState({activeConnectorType:g,activeConnector:Q,activeConnectorError:""})}).catch(Q=>this.setState(C=>C.activeConnectorType!==g?C:Object.assign(Object.assign({},C),{activeConnectorError:(0,WE.errorString)(Q)})))},this.onAccountChanged=(g,B)=>{console.debug("WithWalletConnector: calling 'onAccountChanged'",{connection:g,address:B,state:this.state}),this.setState(i=>Object.assign(Object.assign({},i),{connectedAccounts:bB(i.connectedAccounts,g,B||"")}))},this.onChainChanged=(g,B)=>{console.debug("WithWalletConnector: calling 'onChainChanged'",{connection:g,genesisHash:B,state:this.state}),this.setState(i=>Object.assign(Object.assign({},i),{genesisHashes:bB(i.genesisHashes,g,B)}))},this.onConnected=(g,B)=>{console.debug("WithWalletConnector: calling 'onConnected'",{connection:g,state:this.state}),this.onAccountChanged(g,B)},this.onDisconnected=g=>{console.debug("WithWalletConnector: calling 'onDisconnected'",{connection:g,state:this.state}),this.setState(B=>Object.assign(Object.assign({},B),{connectedAccounts:bB(B.connectedAccounts,g,void 0)}))},this.state={activeConnectorType:void 0,activeConnector:void 0,activeConnectorError:"",genesisHashes:new Map,connectedAccounts:new Map}}render(){const{children:I,network:g}=this.props;return I(Object.assign(Object.assign({},this.state),{network:g,setActiveConnectorType:this.setActiveConnectorType}))}componentDidUpdate(I){I.network!==this.props.network&&this.setActiveConnectorType(void 0)}componentWillUnmount(){}}og.WithWalletConnector=ck;var XD={},kB={},hk=bA&&bA.__awaiter||function(A,I,g,B){function i(o){return o instanceof g?o:new g(function(Q){Q(o)})}return new(g||(g=Promise))(function(o,Q){function C(a){try{h(B.next(a))}catch(t){Q(t)}}function E(a){try{h(B.throw(a))}catch(t){Q(t)}}function h(a){a.done?o(a.value):i(a.value).then(C,E)}h((B=B.apply(A,I||[])).next())})};Object.defineProperty(kB,"__esModule",{value:!0});kB.withJsonRpcClient=void 0;function tk(A,I){return hk(this,void 0,void 0,function*(){return I(A.getJsonRpcClient())})}kB.withJsonRpcClient=tk;var Zg={};function ek(A){try{return JSON.stringify(A)}catch{return'"[Circular]"'}}var Mk=sk;function sk(A,I,g){var B=g&&g.stringify||ek,i=1;if(typeof A=="object"&&A!==null){var o=I.length+i;if(o===1)return A;var Q=new Array(o);Q[0]=B(A);for(var C=1;C<o;C++)Q[C]=B(I[C]);return Q.join(" ")}if(typeof A!="string")return A;var E=I.length;if(E===0)return A;for(var h="",a=1-i,t=-1,e=A&&A.length||0,G=0;G<e;){if(A.charCodeAt(G)===37&&G+1<e){switch(t=t>-1?t:0,A.charCodeAt(G+1)){case 100:case 102:if(a>=E||I[a]==null)break;t<G&&(h+=A.slice(t,G)),h+=Number(I[a]),t=G+2,G++;break;case 105:if(a>=E||I[a]==null)break;t<G&&(h+=A.slice(t,G)),h+=Math.floor(Number(I[a])),t=G+2,G++;break;case 79:case 111:case 106:if(a>=E||I[a]===void 0)break;t<G&&(h+=A.slice(t,G));var c=typeof I[a];if(c==="string"){h+="'"+I[a]+"'",t=G+2,G++;break}if(c==="function"){h+=I[a].name||"<anonymous>",t=G+2,G++;break}h+=B(I[a]),t=G+2,G++;break;case 115:if(a>=E)break;t<G&&(h+=A.slice(t,G)),h+=String(I[a]),t=G+2,G++;break;case 37:t<G&&(h+=A.slice(t,G)),h+="%",t=G+2,G++,a--;break}++a}++G}return t===-1?A:(t<e&&(h+=A.slice(t)),h)}const VE=Mk;var NB=VI;const kQ=qk().console||{},nk={mapHttpRequest:LQ,mapHttpResponse:LQ,wrapRequestSerializer:uB,wrapResponseSerializer:uB,wrapErrorSerializer:uB,req:LQ,res:LQ,err:pk};function Fk(A,I){return Array.isArray(A)?A.filter(function(B){return B!=="!stdSerializers.err"}):A===!0?Object.keys(I):!1}function VI(A){A=A||{},A.browser=A.browser||{};const I=A.browser.transmit;if(I&&typeof I.send!="function")throw Error("pino: transmit option must have a send function");const g=A.browser.write||kQ;A.browser.write&&(A.browser.asObject=!0);const B=A.serializers||{},i=Fk(A.browser.serialize,B);let o=A.browser.serialize;Array.isArray(A.browser.serialize)&&A.browser.serialize.indexOf("!stdSerializers.err")>-1&&(o=!1);const Q=["error","fatal","warn","info","debug","trace"];typeof g=="function"&&(g.error=g.fatal=g.warn=g.info=g.debug=g.trace=g),A.enabled===!1&&(A.level="silent");const C=A.level||"info",E=Object.create(g);E.log||(E.log=NQ),Object.defineProperty(E,"levelVal",{get:a}),Object.defineProperty(E,"level",{get:t,set:e});const h={transmit:I,serialize:i,asObject:A.browser.asObject,levels:Q,timestamp:rk(A)};E.levels=VI.levels,E.level=C,E.setMaxListeners=E.getMaxListeners=E.emit=E.addListener=E.on=E.prependListener=E.once=E.prependOnceListener=E.removeListener=E.removeAllListeners=E.listeners=E.listenerCount=E.eventNames=E.write=E.flush=NQ,E.serializers=B,E._serialize=i,E._stdErrSerialize=o,E.child=G,I&&(E._logEvent=wC());function a(){return this.level==="silent"?1/0:this.levels.values[this.level]}function t(){return this._level}function e(c){if(c!=="silent"&&!this.levels.values[c])throw Error("unknown level "+c);this._level=c,qg(h,E,"error","log"),qg(h,E,"fatal","error"),qg(h,E,"warn","error"),qg(h,E,"info","log"),qg(h,E,"debug","log"),qg(h,E,"trace","log")}function G(c,p){if(!c)throw new Error("missing bindings for child Pino");p=p||{},i&&c.serializers&&(p.serializers=c.serializers);const Y=p.serializers;if(i&&Y){var F=Object.assign({},B,Y),s=A.browser.serialize===!0?Object.keys(F):i;delete c.serializers,cB([c],s,F,this._stdErrSerialize)}function M(N){this._childLevel=(N._childLevel|0)+1,this.error=lg(N,c,"error"),this.fatal=lg(N,c,"fatal"),this.warn=lg(N,c,"warn"),this.info=lg(N,c,"info"),this.debug=lg(N,c,"debug"),this.trace=lg(N,c,"trace"),F&&(this.serializers=F,this._serialize=s),I&&(this._logEvent=wC([].concat(N._logEvent.bindings,c)))}return M.prototype=this,new M(this)}return E}VI.levels={values:{fatal:60,error:50,warn:40,info:30,debug:20,trace:10},labels:{10:"trace",20:"debug",30:"info",40:"warn",50:"error",60:"fatal"}};VI.stdSerializers=nk;VI.stdTimeFunctions=Object.assign({},{nullTime:zD,epochTime:vD,unixTime:Uk,isoTime:Rk});function qg(A,I,g,B){const i=Object.getPrototypeOf(I);I[g]=I.levelVal>I.levels.values[g]?NQ:i[g]?i[g]:kQ[g]||kQ[B]||NQ,yk(A,I,g)}function yk(A,I,g){!A.transmit&&I[g]===NQ||(I[g]=function(B){return function(){const o=A.timestamp(),Q=new Array(arguments.length),C=Object.getPrototypeOf&&Object.getPrototypeOf(this)===kQ?kQ:this;for(var E=0;E<Q.length;E++)Q[E]=arguments[E];if(A.serialize&&!A.asObject&&cB(Q,this._serialize,this.serializers,this._stdErrSerialize),A.asObject?B.call(C,Yk(this,g,Q,o)):B.apply(C,Q),A.transmit){const h=A.transmit.level||I.level,a=VI.levels.values[h],t=VI.levels.values[g];if(t<a)return;Jk(this,{ts:o,methodLevel:g,methodValue:t,transmitLevel:h,transmitValue:VI.levels.values[A.transmit.level||I.level],send:A.transmit.send,val:I.levelVal},Q)}}}(I[g]))}function Yk(A,I,g,B){A._serialize&&cB(g,A._serialize,A.serializers,A._stdErrSerialize);const i=g.slice();let o=i[0];const Q={};B&&(Q.time=B),Q.level=VI.levels.values[I];let C=(A._childLevel|0)+1;if(C<1&&(C=1),o!==null&&typeof o=="object"){for(;C--&&typeof i[0]=="object";)Object.assign(Q,i.shift());o=i.length?VE(i.shift(),i):void 0}else typeof o=="string"&&(o=VE(i.shift(),i));return o!==void 0&&(Q.msg=o),Q}function cB(A,I,g,B){for(const i in A)if(B&&A[i]instanceof Error)A[i]=VI.stdSerializers.err(A[i]);else if(typeof A[i]=="object"&&!Array.isArray(A[i]))for(const o in A[i])I&&I.indexOf(o)>-1&&o in g&&(A[i][o]=g[o](A[i][o]))}function lg(A,I,g){return function(){const B=new Array(1+arguments.length);B[0]=I;for(var i=1;i<B.length;i++)B[i]=arguments[i-1];return A[g].apply(this,B)}}function Jk(A,I,g){const B=I.send,i=I.ts,o=I.methodLevel,Q=I.methodValue,C=I.val,E=A._logEvent.bindings;cB(g,A._serialize||Object.keys(A.serializers),A.serializers,A._stdErrSerialize===void 0?!0:A._stdErrSerialize),A._logEvent.ts=i,A._logEvent.messages=g.filter(function(h){return E.indexOf(h)===-1}),A._logEvent.level.label=o,A._logEvent.level.value=Q,B(o,A._logEvent,C),A._logEvent=wC(E)}function wC(A){return{ts:0,messages:[],bindings:A||[],level:{label:"",value:0}}}function pk(A){const I={type:A.constructor.name,msg:A.message,stack:A.stack};for(const g in A)I[g]===void 0&&(I[g]=A[g]);return I}function rk(A){return typeof A.timestamp=="function"?A.timestamp:A.timestamp===!1?zD:vD}function LQ(){return{}}function uB(A){return A}function NQ(){}function zD(){return!1}function vD(){return Date.now()}function Uk(){return Math.round(Date.now()/1e3)}function Rk(){return new Date(Date.now()).toISOString()}function qk(){function A(I){return typeof I<"u"&&I}try{return typeof globalThis<"u"||Object.defineProperty(Object.prototype,"globalThis",{get:function(){return delete Object.prototype.globalThis,this.globalThis=this},configurable:!0}),globalThis}catch{return A(self)||A(window)||A(this)||{}}}var sI={},lk={get exports(){return sI},set exports(A){sI=A}},mg=typeof Reflect=="object"?Reflect:null,TE=mg&&typeof mg.apply=="function"?mg.apply:function(I,g,B){return Function.prototype.apply.call(I,g,B)},TQ;mg&&typeof mg.ownKeys=="function"?TQ=mg.ownKeys:Object.getOwnPropertySymbols?TQ=function(I){return Object.getOwnPropertyNames(I).concat(Object.getOwnPropertySymbols(I))}:TQ=function(I){return Object.getOwnPropertyNames(I)};function Kk(A){console&&console.warn&&console.warn(A)}var PD=Number.isNaN||function(I){return I!==I};function TA(){TA.init.call(this)}lk.exports=TA;sI.once=Ok;TA.EventEmitter=TA;TA.prototype._events=void 0;TA.prototype._eventsCount=0;TA.prototype._maxListeners=void 0;var xE=10;function hB(A){if(typeof A!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof A)}Object.defineProperty(TA,"defaultMaxListeners",{enumerable:!0,get:function(){return xE},set:function(A){if(typeof A!="number"||A<0||PD(A))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+A+".");xE=A}});TA.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};TA.prototype.setMaxListeners=function(I){if(typeof I!="number"||I<0||PD(I))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+I+".");return this._maxListeners=I,this};function _D(A){return A._maxListeners===void 0?TA.defaultMaxListeners:A._maxListeners}TA.prototype.getMaxListeners=function(){return _D(this)};TA.prototype.emit=function(I){for(var g=[],B=1;B<arguments.length;B++)g.push(arguments[B]);var i=I==="error",o=this._events;if(o!==void 0)i=i&&o.error===void 0;else if(!i)return!1;if(i){var Q;if(g.length>0&&(Q=g[0]),Q instanceof Error)throw Q;var C=new Error("Unhandled error."+(Q?" ("+Q.message+")":""));throw C.context=Q,C}var E=o[I];if(E===void 0)return!1;if(typeof E=="function")TE(E,this,g);else for(var h=E.length,a=Qo(E,h),B=0;B<h;++B)TE(a[B],this,g);return!0};function $D(A,I,g,B){var i,o,Q;if(hB(g),o=A._events,o===void 0?(o=A._events=Object.create(null),A._eventsCount=0):(o.newListener!==void 0&&(A.emit("newListener",I,g.listener?g.listener:g),o=A._events),Q=o[I]),Q===void 0)Q=o[I]=g,++A._eventsCount;else if(typeof Q=="function"?Q=o[I]=B?[g,Q]:[Q,g]:B?Q.unshift(g):Q.push(g),i=_D(A),i>0&&Q.length>i&&!Q.warned){Q.warned=!0;var C=new Error("Possible EventEmitter memory leak detected. "+Q.length+" "+String(I)+" listeners added. Use emitter.setMaxListeners() to increase limit");C.name="MaxListenersExceededWarning",C.emitter=A,C.type=I,C.count=Q.length,Kk(C)}return A}TA.prototype.addListener=function(I,g){return $D(this,I,g,!1)};TA.prototype.on=TA.prototype.addListener;TA.prototype.prependListener=function(I,g){return $D(this,I,g,!0)};function Sk(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function Ao(A,I,g){var B={fired:!1,wrapFn:void 0,target:A,type:I,listener:g},i=Sk.bind(B);return i.listener=g,B.wrapFn=i,i}TA.prototype.once=function(I,g){return hB(g),this.on(I,Ao(this,I,g)),this};TA.prototype.prependOnceListener=function(I,g){return hB(g),this.prependListener(I,Ao(this,I,g)),this};TA.prototype.removeListener=function(I,g){var B,i,o,Q,C;if(hB(g),i=this._events,i===void 0)return this;if(B=i[I],B===void 0)return this;if(B===g||B.listener===g)--this._eventsCount===0?this._events=Object.create(null):(delete i[I],i.removeListener&&this.emit("removeListener",I,B.listener||g));else if(typeof B!="function"){for(o=-1,Q=B.length-1;Q>=0;Q--)if(B[Q]===g||B[Q].listener===g){C=B[Q].listener,o=Q;break}if(o<0)return this;o===0?B.shift():Hk(B,o),B.length===1&&(i[I]=B[0]),i.removeListener!==void 0&&this.emit("removeListener",I,C||g)}return this};TA.prototype.off=TA.prototype.removeListener;TA.prototype.removeAllListeners=function(I){var g,B,i;if(B=this._events,B===void 0)return this;if(B.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):B[I]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete B[I]),this;if(arguments.length===0){var o=Object.keys(B),Q;for(i=0;i<o.length;++i)Q=o[i],Q!=="removeListener"&&this.removeAllListeners(Q);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(g=B[I],typeof g=="function")this.removeListener(I,g);else if(g!==void 0)for(i=g.length-1;i>=0;i--)this.removeListener(I,g[i]);return this};function Io(A,I,g){var B=A._events;if(B===void 0)return[];var i=B[I];return i===void 0?[]:typeof i=="function"?g?[i.listener||i]:[i]:g?dk(i):Qo(i,i.length)}TA.prototype.listeners=function(I){return Io(this,I,!0)};TA.prototype.rawListeners=function(I){return Io(this,I,!1)};TA.listenerCount=function(A,I){return typeof A.listenerCount=="function"?A.listenerCount(I):go.call(A,I)};TA.prototype.listenerCount=go;function go(A){var I=this._events;if(I!==void 0){var g=I[A];if(typeof g=="function")return 1;if(g!==void 0)return g.length}return 0}TA.prototype.eventNames=function(){return this._eventsCount>0?TQ(this._events):[]};function Qo(A,I){for(var g=new Array(I),B=0;B<I;++B)g[B]=A[B];return g}function Hk(A,I){for(;I+1<A.length;I++)A[I]=A[I+1];A.pop()}function dk(A){for(var I=new Array(A.length),g=0;g<I.length;++g)I[g]=A[g].listener||A[g];return I}function Ok(A,I){return new Promise(function(g,B){function i(Q){A.removeListener(I,o),B(Q)}function o(){typeof A.removeListener=="function"&&A.removeListener("error",i),g([].slice.call(arguments))}Bo(A,I,o,{once:!0}),I!=="error"&&mk(A,i,{once:!0})})}function mk(A,I,g){typeof A.on=="function"&&Bo(A,"error",I,g)}function Bo(A,I,g,B){if(typeof A.on=="function")B.once?A.once(I,g):A.on(I,g);else if(typeof A.addEventListener=="function")A.addEventListener(I,function i(o){B.once&&A.removeEventListener(I,i),g(o)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof A)}var tB={},pI={},Zk={get exports(){return pI},set exports(A){pI=A}};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */(function(A){var I,g,B,i,o,Q,C,E,h,a,t,e,G,c,p,Y,F,s,M,N,k,w,D;(function(y){var O=typeof bA=="object"?bA:typeof self=="object"?self:typeof this=="object"?this:{};y(R(O,R(A.exports)));function R(m,V){return m!==O&&(typeof Object.create=="function"?Object.defineProperty(m,"__esModule",{value:!0}):m.__esModule=!0),function(j,U){return m[j]=V?V(j,U):U}}})(function(y){var O=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(R,m){R.__proto__=m}||function(R,m){for(var V in m)m.hasOwnProperty(V)&&(R[V]=m[V])};I=function(R,m){O(R,m);function V(){this.constructor=R}R.prototype=m===null?Object.create(m):(V.prototype=m.prototype,new V)},g=Object.assign||function(R){for(var m,V=1,j=arguments.length;V<j;V++){m=arguments[V];for(var U in m)Object.prototype.hasOwnProperty.call(m,U)&&(R[U]=m[U])}return R},B=function(R,m){var V={};for(var j in R)Object.prototype.hasOwnProperty.call(R,j)&&m.indexOf(j)<0&&(V[j]=R[j]);if(R!=null&&typeof Object.getOwnPropertySymbols=="function")for(var U=0,j=Object.getOwnPropertySymbols(R);U<j.length;U++)m.indexOf(j[U])<0&&Object.prototype.propertyIsEnumerable.call(R,j[U])&&(V[j[U]]=R[j[U]]);return V},i=function(R,m,V,j){var U=arguments.length,S=U<3?m:j===null?j=Object.getOwnPropertyDescriptor(m,V):j,X;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")S=Reflect.decorate(R,m,V,j);else for(var u=R.length-1;u>=0;u--)(X=R[u])&&(S=(U<3?X(S):U>3?X(m,V,S):X(m,V))||S);return U>3&&S&&Object.defineProperty(m,V,S),S},o=function(R,m){return function(V,j){m(V,j,R)}},Q=function(R,m){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(R,m)},C=function(R,m,V,j){function U(S){return S instanceof V?S:new V(function(X){X(S)})}return new(V||(V=Promise))(function(S,X){function u(_){try{L(j.next(_))}catch(f){X(f)}}function Z(_){try{L(j.throw(_))}catch(f){X(f)}}function L(_){_.done?S(_.value):U(_.value).then(u,Z)}L((j=j.apply(R,m||[])).next())})},E=function(R,m){var V={label:0,sent:function(){if(S[0]&1)throw S[1];return S[1]},trys:[],ops:[]},j,U,S,X;return X={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(X[Symbol.iterator]=function(){return this}),X;function u(L){return function(_){return Z([L,_])}}function Z(L){if(j)throw new TypeError("Generator is already executing.");for(;V;)try{if(j=1,U&&(S=L[0]&2?U.return:L[0]?U.throw||((S=U.return)&&S.call(U),0):U.next)&&!(S=S.call(U,L[1])).done)return S;switch(U=0,S&&(L=[L[0]&2,S.value]),L[0]){case 0:case 1:S=L;break;case 4:return V.label++,{value:L[1],done:!1};case 5:V.label++,U=L[1],L=[0];continue;case 7:L=V.ops.pop(),V.trys.pop();continue;default:if(S=V.trys,!(S=S.length>0&&S[S.length-1])&&(L[0]===6||L[0]===2)){V=0;continue}if(L[0]===3&&(!S||L[1]>S[0]&&L[1]<S[3])){V.label=L[1];break}if(L[0]===6&&V.label<S[1]){V.label=S[1],S=L;break}if(S&&V.label<S[2]){V.label=S[2],V.ops.push(L);break}S[2]&&V.ops.pop(),V.trys.pop();continue}L=m.call(R,V)}catch(_){L=[6,_],U=0}finally{j=S=0}if(L[0]&5)throw L[1];return{value:L[0]?L[1]:void 0,done:!0}}},D=function(R,m,V,j){j===void 0&&(j=V),R[j]=m[V]},h=function(R,m){for(var V in R)V!=="default"&&!m.hasOwnProperty(V)&&(m[V]=R[V])},a=function(R){var m=typeof Symbol=="function"&&Symbol.iterator,V=m&&R[m],j=0;if(V)return V.call(R);if(R&&typeof R.length=="number")return{next:function(){return R&&j>=R.length&&(R=void 0),{value:R&&R[j++],done:!R}}};throw new TypeError(m?"Object is not iterable.":"Symbol.iterator is not defined.")},t=function(R,m){var V=typeof Symbol=="function"&&R[Symbol.iterator];if(!V)return R;var j=V.call(R),U,S=[],X;try{for(;(m===void 0||m-- >0)&&!(U=j.next()).done;)S.push(U.value)}catch(u){X={error:u}}finally{try{U&&!U.done&&(V=j.return)&&V.call(j)}finally{if(X)throw X.error}}return S},e=function(){for(var R=[],m=0;m<arguments.length;m++)R=R.concat(t(arguments[m]));return R},G=function(){for(var R=0,m=0,V=arguments.length;m<V;m++)R+=arguments[m].length;for(var j=Array(R),U=0,m=0;m<V;m++)for(var S=arguments[m],X=0,u=S.length;X<u;X++,U++)j[U]=S[X];return j},c=function(R){return this instanceof c?(this.v=R,this):new c(R)},p=function(R,m,V){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var j=V.apply(R,m||[]),U,S=[];return U={},X("next"),X("throw"),X("return"),U[Symbol.asyncIterator]=function(){return this},U;function X(W){j[W]&&(U[W]=function(QA){return new Promise(function(cA,aA){S.push([W,QA,cA,aA])>1||u(W,QA)})})}function u(W,QA){try{Z(j[W](QA))}catch(cA){f(S[0][3],cA)}}function Z(W){W.value instanceof c?Promise.resolve(W.value.v).then(L,_):f(S[0][2],W)}function L(W){u("next",W)}function _(W){u("throw",W)}function f(W,QA){W(QA),S.shift(),S.length&&u(S[0][0],S[0][1])}},Y=function(R){var m,V;return m={},j("next"),j("throw",function(U){throw U}),j("return"),m[Symbol.iterator]=function(){return this},m;function j(U,S){m[U]=R[U]?function(X){return(V=!V)?{value:c(R[U](X)),done:U==="return"}:S?S(X):X}:S}},F=function(R){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var m=R[Symbol.asyncIterator],V;return m?m.call(R):(R=typeof a=="function"?a(R):R[Symbol.iterator](),V={},j("next"),j("throw"),j("return"),V[Symbol.asyncIterator]=function(){return this},V);function j(S){V[S]=R[S]&&function(X){return new Promise(function(u,Z){X=R[S](X),U(u,Z,X.done,X.value)})}}function U(S,X,u,Z){Promise.resolve(Z).then(function(L){S({value:L,done:u})},X)}},s=function(R,m){return Object.defineProperty?Object.defineProperty(R,"raw",{value:m}):R.raw=m,R},M=function(R){if(R&&R.__esModule)return R;var m={};if(R!=null)for(var V in R)Object.hasOwnProperty.call(R,V)&&(m[V]=R[V]);return m.default=R,m},N=function(R){return R&&R.__esModule?R:{default:R}},k=function(R,m){if(!m.has(R))throw new TypeError("attempted to get private field on non-instance");return m.get(R)},w=function(R,m,V){if(!m.has(R))throw new TypeError("attempted to set private field on non-instance");return m.set(R,V),V},y("__extends",I),y("__assign",g),y("__rest",B),y("__decorate",i),y("__param",o),y("__metadata",Q),y("__awaiter",C),y("__generator",E),y("__exportStar",h),y("__createBinding",D),y("__values",a),y("__read",t),y("__spread",e),y("__spreadArrays",G),y("__await",c),y("__asyncGenerator",p),y("__asyncDelegator",Y),y("__asyncValues",F),y("__makeTemplateObject",s),y("__importStar",M),y("__importDefault",N),y("__classPrivateFieldGet",k),y("__classPrivateFieldSet",w)})})(Zk);var nQ={};Object.defineProperty(nQ,"__esModule",{value:!0});function Lk(A){if(typeof A!="string")throw new Error(`Cannot safe json parse value of type ${typeof A}`);try{return JSON.parse(A)}catch{return A}}nQ.safeJsonParse=Lk;function fk(A){return typeof A=="string"?A:JSON.stringify(A,(I,g)=>typeof g>"u"?null:g)}nQ.safeJsonStringify=fk;var PQ={},WB={get exports(){return PQ},set exports(A){PQ=A}},XE;function jk(){return XE||(XE=1,function(){let A;function I(){}A=I,A.prototype.getItem=function(g){return this.hasOwnProperty(g)?String(this[g]):null},A.prototype.setItem=function(g,B){this[g]=String(B)},A.prototype.removeItem=function(g){delete this[g]},A.prototype.clear=function(){const g=this;Object.keys(g).forEach(function(B){g[B]=void 0,delete g[B]})},A.prototype.key=function(g){return g=g||0,Object.keys(this)[g]},A.prototype.__defineGetter__("length",function(){return Object.keys(this).length}),typeof bA<"u"&&bA.localStorage?WB.exports=bA.localStorage:typeof window<"u"&&window.localStorage?WB.exports=window.localStorage:WB.exports=new I}()),PQ}var VB={},$g={},zE;function bk(){if(zE)return $g;zE=1,Object.defineProperty($g,"__esModule",{value:!0}),$g.IKeyValueStorage=void 0;class A{}return $g.IKeyValueStorage=A,$g}var AQ={},vE;function uk(){if(vE)return AQ;vE=1,Object.defineProperty(AQ,"__esModule",{value:!0}),AQ.parseEntry=void 0;const A=nQ;function I(g){var B;return[g[0],A.safeJsonParse((B=g[1])!==null&&B!==void 0?B:"")]}return AQ.parseEntry=I,AQ}var PE;function Wk(){return PE||(PE=1,function(A){Object.defineProperty(A,"__esModule",{value:!0});const I=pI;I.__exportStar(bk(),A),I.__exportStar(uk(),A)}(VB)),VB}Object.defineProperty(tB,"__esModule",{value:!0});tB.KeyValueStorage=void 0;const Hg=pI,_E=nQ,Vk=Hg.__importDefault(jk()),Tk=Wk();class Co{constructor(){this.localStorage=Vk.default}getKeys(){return Hg.__awaiter(this,void 0,void 0,function*(){return Object.keys(this.localStorage)})}getEntries(){return Hg.__awaiter(this,void 0,void 0,function*(){return Object.entries(this.localStorage).map(Tk.parseEntry)})}getItem(I){return Hg.__awaiter(this,void 0,void 0,function*(){const g=this.localStorage.getItem(I);if(g!==null)return _E.safeJsonParse(g)})}setItem(I,g){return Hg.__awaiter(this,void 0,void 0,function*(){this.localStorage.setItem(I,_E.safeJsonStringify(g))})}removeItem(I){return Hg.__awaiter(this,void 0,void 0,function*(){this.localStorage.removeItem(I)})}}tB.KeyValueStorage=Co;var xk=tB.default=Co,FQ={},IQ={},RA={},TB={},gQ={},$E;function Xk(){if($E)return gQ;$E=1,Object.defineProperty(gQ,"__esModule",{value:!0}),gQ.delay=void 0;function A(I){return new Promise(g=>{setTimeout(()=>{g(!0)},I)})}return gQ.delay=A,gQ}var eg={},xB={},Mg={},Ai;function zk(){return Ai||(Ai=1,Object.defineProperty(Mg,"__esModule",{value:!0}),Mg.ONE_THOUSAND=Mg.ONE_HUNDRED=void 0,Mg.ONE_HUNDRED=100,Mg.ONE_THOUSAND=1e3),Mg}var XB={},Ii;function vk(){return Ii||(Ii=1,function(A){Object.defineProperty(A,"__esModule",{value:!0}),A.ONE_YEAR=A.FOUR_WEEKS=A.THREE_WEEKS=A.TWO_WEEKS=A.ONE_WEEK=A.THIRTY_DAYS=A.SEVEN_DAYS=A.FIVE_DAYS=A.THREE_DAYS=A.ONE_DAY=A.TWENTY_FOUR_HOURS=A.TWELVE_HOURS=A.SIX_HOURS=A.THREE_HOURS=A.ONE_HOUR=A.SIXTY_MINUTES=A.THIRTY_MINUTES=A.TEN_MINUTES=A.FIVE_MINUTES=A.ONE_MINUTE=A.SIXTY_SECONDS=A.THIRTY_SECONDS=A.TEN_SECONDS=A.FIVE_SECONDS=A.ONE_SECOND=void 0,A.ONE_SECOND=1,A.FIVE_SECONDS=5,A.TEN_SECONDS=10,A.THIRTY_SECONDS=30,A.SIXTY_SECONDS=60,A.ONE_MINUTE=A.SIXTY_SECONDS,A.FIVE_MINUTES=A.ONE_MINUTE*5,A.TEN_MINUTES=A.ONE_MINUTE*10,A.THIRTY_MINUTES=A.ONE_MINUTE*30,A.SIXTY_MINUTES=A.ONE_MINUTE*60,A.ONE_HOUR=A.SIXTY_MINUTES,A.THREE_HOURS=A.ONE_HOUR*3,A.SIX_HOURS=A.ONE_HOUR*6,A.TWELVE_HOURS=A.ONE_HOUR*12,A.TWENTY_FOUR_HOURS=A.ONE_HOUR*24,A.ONE_DAY=A.TWENTY_FOUR_HOURS,A.THREE_DAYS=A.ONE_DAY*3,A.FIVE_DAYS=A.ONE_DAY*5,A.SEVEN_DAYS=A.ONE_DAY*7,A.THIRTY_DAYS=A.ONE_DAY*30,A.ONE_WEEK=A.SEVEN_DAYS,A.TWO_WEEKS=A.ONE_WEEK*2,A.THREE_WEEKS=A.ONE_WEEK*3,A.FOUR_WEEKS=A.ONE_WEEK*4,A.ONE_YEAR=A.ONE_DAY*365}(XB)),XB}var gi;function Eo(){return gi||(gi=1,function(A){Object.defineProperty(A,"__esModule",{value:!0});const I=pI;I.__exportStar(zk(),A),I.__exportStar(vk(),A)}(xB)),xB}var Qi;function Pk(){if(Qi)return eg;Qi=1,Object.defineProperty(eg,"__esModule",{value:!0}),eg.fromMiliseconds=eg.toMiliseconds=void 0;const A=Eo();function I(B){return B*A.ONE_THOUSAND}eg.toMiliseconds=I;function g(B){return Math.floor(B/A.ONE_THOUSAND)}return eg.fromMiliseconds=g,eg}var Bi;function _k(){return Bi||(Bi=1,function(A){Object.defineProperty(A,"__esModule",{value:!0});const I=pI;I.__exportStar(Xk(),A),I.__exportStar(Pk(),A)}(TB)),TB}var Kg={},Ci;function $k(){if(Ci)return Kg;Ci=1,Object.defineProperty(Kg,"__esModule",{value:!0}),Kg.Watch=void 0;class A{constructor(){this.timestamps=new Map}start(g){if(this.timestamps.has(g))throw new Error(`Watch already started for label: ${g}`);this.timestamps.set(g,{started:Date.now()})}stop(g){const B=this.get(g);if(typeof B.elapsed<"u")throw new Error(`Watch already stopped for label: ${g}`);const i=Date.now()-B.started;this.timestamps.set(g,{started:B.started,elapsed:i})}get(g){const B=this.timestamps.get(g);if(typeof B>"u")throw new Error(`No timestamp found for label: ${g}`);return B}elapsed(g){const B=this.get(g);return B.elapsed||Date.now()-B.started}}return Kg.Watch=A,Kg.default=A,Kg}var zB={},QQ={},Ei;function AN(){if(Ei)return QQ;Ei=1,Object.defineProperty(QQ,"__esModule",{value:!0}),QQ.IWatch=void 0;class A{}return QQ.IWatch=A,QQ}var ii;function IN(){return ii||(ii=1,function(A){Object.defineProperty(A,"__esModule",{value:!0}),pI.__exportStar(AN(),A)}(zB)),zB}(function(A){Object.defineProperty(A,"__esModule",{value:!0});const I=pI;I.__exportStar(_k(),A),I.__exportStar($k(),A),I.__exportStar(IN(),A),I.__exportStar(Eo(),A)})(RA);var vB={},BQ={};let Yg=class{};const gN=Object.freeze(Object.defineProperty({__proto__:null,IEvents:Yg},Symbol.toStringTag,{value:"Module"})),QN=MQ(gN);var Di;function BN(){if(Di)return BQ;Di=1,Object.defineProperty(BQ,"__esModule",{value:!0}),BQ.IHeartBeat=void 0;const A=QN;class I extends A.IEvents{constructor(B){super()}}return BQ.IHeartBeat=I,BQ}var oi;function io(){return oi||(oi=1,function(A){Object.defineProperty(A,"__esModule",{value:!0}),pI.__exportStar(BN(),A)}(vB)),vB}var PB={},sg={},ai;function CN(){if(ai)return sg;ai=1,Object.defineProperty(sg,"__esModule",{value:!0}),sg.HEARTBEAT_EVENTS=sg.HEARTBEAT_INTERVAL=void 0;const A=RA;return sg.HEARTBEAT_INTERVAL=A.FIVE_SECONDS,sg.HEARTBEAT_EVENTS={pulse:"heartbeat_pulse"},sg}var wi;function Do(){return wi||(wi=1,function(A){Object.defineProperty(A,"__esModule",{value:!0}),pI.__exportStar(CN(),A)}(PB)),PB}var Gi;function EN(){if(Gi)return IQ;Gi=1,Object.defineProperty(IQ,"__esModule",{value:!0}),IQ.HeartBeat=void 0;const A=pI,I=sI,g=RA,B=io(),i=Do();class o extends B.IHeartBeat{constructor(C){super(C),this.events=new I.EventEmitter,this.interval=i.HEARTBEAT_INTERVAL,this.interval=(C==null?void 0:C.interval)||i.HEARTBEAT_INTERVAL}static init(C){return A.__awaiter(this,void 0,void 0,function*(){const E=new o(C);return yield E.init(),E})}init(){return A.__awaiter(this,void 0,void 0,function*(){yield this.initialize()})}stop(){clearInterval(this.intervalRef)}on(C,E){this.events.on(C,E)}once(C,E){this.events.once(C,E)}off(C,E){this.events.off(C,E)}removeListener(C,E){this.events.removeListener(C,E)}initialize(){return A.__awaiter(this,void 0,void 0,function*(){this.intervalRef=setInterval(()=>this.pulse(),g.toMiliseconds(this.interval))})}pulse(){this.events.emit(i.HEARTBEAT_EVENTS.pulse)}}return IQ.HeartBeat=o,IQ}(function(A){Object.defineProperty(A,"__esModule",{value:!0});const I=pI;I.__exportStar(EN(),A),I.__exportStar(io(),A),I.__exportStar(Do(),A)})(FQ);var VA={},ng={},ki;function oo(){return ki||(ki=1,Object.defineProperty(ng,"__esModule",{value:!0}),ng.PINO_CUSTOM_CONTEXT_KEY=ng.PINO_LOGGER_DEFAULTS=void 0,ng.PINO_LOGGER_DEFAULTS={level:"info"},ng.PINO_CUSTOM_CONTEXT_KEY="custom_context"),ng}var tI={},Ni;function iN(){if(Ni)return tI;Ni=1,Object.defineProperty(tI,"__esModule",{value:!0}),tI.generateChildLogger=tI.formatChildLoggerContext=tI.getLoggerContext=tI.setBrowserLoggerContext=tI.getBrowserLoggerContext=tI.getDefaultLoggerOptions=void 0;const A=oo();function I(C){return Object.assign(Object.assign({},C),{level:(C==null?void 0:C.level)||A.PINO_LOGGER_DEFAULTS.level})}tI.getDefaultLoggerOptions=I;function g(C,E=A.PINO_CUSTOM_CONTEXT_KEY){return C[E]||""}tI.getBrowserLoggerContext=g;function B(C,E,h=A.PINO_CUSTOM_CONTEXT_KEY){return C[h]=E,C}tI.setBrowserLoggerContext=B;function i(C,E=A.PINO_CUSTOM_CONTEXT_KEY){let h="";return typeof C.bindings>"u"?h=g(C,E):h=C.bindings().context||"",h}tI.getLoggerContext=i;function o(C,E,h=A.PINO_CUSTOM_CONTEXT_KEY){const a=i(C,h);return a.trim()?`${a}/${E}`:E}tI.formatChildLoggerContext=o;function Q(C,E,h=A.PINO_CUSTOM_CONTEXT_KEY){const a=o(C,E,h),t=C.child({context:a});return B(t,a,h)}return tI.generateChildLogger=Q,tI}(function(A){Object.defineProperty(A,"__esModule",{value:!0}),A.pino=void 0;const I=pI,g=I.__importDefault(NB);Object.defineProperty(A,"pino",{enumerable:!0,get:function(){return g.default}}),I.__exportStar(oo(),A),I.__exportStar(iN(),A)})(VA);let DN=class extends Yg{constructor(I){super(),this.opts=I,this.protocol="wc",this.version=2}},oN=class extends Yg{constructor(I,g){super(),this.core=I,this.logger=g,this.records=new Map}},aN=class{constructor(I,g){this.logger=I,this.core=g}},wN=class extends Yg{constructor(I,g){super(),this.relayer=I,this.logger=g}},GN=class extends Yg{constructor(I){super()}},kN=class{constructor(I,g,B,i){this.core=I,this.logger=g,this.name=B}},NN=class extends Yg{constructor(I,g){super(),this.relayer=I,this.logger=g}},cN=class extends Yg{constructor(I,g){super(),this.core=I,this.logger=g}},hN=class{constructor(I){this.opts=I,this.protocol="wc",this.version=2}},tN=class{constructor(I){this.client=I}};function eN(A){if(typeof A!="string")throw new Error(`Cannot safe json parse value of type ${typeof A}`);try{return JSON.parse(A)}catch{return A}}function MN(A){return typeof A=="string"?A:JSON.stringify(A)}var bC={},xg={},eB={},MB={};Object.defineProperty(MB,"__esModule",{value:!0});MB.BrowserRandomSource=void 0;const ci=65536;class sN{constructor(){this.isAvailable=!1,this.isInstantiated=!1;const I=typeof self<"u"?self.crypto||self.msCrypto:null;I&&I.getRandomValues!==void 0&&(this._crypto=I,this.isAvailable=!0,this.isInstantiated=!0)}randomBytes(I){if(!this.isAvailable||!this._crypto)throw new Error("Browser random byte generator is not available.");const g=new Uint8Array(I);for(let B=0;B<g.length;B+=ci)this._crypto.getRandomValues(g.subarray(B,B+Math.min(g.length-B,ci)));return g}}MB.BrowserRandomSource=sN;function nN(A){throw new Error('Could not dynamically require "'+A+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var sB={},RI={};Object.defineProperty(RI,"__esModule",{value:!0});function FN(A){for(var I=0;I<A.length;I++)A[I]=0;return A}RI.wipe=FN;const yN={},YN=Object.freeze(Object.defineProperty({__proto__:null,default:yN},Symbol.toStringTag,{value:"Module"})),JN=MQ(YN);Object.defineProperty(sB,"__esModule",{value:!0});sB.NodeRandomSource=void 0;const pN=RI;class rN{constructor(){if(this.isAvailable=!1,this.isInstantiated=!1,typeof nN<"u"){const I=JN;I&&I.randomBytes&&(this._crypto=I,this.isAvailable=!0,this.isInstantiated=!0)}}randomBytes(I){if(!this.isAvailable||!this._crypto)throw new Error("Node.js random byte generator is not available.");let g=this._crypto.randomBytes(I);if(g.length!==I)throw new Error("NodeRandomSource: got fewer bytes than requested");const B=new Uint8Array(I);for(let i=0;i<B.length;i++)B[i]=g[i];return(0,pN.wipe)(g),B}}sB.NodeRandomSource=rN;Object.defineProperty(eB,"__esModule",{value:!0});eB.SystemRandomSource=void 0;const UN=MB,RN=sB;class qN{constructor(){if(this.isAvailable=!1,this.name="",this._source=new UN.BrowserRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Browser";return}if(this._source=new RN.NodeRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Node";return}}randomBytes(I){if(!this.isAvailable)throw new Error("System random byte generator is not available.");return this._source.randomBytes(I)}}eB.SystemRandomSource=qN;var HA={},ao={};(function(A){Object.defineProperty(A,"__esModule",{value:!0});function I(C,E){var h=C>>>16&65535,a=C&65535,t=E>>>16&65535,e=E&65535;return a*e+(h*e+a*t<<16>>>0)|0}A.mul=Math.imul||I;function g(C,E){return C+E|0}A.add=g;function B(C,E){return C-E|0}A.sub=B;function i(C,E){return C<<E|C>>>32-E}A.rotl=i;function o(C,E){return C<<32-E|C>>>E}A.rotr=o;function Q(C){return typeof C=="number"&&isFinite(C)&&Math.floor(C)===C}A.isInteger=Number.isInteger||Q,A.MAX_SAFE_INTEGER=9007199254740991,A.isSafeInteger=function(C){return A.isInteger(C)&&C>=-A.MAX_SAFE_INTEGER&&C<=A.MAX_SAFE_INTEGER}})(ao);Object.defineProperty(HA,"__esModule",{value:!0});var wo=ao;function lN(A,I){return I===void 0&&(I=0),(A[I+0]<<8|A[I+1])<<16>>16}HA.readInt16BE=lN;function KN(A,I){return I===void 0&&(I=0),(A[I+0]<<8|A[I+1])>>>0}HA.readUint16BE=KN;function SN(A,I){return I===void 0&&(I=0),(A[I+1]<<8|A[I])<<16>>16}HA.readInt16LE=SN;function HN(A,I){return I===void 0&&(I=0),(A[I+1]<<8|A[I])>>>0}HA.readUint16LE=HN;function Go(A,I,g){return I===void 0&&(I=new Uint8Array(2)),g===void 0&&(g=0),I[g+0]=A>>>8,I[g+1]=A>>>0,I}HA.writeUint16BE=Go;HA.writeInt16BE=Go;function ko(A,I,g){return I===void 0&&(I=new Uint8Array(2)),g===void 0&&(g=0),I[g+0]=A>>>0,I[g+1]=A>>>8,I}HA.writeUint16LE=ko;HA.writeInt16LE=ko;function GC(A,I){return I===void 0&&(I=0),A[I]<<24|A[I+1]<<16|A[I+2]<<8|A[I+3]}HA.readInt32BE=GC;function kC(A,I){return I===void 0&&(I=0),(A[I]<<24|A[I+1]<<16|A[I+2]<<8|A[I+3])>>>0}HA.readUint32BE=kC;function NC(A,I){return I===void 0&&(I=0),A[I+3]<<24|A[I+2]<<16|A[I+1]<<8|A[I]}HA.readInt32LE=NC;function cC(A,I){return I===void 0&&(I=0),(A[I+3]<<24|A[I+2]<<16|A[I+1]<<8|A[I])>>>0}HA.readUint32LE=cC;function _Q(A,I,g){return I===void 0&&(I=new Uint8Array(4)),g===void 0&&(g=0),I[g+0]=A>>>24,I[g+1]=A>>>16,I[g+2]=A>>>8,I[g+3]=A>>>0,I}HA.writeUint32BE=_Q;HA.writeInt32BE=_Q;function $Q(A,I,g){return I===void 0&&(I=new Uint8Array(4)),g===void 0&&(g=0),I[g+0]=A>>>0,I[g+1]=A>>>8,I[g+2]=A>>>16,I[g+3]=A>>>24,I}HA.writeUint32LE=$Q;HA.writeInt32LE=$Q;function dN(A,I){I===void 0&&(I=0);var g=GC(A,I),B=GC(A,I+4);return g*4294967296+B-(B>>31)*4294967296}HA.readInt64BE=dN;function ON(A,I){I===void 0&&(I=0);var g=kC(A,I),B=kC(A,I+4);return g*4294967296+B}HA.readUint64BE=ON;function mN(A,I){I===void 0&&(I=0);var g=NC(A,I),B=NC(A,I+4);return B*4294967296+g-(g>>31)*4294967296}HA.readInt64LE=mN;function ZN(A,I){I===void 0&&(I=0);var g=cC(A,I),B=cC(A,I+4);return B*4294967296+g}HA.readUint64LE=ZN;function No(A,I,g){return I===void 0&&(I=new Uint8Array(8)),g===void 0&&(g=0),_Q(A/4294967296>>>0,I,g),_Q(A>>>0,I,g+4),I}HA.writeUint64BE=No;HA.writeInt64BE=No;function co(A,I,g){return I===void 0&&(I=new Uint8Array(8)),g===void 0&&(g=0),$Q(A>>>0,I,g),$Q(A/4294967296>>>0,I,g+4),I}HA.writeUint64LE=co;HA.writeInt64LE=co;function LN(A,I,g){if(g===void 0&&(g=0),A%8!==0)throw new Error("readUintBE supports only bitLengths divisible by 8");if(A/8>I.length-g)throw new Error("readUintBE: array is too short for the given bitLength");for(var B=0,i=1,o=A/8+g-1;o>=g;o--)B+=I[o]*i,i*=256;return B}HA.readUintBE=LN;function fN(A,I,g){if(g===void 0&&(g=0),A%8!==0)throw new Error("readUintLE supports only bitLengths divisible by 8");if(A/8>I.length-g)throw new Error("readUintLE: array is too short for the given bitLength");for(var B=0,i=1,o=g;o<g+A/8;o++)B+=I[o]*i,i*=256;return B}HA.readUintLE=fN;function jN(A,I,g,B){if(g===void 0&&(g=new Uint8Array(A/8)),B===void 0&&(B=0),A%8!==0)throw new Error("writeUintBE supports only bitLengths divisible by 8");if(!wo.isSafeInteger(I))throw new Error("writeUintBE value must be an integer");for(var i=1,o=A/8+B-1;o>=B;o--)g[o]=I/i&255,i*=256;return g}HA.writeUintBE=jN;function bN(A,I,g,B){if(g===void 0&&(g=new Uint8Array(A/8)),B===void 0&&(B=0),A%8!==0)throw new Error("writeUintLE supports only bitLengths divisible by 8");if(!wo.isSafeInteger(I))throw new Error("writeUintLE value must be an integer");for(var i=1,o=B;o<B+A/8;o++)g[o]=I/i&255,i*=256;return g}HA.writeUintLE=bN;function uN(A,I){I===void 0&&(I=0);var g=new DataView(A.buffer,A.byteOffset,A.byteLength);return g.getFloat32(I)}HA.readFloat32BE=uN;function WN(A,I){I===void 0&&(I=0);var g=new DataView(A.buffer,A.byteOffset,A.byteLength);return g.getFloat32(I,!0)}HA.readFloat32LE=WN;function VN(A,I){I===void 0&&(I=0);var g=new DataView(A.buffer,A.byteOffset,A.byteLength);return g.getFloat64(I)}HA.readFloat64BE=VN;function TN(A,I){I===void 0&&(I=0);var g=new DataView(A.buffer,A.byteOffset,A.byteLength);return g.getFloat64(I,!0)}HA.readFloat64LE=TN;function xN(A,I,g){I===void 0&&(I=new Uint8Array(4)),g===void 0&&(g=0);var B=new DataView(I.buffer,I.byteOffset,I.byteLength);return B.setFloat32(g,A),I}HA.writeFloat32BE=xN;function XN(A,I,g){I===void 0&&(I=new Uint8Array(4)),g===void 0&&(g=0);var B=new DataView(I.buffer,I.byteOffset,I.byteLength);return B.setFloat32(g,A,!0),I}HA.writeFloat32LE=XN;function zN(A,I,g){I===void 0&&(I=new Uint8Array(8)),g===void 0&&(g=0);var B=new DataView(I.buffer,I.byteOffset,I.byteLength);return B.setFloat64(g,A),I}HA.writeFloat64BE=zN;function vN(A,I,g){I===void 0&&(I=new Uint8Array(8)),g===void 0&&(g=0);var B=new DataView(I.buffer,I.byteOffset,I.byteLength);return B.setFloat64(g,A,!0),I}HA.writeFloat64LE=vN;(function(A){Object.defineProperty(A,"__esModule",{value:!0}),A.randomStringForEntropy=A.randomString=A.randomUint32=A.randomBytes=A.defaultRandomSource=void 0;const I=eB,g=HA,B=RI;A.defaultRandomSource=new I.SystemRandomSource;function i(h,a=A.defaultRandomSource){return a.randomBytes(h)}A.randomBytes=i;function o(h=A.defaultRandomSource){const a=i(4,h),t=(0,g.readUint32LE)(a);return(0,B.wipe)(a),t}A.randomUint32=o;const Q="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function C(h,a=Q,t=A.defaultRandomSource){if(a.length<2)throw new Error("randomString charset is too short");if(a.length>256)throw new Error("randomString charset is too long");let e="";const G=a.length,c=256-256%G;for(;h>0;){const p=i(Math.ceil(h*256/c),t);for(let Y=0;Y<p.length&&h>0;Y++){const F=p[Y];F<c&&(e+=a.charAt(F%G),h--)}(0,B.wipe)(p)}return e}A.randomString=C;function E(h,a=Q,t=A.defaultRandomSource){const e=Math.ceil(h/(Math.log(a.length)/Math.LN2));return C(e,a,t)}A.randomStringForEntropy=E})(xg);var ho={};(function(A){Object.defineProperty(A,"__esModule",{value:!0});var I=HA,g=RI;A.DIGEST_LENGTH=64,A.BLOCK_SIZE=128;var B=function(){function C(){this.digestLength=A.DIGEST_LENGTH,this.blockSize=A.BLOCK_SIZE,this._stateHi=new Int32Array(8),this._stateLo=new Int32Array(8),this._tempHi=new Int32Array(16),this._tempLo=new Int32Array(16),this._buffer=new Uint8Array(256),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this.reset()}return C.prototype._initState=function(){this._stateHi[0]=1779033703,this._stateHi[1]=3144134277,this._stateHi[2]=1013904242,this._stateHi[3]=2773480762,this._stateHi[4]=1359893119,this._stateHi[5]=2600822924,this._stateHi[6]=528734635,this._stateHi[7]=1541459225,this._stateLo[0]=4089235720,this._stateLo[1]=2227873595,this._stateLo[2]=4271175723,this._stateLo[3]=1595750129,this._stateLo[4]=2917565137,this._stateLo[5]=725511199,this._stateLo[6]=4215389547,this._stateLo[7]=327033209},C.prototype.reset=function(){return this._initState(),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this},C.prototype.clean=function(){g.wipe(this._buffer),g.wipe(this._tempHi),g.wipe(this._tempLo),this.reset()},C.prototype.update=function(E,h){if(h===void 0&&(h=E.length),this._finished)throw new Error("SHA512: can't update because hash was finished.");var a=0;if(this._bytesHashed+=h,this._bufferLength>0){for(;this._bufferLength<A.BLOCK_SIZE&&h>0;)this._buffer[this._bufferLength++]=E[a++],h--;this._bufferLength===this.blockSize&&(o(this._tempHi,this._tempLo,this._stateHi,this._stateLo,this._buffer,0,this.blockSize),this._bufferLength=0)}for(h>=this.blockSize&&(a=o(this._tempHi,this._tempLo,this._stateHi,this._stateLo,E,a,h),h%=this.blockSize);h>0;)this._buffer[this._bufferLength++]=E[a++],h--;return this},C.prototype.finish=function(E){if(!this._finished){var h=this._bytesHashed,a=this._bufferLength,t=h/536870912|0,e=h<<3,G=h%128<112?128:256;this._buffer[a]=128;for(var c=a+1;c<G-8;c++)this._buffer[c]=0;I.writeUint32BE(t,this._buffer,G-8),I.writeUint32BE(e,this._buffer,G-4),o(this._tempHi,this._tempLo,this._stateHi,this._stateLo,this._buffer,0,G),this._finished=!0}for(var c=0;c<this.digestLength/8;c++)I.writeUint32BE(this._stateHi[c],E,c*8),I.writeUint32BE(this._stateLo[c],E,c*8+4);return this},C.prototype.digest=function(){var E=new Uint8Array(this.digestLength);return this.finish(E),E},C.prototype.saveState=function(){if(this._finished)throw new Error("SHA256: cannot save finished state");return{stateHi:new Int32Array(this._stateHi),stateLo:new Int32Array(this._stateLo),buffer:this._bufferLength>0?new Uint8Array(this._buffer):void 0,bufferLength:this._bufferLength,bytesHashed:this._bytesHashed}},C.prototype.restoreState=function(E){return this._stateHi.set(E.stateHi),this._stateLo.set(E.stateLo),this._bufferLength=E.bufferLength,E.buffer&&this._buffer.set(E.buffer),this._bytesHashed=E.bytesHashed,this._finished=!1,this},C.prototype.cleanSavedState=function(E){g.wipe(E.stateHi),g.wipe(E.stateLo),E.buffer&&g.wipe(E.buffer),E.bufferLength=0,E.bytesHashed=0},C}();A.SHA512=B;var i=new Int32Array([1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591]);function o(C,E,h,a,t,e,G){for(var c=h[0],p=h[1],Y=h[2],F=h[3],s=h[4],M=h[5],N=h[6],k=h[7],w=a[0],D=a[1],y=a[2],O=a[3],R=a[4],m=a[5],V=a[6],j=a[7],U,S,X,u,Z,L,_,f;G>=128;){for(var W=0;W<16;W++){var QA=8*W+e;C[W]=I.readUint32BE(t,QA),E[W]=I.readUint32BE(t,QA+4)}for(var W=0;W<80;W++){var cA=c,aA=p,tA=Y,DA=F,EA=s,CA=M,K=N,b=k,P=w,kA=D,eA=y,FA=O,v=R,l=m,d=V,x=j;if(U=k,S=j,Z=S&65535,L=S>>>16,_=U&65535,f=U>>>16,U=(s>>>14|R<<32-14)^(s>>>18|R<<32-18)^(R>>>41-32|s<<32-(41-32)),S=(R>>>14|s<<32-14)^(R>>>18|s<<32-18)^(s>>>41-32|R<<32-(41-32)),Z+=S&65535,L+=S>>>16,_+=U&65535,f+=U>>>16,U=s&M^~s&N,S=R&m^~R&V,Z+=S&65535,L+=S>>>16,_+=U&65535,f+=U>>>16,U=i[W*2],S=i[W*2+1],Z+=S&65535,L+=S>>>16,_+=U&65535,f+=U>>>16,U=C[W%16],S=E[W%16],Z+=S&65535,L+=S>>>16,_+=U&65535,f+=U>>>16,L+=Z>>>16,_+=L>>>16,f+=_>>>16,X=_&65535|f<<16,u=Z&65535|L<<16,U=X,S=u,Z=S&65535,L=S>>>16,_=U&65535,f=U>>>16,U=(c>>>28|w<<32-28)^(w>>>34-32|c<<32-(34-32))^(w>>>39-32|c<<32-(39-32)),S=(w>>>28|c<<32-28)^(c>>>34-32|w<<32-(34-32))^(c>>>39-32|w<<32-(39-32)),Z+=S&65535,L+=S>>>16,_+=U&65535,f+=U>>>16,U=c&p^c&Y^p&Y,S=w&D^w&y^D&y,Z+=S&65535,L+=S>>>16,_+=U&65535,f+=U>>>16,L+=Z>>>16,_+=L>>>16,f+=_>>>16,b=_&65535|f<<16,x=Z&65535|L<<16,U=DA,S=FA,Z=S&65535,L=S>>>16,_=U&65535,f=U>>>16,U=X,S=u,Z+=S&65535,L+=S>>>16,_+=U&65535,f+=U>>>16,L+=Z>>>16,_+=L>>>16,f+=_>>>16,DA=_&65535|f<<16,FA=Z&65535|L<<16,p=cA,Y=aA,F=tA,s=DA,M=EA,N=CA,k=K,c=b,D=P,y=kA,O=eA,R=FA,m=v,V=l,j=d,w=x,W%16===15)for(var QA=0;QA<16;QA++)U=C[QA],S=E[QA],Z=S&65535,L=S>>>16,_=U&65535,f=U>>>16,U=C[(QA+9)%16],S=E[(QA+9)%16],Z+=S&65535,L+=S>>>16,_+=U&65535,f+=U>>>16,X=C[(QA+1)%16],u=E[(QA+1)%16],U=(X>>>1|u<<32-1)^(X>>>8|u<<32-8)^X>>>7,S=(u>>>1|X<<32-1)^(u>>>8|X<<32-8)^(u>>>7|X<<32-7),Z+=S&65535,L+=S>>>16,_+=U&65535,f+=U>>>16,X=C[(QA+14)%16],u=E[(QA+14)%16],U=(X>>>19|u<<32-19)^(u>>>61-32|X<<32-(61-32))^X>>>6,S=(u>>>19|X<<32-19)^(X>>>61-32|u<<32-(61-32))^(u>>>6|X<<32-6),Z+=S&65535,L+=S>>>16,_+=U&65535,f+=U>>>16,L+=Z>>>16,_+=L>>>16,f+=_>>>16,C[QA]=_&65535|f<<16,E[QA]=Z&65535|L<<16}U=c,S=w,Z=S&65535,L=S>>>16,_=U&65535,f=U>>>16,U=h[0],S=a[0],Z+=S&65535,L+=S>>>16,_+=U&65535,f+=U>>>16,L+=Z>>>16,_+=L>>>16,f+=_>>>16,h[0]=c=_&65535|f<<16,a[0]=w=Z&65535|L<<16,U=p,S=D,Z=S&65535,L=S>>>16,_=U&65535,f=U>>>16,U=h[1],S=a[1],Z+=S&65535,L+=S>>>16,_+=U&65535,f+=U>>>16,L+=Z>>>16,_+=L>>>16,f+=_>>>16,h[1]=p=_&65535|f<<16,a[1]=D=Z&65535|L<<16,U=Y,S=y,Z=S&65535,L=S>>>16,_=U&65535,f=U>>>16,U=h[2],S=a[2],Z+=S&65535,L+=S>>>16,_+=U&65535,f+=U>>>16,L+=Z>>>16,_+=L>>>16,f+=_>>>16,h[2]=Y=_&65535|f<<16,a[2]=y=Z&65535|L<<16,U=F,S=O,Z=S&65535,L=S>>>16,_=U&65535,f=U>>>16,U=h[3],S=a[3],Z+=S&65535,L+=S>>>16,_+=U&65535,f+=U>>>16,L+=Z>>>16,_+=L>>>16,f+=_>>>16,h[3]=F=_&65535|f<<16,a[3]=O=Z&65535|L<<16,U=s,S=R,Z=S&65535,L=S>>>16,_=U&65535,f=U>>>16,U=h[4],S=a[4],Z+=S&65535,L+=S>>>16,_+=U&65535,f+=U>>>16,L+=Z>>>16,_+=L>>>16,f+=_>>>16,h[4]=s=_&65535|f<<16,a[4]=R=Z&65535|L<<16,U=M,S=m,Z=S&65535,L=S>>>16,_=U&65535,f=U>>>16,U=h[5],S=a[5],Z+=S&65535,L+=S>>>16,_+=U&65535,f+=U>>>16,L+=Z>>>16,_+=L>>>16,f+=_>>>16,h[5]=M=_&65535|f<<16,a[5]=m=Z&65535|L<<16,U=N,S=V,Z=S&65535,L=S>>>16,_=U&65535,f=U>>>16,U=h[6],S=a[6],Z+=S&65535,L+=S>>>16,_+=U&65535,f+=U>>>16,L+=Z>>>16,_+=L>>>16,f+=_>>>16,h[6]=N=_&65535|f<<16,a[6]=V=Z&65535|L<<16,U=k,S=j,Z=S&65535,L=S>>>16,_=U&65535,f=U>>>16,U=h[7],S=a[7],Z+=S&65535,L+=S>>>16,_+=U&65535,f+=U>>>16,L+=Z>>>16,_+=L>>>16,f+=_>>>16,h[7]=k=_&65535|f<<16,a[7]=j=Z&65535|L<<16,e+=128,G-=128}return e}function Q(C){var E=new B;E.update(C);var h=E.digest();return E.clean(),h}A.hash=Q})(ho);(function(A){Object.defineProperty(A,"__esModule",{value:!0}),A.convertSecretKeyToX25519=A.convertPublicKeyToX25519=A.verify=A.sign=A.extractPublicKeyFromSecretKey=A.generateKeyPair=A.generateKeyPairFromSeed=A.SEED_LENGTH=A.SECRET_KEY_LENGTH=A.PUBLIC_KEY_LENGTH=A.SIGNATURE_LENGTH=void 0;const I=xg,g=ho,B=RI;A.SIGNATURE_LENGTH=64,A.PUBLIC_KEY_LENGTH=32,A.SECRET_KEY_LENGTH=64,A.SEED_LENGTH=32;function i(DA){const EA=new Float64Array(16);if(DA)for(let CA=0;CA<DA.length;CA++)EA[CA]=DA[CA];return EA}const o=new Uint8Array(32);o[0]=9;const Q=i(),C=i([1]),E=i([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),h=i([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222]),a=i([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),t=i([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]),e=i([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139]);function G(DA,EA){for(let CA=0;CA<16;CA++)DA[CA]=EA[CA]|0}function c(DA){let EA=1;for(let CA=0;CA<16;CA++){let K=DA[CA]+EA+65535;EA=Math.floor(K/65536),DA[CA]=K-EA*65536}DA[0]+=EA-1+37*(EA-1)}function p(DA,EA,CA){const K=~(CA-1);for(let b=0;b<16;b++){const P=K&(DA[b]^EA[b]);DA[b]^=P,EA[b]^=P}}function Y(DA,EA){const CA=i(),K=i();for(let b=0;b<16;b++)K[b]=EA[b];c(K),c(K),c(K);for(let b=0;b<2;b++){CA[0]=K[0]-65517;for(let kA=1;kA<15;kA++)CA[kA]=K[kA]-65535-(CA[kA-1]>>16&1),CA[kA-1]&=65535;CA[15]=K[15]-32767-(CA[14]>>16&1);const P=CA[15]>>16&1;CA[14]&=65535,p(K,CA,1-P)}for(let b=0;b<16;b++)DA[2*b]=K[b]&255,DA[2*b+1]=K[b]>>8}function F(DA,EA){let CA=0;for(let K=0;K<32;K++)CA|=DA[K]^EA[K];return(1&CA-1>>>8)-1}function s(DA,EA){const CA=new Uint8Array(32),K=new Uint8Array(32);return Y(CA,DA),Y(K,EA),F(CA,K)}function M(DA){const EA=new Uint8Array(32);return Y(EA,DA),EA[0]&1}function N(DA,EA){for(let CA=0;CA<16;CA++)DA[CA]=EA[2*CA]+(EA[2*CA+1]<<8);DA[15]&=32767}function k(DA,EA,CA){for(let K=0;K<16;K++)DA[K]=EA[K]+CA[K]}function w(DA,EA,CA){for(let K=0;K<16;K++)DA[K]=EA[K]-CA[K]}function D(DA,EA,CA){let K,b,P=0,kA=0,eA=0,FA=0,v=0,l=0,d=0,x=0,oA=0,hA=0,AA=0,n=0,r=0,J=0,q=0,H=0,T=0,z=0,$=0,BA=0,gA=0,iA=0,wA=0,GA=0,MA=0,nA=0,JA=0,UA=0,mA=0,fA=0,lA=0,rA=CA[0],SA=CA[1],WA=CA[2],xA=CA[3],XA=CA[4],jA=CA[5],zA=CA[6],uA=CA[7],OA=CA[8],KA=CA[9],CI=CA[10],BI=CA[11],QI=CA[12],$A=CA[13],EI=CA[14],iI=CA[15];K=EA[0],P+=K*rA,kA+=K*SA,eA+=K*WA,FA+=K*xA,v+=K*XA,l+=K*jA,d+=K*zA,x+=K*uA,oA+=K*OA,hA+=K*KA,AA+=K*CI,n+=K*BI,r+=K*QI,J+=K*$A,q+=K*EI,H+=K*iI,K=EA[1],kA+=K*rA,eA+=K*SA,FA+=K*WA,v+=K*xA,l+=K*XA,d+=K*jA,x+=K*zA,oA+=K*uA,hA+=K*OA,AA+=K*KA,n+=K*CI,r+=K*BI,J+=K*QI,q+=K*$A,H+=K*EI,T+=K*iI,K=EA[2],eA+=K*rA,FA+=K*SA,v+=K*WA,l+=K*xA,d+=K*XA,x+=K*jA,oA+=K*zA,hA+=K*uA,AA+=K*OA,n+=K*KA,r+=K*CI,J+=K*BI,q+=K*QI,H+=K*$A,T+=K*EI,z+=K*iI,K=EA[3],FA+=K*rA,v+=K*SA,l+=K*WA,d+=K*xA,x+=K*XA,oA+=K*jA,hA+=K*zA,AA+=K*uA,n+=K*OA,r+=K*KA,J+=K*CI,q+=K*BI,H+=K*QI,T+=K*$A,z+=K*EI,$+=K*iI,K=EA[4],v+=K*rA,l+=K*SA,d+=K*WA,x+=K*xA,oA+=K*XA,hA+=K*jA,AA+=K*zA,n+=K*uA,r+=K*OA,J+=K*KA,q+=K*CI,H+=K*BI,T+=K*QI,z+=K*$A,$+=K*EI,BA+=K*iI,K=EA[5],l+=K*rA,d+=K*SA,x+=K*WA,oA+=K*xA,hA+=K*XA,AA+=K*jA,n+=K*zA,r+=K*uA,J+=K*OA,q+=K*KA,H+=K*CI,T+=K*BI,z+=K*QI,$+=K*$A,BA+=K*EI,gA+=K*iI,K=EA[6],d+=K*rA,x+=K*SA,oA+=K*WA,hA+=K*xA,AA+=K*XA,n+=K*jA,r+=K*zA,J+=K*uA,q+=K*OA,H+=K*KA,T+=K*CI,z+=K*BI,$+=K*QI,BA+=K*$A,gA+=K*EI,iA+=K*iI,K=EA[7],x+=K*rA,oA+=K*SA,hA+=K*WA,AA+=K*xA,n+=K*XA,r+=K*jA,J+=K*zA,q+=K*uA,H+=K*OA,T+=K*KA,z+=K*CI,$+=K*BI,BA+=K*QI,gA+=K*$A,iA+=K*EI,wA+=K*iI,K=EA[8],oA+=K*rA,hA+=K*SA,AA+=K*WA,n+=K*xA,r+=K*XA,J+=K*jA,q+=K*zA,H+=K*uA,T+=K*OA,z+=K*KA,$+=K*CI,BA+=K*BI,gA+=K*QI,iA+=K*$A,wA+=K*EI,GA+=K*iI,K=EA[9],hA+=K*rA,AA+=K*SA,n+=K*WA,r+=K*xA,J+=K*XA,q+=K*jA,H+=K*zA,T+=K*uA,z+=K*OA,$+=K*KA,BA+=K*CI,gA+=K*BI,iA+=K*QI,wA+=K*$A,GA+=K*EI,MA+=K*iI,K=EA[10],AA+=K*rA,n+=K*SA,r+=K*WA,J+=K*xA,q+=K*XA,H+=K*jA,T+=K*zA,z+=K*uA,$+=K*OA,BA+=K*KA,gA+=K*CI,iA+=K*BI,wA+=K*QI,GA+=K*$A,MA+=K*EI,nA+=K*iI,K=EA[11],n+=K*rA,r+=K*SA,J+=K*WA,q+=K*xA,H+=K*XA,T+=K*jA,z+=K*zA,$+=K*uA,BA+=K*OA,gA+=K*KA,iA+=K*CI,wA+=K*BI,GA+=K*QI,MA+=K*$A,nA+=K*EI,JA+=K*iI,K=EA[12],r+=K*rA,J+=K*SA,q+=K*WA,H+=K*xA,T+=K*XA,z+=K*jA,$+=K*zA,BA+=K*uA,gA+=K*OA,iA+=K*KA,wA+=K*CI,GA+=K*BI,MA+=K*QI,nA+=K*$A,JA+=K*EI,UA+=K*iI,K=EA[13],J+=K*rA,q+=K*SA,H+=K*WA,T+=K*xA,z+=K*XA,$+=K*jA,BA+=K*zA,gA+=K*uA,iA+=K*OA,wA+=K*KA,GA+=K*CI,MA+=K*BI,nA+=K*QI,JA+=K*$A,UA+=K*EI,mA+=K*iI,K=EA[14],q+=K*rA,H+=K*SA,T+=K*WA,z+=K*xA,$+=K*XA,BA+=K*jA,gA+=K*zA,iA+=K*uA,wA+=K*OA,GA+=K*KA,MA+=K*CI,nA+=K*BI,JA+=K*QI,UA+=K*$A,mA+=K*EI,fA+=K*iI,K=EA[15],H+=K*rA,T+=K*SA,z+=K*WA,$+=K*xA,BA+=K*XA,gA+=K*jA,iA+=K*zA,wA+=K*uA,GA+=K*OA,MA+=K*KA,nA+=K*CI,JA+=K*BI,UA+=K*QI,mA+=K*$A,fA+=K*EI,lA+=K*iI,P+=38*T,kA+=38*z,eA+=38*$,FA+=38*BA,v+=38*gA,l+=38*iA,d+=38*wA,x+=38*GA,oA+=38*MA,hA+=38*nA,AA+=38*JA,n+=38*UA,r+=38*mA,J+=38*fA,q+=38*lA,b=1,K=P+b+65535,b=Math.floor(K/65536),P=K-b*65536,K=kA+b+65535,b=Math.floor(K/65536),kA=K-b*65536,K=eA+b+65535,b=Math.floor(K/65536),eA=K-b*65536,K=FA+b+65535,b=Math.floor(K/65536),FA=K-b*65536,K=v+b+65535,b=Math.floor(K/65536),v=K-b*65536,K=l+b+65535,b=Math.floor(K/65536),l=K-b*65536,K=d+b+65535,b=Math.floor(K/65536),d=K-b*65536,K=x+b+65535,b=Math.floor(K/65536),x=K-b*65536,K=oA+b+65535,b=Math.floor(K/65536),oA=K-b*65536,K=hA+b+65535,b=Math.floor(K/65536),hA=K-b*65536,K=AA+b+65535,b=Math.floor(K/65536),AA=K-b*65536,K=n+b+65535,b=Math.floor(K/65536),n=K-b*65536,K=r+b+65535,b=Math.floor(K/65536),r=K-b*65536,K=J+b+65535,b=Math.floor(K/65536),J=K-b*65536,K=q+b+65535,b=Math.floor(K/65536),q=K-b*65536,K=H+b+65535,b=Math.floor(K/65536),H=K-b*65536,P+=b-1+37*(b-1),b=1,K=P+b+65535,b=Math.floor(K/65536),P=K-b*65536,K=kA+b+65535,b=Math.floor(K/65536),kA=K-b*65536,K=eA+b+65535,b=Math.floor(K/65536),eA=K-b*65536,K=FA+b+65535,b=Math.floor(K/65536),FA=K-b*65536,K=v+b+65535,b=Math.floor(K/65536),v=K-b*65536,K=l+b+65535,b=Math.floor(K/65536),l=K-b*65536,K=d+b+65535,b=Math.floor(K/65536),d=K-b*65536,K=x+b+65535,b=Math.floor(K/65536),x=K-b*65536,K=oA+b+65535,b=Math.floor(K/65536),oA=K-b*65536,K=hA+b+65535,b=Math.floor(K/65536),hA=K-b*65536,K=AA+b+65535,b=Math.floor(K/65536),AA=K-b*65536,K=n+b+65535,b=Math.floor(K/65536),n=K-b*65536,K=r+b+65535,b=Math.floor(K/65536),r=K-b*65536,K=J+b+65535,b=Math.floor(K/65536),J=K-b*65536,K=q+b+65535,b=Math.floor(K/65536),q=K-b*65536,K=H+b+65535,b=Math.floor(K/65536),H=K-b*65536,P+=b-1+37*(b-1),DA[0]=P,DA[1]=kA,DA[2]=eA,DA[3]=FA,DA[4]=v,DA[5]=l,DA[6]=d,DA[7]=x,DA[8]=oA,DA[9]=hA,DA[10]=AA,DA[11]=n,DA[12]=r,DA[13]=J,DA[14]=q,DA[15]=H}function y(DA,EA){D(DA,EA,EA)}function O(DA,EA){const CA=i();let K;for(K=0;K<16;K++)CA[K]=EA[K];for(K=253;K>=0;K--)y(CA,CA),K!==2&&K!==4&&D(CA,CA,EA);for(K=0;K<16;K++)DA[K]=CA[K]}function R(DA,EA){const CA=i();let K;for(K=0;K<16;K++)CA[K]=EA[K];for(K=250;K>=0;K--)y(CA,CA),K!==1&&D(CA,CA,EA);for(K=0;K<16;K++)DA[K]=CA[K]}function m(DA,EA){const CA=i(),K=i(),b=i(),P=i(),kA=i(),eA=i(),FA=i(),v=i(),l=i();w(CA,DA[1],DA[0]),w(l,EA[1],EA[0]),D(CA,CA,l),k(K,DA[0],DA[1]),k(l,EA[0],EA[1]),D(K,K,l),D(b,DA[3],EA[3]),D(b,b,h),D(P,DA[2],EA[2]),k(P,P,P),w(kA,K,CA),w(eA,P,b),k(FA,P,b),k(v,K,CA),D(DA[0],kA,eA),D(DA[1],v,FA),D(DA[2],FA,eA),D(DA[3],kA,v)}function V(DA,EA,CA){for(let K=0;K<4;K++)p(DA[K],EA[K],CA)}function j(DA,EA){const CA=i(),K=i(),b=i();O(b,EA[2]),D(CA,EA[0],b),D(K,EA[1],b),Y(DA,K),DA[31]^=M(CA)<<7}function U(DA,EA,CA){G(DA[0],Q),G(DA[1],C),G(DA[2],C),G(DA[3],Q);for(let K=255;K>=0;--K){const b=CA[K/8|0]>>(K&7)&1;V(DA,EA,b),m(EA,DA),m(DA,DA),V(DA,EA,b)}}function S(DA,EA){const CA=[i(),i(),i(),i()];G(CA[0],a),G(CA[1],t),G(CA[2],C),D(CA[3],a,t),U(DA,CA,EA)}function X(DA){if(DA.length!==A.SEED_LENGTH)throw new Error(`ed25519: seed must be ${A.SEED_LENGTH} bytes`);const EA=(0,g.hash)(DA);EA[0]&=248,EA[31]&=127,EA[31]|=64;const CA=new Uint8Array(32),K=[i(),i(),i(),i()];S(K,EA),j(CA,K);const b=new Uint8Array(64);return b.set(DA),b.set(CA,32),{publicKey:CA,secretKey:b}}A.generateKeyPairFromSeed=X;function u(DA){const EA=(0,I.randomBytes)(32,DA),CA=X(EA);return(0,B.wipe)(EA),CA}A.generateKeyPair=u;function Z(DA){if(DA.length!==A.SECRET_KEY_LENGTH)throw new Error(`ed25519: secret key must be ${A.SECRET_KEY_LENGTH} bytes`);return new Uint8Array(DA.subarray(32))}A.extractPublicKeyFromSecretKey=Z;const L=new Float64Array([237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16]);function _(DA,EA){let CA,K,b,P;for(K=63;K>=32;--K){for(CA=0,b=K-32,P=K-12;b<P;++b)EA[b]+=CA-16*EA[K]*L[b-(K-32)],CA=Math.floor((EA[b]+128)/256),EA[b]-=CA*256;EA[b]+=CA,EA[K]=0}for(CA=0,b=0;b<32;b++)EA[b]+=CA-(EA[31]>>4)*L[b],CA=EA[b]>>8,EA[b]&=255;for(b=0;b<32;b++)EA[b]-=CA*L[b];for(K=0;K<32;K++)EA[K+1]+=EA[K]>>8,DA[K]=EA[K]&255}function f(DA){const EA=new Float64Array(64);for(let CA=0;CA<64;CA++)EA[CA]=DA[CA];for(let CA=0;CA<64;CA++)DA[CA]=0;_(DA,EA)}function W(DA,EA){const CA=new Float64Array(64),K=[i(),i(),i(),i()],b=(0,g.hash)(DA.subarray(0,32));b[0]&=248,b[31]&=127,b[31]|=64;const P=new Uint8Array(64);P.set(b.subarray(32),32);const kA=new g.SHA512;kA.update(P.subarray(32)),kA.update(EA);const eA=kA.digest();kA.clean(),f(eA),S(K,eA),j(P,K),kA.reset(),kA.update(P.subarray(0,32)),kA.update(DA.subarray(32)),kA.update(EA);const FA=kA.digest();f(FA);for(let v=0;v<32;v++)CA[v]=eA[v];for(let v=0;v<32;v++)for(let l=0;l<32;l++)CA[v+l]+=FA[v]*b[l];return _(P.subarray(32),CA),P}A.sign=W;function QA(DA,EA){const CA=i(),K=i(),b=i(),P=i(),kA=i(),eA=i(),FA=i();return G(DA[2],C),N(DA[1],EA),y(b,DA[1]),D(P,b,E),w(b,b,DA[2]),k(P,DA[2],P),y(kA,P),y(eA,kA),D(FA,eA,kA),D(CA,FA,b),D(CA,CA,P),R(CA,CA),D(CA,CA,b),D(CA,CA,P),D(CA,CA,P),D(DA[0],CA,P),y(K,DA[0]),D(K,K,P),s(K,b)&&D(DA[0],DA[0],e),y(K,DA[0]),D(K,K,P),s(K,b)?-1:(M(DA[0])===EA[31]>>7&&w(DA[0],Q,DA[0]),D(DA[3],DA[0],DA[1]),0)}function cA(DA,EA,CA){const K=new Uint8Array(32),b=[i(),i(),i(),i()],P=[i(),i(),i(),i()];if(CA.length!==A.SIGNATURE_LENGTH)throw new Error(`ed25519: signature must be ${A.SIGNATURE_LENGTH} bytes`);if(QA(P,DA))return!1;const kA=new g.SHA512;kA.update(CA.subarray(0,32)),kA.update(DA),kA.update(EA);const eA=kA.digest();return f(eA),U(b,P,eA),S(P,CA.subarray(32)),m(b,P),j(K,b),!F(CA,K)}A.verify=cA;function aA(DA){let EA=[i(),i(),i(),i()];if(QA(EA,DA))throw new Error("Ed25519: invalid public key");let CA=i(),K=i(),b=EA[1];k(CA,C,b),w(K,C,b),O(K,K),D(CA,CA,K);let P=new Uint8Array(32);return Y(P,CA),P}A.convertPublicKeyToX25519=aA;function tA(DA){const EA=(0,g.hash)(DA.subarray(0,32));EA[0]&=248,EA[31]&=127,EA[31]|=64;const CA=new Uint8Array(EA.subarray(0,32));return(0,B.wipe)(EA),CA}A.convertSecretKeyToX25519=tA})(bC);const PN="EdDSA",_N="JWT",to=".",eo="base64url",$N="utf8",Ac="utf8",Ic=":",gc="did",Qc="key",hi="base58btc",Bc="z",Cc="K36",Ec=32;function Mo(A=0){return globalThis.Buffer!=null&&globalThis.Buffer.allocUnsafe!=null?globalThis.Buffer.allocUnsafe(A):new Uint8Array(A)}function hC(A,I){I||(I=A.reduce((i,o)=>i+o.length,0));const g=Mo(I);let B=0;for(const i of A)g.set(i,B),B+=i.length;return g}function ic(A,I){if(A.length>=255)throw new TypeError("Alphabet too long");for(var g=new Uint8Array(256),B=0;B<g.length;B++)g[B]=255;for(var i=0;i<A.length;i++){var o=A.charAt(i),Q=o.charCodeAt(0);if(g[Q]!==255)throw new TypeError(o+" is ambiguous");g[Q]=i}var C=A.length,E=A.charAt(0),h=Math.log(C)/Math.log(256),a=Math.log(256)/Math.log(C);function t(c){if(c instanceof Uint8Array||(ArrayBuffer.isView(c)?c=new Uint8Array(c.buffer,c.byteOffset,c.byteLength):Array.isArray(c)&&(c=Uint8Array.from(c))),!(c instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(c.length===0)return"";for(var p=0,Y=0,F=0,s=c.length;F!==s&&c[F]===0;)F++,p++;for(var M=(s-F)*a+1>>>0,N=new Uint8Array(M);F!==s;){for(var k=c[F],w=0,D=M-1;(k!==0||w<Y)&&D!==-1;D--,w++)k+=256*N[D]>>>0,N[D]=k%C>>>0,k=k/C>>>0;if(k!==0)throw new Error("Non-zero carry");Y=w,F++}for(var y=M-Y;y!==M&&N[y]===0;)y++;for(var O=E.repeat(p);y<M;++y)O+=A.charAt(N[y]);return O}function e(c){if(typeof c!="string")throw new TypeError("Expected String");if(c.length===0)return new Uint8Array;var p=0;if(c[p]!==" "){for(var Y=0,F=0;c[p]===E;)Y++,p++;for(var s=(c.length-p)*h+1>>>0,M=new Uint8Array(s);c[p];){var N=g[c.charCodeAt(p)];if(N===255)return;for(var k=0,w=s-1;(N!==0||k<F)&&w!==-1;w--,k++)N+=C*M[w]>>>0,M[w]=N%256>>>0,N=N/256>>>0;if(N!==0)throw new Error("Non-zero carry");F=k,p++}if(c[p]!==" "){for(var D=s-F;D!==s&&M[D]===0;)D++;for(var y=new Uint8Array(Y+(s-D)),O=Y;D!==s;)y[O++]=M[D++];return y}}}function G(c){var p=e(c);if(p)return p;throw new Error(`Non-${I} character`)}return{encode:t,decodeUnsafe:e,decode:G}}var Dc=ic,oc=Dc;const ac=A=>{if(A instanceof Uint8Array&&A.constructor.name==="Uint8Array")return A;if(A instanceof ArrayBuffer)return new Uint8Array(A);if(ArrayBuffer.isView(A))return new Uint8Array(A.buffer,A.byteOffset,A.byteLength);throw new Error("Unknown type, must be binary type")},wc=A=>new TextEncoder().encode(A),Gc=A=>new TextDecoder().decode(A);class kc{constructor(I,g,B){this.name=I,this.prefix=g,this.baseEncode=B}encode(I){if(I instanceof Uint8Array)return`${this.prefix}${this.baseEncode(I)}`;throw Error("Unknown type, must be binary type")}}class Nc{constructor(I,g,B){if(this.name=I,this.prefix=g,g.codePointAt(0)===void 0)throw new Error("Invalid prefix character");this.prefixCodePoint=g.codePointAt(0),this.baseDecode=B}decode(I){if(typeof I=="string"){if(I.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(I)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(I.slice(this.prefix.length))}else throw Error("Can only multibase decode strings")}or(I){return so(this,I)}}class cc{constructor(I){this.decoders=I}or(I){return so(this,I)}decode(I){const g=I[0],B=this.decoders[g];if(B)return B.decode(I);throw RangeError(`Unable to decode multibase string ${JSON.stringify(I)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const so=(A,I)=>new cc({...A.decoders||{[A.prefix]:A},...I.decoders||{[I.prefix]:I}});class hc{constructor(I,g,B,i){this.name=I,this.prefix=g,this.baseEncode=B,this.baseDecode=i,this.encoder=new kc(I,g,B),this.decoder=new Nc(I,g,i)}encode(I){return this.encoder.encode(I)}decode(I){return this.decoder.decode(I)}}const nB=({name:A,prefix:I,encode:g,decode:B})=>new hc(A,I,g,B),yQ=({prefix:A,name:I,alphabet:g})=>{const{encode:B,decode:i}=oc(g,I);return nB({prefix:A,name:I,encode:B,decode:o=>ac(i(o))})},tc=(A,I,g,B)=>{const i={};for(let a=0;a<I.length;++a)i[I[a]]=a;let o=A.length;for(;A[o-1]==="=";)--o;const Q=new Uint8Array(o*g/8|0);let C=0,E=0,h=0;for(let a=0;a<o;++a){const t=i[A[a]];if(t===void 0)throw new SyntaxError(`Non-${B} character`);E=E<<g|t,C+=g,C>=8&&(C-=8,Q[h++]=255&E>>C)}if(C>=g||255&E<<8-C)throw new SyntaxError("Unexpected end of data");return Q},ec=(A,I,g)=>{const B=I[I.length-1]==="=",i=(1<<g)-1;let o="",Q=0,C=0;for(let E=0;E<A.length;++E)for(C=C<<8|A[E],Q+=8;Q>g;)Q-=g,o+=I[i&C>>Q];if(Q&&(o+=I[i&C<<g-Q]),B)for(;o.length*g&7;)o+="=";return o},GI=({name:A,prefix:I,bitsPerChar:g,alphabet:B})=>nB({prefix:I,name:A,encode(i){return ec(i,B,g)},decode(i){return tc(i,B,g,A)}}),Mc=nB({prefix:"\0",name:"identity",encode:A=>Gc(A),decode:A=>wc(A)}),sc=Object.freeze(Object.defineProperty({__proto__:null,identity:Mc},Symbol.toStringTag,{value:"Module"})),nc=GI({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1}),Fc=Object.freeze(Object.defineProperty({__proto__:null,base2:nc},Symbol.toStringTag,{value:"Module"})),yc=GI({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3}),Yc=Object.freeze(Object.defineProperty({__proto__:null,base8:yc},Symbol.toStringTag,{value:"Module"})),Jc=yQ({prefix:"9",name:"base10",alphabet:"0123456789"}),pc=Object.freeze(Object.defineProperty({__proto__:null,base10:Jc},Symbol.toStringTag,{value:"Module"})),rc=GI({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),Uc=GI({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4}),Rc=Object.freeze(Object.defineProperty({__proto__:null,base16:rc,base16upper:Uc},Symbol.toStringTag,{value:"Module"})),qc=GI({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),lc=GI({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),Kc=GI({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),Sc=GI({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),Hc=GI({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),dc=GI({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),Oc=GI({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),mc=GI({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),Zc=GI({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5}),Lc=Object.freeze(Object.defineProperty({__proto__:null,base32:qc,base32hex:Hc,base32hexpad:Oc,base32hexpadupper:mc,base32hexupper:dc,base32pad:Kc,base32padupper:Sc,base32upper:lc,base32z:Zc},Symbol.toStringTag,{value:"Module"})),fc=yQ({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),jc=yQ({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"}),bc=Object.freeze(Object.defineProperty({__proto__:null,base36:fc,base36upper:jc},Symbol.toStringTag,{value:"Module"})),uc=yQ({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),Wc=yQ({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),Vc=Object.freeze(Object.defineProperty({__proto__:null,base58btc:uc,base58flickr:Wc},Symbol.toStringTag,{value:"Module"})),Tc=GI({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),xc=GI({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),Xc=GI({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),zc=GI({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6}),vc=Object.freeze(Object.defineProperty({__proto__:null,base64:Tc,base64pad:xc,base64url:Xc,base64urlpad:zc},Symbol.toStringTag,{value:"Module"})),no=Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),Pc=no.reduce((A,I,g)=>(A[g]=I,A),[]),_c=no.reduce((A,I,g)=>(A[I.codePointAt(0)]=g,A),[]);function $c(A){return A.reduce((I,g)=>(I+=Pc[g],I),"")}function Ah(A){const I=[];for(const g of A){const B=_c[g.codePointAt(0)];if(B===void 0)throw new Error(`Non-base256emoji character: ${g}`);I.push(B)}return new Uint8Array(I)}const Ih=nB({prefix:"🚀",name:"base256emoji",encode:$c,decode:Ah}),gh=Object.freeze(Object.defineProperty({__proto__:null,base256emoji:Ih},Symbol.toStringTag,{value:"Module"}));new TextEncoder;new TextDecoder;const ti={...sc,...Fc,...Yc,...pc,...Rc,...Lc,...bc,...Vc,...vc,...gh};function Fo(A,I,g,B){return{name:A,prefix:I,encoder:{name:A,prefix:I,encode:g},decoder:{decode:B}}}const ei=Fo("utf8","u",A=>"u"+new TextDecoder("utf8").decode(A),A=>new TextEncoder().encode(A.substring(1))),_B=Fo("ascii","a",A=>{let I="a";for(let g=0;g<A.length;g++)I+=String.fromCharCode(A[g]);return I},A=>{A=A.substring(1);const I=Mo(A.length);for(let g=0;g<A.length;g++)I[g]=A.charCodeAt(g);return I}),yo={utf8:ei,"utf-8":ei,hex:ti.base16,latin1:_B,ascii:_B,binary:_B,...ti};function rI(A,I="utf8"){const g=yo[I];if(!g)throw new Error(`Unsupported encoding "${I}"`);return(I==="utf8"||I==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?globalThis.Buffer.from(A.buffer,A.byteOffset,A.byteLength).toString("utf8"):g.encoder.encode(A).substring(1)}function yI(A,I="utf8"){const g=yo[I];if(!g)throw new Error(`Unsupported encoding "${I}"`);return(I==="utf8"||I==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?globalThis.Buffer.from(A,"utf8"):g.decoder.decode(`${g.prefix}${A}`)}function Qh(A){return typeof A=="string"?A:JSON.stringify(A)}function AB(A){return rI(yI(Qh(A),$N),eo)}function Yo(A){const I=yI(Cc,hi),g=Bc+rI(hC([I,A]),hi);return[gc,Qc,g].join(Ic)}function Bh(A){return rI(A,eo)}function Ch(A){return yI([AB(A.header),AB(A.payload)].join(to),Ac)}function Eh(A){return[AB(A.header),AB(A.payload),Bh(A.signature)].join(to)}function Mi(A=xg.randomBytes(Ec)){return bC.generateKeyPairFromSeed(A)}async function ih(A,I,g,B,i=RA.fromMiliseconds(Date.now())){const o={alg:PN,typ:_N},Q=Yo(B.publicKey),C=i+g,E={iss:Q,sub:A,aud:I,iat:i,exp:C},h=Ch({header:o,payload:E}),a=bC.sign(B.secretKey,h);return Eh({header:o,payload:E,signature:a})}var uC={},FB={};Object.defineProperty(FB,"__esModule",{value:!0});var cI=HA,tC=RI,Dh=20;function oh(A,I,g){for(var B=1634760805,i=857760878,o=2036477234,Q=1797285236,C=g[3]<<24|g[2]<<16|g[1]<<8|g[0],E=g[7]<<24|g[6]<<16|g[5]<<8|g[4],h=g[11]<<24|g[10]<<16|g[9]<<8|g[8],a=g[15]<<24|g[14]<<16|g[13]<<8|g[12],t=g[19]<<24|g[18]<<16|g[17]<<8|g[16],e=g[23]<<24|g[22]<<16|g[21]<<8|g[20],G=g[27]<<24|g[26]<<16|g[25]<<8|g[24],c=g[31]<<24|g[30]<<16|g[29]<<8|g[28],p=I[3]<<24|I[2]<<16|I[1]<<8|I[0],Y=I[7]<<24|I[6]<<16|I[5]<<8|I[4],F=I[11]<<24|I[10]<<16|I[9]<<8|I[8],s=I[15]<<24|I[14]<<16|I[13]<<8|I[12],M=B,N=i,k=o,w=Q,D=C,y=E,O=h,R=a,m=t,V=e,j=G,U=c,S=p,X=Y,u=F,Z=s,L=0;L<Dh;L+=2)M=M+D|0,S^=M,S=S>>>32-16|S<<16,m=m+S|0,D^=m,D=D>>>32-12|D<<12,N=N+y|0,X^=N,X=X>>>32-16|X<<16,V=V+X|0,y^=V,y=y>>>32-12|y<<12,k=k+O|0,u^=k,u=u>>>32-16|u<<16,j=j+u|0,O^=j,O=O>>>32-12|O<<12,w=w+R|0,Z^=w,Z=Z>>>32-16|Z<<16,U=U+Z|0,R^=U,R=R>>>32-12|R<<12,k=k+O|0,u^=k,u=u>>>32-8|u<<8,j=j+u|0,O^=j,O=O>>>32-7|O<<7,w=w+R|0,Z^=w,Z=Z>>>32-8|Z<<8,U=U+Z|0,R^=U,R=R>>>32-7|R<<7,N=N+y|0,X^=N,X=X>>>32-8|X<<8,V=V+X|0,y^=V,y=y>>>32-7|y<<7,M=M+D|0,S^=M,S=S>>>32-8|S<<8,m=m+S|0,D^=m,D=D>>>32-7|D<<7,M=M+y|0,Z^=M,Z=Z>>>32-16|Z<<16,j=j+Z|0,y^=j,y=y>>>32-12|y<<12,N=N+O|0,S^=N,S=S>>>32-16|S<<16,U=U+S|0,O^=U,O=O>>>32-12|O<<12,k=k+R|0,X^=k,X=X>>>32-16|X<<16,m=m+X|0,R^=m,R=R>>>32-12|R<<12,w=w+D|0,u^=w,u=u>>>32-16|u<<16,V=V+u|0,D^=V,D=D>>>32-12|D<<12,k=k+R|0,X^=k,X=X>>>32-8|X<<8,m=m+X|0,R^=m,R=R>>>32-7|R<<7,w=w+D|0,u^=w,u=u>>>32-8|u<<8,V=V+u|0,D^=V,D=D>>>32-7|D<<7,N=N+O|0,S^=N,S=S>>>32-8|S<<8,U=U+S|0,O^=U,O=O>>>32-7|O<<7,M=M+y|0,Z^=M,Z=Z>>>32-8|Z<<8,j=j+Z|0,y^=j,y=y>>>32-7|y<<7;cI.writeUint32LE(M+B|0,A,0),cI.writeUint32LE(N+i|0,A,4),cI.writeUint32LE(k+o|0,A,8),cI.writeUint32LE(w+Q|0,A,12),cI.writeUint32LE(D+C|0,A,16),cI.writeUint32LE(y+E|0,A,20),cI.writeUint32LE(O+h|0,A,24),cI.writeUint32LE(R+a|0,A,28),cI.writeUint32LE(m+t|0,A,32),cI.writeUint32LE(V+e|0,A,36),cI.writeUint32LE(j+G|0,A,40),cI.writeUint32LE(U+c|0,A,44),cI.writeUint32LE(S+p|0,A,48),cI.writeUint32LE(X+Y|0,A,52),cI.writeUint32LE(u+F|0,A,56),cI.writeUint32LE(Z+s|0,A,60)}function Jo(A,I,g,B,i){if(i===void 0&&(i=0),A.length!==32)throw new Error("ChaCha: key size must be 32 bytes");if(B.length<g.length)throw new Error("ChaCha: destination is shorter than source");var o,Q;if(i===0){if(I.length!==8&&I.length!==12)throw new Error("ChaCha nonce must be 8 or 12 bytes");o=new Uint8Array(16),Q=o.length-I.length,o.set(I,Q)}else{if(I.length!==16)throw new Error("ChaCha nonce with counter must be 16 bytes");o=I,Q=i}for(var C=new Uint8Array(64),E=0;E<g.length;E+=64){oh(C,o,A);for(var h=E;h<E+64&&h<g.length;h++)B[h]=g[h]^C[h-E];wh(o,0,Q)}return tC.wipe(C),i===0&&tC.wipe(o),B}FB.streamXOR=Jo;function ah(A,I,g,B){return B===void 0&&(B=0),tC.wipe(g),Jo(A,I,g,g,B)}FB.stream=ah;function wh(A,I,g){for(var B=1;g--;)B=B+(A[I]&255)|0,A[I]=B&255,B>>>=8,I++;if(B>0)throw new Error("ChaCha: counter overflow")}var po={},Gg={};Object.defineProperty(Gg,"__esModule",{value:!0});function Gh(A,I,g){return~(A-1)&I|A-1&g}Gg.select=Gh;function kh(A,I){return(A|0)-(I|0)-1>>>31&1}Gg.lessOrEqual=kh;function ro(A,I){if(A.length!==I.length)return 0;for(var g=0,B=0;B<A.length;B++)g|=A[B]^I[B];return 1&g-1>>>8}Gg.compare=ro;function Nh(A,I){return A.length===0||I.length===0?!1:ro(A,I)!==0}Gg.equal=Nh;(function(A){Object.defineProperty(A,"__esModule",{value:!0});var I=Gg,g=RI;A.DIGEST_LENGTH=16;var B=function(){function Q(C){this.digestLength=A.DIGEST_LENGTH,this._buffer=new Uint8Array(16),this._r=new Uint16Array(10),this._h=new Uint16Array(10),this._pad=new Uint16Array(8),this._leftover=0,this._fin=0,this._finished=!1;var E=C[0]|C[1]<<8;this._r[0]=E&8191;var h=C[2]|C[3]<<8;this._r[1]=(E>>>13|h<<3)&8191;var a=C[4]|C[5]<<8;this._r[2]=(h>>>10|a<<6)&7939;var t=C[6]|C[7]<<8;this._r[3]=(a>>>7|t<<9)&8191;var e=C[8]|C[9]<<8;this._r[4]=(t>>>4|e<<12)&255,this._r[5]=e>>>1&8190;var G=C[10]|C[11]<<8;this._r[6]=(e>>>14|G<<2)&8191;var c=C[12]|C[13]<<8;this._r[7]=(G>>>11|c<<5)&8065;var p=C[14]|C[15]<<8;this._r[8]=(c>>>8|p<<8)&8191,this._r[9]=p>>>5&127,this._pad[0]=C[16]|C[17]<<8,this._pad[1]=C[18]|C[19]<<8,this._pad[2]=C[20]|C[21]<<8,this._pad[3]=C[22]|C[23]<<8,this._pad[4]=C[24]|C[25]<<8,this._pad[5]=C[26]|C[27]<<8,this._pad[6]=C[28]|C[29]<<8,this._pad[7]=C[30]|C[31]<<8}return Q.prototype._blocks=function(C,E,h){for(var a=this._fin?0:2048,t=this._h[0],e=this._h[1],G=this._h[2],c=this._h[3],p=this._h[4],Y=this._h[5],F=this._h[6],s=this._h[7],M=this._h[8],N=this._h[9],k=this._r[0],w=this._r[1],D=this._r[2],y=this._r[3],O=this._r[4],R=this._r[5],m=this._r[6],V=this._r[7],j=this._r[8],U=this._r[9];h>=16;){var S=C[E+0]|C[E+1]<<8;t+=S&8191;var X=C[E+2]|C[E+3]<<8;e+=(S>>>13|X<<3)&8191;var u=C[E+4]|C[E+5]<<8;G+=(X>>>10|u<<6)&8191;var Z=C[E+6]|C[E+7]<<8;c+=(u>>>7|Z<<9)&8191;var L=C[E+8]|C[E+9]<<8;p+=(Z>>>4|L<<12)&8191,Y+=L>>>1&8191;var _=C[E+10]|C[E+11]<<8;F+=(L>>>14|_<<2)&8191;var f=C[E+12]|C[E+13]<<8;s+=(_>>>11|f<<5)&8191;var W=C[E+14]|C[E+15]<<8;M+=(f>>>8|W<<8)&8191,N+=W>>>5|a;var QA=0,cA=QA;cA+=t*k,cA+=e*(5*U),cA+=G*(5*j),cA+=c*(5*V),cA+=p*(5*m),QA=cA>>>13,cA&=8191,cA+=Y*(5*R),cA+=F*(5*O),cA+=s*(5*y),cA+=M*(5*D),cA+=N*(5*w),QA+=cA>>>13,cA&=8191;var aA=QA;aA+=t*w,aA+=e*k,aA+=G*(5*U),aA+=c*(5*j),aA+=p*(5*V),QA=aA>>>13,aA&=8191,aA+=Y*(5*m),aA+=F*(5*R),aA+=s*(5*O),aA+=M*(5*y),aA+=N*(5*D),QA+=aA>>>13,aA&=8191;var tA=QA;tA+=t*D,tA+=e*w,tA+=G*k,tA+=c*(5*U),tA+=p*(5*j),QA=tA>>>13,tA&=8191,tA+=Y*(5*V),tA+=F*(5*m),tA+=s*(5*R),tA+=M*(5*O),tA+=N*(5*y),QA+=tA>>>13,tA&=8191;var DA=QA;DA+=t*y,DA+=e*D,DA+=G*w,DA+=c*k,DA+=p*(5*U),QA=DA>>>13,DA&=8191,DA+=Y*(5*j),DA+=F*(5*V),DA+=s*(5*m),DA+=M*(5*R),DA+=N*(5*O),QA+=DA>>>13,DA&=8191;var EA=QA;EA+=t*O,EA+=e*y,EA+=G*D,EA+=c*w,EA+=p*k,QA=EA>>>13,EA&=8191,EA+=Y*(5*U),EA+=F*(5*j),EA+=s*(5*V),EA+=M*(5*m),EA+=N*(5*R),QA+=EA>>>13,EA&=8191;var CA=QA;CA+=t*R,CA+=e*O,CA+=G*y,CA+=c*D,CA+=p*w,QA=CA>>>13,CA&=8191,CA+=Y*k,CA+=F*(5*U),CA+=s*(5*j),CA+=M*(5*V),CA+=N*(5*m),QA+=CA>>>13,CA&=8191;var K=QA;K+=t*m,K+=e*R,K+=G*O,K+=c*y,K+=p*D,QA=K>>>13,K&=8191,K+=Y*w,K+=F*k,K+=s*(5*U),K+=M*(5*j),K+=N*(5*V),QA+=K>>>13,K&=8191;var b=QA;b+=t*V,b+=e*m,b+=G*R,b+=c*O,b+=p*y,QA=b>>>13,b&=8191,b+=Y*D,b+=F*w,b+=s*k,b+=M*(5*U),b+=N*(5*j),QA+=b>>>13,b&=8191;var P=QA;P+=t*j,P+=e*V,P+=G*m,P+=c*R,P+=p*O,QA=P>>>13,P&=8191,P+=Y*y,P+=F*D,P+=s*w,P+=M*k,P+=N*(5*U),QA+=P>>>13,P&=8191;var kA=QA;kA+=t*U,kA+=e*j,kA+=G*V,kA+=c*m,kA+=p*R,QA=kA>>>13,kA&=8191,kA+=Y*O,kA+=F*y,kA+=s*D,kA+=M*w,kA+=N*k,QA+=kA>>>13,kA&=8191,QA=(QA<<2)+QA|0,QA=QA+cA|0,cA=QA&8191,QA=QA>>>13,aA+=QA,t=cA,e=aA,G=tA,c=DA,p=EA,Y=CA,F=K,s=b,M=P,N=kA,E+=16,h-=16}this._h[0]=t,this._h[1]=e,this._h[2]=G,this._h[3]=c,this._h[4]=p,this._h[5]=Y,this._h[6]=F,this._h[7]=s,this._h[8]=M,this._h[9]=N},Q.prototype.finish=function(C,E){E===void 0&&(E=0);var h=new Uint16Array(10),a,t,e,G;if(this._leftover){for(G=this._leftover,this._buffer[G++]=1;G<16;G++)this._buffer[G]=0;this._fin=1,this._blocks(this._buffer,0,16)}for(a=this._h[1]>>>13,this._h[1]&=8191,G=2;G<10;G++)this._h[G]+=a,a=this._h[G]>>>13,this._h[G]&=8191;for(this._h[0]+=a*5,a=this._h[0]>>>13,this._h[0]&=8191,this._h[1]+=a,a=this._h[1]>>>13,this._h[1]&=8191,this._h[2]+=a,h[0]=this._h[0]+5,a=h[0]>>>13,h[0]&=8191,G=1;G<10;G++)h[G]=this._h[G]+a,a=h[G]>>>13,h[G]&=8191;for(h[9]-=1<<13,t=(a^1)-1,G=0;G<10;G++)h[G]&=t;for(t=~t,G=0;G<10;G++)this._h[G]=this._h[G]&t|h[G];for(this._h[0]=(this._h[0]|this._h[1]<<13)&65535,this._h[1]=(this._h[1]>>>3|this._h[2]<<10)&65535,this._h[2]=(this._h[2]>>>6|this._h[3]<<7)&65535,this._h[3]=(this._h[3]>>>9|this._h[4]<<4)&65535,this._h[4]=(this._h[4]>>>12|this._h[5]<<1|this._h[6]<<14)&65535,this._h[5]=(this._h[6]>>>2|this._h[7]<<11)&65535,this._h[6]=(this._h[7]>>>5|this._h[8]<<8)&65535,this._h[7]=(this._h[8]>>>8|this._h[9]<<5)&65535,e=this._h[0]+this._pad[0],this._h[0]=e&65535,G=1;G<8;G++)e=(this._h[G]+this._pad[G]|0)+(e>>>16)|0,this._h[G]=e&65535;return C[E+0]=this._h[0]>>>0,C[E+1]=this._h[0]>>>8,C[E+2]=this._h[1]>>>0,C[E+3]=this._h[1]>>>8,C[E+4]=this._h[2]>>>0,C[E+5]=this._h[2]>>>8,C[E+6]=this._h[3]>>>0,C[E+7]=this._h[3]>>>8,C[E+8]=this._h[4]>>>0,C[E+9]=this._h[4]>>>8,C[E+10]=this._h[5]>>>0,C[E+11]=this._h[5]>>>8,C[E+12]=this._h[6]>>>0,C[E+13]=this._h[6]>>>8,C[E+14]=this._h[7]>>>0,C[E+15]=this._h[7]>>>8,this._finished=!0,this},Q.prototype.update=function(C){var E=0,h=C.length,a;if(this._leftover){a=16-this._leftover,a>h&&(a=h);for(var t=0;t<a;t++)this._buffer[this._leftover+t]=C[E+t];if(h-=a,E+=a,this._leftover+=a,this._leftover<16)return this;this._blocks(this._buffer,0,16),this._leftover=0}if(h>=16&&(a=h-h%16,this._blocks(C,E,a),E+=a,h-=a),h){for(var t=0;t<h;t++)this._buffer[this._leftover+t]=C[E+t];this._leftover+=h}return this},Q.prototype.digest=function(){if(this._finished)throw new Error("Poly1305 was finished");var C=new Uint8Array(16);return this.finish(C),C},Q.prototype.clean=function(){return g.wipe(this._buffer),g.wipe(this._r),g.wipe(this._h),g.wipe(this._pad),this._leftover=0,this._fin=0,this._finished=!0,this},Q}();A.Poly1305=B;function i(Q,C){var E=new B(Q);E.update(C);var h=E.digest();return E.clean(),h}A.oneTimeAuth=i;function o(Q,C){return Q.length!==A.DIGEST_LENGTH||C.length!==A.DIGEST_LENGTH?!1:I.equal(Q,C)}A.equal=o})(po);(function(A){Object.defineProperty(A,"__esModule",{value:!0});var I=FB,g=po,B=RI,i=HA,o=Gg;A.KEY_LENGTH=32,A.NONCE_LENGTH=12,A.TAG_LENGTH=16;var Q=new Uint8Array(16),C=function(){function E(h){if(this.nonceLength=A.NONCE_LENGTH,this.tagLength=A.TAG_LENGTH,h.length!==A.KEY_LENGTH)throw new Error("ChaCha20Poly1305 needs 32-byte key");this._key=new Uint8Array(h)}return E.prototype.seal=function(h,a,t,e){if(h.length>16)throw new Error("ChaCha20Poly1305: incorrect nonce length");var G=new Uint8Array(16);G.set(h,G.length-h.length);var c=new Uint8Array(32);I.stream(this._key,G,c,4);var p=a.length+this.tagLength,Y;if(e){if(e.length!==p)throw new Error("ChaCha20Poly1305: incorrect destination length");Y=e}else Y=new Uint8Array(p);return I.streamXOR(this._key,G,a,Y,4),this._authenticate(Y.subarray(Y.length-this.tagLength,Y.length),c,Y.subarray(0,Y.length-this.tagLength),t),B.wipe(G),Y},E.prototype.open=function(h,a,t,e){if(h.length>16)throw new Error("ChaCha20Poly1305: incorrect nonce length");if(a.length<this.tagLength)return null;var G=new Uint8Array(16);G.set(h,G.length-h.length);var c=new Uint8Array(32);I.stream(this._key,G,c,4);var p=new Uint8Array(this.tagLength);if(this._authenticate(p,c,a.subarray(0,a.length-this.tagLength),t),!o.equal(p,a.subarray(a.length-this.tagLength,a.length)))return null;var Y=a.length-this.tagLength,F;if(e){if(e.length!==Y)throw new Error("ChaCha20Poly1305: incorrect destination length");F=e}else F=new Uint8Array(Y);return I.streamXOR(this._key,G,a.subarray(0,a.length-this.tagLength),F,4),B.wipe(G),F},E.prototype.clean=function(){return B.wipe(this._key),this},E.prototype._authenticate=function(h,a,t,e){var G=new g.Poly1305(a);e&&(G.update(e),e.length%16>0&&G.update(Q.subarray(e.length%16))),G.update(t),t.length%16>0&&G.update(Q.subarray(t.length%16));var c=new Uint8Array(8);e&&i.writeUint64LE(e.length,c),G.update(c),i.writeUint64LE(t.length,c),G.update(c);for(var p=G.digest(),Y=0;Y<p.length;Y++)h[Y]=p[Y];G.clean(),B.wipe(p),B.wipe(c)},E}();A.ChaCha20Poly1305=C})(uC);var Uo={},YQ={},WC={};Object.defineProperty(WC,"__esModule",{value:!0});function ch(A){return typeof A.saveState<"u"&&typeof A.restoreState<"u"&&typeof A.cleanSavedState<"u"}WC.isSerializableHash=ch;Object.defineProperty(YQ,"__esModule",{value:!0});var LI=WC,hh=Gg,th=RI,Ro=function(){function A(I,g){this._finished=!1,this._inner=new I,this._outer=new I,this.blockSize=this._outer.blockSize,this.digestLength=this._outer.digestLength;var B=new Uint8Array(this.blockSize);g.length>this.blockSize?this._inner.update(g).finish(B).clean():B.set(g);for(var i=0;i<B.length;i++)B[i]^=54;this._inner.update(B);for(var i=0;i<B.length;i++)B[i]^=106;this._outer.update(B),LI.isSerializableHash(this._inner)&&LI.isSerializableHash(this._outer)&&(this._innerKeyedState=this._inner.saveState(),this._outerKeyedState=this._outer.saveState()),th.wipe(B)}return A.prototype.reset=function(){if(!LI.isSerializableHash(this._inner)||!LI.isSerializableHash(this._outer))throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");return this._inner.restoreState(this._innerKeyedState),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},A.prototype.clean=function(){LI.isSerializableHash(this._inner)&&this._inner.cleanSavedState(this._innerKeyedState),LI.isSerializableHash(this._outer)&&this._outer.cleanSavedState(this._outerKeyedState),this._inner.clean(),this._outer.clean()},A.prototype.update=function(I){return this._inner.update(I),this},A.prototype.finish=function(I){return this._finished?(this._outer.finish(I),this):(this._inner.finish(I),this._outer.update(I.subarray(0,this.digestLength)).finish(I),this._finished=!0,this)},A.prototype.digest=function(){var I=new Uint8Array(this.digestLength);return this.finish(I),I},A.prototype.saveState=function(){if(!LI.isSerializableHash(this._inner))throw new Error("hmac: can't saveState() because hash doesn't implement it");return this._inner.saveState()},A.prototype.restoreState=function(I){if(!LI.isSerializableHash(this._inner)||!LI.isSerializableHash(this._outer))throw new Error("hmac: can't restoreState() because hash doesn't implement it");return this._inner.restoreState(I),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},A.prototype.cleanSavedState=function(I){if(!LI.isSerializableHash(this._inner))throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");this._inner.cleanSavedState(I)},A}();YQ.HMAC=Ro;function eh(A,I,g){var B=new Ro(A,I);B.update(g);var i=B.digest();return B.clean(),i}YQ.hmac=eh;YQ.equal=hh.equal;Object.defineProperty(Uo,"__esModule",{value:!0});var si=YQ,ni=RI,Mh=function(){function A(I,g,B,i){B===void 0&&(B=new Uint8Array(0)),this._counter=new Uint8Array(1),this._hash=I,this._info=i;var o=si.hmac(this._hash,B,g);this._hmac=new si.HMAC(I,o),this._buffer=new Uint8Array(this._hmac.digestLength),this._bufpos=this._buffer.length}return A.prototype._fillBuffer=function(){this._counter[0]++;var I=this._counter[0];if(I===0)throw new Error("hkdf: cannot expand more");this._hmac.reset(),I>1&&this._hmac.update(this._buffer),this._info&&this._hmac.update(this._info),this._hmac.update(this._counter),this._hmac.finish(this._buffer),this._bufpos=0},A.prototype.expand=function(I){for(var g=new Uint8Array(I),B=0;B<g.length;B++)this._bufpos===this._buffer.length&&this._fillBuffer(),g[B]=this._buffer[this._bufpos++];return g},A.prototype.clean=function(){this._hmac.clean(),ni.wipe(this._buffer),ni.wipe(this._counter),this._bufpos=0},A}(),sh=Uo.HKDF=Mh,yB={};(function(A){Object.defineProperty(A,"__esModule",{value:!0});var I=HA,g=RI;A.DIGEST_LENGTH=32,A.BLOCK_SIZE=64;var B=function(){function C(){this.digestLength=A.DIGEST_LENGTH,this.blockSize=A.BLOCK_SIZE,this._state=new Int32Array(8),this._temp=new Int32Array(64),this._buffer=new Uint8Array(128),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this.reset()}return C.prototype._initState=function(){this._state[0]=1779033703,this._state[1]=3144134277,this._state[2]=1013904242,this._state[3]=2773480762,this._state[4]=1359893119,this._state[5]=2600822924,this._state[6]=528734635,this._state[7]=1541459225},C.prototype.reset=function(){return this._initState(),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this},C.prototype.clean=function(){g.wipe(this._buffer),g.wipe(this._temp),this.reset()},C.prototype.update=function(E,h){if(h===void 0&&(h=E.length),this._finished)throw new Error("SHA256: can't update because hash was finished.");var a=0;if(this._bytesHashed+=h,this._bufferLength>0){for(;this._bufferLength<this.blockSize&&h>0;)this._buffer[this._bufferLength++]=E[a++],h--;this._bufferLength===this.blockSize&&(o(this._temp,this._state,this._buffer,0,this.blockSize),this._bufferLength=0)}for(h>=this.blockSize&&(a=o(this._temp,this._state,E,a,h),h%=this.blockSize);h>0;)this._buffer[this._bufferLength++]=E[a++],h--;return this},C.prototype.finish=function(E){if(!this._finished){var h=this._bytesHashed,a=this._bufferLength,t=h/536870912|0,e=h<<3,G=h%64<56?64:128;this._buffer[a]=128;for(var c=a+1;c<G-8;c++)this._buffer[c]=0;I.writeUint32BE(t,this._buffer,G-8),I.writeUint32BE(e,this._buffer,G-4),o(this._temp,this._state,this._buffer,0,G),this._finished=!0}for(var c=0;c<this.digestLength/4;c++)I.writeUint32BE(this._state[c],E,c*4);return this},C.prototype.digest=function(){var E=new Uint8Array(this.digestLength);return this.finish(E),E},C.prototype.saveState=function(){if(this._finished)throw new Error("SHA256: cannot save finished state");return{state:new Int32Array(this._state),buffer:this._bufferLength>0?new Uint8Array(this._buffer):void 0,bufferLength:this._bufferLength,bytesHashed:this._bytesHashed}},C.prototype.restoreState=function(E){return this._state.set(E.state),this._bufferLength=E.bufferLength,E.buffer&&this._buffer.set(E.buffer),this._bytesHashed=E.bytesHashed,this._finished=!1,this},C.prototype.cleanSavedState=function(E){g.wipe(E.state),E.buffer&&g.wipe(E.buffer),E.bufferLength=0,E.bytesHashed=0},C}();A.SHA256=B;var i=new Int32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function o(C,E,h,a,t){for(;t>=64;){for(var e=E[0],G=E[1],c=E[2],p=E[3],Y=E[4],F=E[5],s=E[6],M=E[7],N=0;N<16;N++){var k=a+N*4;C[N]=I.readUint32BE(h,k)}for(var N=16;N<64;N++){var w=C[N-2],D=(w>>>17|w<<32-17)^(w>>>19|w<<32-19)^w>>>10;w=C[N-15];var y=(w>>>7|w<<32-7)^(w>>>18|w<<32-18)^w>>>3;C[N]=(D+C[N-7]|0)+(y+C[N-16]|0)}for(var N=0;N<64;N++){var D=(((Y>>>6|Y<<26)^(Y>>>11|Y<<21)^(Y>>>25|Y<<7))+(Y&F^~Y&s)|0)+(M+(i[N]+C[N]|0)|0)|0,y=((e>>>2|e<<32-2)^(e>>>13|e<<32-13)^(e>>>22|e<<32-22))+(e&G^e&c^G&c)|0;M=s,s=F,F=Y,Y=p+D|0,p=c,c=G,G=e,e=D+y|0}E[0]+=e,E[1]+=G,E[2]+=c,E[3]+=p,E[4]+=Y,E[5]+=F,E[6]+=s,E[7]+=M,a+=64,t-=64}return a}function Q(C){var E=new B;E.update(C);var h=E.digest();return E.clean(),h}A.hash=Q})(yB);var VC={};(function(A){Object.defineProperty(A,"__esModule",{value:!0}),A.sharedKey=A.generateKeyPair=A.generateKeyPairFromSeed=A.scalarMultBase=A.scalarMult=A.SHARED_KEY_LENGTH=A.SECRET_KEY_LENGTH=A.PUBLIC_KEY_LENGTH=void 0;const I=xg,g=RI;A.PUBLIC_KEY_LENGTH=32,A.SECRET_KEY_LENGTH=32,A.SHARED_KEY_LENGTH=32;function B(N){const k=new Float64Array(16);if(N)for(let w=0;w<N.length;w++)k[w]=N[w];return k}const i=new Uint8Array(32);i[0]=9;const o=B([56129,1]);function Q(N){let k=1;for(let w=0;w<16;w++){let D=N[w]+k+65535;k=Math.floor(D/65536),N[w]=D-k*65536}N[0]+=k-1+37*(k-1)}function C(N,k,w){const D=~(w-1);for(let y=0;y<16;y++){const O=D&(N[y]^k[y]);N[y]^=O,k[y]^=O}}function E(N,k){const w=B(),D=B();for(let y=0;y<16;y++)D[y]=k[y];Q(D),Q(D),Q(D);for(let y=0;y<2;y++){w[0]=D[0]-65517;for(let R=1;R<15;R++)w[R]=D[R]-65535-(w[R-1]>>16&1),w[R-1]&=65535;w[15]=D[15]-32767-(w[14]>>16&1);const O=w[15]>>16&1;w[14]&=65535,C(D,w,1-O)}for(let y=0;y<16;y++)N[2*y]=D[y]&255,N[2*y+1]=D[y]>>8}function h(N,k){for(let w=0;w<16;w++)N[w]=k[2*w]+(k[2*w+1]<<8);N[15]&=32767}function a(N,k,w){for(let D=0;D<16;D++)N[D]=k[D]+w[D]}function t(N,k,w){for(let D=0;D<16;D++)N[D]=k[D]-w[D]}function e(N,k,w){let D,y,O=0,R=0,m=0,V=0,j=0,U=0,S=0,X=0,u=0,Z=0,L=0,_=0,f=0,W=0,QA=0,cA=0,aA=0,tA=0,DA=0,EA=0,CA=0,K=0,b=0,P=0,kA=0,eA=0,FA=0,v=0,l=0,d=0,x=0,oA=w[0],hA=w[1],AA=w[2],n=w[3],r=w[4],J=w[5],q=w[6],H=w[7],T=w[8],z=w[9],$=w[10],BA=w[11],gA=w[12],iA=w[13],wA=w[14],GA=w[15];D=k[0],O+=D*oA,R+=D*hA,m+=D*AA,V+=D*n,j+=D*r,U+=D*J,S+=D*q,X+=D*H,u+=D*T,Z+=D*z,L+=D*$,_+=D*BA,f+=D*gA,W+=D*iA,QA+=D*wA,cA+=D*GA,D=k[1],R+=D*oA,m+=D*hA,V+=D*AA,j+=D*n,U+=D*r,S+=D*J,X+=D*q,u+=D*H,Z+=D*T,L+=D*z,_+=D*$,f+=D*BA,W+=D*gA,QA+=D*iA,cA+=D*wA,aA+=D*GA,D=k[2],m+=D*oA,V+=D*hA,j+=D*AA,U+=D*n,S+=D*r,X+=D*J,u+=D*q,Z+=D*H,L+=D*T,_+=D*z,f+=D*$,W+=D*BA,QA+=D*gA,cA+=D*iA,aA+=D*wA,tA+=D*GA,D=k[3],V+=D*oA,j+=D*hA,U+=D*AA,S+=D*n,X+=D*r,u+=D*J,Z+=D*q,L+=D*H,_+=D*T,f+=D*z,W+=D*$,QA+=D*BA,cA+=D*gA,aA+=D*iA,tA+=D*wA,DA+=D*GA,D=k[4],j+=D*oA,U+=D*hA,S+=D*AA,X+=D*n,u+=D*r,Z+=D*J,L+=D*q,_+=D*H,f+=D*T,W+=D*z,QA+=D*$,cA+=D*BA,aA+=D*gA,tA+=D*iA,DA+=D*wA,EA+=D*GA,D=k[5],U+=D*oA,S+=D*hA,X+=D*AA,u+=D*n,Z+=D*r,L+=D*J,_+=D*q,f+=D*H,W+=D*T,QA+=D*z,cA+=D*$,aA+=D*BA,tA+=D*gA,DA+=D*iA,EA+=D*wA,CA+=D*GA,D=k[6],S+=D*oA,X+=D*hA,u+=D*AA,Z+=D*n,L+=D*r,_+=D*J,f+=D*q,W+=D*H,QA+=D*T,cA+=D*z,aA+=D*$,tA+=D*BA,DA+=D*gA,EA+=D*iA,CA+=D*wA,K+=D*GA,D=k[7],X+=D*oA,u+=D*hA,Z+=D*AA,L+=D*n,_+=D*r,f+=D*J,W+=D*q,QA+=D*H,cA+=D*T,aA+=D*z,tA+=D*$,DA+=D*BA,EA+=D*gA,CA+=D*iA,K+=D*wA,b+=D*GA,D=k[8],u+=D*oA,Z+=D*hA,L+=D*AA,_+=D*n,f+=D*r,W+=D*J,QA+=D*q,cA+=D*H,aA+=D*T,tA+=D*z,DA+=D*$,EA+=D*BA,CA+=D*gA,K+=D*iA,b+=D*wA,P+=D*GA,D=k[9],Z+=D*oA,L+=D*hA,_+=D*AA,f+=D*n,W+=D*r,QA+=D*J,cA+=D*q,aA+=D*H,tA+=D*T,DA+=D*z,EA+=D*$,CA+=D*BA,K+=D*gA,b+=D*iA,P+=D*wA,kA+=D*GA,D=k[10],L+=D*oA,_+=D*hA,f+=D*AA,W+=D*n,QA+=D*r,cA+=D*J,aA+=D*q,tA+=D*H,DA+=D*T,EA+=D*z,CA+=D*$,K+=D*BA,b+=D*gA,P+=D*iA,kA+=D*wA,eA+=D*GA,D=k[11],_+=D*oA,f+=D*hA,W+=D*AA,QA+=D*n,cA+=D*r,aA+=D*J,tA+=D*q,DA+=D*H,EA+=D*T,CA+=D*z,K+=D*$,b+=D*BA,P+=D*gA,kA+=D*iA,eA+=D*wA,FA+=D*GA,D=k[12],f+=D*oA,W+=D*hA,QA+=D*AA,cA+=D*n,aA+=D*r,tA+=D*J,DA+=D*q,EA+=D*H,CA+=D*T,K+=D*z,b+=D*$,P+=D*BA,kA+=D*gA,eA+=D*iA,FA+=D*wA,v+=D*GA,D=k[13],W+=D*oA,QA+=D*hA,cA+=D*AA,aA+=D*n,tA+=D*r,DA+=D*J,EA+=D*q,CA+=D*H,K+=D*T,b+=D*z,P+=D*$,kA+=D*BA,eA+=D*gA,FA+=D*iA,v+=D*wA,l+=D*GA,D=k[14],QA+=D*oA,cA+=D*hA,aA+=D*AA,tA+=D*n,DA+=D*r,EA+=D*J,CA+=D*q,K+=D*H,b+=D*T,P+=D*z,kA+=D*$,eA+=D*BA,FA+=D*gA,v+=D*iA,l+=D*wA,d+=D*GA,D=k[15],cA+=D*oA,aA+=D*hA,tA+=D*AA,DA+=D*n,EA+=D*r,CA+=D*J,K+=D*q,b+=D*H,P+=D*T,kA+=D*z,eA+=D*$,FA+=D*BA,v+=D*gA,l+=D*iA,d+=D*wA,x+=D*GA,O+=38*aA,R+=38*tA,m+=38*DA,V+=38*EA,j+=38*CA,U+=38*K,S+=38*b,X+=38*P,u+=38*kA,Z+=38*eA,L+=38*FA,_+=38*v,f+=38*l,W+=38*d,QA+=38*x,y=1,D=O+y+65535,y=Math.floor(D/65536),O=D-y*65536,D=R+y+65535,y=Math.floor(D/65536),R=D-y*65536,D=m+y+65535,y=Math.floor(D/65536),m=D-y*65536,D=V+y+65535,y=Math.floor(D/65536),V=D-y*65536,D=j+y+65535,y=Math.floor(D/65536),j=D-y*65536,D=U+y+65535,y=Math.floor(D/65536),U=D-y*65536,D=S+y+65535,y=Math.floor(D/65536),S=D-y*65536,D=X+y+65535,y=Math.floor(D/65536),X=D-y*65536,D=u+y+65535,y=Math.floor(D/65536),u=D-y*65536,D=Z+y+65535,y=Math.floor(D/65536),Z=D-y*65536,D=L+y+65535,y=Math.floor(D/65536),L=D-y*65536,D=_+y+65535,y=Math.floor(D/65536),_=D-y*65536,D=f+y+65535,y=Math.floor(D/65536),f=D-y*65536,D=W+y+65535,y=Math.floor(D/65536),W=D-y*65536,D=QA+y+65535,y=Math.floor(D/65536),QA=D-y*65536,D=cA+y+65535,y=Math.floor(D/65536),cA=D-y*65536,O+=y-1+37*(y-1),y=1,D=O+y+65535,y=Math.floor(D/65536),O=D-y*65536,D=R+y+65535,y=Math.floor(D/65536),R=D-y*65536,D=m+y+65535,y=Math.floor(D/65536),m=D-y*65536,D=V+y+65535,y=Math.floor(D/65536),V=D-y*65536,D=j+y+65535,y=Math.floor(D/65536),j=D-y*65536,D=U+y+65535,y=Math.floor(D/65536),U=D-y*65536,D=S+y+65535,y=Math.floor(D/65536),S=D-y*65536,D=X+y+65535,y=Math.floor(D/65536),X=D-y*65536,D=u+y+65535,y=Math.floor(D/65536),u=D-y*65536,D=Z+y+65535,y=Math.floor(D/65536),Z=D-y*65536,D=L+y+65535,y=Math.floor(D/65536),L=D-y*65536,D=_+y+65535,y=Math.floor(D/65536),_=D-y*65536,D=f+y+65535,y=Math.floor(D/65536),f=D-y*65536,D=W+y+65535,y=Math.floor(D/65536),W=D-y*65536,D=QA+y+65535,y=Math.floor(D/65536),QA=D-y*65536,D=cA+y+65535,y=Math.floor(D/65536),cA=D-y*65536,O+=y-1+37*(y-1),N[0]=O,N[1]=R,N[2]=m,N[3]=V,N[4]=j,N[5]=U,N[6]=S,N[7]=X,N[8]=u,N[9]=Z,N[10]=L,N[11]=_,N[12]=f,N[13]=W,N[14]=QA,N[15]=cA}function G(N,k){e(N,k,k)}function c(N,k){const w=B();for(let D=0;D<16;D++)w[D]=k[D];for(let D=253;D>=0;D--)G(w,w),D!==2&&D!==4&&e(w,w,k);for(let D=0;D<16;D++)N[D]=w[D]}function p(N,k){const w=new Uint8Array(32),D=new Float64Array(80),y=B(),O=B(),R=B(),m=B(),V=B(),j=B();for(let u=0;u<31;u++)w[u]=N[u];w[31]=N[31]&127|64,w[0]&=248,h(D,k);for(let u=0;u<16;u++)O[u]=D[u];y[0]=m[0]=1;for(let u=254;u>=0;--u){const Z=w[u>>>3]>>>(u&7)&1;C(y,O,Z),C(R,m,Z),a(V,y,R),t(y,y,R),a(R,O,m),t(O,O,m),G(m,V),G(j,y),e(y,R,y),e(R,O,V),a(V,y,R),t(y,y,R),G(O,y),t(R,m,j),e(y,R,o),a(y,y,m),e(R,R,y),e(y,m,j),e(m,O,D),G(O,V),C(y,O,Z),C(R,m,Z)}for(let u=0;u<16;u++)D[u+16]=y[u],D[u+32]=R[u],D[u+48]=O[u],D[u+64]=m[u];const U=D.subarray(32),S=D.subarray(16);c(U,U),e(S,S,U);const X=new Uint8Array(32);return E(X,S),X}A.scalarMult=p;function Y(N){return p(N,i)}A.scalarMultBase=Y;function F(N){if(N.length!==A.SECRET_KEY_LENGTH)throw new Error(`x25519: seed must be ${A.SECRET_KEY_LENGTH} bytes`);const k=new Uint8Array(N);return{publicKey:Y(k),secretKey:k}}A.generateKeyPairFromSeed=F;function s(N){const k=(0,I.randomBytes)(32,N),w=F(k);return(0,g.wipe)(k),w}A.generateKeyPair=s;function M(N,k,w=!1){if(N.length!==A.PUBLIC_KEY_LENGTH)throw new Error("X25519: incorrect secret key length");if(k.length!==A.PUBLIC_KEY_LENGTH)throw new Error("X25519: incorrect public key length");const D=p(N,k);if(w){let y=0;for(let O=0;O<D.length;O++)y|=D[O];if(y===0)throw new Error("X25519: invalid shared key")}return D}A.sharedKey=M})(VC);var Fi=globalThis&&globalThis.__spreadArray||function(A,I,g){if(g||arguments.length===2)for(var B=0,i=I.length,o;B<i;B++)(o||!(B in I))&&(o||(o=Array.prototype.slice.call(I,0,B)),o[B]=I[B]);return A.concat(o||Array.prototype.slice.call(I))},nh=function(){function A(I,g,B){this.name=I,this.version=g,this.os=B,this.type="browser"}return A}(),Fh=function(){function A(I){this.version=I,this.type="node",this.name="node",this.os=process.platform}return A}(),yh=function(){function A(I,g,B,i){this.name=I,this.version=g,this.os=B,this.bot=i,this.type="bot-device"}return A}(),Yh=function(){function A(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null}return A}(),Jh=function(){function A(){this.type="react-native",this.name="react-native",this.version=null,this.os=null}return A}(),ph=/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,rh=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,yi=3,Uh=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",ph]],Yi=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function Rh(A){return A?Ji(A):typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"?new Jh:typeof navigator<"u"?Ji(navigator.userAgent):Kh()}function qh(A){return A!==""&&Uh.reduce(function(I,g){var B=g[0],i=g[1];if(I)return I;var o=i.exec(A);return!!o&&[B,o]},!1)}function Ji(A){var I=qh(A);if(!I)return null;var g=I[0],B=I[1];if(g==="searchbot")return new Yh;var i=B[1]&&B[1].split(".").join("_").split("_").slice(0,3);i?i.length<yi&&(i=Fi(Fi([],i,!0),Sh(yi-i.length),!0)):i=[];var o=i.join("."),Q=lh(A),C=rh.exec(A);return C&&C[1]?new yh(g,o,Q,C[1]):new nh(g,o,Q)}function lh(A){for(var I=0,g=Yi.length;I<g;I++){var B=Yi[I],i=B[0],o=B[1],Q=o.exec(A);if(Q)return i}return null}function Kh(){var A=typeof process<"u"&&process.version;return A?new Fh(process.version.slice(1)):null}function Sh(A){for(var I=[],g=0;g<A;g++)I.push("0");return I}var vA={};Object.defineProperty(vA,"__esModule",{value:!0});vA.getLocalStorage=vA.getLocalStorageOrThrow=vA.getCrypto=vA.getCryptoOrThrow=lo=vA.getLocation=vA.getLocationOrThrow=TC=vA.getNavigator=vA.getNavigatorOrThrow=qo=vA.getDocument=vA.getDocumentOrThrow=vA.getFromWindowOrThrow=vA.getFromWindow=void 0;function Jg(A){let I;return typeof window<"u"&&typeof window[A]<"u"&&(I=window[A]),I}vA.getFromWindow=Jg;function Xg(A){const I=Jg(A);if(!I)throw new Error(`${A} is not defined in Window`);return I}vA.getFromWindowOrThrow=Xg;function Hh(){return Xg("document")}vA.getDocumentOrThrow=Hh;function dh(){return Jg("document")}var qo=vA.getDocument=dh;function Oh(){return Xg("navigator")}vA.getNavigatorOrThrow=Oh;function mh(){return Jg("navigator")}var TC=vA.getNavigator=mh;function Zh(){return Xg("location")}vA.getLocationOrThrow=Zh;function Lh(){return Jg("location")}var lo=vA.getLocation=Lh;function fh(){return Xg("crypto")}vA.getCryptoOrThrow=fh;function jh(){return Jg("crypto")}vA.getCrypto=jh;function bh(){return Xg("localStorage")}vA.getLocalStorageOrThrow=bh;function uh(){return Jg("localStorage")}vA.getLocalStorage=uh;var xC={};Object.defineProperty(xC,"__esModule",{value:!0});var Ko=xC.getWindowMetadata=void 0;const pi=vA;function Wh(){let A,I;try{A=pi.getDocumentOrThrow(),I=pi.getLocationOrThrow()}catch{return null}function g(){const t=A.getElementsByTagName("link"),e=[];for(let G=0;G<t.length;G++){const c=t[G],p=c.getAttribute("rel");if(p&&p.toLowerCase().indexOf("icon")>-1){const Y=c.getAttribute("href");if(Y)if(Y.toLowerCase().indexOf("https:")===-1&&Y.toLowerCase().indexOf("http:")===-1&&Y.indexOf("//")!==0){let F=I.protocol+"//"+I.host;if(Y.indexOf("/")===0)F+=Y;else{const s=I.pathname.split("/");s.pop();const M=s.join("/");F+=M+"/"+Y}e.push(F)}else if(Y.indexOf("//")===0){const F=I.protocol+Y;e.push(F)}else e.push(Y)}}return e}function B(...t){const e=A.getElementsByTagName("meta");for(let G=0;G<e.length;G++){const c=e[G],p=["itemprop","property","name"].map(Y=>c.getAttribute(Y)).filter(Y=>Y?t.includes(Y):!1);if(p.length&&p){const Y=c.getAttribute("content");if(Y)return Y}}return""}function i(){let t=B("name","og:site_name","og:title","twitter:title");return t||(t=A.title),t}function o(){return B("description","og:description","twitter:description","keywords")}const Q=i(),C=o(),E=I.origin,h=g();return{description:C,url:E,icons:h,name:Q}}Ko=xC.getWindowMetadata=Wh;var cQ={},Vh=A=>encodeURIComponent(A).replace(/[!'()*]/g,I=>`%${I.charCodeAt(0).toString(16).toUpperCase()}`),So="%[a-f0-9]{2}",ri=new RegExp("("+So+")|([^%]+?)","gi"),Ui=new RegExp("("+So+")+","gi");function eC(A,I){try{return[decodeURIComponent(A.join(""))]}catch{}if(A.length===1)return A;I=I||1;var g=A.slice(0,I),B=A.slice(I);return Array.prototype.concat.call([],eC(g),eC(B))}function Th(A){try{return decodeURIComponent(A)}catch{for(var I=A.match(ri)||[],g=1;g<I.length;g++)A=eC(I,g).join(""),I=A.match(ri)||[];return A}}function xh(A){for(var I={"%FE%FF":"��","%FF%FE":"��"},g=Ui.exec(A);g;){try{I[g[0]]=decodeURIComponent(g[0])}catch{var B=Th(g[0]);B!==g[0]&&(I[g[0]]=B)}g=Ui.exec(A)}I["%C2"]="�";for(var i=Object.keys(I),o=0;o<i.length;o++){var Q=i[o];A=A.replace(new RegExp(Q,"g"),I[Q])}return A}var Xh=function(A){if(typeof A!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof A+"`");try{return A=A.replace(/\+/g," "),decodeURIComponent(A)}catch{return xh(A)}},zh=(A,I)=>{if(!(typeof A=="string"&&typeof I=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(I==="")return[A];const g=A.indexOf(I);return g===-1?[A]:[A.slice(0,g),A.slice(g+I.length)]},vh=function(A,I){for(var g={},B=Object.keys(A),i=Array.isArray(I),o=0;o<B.length;o++){var Q=B[o],C=A[Q];(i?I.indexOf(Q)!==-1:I(Q,C,A))&&(g[Q]=C)}return g};(function(A){const I=Vh,g=Xh,B=zh,i=vh,o=s=>s==null,Q=Symbol("encodeFragmentIdentifier");function C(s){switch(s.arrayFormat){case"index":return M=>(N,k)=>{const w=N.length;return k===void 0||s.skipNull&&k===null||s.skipEmptyString&&k===""?N:k===null?[...N,[a(M,s),"[",w,"]"].join("")]:[...N,[a(M,s),"[",a(w,s),"]=",a(k,s)].join("")]};case"bracket":return M=>(N,k)=>k===void 0||s.skipNull&&k===null||s.skipEmptyString&&k===""?N:k===null?[...N,[a(M,s),"[]"].join("")]:[...N,[a(M,s),"[]=",a(k,s)].join("")];case"colon-list-separator":return M=>(N,k)=>k===void 0||s.skipNull&&k===null||s.skipEmptyString&&k===""?N:k===null?[...N,[a(M,s),":list="].join("")]:[...N,[a(M,s),":list=",a(k,s)].join("")];case"comma":case"separator":case"bracket-separator":{const M=s.arrayFormat==="bracket-separator"?"[]=":"=";return N=>(k,w)=>w===void 0||s.skipNull&&w===null||s.skipEmptyString&&w===""?k:(w=w===null?"":w,k.length===0?[[a(N,s),M,a(w,s)].join("")]:[[k,a(w,s)].join(s.arrayFormatSeparator)])}default:return M=>(N,k)=>k===void 0||s.skipNull&&k===null||s.skipEmptyString&&k===""?N:k===null?[...N,a(M,s)]:[...N,[a(M,s),"=",a(k,s)].join("")]}}function E(s){let M;switch(s.arrayFormat){case"index":return(N,k,w)=>{if(M=/\[(\d*)\]$/.exec(N),N=N.replace(/\[\d*\]$/,""),!M){w[N]=k;return}w[N]===void 0&&(w[N]={}),w[N][M[1]]=k};case"bracket":return(N,k,w)=>{if(M=/(\[\])$/.exec(N),N=N.replace(/\[\]$/,""),!M){w[N]=k;return}if(w[N]===void 0){w[N]=[k];return}w[N]=[].concat(w[N],k)};case"colon-list-separator":return(N,k,w)=>{if(M=/(:list)$/.exec(N),N=N.replace(/:list$/,""),!M){w[N]=k;return}if(w[N]===void 0){w[N]=[k];return}w[N]=[].concat(w[N],k)};case"comma":case"separator":return(N,k,w)=>{const D=typeof k=="string"&&k.includes(s.arrayFormatSeparator),y=typeof k=="string"&&!D&&t(k,s).includes(s.arrayFormatSeparator);k=y?t(k,s):k;const O=D||y?k.split(s.arrayFormatSeparator).map(R=>t(R,s)):k===null?k:t(k,s);w[N]=O};case"bracket-separator":return(N,k,w)=>{const D=/(\[\])$/.test(N);if(N=N.replace(/\[\]$/,""),!D){w[N]=k&&t(k,s);return}const y=k===null?[]:k.split(s.arrayFormatSeparator).map(O=>t(O,s));if(w[N]===void 0){w[N]=y;return}w[N]=[].concat(w[N],y)};default:return(N,k,w)=>{if(w[N]===void 0){w[N]=k;return}w[N]=[].concat(w[N],k)}}}function h(s){if(typeof s!="string"||s.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function a(s,M){return M.encode?M.strict?I(s):encodeURIComponent(s):s}function t(s,M){return M.decode?g(s):s}function e(s){return Array.isArray(s)?s.sort():typeof s=="object"?e(Object.keys(s)).sort((M,N)=>Number(M)-Number(N)).map(M=>s[M]):s}function G(s){const M=s.indexOf("#");return M!==-1&&(s=s.slice(0,M)),s}function c(s){let M="";const N=s.indexOf("#");return N!==-1&&(M=s.slice(N)),M}function p(s){s=G(s);const M=s.indexOf("?");return M===-1?"":s.slice(M+1)}function Y(s,M){return M.parseNumbers&&!Number.isNaN(Number(s))&&typeof s=="string"&&s.trim()!==""?s=Number(s):M.parseBooleans&&s!==null&&(s.toLowerCase()==="true"||s.toLowerCase()==="false")&&(s=s.toLowerCase()==="true"),s}function F(s,M){M=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},M),h(M.arrayFormatSeparator);const N=E(M),k=Object.create(null);if(typeof s!="string"||(s=s.trim().replace(/^[?#&]/,""),!s))return k;for(const w of s.split("&")){if(w==="")continue;let[D,y]=B(M.decode?w.replace(/\+/g," "):w,"=");y=y===void 0?null:["comma","separator","bracket-separator"].includes(M.arrayFormat)?y:t(y,M),N(t(D,M),y,k)}for(const w of Object.keys(k)){const D=k[w];if(typeof D=="object"&&D!==null)for(const y of Object.keys(D))D[y]=Y(D[y],M);else k[w]=Y(D,M)}return M.sort===!1?k:(M.sort===!0?Object.keys(k).sort():Object.keys(k).sort(M.sort)).reduce((w,D)=>{const y=k[D];return Boolean(y)&&typeof y=="object"&&!Array.isArray(y)?w[D]=e(y):w[D]=y,w},Object.create(null))}A.extract=p,A.parse=F,A.stringify=(s,M)=>{if(!s)return"";M=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},M),h(M.arrayFormatSeparator);const N=y=>M.skipNull&&o(s[y])||M.skipEmptyString&&s[y]==="",k=C(M),w={};for(const y of Object.keys(s))N(y)||(w[y]=s[y]);const D=Object.keys(w);return M.sort!==!1&&D.sort(M.sort),D.map(y=>{const O=s[y];return O===void 0?"":O===null?a(y,M):Array.isArray(O)?O.length===0&&M.arrayFormat==="bracket-separator"?a(y,M)+"[]":O.reduce(k(y),[]).join("&"):a(y,M)+"="+a(O,M)}).filter(y=>y.length>0).join("&")},A.parseUrl=(s,M)=>{M=Object.assign({decode:!0},M);const[N,k]=B(s,"#");return Object.assign({url:N.split("?")[0]||"",query:F(p(s),M)},M&&M.parseFragmentIdentifier&&k?{fragmentIdentifier:t(k,M)}:{})},A.stringifyUrl=(s,M)=>{M=Object.assign({encode:!0,strict:!0,[Q]:!0},M);const N=G(s.url).split("?")[0]||"",k=A.extract(s.url),w=A.parse(k,{sort:!1}),D=Object.assign(w,s.query);let y=A.stringify(D,M);y&&(y=`?${y}`);let O=c(s.url);return s.fragmentIdentifier&&(O=`#${M[Q]?a(s.fragmentIdentifier,M):s.fragmentIdentifier}`),`${N}${y}${O}`},A.pick=(s,M,N)=>{N=Object.assign({parseFragmentIdentifier:!0,[Q]:!1},N);const{url:k,query:w,fragmentIdentifier:D}=A.parseUrl(s,N);return A.stringifyUrl({url:k,query:i(w,M),fragmentIdentifier:D},N)},A.exclude=(s,M,N)=>{const k=Array.isArray(M)?w=>!M.includes(w):(w,D)=>!M(w,D);return A.pick(s,k,N)}})(cQ);const Ph={waku:{publish:"waku_publish",subscribe:"waku_subscribe",subscription:"waku_subscription",unsubscribe:"waku_unsubscribe"},irn:{publish:"irn_publish",subscribe:"irn_subscribe",subscription:"irn_subscription",unsubscribe:"irn_unsubscribe"},iridium:{publish:"iridium_publish",subscribe:"iridium_subscribe",subscription:"iridium_subscription",unsubscribe:"iridium_unsubscribe"}};function XC(A,I){return A.includes(":")?[A]:I.chains||[]}const Ho="base10",JI="base16",MC="base64pad",zC="utf8",Oo=0,pg=1,_h=0,Ri=1,sC=12,vC=32;function $h(){const A=VC.generateKeyPair();return{privateKey:rI(A.secretKey,JI),publicKey:rI(A.publicKey,JI)}}function nC(){const A=xg.randomBytes(vC);return rI(A,JI)}function At(A,I){const g=VC.sharedKey(yI(A,JI),yI(I,JI)),B=new sh(yB.SHA256,g).expand(vC);return rI(B,JI)}function It(A){const I=yB.hash(yI(A,JI));return rI(I,JI)}function IB(A){const I=yB.hash(yI(A,zC));return rI(I,JI)}function gt(A){return yI(`${A}`,Ho)}function JQ(A){return Number(rI(A,Ho))}function Qt(A){const I=gt(typeof A.type<"u"?A.type:Oo);if(JQ(I)===pg&&typeof A.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");const g=typeof A.senderPublicKey<"u"?yI(A.senderPublicKey,JI):void 0,B=typeof A.iv<"u"?yI(A.iv,JI):xg.randomBytes(sC),i=new uC.ChaCha20Poly1305(yI(A.symKey,JI)).seal(B,yI(A.message,zC));return Ct({type:I,sealed:i,iv:B,senderPublicKey:g})}function Bt(A){const I=new uC.ChaCha20Poly1305(yI(A.symKey,JI)),{sealed:g,iv:B}=PC(A.encoded),i=I.open(B,g);if(i===null)throw new Error("Failed to decrypt");return rI(i,zC)}function Ct(A){if(JQ(A.type)===pg){if(typeof A.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");return rI(hC([A.type,A.senderPublicKey,A.iv,A.sealed]),MC)}return rI(hC([A.type,A.iv,A.sealed]),MC)}function PC(A){const I=yI(A,MC),g=I.slice(_h,Ri),B=Ri;if(JQ(g)===pg){const C=B+vC,E=C+sC,h=I.slice(B,C),a=I.slice(C,E),t=I.slice(E);return{type:g,sealed:t,iv:a,senderPublicKey:h}}const i=B+sC,o=I.slice(B,i),Q=I.slice(i);return{type:g,sealed:Q,iv:o}}function Et(A,I){const g=PC(A);return mo({type:JQ(g.type),senderPublicKey:typeof g.senderPublicKey<"u"?rI(g.senderPublicKey,JI):void 0,receiverPublicKey:I==null?void 0:I.receiverPublicKey})}function mo(A){const I=(A==null?void 0:A.type)||Oo;if(I===pg){if(typeof(A==null?void 0:A.senderPublicKey)>"u")throw new Error("missing sender public key");if(typeof(A==null?void 0:A.receiverPublicKey)>"u")throw new Error("missing receiver public key")}return{type:I,senderPublicKey:A==null?void 0:A.senderPublicKey,receiverPublicKey:A==null?void 0:A.receiverPublicKey}}function qi(A){return A.type===pg&&typeof A.senderPublicKey=="string"&&typeof A.receiverPublicKey=="string"}var it=Object.defineProperty,li=Object.getOwnPropertySymbols,Dt=Object.prototype.hasOwnProperty,ot=Object.prototype.propertyIsEnumerable,Ki=(A,I,g)=>I in A?it(A,I,{enumerable:!0,configurable:!0,writable:!0,value:g}):A[I]=g,Si=(A,I)=>{for(var g in I||(I={}))Dt.call(I,g)&&Ki(A,g,I[g]);if(li)for(var g of li(I))ot.call(I,g)&&Ki(A,g,I[g]);return A};const at="ReactNative",EQ={reactNative:"react-native",node:"node",browser:"browser",unknown:"unknown"},wt="js";function Zo(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}function Gt(){return!qo()&&!!TC()&&navigator.product===at}function kt(){return!Zo()&&!!TC()}function Nt(){return Gt()?EQ.reactNative:Zo()?EQ.node:kt()?EQ.browser:EQ.unknown}function ct(A,I){let g=cQ.parse(A);return g=Si(Si({},g),I),A=cQ.stringify(g),A}function ht(){return Ko()||{name:"",description:"",url:"",icons:[""]}}function tt(){const A=Rh();if(A===null)return"unknown";const I=A.os?A.os.replace(" ","").toLowerCase():"unknown";return A.type==="browser"?[I,A.name,A.version].join("-"):[I,A.version].join("-")}function et(){var A;const I=Nt();return I===EQ.browser?[I,((A=lo())==null?void 0:A.host)||"unknown"].join(":"):I}function Mt(A,I,g){const B=tt(),i=et();return[[A,I].join("-"),[wt,g].join("-"),B,i].join("/")}function st({protocol:A,version:I,relayUrl:g,sdkVersion:B,auth:i,projectId:o}){const Q=g.split("?"),C=Mt(A,I,B),E={auth:i,ua:C,projectId:o},h=ct(Q[1]||"",E);return Q[0]+"?"+h}function Eg(A,I){return A.filter(g=>I.includes(g)).length===A.length}function Lo(A){return Object.fromEntries(A.entries())}function fo(A){return new Map(Object.entries(A))}function yg(A){const I=RA.toMiliseconds(A||RA.FIVE_MINUTES);let g,B,i;return{resolve:o=>{i&&g&&(clearTimeout(i),g(o))},reject:o=>{i&&B&&(clearTimeout(i),B(o))},done:()=>new Promise((o,Q)=>{i=setTimeout(Q,I),g=o,B=Q})}}function jo(A,I){return new Promise(async(g,B)=>{const i=setTimeout(()=>B(),I),o=await A;clearTimeout(i),g(o)})}function bo(A,I){if(typeof I=="string"&&I.startsWith(`${A}:`))return I;if(A.toLowerCase()==="topic"){if(typeof I!="string")throw new Error('Value must be "string" for expirer target type: topic');return`topic:${I}`}else if(A.toLowerCase()==="id"){if(typeof I!="number")throw new Error('Value must be "number" for expirer target type: id');return`id:${I}`}throw new Error(`Unknown expirer target type: ${A}`)}function nt(A){return bo("topic",A)}function Ft(A){return bo("id",A)}function uo(A){const[I,g]=A.split(":"),B={id:void 0,topic:void 0};if(I==="topic"&&typeof g=="string")B.topic=g;else if(I==="id"&&Number.isInteger(Number(g)))B.id=Number(g);else throw new Error(`Invalid target, expected id:number or topic:string, got ${I}:${g}`);return B}function bI(A,I){return RA.fromMiliseconds((I||Date.now())+RA.toMiliseconds(A))}function Cg(A){return Date.now()>=RA.toMiliseconds(A)}function gI(A,I){return`${A}${I?`:${I}`:""}`}const yt="irn";function FC(A){return(A==null?void 0:A.relay)||{protocol:yt}}function yC(A){const I=Ph[A];if(typeof I>"u")throw new Error(`Relay Protocol not supported: ${A}`);return I}var Yt=Object.defineProperty,Hi=Object.getOwnPropertySymbols,Jt=Object.prototype.hasOwnProperty,pt=Object.prototype.propertyIsEnumerable,di=(A,I,g)=>I in A?Yt(A,I,{enumerable:!0,configurable:!0,writable:!0,value:g}):A[I]=g,rt=(A,I)=>{for(var g in I||(I={}))Jt.call(I,g)&&di(A,g,I[g]);if(Hi)for(var g of Hi(I))pt.call(I,g)&&di(A,g,I[g]);return A};function Ut(A,I="-"){const g={},B="relay"+I;return Object.keys(A).forEach(i=>{if(i.startsWith(B)){const o=i.replace(B,""),Q=A[i];g[o]=Q}}),g}function Rt(A){const I=A.indexOf(":"),g=A.indexOf("?")!==-1?A.indexOf("?"):void 0,B=A.substring(0,I),i=A.substring(I+1,g).split("@"),o=typeof g<"u"?A.substring(g):"",Q=cQ.parse(o);return{protocol:B,topic:i[0],version:parseInt(i[1],10),symKey:Q.symKey,relay:Ut(Q)}}function qt(A,I="-"){const g="relay",B={};return Object.keys(A).forEach(i=>{const o=g+I+i;A[i]&&(B[o]=A[i])}),B}function lt(A){return`${A.protocol}:${A.topic}@${A.version}?`+cQ.stringify(rt({symKey:A.symKey},qt(A.relay)))}function pQ(A){const I=[];return A.forEach(g=>{const[B,i]=g.split(":");I.push(`${B}:${i}`)}),I}function Kt(A){const I=[];return Object.values(A).forEach(g=>{I.push(...pQ(g.accounts))}),I}function St(A,I){const g=[];return Object.values(A).forEach(B=>{pQ(B.accounts).includes(I)&&g.push(...B.methods)}),g}function Ht(A,I){const g=[];return Object.values(A).forEach(B=>{pQ(B.accounts).includes(I)&&g.push(...B.events)}),g}function dt(A,I){const g=xQ(A,I);if(g)throw new Error(g.message);const B={};for(const[i,o]of Object.entries(A))B[i]={methods:o.methods,events:o.events,chains:o.accounts.map(Q=>`${Q.split(":")[0]}:${Q.split(":")[1]}`)};return B}const Ot={INVALID_METHOD:{message:"Invalid method.",code:1001},INVALID_EVENT:{message:"Invalid event.",code:1002},INVALID_UPDATE_REQUEST:{message:"Invalid update request.",code:1003},INVALID_EXTEND_REQUEST:{message:"Invalid extend request.",code:1004},INVALID_SESSION_SETTLE_REQUEST:{message:"Invalid session settle request.",code:1005},UNAUTHORIZED_METHOD:{message:"Unauthorized method.",code:3001},UNAUTHORIZED_EVENT:{message:"Unauthorized event.",code:3002},UNAUTHORIZED_UPDATE_REQUEST:{message:"Unauthorized update request.",code:3003},UNAUTHORIZED_EXTEND_REQUEST:{message:"Unauthorized extend request.",code:3004},USER_REJECTED:{message:"User rejected.",code:5e3},USER_REJECTED_CHAINS:{message:"User rejected chains.",code:5001},USER_REJECTED_METHODS:{message:"User rejected methods.",code:5002},USER_REJECTED_EVENTS:{message:"User rejected events.",code:5003},UNSUPPORTED_CHAINS:{message:"Unsupported chains.",code:5100},UNSUPPORTED_METHODS:{message:"Unsupported methods.",code:5101},UNSUPPORTED_EVENTS:{message:"Unsupported events.",code:5102},UNSUPPORTED_ACCOUNTS:{message:"Unsupported accounts.",code:5103},UNSUPPORTED_NAMESPACE_KEY:{message:"Unsupported namespace key.",code:5104},USER_DISCONNECTED:{message:"User disconnected.",code:6e3},SESSION_SETTLEMENT_FAILED:{message:"Session settlement failed.",code:7e3},WC_METHOD_UNSUPPORTED:{message:"Unsupported wc_ method.",code:10001}},mt={NOT_INITIALIZED:{message:"Not initialized.",code:1},NO_MATCHING_KEY:{message:"No matching key.",code:2},RESTORE_WILL_OVERRIDE:{message:"Restore will override.",code:3},RESUBSCRIBED:{message:"Resubscribed.",code:4},MISSING_OR_INVALID:{message:"Missing or invalid.",code:5},EXPIRED:{message:"Expired.",code:6},UNKNOWN_TYPE:{message:"Unknown type.",code:7},MISMATCHED_TOPIC:{message:"Mismatched topic.",code:8},NON_CONFORMING_NAMESPACES:{message:"Non conforming namespaces.",code:9}};function yA(A,I){const{message:g,code:B}=mt[A];return{message:I?`${g} ${I}`:g,code:B}}function oI(A,I){const{message:g,code:B}=Ot[A];return{message:I?`${g} ${I}`:g,code:B}}function YB(A,I){return Array.isArray(A)?typeof I<"u"&&A.length?A.every(I):!0:!1}function DQ(A){return Object.getPrototypeOf(A)===Object.prototype&&Object.keys(A).length}function MI(A){return typeof A>"u"}function aI(A,I){return I&&MI(A)?!0:typeof A=="string"&&Boolean(A.trim().length)}function _C(A,I){return I&&MI(A)?!0:typeof A=="number"&&!isNaN(A)}function Zt(A,I){const{requiredNamespaces:g}=I,B=Object.keys(A.namespaces),i=Object.keys(g);let o=!0;return Eg(i,B)?(B.forEach(Q=>{const{accounts:C,methods:E,events:h}=A.namespaces[Q],a=pQ(C),t=g[Q];(!Eg(XC(Q,t),a)||!Eg(t.methods,E)||!Eg(t.events,h))&&(o=!1)}),o):!1}function $C(A){return aI(A,!1)&&A.includes(":")?A.split(":").length===2:!1}function Lt(A){if(aI(A,!1)&&A.includes(":")){const I=A.split(":");if(I.length===3){const g=I[0]+":"+I[1];return!!I[2]&&$C(g)}}return!1}function ft(A){if(aI(A,!1))try{return typeof new URL(A)<"u"}catch{return!1}return!1}function jt(A){var I;return(I=A==null?void 0:A.proposer)==null?void 0:I.publicKey}function bt(A){return A==null?void 0:A.topic}function ut(A,I){let g=null;return aI(A==null?void 0:A.publicKey,!1)||(g=yA("MISSING_OR_INVALID",`${I} controller public key should be a string`)),g}function Oi(A){let I=!0;return YB(A)?A.length&&(I=A.every(g=>aI(g,!1))):I=!1,I}function Wt(A,I,g){let B=null;return YB(I)?I.forEach(i=>{B||(!$C(i)||!i.includes(A))&&(B=oI("UNSUPPORTED_CHAINS",`${g}, chain ${i} should be a string and conform to "namespace:chainId" format`))}):B=oI("UNSUPPORTED_CHAINS",`${g}, chains ${I} should be an array of strings conforming to "namespace:chainId" format`),B}function Vt(A,I){let g=null;return Object.entries(A).forEach(([B,i])=>{if(g)return;const o=Wt(B,XC(B,i),`${I} requiredNamespace`);o&&(g=o)}),g}function Tt(A,I){let g=null;return YB(A)?A.forEach(B=>{g||Lt(B)||(g=oI("UNSUPPORTED_ACCOUNTS",`${I}, account ${B} should be a string and conform to "namespace:chainId:address" format`))}):g=oI("UNSUPPORTED_ACCOUNTS",`${I}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),g}function xt(A,I){let g=null;return Object.values(A).forEach(B=>{if(g)return;const i=Tt(B==null?void 0:B.accounts,`${I} namespace`);i&&(g=i)}),g}function Xt(A,I){let g=null;return Oi(A==null?void 0:A.methods)?Oi(A==null?void 0:A.events)||(g=oI("UNSUPPORTED_EVENTS",`${I}, events should be an array of strings or empty array for no events`)):g=oI("UNSUPPORTED_METHODS",`${I}, methods should be an array of strings or empty array for no methods`),g}function Wo(A,I){let g=null;return Object.values(A).forEach(B=>{if(g)return;const i=Xt(B,`${I}, namespace`);i&&(g=i)}),g}function zt(A,I,g){let B=null;if(A&&DQ(A)){const i=Wo(A,I);i&&(B=i);const o=Vt(A,I);o&&(B=o)}else B=yA("MISSING_OR_INVALID",`${I}, ${g} should be an object with data`);return B}function xQ(A,I){let g=null;if(A&&DQ(A)){const B=Wo(A,I);B&&(g=B);const i=xt(A,I);i&&(g=i)}else g=yA("MISSING_OR_INVALID",`${I}, namespaces should be an object with data`);return g}function Vo(A){return aI(A.protocol,!0)}function vt(A,I){let g=!1;return I&&!A?g=!0:A&&YB(A)&&A.length&&A.forEach(B=>{g=Vo(B)}),g}function Pt(A){return typeof A=="number"}function FI(A){return typeof A<"u"&&typeof A!==null}function _t(A){return!(!A||typeof A!="object"||!A.code||!_C(A.code,!1)||!A.message||!aI(A.message,!1))}function $t(A){return!(MI(A)||!aI(A.method,!1))}function Ae(A){return!(MI(A)||MI(A.result)&&MI(A.error)||!_C(A.id,!1)||!aI(A.jsonrpc,!1))}function Ie(A){return!(MI(A)||!aI(A.name,!1))}function mi(A,I){return!(!$C(I)||!Kt(A).includes(I))}function ge(A,I,g){return aI(g,!1)?St(A,I).includes(g):!1}function Qe(A,I,g){return aI(g,!1)?Ht(A,I).includes(g):!1}function $B(A,I,g,B){let i=null;const o=Object.keys(A),Q=Object.keys(I);return Eg(o,Q)?o.forEach(C=>{if(i)return;const E=pQ(I[C].accounts);Eg(XC(C,A[C]),E)?Eg(A[C].methods,I[C].methods)?Eg(A[C].events,I[C].events)||(i=yA("NON_CONFORMING_NAMESPACES",`${g} namespaces events don't satisfy namespace events for ${C}`)):i=yA("NON_CONFORMING_NAMESPACES",`${g} namespaces methods don't satisfy namespace methods for ${C}`):i=yA("NON_CONFORMING_NAMESPACES",`${g} namespaces accounts don't satisfy namespace chains for ${C}`)}):i=yA("NON_CONFORMING_NAMESPACES",`${g} namespaces keys don't satisfy ${B}`),i}function Be(A,I){return _C(A,!1)&&A<=I.max&&A>=I.min}const Ce="PARSE_ERROR",Ee="INVALID_REQUEST",ie="METHOD_NOT_FOUND",De="INVALID_PARAMS",To="INTERNAL_ERROR",AE="SERVER_ERROR",oe=[-32700,-32600,-32601,-32602,-32603],oQ={[Ce]:{code:-32700,message:"Parse error"},[Ee]:{code:-32600,message:"Invalid Request"},[ie]:{code:-32601,message:"Method not found"},[De]:{code:-32602,message:"Invalid params"},[To]:{code:-32603,message:"Internal error"},[AE]:{code:-32e3,message:"Server error"}},xo=AE;function ae(A){return oe.includes(A)}function Zi(A){return Object.keys(oQ).includes(A)?oQ[A]:oQ[xo]}function we(A){const I=Object.values(oQ).find(g=>g.code===A);return I||oQ[xo]}function Ge(A,I,g){return A.message.includes("getaddrinfo ENOTFOUND")||A.message.includes("connect ECONNREFUSED")?new Error(`Unavailable ${g} RPC url at ${I}`):A}var Xo={},zI={},Li;function ke(){if(Li)return zI;Li=1,Object.defineProperty(zI,"__esModule",{value:!0}),zI.isBrowserCryptoAvailable=zI.getSubtleCrypto=zI.getBrowerCrypto=void 0;function A(){return(bA==null?void 0:bA.crypto)||(bA==null?void 0:bA.msCrypto)||{}}zI.getBrowerCrypto=A;function I(){const B=A();return B.subtle||B.webkitSubtle}zI.getSubtleCrypto=I;function g(){return!!A()&&!!I()}return zI.isBrowserCryptoAvailable=g,zI}var vI={},fi;function Ne(){if(fi)return vI;fi=1,Object.defineProperty(vI,"__esModule",{value:!0}),vI.isBrowser=vI.isNode=vI.isReactNative=void 0;function A(){return typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"}vI.isReactNative=A;function I(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}vI.isNode=I;function g(){return!A()&&!I()}return vI.isBrowser=g,vI}(function(A){Object.defineProperty(A,"__esModule",{value:!0});const I=pI;I.__exportStar(ke(),A),I.__exportStar(Ne(),A)})(Xo);function ce(){const A=Date.now()*Math.pow(10,3),I=Math.floor(Math.random()*Math.pow(10,3));return A+I}function JB(A,I,g){return{id:g||ce(),jsonrpc:"2.0",method:A,params:I}}function IE(A,I){return{id:A,jsonrpc:"2.0",result:I}}function gE(A,I,g){return{id:A,jsonrpc:"2.0",error:he(I,g)}}function he(A,I){return typeof A>"u"?Zi(To):(typeof A=="string"&&(A=Object.assign(Object.assign({},Zi(AE)),{message:A})),typeof I<"u"&&(A.data=I),ae(A.code)&&(A=we(A.code)),A)}class te{}class ee extends te{constructor(){super()}}class Me extends ee{constructor(I){super()}}const se="^wss?:";function ne(A){const I=A.match(new RegExp(/^\w+:/,"gi"));if(!(!I||!I.length))return I[0]}function Fe(A,I){const g=ne(A);return typeof g>"u"?!1:new RegExp(I).test(g)}function ji(A){return Fe(A,se)}function ye(A){return new RegExp("wss?://localhost(:d{2,5})?").test(A)}function zo(A){return typeof A=="object"&&"id"in A&&"jsonrpc"in A&&A.jsonrpc==="2.0"}function QE(A){return zo(A)&&"method"in A}function BE(A){return zo(A)&&(PI(A)||mI(A))}function PI(A){return"result"in A}function mI(A){return"error"in A}class Ye extends Me{constructor(I){super(I),this.events=new sI.EventEmitter,this.hasRegisteredEventListeners=!1,this.connection=this.setConnection(I),this.connection.connected&&this.registerEventListeners()}async connect(I=this.connection){await this.open(I)}async disconnect(){await this.close()}on(I,g){this.events.on(I,g)}once(I,g){this.events.once(I,g)}off(I,g){this.events.off(I,g)}removeListener(I,g){this.events.removeListener(I,g)}async request(I,g){return this.requestStrict(JB(I.method,I.params||[]),g)}async requestStrict(I,g){return new Promise(async(B,i)=>{if(!this.connection.connected)try{await this.open()}catch(o){i(o)}this.events.on(`${I.id}`,o=>{mI(o)?i(o.error):B(o.result)});try{await this.connection.send(I,g)}catch(o){i(o)}})}setConnection(I=this.connection){return I}onPayload(I){this.events.emit("payload",I),BE(I)?this.events.emit(`${I.id}`,I):this.events.emit("message",{type:I.method,data:I.params})}async open(I=this.connection){this.connection===I&&this.connection.connected||(this.connection.connected&&this.close(),typeof I=="string"&&(await this.connection.open(I),I=this.connection),this.connection=this.setConnection(I),await this.connection.open(),this.registerEventListeners(),this.events.emit("connect"))}async close(){await this.connection.close()}registerEventListeners(){this.hasRegisteredEventListeners||(this.connection.on("payload",I=>this.onPayload(I)),this.connection.on("close",()=>this.events.emit("disconnect")),this.connection.on("error",I=>this.events.emit("error",I)),this.hasRegisteredEventListeners=!0)}}function Je(A){if(typeof A!="string")throw new Error(`Cannot safe json parse value of type ${typeof A}`);try{return JSON.parse(A)}catch{return A}}function pe(A){return typeof A=="string"?A:JSON.stringify(A)}const bi=10,re=()=>typeof global<"u"&&typeof global.WebSocket<"u"?global.WebSocket:typeof window<"u"&&typeof window.WebSocket<"u"?window.WebSocket:require("ws"),Ue=()=>typeof window<"u",Re=re();class qe{constructor(I){if(this.url=I,this.events=new sI.EventEmitter,this.registering=!1,!ji(I))throw new Error(`Provided URL is not compatible with WebSocket connection: ${I}`);this.url=I}get connected(){return typeof this.socket<"u"}get connecting(){return this.registering}on(I,g){this.events.on(I,g)}once(I,g){this.events.once(I,g)}off(I,g){this.events.off(I,g)}removeListener(I,g){this.events.removeListener(I,g)}async open(I=this.url){await this.register(I)}async close(){return new Promise((I,g)=>{if(typeof this.socket>"u"){g(new Error("Connection already closed"));return}this.socket.onclose=()=>{this.onClose(),I()},this.socket.close()})}async send(I,g){typeof this.socket>"u"&&(this.socket=await this.register());try{this.socket.send(pe(I))}catch(B){this.onError(I.id,B)}}register(I=this.url){if(!ji(I))throw new Error(`Provided URL is not compatible with WebSocket connection: ${I}`);if(this.registering){const g=this.events.getMaxListeners();return(this.events.listenerCount("register_error")>=g||this.events.listenerCount("open")>=g)&&this.events.setMaxListeners(g+1),new Promise((B,i)=>{this.events.once("register_error",o=>{this.resetMaxListeners(),i(o)}),this.events.once("open",()=>{if(this.resetMaxListeners(),typeof this.socket>"u")return i(new Error("WebSocket connection is missing or invalid"));B(this.socket)})})}return this.url=I,this.registering=!0,new Promise((g,B)=>{const i=Xo.isReactNative()?void 0:{rejectUnauthorized:!ye(I)},o=new Re(I,[],i);Ue()?o.onerror=Q=>{const C=Q;B(this.emitError(C.error))}:o.on("error",Q=>{B(this.emitError(Q))}),o.onopen=()=>{this.onOpen(o),g(o)}})}onOpen(I){I.onmessage=g=>this.onPayload(g),I.onclose=()=>this.onClose(),this.socket=I,this.registering=!1,this.events.emit("open")}onClose(){this.socket=void 0,this.registering=!1,this.events.emit("close")}onPayload(I){if(typeof I.data>"u")return;const g=typeof I.data=="string"?Je(I.data):I.data;this.events.emit("payload",g)}onError(I,g){const B=this.parseError(g),i=B.message||B.toString(),o=gE(I,i);this.events.emit("payload",o)}parseError(I,g=this.url){return Ge(I,g,"WS")}resetMaxListeners(){this.events.getMaxListeners()>bi&&this.events.setMaxListeners(bi)}emitError(I){const g=this.parseError(new Error((I==null?void 0:I.message)||`WebSocket connection failed for URL: ${this.url}`));return this.events.emit("register_error",g),g}}var gB={},le={get exports(){return gB},set exports(A){gB=A}};(function(A,I){var g=200,B="__lodash_hash_undefined__",i=1,o=2,Q=9007199254740991,C="[object Arguments]",E="[object Array]",h="[object AsyncFunction]",a="[object Boolean]",t="[object Date]",e="[object Error]",G="[object Function]",c="[object GeneratorFunction]",p="[object Map]",Y="[object Number]",F="[object Null]",s="[object Object]",M="[object Promise]",N="[object Proxy]",k="[object RegExp]",w="[object Set]",D="[object String]",y="[object Symbol]",O="[object Undefined]",R="[object WeakMap]",m="[object ArrayBuffer]",V="[object DataView]",j="[object Float32Array]",U="[object Float64Array]",S="[object Int8Array]",X="[object Int16Array]",u="[object Int32Array]",Z="[object Uint8Array]",L="[object Uint8ClampedArray]",_="[object Uint16Array]",f="[object Uint32Array]",W=/[\\^$.*+?()[\]{}|]/g,QA=/^\[object .+?Constructor\]$/,cA=/^(?:0|[1-9]\d*)$/,aA={};aA[j]=aA[U]=aA[S]=aA[X]=aA[u]=aA[Z]=aA[L]=aA[_]=aA[f]=!0,aA[C]=aA[E]=aA[m]=aA[a]=aA[V]=aA[t]=aA[e]=aA[G]=aA[p]=aA[Y]=aA[s]=aA[k]=aA[w]=aA[D]=aA[R]=!1;var tA=typeof bA=="object"&&bA&&bA.Object===Object&&bA,DA=typeof self=="object"&&self&&self.Object===Object&&self,EA=tA||DA||Function("return this")(),CA=I&&!I.nodeType&&I,K=CA&&!0&&A&&!A.nodeType&&A,b=K&&K.exports===CA,P=b&&tA.process,kA=function(){try{return P&&P.binding&&P.binding("util")}catch{}}(),eA=kA&&kA.isTypedArray;function FA(IA,NA){for(var sA=-1,pA=IA==null?0:IA.length,_A=0,dA=[];++sA<pA;){var II=IA[sA];NA(II,sA,IA)&&(dA[_A++]=II)}return dA}function v(IA,NA){for(var sA=-1,pA=NA.length,_A=IA.length;++sA<pA;)IA[_A+sA]=NA[sA];return IA}function l(IA,NA){for(var sA=-1,pA=IA==null?0:IA.length;++sA<pA;)if(NA(IA[sA],sA,IA))return!0;return!1}function d(IA,NA){for(var sA=-1,pA=Array(IA);++sA<IA;)pA[sA]=NA(sA);return pA}function x(IA){return function(NA){return IA(NA)}}function oA(IA,NA){return IA.has(NA)}function hA(IA,NA){return IA==null?void 0:IA[NA]}function AA(IA){var NA=-1,sA=Array(IA.size);return IA.forEach(function(pA,_A){sA[++NA]=[_A,pA]}),sA}function n(IA,NA){return function(sA){return IA(NA(sA))}}function r(IA){var NA=-1,sA=Array(IA.size);return IA.forEach(function(pA){sA[++NA]=pA}),sA}var J=Array.prototype,q=Function.prototype,H=Object.prototype,T=EA["__core-js_shared__"],z=q.toString,$=H.hasOwnProperty,BA=function(){var IA=/[^.]+$/.exec(T&&T.keys&&T.keys.IE_PROTO||"");return IA?"Symbol(src)_1."+IA:""}(),gA=H.toString,iA=RegExp("^"+z.call($).replace(W,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),wA=b?EA.Buffer:void 0,GA=EA.Symbol,MA=EA.Uint8Array,nA=H.propertyIsEnumerable,JA=J.splice,UA=GA?GA.toStringTag:void 0,mA=Object.getOwnPropertySymbols,fA=wA?wA.isBuffer:void 0,lA=n(Object.keys,Object),rA=Rg(EA,"DataView"),SA=Rg(EA,"Map"),WA=Rg(EA,"Promise"),xA=Rg(EA,"Set"),XA=Rg(EA,"WeakMap"),jA=Rg(Object,"create"),zA=hg(rA),uA=hg(SA),OA=hg(WA),KA=hg(xA),CI=hg(XA),BI=GA?GA.prototype:void 0,QI=BI?BI.valueOf:void 0;function $A(IA){var NA=-1,sA=IA==null?0:IA.length;for(this.clear();++NA<sA;){var pA=IA[NA];this.set(pA[0],pA[1])}}function EI(){this.__data__=jA?jA(null):{},this.size=0}function iI(IA){var NA=this.has(IA)&&delete this.__data__[IA];return this.size-=NA?1:0,NA}function xw(IA){var NA=this.__data__;if(jA){var sA=NA[IA];return sA===B?void 0:sA}return $.call(NA,IA)?NA[IA]:void 0}function Xw(IA){var NA=this.__data__;return jA?NA[IA]!==void 0:$.call(NA,IA)}function zw(IA,NA){var sA=this.__data__;return this.size+=this.has(IA)?0:1,sA[IA]=jA&&NA===void 0?B:NA,this}$A.prototype.clear=EI,$A.prototype.delete=iI,$A.prototype.get=xw,$A.prototype.has=Xw,$A.prototype.set=zw;function xI(IA){var NA=-1,sA=IA==null?0:IA.length;for(this.clear();++NA<sA;){var pA=IA[NA];this.set(pA[0],pA[1])}}function vw(){this.__data__=[],this.size=0}function Pw(IA){var NA=this.__data__,sA=KQ(NA,IA);if(sA<0)return!1;var pA=NA.length-1;return sA==pA?NA.pop():JA.call(NA,sA,1),--this.size,!0}function _w(IA){var NA=this.__data__,sA=KQ(NA,IA);return sA<0?void 0:NA[sA][1]}function $w(IA){return KQ(this.__data__,IA)>-1}function AG(IA,NA){var sA=this.__data__,pA=KQ(sA,IA);return pA<0?(++this.size,sA.push([IA,NA])):sA[pA][1]=NA,this}xI.prototype.clear=vw,xI.prototype.delete=Pw,xI.prototype.get=_w,xI.prototype.has=$w,xI.prototype.set=AG;function cg(IA){var NA=-1,sA=IA==null?0:IA.length;for(this.clear();++NA<sA;){var pA=IA[NA];this.set(pA[0],pA[1])}}function IG(){this.size=0,this.__data__={hash:new $A,map:new(SA||xI),string:new $A}}function gG(IA){var NA=SQ(this,IA).delete(IA);return this.size-=NA?1:0,NA}function QG(IA){return SQ(this,IA).get(IA)}function BG(IA){return SQ(this,IA).has(IA)}function CG(IA,NA){var sA=SQ(this,IA),pA=sA.size;return sA.set(IA,NA),this.size+=sA.size==pA?0:1,this}cg.prototype.clear=IG,cg.prototype.delete=gG,cg.prototype.get=QG,cg.prototype.has=BG,cg.prototype.set=CG;function lQ(IA){var NA=-1,sA=IA==null?0:IA.length;for(this.__data__=new cg;++NA<sA;)this.add(IA[NA])}function EG(IA){return this.__data__.set(IA,B),this}function iG(IA){return this.__data__.has(IA)}lQ.prototype.add=lQ.prototype.push=EG,lQ.prototype.has=iG;function gg(IA){var NA=this.__data__=new xI(IA);this.size=NA.size}function DG(){this.__data__=new xI,this.size=0}function oG(IA){var NA=this.__data__,sA=NA.delete(IA);return this.size=NA.size,sA}function aG(IA){return this.__data__.get(IA)}function wG(IA){return this.__data__.has(IA)}function GG(IA,NA){var sA=this.__data__;if(sA instanceof xI){var pA=sA.__data__;if(!SA||pA.length<g-1)return pA.push([IA,NA]),this.size=++sA.size,this;sA=this.__data__=new cg(pA)}return sA.set(IA,NA),this.size=sA.size,this}gg.prototype.clear=DG,gg.prototype.delete=oG,gg.prototype.get=aG,gg.prototype.has=wG,gg.prototype.set=GG;function kG(IA,NA){var sA=HQ(IA),pA=!sA&&UG(IA),_A=!sA&&!pA&&LB(IA),dA=!sA&&!pA&&!_A&&ZE(IA),II=sA||pA||_A||dA,DI=II?d(IA.length,String):[],wI=DI.length;for(var AI in IA)(NA||$.call(IA,AI))&&!(II&&(AI=="length"||_A&&(AI=="offset"||AI=="parent")||dA&&(AI=="buffer"||AI=="byteLength"||AI=="byteOffset")||yG(AI,wI)))&&DI.push(AI);return DI}function KQ(IA,NA){for(var sA=IA.length;sA--;)if(HE(IA[sA][0],NA))return sA;return-1}function NG(IA,NA,sA){var pA=NA(IA);return HQ(IA)?pA:v(pA,sA(IA))}function Pg(IA){return IA==null?IA===void 0?O:F:UA&&UA in Object(IA)?nG(IA):rG(IA)}function qE(IA){return _g(IA)&&Pg(IA)==C}function lE(IA,NA,sA,pA,_A){return IA===NA?!0:IA==null||NA==null||!_g(IA)&&!_g(NA)?IA!==IA&&NA!==NA:cG(IA,NA,sA,pA,lE,_A)}function cG(IA,NA,sA,pA,_A,dA){var II=HQ(IA),DI=HQ(NA),wI=II?E:Qg(IA),AI=DI?E:Qg(NA);wI=wI==C?s:wI,AI=AI==C?s:AI;var UI=wI==s,OI=AI==s,NI=wI==AI;if(NI&&LB(IA)){if(!LB(NA))return!1;II=!0,UI=!1}if(NI&&!UI)return dA||(dA=new gg),II||ZE(IA)?KE(IA,NA,sA,pA,_A,dA):MG(IA,NA,wI,sA,pA,_A,dA);if(!(sA&i)){var lI=UI&&$.call(IA,"__wrapped__"),KI=OI&&$.call(NA,"__wrapped__");if(lI||KI){var Bg=lI?IA.value():IA,XI=KI?NA.value():NA;return dA||(dA=new gg),_A(Bg,XI,sA,pA,dA)}}return NI?(dA||(dA=new gg),sG(IA,NA,sA,pA,_A,dA)):!1}function hG(IA){if(!mE(IA)||JG(IA))return!1;var NA=dE(IA)?iA:QA;return NA.test(hg(IA))}function tG(IA){return _g(IA)&&OE(IA.length)&&!!aA[Pg(IA)]}function eG(IA){if(!pG(IA))return lA(IA);var NA=[];for(var sA in Object(IA))$.call(IA,sA)&&sA!="constructor"&&NA.push(sA);return NA}function KE(IA,NA,sA,pA,_A,dA){var II=sA&i,DI=IA.length,wI=NA.length;if(DI!=wI&&!(II&&wI>DI))return!1;var AI=dA.get(IA);if(AI&&dA.get(NA))return AI==NA;var UI=-1,OI=!0,NI=sA&o?new lQ:void 0;for(dA.set(IA,NA),dA.set(NA,IA);++UI<DI;){var lI=IA[UI],KI=NA[UI];if(pA)var Bg=II?pA(KI,lI,UI,NA,IA,dA):pA(lI,KI,UI,IA,NA,dA);if(Bg!==void 0){if(Bg)continue;OI=!1;break}if(NI){if(!l(NA,function(XI,tg){if(!oA(NI,tg)&&(lI===XI||_A(lI,XI,sA,pA,dA)))return NI.push(tg)})){OI=!1;break}}else if(!(lI===KI||_A(lI,KI,sA,pA,dA))){OI=!1;break}}return dA.delete(IA),dA.delete(NA),OI}function MG(IA,NA,sA,pA,_A,dA,II){switch(sA){case V:if(IA.byteLength!=NA.byteLength||IA.byteOffset!=NA.byteOffset)return!1;IA=IA.buffer,NA=NA.buffer;case m:return!(IA.byteLength!=NA.byteLength||!dA(new MA(IA),new MA(NA)));case a:case t:case Y:return HE(+IA,+NA);case e:return IA.name==NA.name&&IA.message==NA.message;case k:case D:return IA==NA+"";case p:var DI=AA;case w:var wI=pA&i;if(DI||(DI=r),IA.size!=NA.size&&!wI)return!1;var AI=II.get(IA);if(AI)return AI==NA;pA|=o,II.set(IA,NA);var UI=KE(DI(IA),DI(NA),pA,_A,dA,II);return II.delete(IA),UI;case y:if(QI)return QI.call(IA)==QI.call(NA)}return!1}function sG(IA,NA,sA,pA,_A,dA){var II=sA&i,DI=SE(IA),wI=DI.length,AI=SE(NA),UI=AI.length;if(wI!=UI&&!II)return!1;for(var OI=wI;OI--;){var NI=DI[OI];if(!(II?NI in NA:$.call(NA,NI)))return!1}var lI=dA.get(IA);if(lI&&dA.get(NA))return lI==NA;var KI=!0;dA.set(IA,NA),dA.set(NA,IA);for(var Bg=II;++OI<wI;){NI=DI[OI];var XI=IA[NI],tg=NA[NI];if(pA)var LE=II?pA(tg,XI,NI,NA,IA,dA):pA(XI,tg,NI,IA,NA,dA);if(!(LE===void 0?XI===tg||_A(XI,tg,sA,pA,dA):LE)){KI=!1;break}Bg||(Bg=NI=="constructor")}if(KI&&!Bg){var dQ=IA.constructor,OQ=NA.constructor;dQ!=OQ&&"constructor"in IA&&"constructor"in NA&&!(typeof dQ=="function"&&dQ instanceof dQ&&typeof OQ=="function"&&OQ instanceof OQ)&&(KI=!1)}return dA.delete(IA),dA.delete(NA),KI}function SE(IA){return NG(IA,lG,FG)}function SQ(IA,NA){var sA=IA.__data__;return YG(NA)?sA[typeof NA=="string"?"string":"hash"]:sA.map}function Rg(IA,NA){var sA=hA(IA,NA);return hG(sA)?sA:void 0}function nG(IA){var NA=$.call(IA,UA),sA=IA[UA];try{IA[UA]=void 0;var pA=!0}catch{}var _A=gA.call(IA);return pA&&(NA?IA[UA]=sA:delete IA[UA]),_A}var FG=mA?function(IA){return IA==null?[]:(IA=Object(IA),FA(mA(IA),function(NA){return nA.call(IA,NA)}))}:KG,Qg=Pg;(rA&&Qg(new rA(new ArrayBuffer(1)))!=V||SA&&Qg(new SA)!=p||WA&&Qg(WA.resolve())!=M||xA&&Qg(new xA)!=w||XA&&Qg(new XA)!=R)&&(Qg=function(IA){var NA=Pg(IA),sA=NA==s?IA.constructor:void 0,pA=sA?hg(sA):"";if(pA)switch(pA){case zA:return V;case uA:return p;case OA:return M;case KA:return w;case CI:return R}return NA});function yG(IA,NA){return NA=NA??Q,!!NA&&(typeof IA=="number"||cA.test(IA))&&IA>-1&&IA%1==0&&IA<NA}function YG(IA){var NA=typeof IA;return NA=="string"||NA=="number"||NA=="symbol"||NA=="boolean"?IA!=="__proto__":IA===null}function JG(IA){return!!BA&&BA in IA}function pG(IA){var NA=IA&&IA.constructor,sA=typeof NA=="function"&&NA.prototype||H;return IA===sA}function rG(IA){return gA.call(IA)}function hg(IA){if(IA!=null){try{return z.call(IA)}catch{}try{return IA+""}catch{}}return""}function HE(IA,NA){return IA===NA||IA!==IA&&NA!==NA}var UG=qE(function(){return arguments}())?qE:function(IA){return _g(IA)&&$.call(IA,"callee")&&!nA.call(IA,"callee")},HQ=Array.isArray;function RG(IA){return IA!=null&&OE(IA.length)&&!dE(IA)}var LB=fA||SG;function qG(IA,NA){return lE(IA,NA)}function dE(IA){if(!mE(IA))return!1;var NA=Pg(IA);return NA==G||NA==c||NA==h||NA==N}function OE(IA){return typeof IA=="number"&&IA>-1&&IA%1==0&&IA<=Q}function mE(IA){var NA=typeof IA;return IA!=null&&(NA=="object"||NA=="function")}function _g(IA){return IA!=null&&typeof IA=="object"}var ZE=eA?x(eA):tG;function lG(IA){return RG(IA)?kG(IA):eG(IA)}function KG(){return[]}function SG(){return!1}A.exports=qG})(le,gB);function Ke(A,I){if(A.length>=255)throw new TypeError("Alphabet too long");for(var g=new Uint8Array(256),B=0;B<g.length;B++)g[B]=255;for(var i=0;i<A.length;i++){var o=A.charAt(i),Q=o.charCodeAt(0);if(g[Q]!==255)throw new TypeError(o+" is ambiguous");g[Q]=i}var C=A.length,E=A.charAt(0),h=Math.log(C)/Math.log(256),a=Math.log(256)/Math.log(C);function t(c){if(c instanceof Uint8Array||(ArrayBuffer.isView(c)?c=new Uint8Array(c.buffer,c.byteOffset,c.byteLength):Array.isArray(c)&&(c=Uint8Array.from(c))),!(c instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(c.length===0)return"";for(var p=0,Y=0,F=0,s=c.length;F!==s&&c[F]===0;)F++,p++;for(var M=(s-F)*a+1>>>0,N=new Uint8Array(M);F!==s;){for(var k=c[F],w=0,D=M-1;(k!==0||w<Y)&&D!==-1;D--,w++)k+=256*N[D]>>>0,N[D]=k%C>>>0,k=k/C>>>0;if(k!==0)throw new Error("Non-zero carry");Y=w,F++}for(var y=M-Y;y!==M&&N[y]===0;)y++;for(var O=E.repeat(p);y<M;++y)O+=A.charAt(N[y]);return O}function e(c){if(typeof c!="string")throw new TypeError("Expected String");if(c.length===0)return new Uint8Array;var p=0;if(c[p]!==" "){for(var Y=0,F=0;c[p]===E;)Y++,p++;for(var s=(c.length-p)*h+1>>>0,M=new Uint8Array(s);c[p];){var N=g[c.charCodeAt(p)];if(N===255)return;for(var k=0,w=s-1;(N!==0||k<F)&&w!==-1;w--,k++)N+=C*M[w]>>>0,M[w]=N%256>>>0,N=N/256>>>0;if(N!==0)throw new Error("Non-zero carry");F=k,p++}if(c[p]!==" "){for(var D=s-F;D!==s&&M[D]===0;)D++;for(var y=new Uint8Array(Y+(s-D)),O=Y;D!==s;)y[O++]=M[D++];return y}}}function G(c){var p=e(c);if(p)return p;throw new Error(`Non-${I} character`)}return{encode:t,decodeUnsafe:e,decode:G}}var Se=Ke,He=Se;const vo=A=>{if(A instanceof Uint8Array&&A.constructor.name==="Uint8Array")return A;if(A instanceof ArrayBuffer)return new Uint8Array(A);if(ArrayBuffer.isView(A))return new Uint8Array(A.buffer,A.byteOffset,A.byteLength);throw new Error("Unknown type, must be binary type")},de=A=>new TextEncoder().encode(A),Oe=A=>new TextDecoder().decode(A);class me{constructor(I,g,B){this.name=I,this.prefix=g,this.baseEncode=B}encode(I){if(I instanceof Uint8Array)return`${this.prefix}${this.baseEncode(I)}`;throw Error("Unknown type, must be binary type")}}class Ze{constructor(I,g,B){if(this.name=I,this.prefix=g,g.codePointAt(0)===void 0)throw new Error("Invalid prefix character");this.prefixCodePoint=g.codePointAt(0),this.baseDecode=B}decode(I){if(typeof I=="string"){if(I.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(I)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(I.slice(this.prefix.length))}else throw Error("Can only multibase decode strings")}or(I){return Po(this,I)}}class Le{constructor(I){this.decoders=I}or(I){return Po(this,I)}decode(I){const g=I[0],B=this.decoders[g];if(B)return B.decode(I);throw RangeError(`Unable to decode multibase string ${JSON.stringify(I)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const Po=(A,I)=>new Le({...A.decoders||{[A.prefix]:A},...I.decoders||{[I.prefix]:I}});class fe{constructor(I,g,B,i){this.name=I,this.prefix=g,this.baseEncode=B,this.baseDecode=i,this.encoder=new me(I,g,B),this.decoder=new Ze(I,g,i)}encode(I){return this.encoder.encode(I)}decode(I){return this.decoder.decode(I)}}const pB=({name:A,prefix:I,encode:g,decode:B})=>new fe(A,I,g,B),rQ=({prefix:A,name:I,alphabet:g})=>{const{encode:B,decode:i}=He(g,I);return pB({prefix:A,name:I,encode:B,decode:o=>vo(i(o))})},je=(A,I,g,B)=>{const i={};for(let a=0;a<I.length;++a)i[I[a]]=a;let o=A.length;for(;A[o-1]==="=";)--o;const Q=new Uint8Array(o*g/8|0);let C=0,E=0,h=0;for(let a=0;a<o;++a){const t=i[A[a]];if(t===void 0)throw new SyntaxError(`Non-${B} character`);E=E<<g|t,C+=g,C>=8&&(C-=8,Q[h++]=255&E>>C)}if(C>=g||255&E<<8-C)throw new SyntaxError("Unexpected end of data");return Q},be=(A,I,g)=>{const B=I[I.length-1]==="=",i=(1<<g)-1;let o="",Q=0,C=0;for(let E=0;E<A.length;++E)for(C=C<<8|A[E],Q+=8;Q>g;)Q-=g,o+=I[i&C>>Q];if(Q&&(o+=I[i&C<<g-Q]),B)for(;o.length*g&7;)o+="=";return o},kI=({name:A,prefix:I,bitsPerChar:g,alphabet:B})=>pB({prefix:I,name:A,encode(i){return be(i,B,g)},decode(i){return je(i,B,g,A)}}),ue=pB({prefix:"\0",name:"identity",encode:A=>Oe(A),decode:A=>de(A)});var We=Object.freeze({__proto__:null,identity:ue});const Ve=kI({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1});var Te=Object.freeze({__proto__:null,base2:Ve});const xe=kI({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3});var Xe=Object.freeze({__proto__:null,base8:xe});const ze=rQ({prefix:"9",name:"base10",alphabet:"0123456789"});var ve=Object.freeze({__proto__:null,base10:ze});const Pe=kI({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),_e=kI({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4});var $e=Object.freeze({__proto__:null,base16:Pe,base16upper:_e});const AM=kI({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),IM=kI({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),gM=kI({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),QM=kI({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),BM=kI({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),CM=kI({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),EM=kI({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),iM=kI({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),DM=kI({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5});var oM=Object.freeze({__proto__:null,base32:AM,base32upper:IM,base32pad:gM,base32padupper:QM,base32hex:BM,base32hexupper:CM,base32hexpad:EM,base32hexpadupper:iM,base32z:DM});const aM=rQ({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),wM=rQ({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"});var GM=Object.freeze({__proto__:null,base36:aM,base36upper:wM});const kM=rQ({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),NM=rQ({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"});var cM=Object.freeze({__proto__:null,base58btc:kM,base58flickr:NM});const hM=kI({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),tM=kI({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),eM=kI({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),MM=kI({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6});var sM=Object.freeze({__proto__:null,base64:hM,base64pad:tM,base64url:eM,base64urlpad:MM});const _o=Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),nM=_o.reduce((A,I,g)=>(A[g]=I,A),[]),FM=_o.reduce((A,I,g)=>(A[I.codePointAt(0)]=g,A),[]);function yM(A){return A.reduce((I,g)=>(I+=nM[g],I),"")}function YM(A){const I=[];for(const g of A){const B=FM[g.codePointAt(0)];if(B===void 0)throw new Error(`Non-base256emoji character: ${g}`);I.push(B)}return new Uint8Array(I)}const JM=pB({prefix:"🚀",name:"base256emoji",encode:yM,decode:YM});var pM=Object.freeze({__proto__:null,base256emoji:JM}),rM=$o,ui=128,UM=127,RM=~UM,qM=Math.pow(2,31);function $o(A,I,g){I=I||[],g=g||0;for(var B=g;A>=qM;)I[g++]=A&255|ui,A/=128;for(;A&RM;)I[g++]=A&255|ui,A>>>=7;return I[g]=A|0,$o.bytes=g-B+1,I}var lM=YC,KM=128,Wi=127;function YC(A,B){var g=0,B=B||0,i=0,o=B,Q,C=A.length;do{if(o>=C)throw YC.bytes=0,new RangeError("Could not decode varint");Q=A[o++],g+=i<28?(Q&Wi)<<i:(Q&Wi)*Math.pow(2,i),i+=7}while(Q>=KM);return YC.bytes=o-B,g}var SM=Math.pow(2,7),HM=Math.pow(2,14),dM=Math.pow(2,21),OM=Math.pow(2,28),mM=Math.pow(2,35),ZM=Math.pow(2,42),LM=Math.pow(2,49),fM=Math.pow(2,56),jM=Math.pow(2,63),bM=function(A){return A<SM?1:A<HM?2:A<dM?3:A<OM?4:A<mM?5:A<ZM?6:A<LM?7:A<fM?8:A<jM?9:10},uM={encode:rM,decode:lM,encodingLength:bM},Aa=uM;const Vi=(A,I,g=0)=>(Aa.encode(A,I,g),I),Ti=A=>Aa.encodingLength(A),JC=(A,I)=>{const g=I.byteLength,B=Ti(A),i=B+Ti(g),o=new Uint8Array(i+g);return Vi(A,o,0),Vi(g,o,B),o.set(I,i),new WM(A,g,I,o)};class WM{constructor(I,g,B,i){this.code=I,this.size=g,this.digest=B,this.bytes=i}}const Ia=({name:A,code:I,encode:g})=>new VM(A,I,g);class VM{constructor(I,g,B){this.name=I,this.code=g,this.encode=B}digest(I){if(I instanceof Uint8Array){const g=this.encode(I);return g instanceof Uint8Array?JC(this.code,g):g.then(B=>JC(this.code,B))}else throw Error("Unknown type, must be binary type")}}const ga=A=>async I=>new Uint8Array(await crypto.subtle.digest(A,I)),TM=Ia({name:"sha2-256",code:18,encode:ga("SHA-256")}),xM=Ia({name:"sha2-512",code:19,encode:ga("SHA-512")});var XM=Object.freeze({__proto__:null,sha256:TM,sha512:xM});const Qa=0,zM="identity",Ba=vo,vM=A=>JC(Qa,Ba(A)),PM={code:Qa,name:zM,encode:Ba,digest:vM};var _M=Object.freeze({__proto__:null,identity:PM});new TextEncoder,new TextDecoder;const xi={...We,...Te,...Xe,...ve,...$e,...oM,...GM,...cM,...sM,...pM};({...XM,..._M});function $M(A=0){return globalThis.Buffer!=null&&globalThis.Buffer.allocUnsafe!=null?globalThis.Buffer.allocUnsafe(A):new Uint8Array(A)}function Ca(A,I,g,B){return{name:A,prefix:I,encoder:{name:A,prefix:I,encode:g},decoder:{decode:B}}}const Xi=Ca("utf8","u",A=>"u"+new TextDecoder("utf8").decode(A),A=>new TextEncoder().encode(A.substring(1))),AC=Ca("ascii","a",A=>{let I="a";for(let g=0;g<A.length;g++)I+=String.fromCharCode(A[g]);return I},A=>{A=A.substring(1);const I=$M(A.length);for(let g=0;g<A.length;g++)I[g]=A.charCodeAt(g);return I}),As={utf8:Xi,"utf-8":Xi,hex:xi.base16,latin1:AC,ascii:AC,binary:AC,...xi};function Is(A,I="utf8"){const g=As[I];if(!g)throw new Error(`Unsupported encoding "${I}"`);return(I==="utf8"||I==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?globalThis.Buffer.from(A,"utf8"):g.decoder.decode(`${g.prefix}${A}`)}const Ea="wc",gs=2,CE="core",wg=`${Ea}@${2}:${CE}:`,Qs={name:CE,logger:"error"},Bs={database:":memory:"},Cs="crypto",zi="client_ed25519_seed",Es=RA.ONE_DAY,is="keychain",Ds="0.3",os="messages",as="0.3",ws=RA.SIX_HOURS,Gs="publisher",ia="irn",ks="error",Ns="wss://relay.walletconnect.com",cs="relayer",hI={message:"relayer_message",connect:"relayer_connect",disconnect:"relayer_disconnect",error:"relayer_error",connection_stalled:"relayer_connection_stalled",transport_closed:"relayer_transport_closed",publish:"relayer_publish"},hs="_subscription",fQ={payload:"payload",connect:"connect",disconnect:"disconnect",error:"error"},vi=RA.ONE_SECOND,ts="2.4.0",es="0.3",jI={created:"subscription_created",deleted:"subscription_deleted",expired:"subscription_expired",disabled:"subscription_disabled",sync:"subscription_sync",resubscribed:"subscription_resubscribed"},Ms="subscription",ss="0.3",ns=RA.FIVE_SECONDS*1e3,Fs="pairing",ys="0.3",CQ={wc_pairingDelete:{req:{ttl:RA.ONE_DAY,prompt:!1,tag:1e3},res:{ttl:RA.ONE_DAY,prompt:!1,tag:1001}},wc_pairingPing:{req:{ttl:RA.THIRTY_SECONDS,prompt:!1,tag:1002},res:{ttl:RA.THIRTY_SECONDS,prompt:!1,tag:1003}},unregistered_method:{req:{ttl:RA.ONE_DAY,prompt:!1,tag:0},res:{ttl:RA.ONE_DAY,prompt:!1,tag:0}}},fI={created:"history_created",updated:"history_updated",deleted:"history_deleted",sync:"history_sync"},Ys="history",Js="0.3",ps="expirer",HI={created:"expirer_created",deleted:"expirer_deleted",expired:"expirer_expired",sync:"expirer_sync"},rs="0.3";class Us{constructor(I,g){this.core=I,this.logger=g,this.keychain=new Map,this.name=is,this.version=Ds,this.initialized=!1,this.storagePrefix=wg,this.init=async()=>{if(!this.initialized){const B=await this.getKeyChain();typeof B<"u"&&(this.keychain=B),this.initialized=!0}},this.has=B=>(this.isInitialized(),this.keychain.has(B)),this.set=async(B,i)=>{this.isInitialized(),this.keychain.set(B,i),await this.persist()},this.get=B=>{this.isInitialized();const i=this.keychain.get(B);if(typeof i>"u"){const{message:o}=yA("NO_MATCHING_KEY",`${this.name}: ${B}`);throw new Error(o)}return i},this.del=async B=>{this.isInitialized(),this.keychain.delete(B),await this.persist()},this.core=I,this.logger=VA.generateChildLogger(g,this.name)}get context(){return VA.getLoggerContext(this.logger)}get storageKey(){return this.storagePrefix+this.version+"//"+this.name}async setKeyChain(I){await this.core.storage.setItem(this.storageKey,Lo(I))}async getKeyChain(){const I=await this.core.storage.getItem(this.storageKey);return typeof I<"u"?fo(I):void 0}async persist(){await this.setKeyChain(this.keychain)}isInitialized(){if(!this.initialized){const{message:I}=yA("NOT_INITIALIZED",this.name);throw new Error(I)}}}class Rs{constructor(I,g,B){this.core=I,this.logger=g,this.name=Cs,this.initialized=!1,this.init=async()=>{this.initialized||(await this.keychain.init(),this.initialized=!0)},this.hasKeys=i=>(this.isInitialized(),this.keychain.has(i)),this.getClientId=async()=>{this.isInitialized();const i=await this.getClientSeed(),o=Mi(i);return Yo(o.publicKey)},this.generateKeyPair=()=>{this.isInitialized();const i=$h();return this.setPrivateKey(i.publicKey,i.privateKey)},this.signJWT=async i=>{this.isInitialized();const o=await this.getClientSeed(),Q=Mi(o),C=nC();return await ih(C,i,Es,Q)},this.generateSharedKey=(i,o,Q)=>{this.isInitialized();const C=this.getPrivateKey(i),E=At(C,o);return this.setSymKey(E,Q)},this.setSymKey=async(i,o)=>{this.isInitialized();const Q=o||It(i);return await this.keychain.set(Q,i),Q},this.deleteKeyPair=async i=>{this.isInitialized(),await this.keychain.del(i)},this.deleteSymKey=async i=>{this.isInitialized(),await this.keychain.del(i)},this.encode=async(i,o,Q)=>{this.isInitialized();const C=mo(Q),E=MN(o);if(qi(C)){const e=C.senderPublicKey,G=C.receiverPublicKey;i=await this.generateSharedKey(e,G)}const h=this.getSymKey(i),{type:a,senderPublicKey:t}=C;return Qt({type:a,symKey:h,message:E,senderPublicKey:t})},this.decode=async(i,o,Q)=>{this.isInitialized();const C=Et(o,Q);if(qi(C)){const a=C.receiverPublicKey,t=C.senderPublicKey;i=await this.generateSharedKey(a,t)}const E=this.getSymKey(i),h=Bt({symKey:E,encoded:o});return eN(h)},this.core=I,this.logger=VA.generateChildLogger(g,this.name),this.keychain=B||new Us(this.core,this.logger)}get context(){return VA.getLoggerContext(this.logger)}getPayloadType(I){const g=PC(I);return JQ(g.type)}async setPrivateKey(I,g){return await this.keychain.set(I,g),I}getPrivateKey(I){return this.keychain.get(I)}async getClientSeed(){let I="";try{I=this.keychain.get(zi)}catch{I=nC(),await this.keychain.set(zi,I)}return Is(I,"base16")}getSymKey(I){return this.keychain.get(I)}isInitialized(){if(!this.initialized){const{message:I}=yA("NOT_INITIALIZED",this.name);throw new Error(I)}}}let qs=class extends aN{constructor(I,g){super(I,g),this.logger=I,this.core=g,this.messages=new Map,this.name=os,this.version=as,this.initialized=!1,this.storagePrefix=wg,this.init=async()=>{if(!this.initialized){this.logger.trace("Initialized");try{const B=await this.getRelayerMessages();typeof B<"u"&&(this.messages=B),this.logger.debug(`Successfully Restored records for ${this.name}`),this.logger.trace({type:"method",method:"restore",size:this.messages.size})}catch(B){this.logger.debug(`Failed to Restore records for ${this.name}`),this.logger.error(B)}finally{this.initialized=!0}}},this.set=async(B,i)=>{this.isInitialized();const o=IB(i);let Q=this.messages.get(B);return typeof Q>"u"&&(Q={}),typeof Q[o]<"u"||(Q[o]=i,this.messages.set(B,Q),await this.persist()),o},this.get=B=>{this.isInitialized();let i=this.messages.get(B);return typeof i>"u"&&(i={}),i},this.has=(B,i)=>{this.isInitialized();const o=this.get(B),Q=IB(i);return typeof o[Q]<"u"},this.del=async B=>{this.isInitialized(),this.messages.delete(B),await this.persist()},this.logger=VA.generateChildLogger(I,this.name),this.core=g}get context(){return VA.getLoggerContext(this.logger)}get storageKey(){return this.storagePrefix+this.version+"//"+this.name}async setRelayerMessages(I){await this.core.storage.setItem(this.storageKey,Lo(I))}async getRelayerMessages(){const I=await this.core.storage.getItem(this.storageKey);return typeof I<"u"?fo(I):void 0}async persist(){await this.setRelayerMessages(this.messages)}isInitialized(){if(!this.initialized){const{message:I}=yA("NOT_INITIALIZED",this.name);throw new Error(I)}}};class ls extends wN{constructor(I,g){super(I,g),this.relayer=I,this.logger=g,this.events=new sI.EventEmitter,this.name=Gs,this.queue=new Map,this.publishTimeout=1e4,this.publish=async(B,i,o)=>{this.logger.debug("Publishing Payload"),this.logger.trace({type:"method",method:"publish",params:{topic:B,message:i,opts:o}});try{const Q=(o==null?void 0:o.ttl)||ws,C=FC(o),E=(o==null?void 0:o.prompt)||!1,h=(o==null?void 0:o.tag)||0,a={topic:B,message:i,opts:{ttl:Q,relay:C,prompt:E,tag:h}},t=IB(i);this.queue.set(t,a);try{await await jo(this.rpcPublish(B,i,Q,C,E,h),this.publishTimeout),this.relayer.events.emit(hI.publish,a)}catch{this.logger.debug("Publishing Payload stalled"),this.relayer.events.emit(hI.connection_stalled);return}this.onPublish(t,a),this.logger.debug("Successfully Published Payload"),this.logger.trace({type:"method",method:"publish",params:{topic:B,message:i,opts:o}})}catch(Q){throw this.logger.debug("Failed to Publish Payload"),this.logger.error(Q),Q}},this.on=(B,i)=>{this.events.on(B,i)},this.once=(B,i)=>{this.events.once(B,i)},this.off=(B,i)=>{this.events.off(B,i)},this.removeListener=(B,i)=>{this.events.removeListener(B,i)},this.relayer=I,this.logger=VA.generateChildLogger(g,this.name),this.registerEventListeners()}get context(){return VA.getLoggerContext(this.logger)}rpcPublish(I,g,B,i,o,Q){var C,E,h,a;const t={method:yC(i.protocol).publish,params:{topic:I,message:g,ttl:B,prompt:o,tag:Q}};return MI((C=t.params)==null?void 0:C.prompt)&&((E=t.params)==null||delete E.prompt),MI((h=t.params)==null?void 0:h.tag)&&((a=t.params)==null||delete a.tag),this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"message",direction:"outgoing",request:t}),this.relayer.provider.request(t)}onPublish(I,g){this.queue.delete(I)}checkQueue(){this.queue.forEach(async I=>{const{topic:g,message:B,opts:i}=I;await this.publish(g,B,i)})}registerEventListeners(){this.relayer.core.heartbeat.on(FQ.HEARTBEAT_EVENTS.pulse,()=>{this.checkQueue()})}}class Ks{constructor(){this.map=new Map,this.set=(I,g)=>{const B=this.get(I);this.exists(I,g)||this.map.set(I,[...B,g])},this.get=I=>this.map.get(I)||[],this.exists=(I,g)=>this.get(I).includes(g),this.delete=(I,g)=>{if(typeof g>"u"){this.map.delete(I);return}if(!this.map.has(I))return;const B=this.get(I);if(!this.exists(I,g))return;const i=B.filter(o=>o!==g);if(!i.length){this.map.delete(I);return}this.map.set(I,i)},this.clear=()=>{this.map.clear()}}get topics(){return Array.from(this.map.keys())}}var Ss=Object.defineProperty,Hs=Object.defineProperties,ds=Object.getOwnPropertyDescriptors,Pi=Object.getOwnPropertySymbols,Os=Object.prototype.hasOwnProperty,ms=Object.prototype.propertyIsEnumerable,_i=(A,I,g)=>I in A?Ss(A,I,{enumerable:!0,configurable:!0,writable:!0,value:g}):A[I]=g,jQ=(A,I)=>{for(var g in I||(I={}))Os.call(I,g)&&_i(A,g,I[g]);if(Pi)for(var g of Pi(I))ms.call(I,g)&&_i(A,g,I[g]);return A},IC=(A,I)=>Hs(A,ds(I));class Zs extends NN{constructor(I,g){super(I,g),this.relayer=I,this.logger=g,this.subscriptions=new Map,this.topicMap=new Ks,this.events=new sI.EventEmitter,this.name=Ms,this.version=ss,this.pending=new Map,this.cached=[],this.initialized=!1,this.pendingSubscriptionWatchLabel="pending_sub_watch_label",this.pollingInterval=20,this.storagePrefix=wg,this.subscribeTimeout=1e4,this.restartInProgress=!1,this.init=async()=>{this.initialized||(this.logger.trace("Initialized"),await this.restart(),this.registerEventListeners(),this.onEnable(),this.clientId=await this.relayer.core.crypto.getClientId())},this.subscribe=async(B,i)=>{await this.restartToComplete(),this.isInitialized(),this.logger.debug("Subscribing Topic"),this.logger.trace({type:"method",method:"subscribe",params:{topic:B,opts:i}});try{const o=FC(i),Q={topic:B,relay:o};this.pending.set(B,Q);const C=await this.rpcSubscribe(B,o);return this.onSubscribe(C,Q),this.logger.debug("Successfully Subscribed Topic"),this.logger.trace({type:"method",method:"subscribe",params:{topic:B,opts:i}}),C}catch(o){throw this.logger.debug("Failed to Subscribe Topic"),this.logger.error(o),o}},this.unsubscribe=async(B,i)=>{await this.restartToComplete(),this.isInitialized(),typeof(i==null?void 0:i.id)<"u"?await this.unsubscribeById(B,i.id,i):await this.unsubscribeByTopic(B,i)},this.isSubscribed=async B=>this.topics.includes(B)?!0:await new Promise((i,o)=>{const Q=new RA.Watch;Q.start(this.pendingSubscriptionWatchLabel);const C=setInterval(()=>{!this.pending.has(B)&&this.topics.includes(B)&&(clearInterval(C),Q.stop(this.pendingSubscriptionWatchLabel),i(!0)),Q.elapsed(this.pendingSubscriptionWatchLabel)>=ns&&(clearInterval(C),Q.stop(this.pendingSubscriptionWatchLabel),o(!1))},this.pollingInterval)}),this.on=(B,i)=>{this.events.on(B,i)},this.once=(B,i)=>{this.events.once(B,i)},this.off=(B,i)=>{this.events.off(B,i)},this.removeListener=(B,i)=>{this.events.removeListener(B,i)},this.restart=async()=>{this.restartInProgress=!0,await this.restore(),await this.reset(),this.restartInProgress=!1},this.relayer=I,this.logger=VA.generateChildLogger(g,this.name),this.clientId=""}get context(){return VA.getLoggerContext(this.logger)}get storageKey(){return this.storagePrefix+this.version+"//"+this.name}get length(){return this.subscriptions.size}get ids(){return Array.from(this.subscriptions.keys())}get values(){return Array.from(this.subscriptions.values())}get topics(){return this.topicMap.topics}hasSubscription(I,g){let B=!1;try{B=this.getSubscription(I).topic===g}catch{}return B}onEnable(){this.cached=[],this.initialized=!0}onDisable(){this.cached=this.values,this.subscriptions.clear(),this.topicMap.clear(),this.initialized=!1}async unsubscribeByTopic(I,g){const B=this.topicMap.get(I);await Promise.all(B.map(async i=>await this.unsubscribeById(I,i,g)))}async unsubscribeById(I,g,B){this.logger.debug("Unsubscribing Topic"),this.logger.trace({type:"method",method:"unsubscribe",params:{topic:I,id:g,opts:B}});try{const i=FC(B);await this.rpcUnsubscribe(I,g,i);const o=oI("USER_DISCONNECTED",`${this.name}, ${I}`);await this.onUnsubscribe(I,g,o),this.logger.debug("Successfully Unsubscribed Topic"),this.logger.trace({type:"method",method:"unsubscribe",params:{topic:I,id:g,opts:B}})}catch(i){throw this.logger.debug("Failed to Unsubscribe Topic"),this.logger.error(i),i}}async rpcSubscribe(I,g){const B={method:yC(g.protocol).subscribe,params:{topic:I}};this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:B});try{await await jo(this.relayer.provider.request(B),this.subscribeTimeout)}catch{this.logger.debug("Outgoing Relay Payload stalled"),this.relayer.events.emit(hI.connection_stalled)}return IB(I+this.clientId)}rpcUnsubscribe(I,g,B){const i={method:yC(B.protocol).unsubscribe,params:{topic:I,id:g}};return this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:i}),this.relayer.provider.request(i)}onSubscribe(I,g){this.setSubscription(I,IC(jQ({},g),{id:I})),this.pending.delete(g.topic)}onResubscribe(I,g){this.addSubscription(I,IC(jQ({},g),{id:I})),this.pending.delete(g.topic)}async onUnsubscribe(I,g,B){this.events.removeAllListeners(g),this.hasSubscription(g,I)&&this.deleteSubscription(g,B),await this.relayer.messages.del(I)}async setRelayerSubscriptions(I){await this.relayer.core.storage.setItem(this.storageKey,I)}async getRelayerSubscriptions(){return await this.relayer.core.storage.getItem(this.storageKey)}setSubscription(I,g){this.subscriptions.has(I)||(this.logger.debug("Setting subscription"),this.logger.trace({type:"method",method:"setSubscription",id:I,subscription:g}),this.addSubscription(I,g))}addSubscription(I,g){this.subscriptions.set(I,jQ({},g)),this.topicMap.set(g.topic,I),this.events.emit(jI.created,g)}getSubscription(I){this.logger.debug("Getting subscription"),this.logger.trace({type:"method",method:"getSubscription",id:I});const g=this.subscriptions.get(I);if(!g){const{message:B}=yA("NO_MATCHING_KEY",`${this.name}: ${I}`);throw new Error(B)}return g}deleteSubscription(I,g){this.logger.debug("Deleting subscription"),this.logger.trace({type:"method",method:"deleteSubscription",id:I,reason:g});const B=this.getSubscription(I);this.subscriptions.delete(I),this.topicMap.delete(B.topic,I),this.events.emit(jI.deleted,IC(jQ({},B),{reason:g}))}async persist(){await this.setRelayerSubscriptions(this.values),this.events.emit(jI.sync)}async reset(){this.cached.length&&await Promise.all(this.cached.map(async I=>await this.resubscribe(I))),this.events.emit(jI.resubscribed)}async restore(){try{const I=await this.getRelayerSubscriptions();if(typeof I>"u"||!I.length)return;if(this.subscriptions.size){const{message:g}=yA("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(g),this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),new Error(g)}this.cached=I,this.logger.debug(`Successfully Restored subscriptions for ${this.name}`),this.logger.trace({type:"method",method:"restore",subscriptions:this.values})}catch(I){this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),this.logger.error(I)}}async resubscribe(I){if(!this.ids.includes(I.id)){const{topic:g,relay:B}=I,i={topic:g,relay:B};this.pending.set(i.topic,i);const o=await this.rpcSubscribe(i.topic,i.relay);this.onResubscribe(o,i)}}async onConnect(){this.restartInProgress||(await this.restart(),this.onEnable())}onDisconnect(){this.onDisable()}checkPending(){this.relayer.transportExplicitlyClosed||this.pending.forEach(async I=>{const g=await this.rpcSubscribe(I.topic,I.relay);this.onSubscribe(g,I)})}registerEventListeners(){this.relayer.core.heartbeat.on(FQ.HEARTBEAT_EVENTS.pulse,()=>{this.checkPending()}),this.relayer.on(hI.connect,async()=>{await this.onConnect()}),this.relayer.on(hI.disconnect,()=>{this.onDisconnect()}),this.events.on(jI.created,async I=>{const g=jI.created;this.logger.info(`Emitting ${g}`),this.logger.debug({type:"event",event:g,data:I}),await this.persist()}),this.events.on(jI.deleted,async I=>{const g=jI.deleted;this.logger.info(`Emitting ${g}`),this.logger.debug({type:"event",event:g,data:I}),await this.persist()})}isInitialized(){if(!this.initialized){const{message:I}=yA("NOT_INITIALIZED",this.name);throw new Error(I)}}async restartToComplete(){this.restartInProgress&&await new Promise(I=>{const g=setInterval(()=>{this.restartInProgress||(clearInterval(g),I())},this.pollingInterval)})}}var Ls=Object.defineProperty,$i=Object.getOwnPropertySymbols,fs=Object.prototype.hasOwnProperty,js=Object.prototype.propertyIsEnumerable,AD=(A,I,g)=>I in A?Ls(A,I,{enumerable:!0,configurable:!0,writable:!0,value:g}):A[I]=g,bs=(A,I)=>{for(var g in I||(I={}))fs.call(I,g)&&AD(A,g,I[g]);if($i)for(var g of $i(I))js.call(I,g)&&AD(A,g,I[g]);return A};class us extends GN{constructor(I){super(I),this.protocol="wc",this.version=2,this.events=new sI.EventEmitter,this.name=cs,this.transportExplicitlyClosed=!1,this.initialized=!1,this.reconnecting=!1,this.core=I.core,this.logger=typeof I.logger<"u"&&typeof I.logger!="string"?VA.generateChildLogger(I.logger,this.name):NB(VA.getDefaultLoggerOptions({level:I.logger||ks})),this.messages=new qs(this.logger,I.core),this.subscriber=new Zs(this,this.logger),this.publisher=new ls(this,this.logger),this.relayUrl=(I==null?void 0:I.relayUrl)||Ns,this.projectId=I.projectId,this.provider={}}async init(){this.logger.trace("Initialized"),this.provider=await this.createProvider(),await Promise.all([this.messages.init(),this.transportOpen(),this.subscriber.init()]),this.registerEventListeners(),this.initialized=!0}get context(){return VA.getLoggerContext(this.logger)}get connected(){return this.provider.connection.connected}get connecting(){return this.provider.connection.connecting}async publish(I,g,B){this.isInitialized(),await this.publisher.publish(I,g,B),await this.recordMessageEvent({topic:I,message:g})}async subscribe(I,g){this.isInitialized();let B="";return await Promise.all([new Promise(i=>{this.subscriber.once(jI.created,o=>{o.topic===I&&i()})}),new Promise(async i=>{B=await this.subscriber.subscribe(I,g),i()})]),B}async unsubscribe(I,g){this.isInitialized(),await this.subscriber.unsubscribe(I,g)}on(I,g){this.events.on(I,g)}once(I,g){this.events.once(I,g)}off(I,g){this.events.off(I,g)}removeListener(I,g){this.events.removeListener(I,g)}async transportClose(){this.transportExplicitlyClosed=!0,this.connected&&(await this.provider.disconnect(),this.events.emit(hI.transport_closed))}async transportOpen(I){if(!this.reconnecting){this.relayUrl=I||this.relayUrl,this.transportExplicitlyClosed=!1,this.reconnecting=!0;try{await Promise.all([new Promise(g=>{this.initialized||g(),this.subscriber.once(jI.resubscribed,()=>{g()})}),await Promise.race([this.provider.connect(),new Promise((g,B)=>this.once(hI.transport_closed,()=>{B(new Error("closeTransport called before connection was established"))}))])])}catch(g){const B=g;if(!/socket hang up/i.test(B.message))throw g;this.logger.error(g),this.events.emit(hI.transport_closed)}finally{this.reconnecting=!1}}}async restartTransport(I){this.transportExplicitlyClosed||(await this.transportClose(),await new Promise(g=>setTimeout(g,vi)),await this.transportOpen(I))}async createProvider(){const I=await this.core.crypto.signJWT(this.relayUrl);return new Ye(new qe(st({sdkVersion:ts,protocol:this.protocol,version:this.version,relayUrl:this.relayUrl,projectId:this.projectId,auth:I})))}async recordMessageEvent(I){const{topic:g,message:B}=I;await this.messages.set(g,B)}async shouldIgnoreMessageEvent(I){const{topic:g,message:B}=I;return await this.subscriber.isSubscribed(g)?this.messages.has(g,B):!0}async onProviderPayload(I){if(this.logger.debug("Incoming Relay Payload"),this.logger.trace({type:"payload",direction:"incoming",payload:I}),QE(I)){if(!I.method.endsWith(hs))return;const g=I.params,{topic:B,message:i}=g.data,o={topic:B,message:i};this.logger.debug("Emitting Relayer Payload"),this.logger.trace(bs({type:"event",event:g.id},o)),this.events.emit(g.id,o),await this.acknowledgePayload(I),await this.onMessageEvent(o)}}async onMessageEvent(I){await this.shouldIgnoreMessageEvent(I)||(this.events.emit(hI.message,I),await this.recordMessageEvent(I))}async acknowledgePayload(I){const g=IE(I.id,!0);await this.provider.connection.send(g)}registerEventListeners(){this.provider.on(fQ.payload,I=>this.onProviderPayload(I)),this.provider.on(fQ.connect,()=>{this.events.emit(hI.connect)}),this.provider.on(fQ.disconnect,()=>{this.events.emit(hI.disconnect),this.attemptToReconnect()}),this.provider.on(fQ.error,I=>this.events.emit(hI.error,I)),this.events.on(hI.connection_stalled,async()=>{await this.restartTransport()})}attemptToReconnect(){this.transportExplicitlyClosed||setTimeout(async()=>{await this.transportOpen()},RA.toMiliseconds(vi))}isInitialized(){if(!this.initialized){const{message:I}=yA("NOT_INITIALIZED",this.name);throw new Error(I)}}}var Ws=Object.defineProperty,ID=Object.getOwnPropertySymbols,Vs=Object.prototype.hasOwnProperty,Ts=Object.prototype.propertyIsEnumerable,gD=(A,I,g)=>I in A?Ws(A,I,{enumerable:!0,configurable:!0,writable:!0,value:g}):A[I]=g,QD=(A,I)=>{for(var g in I||(I={}))Vs.call(I,g)&&gD(A,g,I[g]);if(ID)for(var g of ID(I))Ts.call(I,g)&&gD(A,g,I[g]);return A};class rB extends kN{constructor(I,g,B,i=wg,o=void 0){super(I,g,B,i),this.core=I,this.logger=g,this.name=B,this.map=new Map,this.version=es,this.cached=[],this.initialized=!1,this.storagePrefix=wg,this.init=async()=>{this.initialized||(this.logger.trace("Initialized"),await this.restore(),this.cached.forEach(Q=>{jt(Q)?this.map.set(Q.id,Q):bt(Q)?this.map.set(Q.topic,Q):this.getKey&&Q!==null&&!MI(Q)&&this.map.set(this.getKey(Q),Q)}),this.cached=[],this.initialized=!0)},this.set=async(Q,C)=>{this.isInitialized(),this.map.has(Q)?await this.update(Q,C):(this.logger.debug("Setting value"),this.logger.trace({type:"method",method:"set",key:Q,value:C}),this.map.set(Q,C),await this.persist())},this.get=Q=>(this.isInitialized(),this.logger.debug("Getting value"),this.logger.trace({type:"method",method:"get",key:Q}),this.getData(Q)),this.getAll=Q=>(this.isInitialized(),Q?this.values.filter(C=>Object.keys(Q).every(E=>gB(C[E],Q[E]))):this.values),this.update=async(Q,C)=>{this.isInitialized(),this.logger.debug("Updating value"),this.logger.trace({type:"method",method:"update",key:Q,update:C});const E=QD(QD({},this.getData(Q)),C);this.map.set(Q,E),await this.persist()},this.delete=async(Q,C)=>{this.isInitialized(),this.map.has(Q)&&(this.logger.debug("Deleting value"),this.logger.trace({type:"method",method:"delete",key:Q,reason:C}),this.map.delete(Q),await this.persist())},this.logger=VA.generateChildLogger(g,this.name),this.storagePrefix=i,this.getKey=o}get context(){return VA.getLoggerContext(this.logger)}get storageKey(){return this.storagePrefix+this.version+"//"+this.name}get length(){return this.map.size}get keys(){return Array.from(this.map.keys())}get values(){return Array.from(this.map.values())}async setDataStore(I){await this.core.storage.setItem(this.storageKey,I)}async getDataStore(){return await this.core.storage.getItem(this.storageKey)}getData(I){const g=this.map.get(I);if(!g){const{message:B}=yA("NO_MATCHING_KEY",`${this.name}: ${I}`);throw this.logger.error(B),new Error(B)}return g}async persist(){await this.setDataStore(this.values)}async restore(){try{const I=await this.getDataStore();if(typeof I>"u"||!I.length)return;if(this.map.size){const{message:g}=yA("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(g),new Error(g)}this.cached=I,this.logger.debug(`Successfully Restored value for ${this.name}`),this.logger.trace({type:"method",method:"restore",value:this.values})}catch(I){this.logger.debug(`Failed to Restore value for ${this.name}`),this.logger.error(I)}}isInitialized(){if(!this.initialized){const{message:I}=yA("NOT_INITIALIZED",this.name);throw new Error(I)}}}class xs{constructor(I,g){this.core=I,this.logger=g,this.name=Fs,this.version=ys,this.events=new sI,this.initialized=!1,this.storagePrefix=wg,this.ignoredPayloadTypes=[pg],this.registeredMethods=[],this.init=async()=>{this.initialized||(await this.pairings.init(),await this.cleanup(),this.registerRelayerEvents(),this.registerExpirerEvents(),this.initialized=!0,this.logger.trace("Initialized"))},this.register=({methods:B})=>{this.isInitialized(),this.registeredMethods=[...new Set([...this.registeredMethods,...B])]},this.create=async()=>{this.isInitialized();const B=nC(),i=await this.core.crypto.setSymKey(B),o=bI(RA.FIVE_MINUTES),Q={protocol:ia},C={topic:i,expiry:o,relay:Q,active:!1},E=lt({protocol:this.core.protocol,version:this.core.version,topic:i,symKey:B,relay:Q});return await this.pairings.set(i,C),await this.core.relayer.subscribe(i),this.core.expirer.set(i,o),{topic:i,uri:E}},this.pair=async B=>{this.isInitialized(),this.isValidPair(B);const{topic:i,symKey:o,relay:Q}=Rt(B.uri),C=bI(RA.FIVE_MINUTES),E={topic:i,relay:Q,expiry:C,active:!1};return await this.pairings.set(i,E),await this.core.crypto.setSymKey(o,i),await this.core.relayer.subscribe(i,{relay:Q}),this.core.expirer.set(i,C),B.activatePairing&&await this.activate({topic:i}),E},this.activate=async({topic:B})=>{this.isInitialized();const i=bI(RA.THIRTY_DAYS);await this.pairings.update(B,{active:!0,expiry:i}),this.core.expirer.set(B,i)},this.ping=async B=>{this.isInitialized(),await this.isValidPing(B);const{topic:i}=B;if(this.pairings.keys.includes(i)){const o=await this.sendRequest(i,"wc_pairingPing",{}),{done:Q,resolve:C,reject:E}=yg();this.events.once(gI("pairing_ping",o),({error:h})=>{h?E(h):C()}),await Q()}},this.updateExpiry=async({topic:B,expiry:i})=>{this.isInitialized(),await this.pairings.update(B,{expiry:i})},this.updateMetadata=async({topic:B,metadata:i})=>{this.isInitialized(),await this.pairings.update(B,{peerMetadata:i})},this.getPairings=()=>(this.isInitialized(),this.pairings.values),this.disconnect=async B=>{this.isInitialized(),await this.isValidDisconnect(B);const{topic:i}=B;this.pairings.keys.includes(i)&&(await this.sendRequest(i,"wc_pairingDelete",oI("USER_DISCONNECTED")),await this.deletePairing(i))},this.sendRequest=async(B,i,o)=>{const Q=JB(i,o),C=await this.core.crypto.encode(B,Q),E=CQ[i].req;return this.core.history.set(B,Q),await this.core.relayer.publish(B,C,E),Q.id},this.sendResult=async(B,i,o)=>{const Q=IE(B,o),C=await this.core.crypto.encode(i,Q),E=await this.core.history.get(i,B),h=CQ[E.request.method].res;await this.core.relayer.publish(i,C,h),await this.core.history.resolve(Q)},this.sendError=async(B,i,o)=>{const Q=gE(B,o),C=await this.core.crypto.encode(i,Q),E=await this.core.history.get(i,B),h=CQ[E.request.method]?CQ[E.request.method].res:CQ.unregistered_method.res;await this.core.relayer.publish(i,C,h),await this.core.history.resolve(Q)},this.deletePairing=async(B,i)=>{await this.core.relayer.unsubscribe(B),await Promise.all([this.pairings.delete(B,oI("USER_DISCONNECTED")),this.core.crypto.deleteSymKey(B),i?Promise.resolve():this.core.expirer.del(B)])},this.cleanup=async()=>{const B=this.pairings.getAll().filter(i=>Cg(i.expiry));await Promise.all(B.map(i=>this.deletePairing(i.topic)))},this.onRelayEventRequest=B=>{const{topic:i,payload:o}=B,Q=o.method;if(this.pairings.keys.includes(i))switch(Q){case"wc_pairingPing":return this.onPairingPingRequest(i,o);case"wc_pairingDelete":return this.onPairingDeleteRequest(i,o);default:return this.onUnknownRpcMethodRequest(i,o)}},this.onRelayEventResponse=async B=>{const{topic:i,payload:o}=B,Q=(await this.core.history.get(i,o.id)).request.method;if(this.pairings.keys.includes(i))switch(Q){case"wc_pairingPing":return this.onPairingPingResponse(i,o);default:return this.onUnknownRpcMethodResponse(Q)}},this.onPairingPingRequest=async(B,i)=>{const{id:o}=i;try{this.isValidPing({topic:B}),await this.sendResult(o,B,!0),this.events.emit("pairing_ping",{id:o,topic:B})}catch(Q){await this.sendError(o,B,Q),this.logger.error(Q)}},this.onPairingPingResponse=(B,i)=>{const{id:o}=i;setTimeout(()=>{PI(i)?this.events.emit(gI("pairing_ping",o),{}):mI(i)&&this.events.emit(gI("pairing_ping",o),{error:i.error})},500)},this.onPairingDeleteRequest=async(B,i)=>{const{id:o}=i;try{this.isValidDisconnect({topic:B}),await this.sendResult(o,B,!0),await this.deletePairing(B),this.events.emit("pairing_delete",{id:o,topic:B})}catch(Q){await this.sendError(o,B,Q),this.logger.error(Q)}},this.onUnknownRpcMethodRequest=async(B,i)=>{const{id:o,method:Q}=i;try{if(this.registeredMethods.includes(Q))return;const C=oI("WC_METHOD_UNSUPPORTED",Q);await this.sendError(o,B,C),this.logger.error(C)}catch(C){await this.sendError(o,B,C),this.logger.error(C)}},this.onUnknownRpcMethodResponse=B=>{this.registeredMethods.includes(B)||this.logger.error(oI("WC_METHOD_UNSUPPORTED",B))},this.isValidPair=B=>{if(!FI(B)){const{message:i}=yA("MISSING_OR_INVALID",`pair() params: ${B}`);throw new Error(i)}if(!ft(B.uri)){const{message:i}=yA("MISSING_OR_INVALID",`pair() uri: ${B.uri}`);throw new Error(i)}},this.isValidPing=async B=>{if(!FI(B)){const{message:o}=yA("MISSING_OR_INVALID",`ping() params: ${B}`);throw new Error(o)}const{topic:i}=B;await this.isValidPairingTopic(i)},this.isValidDisconnect=async B=>{if(!FI(B)){const{message:o}=yA("MISSING_OR_INVALID",`disconnect() params: ${B}`);throw new Error(o)}const{topic:i}=B;await this.isValidPairingTopic(i)},this.isValidPairingTopic=async B=>{if(!aI(B,!1)){const{message:i}=yA("MISSING_OR_INVALID",`pairing topic should be a string: ${B}`);throw new Error(i)}if(!this.pairings.keys.includes(B)){const{message:i}=yA("NO_MATCHING_KEY",`pairing topic doesn't exist: ${B}`);throw new Error(i)}if(Cg(this.pairings.get(B).expiry)){await this.deletePairing(B);const{message:i}=yA("EXPIRED",`pairing topic: ${B}`);throw new Error(i)}},this.core=I,this.logger=VA.generateChildLogger(g,this.name),this.pairings=new rB(this.core,this.logger,this.name,this.storagePrefix)}get context(){return VA.getLoggerContext(this.logger)}isInitialized(){if(!this.initialized){const{message:I}=yA("NOT_INITIALIZED",this.name);throw new Error(I)}}registerRelayerEvents(){this.core.relayer.on(hI.message,async I=>{const{topic:g,message:B}=I;if(this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(B)))return;const i=await this.core.crypto.decode(g,B);QE(i)?(this.core.history.set(g,i),this.onRelayEventRequest({topic:g,payload:i})):BE(i)&&(await this.core.history.resolve(i),this.onRelayEventResponse({topic:g,payload:i}))})}registerExpirerEvents(){this.core.expirer.on(HI.expired,async I=>{const{topic:g}=uo(I.target);g&&this.pairings.keys.includes(g)&&(await this.deletePairing(g,!0),this.events.emit("pairing_expire",{topic:g}))})}}class Xs extends oN{constructor(I,g){super(I,g),this.core=I,this.logger=g,this.records=new Map,this.events=new sI.EventEmitter,this.name=Ys,this.version=Js,this.cached=[],this.initialized=!1,this.storagePrefix=wg,this.init=async()=>{this.initialized||(this.logger.trace("Initialized"),await this.restore(),this.cached.forEach(B=>this.records.set(B.id,B)),this.cached=[],this.registerEventListeners(),this.initialized=!0)},this.set=(B,i,o)=>{if(this.isInitialized(),this.logger.debug("Setting JSON-RPC request history record"),this.logger.trace({type:"method",method:"set",topic:B,request:i,chainId:o}),this.records.has(i.id))return;const Q={id:i.id,topic:B,request:{method:i.method,params:i.params||null},chainId:o};this.records.set(Q.id,Q),this.events.emit(fI.created,Q)},this.resolve=async B=>{if(this.isInitialized(),this.logger.debug("Updating JSON-RPC response history record"),this.logger.trace({type:"method",method:"update",response:B}),!this.records.has(B.id))return;const i=await this.getRecord(B.id);typeof i.response>"u"&&(i.response=mI(B)?{error:B.error}:{result:B.result},this.records.set(i.id,i),this.events.emit(fI.updated,i))},this.get=async(B,i)=>(this.isInitialized(),this.logger.debug("Getting record"),this.logger.trace({type:"method",method:"get",topic:B,id:i}),await this.getRecord(i)),this.delete=(B,i)=>{this.isInitialized(),this.logger.debug("Deleting record"),this.logger.trace({type:"method",method:"delete",id:i}),this.values.forEach(o=>{if(o.topic===B){if(typeof i<"u"&&o.id!==i)return;this.records.delete(o.id),this.events.emit(fI.deleted,o)}})},this.exists=async(B,i)=>(this.isInitialized(),this.records.has(i)?(await this.getRecord(i)).topic===B:!1),this.on=(B,i)=>{this.events.on(B,i)},this.once=(B,i)=>{this.events.once(B,i)},this.off=(B,i)=>{this.events.off(B,i)},this.removeListener=(B,i)=>{this.events.removeListener(B,i)},this.logger=VA.generateChildLogger(g,this.name)}get context(){return VA.getLoggerContext(this.logger)}get storageKey(){return this.storagePrefix+this.version+"//"+this.name}get size(){return this.records.size}get keys(){return Array.from(this.records.keys())}get values(){return Array.from(this.records.values())}get pending(){const I=[];return this.values.forEach(g=>{if(typeof g.response<"u")return;const B={topic:g.topic,request:JB(g.request.method,g.request.params,g.id),chainId:g.chainId};return I.push(B)}),I}async setJsonRpcRecords(I){await this.core.storage.setItem(this.storageKey,I)}async getJsonRpcRecords(){return await this.core.storage.getItem(this.storageKey)}getRecord(I){this.isInitialized();const g=this.records.get(I);if(!g){const{message:B}=yA("NO_MATCHING_KEY",`${this.name}: ${I}`);throw new Error(B)}return g}async persist(){await this.setJsonRpcRecords(this.values),this.events.emit(fI.sync)}async restore(){try{const I=await this.getJsonRpcRecords();if(typeof I>"u"||!I.length)return;if(this.records.size){const{message:g}=yA("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(g),new Error(g)}this.cached=I,this.logger.debug(`Successfully Restored records for ${this.name}`),this.logger.trace({type:"method",method:"restore",records:this.values})}catch(I){this.logger.debug(`Failed to Restore records for ${this.name}`),this.logger.error(I)}}registerEventListeners(){this.events.on(fI.created,I=>{const g=fI.created;this.logger.info(`Emitting ${g}`),this.logger.debug({type:"event",event:g,record:I}),this.persist()}),this.events.on(fI.updated,I=>{const g=fI.updated;this.logger.info(`Emitting ${g}`),this.logger.debug({type:"event",event:g,record:I}),this.persist()}),this.events.on(fI.deleted,I=>{const g=fI.deleted;this.logger.info(`Emitting ${g}`),this.logger.debug({type:"event",event:g,record:I}),this.persist()})}isInitialized(){if(!this.initialized){const{message:I}=yA("NOT_INITIALIZED",this.name);throw new Error(I)}}}class zs extends cN{constructor(I,g){super(I,g),this.core=I,this.logger=g,this.expirations=new Map,this.events=new sI.EventEmitter,this.name=ps,this.version=rs,this.cached=[],this.initialized=!1,this.storagePrefix=wg,this.init=async()=>{this.initialized||(this.logger.trace("Initialized"),await this.restore(),this.cached.forEach(B=>this.expirations.set(B.target,B)),this.cached=[],this.registerEventListeners(),this.initialized=!0)},this.has=B=>{try{const i=this.formatTarget(B);return typeof this.getExpiration(i)<"u"}catch{return!1}},this.set=(B,i)=>{this.isInitialized();const o=this.formatTarget(B),Q={target:o,expiry:i};this.expirations.set(o,Q),this.checkExpiry(o,Q),this.events.emit(HI.created,{target:o,expiration:Q})},this.get=B=>{this.isInitialized();const i=this.formatTarget(B);return this.getExpiration(i)},this.del=B=>{if(this.isInitialized(),this.has(B)){const i=this.formatTarget(B),o=this.getExpiration(i);this.expirations.delete(i),this.events.emit(HI.deleted,{target:i,expiration:o})}},this.on=(B,i)=>{this.events.on(B,i)},this.once=(B,i)=>{this.events.once(B,i)},this.off=(B,i)=>{this.events.off(B,i)},this.removeListener=(B,i)=>{this.events.removeListener(B,i)},this.logger=VA.generateChildLogger(g,this.name)}get context(){return VA.getLoggerContext(this.logger)}get storageKey(){return this.storagePrefix+this.version+"//"+this.name}get length(){return this.expirations.size}get keys(){return Array.from(this.expirations.keys())}get values(){return Array.from(this.expirations.values())}formatTarget(I){if(typeof I=="string")return nt(I);if(typeof I=="number")return Ft(I);const{message:g}=yA("UNKNOWN_TYPE",`Target type: ${typeof I}`);throw new Error(g)}async setExpirations(I){await this.core.storage.setItem(this.storageKey,I)}async getExpirations(){return await this.core.storage.getItem(this.storageKey)}async persist(){await this.setExpirations(this.values),this.events.emit(HI.sync)}async restore(){try{const I=await this.getExpirations();if(typeof I>"u"||!I.length)return;if(this.expirations.size){const{message:g}=yA("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(g),new Error(g)}this.cached=I,this.logger.debug(`Successfully Restored expirations for ${this.name}`),this.logger.trace({type:"method",method:"restore",expirations:this.values})}catch(I){this.logger.debug(`Failed to Restore expirations for ${this.name}`),this.logger.error(I)}}getExpiration(I){const g=this.expirations.get(I);if(!g){const{message:B}=yA("NO_MATCHING_KEY",`${this.name}: ${I}`);throw this.logger.error(B),new Error(B)}return g}checkExpiry(I,g){const{expiry:B}=g;RA.toMiliseconds(B)-Date.now()<=0&&this.expire(I,g)}expire(I,g){this.expirations.delete(I),this.events.emit(HI.expired,{target:I,expiration:g})}checkExpirations(){this.expirations.forEach((I,g)=>this.checkExpiry(g,I))}registerEventListeners(){this.core.heartbeat.on(FQ.HEARTBEAT_EVENTS.pulse,()=>this.checkExpirations()),this.events.on(HI.created,I=>{const g=HI.created;this.logger.info(`Emitting ${g}`),this.logger.debug({type:"event",event:g,data:I}),this.persist()}),this.events.on(HI.expired,I=>{const g=HI.expired;this.logger.info(`Emitting ${g}`),this.logger.debug({type:"event",event:g,data:I}),this.persist()}),this.events.on(HI.deleted,I=>{const g=HI.deleted;this.logger.info(`Emitting ${g}`),this.logger.debug({type:"event",event:g,data:I}),this.persist()})}isInitialized(){if(!this.initialized){const{message:I}=yA("NOT_INITIALIZED",this.name);throw new Error(I)}}}var vs=Object.defineProperty,BD=Object.getOwnPropertySymbols,Ps=Object.prototype.hasOwnProperty,_s=Object.prototype.propertyIsEnumerable,CD=(A,I,g)=>I in A?vs(A,I,{enumerable:!0,configurable:!0,writable:!0,value:g}):A[I]=g,ED=(A,I)=>{for(var g in I||(I={}))Ps.call(I,g)&&CD(A,g,I[g]);if(BD)for(var g of BD(I))_s.call(I,g)&&CD(A,g,I[g]);return A};let $s=class Da extends DN{constructor(I){super(I),this.protocol=Ea,this.version=gs,this.name=CE,this.events=new sI.EventEmitter,this.initialized=!1,this.on=(B,i)=>this.events.on(B,i),this.once=(B,i)=>this.events.once(B,i),this.off=(B,i)=>this.events.off(B,i),this.removeListener=(B,i)=>this.events.removeListener(B,i),this.projectId=I==null?void 0:I.projectId;const g=typeof(I==null?void 0:I.logger)<"u"&&typeof(I==null?void 0:I.logger)!="string"?I.logger:NB(VA.getDefaultLoggerOptions({level:(I==null?void 0:I.logger)||Qs.logger}));this.logger=VA.generateChildLogger(g,this.name),this.heartbeat=new FQ.HeartBeat,this.crypto=new Rs(this,this.logger,I==null?void 0:I.keychain),this.history=new Xs(this,this.logger),this.expirer=new zs(this,this.logger),this.storage=I!=null&&I.storage?I.storage:new xk(ED(ED({},Bs),I==null?void 0:I.storageOptions)),this.relayer=new us({core:this,logger:this.logger,relayUrl:I==null?void 0:I.relayUrl,projectId:this.projectId}),this.pairing=new xs(this,this.logger)}static async init(I){const g=new Da(I);return await g.initialize(),g}get context(){return VA.getLoggerContext(this.logger)}async start(){this.initialized||await this.initialize()}async initialize(){this.logger.trace("Initialized");try{await this.crypto.init(),await this.history.init(),await this.expirer.init(),await this.relayer.init(),await this.heartbeat.init(),await this.pairing.init(),this.initialized=!0,this.logger.info("Core Initialization Success")}catch(I){throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`,I),this.logger.error(I.message),I}}};const A0=$s,EE="wc",iE=2,DE="client",UB=`${EE}@${iE}:${DE}:`,XQ={name:DE,logger:"error",controller:!1,relayUrl:"wss://relay.walletconnect.com"},I0={session_proposal:"session_proposal",session_update:"session_update",session_extend:"session_extend",session_ping:"session_ping",session_delete:"session_delete",session_expire:"session_expire",session_request:"session_request",session_event:"session_event",proposal_expire:"proposal_expire"},g0={database:":memory:"},Q0={created:"history_created",updated:"history_updated",deleted:"history_deleted",sync:"history_sync"},B0="history",C0="0.3",oa="proposal",E0=RA.THIRTY_DAYS,aa="session",iQ=RA.SEVEN_DAYS,wa="engine",dg={wc_sessionPropose:{req:{ttl:RA.FIVE_MINUTES,prompt:!0,tag:1100},res:{ttl:RA.FIVE_MINUTES,prompt:!1,tag:1101}},wc_sessionSettle:{req:{ttl:RA.FIVE_MINUTES,prompt:!1,tag:1102},res:{ttl:RA.FIVE_MINUTES,prompt:!1,tag:1103}},wc_sessionUpdate:{req:{ttl:RA.ONE_DAY,prompt:!1,tag:1104},res:{ttl:RA.ONE_DAY,prompt:!1,tag:1105}},wc_sessionExtend:{req:{ttl:RA.ONE_DAY,prompt:!1,tag:1106},res:{ttl:RA.ONE_DAY,prompt:!1,tag:1107}},wc_sessionRequest:{req:{ttl:RA.FIVE_MINUTES,prompt:!0,tag:1108},res:{ttl:RA.FIVE_MINUTES,prompt:!1,tag:1109}},wc_sessionEvent:{req:{ttl:RA.FIVE_MINUTES,prompt:!0,tag:1110},res:{ttl:RA.FIVE_MINUTES,prompt:!1,tag:1111}},wc_sessionDelete:{req:{ttl:RA.ONE_DAY,prompt:!1,tag:1112},res:{ttl:RA.ONE_DAY,prompt:!1,tag:1113}},wc_sessionPing:{req:{ttl:RA.THIRTY_SECONDS,prompt:!1,tag:1114},res:{ttl:RA.THIRTY_SECONDS,prompt:!1,tag:1115}}},zQ={min:RA.FIVE_MINUTES,max:RA.SEVEN_DAYS},Ga="request";var i0=Object.defineProperty,D0=Object.defineProperties,o0=Object.getOwnPropertyDescriptors,iD=Object.getOwnPropertySymbols,a0=Object.prototype.hasOwnProperty,w0=Object.prototype.propertyIsEnumerable,DD=(A,I,g)=>I in A?i0(A,I,{enumerable:!0,configurable:!0,writable:!0,value:g}):A[I]=g,SI=(A,I)=>{for(var g in I||(I={}))a0.call(I,g)&&DD(A,g,I[g]);if(iD)for(var g of iD(I))w0.call(I,g)&&DD(A,g,I[g]);return A},gC=(A,I)=>D0(A,o0(I));class G0 extends tN{constructor(I){super(I),this.name=wa,this.events=new sI,this.initialized=!1,this.ignoredPayloadTypes=[pg],this.init=async()=>{this.initialized||(await this.cleanup(),this.registerRelayerEvents(),this.registerExpirerEvents(),this.client.core.pairing.register({methods:Object.keys(dg)}),this.initialized=!0)},this.connect=async g=>{this.isInitialized();const B=gC(SI({},g),{requiredNamespaces:g.requiredNamespaces||{},optionalNamespaces:g.optionalNamespaces||{}});await this.isValidConnect(B);const{pairingTopic:i,requiredNamespaces:o,optionalNamespaces:Q,sessionProperties:C,relays:E}=B;let h=i,a,t=!1;if(h&&(t=this.client.core.pairing.pairings.get(h).active),!h||!t){const{topic:M,uri:N}=await this.client.core.pairing.create();h=M,a=N}const e=await this.client.core.crypto.generateKeyPair(),G=SI({requiredNamespaces:o,optionalNamespaces:Q,relays:E??[{protocol:ia}],proposer:{publicKey:e,metadata:this.client.metadata}},C&&{sessionProperties:C}),{reject:c,resolve:p,done:Y}=yg();if(this.events.once(gI("session_connect"),async({error:M,session:N})=>{if(M)c(M);else if(N){N.self.publicKey=e;const k=gC(SI({},N),{requiredNamespaces:N.requiredNamespaces,optionalNamespaces:N.optionalNamespaces});await this.client.session.set(N.topic,k),await this.setExpiry(N.topic,N.expiry),h&&await this.client.core.pairing.updateMetadata({topic:h,metadata:N.peer.metadata}),p(k)}}),!h){const{message:M}=yA("NO_MATCHING_KEY",`connect() pairing topic: ${h}`);throw new Error(M)}const F=await this.sendRequest(h,"wc_sessionPropose",G),s=bI(RA.FIVE_MINUTES);return await this.setProposal(F,SI({id:F,expiry:s},G)),{uri:a,approval:Y}},this.pair=async g=>(this.isInitialized(),await this.client.core.pairing.pair(g)),this.approve=async g=>{this.isInitialized(),await this.isValidApprove(g);const{id:B,relayProtocol:i,namespaces:o,sessionProperties:Q}=g,C=this.client.proposal.get(B);let{pairingTopic:E,proposer:h,requiredNamespaces:a,optionalNamespaces:t}=C;DQ(a)||(a=dt(o,"approve()"));const e=await this.client.core.crypto.generateKeyPair(),G=h.publicKey,c=await this.client.core.crypto.generateSharedKey(e,G);E&&B&&(await this.client.core.pairing.updateMetadata({topic:E,metadata:h.metadata}),await this.sendResult(B,E,{relay:{protocol:i??"irn"},responderPublicKey:e}),await this.client.proposal.delete(B,oI("USER_DISCONNECTED")),await this.client.core.pairing.activate({topic:E}));const p=SI({relay:{protocol:i??"irn"},namespaces:o,requiredNamespaces:a,optionalNamespaces:t,controller:{publicKey:e,metadata:this.client.metadata},expiry:bI(iQ)},Q&&{sessionProperties:Q});await this.client.core.relayer.subscribe(c);const Y=await this.sendRequest(c,"wc_sessionSettle",p),{done:F,resolve:s,reject:M}=yg();this.events.once(gI("session_approve",Y),({error:k})=>{k?M(k):s(this.client.session.get(c))});const N=gC(SI({},p),{topic:c,acknowledged:!1,self:p.controller,peer:{publicKey:h.publicKey,metadata:h.metadata},controller:e});return await this.client.session.set(c,N),await this.setExpiry(c,bI(iQ)),{topic:c,acknowledged:F}},this.reject=async g=>{this.isInitialized(),await this.isValidReject(g);const{id:B,reason:i}=g,{pairingTopic:o}=this.client.proposal.get(B);o&&(await this.sendError(B,o,i),await this.client.proposal.delete(B,oI("USER_DISCONNECTED")))},this.update=async g=>{this.isInitialized(),await this.isValidUpdate(g);const{topic:B,namespaces:i}=g,o=await this.sendRequest(B,"wc_sessionUpdate",{namespaces:i}),{done:Q,resolve:C,reject:E}=yg();return this.events.once(gI("session_update",o),({error:h})=>{h?E(h):C()}),await this.client.session.update(B,{namespaces:i}),{acknowledged:Q}},this.extend=async g=>{this.isInitialized(),await this.isValidExtend(g);const{topic:B}=g,i=await this.sendRequest(B,"wc_sessionExtend",{}),{done:o,resolve:Q,reject:C}=yg();return this.events.once(gI("session_extend",i),({error:E})=>{E?C(E):Q()}),await this.setExpiry(B,bI(iQ)),{acknowledged:o}},this.request=async g=>{this.isInitialized(),await this.isValidRequest(g);const{chainId:B,request:i,topic:o,expiry:Q}=g,C=await this.sendRequest(o,"wc_sessionRequest",{request:i,chainId:B},Q),{done:E,resolve:h,reject:a}=yg(Q);return this.events.once(gI("session_request",C),({error:t,result:e})=>{t?a(t):h(e)}),await E()},this.respond=async g=>{this.isInitialized(),await this.isValidRespond(g);const{topic:B,response:i}=g,{id:o}=i;PI(i)?await this.sendResult(o,B,i.result):mI(i)&&await this.sendError(o,B,i.error),this.deletePendingSessionRequest(g.response.id,{message:"fulfilled",code:0})},this.ping=async g=>{this.isInitialized(),await this.isValidPing(g);const{topic:B}=g;if(this.client.session.keys.includes(B)){const i=await this.sendRequest(B,"wc_sessionPing",{}),{done:o,resolve:Q,reject:C}=yg();this.events.once(gI("session_ping",i),({error:E})=>{E?C(E):Q()}),await o()}else this.client.core.pairing.pairings.keys.includes(B)&&await this.client.core.pairing.ping({topic:B})},this.emit=async g=>{this.isInitialized(),await this.isValidEmit(g);const{topic:B,event:i,chainId:o}=g;await this.sendRequest(B,"wc_sessionEvent",{event:i,chainId:o})},this.disconnect=async g=>{this.isInitialized(),await this.isValidDisconnect(g);const{topic:B}=g;this.client.session.keys.includes(B)?(await this.sendRequest(B,"wc_sessionDelete",oI("USER_DISCONNECTED")),await this.deleteSession(B)):await this.client.core.pairing.disconnect({topic:B})},this.find=g=>(this.isInitialized(),this.client.session.getAll().filter(B=>Zt(B,g))),this.getPendingSessionRequests=()=>(this.isInitialized(),this.client.pendingRequest.getAll()),this.deleteSession=async(g,B)=>{const{self:i}=this.client.session.get(g);await this.client.core.relayer.unsubscribe(g),await Promise.all([this.client.session.delete(g,oI("USER_DISCONNECTED")),this.client.core.crypto.deleteKeyPair(i.publicKey),this.client.core.crypto.deleteSymKey(g),B?Promise.resolve():this.client.core.expirer.del(g)])},this.deleteProposal=async(g,B)=>{await Promise.all([this.client.proposal.delete(g,oI("USER_DISCONNECTED")),B?Promise.resolve():this.client.core.expirer.del(g)])},this.deletePendingSessionRequest=async(g,B,i=!1)=>{await Promise.all([this.client.pendingRequest.delete(g,B),i?Promise.resolve():this.client.core.expirer.del(g)])},this.setExpiry=async(g,B)=>{this.client.session.keys.includes(g)&&await this.client.session.update(g,{expiry:B}),this.client.core.expirer.set(g,B)},this.setProposal=async(g,B)=>{await this.client.proposal.set(g,B),this.client.core.expirer.set(g,B.expiry)},this.setPendingSessionRequest=async g=>{const B=dg.wc_sessionRequest.req.ttl,{id:i,topic:o,params:Q}=g;await this.client.pendingRequest.set(i,{id:i,topic:o,params:Q}),B&&this.client.core.expirer.set(i,bI(B))},this.sendRequest=async(g,B,i,o)=>{const Q=JB(B,i),C=await this.client.core.crypto.encode(g,Q),E=dg[B].req;return o&&(E.ttl=o),this.client.core.history.set(g,Q),this.client.core.relayer.publish(g,C,E),Q.id},this.sendResult=async(g,B,i)=>{const o=IE(g,i),Q=await this.client.core.crypto.encode(B,o),C=await this.client.core.history.get(B,g),E=dg[C.request.method].res;this.client.core.relayer.publish(B,Q,E),await this.client.core.history.resolve(o)},this.sendError=async(g,B,i)=>{const o=gE(g,i),Q=await this.client.core.crypto.encode(B,o),C=await this.client.core.history.get(B,g),E=dg[C.request.method].res;this.client.core.relayer.publish(B,Q,E),await this.client.core.history.resolve(o)},this.cleanup=async()=>{const g=[],B=[];this.client.session.getAll().forEach(i=>{Cg(i.expiry)&&g.push(i.topic)}),this.client.proposal.getAll().forEach(i=>{Cg(i.expiry)&&B.push(i.id)}),await Promise.all([...g.map(i=>this.deleteSession(i)),...B.map(i=>this.deleteProposal(i))])},this.onRelayEventRequest=g=>{const{topic:B,payload:i}=g,o=i.method;switch(o){case"wc_sessionPropose":return this.onSessionProposeRequest(B,i);case"wc_sessionSettle":return this.onSessionSettleRequest(B,i);case"wc_sessionUpdate":return this.onSessionUpdateRequest(B,i);case"wc_sessionExtend":return this.onSessionExtendRequest(B,i);case"wc_sessionPing":return this.onSessionPingRequest(B,i);case"wc_sessionDelete":return this.onSessionDeleteRequest(B,i);case"wc_sessionRequest":return this.onSessionRequest(B,i);case"wc_sessionEvent":return this.onSessionEventRequest(B,i);default:return this.client.logger.info(`Unsupported request method ${o}`)}},this.onRelayEventResponse=async g=>{const{topic:B,payload:i}=g,o=(await this.client.core.history.get(B,i.id)).request.method;switch(o){case"wc_sessionPropose":return this.onSessionProposeResponse(B,i);case"wc_sessionSettle":return this.onSessionSettleResponse(B,i);case"wc_sessionUpdate":return this.onSessionUpdateResponse(B,i);case"wc_sessionExtend":return this.onSessionExtendResponse(B,i);case"wc_sessionPing":return this.onSessionPingResponse(B,i);case"wc_sessionRequest":return this.onSessionRequestResponse(B,i);default:return this.client.logger.info(`Unsupported response method ${o}`)}},this.onSessionProposeRequest=async(g,B)=>{const{params:i,id:o}=B;try{this.isValidConnect(SI({},B.params));const Q=bI(RA.FIVE_MINUTES),C=SI({id:o,pairingTopic:g,expiry:Q},i);await this.setProposal(o,C),this.client.events.emit("session_proposal",{id:o,params:C})}catch(Q){await this.sendError(o,g,Q),this.client.logger.error(Q)}},this.onSessionProposeResponse=async(g,B)=>{const{id:i}=B;if(PI(B)){const{result:o}=B;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",result:o});const Q=this.client.proposal.get(i);this.client.logger.trace({type:"method",method:"onSessionProposeResponse",proposal:Q});const C=Q.proposer.publicKey;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",selfPublicKey:C});const E=o.responderPublicKey;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",peerPublicKey:E});const h=await this.client.core.crypto.generateSharedKey(C,E);this.client.logger.trace({type:"method",method:"onSessionProposeResponse",sessionTopic:h});const a=await this.client.core.relayer.subscribe(h);this.client.logger.trace({type:"method",method:"onSessionProposeResponse",subscriptionId:a}),await this.client.core.pairing.activate({topic:g})}else mI(B)&&(await this.client.proposal.delete(i,oI("USER_DISCONNECTED")),this.events.emit(gI("session_connect"),{error:B.error}))},this.onSessionSettleRequest=async(g,B)=>{const{id:i,params:o}=B;try{this.isValidSessionSettleRequest(o);const{relay:Q,controller:C,expiry:E,namespaces:h,requiredNamespaces:a,optionalNamespaces:t,sessionProperties:e}=B.params,G=SI({topic:g,relay:Q,expiry:E,namespaces:h,acknowledged:!0,requiredNamespaces:a,optionalNamespaces:t,controller:C.publicKey,self:{publicKey:"",metadata:this.client.metadata},peer:{publicKey:C.publicKey,metadata:C.metadata}},e&&{sessionProperties:e});await this.sendResult(B.id,g,!0),this.events.emit(gI("session_connect"),{session:G})}catch(Q){await this.sendError(i,g,Q),this.client.logger.error(Q)}},this.onSessionSettleResponse=async(g,B)=>{const{id:i}=B;PI(B)?(await this.client.session.update(g,{acknowledged:!0}),this.events.emit(gI("session_approve",i),{})):mI(B)&&(await this.client.session.delete(g,oI("USER_DISCONNECTED")),this.events.emit(gI("session_approve",i),{error:B.error}))},this.onSessionUpdateRequest=async(g,B)=>{const{params:i,id:o}=B;try{this.isValidUpdate(SI({topic:g},i)),await this.client.session.update(g,{namespaces:i.namespaces}),await this.sendResult(o,g,!0),this.client.events.emit("session_update",{id:o,topic:g,params:i})}catch(Q){await this.sendError(o,g,Q),this.client.logger.error(Q)}},this.onSessionUpdateResponse=(g,B)=>{const{id:i}=B;PI(B)?this.events.emit(gI("session_update",i),{}):mI(B)&&this.events.emit(gI("session_update",i),{error:B.error})},this.onSessionExtendRequest=async(g,B)=>{const{id:i}=B;try{this.isValidExtend({topic:g}),await this.setExpiry(g,bI(iQ)),await this.sendResult(i,g,!0),this.client.events.emit("session_extend",{id:i,topic:g})}catch(o){await this.sendError(i,g,o),this.client.logger.error(o)}},this.onSessionExtendResponse=(g,B)=>{const{id:i}=B;PI(B)?this.events.emit(gI("session_extend",i),{}):mI(B)&&this.events.emit(gI("session_extend",i),{error:B.error})},this.onSessionPingRequest=async(g,B)=>{const{id:i}=B;try{this.isValidPing({topic:g}),await this.sendResult(i,g,!0),this.client.events.emit("session_ping",{id:i,topic:g})}catch(o){await this.sendError(i,g,o),this.client.logger.error(o)}},this.onSessionPingResponse=(g,B)=>{const{id:i}=B;setTimeout(()=>{PI(B)?this.events.emit(gI("session_ping",i),{}):mI(B)&&this.events.emit(gI("session_ping",i),{error:B.error})},500)},this.onSessionDeleteRequest=async(g,B)=>{const{id:i}=B;try{this.isValidDisconnect({topic:g,reason:B.params}),this.client.core.relayer.once(hI.publish,async()=>{await this.deleteSession(g)}),await this.sendResult(i,g,!0),this.client.events.emit("session_delete",{id:i,topic:g})}catch(o){await this.sendError(i,g,o),this.client.logger.error(o)}},this.onSessionRequest=async(g,B)=>{const{id:i,params:o}=B;try{this.isValidRequest(SI({topic:g},o)),await this.setPendingSessionRequest({id:i,topic:g,params:o}),this.client.events.emit("session_request",{id:i,topic:g,params:o})}catch(Q){await this.sendError(i,g,Q),this.client.logger.error(Q)}},this.onSessionRequestResponse=(g,B)=>{const{id:i}=B;PI(B)?this.events.emit(gI("session_request",i),{result:B.result}):mI(B)&&this.events.emit(gI("session_request",i),{error:B.error})},this.onSessionEventRequest=async(g,B)=>{const{id:i,params:o}=B;try{this.isValidEmit(SI({topic:g},o)),this.client.events.emit("session_event",{id:i,topic:g,params:o})}catch(Q){await this.sendError(i,g,Q),this.client.logger.error(Q)}},this.isValidConnect=async g=>{if(!FI(g)){const{message:E}=yA("MISSING_OR_INVALID",`connect() params: ${JSON.stringify(g)}`);throw new Error(E)}const{pairingTopic:B,requiredNamespaces:i,optionalNamespaces:o,sessionProperties:Q,relays:C}=g;if(MI(B)||await this.isValidPairingTopic(B),!vt(C,!0)){const{message:E}=yA("MISSING_OR_INVALID",`connect() relays: ${C}`);throw new Error(E)}!MI(i)&&DQ(i)!==0&&this.validateNamespaces(i,"requiredNamespaces"),!MI(o)&&DQ(o)!==0&&this.validateNamespaces(o,"optionalNamespaces"),MI(Q)||this.validateSessionProps(Q,"sessionProperties")},this.validateNamespaces=(g,B)=>{const i=zt(g,"connect()",B);if(i)throw new Error(i.message)},this.isValidApprove=async g=>{if(!FI(g))throw new Error(yA("MISSING_OR_INVALID",`approve() params: ${g}`).message);const{id:B,namespaces:i,relayProtocol:o,sessionProperties:Q}=g;await this.isValidProposalId(B);const C=this.client.proposal.get(B),E=xQ(i,"approve()");if(E)throw new Error(E.message);const h=$B(C.requiredNamespaces,i,"approve()","requiredNamespaces");if(h)throw new Error(h.message);if(!aI(o,!0)){const{message:a}=yA("MISSING_OR_INVALID",`approve() relayProtocol: ${o}`);throw new Error(a)}if(Object.keys(i).length>Object.keys(C.requiredNamespaces).length){const a=Object.keys(C.optionalNamespaces).filter(G=>i[G]),t={};for(const G in C.optionalNamespaces)a.includes(G)&&(t[G]=C.optionalNamespaces[G]);const e=$B(t,i,"approve()","optionalNamespaces");if(e)throw new Error(e.message)}MI(Q)||this.validateSessionProps(Q,"sessionProperties")},this.isValidReject=async g=>{if(!FI(g)){const{message:o}=yA("MISSING_OR_INVALID",`reject() params: ${g}`);throw new Error(o)}const{id:B,reason:i}=g;if(await this.isValidProposalId(B),!_t(i)){const{message:o}=yA("MISSING_OR_INVALID",`reject() reason: ${JSON.stringify(i)}`);throw new Error(o)}},this.isValidSessionSettleRequest=g=>{if(!FI(g)){const{message:h}=yA("MISSING_OR_INVALID",`onSessionSettleRequest() params: ${g}`);throw new Error(h)}const{relay:B,controller:i,namespaces:o,expiry:Q}=g;if(!Vo(B)){const{message:h}=yA("MISSING_OR_INVALID","onSessionSettleRequest() relay protocol should be a string");throw new Error(h)}const C=ut(i,"onSessionSettleRequest()");if(C)throw new Error(C.message);const E=xQ(o,"onSessionSettleRequest()");if(E)throw new Error(E.message);if(Cg(Q)){const{message:h}=yA("EXPIRED","onSessionSettleRequest()");throw new Error(h)}},this.isValidUpdate=async g=>{if(!FI(g)){const{message:E}=yA("MISSING_OR_INVALID",`update() params: ${g}`);throw new Error(E)}const{topic:B,namespaces:i}=g;await this.isValidSessionTopic(B);const o=this.client.session.get(B),Q=xQ(i,"update()");if(Q)throw new Error(Q.message);const C=$B(o.requiredNamespaces,i,"update()","requiredNamespaces");if(C)throw new Error(C.message)},this.isValidExtend=async g=>{if(!FI(g)){const{message:i}=yA("MISSING_OR_INVALID",`extend() params: ${g}`);throw new Error(i)}const{topic:B}=g;await this.isValidSessionTopic(B)},this.isValidRequest=async g=>{if(!FI(g)){const{message:E}=yA("MISSING_OR_INVALID",`request() params: ${g}`);throw new Error(E)}const{topic:B,request:i,chainId:o,expiry:Q}=g;await this.isValidSessionTopic(B);const{namespaces:C}=this.client.session.get(B);if(!mi(C,o)){const{message:E}=yA("MISSING_OR_INVALID",`request() chainId: ${o}`);throw new Error(E)}if(!$t(i)){const{message:E}=yA("MISSING_OR_INVALID",`request() ${JSON.stringify(i)}`);throw new Error(E)}if(!ge(C,o,i.method)){const{message:E}=yA("MISSING_OR_INVALID",`request() method: ${i.method}`);throw new Error(E)}if(Q&&!Be(Q,zQ)){const{message:E}=yA("MISSING_OR_INVALID",`request() expiry: ${Q}. Expiry must be a number (in seconds) between ${zQ.min} and ${zQ.max}`);throw new Error(E)}},this.isValidRespond=async g=>{if(!FI(g)){const{message:o}=yA("MISSING_OR_INVALID",`respond() params: ${g}`);throw new Error(o)}const{topic:B,response:i}=g;if(await this.isValidSessionTopic(B),!Ae(i)){const{message:o}=yA("MISSING_OR_INVALID",`respond() response: ${JSON.stringify(i)}`);throw new Error(o)}},this.isValidPing=async g=>{if(!FI(g)){const{message:i}=yA("MISSING_OR_INVALID",`ping() params: ${g}`);throw new Error(i)}const{topic:B}=g;await this.isValidSessionOrPairingTopic(B)},this.isValidEmit=async g=>{if(!FI(g)){const{message:C}=yA("MISSING_OR_INVALID",`emit() params: ${g}`);throw new Error(C)}const{topic:B,event:i,chainId:o}=g;await this.isValidSessionTopic(B);const{namespaces:Q}=this.client.session.get(B);if(!mi(Q,o)){const{message:C}=yA("MISSING_OR_INVALID",`emit() chainId: ${o}`);throw new Error(C)}if(!Ie(i)){const{message:C}=yA("MISSING_OR_INVALID",`emit() event: ${JSON.stringify(i)}`);throw new Error(C)}if(!Qe(Q,o,i.name)){const{message:C}=yA("MISSING_OR_INVALID",`emit() event: ${JSON.stringify(i)}`);throw new Error(C)}},this.isValidDisconnect=async g=>{if(!FI(g)){const{message:i}=yA("MISSING_OR_INVALID",`disconnect() params: ${g}`);throw new Error(i)}const{topic:B}=g;await this.isValidSessionOrPairingTopic(B)},this.validateSessionProps=(g,B)=>{Object.values(g).forEach(i=>{if(!aI(i,!1)){const{message:o}=yA("MISSING_OR_INVALID",`${B} must be in Record<string, string> format. Received: ${JSON.stringify(i)}`);throw new Error(o)}})}}isInitialized(){if(!this.initialized){const{message:I}=yA("NOT_INITIALIZED",this.name);throw new Error(I)}}registerRelayerEvents(){this.client.core.relayer.on(hI.message,async I=>{const{topic:g,message:B}=I;if(this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(B)))return;const i=await this.client.core.crypto.decode(g,B);QE(i)?(this.client.core.history.set(g,i),this.onRelayEventRequest({topic:g,payload:i})):BE(i)&&(await this.client.core.history.resolve(i),this.onRelayEventResponse({topic:g,payload:i}))})}registerExpirerEvents(){this.client.core.expirer.on(HI.expired,async I=>{const{topic:g,id:B}=uo(I.target);if(B&&this.client.pendingRequest.keys.includes(B))return await this.deletePendingSessionRequest(B,yA("EXPIRED"),!0);g?this.client.session.keys.includes(g)&&(await this.deleteSession(g,!0),this.client.events.emit("session_expire",{topic:g})):B&&(await this.deleteProposal(B,!0),this.client.events.emit("proposal_expire",{id:B}))})}isValidPairingTopic(I){if(!aI(I,!1)){const{message:g}=yA("MISSING_OR_INVALID",`pairing topic should be a string: ${I}`);throw new Error(g)}if(!this.client.core.pairing.pairings.keys.includes(I)){const{message:g}=yA("NO_MATCHING_KEY",`pairing topic doesn't exist: ${I}`);throw new Error(g)}if(Cg(this.client.core.pairing.pairings.get(I).expiry)){const{message:g}=yA("EXPIRED",`pairing topic: ${I}`);throw new Error(g)}}async isValidSessionTopic(I){if(!aI(I,!1)){const{message:g}=yA("MISSING_OR_INVALID",`session topic should be a string: ${I}`);throw new Error(g)}if(!this.client.session.keys.includes(I)){const{message:g}=yA("NO_MATCHING_KEY",`session topic doesn't exist: ${I}`);throw new Error(g)}if(Cg(this.client.session.get(I).expiry)){await this.deleteSession(I);const{message:g}=yA("EXPIRED",`session topic: ${I}`);throw new Error(g)}}async isValidSessionOrPairingTopic(I){if(this.client.session.keys.includes(I))await this.isValidSessionTopic(I);else if(this.client.core.pairing.pairings.keys.includes(I))this.isValidPairingTopic(I);else if(aI(I,!1)){const{message:g}=yA("NO_MATCHING_KEY",`session or pairing topic doesn't exist: ${I}`);throw new Error(g)}else{const{message:g}=yA("MISSING_OR_INVALID",`session or pairing topic should be a string: ${I}`);throw new Error(g)}}async isValidProposalId(I){if(!Pt(I)){const{message:g}=yA("MISSING_OR_INVALID",`proposal id should be a number: ${I}`);throw new Error(g)}if(!this.client.proposal.keys.includes(I)){const{message:g}=yA("NO_MATCHING_KEY",`proposal id doesn't exist: ${I}`);throw new Error(g)}if(Cg(this.client.proposal.get(I).expiry)){await this.deleteProposal(I);const{message:g}=yA("EXPIRED",`proposal id: ${I}`);throw new Error(g)}}}class k0 extends rB{constructor(I,g){super(I,g,oa,UB),this.core=I,this.logger=g}}class N0 extends rB{constructor(I,g){super(I,g,aa,UB),this.core=I,this.logger=g}}let c0=class extends rB{constructor(I,g){super(I,g,Ga,UB),this.core=I,this.logger=g}},ka=class Na extends hN{constructor(I){super(I),this.protocol=EE,this.version=iE,this.name=XQ.name,this.events=new sI.EventEmitter,this.on=(B,i)=>this.events.on(B,i),this.once=(B,i)=>this.events.once(B,i),this.off=(B,i)=>this.events.off(B,i),this.removeListener=(B,i)=>this.events.removeListener(B,i),this.removeAllListeners=B=>this.events.removeAllListeners(B),this.connect=async B=>{try{return await this.engine.connect(B)}catch(i){throw this.logger.error(i.message),i}},this.pair=async B=>{try{return await this.engine.pair(B)}catch(i){throw this.logger.error(i.message),i}},this.approve=async B=>{try{return await this.engine.approve(B)}catch(i){throw this.logger.error(i.message),i}},this.reject=async B=>{try{return await this.engine.reject(B)}catch(i){throw this.logger.error(i.message),i}},this.update=async B=>{try{return await this.engine.update(B)}catch(i){throw this.logger.error(i.message),i}},this.extend=async B=>{try{return await this.engine.extend(B)}catch(i){throw this.logger.error(i.message),i}},this.request=async B=>{try{return await this.engine.request(B)}catch(i){throw this.logger.error(i.message),i}},this.respond=async B=>{try{return await this.engine.respond(B)}catch(i){throw this.logger.error(i.message),i}},this.ping=async B=>{try{return await this.engine.ping(B)}catch(i){throw this.logger.error(i.message),i}},this.emit=async B=>{try{return await this.engine.emit(B)}catch(i){throw this.logger.error(i.message),i}},this.disconnect=async B=>{try{return await this.engine.disconnect(B)}catch(i){throw this.logger.error(i.message),i}},this.find=B=>{try{return this.engine.find(B)}catch(i){throw this.logger.error(i.message),i}},this.getPendingSessionRequests=()=>{try{return this.engine.getPendingSessionRequests()}catch(B){throw this.logger.error(B.message),B}},this.name=(I==null?void 0:I.name)||XQ.name,this.metadata=(I==null?void 0:I.metadata)||ht();const g=typeof(I==null?void 0:I.logger)<"u"&&typeof(I==null?void 0:I.logger)!="string"?I.logger:NB(VA.getDefaultLoggerOptions({level:(I==null?void 0:I.logger)||XQ.logger}));this.core=(I==null?void 0:I.core)||new A0(I),this.logger=VA.generateChildLogger(g,this.name),this.session=new N0(this.core,this.logger),this.proposal=new k0(this.core,this.logger),this.pendingRequest=new c0(this.core,this.logger),this.engine=new G0(this)}static async init(I){const g=new Na(I);return await g.initialize(),g}get context(){return VA.getLoggerContext(this.logger)}get pairing(){return this.core.pairing.pairings}async initialize(){this.logger.trace("Initialized");try{await this.core.start(),await this.session.init(),await this.proposal.init(),await this.pendingRequest.init(),await this.engine.init(),this.logger.info("SignClient Initialization Success")}catch(I){throw this.logger.info("SignClient Initialization Failure"),this.logger.error(I.message),I}}};const h0=ka,t0=Object.freeze(Object.defineProperty({__proto__:null,ENGINE_CONTEXT:wa,ENGINE_RPC_OPTS:dg,HISTORY_CONTEXT:B0,HISTORY_EVENTS:Q0,HISTORY_STORAGE_VERSION:C0,PROPOSAL_CONTEXT:oa,PROPOSAL_EXPIRY:E0,REQUEST_CONTEXT:Ga,SESSION_CONTEXT:aa,SESSION_EXPIRY:iQ,SESSION_REQUEST_EXPIRY_BOUNDARIES:zQ,SIGN_CLIENT_CONTEXT:DE,SIGN_CLIENT_DEFAULT:XQ,SIGN_CLIENT_EVENTS:I0,SIGN_CLIENT_PROTOCOL:EE,SIGN_CLIENT_STORAGE_OPTIONS:g0,SIGN_CLIENT_STORAGE_PREFIX:UB,SIGN_CLIENT_VERSION:iE,SignClient:h0,default:ka},Symbol.toStringTag,{value:"Module"})),e0=MQ(t0);var oE={},PA={};Object.defineProperty(PA,"__esModule",{value:!0});var ca=PA.getLocalStorage=pa=PA.getLocalStorageOrThrow=Ja=PA.getCrypto=Ya=PA.getCryptoOrThrow=ya=PA.getLocation=Fa=PA.getLocationOrThrow=na=PA.getNavigator=sa=PA.getNavigatorOrThrow=Ma=PA.getDocument=ea=PA.getDocumentOrThrow=ta=PA.getFromWindowOrThrow=ha=PA.getFromWindow=void 0;function rg(A){let I;return typeof window<"u"&&typeof window[A]<"u"&&(I=window[A]),I}var ha=PA.getFromWindow=rg;function zg(A){const I=rg(A);if(!I)throw new Error(`${A} is not defined in Window`);return I}var ta=PA.getFromWindowOrThrow=zg;function M0(){return zg("document")}var ea=PA.getDocumentOrThrow=M0;function s0(){return rg("document")}var Ma=PA.getDocument=s0;function n0(){return zg("navigator")}var sa=PA.getNavigatorOrThrow=n0;function F0(){return rg("navigator")}var na=PA.getNavigator=F0;function y0(){return zg("location")}var Fa=PA.getLocationOrThrow=y0;function Y0(){return rg("location")}var ya=PA.getLocation=Y0;function J0(){return zg("crypto")}var Ya=PA.getCryptoOrThrow=J0;function p0(){return rg("crypto")}var Ja=PA.getCrypto=p0;function r0(){return zg("localStorage")}var pa=PA.getLocalStorageOrThrow=r0;function U0(){return rg("localStorage")}ca=PA.getLocalStorage=U0;Object.defineProperty(oE,"__esModule",{value:!0});var ra=oE.getWindowMetadata=void 0;const oD=PA;function R0(){let A,I;try{A=oD.getDocumentOrThrow(),I=oD.getLocationOrThrow()}catch{return null}function g(){const t=A.getElementsByTagName("link"),e=[];for(let G=0;G<t.length;G++){const c=t[G],p=c.getAttribute("rel");if(p&&p.toLowerCase().indexOf("icon")>-1){const Y=c.getAttribute("href");if(Y)if(Y.toLowerCase().indexOf("https:")===-1&&Y.toLowerCase().indexOf("http:")===-1&&Y.indexOf("//")!==0){let F=I.protocol+"//"+I.host;if(Y.indexOf("/")===0)F+=Y;else{const s=I.pathname.split("/");s.pop();const M=s.join("/");F+=M+"/"+Y}e.push(F)}else if(Y.indexOf("//")===0){const F=I.protocol+Y;e.push(F)}else e.push(Y)}}return e}function B(...t){const e=A.getElementsByTagName("meta");for(let G=0;G<e.length;G++){const c=e[G],p=["itemprop","property","name"].map(Y=>c.getAttribute(Y)).filter(Y=>Y?t.includes(Y):!1);if(p.length&&p){const Y=c.getAttribute("content");if(Y)return Y}}return""}function i(){let t=B("name","og:site_name","og:title","twitter:title");return t||(t=A.title),t}function o(){return B("description","og:description","twitter:description","keywords")}const Q=i(),C=o(),E=I.origin,h=g();return{description:C,url:E,icons:h,name:Q}}ra=oE.getWindowMetadata=R0;var q0=globalThis&&globalThis.__spreadArrays||function(){for(var A=0,I=0,g=arguments.length;I<g;I++)A+=arguments[I].length;for(var B=Array(A),i=0,I=0;I<g;I++)for(var o=arguments[I],Q=0,C=o.length;Q<C;Q++,i++)B[i]=o[Q];return B},l0=function(){function A(I,g,B){this.name=I,this.version=g,this.os=B,this.type="browser"}return A}(),K0=function(){function A(I){this.version=I,this.type="node",this.name="node",this.os=process.platform}return A}(),S0=function(){function A(I,g,B,i){this.name=I,this.version=g,this.os=B,this.bot=i,this.type="bot-device"}return A}(),H0=function(){function A(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null}return A}(),d0=function(){function A(){this.type="react-native",this.name="react-native",this.version=null,this.os=null}return A}(),O0=/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,m0=/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,aD=3,Z0=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FBAV\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["searchbot",O0]],wD=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function L0(A){return A?GD(A):typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"?new d0:typeof navigator<"u"?GD(navigator.userAgent):b0()}function f0(A){return A!==""&&Z0.reduce(function(I,g){var B=g[0],i=g[1];if(I)return I;var o=i.exec(A);return!!o&&[B,o]},!1)}function GD(A){var I=f0(A);if(!I)return null;var g=I[0],B=I[1];if(g==="searchbot")return new H0;var i=B[1]&&B[1].split(/[._]/).slice(0,3);i?i.length<aD&&(i=q0(i,u0(aD-i.length))):i=[];var o=i.join("."),Q=j0(A),C=m0.exec(A);return C&&C[1]?new S0(g,o,Q,C[1]):new l0(g,o,Q)}function j0(A){for(var I=0,g=wD.length;I<g;I++){var B=wD[I],i=B[0],o=B[1],Q=o.exec(A);if(Q)return i}return null}function b0(){var A=typeof process<"u"&&process.version;return A?new K0(process.version.slice(1)):null}function u0(A){for(var I=[],g=0;g<A;g++)I.push("0");return I}function aE(A){return L0(A)}function RB(){const A=aE();return A&&A.os?A.os:void 0}function Ua(){const A=RB();return A?A.toLowerCase().includes("android"):!1}function Ra(){const A=RB();return A?A.toLowerCase().includes("ios")||A.toLowerCase().includes("mac")&&navigator.maxTouchPoints>1:!1}function W0(){return RB()?Ua()||Ra():!1}function qa(){const A=aE();return A&&A.name?A.name.toLowerCase()==="node":!1}function V0(){return!qa()&&!!la()}const T0=ha,x0=ta,X0=ea,z0=Ma,v0=sa,la=na,P0=Fa,_0=ya,$0=Ya,An=Ja,In=pa,qB=ca;function gn(){return ra()}function Qn(A){if(typeof A!="string")throw new Error(`Cannot safe json parse value of type ${typeof A}`);try{return JSON.parse(A)}catch{return A}}function Bn(A){return typeof A=="string"?A:JSON.stringify(A)}const Ka=Qn,Sa=Bn;function Ha(A,I){const g=Sa(I),B=qB();B&&B.setItem(A,g)}function Cn(A){let I=null,g=null;const B=qB();return B&&(g=B.getItem(A)),I=g&&Ka(g),I}function En(A){const I=qB();I&&I.removeItem(A)}const da="WALLETCONNECT_DEEPLINK_CHOICE";function Dn(A,I){const g=encodeURIComponent(A);return I.universalLink?`${I.universalLink}/wc?uri=${g}`:I.deepLink?`${I.deepLink}${I.deepLink.endsWith(":")?"//":"/"}wc?uri=${g}`:""}function on(A){const I=A.href.split("?")[0];Ha(da,Object.assign(Object.assign({},A),{href:I}))}function Oa(A,I){return A.filter(g=>g.name.toLowerCase().includes(I.toLowerCase()))[0]}function an(A,I){let g=A;return I&&(g=I.map(B=>Oa(A,B)).filter(Boolean)),g}const ma="https://registry.walletconnect.com";function wn(){return ma+"/api/v2/wallets"}function Gn(){return ma+"/api/v2/dapps"}function Za(A,I="mobile"){var g;return{name:A.name||"",shortName:A.metadata.shortName||"",color:A.metadata.colors.primary||"",logo:(g=A.image_url.sm)!==null&&g!==void 0?g:"",universalLink:A[I].universal||"",deepLink:A[I].native||""}}function kn(A,I="mobile"){return Object.values(A).filter(g=>!!g[I].universal||!!g[I].native).map(g=>Za(g,I))}const Nn=Object.freeze(Object.defineProperty({__proto__:null,detectEnv:aE,detectOS:RB,formatIOSMobile:Dn,formatMobileRegistry:kn,formatMobileRegistryEntry:Za,getClientMeta:gn,getCrypto:An,getCryptoOrThrow:$0,getDappRegistryUrl:Gn,getDocument:z0,getDocumentOrThrow:X0,getFromWindow:T0,getFromWindowOrThrow:x0,getLocal:Cn,getLocalStorage:qB,getLocalStorageOrThrow:In,getLocation:_0,getLocationOrThrow:P0,getMobileLinkRegistry:an,getMobileRegistryEntry:Oa,getNavigator:la,getNavigatorOrThrow:v0,getWalletRegistryUrl:wn,isAndroid:Ua,isBrowser:V0,isIOS:Ra,isMobile:W0,isNode:qa,mobileLinkChoiceKey:da,removeLocal:En,safeJsonParse:Ka,safeJsonStringify:Sa,saveMobileLinkInfo:on,setLocal:Ha},Symbol.toStringTag,{value:"Module"})),cn=MQ(Nn);var UQ={},hn=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},La={},kg={},tn={}.toString,wE=Array.isArray||function(A){return tn.call(A)=="[object Array]"},en=wE;function Mn(){try{var A=new Uint8Array(1);return A.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},A.foo()===42}catch{return!1}}ZA.TYPED_ARRAY_SUPPORT=Mn();var kD=ZA.TYPED_ARRAY_SUPPORT?2147483647:1073741823;function ZA(A,I,g){return!ZA.TYPED_ARRAY_SUPPORT&&!(this instanceof ZA)?new ZA(A,I,g):typeof A=="number"?fa(this,A):pn(this,A,I,g)}ZA.TYPED_ARRAY_SUPPORT&&(ZA.prototype.__proto__=Uint8Array.prototype,ZA.__proto__=Uint8Array,typeof Symbol<"u"&&Symbol.species&&ZA[Symbol.species]===ZA&&Object.defineProperty(ZA,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1}));function GE(A){if(A>=kD)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+kD.toString(16)+" bytes");return A|0}function sn(A){return A!==A}function Lg(A,I){var g;return ZA.TYPED_ARRAY_SUPPORT?(g=new Uint8Array(I),g.__proto__=ZA.prototype):(g=A,g===null&&(g=new ZA(I)),g.length=I),g}function fa(A,I){var g=Lg(A,I<0?0:GE(I)|0);if(!ZA.TYPED_ARRAY_SUPPORT)for(var B=0;B<I;++B)g[B]=0;return g}function nn(A,I){var g=ba(I)|0,B=Lg(A,g),i=B.write(I);return i!==g&&(B=B.slice(0,i)),B}function pC(A,I){for(var g=I.length<0?0:GE(I.length)|0,B=Lg(A,g),i=0;i<g;i+=1)B[i]=I[i]&255;return B}function Fn(A,I,g,B){if(g<0||I.byteLength<g)throw new RangeError("'offset' is out of bounds");if(I.byteLength<g+(B||0))throw new RangeError("'length' is out of bounds");var i;return g===void 0&&B===void 0?i=new Uint8Array(I):B===void 0?i=new Uint8Array(I,g):i=new Uint8Array(I,g,B),ZA.TYPED_ARRAY_SUPPORT?i.__proto__=ZA.prototype:i=pC(A,i),i}function yn(A,I){if(ZA.isBuffer(I)){var g=GE(I.length)|0,B=Lg(A,g);return B.length===0||I.copy(B,0,0,g),B}if(I){if(typeof ArrayBuffer<"u"&&I.buffer instanceof ArrayBuffer||"length"in I)return typeof I.length!="number"||sn(I.length)?Lg(A,0):pC(A,I);if(I.type==="Buffer"&&Array.isArray(I.data))return pC(A,I.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function ja(A,I){I=I||1/0;for(var g,B=A.length,i=null,o=[],Q=0;Q<B;++Q){if(g=A.charCodeAt(Q),g>55295&&g<57344){if(!i){if(g>56319){(I-=3)>-1&&o.push(239,191,189);continue}else if(Q+1===B){(I-=3)>-1&&o.push(239,191,189);continue}i=g;continue}if(g<56320){(I-=3)>-1&&o.push(239,191,189),i=g;continue}g=(i-55296<<10|g-56320)+65536}else i&&(I-=3)>-1&&o.push(239,191,189);if(i=null,g<128){if((I-=1)<0)break;o.push(g)}else if(g<2048){if((I-=2)<0)break;o.push(g>>6|192,g&63|128)}else if(g<65536){if((I-=3)<0)break;o.push(g>>12|224,g>>6&63|128,g&63|128)}else if(g<1114112){if((I-=4)<0)break;o.push(g>>18|240,g>>12&63|128,g>>6&63|128,g&63|128)}else throw new Error("Invalid code point")}return o}function ba(A){if(ZA.isBuffer(A))return A.length;if(typeof ArrayBuffer<"u"&&typeof ArrayBuffer.isView=="function"&&(ArrayBuffer.isView(A)||A instanceof ArrayBuffer))return A.byteLength;typeof A!="string"&&(A=""+A);var I=A.length;return I===0?0:ja(A).length}function Yn(A,I,g,B){for(var i=0;i<B&&!(i+g>=I.length||i>=A.length);++i)I[i+g]=A[i];return i}function Jn(A,I,g,B){return Yn(ja(I,A.length-g),A,g,B)}function pn(A,I,g,B){if(typeof I=="number")throw new TypeError('"value" argument must not be a number');return typeof ArrayBuffer<"u"&&I instanceof ArrayBuffer?Fn(A,I,g,B):typeof I=="string"?nn(A,I):yn(A,I)}ZA.prototype.write=function(I,g,B){g===void 0?(B=this.length,g=0):B===void 0&&typeof g=="string"?(B=this.length,g=0):isFinite(g)&&(g=g|0,isFinite(B)?B=B|0:B=void 0);var i=this.length-g;if((B===void 0||B>i)&&(B=i),I.length>0&&(B<0||g<0)||g>this.length)throw new RangeError("Attempt to write outside buffer bounds");return Jn(this,I,g,B)};ZA.prototype.slice=function(I,g){var B=this.length;I=~~I,g=g===void 0?B:~~g,I<0?(I+=B,I<0&&(I=0)):I>B&&(I=B),g<0?(g+=B,g<0&&(g=0)):g>B&&(g=B),g<I&&(g=I);var i;if(ZA.TYPED_ARRAY_SUPPORT)i=this.subarray(I,g),i.__proto__=ZA.prototype;else{var o=g-I;i=new ZA(o,void 0);for(var Q=0;Q<o;++Q)i[Q]=this[Q+I]}return i};ZA.prototype.copy=function(I,g,B,i){if(B||(B=0),!i&&i!==0&&(i=this.length),g>=I.length&&(g=I.length),g||(g=0),i>0&&i<B&&(i=B),i===B||I.length===0||this.length===0)return 0;if(g<0)throw new RangeError("targetStart out of bounds");if(B<0||B>=this.length)throw new RangeError("sourceStart out of bounds");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),I.length-g<i-B&&(i=I.length-g+B);var o=i-B,Q;if(this===I&&B<g&&g<i)for(Q=o-1;Q>=0;--Q)I[Q+g]=this[Q+B];else if(o<1e3||!ZA.TYPED_ARRAY_SUPPORT)for(Q=0;Q<o;++Q)I[Q+g]=this[Q+B];else Uint8Array.prototype.set.call(I,this.subarray(B,B+o),g);return o};ZA.prototype.fill=function(I,g,B){if(typeof I=="string"){if(typeof g=="string"?(g=0,B=this.length):typeof B=="string"&&(B=this.length),I.length===1){var i=I.charCodeAt(0);i<256&&(I=i)}}else typeof I=="number"&&(I=I&255);if(g<0||this.length<g||this.length<B)throw new RangeError("Out of range index");if(B<=g)return this;g=g>>>0,B=B===void 0?this.length:B>>>0,I||(I=0);var o;if(typeof I=="number")for(o=g;o<B;++o)this[o]=I;else{var Q=ZA.isBuffer(I)?I:new ZA(I),C=Q.length;for(o=0;o<B-g;++o)this[o+g]=Q[o%C]}return this};ZA.concat=function(I,g){if(!en(I))throw new TypeError('"list" argument must be an Array of Buffers');if(I.length===0)return Lg(null,0);var B;if(g===void 0)for(g=0,B=0;B<I.length;++B)g+=I[B].length;var i=fa(null,g),o=0;for(B=0;B<I.length;++B){var Q=I[B];if(!ZA.isBuffer(Q))throw new TypeError('"list" argument must be an Array of Buffers');Q.copy(i,o),o+=Q.length}return i};ZA.byteLength=ba;ZA.prototype._isBuffer=!0;ZA.isBuffer=function(I){return!!(I!=null&&I._isBuffer)};kg.alloc=function(A){var I=new ZA(A);return I.fill(0),I};kg.from=function(A){return new ZA(A)};var qI={},kE,rn=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];qI.getSymbolSize=function(I){if(!I)throw new Error('"version" cannot be null or undefined');if(I<1||I>40)throw new Error('"version" should be in range from 1 to 40');return I*4+17};qI.getSymbolTotalCodewords=function(I){return rn[I]};qI.getBCHDigit=function(A){for(var I=0;A!==0;)I++,A>>>=1;return I};qI.setToSJISFunction=function(I){if(typeof I!="function")throw new Error('"toSJISFunc" is not a valid function.');kE=I};qI.isKanjiModeEnabled=function(){return typeof kE<"u"};qI.toSJIS=function(I){return kE(I)};var lB={};(function(A){A.L={bit:1},A.M={bit:0},A.Q={bit:3},A.H={bit:2};function I(g){if(typeof g!="string")throw new Error("Param is not a string");var B=g.toLowerCase();switch(B){case"l":case"low":return A.L;case"m":case"medium":return A.M;case"q":case"quartile":return A.Q;case"h":case"high":return A.H;default:throw new Error("Unknown EC Level: "+g)}}A.isValid=function(B){return B&&typeof B.bit<"u"&&B.bit>=0&&B.bit<4},A.from=function(B,i){if(A.isValid(B))return B;try{return I(B)}catch{return i}}})(lB);function ua(){this.buffer=[],this.length=0}ua.prototype={get:function(A){var I=Math.floor(A/8);return(this.buffer[I]>>>7-A%8&1)===1},put:function(A,I){for(var g=0;g<I;g++)this.putBit((A>>>I-g-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(A){var I=Math.floor(this.length/8);this.buffer.length<=I&&this.buffer.push(0),A&&(this.buffer[I]|=128>>>this.length%8),this.length++}};var Un=ua,ND=kg;function RQ(A){if(!A||A<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=A,this.data=ND.alloc(A*A),this.reservedBit=ND.alloc(A*A)}RQ.prototype.set=function(A,I,g,B){var i=A*this.size+I;this.data[i]=g,B&&(this.reservedBit[i]=!0)};RQ.prototype.get=function(A,I){return this.data[A*this.size+I]};RQ.prototype.xor=function(A,I,g){this.data[A*this.size+I]^=g};RQ.prototype.isReserved=function(A,I){return this.reservedBit[A*this.size+I]};var Rn=RQ,Wa={};(function(A){var I=qI.getSymbolSize;A.getRowColCoords=function(B){if(B===1)return[];for(var i=Math.floor(B/7)+2,o=I(B),Q=o===145?26:Math.ceil((o-13)/(2*i-2))*2,C=[o-7],E=1;E<i-1;E++)C[E]=C[E-1]-Q;return C.push(6),C.reverse()},A.getPositions=function(B){for(var i=[],o=A.getRowColCoords(B),Q=o.length,C=0;C<Q;C++)for(var E=0;E<Q;E++)C===0&&E===0||C===0&&E===Q-1||C===Q-1&&E===0||i.push([o[C],o[E]]);return i}})(Wa);var Va={},qn=qI.getSymbolSize,cD=7;Va.getPositions=function(I){var g=qn(I);return[[0,0],[g-cD,0],[0,g-cD]]};var Ta={};(function(A){A.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var I={N1:3,N2:3,N3:40,N4:10};A.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},A.from=function(i){return A.isValid(i)?parseInt(i,10):void 0},A.getPenaltyN1=function(i){for(var o=i.size,Q=0,C=0,E=0,h=null,a=null,t=0;t<o;t++){C=E=0,h=a=null;for(var e=0;e<o;e++){var G=i.get(t,e);G===h?C++:(C>=5&&(Q+=I.N1+(C-5)),h=G,C=1),G=i.get(e,t),G===a?E++:(E>=5&&(Q+=I.N1+(E-5)),a=G,E=1)}C>=5&&(Q+=I.N1+(C-5)),E>=5&&(Q+=I.N1+(E-5))}return Q},A.getPenaltyN2=function(i){for(var o=i.size,Q=0,C=0;C<o-1;C++)for(var E=0;E<o-1;E++){var h=i.get(C,E)+i.get(C,E+1)+i.get(C+1,E)+i.get(C+1,E+1);(h===4||h===0)&&Q++}return Q*I.N2},A.getPenaltyN3=function(i){for(var o=i.size,Q=0,C=0,E=0,h=0;h<o;h++){C=E=0;for(var a=0;a<o;a++)C=C<<1&2047|i.get(h,a),a>=10&&(C===1488||C===93)&&Q++,E=E<<1&2047|i.get(a,h),a>=10&&(E===1488||E===93)&&Q++}return Q*I.N3},A.getPenaltyN4=function(i){for(var o=0,Q=i.data.length,C=0;C<Q;C++)o+=i.data[C];var E=Math.abs(Math.ceil(o*100/Q/5)-10);return E*I.N4};function g(B,i,o){switch(B){case A.Patterns.PATTERN000:return(i+o)%2===0;case A.Patterns.PATTERN001:return i%2===0;case A.Patterns.PATTERN010:return o%3===0;case A.Patterns.PATTERN011:return(i+o)%3===0;case A.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(o/3))%2===0;case A.Patterns.PATTERN101:return i*o%2+i*o%3===0;case A.Patterns.PATTERN110:return(i*o%2+i*o%3)%2===0;case A.Patterns.PATTERN111:return(i*o%3+(i+o)%2)%2===0;default:throw new Error("bad maskPattern:"+B)}}A.applyMask=function(i,o){for(var Q=o.size,C=0;C<Q;C++)for(var E=0;E<Q;E++)o.isReserved(E,C)||o.xor(E,C,g(i,E,C))},A.getBestMask=function(i,o){for(var Q=Object.keys(A.Patterns).length,C=0,E=1/0,h=0;h<Q;h++){o(h),A.applyMask(h,i);var a=A.getPenaltyN1(i)+A.getPenaltyN2(i)+A.getPenaltyN3(i)+A.getPenaltyN4(i);A.applyMask(h,i),a<E&&(E=a,C=h)}return C}})(Ta);var KB={},ig=lB,bQ=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],uQ=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];KB.getBlocksCount=function(I,g){switch(g){case ig.L:return bQ[(I-1)*4+0];case ig.M:return bQ[(I-1)*4+1];case ig.Q:return bQ[(I-1)*4+2];case ig.H:return bQ[(I-1)*4+3];default:return}};KB.getTotalCodewordsCount=function(I,g){switch(g){case ig.L:return uQ[(I-1)*4+0];case ig.M:return uQ[(I-1)*4+1];case ig.Q:return uQ[(I-1)*4+2];case ig.H:return uQ[(I-1)*4+3];default:return}};var xa={},SB={},Xa=kg,aQ=Xa.alloc(512),QB=Xa.alloc(256);(function(){for(var I=1,g=0;g<255;g++)aQ[g]=I,QB[I]=g,I<<=1,I&256&&(I^=285);for(g=255;g<512;g++)aQ[g]=aQ[g-255]})();SB.log=function(I){if(I<1)throw new Error("log("+I+")");return QB[I]};SB.exp=function(I){return aQ[I]};SB.mul=function(I,g){return I===0||g===0?0:aQ[QB[I]+QB[g]]};(function(A){var I=kg,g=SB;A.mul=function(i,o){for(var Q=I.alloc(i.length+o.length-1),C=0;C<i.length;C++)for(var E=0;E<o.length;E++)Q[C+E]^=g.mul(i[C],o[E]);return Q},A.mod=function(i,o){for(var Q=I.from(i);Q.length-o.length>=0;){for(var C=Q[0],E=0;E<o.length;E++)Q[E]^=g.mul(o[E],C);for(var h=0;h<Q.length&&Q[h]===0;)h++;Q=Q.slice(h)}return Q},A.generateECPolynomial=function(i){for(var o=I.from([1]),Q=0;Q<i;Q++)o=A.mul(o,[1,g.exp(Q)]);return o}})(xa);var za={},HB={};HB.byteLength=Sn;HB.toByteArray=dn;HB.fromByteArray=Zn;var WI=[],dI=[],ln=typeof Uint8Array<"u"?Uint8Array:Array,QC="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var Sg=0,Kn=QC.length;Sg<Kn;++Sg)WI[Sg]=QC[Sg],dI[QC.charCodeAt(Sg)]=Sg;dI["-".charCodeAt(0)]=62;dI["_".charCodeAt(0)]=63;function va(A){var I=A.length;if(I%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var g=A.indexOf("=");g===-1&&(g=I);var B=g===I?0:4-g%4;return[g,B]}function Sn(A){var I=va(A),g=I[0],B=I[1];return(g+B)*3/4-B}function Hn(A,I,g){return(I+g)*3/4-g}function dn(A){var I,g=va(A),B=g[0],i=g[1],o=new ln(Hn(A,B,i)),Q=0,C=i>0?B-4:B,E;for(E=0;E<C;E+=4)I=dI[A.charCodeAt(E)]<<18|dI[A.charCodeAt(E+1)]<<12|dI[A.charCodeAt(E+2)]<<6|dI[A.charCodeAt(E+3)],o[Q++]=I>>16&255,o[Q++]=I>>8&255,o[Q++]=I&255;return i===2&&(I=dI[A.charCodeAt(E)]<<2|dI[A.charCodeAt(E+1)]>>4,o[Q++]=I&255),i===1&&(I=dI[A.charCodeAt(E)]<<10|dI[A.charCodeAt(E+1)]<<4|dI[A.charCodeAt(E+2)]>>2,o[Q++]=I>>8&255,o[Q++]=I&255),o}function On(A){return WI[A>>18&63]+WI[A>>12&63]+WI[A>>6&63]+WI[A&63]}function mn(A,I,g){for(var B,i=[],o=I;o<g;o+=3)B=(A[o]<<16&16711680)+(A[o+1]<<8&65280)+(A[o+2]&255),i.push(On(B));return i.join("")}function Zn(A){for(var I,g=A.length,B=g%3,i=[],o=16383,Q=0,C=g-B;Q<C;Q+=o)i.push(mn(A,Q,Q+o>C?C:Q+o));return B===1?(I=A[g-1],i.push(WI[I>>2]+WI[I<<4&63]+"==")):B===2&&(I=(A[g-2]<<8)+A[g-1],i.push(WI[I>>10]+WI[I>>4&63]+WI[I<<2&63]+"=")),i.join("")}var NE={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */NE.read=function(A,I,g,B,i){var o,Q,C=i*8-B-1,E=(1<<C)-1,h=E>>1,a=-7,t=g?i-1:0,e=g?-1:1,G=A[I+t];for(t+=e,o=G&(1<<-a)-1,G>>=-a,a+=C;a>0;o=o*256+A[I+t],t+=e,a-=8);for(Q=o&(1<<-a)-1,o>>=-a,a+=B;a>0;Q=Q*256+A[I+t],t+=e,a-=8);if(o===0)o=1-h;else{if(o===E)return Q?NaN:(G?-1:1)*(1/0);Q=Q+Math.pow(2,B),o=o-h}return(G?-1:1)*Q*Math.pow(2,o-B)};NE.write=function(A,I,g,B,i,o){var Q,C,E,h=o*8-i-1,a=(1<<h)-1,t=a>>1,e=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,G=B?0:o-1,c=B?1:-1,p=I<0||I===0&&1/I<0?1:0;for(I=Math.abs(I),isNaN(I)||I===1/0?(C=isNaN(I)?1:0,Q=a):(Q=Math.floor(Math.log(I)/Math.LN2),I*(E=Math.pow(2,-Q))<1&&(Q--,E*=2),Q+t>=1?I+=e/E:I+=e*Math.pow(2,1-t),I*E>=2&&(Q++,E/=2),Q+t>=a?(C=0,Q=a):Q+t>=1?(C=(I*E-1)*Math.pow(2,i),Q=Q+t):(C=I*Math.pow(2,t-1)*Math.pow(2,i),Q=0));i>=8;A[g+G]=C&255,G+=c,C/=256,i-=8);for(Q=Q<<i|C,h+=i;h>0;A[g+G]=Q&255,G+=c,Q/=256,h-=8);A[g+G-c]|=p*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(A){var I=HB,g=NE,B=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;A.Buffer=C,A.SlowBuffer=s,A.INSPECT_MAX_BYTES=50;var i=2147483647;A.kMaxLength=i,C.TYPED_ARRAY_SUPPORT=o(),!C.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function o(){try{var v=new Uint8Array(1),l={foo:function(){return 42}};return Object.setPrototypeOf(l,Uint8Array.prototype),Object.setPrototypeOf(v,l),v.foo()===42}catch{return!1}}Object.defineProperty(C.prototype,"parent",{enumerable:!0,get:function(){if(C.isBuffer(this))return this.buffer}}),Object.defineProperty(C.prototype,"offset",{enumerable:!0,get:function(){if(C.isBuffer(this))return this.byteOffset}});function Q(v){if(v>i)throw new RangeError('The value "'+v+'" is invalid for option "size"');var l=new Uint8Array(v);return Object.setPrototypeOf(l,C.prototype),l}function C(v,l,d){if(typeof v=="number"){if(typeof l=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return t(v)}return E(v,l,d)}C.poolSize=8192;function E(v,l,d){if(typeof v=="string")return e(v,l);if(ArrayBuffer.isView(v))return c(v);if(v==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof v);if(kA(v,ArrayBuffer)||v&&kA(v.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(kA(v,SharedArrayBuffer)||v&&kA(v.buffer,SharedArrayBuffer)))return p(v,l,d);if(typeof v=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var x=v.valueOf&&v.valueOf();if(x!=null&&x!==v)return C.from(x,l,d);var oA=Y(v);if(oA)return oA;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof v[Symbol.toPrimitive]=="function")return C.from(v[Symbol.toPrimitive]("string"),l,d);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof v)}C.from=function(v,l,d){return E(v,l,d)},Object.setPrototypeOf(C.prototype,Uint8Array.prototype),Object.setPrototypeOf(C,Uint8Array);function h(v){if(typeof v!="number")throw new TypeError('"size" argument must be of type number');if(v<0)throw new RangeError('The value "'+v+'" is invalid for option "size"')}function a(v,l,d){return h(v),v<=0?Q(v):l!==void 0?typeof d=="string"?Q(v).fill(l,d):Q(v).fill(l):Q(v)}C.alloc=function(v,l,d){return a(v,l,d)};function t(v){return h(v),Q(v<0?0:F(v)|0)}C.allocUnsafe=function(v){return t(v)},C.allocUnsafeSlow=function(v){return t(v)};function e(v,l){if((typeof l!="string"||l==="")&&(l="utf8"),!C.isEncoding(l))throw new TypeError("Unknown encoding: "+l);var d=M(v,l)|0,x=Q(d),oA=x.write(v,l);return oA!==d&&(x=x.slice(0,oA)),x}function G(v){for(var l=v.length<0?0:F(v.length)|0,d=Q(l),x=0;x<l;x+=1)d[x]=v[x]&255;return d}function c(v){if(kA(v,Uint8Array)){var l=new Uint8Array(v);return p(l.buffer,l.byteOffset,l.byteLength)}return G(v)}function p(v,l,d){if(l<0||v.byteLength<l)throw new RangeError('"offset" is outside of buffer bounds');if(v.byteLength<l+(d||0))throw new RangeError('"length" is outside of buffer bounds');var x;return l===void 0&&d===void 0?x=new Uint8Array(v):d===void 0?x=new Uint8Array(v,l):x=new Uint8Array(v,l,d),Object.setPrototypeOf(x,C.prototype),x}function Y(v){if(C.isBuffer(v)){var l=F(v.length)|0,d=Q(l);return d.length===0||v.copy(d,0,0,l),d}if(v.length!==void 0)return typeof v.length!="number"||eA(v.length)?Q(0):G(v);if(v.type==="Buffer"&&Array.isArray(v.data))return G(v.data)}function F(v){if(v>=i)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i.toString(16)+" bytes");return v|0}function s(v){return+v!=v&&(v=0),C.alloc(+v)}C.isBuffer=function(l){return l!=null&&l._isBuffer===!0&&l!==C.prototype},C.compare=function(l,d){if(kA(l,Uint8Array)&&(l=C.from(l,l.offset,l.byteLength)),kA(d,Uint8Array)&&(d=C.from(d,d.offset,d.byteLength)),!C.isBuffer(l)||!C.isBuffer(d))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(l===d)return 0;for(var x=l.length,oA=d.length,hA=0,AA=Math.min(x,oA);hA<AA;++hA)if(l[hA]!==d[hA]){x=l[hA],oA=d[hA];break}return x<oA?-1:oA<x?1:0},C.isEncoding=function(l){switch(String(l).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},C.concat=function(l,d){if(!Array.isArray(l))throw new TypeError('"list" argument must be an Array of Buffers');if(l.length===0)return C.alloc(0);var x;if(d===void 0)for(d=0,x=0;x<l.length;++x)d+=l[x].length;var oA=C.allocUnsafe(d),hA=0;for(x=0;x<l.length;++x){var AA=l[x];if(kA(AA,Uint8Array))hA+AA.length>oA.length?C.from(AA).copy(oA,hA):Uint8Array.prototype.set.call(oA,AA,hA);else if(C.isBuffer(AA))AA.copy(oA,hA);else throw new TypeError('"list" argument must be an Array of Buffers');hA+=AA.length}return oA};function M(v,l){if(C.isBuffer(v))return v.length;if(ArrayBuffer.isView(v)||kA(v,ArrayBuffer))return v.byteLength;if(typeof v!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof v);var d=v.length,x=arguments.length>2&&arguments[2]===!0;if(!x&&d===0)return 0;for(var oA=!1;;)switch(l){case"ascii":case"latin1":case"binary":return d;case"utf8":case"utf-8":return EA(v).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return d*2;case"hex":return d>>>1;case"base64":return b(v).length;default:if(oA)return x?-1:EA(v).length;l=(""+l).toLowerCase(),oA=!0}}C.byteLength=M;function N(v,l,d){var x=!1;if((l===void 0||l<0)&&(l=0),l>this.length||((d===void 0||d>this.length)&&(d=this.length),d<=0)||(d>>>=0,l>>>=0,d<=l))return"";for(v||(v="utf8");;)switch(v){case"hex":return L(this,l,d);case"utf8":case"utf-8":return U(this,l,d);case"ascii":return u(this,l,d);case"latin1":case"binary":return Z(this,l,d);case"base64":return j(this,l,d);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return _(this,l,d);default:if(x)throw new TypeError("Unknown encoding: "+v);v=(v+"").toLowerCase(),x=!0}}C.prototype._isBuffer=!0;function k(v,l,d){var x=v[l];v[l]=v[d],v[d]=x}C.prototype.swap16=function(){var l=this.length;if(l%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var d=0;d<l;d+=2)k(this,d,d+1);return this},C.prototype.swap32=function(){var l=this.length;if(l%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var d=0;d<l;d+=4)k(this,d,d+3),k(this,d+1,d+2);return this},C.prototype.swap64=function(){var l=this.length;if(l%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var d=0;d<l;d+=8)k(this,d,d+7),k(this,d+1,d+6),k(this,d+2,d+5),k(this,d+3,d+4);return this},C.prototype.toString=function(){var l=this.length;return l===0?"":arguments.length===0?U(this,0,l):N.apply(this,arguments)},C.prototype.toLocaleString=C.prototype.toString,C.prototype.equals=function(l){if(!C.isBuffer(l))throw new TypeError("Argument must be a Buffer");return this===l?!0:C.compare(this,l)===0},C.prototype.inspect=function(){var l="",d=A.INSPECT_MAX_BYTES;return l=this.toString("hex",0,d).replace(/(.{2})/g,"$1 ").trim(),this.length>d&&(l+=" ... "),"<Buffer "+l+">"},B&&(C.prototype[B]=C.prototype.inspect),C.prototype.compare=function(l,d,x,oA,hA){if(kA(l,Uint8Array)&&(l=C.from(l,l.offset,l.byteLength)),!C.isBuffer(l))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof l);if(d===void 0&&(d=0),x===void 0&&(x=l?l.length:0),oA===void 0&&(oA=0),hA===void 0&&(hA=this.length),d<0||x>l.length||oA<0||hA>this.length)throw new RangeError("out of range index");if(oA>=hA&&d>=x)return 0;if(oA>=hA)return-1;if(d>=x)return 1;if(d>>>=0,x>>>=0,oA>>>=0,hA>>>=0,this===l)return 0;for(var AA=hA-oA,n=x-d,r=Math.min(AA,n),J=this.slice(oA,hA),q=l.slice(d,x),H=0;H<r;++H)if(J[H]!==q[H]){AA=J[H],n=q[H];break}return AA<n?-1:n<AA?1:0};function w(v,l,d,x,oA){if(v.length===0)return-1;if(typeof d=="string"?(x=d,d=0):d>2147483647?d=2147483647:d<-2147483648&&(d=-2147483648),d=+d,eA(d)&&(d=oA?0:v.length-1),d<0&&(d=v.length+d),d>=v.length){if(oA)return-1;d=v.length-1}else if(d<0)if(oA)d=0;else return-1;if(typeof l=="string"&&(l=C.from(l,x)),C.isBuffer(l))return l.length===0?-1:D(v,l,d,x,oA);if(typeof l=="number")return l=l&255,typeof Uint8Array.prototype.indexOf=="function"?oA?Uint8Array.prototype.indexOf.call(v,l,d):Uint8Array.prototype.lastIndexOf.call(v,l,d):D(v,[l],d,x,oA);throw new TypeError("val must be string, number or Buffer")}function D(v,l,d,x,oA){var hA=1,AA=v.length,n=l.length;if(x!==void 0&&(x=String(x).toLowerCase(),x==="ucs2"||x==="ucs-2"||x==="utf16le"||x==="utf-16le")){if(v.length<2||l.length<2)return-1;hA=2,AA/=2,n/=2,d/=2}function r(z,$){return hA===1?z[$]:z.readUInt16BE($*hA)}var J;if(oA){var q=-1;for(J=d;J<AA;J++)if(r(v,J)===r(l,q===-1?0:J-q)){if(q===-1&&(q=J),J-q+1===n)return q*hA}else q!==-1&&(J-=J-q),q=-1}else for(d+n>AA&&(d=AA-n),J=d;J>=0;J--){for(var H=!0,T=0;T<n;T++)if(r(v,J+T)!==r(l,T)){H=!1;break}if(H)return J}return-1}C.prototype.includes=function(l,d,x){return this.indexOf(l,d,x)!==-1},C.prototype.indexOf=function(l,d,x){return w(this,l,d,x,!0)},C.prototype.lastIndexOf=function(l,d,x){return w(this,l,d,x,!1)};function y(v,l,d,x){d=Number(d)||0;var oA=v.length-d;x?(x=Number(x),x>oA&&(x=oA)):x=oA;var hA=l.length;x>hA/2&&(x=hA/2);for(var AA=0;AA<x;++AA){var n=parseInt(l.substr(AA*2,2),16);if(eA(n))return AA;v[d+AA]=n}return AA}function O(v,l,d,x){return P(EA(l,v.length-d),v,d,x)}function R(v,l,d,x){return P(CA(l),v,d,x)}function m(v,l,d,x){return P(b(l),v,d,x)}function V(v,l,d,x){return P(K(l,v.length-d),v,d,x)}C.prototype.write=function(l,d,x,oA){if(d===void 0)oA="utf8",x=this.length,d=0;else if(x===void 0&&typeof d=="string")oA=d,x=this.length,d=0;else if(isFinite(d))d=d>>>0,isFinite(x)?(x=x>>>0,oA===void 0&&(oA="utf8")):(oA=x,x=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var hA=this.length-d;if((x===void 0||x>hA)&&(x=hA),l.length>0&&(x<0||d<0)||d>this.length)throw new RangeError("Attempt to write outside buffer bounds");oA||(oA="utf8");for(var AA=!1;;)switch(oA){case"hex":return y(this,l,d,x);case"utf8":case"utf-8":return O(this,l,d,x);case"ascii":case"latin1":case"binary":return R(this,l,d,x);case"base64":return m(this,l,d,x);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return V(this,l,d,x);default:if(AA)throw new TypeError("Unknown encoding: "+oA);oA=(""+oA).toLowerCase(),AA=!0}},C.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function j(v,l,d){return l===0&&d===v.length?I.fromByteArray(v):I.fromByteArray(v.slice(l,d))}function U(v,l,d){d=Math.min(v.length,d);for(var x=[],oA=l;oA<d;){var hA=v[oA],AA=null,n=hA>239?4:hA>223?3:hA>191?2:1;if(oA+n<=d){var r,J,q,H;switch(n){case 1:hA<128&&(AA=hA);break;case 2:r=v[oA+1],(r&192)===128&&(H=(hA&31)<<6|r&63,H>127&&(AA=H));break;case 3:r=v[oA+1],J=v[oA+2],(r&192)===128&&(J&192)===128&&(H=(hA&15)<<12|(r&63)<<6|J&63,H>2047&&(H<55296||H>57343)&&(AA=H));break;case 4:r=v[oA+1],J=v[oA+2],q=v[oA+3],(r&192)===128&&(J&192)===128&&(q&192)===128&&(H=(hA&15)<<18|(r&63)<<12|(J&63)<<6|q&63,H>65535&&H<1114112&&(AA=H))}}AA===null?(AA=65533,n=1):AA>65535&&(AA-=65536,x.push(AA>>>10&1023|55296),AA=56320|AA&1023),x.push(AA),oA+=n}return X(x)}var S=4096;function X(v){var l=v.length;if(l<=S)return String.fromCharCode.apply(String,v);for(var d="",x=0;x<l;)d+=String.fromCharCode.apply(String,v.slice(x,x+=S));return d}function u(v,l,d){var x="";d=Math.min(v.length,d);for(var oA=l;oA<d;++oA)x+=String.fromCharCode(v[oA]&127);return x}function Z(v,l,d){var x="";d=Math.min(v.length,d);for(var oA=l;oA<d;++oA)x+=String.fromCharCode(v[oA]);return x}function L(v,l,d){var x=v.length;(!l||l<0)&&(l=0),(!d||d<0||d>x)&&(d=x);for(var oA="",hA=l;hA<d;++hA)oA+=FA[v[hA]];return oA}function _(v,l,d){for(var x=v.slice(l,d),oA="",hA=0;hA<x.length-1;hA+=2)oA+=String.fromCharCode(x[hA]+x[hA+1]*256);return oA}C.prototype.slice=function(l,d){var x=this.length;l=~~l,d=d===void 0?x:~~d,l<0?(l+=x,l<0&&(l=0)):l>x&&(l=x),d<0?(d+=x,d<0&&(d=0)):d>x&&(d=x),d<l&&(d=l);var oA=this.subarray(l,d);return Object.setPrototypeOf(oA,C.prototype),oA};function f(v,l,d){if(v%1!==0||v<0)throw new RangeError("offset is not uint");if(v+l>d)throw new RangeError("Trying to access beyond buffer length")}C.prototype.readUintLE=C.prototype.readUIntLE=function(l,d,x){l=l>>>0,d=d>>>0,x||f(l,d,this.length);for(var oA=this[l],hA=1,AA=0;++AA<d&&(hA*=256);)oA+=this[l+AA]*hA;return oA},C.prototype.readUintBE=C.prototype.readUIntBE=function(l,d,x){l=l>>>0,d=d>>>0,x||f(l,d,this.length);for(var oA=this[l+--d],hA=1;d>0&&(hA*=256);)oA+=this[l+--d]*hA;return oA},C.prototype.readUint8=C.prototype.readUInt8=function(l,d){return l=l>>>0,d||f(l,1,this.length),this[l]},C.prototype.readUint16LE=C.prototype.readUInt16LE=function(l,d){return l=l>>>0,d||f(l,2,this.length),this[l]|this[l+1]<<8},C.prototype.readUint16BE=C.prototype.readUInt16BE=function(l,d){return l=l>>>0,d||f(l,2,this.length),this[l]<<8|this[l+1]},C.prototype.readUint32LE=C.prototype.readUInt32LE=function(l,d){return l=l>>>0,d||f(l,4,this.length),(this[l]|this[l+1]<<8|this[l+2]<<16)+this[l+3]*16777216},C.prototype.readUint32BE=C.prototype.readUInt32BE=function(l,d){return l=l>>>0,d||f(l,4,this.length),this[l]*16777216+(this[l+1]<<16|this[l+2]<<8|this[l+3])},C.prototype.readIntLE=function(l,d,x){l=l>>>0,d=d>>>0,x||f(l,d,this.length);for(var oA=this[l],hA=1,AA=0;++AA<d&&(hA*=256);)oA+=this[l+AA]*hA;return hA*=128,oA>=hA&&(oA-=Math.pow(2,8*d)),oA},C.prototype.readIntBE=function(l,d,x){l=l>>>0,d=d>>>0,x||f(l,d,this.length);for(var oA=d,hA=1,AA=this[l+--oA];oA>0&&(hA*=256);)AA+=this[l+--oA]*hA;return hA*=128,AA>=hA&&(AA-=Math.pow(2,8*d)),AA},C.prototype.readInt8=function(l,d){return l=l>>>0,d||f(l,1,this.length),this[l]&128?(255-this[l]+1)*-1:this[l]},C.prototype.readInt16LE=function(l,d){l=l>>>0,d||f(l,2,this.length);var x=this[l]|this[l+1]<<8;return x&32768?x|4294901760:x},C.prototype.readInt16BE=function(l,d){l=l>>>0,d||f(l,2,this.length);var x=this[l+1]|this[l]<<8;return x&32768?x|4294901760:x},C.prototype.readInt32LE=function(l,d){return l=l>>>0,d||f(l,4,this.length),this[l]|this[l+1]<<8|this[l+2]<<16|this[l+3]<<24},C.prototype.readInt32BE=function(l,d){return l=l>>>0,d||f(l,4,this.length),this[l]<<24|this[l+1]<<16|this[l+2]<<8|this[l+3]},C.prototype.readFloatLE=function(l,d){return l=l>>>0,d||f(l,4,this.length),g.read(this,l,!0,23,4)},C.prototype.readFloatBE=function(l,d){return l=l>>>0,d||f(l,4,this.length),g.read(this,l,!1,23,4)},C.prototype.readDoubleLE=function(l,d){return l=l>>>0,d||f(l,8,this.length),g.read(this,l,!0,52,8)},C.prototype.readDoubleBE=function(l,d){return l=l>>>0,d||f(l,8,this.length),g.read(this,l,!1,52,8)};function W(v,l,d,x,oA,hA){if(!C.isBuffer(v))throw new TypeError('"buffer" argument must be a Buffer instance');if(l>oA||l<hA)throw new RangeError('"value" argument is out of bounds');if(d+x>v.length)throw new RangeError("Index out of range")}C.prototype.writeUintLE=C.prototype.writeUIntLE=function(l,d,x,oA){if(l=+l,d=d>>>0,x=x>>>0,!oA){var hA=Math.pow(2,8*x)-1;W(this,l,d,x,hA,0)}var AA=1,n=0;for(this[d]=l&255;++n<x&&(AA*=256);)this[d+n]=l/AA&255;return d+x},C.prototype.writeUintBE=C.prototype.writeUIntBE=function(l,d,x,oA){if(l=+l,d=d>>>0,x=x>>>0,!oA){var hA=Math.pow(2,8*x)-1;W(this,l,d,x,hA,0)}var AA=x-1,n=1;for(this[d+AA]=l&255;--AA>=0&&(n*=256);)this[d+AA]=l/n&255;return d+x},C.prototype.writeUint8=C.prototype.writeUInt8=function(l,d,x){return l=+l,d=d>>>0,x||W(this,l,d,1,255,0),this[d]=l&255,d+1},C.prototype.writeUint16LE=C.prototype.writeUInt16LE=function(l,d,x){return l=+l,d=d>>>0,x||W(this,l,d,2,65535,0),this[d]=l&255,this[d+1]=l>>>8,d+2},C.prototype.writeUint16BE=C.prototype.writeUInt16BE=function(l,d,x){return l=+l,d=d>>>0,x||W(this,l,d,2,65535,0),this[d]=l>>>8,this[d+1]=l&255,d+2},C.prototype.writeUint32LE=C.prototype.writeUInt32LE=function(l,d,x){return l=+l,d=d>>>0,x||W(this,l,d,4,4294967295,0),this[d+3]=l>>>24,this[d+2]=l>>>16,this[d+1]=l>>>8,this[d]=l&255,d+4},C.prototype.writeUint32BE=C.prototype.writeUInt32BE=function(l,d,x){return l=+l,d=d>>>0,x||W(this,l,d,4,4294967295,0),this[d]=l>>>24,this[d+1]=l>>>16,this[d+2]=l>>>8,this[d+3]=l&255,d+4},C.prototype.writeIntLE=function(l,d,x,oA){if(l=+l,d=d>>>0,!oA){var hA=Math.pow(2,8*x-1);W(this,l,d,x,hA-1,-hA)}var AA=0,n=1,r=0;for(this[d]=l&255;++AA<x&&(n*=256);)l<0&&r===0&&this[d+AA-1]!==0&&(r=1),this[d+AA]=(l/n>>0)-r&255;return d+x},C.prototype.writeIntBE=function(l,d,x,oA){if(l=+l,d=d>>>0,!oA){var hA=Math.pow(2,8*x-1);W(this,l,d,x,hA-1,-hA)}var AA=x-1,n=1,r=0;for(this[d+AA]=l&255;--AA>=0&&(n*=256);)l<0&&r===0&&this[d+AA+1]!==0&&(r=1),this[d+AA]=(l/n>>0)-r&255;return d+x},C.prototype.writeInt8=function(l,d,x){return l=+l,d=d>>>0,x||W(this,l,d,1,127,-128),l<0&&(l=255+l+1),this[d]=l&255,d+1},C.prototype.writeInt16LE=function(l,d,x){return l=+l,d=d>>>0,x||W(this,l,d,2,32767,-32768),this[d]=l&255,this[d+1]=l>>>8,d+2},C.prototype.writeInt16BE=function(l,d,x){return l=+l,d=d>>>0,x||W(this,l,d,2,32767,-32768),this[d]=l>>>8,this[d+1]=l&255,d+2},C.prototype.writeInt32LE=function(l,d,x){return l=+l,d=d>>>0,x||W(this,l,d,4,2147483647,-2147483648),this[d]=l&255,this[d+1]=l>>>8,this[d+2]=l>>>16,this[d+3]=l>>>24,d+4},C.prototype.writeInt32BE=function(l,d,x){return l=+l,d=d>>>0,x||W(this,l,d,4,2147483647,-2147483648),l<0&&(l=4294967295+l+1),this[d]=l>>>24,this[d+1]=l>>>16,this[d+2]=l>>>8,this[d+3]=l&255,d+4};function QA(v,l,d,x,oA,hA){if(d+x>v.length)throw new RangeError("Index out of range");if(d<0)throw new RangeError("Index out of range")}function cA(v,l,d,x,oA){return l=+l,d=d>>>0,oA||QA(v,l,d,4),g.write(v,l,d,x,23,4),d+4}C.prototype.writeFloatLE=function(l,d,x){return cA(this,l,d,!0,x)},C.prototype.writeFloatBE=function(l,d,x){return cA(this,l,d,!1,x)};function aA(v,l,d,x,oA){return l=+l,d=d>>>0,oA||QA(v,l,d,8),g.write(v,l,d,x,52,8),d+8}C.prototype.writeDoubleLE=function(l,d,x){return aA(this,l,d,!0,x)},C.prototype.writeDoubleBE=function(l,d,x){return aA(this,l,d,!1,x)},C.prototype.copy=function(l,d,x,oA){if(!C.isBuffer(l))throw new TypeError("argument should be a Buffer");if(x||(x=0),!oA&&oA!==0&&(oA=this.length),d>=l.length&&(d=l.length),d||(d=0),oA>0&&oA<x&&(oA=x),oA===x||l.length===0||this.length===0)return 0;if(d<0)throw new RangeError("targetStart out of bounds");if(x<0||x>=this.length)throw new RangeError("Index out of range");if(oA<0)throw new RangeError("sourceEnd out of bounds");oA>this.length&&(oA=this.length),l.length-d<oA-x&&(oA=l.length-d+x);var hA=oA-x;return this===l&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(d,x,oA):Uint8Array.prototype.set.call(l,this.subarray(x,oA),d),hA},C.prototype.fill=function(l,d,x,oA){if(typeof l=="string"){if(typeof d=="string"?(oA=d,d=0,x=this.length):typeof x=="string"&&(oA=x,x=this.length),oA!==void 0&&typeof oA!="string")throw new TypeError("encoding must be a string");if(typeof oA=="string"&&!C.isEncoding(oA))throw new TypeError("Unknown encoding: "+oA);if(l.length===1){var hA=l.charCodeAt(0);(oA==="utf8"&&hA<128||oA==="latin1")&&(l=hA)}}else typeof l=="number"?l=l&255:typeof l=="boolean"&&(l=Number(l));if(d<0||this.length<d||this.length<x)throw new RangeError("Out of range index");if(x<=d)return this;d=d>>>0,x=x===void 0?this.length:x>>>0,l||(l=0);var AA;if(typeof l=="number")for(AA=d;AA<x;++AA)this[AA]=l;else{var n=C.isBuffer(l)?l:C.from(l,oA),r=n.length;if(r===0)throw new TypeError('The value "'+l+'" is invalid for argument "value"');for(AA=0;AA<x-d;++AA)this[AA+d]=n[AA%r]}return this};var tA=/[^+/0-9A-Za-z-_]/g;function DA(v){if(v=v.split("=")[0],v=v.trim().replace(tA,""),v.length<2)return"";for(;v.length%4!==0;)v=v+"=";return v}function EA(v,l){l=l||1/0;for(var d,x=v.length,oA=null,hA=[],AA=0;AA<x;++AA){if(d=v.charCodeAt(AA),d>55295&&d<57344){if(!oA){if(d>56319){(l-=3)>-1&&hA.push(239,191,189);continue}else if(AA+1===x){(l-=3)>-1&&hA.push(239,191,189);continue}oA=d;continue}if(d<56320){(l-=3)>-1&&hA.push(239,191,189),oA=d;continue}d=(oA-55296<<10|d-56320)+65536}else oA&&(l-=3)>-1&&hA.push(239,191,189);if(oA=null,d<128){if((l-=1)<0)break;hA.push(d)}else if(d<2048){if((l-=2)<0)break;hA.push(d>>6|192,d&63|128)}else if(d<65536){if((l-=3)<0)break;hA.push(d>>12|224,d>>6&63|128,d&63|128)}else if(d<1114112){if((l-=4)<0)break;hA.push(d>>18|240,d>>12&63|128,d>>6&63|128,d&63|128)}else throw new Error("Invalid code point")}return hA}function CA(v){for(var l=[],d=0;d<v.length;++d)l.push(v.charCodeAt(d)&255);return l}function K(v,l){for(var d,x,oA,hA=[],AA=0;AA<v.length&&!((l-=2)<0);++AA)d=v.charCodeAt(AA),x=d>>8,oA=d%256,hA.push(oA),hA.push(x);return hA}function b(v){return I.toByteArray(DA(v))}function P(v,l,d,x){for(var oA=0;oA<x&&!(oA+d>=l.length||oA>=v.length);++oA)l[oA+d]=v[oA];return oA}function kA(v,l){return v instanceof l||v!=null&&v.constructor!=null&&v.constructor.name!=null&&v.constructor.name===l.name}function eA(v){return v!==v}var FA=function(){for(var v="0123456789abcdef",l=new Array(256),d=0;d<16;++d)for(var x=d*16,oA=0;oA<16;++oA)l[x+oA]=v[d]+v[oA];return l}()})(za);var hD=kg,Pa=xa,Ln=za.Buffer;function cE(A){this.genPoly=void 0,this.degree=A,this.degree&&this.initialize(this.degree)}cE.prototype.initialize=function(I){this.degree=I,this.genPoly=Pa.generateECPolynomial(this.degree)};cE.prototype.encode=function(I){if(!this.genPoly)throw new Error("Encoder not initialized");var g=hD.alloc(this.degree),B=Ln.concat([I,g],I.length+this.degree),i=Pa.mod(B,this.genPoly),o=this.degree-i.length;if(o>0){var Q=hD.alloc(this.degree);return i.copy(Q,o),Q}return i};var fn=cE,_a={},Ng={},hE={};hE.isValid=function(I){return!isNaN(I)&&I>=1&&I<=40};var TI={},$a="[0-9]+",jn="[A-Z $%*+\\-./:]+",hQ="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";hQ=hQ.replace(/u/g,"\\u");var bn="(?:(?![A-Z0-9 $%*+\\-./:]|"+hQ+`)(?:.|[\r
]))+`;TI.KANJI=new RegExp(hQ,"g");TI.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");TI.BYTE=new RegExp(bn,"g");TI.NUMERIC=new RegExp($a,"g");TI.ALPHANUMERIC=new RegExp(jn,"g");var un=new RegExp("^"+hQ+"$"),Wn=new RegExp("^"+$a+"$"),Vn=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");TI.testKanji=function(I){return un.test(I)};TI.testNumeric=function(I){return Wn.test(I)};TI.testAlphanumeric=function(I){return Vn.test(I)};(function(A){var I=hE,g=TI;A.NUMERIC={id:"Numeric",bit:1<<0,ccBits:[10,12,14]},A.ALPHANUMERIC={id:"Alphanumeric",bit:1<<1,ccBits:[9,11,13]},A.BYTE={id:"Byte",bit:1<<2,ccBits:[8,16,16]},A.KANJI={id:"Kanji",bit:1<<3,ccBits:[8,10,12]},A.MIXED={bit:-1},A.getCharCountIndicator=function(o,Q){if(!o.ccBits)throw new Error("Invalid mode: "+o);if(!I.isValid(Q))throw new Error("Invalid version: "+Q);return Q>=1&&Q<10?o.ccBits[0]:Q<27?o.ccBits[1]:o.ccBits[2]},A.getBestModeForData=function(o){return g.testNumeric(o)?A.NUMERIC:g.testAlphanumeric(o)?A.ALPHANUMERIC:g.testKanji(o)?A.KANJI:A.BYTE},A.toString=function(o){if(o&&o.id)return o.id;throw new Error("Invalid mode")},A.isValid=function(o){return o&&o.bit&&o.ccBits};function B(i){if(typeof i!="string")throw new Error("Param is not a string");var o=i.toLowerCase();switch(o){case"numeric":return A.NUMERIC;case"alphanumeric":return A.ALPHANUMERIC;case"kanji":return A.KANJI;case"byte":return A.BYTE;default:throw new Error("Unknown mode: "+i)}}A.from=function(o,Q){if(A.isValid(o))return o;try{return B(o)}catch{return Q}}})(Ng);(function(A){var I=qI,g=KB,B=lB,i=Ng,o=hE,Q=wE,C=1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,E=I.getBCHDigit(C);function h(G,c,p){for(var Y=1;Y<=40;Y++)if(c<=A.getCapacity(Y,p,G))return Y}function a(G,c){return i.getCharCountIndicator(G,c)+4}function t(G,c){var p=0;return G.forEach(function(Y){var F=a(Y.mode,c);p+=F+Y.getBitsLength()}),p}function e(G,c){for(var p=1;p<=40;p++){var Y=t(G,p);if(Y<=A.getCapacity(p,c,i.MIXED))return p}}A.from=function(c,p){return o.isValid(c)?parseInt(c,10):p},A.getCapacity=function(c,p,Y){if(!o.isValid(c))throw new Error("Invalid QR Code version");typeof Y>"u"&&(Y=i.BYTE);var F=I.getSymbolTotalCodewords(c),s=g.getTotalCodewordsCount(c,p),M=(F-s)*8;if(Y===i.MIXED)return M;var N=M-a(Y,c);switch(Y){case i.NUMERIC:return Math.floor(N/10*3);case i.ALPHANUMERIC:return Math.floor(N/11*2);case i.KANJI:return Math.floor(N/13);case i.BYTE:default:return Math.floor(N/8)}},A.getBestVersionForData=function(c,p){var Y,F=B.from(p,B.M);if(Q(c)){if(c.length>1)return e(c,F);if(c.length===0)return 1;Y=c[0]}else Y=c;return h(Y.mode,Y.getLength(),F)},A.getEncodedBits=function(c){if(!o.isValid(c)||c<7)throw new Error("Invalid QR Code version");for(var p=c<<12;I.getBCHDigit(p)-E>=0;)p^=C<<I.getBCHDigit(p)-E;return c<<12|p}})(_a);var Aw={},rC=qI,Iw=1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,Tn=1<<14|1<<12|1<<10|1<<4|1<<1,tD=rC.getBCHDigit(Iw);Aw.getEncodedBits=function(I,g){for(var B=I.bit<<3|g,i=B<<10;rC.getBCHDigit(i)-tD>=0;)i^=Iw<<rC.getBCHDigit(i)-tD;return(B<<10|i)^Tn};var gw={},xn=Ng;function fg(A){this.mode=xn.NUMERIC,this.data=A.toString()}fg.getBitsLength=function(I){return 10*Math.floor(I/3)+(I%3?I%3*3+1:0)};fg.prototype.getLength=function(){return this.data.length};fg.prototype.getBitsLength=function(){return fg.getBitsLength(this.data.length)};fg.prototype.write=function(I){var g,B,i;for(g=0;g+3<=this.data.length;g+=3)B=this.data.substr(g,3),i=parseInt(B,10),I.put(i,10);var o=this.data.length-g;o>0&&(B=this.data.substr(g),i=parseInt(B,10),I.put(i,o*3+1))};var Xn=fg,zn=Ng,BC=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function jg(A){this.mode=zn.ALPHANUMERIC,this.data=A}jg.getBitsLength=function(I){return 11*Math.floor(I/2)+6*(I%2)};jg.prototype.getLength=function(){return this.data.length};jg.prototype.getBitsLength=function(){return jg.getBitsLength(this.data.length)};jg.prototype.write=function(I){var g;for(g=0;g+2<=this.data.length;g+=2){var B=BC.indexOf(this.data[g])*45;B+=BC.indexOf(this.data[g+1]),I.put(B,11)}this.data.length%2&&I.put(BC.indexOf(this.data[g]),6)};var vn=jg,Pn=kg,_n=Ng;function bg(A){this.mode=_n.BYTE,this.data=Pn.from(A)}bg.getBitsLength=function(I){return I*8};bg.prototype.getLength=function(){return this.data.length};bg.prototype.getBitsLength=function(){return bg.getBitsLength(this.data.length)};bg.prototype.write=function(A){for(var I=0,g=this.data.length;I<g;I++)A.put(this.data[I],8)};var $n=bg,AF=Ng,IF=qI;function ug(A){this.mode=AF.KANJI,this.data=A}ug.getBitsLength=function(I){return I*13};ug.prototype.getLength=function(){return this.data.length};ug.prototype.getBitsLength=function(){return ug.getBitsLength(this.data.length)};ug.prototype.write=function(A){var I;for(I=0;I<this.data.length;I++){var g=IF.toSJIS(this.data[I]);if(g>=33088&&g<=40956)g-=33088;else if(g>=57408&&g<=60351)g-=49472;else throw new Error("Invalid SJIS character: "+this.data[I]+`
Make sure your charset is UTF-8`);g=(g>>>8&255)*192+(g&255),A.put(g,13)}};var gF=ug,UC={},QF={get exports(){return UC},set exports(A){UC=A}};(function(A){var I={single_source_shortest_paths:function(g,B,i){var o={},Q={};Q[B]=0;var C=I.PriorityQueue.make();C.push(B,0);for(var E,h,a,t,e,G,c,p,Y;!C.empty();){E=C.pop(),h=E.value,t=E.cost,e=g[h]||{};for(a in e)e.hasOwnProperty(a)&&(G=e[a],c=t+G,p=Q[a],Y=typeof Q[a]>"u",(Y||p>c)&&(Q[a]=c,C.push(a,c),o[a]=h))}if(typeof i<"u"&&typeof Q[i]>"u"){var F=["Could not find a path from ",B," to ",i,"."].join("");throw new Error(F)}return o},extract_shortest_path_from_predecessor_list:function(g,B){for(var i=[],o=B;o;)i.push(o),g[o],o=g[o];return i.reverse(),i},find_path:function(g,B,i){var o=I.single_source_shortest_paths(g,B,i);return I.extract_shortest_path_from_predecessor_list(o,i)},PriorityQueue:{make:function(g){var B=I.PriorityQueue,i={},o;g=g||{};for(o in B)B.hasOwnProperty(o)&&(i[o]=B[o]);return i.queue=[],i.sorter=g.sorter||B.default_sorter,i},default_sorter:function(g,B){return g.cost-B.cost},push:function(g,B){var i={value:g,cost:B};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};A.exports=I})(QF);(function(A){var I=Ng,g=Xn,B=vn,i=$n,o=gF,Q=TI,C=qI,E=UC;function h(F){return unescape(encodeURIComponent(F)).length}function a(F,s,M){for(var N=[],k;(k=F.exec(M))!==null;)N.push({data:k[0],index:k.index,mode:s,length:k[0].length});return N}function t(F){var s=a(Q.NUMERIC,I.NUMERIC,F),M=a(Q.ALPHANUMERIC,I.ALPHANUMERIC,F),N,k;C.isKanjiModeEnabled()?(N=a(Q.BYTE,I.BYTE,F),k=a(Q.KANJI,I.KANJI,F)):(N=a(Q.BYTE_KANJI,I.BYTE,F),k=[]);var w=s.concat(M,N,k);return w.sort(function(D,y){return D.index-y.index}).map(function(D){return{data:D.data,mode:D.mode,length:D.length}})}function e(F,s){switch(s){case I.NUMERIC:return g.getBitsLength(F);case I.ALPHANUMERIC:return B.getBitsLength(F);case I.KANJI:return o.getBitsLength(F);case I.BYTE:return i.getBitsLength(F)}}function G(F){return F.reduce(function(s,M){var N=s.length-1>=0?s[s.length-1]:null;return N&&N.mode===M.mode?(s[s.length-1].data+=M.data,s):(s.push(M),s)},[])}function c(F){for(var s=[],M=0;M<F.length;M++){var N=F[M];switch(N.mode){case I.NUMERIC:s.push([N,{data:N.data,mode:I.ALPHANUMERIC,length:N.length},{data:N.data,mode:I.BYTE,length:N.length}]);break;case I.ALPHANUMERIC:s.push([N,{data:N.data,mode:I.BYTE,length:N.length}]);break;case I.KANJI:s.push([N,{data:N.data,mode:I.BYTE,length:h(N.data)}]);break;case I.BYTE:s.push([{data:N.data,mode:I.BYTE,length:h(N.data)}])}}return s}function p(F,s){for(var M={},N={start:{}},k=["start"],w=0;w<F.length;w++){for(var D=F[w],y=[],O=0;O<D.length;O++){var R=D[O],m=""+w+O;y.push(m),M[m]={node:R,lastCount:0},N[m]={};for(var V=0;V<k.length;V++){var j=k[V];M[j]&&M[j].node.mode===R.mode?(N[j][m]=e(M[j].lastCount+R.length,R.mode)-e(M[j].lastCount,R.mode),M[j].lastCount+=R.length):(M[j]&&(M[j].lastCount=R.length),N[j][m]=e(R.length,R.mode)+4+I.getCharCountIndicator(R.mode,s))}}k=y}for(V=0;V<k.length;V++)N[k[V]].end=0;return{map:N,table:M}}function Y(F,s){var M,N=I.getBestModeForData(F);if(M=I.from(s,N),M!==I.BYTE&&M.bit<N.bit)throw new Error('"'+F+'" cannot be encoded with mode '+I.toString(M)+`.
 Suggested mode is: `+I.toString(N));switch(M===I.KANJI&&!C.isKanjiModeEnabled()&&(M=I.BYTE),M){case I.NUMERIC:return new g(F);case I.ALPHANUMERIC:return new B(F);case I.KANJI:return new o(F);case I.BYTE:return new i(F)}}A.fromArray=function(s){return s.reduce(function(M,N){return typeof N=="string"?M.push(Y(N,null)):N.data&&M.push(Y(N.data,N.mode)),M},[])},A.fromString=function(s,M){for(var N=t(s,C.isKanjiModeEnabled()),k=c(N),w=p(k,M),D=E.find_path(w.map,"start","end"),y=[],O=1;O<D.length-1;O++)y.push(w.table[D[O]].node);return A.fromArray(G(y))},A.rawSplit=function(s){return A.fromArray(t(s,C.isKanjiModeEnabled()))}})(gw);var eD=kg,dB=qI,CC=lB,BF=Un,CF=Rn,EF=Wa,iF=Va,RC=Ta,qC=KB,DF=fn,BB=_a,oF=Aw,aF=Ng,EC=gw,wF=wE;function GF(A,I){for(var g=A.size,B=iF.getPositions(I),i=0;i<B.length;i++)for(var o=B[i][0],Q=B[i][1],C=-1;C<=7;C++)if(!(o+C<=-1||g<=o+C))for(var E=-1;E<=7;E++)Q+E<=-1||g<=Q+E||(C>=0&&C<=6&&(E===0||E===6)||E>=0&&E<=6&&(C===0||C===6)||C>=2&&C<=4&&E>=2&&E<=4?A.set(o+C,Q+E,!0,!0):A.set(o+C,Q+E,!1,!0))}function kF(A){for(var I=A.size,g=8;g<I-8;g++){var B=g%2===0;A.set(g,6,B,!0),A.set(6,g,B,!0)}}function NF(A,I){for(var g=EF.getPositions(I),B=0;B<g.length;B++)for(var i=g[B][0],o=g[B][1],Q=-2;Q<=2;Q++)for(var C=-2;C<=2;C++)Q===-2||Q===2||C===-2||C===2||Q===0&&C===0?A.set(i+Q,o+C,!0,!0):A.set(i+Q,o+C,!1,!0)}function cF(A,I){for(var g=A.size,B=BB.getEncodedBits(I),i,o,Q,C=0;C<18;C++)i=Math.floor(C/3),o=C%3+g-8-3,Q=(B>>C&1)===1,A.set(i,o,Q,!0),A.set(o,i,Q,!0)}function iC(A,I,g){var B=A.size,i=oF.getEncodedBits(I,g),o,Q;for(o=0;o<15;o++)Q=(i>>o&1)===1,o<6?A.set(o,8,Q,!0):o<8?A.set(o+1,8,Q,!0):A.set(B-15+o,8,Q,!0),o<8?A.set(8,B-o-1,Q,!0):o<9?A.set(8,15-o-1+1,Q,!0):A.set(8,15-o-1,Q,!0);A.set(B-8,8,1,!0)}function hF(A,I){for(var g=A.size,B=-1,i=g-1,o=7,Q=0,C=g-1;C>0;C-=2)for(C===6&&C--;;){for(var E=0;E<2;E++)if(!A.isReserved(i,C-E)){var h=!1;Q<I.length&&(h=(I[Q]>>>o&1)===1),A.set(i,C-E,h),o--,o===-1&&(Q++,o=7)}if(i+=B,i<0||g<=i){i-=B,B=-B;break}}}function tF(A,I,g){var B=new BF;g.forEach(function(h){B.put(h.mode.bit,4),B.put(h.getLength(),aF.getCharCountIndicator(h.mode,A)),h.write(B)});var i=dB.getSymbolTotalCodewords(A),o=qC.getTotalCodewordsCount(A,I),Q=(i-o)*8;for(B.getLengthInBits()+4<=Q&&B.put(0,4);B.getLengthInBits()%8!==0;)B.putBit(0);for(var C=(Q-B.getLengthInBits())/8,E=0;E<C;E++)B.put(E%2?17:236,8);return eF(B,A,I)}function eF(A,I,g){for(var B=dB.getSymbolTotalCodewords(I),i=qC.getTotalCodewordsCount(I,g),o=B-i,Q=qC.getBlocksCount(I,g),C=B%Q,E=Q-C,h=Math.floor(B/Q),a=Math.floor(o/Q),t=a+1,e=h-a,G=new DF(e),c=0,p=new Array(Q),Y=new Array(Q),F=0,s=eD.from(A.buffer),M=0;M<Q;M++){var N=M<E?a:t;p[M]=s.slice(c,c+N),Y[M]=G.encode(p[M]),c+=N,F=Math.max(F,N)}var k=eD.alloc(B),w=0,D,y;for(D=0;D<F;D++)for(y=0;y<Q;y++)D<p[y].length&&(k[w++]=p[y][D]);for(D=0;D<e;D++)for(y=0;y<Q;y++)k[w++]=Y[y][D];return k}function MF(A,I,g,B){var i;if(wF(A))i=EC.fromArray(A);else if(typeof A=="string"){var o=I;if(!o){var Q=EC.rawSplit(A);o=BB.getBestVersionForData(Q,g)}i=EC.fromString(A,o||40)}else throw new Error("Invalid data");var C=BB.getBestVersionForData(i,g);if(!C)throw new Error("The amount of data is too big to be stored in a QR Code");if(!I)I=C;else if(I<C)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+C+`.
`);var E=tF(I,g,i),h=dB.getSymbolSize(I),a=new CF(h);return GF(a,I),kF(a),NF(a,I),iC(a,g,0),I>=7&&cF(a,I),hF(a,E),isNaN(B)&&(B=RC.getBestMask(a,iC.bind(null,a,g))),RC.applyMask(B,a),iC(a,g,B),{modules:a,version:I,errorCorrectionLevel:g,maskPattern:B,segments:i}}La.create=function(I,g){if(typeof I>"u"||I==="")throw new Error("No input text");var B=CC.M,i,o;return typeof g<"u"&&(B=CC.from(g.errorCorrectionLevel,CC.M),i=BB.from(g.version),o=RC.from(g.maskPattern),g.toSJISFunc&&dB.setToSJISFunction(g.toSJISFunc)),MF(I,i,B,o)};var Qw={},tE={};(function(A){function I(g){if(typeof g=="number"&&(g=g.toString()),typeof g!="string")throw new Error("Color should be defined as hex string");var B=g.slice().replace("#","").split("");if(B.length<3||B.length===5||B.length>8)throw new Error("Invalid hex color: "+g);(B.length===3||B.length===4)&&(B=Array.prototype.concat.apply([],B.map(function(o){return[o,o]}))),B.length===6&&B.push("F","F");var i=parseInt(B.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:i&255,hex:"#"+B.slice(0,6).join("")}}A.getOptions=function(B){B||(B={}),B.color||(B.color={});var i=typeof B.margin>"u"||B.margin===null||B.margin<0?4:B.margin,o=B.width&&B.width>=21?B.width:void 0,Q=B.scale||4;return{width:o,scale:o?4:Q,margin:i,color:{dark:I(B.color.dark||"#000000ff"),light:I(B.color.light||"#ffffffff")},type:B.type,rendererOpts:B.rendererOpts||{}}},A.getScale=function(B,i){return i.width&&i.width>=B+i.margin*2?i.width/(B+i.margin*2):i.scale},A.getImageWidth=function(B,i){var o=A.getScale(B,i);return Math.floor((B+i.margin*2)*o)},A.qrToImageData=function(B,i,o){for(var Q=i.modules.size,C=i.modules.data,E=A.getScale(Q,o),h=Math.floor((Q+o.margin*2)*E),a=o.margin*E,t=[o.color.light,o.color.dark],e=0;e<h;e++)for(var G=0;G<h;G++){var c=(e*h+G)*4,p=o.color.light;if(e>=a&&G>=a&&e<h-a&&G<h-a){var Y=Math.floor((e-a)/E),F=Math.floor((G-a)/E);p=t[C[Y*Q+F]?1:0]}B[c++]=p.r,B[c++]=p.g,B[c++]=p.b,B[c]=p.a}}})(tE);(function(A){var I=tE;function g(i,o,Q){i.clearRect(0,0,o.width,o.height),o.style||(o.style={}),o.height=Q,o.width=Q,o.style.height=Q+"px",o.style.width=Q+"px"}function B(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}A.render=function(o,Q,C){var E=C,h=Q;typeof E>"u"&&(!Q||!Q.getContext)&&(E=Q,Q=void 0),Q||(h=B()),E=I.getOptions(E);var a=I.getImageWidth(o.modules.size,E),t=h.getContext("2d"),e=t.createImageData(a,a);return I.qrToImageData(e.data,o,E),g(t,h,a),t.putImageData(e,0,0),h},A.renderToDataURL=function(o,Q,C){var E=C;typeof E>"u"&&(!Q||!Q.getContext)&&(E=Q,Q=void 0),E||(E={});var h=A.render(o,Q,E),a=E.type||"image/png",t=E.rendererOpts||{};return h.toDataURL(a,t.quality)}})(Qw);var Bw={},sF=tE;function MD(A,I){var g=A.a/255,B=I+'="'+A.hex+'"';return g<1?B+" "+I+'-opacity="'+g.toFixed(2).slice(1)+'"':B}function DC(A,I,g){var B=A+I;return typeof g<"u"&&(B+=" "+g),B}function nF(A,I,g){for(var B="",i=0,o=!1,Q=0,C=0;C<A.length;C++){var E=Math.floor(C%I),h=Math.floor(C/I);!E&&!o&&(o=!0),A[C]?(Q++,C>0&&E>0&&A[C-1]||(B+=o?DC("M",E+g,.5+h+g):DC("m",i,0),i=0,o=!1),E+1<I&&A[C+1]||(B+=DC("h",Q),Q=0)):i++}return B}Bw.render=function(I,g,B){var i=sF.getOptions(g),o=I.modules.size,Q=I.modules.data,C=o+i.margin*2,E=i.color.light.a?"<path "+MD(i.color.light,"fill")+' d="M0 0h'+C+"v"+C+'H0z"/>':"",h="<path "+MD(i.color.dark,"stroke")+' d="'+nF(Q,o,i.margin)+'"/>',a='viewBox="0 0 '+C+" "+C+'"',t=i.width?'width="'+i.width+'" height="'+i.width+'" ':"",e='<svg xmlns="http://www.w3.org/2000/svg" '+t+a+' shape-rendering="crispEdges">'+E+h+`</svg>
`;return typeof B=="function"&&B(null,e),e};var FF=hn,lC=La,Cw=Qw,yF=Bw;function eE(A,I,g,B,i){var o=[].slice.call(arguments,1),Q=o.length,C=typeof o[Q-1]=="function";if(!C&&!FF())throw new Error("Callback required as last argument");if(C){if(Q<2)throw new Error("Too few arguments provided");Q===2?(i=g,g=I,I=B=void 0):Q===3&&(I.getContext&&typeof i>"u"?(i=B,B=void 0):(i=B,B=g,g=I,I=void 0))}else{if(Q<1)throw new Error("Too few arguments provided");return Q===1?(g=I,I=B=void 0):Q===2&&!I.getContext&&(B=g,g=I,I=void 0),new Promise(function(h,a){try{var t=lC.create(g,B);h(A(t,I,B))}catch(e){a(e)}})}try{var E=lC.create(g,B);i(null,A(E,I,B))}catch(h){i(h)}}UQ.create=lC.create;UQ.toCanvas=eE.bind(null,Cw.render);UQ.toDataURL=eE.bind(null,Cw.renderToDataURL);UQ.toString=eE.bind(null,function(A,I,g){return yF.render(A,g)});var YF=function(){var A=document.getSelection();if(!A.rangeCount)return function(){};for(var I=document.activeElement,g=[],B=0;B<A.rangeCount;B++)g.push(A.getRangeAt(B));switch(I.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":I.blur();break;default:I=null;break}return A.removeAllRanges(),function(){A.type==="Caret"&&A.removeAllRanges(),A.rangeCount||g.forEach(function(i){A.addRange(i)}),I&&I.focus()}},JF=YF,sD={"text/plain":"Text","text/html":"Url",default:"Text"},pF="Copy to clipboard: #{key}, Enter";function rF(A){var I=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return A.replace(/#{\s*key\s*}/g,I)}function UF(A,I){var g,B,i,o,Q,C,E=!1;I||(I={}),g=I.debug||!1;try{i=JF(),o=document.createRange(),Q=document.getSelection(),C=document.createElement("span"),C.textContent=A,C.ariaHidden="true",C.style.all="unset",C.style.position="fixed",C.style.top=0,C.style.clip="rect(0, 0, 0, 0)",C.style.whiteSpace="pre",C.style.webkitUserSelect="text",C.style.MozUserSelect="text",C.style.msUserSelect="text",C.style.userSelect="text",C.addEventListener("copy",function(a){if(a.stopPropagation(),I.format)if(a.preventDefault(),typeof a.clipboardData>"u"){g&&console.warn("unable to use e.clipboardData"),g&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var t=sD[I.format]||sD.default;window.clipboardData.setData(t,A)}else a.clipboardData.clearData(),a.clipboardData.setData(I.format,A);I.onCopy&&(a.preventDefault(),I.onCopy(a.clipboardData))}),document.body.appendChild(C),o.selectNodeContents(C),Q.addRange(o);var h=document.execCommand("copy");if(!h)throw new Error("copy command was unsuccessful");E=!0}catch(a){g&&console.error("unable to copy using execCommand: ",a),g&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(I.format||"text",A),I.onCopy&&I.onCopy(window.clipboardData),E=!0}catch(t){g&&console.error("unable to copy using clipboardData: ",t),g&&console.error("falling back to prompt"),B=rF("message"in I?I.message:pF),window.prompt(B,A)}}finally{Q&&(typeof Q.removeRange=="function"?Q.removeRange(o):Q.removeAllRanges()),C&&document.body.removeChild(C),i()}return E}var RF=UF,qA,wQ,ME,Ew,nD,sE,iw,$I={},OB=[],qF=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function _I(A,I){for(var g in I)A[g]=I[g];return A}function Dw(A){var I=A.parentNode;I&&I.removeChild(A)}function Ig(A,I,g){var B,i=arguments,o={};for(B in I)B!=="key"&&B!=="ref"&&(o[B]=I[B]);if(arguments.length>3)for(g=[g],B=3;B<arguments.length;B++)g.push(i[B]);if(g!=null&&(o.children=g),typeof A=="function"&&A.defaultProps!=null)for(B in A.defaultProps)o[B]===void 0&&(o[B]=A.defaultProps[B]);return CB(A,o,I&&I.key,I&&I.ref,null)}function CB(A,I,g,B,i){var o={type:A,props:I,key:g,ref:B,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:i};return i==null&&(o.__v=o),qA.vnode&&qA.vnode(o),o}function ow(){return{}}function qQ(A){return A.children}function ZI(A,I){this.props=A,this.context=I}function tQ(A,I){if(I==null)return A.__?tQ(A.__,A.__.__k.indexOf(A)+1):null;for(var g;I<A.__k.length;I++)if((g=A.__k[I])!=null&&g.__e!=null)return g.__e;return typeof A.type=="function"?tQ(A):null}function aw(A){var I,g;if((A=A.__)!=null&&A.__c!=null){for(A.__e=A.__c.base=null,I=0;I<A.__k.length;I++)if((g=A.__k[I])!=null&&g.__e!=null){A.__e=A.__c.base=g.__e;break}return aw(A)}}function vQ(A){(!A.__d&&(A.__d=!0)&&wQ.push(A)&&!ME++||nD!==qA.debounceRendering)&&((nD=qA.debounceRendering)||Ew)(lF)}function lF(){for(var A;ME=wQ.length;)A=wQ.sort(function(I,g){return I.__v.__b-g.__v.__b}),wQ=[],A.some(function(I){var g,B,i,o,Q,C,E;I.__d&&(C=(Q=(g=I).__v).__e,(E=g.__P)&&(B=[],(i=_I({},Q)).__v=i,o=nE(E,Q,i,g.__n,E.ownerSVGElement!==void 0,null,B,C??tQ(Q)),Gw(B,Q),o!=C&&aw(Q)))})}function ww(A,I,g,B,i,o,Q,C,E){var h,a,t,e,G,c,p,Y=g&&g.__k||OB,F=Y.length;if(C==$I&&(C=o!=null?o[0]:F?tQ(g,0):null),h=0,I.__k=ag(I.__k,function(s){if(s!=null){if(s.__=I,s.__b=I.__b+1,(t=Y[h])===null||t&&s.key==t.key&&s.type===t.type)Y[h]=void 0;else for(a=0;a<F;a++){if((t=Y[a])&&s.key==t.key&&s.type===t.type){Y[a]=void 0;break}t=null}if(e=nE(A,s,t=t||$I,B,i,o,Q,C,E),(a=s.ref)&&t.ref!=a&&(p||(p=[]),t.ref&&p.push(t.ref,null,s),p.push(a,s.__c||e,s)),e!=null){var M;if(c==null&&(c=e),s.__d!==void 0)M=s.__d,s.__d=void 0;else if(o==t||e!=C||e.parentNode==null){A:if(C==null||C.parentNode!==A)A.appendChild(e),M=null;else{for(G=C,a=0;(G=G.nextSibling)&&a<F;a+=2)if(G==e)break A;A.insertBefore(e,C),M=C}I.type=="option"&&(A.value="")}C=M!==void 0?M:e.nextSibling,typeof I.type=="function"&&(I.__d=C)}else C&&t.__e==C&&C.parentNode!=A&&(C=tQ(t))}return h++,s}),I.__e=c,o!=null&&typeof I.type!="function")for(h=o.length;h--;)o[h]!=null&&Dw(o[h]);for(h=F;h--;)Y[h]!=null&&GQ(Y[h],Y[h]);if(p)for(h=0;h<p.length;h++)kw(p[h],p[++h],p[++h])}function ag(A,I,g){if(g==null&&(g=[]),A==null||typeof A=="boolean")I&&g.push(I(null));else if(Array.isArray(A))for(var B=0;B<A.length;B++)ag(A[B],I,g);else g.push(I?I(typeof A=="string"||typeof A=="number"?CB(null,A,null,null,A):A.__e!=null||A.__c!=null?CB(A.type,A.props,A.key,null,A.__v):A):A);return g}function KF(A,I,g,B,i){var o;for(o in g)o==="children"||o==="key"||o in I||EB(A,o,null,g[o],B);for(o in I)i&&typeof I[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||g[o]===I[o]||EB(A,o,I[o],g[o],B)}function FD(A,I,g){I[0]==="-"?A.setProperty(I,g):A[I]=typeof g=="number"&&qF.test(I)===!1?g+"px":g??""}function EB(A,I,g,B,i){var o,Q,C,E,h;if(i?I==="className"&&(I="class"):I==="class"&&(I="className"),I==="style")if(o=A.style,typeof g=="string")o.cssText=g;else{if(typeof B=="string"&&(o.cssText="",B=null),B)for(E in B)g&&E in g||FD(o,E,"");if(g)for(h in g)B&&g[h]===B[h]||FD(o,h,g[h])}else I[0]==="o"&&I[1]==="n"?(Q=I!==(I=I.replace(/Capture$/,"")),C=I.toLowerCase(),I=(C in A?C:I).slice(2),g?(B||A.addEventListener(I,yD,Q),(A.l||(A.l={}))[I]=g):A.removeEventListener(I,yD,Q)):I!=="list"&&I!=="tagName"&&I!=="form"&&I!=="type"&&I!=="size"&&!i&&I in A?A[I]=g??"":typeof g!="function"&&I!=="dangerouslySetInnerHTML"&&(I!==(I=I.replace(/^xlink:?/,""))?g==null||g===!1?A.removeAttributeNS("http://www.w3.org/1999/xlink",I.toLowerCase()):A.setAttributeNS("http://www.w3.org/1999/xlink",I.toLowerCase(),g):g==null||g===!1&&!/^ar/.test(I)?A.removeAttribute(I):A.setAttribute(I,g))}function yD(A){this.l[A.type](qA.event?qA.event(A):A)}function nE(A,I,g,B,i,o,Q,C,E){var h,a,t,e,G,c,p,Y,F,s,M=I.type;if(I.constructor!==void 0)return null;(h=qA.__b)&&h(I);try{A:if(typeof M=="function"){if(Y=I.props,F=(h=M.contextType)&&B[h.__c],s=h?F?F.props.value:h.__:B,g.__c?p=(a=I.__c=g.__c).__=a.__E:("prototype"in M&&M.prototype.render?I.__c=a=new M(Y,s):(I.__c=a=new ZI(Y,s),a.constructor=M,a.render=HF),F&&F.sub(a),a.props=Y,a.state||(a.state={}),a.context=s,a.__n=B,t=a.__d=!0,a.__h=[]),a.__s==null&&(a.__s=a.state),M.getDerivedStateFromProps!=null&&(a.__s==a.state&&(a.__s=_I({},a.__s)),_I(a.__s,M.getDerivedStateFromProps(Y,a.__s))),e=a.props,G=a.state,t)M.getDerivedStateFromProps==null&&a.componentWillMount!=null&&a.componentWillMount(),a.componentDidMount!=null&&a.__h.push(a.componentDidMount);else{if(M.getDerivedStateFromProps==null&&Y!==e&&a.componentWillReceiveProps!=null&&a.componentWillReceiveProps(Y,s),!a.__e&&a.shouldComponentUpdate!=null&&a.shouldComponentUpdate(Y,a.__s,s)===!1||I.__v===g.__v&&!a.__){for(a.props=Y,a.state=a.__s,I.__v!==g.__v&&(a.__d=!1),a.__v=I,I.__e=g.__e,I.__k=g.__k,a.__h.length&&Q.push(a),h=0;h<I.__k.length;h++)I.__k[h]&&(I.__k[h].__=I);break A}a.componentWillUpdate!=null&&a.componentWillUpdate(Y,a.__s,s),a.componentDidUpdate!=null&&a.__h.push(function(){a.componentDidUpdate(e,G,c)})}a.context=s,a.props=Y,a.state=a.__s,(h=qA.__r)&&h(I),a.__d=!1,a.__v=I,a.__P=A,h=a.render(a.props,a.state,a.context),I.__k=h!=null&&h.type==qQ&&h.key==null?h.props.children:Array.isArray(h)?h:[h],a.getChildContext!=null&&(B=_I(_I({},B),a.getChildContext())),t||a.getSnapshotBeforeUpdate==null||(c=a.getSnapshotBeforeUpdate(e,G)),ww(A,I,g,B,i,o,Q,C,E),a.base=I.__e,a.__h.length&&Q.push(a),p&&(a.__E=a.__=null),a.__e=!1}else o==null&&I.__v===g.__v?(I.__k=g.__k,I.__e=g.__e):I.__e=SF(g.__e,I,g,B,i,o,Q,E);(h=qA.diffed)&&h(I)}catch(N){I.__v=null,qA.__e(N,I,g)}return I.__e}function Gw(A,I){qA.__c&&qA.__c(I,A),A.some(function(g){try{A=g.__h,g.__h=[],A.some(function(B){B.call(g)})}catch(B){qA.__e(B,g.__v)}})}function SF(A,I,g,B,i,o,Q,C){var E,h,a,t,e,G=g.props,c=I.props;if(i=I.type==="svg"||i,o!=null){for(E=0;E<o.length;E++)if((h=o[E])!=null&&((I.type===null?h.nodeType===3:h.localName===I.type)||A==h)){A=h,o[E]=null;break}}if(A==null){if(I.type===null)return document.createTextNode(c);A=i?document.createElementNS("http://www.w3.org/2000/svg",I.type):document.createElement(I.type,c.is&&{is:c.is}),o=null,C=!1}if(I.type===null)G!==c&&A.data!=c&&(A.data=c);else{if(o!=null&&(o=OB.slice.call(A.childNodes)),a=(G=g.props||$I).dangerouslySetInnerHTML,t=c.dangerouslySetInnerHTML,!C){if(G===$I)for(G={},e=0;e<A.attributes.length;e++)G[A.attributes[e].name]=A.attributes[e].value;(t||a)&&(t&&a&&t.__html==a.__html||(A.innerHTML=t&&t.__html||""))}KF(A,c,G,i,C),t?I.__k=[]:(I.__k=I.props.children,ww(A,I,g,B,I.type!=="foreignObject"&&i,o,Q,$I,C)),C||("value"in c&&(E=c.value)!==void 0&&E!==A.value&&EB(A,"value",E,G.value,!1),"checked"in c&&(E=c.checked)!==void 0&&E!==A.checked&&EB(A,"checked",E,G.checked,!1))}return A}function kw(A,I,g){try{typeof A=="function"?A(I):A.current=I}catch(B){qA.__e(B,g)}}function GQ(A,I,g){var B,i,o;if(qA.unmount&&qA.unmount(A),(B=A.ref)&&(B.current&&B.current!==A.__e||kw(B,null,I)),g||typeof A.type=="function"||(g=(i=A.__e)!=null),A.__e=A.__d=void 0,(B=A.__c)!=null){if(B.componentWillUnmount)try{B.componentWillUnmount()}catch(Q){qA.__e(Q,I)}B.base=B.__P=null}if(B=A.__k)for(o=0;o<B.length;o++)B[o]&&GQ(B[o],I,g);i!=null&&Dw(i)}function HF(A,I,g){return this.constructor(A,g)}function eQ(A,I,g){var B,i,o;qA.__&&qA.__(A,I),i=(B=g===sE)?null:g&&g.__k||I.__k,A=Ig(qQ,null,[A]),o=[],nE(I,(B?I:g||I).__k=A,i||$I,$I,I.ownerSVGElement!==void 0,g&&!B?[g]:i?null:OB.slice.call(I.childNodes),o,g||$I,B),Gw(o,A)}function Nw(A,I){eQ(A,I,sE)}function dF(A,I){var g,B;for(B in I=_I(_I({},A.props),I),arguments.length>2&&(I.children=OB.slice.call(arguments,2)),g={},I)B!=="key"&&B!=="ref"&&(g[B]=I[B]);return CB(A.type,g,I.key||A.key,I.ref||A.ref,null)}function cw(A){var I={},g={__c:"__cC"+iw++,__:A,Consumer:function(B,i){return B.children(i)},Provider:function(B){var i,o=this;return this.getChildContext||(i=[],this.getChildContext=function(){return I[g.__c]=o,I},this.shouldComponentUpdate=function(Q){o.props.value!==Q.value&&i.some(function(C){C.context=Q.value,vQ(C)})},this.sub=function(Q){i.push(Q);var C=Q.componentWillUnmount;Q.componentWillUnmount=function(){i.splice(i.indexOf(Q),1),C&&C.call(Q)}}),B.children}};return g.Consumer.contextType=g,g.Provider.__=g,g}qA={__e:function(A,I){for(var g,B;I=I.__;)if((g=I.__c)&&!g.__)try{if(g.constructor&&g.constructor.getDerivedStateFromError!=null&&(B=!0,g.setState(g.constructor.getDerivedStateFromError(A))),g.componentDidCatch!=null&&(B=!0,g.componentDidCatch(A)),B)return vQ(g.__E=g)}catch(i){A=i}throw A}},ZI.prototype.setState=function(A,I){var g;g=this.__s!==this.state?this.__s:this.__s=_I({},this.state),typeof A=="function"&&(A=A(g,this.props)),A&&_I(g,A),A!=null&&this.__v&&(I&&this.__h.push(I),vQ(this))},ZI.prototype.forceUpdate=function(A){this.__v&&(this.__e=!0,A&&this.__h.push(A),vQ(this))},ZI.prototype.render=qQ,wQ=[],ME=0,Ew=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,sE=$I,iw=0;var Ug,YI,YD,Wg=0,KC=[],JD=qA.__r,pD=qA.diffed,rD=qA.__c,UD=qA.unmount;function vg(A,I){qA.__h&&qA.__h(YI,A,Wg||I),Wg=0;var g=YI.__H||(YI.__H={__:[],__h:[]});return A>=g.__.length&&g.__.push({}),g.__[A]}function FE(A){return Wg=1,yE(Fw,A)}function yE(A,I,g){var B=vg(Ug++,2);return B.__c||(B.__c=YI,B.__=[g?g(I):Fw(void 0,I),function(i){var o=A(B.__[0],i);B.__[0]!==o&&(B.__[0]=o,B.__c.setState({}))}]),B.__}function hw(A,I){var g=vg(Ug++,3);!qA.__s&&JE(g.__H,I)&&(g.__=A,g.__H=I,YI.__H.__h.push(g))}function YE(A,I){var g=vg(Ug++,4);!qA.__s&&JE(g.__H,I)&&(g.__=A,g.__H=I,YI.__h.push(g))}function tw(A){return Wg=5,mB(function(){return{current:A}},[])}function ew(A,I,g){Wg=6,YE(function(){typeof A=="function"?A(I()):A&&(A.current=I())},g==null?g:g.concat(A))}function mB(A,I){var g=vg(Ug++,7);return JE(g.__H,I)?(g.__H=I,g.__h=A,g.__=A()):g.__}function Mw(A,I){return Wg=8,mB(function(){return A},I)}function sw(A){var I=YI.context[A.__c],g=vg(Ug++,9);return g.__c=A,I?(g.__==null&&(g.__=!0,I.sub(YI)),I.props.value):A.__}function nw(A,I){qA.useDebugValue&&qA.useDebugValue(I?I(A):A)}function OF(A){var I=vg(Ug++,10),g=FE();return I.__=A,YI.componentDidCatch||(YI.componentDidCatch=function(B){I.__&&I.__(B),g[1](B)}),[g[0],function(){g[1](void 0)}]}function mF(){KC.some(function(A){if(A.__P)try{A.__H.__h.forEach(SC),A.__H.__h.forEach(HC),A.__H.__h=[]}catch(I){return A.__H.__h=[],qA.__e(I,A.__v),!0}}),KC=[]}function SC(A){A.t&&A.t()}function HC(A){var I=A.__();typeof I=="function"&&(A.t=I)}function JE(A,I){return!A||I.some(function(g,B){return g!==A[B]})}function Fw(A,I){return typeof I=="function"?I(A):I}qA.__r=function(A){JD&&JD(A),Ug=0,(YI=A.__c).__H&&(YI.__H.__h.forEach(SC),YI.__H.__h.forEach(HC),YI.__H.__h=[])},qA.diffed=function(A){pD&&pD(A);var I=A.__c;if(I){var g=I.__H;g&&g.__h.length&&(KC.push(I)!==1&&YD===qA.requestAnimationFrame||((YD=qA.requestAnimationFrame)||function(B){var i,o=function(){clearTimeout(Q),cancelAnimationFrame(i),setTimeout(B)},Q=setTimeout(o,100);typeof window<"u"&&(i=requestAnimationFrame(o))})(mF))}},qA.__c=function(A,I){I.some(function(g){try{g.__h.forEach(SC),g.__h=g.__h.filter(function(B){return!B.__||HC(B)})}catch(B){I.some(function(i){i.__h&&(i.__h=[])}),I=[],qA.__e(B,g.__v)}}),rD&&rD(A,I)},qA.unmount=function(A){UD&&UD(A);var I=A.__c;if(I){var g=I.__H;if(g)try{g.__.forEach(function(B){return B.t&&B.t()})}catch(B){qA.__e(B,I.__v)}}};function pE(A,I){for(var g in I)A[g]=I[g];return A}function dC(A,I){for(var g in A)if(g!=="__source"&&!(g in I))return!0;for(var B in I)if(B!=="__source"&&A[B]!==I[B])return!0;return!1}var yw=function(A){var I,g;function B(i){var o;return(o=A.call(this,i)||this).isPureReactComponent=!0,o}return g=A,(I=B).prototype=Object.create(g.prototype),I.prototype.constructor=I,I.__proto__=g,B.prototype.shouldComponentUpdate=function(i,o){return dC(this.props,i)||dC(this.state,o)},B}(ZI);function Yw(A,I){function g(i){var o=this.props.ref,Q=o==i.ref;return!Q&&o&&(o.call?o(null):o.current=null),I?!I(this.props,i)||!Q:dC(this.props,i)}function B(i){return this.shouldComponentUpdate=g,Ig(A,pE({},i))}return B.prototype.isReactComponent=!0,B.displayName="Memo("+(A.displayName||A.name)+")",B.t=!0,B}var RD=qA.__b;function Jw(A){function I(g){var B=pE({},g);return delete B.ref,A(B,g.ref)}return I.prototype.isReactComponent=I.t=!0,I.displayName="ForwardRef("+(A.displayName||A.name)+")",I}qA.__b=function(A){A.type&&A.type.t&&A.ref&&(A.props.ref=A.ref,A.ref=null),RD&&RD(A)};var qD=function(A,I){return A?ag(A).reduce(function(g,B,i){return g.concat(I(B,i))},[]):null},pw={map:qD,forEach:qD,count:function(A){return A?ag(A).length:0},only:function(A){if((A=ag(A)).length!==1)throw new Error("Children.only() expects only one child.");return A[0]},toArray:ag},ZF=qA.__e;function rw(A){return A&&((A=pE({},A)).__c=null,A.__k=A.__k&&A.__k.map(rw)),A}function iB(){this.__u=0,this.o=null,this.__b=null}function Uw(A){var I=A.__.__c;return I&&I.u&&I.u(A)}function Rw(A){var I,g,B;function i(o){if(I||(I=A()).then(function(Q){g=Q.default||Q},function(Q){B=Q}),B)throw B;if(!g)throw I;return Ig(g,o)}return i.displayName="Lazy",i.t=!0,i}function Og(){this.i=null,this.l=null}qA.__e=function(A,I,g){if(A.then){for(var B,i=I;i=i.__;)if((B=i.__c)&&B.__c)return B.__c(A,I.__c)}ZF(A,I,g)},(iB.prototype=new ZI).__c=function(A,I){var g=this;g.o==null&&(g.o=[]),g.o.push(I);var B=Uw(g.__v),i=!1,o=function(){i||(i=!0,B?B(Q):Q())};I.__c=I.componentWillUnmount,I.componentWillUnmount=function(){o(),I.__c&&I.__c()};var Q=function(){var C;if(!--g.__u)for(g.__v.__k[0]=g.state.u,g.setState({u:g.__b=null});C=g.o.pop();)C.forceUpdate()};g.__u++||g.setState({u:g.__b=g.__v.__k[0]}),A.then(o,o)},iB.prototype.render=function(A,I){return this.__b&&(this.__v.__k[0]=rw(this.__b),this.__b=null),[Ig(ZI,null,I.u?null:A.children),I.u&&A.fallback]};var lD=function(A,I,g){if(++g[1]===g[0]&&A.l.delete(I),A.props.revealOrder&&(A.props.revealOrder[0]!=="t"||!A.l.size))for(g=A.i;g;){for(;g.length>3;)g.pop()();if(g[1]<g[0])break;A.i=g=g[2]}};(Og.prototype=new ZI).u=function(A){var I=this,g=Uw(I.__v),B=I.l.get(A);return B[0]++,function(i){var o=function(){I.props.revealOrder?(B.push(i),lD(I,A,B)):i()};g?g(o):o()}},Og.prototype.render=function(A){this.i=null,this.l=new Map;var I=ag(A.children);A.revealOrder&&A.revealOrder[0]==="b"&&I.reverse();for(var g=I.length;g--;)this.l.set(I[g],this.i=[1,0,this.i]);return A.children},Og.prototype.componentDidUpdate=Og.prototype.componentDidMount=function(){var A=this;A.l.forEach(function(I,g){lD(A,g,I)})};var LF=function(){function A(){}var I=A.prototype;return I.getChildContext=function(){return this.props.context},I.render=function(g){return g.children},A}();function fF(A){var I=this,g=A.container,B=Ig(LF,{context:I.context},A.vnode);return I.s&&I.s!==g&&(I.v.parentNode&&I.s.removeChild(I.v),GQ(I.h),I.p=!1),A.vnode?I.p?(g.__k=I.__k,eQ(B,g),I.__k=g.__k):(I.v=document.createTextNode(""),Nw("",g),g.appendChild(I.v),I.p=!0,I.s=g,eQ(B,g,I.v),I.__k=I.v.__k):I.p&&(I.v.parentNode&&I.s.removeChild(I.v),GQ(I.h)),I.h=B,I.componentWillUnmount=function(){I.v.parentNode&&I.s.removeChild(I.v),GQ(I.h)},null}function qw(A,I){return Ig(fF,{vnode:A,container:I})}var KD=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;ZI.prototype.isReactComponent={};var lw=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103;function OC(A,I,g){if(I.__k==null)for(;I.firstChild;)I.removeChild(I.firstChild);return eQ(A,I),typeof g=="function"&&g(),A?A.__c:null}function jF(A,I,g){return Nw(A,I),typeof g=="function"&&g(),A?A.__c:null}var SD=qA.event;function oC(A,I){A["UNSAFE_"+I]&&!A[I]&&Object.defineProperty(A,I,{configurable:!1,get:function(){return this["UNSAFE_"+I]},set:function(g){this["UNSAFE_"+I]=g}})}qA.event=function(A){SD&&(A=SD(A)),A.persist=function(){};var I=!1,g=!1,B=A.stopPropagation;A.stopPropagation=function(){B.call(A),I=!0};var i=A.preventDefault;return A.preventDefault=function(){i.call(A),g=!0},A.isPropagationStopped=function(){return I},A.isDefaultPrevented=function(){return g},A.nativeEvent=A};var HD={configurable:!0,get:function(){return this.class}},dD=qA.vnode;qA.vnode=function(A){A.$$typeof=lw;var I=A.type,g=A.props;if(I){if(g.class!=g.className&&(HD.enumerable="className"in g,g.className!=null&&(g.class=g.className),Object.defineProperty(g,"className",HD)),typeof I!="function"){var B,i,o;for(o in g.defaultValue&&g.value!==void 0&&(g.value||g.value===0||(g.value=g.defaultValue),delete g.defaultValue),Array.isArray(g.value)&&g.multiple&&I==="select"&&(ag(g.children).forEach(function(Q){g.value.indexOf(Q.props.value)!=-1&&(Q.props.selected=!0)}),delete g.value),g)if(B=KD.test(o))break;if(B)for(o in i=A.props={},g)i[KD.test(o)?o.replace(/[A-Z0-9]/,"-$&").toLowerCase():o]=g[o]}(function(Q){var C=A.type,E=A.props;if(E&&typeof C=="string"){var h={};for(var a in E)/^on(Ani|Tra|Tou)/.test(a)&&(E[a.toLowerCase()]=E[a],delete E[a]),h[a.toLowerCase()]=a;if(h.ondoubleclick&&(E.ondblclick=E[h.ondoubleclick],delete E[h.ondoubleclick]),h.onbeforeinput&&(E.onbeforeinput=E[h.onbeforeinput],delete E[h.onbeforeinput]),h.onchange&&(C==="textarea"||C.toLowerCase()==="input"&&!/^fil|che|ra/i.test(E.type))){var t=h.oninput||"oninput";E[t]||(E[t]=E[h.onchange],delete E[h.onchange])}}})(),typeof I=="function"&&!I.m&&I.prototype&&(oC(I.prototype,"componentWillMount"),oC(I.prototype,"componentWillReceiveProps"),oC(I.prototype,"componentWillUpdate"),I.m=!0)}dD&&dD(A)};var bF="16.8.0";function Kw(A){return Ig.bind(null,A)}function rE(A){return!!A&&A.$$typeof===lw}function Sw(A){return rE(A)?dF.apply(null,arguments):A}function Hw(A){return!!A.__k&&(eQ(null,A),!0)}function dw(A){return A&&(A.base||A.nodeType===1&&A)||null}var Ow=function(A,I){return A(I)};const uF={useState:FE,useReducer:yE,useEffect:hw,useLayoutEffect:YE,useRef:tw,useImperativeHandle:ew,useMemo:mB,useCallback:Mw,useContext:sw,useDebugValue:nw,version:"16.8.0",Children:pw,render:OC,hydrate:OC,unmountComponentAtNode:Hw,createPortal:qw,createElement:Ig,createContext:cw,createFactory:Kw,cloneElement:Sw,createRef:ow,Fragment:qQ,isValidElement:rE,findDOMNode:dw,Component:ZI,PureComponent:yw,memo:Yw,forwardRef:Jw,unstable_batchedUpdates:Ow,Suspense:iB,SuspenseList:Og,lazy:Rw},WF=Object.freeze(Object.defineProperty({__proto__:null,Children:pw,Component:ZI,Fragment:qQ,PureComponent:yw,Suspense:iB,SuspenseList:Og,cloneElement:Sw,createContext:cw,createElement:Ig,createFactory:Kw,createPortal:qw,createRef:ow,default:uF,findDOMNode:dw,forwardRef:Jw,hydrate:jF,isValidElement:rE,lazy:Rw,memo:Yw,render:OC,unmountComponentAtNode:Hw,unstable_batchedUpdates:Ow,useCallback:Mw,useContext:sw,useDebugValue:nw,useEffect:hw,useErrorBoundary:OF,useImperativeHandle:ew,useLayoutEffect:YE,useMemo:mB,useReducer:yE,useRef:tw,useState:FE,version:bF},Symbol.toStringTag,{value:"Module"})),VF=MQ(WF);function mw(A){return A&&typeof A=="object"&&"default"in A?A.default:A}var eI=cn,Zw=mw(UQ),TF=mw(RF),YA=VF;function xF(A){Zw.toString(A,{type:"terminal"}).then(console.log)}var XF=`:root {
  --animation-duration: 300ms;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.animated {
  animation-duration: var(--animation-duration);
  animation-fill-mode: both;
}

.fadeIn {
  animation-name: fadeIn;
}

.fadeOut {
  animation-name: fadeOut;
}

#walletconnect-wrapper {
  -webkit-user-select: none;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  user-select: none;
  width: 100%;
  z-index: 99999999999999;
}

.walletconnect-modal__headerLogo {
  height: 21px;
}

.walletconnect-modal__header p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  align-items: flex-start;
  display: flex;
  flex: 1;
  margin-left: 5px;
}

.walletconnect-modal__close__wrapper {
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 10000;
  background: white;
  border-radius: 26px;
  padding: 6px;
  box-sizing: border-box;
  width: 26px;
  height: 26px;
  cursor: pointer;
}

.walletconnect-modal__close__icon {
  position: relative;
  top: 7px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(45deg);
}

.walletconnect-modal__close__line1 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
}

.walletconnect-modal__close__line2 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
  transform: rotate(90deg);
}

.walletconnect-qrcode__base {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background: rgba(37, 41, 46, 0.95);
  height: 100%;
  left: 0;
  pointer-events: auto;
  position: fixed;
  top: 0;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  width: 100%;
  will-change: opacity;
  padding: 40px;
  box-sizing: border-box;
}

.walletconnect-qrcode__text {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 10px 0 20px 0;
  text-align: center;
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .walletconnect-qrcode__text {
    font-size: 4vw;
  }
}

@media only screen and (max-width: 320px) {
  .walletconnect-qrcode__text {
    font-size: 14px;
  }
}

.walletconnect-qrcode__image {
  width: calc(100% - 30px);
  box-sizing: border-box;
  cursor: none;
  margin: 0 auto;
}

.walletconnect-qrcode__notification {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 16px;
  padding: 16px 20px;
  border-radius: 16px;
  text-align: center;
  transition: all 0.1s ease-in-out;
  background: white;
  color: black;
  margin-bottom: -60px;
  opacity: 0;
}

.walletconnect-qrcode__notification.notification__show {
  opacity: 1;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__header {
    height: 130px;
  }
  .walletconnect-modal__base {
    overflow: auto;
  }
}

@media only screen and (min-device-width: 415px) and (max-width: 768px) {
  #content {
    max-width: 768px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 375px) and (max-width: 415px) {
  #content {
    max-width: 414px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 320px) and (max-width: 375px) {
  #content {
    max-width: 375px;
    box-sizing: border-box;
  }
}

@media only screen and (max-width: 320px) {
  #content {
    max-width: 320px;
    box-sizing: border-box;
  }
}

.walletconnect-modal__base {
  -webkit-font-smoothing: antialiased;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);
  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,
    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 41px;
  padding: 24px 24px 22px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  will-change: transform;
  overflow: visible;
  transform: translateY(-50%);
  top: 50%;
  max-width: 500px;
  margin: auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__base {
    padding: 24px 12px;
  }
}

.walletconnect-modal__base .hidden {
  transform: translateY(150%);
  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);
}

.walletconnect-modal__header {
  align-items: center;
  display: flex;
  height: 26px;
  left: 0;
  justify-content: space-between;
  position: absolute;
  top: -42px;
  width: 100%;
}

.walletconnect-modal__base .wc-logo {
  align-items: center;
  display: flex;
  height: 26px;
  margin-top: 15px;
  padding-bottom: 15px;
  pointer-events: auto;
}

.walletconnect-modal__base .wc-logo div {
  background-color: #3399ff;
  height: 21px;
  margin-right: 5px;
  mask-image: url("images/wc-logo.svg") center no-repeat;
  width: 32px;
}

.walletconnect-modal__base .wc-logo p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.walletconnect-modal__base h2 {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 0 0 19px 0;
  text-align: center;
  width: 100%;
}

.walletconnect-modal__base__row {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  height: 56px;
  justify-content: space-between;
  padding: 0 15px;
  position: relative;
  margin: 0px 0px 8px;
  text-align: left;
  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
  text-decoration: none;
}

.walletconnect-modal__base__row:hover {
  background: rgba(60, 66, 82, 0.06);
}

.walletconnect-modal__base__row:active {
  background: rgba(60, 66, 82, 0.06);
  transform: scale(0.975);
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.walletconnect-modal__base__row__h3 {
  color: #25292e;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  padding-bottom: 3px;
}

.walletconnect-modal__base__row__right {
  align-items: center;
  display: flex;
  justify-content: center;
}

.walletconnect-modal__base__row__right__app-icon {
  border-radius: 8px;
  height: 34px;
  margin: 0 11px 2px 0;
  width: 34px;
  background-size: 100%;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-modal__base__row__right__caret {
  height: 18px;
  opacity: 0.3;
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  width: 8px;
  will-change: opacity;
}

.walletconnect-modal__base__row:hover .caret,
.walletconnect-modal__base__row:active .caret {
  opacity: 0.6;
}

.walletconnect-modal__mobile__toggle {
  width: 80%;
  display: flex;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 18px;
  background: #d4d5d9;
}

.walletconnect-modal__single_wallet {
  display: flex;
  justify-content: center;
  margin-top: 7px;
  margin-bottom: 18px;
}

.walletconnect-modal__single_wallet a {
  cursor: pointer;
  color: rgb(64, 153, 255);
  font-size: 21px;
  font-weight: 800;
  text-decoration: none !important;
  margin: 0 auto;
}

.walletconnect-modal__mobile__toggle_selector {
  width: calc(50% - 8px);
  background: white;
  position: absolute;
  border-radius: 5px;
  height: calc(100% - 8px);
  top: 4px;
  transition: all 0.2s ease-in-out;
  transform: translate3d(4px, 0, 0);
}

.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {
  transform: translate3d(calc(100% + 12px), 0, 0);
}

.walletconnect-modal__mobile__toggle a {
  font-size: 12px;
  width: 50%;
  text-align: center;
  padding: 8px;
  margin: 0;
  font-weight: 600;
  z-index: 1;
}

.walletconnect-modal__footer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__footer {
    margin-top: 5vw;
  }
}

.walletconnect-modal__footer a {
  cursor: pointer;
  color: #898d97;
  font-size: 15px;
  margin: 0 auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__footer a {
    font-size: 14px;
  }
}

.walletconnect-connect__buttons__wrapper {
  max-height: 44vh;
}

.walletconnect-connect__buttons__wrapper__android {
  margin: 50% 0;
}

.walletconnect-connect__buttons__wrapper__wrap {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 10px 0;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__buttons__wrapper__wrap {
    margin-top: 40px;
  }
}

.walletconnect-connect__button {
  background-color: rgb(64, 153, 255);
  padding: 12px;
  border-radius: 8px;
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: 500;
}

.walletconnect-connect__button__icon_anchor {
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 8px;
  width: 42px;
  justify-self: center;
  flex-direction: column;
  text-decoration: none !important;
}

@media only screen and (max-width: 320px) {
  .walletconnect-connect__button__icon_anchor {
    margin: 4px;
  }
}

.walletconnect-connect__button__icon {
  border-radius: 10px;
  height: 42px;
  margin: 0;
  width: 42px;
  background-size: cover !important;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-connect__button__text {
  color: #424952;
  font-size: 2.7vw;
  text-decoration: none !important;
  padding: 0;
  margin-top: 1.8vw;
  font-weight: 600;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__button__text {
    font-size: 16px;
    margin-top: 12px;
  }
}

.walletconnect-search__input {
  border: none;
  background: #d4d5d9;
  border-style: none;
  padding: 8px 16px;
  outline: none;
  font-style: normal;
  font-stretch: normal;
  font-size: 16px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  border-radius: 8px;
  width: calc(100% - 16px);
  margin: 0;
  margin-bottom: 8px;
}
`;typeof Symbol<"u"&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")));typeof Symbol<"u"&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function zF(A,I){try{var g=A()}catch(B){return I(B)}return g&&g.then?g.then(void 0,I):g}var vF="data:image/svg+xml,%3Csvg height='185' viewBox='0 0 300 185' width='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m61.4385429 36.2562612c48.9112241-47.8881663 128.2119871-47.8881663 177.1232091 0l5.886545 5.7634174c2.445561 2.3944081 2.445561 6.2765112 0 8.6709204l-20.136695 19.715503c-1.222781 1.1972051-3.2053 1.1972051-4.428081 0l-8.100584-7.9311479c-34.121692-33.4079817-89.443886-33.4079817-123.5655788 0l-8.6750562 8.4936051c-1.2227816 1.1972041-3.205301 1.1972041-4.4280806 0l-20.1366949-19.7155031c-2.4455612-2.3944092-2.4455612-6.2765122 0-8.6709204zm218.7677961 40.7737449 17.921697 17.546897c2.445549 2.3943969 2.445563 6.2764769.000031 8.6708899l-80.810171 79.121134c-2.445544 2.394426-6.410582 2.394453-8.85616.000062-.00001-.00001-.000022-.000022-.000032-.000032l-57.354143-56.154572c-.61139-.598602-1.60265-.598602-2.21404 0-.000004.000004-.000007.000008-.000011.000011l-57.3529212 56.154531c-2.4455368 2.394432-6.4105755 2.394472-8.8561612.000087-.0000143-.000014-.0000296-.000028-.0000449-.000044l-80.81241943-79.122185c-2.44556021-2.394408-2.44556021-6.2765115 0-8.6709197l17.92172963-17.5468673c2.4455602-2.3944082 6.4105989-2.3944082 8.8561602 0l57.3549775 56.155357c.6113908.598602 1.602649.598602 2.2140398 0 .0000092-.000009.0000174-.000017.0000265-.000024l57.3521031-56.155333c2.445505-2.3944633 6.410544-2.3945531 8.856161-.0002.000034.0000336.000068.0000673.000101.000101l57.354902 56.155432c.61139.598601 1.60265.598601 2.21404 0l57.353975-56.1543249c2.445561-2.3944092 6.410599-2.3944092 8.85616 0z' fill='%233b99fc'/%3E%3C/svg%3E",PF="WalletConnect",_F=300,$F="rgb(64, 153, 255)",Lw="walletconnect-wrapper",OD="walletconnect-style-sheet",fw="walletconnect-qrcode-modal",Ay="walletconnect-qrcode-close",jw="walletconnect-qrcode-text",Iy="walletconnect-connect-button";function gy(A){return YA.createElement("div",{className:"walletconnect-modal__header"},YA.createElement("img",{src:vF,className:"walletconnect-modal__headerLogo"}),YA.createElement("p",null,PF),YA.createElement("div",{className:"walletconnect-modal__close__wrapper",onClick:A.onClose},YA.createElement("div",{id:Ay,className:"walletconnect-modal__close__icon"},YA.createElement("div",{className:"walletconnect-modal__close__line1"}),YA.createElement("div",{className:"walletconnect-modal__close__line2"}))))}function Qy(A){return YA.createElement("a",{className:"walletconnect-connect__button",href:A.href,id:Iy+"-"+A.name,onClick:A.onClick,rel:"noopener noreferrer",style:{backgroundColor:A.color},target:"_blank"},A.name)}var By="data:image/svg+xml,%3Csvg fill='none' height='18' viewBox='0 0 8 18' width='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='m.586301.213898c-.435947.33907-.5144813.967342-.175411 1.403292l4.87831 6.27212c.28087.36111.28087.86677 0 1.22788l-4.878311 6.27211c-.33907.436-.260536 1.0642.175412 1.4033.435949.3391 1.064219.2605 1.403289-.1754l4.87832-6.2721c.84259-1.08336.84259-2.60034 0-3.68367l-4.87832-6.27212c-.33907-.4359474-.96734-.514482-1.403289-.175412z' fill='%233c4252' fill-rule='evenodd'/%3E%3C/svg%3E";function Cy(A){var I=A.color,g=A.href,B=A.name,i=A.logo,o=A.onClick;return YA.createElement("a",{className:"walletconnect-modal__base__row",href:g,onClick:o,rel:"noopener noreferrer",target:"_blank"},YA.createElement("h3",{className:"walletconnect-modal__base__row__h3"},B),YA.createElement("div",{className:"walletconnect-modal__base__row__right"},YA.createElement("div",{className:"walletconnect-modal__base__row__right__app-icon",style:{background:"url('"+i+"') "+I,backgroundSize:"100%"}}),YA.createElement("img",{src:By,className:"walletconnect-modal__base__row__right__caret"})))}function Ey(A){var I=A.color,g=A.href,B=A.name,i=A.logo,o=A.onClick,Q=window.innerWidth<768?(B.length>8?2.5:2.7)+"vw":"inherit";return YA.createElement("a",{className:"walletconnect-connect__button__icon_anchor",href:g,onClick:o,rel:"noopener noreferrer",target:"_blank"},YA.createElement("div",{className:"walletconnect-connect__button__icon",style:{background:"url('"+i+"') "+I,backgroundSize:"100%"}}),YA.createElement("div",{style:{fontSize:Q},className:"walletconnect-connect__button__text"},B))}var iy=5,aC=12;function Dy(A){var I=eI.isAndroid(),g=YA.useState(""),B=g[0],i=g[1],o=YA.useState(""),Q=o[0],C=o[1],E=YA.useState(1),h=E[0],a=E[1],t=Q?A.links.filter(function(N){return N.name.toLowerCase().includes(Q.toLowerCase())}):A.links,e=A.errorMessage,G=Q||t.length>iy,c=Math.ceil(t.length/aC),p=[(h-1)*aC+1,h*aC],Y=t.length?t.filter(function(N,k){return k+1>=p[0]&&k+1<=p[1]}):[],F=!I&&c>1,s=void 0;function M(N){i(N.target.value),clearTimeout(s),N.target.value?s=setTimeout(function(){C(N.target.value),a(1)},1e3):(i(""),C(""),a(1))}return YA.createElement("div",null,YA.createElement("p",{id:jw,className:"walletconnect-qrcode__text"},I?A.text.connect_mobile_wallet:A.text.choose_preferred_wallet),!I&&YA.createElement("input",{className:"walletconnect-search__input",placeholder:"Search",value:B,onChange:M}),YA.createElement("div",{className:"walletconnect-connect__buttons__wrapper"+(I?"__android":G&&t.length?"__wrap":"")},I?YA.createElement(Qy,{name:A.text.connect,color:$F,href:A.uri,onClick:YA.useCallback(function(){eI.saveMobileLinkInfo({name:"Unknown",href:A.uri})},[])}):Y.length?Y.map(function(N){var k=N.color,w=N.name,D=N.shortName,y=N.logo,O=eI.formatIOSMobile(A.uri,N),R=YA.useCallback(function(){eI.saveMobileLinkInfo({name:w,href:O})},[Y]);return G?YA.createElement(Ey,{color:k,href:O,name:D||w,logo:y,onClick:R}):YA.createElement(Cy,{color:k,href:O,name:w,logo:y,onClick:R})}):YA.createElement(YA.Fragment,null,YA.createElement("p",null,e.length?A.errorMessage:A.links.length&&!t.length?A.text.no_wallets_found:A.text.loading))),F&&YA.createElement("div",{className:"walletconnect-modal__footer"},Array(c).fill(0).map(function(N,k){var w=k+1,D=h===w;return YA.createElement("a",{style:{margin:"auto 10px",fontWeight:D?"bold":"normal"},onClick:function(){return a(w)}},w)})))}function oy(A){var I=!!A.message.trim();return YA.createElement("div",{className:"walletconnect-qrcode__notification"+(I?" notification__show":"")},A.message)}var ay=function(A){try{var I="";return Promise.resolve(Zw.toString(A,{margin:0,type:"svg"})).then(function(g){return typeof g=="string"&&(I=g.replace("<svg",'<svg class="walletconnect-qrcode__image"')),I})}catch(g){return Promise.reject(g)}};function wy(A){var I=YA.useState(""),g=I[0],B=I[1],i=YA.useState(""),o=i[0],Q=i[1];YA.useEffect(function(){try{return Promise.resolve(ay(A.uri)).then(function(E){Q(E)})}catch(E){Promise.reject(E)}},[]);var C=function(){var E=TF(A.uri);E?(B(A.text.copied_to_clipboard),setInterval(function(){return B("")},1200)):(B("Error"),setInterval(function(){return B("")},1200))};return YA.createElement("div",null,YA.createElement("p",{id:jw,className:"walletconnect-qrcode__text"},A.text.scan_qrcode_with_wallet),YA.createElement("div",{dangerouslySetInnerHTML:{__html:o}}),YA.createElement("div",{className:"walletconnect-modal__footer"},YA.createElement("a",{onClick:C},A.text.copy_to_clipboard)),YA.createElement(oy,{message:g}))}function Gy(A){var I=eI.isAndroid(),g=eI.isMobile(),B=g?A.qrcodeModalOptions&&A.qrcodeModalOptions.mobileLinks?A.qrcodeModalOptions.mobileLinks:void 0:A.qrcodeModalOptions&&A.qrcodeModalOptions.desktopLinks?A.qrcodeModalOptions.desktopLinks:void 0,i=YA.useState(!1),o=i[0],Q=i[1],C=YA.useState(!1),E=C[0],h=C[1],a=YA.useState(!g),t=a[0],e=a[1],G={mobile:g,text:A.text,uri:A.uri,qrcodeModalOptions:A.qrcodeModalOptions},c=YA.useState(""),p=c[0],Y=c[1],F=YA.useState(!1),s=F[0],M=F[1],N=YA.useState([]),k=N[0],w=N[1],D=YA.useState(""),y=D[0],O=D[1],R=function(){E||o||B&&!B.length||k.length>0||YA.useEffect(function(){var V=function(){try{if(I)return Promise.resolve();Q(!0);var j=zF(function(){var U=A.qrcodeModalOptions&&A.qrcodeModalOptions.registryUrl?A.qrcodeModalOptions.registryUrl:eI.getWalletRegistryUrl();return Promise.resolve(fetch(U)).then(function(S){return Promise.resolve(S.json()).then(function(X){var u=X.listings,Z=g?"mobile":"desktop",L=eI.getMobileLinkRegistry(eI.formatMobileRegistry(u,Z),B);Q(!1),h(!0),O(L.length?"":A.text.no_supported_wallets),w(L);var _=L.length===1;_&&(Y(eI.formatIOSMobile(A.uri,L[0])),e(!0)),M(_)})})},function(U){Q(!1),h(!0),O(A.text.something_went_wrong),console.error(U)});return Promise.resolve(j&&j.then?j.then(function(){}):void 0)}catch(U){return Promise.reject(U)}};V()})};R();var m=g?t:!t;return YA.createElement("div",{id:fw,className:"walletconnect-qrcode__base animated fadeIn"},YA.createElement("div",{className:"walletconnect-modal__base"},YA.createElement(gy,{onClose:A.onClose}),s&&t?YA.createElement("div",{className:"walletconnect-modal__single_wallet"},YA.createElement("a",{onClick:function(){return eI.saveMobileLinkInfo({name:k[0].name,href:p})},href:p,rel:"noopener noreferrer",target:"_blank"},A.text.connect_with+" "+(s?k[0].name:"")+" ›")):I||o||!o&&k.length?YA.createElement("div",{className:"walletconnect-modal__mobile__toggle"+(m?" right__selected":"")},YA.createElement("div",{className:"walletconnect-modal__mobile__toggle_selector"}),g?YA.createElement(YA.Fragment,null,YA.createElement("a",{onClick:function(){return e(!1),R()}},A.text.mobile),YA.createElement("a",{onClick:function(){return e(!0)}},A.text.qrcode)):YA.createElement(YA.Fragment,null,YA.createElement("a",{onClick:function(){return e(!0)}},A.text.qrcode),YA.createElement("a",{onClick:function(){return e(!1),R()}},A.text.desktop))):null,YA.createElement("div",null,t||!I&&!o&&!k.length?YA.createElement(wy,Object.assign({},G)):YA.createElement(Dy,Object.assign({},G,{links:k,errorMessage:y})))))}var ky={choose_preferred_wallet:"Wähle bevorzugte Wallet",connect_mobile_wallet:"Verbinde mit Mobile Wallet",scan_qrcode_with_wallet:"Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",connect:"Verbinden",qrcode:"QR-Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"In die Zwischenablage kopieren",copied_to_clipboard:"In die Zwischenablage kopiert!",connect_with:"Verbinden mit Hilfe von",loading:"Laden...",something_went_wrong:"Etwas ist schief gelaufen",no_supported_wallets:"Es gibt noch keine unterstützten Wallet",no_wallets_found:"keine Wallet gefunden"},Ny={choose_preferred_wallet:"Choose your preferred wallet",connect_mobile_wallet:"Connect to Mobile Wallet",scan_qrcode_with_wallet:"Scan QR code with a WalletConnect-compatible wallet",connect:"Connect",qrcode:"QR Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"Copy to clipboard",copied_to_clipboard:"Copied to clipboard!",connect_with:"Connect with",loading:"Loading...",something_went_wrong:"Something went wrong",no_supported_wallets:"There are no supported wallets yet",no_wallets_found:"No wallets found"},cy={choose_preferred_wallet:"Elige tu billetera preferida",connect_mobile_wallet:"Conectar a billetera móvil",scan_qrcode_with_wallet:"Escanea el código QR con una billetera compatible con WalletConnect",connect:"Conectar",qrcode:"Código QR",mobile:"Móvil",desktop:"Desktop",copy_to_clipboard:"Copiar",copied_to_clipboard:"Copiado!",connect_with:"Conectar mediante",loading:"Cargando...",something_went_wrong:"Algo salió mal",no_supported_wallets:"Todavía no hay billeteras compatibles",no_wallets_found:"No se encontraron billeteras"},hy={choose_preferred_wallet:"Choisissez votre portefeuille préféré",connect_mobile_wallet:"Se connecter au portefeuille mobile",scan_qrcode_with_wallet:"Scannez le QR code avec un portefeuille compatible WalletConnect",connect:"Se connecter",qrcode:"QR Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"Copier",copied_to_clipboard:"Copié!",connect_with:"Connectez-vous à l'aide de",loading:"Chargement...",something_went_wrong:"Quelque chose a mal tourné",no_supported_wallets:"Il n'y a pas encore de portefeuilles pris en charge",no_wallets_found:"Aucun portefeuille trouvé"},ty={choose_preferred_wallet:"원하는 지갑을 선택하세요",connect_mobile_wallet:"모바일 지갑과 연결",scan_qrcode_with_wallet:"WalletConnect 지원 지갑에서 QR코드를 스캔하세요",connect:"연결",qrcode:"QR 코드",mobile:"모바일",desktop:"데스크탑",copy_to_clipboard:"클립보드에 복사",copied_to_clipboard:"클립보드에 복사되었습니다!",connect_with:"와 연결하다",loading:"로드 중...",something_went_wrong:"문제가 발생했습니다.",no_supported_wallets:"아직 지원되는 지갑이 없습니다",no_wallets_found:"지갑을 찾을 수 없습니다"},ey={choose_preferred_wallet:"Escolha sua carteira preferida",connect_mobile_wallet:"Conectar-se à carteira móvel",scan_qrcode_with_wallet:"Ler o código QR com uma carteira compatível com WalletConnect",connect:"Conectar",qrcode:"Código QR",mobile:"Móvel",desktop:"Desktop",copy_to_clipboard:"Copiar",copied_to_clipboard:"Copiado!",connect_with:"Ligar por meio de",loading:"Carregamento...",something_went_wrong:"Algo correu mal",no_supported_wallets:"Ainda não há carteiras suportadas",no_wallets_found:"Nenhuma carteira encontrada"},My={choose_preferred_wallet:"选择你的钱包",connect_mobile_wallet:"连接至移动端钱包",scan_qrcode_with_wallet:"使用兼容 WalletConnect 的钱包扫描二维码",connect:"连接",qrcode:"二维码",mobile:"移动",desktop:"桌面",copy_to_clipboard:"复制到剪贴板",copied_to_clipboard:"复制到剪贴板成功！",connect_with:"通过以下方式连接",loading:"正在加载...",something_went_wrong:"出了问题",no_supported_wallets:"目前还没有支持的钱包",no_wallets_found:"没有找到钱包"},sy={choose_preferred_wallet:"کیف پول مورد نظر خود را انتخاب کنید",connect_mobile_wallet:"به کیف پول موبایل وصل شوید",scan_qrcode_with_wallet:"کد QR را با یک کیف پول سازگار با WalletConnect اسکن کنید",connect:"اتصال",qrcode:"کد QR",mobile:"سیار",desktop:"دسکتاپ",copy_to_clipboard:"کپی به کلیپ بورد",copied_to_clipboard:"در کلیپ بورد کپی شد!",connect_with:"ارتباط با",loading:"...بارگذاری",something_went_wrong:"مشکلی پیش آمد",no_supported_wallets:"هنوز هیچ کیف پول پشتیبانی شده ای وجود ندارد",no_wallets_found:"هیچ کیف پولی پیدا نشد"},mD={de:ky,en:Ny,es:cy,fr:hy,ko:ty,pt:ey,zh:My,fa:sy};function ny(){var A=eI.getDocumentOrThrow(),I=A.getElementById(OD);I&&A.head.removeChild(I);var g=A.createElement("style");g.setAttribute("id",OD),g.innerText=XF,A.head.appendChild(g)}function Fy(){var A=eI.getDocumentOrThrow(),I=A.createElement("div");return I.setAttribute("id",Lw),A.body.appendChild(I),I}function bw(){var A=eI.getDocumentOrThrow(),I=A.getElementById(fw);I&&(I.className=I.className.replace("fadeIn","fadeOut"),setTimeout(function(){var g=A.getElementById(Lw);g&&A.body.removeChild(g)},_F))}function yy(A){return function(){bw(),A&&A()}}function Yy(){var A=eI.getNavigatorOrThrow().language.split("-")[0]||"en";return mD[A]||mD.en}function Jy(A,I,g){ny();var B=Fy();YA.render(YA.createElement(Gy,{text:Yy(),uri:A,onClose:yy(I),qrcodeModalOptions:g}),B)}function py(){bw()}var uw=function(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"};function ry(A,I,g){console.log(A),uw()?xF(A):Jy(A,I,g)}function Uy(){uw()||py()}var Ry={open:ry,close:Uy},qy=Ry,DB={},ly={get exports(){return DB},set exports(A){DB=A}};/*! For license information please see concordium.min.js.LICENSE.txt */(function(A,I){(function(g,B){A.exports=B()})(self,()=>(()=>{var g={1681:(o,Q,C)=>{Object.defineProperty(Q,"__esModule",{value:!0}),Q.utils=Q.curve25519=Q.getSharedSecret=Q.sync=Q.verify=Q.sign=Q.getPublicKey=Q.Signature=Q.Point=Q.RistrettoPoint=Q.ExtendedPoint=Q.CURVE=void 0;const E=C(868),h=BigInt(0),a=BigInt(1),t=BigInt(2),e=BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),G=Object.freeze({a:BigInt(-1),d:BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),P:BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"),l:e,n:e,h:BigInt(8),Gx:BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),Gy:BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960")});Q.CURVE=G;const c=BigInt("0x10000000000000000000000000000000000000000000000000000000000000000"),p=BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752"),Y=(BigInt("6853475219497561581579357271197624642482790079785650197046958215289687604742"),BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235")),F=BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578"),s=BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838"),M=BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952");class N{constructor(n,r,J,q){this.x=n,this.y=r,this.z=J,this.t=q}static fromAffine(n){if(!(n instanceof R))throw new TypeError("ExtendedPoint#fromAffine: expected Point");return n.equals(R.ZERO)?N.ZERO:new N(n.x,n.y,a,W(n.x*n.y))}static toAffineBatch(n){const r=function(J,q=G.P){const H=new Array(J.length),T=QA(J.reduce((z,$,BA)=>$===h?z:(H[BA]=z,W(z*$,q)),a),q);return J.reduceRight((z,$,BA)=>$===h?z:(H[BA]=W(z*H[BA],q),W(z*$,q)),T),H}(n.map(J=>J.z));return n.map((J,q)=>J.toAffine(r[q]))}static normalizeZ(n){return this.toAffineBatch(n).map(this.fromAffine)}equals(n){k(n);const{x:r,y:J,z:q}=this,{x:H,y:T,z}=n,$=W(r*z),BA=W(H*q),gA=W(J*z),iA=W(T*q);return $===BA&&gA===iA}negate(){return new N(W(-this.x),this.y,this.z,W(-this.t))}double(){const{x:n,y:r,z:J}=this,{a:q}=G,H=W(n*n),T=W(r*r),z=W(t*W(J*J)),$=W(q*H),BA=n+r,gA=W(W(BA*BA)-H-T),iA=$+T,wA=iA-z,GA=$-T,MA=W(gA*wA),nA=W(iA*GA),JA=W(gA*GA),UA=W(wA*iA);return new N(MA,nA,UA,JA)}add(n){k(n);const{x:r,y:J,z:q,t:H}=this,{x:T,y:z,z:$,t:BA}=n,gA=W((J-r)*(z+T)),iA=W((J+r)*(z-T)),wA=W(iA-gA);if(wA===h)return this.double();const GA=W(q*t*BA),MA=W(H*t*$),nA=MA+GA,JA=iA+gA,UA=MA-GA,mA=W(nA*wA),fA=W(JA*UA),lA=W(nA*UA),rA=W(wA*JA);return new N(mA,fA,rA,lA)}subtract(n){return this.add(n.negate())}precomputeWindow(n){const r=1+256/n,J=[];let q=this,H=q;for(let T=0;T<r;T++){H=q,J.push(H);for(let z=1;z<2**(n-1);z++)H=H.add(q),J.push(H);q=H.double()}return J}wNAF(n,r){!r&&this.equals(N.BASE)&&(r=R.BASE);const J=r&&r._WINDOW_SIZE||1;if(256%J)throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");let q=r&&O.get(r);q||(q=this.precomputeWindow(J),r&&J!==1&&(q=N.normalizeZ(q),O.set(r,q)));let H=N.ZERO,T=N.ZERO;const z=1+256/J,$=2**(J-1),BA=BigInt(2**J-1),gA=2**J,iA=BigInt(J);for(let wA=0;wA<z;wA++){const GA=wA*$;let MA=Number(n&BA);if(n>>=iA,MA>$&&(MA-=gA,n+=a),MA===0){let nA=q[GA];wA%2&&(nA=nA.negate()),T=T.add(nA)}else{let nA=q[GA+Math.abs(MA)-1];MA<0&&(nA=nA.negate()),H=H.add(nA)}}return N.normalizeZ([H,T])[0]}multiply(n,r){return this.wNAF(K(n,G.l),r)}multiplyUnsafe(n){let r=K(n,G.l,!1);const J=N.BASE,q=N.ZERO;if(r===h)return q;if(this.equals(q)||r===a)return this;if(this.equals(J))return this.wNAF(r);let H=q,T=this;for(;r>h;)r&a&&(H=H.add(T)),T=T.double(),r>>=a;return H}isSmallOrder(){return this.multiplyUnsafe(G.h).equals(N.ZERO)}isTorsionFree(){return this.multiplyUnsafe(G.l).equals(N.ZERO)}toAffine(n=QA(this.z)){const{x:r,y:J,z:q}=this,H=W(r*n),T=W(J*n);if(W(q*n)!==a)throw new Error("invZ was invalid");return new R(H,T)}fromRistrettoBytes(){D()}toRistrettoBytes(){D()}fromRistrettoHash(){D()}}function k(AA){if(!(AA instanceof N))throw new TypeError("ExtendedPoint expected")}function w(AA){if(!(AA instanceof y))throw new TypeError("RistrettoPoint expected")}function D(){throw new Error("Legacy method: switch to RistrettoPoint")}Q.ExtendedPoint=N,N.BASE=new N(G.Gx,G.Gy,a,W(G.Gx*G.Gy)),N.ZERO=new N(h,a,a,h);class y{constructor(n){this.ep=n}static calcElligatorRistrettoMap(n){const{d:r}=G,J=W(p*n*n),q=W((J+a)*s);let H=BigInt(-1);const T=W((H-r*J)*W(J+r));let{isValid:z,value:$}=tA(q,T),BA=W($*n);Z(BA)||(BA=W(-BA)),z||($=BA),z||(H=J);const gA=W(H*(J-a)*M-T),iA=$*$,wA=W(($+$)*T),GA=W(gA*Y),MA=W(a-iA),nA=W(a+iA);return new N(W(wA*nA),W(MA*GA),W(GA*nA),W(wA*MA))}static hashToCurve(n){const r=f((n=CA(n,64)).slice(0,32)),J=this.calcElligatorRistrettoMap(r),q=f(n.slice(32,64)),H=this.calcElligatorRistrettoMap(q);return new y(J.add(H))}static fromHex(n){n=CA(n,32);const{a:r,d:J}=G,q="RistrettoPoint.fromHex: the hex is not valid encoding of RistrettoPoint",H=f(n);if(!function(fA,lA){if(fA.length!==lA.length)return!1;for(let rA=0;rA<fA.length;rA++)if(fA[rA]!==lA[rA])return!1;return!0}(u(H),n)||Z(H))throw new Error(q);const T=W(H*H),z=W(a+r*T),$=W(a-r*T),BA=W(z*z),gA=W($*$),iA=W(r*J*BA-gA),{isValid:wA,value:GA}=DA(W(iA*gA)),MA=W(GA*$),nA=W(GA*MA*iA);let JA=W((H+H)*MA);Z(JA)&&(JA=W(-JA));const UA=W(z*nA),mA=W(JA*UA);if(!wA||Z(mA)||UA===h)throw new Error(q);return new y(new N(JA,UA,a,mA))}toRawBytes(){let{x:n,y:r,z:J,t:q}=this.ep;const H=W(W(J+r)*W(J-r)),T=W(n*r),z=W(T*T),{value:$}=DA(W(H*z)),BA=W($*H),gA=W($*T),iA=W(BA*gA*q);let wA;if(Z(q*iA)){let MA=W(r*p),nA=W(n*p);n=MA,r=nA,wA=W(BA*F)}else wA=gA;Z(n*iA)&&(r=W(-r));let GA=W((J-r)*wA);return Z(GA)&&(GA=W(-GA)),u(GA)}toHex(){return U(this.toRawBytes())}toString(){return this.toHex()}equals(n){w(n);const r=this.ep,J=n.ep,q=W(r.x*J.y)===W(r.y*J.x),H=W(r.y*J.y)===W(r.x*J.x);return q||H}add(n){return w(n),new y(this.ep.add(n.ep))}subtract(n){return w(n),new y(this.ep.subtract(n.ep))}multiply(n){return new y(this.ep.multiply(n))}multiplyUnsafe(n){return new y(this.ep.multiplyUnsafe(n))}}Q.RistrettoPoint=y,y.BASE=new y(N.BASE),y.ZERO=new y(N.ZERO);const O=new WeakMap;class R{constructor(n,r){this.x=n,this.y=r}_setWindowSize(n){this._WINDOW_SIZE=n,O.delete(this)}static fromHex(n,r=!0){const{d:J,P:q}=G,H=(n=CA(n,32)).slice();H[31]=-129&n[31];const T=L(H);if(r&&T>=q)throw new Error("Expected 0 < hex < P");if(!r&&T>=c)throw new Error("Expected 0 < hex < 2**256");const z=W(T*T),$=W(z-a),BA=W(J*z+a);let{isValid:gA,value:iA}=tA($,BA);if(!gA)throw new Error("Point.fromHex: invalid y coordinate");const wA=(iA&a)===a;return(128&n[31])!=0!==wA&&(iA=W(-iA)),new R(iA,T)}static async fromPrivateKey(n){return(await v(n)).point}toRawBytes(){const n=u(this.y);return n[31]|=this.x&a?128:0,n}toHex(){return U(this.toRawBytes())}toX25519(){const{y:n}=this;return u(W((a+n)*QA(a-n)))}isTorsionFree(){return N.fromAffine(this).isTorsionFree()}equals(n){return this.x===n.x&&this.y===n.y}negate(){return new R(W(-this.x),this.y)}add(n){return N.fromAffine(this).add(N.fromAffine(n)).toAffine()}subtract(n){return this.add(n.negate())}multiply(n){return N.fromAffine(this).multiply(n,this).toAffine()}}Q.Point=R,R.BASE=new R(G.Gx,G.Gy),R.ZERO=new R(h,a);class m{constructor(n,r){this.r=n,this.s=r,this.assertValidity()}static fromHex(n){const r=CA(n,64),J=R.fromHex(r.slice(0,32),!1),q=L(r.slice(32,64));return new m(J,q)}assertValidity(){const{r:n,s:r}=this;if(!(n instanceof R))throw new Error("Expected Point instance");return K(r,G.l,!1),this}toRawBytes(){const n=new Uint8Array(64);return n.set(this.r.toRawBytes()),n.set(u(this.s),32),n}toHex(){return U(this.toRawBytes())}}function V(...AA){if(!AA.every(J=>J instanceof Uint8Array))throw new Error("Expected Uint8Array list");if(AA.length===1)return AA[0];const n=AA.reduce((J,q)=>J+q.length,0),r=new Uint8Array(n);for(let J=0,q=0;J<AA.length;J++){const H=AA[J];r.set(H,q),q+=H.length}return r}Q.Signature=m;const j=Array.from({length:256},(AA,n)=>n.toString(16).padStart(2,"0"));function U(AA){if(!(AA instanceof Uint8Array))throw new Error("Uint8Array expected");let n="";for(let r=0;r<AA.length;r++)n+=j[AA[r]];return n}function S(AA){if(typeof AA!="string")throw new TypeError("hexToBytes: expected string, got "+typeof AA);if(AA.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const n=new Uint8Array(AA.length/2);for(let r=0;r<n.length;r++){const J=2*r,q=AA.slice(J,J+2),H=Number.parseInt(q,16);if(Number.isNaN(H)||H<0)throw new Error("Invalid byte sequence");n[r]=H}return n}function X(AA){return S(AA.toString(16).padStart(64,"0"))}function u(AA){return X(AA).reverse()}function Z(AA){return(W(AA)&a)===a}function L(AA){if(!(AA instanceof Uint8Array))throw new Error("Expected Uint8Array");return BigInt("0x"+U(Uint8Array.from(AA).reverse()))}const _=BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");function f(AA){return W(L(AA)&_)}function W(AA,n=G.P){const r=AA%n;return r>=h?r:n+r}function QA(AA,n=G.P){if(AA===h||n<=h)throw new Error(`invert: expected positive integers, got n=${AA} mod=${n}`);let r=W(AA,n),J=n,q=h,H=a;for(;r!==h;){const T=J/r,z=J%r,$=q-H*T;J=r,r=z,q=H,H=$}if(J!==a)throw new Error("invert: does not exist");return W(q,n)}function cA(AA,n){const{P:r}=G;let J=AA;for(;n-- >h;)J*=J,J%=r;return J}function aA(AA){const{P:n}=G,r=BigInt(5),J=BigInt(10),q=BigInt(20),H=BigInt(40),T=BigInt(80),z=AA*AA%n*AA%n,$=cA(z,t)*z%n,BA=cA($,a)*AA%n,gA=cA(BA,r)*BA%n,iA=cA(gA,J)*gA%n,wA=cA(iA,q)*iA%n,GA=cA(wA,H)*wA%n,MA=cA(GA,T)*GA%n,nA=cA(MA,T)*GA%n,JA=cA(nA,J)*gA%n;return{pow_p_5_8:cA(JA,t)*AA%n,b2:z}}function tA(AA,n){const r=W(n*n*n),J=W(r*r*n);let q=W(AA*r*aA(AA*J).pow_p_5_8);const H=W(n*q*q),T=q,z=W(q*p),$=H===AA,BA=H===W(-AA),gA=H===W(-AA*p);return $&&(q=T),(BA||gA)&&(q=z),Z(q)&&(q=W(-q)),{isValid:$||BA,value:q}}function DA(AA){return tA(a,AA)}function EA(AA){return W(L(AA),G.l)}function CA(AA,n){const r=AA instanceof Uint8Array?Uint8Array.from(AA):S(AA);if(typeof n=="number"&&r.length!==n)throw new Error(`Expected ${n} bytes`);return r}function K(AA,n,r=!0){if(!n)throw new TypeError("Specify max value");if(typeof AA=="number"&&Number.isSafeInteger(AA)&&(AA=BigInt(AA)),typeof AA=="bigint"&&AA<n){if(r){if(h<AA)return AA}else if(h<=AA)return AA}throw new TypeError("Expected valid scalar: 0 < scalar < max")}function b(AA){return AA[0]&=248,AA[31]&=127,AA[31]|=64,AA}function P(AA){if((AA=typeof AA=="bigint"||typeof AA=="number"?X(K(AA,c)):CA(AA)).length!==32)throw new Error("Expected 32 bytes");return AA}function kA(AA){const n=b(AA.slice(0,32)),r=AA.slice(32,64),J=EA(n),q=R.BASE.multiply(J),H=q.toRawBytes();return{head:n,prefix:r,scalar:J,point:q,pointBytes:H}}let eA;function FA(...AA){if(typeof eA!="function")throw new Error("utils.sha512Sync must be set to use sync methods");return eA(...AA)}async function v(AA){return kA(await Q.utils.sha512(P(AA)))}function l(AA){return kA(FA(P(AA)))}function d(AA,n,r){n=CA(n),r instanceof R||(r=R.fromHex(r,!1));const{r:J,s:q}=AA instanceof m?AA.assertValidity():m.fromHex(AA);return{r:J,s:q,SB:N.BASE.multiplyUnsafe(q),pub:r,msg:n}}function x(AA,n,r,J){const q=EA(J),H=N.fromAffine(AA).multiplyUnsafe(q);return N.fromAffine(n).add(H).subtract(r).multiplyUnsafe(G.h).equals(N.ZERO)}function oA(AA,n,r){const J=W(AA*(n-r));return[n=W(n-J),r=W(r+J)]}Q.getPublicKey=async function(AA){return(await v(AA)).pointBytes},Q.sign=async function(AA,n){AA=CA(AA);const{prefix:r,scalar:J,pointBytes:q}=await v(n),H=EA(await Q.utils.sha512(r,AA)),T=R.BASE.multiply(H),z=W(H+EA(await Q.utils.sha512(T.toRawBytes(),q,AA))*J,G.l);return new m(T,z).toRawBytes()},Q.verify=async function(AA,n,r){const{r:J,SB:q,msg:H,pub:T}=d(AA,n,r),z=await Q.utils.sha512(J.toRawBytes(),T.toRawBytes(),H);return x(T,J,q,z)},Q.sync={getExtendedPublicKey:l,getPublicKey:function(AA){return l(AA).pointBytes},sign:function(AA,n){AA=CA(AA);const{prefix:r,scalar:J,pointBytes:q}=l(n),H=EA(FA(r,AA)),T=R.BASE.multiply(H),z=W(H+EA(FA(T.toRawBytes(),q,AA))*J,G.l);return new m(T,z).toRawBytes()},verify:function(AA,n,r){const{r:J,SB:q,msg:H,pub:T}=d(AA,n,r),z=FA(J.toRawBytes(),T.toRawBytes(),H);return x(T,J,q,z)}},Q.getSharedSecret=async function(AA,n){const{head:r}=await v(AA),J=R.fromHex(n).toX25519();return Q.curve25519.scalarMult(r,J)},R.BASE._setWindowSize(8),Q.curve25519={BASE_POINT_U:"0900000000000000000000000000000000000000000000000000000000000000",scalarMult(AA,n){const r=function(J,q){const{P:H}=G,T=K(J,H),z=K(q,H),$=BigInt(121665),BA=T;let gA,iA=a,wA=h,GA=T,MA=a,nA=h;for(let fA=BigInt(254);fA>=h;fA--){const lA=z>>fA&a;nA^=lA,gA=oA(nA,iA,GA),iA=gA[0],GA=gA[1],gA=oA(nA,wA,MA),wA=gA[0],MA=gA[1],nA=lA;const rA=iA+wA,SA=W(rA*rA),WA=iA-wA,xA=W(WA*WA),XA=SA-xA,jA=GA+MA,zA=W((GA-MA)*rA),uA=W(jA*WA),OA=zA+uA,KA=zA-uA;GA=W(OA*OA),MA=W(BA*W(KA*KA)),iA=W(SA*xA),wA=W(XA*(SA+W($*XA)))}gA=oA(nA,iA,GA),iA=gA[0],GA=gA[1],gA=oA(nA,wA,MA),wA=gA[0],MA=gA[1];const{pow_p_5_8:JA,b2:UA}=aA(wA),mA=W(cA(JA,BigInt(3))*UA);return W(iA*mA)}(function(J){const q=CA(J,32);return q[31]&=127,L(q)}(n),L(b(CA(AA,32))));if(r===h)throw new Error("Invalid private or public key received");return u(W(r,G.P))},scalarMultBase:AA=>Q.curve25519.scalarMult(AA,Q.curve25519.BASE_POINT_U)};const hA={node:E,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0};Q.utils={bytesToHex:U,hexToBytes:S,concatBytes:V,getExtendedPublicKey:v,mod:W,invert:QA,TORSION_SUBGROUP:["0100000000000000000000000000000000000000000000000000000000000000","c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac037a","0000000000000000000000000000000000000000000000000000000000000080","26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc05","ecffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f","26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc85","0000000000000000000000000000000000000000000000000000000000000000","c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac03fa"],hashToPrivateScalar:AA=>{if((AA=CA(AA)).length<40||AA.length>1024)throw new Error("Expected 40-1024 bytes of private key as per FIPS 186");return W(L(AA),G.l-a)+a},randomBytes:(AA=32)=>{if(hA.web)return hA.web.getRandomValues(new Uint8Array(AA));if(hA.node){const{randomBytes:n}=hA.node;return new Uint8Array(n(AA).buffer)}throw new Error("The environment doesn't have randomBytes function")},randomPrivateKey:()=>Q.utils.randomBytes(32),sha512:async(...AA)=>{const n=V(...AA);if(hA.web){const r=await hA.web.subtle.digest("SHA-512",n.buffer);return new Uint8Array(r)}if(hA.node)return Uint8Array.from(hA.node.createHash("sha512").update(n).digest());throw new Error("The environment doesn't have sha512 function")},precompute(AA=8,n=R.BASE){const r=n.equals(R.BASE)?n:new R(n.x,n.y);return r._setWindowSize(AA),r.multiply(t),r},sha512Sync:void 0},Object.defineProperties(Q.utils,{sha512Sync:{configurable:!1,get:()=>eA,set(AA){eA||(eA=AA)}}})},3873:(o,Q)=>{function C(c){if(!Number.isSafeInteger(c)||c<0)throw new Error(`Wrong positive integer: ${c}`)}function E(c){if(typeof c!="boolean")throw new Error(`Expected boolean, not ${c}`)}function h(c,...p){if(!(c instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(p.length>0&&!p.includes(c.length))throw new TypeError(`Expected Uint8Array of length ${p}, not of length=${c.length}`)}function a(c){if(typeof c!="function"||typeof c.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");C(c.outputLen),C(c.blockLen)}function t(c,p=!0){if(c.destroyed)throw new Error("Hash instance has been destroyed");if(p&&c.finished)throw new Error("Hash#digest() has already been called")}function e(c,p){h(c);const Y=p.outputLen;if(c.length<Y)throw new Error(`digestInto() expects output buffer of length at least ${Y}`)}Object.defineProperty(Q,"__esModule",{value:!0}),Q.output=Q.exists=Q.hash=Q.bytes=Q.bool=Q.number=void 0,Q.number=C,Q.bool=E,Q.bytes=h,Q.hash=a,Q.exists=t,Q.output=e;const G={number:C,bool:E,bytes:h,hash:a,exists:t,output:e};Q.default=G},3745:(o,Q,C)=>{Object.defineProperty(Q,"__esModule",{value:!0}),Q.SHA2=void 0;const E=C(3873),h=C(3489);class a extends h.Hash{constructor(e,G,c,p){super(),this.blockLen=e,this.outputLen=G,this.padOffset=c,this.isLE=p,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=(0,h.createView)(this.buffer)}update(e){E.default.exists(this);const{view:G,buffer:c,blockLen:p}=this,Y=(e=(0,h.toBytes)(e)).length;for(let F=0;F<Y;){const s=Math.min(p-this.pos,Y-F);if(s!==p)c.set(e.subarray(F,F+s),this.pos),this.pos+=s,F+=s,this.pos===p&&(this.process(G,0),this.pos=0);else{const M=(0,h.createView)(e);for(;p<=Y-F;F+=p)this.process(M,F)}}return this.length+=e.length,this.roundClean(),this}digestInto(e){E.default.exists(this),E.default.output(e,this),this.finished=!0;const{buffer:G,view:c,blockLen:p,isLE:Y}=this;let{pos:F}=this;G[F++]=128,this.buffer.subarray(F).fill(0),this.padOffset>p-F&&(this.process(c,0),F=0);for(let M=F;M<p;M++)G[M]=0;(function(M,N,k,w){if(typeof M.setBigUint64=="function")return M.setBigUint64(N,k,w);const D=BigInt(32),y=BigInt(4294967295),O=Number(k>>D&y),R=Number(k&y),m=w?4:0,V=w?0:4;M.setUint32(N+m,O,w),M.setUint32(N+V,R,w)})(c,p-8,BigInt(8*this.length),Y),this.process(c,0);const s=(0,h.createView)(e);this.get().forEach((M,N)=>s.setUint32(4*N,M,Y))}digest(){const{buffer:e,outputLen:G}=this;this.digestInto(e);const c=e.slice(0,G);return this.destroy(),c}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:G,buffer:c,length:p,finished:Y,destroyed:F,pos:s}=this;return e.length=p,e.pos=s,e.finished=Y,e.destroyed=F,p%G&&e.buffer.set(c),e}}Q.SHA2=a},2703:(o,Q)=>{Object.defineProperty(Q,"__esModule",{value:!0}),Q.add=Q.toBig=Q.split=Q.fromBig=void 0;const C=BigInt(2**32-1),E=BigInt(32);function h(G,c=!1){return c?{h:Number(G&C),l:Number(G>>E&C)}:{h:0|Number(G>>E&C),l:0|Number(G&C)}}function a(G,c=!1){let p=new Uint32Array(G.length),Y=new Uint32Array(G.length);for(let F=0;F<G.length;F++){const{h:s,l:M}=h(G[F],c);[p[F],Y[F]]=[s,M]}return[p,Y]}function t(G,c,p,Y){const F=(c>>>0)+(Y>>>0);return{h:G+p+(F/4294967296|0)|0,l:0|F}}Q.fromBig=h,Q.split=a,Q.toBig=(G,c)=>BigInt(G>>>0)<<E|BigInt(c>>>0),Q.add=t;const e={fromBig:h,split:a,toBig:Q.toBig,shrSH:(G,c,p)=>G>>>p,shrSL:(G,c,p)=>G<<32-p|c>>>p,rotrSH:(G,c,p)=>G>>>p|c<<32-p,rotrSL:(G,c,p)=>G<<32-p|c>>>p,rotrBH:(G,c,p)=>G<<64-p|c>>>p-32,rotrBL:(G,c,p)=>G>>>p-32|c<<64-p,rotr32H:(G,c)=>c,rotr32L:(G,c)=>G,rotlSH:(G,c,p)=>G<<p|c>>>32-p,rotlSL:(G,c,p)=>c<<p|G>>>32-p,rotlBH:(G,c,p)=>c<<p-32|G>>>64-p,rotlBL:(G,c,p)=>G<<p-32|c>>>64-p,add:t,add3L:(G,c,p)=>(G>>>0)+(c>>>0)+(p>>>0),add3H:(G,c,p,Y)=>c+p+Y+(G/2**32|0)|0,add4L:(G,c,p,Y)=>(G>>>0)+(c>>>0)+(p>>>0)+(Y>>>0),add4H:(G,c,p,Y,F)=>c+p+Y+F+(G/2**32|0)|0,add5H:(G,c,p,Y,F,s)=>c+p+Y+F+s+(G/2**32|0)|0,add5L:(G,c,p,Y,F)=>(G>>>0)+(c>>>0)+(p>>>0)+(Y>>>0)+(F>>>0)};Q.default=e},8848:(o,Q)=>{Object.defineProperty(Q,"__esModule",{value:!0}),Q.crypto=void 0,Q.crypto={node:void 0,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0}},4254:(o,Q,C)=>{Object.defineProperty(Q,"__esModule",{value:!0}),Q.hmac=void 0;const E=C(3873),h=C(3489);class a extends h.Hash{constructor(e,G){super(),this.finished=!1,this.destroyed=!1,E.default.hash(e);const c=(0,h.toBytes)(G);if(this.iHash=e.create(),!(this.iHash instanceof h.Hash))throw new TypeError("Expected instance of class which extends utils.Hash");const p=this.blockLen=this.iHash.blockLen;this.outputLen=this.iHash.outputLen;const Y=new Uint8Array(p);Y.set(c.length>this.iHash.blockLen?e.create().update(c).digest():c);for(let F=0;F<Y.length;F++)Y[F]^=54;this.iHash.update(Y),this.oHash=e.create();for(let F=0;F<Y.length;F++)Y[F]^=106;this.oHash.update(Y),Y.fill(0)}update(e){return E.default.exists(this),this.iHash.update(e),this}digestInto(e){E.default.exists(this),E.default.bytes(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){const e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));const{oHash:G,iHash:c,finished:p,destroyed:Y,blockLen:F,outputLen:s}=this;return e.finished=p,e.destroyed=Y,e.blockLen=F,e.outputLen=s,e.oHash=G._cloneInto(e.oHash),e.iHash=c._cloneInto(e.iHash),e}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}Q.hmac=(t,e,G)=>new a(t,e).update(G).digest(),Q.hmac.create=(t,e)=>new a(t,e)},8846:(o,Q,C)=>{Object.defineProperty(Q,"__esModule",{value:!0}),Q.pbkdf2Async=Q.pbkdf2=void 0;const E=C(3873),h=C(4254),a=C(3489);function t(G,c,p,Y){E.default.hash(G);const F=(0,a.checkOpts)({dkLen:32,asyncTick:10},Y),{c:s,dkLen:M,asyncTick:N}=F;if(E.default.number(s),E.default.number(M),E.default.number(N),s<1)throw new Error("PBKDF2: iterations (c) should be >= 1");const k=(0,a.toBytes)(c),w=(0,a.toBytes)(p),D=new Uint8Array(M),y=h.hmac.create(G,k),O=y._cloneInto().update(w);return{c:s,dkLen:M,asyncTick:N,DK:D,PRF:y,PRFSalt:O}}function e(G,c,p,Y,F){return G.destroy(),c.destroy(),Y&&Y.destroy(),F.fill(0),p}Q.pbkdf2=function(G,c,p,Y){const{c:F,dkLen:s,DK:M,PRF:N,PRFSalt:k}=t(G,c,p,Y);let w;const D=new Uint8Array(4),y=(0,a.createView)(D),O=new Uint8Array(N.outputLen);for(let R=1,m=0;m<s;R++,m+=N.outputLen){const V=M.subarray(m,m+N.outputLen);y.setInt32(0,R,!1),(w=k._cloneInto(w)).update(D).digestInto(O),V.set(O.subarray(0,V.length));for(let j=1;j<F;j++){N._cloneInto(w).update(O).digestInto(O);for(let U=0;U<V.length;U++)V[U]^=O[U]}}return e(N,k,M,w,O)},Q.pbkdf2Async=async function(G,c,p,Y){const{c:F,dkLen:s,asyncTick:M,DK:N,PRF:k,PRFSalt:w}=t(G,c,p,Y);let D;const y=new Uint8Array(4),O=(0,a.createView)(y),R=new Uint8Array(k.outputLen);for(let m=1,V=0;V<s;m++,V+=k.outputLen){const j=N.subarray(V,V+k.outputLen);O.setInt32(0,m,!1),(D=w._cloneInto(D)).update(y).digestInto(R),j.set(R.subarray(0,j.length)),await(0,a.asyncLoop)(F-1,M,U=>{k._cloneInto(D).update(R).digestInto(R);for(let S=0;S<j.length;S++)j[S]^=R[S]})}return e(k,w,N,D,R)}},4492:(o,Q,C)=>{Object.defineProperty(Q,"__esModule",{value:!0}),Q.sha256=void 0;const E=C(3745),h=C(3489),a=(p,Y,F)=>p&Y^p&F^Y&F,t=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),e=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),G=new Uint32Array(64);class c extends E.SHA2{constructor(){super(64,32,8,!1),this.A=0|e[0],this.B=0|e[1],this.C=0|e[2],this.D=0|e[3],this.E=0|e[4],this.F=0|e[5],this.G=0|e[6],this.H=0|e[7]}get(){const{A:Y,B:F,C:s,D:M,E:N,F:k,G:w,H:D}=this;return[Y,F,s,M,N,k,w,D]}set(Y,F,s,M,N,k,w,D){this.A=0|Y,this.B=0|F,this.C=0|s,this.D=0|M,this.E=0|N,this.F=0|k,this.G=0|w,this.H=0|D}process(Y,F){for(let m=0;m<16;m++,F+=4)G[m]=Y.getUint32(F,!1);for(let m=16;m<64;m++){const V=G[m-15],j=G[m-2],U=(0,h.rotr)(V,7)^(0,h.rotr)(V,18)^V>>>3,S=(0,h.rotr)(j,17)^(0,h.rotr)(j,19)^j>>>10;G[m]=S+G[m-7]+U+G[m-16]|0}let{A:s,B:M,C:N,D:k,E:w,F:D,G:y,H:O}=this;for(let m=0;m<64;m++){const V=O+((0,h.rotr)(w,6)^(0,h.rotr)(w,11)^(0,h.rotr)(w,25))+((R=w)&D^~R&y)+t[m]+G[m]|0,j=((0,h.rotr)(s,2)^(0,h.rotr)(s,13)^(0,h.rotr)(s,22))+a(s,M,N)|0;O=y,y=D,D=w,w=k+V|0,k=N,N=M,M=s,s=V+j|0}var R;s=s+this.A|0,M=M+this.B|0,N=N+this.C|0,k=k+this.D|0,w=w+this.E|0,D=D+this.F|0,y=y+this.G|0,O=O+this.H|0,this.set(s,M,N,k,w,D,y,O)}roundClean(){G.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}Q.sha256=(0,h.wrapConstructor)(()=>new c)},7992:(o,Q,C)=>{Object.defineProperty(Q,"__esModule",{value:!0}),Q.sha384=Q.sha512_256=Q.sha512=Q.SHA512=void 0;const E=C(3745),h=C(2703),a=C(3489),[t,e]=h.default.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(s=>BigInt(s))),G=new Uint32Array(80),c=new Uint32Array(80);class p extends E.SHA2{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:M,Al:N,Bh:k,Bl:w,Ch:D,Cl:y,Dh:O,Dl:R,Eh:m,El:V,Fh:j,Fl:U,Gh:S,Gl:X,Hh:u,Hl:Z}=this;return[M,N,k,w,D,y,O,R,m,V,j,U,S,X,u,Z]}set(M,N,k,w,D,y,O,R,m,V,j,U,S,X,u,Z){this.Ah=0|M,this.Al=0|N,this.Bh=0|k,this.Bl=0|w,this.Ch=0|D,this.Cl=0|y,this.Dh=0|O,this.Dl=0|R,this.Eh=0|m,this.El=0|V,this.Fh=0|j,this.Fl=0|U,this.Gh=0|S,this.Gl=0|X,this.Hh=0|u,this.Hl=0|Z}process(M,N){for(let f=0;f<16;f++,N+=4)G[f]=M.getUint32(N),c[f]=M.getUint32(N+=4);for(let f=16;f<80;f++){const W=0|G[f-15],QA=0|c[f-15],cA=h.default.rotrSH(W,QA,1)^h.default.rotrSH(W,QA,8)^h.default.shrSH(W,QA,7),aA=h.default.rotrSL(W,QA,1)^h.default.rotrSL(W,QA,8)^h.default.shrSL(W,QA,7),tA=0|G[f-2],DA=0|c[f-2],EA=h.default.rotrSH(tA,DA,19)^h.default.rotrBH(tA,DA,61)^h.default.shrSH(tA,DA,6),CA=h.default.rotrSL(tA,DA,19)^h.default.rotrBL(tA,DA,61)^h.default.shrSL(tA,DA,6),K=h.default.add4L(aA,CA,c[f-7],c[f-16]),b=h.default.add4H(K,cA,EA,G[f-7],G[f-16]);G[f]=0|b,c[f]=0|K}let{Ah:k,Al:w,Bh:D,Bl:y,Ch:O,Cl:R,Dh:m,Dl:V,Eh:j,El:U,Fh:S,Fl:X,Gh:u,Gl:Z,Hh:L,Hl:_}=this;for(let f=0;f<80;f++){const W=h.default.rotrSH(j,U,14)^h.default.rotrSH(j,U,18)^h.default.rotrBH(j,U,41),QA=h.default.rotrSL(j,U,14)^h.default.rotrSL(j,U,18)^h.default.rotrBL(j,U,41),cA=j&S^~j&u,aA=U&X^~U&Z,tA=h.default.add5L(_,QA,aA,e[f],c[f]),DA=h.default.add5H(tA,L,W,cA,t[f],G[f]),EA=0|tA,CA=h.default.rotrSH(k,w,28)^h.default.rotrBH(k,w,34)^h.default.rotrBH(k,w,39),K=h.default.rotrSL(k,w,28)^h.default.rotrBL(k,w,34)^h.default.rotrBL(k,w,39),b=k&D^k&O^D&O,P=w&y^w&R^y&R;L=0|u,_=0|Z,u=0|S,Z=0|X,S=0|j,X=0|U,{h:j,l:U}=h.default.add(0|m,0|V,0|DA,0|EA),m=0|O,V=0|R,O=0|D,R=0|y,D=0|k,y=0|w;const kA=h.default.add3L(EA,K,P);k=h.default.add3H(kA,DA,CA,b),w=0|kA}({h:k,l:w}=h.default.add(0|this.Ah,0|this.Al,0|k,0|w)),{h:D,l:y}=h.default.add(0|this.Bh,0|this.Bl,0|D,0|y),{h:O,l:R}=h.default.add(0|this.Ch,0|this.Cl,0|O,0|R),{h:m,l:V}=h.default.add(0|this.Dh,0|this.Dl,0|m,0|V),{h:j,l:U}=h.default.add(0|this.Eh,0|this.El,0|j,0|U),{h:S,l:X}=h.default.add(0|this.Fh,0|this.Fl,0|S,0|X),{h:u,l:Z}=h.default.add(0|this.Gh,0|this.Gl,0|u,0|Z),{h:L,l:_}=h.default.add(0|this.Hh,0|this.Hl,0|L,0|_),this.set(k,w,D,y,O,R,m,V,j,U,S,X,u,Z,L,_)}roundClean(){G.fill(0),c.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}Q.SHA512=p;class Y extends p{constructor(){super(),this.Ah=573645204,this.Al=-64227540,this.Bh=-1621794909,this.Bl=-934517566,this.Ch=596883563,this.Cl=1867755857,this.Dh=-1774684391,this.Dl=1497426621,this.Eh=-1775747358,this.El=-1467023389,this.Fh=-1101128155,this.Fl=1401305490,this.Gh=721525244,this.Gl=746961066,this.Hh=246885852,this.Hl=-2117784414,this.outputLen=32}}class F extends p{constructor(){super(),this.Ah=-876896931,this.Al=-1056596264,this.Bh=1654270250,this.Bl=914150663,this.Ch=-1856437926,this.Cl=812702999,this.Dh=355462360,this.Dl=-150054599,this.Eh=1731405415,this.El=-4191439,this.Fh=-1900787065,this.Fl=1750603025,this.Gh=-619958771,this.Gl=1694076839,this.Hh=1203062813,this.Hl=-1090891868,this.outputLen=48}}Q.sha512=(0,a.wrapConstructor)(()=>new p),Q.sha512_256=(0,a.wrapConstructor)(()=>new Y),Q.sha384=(0,a.wrapConstructor)(()=>new F)},3489:(o,Q,C)=>{Object.defineProperty(Q,"__esModule",{value:!0}),Q.randomBytes=Q.wrapConstructorWithOpts=Q.wrapConstructor=Q.checkOpts=Q.Hash=Q.concatBytes=Q.toBytes=Q.utf8ToBytes=Q.asyncLoop=Q.nextTick=Q.hexToBytes=Q.bytesToHex=Q.isLE=Q.rotr=Q.createView=Q.u32=Q.u8=void 0;const E=C(8848);if(Q.u8=e=>new Uint8Array(e.buffer,e.byteOffset,e.byteLength),Q.u32=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),Q.createView=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),Q.rotr=(e,G)=>e<<32-G|e>>>G,Q.isLE=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68,!Q.isLE)throw new Error("Non little-endian hardware is not supported");const h=Array.from({length:256},(e,G)=>G.toString(16).padStart(2,"0"));function a(e){if(typeof e!="string")throw new TypeError("utf8ToBytes expected string, got "+typeof e);return new TextEncoder().encode(e)}function t(e){if(typeof e=="string"&&(e=a(e)),!(e instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);return e}Q.bytesToHex=function(e){if(!(e instanceof Uint8Array))throw new Error("Uint8Array expected");let G="";for(let c=0;c<e.length;c++)G+=h[e[c]];return G},Q.hexToBytes=function(e){if(typeof e!="string")throw new TypeError("hexToBytes: expected string, got "+typeof e);if(e.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const G=new Uint8Array(e.length/2);for(let c=0;c<G.length;c++){const p=2*c,Y=e.slice(p,p+2),F=Number.parseInt(Y,16);if(Number.isNaN(F)||F<0)throw new Error("Invalid byte sequence");G[c]=F}return G},Q.nextTick=async()=>{},Q.asyncLoop=async function(e,G,c){let p=Date.now();for(let Y=0;Y<e;Y++){c(Y);const F=Date.now()-p;F>=0&&F<G||(await(0,Q.nextTick)(),p+=F)}},Q.utf8ToBytes=a,Q.toBytes=t,Q.concatBytes=function(...e){if(!e.every(p=>p instanceof Uint8Array))throw new Error("Uint8Array list expected");if(e.length===1)return e[0];const G=e.reduce((p,Y)=>p+Y.length,0),c=new Uint8Array(G);for(let p=0,Y=0;p<e.length;p++){const F=e[p];c.set(F,Y),Y+=F.length}return c},Q.Hash=class{clone(){return this._cloneInto()}},Q.checkOpts=function(e,G){if(G!==void 0&&(typeof G!="object"||(c=G,Object.prototype.toString.call(c)!=="[object Object]"||c.constructor!==Object)))throw new TypeError("Options should be object or undefined");var c;return Object.assign(e,G)},Q.wrapConstructor=function(e){const G=p=>e().update(t(p)).digest(),c=e();return G.outputLen=c.outputLen,G.blockLen=c.blockLen,G.create=()=>e(),G},Q.wrapConstructorWithOpts=function(e){const G=(p,Y)=>e(Y).update(t(p)).digest(),c=e({});return G.outputLen=c.outputLen,G.blockLen=c.blockLen,G.create=p=>e(p),G},Q.randomBytes=function(e=32){if(E.crypto.web)return E.crypto.web.getRandomValues(new Uint8Array(e));if(E.crypto.node)return new Uint8Array(E.crypto.node.randomBytes(e).buffer);throw new Error("The environment doesn't have randomBytes function")}},4587:(o,Q)=>{function C(U){if(!Number.isSafeInteger(U))throw new Error(`Wrong integer: ${U}`)}function E(...U){const S=(X,u)=>Z=>X(u(Z));return{encode:Array.from(U).reverse().reduce((X,u)=>X?S(X,u.encode):u.encode,void 0),decode:U.reduce((X,u)=>X?S(X,u.decode):u.decode,void 0)}}function h(U){return{encode:S=>{if(!Array.isArray(S)||S.length&&typeof S[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return S.map(X=>{if(C(X),X<0||X>=U.length)throw new Error(`Digit index outside alphabet: ${X} (alphabet: ${U.length})`);return U[X]})},decode:S=>{if(!Array.isArray(S)||S.length&&typeof S[0]!="string")throw new Error("alphabet.decode input should be array of strings");return S.map(X=>{if(typeof X!="string")throw new Error(`alphabet.decode: not string element=${X}`);const u=U.indexOf(X);if(u===-1)throw new Error(`Unknown letter: "${X}". Allowed: ${U}`);return u})}}}function a(U=""){if(typeof U!="string")throw new Error("join separator should be string");return{encode:S=>{if(!Array.isArray(S)||S.length&&typeof S[0]!="string")throw new Error("join.encode input should be array of strings");for(let X of S)if(typeof X!="string")throw new Error(`join.encode: non-string input=${X}`);return S.join(U)},decode:S=>{if(typeof S!="string")throw new Error("join.decode input should be string");return S.split(U)}}}function t(U,S="="){if(C(U),typeof S!="string")throw new Error("padding chr should be string");return{encode(X){if(!Array.isArray(X)||X.length&&typeof X[0]!="string")throw new Error("padding.encode input should be array of strings");for(let u of X)if(typeof u!="string")throw new Error(`padding.encode: non-string input=${u}`);for(;X.length*U%8;)X.push(S);return X},decode(X){if(!Array.isArray(X)||X.length&&typeof X[0]!="string")throw new Error("padding.encode input should be array of strings");for(let Z of X)if(typeof Z!="string")throw new Error(`padding.decode: non-string input=${Z}`);let u=X.length;if(u*U%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;u>0&&X[u-1]===S;u--)if(!((u-1)*U%8))throw new Error("Invalid padding: string has too much padding");return X.slice(0,u)}}}function e(U){if(typeof U!="function")throw new Error("normalize fn should be function");return{encode:S=>S,decode:S=>U(S)}}function G(U,S,X){if(S<2)throw new Error(`convertRadix: wrong from=${S}, base cannot be less than 2`);if(X<2)throw new Error(`convertRadix: wrong to=${X}, base cannot be less than 2`);if(!Array.isArray(U))throw new Error("convertRadix: data should be array");if(!U.length)return[];let u=0;const Z=[],L=Array.from(U);for(L.forEach(_=>{if(C(_),_<0||_>=S)throw new Error(`Wrong integer: ${_}`)});;){let _=0,f=!0;for(let W=u;W<L.length;W++){const QA=L[W],cA=S*_+QA;if(!Number.isSafeInteger(cA)||S*_/S!==_||cA-QA!=S*_)throw new Error("convertRadix: carry overflow");if(_=cA%X,L[W]=Math.floor(cA/X),!Number.isSafeInteger(L[W])||L[W]*X+_!==cA)throw new Error("convertRadix: carry overflow");f&&(L[W]?f=!1:u=W)}if(Z.push(_),f)break}for(let _=0;_<U.length-1&&U[_]===0;_++)Z.push(0);return Z.reverse()}Object.defineProperty(Q,"__esModule",{value:!0}),Q.bytes=Q.stringToBytes=Q.str=Q.bytesToString=Q.hex=Q.utf8=Q.bech32m=Q.bech32=Q.base58check=Q.base58xmr=Q.base58xrp=Q.base58flickr=Q.base58=Q.base64url=Q.base64=Q.base32crockford=Q.base32hex=Q.base32=Q.base16=Q.utils=Q.assertNumber=void 0,Q.assertNumber=C;const c=(U,S)=>S?c(S,U%S):U,p=(U,S)=>U+(S-c(U,S));function Y(U,S,X,u){if(!Array.isArray(U))throw new Error("convertRadix2: data should be array");if(S<=0||S>32)throw new Error(`convertRadix2: wrong from=${S}`);if(X<=0||X>32)throw new Error(`convertRadix2: wrong to=${X}`);if(p(S,X)>32)throw new Error(`convertRadix2: carry overflow from=${S} to=${X} carryBits=${p(S,X)}`);let Z=0,L=0;const _=2**X-1,f=[];for(const W of U){if(C(W),W>=2**S)throw new Error(`convertRadix2: invalid data word=${W} from=${S}`);if(Z=Z<<S|W,L+S>32)throw new Error(`convertRadix2: carry overflow pos=${L} from=${S}`);for(L+=S;L>=X;L-=X)f.push((Z>>L-X&_)>>>0);Z&=2**L-1}if(Z=Z<<X-L&_,!u&&L>=S)throw new Error("Excess padding");if(!u&&Z)throw new Error(`Non-zero padding: ${Z}`);return u&&L>0&&f.push(Z>>>0),f}function F(U){return C(U),{encode:S=>{if(!(S instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return G(Array.from(S),256,U)},decode:S=>{if(!Array.isArray(S)||S.length&&typeof S[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(G(S,U,256))}}}function s(U,S=!1){if(C(U),U<=0||U>32)throw new Error("radix2: bits should be in (0..32]");if(p(8,U)>32||p(U,8)>32)throw new Error("radix2: carry overflow");return{encode:X=>{if(!(X instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return Y(Array.from(X),8,U,!S)},decode:X=>{if(!Array.isArray(X)||X.length&&typeof X[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from(Y(X,U,8,S))}}}function M(U){if(typeof U!="function")throw new Error("unsafeWrapper fn should be function");return function(...S){try{return U.apply(null,S)}catch{}}}function N(U,S){if(C(U),typeof S!="function")throw new Error("checksum fn should be function");return{encode(X){if(!(X instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");const u=S(X).slice(0,U),Z=new Uint8Array(X.length+U);return Z.set(X),Z.set(u,X.length),Z},decode(X){if(!(X instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");const u=X.slice(0,-U),Z=S(u).slice(0,U),L=X.slice(-U);for(let _=0;_<U;_++)if(Z[_]!==L[_])throw new Error("Invalid checksum");return u}}}Q.utils={alphabet:h,chain:E,checksum:N,radix:F,radix2:s,join:a,padding:t},Q.base16=E(s(4),h("0123456789ABCDEF"),a("")),Q.base32=E(s(5),h("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),t(5),a("")),Q.base32hex=E(s(5),h("0123456789ABCDEFGHIJKLMNOPQRSTUV"),t(5),a("")),Q.base32crockford=E(s(5),h("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),a(""),e(U=>U.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1"))),Q.base64=E(s(6),h("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),t(6),a("")),Q.base64url=E(s(6),h("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),t(6),a(""));const k=U=>E(F(58),h(U),a(""));Q.base58=k("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),Q.base58flickr=k("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"),Q.base58xrp=k("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz");const w=[0,2,3,5,6,7,9,10,11];Q.base58xmr={encode(U){let S="";for(let X=0;X<U.length;X+=8){const u=U.subarray(X,X+8);S+=Q.base58.encode(u).padStart(w[u.length],"1")}return S},decode(U){let S=[];for(let X=0;X<U.length;X+=11){const u=U.slice(X,X+11),Z=w.indexOf(u.length),L=Q.base58.decode(u);for(let _=0;_<L.length-Z;_++)if(L[_]!==0)throw new Error("base58xmr: wrong padding");S=S.concat(Array.from(L.slice(L.length-Z)))}return Uint8Array.from(S)}},Q.base58check=U=>E(N(4,S=>U(U(S))),Q.base58);const D=E(h("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),a("")),y=[996825010,642813549,513874426,1027748829,705979059];function O(U){const S=U>>25;let X=(33554431&U)<<5;for(let u=0;u<y.length;u++)(S>>u&1)==1&&(X^=y[u]);return X}function R(U,S,X=1){const u=U.length;let Z=1;for(let L=0;L<u;L++){const _=U.charCodeAt(L);if(_<33||_>126)throw new Error(`Invalid prefix (${U})`);Z=O(Z)^_>>5}Z=O(Z);for(let L=0;L<u;L++)Z=O(Z)^31&U.charCodeAt(L);for(let L of S)Z=O(Z)^L;for(let L=0;L<6;L++)Z=O(Z);return Z^=X,D.encode(Y([Z%1073741824],30,5,!1))}function m(U){const S=U==="bech32"?1:734539939,X=s(5),u=X.decode,Z=X.encode,L=M(u);function _(f,W=90){if(typeof f!="string")throw new Error("bech32.decode input should be string, not "+typeof f);if(f.length<8||W!==!1&&f.length>W)throw new TypeError(`Wrong string length: ${f.length} (${f}). Expected (8..${W})`);const QA=f.toLowerCase();if(f!==QA&&f!==f.toUpperCase())throw new Error("String must be lowercase or uppercase");const cA=(f=QA).lastIndexOf("1");if(cA===0||cA===-1)throw new Error('Letter "1" must be present between prefix and data only');const aA=f.slice(0,cA),tA=f.slice(cA+1);if(tA.length<6)throw new Error("Data must be at least 6 characters long");const DA=D.decode(tA).slice(0,-6),EA=R(aA,DA,S);if(!tA.endsWith(EA))throw new Error(`Invalid checksum in ${f}: expected "${EA}"`);return{prefix:aA,words:DA}}return{encode:function(f,W,QA=90){if(typeof f!="string")throw new Error("bech32.encode prefix should be string, not "+typeof f);if(!Array.isArray(W)||W.length&&typeof W[0]!="number")throw new Error("bech32.encode words should be array of numbers, not "+typeof W);const cA=f.length+7+W.length;if(QA!==!1&&cA>QA)throw new TypeError(`Length ${cA} exceeds limit ${QA}`);return`${f=f.toLowerCase()}1${D.encode(W)}${R(f,W,S)}`},decode:_,decodeToBytes:function(f){const{prefix:W,words:QA}=_(f,!1);return{prefix:W,words:QA,bytes:u(QA)}},decodeUnsafe:M(_),fromWords:u,fromWordsUnsafe:L,toWords:Z}}Q.bech32=m("bech32"),Q.bech32m=m("bech32m"),Q.utf8={encode:U=>new TextDecoder().decode(U),decode:U=>new TextEncoder().encode(U)},Q.hex=E(s(4),h("0123456789abcdef"),a(""),e(U=>{if(typeof U!="string"||U.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof U} with length ${U.length}`);return U.toLowerCase()}));const V={utf8:Q.utf8,hex:Q.hex,base16:Q.base16,base32:Q.base32,base64:Q.base64,base64url:Q.base64url,base58:Q.base58,base58xmr:Q.base58xmr},j=`Invalid encoding type. Available types: ${Object.keys(V).join(", ")}`;Q.bytesToString=(U,S)=>{if(typeof U!="string"||!V.hasOwnProperty(U))throw new TypeError(j);if(!(S instanceof Uint8Array))throw new TypeError("bytesToString() expects Uint8Array");return V[U].encode(S)},Q.str=Q.bytesToString,Q.stringToBytes=(U,S)=>{if(!V.hasOwnProperty(U))throw new TypeError(j);if(typeof S!="string")throw new TypeError("stringToBytes() expects string");return V[U].decode(S)},Q.bytes=Q.stringToBytes},7245:(o,Q,C)=>{Object.defineProperty(Q,"__esModule",{value:!0}),Q.mnemonicToSeedSync=Q.mnemonicToSeed=Q.validateMnemonic=Q.entropyToMnemonic=Q.mnemonicToEntropy=Q.generateMnemonic=void 0;const E=C(3873),h=C(8846),a=C(4492),t=C(7992),e=C(3489),G=C(4587);function c(w){if(typeof w!="string")throw new TypeError("Invalid mnemonic type: "+typeof w);return w.normalize("NFKD")}function p(w){const D=c(w),y=D.split(" ");if(![12,15,18,21,24].includes(y.length))throw new Error("Invalid mnemonic");return{nfkd:D,words:y}}function Y(w){E.default.bytes(w,16,20,24,28,32)}Q.generateMnemonic=function(w,D=128){if(E.default.number(D),D%32!=0||D>256)throw new TypeError("Invalid entropy");return N((0,e.randomBytes)(D/8),w)};const F=w=>{const D=8-w.length/4;return new Uint8Array([(0,a.sha256)(w)[0]>>D<<D])};function s(w){if(!Array.isArray(w)||w.length!==2048||typeof w[0]!="string")throw new Error("Worlist: expected array of 2048 strings");return w.forEach(D=>{if(typeof D!="string")throw new Error(`Wordlist: non-string element: ${D}`)}),G.utils.chain(G.utils.checksum(1,F),G.utils.radix2(11,!0),G.utils.alphabet(w))}function M(w,D){const{words:y}=p(w),O=s(D).decode(y);return Y(O),O}function N(w,D){return Y(w),s(D).encode(w).join((y=>y[0]==="あいこくしん")(D)?"　":" ")}Q.mnemonicToEntropy=M,Q.entropyToMnemonic=N,Q.validateMnemonic=function(w,D){try{M(w,D)}catch{return!1}return!0};const k=w=>c(`mnemonic${w}`);Q.mnemonicToSeed=function(w,D=""){return(0,h.pbkdf2Async)(t.sha512,p(w).nfkd,k(D),{c:2048,dkLen:64})},Q.mnemonicToSeedSync=function(w,D=""){return(0,h.pbkdf2)(t.sha512,p(w).nfkd,k(D),{c:2048,dkLen:64})}},5136:(o,Q)=>{Object.defineProperty(Q,"__esModule",{value:!0}),Q.wordlist=void 0,Q.wordlist=`abandon
ability
able
about
above
absent
absorb
abstract
absurd
abuse
access
accident
account
accuse
achieve
acid
acoustic
acquire
across
act
action
actor
actress
actual
adapt
add
addict
address
adjust
admit
adult
advance
advice
aerobic
affair
afford
afraid
again
age
agent
agree
ahead
aim
air
airport
aisle
alarm
album
alcohol
alert
alien
all
alley
allow
almost
alone
alpha
already
also
alter
always
amateur
amazing
among
amount
amused
analyst
anchor
ancient
anger
angle
angry
animal
ankle
announce
annual
another
answer
antenna
antique
anxiety
any
apart
apology
appear
apple
approve
april
arch
arctic
area
arena
argue
arm
armed
armor
army
around
arrange
arrest
arrive
arrow
art
artefact
artist
artwork
ask
aspect
assault
asset
assist
assume
asthma
athlete
atom
attack
attend
attitude
attract
auction
audit
august
aunt
author
auto
autumn
average
avocado
avoid
awake
aware
away
awesome
awful
awkward
axis
baby
bachelor
bacon
badge
bag
balance
balcony
ball
bamboo
banana
banner
bar
barely
bargain
barrel
base
basic
basket
battle
beach
bean
beauty
because
become
beef
before
begin
behave
behind
believe
below
belt
bench
benefit
best
betray
better
between
beyond
bicycle
bid
bike
bind
biology
bird
birth
bitter
black
blade
blame
blanket
blast
bleak
bless
blind
blood
blossom
blouse
blue
blur
blush
board
boat
body
boil
bomb
bone
bonus
book
boost
border
boring
borrow
boss
bottom
bounce
box
boy
bracket
brain
brand
brass
brave
bread
breeze
brick
bridge
brief
bright
bring
brisk
broccoli
broken
bronze
broom
brother
brown
brush
bubble
buddy
budget
buffalo
build
bulb
bulk
bullet
bundle
bunker
burden
burger
burst
bus
business
busy
butter
buyer
buzz
cabbage
cabin
cable
cactus
cage
cake
call
calm
camera
camp
can
canal
cancel
candy
cannon
canoe
canvas
canyon
capable
capital
captain
car
carbon
card
cargo
carpet
carry
cart
case
cash
casino
castle
casual
cat
catalog
catch
category
cattle
caught
cause
caution
cave
ceiling
celery
cement
census
century
cereal
certain
chair
chalk
champion
change
chaos
chapter
charge
chase
chat
cheap
check
cheese
chef
cherry
chest
chicken
chief
child
chimney
choice
choose
chronic
chuckle
chunk
churn
cigar
cinnamon
circle
citizen
city
civil
claim
clap
clarify
claw
clay
clean
clerk
clever
click
client
cliff
climb
clinic
clip
clock
clog
close
cloth
cloud
clown
club
clump
cluster
clutch
coach
coast
coconut
code
coffee
coil
coin
collect
color
column
combine
come
comfort
comic
common
company
concert
conduct
confirm
congress
connect
consider
control
convince
cook
cool
copper
copy
coral
core
corn
correct
cost
cotton
couch
country
couple
course
cousin
cover
coyote
crack
cradle
craft
cram
crane
crash
crater
crawl
crazy
cream
credit
creek
crew
cricket
crime
crisp
critic
crop
cross
crouch
crowd
crucial
cruel
cruise
crumble
crunch
crush
cry
crystal
cube
culture
cup
cupboard
curious
current
curtain
curve
cushion
custom
cute
cycle
dad
damage
damp
dance
danger
daring
dash
daughter
dawn
day
deal
debate
debris
decade
december
decide
decline
decorate
decrease
deer
defense
define
defy
degree
delay
deliver
demand
demise
denial
dentist
deny
depart
depend
deposit
depth
deputy
derive
describe
desert
design
desk
despair
destroy
detail
detect
develop
device
devote
diagram
dial
diamond
diary
dice
diesel
diet
differ
digital
dignity
dilemma
dinner
dinosaur
direct
dirt
disagree
discover
disease
dish
dismiss
disorder
display
distance
divert
divide
divorce
dizzy
doctor
document
dog
doll
dolphin
domain
donate
donkey
donor
door
dose
double
dove
draft
dragon
drama
drastic
draw
dream
dress
drift
drill
drink
drip
drive
drop
drum
dry
duck
dumb
dune
during
dust
dutch
duty
dwarf
dynamic
eager
eagle
early
earn
earth
easily
east
easy
echo
ecology
economy
edge
edit
educate
effort
egg
eight
either
elbow
elder
electric
elegant
element
elephant
elevator
elite
else
embark
embody
embrace
emerge
emotion
employ
empower
empty
enable
enact
end
endless
endorse
enemy
energy
enforce
engage
engine
enhance
enjoy
enlist
enough
enrich
enroll
ensure
enter
entire
entry
envelope
episode
equal
equip
era
erase
erode
erosion
error
erupt
escape
essay
essence
estate
eternal
ethics
evidence
evil
evoke
evolve
exact
example
excess
exchange
excite
exclude
excuse
execute
exercise
exhaust
exhibit
exile
exist
exit
exotic
expand
expect
expire
explain
expose
express
extend
extra
eye
eyebrow
fabric
face
faculty
fade
faint
faith
fall
false
fame
family
famous
fan
fancy
fantasy
farm
fashion
fat
fatal
father
fatigue
fault
favorite
feature
february
federal
fee
feed
feel
female
fence
festival
fetch
fever
few
fiber
fiction
field
figure
file
film
filter
final
find
fine
finger
finish
fire
firm
first
fiscal
fish
fit
fitness
fix
flag
flame
flash
flat
flavor
flee
flight
flip
float
flock
floor
flower
fluid
flush
fly
foam
focus
fog
foil
fold
follow
food
foot
force
forest
forget
fork
fortune
forum
forward
fossil
foster
found
fox
fragile
frame
frequent
fresh
friend
fringe
frog
front
frost
frown
frozen
fruit
fuel
fun
funny
furnace
fury
future
gadget
gain
galaxy
gallery
game
gap
garage
garbage
garden
garlic
garment
gas
gasp
gate
gather
gauge
gaze
general
genius
genre
gentle
genuine
gesture
ghost
giant
gift
giggle
ginger
giraffe
girl
give
glad
glance
glare
glass
glide
glimpse
globe
gloom
glory
glove
glow
glue
goat
goddess
gold
good
goose
gorilla
gospel
gossip
govern
gown
grab
grace
grain
grant
grape
grass
gravity
great
green
grid
grief
grit
grocery
group
grow
grunt
guard
guess
guide
guilt
guitar
gun
gym
habit
hair
half
hammer
hamster
hand
happy
harbor
hard
harsh
harvest
hat
have
hawk
hazard
head
health
heart
heavy
hedgehog
height
hello
helmet
help
hen
hero
hidden
high
hill
hint
hip
hire
history
hobby
hockey
hold
hole
holiday
hollow
home
honey
hood
hope
horn
horror
horse
hospital
host
hotel
hour
hover
hub
huge
human
humble
humor
hundred
hungry
hunt
hurdle
hurry
hurt
husband
hybrid
ice
icon
idea
identify
idle
ignore
ill
illegal
illness
image
imitate
immense
immune
impact
impose
improve
impulse
inch
include
income
increase
index
indicate
indoor
industry
infant
inflict
inform
inhale
inherit
initial
inject
injury
inmate
inner
innocent
input
inquiry
insane
insect
inside
inspire
install
intact
interest
into
invest
invite
involve
iron
island
isolate
issue
item
ivory
jacket
jaguar
jar
jazz
jealous
jeans
jelly
jewel
job
join
joke
journey
joy
judge
juice
jump
jungle
junior
junk
just
kangaroo
keen
keep
ketchup
key
kick
kid
kidney
kind
kingdom
kiss
kit
kitchen
kite
kitten
kiwi
knee
knife
knock
know
lab
label
labor
ladder
lady
lake
lamp
language
laptop
large
later
latin
laugh
laundry
lava
law
lawn
lawsuit
layer
lazy
leader
leaf
learn
leave
lecture
left
leg
legal
legend
leisure
lemon
lend
length
lens
leopard
lesson
letter
level
liar
liberty
library
license
life
lift
light
like
limb
limit
link
lion
liquid
list
little
live
lizard
load
loan
lobster
local
lock
logic
lonely
long
loop
lottery
loud
lounge
love
loyal
lucky
luggage
lumber
lunar
lunch
luxury
lyrics
machine
mad
magic
magnet
maid
mail
main
major
make
mammal
man
manage
mandate
mango
mansion
manual
maple
marble
march
margin
marine
market
marriage
mask
mass
master
match
material
math
matrix
matter
maximum
maze
meadow
mean
measure
meat
mechanic
medal
media
melody
melt
member
memory
mention
menu
mercy
merge
merit
merry
mesh
message
metal
method
middle
midnight
milk
million
mimic
mind
minimum
minor
minute
miracle
mirror
misery
miss
mistake
mix
mixed
mixture
mobile
model
modify
mom
moment
monitor
monkey
monster
month
moon
moral
more
morning
mosquito
mother
motion
motor
mountain
mouse
move
movie
much
muffin
mule
multiply
muscle
museum
mushroom
music
must
mutual
myself
mystery
myth
naive
name
napkin
narrow
nasty
nation
nature
near
neck
need
negative
neglect
neither
nephew
nerve
nest
net
network
neutral
never
news
next
nice
night
noble
noise
nominee
noodle
normal
north
nose
notable
note
nothing
notice
novel
now
nuclear
number
nurse
nut
oak
obey
object
oblige
obscure
observe
obtain
obvious
occur
ocean
october
odor
off
offer
office
often
oil
okay
old
olive
olympic
omit
once
one
onion
online
only
open
opera
opinion
oppose
option
orange
orbit
orchard
order
ordinary
organ
orient
original
orphan
ostrich
other
outdoor
outer
output
outside
oval
oven
over
own
owner
oxygen
oyster
ozone
pact
paddle
page
pair
palace
palm
panda
panel
panic
panther
paper
parade
parent
park
parrot
party
pass
patch
path
patient
patrol
pattern
pause
pave
payment
peace
peanut
pear
peasant
pelican
pen
penalty
pencil
people
pepper
perfect
permit
person
pet
phone
photo
phrase
physical
piano
picnic
picture
piece
pig
pigeon
pill
pilot
pink
pioneer
pipe
pistol
pitch
pizza
place
planet
plastic
plate
play
please
pledge
pluck
plug
plunge
poem
poet
point
polar
pole
police
pond
pony
pool
popular
portion
position
possible
post
potato
pottery
poverty
powder
power
practice
praise
predict
prefer
prepare
present
pretty
prevent
price
pride
primary
print
priority
prison
private
prize
problem
process
produce
profit
program
project
promote
proof
property
prosper
protect
proud
provide
public
pudding
pull
pulp
pulse
pumpkin
punch
pupil
puppy
purchase
purity
purpose
purse
push
put
puzzle
pyramid
quality
quantum
quarter
question
quick
quit
quiz
quote
rabbit
raccoon
race
rack
radar
radio
rail
rain
raise
rally
ramp
ranch
random
range
rapid
rare
rate
rather
raven
raw
razor
ready
real
reason
rebel
rebuild
recall
receive
recipe
record
recycle
reduce
reflect
reform
refuse
region
regret
regular
reject
relax
release
relief
rely
remain
remember
remind
remove
render
renew
rent
reopen
repair
repeat
replace
report
require
rescue
resemble
resist
resource
response
result
retire
retreat
return
reunion
reveal
review
reward
rhythm
rib
ribbon
rice
rich
ride
ridge
rifle
right
rigid
ring
riot
ripple
risk
ritual
rival
river
road
roast
robot
robust
rocket
romance
roof
rookie
room
rose
rotate
rough
round
route
royal
rubber
rude
rug
rule
run
runway
rural
sad
saddle
sadness
safe
sail
salad
salmon
salon
salt
salute
same
sample
sand
satisfy
satoshi
sauce
sausage
save
say
scale
scan
scare
scatter
scene
scheme
school
science
scissors
scorpion
scout
scrap
screen
script
scrub
sea
search
season
seat
second
secret
section
security
seed
seek
segment
select
sell
seminar
senior
sense
sentence
series
service
session
settle
setup
seven
shadow
shaft
shallow
share
shed
shell
sheriff
shield
shift
shine
ship
shiver
shock
shoe
shoot
shop
short
shoulder
shove
shrimp
shrug
shuffle
shy
sibling
sick
side
siege
sight
sign
silent
silk
silly
silver
similar
simple
since
sing
siren
sister
situate
six
size
skate
sketch
ski
skill
skin
skirt
skull
slab
slam
sleep
slender
slice
slide
slight
slim
slogan
slot
slow
slush
small
smart
smile
smoke
smooth
snack
snake
snap
sniff
snow
soap
soccer
social
sock
soda
soft
solar
soldier
solid
solution
solve
someone
song
soon
sorry
sort
soul
sound
soup
source
south
space
spare
spatial
spawn
speak
special
speed
spell
spend
sphere
spice
spider
spike
spin
spirit
split
spoil
sponsor
spoon
sport
spot
spray
spread
spring
spy
square
squeeze
squirrel
stable
stadium
staff
stage
stairs
stamp
stand
start
state
stay
steak
steel
stem
step
stereo
stick
still
sting
stock
stomach
stone
stool
story
stove
strategy
street
strike
strong
struggle
student
stuff
stumble
style
subject
submit
subway
success
such
sudden
suffer
sugar
suggest
suit
summer
sun
sunny
sunset
super
supply
supreme
sure
surface
surge
surprise
surround
survey
suspect
sustain
swallow
swamp
swap
swarm
swear
sweet
swift
swim
swing
switch
sword
symbol
symptom
syrup
system
table
tackle
tag
tail
talent
talk
tank
tape
target
task
taste
tattoo
taxi
teach
team
tell
ten
tenant
tennis
tent
term
test
text
thank
that
theme
then
theory
there
they
thing
this
thought
three
thrive
throw
thumb
thunder
ticket
tide
tiger
tilt
timber
time
tiny
tip
tired
tissue
title
toast
tobacco
today
toddler
toe
together
toilet
token
tomato
tomorrow
tone
tongue
tonight
tool
tooth
top
topic
topple
torch
tornado
tortoise
toss
total
tourist
toward
tower
town
toy
track
trade
traffic
tragic
train
transfer
trap
trash
travel
tray
treat
tree
trend
trial
tribe
trick
trigger
trim
trip
trophy
trouble
truck
true
truly
trumpet
trust
truth
try
tube
tuition
tumble
tuna
tunnel
turkey
turn
turtle
twelve
twenty
twice
twin
twist
two
type
typical
ugly
umbrella
unable
unaware
uncle
uncover
under
undo
unfair
unfold
unhappy
uniform
unique
unit
universe
unknown
unlock
until
unusual
unveil
update
upgrade
uphold
upon
upper
upset
urban
urge
usage
use
used
useful
useless
usual
utility
vacant
vacuum
vague
valid
valley
valve
van
vanish
vapor
various
vast
vault
vehicle
velvet
vendor
venture
venue
verb
verify
version
very
vessel
veteran
viable
vibrant
vicious
victory
video
view
village
vintage
violin
virtual
virus
visa
visit
visual
vital
vivid
vocal
voice
void
volcano
volume
vote
voyage
wage
wagon
wait
walk
wall
walnut
want
warfare
warm
warrior
wash
wasp
waste
water
wave
way
wealth
weapon
wear
weasel
weather
web
wedding
weekend
weird
welcome
west
wet
whale
what
wheat
wheel
when
where
whip
whisper
wide
width
wife
wild
will
win
window
wine
wing
wink
winner
winter
wire
wisdom
wise
wish
witness
wolf
woman
wonder
wood
wool
word
work
world
worry
worth
wrap
wreck
wrestle
wrist
write
wrong
yard
year
yellow
you
young
youth
zebra
zero
zone
zoo`.split(`
`)},2457:(o,Q,C)=>{var E=C(574).Buffer;o.exports=function(h){if(h.length>=255)throw new TypeError("Alphabet too long");for(var a=new Uint8Array(256),t=0;t<a.length;t++)a[t]=255;for(var e=0;e<h.length;e++){var G=h.charAt(e),c=G.charCodeAt(0);if(a[c]!==255)throw new TypeError(G+" is ambiguous");a[c]=e}var p=h.length,Y=h.charAt(0),F=Math.log(p)/Math.log(256),s=Math.log(256)/Math.log(p);function M(N){if(typeof N!="string")throw new TypeError("Expected String");if(N.length===0)return E.alloc(0);for(var k=0,w=0,D=0;N[k]===Y;)w++,k++;for(var y=(N.length-k)*F+1>>>0,O=new Uint8Array(y);N[k];){var R=a[N.charCodeAt(k)];if(R===255)return;for(var m=0,V=y-1;(R!==0||m<D)&&V!==-1;V--,m++)R+=p*O[V]>>>0,O[V]=R%256>>>0,R=R/256>>>0;if(R!==0)throw new Error("Non-zero carry");D=m,k++}for(var j=y-D;j!==y&&O[j]===0;)j++;var U=E.allocUnsafe(w+(y-j));U.fill(0,0,w);for(var S=w;j!==y;)U[S++]=O[j++];return U}return{encode:function(N){if((Array.isArray(N)||N instanceof Uint8Array)&&(N=E.from(N)),!E.isBuffer(N))throw new TypeError("Expected Buffer");if(N.length===0)return"";for(var k=0,w=0,D=0,y=N.length;D!==y&&N[D]===0;)D++,k++;for(var O=(y-D)*s+1>>>0,R=new Uint8Array(O);D!==y;){for(var m=N[D],V=0,j=O-1;(m!==0||V<w)&&j!==-1;j--,V++)m+=256*R[j]>>>0,R[j]=m%p>>>0,m=m/p>>>0;if(m!==0)throw new Error("Non-zero carry");w=V,D++}for(var U=O-w;U!==O&&R[U]===0;)U++;for(var S=Y.repeat(k);U<O;++U)S+=h.charAt(R[U]);return S},decodeUnsafe:M,decode:function(N){var k=M(N);if(k)return k;throw new Error("Non-base"+p+" character")}}}},8294:(o,Q)=>{Q.byteLength=function(p){var Y=G(p),F=Y[0],s=Y[1];return 3*(F+s)/4-s},Q.toByteArray=function(p){var Y,F,s=G(p),M=s[0],N=s[1],k=new h(function(y,O,R){return 3*(O+R)/4-R}(0,M,N)),w=0,D=N>0?M-4:M;for(F=0;F<D;F+=4)Y=E[p.charCodeAt(F)]<<18|E[p.charCodeAt(F+1)]<<12|E[p.charCodeAt(F+2)]<<6|E[p.charCodeAt(F+3)],k[w++]=Y>>16&255,k[w++]=Y>>8&255,k[w++]=255&Y;return N===2&&(Y=E[p.charCodeAt(F)]<<2|E[p.charCodeAt(F+1)]>>4,k[w++]=255&Y),N===1&&(Y=E[p.charCodeAt(F)]<<10|E[p.charCodeAt(F+1)]<<4|E[p.charCodeAt(F+2)]>>2,k[w++]=Y>>8&255,k[w++]=255&Y),k},Q.fromByteArray=function(p){for(var Y,F=p.length,s=F%3,M=[],N=16383,k=0,w=F-s;k<w;k+=N)M.push(c(p,k,k+N>w?w:k+N));return s===1?(Y=p[F-1],M.push(C[Y>>2]+C[Y<<4&63]+"==")):s===2&&(Y=(p[F-2]<<8)+p[F-1],M.push(C[Y>>10]+C[Y>>4&63]+C[Y<<2&63]+"=")),M.join("")};for(var C=[],E=[],h=typeof Uint8Array<"u"?Uint8Array:Array,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t=0,e=a.length;t<e;++t)C[t]=a[t],E[a.charCodeAt(t)]=t;function G(p){var Y=p.length;if(Y%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var F=p.indexOf("=");return F===-1&&(F=Y),[F,F===Y?0:4-F%4]}function c(p,Y,F){for(var s,M,N=[],k=Y;k<F;k+=3)s=(p[k]<<16&16711680)+(p[k+1]<<8&65280)+(255&p[k+2]),N.push(C[(M=s)>>18&63]+C[M>>12&63]+C[M>>6&63]+C[63&M]);return N.join("")}E["-".charCodeAt(0)]=62,E["_".charCodeAt(0)]=63},6504:(o,Q,C)=>{var E;(function(h){var a,t=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,e=Math.ceil,G=Math.floor,c="[BigNumber Error] ",p=c+"Number primitive has more than 15 significant digits: ",Y=1e14,F=14,s=9007199254740991,M=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],N=1e7,k=1e9;function w(j){var U=0|j;return j>0||j===U?U:U-1}function D(j){for(var U,S,X=1,u=j.length,Z=j[0]+"";X<u;){for(U=j[X++]+"",S=F-U.length;S--;U="0"+U);Z+=U}for(u=Z.length;Z.charCodeAt(--u)===48;);return Z.slice(0,u+1||1)}function y(j,U){var S,X,u=j.c,Z=U.c,L=j.s,_=U.s,f=j.e,W=U.e;if(!L||!_)return null;if(S=u&&!u[0],X=Z&&!Z[0],S||X)return S?X?0:-_:L;if(L!=_)return L;if(S=L<0,X=f==W,!u||!Z)return X?0:!u^S?1:-1;if(!X)return f>W^S?1:-1;for(_=(f=u.length)<(W=Z.length)?f:W,L=0;L<_;L++)if(u[L]!=Z[L])return u[L]>Z[L]^S?1:-1;return f==W?0:f>W^S?1:-1}function O(j,U,S,X){if(j<U||j>S||j!==G(j))throw Error(c+(X||"Argument")+(typeof j=="number"?j<U||j>S?" out of range: ":" not an integer: ":" not a primitive number: ")+String(j))}function R(j){var U=j.c.length-1;return w(j.e/F)==U&&j.c[U]%2!=0}function m(j,U){return(j.length>1?j.charAt(0)+"."+j.slice(1):j)+(U<0?"e":"e+")+U}function V(j,U,S){var X,u;if(U<0){for(u=S+".";++U;u+=S);j=u+j}else if(++U>(X=j.length)){for(u=S,U-=X;--U;u+=S);j+=u}else U<X&&(j=j.slice(0,U)+"."+j.slice(U));return j}a=function j(U){var S,X,u,Z,L,_,f,W,QA,cA,aA=x.prototype={constructor:x,toString:null,valueOf:null},tA=new x(1),DA=20,EA=4,CA=-7,K=21,b=-1e7,P=1e7,kA=!1,eA=1,FA=0,v={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},l="0123456789abcdefghijklmnopqrstuvwxyz",d=!0;function x(J,q){var H,T,z,$,BA,gA,iA,wA,GA=this;if(!(GA instanceof x))return new x(J,q);if(q==null){if(J&&J._isBigNumber===!0)return GA.s=J.s,void(!J.c||J.e>P?GA.c=GA.e=null:J.e<b?GA.c=[GA.e=0]:(GA.e=J.e,GA.c=J.c.slice()));if((gA=typeof J=="number")&&0*J==0){if(GA.s=1/J<0?(J=-J,-1):1,J===~~J){for($=0,BA=J;BA>=10;BA/=10,$++);return void($>P?GA.c=GA.e=null:(GA.e=$,GA.c=[J]))}wA=String(J)}else{if(!t.test(wA=String(J)))return u(GA,wA,gA);GA.s=wA.charCodeAt(0)==45?(wA=wA.slice(1),-1):1}($=wA.indexOf("."))>-1&&(wA=wA.replace(".","")),(BA=wA.search(/e/i))>0?($<0&&($=BA),$+=+wA.slice(BA+1),wA=wA.substring(0,BA)):$<0&&($=wA.length)}else{if(O(q,2,l.length,"Base"),q==10&&d)return n(GA=new x(J),DA+GA.e+1,EA);if(wA=String(J),gA=typeof J=="number"){if(0*J!=0)return u(GA,wA,gA,q);if(GA.s=1/J<0?(wA=wA.slice(1),-1):1,x.DEBUG&&wA.replace(/^0\.0*|\./,"").length>15)throw Error(p+J)}else GA.s=wA.charCodeAt(0)===45?(wA=wA.slice(1),-1):1;for(H=l.slice(0,q),$=BA=0,iA=wA.length;BA<iA;BA++)if(H.indexOf(T=wA.charAt(BA))<0){if(T=="."){if(BA>$){$=iA;continue}}else if(!z&&(wA==wA.toUpperCase()&&(wA=wA.toLowerCase())||wA==wA.toLowerCase()&&(wA=wA.toUpperCase()))){z=!0,BA=-1,$=0;continue}return u(GA,String(J),gA,q)}gA=!1,($=(wA=X(wA,q,10,GA.s)).indexOf("."))>-1?wA=wA.replace(".",""):$=wA.length}for(BA=0;wA.charCodeAt(BA)===48;BA++);for(iA=wA.length;wA.charCodeAt(--iA)===48;);if(wA=wA.slice(BA,++iA)){if(iA-=BA,gA&&x.DEBUG&&iA>15&&(J>s||J!==G(J)))throw Error(p+GA.s*J);if(($=$-BA-1)>P)GA.c=GA.e=null;else if($<b)GA.c=[GA.e=0];else{if(GA.e=$,GA.c=[],BA=($+1)%F,$<0&&(BA+=F),BA<iA){for(BA&&GA.c.push(+wA.slice(0,BA)),iA-=F;BA<iA;)GA.c.push(+wA.slice(BA,BA+=F));BA=F-(wA=wA.slice(BA)).length}else BA-=iA;for(;BA--;wA+="0");GA.c.push(+wA)}}else GA.c=[GA.e=0]}function oA(J,q,H,T){var z,$,BA,gA,iA;if(H==null?H=EA:O(H,0,8),!J.c)return J.toString();if(z=J.c[0],BA=J.e,q==null)iA=D(J.c),iA=T==1||T==2&&(BA<=CA||BA>=K)?m(iA,BA):V(iA,BA,"0");else if($=(J=n(new x(J),q,H)).e,gA=(iA=D(J.c)).length,T==1||T==2&&(q<=$||$<=CA)){for(;gA<q;iA+="0",gA++);iA=m(iA,$)}else if(q-=BA,iA=V(iA,$,"0"),$+1>gA){if(--q>0)for(iA+=".";q--;iA+="0");}else if((q+=$-gA)>0)for($+1==gA&&(iA+=".");q--;iA+="0");return J.s<0&&z?"-"+iA:iA}function hA(J,q){for(var H,T=1,z=new x(J[0]);T<J.length;T++){if(!(H=new x(J[T])).s){z=H;break}q.call(z,H)&&(z=H)}return z}function AA(J,q,H){for(var T=1,z=q.length;!q[--z];q.pop());for(z=q[0];z>=10;z/=10,T++);return(H=T+H*F-1)>P?J.c=J.e=null:H<b?J.c=[J.e=0]:(J.e=H,J.c=q),J}function n(J,q,H,T){var z,$,BA,gA,iA,wA,GA,MA=J.c,nA=M;if(MA){A:{for(z=1,gA=MA[0];gA>=10;gA/=10,z++);if(($=q-z)<0)$+=F,BA=q,GA=(iA=MA[wA=0])/nA[z-BA-1]%10|0;else if((wA=e(($+1)/F))>=MA.length){if(!T)break A;for(;MA.length<=wA;MA.push(0));iA=GA=0,z=1,BA=($%=F)-F+1}else{for(iA=gA=MA[wA],z=1;gA>=10;gA/=10,z++);GA=(BA=($%=F)-F+z)<0?0:iA/nA[z-BA-1]%10|0}if(T=T||q<0||MA[wA+1]!=null||(BA<0?iA:iA%nA[z-BA-1]),T=H<4?(GA||T)&&(H==0||H==(J.s<0?3:2)):GA>5||GA==5&&(H==4||T||H==6&&($>0?BA>0?iA/nA[z-BA]:0:MA[wA-1])%10&1||H==(J.s<0?8:7)),q<1||!MA[0])return MA.length=0,T?(q-=J.e+1,MA[0]=nA[(F-q%F)%F],J.e=-q||0):MA[0]=J.e=0,J;if($==0?(MA.length=wA,gA=1,wA--):(MA.length=wA+1,gA=nA[F-$],MA[wA]=BA>0?G(iA/nA[z-BA]%nA[BA])*gA:0),T)for(;;){if(wA==0){for($=1,BA=MA[0];BA>=10;BA/=10,$++);for(BA=MA[0]+=gA,gA=1;BA>=10;BA/=10,gA++);$!=gA&&(J.e++,MA[0]==Y&&(MA[0]=1));break}if(MA[wA]+=gA,MA[wA]!=Y)break;MA[wA--]=0,gA=1}for($=MA.length;MA[--$]===0;MA.pop());}J.e>P?J.c=J.e=null:J.e<b&&(J.c=[J.e=0])}return J}function r(J){var q,H=J.e;return H===null?J.toString():(q=D(J.c),q=H<=CA||H>=K?m(q,H):V(q,H,"0"),J.s<0?"-"+q:q)}return x.clone=j,x.ROUND_UP=0,x.ROUND_DOWN=1,x.ROUND_CEIL=2,x.ROUND_FLOOR=3,x.ROUND_HALF_UP=4,x.ROUND_HALF_DOWN=5,x.ROUND_HALF_EVEN=6,x.ROUND_HALF_CEIL=7,x.ROUND_HALF_FLOOR=8,x.EUCLID=9,x.config=x.set=function(J){var q,H;if(J!=null){if(typeof J!="object")throw Error(c+"Object expected: "+J);if(J.hasOwnProperty(q="DECIMAL_PLACES")&&(O(H=J[q],0,k,q),DA=H),J.hasOwnProperty(q="ROUNDING_MODE")&&(O(H=J[q],0,8,q),EA=H),J.hasOwnProperty(q="EXPONENTIAL_AT")&&((H=J[q])&&H.pop?(O(H[0],-k,0,q),O(H[1],0,k,q),CA=H[0],K=H[1]):(O(H,-k,k,q),CA=-(K=H<0?-H:H))),J.hasOwnProperty(q="RANGE"))if((H=J[q])&&H.pop)O(H[0],-k,-1,q),O(H[1],1,k,q),b=H[0],P=H[1];else{if(O(H,-k,k,q),!H)throw Error(c+q+" cannot be zero: "+H);b=-(P=H<0?-H:H)}if(J.hasOwnProperty(q="CRYPTO")){if((H=J[q])!==!!H)throw Error(c+q+" not true or false: "+H);if(H){if(typeof crypto>"u"||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw kA=!H,Error(c+"crypto unavailable");kA=H}else kA=H}if(J.hasOwnProperty(q="MODULO_MODE")&&(O(H=J[q],0,9,q),eA=H),J.hasOwnProperty(q="POW_PRECISION")&&(O(H=J[q],0,k,q),FA=H),J.hasOwnProperty(q="FORMAT")){if(typeof(H=J[q])!="object")throw Error(c+q+" not an object: "+H);v=H}if(J.hasOwnProperty(q="ALPHABET")){if(typeof(H=J[q])!="string"||/^.?$|[+\-.\s]|(.).*\1/.test(H))throw Error(c+q+" invalid: "+H);d=H.slice(0,10)=="0123456789",l=H}}return{DECIMAL_PLACES:DA,ROUNDING_MODE:EA,EXPONENTIAL_AT:[CA,K],RANGE:[b,P],CRYPTO:kA,MODULO_MODE:eA,POW_PRECISION:FA,FORMAT:v,ALPHABET:l}},x.isBigNumber=function(J){if(!J||J._isBigNumber!==!0)return!1;if(!x.DEBUG)return!0;var q,H,T=J.c,z=J.e,$=J.s;A:if({}.toString.call(T)=="[object Array]"){if(($===1||$===-1)&&z>=-k&&z<=k&&z===G(z)){if(T[0]===0){if(z===0&&T.length===1)return!0;break A}if((q=(z+1)%F)<1&&(q+=F),String(T[0]).length==q){for(q=0;q<T.length;q++)if((H=T[q])<0||H>=Y||H!==G(H))break A;if(H!==0)return!0}}}else if(T===null&&z===null&&($===null||$===1||$===-1))return!0;throw Error(c+"Invalid BigNumber: "+J)},x.maximum=x.max=function(){return hA(arguments,aA.lt)},x.minimum=x.min=function(){return hA(arguments,aA.gt)},x.random=(Z=9007199254740992,L=Math.random()*Z&2097151?function(){return G(Math.random()*Z)}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)},function(J){var q,H,T,z,$,BA=0,gA=[],iA=new x(tA);if(J==null?J=DA:O(J,0,k),z=e(J/F),kA)if(crypto.getRandomValues){for(q=crypto.getRandomValues(new Uint32Array(z*=2));BA<z;)($=131072*q[BA]+(q[BA+1]>>>11))>=9e15?(H=crypto.getRandomValues(new Uint32Array(2)),q[BA]=H[0],q[BA+1]=H[1]):(gA.push($%1e14),BA+=2);BA=z/2}else{if(!crypto.randomBytes)throw kA=!1,Error(c+"crypto unavailable");for(q=crypto.randomBytes(z*=7);BA<z;)($=281474976710656*(31&q[BA])+1099511627776*q[BA+1]+4294967296*q[BA+2]+16777216*q[BA+3]+(q[BA+4]<<16)+(q[BA+5]<<8)+q[BA+6])>=9e15?crypto.randomBytes(7).copy(q,BA):(gA.push($%1e14),BA+=7);BA=z/7}if(!kA)for(;BA<z;)($=L())<9e15&&(gA[BA++]=$%1e14);for(z=gA[--BA],J%=F,z&&J&&($=M[F-J],gA[BA]=G(z/$)*$);gA[BA]===0;gA.pop(),BA--);if(BA<0)gA=[T=0];else{for(T=-1;gA[0]===0;gA.splice(0,1),T-=F);for(BA=1,$=gA[0];$>=10;$/=10,BA++);BA<F&&(T-=F-BA)}return iA.e=T,iA.c=gA,iA}),x.sum=function(){for(var J=1,q=arguments,H=new x(q[0]);J<q.length;)H=H.plus(q[J++]);return H},X=function(){var J="0123456789";function q(H,T,z,$){for(var BA,gA,iA=[0],wA=0,GA=H.length;wA<GA;){for(gA=iA.length;gA--;iA[gA]*=T);for(iA[0]+=$.indexOf(H.charAt(wA++)),BA=0;BA<iA.length;BA++)iA[BA]>z-1&&(iA[BA+1]==null&&(iA[BA+1]=0),iA[BA+1]+=iA[BA]/z|0,iA[BA]%=z)}return iA.reverse()}return function(H,T,z,$,BA){var gA,iA,wA,GA,MA,nA,JA,UA,mA=H.indexOf("."),fA=DA,lA=EA;for(mA>=0&&(GA=FA,FA=0,H=H.replace(".",""),nA=(UA=new x(T)).pow(H.length-mA),FA=GA,UA.c=q(V(D(nA.c),nA.e,"0"),10,z,J),UA.e=UA.c.length),wA=GA=(JA=q(H,T,z,BA?(gA=l,J):(gA=J,l))).length;JA[--GA]==0;JA.pop());if(!JA[0])return gA.charAt(0);if(mA<0?--wA:(nA.c=JA,nA.e=wA,nA.s=$,JA=(nA=S(nA,UA,fA,lA,z)).c,MA=nA.r,wA=nA.e),mA=JA[iA=wA+fA+1],GA=z/2,MA=MA||iA<0||JA[iA+1]!=null,MA=lA<4?(mA!=null||MA)&&(lA==0||lA==(nA.s<0?3:2)):mA>GA||mA==GA&&(lA==4||MA||lA==6&&1&JA[iA-1]||lA==(nA.s<0?8:7)),iA<1||!JA[0])H=MA?V(gA.charAt(1),-fA,gA.charAt(0)):gA.charAt(0);else{if(JA.length=iA,MA)for(--z;++JA[--iA]>z;)JA[iA]=0,iA||(++wA,JA=[1].concat(JA));for(GA=JA.length;!JA[--GA];);for(mA=0,H="";mA<=GA;H+=gA.charAt(JA[mA++]));H=V(H,wA,gA.charAt(0))}return H}}(),S=function(){function J(T,z,$){var BA,gA,iA,wA,GA=0,MA=T.length,nA=z%N,JA=z/N|0;for(T=T.slice();MA--;)GA=((gA=nA*(iA=T[MA]%N)+(BA=JA*iA+(wA=T[MA]/N|0)*nA)%N*N+GA)/$|0)+(BA/N|0)+JA*wA,T[MA]=gA%$;return GA&&(T=[GA].concat(T)),T}function q(T,z,$,BA){var gA,iA;if($!=BA)iA=$>BA?1:-1;else for(gA=iA=0;gA<$;gA++)if(T[gA]!=z[gA]){iA=T[gA]>z[gA]?1:-1;break}return iA}function H(T,z,$,BA){for(var gA=0;$--;)T[$]-=gA,gA=T[$]<z[$]?1:0,T[$]=gA*BA+T[$]-z[$];for(;!T[0]&&T.length>1;T.splice(0,1));}return function(T,z,$,BA,gA){var iA,wA,GA,MA,nA,JA,UA,mA,fA,lA,rA,SA,WA,xA,XA,jA,zA,uA=T.s==z.s?1:-1,OA=T.c,KA=z.c;if(!(OA&&OA[0]&&KA&&KA[0]))return new x(T.s&&z.s&&(OA?!KA||OA[0]!=KA[0]:KA)?OA&&OA[0]==0||!KA?0*uA:uA/0:NaN);for(fA=(mA=new x(uA)).c=[],uA=$+(wA=T.e-z.e)+1,gA||(gA=Y,wA=w(T.e/F)-w(z.e/F),uA=uA/F|0),GA=0;KA[GA]==(OA[GA]||0);GA++);if(KA[GA]>(OA[GA]||0)&&wA--,uA<0)fA.push(1),MA=!0;else{for(xA=OA.length,jA=KA.length,GA=0,uA+=2,(nA=G(gA/(KA[0]+1)))>1&&(KA=J(KA,nA,gA),OA=J(OA,nA,gA),jA=KA.length,xA=OA.length),WA=jA,rA=(lA=OA.slice(0,jA)).length;rA<jA;lA[rA++]=0);zA=KA.slice(),zA=[0].concat(zA),XA=KA[0],KA[1]>=gA/2&&XA++;do{if(nA=0,(iA=q(KA,lA,jA,rA))<0){if(SA=lA[0],jA!=rA&&(SA=SA*gA+(lA[1]||0)),(nA=G(SA/XA))>1)for(nA>=gA&&(nA=gA-1),UA=(JA=J(KA,nA,gA)).length,rA=lA.length;q(JA,lA,UA,rA)==1;)nA--,H(JA,jA<UA?zA:KA,UA,gA),UA=JA.length,iA=1;else nA==0&&(iA=nA=1),UA=(JA=KA.slice()).length;if(UA<rA&&(JA=[0].concat(JA)),H(lA,JA,rA,gA),rA=lA.length,iA==-1)for(;q(KA,lA,jA,rA)<1;)nA++,H(lA,jA<rA?zA:KA,rA,gA),rA=lA.length}else iA===0&&(nA++,lA=[0]);fA[GA++]=nA,lA[0]?lA[rA++]=OA[WA]||0:(lA=[OA[WA]],rA=1)}while((WA++<xA||lA[0]!=null)&&uA--);MA=lA[0]!=null,fA[0]||fA.splice(0,1)}if(gA==Y){for(GA=1,uA=fA[0];uA>=10;uA/=10,GA++);n(mA,$+(mA.e=GA+wA*F-1)+1,BA,MA)}else mA.e=wA,mA.r=+MA;return mA}}(),_=/^(-?)0([xbo])(?=\w[\w.]*$)/i,f=/^([^.]+)\.$/,W=/^\.([^.]+)$/,QA=/^-?(Infinity|NaN)$/,cA=/^\s*\+(?=[\w.])|^\s+|\s+$/g,u=function(J,q,H,T){var z,$=H?q:q.replace(cA,"");if(QA.test($))J.s=isNaN($)?null:$<0?-1:1;else{if(!H&&($=$.replace(_,function(BA,gA,iA){return z=(iA=iA.toLowerCase())=="x"?16:iA=="b"?2:8,T&&T!=z?BA:gA}),T&&(z=T,$=$.replace(f,"$1").replace(W,"0.$1")),q!=$))return new x($,z);if(x.DEBUG)throw Error(c+"Not a"+(T?" base "+T:"")+" number: "+q);J.s=null}J.c=J.e=null},aA.absoluteValue=aA.abs=function(){var J=new x(this);return J.s<0&&(J.s=1),J},aA.comparedTo=function(J,q){return y(this,new x(J,q))},aA.decimalPlaces=aA.dp=function(J,q){var H,T,z,$=this;if(J!=null)return O(J,0,k),q==null?q=EA:O(q,0,8),n(new x($),J+$.e+1,q);if(!(H=$.c))return null;if(T=((z=H.length-1)-w(this.e/F))*F,z=H[z])for(;z%10==0;z/=10,T--);return T<0&&(T=0),T},aA.dividedBy=aA.div=function(J,q){return S(this,new x(J,q),DA,EA)},aA.dividedToIntegerBy=aA.idiv=function(J,q){return S(this,new x(J,q),0,1)},aA.exponentiatedBy=aA.pow=function(J,q){var H,T,z,$,BA,gA,iA,wA,GA=this;if((J=new x(J)).c&&!J.isInteger())throw Error(c+"Exponent not an integer: "+r(J));if(q!=null&&(q=new x(q)),BA=J.e>14,!GA.c||!GA.c[0]||GA.c[0]==1&&!GA.e&&GA.c.length==1||!J.c||!J.c[0])return wA=new x(Math.pow(+r(GA),BA?2-R(J):+r(J))),q?wA.mod(q):wA;if(gA=J.s<0,q){if(q.c?!q.c[0]:!q.s)return new x(NaN);(T=!gA&&GA.isInteger()&&q.isInteger())&&(GA=GA.mod(q))}else{if(J.e>9&&(GA.e>0||GA.e<-1||(GA.e==0?GA.c[0]>1||BA&&GA.c[1]>=24e7:GA.c[0]<8e13||BA&&GA.c[0]<=9999975e7)))return $=GA.s<0&&R(J)?-0:0,GA.e>-1&&($=1/$),new x(gA?1/$:$);FA&&($=e(FA/F+2))}for(BA?(H=new x(.5),gA&&(J.s=1),iA=R(J)):iA=(z=Math.abs(+r(J)))%2,wA=new x(tA);;){if(iA){if(!(wA=wA.times(GA)).c)break;$?wA.c.length>$&&(wA.c.length=$):T&&(wA=wA.mod(q))}if(z){if((z=G(z/2))===0)break;iA=z%2}else if(n(J=J.times(H),J.e+1,1),J.e>14)iA=R(J);else{if((z=+r(J))==0)break;iA=z%2}GA=GA.times(GA),$?GA.c&&GA.c.length>$&&(GA.c.length=$):T&&(GA=GA.mod(q))}return T?wA:(gA&&(wA=tA.div(wA)),q?wA.mod(q):$?n(wA,FA,EA,void 0):wA)},aA.integerValue=function(J){var q=new x(this);return J==null?J=EA:O(J,0,8),n(q,q.e+1,J)},aA.isEqualTo=aA.eq=function(J,q){return y(this,new x(J,q))===0},aA.isFinite=function(){return!!this.c},aA.isGreaterThan=aA.gt=function(J,q){return y(this,new x(J,q))>0},aA.isGreaterThanOrEqualTo=aA.gte=function(J,q){return(q=y(this,new x(J,q)))===1||q===0},aA.isInteger=function(){return!!this.c&&w(this.e/F)>this.c.length-2},aA.isLessThan=aA.lt=function(J,q){return y(this,new x(J,q))<0},aA.isLessThanOrEqualTo=aA.lte=function(J,q){return(q=y(this,new x(J,q)))===-1||q===0},aA.isNaN=function(){return!this.s},aA.isNegative=function(){return this.s<0},aA.isPositive=function(){return this.s>0},aA.isZero=function(){return!!this.c&&this.c[0]==0},aA.minus=function(J,q){var H,T,z,$,BA=this,gA=BA.s;if(q=(J=new x(J,q)).s,!gA||!q)return new x(NaN);if(gA!=q)return J.s=-q,BA.plus(J);var iA=BA.e/F,wA=J.e/F,GA=BA.c,MA=J.c;if(!iA||!wA){if(!GA||!MA)return GA?(J.s=-q,J):new x(MA?BA:NaN);if(!GA[0]||!MA[0])return MA[0]?(J.s=-q,J):new x(GA[0]?BA:EA==3?-0:0)}if(iA=w(iA),wA=w(wA),GA=GA.slice(),gA=iA-wA){for(($=gA<0)?(gA=-gA,z=GA):(wA=iA,z=MA),z.reverse(),q=gA;q--;z.push(0));z.reverse()}else for(T=($=(gA=GA.length)<(q=MA.length))?gA:q,gA=q=0;q<T;q++)if(GA[q]!=MA[q]){$=GA[q]<MA[q];break}if($&&(z=GA,GA=MA,MA=z,J.s=-J.s),(q=(T=MA.length)-(H=GA.length))>0)for(;q--;GA[H++]=0);for(q=Y-1;T>gA;){if(GA[--T]<MA[T]){for(H=T;H&&!GA[--H];GA[H]=q);--GA[H],GA[T]+=Y}GA[T]-=MA[T]}for(;GA[0]==0;GA.splice(0,1),--wA);return GA[0]?AA(J,GA,wA):(J.s=EA==3?-1:1,J.c=[J.e=0],J)},aA.modulo=aA.mod=function(J,q){var H,T,z=this;return J=new x(J,q),!z.c||!J.s||J.c&&!J.c[0]?new x(NaN):!J.c||z.c&&!z.c[0]?new x(z):(eA==9?(T=J.s,J.s=1,H=S(z,J,0,3),J.s=T,H.s*=T):H=S(z,J,0,eA),(J=z.minus(H.times(J))).c[0]||eA!=1||(J.s=z.s),J)},aA.multipliedBy=aA.times=function(J,q){var H,T,z,$,BA,gA,iA,wA,GA,MA,nA,JA,UA,mA,fA,lA=this,rA=lA.c,SA=(J=new x(J,q)).c;if(!(rA&&SA&&rA[0]&&SA[0]))return!lA.s||!J.s||rA&&!rA[0]&&!SA||SA&&!SA[0]&&!rA?J.c=J.e=J.s=null:(J.s*=lA.s,rA&&SA?(J.c=[0],J.e=0):J.c=J.e=null),J;for(T=w(lA.e/F)+w(J.e/F),J.s*=lA.s,(iA=rA.length)<(MA=SA.length)&&(UA=rA,rA=SA,SA=UA,z=iA,iA=MA,MA=z),z=iA+MA,UA=[];z--;UA.push(0));for(mA=Y,fA=N,z=MA;--z>=0;){for(H=0,nA=SA[z]%fA,JA=SA[z]/fA|0,$=z+(BA=iA);$>z;)H=((wA=nA*(wA=rA[--BA]%fA)+(gA=JA*wA+(GA=rA[BA]/fA|0)*nA)%fA*fA+UA[$]+H)/mA|0)+(gA/fA|0)+JA*GA,UA[$--]=wA%mA;UA[$]=H}return H?++T:UA.splice(0,1),AA(J,UA,T)},aA.negated=function(){var J=new x(this);return J.s=-J.s||null,J},aA.plus=function(J,q){var H,T=this,z=T.s;if(q=(J=new x(J,q)).s,!z||!q)return new x(NaN);if(z!=q)return J.s=-q,T.minus(J);var $=T.e/F,BA=J.e/F,gA=T.c,iA=J.c;if(!$||!BA){if(!gA||!iA)return new x(z/0);if(!gA[0]||!iA[0])return iA[0]?J:new x(gA[0]?T:0*z)}if($=w($),BA=w(BA),gA=gA.slice(),z=$-BA){for(z>0?(BA=$,H=iA):(z=-z,H=gA),H.reverse();z--;H.push(0));H.reverse()}for((z=gA.length)-(q=iA.length)<0&&(H=iA,iA=gA,gA=H,q=z),z=0;q;)z=(gA[--q]=gA[q]+iA[q]+z)/Y|0,gA[q]=Y===gA[q]?0:gA[q]%Y;return z&&(gA=[z].concat(gA),++BA),AA(J,gA,BA)},aA.precision=aA.sd=function(J,q){var H,T,z,$=this;if(J!=null&&J!==!!J)return O(J,1,k),q==null?q=EA:O(q,0,8),n(new x($),J,q);if(!(H=$.c))return null;if(T=(z=H.length-1)*F+1,z=H[z]){for(;z%10==0;z/=10,T--);for(z=H[0];z>=10;z/=10,T++);}return J&&$.e+1>T&&(T=$.e+1),T},aA.shiftedBy=function(J){return O(J,-9007199254740991,s),this.times("1e"+J)},aA.squareRoot=aA.sqrt=function(){var J,q,H,T,z,$=this,BA=$.c,gA=$.s,iA=$.e,wA=DA+4,GA=new x("0.5");if(gA!==1||!BA||!BA[0])return new x(!gA||gA<0&&(!BA||BA[0])?NaN:BA?$:1/0);if((gA=Math.sqrt(+r($)))==0||gA==1/0?(((q=D(BA)).length+iA)%2==0&&(q+="0"),gA=Math.sqrt(+q),iA=w((iA+1)/2)-(iA<0||iA%2),H=new x(q=gA==1/0?"5e"+iA:(q=gA.toExponential()).slice(0,q.indexOf("e")+1)+iA)):H=new x(gA+""),H.c[0]){for((gA=(iA=H.e)+wA)<3&&(gA=0);;)if(z=H,H=GA.times(z.plus(S($,z,wA,1))),D(z.c).slice(0,gA)===(q=D(H.c)).slice(0,gA)){if(H.e<iA&&--gA,(q=q.slice(gA-3,gA+1))!="9999"&&(T||q!="4999")){+q&&(+q.slice(1)||q.charAt(0)!="5")||(n(H,H.e+DA+2,1),J=!H.times(H).eq($));break}if(!T&&(n(z,z.e+DA+2,0),z.times(z).eq($))){H=z;break}wA+=4,gA+=4,T=1}}return n(H,H.e+DA+1,EA,J)},aA.toExponential=function(J,q){return J!=null&&(O(J,0,k),J++),oA(this,J,q,1)},aA.toFixed=function(J,q){return J!=null&&(O(J,0,k),J=J+this.e+1),oA(this,J,q)},aA.toFormat=function(J,q,H){var T,z=this;if(H==null)J!=null&&q&&typeof q=="object"?(H=q,q=null):J&&typeof J=="object"?(H=J,J=q=null):H=v;else if(typeof H!="object")throw Error(c+"Argument not an object: "+H);if(T=z.toFixed(J,q),z.c){var $,BA=T.split("."),gA=+H.groupSize,iA=+H.secondaryGroupSize,wA=H.groupSeparator||"",GA=BA[0],MA=BA[1],nA=z.s<0,JA=nA?GA.slice(1):GA,UA=JA.length;if(iA&&($=gA,gA=iA,iA=$,UA-=$),gA>0&&UA>0){for($=UA%gA||gA,GA=JA.substr(0,$);$<UA;$+=gA)GA+=wA+JA.substr($,gA);iA>0&&(GA+=wA+JA.slice($)),nA&&(GA="-"+GA)}T=MA?GA+(H.decimalSeparator||"")+((iA=+H.fractionGroupSize)?MA.replace(new RegExp("\\d{"+iA+"}\\B","g"),"$&"+(H.fractionGroupSeparator||"")):MA):GA}return(H.prefix||"")+T+(H.suffix||"")},aA.toFraction=function(J){var q,H,T,z,$,BA,gA,iA,wA,GA,MA,nA,JA=this,UA=JA.c;if(J!=null&&(!(gA=new x(J)).isInteger()&&(gA.c||gA.s!==1)||gA.lt(tA)))throw Error(c+"Argument "+(gA.isInteger()?"out of range: ":"not an integer: ")+r(gA));if(!UA)return new x(JA);for(q=new x(tA),wA=H=new x(tA),T=iA=new x(tA),nA=D(UA),$=q.e=nA.length-JA.e-1,q.c[0]=M[(BA=$%F)<0?F+BA:BA],J=!J||gA.comparedTo(q)>0?$>0?q:wA:gA,BA=P,P=1/0,gA=new x(nA),iA.c[0]=0;GA=S(gA,q,0,1),(z=H.plus(GA.times(T))).comparedTo(J)!=1;)H=T,T=z,wA=iA.plus(GA.times(z=wA)),iA=z,q=gA.minus(GA.times(z=q)),gA=z;return z=S(J.minus(H),T,0,1),iA=iA.plus(z.times(wA)),H=H.plus(z.times(T)),iA.s=wA.s=JA.s,MA=S(wA,T,$*=2,EA).minus(JA).abs().comparedTo(S(iA,H,$,EA).minus(JA).abs())<1?[wA,T]:[iA,H],P=BA,MA},aA.toNumber=function(){return+r(this)},aA.toPrecision=function(J,q){return J!=null&&O(J,1,k),oA(this,J,q,2)},aA.toString=function(J){var q,H=this,T=H.s,z=H.e;return z===null?T?(q="Infinity",T<0&&(q="-"+q)):q="NaN":(J==null?q=z<=CA||z>=K?m(D(H.c),z):V(D(H.c),z,"0"):J===10&&d?q=V(D((H=n(new x(H),DA+z+1,EA)).c),H.e,"0"):(O(J,2,l.length,"Base"),q=X(V(D(H.c),z,"0"),10,J,T,!0)),T<0&&H.c[0]&&(q="-"+q)),q},aA.valueOf=aA.toJSON=function(){return r(this)},aA._isBigNumber=!0,U!=null&&x.set(U),x}(),a.default=a.BigNumber=a,(E=function(){return a}.call(Q,C,Q,o))===void 0||(o.exports=E)})()},4532:(o,Q,C)=>{var E=C(2457);o.exports=E("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")},9180:(o,Q,C)=>{var E=C(4532),h=C(574).Buffer;o.exports=function(a){function t(e){var G=e.slice(0,-4),c=e.slice(-4),p=a(G);if(!(c[0]^p[0]|c[1]^p[1]|c[2]^p[2]|c[3]^p[3]))return G}return{encode:function(e){var G=a(e);return E.encode(h.concat([e,G],e.length+4))},decode:function(e){var G=t(E.decode(e));if(!G)throw new Error("Invalid checksum");return G},decodeUnsafe:function(e){var G=E.decodeUnsafe(e);if(G)return t(G)}}}},486:(o,Q,C)=>{var E=C(3074),h=C(9180);o.exports=h(function(a){var t=E("sha256").update(a).digest();return E("sha256").update(t).digest()})},2779:(o,Q,C)=>{const E=C(8294),h=C(2315),a=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Q.Buffer=G,Q.SlowBuffer=function(n){return+n!=n&&(n=0),G.alloc(+n)},Q.INSPECT_MAX_BYTES=50;const t=2147483647;function e(n){if(n>t)throw new RangeError('The value "'+n+'" is invalid for option "size"');const r=new Uint8Array(n);return Object.setPrototypeOf(r,G.prototype),r}function G(n,r,J){if(typeof n=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Y(n)}return c(n,r,J)}function c(n,r,J){if(typeof n=="string")return function(T,z){if(typeof z=="string"&&z!==""||(z="utf8"),!G.isEncoding(z))throw new TypeError("Unknown encoding: "+z);const $=0|N(T,z);let BA=e($);const gA=BA.write(T,z);return gA!==$&&(BA=BA.slice(0,gA)),BA}(n,r);if(ArrayBuffer.isView(n))return function(T){if(d(T,Uint8Array)){const z=new Uint8Array(T);return s(z.buffer,z.byteOffset,z.byteLength)}return F(T)}(n);if(n==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof n);if(d(n,ArrayBuffer)||n&&d(n.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(d(n,SharedArrayBuffer)||n&&d(n.buffer,SharedArrayBuffer)))return s(n,r,J);if(typeof n=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const q=n.valueOf&&n.valueOf();if(q!=null&&q!==n)return G.from(q,r,J);const H=function(T){if(G.isBuffer(T)){const z=0|M(T.length),$=e(z);return $.length===0||T.copy($,0,0,z),$}return T.length!==void 0?typeof T.length!="number"||x(T.length)?e(0):F(T):T.type==="Buffer"&&Array.isArray(T.data)?F(T.data):void 0}(n);if(H)return H;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof n[Symbol.toPrimitive]=="function")return G.from(n[Symbol.toPrimitive]("string"),r,J);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof n)}function p(n){if(typeof n!="number")throw new TypeError('"size" argument must be of type number');if(n<0)throw new RangeError('The value "'+n+'" is invalid for option "size"')}function Y(n){return p(n),e(n<0?0:0|M(n))}function F(n){const r=n.length<0?0:0|M(n.length),J=e(r);for(let q=0;q<r;q+=1)J[q]=255&n[q];return J}function s(n,r,J){if(r<0||n.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(n.byteLength<r+(J||0))throw new RangeError('"length" is outside of buffer bounds');let q;return q=r===void 0&&J===void 0?new Uint8Array(n):J===void 0?new Uint8Array(n,r):new Uint8Array(n,r,J),Object.setPrototypeOf(q,G.prototype),q}function M(n){if(n>=t)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+t.toString(16)+" bytes");return 0|n}function N(n,r){if(G.isBuffer(n))return n.length;if(ArrayBuffer.isView(n)||d(n,ArrayBuffer))return n.byteLength;if(typeof n!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof n);const J=n.length,q=arguments.length>2&&arguments[2]===!0;if(!q&&J===0)return 0;let H=!1;for(;;)switch(r){case"ascii":case"latin1":case"binary":return J;case"utf8":case"utf-8":return FA(n).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*J;case"hex":return J>>>1;case"base64":return v(n).length;default:if(H)return q?-1:FA(n).length;r=(""+r).toLowerCase(),H=!0}}function k(n,r,J){let q=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((J===void 0||J>this.length)&&(J=this.length),J<=0)||(J>>>=0)<=(r>>>=0))return"";for(n||(n="utf8");;)switch(n){case"hex":return L(this,r,J);case"utf8":case"utf-8":return S(this,r,J);case"ascii":return u(this,r,J);case"latin1":case"binary":return Z(this,r,J);case"base64":return U(this,r,J);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return _(this,r,J);default:if(q)throw new TypeError("Unknown encoding: "+n);n=(n+"").toLowerCase(),q=!0}}function w(n,r,J){const q=n[r];n[r]=n[J],n[J]=q}function D(n,r,J,q,H){if(n.length===0)return-1;if(typeof J=="string"?(q=J,J=0):J>2147483647?J=2147483647:J<-2147483648&&(J=-2147483648),x(J=+J)&&(J=H?0:n.length-1),J<0&&(J=n.length+J),J>=n.length){if(H)return-1;J=n.length-1}else if(J<0){if(!H)return-1;J=0}if(typeof r=="string"&&(r=G.from(r,q)),G.isBuffer(r))return r.length===0?-1:y(n,r,J,q,H);if(typeof r=="number")return r&=255,typeof Uint8Array.prototype.indexOf=="function"?H?Uint8Array.prototype.indexOf.call(n,r,J):Uint8Array.prototype.lastIndexOf.call(n,r,J):y(n,[r],J,q,H);throw new TypeError("val must be string, number or Buffer")}function y(n,r,J,q,H){let T,z=1,$=n.length,BA=r.length;if(q!==void 0&&((q=String(q).toLowerCase())==="ucs2"||q==="ucs-2"||q==="utf16le"||q==="utf-16le")){if(n.length<2||r.length<2)return-1;z=2,$/=2,BA/=2,J/=2}function gA(iA,wA){return z===1?iA[wA]:iA.readUInt16BE(wA*z)}if(H){let iA=-1;for(T=J;T<$;T++)if(gA(n,T)===gA(r,iA===-1?0:T-iA)){if(iA===-1&&(iA=T),T-iA+1===BA)return iA*z}else iA!==-1&&(T-=T-iA),iA=-1}else for(J+BA>$&&(J=$-BA),T=J;T>=0;T--){let iA=!0;for(let wA=0;wA<BA;wA++)if(gA(n,T+wA)!==gA(r,wA)){iA=!1;break}if(iA)return T}return-1}function O(n,r,J,q){J=Number(J)||0;const H=n.length-J;q?(q=Number(q))>H&&(q=H):q=H;const T=r.length;let z;for(q>T/2&&(q=T/2),z=0;z<q;++z){const $=parseInt(r.substr(2*z,2),16);if(x($))return z;n[J+z]=$}return z}function R(n,r,J,q){return l(FA(r,n.length-J),n,J,q)}function m(n,r,J,q){return l(function(H){const T=[];for(let z=0;z<H.length;++z)T.push(255&H.charCodeAt(z));return T}(r),n,J,q)}function V(n,r,J,q){return l(v(r),n,J,q)}function j(n,r,J,q){return l(function(H,T){let z,$,BA;const gA=[];for(let iA=0;iA<H.length&&!((T-=2)<0);++iA)z=H.charCodeAt(iA),$=z>>8,BA=z%256,gA.push(BA),gA.push($);return gA}(r,n.length-J),n,J,q)}function U(n,r,J){return r===0&&J===n.length?E.fromByteArray(n):E.fromByteArray(n.slice(r,J))}function S(n,r,J){J=Math.min(n.length,J);const q=[];let H=r;for(;H<J;){const T=n[H];let z=null,$=T>239?4:T>223?3:T>191?2:1;if(H+$<=J){let BA,gA,iA,wA;switch($){case 1:T<128&&(z=T);break;case 2:BA=n[H+1],(192&BA)==128&&(wA=(31&T)<<6|63&BA,wA>127&&(z=wA));break;case 3:BA=n[H+1],gA=n[H+2],(192&BA)==128&&(192&gA)==128&&(wA=(15&T)<<12|(63&BA)<<6|63&gA,wA>2047&&(wA<55296||wA>57343)&&(z=wA));break;case 4:BA=n[H+1],gA=n[H+2],iA=n[H+3],(192&BA)==128&&(192&gA)==128&&(192&iA)==128&&(wA=(15&T)<<18|(63&BA)<<12|(63&gA)<<6|63&iA,wA>65535&&wA<1114112&&(z=wA))}}z===null?(z=65533,$=1):z>65535&&(z-=65536,q.push(z>>>10&1023|55296),z=56320|1023&z),q.push(z),H+=$}return function(T){const z=T.length;if(z<=X)return String.fromCharCode.apply(String,T);let $="",BA=0;for(;BA<z;)$+=String.fromCharCode.apply(String,T.slice(BA,BA+=X));return $}(q)}Q.kMaxLength=t,G.TYPED_ARRAY_SUPPORT=function(){try{const n=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(n,r),n.foo()===42}catch{return!1}}(),G.TYPED_ARRAY_SUPPORT||typeof console>"u"||typeof console.error!="function"||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(G.prototype,"parent",{enumerable:!0,get:function(){if(G.isBuffer(this))return this.buffer}}),Object.defineProperty(G.prototype,"offset",{enumerable:!0,get:function(){if(G.isBuffer(this))return this.byteOffset}}),G.poolSize=8192,G.from=function(n,r,J){return c(n,r,J)},Object.setPrototypeOf(G.prototype,Uint8Array.prototype),Object.setPrototypeOf(G,Uint8Array),G.alloc=function(n,r,J){return function(q,H,T){return p(q),q<=0?e(q):H!==void 0?typeof T=="string"?e(q).fill(H,T):e(q).fill(H):e(q)}(n,r,J)},G.allocUnsafe=function(n){return Y(n)},G.allocUnsafeSlow=function(n){return Y(n)},G.isBuffer=function(n){return n!=null&&n._isBuffer===!0&&n!==G.prototype},G.compare=function(n,r){if(d(n,Uint8Array)&&(n=G.from(n,n.offset,n.byteLength)),d(r,Uint8Array)&&(r=G.from(r,r.offset,r.byteLength)),!G.isBuffer(n)||!G.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(n===r)return 0;let J=n.length,q=r.length;for(let H=0,T=Math.min(J,q);H<T;++H)if(n[H]!==r[H]){J=n[H],q=r[H];break}return J<q?-1:q<J?1:0},G.isEncoding=function(n){switch(String(n).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},G.concat=function(n,r){if(!Array.isArray(n))throw new TypeError('"list" argument must be an Array of Buffers');if(n.length===0)return G.alloc(0);let J;if(r===void 0)for(r=0,J=0;J<n.length;++J)r+=n[J].length;const q=G.allocUnsafe(r);let H=0;for(J=0;J<n.length;++J){let T=n[J];if(d(T,Uint8Array))H+T.length>q.length?(G.isBuffer(T)||(T=G.from(T)),T.copy(q,H)):Uint8Array.prototype.set.call(q,T,H);else{if(!G.isBuffer(T))throw new TypeError('"list" argument must be an Array of Buffers');T.copy(q,H)}H+=T.length}return q},G.byteLength=N,G.prototype._isBuffer=!0,G.prototype.swap16=function(){const n=this.length;if(n%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let r=0;r<n;r+=2)w(this,r,r+1);return this},G.prototype.swap32=function(){const n=this.length;if(n%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let r=0;r<n;r+=4)w(this,r,r+3),w(this,r+1,r+2);return this},G.prototype.swap64=function(){const n=this.length;if(n%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let r=0;r<n;r+=8)w(this,r,r+7),w(this,r+1,r+6),w(this,r+2,r+5),w(this,r+3,r+4);return this},G.prototype.toString=function(){const n=this.length;return n===0?"":arguments.length===0?S(this,0,n):k.apply(this,arguments)},G.prototype.toLocaleString=G.prototype.toString,G.prototype.equals=function(n){if(!G.isBuffer(n))throw new TypeError("Argument must be a Buffer");return this===n||G.compare(this,n)===0},G.prototype.inspect=function(){let n="";const r=Q.INSPECT_MAX_BYTES;return n=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(n+=" ... "),"<Buffer "+n+">"},a&&(G.prototype[a]=G.prototype.inspect),G.prototype.compare=function(n,r,J,q,H){if(d(n,Uint8Array)&&(n=G.from(n,n.offset,n.byteLength)),!G.isBuffer(n))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof n);if(r===void 0&&(r=0),J===void 0&&(J=n?n.length:0),q===void 0&&(q=0),H===void 0&&(H=this.length),r<0||J>n.length||q<0||H>this.length)throw new RangeError("out of range index");if(q>=H&&r>=J)return 0;if(q>=H)return-1;if(r>=J)return 1;if(this===n)return 0;let T=(H>>>=0)-(q>>>=0),z=(J>>>=0)-(r>>>=0);const $=Math.min(T,z),BA=this.slice(q,H),gA=n.slice(r,J);for(let iA=0;iA<$;++iA)if(BA[iA]!==gA[iA]){T=BA[iA],z=gA[iA];break}return T<z?-1:z<T?1:0},G.prototype.includes=function(n,r,J){return this.indexOf(n,r,J)!==-1},G.prototype.indexOf=function(n,r,J){return D(this,n,r,J,!0)},G.prototype.lastIndexOf=function(n,r,J){return D(this,n,r,J,!1)},G.prototype.write=function(n,r,J,q){if(r===void 0)q="utf8",J=this.length,r=0;else if(J===void 0&&typeof r=="string")q=r,J=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r>>>=0,isFinite(J)?(J>>>=0,q===void 0&&(q="utf8")):(q=J,J=void 0)}const H=this.length-r;if((J===void 0||J>H)&&(J=H),n.length>0&&(J<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");q||(q="utf8");let T=!1;for(;;)switch(q){case"hex":return O(this,n,r,J);case"utf8":case"utf-8":return R(this,n,r,J);case"ascii":case"latin1":case"binary":return m(this,n,r,J);case"base64":return V(this,n,r,J);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return j(this,n,r,J);default:if(T)throw new TypeError("Unknown encoding: "+q);q=(""+q).toLowerCase(),T=!0}},G.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const X=4096;function u(n,r,J){let q="";J=Math.min(n.length,J);for(let H=r;H<J;++H)q+=String.fromCharCode(127&n[H]);return q}function Z(n,r,J){let q="";J=Math.min(n.length,J);for(let H=r;H<J;++H)q+=String.fromCharCode(n[H]);return q}function L(n,r,J){const q=n.length;(!r||r<0)&&(r=0),(!J||J<0||J>q)&&(J=q);let H="";for(let T=r;T<J;++T)H+=oA[n[T]];return H}function _(n,r,J){const q=n.slice(r,J);let H="";for(let T=0;T<q.length-1;T+=2)H+=String.fromCharCode(q[T]+256*q[T+1]);return H}function f(n,r,J){if(n%1!=0||n<0)throw new RangeError("offset is not uint");if(n+r>J)throw new RangeError("Trying to access beyond buffer length")}function W(n,r,J,q,H,T){if(!G.isBuffer(n))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>H||r<T)throw new RangeError('"value" argument is out of bounds');if(J+q>n.length)throw new RangeError("Index out of range")}function QA(n,r,J,q,H){b(r,q,H,n,J,7);let T=Number(r&BigInt(4294967295));n[J++]=T,T>>=8,n[J++]=T,T>>=8,n[J++]=T,T>>=8,n[J++]=T;let z=Number(r>>BigInt(32)&BigInt(4294967295));return n[J++]=z,z>>=8,n[J++]=z,z>>=8,n[J++]=z,z>>=8,n[J++]=z,J}function cA(n,r,J,q,H){b(r,q,H,n,J,7);let T=Number(r&BigInt(4294967295));n[J+7]=T,T>>=8,n[J+6]=T,T>>=8,n[J+5]=T,T>>=8,n[J+4]=T;let z=Number(r>>BigInt(32)&BigInt(4294967295));return n[J+3]=z,z>>=8,n[J+2]=z,z>>=8,n[J+1]=z,z>>=8,n[J]=z,J+8}function aA(n,r,J,q,H,T){if(J+q>n.length)throw new RangeError("Index out of range");if(J<0)throw new RangeError("Index out of range")}function tA(n,r,J,q,H){return r=+r,J>>>=0,H||aA(n,0,J,4),h.write(n,r,J,q,23,4),J+4}function DA(n,r,J,q,H){return r=+r,J>>>=0,H||aA(n,0,J,8),h.write(n,r,J,q,52,8),J+8}G.prototype.slice=function(n,r){const J=this.length;(n=~~n)<0?(n+=J)<0&&(n=0):n>J&&(n=J),(r=r===void 0?J:~~r)<0?(r+=J)<0&&(r=0):r>J&&(r=J),r<n&&(r=n);const q=this.subarray(n,r);return Object.setPrototypeOf(q,G.prototype),q},G.prototype.readUintLE=G.prototype.readUIntLE=function(n,r,J){n>>>=0,r>>>=0,J||f(n,r,this.length);let q=this[n],H=1,T=0;for(;++T<r&&(H*=256);)q+=this[n+T]*H;return q},G.prototype.readUintBE=G.prototype.readUIntBE=function(n,r,J){n>>>=0,r>>>=0,J||f(n,r,this.length);let q=this[n+--r],H=1;for(;r>0&&(H*=256);)q+=this[n+--r]*H;return q},G.prototype.readUint8=G.prototype.readUInt8=function(n,r){return n>>>=0,r||f(n,1,this.length),this[n]},G.prototype.readUint16LE=G.prototype.readUInt16LE=function(n,r){return n>>>=0,r||f(n,2,this.length),this[n]|this[n+1]<<8},G.prototype.readUint16BE=G.prototype.readUInt16BE=function(n,r){return n>>>=0,r||f(n,2,this.length),this[n]<<8|this[n+1]},G.prototype.readUint32LE=G.prototype.readUInt32LE=function(n,r){return n>>>=0,r||f(n,4,this.length),(this[n]|this[n+1]<<8|this[n+2]<<16)+16777216*this[n+3]},G.prototype.readUint32BE=G.prototype.readUInt32BE=function(n,r){return n>>>=0,r||f(n,4,this.length),16777216*this[n]+(this[n+1]<<16|this[n+2]<<8|this[n+3])},G.prototype.readBigUInt64LE=hA(function(n){P(n>>>=0,"offset");const r=this[n],J=this[n+7];r!==void 0&&J!==void 0||kA(n,this.length-8);const q=r+256*this[++n]+65536*this[++n]+this[++n]*2**24,H=this[++n]+256*this[++n]+65536*this[++n]+J*2**24;return BigInt(q)+(BigInt(H)<<BigInt(32))}),G.prototype.readBigUInt64BE=hA(function(n){P(n>>>=0,"offset");const r=this[n],J=this[n+7];r!==void 0&&J!==void 0||kA(n,this.length-8);const q=r*2**24+65536*this[++n]+256*this[++n]+this[++n],H=this[++n]*2**24+65536*this[++n]+256*this[++n]+J;return(BigInt(q)<<BigInt(32))+BigInt(H)}),G.prototype.readIntLE=function(n,r,J){n>>>=0,r>>>=0,J||f(n,r,this.length);let q=this[n],H=1,T=0;for(;++T<r&&(H*=256);)q+=this[n+T]*H;return H*=128,q>=H&&(q-=Math.pow(2,8*r)),q},G.prototype.readIntBE=function(n,r,J){n>>>=0,r>>>=0,J||f(n,r,this.length);let q=r,H=1,T=this[n+--q];for(;q>0&&(H*=256);)T+=this[n+--q]*H;return H*=128,T>=H&&(T-=Math.pow(2,8*r)),T},G.prototype.readInt8=function(n,r){return n>>>=0,r||f(n,1,this.length),128&this[n]?-1*(255-this[n]+1):this[n]},G.prototype.readInt16LE=function(n,r){n>>>=0,r||f(n,2,this.length);const J=this[n]|this[n+1]<<8;return 32768&J?4294901760|J:J},G.prototype.readInt16BE=function(n,r){n>>>=0,r||f(n,2,this.length);const J=this[n+1]|this[n]<<8;return 32768&J?4294901760|J:J},G.prototype.readInt32LE=function(n,r){return n>>>=0,r||f(n,4,this.length),this[n]|this[n+1]<<8|this[n+2]<<16|this[n+3]<<24},G.prototype.readInt32BE=function(n,r){return n>>>=0,r||f(n,4,this.length),this[n]<<24|this[n+1]<<16|this[n+2]<<8|this[n+3]},G.prototype.readBigInt64LE=hA(function(n){P(n>>>=0,"offset");const r=this[n],J=this[n+7];r!==void 0&&J!==void 0||kA(n,this.length-8);const q=this[n+4]+256*this[n+5]+65536*this[n+6]+(J<<24);return(BigInt(q)<<BigInt(32))+BigInt(r+256*this[++n]+65536*this[++n]+this[++n]*16777216)}),G.prototype.readBigInt64BE=hA(function(n){P(n>>>=0,"offset");const r=this[n],J=this[n+7];r!==void 0&&J!==void 0||kA(n,this.length-8);const q=(r<<24)+65536*this[++n]+256*this[++n]+this[++n];return(BigInt(q)<<BigInt(32))+BigInt(this[++n]*16777216+65536*this[++n]+256*this[++n]+J)}),G.prototype.readFloatLE=function(n,r){return n>>>=0,r||f(n,4,this.length),h.read(this,n,!0,23,4)},G.prototype.readFloatBE=function(n,r){return n>>>=0,r||f(n,4,this.length),h.read(this,n,!1,23,4)},G.prototype.readDoubleLE=function(n,r){return n>>>=0,r||f(n,8,this.length),h.read(this,n,!0,52,8)},G.prototype.readDoubleBE=function(n,r){return n>>>=0,r||f(n,8,this.length),h.read(this,n,!1,52,8)},G.prototype.writeUintLE=G.prototype.writeUIntLE=function(n,r,J,q){n=+n,r>>>=0,J>>>=0,q||W(this,n,r,J,Math.pow(2,8*J)-1,0);let H=1,T=0;for(this[r]=255&n;++T<J&&(H*=256);)this[r+T]=n/H&255;return r+J},G.prototype.writeUintBE=G.prototype.writeUIntBE=function(n,r,J,q){n=+n,r>>>=0,J>>>=0,q||W(this,n,r,J,Math.pow(2,8*J)-1,0);let H=J-1,T=1;for(this[r+H]=255&n;--H>=0&&(T*=256);)this[r+H]=n/T&255;return r+J},G.prototype.writeUint8=G.prototype.writeUInt8=function(n,r,J){return n=+n,r>>>=0,J||W(this,n,r,1,255,0),this[r]=255&n,r+1},G.prototype.writeUint16LE=G.prototype.writeUInt16LE=function(n,r,J){return n=+n,r>>>=0,J||W(this,n,r,2,65535,0),this[r]=255&n,this[r+1]=n>>>8,r+2},G.prototype.writeUint16BE=G.prototype.writeUInt16BE=function(n,r,J){return n=+n,r>>>=0,J||W(this,n,r,2,65535,0),this[r]=n>>>8,this[r+1]=255&n,r+2},G.prototype.writeUint32LE=G.prototype.writeUInt32LE=function(n,r,J){return n=+n,r>>>=0,J||W(this,n,r,4,4294967295,0),this[r+3]=n>>>24,this[r+2]=n>>>16,this[r+1]=n>>>8,this[r]=255&n,r+4},G.prototype.writeUint32BE=G.prototype.writeUInt32BE=function(n,r,J){return n=+n,r>>>=0,J||W(this,n,r,4,4294967295,0),this[r]=n>>>24,this[r+1]=n>>>16,this[r+2]=n>>>8,this[r+3]=255&n,r+4},G.prototype.writeBigUInt64LE=hA(function(n,r=0){return QA(this,n,r,BigInt(0),BigInt("0xffffffffffffffff"))}),G.prototype.writeBigUInt64BE=hA(function(n,r=0){return cA(this,n,r,BigInt(0),BigInt("0xffffffffffffffff"))}),G.prototype.writeIntLE=function(n,r,J,q){if(n=+n,r>>>=0,!q){const $=Math.pow(2,8*J-1);W(this,n,r,J,$-1,-$)}let H=0,T=1,z=0;for(this[r]=255&n;++H<J&&(T*=256);)n<0&&z===0&&this[r+H-1]!==0&&(z=1),this[r+H]=(n/T>>0)-z&255;return r+J},G.prototype.writeIntBE=function(n,r,J,q){if(n=+n,r>>>=0,!q){const $=Math.pow(2,8*J-1);W(this,n,r,J,$-1,-$)}let H=J-1,T=1,z=0;for(this[r+H]=255&n;--H>=0&&(T*=256);)n<0&&z===0&&this[r+H+1]!==0&&(z=1),this[r+H]=(n/T>>0)-z&255;return r+J},G.prototype.writeInt8=function(n,r,J){return n=+n,r>>>=0,J||W(this,n,r,1,127,-128),n<0&&(n=255+n+1),this[r]=255&n,r+1},G.prototype.writeInt16LE=function(n,r,J){return n=+n,r>>>=0,J||W(this,n,r,2,32767,-32768),this[r]=255&n,this[r+1]=n>>>8,r+2},G.prototype.writeInt16BE=function(n,r,J){return n=+n,r>>>=0,J||W(this,n,r,2,32767,-32768),this[r]=n>>>8,this[r+1]=255&n,r+2},G.prototype.writeInt32LE=function(n,r,J){return n=+n,r>>>=0,J||W(this,n,r,4,2147483647,-2147483648),this[r]=255&n,this[r+1]=n>>>8,this[r+2]=n>>>16,this[r+3]=n>>>24,r+4},G.prototype.writeInt32BE=function(n,r,J){return n=+n,r>>>=0,J||W(this,n,r,4,2147483647,-2147483648),n<0&&(n=4294967295+n+1),this[r]=n>>>24,this[r+1]=n>>>16,this[r+2]=n>>>8,this[r+3]=255&n,r+4},G.prototype.writeBigInt64LE=hA(function(n,r=0){return QA(this,n,r,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),G.prototype.writeBigInt64BE=hA(function(n,r=0){return cA(this,n,r,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),G.prototype.writeFloatLE=function(n,r,J){return tA(this,n,r,!0,J)},G.prototype.writeFloatBE=function(n,r,J){return tA(this,n,r,!1,J)},G.prototype.writeDoubleLE=function(n,r,J){return DA(this,n,r,!0,J)},G.prototype.writeDoubleBE=function(n,r,J){return DA(this,n,r,!1,J)},G.prototype.copy=function(n,r,J,q){if(!G.isBuffer(n))throw new TypeError("argument should be a Buffer");if(J||(J=0),q||q===0||(q=this.length),r>=n.length&&(r=n.length),r||(r=0),q>0&&q<J&&(q=J),q===J||n.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(J<0||J>=this.length)throw new RangeError("Index out of range");if(q<0)throw new RangeError("sourceEnd out of bounds");q>this.length&&(q=this.length),n.length-r<q-J&&(q=n.length-r+J);const H=q-J;return this===n&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,J,q):Uint8Array.prototype.set.call(n,this.subarray(J,q),r),H},G.prototype.fill=function(n,r,J,q){if(typeof n=="string"){if(typeof r=="string"?(q=r,r=0,J=this.length):typeof J=="string"&&(q=J,J=this.length),q!==void 0&&typeof q!="string")throw new TypeError("encoding must be a string");if(typeof q=="string"&&!G.isEncoding(q))throw new TypeError("Unknown encoding: "+q);if(n.length===1){const T=n.charCodeAt(0);(q==="utf8"&&T<128||q==="latin1")&&(n=T)}}else typeof n=="number"?n&=255:typeof n=="boolean"&&(n=Number(n));if(r<0||this.length<r||this.length<J)throw new RangeError("Out of range index");if(J<=r)return this;let H;if(r>>>=0,J=J===void 0?this.length:J>>>0,n||(n=0),typeof n=="number")for(H=r;H<J;++H)this[H]=n;else{const T=G.isBuffer(n)?n:G.from(n,q),z=T.length;if(z===0)throw new TypeError('The value "'+n+'" is invalid for argument "value"');for(H=0;H<J-r;++H)this[H+r]=T[H%z]}return this};const EA={};function CA(n,r,J){EA[n]=class extends J{constructor(){super(),Object.defineProperty(this,"message",{value:r.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${n}]`,this.stack,delete this.name}get code(){return n}set code(q){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:q,writable:!0})}toString(){return`${this.name} [${n}]: ${this.message}`}}}function K(n){let r="",J=n.length;const q=n[0]==="-"?1:0;for(;J>=q+4;J-=3)r=`_${n.slice(J-3,J)}${r}`;return`${n.slice(0,J)}${r}`}function b(n,r,J,q,H,T){if(n>J||n<r){const z=typeof r=="bigint"?"n":"";let $;throw $=T>3?r===0||r===BigInt(0)?`>= 0${z} and < 2${z} ** ${8*(T+1)}${z}`:`>= -(2${z} ** ${8*(T+1)-1}${z}) and < 2 ** ${8*(T+1)-1}${z}`:`>= ${r}${z} and <= ${J}${z}`,new EA.ERR_OUT_OF_RANGE("value",$,n)}(function(z,$,BA){P($,"offset"),z[$]!==void 0&&z[$+BA]!==void 0||kA($,z.length-(BA+1))})(q,H,T)}function P(n,r){if(typeof n!="number")throw new EA.ERR_INVALID_ARG_TYPE(r,"number",n)}function kA(n,r,J){throw Math.floor(n)!==n?(P(n,J),new EA.ERR_OUT_OF_RANGE(J||"offset","an integer",n)):r<0?new EA.ERR_BUFFER_OUT_OF_BOUNDS:new EA.ERR_OUT_OF_RANGE(J||"offset",`>= ${J?1:0} and <= ${r}`,n)}CA("ERR_BUFFER_OUT_OF_BOUNDS",function(n){return n?`${n} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),CA("ERR_INVALID_ARG_TYPE",function(n,r){return`The "${n}" argument must be of type number. Received type ${typeof r}`},TypeError),CA("ERR_OUT_OF_RANGE",function(n,r,J){let q=`The value of "${n}" is out of range.`,H=J;return Number.isInteger(J)&&Math.abs(J)>4294967296?H=K(String(J)):typeof J=="bigint"&&(H=String(J),(J>BigInt(2)**BigInt(32)||J<-(BigInt(2)**BigInt(32)))&&(H=K(H)),H+="n"),q+=` It must be ${r}. Received ${H}`,q},RangeError);const eA=/[^+/0-9A-Za-z-_]/g;function FA(n,r){let J;r=r||1/0;const q=n.length;let H=null;const T=[];for(let z=0;z<q;++z){if(J=n.charCodeAt(z),J>55295&&J<57344){if(!H){if(J>56319){(r-=3)>-1&&T.push(239,191,189);continue}if(z+1===q){(r-=3)>-1&&T.push(239,191,189);continue}H=J;continue}if(J<56320){(r-=3)>-1&&T.push(239,191,189),H=J;continue}J=65536+(H-55296<<10|J-56320)}else H&&(r-=3)>-1&&T.push(239,191,189);if(H=null,J<128){if((r-=1)<0)break;T.push(J)}else if(J<2048){if((r-=2)<0)break;T.push(J>>6|192,63&J|128)}else if(J<65536){if((r-=3)<0)break;T.push(J>>12|224,J>>6&63|128,63&J|128)}else{if(!(J<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;T.push(J>>18|240,J>>12&63|128,J>>6&63|128,63&J|128)}}return T}function v(n){return E.toByteArray(function(r){if((r=(r=r.split("=")[0]).trim().replace(eA,"")).length<2)return"";for(;r.length%4!=0;)r+="=";return r}(n))}function l(n,r,J,q){let H;for(H=0;H<q&&!(H+J>=r.length||H>=n.length);++H)r[H+J]=n[H];return H}function d(n,r){return n instanceof r||n!=null&&n.constructor!=null&&n.constructor.name!=null&&n.constructor.name===r.name}function x(n){return n!=n}const oA=function(){const n="0123456789abcdef",r=new Array(256);for(let J=0;J<16;++J){const q=16*J;for(let H=0;H<16;++H)r[q+H]=n[J]+n[H]}return r}();function hA(n){return typeof BigInt>"u"?AA:n}function AA(){throw new Error("BigInt not supported")}},6598:(o,Q,C)=>{var E=C(574).Buffer,h=C(8348).Transform,a=C(5054).s;function t(e){h.call(this),this.hashMode=typeof e=="string",this.hashMode?this[e]=this._finalOrDigest:this.final=this._finalOrDigest,this._final&&(this.__final=this._final,this._final=null),this._decoder=null,this._encoding=null}C(1531)(t,h),t.prototype.update=function(e,G,c){typeof e=="string"&&(e=E.from(e,G));var p=this._update(e);return this.hashMode?this:(c&&(p=this._toString(p,c)),p)},t.prototype.setAutoPadding=function(){},t.prototype.getAuthTag=function(){throw new Error("trying to get auth tag in unsupported state")},t.prototype.setAuthTag=function(){throw new Error("trying to set auth tag in unsupported state")},t.prototype.setAAD=function(){throw new Error("trying to set aad in unsupported state")},t.prototype._transform=function(e,G,c){var p;try{this.hashMode?this._update(e):this.push(this._update(e))}catch(Y){p=Y}finally{c(p)}},t.prototype._flush=function(e){var G;try{this.push(this.__final())}catch(c){G=c}e(G)},t.prototype._finalOrDigest=function(e){var G=this.__final()||E.alloc(0);return e&&(G=this._toString(G,e,!0)),G},t.prototype._toString=function(e,G,c){if(this._decoder||(this._decoder=new a(G),this._encoding=G),this._encoding!==G)throw new Error("can't switch encodings");var p=this._decoder.write(e);return c&&(p+=this._decoder.end()),p},o.exports=t},3074:(o,Q,C)=>{var E=C(1531),h=C(5885),a=C(8357),t=C(8808),e=C(6598);function G(c){e.call(this,"digest"),this._hash=c}E(G,e),G.prototype._update=function(c){this._hash.update(c)},G.prototype._final=function(){return this._hash.digest()},o.exports=function(c){return(c=c.toLowerCase())==="md5"?new h:c==="rmd160"||c==="ripemd160"?new a:new G(t(c))}},5037:(o,Q)=>{var C=typeof self<"u"?self:void 0,E=function(){function a(){this.fetch=!1,this.DOMException=C.DOMException}return a.prototype=C,new a}();(function(a){(function(t){var e="URLSearchParams"in a,G="Symbol"in a&&"iterator"in Symbol,c="FileReader"in a&&"Blob"in a&&function(){try{return new Blob,!0}catch{return!1}}(),p="FormData"in a,Y="ArrayBuffer"in a;if(Y)var F=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],s=ArrayBuffer.isView||function(Z){return Z&&F.indexOf(Object.prototype.toString.call(Z))>-1};function M(Z){if(typeof Z!="string"&&(Z=String(Z)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(Z))throw new TypeError("Invalid character in header field name");return Z.toLowerCase()}function N(Z){return typeof Z!="string"&&(Z=String(Z)),Z}function k(Z){var L={next:function(){var _=Z.shift();return{done:_===void 0,value:_}}};return G&&(L[Symbol.iterator]=function(){return L}),L}function w(Z){this.map={},Z instanceof w?Z.forEach(function(L,_){this.append(_,L)},this):Array.isArray(Z)?Z.forEach(function(L){this.append(L[0],L[1])},this):Z&&Object.getOwnPropertyNames(Z).forEach(function(L){this.append(L,Z[L])},this)}function D(Z){if(Z.bodyUsed)return Promise.reject(new TypeError("Already read"));Z.bodyUsed=!0}function y(Z){return new Promise(function(L,_){Z.onload=function(){L(Z.result)},Z.onerror=function(){_(Z.error)}})}function O(Z){var L=new FileReader,_=y(L);return L.readAsArrayBuffer(Z),_}function R(Z){if(Z.slice)return Z.slice(0);var L=new Uint8Array(Z.byteLength);return L.set(new Uint8Array(Z)),L.buffer}function m(){return this.bodyUsed=!1,this._initBody=function(Z){var L;this._bodyInit=Z,Z?typeof Z=="string"?this._bodyText=Z:c&&Blob.prototype.isPrototypeOf(Z)?this._bodyBlob=Z:p&&FormData.prototype.isPrototypeOf(Z)?this._bodyFormData=Z:e&&URLSearchParams.prototype.isPrototypeOf(Z)?this._bodyText=Z.toString():Y&&c&&(L=Z)&&DataView.prototype.isPrototypeOf(L)?(this._bodyArrayBuffer=R(Z.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):Y&&(ArrayBuffer.prototype.isPrototypeOf(Z)||s(Z))?this._bodyArrayBuffer=R(Z):this._bodyText=Z=Object.prototype.toString.call(Z):this._bodyText="",this.headers.get("content-type")||(typeof Z=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e&&URLSearchParams.prototype.isPrototypeOf(Z)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},c&&(this.blob=function(){var Z=D(this);if(Z)return Z;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?D(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(O)}),this.text=function(){var Z,L,_,f=D(this);if(f)return f;if(this._bodyBlob)return Z=this._bodyBlob,_=y(L=new FileReader),L.readAsText(Z),_;if(this._bodyArrayBuffer)return Promise.resolve(function(W){for(var QA=new Uint8Array(W),cA=new Array(QA.length),aA=0;aA<QA.length;aA++)cA[aA]=String.fromCharCode(QA[aA]);return cA.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},p&&(this.formData=function(){return this.text().then(U)}),this.json=function(){return this.text().then(JSON.parse)},this}w.prototype.append=function(Z,L){Z=M(Z),L=N(L);var _=this.map[Z];this.map[Z]=_?_+", "+L:L},w.prototype.delete=function(Z){delete this.map[M(Z)]},w.prototype.get=function(Z){return Z=M(Z),this.has(Z)?this.map[Z]:null},w.prototype.has=function(Z){return this.map.hasOwnProperty(M(Z))},w.prototype.set=function(Z,L){this.map[M(Z)]=N(L)},w.prototype.forEach=function(Z,L){for(var _ in this.map)this.map.hasOwnProperty(_)&&Z.call(L,this.map[_],_,this)},w.prototype.keys=function(){var Z=[];return this.forEach(function(L,_){Z.push(_)}),k(Z)},w.prototype.values=function(){var Z=[];return this.forEach(function(L){Z.push(L)}),k(Z)},w.prototype.entries=function(){var Z=[];return this.forEach(function(L,_){Z.push([_,L])}),k(Z)},G&&(w.prototype[Symbol.iterator]=w.prototype.entries);var V=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function j(Z,L){var _,f,W=(L=L||{}).body;if(Z instanceof j){if(Z.bodyUsed)throw new TypeError("Already read");this.url=Z.url,this.credentials=Z.credentials,L.headers||(this.headers=new w(Z.headers)),this.method=Z.method,this.mode=Z.mode,this.signal=Z.signal,W||Z._bodyInit==null||(W=Z._bodyInit,Z.bodyUsed=!0)}else this.url=String(Z);if(this.credentials=L.credentials||this.credentials||"same-origin",!L.headers&&this.headers||(this.headers=new w(L.headers)),this.method=(f=(_=L.method||this.method||"GET").toUpperCase(),V.indexOf(f)>-1?f:_),this.mode=L.mode||this.mode||null,this.signal=L.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&W)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(W)}function U(Z){var L=new FormData;return Z.trim().split("&").forEach(function(_){if(_){var f=_.split("="),W=f.shift().replace(/\+/g," "),QA=f.join("=").replace(/\+/g," ");L.append(decodeURIComponent(W),decodeURIComponent(QA))}}),L}function S(Z,L){L||(L={}),this.type="default",this.status=L.status===void 0?200:L.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in L?L.statusText:"OK",this.headers=new w(L.headers),this.url=L.url||"",this._initBody(Z)}j.prototype.clone=function(){return new j(this,{body:this._bodyInit})},m.call(j.prototype),m.call(S.prototype),S.prototype.clone=function(){return new S(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new w(this.headers),url:this.url})},S.error=function(){var Z=new S(null,{status:0,statusText:""});return Z.type="error",Z};var X=[301,302,303,307,308];S.redirect=function(Z,L){if(X.indexOf(L)===-1)throw new RangeError("Invalid status code");return new S(null,{status:L,headers:{location:Z}})},t.DOMException=a.DOMException;try{new t.DOMException}catch{t.DOMException=function(L,_){this.message=L,this.name=_;var f=Error(L);this.stack=f.stack},t.DOMException.prototype=Object.create(Error.prototype),t.DOMException.prototype.constructor=t.DOMException}function u(Z,L){return new Promise(function(_,f){var W=new j(Z,L);if(W.signal&&W.signal.aborted)return f(new t.DOMException("Aborted","AbortError"));var QA=new XMLHttpRequest;function cA(){QA.abort()}QA.onload=function(){var aA,tA,DA={status:QA.status,statusText:QA.statusText,headers:(aA=QA.getAllResponseHeaders()||"",tA=new w,aA.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(CA){var K=CA.split(":"),b=K.shift().trim();if(b){var P=K.join(":").trim();tA.append(b,P)}}),tA)};DA.url="responseURL"in QA?QA.responseURL:DA.headers.get("X-Request-URL");var EA="response"in QA?QA.response:QA.responseText;_(new S(EA,DA))},QA.onerror=function(){f(new TypeError("Network request failed"))},QA.ontimeout=function(){f(new TypeError("Network request failed"))},QA.onabort=function(){f(new t.DOMException("Aborted","AbortError"))},QA.open(W.method,W.url,!0),W.credentials==="include"?QA.withCredentials=!0:W.credentials==="omit"&&(QA.withCredentials=!1),"responseType"in QA&&c&&(QA.responseType="blob"),W.headers.forEach(function(aA,tA){QA.setRequestHeader(tA,aA)}),W.signal&&(W.signal.addEventListener("abort",cA),QA.onreadystatechange=function(){QA.readyState===4&&W.signal.removeEventListener("abort",cA)}),QA.send(W._bodyInit===void 0?null:W._bodyInit)})}u.polyfill=!0,a.fetch||(a.fetch=u,a.Headers=w,a.Request=j,a.Response=S),t.Headers=w,t.Request=j,t.Response=S,t.fetch=u,Object.defineProperty(t,"__esModule",{value:!0})})({})})(E),E.fetch.ponyfill=!0,delete E.fetch.polyfill;var h=E;(Q=h.fetch).default=h.fetch,Q.fetch=h.fetch,Q.Headers=h.Headers,Q.Request=h.Request,Q.Response=h.Response,o.exports=Q},9970:o=>{var Q,C=typeof Reflect=="object"?Reflect:null,E=C&&typeof C.apply=="function"?C.apply:function(k,w,D){return Function.prototype.apply.call(k,w,D)};Q=C&&typeof C.ownKeys=="function"?C.ownKeys:Object.getOwnPropertySymbols?function(k){return Object.getOwnPropertyNames(k).concat(Object.getOwnPropertySymbols(k))}:function(k){return Object.getOwnPropertyNames(k)};var h=Number.isNaN||function(k){return k!=k};function a(){a.init.call(this)}o.exports=a,o.exports.once=function(k,w){return new Promise(function(D,y){function O(m){k.removeListener(w,R),y(m)}function R(){typeof k.removeListener=="function"&&k.removeListener("error",O),D([].slice.call(arguments))}N(k,w,R,{once:!0}),w!=="error"&&function(m,V,j){typeof m.on=="function"&&N(m,"error",V,{once:!0})}(k,O)})},a.EventEmitter=a,a.prototype._events=void 0,a.prototype._eventsCount=0,a.prototype._maxListeners=void 0;var t=10;function e(k){if(typeof k!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof k)}function G(k){return k._maxListeners===void 0?a.defaultMaxListeners:k._maxListeners}function c(k,w,D,y){var O,R,m,V;if(e(D),(R=k._events)===void 0?(R=k._events=Object.create(null),k._eventsCount=0):(R.newListener!==void 0&&(k.emit("newListener",w,D.listener?D.listener:D),R=k._events),m=R[w]),m===void 0)m=R[w]=D,++k._eventsCount;else if(typeof m=="function"?m=R[w]=y?[D,m]:[m,D]:y?m.unshift(D):m.push(D),(O=G(k))>0&&m.length>O&&!m.warned){m.warned=!0;var j=new Error("Possible EventEmitter memory leak detected. "+m.length+" "+String(w)+" listeners added. Use emitter.setMaxListeners() to increase limit");j.name="MaxListenersExceededWarning",j.emitter=k,j.type=w,j.count=m.length,V=j,console&&console.warn&&console.warn(V)}return k}function p(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function Y(k,w,D){var y={fired:!1,wrapFn:void 0,target:k,type:w,listener:D},O=p.bind(y);return O.listener=D,y.wrapFn=O,O}function F(k,w,D){var y=k._events;if(y===void 0)return[];var O=y[w];return O===void 0?[]:typeof O=="function"?D?[O.listener||O]:[O]:D?function(R){for(var m=new Array(R.length),V=0;V<m.length;++V)m[V]=R[V].listener||R[V];return m}(O):M(O,O.length)}function s(k){var w=this._events;if(w!==void 0){var D=w[k];if(typeof D=="function")return 1;if(D!==void 0)return D.length}return 0}function M(k,w){for(var D=new Array(w),y=0;y<w;++y)D[y]=k[y];return D}function N(k,w,D,y){if(typeof k.on=="function")y.once?k.once(w,D):k.on(w,D);else{if(typeof k.addEventListener!="function")throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof k);k.addEventListener(w,function O(R){y.once&&k.removeEventListener(w,O),D(R)})}}Object.defineProperty(a,"defaultMaxListeners",{enumerable:!0,get:function(){return t},set:function(k){if(typeof k!="number"||k<0||h(k))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+k+".");t=k}}),a.init=function(){this._events!==void 0&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},a.prototype.setMaxListeners=function(k){if(typeof k!="number"||k<0||h(k))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+k+".");return this._maxListeners=k,this},a.prototype.getMaxListeners=function(){return G(this)},a.prototype.emit=function(k){for(var w=[],D=1;D<arguments.length;D++)w.push(arguments[D]);var y=k==="error",O=this._events;if(O!==void 0)y=y&&O.error===void 0;else if(!y)return!1;if(y){var R;if(w.length>0&&(R=w[0]),R instanceof Error)throw R;var m=new Error("Unhandled error."+(R?" ("+R.message+")":""));throw m.context=R,m}var V=O[k];if(V===void 0)return!1;if(typeof V=="function")E(V,this,w);else{var j=V.length,U=M(V,j);for(D=0;D<j;++D)E(U[D],this,w)}return!0},a.prototype.addListener=function(k,w){return c(this,k,w,!1)},a.prototype.on=a.prototype.addListener,a.prototype.prependListener=function(k,w){return c(this,k,w,!0)},a.prototype.once=function(k,w){return e(w),this.on(k,Y(this,k,w)),this},a.prototype.prependOnceListener=function(k,w){return e(w),this.prependListener(k,Y(this,k,w)),this},a.prototype.removeListener=function(k,w){var D,y,O,R,m;if(e(w),(y=this._events)===void 0)return this;if((D=y[k])===void 0)return this;if(D===w||D.listener===w)--this._eventsCount==0?this._events=Object.create(null):(delete y[k],y.removeListener&&this.emit("removeListener",k,D.listener||w));else if(typeof D!="function"){for(O=-1,R=D.length-1;R>=0;R--)if(D[R]===w||D[R].listener===w){m=D[R].listener,O=R;break}if(O<0)return this;O===0?D.shift():function(V,j){for(;j+1<V.length;j++)V[j]=V[j+1];V.pop()}(D,O),D.length===1&&(y[k]=D[0]),y.removeListener!==void 0&&this.emit("removeListener",k,m||w)}return this},a.prototype.off=a.prototype.removeListener,a.prototype.removeAllListeners=function(k){var w,D,y;if((D=this._events)===void 0)return this;if(D.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):D[k]!==void 0&&(--this._eventsCount==0?this._events=Object.create(null):delete D[k]),this;if(arguments.length===0){var O,R=Object.keys(D);for(y=0;y<R.length;++y)(O=R[y])!=="removeListener"&&this.removeAllListeners(O);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(typeof(w=D[k])=="function")this.removeListener(k,w);else if(w!==void 0)for(y=w.length-1;y>=0;y--)this.removeListener(k,w[y]);return this},a.prototype.listeners=function(k){return F(this,k,!0)},a.prototype.rawListeners=function(k){return F(this,k,!1)},a.listenerCount=function(k,w){return typeof k.listenerCount=="function"?k.listenerCount(w):s.call(k,w)},a.prototype.listenerCount=s,a.prototype.eventNames=function(){return this._eventsCount>0?Q(this._events):[]}},55:(o,Q,C)=>{var E=C(574).Buffer,h=C(5162).Transform;function a(t){h.call(this),this._block=E.allocUnsafe(t),this._blockSize=t,this._blockOffset=0,this._length=[0,0,0,0],this._finalized=!1}C(1531)(a,h),a.prototype._transform=function(t,e,G){var c=null;try{this.update(t,e)}catch(p){c=p}G(c)},a.prototype._flush=function(t){var e=null;try{this.push(this.digest())}catch(G){e=G}t(e)},a.prototype.update=function(t,e){if(function(s,M){if(!E.isBuffer(s)&&typeof s!="string")throw new TypeError("Data must be a string or a buffer")}(t),this._finalized)throw new Error("Digest already called");E.isBuffer(t)||(t=E.from(t,e));for(var G=this._block,c=0;this._blockOffset+t.length-c>=this._blockSize;){for(var p=this._blockOffset;p<this._blockSize;)G[p++]=t[c++];this._update(),this._blockOffset=0}for(;c<t.length;)G[this._blockOffset++]=t[c++];for(var Y=0,F=8*t.length;F>0;++Y)this._length[Y]+=F,(F=this._length[Y]/4294967296|0)>0&&(this._length[Y]-=4294967296*F);return this},a.prototype._update=function(){throw new Error("_update is not implemented")},a.prototype.digest=function(t){if(this._finalized)throw new Error("Digest already called");this._finalized=!0;var e=this._digest();t!==void 0&&(e=e.toString(t)),this._block.fill(0),this._blockOffset=0;for(var G=0;G<4;++G)this._length[G]=0;return e},a.prototype._digest=function(){throw new Error("_digest is not implemented")},o.exports=a},4622:(o,Q,C)=>{var E=Q;E.utils=C(6863),E.common=C(3361),E.sha=C(344),E.ripemd=C(4282),E.hmac=C(7725),E.sha1=E.sha.sha1,E.sha256=E.sha.sha256,E.sha224=E.sha.sha224,E.sha384=E.sha.sha384,E.sha512=E.sha.sha512,E.ripemd160=E.ripemd.ripemd160},3361:(o,Q,C)=>{var E=C(6863),h=C(5956);function a(){this.pending=null,this.pendingTotal=0,this.blockSize=this.constructor.blockSize,this.outSize=this.constructor.outSize,this.hmacStrength=this.constructor.hmacStrength,this.padLength=this.constructor.padLength/8,this.endian="big",this._delta8=this.blockSize/8,this._delta32=this.blockSize/32}Q.BlockHash=a,a.prototype.update=function(t,e){if(t=E.toArray(t,e),this.pending?this.pending=this.pending.concat(t):this.pending=t,this.pendingTotal+=t.length,this.pending.length>=this._delta8){var G=(t=this.pending).length%this._delta8;this.pending=t.slice(t.length-G,t.length),this.pending.length===0&&(this.pending=null),t=E.join32(t,0,t.length-G,this.endian);for(var c=0;c<t.length;c+=this._delta32)this._update(t,c,c+this._delta32)}return this},a.prototype.digest=function(t){return this.update(this._pad()),h(this.pending===null),this._digest(t)},a.prototype._pad=function(){var t=this.pendingTotal,e=this._delta8,G=e-(t+this.padLength)%e,c=new Array(G+this.padLength);c[0]=128;for(var p=1;p<G;p++)c[p]=0;if(t<<=3,this.endian==="big"){for(var Y=8;Y<this.padLength;Y++)c[p++]=0;c[p++]=0,c[p++]=0,c[p++]=0,c[p++]=0,c[p++]=t>>>24&255,c[p++]=t>>>16&255,c[p++]=t>>>8&255,c[p++]=255&t}else for(c[p++]=255&t,c[p++]=t>>>8&255,c[p++]=t>>>16&255,c[p++]=t>>>24&255,c[p++]=0,c[p++]=0,c[p++]=0,c[p++]=0,Y=8;Y<this.padLength;Y++)c[p++]=0;return c}},7725:(o,Q,C)=>{var E=C(6863),h=C(5956);function a(t,e,G){if(!(this instanceof a))return new a(t,e,G);this.Hash=t,this.blockSize=t.blockSize/8,this.outSize=t.outSize/8,this.inner=null,this.outer=null,this._init(E.toArray(e,G))}o.exports=a,a.prototype._init=function(t){t.length>this.blockSize&&(t=new this.Hash().update(t).digest()),h(t.length<=this.blockSize);for(var e=t.length;e<this.blockSize;e++)t.push(0);for(e=0;e<t.length;e++)t[e]^=54;for(this.inner=new this.Hash().update(t),e=0;e<t.length;e++)t[e]^=106;this.outer=new this.Hash().update(t)},a.prototype.update=function(t,e){return this.inner.update(t,e),this},a.prototype.digest=function(t){return this.outer.update(this.inner.digest()),this.outer.digest(t)}},4282:(o,Q,C)=>{var E=C(6863),h=C(3361),a=E.rotl32,t=E.sum32,e=E.sum32_3,G=E.sum32_4,c=h.BlockHash;function p(){if(!(this instanceof p))return new p;c.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.endian="little"}function Y(D,y,O,R){return D<=15?y^O^R:D<=31?y&O|~y&R:D<=47?(y|~O)^R:D<=63?y&R|O&~R:y^(O|~R)}function F(D){return D<=15?0:D<=31?1518500249:D<=47?1859775393:D<=63?2400959708:2840853838}function s(D){return D<=15?1352829926:D<=31?1548603684:D<=47?1836072691:D<=63?2053994217:0}E.inherits(p,c),Q.ripemd160=p,p.blockSize=512,p.outSize=160,p.hmacStrength=192,p.padLength=64,p.prototype._update=function(D,y){for(var O=this.h[0],R=this.h[1],m=this.h[2],V=this.h[3],j=this.h[4],U=O,S=R,X=m,u=V,Z=j,L=0;L<80;L++){var _=t(a(G(O,Y(L,R,m,V),D[M[L]+y],F(L)),k[L]),j);O=j,j=V,V=a(m,10),m=R,R=_,_=t(a(G(U,Y(79-L,S,X,u),D[N[L]+y],s(L)),w[L]),Z),U=Z,Z=u,u=a(X,10),X=S,S=_}_=e(this.h[1],m,u),this.h[1]=e(this.h[2],V,Z),this.h[2]=e(this.h[3],j,U),this.h[3]=e(this.h[4],O,S),this.h[4]=e(this.h[0],R,X),this.h[0]=_},p.prototype._digest=function(D){return D==="hex"?E.toHex32(this.h,"little"):E.split32(this.h,"little")};var M=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],N=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],k=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],w=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]},344:(o,Q,C)=>{Q.sha1=C(2922),Q.sha224=C(1778),Q.sha256=C(1360),Q.sha384=C(8543),Q.sha512=C(2014)},2922:(o,Q,C)=>{var E=C(6863),h=C(3361),a=C(8492),t=E.rotl32,e=E.sum32,G=E.sum32_5,c=a.ft_1,p=h.BlockHash,Y=[1518500249,1859775393,2400959708,3395469782];function F(){if(!(this instanceof F))return new F;p.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.W=new Array(80)}E.inherits(F,p),o.exports=F,F.blockSize=512,F.outSize=160,F.hmacStrength=80,F.padLength=64,F.prototype._update=function(s,M){for(var N=this.W,k=0;k<16;k++)N[k]=s[M+k];for(;k<N.length;k++)N[k]=t(N[k-3]^N[k-8]^N[k-14]^N[k-16],1);var w=this.h[0],D=this.h[1],y=this.h[2],O=this.h[3],R=this.h[4];for(k=0;k<N.length;k++){var m=~~(k/20),V=G(t(w,5),c(m,D,y,O),R,N[k],Y[m]);R=O,O=y,y=t(D,30),D=w,w=V}this.h[0]=e(this.h[0],w),this.h[1]=e(this.h[1],D),this.h[2]=e(this.h[2],y),this.h[3]=e(this.h[3],O),this.h[4]=e(this.h[4],R)},F.prototype._digest=function(s){return s==="hex"?E.toHex32(this.h,"big"):E.split32(this.h,"big")}},1778:(o,Q,C)=>{var E=C(6863),h=C(1360);function a(){if(!(this instanceof a))return new a;h.call(this),this.h=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428]}E.inherits(a,h),o.exports=a,a.blockSize=512,a.outSize=224,a.hmacStrength=192,a.padLength=64,a.prototype._digest=function(t){return t==="hex"?E.toHex32(this.h.slice(0,7),"big"):E.split32(this.h.slice(0,7),"big")}},1360:(o,Q,C)=>{var E=C(6863),h=C(3361),a=C(8492),t=C(5956),e=E.sum32,G=E.sum32_4,c=E.sum32_5,p=a.ch32,Y=a.maj32,F=a.s0_256,s=a.s1_256,M=a.g0_256,N=a.g1_256,k=h.BlockHash,w=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function D(){if(!(this instanceof D))return new D;k.call(this),this.h=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],this.k=w,this.W=new Array(64)}E.inherits(D,k),o.exports=D,D.blockSize=512,D.outSize=256,D.hmacStrength=192,D.padLength=64,D.prototype._update=function(y,O){for(var R=this.W,m=0;m<16;m++)R[m]=y[O+m];for(;m<R.length;m++)R[m]=G(N(R[m-2]),R[m-7],M(R[m-15]),R[m-16]);var V=this.h[0],j=this.h[1],U=this.h[2],S=this.h[3],X=this.h[4],u=this.h[5],Z=this.h[6],L=this.h[7];for(t(this.k.length===R.length),m=0;m<R.length;m++){var _=c(L,s(X),p(X,u,Z),this.k[m],R[m]),f=e(F(V),Y(V,j,U));L=Z,Z=u,u=X,X=e(S,_),S=U,U=j,j=V,V=e(_,f)}this.h[0]=e(this.h[0],V),this.h[1]=e(this.h[1],j),this.h[2]=e(this.h[2],U),this.h[3]=e(this.h[3],S),this.h[4]=e(this.h[4],X),this.h[5]=e(this.h[5],u),this.h[6]=e(this.h[6],Z),this.h[7]=e(this.h[7],L)},D.prototype._digest=function(y){return y==="hex"?E.toHex32(this.h,"big"):E.split32(this.h,"big")}},8543:(o,Q,C)=>{var E=C(6863),h=C(2014);function a(){if(!(this instanceof a))return new a;h.call(this),this.h=[3418070365,3238371032,1654270250,914150663,2438529370,812702999,355462360,4144912697,1731405415,4290775857,2394180231,1750603025,3675008525,1694076839,1203062813,3204075428]}E.inherits(a,h),o.exports=a,a.blockSize=1024,a.outSize=384,a.hmacStrength=192,a.padLength=128,a.prototype._digest=function(t){return t==="hex"?E.toHex32(this.h.slice(0,12),"big"):E.split32(this.h.slice(0,12),"big")}},2014:(o,Q,C)=>{var E=C(6863),h=C(3361),a=C(5956),t=E.rotr64_hi,e=E.rotr64_lo,G=E.shr64_hi,c=E.shr64_lo,p=E.sum64,Y=E.sum64_hi,F=E.sum64_lo,s=E.sum64_4_hi,M=E.sum64_4_lo,N=E.sum64_5_hi,k=E.sum64_5_lo,w=h.BlockHash,D=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function y(){if(!(this instanceof y))return new y;w.call(this),this.h=[1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209],this.k=D,this.W=new Array(160)}function O(L,_,f,W,QA){var cA=L&f^~L&QA;return cA<0&&(cA+=4294967296),cA}function R(L,_,f,W,QA,cA){var aA=_&W^~_&cA;return aA<0&&(aA+=4294967296),aA}function m(L,_,f,W,QA){var cA=L&f^L&QA^f&QA;return cA<0&&(cA+=4294967296),cA}function V(L,_,f,W,QA,cA){var aA=_&W^_&cA^W&cA;return aA<0&&(aA+=4294967296),aA}function j(L,_){var f=t(L,_,28)^t(_,L,2)^t(_,L,7);return f<0&&(f+=4294967296),f}function U(L,_){var f=e(L,_,28)^e(_,L,2)^e(_,L,7);return f<0&&(f+=4294967296),f}function S(L,_){var f=e(L,_,14)^e(L,_,18)^e(_,L,9);return f<0&&(f+=4294967296),f}function X(L,_){var f=t(L,_,1)^t(L,_,8)^G(L,_,7);return f<0&&(f+=4294967296),f}function u(L,_){var f=e(L,_,1)^e(L,_,8)^c(L,_,7);return f<0&&(f+=4294967296),f}function Z(L,_){var f=e(L,_,19)^e(_,L,29)^c(L,_,6);return f<0&&(f+=4294967296),f}E.inherits(y,w),o.exports=y,y.blockSize=1024,y.outSize=512,y.hmacStrength=192,y.padLength=128,y.prototype._prepareBlock=function(L,_){for(var f=this.W,W=0;W<32;W++)f[W]=L[_+W];for(;W<f.length;W+=2){var QA=(b=f[W-4],P=f[W-3],kA=void 0,(kA=t(b,P,19)^t(P,b,29)^G(b,P,6))<0&&(kA+=4294967296),kA),cA=Z(f[W-4],f[W-3]),aA=f[W-14],tA=f[W-13],DA=X(f[W-30],f[W-29]),EA=u(f[W-30],f[W-29]),CA=f[W-32],K=f[W-31];f[W]=s(QA,cA,aA,tA,DA,EA,CA,K),f[W+1]=M(QA,cA,aA,tA,DA,EA,CA,K)}var b,P,kA},y.prototype._update=function(L,_){this._prepareBlock(L,_);var f,W,QA,cA=this.W,aA=this.h[0],tA=this.h[1],DA=this.h[2],EA=this.h[3],CA=this.h[4],K=this.h[5],b=this.h[6],P=this.h[7],kA=this.h[8],eA=this.h[9],FA=this.h[10],v=this.h[11],l=this.h[12],d=this.h[13],x=this.h[14],oA=this.h[15];a(this.k.length===cA.length);for(var hA=0;hA<cA.length;hA+=2){var AA=x,n=oA,r=(QA=void 0,(QA=t(f=kA,W=eA,14)^t(f,W,18)^t(W,f,9))<0&&(QA+=4294967296),QA),J=S(kA,eA),q=O(kA,0,FA,0,l),H=R(0,eA,0,v,0,d),T=this.k[hA],z=this.k[hA+1],$=cA[hA],BA=cA[hA+1],gA=N(AA,n,r,J,q,H,T,z,$,BA),iA=k(AA,n,r,J,q,H,T,z,$,BA);AA=j(aA,tA),n=U(aA,tA),r=m(aA,0,DA,0,CA),J=V(0,tA,0,EA,0,K);var wA=Y(AA,n,r,J),GA=F(AA,n,r,J);x=l,oA=d,l=FA,d=v,FA=kA,v=eA,kA=Y(b,P,gA,iA),eA=F(P,P,gA,iA),b=CA,P=K,CA=DA,K=EA,DA=aA,EA=tA,aA=Y(gA,iA,wA,GA),tA=F(gA,iA,wA,GA)}p(this.h,0,aA,tA),p(this.h,2,DA,EA),p(this.h,4,CA,K),p(this.h,6,b,P),p(this.h,8,kA,eA),p(this.h,10,FA,v),p(this.h,12,l,d),p(this.h,14,x,oA)},y.prototype._digest=function(L){return L==="hex"?E.toHex32(this.h,"big"):E.split32(this.h,"big")}},8492:(o,Q,C)=>{var E=C(6863).rotr32;function h(e,G,c){return e&G^~e&c}function a(e,G,c){return e&G^e&c^G&c}function t(e,G,c){return e^G^c}Q.ft_1=function(e,G,c,p){return e===0?h(G,c,p):e===1||e===3?t(G,c,p):e===2?a(G,c,p):void 0},Q.ch32=h,Q.maj32=a,Q.p32=t,Q.s0_256=function(e){return E(e,2)^E(e,13)^E(e,22)},Q.s1_256=function(e){return E(e,6)^E(e,11)^E(e,25)},Q.g0_256=function(e){return E(e,7)^E(e,18)^e>>>3},Q.g1_256=function(e){return E(e,17)^E(e,19)^e>>>10}},6863:(o,Q,C)=>{var E=C(5956),h=C(1531);function a(c,p){return(64512&c.charCodeAt(p))==55296&&!(p<0||p+1>=c.length)&&(64512&c.charCodeAt(p+1))==56320}function t(c){return(c>>>24|c>>>8&65280|c<<8&16711680|(255&c)<<24)>>>0}function e(c){return c.length===1?"0"+c:c}function G(c){return c.length===7?"0"+c:c.length===6?"00"+c:c.length===5?"000"+c:c.length===4?"0000"+c:c.length===3?"00000"+c:c.length===2?"000000"+c:c.length===1?"0000000"+c:c}Q.inherits=h,Q.toArray=function(c,p){if(Array.isArray(c))return c.slice();if(!c)return[];var Y=[];if(typeof c=="string")if(p){if(p==="hex")for((c=c.replace(/[^a-z0-9]+/gi,"")).length%2!=0&&(c="0"+c),s=0;s<c.length;s+=2)Y.push(parseInt(c[s]+c[s+1],16))}else for(var F=0,s=0;s<c.length;s++){var M=c.charCodeAt(s);M<128?Y[F++]=M:M<2048?(Y[F++]=M>>6|192,Y[F++]=63&M|128):a(c,s)?(M=65536+((1023&M)<<10)+(1023&c.charCodeAt(++s)),Y[F++]=M>>18|240,Y[F++]=M>>12&63|128,Y[F++]=M>>6&63|128,Y[F++]=63&M|128):(Y[F++]=M>>12|224,Y[F++]=M>>6&63|128,Y[F++]=63&M|128)}else for(s=0;s<c.length;s++)Y[s]=0|c[s];return Y},Q.toHex=function(c){for(var p="",Y=0;Y<c.length;Y++)p+=e(c[Y].toString(16));return p},Q.htonl=t,Q.toHex32=function(c,p){for(var Y="",F=0;F<c.length;F++){var s=c[F];p==="little"&&(s=t(s)),Y+=G(s.toString(16))}return Y},Q.zero2=e,Q.zero8=G,Q.join32=function(c,p,Y,F){var s=Y-p;E(s%4==0);for(var M=new Array(s/4),N=0,k=p;N<M.length;N++,k+=4){var w;w=F==="big"?c[k]<<24|c[k+1]<<16|c[k+2]<<8|c[k+3]:c[k+3]<<24|c[k+2]<<16|c[k+1]<<8|c[k],M[N]=w>>>0}return M},Q.split32=function(c,p){for(var Y=new Array(4*c.length),F=0,s=0;F<c.length;F++,s+=4){var M=c[F];p==="big"?(Y[s]=M>>>24,Y[s+1]=M>>>16&255,Y[s+2]=M>>>8&255,Y[s+3]=255&M):(Y[s+3]=M>>>24,Y[s+2]=M>>>16&255,Y[s+1]=M>>>8&255,Y[s]=255&M)}return Y},Q.rotr32=function(c,p){return c>>>p|c<<32-p},Q.rotl32=function(c,p){return c<<p|c>>>32-p},Q.sum32=function(c,p){return c+p>>>0},Q.sum32_3=function(c,p,Y){return c+p+Y>>>0},Q.sum32_4=function(c,p,Y,F){return c+p+Y+F>>>0},Q.sum32_5=function(c,p,Y,F,s){return c+p+Y+F+s>>>0},Q.sum64=function(c,p,Y,F){var s=c[p],M=F+c[p+1]>>>0,N=(M<F?1:0)+Y+s;c[p]=N>>>0,c[p+1]=M},Q.sum64_hi=function(c,p,Y,F){return(p+F>>>0<p?1:0)+c+Y>>>0},Q.sum64_lo=function(c,p,Y,F){return p+F>>>0},Q.sum64_4_hi=function(c,p,Y,F,s,M,N,k){var w=0,D=p;return w+=(D=D+F>>>0)<p?1:0,w+=(D=D+M>>>0)<M?1:0,c+Y+s+N+(w+=(D=D+k>>>0)<k?1:0)>>>0},Q.sum64_4_lo=function(c,p,Y,F,s,M,N,k){return p+F+M+k>>>0},Q.sum64_5_hi=function(c,p,Y,F,s,M,N,k,w,D){var y=0,O=p;return y+=(O=O+F>>>0)<p?1:0,y+=(O=O+M>>>0)<M?1:0,y+=(O=O+k>>>0)<k?1:0,c+Y+s+N+w+(y+=(O=O+D>>>0)<D?1:0)>>>0},Q.sum64_5_lo=function(c,p,Y,F,s,M,N,k,w,D){return p+F+M+k+D>>>0},Q.rotr64_hi=function(c,p,Y){return(p<<32-Y|c>>>Y)>>>0},Q.rotr64_lo=function(c,p,Y){return(c<<32-Y|p>>>Y)>>>0},Q.shr64_hi=function(c,p,Y){return c>>>Y},Q.shr64_lo=function(c,p,Y){return(c<<32-Y|p>>>Y)>>>0}},2315:(o,Q)=>{Q.read=function(C,E,h,a,t){var e,G,c=8*t-a-1,p=(1<<c)-1,Y=p>>1,F=-7,s=h?t-1:0,M=h?-1:1,N=C[E+s];for(s+=M,e=N&(1<<-F)-1,N>>=-F,F+=c;F>0;e=256*e+C[E+s],s+=M,F-=8);for(G=e&(1<<-F)-1,e>>=-F,F+=a;F>0;G=256*G+C[E+s],s+=M,F-=8);if(e===0)e=1-Y;else{if(e===p)return G?NaN:1/0*(N?-1:1);G+=Math.pow(2,a),e-=Y}return(N?-1:1)*G*Math.pow(2,e-a)},Q.write=function(C,E,h,a,t,e){var G,c,p,Y=8*e-t-1,F=(1<<Y)-1,s=F>>1,M=t===23?Math.pow(2,-24)-Math.pow(2,-77):0,N=a?0:e-1,k=a?1:-1,w=E<0||E===0&&1/E<0?1:0;for(E=Math.abs(E),isNaN(E)||E===1/0?(c=isNaN(E)?1:0,G=F):(G=Math.floor(Math.log(E)/Math.LN2),E*(p=Math.pow(2,-G))<1&&(G--,p*=2),(E+=G+s>=1?M/p:M*Math.pow(2,1-s))*p>=2&&(G++,p/=2),G+s>=F?(c=0,G=F):G+s>=1?(c=(E*p-1)*Math.pow(2,t),G+=s):(c=E*Math.pow(2,s-1)*Math.pow(2,t),G=0));t>=8;C[h+N]=255&c,N+=k,c/=256,t-=8);for(G=G<<t|c,Y+=t;Y>0;C[h+N]=255&G,N+=k,G/=256,Y-=8);C[h+N-k]|=128*w}},1531:o=>{typeof Object.create=="function"?o.exports=function(Q,C){C&&(Q.super_=C,Q.prototype=Object.create(C.prototype,{constructor:{value:Q,enumerable:!1,writable:!0,configurable:!0}}))}:o.exports=function(Q,C){if(C){Q.super_=C;var E=function(){};E.prototype=C.prototype,Q.prototype=new E,Q.prototype.constructor=Q}}},3211:(o,Q,C)=>{Object.defineProperty(Q,"__esModule",{value:!0}),Q.all=Q.whereNumeric=Q.whereAlpha3=Q.whereAlpha2=Q.whereCountry=void 0;const E=(h=C(1088))&&h.__esModule?h:{default:h};var h;Q.whereCountry=a=>E.default.find(t=>t.country.toUpperCase()===a.toUpperCase()),Q.whereAlpha2=a=>E.default.find(t=>t.alpha2===a.toUpperCase()),Q.whereAlpha3=a=>E.default.find(t=>t.alpha3===a.toUpperCase()),Q.whereNumeric=a=>E.default.find(t=>t.numeric===String(a)),Q.all=()=>E.default,Q.default={all:Q.all,whereCountry:Q.whereCountry,whereAlpha2:Q.whereAlpha2,whereAlpha3:Q.whereAlpha3,whereNumeric:Q.whereNumeric}},1088:(o,Q)=>{Object.defineProperty(Q,"__esModule",{value:!0}),Q.default=[{country:"Afghanistan",alpha2:"AF",alpha3:"AFG",numeric:"004"},{country:"Åland Islands",alpha2:"AX",alpha3:"ALA",numeric:"248"},{country:"Albania",alpha2:"AL",alpha3:"ALB",numeric:"008"},{country:"Algeria",alpha2:"DZ",alpha3:"DZA",numeric:"012"},{country:"American Samoa",alpha2:"AS",alpha3:"ASM",numeric:"016"},{country:"Andorra",alpha2:"AD",alpha3:"AND",numeric:"020"},{country:"Angola",alpha2:"AO",alpha3:"AGO",numeric:"024"},{country:"Anguilla",alpha2:"AI",alpha3:"AIA",numeric:"660"},{country:"Antarctica",alpha2:"AQ",alpha3:"ATA",numeric:"010"},{country:"Antigua and Barbuda",alpha2:"AG",alpha3:"ATG",numeric:"028"},{country:"Argentina",alpha2:"AR",alpha3:"ARG",numeric:"032"},{country:"Armenia",alpha2:"AM",alpha3:"ARM",numeric:"051"},{country:"Aruba",alpha2:"AW",alpha3:"ABW",numeric:"533"},{country:"Australia",alpha2:"AU",alpha3:"AUS",numeric:"036"},{country:"Austria",alpha2:"AT",alpha3:"AUT",numeric:"040"},{country:"Azerbaijan",alpha2:"AZ",alpha3:"AZE",numeric:"031"},{country:"Bahamas",alpha2:"BS",alpha3:"BHS",numeric:"044"},{country:"Bahrain",alpha2:"BH",alpha3:"BHR",numeric:"048"},{country:"Bangladesh",alpha2:"BD",alpha3:"BGD",numeric:"050"},{country:"Barbados",alpha2:"BB",alpha3:"BRB",numeric:"052"},{country:"Belarus",alpha2:"BY",alpha3:"BLR",numeric:"112"},{country:"Belgium",alpha2:"BE",alpha3:"BEL",numeric:"056"},{country:"Belize",alpha2:"BZ",alpha3:"BLZ",numeric:"084"},{country:"Benin",alpha2:"BJ",alpha3:"BEN",numeric:"204"},{country:"Bermuda",alpha2:"BM",alpha3:"BMU",numeric:"060"},{country:"Bhutan",alpha2:"BT",alpha3:"BTN",numeric:"064"},{country:"Bolivia",alpha2:"BO",alpha3:"BOL",numeric:"068"},{country:"Bonaire, Sint Eustatius and Saba",alpha2:"BQ",alpha3:"BES",numeric:"535"},{country:"Bosnia and Herzegovina",alpha2:"BA",alpha3:"BIH",numeric:"070"},{country:"Botswana",alpha2:"BW",alpha3:"BWA",numeric:"072"},{country:"Bouvet Island",alpha2:"BV",alpha3:"BVT",numeric:"074"},{country:"Brazil",alpha2:"BR",alpha3:"BRA",numeric:"076"},{country:"British Indian Ocean Territory",alpha2:"IO",alpha3:"IOT",numeric:"086"},{country:"Brunei Darussalam",alpha2:"BN",alpha3:"BRN",numeric:"096"},{country:"Bulgaria",alpha2:"BG",alpha3:"BGR",numeric:"100"},{country:"Burkina Faso",alpha2:"BF",alpha3:"BFA",numeric:"854"},{country:"Burundi",alpha2:"BI",alpha3:"BDI",numeric:"108"},{country:"Cabo Verde",alpha2:"CV",alpha3:"CPV",numeric:"132"},{country:"Cambodia",alpha2:"KH",alpha3:"KHM",numeric:"116"},{country:"Cameroon",alpha2:"CM",alpha3:"CMR",numeric:"120"},{country:"Canada",alpha2:"CA",alpha3:"CAN",numeric:"124"},{country:"Cayman Islands",alpha2:"KY",alpha3:"CYM",numeric:"136"},{country:"Central African Republic",alpha2:"CF",alpha3:"CAF",numeric:"140"},{country:"Chad",alpha2:"TD",alpha3:"TCD",numeric:"148"},{country:"Chile",alpha2:"CL",alpha3:"CHL",numeric:"152"},{country:"China",alpha2:"CN",alpha3:"CHN",numeric:"156"},{country:"Christmas Island",alpha2:"CX",alpha3:"CXR",numeric:"162"},{country:"Cocos Islands",alpha2:"CC",alpha3:"CCK",numeric:"166"},{country:"Colombia",alpha2:"CO",alpha3:"COL",numeric:"170"},{country:"Comoros",alpha2:"KM",alpha3:"COM",numeric:"174"},{country:"Congo",alpha2:"CG",alpha3:"COG",numeric:"178"},{country:"Congo",alpha2:"CD",alpha3:"COD",numeric:"180"},{country:"Cook Islands",alpha2:"CK",alpha3:"COK",numeric:"184"},{country:"Costa Rica",alpha2:"CR",alpha3:"CRI",numeric:"188"},{country:"Côte d'Ivoire",alpha2:"CI",alpha3:"CIV",numeric:"384"},{country:"Croatia",alpha2:"HR",alpha3:"HRV",numeric:"191"},{country:"Cuba",alpha2:"CU",alpha3:"CUB",numeric:"192"},{country:"Curaçao",alpha2:"CW",alpha3:"CUW",numeric:"531"},{country:"Cyprus",alpha2:"CY",alpha3:"CYP",numeric:"196"},{country:"Czech Republic",alpha2:"CZ",alpha3:"CZE",numeric:"203"},{country:"Denmark",alpha2:"DK",alpha3:"DNK",numeric:"208"},{country:"Djibouti",alpha2:"DJ",alpha3:"DJI",numeric:"262"},{country:"Dominica",alpha2:"DM",alpha3:"DMA",numeric:"212"},{country:"Dominican Republic",alpha2:"DO",alpha3:"DOM",numeric:"214"},{country:"Ecuador",alpha2:"EC",alpha3:"ECU",numeric:"218"},{country:"Egypt",alpha2:"EG",alpha3:"EGY",numeric:"818"},{country:"El Salvador",alpha2:"SV",alpha3:"SLV",numeric:"222"},{country:"Equatorial Guinea",alpha2:"GQ",alpha3:"GNQ",numeric:"226"},{country:"Eritrea",alpha2:"ER",alpha3:"ERI",numeric:"232"},{country:"Estonia",alpha2:"EE",alpha3:"EST",numeric:"233"},{country:"Ethiopia",alpha2:"ET",alpha3:"ETH",numeric:"231"},{country:"Falkland Islands",alpha2:"FK",alpha3:"FLK",numeric:"238"},{country:"Faroe Islands",alpha2:"FO",alpha3:"FRO",numeric:"234"},{country:"Fiji",alpha2:"FJ",alpha3:"FJI",numeric:"242"},{country:"Finland",alpha2:"FI",alpha3:"FIN",numeric:"246"},{country:"France",alpha2:"FR",alpha3:"FRA",numeric:"250"},{country:"French Guiana",alpha2:"GF",alpha3:"GUF",numeric:"254"},{country:"French Polynesia",alpha2:"PF",alpha3:"PYF",numeric:"258"},{country:"French Southern Territories",alpha2:"TF",alpha3:"ATF",numeric:"260"},{country:"Gabon",alpha2:"GA",alpha3:"GAB",numeric:"266"},{country:"Gambia",alpha2:"GM",alpha3:"GMB",numeric:"270"},{country:"Georgia",alpha2:"GE",alpha3:"GEO",numeric:"268"},{country:"Germany",alpha2:"DE",alpha3:"DEU",numeric:"276"},{country:"Ghana",alpha2:"GH",alpha3:"GHA",numeric:"288"},{country:"Gibraltar",alpha2:"GI",alpha3:"GIB",numeric:"292"},{country:"Greece",alpha2:"GR",alpha3:"GRC",numeric:"300"},{country:"Greenland",alpha2:"GL",alpha3:"GRL",numeric:"304"},{country:"Grenada",alpha2:"GD",alpha3:"GRD",numeric:"308"},{country:"Guadeloupe",alpha2:"GP",alpha3:"GLP",numeric:"312"},{country:"Guam",alpha2:"GU",alpha3:"GUM",numeric:"316"},{country:"Guatemala",alpha2:"GT",alpha3:"GTM",numeric:"320"},{country:"Guernsey",alpha2:"GG",alpha3:"GGY",numeric:"831"},{country:"Guinea",alpha2:"GN",alpha3:"GIN",numeric:"324"},{country:"Guinea-Bissau",alpha2:"GW",alpha3:"GNB",numeric:"624"},{country:"Guyana",alpha2:"GY",alpha3:"GUY",numeric:"328"},{country:"Haiti",alpha2:"HT",alpha3:"HTI",numeric:"332"},{country:"Heard Island and McDonald Islands",alpha2:"HM",alpha3:"HMD",numeric:"334"},{country:"Holy See",alpha2:"VA",alpha3:"VAT",numeric:"336"},{country:"Honduras",alpha2:"HN",alpha3:"HND",numeric:"340"},{country:"Hong Kong",alpha2:"HK",alpha3:"HKG",numeric:"344"},{country:"Hungary",alpha2:"HU",alpha3:"HUN",numeric:"348"},{country:"Iceland",alpha2:"IS",alpha3:"ISL",numeric:"352"},{country:"India",alpha2:"IN",alpha3:"IND",numeric:"356"},{country:"Indonesia",alpha2:"ID",alpha3:"IDN",numeric:"360"},{country:"Islamic Republic of Iran",alpha2:"IR",alpha3:"IRN",numeric:"364"},{country:"Iraq",alpha2:"IQ",alpha3:"IRQ",numeric:"368"},{country:"Ireland",alpha2:"IE",alpha3:"IRL",numeric:"372"},{country:"Isle of Man",alpha2:"IM",alpha3:"IMN",numeric:"833"},{country:"Israel",alpha2:"IL",alpha3:"ISR",numeric:"376"},{country:"Italy",alpha2:"IT",alpha3:"ITA",numeric:"380"},{country:"Jamaica",alpha2:"JM",alpha3:"JAM",numeric:"388"},{country:"Japan",alpha2:"JP",alpha3:"JPN",numeric:"392"},{country:"Jersey",alpha2:"JE",alpha3:"JEY",numeric:"832"},{country:"Jordan",alpha2:"JO",alpha3:"JOR",numeric:"400"},{country:"Kazakhstan",alpha2:"KZ",alpha3:"KAZ",numeric:"398"},{country:"Kenya",alpha2:"KE",alpha3:"KEN",numeric:"404"},{country:"Kiribati",alpha2:"KI",alpha3:"KIR",numeric:"296"},{country:"Democratic People's Republic of Korea",alpha2:"KP",alpha3:"PRK",numeric:"408"},{country:"Republic of Korea",alpha2:"KR",alpha3:"KOR",numeric:"410"},{country:"Kuwait",alpha2:"KW",alpha3:"KWT",numeric:"414"},{country:"Kyrgyzstan",alpha2:"KG",alpha3:"KGZ",numeric:"417"},{country:"Lao People's Democratic Republic",alpha2:"LA",alpha3:"LAO",numeric:"418"},{country:"Latvia",alpha2:"LV",alpha3:"LVA",numeric:"428"},{country:"Lebanon",alpha2:"LB",alpha3:"LBN",numeric:"422"},{country:"Lesotho",alpha2:"LS",alpha3:"LSO",numeric:"426"},{country:"Liberia",alpha2:"LR",alpha3:"LBR",numeric:"430"},{country:"Libya",alpha2:"LY",alpha3:"LBY",numeric:"434"},{country:"Liechtenstein",alpha2:"LI",alpha3:"LIE",numeric:"438"},{country:"Lithuania",alpha2:"LT",alpha3:"LTU",numeric:"440"},{country:"Luxembourg",alpha2:"LU",alpha3:"LUX",numeric:"442"},{country:"Macao",alpha2:"MO",alpha3:"MAC",numeric:"446"},{country:"Macedonia",alpha2:"MK",alpha3:"MKD",numeric:"807"},{country:"Madagascar",alpha2:"MG",alpha3:"MDG",numeric:"450"},{country:"Malawi",alpha2:"MW",alpha3:"MWI",numeric:"454"},{country:"Malaysia",alpha2:"MY",alpha3:"MYS",numeric:"458"},{country:"Maldives",alpha2:"MV",alpha3:"MDV",numeric:"462"},{country:"Mali",alpha2:"ML",alpha3:"MLI",numeric:"466"},{country:"Malta",alpha2:"MT",alpha3:"MLT",numeric:"470"},{country:"Marshall Islands",alpha2:"MH",alpha3:"MHL",numeric:"584"},{country:"Martinique",alpha2:"MQ",alpha3:"MTQ",numeric:"474"},{country:"Mauritania",alpha2:"MR",alpha3:"MRT",numeric:"478"},{country:"Mauritius",alpha2:"MU",alpha3:"MUS",numeric:"480"},{country:"Mayotte",alpha2:"YT",alpha3:"MYT",numeric:"175"},{country:"Mexico",alpha2:"MX",alpha3:"MEX",numeric:"484"},{country:"Federated States of Micronesia",alpha2:"FM",alpha3:"FSM",numeric:"583"},{country:"Republic of Moldova",alpha2:"MD",alpha3:"MDA",numeric:"498"},{country:"Monaco",alpha2:"MC",alpha3:"MCO",numeric:"492"},{country:"Mongolia",alpha2:"MN",alpha3:"MNG",numeric:"496"},{country:"Montenegro",alpha2:"ME",alpha3:"MNE",numeric:"499"},{country:"Montserrat",alpha2:"MS",alpha3:"MSR",numeric:"500"},{country:"Morocco",alpha2:"MA",alpha3:"MAR",numeric:"504"},{country:"Mozambique",alpha2:"MZ",alpha3:"MOZ",numeric:"508"},{country:"Myanmar",alpha2:"MM",alpha3:"MMR",numeric:"104"},{country:"Namibia",alpha2:"NA",alpha3:"NAM",numeric:"516"},{country:"Nauru",alpha2:"NR",alpha3:"NRU",numeric:"520"},{country:"Nepal",alpha2:"NP",alpha3:"NPL",numeric:"524"},{country:"Netherlands",alpha2:"NL",alpha3:"NLD",numeric:"528"},{country:"New Caledonia",alpha2:"NC",alpha3:"NCL",numeric:"540"},{country:"New Zealand",alpha2:"NZ",alpha3:"NZL",numeric:"554"},{country:"Nicaragua",alpha2:"NI",alpha3:"NIC",numeric:"558"},{country:"Niger",alpha2:"NE",alpha3:"NER",numeric:"562"},{country:"Nigeria",alpha2:"NG",alpha3:"NGA",numeric:"566"},{country:"Niue",alpha2:"NU",alpha3:"NIU",numeric:"570"},{country:"Norfolk Island",alpha2:"NF",alpha3:"NFK",numeric:"574"},{country:"Northern Mariana Islands",alpha2:"MP",alpha3:"MNP",numeric:"580"},{country:"Norway",alpha2:"NO",alpha3:"NOR",numeric:"578"},{country:"Oman",alpha2:"OM",alpha3:"OMN",numeric:"512"},{country:"Pakistan",alpha2:"PK",alpha3:"PAK",numeric:"586"},{country:"Palau",alpha2:"PW",alpha3:"PLW",numeric:"585"},{country:"State of Palestine",alpha2:"PS",alpha3:"PSE",numeric:"275"},{country:"Panama",alpha2:"PA",alpha3:"PAN",numeric:"591"},{country:"Papua New Guinea",alpha2:"PG",alpha3:"PNG",numeric:"598"},{country:"Paraguay",alpha2:"PY",alpha3:"PRY",numeric:"600"},{country:"Peru",alpha2:"PE",alpha3:"PER",numeric:"604"},{country:"Philippines",alpha2:"PH",alpha3:"PHL",numeric:"608"},{country:"Pitcairn",alpha2:"PN",alpha3:"PCN",numeric:"612"},{country:"Poland",alpha2:"PL",alpha3:"POL",numeric:"616"},{country:"Portugal",alpha2:"PT",alpha3:"PRT",numeric:"620"},{country:"Puerto Rico",alpha2:"PR",alpha3:"PRI",numeric:"630"},{country:"Qatar",alpha2:"QA",alpha3:"QAT",numeric:"634"},{country:"Réunion",alpha2:"RE",alpha3:"REU",numeric:"638"},{country:"Romania",alpha2:"RO",alpha3:"ROU",numeric:"642"},{country:"Russian Federation",alpha2:"RU",alpha3:"RUS",numeric:"643"},{country:"Rwanda",alpha2:"RW",alpha3:"RWA",numeric:"646"},{country:"Saint Barthélemy",alpha2:"BL",alpha3:"BLM",numeric:"652"},{country:"Saint Helena, Ascension and Tristan da Cunha",alpha2:"SH",alpha3:"SHN",numeric:"654"},{country:"Saint Kitts and Nevis",alpha2:"KN",alpha3:"KNA",numeric:"659"},{country:"Saint Lucia",alpha2:"LC",alpha3:"LCA",numeric:"662"},{country:"Saint Martin",alpha2:"MF",alpha3:"MAF",numeric:"663"},{country:"Saint Pierre and Miquelon",alpha2:"PM",alpha3:"SPM",numeric:"666"},{country:"Saint Vincent and the Grenadines",alpha2:"VC",alpha3:"VCT",numeric:"670"},{country:"Samoa",alpha2:"WS",alpha3:"WSM",numeric:"882"},{country:"San Marino",alpha2:"SM",alpha3:"SMR",numeric:"674"},{country:"Sao Tome and Principe",alpha2:"ST",alpha3:"STP",numeric:"678"},{country:"Saudi Arabia",alpha2:"SA",alpha3:"SAU",numeric:"682"},{country:"Senegal",alpha2:"SN",alpha3:"SEN",numeric:"686"},{country:"Serbia",alpha2:"RS",alpha3:"SRB",numeric:"688"},{country:"Seychelles",alpha2:"SC",alpha3:"SYC",numeric:"690"},{country:"Sierra Leone",alpha2:"SL",alpha3:"SLE",numeric:"694"},{country:"Singapore",alpha2:"SG",alpha3:"SGP",numeric:"702"},{country:"Sint Maarten",alpha2:"SX",alpha3:"SXM",numeric:"534"},{country:"Slovakia",alpha2:"SK",alpha3:"SVK",numeric:"703"},{country:"Slovenia",alpha2:"SI",alpha3:"SVN",numeric:"705"},{country:"Solomon Islands",alpha2:"SB",alpha3:"SLB",numeric:"090"},{country:"Somalia",alpha2:"SO",alpha3:"SOM",numeric:"706"},{country:"South Africa",alpha2:"ZA",alpha3:"ZAF",numeric:"710"},{country:"South Georgia and the South Sandwich Islands",alpha2:"GS",alpha3:"SGS",numeric:"239"},{country:"South Sudan",alpha2:"SS",alpha3:"SSD",numeric:"728"},{country:"Spain",alpha2:"ES",alpha3:"ESP",numeric:"724"},{country:"Sri Lanka",alpha2:"LK",alpha3:"LKA",numeric:"144"},{country:"Sudan",alpha2:"SD",alpha3:"SDN",numeric:"729"},{country:"Suriname",alpha2:"SR",alpha3:"SUR",numeric:"740"},{country:"Svalbard and Jan Mayen",alpha2:"SJ",alpha3:"SJM",numeric:"744"},{country:"Swaziland",alpha2:"SZ",alpha3:"SWZ",numeric:"748"},{country:"Sweden",alpha2:"SE",alpha3:"SWE",numeric:"752"},{country:"Switzerland",alpha2:"CH",alpha3:"CHE",numeric:"756"},{country:"Syrian Arab Republic",alpha2:"SY",alpha3:"SYR",numeric:"760"},{country:"Taiwan, Province of China",alpha2:"TW",alpha3:"TWN",numeric:"158"},{country:"Tajikistan",alpha2:"TJ",alpha3:"TJK",numeric:"762"},{country:"United Republic of Tanzania",alpha2:"TZ",alpha3:"TZA",numeric:"834"},{country:"Thailand",alpha2:"TH",alpha3:"THA",numeric:"764"},{country:"Timor-Leste",alpha2:"TL",alpha3:"TLS",numeric:"626"},{country:"Togo",alpha2:"TG",alpha3:"TGO",numeric:"768"},{country:"Tokelau",alpha2:"TK",alpha3:"TKL",numeric:"772"},{country:"Tonga",alpha2:"TO",alpha3:"TON",numeric:"776"},{country:"Trinidad and Tobago",alpha2:"TT",alpha3:"TTO",numeric:"780"},{country:"Tunisia",alpha2:"TN",alpha3:"TUN",numeric:"788"},{country:"Turkey",alpha2:"TR",alpha3:"TUR",numeric:"792"},{country:"Turkmenistan",alpha2:"TM",alpha3:"TKM",numeric:"795"},{country:"Turks and Caicos Islands",alpha2:"TC",alpha3:"TCA",numeric:"796"},{country:"Tuvalu",alpha2:"TV",alpha3:"TUV",numeric:"798"},{country:"Uganda",alpha2:"UG",alpha3:"UGA",numeric:"800"},{country:"Ukraine",alpha2:"UA",alpha3:"UKR",numeric:"804"},{country:"United Arab Emirates",alpha2:"AE",alpha3:"ARE",numeric:"784"},{country:"United Kingdom of Great Britain and Northern Ireland",alpha2:"GB",alpha3:"GBR",numeric:"826"},{country:"United States of America",alpha2:"US",alpha3:"USA",numeric:"840"},{country:"United States Minor Outlying Islands",alpha2:"UM",alpha3:"UMI",numeric:"581"},{country:"Uruguay",alpha2:"UY",alpha3:"URY",numeric:"858"},{country:"Uzbekistan",alpha2:"UZ",alpha3:"UZB",numeric:"860"},{country:"Vanuatu",alpha2:"VU",alpha3:"VUT",numeric:"548"},{country:"Venezuela (Bolivarian Republic of)",alpha2:"VE",alpha3:"VEN",numeric:"862"},{country:"Viet Nam",alpha2:"VN",alpha3:"VNM",numeric:"704"},{country:"Virgin Islands",alpha2:"VG",alpha3:"VGB",numeric:"092"},{country:"Virgin Islands of the United States",alpha2:"VI",alpha3:"VIR",numeric:"850"},{country:"Wallis and Futuna",alpha2:"WF",alpha3:"WLF",numeric:"876"},{country:"Western Sahara",alpha2:"EH",alpha3:"ESH",numeric:"732"},{country:"Yemen",alpha2:"YE",alpha3:"YEM",numeric:"887"},{country:"Zambia",alpha2:"ZM",alpha3:"ZMB",numeric:"894"},{country:"Zimbabwe",alpha2:"ZW",alpha3:"ZWE",numeric:"716"}]},2648:(o,Q,C)=>{var E=C(3150).stringify,h=C(4511);o.exports=function(a){return{parse:h(a),stringify:E}},o.exports.parse=h(),o.exports.stringify=E},4511:(o,Q,C)=>{var E=null;const h=/(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])/,a=/(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)/;o.exports=function(t){var e={strict:!1,storeAsString:!1,alwaysParseAsBig:!1,useNativeBigInt:!1,protoAction:"error",constructorAction:"error"};if(t!=null){if(t.strict===!0&&(e.strict=!0),t.storeAsString===!0&&(e.storeAsString=!0),e.alwaysParseAsBig=t.alwaysParseAsBig===!0&&t.alwaysParseAsBig,e.useNativeBigInt=t.useNativeBigInt===!0&&t.useNativeBigInt,t.constructorAction!==void 0){if(t.constructorAction!=="error"&&t.constructorAction!=="ignore"&&t.constructorAction!=="preserve")throw new Error(`Incorrect value for constructorAction option, must be "error", "ignore" or undefined but passed ${t.constructorAction}`);e.constructorAction=t.constructorAction}if(t.protoAction!==void 0){if(t.protoAction!=="error"&&t.protoAction!=="ignore"&&t.protoAction!=="preserve")throw new Error(`Incorrect value for protoAction option, must be "error", "ignore" or undefined but passed ${t.protoAction}`);e.protoAction=t.protoAction}}var G,c,p,Y,F={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:`
`,r:"\r",t:"	"},s=function(D){throw{name:"SyntaxError",message:D,at:G,text:p}},M=function(D){return D&&D!==c&&s("Expected '"+D+"' instead of '"+c+"'"),c=p.charAt(G),G+=1,c},N=function(){var D,y="";for(c==="-"&&(y="-",M("-"));c>="0"&&c<="9";)y+=c,M();if(c===".")for(y+=".";M()&&c>="0"&&c<="9";)y+=c;if(c==="e"||c==="E")for(y+=c,M(),c!=="-"&&c!=="+"||(y+=c,M());c>="0"&&c<="9";)y+=c,M();if(D=+y,isFinite(D))return E==null&&(E=C(6504)),y.length>15?e.storeAsString?y:e.useNativeBigInt?BigInt(y):new E(y):e.alwaysParseAsBig?e.useNativeBigInt?BigInt(D):new E(D):D;s("Bad number")},k=function(){var D,y,O,R="";if(c==='"')for(var m=G;M();){if(c==='"')return G-1>m&&(R+=p.substring(m,G-1)),M(),R;if(c==="\\"){if(G-1>m&&(R+=p.substring(m,G-1)),M(),c==="u"){for(O=0,y=0;y<4&&(D=parseInt(M(),16),isFinite(D));y+=1)O=16*O+D;R+=String.fromCharCode(O)}else{if(typeof F[c]!="string")break;R+=F[c]}m=G}}s("Bad string")},w=function(){for(;c&&c<=" ";)M()};return Y=function(){switch(w(),c){case"{":return function(){var D,y=Object.create(null);if(c==="{"){if(M("{"),w(),c==="}")return M("}"),y;for(;c;){if(D=k(),w(),M(":"),e.strict===!0&&Object.hasOwnProperty.call(y,D)&&s('Duplicate key "'+D+'"'),h.test(D)===!0?e.protoAction==="error"?s("Object contains forbidden prototype property"):e.protoAction==="ignore"?Y():y[D]=Y():a.test(D)===!0?e.constructorAction==="error"?s("Object contains forbidden constructor property"):e.constructorAction==="ignore"?Y():y[D]=Y():y[D]=Y(),w(),c==="}")return M("}"),y;M(","),w()}}s("Bad object")}();case"[":return function(){var D=[];if(c==="["){if(M("["),w(),c==="]")return M("]"),D;for(;c;){if(D.push(Y()),w(),c==="]")return M("]"),D;M(","),w()}}s("Bad array")}();case'"':return k();case"-":return N();default:return c>="0"&&c<="9"?N():function(){switch(c){case"t":return M("t"),M("r"),M("u"),M("e"),!0;case"f":return M("f"),M("a"),M("l"),M("s"),M("e"),!1;case"n":return M("n"),M("u"),M("l"),M("l"),null}s("Unexpected '"+c+"'")}()}},function(D,y){var O;return p=D+"",G=0,c=" ",O=Y(),w(),c&&s("Syntax error"),typeof y=="function"?function R(m,V){var j,U=m[V];return U&&typeof U=="object"&&Object.keys(U).forEach(function(S){(j=R(U,S))!==void 0?U[S]=j:delete U[S]}),y.call(m,V,U)}({"":O},""):O}}},3150:(o,Q,C)=>{var E=C(6504),h=o.exports;(function(){var a,t,e,G=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,c={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function p(F){return G.lastIndex=0,G.test(F)?'"'+F.replace(G,function(s){var M=c[s];return typeof M=="string"?M:"\\u"+("0000"+s.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+F+'"'}function Y(F,s){var M,N,k,w,D,y=a,O=s[F],R=O!=null&&(O instanceof E||E.isBigNumber(O));switch(O&&typeof O=="object"&&typeof O.toJSON=="function"&&(O=O.toJSON(F)),typeof e=="function"&&(O=e.call(s,F,O)),typeof O){case"string":return R?O:p(O);case"number":return isFinite(O)?String(O):"null";case"boolean":case"null":case"bigint":return String(O);case"object":if(!O)return"null";if(a+=t,D=[],Object.prototype.toString.apply(O)==="[object Array]"){for(w=O.length,M=0;M<w;M+=1)D[M]=Y(M,O)||"null";return k=D.length===0?"[]":a?`[
`+a+D.join(`,
`+a)+`
`+y+"]":"["+D.join(",")+"]",a=y,k}if(e&&typeof e=="object")for(w=e.length,M=0;M<w;M+=1)typeof e[M]=="string"&&(k=Y(N=e[M],O))&&D.push(p(N)+(a?": ":":")+k);else Object.keys(O).forEach(function(m){var V=Y(m,O);V&&D.push(p(m)+(a?": ":":")+V)});return k=D.length===0?"{}":a?`{
`+a+D.join(`,
`+a)+`