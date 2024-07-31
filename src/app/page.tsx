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
    <div className={styles.splashpage}>
      <h1>Welcome to MapleMania!</h1>
      <div className={styles.content}>
        <div className={styles.updates}>
          <h3>Changelogs &#40;As of July 27th, 2024&#41;</h3>
          <h2>Version 0.1</h2>
          <li>MWV for all pages on ports up to common tablet sizes</li>
          <h2>Version 0.2</h2>
          <li>MWV for all pages on ports up to common PC sizes</li>
          <h2>Version 0.3</h2>
          <li>Updated Bosses on the daily page to include Grandis Bosses</li>
        </div>
        <div>
          <h3>Feedback!</h3>
        </div>
      </div>
    </div>
  );
}
