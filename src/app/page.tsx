import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "../Components/Navbar/Navbar";
import Dailies from "./Dailies/Dailies";
import Planner from "./Planner/Planner";

// https://www.chartjs.org/docs/latest/charts/radar.html
// for radar graph i really liked the look of to use with the web scrape later

// TODO
// Web Scraping off maple ranks (Currently have another branceh to try it out with puppetter)
// Add proper anchors for the navbar
// create a footer
// begin on actaully dailies content


export default function Home() {
  return (<>
    <NavBar />
    {/* <Dailies /> */}
    <Planner />
    </>
  );
}
