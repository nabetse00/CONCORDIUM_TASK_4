import {
  Network, useConnect,
  useConnection,
  useWalletConnectorSelector,
  WalletConnectionProps,
  withJsonRpcClient,
  WithWalletConnector
} from '@concordium/react-components';
import { createContext, createElement, useContext, useEffect, useRef, useState } from 'react';
import './App.css';
import { NetworkSelector } from './components/NetworkSelector';
import { MAINNET, TESTNET } from './config/networks';

import {
  ContactsOutlined, MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  DollarCircleOutlined,
  InfoCircleOutlined
} from '@ant-design/icons';
import { Alert, Button, Col, Layout, Menu, MenuRef, Row, Space, Spin, theme } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ConnectedAccount } from './components/ConnectedAccount';
import { WalleSelectorButton } from './components/WalletSelectorButton';
import { BROWSER_WALLET, WALLET_CONNECT } from './config/wallet';
import './index.css';
import { errorString } from './utils/errors';
//import logo from './assets/concordium-logo-dark.svg'
import logo from './assets/concordium_logo_white.webp'
import { base } from './main'

const { Header, Sider, Content } = Layout;

export const NetworkContext = createContext({ network: TESTNET, setNetwork: (n: Network) => { } });
//export const WalletContext = createContext({ network: TESTNET, setNetwork: (n: Network) => { } });

export function Root(): JSX.Element {
  const [network, setNetwork] = useState(TESTNET);

  return (
    <NetworkContext.Provider value={{ network, setNetwork }}>
      <WithWalletConnector network={network}>{(props) => <App {...props} />}</WithWalletConnector>
    </NetworkContext.Provider>
  );
}

export function App(props: WalletConnectionProps) {
  const { activeConnectorType, activeConnector, activeConnectorError, network, connectedAccounts, genesisHashes } =
    props;
  const networkCtx = useContext(NetworkContext);
  const { connection, setConnection, account, genesisHash } = useConnection(connectedAccounts, genesisHashes);
  const { connect, isConnecting, connectError } = useConnect(activeConnector, setConnection);
  const [rpcGenesisHash, setRpcGenesisHash] = useState<string>();
  const [rpcError, setRpcError] = useState('');
  const [collapsed, setCollapsed] = useState(false);
  const refConnectButtons = useRef<HTMLDivElement>(null);
  const refNavBar = useRef<MenuRef>(null);
  const location = useLocation();

  const { isSelected, isConnected, isDisabled, select } = useWalletConnectorSelector(
    BROWSER_WALLET,
    connection,
    props
  );

  const [outletProps, setOutletProps] = useState({ connection, account, network, refNavBar, refConnectButtons })

  const footerText = "Nabetse ©2023 Created by Nabetse"

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    const timestamp = Date.now();
    const date = new Date(timestamp)
    if (!connection && !activeConnector) {
      console.log(date.toLocaleTimeString() + "> the is NO connection")
      select()
    }
    if (connection) {
      console.log(date.toLocaleTimeString() + "> the is a connection")
      setRpcGenesisHash(undefined);
      withJsonRpcClient(connection, async (rpc) => {
        const status = await rpc.getConsensusStatus();
        return status.genesisBlock;
      })
        .then((hash) => {
          setRpcGenesisHash(hash);
          setRpcError('');
        })
        .catch((err) => {
          setRpcGenesisHash(undefined);
          setRpcError(errorString(err));
        });
    }

    if (connection && account) {
      setOutletProps({ connection, account, network, refNavBar, refConnectButtons })
    }

    if (connection && !account) {
      setOutletProps({ connection, account, network, refNavBar, refConnectButtons })
    }
  }, [connection, genesisHash, network, account, activeConnector]);


  function menuSelectedKeyFromLocation(): string[] {
    const path = location.pathname;
    switch (path) {
      case base:
        return ['0'];

      case base + "account-info":
        return ['1'];

      case base + "token-info":
        return ['2'];

      case base + "concordium-swap":
        return ['3'];

      default:
        return ['0'];
    }

  }


  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Link to={base}>
            <img src={logo} className="logo" alt="Concordium" />
          </Link>

          <Menu
            ref={refNavBar}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            selectedKeys={menuSelectedKeyFromLocation()}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: (
                  <Link to={base + "account-info"}>
                    Account Info
                  </Link>),
              },
              {
                key: '2',
                icon: <ContactsOutlined />,
                label: (<Link to={base + "token-info"}>
                  TokenA displenser 
                </Link>),
              },
              {
                key: '3',
                icon: <DollarCircleOutlined />,
                label: (<Link to={base + "concordium-swap"}>
                  Concordium Swap
                </Link>),
              },

            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Row>
              <Col span={3}>
                {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: () => setCollapsed(!collapsed),
                })}
              </Col>
              <Col span={4} flex="auto" />
              <Col span={12} ref={refConnectButtons}>
                <Space size="small">
                  <ConnectedAccount connection={connection} account={account} network={network} />
                  <WalleSelectorButton
                    connectorName={'Browser wallet'}
                    connectorType={BROWSER_WALLET}
                    connection={connection}
                    {...props} />
                  <WalleSelectorButton
                    connectorType={WALLET_CONNECT}
                    connectorName="WalletConnect"
                    connection={connection}
                    {...props}
                  />
                  <>
                    {
                      activeConnector && !account && (
                        <Button size='large' onClick={connect} disabled={isConnecting}>
                          {isConnecting && 'Connecting...'}
                          {!isConnecting && activeConnectorType === BROWSER_WALLET && 'Connect Browser Wallet'}
                          {!isConnecting && activeConnectorType === WALLET_CONNECT && 'Connect Mobile Wallet'}
                        </Button>
                      )
                    }
                  </>
                  <NetworkSelector selected={networkCtx.network} options={[TESTNET, MAINNET]} select={networkCtx.setNetwork} />
                </Space>
              </Col>
            </Row>


          </Header>
          <Content
            style={{
              margin: '48px 48px',
              padding: 48,
              minHeight: "100vh",
              background: colorBgContainer,
            }} >

            <Space align="center" direction="vertical" size="large" style={{ display: 'flex' }}>
              <Outlet context={outletProps} />

              <hr />
              {activeConnectorError && <Alert message="activeConnectorError " description={activeConnectorError} type="error"
                showIcon />}

              {!activeConnectorError && activeConnectorType && !activeConnector && <Spin />}
              {
                connectError && <Alert message="connectError " description={connectError} type="error"
                  showIcon />
              }
            </Space>

          </Content>
          <Footer style={{ textAlign: 'center' }}>
            {footerText}
          </Footer>
        </Layout>

      </Layout>
    </>
  );
}


export default Root
