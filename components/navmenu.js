'use client'

import React from "react";
import {
    UilSetting,
    UilWallet,
    UilCreateDashboard,
    UilExchange,
    UilInfoCircle,
    UilChartPie,
} from "@iconscout/react-unicons";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

import styles from "./navmenu.module.sass";


function NavButton({ name, symbol, link }) {
    const router = useRouter();

    const pathname = usePathname()
    console.log('navbutton build')

    return (
        <button 
            className={pathname === link
                ? `${styles.button_active} ${styles.button}`
                : styles.button
            }
            onClick={() => router.push(link)}
        >
            <div className={styles.button_symbol}>{symbol ? symbol : "S"}</div>
            <span />
            <p>{name}</p>
        </button>
    );
}

export default function Navmenu() {
    console.log('navmenu built')
    return (
        <div className={styles.nav}>
            <Link href="/">
                <img
                    className={styles.nav_logo}
                    src="/logo.png"
                    alt="monymngr"
                />
            </Link>

            <hr />
            <NavButton name="Dashboard" symbol={<UilCreateDashboard />} link="/dashboard" />
            <hr />
            <NavButton name="Transactions" symbol={<UilExchange />} link="/transactions" />
            <hr />
            <NavButton name="Wallets" symbol={<UilWallet />} link="/wallets" />
            <hr />
            <NavButton name="Settings" symbol={<UilSetting />} link="/settings" />
            <hr />
            <NavButton name="Stats" symbol={<UilChartPie />} link="/stats" />
            <hr />
            <NavButton name="About Us" symbol={<UilInfoCircle />} link="/aboutus" />
            <hr />
        </div>
    );
}
