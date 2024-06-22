import styles from "./TaskHolder.module.css"

export default function TaskHolder({title} : {title : String}) {
    return (
        <div className={styles.taskContainer}>
            <h1>{title}</h1>
            <button>create a goal</button>
        </div>
    )
}