export interface RichestAccount {
    Some: string[];
}

export interface StateView {
    minimum_raise: bigint;
    richest_account: RichestAccount;
    richest_message: string;
}