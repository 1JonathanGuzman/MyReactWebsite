import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return <section className={styles.container}>
        <div className={styles.contactText}>
            <h2>Contact</h2>
            <p>Feel free to reach out or check out the source code for this website!</p>
            <div>
              <p>Source code:</p>
              <a href="https://github.com" className={styles.link} target="_blank">
                <img src={getImageUrl("contact/githubIcon.png")}/>
              </a>
            </div>
        </div>

        <ul className={styles.contactList}>
            <li>
                 <img src={getImageUrl("contact/emailIcon.png")}/>
                 <a href="mailto:jonguzman1965@gmail.com">jonguzman1965@gmail.com</a>
            </li>
             <li>
                   <img src={getImageUrl("contact/githubIcon.png")}/>
                  <a href="https://github.com/1JonathanGuzman" target="_blank">github.com/1JonathanGuzman</a>
            </li>
             <li>
                 <img src={getImageUrl("contact/linkedinIcon.png")}/>
                 <a href="https://www.linkedin.com/in/jonathan-guzman-5ab2601b8/" target="_blank">linkedin.com/JonathanGuzman</a>
             </li>
        </ul>

    </section>
}