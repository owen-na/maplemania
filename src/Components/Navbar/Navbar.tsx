import Link from "next/link"
import styles from "./Navbar.module.css"
import Image from "next/image"

export default function NavBar() {
    return (
        <div className={styles.bar}>
            <div className={styles.logo}>
            <Link href="/">
                <Image
                fill
                src="https://media.maplestorywiki.net/yetidb/NPCArtwork_Tana_%2812%29.png"
                alt="Tana as logo"
                // layout='fill'
                // objectFit='contain'
                // sizes="(max-width: 414px) 20vw, 10vh"
                />
            </Link>
            </div>
            <div className={styles.links}>
            <Link href="/Dailies">
                <p>dalies</p>
            </Link>
            <Link href="/Planner">
                <p>planner</p>
            </Link>
            <Link href="/Event">
                <p>Event</p>
            </Link>
            </div>
        </div>
    )
}