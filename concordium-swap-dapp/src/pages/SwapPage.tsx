import { Network, WalletConnection, withJsonRpcClient } from "@concordium/react-components";
import {
    ContractAddress,
    ContractContext, InstanceInfo
} from '@concordium/web-sdk';
import { Alert, Button, Card, Col, Form, Input, InputNumber, List, Row, Select, Slider, Space, Spin, Typography } from "antd";
import { Suspense, useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { ModalConfirm } from "../components/ModalConfirm";
import { NoAccount } from "../components/NoAccount";
import { TxnStatusComponent } from "../components/txnStatusComp";
import { CONTRACT_DATA } from "../config/contract";
import { StateView } from "../contracts/contractTypes";
import { getContractInfo, invokeStateView, updateBecomeTheRichestMethod } from "../contracts/invokeContractFn";
import { invoke_bal_of, invoke_get_tokens, invoke_is_operator, update_operator } from "../contracts/tokenAFn";
import { balView } from "../contracts/tokenATypes";
import { blue, gray, green, grey, orange, volcano } from '@ant-design/colors';
import { AccountInfo } from '@concordium/web-sdk';
import {
    DollarOutlined
} from '@ant-design/icons';
import { base } from "../main";
import { invoke_liq_of } from "../contracts/swapFn";


interface Props {
    connection?: WalletConnection,
    account?: string,
    network?: Network
}

const { Text, Link } = Typography;
const { Option } = Select;

export function SwapPage(): JSX.Element {
    const { connection, account, network }: Props = useOutletContext();;

    const [contractError, setContractError] = useState<string>('')
    const [isAwaitingApproval, setIsAwaitingApproval] = useState(false);
    const [submittedTxHash, setSubmittedTxHash] = useState<string>();
    const navigate = useNavigate();

    const [info, setInfo] = useState<AccountInfo>();

    const [tokenABal, setTokenABal] = useState<balView>();
    const [isContractOperator, setIsContractOperator] = useState<boolean[]>([false]);
    const [tokenAToLiqValue, setTokenAToLiqValue] = useState(0);
    const [ccdToLiqValue, setCcdToLiqValue] = useState(0);

    // Liquidity

    const [tokenLiq, setTokenLiq] = useState<balView>();

    const onChangeTokenALiq = (newValue: number | null) => {
        if (newValue) setTokenAToLiqValue(newValue);
    };

    const onChangeCCDLiq = (newValue: number | null) => {
        if (newValue) setCcdToLiqValue(newValue);
    };



    useEffect(() => {

        if (!connection || !account) {
            console.log("redirect")
            navigate(base)
        }

        if (connection && account && !isAwaitingApproval) {

            withJsonRpcClient(connection, (rpc) => rpc.getAccountInfo(account))
                .then((res) => {
                    setInfo(res);
                })
                .catch((err) => {
                console.error(err)
                    setInfo(undefined);
                });

            invoke_bal_of(connection, account).then(
                (res) => {
                    setTokenABal(res);
                    setContractError('');
                }
            ).catch((err) => {
                console.error(err)
                setContractError(err);
            })

            invoke_liq_of(connection, account).then(
                (res) => {
                    setTokenLiq(res);
                    setContractError('');
                }
            ).catch((err) => {
                console.error(err)
                setContractError(err);
            })

            invoke_is_operator(connection, account).then(
                (res) => {
                    if (res) {
                        //console.log(res)
                        setIsContractOperator(res);
                        setContractError('');
                    } else {
                        setIsContractOperator([false]);
                        setContractError('');
                    }
                }
            ).catch((err) => {
                console.error(err)
                setContractError(err);
            })


        }

    }, [connection, account, isAwaitingApproval, submittedTxHash]);




    function callbackTxnStateComp() {
        setIsAwaitingApproval(false)
    }




    function add_contract_as_operator() {
        if (connection && account) {
            setIsAwaitingApproval(true);
            update_operator(connection, account).then(
                (hash) => {
                    console.log("success then in add contract")
                    setSubmittedTxHash(hash)
                    setContractError('');
                }
            ).catch((err) => {
                console.error(err)
                setIsAwaitingApproval(false);
                setContractError(err);
            })
        }
    }

    function get_tokens() {
        if (connection && account) {
            setIsAwaitingApproval(true);
            setSubmittedTxHash("")
            invoke_get_tokens(connection, account, tokenAToLiqValue * 10e6).then(
                (hash) => {
                    console.log("success then in add contract")
                    setSubmittedTxHash(hash)
                    setContractError('');
                }
            ).catch((err) => {
                console.error(err)
                setIsAwaitingApproval(false);
                setContractError(err);
            })
        }
    }


    return (
        <Suspense fallback={<Spin />}>
            {(connection && account) ?
                <Space direction="vertical" size="small">
                    <Card title="Liquidity Provider" style={{ backgroundColor: orange[0] }}>
                        <p>Your Token Liquitidy: {tokenLiq ? parseInt(tokenLiq[0]) / 1e6 : 0} CCDS-TOKA-CCD </p>

                        <p>Is concordium-swap contract an operator of your account? {isContractOperator[0] ? "✅ you can use this dispenser 😄" : "❌ use bellow button to change that 😓"} </p>
                        <Space direction="vertical">
                            <Button type="primary" loading={isAwaitingApproval} disabled={isContractOperator[0]} onClick={() => add_contract_as_operator()}>
                                Click to set concordium swap as operator for token A
                            </Button>
                            {info &&
                                <Row gutter={[16, 16]}>
                                    <Col span={24}> Amount of CCD: </Col>
                                    <Col span={10}>
                                        <Slider
                                            disabled={!isContractOperator[0]}
                                            min={0}
                                            max={Number(info.accountAmount) / 1e6}
                                            onChange={onChangeCCDLiq}
                                            value={typeof ccdToLiqValue === 'number' ? ccdToLiqValue : 0}
                                        />
                                    </Col>
                                    <Col span={4}>
                                        <InputNumber
                                            disabled={!isContractOperator[0]}
                                            min={0}
                                            max={Number(info.accountAmount) / 1e6}
                                            style={{ margin: '0 16px' }}
                                            value={ccdToLiqValue}
                                            onChange={onChangeCCDLiq}
                                        />
                                    </Col>
                                </Row>
                            }
                            {tokenABal &&
                                <Row gutter={[16, 16]}>
                                    <Col span={24}> Amount of token A: </Col>
                                    <Col span={10}>
                                        <Slider
                                            disabled={!isContractOperator[0]}
                                            min={0}
                                            max={parseInt(tokenABal[0]) / 1e6}
                                            onChange={onChangeTokenALiq}
                                            value={typeof tokenAToLiqValue === 'number' ? tokenAToLiqValue : 0}
                                        />
                                    </Col>
                                    <Col span={4}>
                                        <InputNumber
                                            disabled={!isContractOperator[0]}
                                            min={0}
                                            max={parseInt(tokenABal[0]) / 1e6}
                                            style={{ margin: '0 16px' }}
                                            value={tokenAToLiqValue}
                                            onChange={onChangeTokenALiq}
                                        />
                                    </Col>
                                </Row>
                            }
                            <Button type="primary" loading={isAwaitingApproval}
                                disabled={!isContractOperator[0]}
                                onClick={() => add_contract_as_operator()}>
                                Click to add Liquidity
                            </Button>
                        </Space>
                    </Card>

                    {submittedTxHash &&
                        <TxnStatusComponent hash={submittedTxHash} connection={connection} callback={callbackTxnStateComp} />
                    }
                </Space>
                :
                account ? <Spin /> : <NoAccount network={network?.name} />


            }
        </Suspense >

    );
}

function confirmContent(amount: number, currency: string): JSX.Element {

    return (
        <Space direction="vertical">
            <Text>Please don't pay insane amounts so other user can test this contract without spending too much!</Text>
            <Text type="danger">You are about to spend {amount} {currency} to become the richest is it OK?</Text>
        </Space>
    );
}