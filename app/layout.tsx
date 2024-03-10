// Navigation Menu
"use client";

import * as React from "react";
import Link from "next/link";

import { Spectral, Nanum_Gothic } from "next/font/google";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,

  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import type { Metadata } from "next";
import "./globals.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getUser } from "@/lib/app/auth";
import { onAuthStateChanged } from "firebase/auth";
import { getFirebaseAuth } from "@/lib/firebase/auth";
import { createHash } from "crypto";


// export const metadata: Metadata = {
//     title: "spends",
//     description: "track your daily spends with ease",
// };

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})
const nanum = Nanum_Gothic({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menubarItems = {
    Transactions: "/transactions",
    Categories: "/categories",
    Accounts: "/accounts",
    "Construction Helper": "/construction",
  };

  let [currentUser, setCurrentUser] = React.useState(getUser())
  let [userEmailHash, setUserEmailHash] = React.useState(`https://github.com/avatar/${currentUser.email}`)

  onAuthStateChanged(getFirebaseAuth(), (user) => {
    let newUser = getUser()
    setCurrentUser(newUser)
    setUserEmailHash(createHash('sha256').update(newUser.email).digest('hex'))
  })
  return (
    <html lang="en-US">
      <body className={spectral.className}>
        {/* Navigation Menu */}
        <NavigationMenu className="m-1 max-w-full justify-start">
          <h1 className="text-lg text-emerald-600">spends</h1>
          {Object.entries(menubarItems).map(([label, href]) => (
            <NavigationMenuItem key={label}>
              <Link href={href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}

          {/* TODO: use tooltip instead of direct link, tooltip has signin/signup or editprofile/signout */}
          <Link className="ml-auto mr-2" href={'/auth'}>
          <Avatar >
            <AvatarImage src={`https://gravatar.com/avatar/${userEmailHash}/?d=""`} />
            <AvatarFallback>{currentUser.nameInitials}</AvatarFallback>
          </Avatar></Link>

        </NavigationMenu>
        <hr></hr>

        {/* Childern Here */}
        {children}
      </body>
    </html>
  );
}
