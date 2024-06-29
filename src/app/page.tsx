import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "../Components/Navbar/Navbar";
import Dailies from "./Dailies/page";
import Planner from "./Planner/page";

// https://www.chartjs.org/docs/latest/charts/radar.html
// for radar graph i really liked the look of to use with the web scrape later

// TODO
// Web Scraping off maple ranks (Currently have another branceh to try it out with puppetter)
// Add proper anchors for the navbar
// create a footer
// begin on actaully dailies content


export default function Home() {
  return (
    <div>
      <p>Welcome to MapleMania, its a WIP ;-;</p>
    </div>
  );
}
