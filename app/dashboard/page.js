import Wallet from "../../components/widgets/wallet"
import styles from "./page.module.sass"


export default function Dashboard() {
    return (
        <main className={styles.dashboard}>
            <h3 className={styles.dashboard_heading}>Dashboard</h3>
            <div>
                <Wallet name="Cash" currency="INR"/>
                
            </div>
        </main>
    )
}