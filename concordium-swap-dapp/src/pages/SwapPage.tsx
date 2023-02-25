import { detectConcordiumProvider } from '@concordium/browser-wallet-api-helpers';
import { Network, WalletConnection, withJsonRpcClient } from "@concordium/react-components";
import { AccountInfo, IdStatementBuilder, verifyIdstatement } from '@concordium/web-sdk';
import { Alert, Button, Col, Collapse, InputNumber, Row, Select, Slider, Space, Spin, Typography } from "antd";
import { Suspense, useCallback, useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { NoAccount } from "../components/NoAccount";
import { TxnStatusComponent } from "../components/txnStatusComp";
import { invoke_add_liquidity, invoke_liq_of, invoke_remove_liquidity, invoke_swap_ccd_for_token_a, invoke_swap_token_a_for_ccd } from "../contracts/swapFn";
import { invoke_bal_of, invoke_is_operator, update_operator } from "../contracts/tokenAFn";
import { balView } from "../contracts/tokenATypes";
import { base } from "../main";

const { Panel } = Collapse;

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
    const [tokenLiqValue, setTokenLiqValue] = useState(0);
    const [ccdSwapValue, setCcdSwapValue] = useState(0);
    const [tokenASwapValue, setTokenASwapValue] = useState(0);
    const [isOver18, setIsOver18] = useState(false)


    const handleAuthorize = useCallback(async () => {
        if (!account) {
            throw new Error('Unreachable account!');
        }
        const statementBuilder = new IdStatementBuilder();
        statementBuilder.addMinimumAge(18);
        const statement = statementBuilder.getStatement();
        const provider = await detectConcordiumProvider();
        const proof = await provider.requestIdProof(account, statement, "AA");
        try {
            verifyIdstatement(statement);
            // some docuementation would be nice 
            // no idea on how to check proof is valid from chain data ...
            // console.log("proof" + proof.credential + " " + proof.proof.value)
            if (proof) { 
                setIsOver18(true) 
            } else {
                setIsOver18(false)
            }
        } catch (e) {
            // States why the statement is not valid:
            console.log(e);
            setIsOver18(false)
        }

    }, [account]);

    // Liquidity

    const [tokenLiq, setTokenLiq] = useState<balView>();

    const onChangeTokenALiq = (newValue: number | null) => {
        if (newValue) setTokenAToLiqValue(newValue);
    };

    const onChangeCCDLiq = (newValue: number | null) => {
        if (newValue) setCcdToLiqValue(newValue);
    };

    const onChangeTokenLiqValue = (newValue: number | null) => {
        if (newValue) setTokenLiqValue(newValue);
    };

    const onChangeCcdSwapValue = (newValue: number | null) => {
        if (newValue) setCcdSwapValue(newValue);
    };

    const onChangeTokenASwapValue = (newValue: number | null) => {
        if (newValue) setTokenASwapValue(newValue);
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

    function add_liquidity() {
        if (connection && account) {
            setIsAwaitingApproval(true);
            setSubmittedTxHash("")
            invoke_add_liquidity(connection, account, ccdToLiqValue * 1e6, tokenAToLiqValue * 1e6).then(
                (hash) => {
                    console.log("success then in add liq contract")
                    setSubmittedTxHash(hash)
                    setContractError('');
                    setTokenAToLiqValue(0)
                    setCcdToLiqValue(0)
                }
            ).catch((err) => {
                setTokenAToLiqValue(0)
                setCcdToLiqValue(0)
                setIsAwaitingApproval(false);
                setContractError(err);
                console.error(err)
            })
        }
    }

    function rm_liquidity() {
        if (connection && account) {
            setIsAwaitingApproval(true);
            setSubmittedTxHash("")
            invoke_remove_liquidity(connection, account, tokenLiqValue * 1e6).then(
                (hash) => {
                    console.log("success then in remove liq contract")
                    setSubmittedTxHash(hash)
                    setContractError('');
                    setTokenLiqValue(0);
                }
            ).catch((err) => {
                setIsAwaitingApproval(false);
                setContractError(err);
                setTokenLiqValue(0);
                console.error(err)
            })
        }
    }

    function swap_ccd_for_token_a() {
        if (connection && account) {
            setIsAwaitingApproval(true);
            setSubmittedTxHash("")
            invoke_swap_ccd_for_token_a(connection, account, ccdSwapValue * 1e6).then(
                (hash) => {
                    console.log("success then in swap ccd for token A contract")
                    setSubmittedTxHash(hash)
                    setContractError('');
                    setCcdSwapValue(0);
                }
            ).catch((err) => {
                setCcdSwapValue(0);
                setIsAwaitingApproval(false);
                setContractError(err);
                console.error(err)
            })
        }
    }

    function swap_token_a_for_ccd() {
        if (connection && account) {
            setIsAwaitingApproval(true);
            setSubmittedTxHash("")
            invoke_swap_token_a_for_ccd(connection, account, tokenASwapValue * 1e6).then(
                (hash) => {
                    console.log("success then in swap token A for CCD contract")
                    setSubmittedTxHash(hash)
                    setContractError('');
                    setTokenASwapValue(0);
                }
            ).catch((err) => {
                setTokenASwapValue(0);
                setIsAwaitingApproval(false);
                console.error(err)
                setContractError(err);
            })
        }
    }

    const onChangePanelLiquidity = (key: string | string[]) => {
        //console.log(key);
    };

    const onChangePanelSwap = (key: string | string[]) => {
        //console.log(key);
    };

    return (
        <Suspense fallback={<Spin />}>


            {(connection && account) ?
                !isOver18 ?
                    <Alert type="error" showIcon
                        description={
                            <Button type="primary" danger={true}
                                onClick={handleAuthorize}>
                                Click here to prove you are over 18 !
                            </Button>}
                        message="You must be over 18 to use Concordium Swap"
                    />
                    :
                    <Space direction="vertical" size="small">
                        <div>

                            {submittedTxHash &&
                                <TxnStatusComponent hash={submittedTxHash} connection={connection} callback={callbackTxnStateComp} />
                            }
                        </div>
                        <Collapse defaultActiveKey={['0']} onChange={onChangePanelSwap} >
                            <Panel header="Swap some CCD for Token A" key={1} >
                                <p>Your CCD balance: {info ? Number(info.accountAmount) / 1e6 : 0} CCD </p>
                                <p>Your TokenA balance: {tokenABal ? parseInt(tokenABal[0]) / 1e6 : 0} TOKA </p>
                                <p>Is concordium-swap contract an operator of your account?
                                    {isContractOperator[0] ? "✅ you can swap ccd for tokenA 😄" : "❌ use bellow button to change that 😓"}
                                </p>

                                <Row gutter={[16, 16]}>
                                    <Col span={24}> Amount of CCD to swap: </Col>
                                    <Col span={10}>
                                        <Slider
                                            disabled={!isContractOperator[0]}
                                            min={0}
                                            max={info ? Number(info.accountAmount) / 1e6 : 0}
                                            onChange={onChangeCcdSwapValue}
                                            value={typeof ccdSwapValue === 'number' ? ccdSwapValue : 0}
                                        />
                                    </Col>
                                    <Col span={4}>
                                        <InputNumber
                                            disabled={!isContractOperator[0]}
                                            min={0}
                                            max={info ? Number(info.accountAmount) / 1e6 : 0}
                                            style={{ margin: '0 16px' }}
                                            value={ccdSwapValue}
                                            onChange={onChangeCcdSwapValue}
                                        />
                                    </Col>
                                </Row>

                                <Button type="primary" loading={isAwaitingApproval}
                                    disabled={!isContractOperator[0] || ccdSwapValue == 0}
                                    onClick={() => swap_ccd_for_token_a()}>
                                    Click to swap {ccdSwapValue} CCD for token A
                                </Button>
                            </Panel>
                            <Panel header="Swap some TokenA for CCD" key={2} >
                                <p>Your TokenA balance: {tokenABal ? parseInt(tokenABal[0]) / 1e6 : 0} TOKA </p>
                                <p>Your CCD balance: {info ? Number(info.accountAmount) / 1e6 : 0} CCD </p>
                                <p>Is concordium-swap contract an operator of your account?
                                    {isContractOperator[0] ? "✅ you can swap tokenA for ccd 😄" : "❌ use bellow button to change that 😓"}
                                </p>

                                <Row gutter={[16, 16]}>
                                    <Col span={24}> Amount of TokenA to swap: </Col>
                                    <Col span={10}>
                                        <Slider
                                            disabled={!isContractOperator[0]}
                                            min={0}
                                            max={tokenABal ? parseInt(tokenABal[0]) / 1e6 : 0}
                                            onChange={onChangeTokenASwapValue}
                                            value={typeof tokenASwapValue === 'number' ? tokenASwapValue : 0}
                                        />
                                    </Col>
                                    <Col span={4}>
                                        <InputNumber
                                            disabled={!isContractOperator[0]}
                                            min={0}
                                            max={tokenABal ? parseInt(tokenABal[0]) / 1e6 : 0}
                                            style={{ margin: '0 16px' }}
                                            value={tokenASwapValue}
                                            onChange={onChangeTokenASwapValue}
                                        />
                                    </Col>
                                </Row>

                                <Button type="primary" loading={isAwaitingApproval}
                                    disabled={!isContractOperator[0] || tokenASwapValue == 0}
                                    onClick={() => swap_token_a_for_ccd()}>
                                    Click to swap {tokenASwapValue} TokenA for CCD
                                </Button>
                            </Panel>

                        </Collapse>
                        <Collapse defaultActiveKey={['0']} onChange={onChangePanelLiquidity} >
                            <Panel header="Liquidity Provider: Add some liquidity to earn 😄!" key={1} >

                                <p>Your Token Liquitidy: {tokenLiq ? parseInt(tokenLiq[0]) / 1e6 : 0} CCDS-TOKA-CCD </p>
                                <p>Is concordium-swap contract an operator of your account? {isContractOperator[0] ? "✅ you can add liquidity 😄" : "❌ use bellow button to change that 😓"} </p>
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
                                        onClick={() => add_liquidity()}>
                                        Click to add Liquidity
                                    </Button>
                                </Space>

                            </Panel>
                            <Panel header="Liquidity Provider: Remove some liquidity and get your 💰💰💰" key={2} >

                                <p>Your Token Liquitidy: {tokenLiq ? parseInt(tokenLiq[0]) / 1e6 : 0} CCDS-TOKA-CCD </p>
                                <p>Your TokenA: {tokenABal ? parseInt(tokenABal[0]) / 1e6 : 0} TOKA </p>
                                <p>Your CCD: {info ? Number(info.accountAmount) / 1e6 : 0} CCD </p>
                                <p>Is concordium-swap contract an operator of your account? {isContractOperator[0] ? "✅ you can remove liquidity 😄" : "❌ use bellow button to change that 😓"} </p>

                                <Row gutter={[16, 16]}>
                                    <Col span={24}> Amount of liquidity tokens to remove: </Col>
                                    <Col span={10}>
                                        <Slider
                                            disabled={!isContractOperator[0]}
                                            min={0}
                                            max={parseInt(tokenLiq ? tokenLiq[0] : "0") / 1e6}
                                            onChange={onChangeTokenLiqValue}
                                            value={typeof tokenLiqValue === 'number' ? tokenLiqValue : 0}
                                        />
                                    </Col>
                                    <Col span={4}>
                                        <InputNumber
                                            disabled={!isContractOperator[0]}
                                            min={0}
                                            max={parseInt(tokenLiq ? tokenLiq[0] : "0") / 1e6}
                                            style={{ margin: '0 16px' }}
                                            value={tokenLiqValue}
                                            onChange={onChangeTokenLiqValue}
                                        />
                                    </Col>
                                </Row>

                                <Button type="primary" loading={isAwaitingApproval}
                                    disabled={!isContractOperator[0] || tokenLiqValue == 0}
                                    onClick={() => rm_liquidity()}>
                                    Click to remove {tokenLiqValue} Liquidity tokens
                                </Button>
                            </Panel>
                        </Collapse>
                    </Space>
                :
                account ? <Spin /> : <NoAccount network={network?.name} />
            }
        </Suspense >

    );
}
