import React, { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { UilUser } from '@iconscout/react-unicons'
import { Space } from "antd";

import "./NavigationBar.sass"
import firebaseConfig from "../../../config/firebase/app.auth";
import { useNavigate } from "react-router";


function NavigationBar() {
    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app);

    const [user, setUser] = useState(null);
    

    onAuthStateChanged(auth, (user) => {

    if (user) {
        // user is signed in, see docs for a list of available properties
        const uid = user.uid;
        console.log(uid)
        setUser(user)
    } else {
        // user is signed out
        setUser(null)
        //redirect to auth page
        navigate("/auth")
    }
    });

    return (
        <React.StrictMode>
            <div className="dash_navigation">
                <Space>
                    <h3>Dashboard</h3>
                    <div className="dash_navigation_loginbutton">
                        <Space>
                            <UilUser />
                            <h4>{user.displayName}</h4>
                        </Space>
                    </div>
                </Space>
            </div>
        </React.StrictMode>
    )
}

export default NavigationBar;