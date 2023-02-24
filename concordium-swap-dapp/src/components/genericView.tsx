import { Descriptions } from 'antd';
import { StateView } from '../contracts/contractTypes'


export function StateViewCompoment(name: string, obj: StateView, amount: number) {


    return (
        <Descriptions title={"View " + name} column={1} bordered>
            <Descriptions.Item label="Richest account" >{obj.richest_account.Some}</Descriptions.Item>
            <Descriptions.Item label="Richest amount in microCCD" >{amount}</Descriptions.Item>
            <Descriptions.Item label="Richest message" >{obj.richest_message}</Descriptions.Item>
            <Descriptions.Item label="Richest minimun raise" >{Number(obj.minimum_raise)}</Descriptions.Item>
        </Descriptions>
    );

}