import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navigation from "./navigation"
import Footer from "./footer"
import "./sidebar.sass"





export default function Navmenu() {
    console.log('navmenu built')
    return (
        <div className="sidebar">
            <div className="sidebar_logo">
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="monymngr"
                        width={226}
                        height={75}
                    />
                </Link>
            </div>

            <hr />

            <Navigation />

            <hr />

            <Footer />

            
        </div>
    );
}
