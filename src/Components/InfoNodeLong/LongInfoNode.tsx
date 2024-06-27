'use client';

import { ChangeEvent, useEffect, useState } from "react";
import styles from "./LongInfoNode.module.css"
import Image from "next/image"


export default function LongInfoNode({imageHref, desc} : {imageHref : string, desc : string}) {

    // const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

    // const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    // const response = await fetch("./api/route")
    // const {checkedItems} = response.json()
    //   setCheckedItems({
    //     ...checkedItems,
    //     [event.target.name]: event.target.checked,
    //   });
    // };

    return (
            <li className={styles.box}> 
                <input 
                type="checkbox" 
                className={styles.checker}
                name={desc} // Use `desc` as the key for the checkbox state
                // checked={checkedItems[desc] || false} // Set checked based on state
                // onChange={handleChange}
                 />
                <p>{desc}</p>
                <Image
                src={imageHref}
                alt="test"
                width={50}
                height={50}
                />
            </li>
    )
}