import { Network, WalletConnection } from "@concordium/react-components";
import {
    ContractAddress,
    ContractContext, InstanceInfo
} from '@concordium/web-sdk';
import { Alert, Button, Card, Form, Input, InputNumber, Select, Space, Spin, Typography } from "antd";
import { Suspense, useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { ModalConfirm } from "../components/ModalConfirm";
import { NoAccount } from "../components/NoAccount";
import { TxnStatusComponent } from "../components/txnStatusComp";
import { CONTRACT_DATA } from "../config/contract";
import { StateView } from "../contracts/contractTypes";
import { getContractInfo, invokeStateView, updateBecomeTheRichestMethod } from "../contracts/invokeContractFn";
import { base } from "../main";


interface Props {
    connection?: WalletConnection,
    account?: string,
    network?: Network
}

const { Text, Link } = Typography;
const { Option } = Select;

export function BecomeTheRichestPage(): JSX.Element {
    const { connection, account, network }: Props = useOutletContext();;

    const [invkResult, setInvkResult] = useState<BigInt>()
    const [invkError, setInvkError] = useState<string>('')
    const [stateView, setStateView] = useState<StateView>()
    //const [schemaRpc, setSchemaRpc] = useState<SchemaRpcResult>()
    const [contract, setContract] = useState<InstanceInfo>()
    const [contractError, setContractError] = useState<string>('')
    const [amountMicroCcd, setAmountMicroCcd] = useState<number>(0)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAwaitingApproval, setIsAwaitingApproval] = useState(false);
    const [submittedTxHash, setSubmittedTxHash] = useState<string>();
    const navigate = useNavigate();



    const contractAddress: ContractAddress = {
        index: CONTRACT_DATA.index,
        subindex: CONTRACT_DATA.subIndex
    }

    const contractCtx: ContractContext = {
        contract: contractAddress,
        method: "become_the_richest.view",
    }

    useEffect(() => {

        if(!connection || !account ){
            console.log("redirect")
           navigate(base)
        }

        if (connection && account && !isAwaitingApproval) {

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

    }, [connection, account, isAwaitingApproval, submittedTxHash]);


    function updateContract(amountMicroCcd: number): void {
        if (connection && account) {
            setIsAwaitingApproval(true);
            let now = new Date(Date.now());
            const msg = `new richest ${now.toLocaleDateString()} Time ${now.toLocaleTimeString()} `;
            updateBecomeTheRichestMethod(connection,
                account,
                amountMicroCcd,
                msg).then(
                    (h) => {
                        setSubmittedTxHash(h)
                    }
                ).catch(
                    (err) => {
                        console.error(err);
                        setSubmittedTxHash(undefined)
                        setIsAwaitingApproval(false);
                    }
                )
        } else {
            console.error(new Error("Not Connected to wallet"));
        }
    }

    function callbackTxnStateComp() {
        setIsAwaitingApproval(false)
    }

    function onFinish(values: FormValues) {
        setIsModalOpen(true);
        //console.log('Received values of form: ', values);
        let amount = values.amount.value;
        if (values.amount.currency === "ccd")
            amount *= 1e6;
        //console.log('amount computed: ', amount);
        setAmountMicroCcd(amount);
    }

    // form 
    const [form] = Form.useForm();
    type Amount = {
        currency: string;
        value: number;
        validated: boolean;
    }
    type FormValues = {
        amount: Amount;
    }
    const values: FormValues = {
        amount: {
            currency: "ccd",
            value: 0,
            validated: false
        }
    }


    return (
        <Suspense fallback={<Spin />}>
            {(stateView && contract && account) ?
                <Space direction="vertical" size="middle">
                    <Alert message="Become the Richest"
                        description={<Space direction="vertical">
                            <Text>
                                {(account === stateView.richest_account.Some[0]) ?
                                    `You are the richest with ${Number(contract.amount.microCcdAmount) / 1e6} CCD in contract` :
                                    `${stateView.richest_account.Some[0]} is the richest with ${Number(contract.amount.microCcdAmount) / 1e6} CCD in contract.`
                                    + ` Add ${stateView.minimum_raise} to become the richest !`
                                }
                            </Text>
                            <Text>Please don't pay insane amounts so other user can test this contract without spending too much!</Text>
                        </Space>
                        }
                        type="info"
                        showIcon />
                    {connection && submittedTxHash &&
                        <TxnStatusComponent hash={submittedTxHash} connection={connection} callback={callbackTxnStateComp} />
                    }

                    <ModalConfirm
                        content={confirmContent(form.getFieldValue(['amount', 'value']), form.getFieldValue(['amount', 'currency']))}
                        confirm={() => {
                            setIsModalOpen(false)
                            // console.log("confirmed");
                            updateContract(amountMicroCcd)
                        }}
                        cancel={() => {
                            setIsModalOpen(false)
                            // console.log("cancel");
                        }} title={"Become the richest"}
                        showConfirmModal={isModalOpen}
                    />

                    <Card>
                        <Form
                            form={form}
                            layout="vertical"
                            onFinish={onFinish}
                            size="large"
                            colon={true}
                            initialValues={values}
                            title="Amount to become the richest"
                            requiredMark={true}
                            style={{ maxWidth: 600 }} >
                            <Form.Item name={["amount", "validated"]} label="Amount"
                                dependencies={[['amount', 'currency'], ['amount', 'value']]}
                                rules={[
                                    ({ getFieldValue }) => ({
                                        validator(_, _v) {
                                            const curr = getFieldValue(['amount', 'currency'])
                                            const value = getFieldValue(['amount', 'value'])
                                            const min = Number(stateView.minimum_raise) + Number(contract.amount.microCcdAmount) / 1e6 // this is in cents Euro 

                                            switch (curr) {
                                                case 'microCcd':
                                                    const min_micro = min * 1e6
                                                    if (value > min_micro) {
                                                        form.setFieldsValue({ amount: { validated: true } });
                                                        return Promise.resolve("microCdd Amount Ok");
                                                    }
                                                    //form.setFieldsValue({amount:{validation:false}});
                                                    return Promise.reject(new Error(`Must be greater than ${min_micro} microCcd @ 1 cent per CCD`));

                                                case 'ccd':
                                                    if (value > min) {
                                                        form.setFieldsValue({ amount: { validated: true } });
                                                        return Promise.resolve("microCdd Amount Ok");
                                                    }
                                                    //form.setFieldsValue({amount:{validation:false}});
                                                    return Promise.reject(new Error(`Must be greater than ${min} Ccd @ 1 cent per CCD`));
                                                default:
                                                    //form.setFieldsValue({amount:{validation:false}});
                                                    return Promise.reject(new Error("Input correct amount and currency"));
                                            }

                                        },
                                    }),
                                ]} >
                                <Input.Group compact>
                                    <Form.Item
                                        name={['amount', 'value']}
                                        dependencies={[['amount', 'currency'], ['amount', 'validation']]}
                                        noStyle
                                        rules={[
                                            { required: true, message: 'Value is required' },
                                        ]} >
                                        <InputNumber style={{ width: '50%' }} placeholder="Enter Ammount" />
                                    </Form.Item>
                                    <Form.Item
                                        name={['amount', 'currency']}
                                        dependencies={[['amount', 'value'], ['amount', 'validation']]}
                                        noStyle
                                        rules={[
                                            { required: true, message: 'Currency is required', validateTrigger: 'onChange' },
                                        ]} >
                                        <Select style={{ width: 100 }}>
                                            <Option value="ccd">CCD</Option>
                                            <Option value="microCcd">μCCD</Option>
                                        </Select>
                                    </Form.Item>
                                </Input.Group>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Pay to become the richest!
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>

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