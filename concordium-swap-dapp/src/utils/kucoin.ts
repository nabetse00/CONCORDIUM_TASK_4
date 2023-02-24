import axios from 'axios'
import WebSocket from 'ws'

/*
curl "https://api.kucoin.com/api/v1/prices?currencies=CCD&base=EUR"    
{"code":"200000","data":{"CCD":"0.01113068"}}
*/

const END_POINT_URL = "https://api.kucoin.com/api/v1"
// const BASE_URL = "https://sandbox.kucoin.com/api/v1"
const PRICES = "/prices"
//?currencies=CCD&base=EUR"
const WSS_TOKEN = "/bullet-public"


export interface CCDdata {
    [key: string]: number
}
interface CCDPriceResponse {
    code: number;
    data: CCDdata;
}

interface WssResponse {
    code: string
    data: {
        token: string;
        instanceServers: [
            {
                endpoint: string;
                encrypt: boolean;
                protocol: string
                pingInterval: number;
                pingTimeout: number;
            }
        ]
    }
}


interface WssMessage {
    type: string;
    topic: string;
    subject: string;
    data: any;
}

interface WssTickerData {
    bestAsk: number;
    bestAskSize: number;
    bestBid: number;
    bestBidSize: number;
    price: number;
    sequence: number;
    size: number;
    time: number;
}




export async function getWssToken(): Promise<WssResponse | undefined> {
    const response = await axios.post<WssResponse>(
        END_POINT_URL + WSS_TOKEN,
        {},
        {
            responseType: "json",
        }
    );

    if (response.status == axios.HttpStatusCode.Ok) {
        return response.data;
    }

}



export async function getEURPrice(): Promise<CCDdata | undefined> {
    const response = await axios
        .get<CCDPriceResponse>(END_POINT_URL + PRICES,
            {
                responseType: "json",
                params: {
                    currencies: "CCD",
                    base: "EUR"
                }
            }
        );
    if (response.status == axios.HttpStatusCode.Ok) {
        return response.data.data;
    }
}

export async function getUSDPrice(): Promise<CCDdata | undefined> {
    const response = await axios
        .get<CCDPriceResponse>(END_POINT_URL + PRICES,
            {
                responseType: "json",
                params: {
                    currencies: "CCD",
                    base: "USD"
                }
            }
        );
    if (response.status == axios.HttpStatusCode.Ok) {
        return response.data.data;
    }
}

export async function priceFeedWssUSD(callbackFn: (p:number)=> void, id? :number ): Promise<WebSocket> {

    let wss = await getWssToken()
    let endpoint = wss?.data.instanceServers[0].endpoint
    let token = wss?.data.token
    console.log("server is " + endpoint)
    console.log("token is " + token)

    let ws = new WebSocket(endpoint + "/endpoint?token=" + token)
    let i = id? id:1; 
    let sub = {
        "id": i,                         
        "type": "subscribe",
        "topic": "/market/ticker:CCD-USDT",
        "privateChannel": false,                    
        "response": true
    }

    ws.onopen = (event) => {
        ws.send(JSON.stringify(sub));
    };

    let price: number;
    ws.onmessage = function (event) {

        const json: WssMessage = JSON.parse(event.data.toString());
        try {
            if (json.topic === "/market/ticker:CCD-USDT") {
                let data: WssTickerData = json.data
                // console.log("====> " + data.price)// + JSON.stringify(data))
                callbackFn(data.price);
            } else {
                // console.log("****> " + JSON.stringify(json))
            }
        } catch (err) {
            console.log(err);
        }
    };
    
    return ws;
}

/*
function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

let ws = await priceFeedWssUSD( (p:number) => {console.log("price fn ======> " + p)})

await delay(5000);
await ws.close()
*/