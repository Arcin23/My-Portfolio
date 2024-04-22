import React from 'react';
import { getImageUrl } from '../../util';
import  styles  from './Projects.module.css';

export const Projects = () => {
  return (
    <section  className={styles.container} id="projects">
        <h2 className={styles.title} >PROJECTS</h2>
        <div className={styles.cards}>
            <div className={styles.card}>
                <img src={(getImageUrl('project.png'))}/>
                <h3>My Portfolio</h3>
                <p>It isresponsive web application for my personal portfolio</p>
                <div className={styles.links}>
                    <a href='/'><button>Demo</button></a>
                    <a href='https://github.com/Arcin23/My-Portfolio'><button>Source</button></a>
                </div>
            </div>
            <div className={styles.card}>
                <img src={(getImageUrl('project.png'))}/>
                <h3>Weather App</h3>
                <p>Web application to tell the weather of different cities around the world</p>
                <div className={styles.links}>
                    <a href='https://github.com/Arcin23/Weather-app'><button>Demo</button></a>
                    <a href='https://github.com/Arcin23/Weather-app'><button>Source</button></a>
                </div>
            </div>
                
        </div>
    </section>
  )
}
