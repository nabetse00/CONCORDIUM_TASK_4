import {
    Network,
} from '@concordium/react-components';

const TESTNET_GENESIS_BLOCK_HASH = '4221332d34e1694168c2a0c0b3fd0f273809612cb13d000d5c2e00e85f50f796';
const MAINNET_GENESIS_BLOCK_HASH = '9dd9ca4d19e9393877d2c44b70f89acbfc0883c2243e5eeaecc0d1cd0503f478';

export const TESTNET: Network = {
    name: 'testnet',
    genesisHash: TESTNET_GENESIS_BLOCK_HASH,
    jsonRpcUrl: 'https://json-rpc.testnet.concordium.com',
    ccdScanBaseUrl: 'https://testnet.ccdscan.io',
};
export const MAINNET: Network = {
    name: 'mainnet',
    genesisHash: MAINNET_GENESIS_BLOCK_HASH,
    jsonRpcUrl: 'https://json-rpc.mainnet.concordium.software',
    ccdScanBaseUrl: 'https://ccdscan.io',
};