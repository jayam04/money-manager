import React from "react";

import './Wallet.sass';

function Wallet() {
    return(
        <React.StrictMode>
            <div className="wallet_wid">
                <img className="wallet_wid_img"></img>      
                <p className="wallet_wid_name">CASH</p>
                <p className="wallet_wid_amt">$9.99</p>
            </div>    
        </React.StrictMode>
    );
}

export default Wallet;