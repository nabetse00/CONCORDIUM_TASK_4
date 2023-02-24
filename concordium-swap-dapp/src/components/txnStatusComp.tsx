import {
    CheckCircleOutlined,
    CloseCircleOutlined,
    CloudDownloadOutlined,
    IssuesCloseOutlined
} from '@ant-design/icons';
import { WalletConnection } from "@concordium/react-components";
import { TransactionStatus, TransactionStatusEnum } from '@concordium/web-sdk';
import { Collapse, Timeline, TimelineItemProps} from "antd";
import { useEffect, useState } from "react";
import { getTransactionStatus } from "../contracts/invokeContractFn";


const { Panel } = Collapse;

// props 
export interface TxnStatusCompProps {
    hash: string
    connection: WalletConnection
    timeoutMilisec?: number
    callback: ()=> void
}

export function TxnStatusComponent(props: TxnStatusCompProps) {
    const [isPending, setIsPending] = useState<boolean>(true)
    const [isTxnDone, setIsTxnDone] = useState<boolean>(false)

    const [items, setItems] = useState<TimelineItemProps[]>(
        [
            {
                label: new Date(Date.now()).toLocaleString(),
                children: `Transaction [${props.hash}] sent`,
                color: "red",
            }
        ]
    )

    const timeoutMilisec = props.timeoutMilisec ? props.timeoutMilisec : 500;

    function changeItems(item: TimelineItemProps | undefined) {
        if (item) {
            if (items.length > 0 && items[items.length - 1].children !== item.children) {
                // txn state has changed add to array 
                setItems((items) => [...items, item]);
                return;
            }

            if (items.length == 0) {
                // first item add to array
                setItems((items) => [...items, item]);
                return;
            }

            if (items.length > 0 && items[items.length - 1].children === item.children) {
                // txn state doesnt changed 
                // don't add item but setItems to trigger use effect
                setItems([...items]);
                return;
            }

        }
    }

    function generateItem(txnState?: TransactionStatus): TimelineItemProps | undefined {
        if (txnState) {
            const time = new Date(Date.now()).toLocaleString()
            let itemChild: string;
            let icon: JSX.Element;
            let color: string;
            switch (txnState.status.toString()) {
                case TransactionStatusEnum.Committed:
                    itemChild = "Transaction committed"
                    icon = <CloudDownloadOutlined />
                    color = "grey"
                    break;
                case TransactionStatusEnum.Received:
                    itemChild = "Transaction recieved"
                    color = "blue"
                    icon = <IssuesCloseOutlined />
                    break;
                case TransactionStatusEnum.Finalized:
                    console.log("from txn Status finish")
                    itemChild = "Transaction Finalized"
                    color = "green"
                    icon = <CheckCircleOutlined />
                    break;

                default:
                    console.log("from txn Status ????")
                    itemChild = "Transaction is `unknown` possible error"
                    color = "red"
                    icon = <CloseCircleOutlined />
                    break;
            }

            const item: TimelineItemProps =
            {
                label: time,
                children: itemChild,
                dot: icon,
                color: color,
            }

            return item;
        }
    }

    useEffect(() => {
        let timerID: any;
        let txn: TransactionStatus | undefined = undefined;

        if (!isTxnDone) {
            getTransactionStatus(props.connection, props.hash).then(
                (txn_) => {
                    txn = txn_
                    if (txn_ && (txn_.status === TransactionStatusEnum.Finalized)) {
                        changeItems(generateItem(txn))
                        setIsPending(false)
                        setIsTxnDone(true)
                        props.callback()
                    }
                    setIsPending(false)
                    if (txn_ && (txn_.status !== TransactionStatusEnum.Finalized))
                        setIsPending(true)
                }
            ).catch(
                (err) => {
                    console.error(err)
                    setIsPending(false)
                }
            )


        }

        if (isPending) {
            // if pending set a timer to check txn status in 
            timerID = setTimeout(() => changeItems(generateItem(txn)), timeoutMilisec)
        }

        return () => {
            clearTimeout(timerID)
        }
    }, [props, items, isPending])

    return (
    <Collapse defaultActiveKey={['1']}>
        <Panel header="Transaction status" key={1} >
        <Timeline
            mode={"left"}
            items={items}
            pending={isPending}
        />
        </Panel>
      </Collapse>

    );
}


