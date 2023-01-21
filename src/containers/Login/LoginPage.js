import React, { StrictMode } from "react";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

import firebaseConfig from "../../config/firebase/app.auth"


function Login() {
    console.log(firebaseConfig)
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    // createUserWithEmailAndPassword(auth, email, password)
    // .then((userCredential) => {
    //     // Signed in 
    //     const user = userCredential.user;
    //     // ...
    // })
    // .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // ..
    // });        
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    
    function handleSubmit() {
        
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(`Signed In - ${user}`);
            console.log(user)
          })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorCode, errorMessage)

            return (
                <React.StrictMode>
                    <h2>{{ errorCode }}</h2>
                    <h3>{{ errorMessage }}</h3>
                </React.StrictMode>
            )
          });
    };
        
    return (
        <React.StrictMode>
            <h1>Auth</h1>
            <div>
            <label>
                Email:
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <br />
            <button onClick={handleSubmit}>Log in</button>
            {error && <p>{error}</p>}
            </div>

        </React.StrictMode>
    )
}


export default Login;