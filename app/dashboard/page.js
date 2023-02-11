import Wallet from "../../components/widgets/wallet"
import styles from "./page.module.sass"

export const metadata = {
    title: "Dashboard"
}

export default function Dashboard() {
    return (
        <main className={styles.dashboard}>
            <h3 className={styles.dashboard_heading}>Dashboard</h3>
            <div className={styles.dashboard_walletrow}>
            <Wallet name="Cash" currency="INR"/>
            <span />
            <Wallet name="Cash" currency="INR"/>
                
            </div>
        </main>
    )
}