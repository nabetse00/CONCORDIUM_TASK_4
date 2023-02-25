import { AccountAddress } from "./tokenATypes";

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

