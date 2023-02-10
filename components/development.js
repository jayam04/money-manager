import styles from "./development.module.sass"

export default function Warning() {
    return (
        <main>
            <div className={styles.main}>
                <p><b>warning!</b> you are viewing development version, <b>don't share your credentials.</b></p>
            </div>
        </main>
    )
}