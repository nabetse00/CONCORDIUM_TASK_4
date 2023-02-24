
export interface ContractType {
    name: string;
    address: string;
    index: bigint;
    subIndex: bigint;
    amount: bigint;
    sender: string;
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
