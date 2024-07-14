import React from "react";

import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    return <section className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}>{
            projects.map((project, id) => {
                return <ProjectCard key={id} project={project}/>
            })}
        </div>
        <div>
          <h2 className={styles.title} >You may have noticed...</h2>
          <p className={styles.text}>
            Not all of my projects have demonstrations available. I'm currently doing my best 
            to develop appropriate and unique demonstrations for each project while working 
            through some environmental limitations. Thank you for your patience. In the meanwhile,
            feel free to explore the source code for each of my projects, most of which have instructions
            for running them on your own machine.
          </p>
        </div>
    </section>;
}