import TaskHolder from "@/Components/TaskHolder/TaskHolder";
import styles from "./Planner.module.css"

export default function Planner() {
    return (
        <div className={styles.tasks}>
            <TaskHolder title = "Gear Upgrades"/>
            <TaskHolder title = "Farming Goals"/> 
            <div className={styles.charDisplay}>
                <p>Parsing MapleRanks or Maplestory rankings page for banner of main character</p>
            </div>
            {/* gear upgrades, farming goals, estimated costs*/}
             {/* need it where it has to be showing off reccomendations? not sure yet*/}
        </div>
    )
}