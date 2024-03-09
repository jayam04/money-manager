"use client";

import { createUser, getUser } from "@/lib/app/auth";
import { getFirebaseAuth } from "@/lib/firebase/auth";
import logger from "@/lib/logger";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from "react";

export default function AuthTest() {
  const [user, setUser] = useState(getUser());

    const auth = getFirebaseAuth();
    onAuthStateChanged(auth, (user) => {
      setUser(getUser());
    });

    // auth.signOut
    // createUser("tester1@crimsontwilight.in", "1m32*J8U9uJ()j)J09")
    // signInWithEmailAndPassword(auth, "tester1@crimsontwilight.in", "1m32*J8U9uJ()j)J09")

  return (
    <div>
      <h1>Auth Test</h1>
      {user && (
        <>
          <p>Email: {user.email}</p>
          <p>ID: {user.id}</p>
          <p>User: {user.name}</p>
          <p>Initials: {user.nameInitials}</p>
        </>
      )}
    </div>
  );
}
