import { Network, WalletConnection, withJsonRpcClient } from "@concordium/react-components";
import { AccountInfo } from '@concordium/web-sdk';
import { Badge, Descriptions, Spin } from "antd";
import Link from "antd/es/typography/Link";
import { Suspense, useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Balance from "../components/Balance";
import { NoAccount } from "../components/NoAccount";
import {base} from '../main'

interface Props {
    connection?: WalletConnection,
    account?: string,
    network?: Network
}

export function AccountInfoPage() {
    const { connection, account, network }: Props = useOutletContext();;
    const [info, setInfo] = useState<AccountInfo>();
    const [infoError, setInfoError] = useState('');
    const navigate = useNavigate()

    const scanLink = network?.ccdScanBaseUrl + '/?dcount=1&dentity=account&daddress=' + info?.accountAddress

    useEffect(() => {

        if(!connection || !account ){
            navigate(base)
        }

        if (connection) {
            setInfo(undefined);
        }
        if (connection && account) {
            setInfo(undefined);
            withJsonRpcClient(connection, (rpc) => rpc.getAccountInfo(account))
                .then((res) => {
                    setInfo(res);
                    setInfoError('');
                })
                .catch((err) => {
                    setInfo(undefined);
                    setInfoError(err);
                });
        }
    }, [connection, account]);

    return (
        <Suspense fallback={<Spin />}>
            {info ?
                <Descriptions title="Account Info" column={1} bordered>
                    <Descriptions.Item label="Status" span={1}>
                        <Badge status={network ? "success" : "error"} text={network ? <>{"connected to " + network?.name}</> : "no network"} />
                    </Descriptions.Item>
                    <Descriptions.Item label="Address" ><Link copyable={{ text: info.accountAddress }} href={scanLink} target="_blank" rel="noopener noreferrer">
                        {info.accountAddress}
                    </Link></Descriptions.Item>
                    <Descriptions.Item label="Balance (price form kucoin)"><Balance balance={info.accountAmount} currency={"USD"} size={14} /></Descriptions.Item>
                    <Descriptions.Item label="Nonce">{Number(info.accountNonce)}</Descriptions.Item>
                    <Descriptions.Item label="Index">{Number(info.accountIndex)}</Descriptions.Item>
                    <Descriptions.Item label="Public key for credentials">{info.accountCredentials[0].value.contents.credentialPublicKeys.keys[0].verifyKey}</Descriptions.Item>
                    <Descriptions.Item label="Encryption key">{info.accountEncryptionKey}</Descriptions.Item>
                </Descriptions>
                :
                account ? <Spin /> : <NoAccount network={network?.name}/>
            }
        </Suspense>

    );
}