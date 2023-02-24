import { Network, WalletConnection, withJsonRpcClient } from '@concordium/react-components';
import { useEffect, useState } from 'react';
import { AccountInfo } from '@concordium/web-sdk';
import { Alert, notification } from 'antd';
//import Account from './Account';
import Address from './Address';

interface Props {
    network: Network;
    connection: WalletConnection | undefined;
    account: string | undefined;
}

function ccdScanUrl(network: Network, activeConnectedAccount: string | undefined) {
    return `${network.ccdScanBaseUrl}/?dcount=1&dentity=account&daddress=${activeConnectedAccount}`;
}

export function ConnectedAccount({ connection, account, network }: Props) {
    const [info, setInfo] = useState<AccountInfo>();
    const [infoError, setInfoError] = useState('');
    useEffect(() => {
        if(connection){
            setInfo(undefined);
        }
        if (connection && account) {
            setInfo(undefined);
            withJsonRpcClient(connection, (rpc) => rpc.getAccountInfo(account))
                .then((res) => {
                    setInfo(res);
                    setInfoError('');
                    if (res) {
                        openNotification(res)
                    }
                })
                .catch((err) => {
                    setInfo(undefined);
                    setInfoError(err);
                });
        }
    }, [connection, account]);


    const [api, contextHolder] = notification.useNotification();
    const openNotification = (info: AccountInfo) => {
        api.info({
            message: `Notification ${network.name}`,
            description: <>
                {infoError && <Alert message="Error querying account info: {infoError}" />}
                {account && (
                    <>
                        Connected to account{' '}
                        <a target="_blank" rel="noreferrer" href={ccdScanUrl(network, account)}>
                            <code>{account}</code>
                        </a>{' '}
                        on <b>{network.name}</b>
                    </>
                )}
                <Details account={info} />
            </>
        });
    };

    return (
        <>  
            {info && <Address address={info.accountAddress} />}
            {contextHolder}
        </>
    );
}

function Details({ account }: { account: AccountInfo }) {

    return (
        <>
            <Alert message={
                <ul className="mb-0">
                    <li>Address: {account.accountAddress}</li>
                    <li>Nonce: {account.accountNonce.toString()}</li>
                    <li>Balance: {account.accountAmount.toString()}</li>
                    <li>Index: {account.accountIndex.toString()}</li>
                </ul>}
            />
        </>
    );
}