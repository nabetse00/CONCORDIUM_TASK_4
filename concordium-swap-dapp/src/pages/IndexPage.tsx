import { Network, WalletConnection } from "@concordium/wallet-connectors";
import { Alert, Button, MenuRef, Space, Spin, Tour, TourProps, Typography } from "antd";
import { RefObject, Suspense, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { NoAccount } from "../components/NoAccount";

interface Props {
    connection?: WalletConnection,
    account?: string,
    network?: Network,
    refNavBar: RefObject<MenuRef>,
    refConnectButtons: RefObject<HTMLDivElement>
}

const { Text } = Typography

export function IndexPage() {
    const { connection, account, network, refNavBar, refConnectButtons }: Props = useOutletContext()

    const [open, setOpen] = useState<boolean>(false);

    const list = refNavBar.current ? refNavBar.current.menu?.list : null;
    const connbuttons = refConnectButtons.current ? refConnectButtons.current : null
    const steps: TourProps['steps'] = [
        {
            title: 'Connect Account',
            description: 'Choose browser extension or WalletConnect then connect your Wallet',
            placement: 'bottomLeft',
            target: connbuttons,
        },
        {
            placement: 'rightTop',
            title: 'Use Dapp',
            description: 'Use this navigation bar to display information or update the contract',
            target: list,
        },
    ];

    return (
        <Suspense fallback={<Spin />}>
            {
                (account && connection && network) ?
                    <>
                        <h1>Become the Richest demo Dapp</h1>
                        <Alert
                            showIcon
                            message={<Text>Please use navigation bar to get some information</Text>}
                            description={
                                <Space direction="vertical">
                                    <ul>
                                        <li> <Link to="account-info/">Your Account Info</Link></li>
                                        <li> <Link to="token-info/">Token A info and dispenser</Link></li>
                                        <li> <Link to="contract/">Contract Current Data</Link></li>
                                        <li> <Link to="concordium-swap/">Concorduim swap pair (for now on testnet 😉)</Link> </li>
                                    </ul>

                                </Space>
                            } />
                    </>
                    :
                    <Space direction="vertical">

                        <NoAccount network={network?.name} />
                        <Button type="primary" onClick={() => setOpen(true)} >
                            Instructions
                        </Button>

                        <Tour open={open} onClose={() => setOpen(false)} steps={steps}
                            indicatorsRender={(current, total) => (
                                <span>
                                    {current + 1} / {total}
                                </span>
                            )}
                        />
                    </Space>
            }


        </Suspense>
    );
}