// import styles from './Dailies.module.css'
// import LongInfoNode from '@/Components/InfoNodeLong/LongInfoNode'
// import InfoNode from '@/Components/InfoNode/InfoNode'


// https://maplestory.fandom.com/wiki/Maple_Guide 
// will be used for bosses ui here
// maybe add a clock as well to mimic server time for these things

// export default function Dailies() {

//     interface CheckboxState {
//         [key: string]: boolean;
//     }
      
//       export default function Dailies() {
//         const [checkboxStates, setCheckboxStates] = useState<CheckboxState>({});
      
//         useEffect(() => {
//           // Load checkbox states from localStorage on mount
//           const savedStates = JSON.parse(localStorage.getItem('checkboxStates') || '{}');
//           setCheckboxStates(savedStates);
//         }, []);
      
//         useEffect(() => {
//           // Save checkbox states to localStorage whenever they change
//           localStorage.setItem('checkboxStates', JSON.stringify(checkboxStates));
//         }, [checkboxStates]);
      
//         const handleCheckboxChange = (desc: string, checked: boolean) => {
//           setCheckboxStates((prevStates) => ({
//             ...prevStates,
//             [desc]: checked,
//           }));
//         };
        
//     return (
//         <div className={styles.mainBox}>
//             <div className={styles.customGoals}>
//                 <h1>Today's session goals</h1>
//                 <button>create task</button>
//             </div>
//         <div className={styles.dailyParentBox}>
//             <div className={styles.dailySection}>
//                 <h2>Bosses</h2>
//                 <div className={styles.bossSeperation}>
//                     <div className={styles.splitBosses}>
//                         <h3>Pre-Arcane</h3>
//                         <InfoNode imageHref="https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Zakum.png" desc="Zakum"/>
//                         <InfoNode imageHref="https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Hilla.png" desc="Hilla"/>
//                         <InfoNode imageHref="https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Papulatus.png" desc="Papa."/>
//                         <InfoNode imageHref="https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Mori_Ranmaru.png" desc="Mori R."/>
//                         <InfoNode imageHref="https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Horntail.png" desc="Horntail"/>
//                         <InfoNode imageHref="https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Pierre.png" desc="Perrie"/>
//                         <InfoNode imageHref="https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Zakum.png" desc="Zakum"/>
//                         <InfoNode imageHref="https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Cygnus.png" desc="Cygnus" />
//                         <InfoNode imageHref="https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Von_Leon.png" desc="Von Leon" />
//                         <InfoNode imageHref="https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Pink_Bean.png" desc="Pink Bean" />
//                         <InfoNode imageHref="https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Gollux.png" desc="Gollux" />
//                     </div>
//                     <div className={styles.splitBosses}>
//                         <h3>Arcane/Ongoing</h3>
//                         <InfoNode imageHref="https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Verus_Hilla.png" desc="Verus Hilla"/>
//                         <InfoNode imageHref="https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Giant_Monster_Gloom.png" desc="Gloom"/>
//                         <InfoNode imageHref="https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Lucid.png" desc="Lucid"/>
//                         <InfoNode imageHref="https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Will.png" desc="Will"/>
//                         <InfoNode imageHref="https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Black_Mage.png" desc="Black" />
//                         <InfoNode imageHref="https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Guard_Captain_Darknell.png" desc="Darknell" />
//                         <InfoNode imageHref="https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Chosen_Seren.png" desc="Seren" />
//                         <InfoNode imageHref="https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Kalos_the_Guardian.png" desc="Kalos"/>
//                         <InfoNode imageHref="https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Kaling.png" desc="Kaling"/>
//                     </div>
//                 </div>
//             </div>
//             <div className={styles.bottomPortion}>
//             <div className={styles.dailySection}>
//                 {/* will need to decide to either change it up div name wise or smthg else */}
//                 <h2>Arcane Dailies</h2>
//                 <LongInfoNode imageHref="https://media.maplestorywiki.net/yetidb/Eqp_Arcane_Symbol_Vanishing_Journey.png" desc="Vanishing Journey"/>
//                 <LongInfoNode imageHref="https://media.maplestorywiki.net/yetidb/Eqp_Arcane_Symbol_Chu_Chu_Island.png" desc="Chu Chu Island" />
//                 <LongInfoNode imageHref="https://media.maplestorywiki.net/yetidb/Eqp_Arcane_Symbol_Lachelein.png" desc="Lachelein" />
//                 <LongInfoNode imageHref="https://media.maplestorywiki.net/yetidb/Eqp_Arcane_Symbol_Arcana.png" desc="Arcana" />
//                 <LongInfoNode imageHref="https://media.maplestorywiki.net/yetidb/Eqp_Arcane_Symbol_Morass.png" desc="Morass" />
//                 <LongInfoNode imageHref="https://media.maplestorywiki.net/yetidb/Eqp_Arcane_Symbol_Esfera.png" desc="Esfera" />
//             </div>
//             <div className={styles.dailySection}>
//                 <h2>Growth</h2>
//                 <LongInfoNode imageHref="https://media.maplestorywiki.net/yetidb/Boss_UI_-_Ursus.png" desc="Ursus" />
//                 <LongInfoNode imageHref="https://media.maplestorywiki.net/yetidb/NPC_Laku.png" desc="Monster Park" />
//                 <LongInfoNode imageHref="https://media.maplestorywiki.net/yetidb/NPC_Travel_Bag.png"desc="Maple Tour" />
//             </div> 
//             </div>
//         </div>
//     </div>
//     )
// }
// }

"use client"

