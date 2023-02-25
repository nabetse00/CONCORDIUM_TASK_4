import { AccountAddress } from "./tokenATypes";

export interface RichestAccount {
    Some: string[];
}

export interface StateView {
    minimum_raise: bigint;
    richest_account: RichestAccount;
    richest_message: string;
}

export interface MetaUrl {
    hash: {
        Some: [ number[]]
    },
    url:string;
}

export interface StateViewSwap {
    admin: AccountAddress,
    paused: boolean,
    metadata_url: MetaUrl,
}

