import React, { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router";
import { UilUser } from '@iconscout/react-unicons'
import { Space } from "antd";

import "./NavigationBar.sass"
import firebaseConfig from "../../../config/firebase/app.auth";


function NavigationBar() {
    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
        } else {
            setUser(null)
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
                                
                            <h4>
                                {user
                                    ? user.displayName
                                    : 'Loading'
                                }
                            </h4>
                        </Space>
                    </div>
                </Space>
            </div>
        </React.StrictMode>
    )
}

export default NavigationBar;