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
            <p>dalies</p>
            <p>weeklies/monthly</p>
            <p>planner</p>
            <p>Event</p>
        </div>
    )
}