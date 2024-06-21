import styles from './Dailies.module.css'

// https://maplestory.fandom.com/wiki/Maple_Guide 
// will be used for bosses ui here
// maybe add a clock as well to mimic server time for these things

export default function Dailies() {
    return (
        <div className={styles.mainBox}>
            <div className={styles.customGoals}>
                <h1>Today's session goals</h1>
                <button>create task</button>
            </div>
        <div className={styles.dailyParentBox}>
            <div className={styles.dailySection}>
                <h2>Bosses</h2>
                <div className={styles.bossSeperation}>
                    <div>
                        <h3>Pre-Tene</h3>
                        <p>boo its pinkbean</p>
                    </div>
                    <div>
                        <h3>Post-Tene</h3>
                        <p>normal gloom :0</p>
                    </div>
                </div>
            </div>
            <div className={styles.dailySection}>
                <h2>Arcane Dailies</h2>
            </div>
            <div className={styles.dailySection}>
                <h2>Growth</h2>
            </div>
        </div>
    </div>
    )
}