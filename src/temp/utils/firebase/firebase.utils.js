import { initializeApp } from "firebase/app";

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
