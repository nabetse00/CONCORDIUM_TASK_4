import { useState } from "react";

export default function Balance(props: { balance: bigint; price?: number; currency: "EUR" | "USD", currencyMultiplier?: number; size?: number; }) {
    const [fiatMode, setFiatMode] = useState(true);
    let floatCCD = Number(props.balance)/1e6 // microCCD => CCD 
    let displayBalanceCCD = (floatCCD).toFixed(6) + " CCD"; // in CCD
    let displayBalanceFiat: string = "";


    const price = props.price || props.currencyMultiplier || 0.01; // 1 cent per CCD 

    switch (props.currency) {
        case "EUR":
            displayBalanceFiat = (floatCCD * price).toFixed(2) + " €";
            break;
        case "USD":
            displayBalanceFiat = "$" + (floatCCD * price).toFixed(2);
            break;

        default:
            displayBalanceFiat = "$" + (floatCCD * price).toFixed(2);
            break;
    }


    return (
        <span
            style={{
                fontSize: props.size ? props.size : 24,
                cursor: "pointer",
            }}
            onClick={() => {
                setFiatMode(!fiatMode);
            }}>
            
                {fiatMode ? <div>{displayBalanceFiat}</div>  : <div>{displayBalanceCCD }</div>}
            
        </span>
    );
}