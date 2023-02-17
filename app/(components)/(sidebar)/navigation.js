'use client'

import {
    UilSetting,
    UilWallet,
    UilCreateDashboard,
    UilExchange,
    UilInfoCircle,
    UilChartPie,
} from "@iconscout/react-unicons";
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

export default function Navigation() {
    return (
        <div className="sidebar_nav">
            <NavButton name="Dashboard" symbol={<UilCreateDashboard />} link="/dashboard" />
            <NavButton name="Transactions" symbol={<UilExchange />} link="/transactions" />
            <NavButton name="Wallets" symbol={<UilWallet />} link="/wallets" />
            <NavButton name="Settings" symbol={<UilSetting />} link="/settings" />
            <NavButton name="Stats" symbol={<UilChartPie />} link="/stats" />
            <NavButton name="About" symbol={<UilInfoCircle />} link="/aboutus" />
        </div>
    )
}