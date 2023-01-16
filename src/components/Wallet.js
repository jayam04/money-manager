import React from "react";

import './Wallet.sass';

function Wallet() {
    return(
        <React.StrictMode>
            <div className="wallet_wid">      
                <p>CASH</p>
                <p>$9.99</p>
            </div>    
        </React.StrictMode>
    );
}

export default Wallet;