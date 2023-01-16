import React from "react";

import Wallet from "../components/Wallet";

function Dashboard() {
    return(
        <React.StrictMode>
            <h1>Dashboard</h1>
            <Wallet />
            <Wallet />
        </React.StrictMode>
        
    );
}

export default Dashboard;