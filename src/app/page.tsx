import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./Navbar/Navbar";
import Dailies from "./Dailies/Dailies";
import Planner from "./Planner/Planner";

export default function Home() {
  return (<>
    <NavBar />
    {/* <Dailies /> */}
    <Planner />
    </>
  );
}
