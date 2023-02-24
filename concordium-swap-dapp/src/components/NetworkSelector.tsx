// import { Dropdown } from 'react-bootstrap';
import type { MenuProps } from 'antd';
import { Dropdown, Space, message } from 'antd';
import { Network } from '@concordium/react-components';
import { DesktopOutlined, DownOutlined, ClusterOutlined } from '@ant-design/icons';

interface Props {
    selected: Network;
    options: Array<Network>;
    select: (n: Network) => void;
}

export function NetworkSelector({ selected, options, select }: Props) {

    let items: MenuProps['items'] = [];
    let i = 1

    const isDanger = (n: Network) => {
        if (n.name == "mainnet") {
            return true
        }
        return false
    }

    for (let n of options) {

        items.push(
            {
                label: n.name,
                key: i,
                onClick: () => select(n),
                danger: isDanger(n),
                icon: (!isDanger(n))? <DesktopOutlined />:<ClusterOutlined />,
            },
        )
        i++;
    }

    const handleMenuClick = (e: any) => {
        message.info('Click on menu item.');
        console.log('click', e);
    };

    return (
        <Space direction="vertical">
            <Dropdown.Button size='large' menu={{ items }} onClick={handleMenuClick} icon={<DownOutlined />} arrow danger={isDanger(selected)}>
                {selected.name}
            </Dropdown.Button>
        </Space>
    );
};