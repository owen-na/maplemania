import Link from "next/link"
import styles from "./Navbar.module.css"
import Image from "next/image"

export default function NavBar() {
    return (
        <div className={styles.bar}>
            {/* <Image
                src="https://img.favpng.com/1/1/9/maplestory-2-maple-leaf-png-favpng-gRahWewr9VEviM0jd8PZHgqkY.jpg"
                alt="picture of a maple leaf"
                width={200}
                height={200}
            /> */}
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