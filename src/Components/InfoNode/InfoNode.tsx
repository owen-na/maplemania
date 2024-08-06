// import styles from "./InfoNode.module.css"
// import Image from "next/image"

// export default function InfoNode({imageHref, desc} : {imageHref : string, desc : string}) {


//     // Function to save checkbox states to Local Storage
// function saveCheckboxStates() {
//   const checkboxes = document.querySelectorAll('input[type="checkbox"]');
//   checkboxes.forEach((checkbox) => {
//     localStorage.setItem(checkbox.id, checkbox.checked);
//   });
// }

// // Function to load checkbox states from Local Storage
// function loadCheckboxStates() {
//   const checkboxes = document.querySelectorAll('input[type="checkbox"]');
//   checkboxes.forEach((checkbox) => {
//     const savedState = localStorage.getItem(checkbox.id);
//     if (savedState !== null) {
//       checkbox.checked = savedState === 'true';
//     }
//   });
// }

// // Attach event listener to the checkboxes to save their states
// const checkboxes = document.querySelectorAll('input[type="checkbox"]');
// checkboxes.forEach((checkbox) => {
//   checkbox.addEventListener('change', saveCheckboxStates);
// });

// // Load checkbox states on page load
// document.addEventListener('DOMContentLoaded', loadCheckboxStates);

//     return (
//             <li className={styles.smallBox}>
//                 <input type="checkbox" className={styles.smallBoxChecker} ></input>
//                 <p>{desc}</p>
//                 <Image
//                 src={imageHref}
//                 alt={desc}
//                 width={50}
//                 height={50}
//                 />
//             </li>
//     )
// }

'use client';

import { ChangeEvent } from "react";
import styles from "./InfoNode.module.css";
import Image from "next/image";

interface InfoNodeProps {
  imageHref: string;
  desc: string;
  isChecked: boolean;
  onCheckboxChange: (desc: string, checked: boolean) => void;
}

export default function InfoNode({ imageHref, desc, isChecked, onCheckboxChange }: InfoNodeProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onCheckboxChange(desc, event.target.checked);
  };

  return (
    <li className={styles.smallBox}>
      <input 
        type="checkbox" 
        className={styles.smallBoxChecker}
        name={desc} 
        checked={isChecked} 
        onChange={handleChange} 
      />
      <p>{desc}</p>
      <Image
        src={imageHref}
        alt={desc}
        width={50}
        height={50}
      />
    </li>
  );
}
