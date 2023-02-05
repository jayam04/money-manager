import React from "react";
import Account from "../../../components/widget-current-balance/Account";

export default function Dashboard() {
    return (
        <React.StrictMode>
            <Account
                // icon="../../assets/images/icons8-github.svg"
                icon="https://cdn-icons-png.flaticon.com/512/7603/7603309.png"
                currency="KYD"
                amount={1000}
                account="Cash"
                color={{
                    "bg": "#44dd55",
                    "accName": "blue",
                    "cash": "black"
                }}
            >
            </Account>
        </React.StrictMode>
    )
}