// Navigation Menu
"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import type { Metadata } from "next";
import "./globals.css";

// export const metadata: Metadata = {
//     title: "spends",
//     description: "track your daily spends with ease",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menubarItems = {
    Dashboard: "/",
    Transactions: "/transactions",
  };
  return (
    <html lang="en-US">
      <body>
        {/* Navigation Menu */}
        <NavigationMenu>
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
        </NavigationMenu>
        <hr></hr>

        {/* Childern Here */}
        {children}
      </body>
    </html>
  );
}
