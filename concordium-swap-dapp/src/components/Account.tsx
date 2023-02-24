import { useEffect, useState } from "react";
import { AccountInfo } from '@concordium/web-sdk';

import Address from "./Address";
import Balance from "./Balance";
import { CCDdata, getEURPrice, getUSDPrice } from "../utils/kucoin";
import { Card, Space } from "antd";
import Meta from "antd/es/card/Meta";

export default function Account({ account, currency }: { account: AccountInfo; currency: "EUR" | "USD"; }) {
  const [price, setPrice] = useState<number>();
  let getPrice: () => Promise<CCDdata | undefined>;
  switch (currency) {
    case "EUR":
      getPrice = getEURPrice
      break;
    case "USD":
      getPrice = getUSDPrice
      break;
  }
  useEffect(
    () => {
      getPrice()
        .then((d) => {
          if (d) {
            let p = d['CCD']
            setPrice(p)
          }
        });
    }, [price]);

  return (
    <div style={{ display: "flex" }}>
      <span>
        {account.accountAddress && (

          <Card
            hoverable
            title="Account information"
          >
            <Space direction="vertical">

              <Meta title="Account Address" description={<Address address={account.accountAddress} fontSize={24} />} />
              <Meta title="Account Balance" description={<Balance balance={account.accountAmount} price={price} currency={currency} />} />
            </Space>
          </Card>
        )}
      </span>
    </div>
  );
}