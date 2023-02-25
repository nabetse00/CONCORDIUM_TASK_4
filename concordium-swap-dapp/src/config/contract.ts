
export interface ContractType {
    name: string;
    address: string;
    index: bigint;
    subIndex: bigint;
    amount: bigint;
    sender: string;
}

export interface TokenType extends ContractType {
    token_id: string;
    method_bal_of: string;
    method_get_tokens: string;
    method_op_of: string;
    method_update_op: string;
}

export interface SwapContractType extends TokenType {
    token_a_id: string;
    method_add_liquidity: string;
    method_rm_liquidity: string;
    method_swap_to_token_a: string;
    method_swap_to_ccd: string;
}


export const SWAP_CONTRACT_DATA: SwapContractType = {
    name: "ccd_swap",
    address: "a3e503257095bf2c65d61a8536adab95a2a4e49dcb5153ccfe5ffb23881faae7",
    index: 3430n,
    subIndex: 0n,
    amount: 0n,
    sender: "4Aw1taZUgVx4C8EEhsGWHcAbQ8rj5EiR3QQAFjhkCni3CeNSeu",
    token_id: "",
    method_bal_of: "balanceOf",
    method_get_tokens: "get_token_a",
    method_op_of: "operatorOf",
    method_update_op: "updateOperator",
    token_a_id: "0100000000000000",
    method_add_liquidity: "add_liquidity",
    method_rm_liquidity: "remove_liq",
    method_swap_to_ccd: "swap_token_a_for_ccd",
    method_swap_to_token_a: "swap_ccd_for_tokenA"
}

export const CONTRACT_DATA: ContractType = {
    name: "ccd_swap",
    address: "a3e503257095bf2c65d61a8536adab95a2a4e49dcb5153ccfe5ffb23881faae7",
    index: 3430n,
    subIndex: 0n,
    amount: 0n,
    sender: "4Aw1taZUgVx4C8EEhsGWHcAbQ8rj5EiR3QQAFjhkCni3CeNSeu"
}

export const MAX_CONTRACT_EXECUTION_ENERGY = BigInt(10000);
export const MAX_SWAP_EXECUTION_ENERGY = BigInt(50000);

export const TOKEN_A_DATA: TokenType = {
    name: "cis2_token_a",
    address: "6ff6fe2e33743b99a5e864d477841e9acfb45e12eb0bd8597980bac7cbd936c4",
    token_id: "0100000000000000",
    index: 3389n,
    subIndex: 0n,
    amount: 0n,
    sender: "4Aw1taZUgVx4C8EEhsGWHcAbQ8rj5EiR3QQAFjhkCni3CeNSeu",
    method_bal_of: "balanceOf",
    method_get_tokens: "get_token_a",
    method_op_of: "operatorOf",
    method_update_op: "updateOperator"
}