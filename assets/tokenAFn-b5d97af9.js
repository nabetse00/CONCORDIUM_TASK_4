import{j as l}from"./index-81a7a782.js";import{b as R,r as B,e as c}from"./wallet-0d6fe0b8.js";import{v as F,T as Y}from"./ui-828740c4.js";import{e as J,f as w,I as g,g as I}from"./icons-bd61ed92.js";const x={name:"ccd_swap",address:"a3e503257095bf2c65d61a8536adab95a2a4e49dcb5153ccfe5ffb23881faae7",index:3430n,subIndex:0n,amount:0n,sender:"4Aw1taZUgVx4C8EEhsGWHcAbQ8rj5EiR3QQAFjhkCni3CeNSeu",token_id:"",method_bal_of:"balanceOf",method_get_tokens:"get_token_a",method_op_of:"operatorOf",method_update_op:"updateOperator",token_a_id:"0100000000000000",method_add_liquidity:"add_liquidity",method_rm_liquidity:"remove_liq",method_swap_to_ccd:"swap_token_a_for_ccd",method_swap_to_token_a:"swap_ccd_for_tokenA"},Q={name:"ccd_swap",address:"a3e503257095bf2c65d61a8536adab95a2a4e49dcb5153ccfe5ffb23881faae7",index:3430n,subIndex:0n,amount:0n,sender:"4Aw1taZUgVx4C8EEhsGWHcAbQ8rj5EiR3QQAFjhkCni3CeNSeu"},i=BigInt(1e4),H=BigInt(5e4),A={name:"cis2_token_a",address:"6ff6fe2e33743b99a5e864d477841e9acfb45e12eb0bd8597980bac7cbd936c4",token_id:"0100000000000000",index:3389n,subIndex:0n,amount:0n,sender:"4Aw1taZUgVx4C8EEhsGWHcAbQ8rj5EiR3QQAFjhkCni3CeNSeu",method_bal_of:"balanceOf",method_get_tokens:"get_token_a",method_op_of:"operatorOf",method_update_op:"updateOperator"};async function h(e,d){return R.withJsonRpcClient(e,t=>t.invokeContract(d)).then(t=>t).catch(t=>{console.error(t)})}async function X(e,d){return await R.withJsonRpcClient(e,s=>s.getTransactionStatus(d)).then(s=>{if(s)return s;console.error(new Error("status is empty ? No internet ?"))}).catch(s=>{console.error(s)})}const{Panel:v}=F;function _(e){const[d,t]=B.useState(!0),[s,n]=B.useState(!1),[a,b]=B.useState([{label:new Date(Date.now()).toLocaleString(),children:`Transaction [${e.hash}] sent`,color:"red"}]),C=e.timeoutMilisec?e.timeoutMilisec:500;function E(o){if(o){if(a.length>0&&a[a.length-1].children!==o.children){b(r=>[...r,o]);return}if(a.length==0){b(r=>[...r,o]);return}if(a.length>0&&a[a.length-1].children===o.children){b([...a]);return}}}function G(o){if(o){const r=new Date(Date.now()).toLocaleString();let Z,m,u;switch(o.status.toString()){case c.TransactionStatusEnum.Committed:Z="Transaction committed",m=l.jsx(I,{}),u="grey";break;case c.TransactionStatusEnum.Received:Z="Transaction recieved",u="blue",m=l.jsx(g,{});break;case c.TransactionStatusEnum.Finalized:console.log("from txn Status finish"),Z="Transaction Finalized",u="green",m=l.jsx(w,{});break;default:console.log("from txn Status ????"),Z="Transaction is `unknown` possible error",u="red",m=l.jsx(J,{});break}return{label:r,children:Z,dot:m,color:u}}}return B.useEffect(()=>{let o,r;return s||X(e.connection,e.hash).then(Z=>{r=Z,Z&&Z.status===c.TransactionStatusEnum.Finalized&&(E(G(r)),t(!1),n(!0),e.callback()),t(!1),Z&&Z.status!==c.TransactionStatusEnum.Finalized&&t(!0)}).catch(Z=>{console.error(Z),t(!1)}),d&&(o=setTimeout(()=>E(G(r)),C)),()=>{clearTimeout(o)}},[e,a,d]),l.jsx(F,{defaultActiveKey:["1"],children:l.jsx(v,{header:"Transaction status",children:l.jsx(Y,{mode:"left",items:a,pending:d})},1)})}const W="//8DAQAAAAwAAABjaXMyX3Rva2VuX2EBABQAAgAAAAMAAAB1cmwWAgQAAABoYXNoFQIAAAAEAAAATm9uZQIEAAAAU29tZQEBAAAAEyAAAAACDQAAAAkAAABiYWxhbmNlT2YGEAEUAAIAAAAIAAAAdG9rZW5faWQdAAcAAABhZGRyZXNzFQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADBABGyUAAAAVBAAAAA4AAABJbnZhbGlkVG9rZW5JZAIRAAAASW5zdWZmaWNpZW50RnVuZHMCDAAAAFVuYXV0aG9yaXplZAIGAAAAQ3VzdG9tAQEAAAAVCQAAAAsAAABQYXJzZVBhcmFtcwIHAAAATG9nRnVsbAIMAAAATG9nTWFsZm9ybWVkAg4AAABDb250cmFjdFBhdXNlZAITAAAASW52b2tlQ29udHJhY3RFcnJvcgITAAAASW52b2tlVHJhbnNmZXJFcnJvcgIaAAAARmFpbGVkVXBncmFkZU1pc3NpbmdNb2R1bGUCHAAAAEZhaWxlZFVwZ3JhZGVNaXNzaW5nQ29udHJhY3QCJQAAAEZhaWxlZFVwZ3JhZGVVbnN1cHBvcnRlZE1vZHVsZVZlcnNpb24CCwAAAGdldF90b2tlbl9hBBQAAwAAAAIAAAB0bxUCAAAABwAAAEFjY291bnQBAQAAAAsIAAAAQ29udHJhY3QBAgAAAAwWAQYAAABhbW91bnQKBAAAAGRhdGEdARUEAAAADgAAAEludmFsaWRUb2tlbklkAhEAAABJbnN1ZmZpY2llbnRGdW5kcwIMAAAAVW5hdXRob3JpemVkAgYAAABDdXN0b20BAQAAABUJAAAACwAAAFBhcnNlUGFyYW1zAgcAAABMb2dGdWxsAgwAAABMb2dNYWxmb3JtZWQCDgAAAENvbnRyYWN0UGF1c2VkAhMAAABJbnZva2VDb250cmFjdEVycm9yAhMAAABJbnZva2VUcmFuc2ZlckVycm9yAhoAAABGYWlsZWRVcGdyYWRlTWlzc2luZ01vZHVsZQIcAAAARmFpbGVkVXBncmFkZU1pc3NpbmdDb250cmFjdAIlAAAARmFpbGVkVXBncmFkZVVuc3VwcG9ydGVkTW9kdWxlVmVyc2lvbgIKAAAAb3BlcmF0b3JPZgYQARQAAgAAAAUAAABvd25lchUCAAAABwAAAEFjY291bnQBAQAAAAsIAAAAQ29udHJhY3QBAQAAAAwHAAAAYWRkcmVzcxUCAAAABwAAAEFjY291bnQBAQAAAAsIAAAAQ29udHJhY3QBAQAAAAwQAQEVBAAAAA4AAABJbnZhbGlkVG9rZW5JZAIRAAAASW5zdWZmaWNpZW50RnVuZHMCDAAAAFVuYXV0aG9yaXplZAIGAAAAQ3VzdG9tAQEAAAAVCQAAAAsAAABQYXJzZVBhcmFtcwIHAAAATG9nRnVsbAIMAAAATG9nTWFsZm9ybWVkAg4AAABDb250cmFjdFBhdXNlZAITAAAASW52b2tlQ29udHJhY3RFcnJvcgITAAAASW52b2tlVHJhbnNmZXJFcnJvcgIaAAAARmFpbGVkVXBncmFkZU1pc3NpbmdNb2R1bGUCHAAAAEZhaWxlZFVwZ3JhZGVNaXNzaW5nQ29udHJhY3QCJQAAAEZhaWxlZFVwZ3JhZGVVbnN1cHBvcnRlZE1vZHVsZVZlcnNpb24CDwAAAHNldEltcGxlbWVudG9ycwQUAAIAAAACAAAAaWQWAAwAAABpbXBsZW1lbnRvcnMQAgwVBAAAAA4AAABJbnZhbGlkVG9rZW5JZAIRAAAASW5zdWZmaWNpZW50RnVuZHMCDAAAAFVuYXV0aG9yaXplZAIGAAAAQ3VzdG9tAQEAAAAVCQAAAAsAAABQYXJzZVBhcmFtcwIHAAAATG9nRnVsbAIMAAAATG9nTWFsZm9ybWVkAg4AAABDb250cmFjdFBhdXNlZAITAAAASW52b2tlQ29udHJhY3RFcnJvcgITAAAASW52b2tlVHJhbnNmZXJFcnJvcgIaAAAARmFpbGVkVXBncmFkZU1pc3NpbmdNb2R1bGUCHAAAAEZhaWxlZFVwZ3JhZGVNaXNzaW5nQ29udHJhY3QCJQAAAEZhaWxlZFVwZ3JhZGVVbnN1cHBvcnRlZE1vZHVsZVZlcnNpb24CDgAAAHNldE1ldGFkYXRhVXJsBBQAAgAAAAMAAAB1cmwWAgQAAABoYXNoFQIAAAAEAAAATm9uZQIEAAAAU29tZQEBAAAAEyAAAAACFQQAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCBgAAAEN1c3RvbQEBAAAAFQkAAAALAAAAUGFyc2VQYXJhbXMCBwAAAExvZ0Z1bGwCDAAAAExvZ01hbGZvcm1lZAIOAAAAQ29udHJhY3RQYXVzZWQCEwAAAEludm9rZUNvbnRyYWN0RXJyb3ICEwAAAEludm9rZVRyYW5zZmVyRXJyb3ICGgAAAEZhaWxlZFVwZ3JhZGVNaXNzaW5nTW9kdWxlAhwAAABGYWlsZWRVcGdyYWRlTWlzc2luZ0NvbnRyYWN0AiUAAABGYWlsZWRVcGdyYWRlVW5zdXBwb3J0ZWRNb2R1bGVWZXJzaW9uAgkAAABzZXRQYXVzZWQEFAABAAAABgAAAHBhdXNlZAEVBAAAAA4AAABJbnZhbGlkVG9rZW5JZAIRAAAASW5zdWZmaWNpZW50RnVuZHMCDAAAAFVuYXV0aG9yaXplZAIGAAAAQ3VzdG9tAQEAAAAVCQAAAAsAAABQYXJzZVBhcmFtcwIHAAAATG9nRnVsbAIMAAAATG9nTWFsZm9ybWVkAg4AAABDb250cmFjdFBhdXNlZAITAAAASW52b2tlQ29udHJhY3RFcnJvcgITAAAASW52b2tlVHJhbnNmZXJFcnJvcgIaAAAARmFpbGVkVXBncmFkZU1pc3NpbmdNb2R1bGUCHAAAAEZhaWxlZFVwZ3JhZGVNaXNzaW5nQ29udHJhY3QCJQAAAEZhaWxlZFVwZ3JhZGVVbnN1cHBvcnRlZE1vZHVsZVZlcnNpb24CCAAAAHN1cHBvcnRzBhABFgAQARUDAAAACQAAAE5vU3VwcG9ydAIHAAAAU3VwcG9ydAIJAAAAU3VwcG9ydEJ5AQEAAAAQAAwVBAAAAA4AAABJbnZhbGlkVG9rZW5JZAIRAAAASW5zdWZmaWNpZW50RnVuZHMCDAAAAFVuYXV0aG9yaXplZAIGAAAAQ3VzdG9tAQEAAAAVCQAAAAsAAABQYXJzZVBhcmFtcwIHAAAATG9nRnVsbAIMAAAATG9nTWFsZm9ybWVkAg4AAABDb250cmFjdFBhdXNlZAITAAAASW52b2tlQ29udHJhY3RFcnJvcgITAAAASW52b2tlVHJhbnNmZXJFcnJvcgIaAAAARmFpbGVkVXBncmFkZU1pc3NpbmdNb2R1bGUCHAAAAEZhaWxlZFVwZ3JhZGVNaXNzaW5nQ29udHJhY3QCJQAAAEZhaWxlZFVwZ3JhZGVVbnN1cHBvcnRlZE1vZHVsZVZlcnNpb24CDQAAAHRva2VuTWV0YWRhdGEGEAEdABABFAACAAAAAwAAAHVybBYBBAAAAGhhc2gVAgAAAAQAAABOb25lAgQAAABTb21lAQEAAAATIAAAAAIVBAAAAA4AAABJbnZhbGlkVG9rZW5JZAIRAAAASW5zdWZmaWNpZW50RnVuZHMCDAAAAFVuYXV0aG9yaXplZAIGAAAAQ3VzdG9tAQEAAAAVCQAAAAsAAABQYXJzZVBhcmFtcwIHAAAATG9nRnVsbAIMAAAATG9nTWFsZm9ybWVkAg4AAABDb250cmFjdFBhdXNlZAITAAAASW52b2tlQ29udHJhY3RFcnJvcgITAAAASW52b2tlVHJhbnNmZXJFcnJvcgIaAAAARmFpbGVkVXBncmFkZU1pc3NpbmdNb2R1bGUCHAAAAEZhaWxlZFVwZ3JhZGVNaXNzaW5nQ29udHJhY3QCJQAAAEZhaWxlZFVwZ3JhZGVVbnN1cHBvcnRlZE1vZHVsZVZlcnNpb24CCAAAAHRyYW5zZmVyBBABFAAFAAAACAAAAHRva2VuX2lkHQAGAAAAYW1vdW50GyUAAAAEAAAAZnJvbRUCAAAABwAAAEFjY291bnQBAQAAAAsIAAAAQ29udHJhY3QBAQAAAAwCAAAAdG8VAgAAAAcAAABBY2NvdW50AQEAAAALCAAAAENvbnRyYWN0AQIAAAAMFgEEAAAAZGF0YR0BFQQAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCBgAAAEN1c3RvbQEBAAAAFQkAAAALAAAAUGFyc2VQYXJhbXMCBwAAAExvZ0Z1bGwCDAAAAExvZ01hbGZvcm1lZAIOAAAAQ29udHJhY3RQYXVzZWQCEwAAAEludm9rZUNvbnRyYWN0RXJyb3ICEwAAAEludm9rZVRyYW5zZmVyRXJyb3ICGgAAAEZhaWxlZFVwZ3JhZGVNaXNzaW5nTW9kdWxlAhwAAABGYWlsZWRVcGdyYWRlTWlzc2luZ0NvbnRyYWN0AiUAAABGYWlsZWRVcGdyYWRlVW5zdXBwb3J0ZWRNb2R1bGVWZXJzaW9uAgsAAAB1cGRhdGVBZG1pbgQVAgAAAAcAAABBY2NvdW50AQEAAAALCAAAAENvbnRyYWN0AQEAAAAMFQQAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCBgAAAEN1c3RvbQEBAAAAFQkAAAALAAAAUGFyc2VQYXJhbXMCBwAAAExvZ0Z1bGwCDAAAAExvZ01hbGZvcm1lZAIOAAAAQ29udHJhY3RQYXVzZWQCEwAAAEludm9rZUNvbnRyYWN0RXJyb3ICEwAAAEludm9rZVRyYW5zZmVyRXJyb3ICGgAAAEZhaWxlZFVwZ3JhZGVNaXNzaW5nTW9kdWxlAhwAAABGYWlsZWRVcGdyYWRlTWlzc2luZ0NvbnRyYWN0AiUAAABGYWlsZWRVcGdyYWRlVW5zdXBwb3J0ZWRNb2R1bGVWZXJzaW9uAg4AAAB1cGRhdGVPcGVyYXRvcgQQARQAAgAAAAYAAAB1cGRhdGUVAgAAAAYAAABSZW1vdmUCAwAAAEFkZAIIAAAAb3BlcmF0b3IVAgAAAAcAAABBY2NvdW50AQEAAAALCAAAAENvbnRyYWN0AQEAAAAMFQQAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCBgAAAEN1c3RvbQEBAAAAFQkAAAALAAAAUGFyc2VQYXJhbXMCBwAAAExvZ0Z1bGwCDAAAAExvZ01hbGZvcm1lZAIOAAAAQ29udHJhY3RQYXVzZWQCEwAAAEludm9rZUNvbnRyYWN0RXJyb3ICEwAAAEludm9rZVRyYW5zZmVyRXJyb3ICGgAAAEZhaWxlZFVwZ3JhZGVNaXNzaW5nTW9kdWxlAhwAAABGYWlsZWRVcGdyYWRlTWlzc2luZ0NvbnRyYWN0AiUAAABGYWlsZWRVcGdyYWRlVW5zdXBwb3J0ZWRNb2R1bGVWZXJzaW9uAgcAAAB1cGdyYWRlBBQAAgAAAAYAAABtb2R1bGUeIAAAAAcAAABtaWdyYXRlFQIAAAAEAAAATm9uZQIEAAAAU29tZQEBAAAADxYBHQEVBAAAAA4AAABJbnZhbGlkVG9rZW5JZAIRAAAASW5zdWZmaWNpZW50RnVuZHMCDAAAAFVuYXV0aG9yaXplZAIGAAAAQ3VzdG9tAQEAAAAVCQAAAAsAAABQYXJzZVBhcmFtcwIHAAAATG9nRnVsbAIMAAAATG9nTWFsZm9ybWVkAg4AAABDb250cmFjdFBhdXNlZAITAAAASW52b2tlQ29udHJhY3RFcnJvcgITAAAASW52b2tlVHJhbnNmZXJFcnJvcgIaAAAARmFpbGVkVXBncmFkZU1pc3NpbmdNb2R1bGUCHAAAAEZhaWxlZFVwZ3JhZGVNaXNzaW5nQ29udHJhY3QCJQAAAEZhaWxlZFVwZ3JhZGVVbnN1cHBvcnRlZE1vZHVsZVZlcnNpb24CBAAAAHZpZXcFFAADAAAABQAAAGFkbWluFQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADAYAAABwYXVzZWQBDAAAAG1ldGFkYXRhX3VybBQAAgAAAAMAAAB1cmwWAQQAAABoYXNoFQIAAAAEAAAATm9uZQIEAAAAU29tZQEBAAAAEyAAAAACFQQAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCBgAAAEN1c3RvbQEBAAAAFQkAAAALAAAAUGFyc2VQYXJhbXMCBwAAAExvZ0Z1bGwCDAAAAExvZ01hbGZvcm1lZAIOAAAAQ29udHJhY3RQYXVzZWQCEwAAAEludm9rZUNvbnRyYWN0RXJyb3ICEwAAAEludm9rZVRyYW5zZmVyRXJyb3ICGgAAAEZhaWxlZFVwZ3JhZGVNaXNzaW5nTW9kdWxlAhwAAABGYWlsZWRVcGdyYWRlTWlzc2luZ0NvbnRyYWN0AiUAAABGYWlsZWRVcGdyYWRlVW5zdXBwb3J0ZWRNb2R1bGVWZXJzaW9uAgEfBgAAAAAIAAAATmV3QWRtaW4AAQAAAAkAAABuZXdfYWRtaW4VAgAAAAcAAABBY2NvdW50AQEAAAALCAAAAENvbnRyYWN0AQEAAAAM+w0AAABUb2tlbk1ldGFkYXRhAAIAAAAIAAAAdG9rZW5faWQdAAwAAABtZXRhZGF0YV91cmwUAAIAAAADAAAAdXJsFgEEAAAAaGFzaBUCAAAABAAAAE5vbmUCBAAAAFNvbWUBAQAAABMgAAAAAvwOAAAAVXBkYXRlT3BlcmF0b3IAAwAAAAYAAAB1cGRhdGUVAgAAAAYAAABSZW1vdmUCAwAAAEFkZAIFAAAAb3duZXIVAgAAAAcAAABBY2NvdW50AQEAAAALCAAAAENvbnRyYWN0AQEAAAAMCAAAAG9wZXJhdG9yFQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADP0EAAAAQnVybgADAAAACAAAAHRva2VuX2lkHQAGAAAAYW1vdW50GyUAAAAFAAAAb3duZXIVAgAAAAcAAABBY2NvdW50AQEAAAALCAAAAENvbnRyYWN0AQEAAAAM/gQAAABNaW50AAMAAAAIAAAAdG9rZW5faWQdAAYAAABhbW91bnQbJQAAAAUAAABvd25lchUCAAAABwAAAEFjY291bnQBAQAAAAsIAAAAQ29udHJhY3QBAQAAAAz/CAAAAFRyYW5zZmVyAAQAAAAIAAAAdG9rZW5faWQdAAYAAABhbW91bnQbJQAAAAQAAABmcm9tFQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADAIAAAB0bxUCAAAABwAAAEFjY291bnQBAQAAAAsIAAAAQ29udHJhY3QBAQAAAAw",V={index:A.index,subindex:A.subIndex};function N(e,d){return e.returnValue?c.deserializeReceiveReturnValue(c.toBuffer(e.returnValue,"hex"),c.toBuffer(W,"base64"),A.name,d):"this is undefined"}async function z(e,d){const t=[{address:{Account:[d]},token_id:A.token_id}],s={contract:V,method:`${A.name}.${A.method_bal_of}`,parameter:c.serializeUpdateContractParameters(A.name,A.method_bal_of,t,c.toBuffer(W,"base64"),1)},n=await h(e,s);if((n==null?void 0:n.tag)==="success")return N(n,A.method_bal_of);n&&console.error(new Error(JSON.stringify(n))),console.error(new Error("Invoke Result is undefined please check `bal of` invoke"))}async function U(e,d,t){const s={to:{Account:[d]},amount:t.toString(),data:""},n={contract:V,method:`${A.name}.${A.method_get_tokens}`,parameter:c.serializeUpdateContractParameters(A.name,A.method_get_tokens,s,c.toBuffer(W,"base64"),1)},a=await h(e,n);if((a==null?void 0:a.tag)==="success")return e.signAndSendTransaction(d,c.AccountTransactionType.Update,{address:V,amount:new c.CcdAmount(BigInt(0)),receiveName:`${A.name}.${A.method_get_tokens}`,maxContractExecutionEnergy:i},s,W,1);a&&console.error(new Error(JSON.stringify(a)));const b=new Error("Invoke Result is undefined please check `get tokens` invoke");throw console.error(b),b}async function S(e,d){const t=[{update:{Add:[]},operator:{Contract:[{index:Number(Q.index),subindex:Number(Q.subIndex)}]}}],s={contract:V,method:`${A.name}.${A.method_update_op}`,parameter:c.serializeUpdateContractParameters(A.name,A.method_update_op,t,c.toBuffer(W,"base64"),1)},n=await h(e,s);if((n==null?void 0:n.tag)==="success")return console.log("invoke test ok! lets go to a real transaction"),e.signAndSendTransaction(d,c.AccountTransactionType.Update,{address:V,amount:new c.CcdAmount(BigInt(0)),receiveName:`${A.name}.${A.method_update_op}`,maxContractExecutionEnergy:i},t,W,1);n&&console.error(new Error(JSON.stringify(n)));const a=new Error("Invoke Result is undefined please check `update op` invoke");throw console.error(a),a}async function D(e,d){const t=[{owner:{Account:[d]},address:{Contract:[{index:Number(Q.index),subindex:Number(Q.subIndex)}]}}],s={contract:V,method:`${A.name}.${A.method_op_of}`,parameter:c.serializeUpdateContractParameters(A.name,A.method_op_of,t,c.toBuffer(W,"base64"),2),energy:i},n=await h(e,s);if((n==null?void 0:n.tag)==="success")return N(n,A.method_op_of);n&&console.error(new Error(JSON.stringify(n))),console.error(new Error("Invoke Result is undefined please check `update op` invoke"))}export{H as M,x as S,_ as T,D as a,U as b,h as c,z as i,S as u};
