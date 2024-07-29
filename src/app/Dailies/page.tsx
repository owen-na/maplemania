import styles from './Dailies.module.css'
import LongInfoNode from '@/Components/InfoNodeLong/LongInfoNode'
import InfoNode from '@/Components/InfoNode/InfoNode'


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
                    <div className={styles.splitBosses}>
                        <h3>Pre-Arcane</h3>
                        <InfoNode imageHref="https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Zakum.png" desc="Zakum"/>
                        <InfoNode imageHref="https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Hilla.png" desc="Hilla"/>
                        <InfoNode imageHref="https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Papulatus.png" desc="Papa."/>
                        <InfoNode imageHref="https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Mori_Ranmaru.png" desc="Mori R."/>
                        <InfoNode imageHref="https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Horntail.png" desc="Horntail"/>
                        <InfoNode imageHref="https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Pierre.png" desc="Perrie"/>
                        <InfoNode imageHref="https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Zakum.png" desc="Zakum"/>
                        <InfoNode imageHref="https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Cygnus.png" desc="Cygnus" />
                        <InfoNode imageHref="https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Von_Leon.png" desc="Von Leon" />
                        <InfoNode imageHref="https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Pink_Bean.png" desc="Pink Bean" />
                        <InfoNode imageHref="https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Gollux.png" desc="Gollux" />
                    </div>
                    <div className={styles.splitBosses}>
                        <h3>Arcane/Ongoing</h3>
                        <InfoNode imageHref="https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Verus_Hilla.png" desc="Verus Hilla"/>
                        <InfoNode imageHref="https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Zakum.png" desc="Zakum"/>
                        <InfoNode imageHref="https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Zakum.png" desc="Zakum"/>
                    </div>
                </div>
            </div>
            <div className={styles.bottomPortion}>
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
                <LongInfoNode imageHref="https://media.maplestorywiki.net/yetidb/Boss_UI_-_Ursus.png" desc="Ursus" />
                <LongInfoNode imageHref="https://media.maplestorywiki.net/yetidb/NPC_Laku.png" desc="Monster Park" />
                <LongInfoNode imageHref="https://media.maplestorywiki.net/yetidb/NPC_Travel_Bag.png"desc="Maple Tour" />
            </div> 
            </div>
        </div>
    </div>
    )
}