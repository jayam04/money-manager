import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCNDZnKFgve9y9WzbsGJtodDqTwH3OBv8Y",
    authDomain: "monymngr.firebaseapp.com",
    databaseURL: "https://monymngr-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "monymngr",
    storageBucket: "monymngr.appspot.com",
    messagingSenderId: "223749319252",
    appId: "1:223749319252:web:582ebcc56c18f28b671bc1",
    measurementId: "G-P51ZM058YE"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
