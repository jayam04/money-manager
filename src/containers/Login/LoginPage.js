import React, { StrictMode } from "react";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

import firebaseConfig from "../../config/firebase/app.auth"
import { useNavigate } from "react-router";


function Login() {
    console.log(firebaseConfig)
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const navigate = useNavigate();

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
    const [user, setUser] = useState(null);
    
    onAuthStateChanged(auth, (user) => {

        if (user) {
            // user is signed in, see docs for a list of available properties
            const uid = user.uid;
            console.log(uid);
            setUser(user);
        } else {
            // user is signed out
            setUser(null)
            //redirect to auth page
            //...
        }
        });

    function handleSubmit() {
        
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(`Signed In - ${user}`);
            console.log(user)

            navigate('/dashboard')
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
            <h2>
                {user
                    ? `${user.displayName}, you are signed and can visit dashboard`
                    : 'Please sign in'
                }
            </h2>
            <div>
            <h4>Login</h4>
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