import { Alert } from "antd";

export function NoAccount(props: { network: string | undefined; }): JSX.Element {
    return (
        <Alert type="error" message="No account connected" description={"Please connect to your wallet on " + props.network} />
    );
}