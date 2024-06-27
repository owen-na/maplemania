"use client";

import NavBar from "@/Components/Navbar/Navbar";
import TaskHolder from "@/Components/TaskHolder/TaskHolder";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./Planner.module.css"


export default function Planner() {
    return (
        <div className={styles.mainContent}>
        <NavBar />
        <div className={styles.tasks}>
            <TaskHolder title = "Gear Upgrades"/>
            <TaskHolder title = "Farming Goals"/> 
            <div className={styles.charDisplay}>
                {/* <p>Parsing MapleRanks or Maplestory rankings page for banner of main character</p> */}
                {nameGetter()}
            </div>
            {/* gear upgrades, farming goals, estimated costs*/}
             {/* need it where it has to be showing off reccomendations? not sure yet*/}
        </div>
        </div>
    )
}

function nameGetter() {

    const [region, setRegion] = useState<string>('1'); // Default to 'NA'
    const [inGameName, setInGameName] = useState<string>('');
    const [profileInfo, setProfileInfo] = useState<string>('');


    const handleRegionChange = async (event: ChangeEvent<HTMLSelectElement>) => {
        setRegion(event.target.value);
    };

    const handleNameChange = async (event: ChangeEvent<HTMLInputElement>) => {
        setInGameName(event.target.value);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const apiCall = async () => {
                let response = await fetch('/api', {
                    method: 'POST',
                    body: JSON.stringify({name: inGameName})
                }
                )
                const text = await response.text();
                console.log(text);
                if (document.getElementById("idCard") != null) {
                    document.getElementById("idCard")!.innerHTML = text
                }
                return response.text();
            }
            await apiCall();
            // const test = await apiCall();
            // console.log(test.json());
            // const response = await axios.post('/api', { region, inGameName });
            // setProfileInfo(response.data.profileInfo);
        } catch (error) {
            console.error('Error fetching profile:', error);
        }
    };


    // TODO
    // change to use FormData(event.currentTarget)?

    return (
        <>
         <form className={styles.form} onSubmit={handleSubmit}>
            <select value={region} onChange={handleRegionChange}>
                <option value={1}>NA</option>
                <option value={2}>EU</option>
            </select>
            <input type="text" placeholder="in-game name" value={inGameName} onChange={handleNameChange}></input>
            <input type="submit" value="Search"></input>
         </form>
         <div>
            {/* <h2>Profile Info</h2> */}
            <div id="idCard" dangerouslySetInnerHTML={{ __html: profileInfo }} />
        </div>
        </>
    )
}

//  × You're importing a component that needs useState. It only works in a Client Component but none of its parents are marked with "use client", so they're Server Components by default.
//   │ Learn more: https://nextjs.org/docs/getting-started/react-essentials
//   │ 
//   │ 
//    ╭─[/Users/owen/StudioProjects/maplemania/src/app/Planner/Planner.tsx:1:1]
//  1 │ import TaskHolder from "@/Components/TaskHolder/TaskHolder";
//  2 │ import { useState } from "react";
//    ·          ────────
//  3 │ import styles from "./Planner.module.css"
//  4 │ 
//  5 │ export default function Planner() {
//    ╰────

// Import trace for requested module:
// ./src/app/Planner/Planner.tsx
// ./src/app/page.tsx