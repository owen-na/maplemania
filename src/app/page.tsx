import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./Navbar/Navbar";
import Dailies from "./Dailies/Dailies";

export default function Home() {
  return (<>
    <NavBar />
    <Dailies />
    </>
  );
}
