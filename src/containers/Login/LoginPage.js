import React from "react";
import { useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";

import { auth } from "../../config/firebase/firebase.config";


function Login() {

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

            setError(error)

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
            </div>

        </React.StrictMode>
    )
}


export default Login;