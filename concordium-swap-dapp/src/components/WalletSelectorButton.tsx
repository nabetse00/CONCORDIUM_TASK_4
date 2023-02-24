import { Button, StepsProps } from 'antd';
import {
    ConnectorType,
    useWalletConnectorSelector,
    WalletConnection,
    WalletConnectionProps,
} from '@concordium/react-components';
import {
    CloseOutlined,
    CheckOutlined,
    DisconnectOutlined
} from '@ant-design/icons';

export interface WalletSelectProps extends WalletConnectionProps {
    connection: WalletConnection | undefined;
    connectorType: ConnectorType;
    connectorName: string;
}
export function WalleSelectorButton(props: WalletSelectProps) {
    const { connection, connectorType, connectorName } = props;
    const { isSelected, isConnected, isDisabled, select } = useWalletConnectorSelector(
        connectorType,
        connection,
        props
    );
    const verb = isConnected ? 'Disconnect' : isSelected ? 'Using' : 'Use';
    const icon = isConnected ? <DisconnectOutlined /> : isSelected ? <CheckOutlined /> : <CloseOutlined />;
    return (
        <Button
            size='large'
            className="w-100"
            disabled={isDisabled}
            onClick={select}
            icon={icon}
        >
            {`${verb} ${connectorName}`}
        </Button>
    );
}