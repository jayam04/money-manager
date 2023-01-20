import React, { useState } from 'react';
import {initializeApp} from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import firebaseConfig from "../js/authentication/firebase.app.test"

// const firebaseConfig = {
//   apiKey: "your_api_key",
//   authDomain: "your_auth_domain",
//   databaseURL: "your_database_url",
//   projectId: "your_project_id",
//   storageBucket: "your_storage_bucket",
//   messagingSenderId: "your_messaging_sender_id",
//   appId: "your_app_id"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const auth = getAuth(app);
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(`Signed In! - $(user)`)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });

        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              // ...
            } else {
              // User is signed out
              // ...
            }
          });
    } catch (error) {
      setError(error.message);
    }

    
  };


  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Log in</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Login;
