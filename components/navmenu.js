import React from "react";
import styles from "./navmenu.module.sass"
import { UilSetting, UilWallet, UilCreateDashboard, UilExchange, UilInfoCircle, UilChartPie } from "@iconscout/react-unicons"
import Link from "next/link";


function NavButton({name, symbol}) {
    return (
        <button className={styles.button}>
            <div className={styles.button_symbol}>
            {symbol
                ? symbol
                : 'S'
            }
            </div>
            <span />
            <p>{name}</p>
        </button>
    )
}

export default function Navmenu() {
    return (
        <div className={styles.nav} >
            <Link href='/'>
                <img className={styles.nav_logo} src="/logo.png" alt="monymngr" />
            </Link>

            <hr />
            <NavButton name="Dashboard" symbol={<UilCreateDashboard />} />
            <hr />
            <NavButton name='Transactions' symbol={<UilExchange />} />
            <hr />
            <NavButton name='Wallets' symbol={<UilWallet />} />
            <hr />
            <NavButton name='Settings' symbol={<UilSetting />} />
            <hr />
            <NavButton name='Stats' symbol={<UilChartPie />} />
            <hr />
            <NavButton name='About Us' symbol={<UilInfoCircle />} />
            <hr />

        </div>
    )
}