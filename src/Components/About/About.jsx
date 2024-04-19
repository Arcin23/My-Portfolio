import React from "react";
import { getImageUrl } from "../../util";
import styles from './About.module.css';
import { BsFillMortarboardFill, BsFront } from "react-icons/bs";


export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img className={styles.aboutImg} src={getImageUrl('hero.jpg')} alt="me-img" />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText} >
                            <BsFillMortarboardFill className={styles.motorboard} />
                            <h3>Highschool Graduate</h3>
                            <p>I am a highschool graduate from Nu-Vision Highschool and I had a specialisation in Computer Science </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                        <BsFront className={styles.front} />
                            <h3>Frontend Developer</h3>
                            <p>I have experience in building responsive and optimized sites </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};
