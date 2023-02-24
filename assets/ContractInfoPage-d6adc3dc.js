import{u as j,a as p,j as e}from"./index-5c482bb5.js";import{r as a,d as h}from"./wallet-0d6fe0b8.js";import{C as d}from"./contract-8d575f94.js";import{B as C}from"./Balance-a2a69e02.js";import{N as I}from"./NoAccount-4f90af33.js";import{g as u,o as s,p as b}from"./ui-bc4a4294.js";import"./icons-ffceca67.js";function g(r){return r.name.replace("init_","")}function D(){const{connection:r,account:c,network:t}=j(),[n,i]=a.useState(),[S,l]=a.useState(""),x=p(),f={index:d.index,subindex:d.subIndex};return a.useEffect(()=>{(!r||!c)&&x("/CONCORDIUM_TASK_4/"),r&&h.withJsonRpcClient(r,o=>o.getInstanceInfo(f)).then(o=>{i(o),l("")}).catch(o=>{i(void 0),l(o)})},[r,n]),e.jsx(a.Suspense,{fallback:e.jsx(u,{}),children:e.jsx(e.Fragment,{children:n?e.jsxs(s,{title:"Contract Info",column:1,bordered:!0,children:[e.jsx(s.Item,{label:"Status",span:1,children:e.jsx(b,{status:t?"success":"error",text:t?e.jsx(e.Fragment,{children:"connected to "+(t==null?void 0:t.name)}):"no network"})}),e.jsx(s.Item,{label:"Contact name",children:g(n)}),e.jsx(s.Item,{label:"Contract Balance",children:e.jsx(C,{balance:n.amount.microCcdAmount,currency:"USD",size:14})}),e.jsx(s.Item,{label:"Contract owner",children:n.owner.address}),e.jsx(s.Item,{label:"Contract version",children:n.version}),e.jsx(s.Item,{label:"Contract source module",children:n.sourceModule.toJSON()}),e.jsx(s.Item,{label:"Contract source module",children:n.methods.map((o,m)=>e.jsxs("p",{children:[m+"> "+o,e.jsx("br",{})]},m))})]}):c?e.jsx(u,{}):e.jsx(I,{network:t==null?void 0:t.name})})})}export{D as ContractInfoPage};
