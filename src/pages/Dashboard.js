import React from "react";

import Wallet from "../components/Wallet";
import "./Dashboard.sass";

function Dashboard() {
    return(
        <React.StrictMode>
            <h1>Dashboard</h1>
            <div className="dashboard_main">
                <Wallet />
                <Wallet />
            </div>
        </React.StrictMode>
        
    );
}

export default Dashboard;