import { Network, WalletConnection, withJsonRpcClient } from "@concordium/react-components";
import { ContractAddress, ContractContext, deserializeReceiveReturnValue, InstanceInfo, InvokeContractResult, InvokeContractSuccessResult, toBuffer } from '@concordium/web-sdk';
import { Spin } from "antd";
import { Suspense, useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { StateViewCompoment } from "../components/genericView";
import { NoAccount } from "../components/NoAccount";
import { StateView } from "../contracts/contractTypes";


import { getContractInfo, invokeStateView } from "../contracts/invokeContractFn";
import { base } from "../main";

interface Props {
    connection?: WalletConnection,
    account?: string,
    network?: Network
}

export function ContractDataPage(): JSX.Element {
    const { connection, account, network }: Props = useOutletContext();;

    const [stateView, setStateView] = useState<StateView>()
    const [invkError, setInvkError] = useState<string>('')
    //const [schemaRpc, setSchemaRpc] = useState<SchemaRpcResult>()
    const [contract, setContract] = useState<InstanceInfo>()
    const [contractError, setContractError] = useState<string>('')
    const navigate = useNavigate();
    

    useEffect(() => {

        if(!connection || !account ){
           navigate(base)
        }
        
        if (connection) {

            getContractInfo(connection).then(
                (res) => {
                    setContract(res);
                    setContractError('');
                }
            ).catch((err) => {
                setContract(undefined);
                setContractError(err);
            })

            invokeStateView(connection).then(
                (state) => {
                    setStateView(state)
                    setInvkError('')
                }
            ).catch(
                (err) => {
                    console.log(err)
                    setStateView(undefined)
                    setInvkError(err)
                }
            )
        }

    }, [connection, account]);

    return (
        <Suspense fallback={<Spin />}>
            <>
                {stateView ?
                    <>
                        {stateView ?
                            contract && StateViewCompoment("State", stateView, Number(contract.amount.microCcdAmount))
                            :
                            "state undefined"
                        }
                    </>
                    :
                    account ? <Spin /> : <NoAccount network={network?.name} />
                }
            </>
        </Suspense>

    );
}
