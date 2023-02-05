import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
// import { useNavigate } from "react-router";
import { UilUser } from '@iconscout/react-unicons'
import { Space } from "antd";
import { Button } from "antd";
import use from "react-router";

import "./NavigationBar.sass"
import { auth } from "../../widget-current-balance/config/firebase/firebase.config";

function NavigationBar(title) {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    // const navigate = useNavigate();
    
    

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                setError(error)
            }
        });
      }, []);

    return (
        <React.StrictMode>
            <div className="dash_navigation">
                <div className="dash_navigation_title">
                    <a href="/"><img src="./favicon.ico"></img></a>
                    <h3>{title}</h3>
                </div>

                <div className="dash_navigation_login">
                    <UilUser />
                    <h4>
                    {user
                        ? user.displayName
                        : 'PLEASE LOGIN!'
                    }
                    </h4>
                </div>

                {/* <Space className="dash_navigation_space">
                
                    <Space>
                        <h3 className="dash_navigation_space_title">{title}</h3>
                    </Space>

                    <Space>
                        <div className="dash_navigation_space_login">
                            <Space>
                                <UilUser />
                                    
                                <h3>
                                    {user
                                        ? user.displayName
                                        : 'PLEASE LOGIN!'
                                    }
                                </h3>
                            </Space>
                        </div>
                    </Space>

                </Space> */}
            </div>
        </React.StrictMode>
    )
}

export default NavigationBar;