import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";

import firebaseConfig from "../../config/firebase/app.auth";
import NavigationBar from "../../components/shared/Navigation/NavigationBar";
import Account from "../../components/shared/Account/Account";

import { UilWallet } from '@iconscout/react-unicons'

function Dashboard() {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // user is signed in, see docs for a list of available properties
                const uid = user.uid;
                console.log(uid);
                setUser(user);
            } else {
                // user is signed out
                setUser(null);
                //redirect to auth page
                navigate("/auth");
            }
        });
    });

    console.log(user);

    return (
        <React.StrictMode>
            {NavigationBar('Dashboard')}
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
    );
}

export default Dashboard;
