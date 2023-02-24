import{u as j,a as D,j as A}from"./index-cf8ffa78.js";import{b as m,r as t}from"./wallet-05f4693c.js";import{T as M,M as O}from"./txnStatusComp-5540096a.js";import{N as _}from"./NoAccount-521a3b62.js";import{T as Z,i as L,g as P,a as $,u as q}from"./invokeContractFn-42342478.js";import{q as d,g as w,S as R,c as K,s as AA,I as eA,u as cA,v as y,B as nA,T as tA}from"./ui-39a4cd14.js";import"./icons-dea615b7.js";const X="//8DAQAAAAwAAABjaXMyX3Rva2VuX2EBABQAAgAAAAMAAAB1cmwWAgQAAABoYXNoFQIAAAAEAAAATm9uZQIEAAAAU29tZQEBAAAAEyAAAAACDQAAAAkAAABiYWxhbmNlT2YGEAEUAAIAAAAIAAAAdG9rZW5faWQdAAcAAABhZGRyZXNzFQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADBABGyUAAAAVBAAAAA4AAABJbnZhbGlkVG9rZW5JZAIRAAAASW5zdWZmaWNpZW50RnVuZHMCDAAAAFVuYXV0aG9yaXplZAIGAAAAQ3VzdG9tAQEAAAAVCQAAAAsAAABQYXJzZVBhcmFtcwIHAAAATG9nRnVsbAIMAAAATG9nTWFsZm9ybWVkAg4AAABDb250cmFjdFBhdXNlZAITAAAASW52b2tlQ29udHJhY3RFcnJvcgITAAAASW52b2tlVHJhbnNmZXJFcnJvcgIaAAAARmFpbGVkVXBncmFkZU1pc3NpbmdNb2R1bGUCHAAAAEZhaWxlZFVwZ3JhZGVNaXNzaW5nQ29udHJhY3QCJQAAAEZhaWxlZFVwZ3JhZGVVbnN1cHBvcnRlZE1vZHVsZVZlcnNpb24CCwAAAGdldF90b2tlbl9hBBQAAwAAAAIAAAB0bxUCAAAABwAAAEFjY291bnQBAQAAAAsIAAAAQ29udHJhY3QBAgAAAAwWAQYAAABhbW91bnQKBAAAAGRhdGEdARUEAAAADgAAAEludmFsaWRUb2tlbklkAhEAAABJbnN1ZmZpY2llbnRGdW5kcwIMAAAAVW5hdXRob3JpemVkAgYAAABDdXN0b20BAQAAABUJAAAACwAAAFBhcnNlUGFyYW1zAgcAAABMb2dGdWxsAgwAAABMb2dNYWxmb3JtZWQCDgAAAENvbnRyYWN0UGF1c2VkAhMAAABJbnZva2VDb250cmFjdEVycm9yAhMAAABJbnZva2VUcmFuc2ZlckVycm9yAhoAAABGYWlsZWRVcGdyYWRlTWlzc2luZ01vZHVsZQIcAAAARmFpbGVkVXBncmFkZU1pc3NpbmdDb250cmFjdAIlAAAARmFpbGVkVXBncmFkZVVuc3VwcG9ydGVkTW9kdWxlVmVyc2lvbgIKAAAAb3BlcmF0b3JPZgYQARQAAgAAAAUAAABvd25lchUCAAAABwAAAEFjY291bnQBAQAAAAsIAAAAQ29udHJhY3QBAQAAAAwHAAAAYWRkcmVzcxUCAAAABwAAAEFjY291bnQBAQAAAAsIAAAAQ29udHJhY3QBAQAAAAwQAQEVBAAAAA4AAABJbnZhbGlkVG9rZW5JZAIRAAAASW5zdWZmaWNpZW50RnVuZHMCDAAAAFVuYXV0aG9yaXplZAIGAAAAQ3VzdG9tAQEAAAAVCQAAAAsAAABQYXJzZVBhcmFtcwIHAAAATG9nRnVsbAIMAAAATG9nTWFsZm9ybWVkAg4AAABDb250cmFjdFBhdXNlZAITAAAASW52b2tlQ29udHJhY3RFcnJvcgITAAAASW52b2tlVHJhbnNmZXJFcnJvcgIaAAAARmFpbGVkVXBncmFkZU1pc3NpbmdNb2R1bGUCHAAAAEZhaWxlZFVwZ3JhZGVNaXNzaW5nQ29udHJhY3QCJQAAAEZhaWxlZFVwZ3JhZGVVbnN1cHBvcnRlZE1vZHVsZVZlcnNpb24CDwAAAHNldEltcGxlbWVudG9ycwQUAAIAAAACAAAAaWQWAAwAAABpbXBsZW1lbnRvcnMQAgwVBAAAAA4AAABJbnZhbGlkVG9rZW5JZAIRAAAASW5zdWZmaWNpZW50RnVuZHMCDAAAAFVuYXV0aG9yaXplZAIGAAAAQ3VzdG9tAQEAAAAVCQAAAAsAAABQYXJzZVBhcmFtcwIHAAAATG9nRnVsbAIMAAAATG9nTWFsZm9ybWVkAg4AAABDb250cmFjdFBhdXNlZAITAAAASW52b2tlQ29udHJhY3RFcnJvcgITAAAASW52b2tlVHJhbnNmZXJFcnJvcgIaAAAARmFpbGVkVXBncmFkZU1pc3NpbmdNb2R1bGUCHAAAAEZhaWxlZFVwZ3JhZGVNaXNzaW5nQ29udHJhY3QCJQAAAEZhaWxlZFVwZ3JhZGVVbnN1cHBvcnRlZE1vZHVsZVZlcnNpb24CDgAAAHNldE1ldGFkYXRhVXJsBBQAAgAAAAMAAAB1cmwWAgQAAABoYXNoFQIAAAAEAAAATm9uZQIEAAAAU29tZQEBAAAAEyAAAAACFQQAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCBgAAAEN1c3RvbQEBAAAAFQkAAAALAAAAUGFyc2VQYXJhbXMCBwAAAExvZ0Z1bGwCDAAAAExvZ01hbGZvcm1lZAIOAAAAQ29udHJhY3RQYXVzZWQCEwAAAEludm9rZUNvbnRyYWN0RXJyb3ICEwAAAEludm9rZVRyYW5zZmVyRXJyb3ICGgAAAEZhaWxlZFVwZ3JhZGVNaXNzaW5nTW9kdWxlAhwAAABGYWlsZWRVcGdyYWRlTWlzc2luZ0NvbnRyYWN0AiUAAABGYWlsZWRVcGdyYWRlVW5zdXBwb3J0ZWRNb2R1bGVWZXJzaW9uAgkAAABzZXRQYXVzZWQEFAABAAAABgAAAHBhdXNlZAEVBAAAAA4AAABJbnZhbGlkVG9rZW5JZAIRAAAASW5zdWZmaWNpZW50RnVuZHMCDAAAAFVuYXV0aG9yaXplZAIGAAAAQ3VzdG9tAQEAAAAVCQAAAAsAAABQYXJzZVBhcmFtcwIHAAAATG9nRnVsbAIMAAAATG9nTWFsZm9ybWVkAg4AAABDb250cmFjdFBhdXNlZAITAAAASW52b2tlQ29udHJhY3RFcnJvcgITAAAASW52b2tlVHJhbnNmZXJFcnJvcgIaAAAARmFpbGVkVXBncmFkZU1pc3NpbmdNb2R1bGUCHAAAAEZhaWxlZFVwZ3JhZGVNaXNzaW5nQ29udHJhY3QCJQAAAEZhaWxlZFVwZ3JhZGVVbnN1cHBvcnRlZE1vZHVsZVZlcnNpb24CCAAAAHN1cHBvcnRzBhABFgAQARUDAAAACQAAAE5vU3VwcG9ydAIHAAAAU3VwcG9ydAIJAAAAU3VwcG9ydEJ5AQEAAAAQAAwVBAAAAA4AAABJbnZhbGlkVG9rZW5JZAIRAAAASW5zdWZmaWNpZW50RnVuZHMCDAAAAFVuYXV0aG9yaXplZAIGAAAAQ3VzdG9tAQEAAAAVCQAAAAsAAABQYXJzZVBhcmFtcwIHAAAATG9nRnVsbAIMAAAATG9nTWFsZm9ybWVkAg4AAABDb250cmFjdFBhdXNlZAITAAAASW52b2tlQ29udHJhY3RFcnJvcgITAAAASW52b2tlVHJhbnNmZXJFcnJvcgIaAAAARmFpbGVkVXBncmFkZU1pc3NpbmdNb2R1bGUCHAAAAEZhaWxlZFVwZ3JhZGVNaXNzaW5nQ29udHJhY3QCJQAAAEZhaWxlZFVwZ3JhZGVVbnN1cHBvcnRlZE1vZHVsZVZlcnNpb24CDQAAAHRva2VuTWV0YWRhdGEGEAEdABABFAACAAAAAwAAAHVybBYBBAAAAGhhc2gVAgAAAAQAAABOb25lAgQAAABTb21lAQEAAAATIAAAAAIVBAAAAA4AAABJbnZhbGlkVG9rZW5JZAIRAAAASW5zdWZmaWNpZW50RnVuZHMCDAAAAFVuYXV0aG9yaXplZAIGAAAAQ3VzdG9tAQEAAAAVCQAAAAsAAABQYXJzZVBhcmFtcwIHAAAATG9nRnVsbAIMAAAATG9nTWFsZm9ybWVkAg4AAABDb250cmFjdFBhdXNlZAITAAAASW52b2tlQ29udHJhY3RFcnJvcgITAAAASW52b2tlVHJhbnNmZXJFcnJvcgIaAAAARmFpbGVkVXBncmFkZU1pc3NpbmdNb2R1bGUCHAAAAEZhaWxlZFVwZ3JhZGVNaXNzaW5nQ29udHJhY3QCJQAAAEZhaWxlZFVwZ3JhZGVVbnN1cHBvcnRlZE1vZHVsZVZlcnNpb24CCAAAAHRyYW5zZmVyBBABFAAFAAAACAAAAHRva2VuX2lkHQAGAAAAYW1vdW50GyUAAAAEAAAAZnJvbRUCAAAABwAAAEFjY291bnQBAQAAAAsIAAAAQ29udHJhY3QBAQAAAAwCAAAAdG8VAgAAAAcAAABBY2NvdW50AQEAAAALCAAAAENvbnRyYWN0AQIAAAAMFgEEAAAAZGF0YR0BFQQAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCBgAAAEN1c3RvbQEBAAAAFQkAAAALAAAAUGFyc2VQYXJhbXMCBwAAAExvZ0Z1bGwCDAAAAExvZ01hbGZvcm1lZAIOAAAAQ29udHJhY3RQYXVzZWQCEwAAAEludm9rZUNvbnRyYWN0RXJyb3ICEwAAAEludm9rZVRyYW5zZmVyRXJyb3ICGgAAAEZhaWxlZFVwZ3JhZGVNaXNzaW5nTW9kdWxlAhwAAABGYWlsZWRVcGdyYWRlTWlzc2luZ0NvbnRyYWN0AiUAAABGYWlsZWRVcGdyYWRlVW5zdXBwb3J0ZWRNb2R1bGVWZXJzaW9uAgsAAAB1cGRhdGVBZG1pbgQVAgAAAAcAAABBY2NvdW50AQEAAAALCAAAAENvbnRyYWN0AQEAAAAMFQQAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCBgAAAEN1c3RvbQEBAAAAFQkAAAALAAAAUGFyc2VQYXJhbXMCBwAAAExvZ0Z1bGwCDAAAAExvZ01hbGZvcm1lZAIOAAAAQ29udHJhY3RQYXVzZWQCEwAAAEludm9rZUNvbnRyYWN0RXJyb3ICEwAAAEludm9rZVRyYW5zZmVyRXJyb3ICGgAAAEZhaWxlZFVwZ3JhZGVNaXNzaW5nTW9kdWxlAhwAAABGYWlsZWRVcGdyYWRlTWlzc2luZ0NvbnRyYWN0AiUAAABGYWlsZWRVcGdyYWRlVW5zdXBwb3J0ZWRNb2R1bGVWZXJzaW9uAg4AAAB1cGRhdGVPcGVyYXRvcgQQARQAAgAAAAYAAAB1cGRhdGUVAgAAAAYAAABSZW1vdmUCAwAAAEFkZAIIAAAAb3BlcmF0b3IVAgAAAAcAAABBY2NvdW50AQEAAAALCAAAAENvbnRyYWN0AQEAAAAMFQQAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCBgAAAEN1c3RvbQEBAAAAFQkAAAALAAAAUGFyc2VQYXJhbXMCBwAAAExvZ0Z1bGwCDAAAAExvZ01hbGZvcm1lZAIOAAAAQ29udHJhY3RQYXVzZWQCEwAAAEludm9rZUNvbnRyYWN0RXJyb3ICEwAAAEludm9rZVRyYW5zZmVyRXJyb3ICGgAAAEZhaWxlZFVwZ3JhZGVNaXNzaW5nTW9kdWxlAhwAAABGYWlsZWRVcGdyYWRlTWlzc2luZ0NvbnRyYWN0AiUAAABGYWlsZWRVcGdyYWRlVW5zdXBwb3J0ZWRNb2R1bGVWZXJzaW9uAgcAAAB1cGdyYWRlBBQAAgAAAAYAAABtb2R1bGUeIAAAAAcAAABtaWdyYXRlFQIAAAAEAAAATm9uZQIEAAAAU29tZQEBAAAADxYBHQEVBAAAAA4AAABJbnZhbGlkVG9rZW5JZAIRAAAASW5zdWZmaWNpZW50RnVuZHMCDAAAAFVuYXV0aG9yaXplZAIGAAAAQ3VzdG9tAQEAAAAVCQAAAAsAAABQYXJzZVBhcmFtcwIHAAAATG9nRnVsbAIMAAAATG9nTWFsZm9ybWVkAg4AAABDb250cmFjdFBhdXNlZAITAAAASW52b2tlQ29udHJhY3RFcnJvcgITAAAASW52b2tlVHJhbnNmZXJFcnJvcgIaAAAARmFpbGVkVXBncmFkZU1pc3NpbmdNb2R1bGUCHAAAAEZhaWxlZFVwZ3JhZGVNaXNzaW5nQ29udHJhY3QCJQAAAEZhaWxlZFVwZ3JhZGVVbnN1cHBvcnRlZE1vZHVsZVZlcnNpb24CBAAAAHZpZXcFFAADAAAABQAAAGFkbWluFQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADAYAAABwYXVzZWQBDAAAAG1ldGFkYXRhX3VybBQAAgAAAAMAAAB1cmwWAQQAAABoYXNoFQIAAAAEAAAATm9uZQIEAAAAU29tZQEBAAAAEyAAAAACFQQAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCBgAAAEN1c3RvbQEBAAAAFQkAAAALAAAAUGFyc2VQYXJhbXMCBwAAAExvZ0Z1bGwCDAAAAExvZ01hbGZvcm1lZAIOAAAAQ29udHJhY3RQYXVzZWQCEwAAAEludm9rZUNvbnRyYWN0RXJyb3ICEwAAAEludm9rZVRyYW5zZmVyRXJyb3ICGgAAAEZhaWxlZFVwZ3JhZGVNaXNzaW5nTW9kdWxlAhwAAABGYWlsZWRVcGdyYWRlTWlzc2luZ0NvbnRyYWN0AiUAAABGYWlsZWRVcGdyYWRlVW5zdXBwb3J0ZWRNb2R1bGVWZXJzaW9uAgEfBgAAAAAIAAAATmV3QWRtaW4AAQAAAAkAAABuZXdfYWRtaW4VAgAAAAcAAABBY2NvdW50AQEAAAALCAAAAENvbnRyYWN0AQEAAAAM+w0AAABUb2tlbk1ldGFkYXRhAAIAAAAIAAAAdG9rZW5faWQdAAwAAABtZXRhZGF0YV91cmwUAAIAAAADAAAAdXJsFgEEAAAAaGFzaBUCAAAABAAAAE5vbmUCBAAAAFNvbWUBAQAAABMgAAAAAvwOAAAAVXBkYXRlT3BlcmF0b3IAAwAAAAYAAAB1cGRhdGUVAgAAAAYAAABSZW1vdmUCAwAAAEFkZAIFAAAAb3duZXIVAgAAAAcAAABBY2NvdW50AQEAAAALCAAAAENvbnRyYWN0AQEAAAAMCAAAAG9wZXJhdG9yFQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADP0EAAAAQnVybgADAAAACAAAAHRva2VuX2lkHQAGAAAAYW1vdW50GyUAAAAFAAAAb3duZXIVAgAAAAcAAABBY2NvdW50AQEAAAALCAAAAENvbnRyYWN0AQEAAAAM/gQAAABNaW50AAMAAAAIAAAAdG9rZW5faWQdAAYAAABhbW91bnQbJQAAAAUAAABvd25lchUCAAAABwAAAEFjY291bnQBAQAAAAsIAAAAQ29udHJhY3QBAQAAAAz/CAAAAFRyYW5zZmVyAAQAAAAIAAAAdG9rZW5faWQdAAYAAABhbW91bnQbJQAAAAQAAABmcm9tFQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADAIAAAB0bxUCAAAABwAAAEFjY291bnQBAQAAAAsIAAAAQ29udHJhY3QBAQAAAAw",aA={index:Z.index,subindex:Z.subIndex};function ZA(c,n){return c.returnValue?m.deserializeReceiveReturnValue(m.toBuffer(c.returnValue,"hex"),m.toBuffer(X,"base64"),Z.name,n):"this is undefined"}async function lA(c,n){const l=[{address:{Account:[n]},token_id:Z.token_id}],F={contract:aA,method:`${Z.name}.${Z.method_bal_of}`,parameter:m.serializeUpdateContractParameters(Z.name,Z.method_bal_of,l,m.toBuffer(X,"base64"),1)},a=await L(c,F);if((a==null?void 0:a.tag)==="success"){const o=ZA(a,Z.method_bal_of);return console.log(`balance of result: ${JSON.stringify(o)}`),o}a&&console.error(new Error(JSON.stringify(a))),console.error(new Error("Invoke Result is undefined please check `bal of` invoke"))}const{Text:b,Link:BA}=tA,{Option:I}=y;function QA(){const{connection:c,account:n,network:l}=j();t.useState();const[F,a]=t.useState(""),[s,o]=t.useState(),[u,B]=t.useState(),[rA,Q]=t.useState(""),[g,p]=t.useState(0),[x,h]=t.useState(!1),[N,i]=t.useState(!1),[G,Y]=t.useState(),H=D(),[k,z]=t.useState();t.useEffect(()=>{(!c||!n)&&(console.log("redirect"),H("/CONCORDIUM_TASK_4/")),c&&n&&!N&&(lA(c,n).then(e=>{z(e)}).catch(e=>{B(void 0),Q(e)}),P(c).then(e=>{B(e),Q("")}).catch(e=>{B(void 0),Q(e)}),$(c).then(e=>{o(e),a("")}).catch(e=>{console.log(e),o(void 0),a(e)}))},[c,n,N,G]);function T(e){if(c&&n){i(!0);let r=new Date(Date.now());const C=`new richest ${r.toLocaleDateString()} Time ${r.toLocaleTimeString()} `;q(c,n,e,C).then(W=>{Y(W)}).catch(W=>{console.error(W),Y(void 0),i(!1)})}else console.error(new Error("Not Connected to wallet"))}function U(){i(!1)}function f(e){h(!0);let r=e.amount.value;e.amount.currency==="ccd"&&(r*=1e6),p(r)}const[V]=d.useForm(),S={amount:{currency:"ccd",value:0,validated:!1}};return A.jsx(t.Suspense,{fallback:A.jsx(w,{}),children:s&&u&&n?A.jsxs(R,{direction:"vertical",size:"middle",children:[A.jsx(K,{message:"Become the Richest",description:A.jsxs(R,{direction:"vertical",children:[A.jsx(b,{children:n===s.richest_account.Some[0]?`You are the richest with ${Number(u.amount.microCcdAmount)/1e6} CCD in contract`:`${s.richest_account.Some[0]} is the richest with ${Number(u.amount.microCcdAmount)/1e6} CCD in contract. Add ${s.minimum_raise} to become the richest !`}),A.jsx(b,{children:"Please don't pay insane amounts so other user can test this contract without spending too much!"})]}),type:"info",showIcon:!0}),A.jsxs("p",{children:["account token A bal: ",k," TOKA "]}),c&&G&&A.jsx(M,{hash:G,connection:c,callback:U}),A.jsx(O,{content:sA(V.getFieldValue(["amount","value"]),V.getFieldValue(["amount","currency"])),confirm:()=>{h(!1),T(g)},cancel:()=>{h(!1)},title:"Become the richest",showConfirmModal:x}),A.jsx(AA,{children:A.jsxs(d,{form:V,layout:"vertical",onFinish:f,size:"large",colon:!0,initialValues:S,title:"Amount to become the richest",requiredMark:!0,style:{maxWidth:600},children:[A.jsx(d.Item,{name:["amount","validated"],label:"Amount",dependencies:[["amount","currency"],["amount","value"]],rules:[({getFieldValue:e})=>({validator(r,C){const W=e(["amount","currency"]),v=e(["amount","value"]),E=Number(s.minimum_raise)+Number(u.amount.microCcdAmount)/1e6;switch(W){case"microCcd":const J=E*1e6;return v>J?(V.setFieldsValue({amount:{validated:!0}}),Promise.resolve("microCdd Amount Ok")):Promise.reject(new Error(`Must be greater than ${J} microCcd @ 1 cent per CCD`));case"ccd":return v>E?(V.setFieldsValue({amount:{validated:!0}}),Promise.resolve("microCdd Amount Ok")):Promise.reject(new Error(`Must be greater than ${E} Ccd @ 1 cent per CCD`));default:return Promise.reject(new Error("Input correct amount and currency"))}}})],children:A.jsxs(eA.Group,{compact:!0,children:[A.jsx(d.Item,{name:["amount","value"],dependencies:[["amount","currency"],["amount","validation"]],noStyle:!0,rules:[{required:!0,message:"Value is required"}],children:A.jsx(cA,{style:{width:"50%"},placeholder:"Enter Ammount"})}),A.jsx(d.Item,{name:["amount","currency"],dependencies:[["amount","value"],["amount","validation"]],noStyle:!0,rules:[{required:!0,message:"Currency is required",validateTrigger:"onChange"}],children:A.jsxs(y,{style:{width:100},children:[A.jsx(I,{value:"ccd",children:"CCD"}),A.jsx(I,{value:"microCcd",children:"μCCD"})]})})]})}),A.jsx(d.Item,{children:A.jsx(nA,{type:"primary",htmlType:"submit",children:"Pay to become the richest!"})})]})})]}):n?A.jsx(w,{}):A.jsx(_,{network:l==null?void 0:l.name})})}function sA(c,n){return A.jsxs(R,{direction:"vertical",children:[A.jsx(b,{children:"Please don't pay insane amounts so other user can test this contract without spending too much!"}),A.jsxs(b,{type:"danger",children:["You are about to spend ",c," ",n," to become the richest is it OK?"]})]})}export{QA as TokenAPage};
