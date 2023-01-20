import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, child, get } from "firebase/database";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNDZnKFgve9y9WzbsGJtodDqTwH3OBv8Y",
  authDomain: "monymngr.firebaseapp.com",
  databaseURL: "https://monymngr-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "monymngr",
  storageBucket: "monymngr.appspot.com",
  messagingSenderId: "223749319252",
  appId: "1:223749319252:web:34084eb67970bb2d671bc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// // TODO: Replace the following with your app's Firebase project configuration
// // See: https://firebase.google.com/docs/web/learn-more#config-object


// // Initialize Firebase


// // Initialize Realtime Database and get a reference to the service
// const database = getDatabase(app);


export function writeUserData(userId, name, email, imageUrl) {
    const firebaseConfig = {
        databaseURL: "https://monymngr-default-rtdb.europe-west1.firebasedatabase.app/",
    };
    const db = getDatabase(app);

    set(ref(db, 'users/' + userId), {
        username: name,
        email: email,
        profile_picture : imageUrl
    });
}

export function readUserData(userId){
    console.log(userId);
    const dbRef = ref(getDatabase());
    get(child(dbRef, `${userId}`)).then((snapshot) => {
    if (snapshot.exists()) {
        console.log(`${userId}`);
        console.log(snapshot.val());
        console.log('settings');
        console.log(snapshot.val().settings);
        console.log('encryption');
        console.log(snapshot.val().settings.encryption)
    } 
    else {
        console.log("No data available");
    }
    }).catch((error) => {
    console.error(error);
    });

}

export function authUser(email) {

    const actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        url: 'http://localhost:3000/',
        // This must be true.
        handleCodeInApp: true,
        iOS: {
          bundleId: 'com.example.ios'
        },
        android: {
          packageName: 'com.example.android',
          installApp: true,
          minimumVersion: '12'
        },
        dynamicLinkDomain: 'example.page.link'
      };

    const auth = getAuth();
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        console.log('auth-done!');
        window.localStorage.setItem('emailForSignIn', email);
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
    });
}
export default readUserData;