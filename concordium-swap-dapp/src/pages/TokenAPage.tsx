import { Network, WalletConnection } from "@concordium/react-components";
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
import { gray, green, grey, orange, volcano } from '@ant-design/colors';
import {
    DollarOutlined
} from '@ant-design/icons';
import { base } from "../main";


interface Props {
    connection?: WalletConnection,
    account?: string,
    network?: Network
}

const { Text, Link } = Typography;
const { Option } = Select;

export function TokenAPage(): JSX.Element {
    const { connection, account, network }: Props = useOutletContext();;

    const [contractError, setContractError] = useState<string>('')
    const [isAwaitingApproval, setIsAwaitingApproval] = useState(false);
    const [submittedTxHash, setSubmittedTxHash] = useState<string>();
    const navigate = useNavigate();

    const [tokenABal, setTokenABal] = useState<balView>();
    const [isContractOperator, setIsContractOperator] = useState<boolean[]>([false]);
    const [tokensToSendValue, setTokensToSendValue] = useState(0);

    const onChange = (newValue: number | null) => {
        if (newValue) setTokensToSendValue(newValue);
    };



    useEffect(() => {

        if (!connection || !account) {
            console.log("redirect")
            navigate(base)
        }

        if (connection && account && !isAwaitingApproval) {

            invoke_bal_of(connection, account).then(
                (res) => {
                    setTokenABal(res);
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
            invoke_get_tokens(connection, account, tokensToSendValue * 1e6).then(
                (hash) => {
                    console.log("txn hash: " + hash)
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
                <Space direction="vertical" size="middle">
                    <Card title="Your Token A data" style={{ backgroundColor: orange[0] }}>
                        <p>Token A balance: {tokenABal ? parseInt(tokenABal[0]) / 1e6 : 0} TOK_A </p>
                        <p>Is concordium-swap contract an operator of your account? {isContractOperator[0] ? "✅ you can use this dispenser 😄" : "❌ use bellow button to change that 😓"} </p>
                        {connection && <Button type="primary" loading={isAwaitingApproval} disabled={isContractOperator[0]} onClick={() => add_contract_as_operator()}>
                            Click to set concordium swap as operator for token A
                        </Button>}
                    </Card>
                    <Card title="Token A dispenser" style={{ backgroundColor: orange[0] }}>
                        <Space direction="vertical" size={"middle"}>

                            <Row style={{ minWidth: '400px' }}>
                                <Col span={15}>
                                    <Slider
                                        min={1}
                                        max={100}
                                        onChange={onChange}
                                        value={typeof tokensToSendValue === 'number' ? tokensToSendValue : 0}
                                    />
                                </Col>
                                <Col span={4}>
                                    <InputNumber
                                        min={1}
                                        max={100}
                                        style={{ margin: '0 16px' }}
                                        value={tokensToSendValue}
                                        onChange={onChange}
                                    />
                                </Col>
                            </Row>
                            <Button type="primary" loading={isAwaitingApproval} disabled={!isContractOperator[0]} onClick={() => get_tokens()}>
                                Send me {tokensToSendValue} token A please!
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