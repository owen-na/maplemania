import styles from './Dailies.module.css'
import NavBar from '@/Components/Navbar/Navbar'
import LongInfoNode from '@/Components/InfoNodeLong/LongInfoNode'

// https://maplestory.fandom.com/wiki/Maple_Guide 
// will be used for bosses ui here
// maybe add a clock as well to mimic server time for these things

export default function Dailies() {
    return (
        <div>
        <NavBar />
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
                {/* will need to decide to either change it up div name wise or smthg else */}
                <h2>Arcane Dailies</h2>
                <LongInfoNode imageHref="https://media.maplestorywiki.net/yetidb/Eqp_Arcane_Symbol_Vanishing_Journey.png" desc="Vanishing Journey"/>
                <LongInfoNode imageHref="https://media.maplestorywiki.net/yetidb/Eqp_Arcane_Symbol_Chu_Chu_Island.png" desc="Chu Chu Island" />
                <LongInfoNode imageHref="https://media.maplestorywiki.net/yetidb/Eqp_Arcane_Symbol_Lachelein.png" desc="Lachelein" />
                <LongInfoNode imageHref="https://media.maplestorywiki.net/yetidb/Eqp_Arcane_Symbol_Arcana.png" desc="Arcana" />
                <LongInfoNode imageHref="https://media.maplestorywiki.net/yetidb/Eqp_Arcane_Symbol_Morass.png" desc="Morass" />
                <LongInfoNode imageHref="https://media.maplestorywiki.net/yetidb/Eqp_Arcane_Symbol_Esfera.png" desc="Esfera" />
            </div>
            <div className={styles.dailySection}>
                <h2>Growth</h2>
            </div>
        </div>
    </div>
    </div>
    )
}