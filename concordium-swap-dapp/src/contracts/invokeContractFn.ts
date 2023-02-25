
import { WalletConnection, withJsonRpcClient } from '@concordium/wallet-connectors';
import { ContractAddress, ContractContext, InstanceInfo, InvokeContractResult, TransactionStatus } from '@concordium/web-sdk';

export async function invokeContract(connection: WalletConnection, contractCtx: ContractContext)
    : Promise<InvokeContractResult | undefined> {
    return withJsonRpcClient(connection, (rpc) =>
        rpc.invokeContract(contractCtx))
        .then((res) => {
            return res
        })
        .catch((err) => {
            console.error(err)
            return undefined
        });
}

export async function getTransactionStatus(connection: WalletConnection, hash: string): Promise<TransactionStatus |undefined>{
    const txnStatus = await withJsonRpcClient(connection, (rpc) =>
        rpc.getTransactionStatus(hash)
        ).then(
            (status) => {
                if(status){
                    //console.log("txn status", status)
                    return status
                }
                console.error(new Error("status is empty ? No internet ?"))
                return undefined
            }
        ).catch(
            (err) => {
                console.error(err)
                return undefined
            }
        )
    return txnStatus
}



