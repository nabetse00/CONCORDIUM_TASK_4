import {InstanceInfo } from '@concordium/web-sdk';

export function get_contract_name(info: InstanceInfo): string{
    return info.name.replace("init_", "")
}