import styles from "./LongInfoNode.module.css"
import Image from "next/image"

export default function LongInfoNode({imageHref, desc} : {imageHref : string, desc : String}) {
    return (
            <li className={styles.box}> 
                <input type="checkbox" className={styles.checker}></input>
                <p>{desc}</p>
                <Image
                src={imageHref}
                alt="test"
                width={50}
                height={50}
                />
            </li>
    )
}