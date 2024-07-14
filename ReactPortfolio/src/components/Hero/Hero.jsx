import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return <section className={styles.container}>
          <div className={styles.content}>

            <h1 className={styles.title}>Hi, I'm Jonathan!</h1>
            <p className={styles.description}>
                I'm a new C.S graduate from Florida State University 
                with 3 years of professional experience in tech support
                and recent experience in AI training,
                as well as internship experience in software engineering.
                Please feel free to contact me if you'd like to learn more.
            </p>
            <a href="mailto:jonguzman1965@email.com" className={styles.contactBtn}>Contact Me</a>

          </div>

          <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of my alma mater"
            className={styles.heroImg}/>
          <div className={styles.topBlur} />
          <div className={styles.bottomBlur} />
        </section>
}