import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router";
import { UilUser } from '@iconscout/react-unicons'
import { Space } from "antd";

import "./NavigationBar.sass"
import { auth } from "../../../config/firebase/firebase.config";


function NavigationBar() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                setUser(null)
                navigate("/auth")
            }
        });
      }, []);

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