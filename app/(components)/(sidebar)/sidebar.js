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
            <button
                className="sidebar_togglebutton"
            >
            <i className="uil uil-angle-double-left" />
            </button>


            <div className="sidebar_title">
                <Link href="/">
                    <Image
                        className="sidebar_title_logo"
                        src="/logo.png"
                        alt="monymngr"
                        width={150}
                        height={50}
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
