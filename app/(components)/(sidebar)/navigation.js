'use client'

import styles from "./navigation.module.sass";
import "./navigation.sass"
import { useRouter, usePathname } from "next/navigation";



function NavButton({ name, symbol, link }) {
    const router = useRouter();

    const pathname = usePathname()
    console.log('navbutton build')

    return (
        <button 
            className={pathname === link
                ? "sidebar_nav_button sidebar_nav_buttonactive"
                : "sidebar_nav_button"
            }
            onClick={() => router.push(link)}
        >
            <div className="sidebar_nav_buttonicon">{symbol ? <i className={`uil uil-${symbol}`} /> : "S"}</div>
            <span />
            <p>{name}</p>
        </button>
    );
}

export default function Navigation() {
    return (
        <div className="sidebar_nav">
            <NavButton name="Dashboard" symbol="create-dashboard" link="/dashboard" />
            <NavButton name="Transactions" symbol="exchange" link="/transactions" />
            <NavButton name="Accounts" symbol="wallet" link="/accounts" />
            <NavButton name="Settings" symbol="setting" link="/settings" />
            <NavButton name="Stats" symbol="chart-pie" link="/stats" />
            <NavButton name="About" symbol="info-circle" link="/aboutus" />
        </div>
    )
}