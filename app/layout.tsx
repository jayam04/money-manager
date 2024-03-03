// Navigation Menu
"use client";

import * as React from "react";
import Link from "next/link";

import { Spectral } from "next/font/google";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import type { Metadata } from "next";
import "./globals.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// export const metadata: Metadata = {
//     title: "spends",
//     description: "track your daily spends with ease",
// };

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
  };
  return (
    <html lang="en-US">
      <body className={spectral.className}>
        {/* Navigation Menu */}
        <NavigationMenu className="m-1">
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
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/93824505?v=4" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
        </NavigationMenu>
        <hr></hr>

        {/* Childern Here */}
        {children}
      </body>
    </html>
  );
}
