
import { WalletConnection, withJsonRpcClient } from '@concordium/wallet-connectors';

import {
    AccountTransactionType, CcdAmount, ContractAddress, ContractContext, deserializeReceiveReturnValue, InstanceInfo, InvokeContractResult,
    InvokeContractSuccessResult, serializeUpdateContractParameters,
    toBuffer, TransactionStatus
} from '@concordium/web-sdk';
import { CONTRACT_DATA, MAX_CONTRACT_EXECUTION_ENERGY, TOKEN_A_DATA } from "../config/contract";
import schB64 from './module/tokenA/schema.b64?raw';
import { balView } from './tokenATypes';
import { invokeContract } from './invokeContractFn'

export const tokenAContractAddress: ContractAddress = {
    index: TOKEN_A_DATA.index,
    subindex: TOKEN_A_DATA.subIndex
}

function getInvkTokenResultsAsJson(invkResult: InvokeContractSuccessResult, methodName: string) {
    if (invkResult.returnValue) {
        const returnValues = deserializeReceiveReturnValue(
            toBuffer(invkResult.returnValue, 'hex'),
            toBuffer(schB64, 'base64'),
            TOKEN_A_DATA.name,
            methodName
        );
        return returnValues;
    }
    return "this is undefined";
}

/**
 * Gets TokenA instance info 
 * @param connection 
 * @returns 
 */
export async function getTokenAInfo(connection: WalletConnection,): Promise<InstanceInfo | undefined> {
    const res = await getTokenAInstanceInfo(connection, tokenAContractAddress);
    return res
}

async function getTokenAInstanceInfo(connection: WalletConnection,
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


/**
 * Gets balance fot Tokan A 
 * @param connection wallet connection
 * @param account account address 
 * @returns Promise as a balView tipe or undefined
 */
export async function invokeBalOf(connection: WalletConnection, account: string): Promise<balView | undefined> {

    const params = [
        {
            address: {
                Account: [
                    account
                ]
            },
            token_id: TOKEN_A_DATA.token_id
        }]

    const tokenACtxBal: ContractContext = {
        contract: tokenAContractAddress,
        method: `${TOKEN_A_DATA.name}.${TOKEN_A_DATA.method_bal_of}`,
        parameter: serializeUpdateContractParameters(
            TOKEN_A_DATA.name,
            TOKEN_A_DATA.method_bal_of,
            params,
            toBuffer(schB64, 'base64'),
            1,
        ),
    }
    const invkRes = await invokeContract(connection, tokenACtxBal)
    if (invkRes?.tag === "success") {
        let successRes: InvokeContractSuccessResult = invkRes
        const res: balView = getInvkTokenResultsAsJson(successRes, TOKEN_A_DATA.method_bal_of)
        console.log(`balance of result: ${JSON.stringify(res)}`)
        return res;
    }
    if (invkRes) console.error(new Error(JSON.stringify(invkRes)))
    console.error(new Error("Invoke Result is undefined please check `bal of` invoke"))
}



/**
 * invoke token contract to get tokens
 * @param connection 
 * @param account 
 * @returns 
 */
export async function invoke_get_tokens(connection: WalletConnection, account: string): Promise<balView | undefined> {

    const params = {
        to: { Account: [account] },
        amount: "10000",
        data: ""
    }

    const tokenACtxGetTokens: ContractContext = {
        contract: tokenAContractAddress,
        method: `${TOKEN_A_DATA.name}.${TOKEN_A_DATA.method_get_tokens}`,
        parameter: serializeUpdateContractParameters(
            TOKEN_A_DATA.name,
            TOKEN_A_DATA.method_get_tokens,
            params,
            toBuffer(schB64, 'base64'),
            1,
        ),
    }

    const invkRes = await invokeContract(connection, tokenACtxGetTokens)
    if (invkRes?.tag === "success") {
        let successRes: InvokeContractSuccessResult = invkRes
        const res = getInvkTokenResultsAsJson(successRes, TOKEN_A_DATA.method_get_tokens)
        console.log(`get tokens result: ${JSON.stringify(res)}`)
        return res;
    }
    if (invkRes) console.error(new Error(JSON.stringify(invkRes)))
    console.error(new Error("Invoke Result is undefined please check `get tokens` invoke"))
}


/**
 * Add swap contract as an opertor
 * @param connection 
 * @param account 
 * @returns 
 */
export async function invoke_update_operator(connection: WalletConnection, account: string): Promise<balView | undefined> {

    const params = [
        {
            update: {
                Add: []
            },
            operator: {
                Contract: [
                    {
                        index: CONTRACT_DATA.index,
                        subindex: CONTRACT_DATA.subIndex
                    }
                ]
            }
        }
    ]

    const tokenACtxUpdateOp: ContractContext = {
        contract: tokenAContractAddress,
        method: `${TOKEN_A_DATA.name}.${TOKEN_A_DATA.method_update_op}`,
        parameter: serializeUpdateContractParameters(
            TOKEN_A_DATA.name,
            TOKEN_A_DATA.method_update_op,
            params,
            toBuffer(schB64, 'base64'),
            1,
        ),
    }

    const invkRes = await invokeContract(connection, tokenACtxUpdateOp)
    if (invkRes?.tag === "success") {
        let successRes: InvokeContractSuccessResult = invkRes
        const res = getInvkTokenResultsAsJson(successRes, TOKEN_A_DATA.method_update_op)
        console.log(`get update op: ${JSON.stringify(res)}`)
        return res;
    }
    if (invkRes) console.error(new Error(JSON.stringify(invkRes)))
    console.error(new Error("Invoke Result is undefined please check `update op` invoke"))
}

/**
 * Checks if contract is an operato for address
 * @param connection 
 * @param account 
 * @returns 
 */
export async function invoke_is_operator(connection: WalletConnection, account: string): Promise<balView | undefined> {

    const params = [
        {
            owner: {
                Account: [
                    account
                ]
            },
            address: {
                Contract: [
                    {
                        index: CONTRACT_DATA.index,
                        subindex: CONTRACT_DATA.subIndex
                    }
                ]
            }
        }
    ]

    const tokenACtxOperatorOf: ContractContext = {
        contract: tokenAContractAddress,
        method: `${TOKEN_A_DATA.name}.${TOKEN_A_DATA.method_op_of}`,
        parameter: serializeUpdateContractParameters(
            TOKEN_A_DATA.name,
            TOKEN_A_DATA.method_op_of,
            params,
            toBuffer(schB64, 'base64'),
            1,
        ),
    }

    const invkRes = await invokeContract(connection, tokenACtxOperatorOf)
    if (invkRes?.tag === "success") {
        let successRes: InvokeContractSuccessResult = invkRes
        const res = getInvkTokenResultsAsJson(successRes, TOKEN_A_DATA.method_op_of)
        console.log(`operator of: ${JSON.stringify(res)}`)
        return res;
    }
    if (invkRes) console.error(new Error(JSON.stringify(invkRes)))
    console.error(new Error("Invoke Result is undefined please check `update op` invoke"))
}
