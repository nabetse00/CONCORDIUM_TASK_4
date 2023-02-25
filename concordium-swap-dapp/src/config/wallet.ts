import { SignClientTypes } from '@walletconnect/types';
import {
    BrowserWalletConnector,
    ephemeralConnectorType,
    WalletConnectConnector,
} from '@concordium/react-components';

const WALLET_CONNECT_PROJECT_ID = '19225c963ab9231c4aeef948e34d423a'
const WALLET_CONNECT_OPTS: SignClientTypes.Options = {
    projectId: WALLET_CONNECT_PROJECT_ID,
    metadata: {
        name: 'Concordium-swap',
        description: 'DEX on Concordium chain',
        url: '#',
        icons: ['https://walletconnect.com/walletconnect-logo.png'],
    },
};

export const BROWSER_WALLET = ephemeralConnectorType(BrowserWalletConnector.create);
export const WALLET_CONNECT = ephemeralConnectorType(WalletConnectConnector.create.bind(this, WALLET_CONNECT_OPTS));