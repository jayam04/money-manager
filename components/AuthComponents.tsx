'use client'

import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";
import { Button } from "./ui/button";
import { auth } from "@/js/firebase/firebase";
import { useState } from "react";

export function SignInWithGoogleRedirect() {
    const provider = new GoogleAuthProvider;
    return (
        <Button onClick={() => signInWithRedirect(auth, provider)}>Sign In</Button>
    )
}

export function SignOutButton() {
    return (
        <Button onClick={() => signOut(auth)}>Sign Out</Button>
    )
}

export function SignInSignOutBundle() {
    const [isSignedIn, setIsSignedIn] = useState(false);
    onAuthStateChanged(auth, (user) => {
        setIsSignedIn(!!user);
    });
    return (
        <div>
            {isSignedIn ? <SignOutButton /> : <SignInWithGoogleRedirect />}
        </div>
    )
}
export function GreetUser() {
    const [username, setUsername] = useState("Guest");
    onAuthStateChanged(auth, (user) => {
        if (user?.displayName) {
            setUsername(user.displayName);
        }
    });
    return (
        <p>{"Hello, " + username}</p>
    )
}
