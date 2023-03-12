import Wallet from "../../components/widgets/wallet"
import styles from "./page.module.sass"

export const metadata = {
    title: "Dashboard"
}

export default function Dashboard() {
    return (
        <main className={styles.dashboard}>
            <h1 id="title">Dashboard</h1>  {/* title id uses css from layout */}
            <div className={styles.dashboard_walletrow}>
            <Wallet name="Cash" currency="$"/>
            <span />
            <Wallet name="Cash" currency="INR"/>
            </div>
        </main>
    )
}