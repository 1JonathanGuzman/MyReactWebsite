import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/graduationCap.png")} alt="My graduation cap"
            lassName={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="UI Icon"/>
                    <div>
                        <h3>Front-End Experience</h3>
                        <p>I have had internship experience in building responsive applications
                            in Outsystems and Figma, and also am taking certifications and building personal projects
                            like this website to gain more practice in HTML, CSS, Javascript, and React.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon"/>
                    <div>
                        <h3>Back-End Skills</h3>
                        <p>During my time earning my degree, I was able to get
                            plenty of experience with multiple back end languages
                            such as C, C++, Java, Python, and more. Additionally, I've
                            become very well acquainted with developing on Linux systems,
                            including multi-threaded kernel module programming in C.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server icon"/>
                    <div>
                        <h3>Network and Web development</h3>
                        <p>I've had experience with deploying applications such as this
                            React application to web servers hosted on cloud-based Linux
                            machines. These have been great exercises in reinforcing my 
                            TCP/IP, DNS, and HTTP/HTTPS knowledge, in addition to gaining
                            exposure to technologies such as:
                            <ul className={styles.netAndWebList}>
                                <li>Nginx: Currently being used to host this application.</li>
                                <li>Certbot: Used to certify this domain.</li>
                            </ul>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
}