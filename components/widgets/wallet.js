import styles from "./wallet.module.sass"

import { UilWallet 
    } from '@iconscout/react-unicons'

export default function Wallet({name, currency}) {
    return (
        <div className={styles.wallet}>
            <div className={styles.wallet_icon}>
                <UilWallet />
            </div>

            <div className={styles.wallet_desc}>
                <h3>{name}</h3>
                <p>{currency} amount</p>
            </div>
        </div>
    )
}