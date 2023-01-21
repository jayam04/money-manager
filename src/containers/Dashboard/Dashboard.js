import React, { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../config/firebase/app.auth";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app);

    const [user, setuser] = useState(null);
    

    onAuthStateChanged(auth, (user) => {
    if (user) {
        // user is signed in, see docs for a list of available properties
        const uid = user.uid;
        console.log(uid)
        setuser(user)
        // ...
    } else {
        naviga
    }
    }
);



    return (
        <React.StrictMode>
            <h1>Dashboard</h1>
            <p>
            {!user
                ? "Who are you?"
                : `Hello! ${user.displayName}`}
            </p>

        </React.StrictMode>
    )
}

export default Dashboard;