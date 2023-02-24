export interface AccountAddress {
    Account: string[];
}


export interface get_tokenA_params {
    to: AccountAddress;
    amount: string;
    data: string;
}

export type balView = string[];


/* 
Example:
{
    "to":   {"Account":["45gPV394xxxQgeZkB4krVWoRtR1k9b4GdKnASgg5vzpuUTe7WJ"]},
    "amount": "10000",
    "data": ""
}
*/