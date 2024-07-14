import React from "react";

import styles from "./Experience.module.css";

import skills from "../../data/skills.json";
import history from "../../data/history.json";

import { getImageUrl } from "../../utils";

export const Experience = () => {
    return <section className={styles.container} id="experience">
        <h2 className={styles.title}>Experience</h2>

        <div className={styles.legend}>
             <h3>Legend: </h3>

             <div>
               <p>Major strength: </p>
               <div className={styles.legendStrongest}></div>
             </div>

             <div>
               <p>Substantial experience: </p>
               <div className={styles.legendSecondStrongest}></div>
             </div>

             <div>
               <p>Some experience: </p>
               <div className={styles.legendThirdStrongest}></div>
             </div>
         </div>

        <div className={styles.content}>
            <div className={styles.skills}>{
                skills.map((skill, id) => {
                    let strengthClass;
                    if (skill.strength == 3){
                        strengthClass = styles.strongest;
                    } else if (skill.strength == 2){
                        strengthClass = styles.secondStrongest;
                    } else {
                        strengthClass = styles.thirdStrongest;
                    }
                    return <div className={styles.skill} key={id}>
                        <div className={`${styles.skillImageContainer} ${strengthClass}`}>
                            <img src={getImageUrl(skill.imageSrc)} alt={skill.title}
                        height="75px" width="75px"/>
                        </div>
                        <p>{skill.title}</p>
                    </div>
                })
            }</div>
            <ul className={styles.history}>
                {
                    history.map((historyItem, id) => {
                        return (
                          <li className={styles.historyItem} key={id}>
                                <img src={getImageUrl(historyItem.imageSrc)} 
                                alt={`${historyItem.organization} Logo`}
                                height="300px" width="800px"
                                />
                            <div className={styles.historyItemDetails}>
                                <h3>{`${historyItem.role}, ${historyItem.organization}`}</h3>
                                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                <ul>
                                    {historyItem.experiences.map((experience, id) => {
                                        return <li key={id}>{experience}</li>;
                                    })}
                                </ul>
                            </div>
                          </li>
                        );
                    })
                }
            </ul>
        </div>
    </section>
};