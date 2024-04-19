import React from "react";
import styles from './Hero.module.css'
import { getImageUrl } from "../../util";
import {BiSolidRightArrowAlt} from 'react-icons/bi';

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}> 
                <h1 className={styles.title}>Hi, I'm Sangwa</h1>
                <p className={styles.description}>I'm an aspiring full-tack software developer with a  specializing in JavaScript and Python. </p>
                    <a href="#contact"><button className={styles.btn}><BiSolidRightArrowAlt/>Contact Me</button></a>
            </div>
                <img src={getImageUrl("hero.jpg")} className={styles.heroImg} alt="Me"/>
        </section>
     
      
    );
};