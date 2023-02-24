
import { WalletConnection, withJsonRpcClient } from '@concordium/wallet-connectors';

import {
    AccountTransactionType, CcdAmount, ContractAddress, ContractContext, deserializeReceiveReturnValue, InstanceInfo, InvokeContractResult,
    InvokeContractSuccessResult, serializeUpdateContractParameters,
    toBuffer, TransactionStatus
} from '@concordium/web-sdk';
import { CONTRACT_DATA, MAX_CONTRACT_EXECUTION_ENERGY } from "../config/contract";
import { StateView } from "./contractTypes";
import schB64 from './module/schema.b64?raw';

export const contractAddress: ContractAddress = {
    index: CONTRACT_DATA.index,
    subindex: CONTRACT_DATA.subIndex
}

const contractCtxView: ContractContext = {
    contract: contractAddress,
    method: "become_the_richest.view",
}

export async function getContractInfo(connection: WalletConnection,): Promise<InstanceInfo | undefined> {
    const res = await getContractInstanceInfo(connection, contractAddress);
    return res
}

async function getContractInstanceInfo(connection: WalletConnection,
    contractAddress: ContractAddress): Promise<InstanceInfo | undefined> {
    return withJsonRpcClient(connection, (rpc) => rpc.getInstanceInfo(contractAddress))
        .then((res) => {
            return res;
        })
        .catch((err) => {
            console.error(err)
            return undefined;
        });
}

export async function invokeStateView(connection: WalletConnection): Promise<StateView | undefined> {
    const invkRes = await invokeContract(connection, contractCtxView)
    if (invkRes?.tag === "success") {
        let successRes: InvokeContractSuccessResult = invkRes
        return getViewAsObject(successRes)
    }
    if (invkRes) console.error(new Error(JSON.stringify(invkRes)))
    console.error(new Error("Invoke Result is undefined please check `invokeStateView`"))
}

async function invokeContract(connection: WalletConnection, contractCtx: ContractContext)
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

export function getInvkResultsAsJson(invkResult: InvokeContractSuccessResult, methodName: string) {
    if (invkResult.returnValue) {
        const returnValues = deserializeReceiveReturnValue(
            toBuffer(invkResult.returnValue, 'hex'),
            toBuffer(schB64, 'base64'),
            CONTRACT_DATA.name,
            methodName
        );
        return returnValues;
    }
    return "this is undefined";
}

export const getViewAsObject = (invkResult: InvokeContractSuccessResult) => {
    const res: StateView = getInvkResultsAsJson(invkResult, "view")
    res.minimum_raise++
    return res;
}


// Update stuff 

export async function updateBecomeTheRichestMethod(connection: WalletConnection,
    account: string,
    amountMicroCcd: number,
    msg: string): Promise<string | undefined> {

    const method = "become_the_richest"
    const params = serializeUpdateContractParameters(
        CONTRACT_DATA.name,
        method,
        msg,
        toBuffer(schB64, 'base64'),
        1
    );

    const amountMicroInCCD: CcdAmount = new CcdAmount(BigInt(amountMicroCcd))
    //await withJsonRpcClient(connection, (rpc) => { rpc})
    const updateInvokeResult = await withJsonRpcClient(connection, (rpc) =>
        rpc.invokeContract({
            method: `${CONTRACT_DATA.name}.${method}`,
            contract: { index: CONTRACT_DATA.index, subindex: CONTRACT_DATA.subIndex },
            parameter: params,
            amount: amountMicroInCCD,
            energy: MAX_CONTRACT_EXECUTION_ENERGY
        }).then((res) => {
            if (!res || res.tag === 'failure') {
                console.error("update =====>\n", res)
                return undefined
                //}
                // ? maybe nothing ?
                // The return value is an array. The value stored in the array starts at position 4 of the return value.
                //if (res && res.tag === "success" && res.returnValue) {
                //    console.log("success ====> \n", res)
                //    return BigInt(leb.decodeULEB128(toBuffer(res.returnValue.slice(4), 'hex'))[0]);
            } else {
                console.log("update =====>\n", res)
                return res;

            }
        }
        ).catch(
            (err) => {
                console.error(err)
                return undefined
            }
        ));

    if (updateInvokeResult) {
        console.log("invoke test ok! lets go to a real transaction")
        return connection.signAndSendTransaction(
            account,
            AccountTransactionType.Update,
            {
                amount: amountMicroInCCD,
                address: contractAddress,
                receiveName: CONTRACT_DATA.name + "." +  method,
                maxContractExecutionEnergy: MAX_CONTRACT_EXECUTION_ENERGY,
            },
            // @ts-expect-error
            msg, // this is not an error since param is only a string no keys
            schB64,
            1
        )
    }
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



