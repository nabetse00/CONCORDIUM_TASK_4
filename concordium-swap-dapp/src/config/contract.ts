
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


export const CONTRACT_DATA: ContractType = {
    name: "become_the_richest",
    address: "'cbd409fd57d8e0283c28be708f6b72e0b2bffdeb99a620e14d52d0deb0bd42f",
    index: 3122n,
    subIndex: 0n,
    amount: 0n,
    sender: "4Aw1taZUgVx4C8EEhsGWHcAbQ8rj5EiR3QQAFjhkCni3CeNSeu"
}

export const MAX_CONTRACT_EXECUTION_ENERGY = BigInt(10000);

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