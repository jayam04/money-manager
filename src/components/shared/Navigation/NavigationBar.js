import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
// import { useNavigate } from "react-router";
import { UilUser } from '@iconscout/react-unicons'
import { Space } from "antd";

import "./NavigationBar.sass"
import { auth } from "../../../config/firebase/firebase.config";

function NavigationBar(title) {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    // const navigate = useNavigate();
    
    

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setError(error)
            }
        });
      }, []);

    return (
        <React.StrictMode>
            <div className="dash_navigation">
                <Space>
                    <h3>{title}</h3>
                    <div className="dash_navigation_loginbutton">
                        <Space>
                            <UilUser />
                                
                            <h4>
                                {user
                                    ? user.displayName
                                    : 'PLEASE LOGIN!'
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