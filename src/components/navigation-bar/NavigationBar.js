import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { UilUser } from '@iconscout/react-unicons'

import "./NavigationBar.sass"
import { auth } from "../../config/firebase/firebase.config";

function NavigationBar(title) {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);


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
            </div>
        </React.StrictMode>
    )
}

export default NavigationBar;