import { useState, useEffect } from 'react';
import styles from './Dailies.module.css';
import LongInfoNode from '@/Components/InfoNodeLong/LongInfoNode';
import InfoNode from '@/Components/InfoNode/InfoNode';

interface CheckboxState {
  [key: string]: boolean;
}

export default function Dailies() {
  const [checkboxStates, setCheckboxStates] = useState<CheckboxState>(() => {
    // Load initial state from localStorage
    if (typeof window !== 'undefined') {
      const savedStates = localStorage.getItem('checkboxStates');
      return savedStates ? JSON.parse(savedStates) : {};
    }
    return {};
  });

  useEffect(() => {
    // Save checkbox states to localStorage whenever they change
    localStorage.setItem('checkboxStates', JSON.stringify(checkboxStates));
  }, [checkboxStates]);

  const handleCheckboxChange = (desc: string, checked: boolean) => {
    setCheckboxStates((prevStates) => ({
      ...prevStates,
      [desc]: checked,
    }));
  };

  return (
    <div className={styles.mainBox}>
      <div className={styles.customGoals}>
        <h1>Today's session goals</h1>
        <button>create task</button>
      </div>
      <div className={styles.dailyParentBox}>
        <div className={styles.dailySection}>
          <h2>Bosses</h2>
          <div className={styles.bossSeperation}>
            <div className={styles.splitBosses}>
              <h3>Pre-Arcane</h3>
              {[
                { imageHref: "https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Zakum.png", desc: "Zakum" },
                { imageHref: "https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Hilla.png", desc: "Hilla" },
                { imageHref: "https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Papulatus.png", desc: "Papa." },
                { imageHref: "https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Mori_Ranmaru.png", desc: "Mori R." },
                { imageHref: "https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Horntail.png", desc: "Horntail" },
                { imageHref: "https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Pierre.png", desc: "Perrie" },
                { imageHref: "https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Zakum.png", desc: "Zakum" },
                { imageHref: "https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Cygnus.png", desc: "Cygnus" },
                { imageHref: "https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Von_Leon.png", desc: "Von Leon" },
                { imageHref: "https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Pink_Bean.png", desc: "Pink Bean" },
                { imageHref: "https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Gollux.png", desc: "Gollux" },
              ].map((boss) => (
                <InfoNode
                  key={boss.desc}
                  imageHref={boss.imageHref}
                  desc={boss.desc}
                  isChecked={checkboxStates[boss.desc] || false}
                  onCheckboxChange={handleCheckboxChange}
                />
              ))}
            </div>
            <div className={styles.splitBosses}>
              <h3>Arcane/Ongoing</h3>
              {[
                { imageHref: "https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Verus_Hilla.png", desc: "Verus Hilla" },
                { imageHref: "https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Giant_Monster_Gloom.png", desc: "Gloom" },
                { imageHref: "https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Lucid.png", desc: "Lucid" },
                { imageHref: "https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Will.png", desc: "Will" },
                { imageHref: "https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Black_Mage.png", desc: "Black" },
                { imageHref: "https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Guard_Captain_Darknell.png", desc: "Darknell" },
                { imageHref: "https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Chosen_Seren.png", desc: "Seren" },
                { imageHref: "https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Kalos_the_Guardian.png", desc: "Kalos" },
                { imageHref: "https://media.maplestorywiki.net/yetidb/Maple_Guide_-_Kaling.png", desc: "Kaling" },
              ].map((boss) => (
                <InfoNode
                  key={boss.desc}
                  imageHref={boss.imageHref}
                  desc={boss.desc}
                  isChecked={checkboxStates[boss.desc] || false}
                  onCheckboxChange={handleCheckboxChange}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.bottomPortion}>
          <div className={styles.dailySection}>
            <h2>Arcane Dailies</h2>
            {[
              { imageHref: "https://media.maplestorywiki.net/yetidb/Eqp_Arcane_Symbol_Vanishing_Journey.png", desc: "Vanishing Journey" },
              { imageHref: "https://media.maplestorywiki.net/yetidb/Eqp_Arcane_Symbol_Chu_Chu_Island.png", desc: "Chu Chu Island" },
              { imageHref: "https://media.maplestorywiki.net/yetidb/Eqp_Arcane_Symbol_Lachelein.png", desc: "Lachelein" },
              { imageHref: "https://media.maplestorywiki.net/yetidb/Eqp_Arcane_Symbol_Arcana.png", desc: "Arcana" },
              { imageHref: "https://media.maplestorywiki.net/yetidb/Eqp_Arcane_Symbol_Morass.png", desc: "Morass" },
              { imageHref: "https://media.maplestorywiki.net/yetidb/Eqp_Arcane_Symbol_Esfera.png", desc: "Esfera" },
            ].map((daily) => (
              <LongInfoNode
                key={daily.desc}
                imageHref={daily.imageHref}
                desc={daily.desc}
                isChecked={checkboxStates[daily.desc] || false}
                onCheckboxChange={handleCheckboxChange}
              />
            ))}
          </div>
          <div className={styles.dailySection}>
            <h2>Growth</h2>
            {[
              { imageHref: "https://media.maplestorywiki.net/yetidb/Boss_UI_-_Ursus.png", desc: "Ursus" },
              { imageHref: "https://media.maplestorywiki.net/yetidb/NPC_Laku.png", desc: "Monster Park" },
              { imageHref: "https://media.maplestorywiki.net/yetidb/NPC_Travel_Bag.png", desc: "Maple Tour" },
            ].map((growth) => (
              <LongInfoNode
                key={growth.desc}
                imageHref={growth.imageHref}
                desc={growth.desc}
                isChecked={checkboxStates[growth.desc] || false}
                onCheckboxChange={handleCheckboxChange}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
