import { Network, WalletConnection, withJsonRpcClient } from "@concordium/react-components";
import { Badge, Descriptions, Spin } from "antd";
import { Suspense, useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { ContractAddress, InstanceInfo } from '@concordium/web-sdk';
import { CONTRACT_DATA } from "../config/contract"
import Balance from "../components/Balance";
import { NoAccount } from "../components/NoAccount";
import { get_contract_name } from "../utils/contracts";


interface Props {
    connection?: WalletConnection,
    account?: string,
    network?: Network
}

export function ContractInfoPage() {
    const { connection, account, network }: Props = useOutletContext();;

    const [info, setInfo] = useState<InstanceInfo>()
    const [infoError, setInfoError] = useState<string>('')
    const navigate = useNavigate()

    const contractAddress: ContractAddress = {
        index: CONTRACT_DATA.index,
        subindex: CONTRACT_DATA.subIndex
    }

    useEffect(() => {

        if(!connection || !account ){
           navigate('/CONCORDIUM_TASK_4/')
        }

        if (connection) {

            withJsonRpcClient(connection, (rpc) => rpc.getInstanceInfo(contractAddress))
                .then((res) => {
                    setInfo(res);
                    setInfoError('');
                })
                .catch((err) => {
                    setInfo(undefined);
                    setInfoError(err);
                });
        }
    }, [connection, info]);

    return (
        <Suspense fallback={<Spin />}>
            <>
                {info ?
                    <Descriptions title="Contract Info" column={1} bordered>
                        <Descriptions.Item label="Status" span={1}>
                            <Badge status={network ? "success" : "error"} text={network ? <>{"connected to " + network?.name}</> : "no network"} />
                        </Descriptions.Item>
                        <Descriptions.Item label="Contact name" >{get_contract_name(info)}</Descriptions.Item>
                        <Descriptions.Item label="Contract Balance"><Balance balance={info.amount.microCcdAmount} currency={"USD"} size={14} /></Descriptions.Item>
                        <Descriptions.Item label="Contract owner">{info.owner.address}</Descriptions.Item>
                        <Descriptions.Item label="Contract version">{info.version}</Descriptions.Item>
                        <Descriptions.Item label="Contract source module">{info.sourceModule.toJSON()}</Descriptions.Item>
                        <Descriptions.Item label="Contract source module">
                            {info.methods.map(
                                (m, i) => (
                                    <p key={i}>
                                        {
                                        //{m.replace(get_contract_name(info) + ".", (i + 1) + "> ")}
                                        }
                                        {i+ "> " + m}
                                        <br />
                                    </p>
                                )

                            )}
                        </Descriptions.Item>

                    </Descriptions>
                    :
                    account ? <Spin/> : <NoAccount network={network?.name}/>
                }
            </>
        </Suspense>

    );
}


