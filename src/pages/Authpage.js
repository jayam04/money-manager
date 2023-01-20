import * as firebaseui from "firebaseui";
import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";



export function Authpage() {
    // Initialize the FirebaseUI Widget using Firebase.
    const firebaseConfig = {
        apiKey: "AIzaSyCNDZnKFgve9y9WzbsGJtodDqTwH3OBv8Y",
        authDomain: "monymngr.firebaseapp.com",
        databaseURL: "https://monymngr-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "monymngr",
        storageBucket: "monymngr.appspot.com",
        messagingSenderId: "223749319252",
        appId: "1:223749319252:web:34084eb67970bb2d671bc1",
        measurementId: "G-RWCM3LLNH7"
      };

    const app = initializeApp(firebaseConfig);

    var ui = new firebaseui.auth.AuthUI(firebase.auth());

    ui.start('#firebaseui-auth-container', {
        signInOptions: [
        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
        }
        ],
        // Other config options...
    });

    return (
        <>
        <h1>Welcome to My Awesome App</h1>
        <div id="firebaseui-auth-container"></div>
        </>
    );
}

export default Authpage;