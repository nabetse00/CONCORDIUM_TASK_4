import{u as j,j as t,L as n}from"./index-5c482bb5.js";import{r as i}from"./wallet-0d6fe0b8.js";import{N as f}from"./NoAccount-4f90af33.js";import{g,c as C,S as a,B as b,z as y,y as v}from"./ui-bc4a4294.js";import"./icons-ffceca67.js";const{Text:B}=v;function w(){var c;const{connection:l,account:u,network:e,refNavBar:o,refConnectButtons:s}=j(),[p,r]=i.useState(!1),h=o.current?(c=o.current.menu)==null?void 0:c.list:null,d=[{title:"Connect Account",description:"Choose browser extension or WalletConnect then connect your Wallet",placement:"bottomLeft",target:s.current?s.current:null},{placement:"rightTop",title:"Use Dapp",description:"Use this navigation bar to display information or update the contract",target:h}];return t.jsx(i.Suspense,{fallback:t.jsx(g,{}),children:u&&l&&e?t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Become the Richest demo Dapp"}),t.jsx(C,{showIcon:!0,message:t.jsx(B,{children:"Please use navigation bar to get some information"}),description:t.jsx(a,{direction:"vertical",children:t.jsxs("ul",{children:[t.jsxs("li",{children:[" ",t.jsx(n,{to:"account-info/",children:"Your Account Info"})]}),t.jsxs("li",{children:[" ",t.jsx(n,{to:"contract-info/",children:"Contract general info"})]}),t.jsxs("li",{children:[" ",t.jsx(n,{to:"contract/",children:"Contract Current Data"})]}),t.jsxs("li",{children:[" ",t.jsx(n,{to:"become-the-richest/",children:"Update Contract and become the Richest (for now on testnet 😉)"})," "]})]})})})]}):t.jsxs(a,{direction:"vertical",children:[t.jsx(f,{network:e==null?void 0:e.name}),t.jsx(b,{type:"primary",onClick:()=>r(!0),children:"Instructions"}),t.jsx(y,{open:p,onClose:()=>r(!1),steps:d,indicatorsRender:(x,m)=>t.jsxs("span",{children:[x+1," / ",m]})})]})})}export{w as IndexPage};
