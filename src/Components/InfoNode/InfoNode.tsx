import styles from "./InfoNode.module.css"
import Image from "next/image"

export default function InfoNode({imageHref, desc} : {imageHref : string, desc : string}) {
    return (

            <li className={styles.smallBox}>
                <input type="checkbox"></input>
                <p>{desc}</p>
                <Image
                src={imageHref}
                alt={desc}
                width={50}
                height={50}
                />
            </li>
    )
}