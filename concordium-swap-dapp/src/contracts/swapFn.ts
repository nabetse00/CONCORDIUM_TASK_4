
import { WalletConnection, withJsonRpcClient } from '@concordium/wallet-connectors';

import {
    AccountTransactionType, CcdAmount, ContractAddress, ContractContext, deserializeReceiveReturnValue, InstanceInfo, InvokeContractResult,
    InvokeContractSuccessResult, serializeUpdateContractParameters,
    toBuffer, TransactionStatus
} from '@concordium/web-sdk';
import { SWAP_CONTRACT_DATA, MAX_CONTRACT_EXECUTION_ENERGY, TOKEN_A_DATA } from "../config/contract";
import schB64 from './module/concordium-swap/schema.b64?raw';
import { invokeContract } from './invokeContractFn'
import { balView } from './tokenATypes';

export const SwapContractAddress: ContractAddress = {
    index: SWAP_CONTRACT_DATA.index,
    subindex: SWAP_CONTRACT_DATA.subIndex
}

function getInvkSwapResultsAsJson(invkResult: InvokeContractSuccessResult, methodName: string) {
    if (invkResult.returnValue) {
        const returnValues = deserializeReceiveReturnValue(
            toBuffer(invkResult.returnValue, 'hex'),
            toBuffer(schB64, 'base64'),
            SWAP_CONTRACT_DATA.name,
            methodName
        );
        return returnValues;
    }
    return "this is undefined";
}

export async function invokeStateSwapView(connection: WalletConnection): Promise<any | undefined> {
    
    const contractCtxView: ContractContext = {
        contract: SwapContractAddress,
        method: `${SWAP_CONTRACT_DATA.name}.view`,
    }
    
    const invkRes = await invokeContract(connection, contractCtxView)
    if (invkRes?.tag === "success") {
        let successRes: InvokeContractSuccessResult = invkRes
        return getInvkSwapResultsAsJson(successRes, "view")
    }
    if (invkRes) console.error(new Error(JSON.stringify(invkRes)))
    console.error(new Error("Invoke Result is undefined please check `invokeStateView`"))
}


/**
 * Gets balance fot Liquidity 
 * @param connection wallet connection
 * @param account account address 
 * @returns Promise as a balView tipe or undefined
 */
export async function invoke_liq_of(connection: WalletConnection, account: string): Promise<balView | undefined> {

    const params = [
        {
            address: {
                Account: [
                    account
                ]
            },
            token_id: SWAP_CONTRACT_DATA.token_id
        }]

    const tokenLiqCtxBal: ContractContext = {
        contract: SwapContractAddress,
        method: `${SWAP_CONTRACT_DATA.name}.${SWAP_CONTRACT_DATA.method_bal_of}`,
        parameter: serializeUpdateContractParameters(
            SWAP_CONTRACT_DATA.name,
            SWAP_CONTRACT_DATA.method_bal_of,
            params,
            toBuffer(schB64, 'base64'),
            1,
        ),
    }
    const invkRes = await invokeContract(connection, tokenLiqCtxBal)
    if (invkRes?.tag === "success") {
        let successRes: InvokeContractSuccessResult = invkRes
        const res: balView = getInvkSwapResultsAsJson(successRes, SWAP_CONTRACT_DATA.method_bal_of)
        return res;
    }
    if (invkRes) console.error(new Error(JSON.stringify(invkRes)))
    console.error(new Error("Invoke Result is undefined please check `bal of` invoke"))
}


// Add liquidity fn 

/**
 * update token contract to get tokens
 * @param connection 
 * @param account 
 * @returns 
 */
export async function invoke_add_liquidity(connection: WalletConnection, account: string, amount_ccd:number, amount_token_a: number): Promise<string> {
    const params = {
        to: { Account: [account] },
        amount: amount_token_a.toString(),
        data: ""
    }

    const addLiquidityCtx: ContractContext = {
        contract: SwapContractAddress,
        method: `${SWAP_CONTRACT_DATA.name}.${SWAP_CONTRACT_DATA.method_add_liquidity}`,
        parameter: serializeUpdateContractParameters(
            SWAP_CONTRACT_DATA.name,
            SWAP_CONTRACT_DATA.method_add_liquidity,
            params,
            toBuffer(schB64, 'base64'),
            1,
        ),
    }

    const invkRes = await invokeContract(connection, addLiquidityCtx)
    if (invkRes?.tag === "success") {
        //let successRes: InvokeContractSuccessResult = invkRes
        //const res = getInvkTokenResultsAsJson(successRes, TOKEN_A_DATA.method_get_tokens)
        //console.log(`get tokens result: ${JSON.stringify(res)}`)
        //return res;
        return connection.signAndSendTransaction(
            account,
            AccountTransactionType.Update,
            {
                address: SwapContractAddress,
                amount: new CcdAmount(BigInt(amount_ccd*1e6)),
                receiveName: `${SWAP_CONTRACT_DATA.name}.${SWAP_CONTRACT_DATA.method_add_liquidity}`,
                maxContractExecutionEnergy: MAX_CONTRACT_EXECUTION_ENERGY,
            },
            params,
            schB64,
            1
        );
    }
    if (invkRes) console.error(new Error(JSON.stringify(invkRes)))
    const err = new Error("Invoke Result is undefined please check `get tokens` invoke")
    console.error(err)
    throw err;
}

