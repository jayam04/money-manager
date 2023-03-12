'use client'

import styles from "./wallet.module.sass"
import MoneyTwoToneIcon from '@mui/icons-material/MoneyTwoTone';


export default function Wallet({name, currency}) {
    return (
        <div className={styles.wallet}>
            {/* <div className={styles.wallet_icon}>
                <MoneyTwoToneIcon />
            </div>

            <div className={styles.wallet_desc}>
                <h3>{name}</h3>
                <p>{currency} amount</p>
            </div> */}
            <div className={styles.head}>
                <MoneyTwoToneIcon />
                <p>{name}</p>
            </div>
            <div className={styles.body}>
                <p>{currency}</p>
            </div>
        </div>
    )
}