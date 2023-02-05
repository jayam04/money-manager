import React, { useEffect } from "react";
import { useState } from "react";
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router";
import { Button } from "antd";
import { GoogleOutlined } from "@ant-design/icons";

import { auth } from "../../config/firebase/firebase.config";
import NavigationBar from "../../components/navigation-bar/NavigationBar";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // user is signed in, see docs for a list of available properties
                const uid = user.uid;
                console.log(uid);
                setUser(user);
            } else {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                // user is signed out
                setError(error);
                console.log(error);
                //redirect to auth page
            }
        });
    }, []);

    // setUser(auth.currentUser);

    // const User = auth.currentUser;
    // console.log(User)

    function handleLogin() {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(`Signed In - ${user}`);
                console.log(user);

                navigate("/dashboard");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                setError(error);

                console.log(errorCode, errorMessage);

                return (
                    <React.StrictMode>
                        <h2>{{ errorCode }}</h2>
                        <h3>{{ errorMessage }}</h3>
                    </React.StrictMode>
                );
            });
    }

    function handleSignUp() {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                setUser(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log(errorCode, errorMessage);
                setError(error);
            });
    }

    function handleSignOut() {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
            });
    }

    function handleGoogleLogin() {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential =
                    GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential =
                    GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    return (
        <React.StrictMode>
            {NavigationBar("Authentication")}

            <h6>
                {user
                    ? `${user.displayName}, you are signed and can visit dashboard`
                    : "Please sign in"}
            </h6>

            <div>
                <h4>Login</h4>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <Button onClick={handleLogin} shape="round">
                    Log in
                </Button>
                <Button onClick={handleSignUp} type="primary" shape="round">
                    Sign Up
                </Button>

                <Button onClick={handleSignOut} shape="round">
                    Log Out
                </Button>
            </div>

            <Button
                shape="circle"
                size="large"
                onClick={handleGoogleLogin}
                icon={<GoogleOutlined />}
            ></Button>
        </React.StrictMode>
    );
}

export default Login;
