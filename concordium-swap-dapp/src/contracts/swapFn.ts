
import { WalletConnection, withJsonRpcClient } from '@concordium/wallet-connectors';

import {
    AccountTransactionType, CcdAmount, ContractAddress, ContractContext, deserializeReceiveReturnValue, InstanceInfo, InvokeContractResult,
    InvokeContractSuccessResult, serializeUpdateContractParameters,
    toBuffer, TransactionStatus
} from '@concordium/web-sdk';
import { SWAP_CONTRACT_DATA, MAX_CONTRACT_EXECUTION_ENERGY, TOKEN_A_DATA, MAX_SWAP_EXECUTION_ENERGY } from "../config/contract";
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

/**
 * update token contract to add liquidity
 * @param connection 
 * @param account 
 * @param amount_mccd
 * @param amount_mtoken_a
 * @returns 
 */
export async function invoke_add_liquidity(connection: WalletConnection, account: string, amount_mccd: number, amount_mtoken_a: number): Promise<string> {
    const params = {
        to: { Account: [account] },
        amount: amount_mtoken_a.toString(),
        data: ""
    }

    return connection.signAndSendTransaction(
        account,
        AccountTransactionType.Update,
        {
            address: SwapContractAddress,
            amount: new CcdAmount(BigInt(amount_mccd)),
            receiveName: `${SWAP_CONTRACT_DATA.name}.${SWAP_CONTRACT_DATA.method_add_liquidity}`,
            maxContractExecutionEnergy: MAX_SWAP_EXECUTION_ENERGY,
        },
        params,
        schB64,
        1
    );
}

/**
 * update token contract to remove liquidity
 * @param connection 
 * @param account 
 * @param amount_mtoken_liq 
 * @returns 
 */
export async function invoke_remove_liquidity(connection: WalletConnection, account: string, amount_mtoken_liq: number): Promise<string> {
    const params = {
        amount: amount_mtoken_liq.toString(),
        receiver: { Account: [account] },
        owner: { Account: [account] },
        data: ""
    }

    return connection.signAndSendTransaction(
        account,
        AccountTransactionType.Update,
        {
            address: SwapContractAddress,
            amount: new CcdAmount(BigInt(0)),
            receiveName: `${SWAP_CONTRACT_DATA.name}.${SWAP_CONTRACT_DATA.method_rm_liquidity}`,
            maxContractExecutionEnergy: MAX_SWAP_EXECUTION_ENERGY,
        },
        params,
        schB64,
        1
    );
}

/**
 * update swap ccd for token A
 * @param connection 
 * @param account 
 * @param amount_mccd
 * @returns 
 */
export async function invoke_swap_ccd_for_token_a(connection: WalletConnection, account: string, amount_mccd: number): Promise<string> {
    const params = {
        to: { Account: [account] },
        data: ""
    }

    return connection.signAndSendTransaction(
        account,
        AccountTransactionType.Update,
        {
            address: SwapContractAddress,
            amount: new CcdAmount(BigInt(amount_mccd)),
            receiveName: `${SWAP_CONTRACT_DATA.name}.${SWAP_CONTRACT_DATA.method_swap_to_token_a}`,
            maxContractExecutionEnergy: MAX_SWAP_EXECUTION_ENERGY,
        },
        params,
        schB64,
        1
    );
}

/**
 * update swap token A for ccd  
 * @param connection 
 * @param account
 * @param amount_mtoken_a
 * @returns 
 */
export async function invoke_swap_token_a_for_ccd(connection: WalletConnection, account: string, amount_mtoken_a: number): Promise<string> {
    const params = {
        to: { Account: [account] },
        amount: amount_mtoken_a.toString(),
        data: ""
    }

    return connection.signAndSendTransaction(
        account,
        AccountTransactionType.Update,
        {
            address: SwapContractAddress,
            amount: new CcdAmount(BigInt(0)),
            receiveName: `${SWAP_CONTRACT_DATA.name}.${SWAP_CONTRACT_DATA.method_swap_to_ccd}`,
            maxContractExecutionEnergy: MAX_SWAP_EXECUTION_ENERGY,
        },
        params,
        schB64,
        1
    );
}
