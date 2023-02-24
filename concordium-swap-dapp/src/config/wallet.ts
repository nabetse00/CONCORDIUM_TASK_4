import { SignClientTypes } from '@walletconnect/types';
import {
    BrowserWalletConnector,
    ephemeralConnectorType,
    WalletConnectConnector,
} from '@concordium/react-components';

const WALLET_CONNECT_PROJECT_ID = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID
console.log("===========================> " + WALLET_CONNECT_PROJECT_ID)
const WALLET_CONNECT_OPTS: SignClientTypes.Options = {
    projectId: WALLET_CONNECT_PROJECT_ID,
    metadata: {
        name: 'become_the_richest Contract Update',
        description: 'Become the Richest dApp demo',
        url: '#',
        icons: ['https://walletconnect.com/walletconnect-logo.png'],
    },
};

export const BROWSER_WALLET = ephemeralConnectorType(BrowserWalletConnector.create);
export const WALLET_CONNECT = ephemeralConnectorType(WalletConnectConnector.create.bind(this, WALLET_CONNECT_OPTS));