import { Avatar, Button, Skeleton, Space, Typography } from "antd";
import Link from "antd/es/typography/Link";
import { useContext } from "react";
import Blockies from "react-blockies";
import { NetworkContext } from "../App";


export default function Address(props: { address?: string; minimized?: boolean; fontSize?: number; onChange?: any; }): JSX.Element {
    const networkCtx = useContext(NetworkContext);
    const address = props.address;
    let displayAddress = address?.slice(0, 5) + "..." + address?.slice(-4);
    // const etherscanLink = 'https://'+ networkCtx.network.name + '.ccdscan.io/?dcount=1&dentity=account&daddress=' + address
    const scanLink = networkCtx.network.ccdScanBaseUrl + '/?dcount=1&dentity=account&daddress=' + address
    return (
        <>
            {address &&
                <Button type="dashed" size="large">
                    <Space direction="horizontal">
                        <Avatar size="small" icon={<Blockies seed={address.toLowerCase()} size={8} scale={props.fontSize ? props.fontSize / 7 : 4} />} />
                        <Link copyable={{ text: address }} href={scanLink} target="_blank" rel="noopener noreferrer">
                            {displayAddress}
                        </Link>
                    </Space>
                </Button>
            }
        </>
    );
}