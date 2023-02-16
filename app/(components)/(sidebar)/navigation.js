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
        <>
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
            <NavButton name="About" symbol={<UilInfoCircle />} link="/aboutus" />
            <hr />
        </>
    )
}