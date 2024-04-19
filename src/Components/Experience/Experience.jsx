import React from 'react';
import styles from './Experience.module.css';
import skills from '../../skills.json';
import history from '../../history.json';
import { getImageUrl } from '../../util';

export const Experience = () => {
  return (
    <section className={styles.container} id='experience'>
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
            <div className={styles.skills}>
                {skills.map((skills, id) => {
                    return (
                        <div className={styles.skill} key={id}>
                            <div className={styles.skillImageContainer} >
                               <img src={getImageUrl(skills.imageSrc)} alt={skills.title} />
                            </div>
                            <p>{skills.title}</p>
                        </div>
                    );
                })}
            </div>
            <ul className={styles.history}>
                {
                    history.map((historyItem, id) => {
                        return(
                          <div className={styles.historyDetails}>
                            <h3>{`${historyItem.role}, ${historyItem.Organisation}`}</h3>
                            <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                            <ul>{historyItem.experience.map((experience, id) => {
                                return <li key={id}>{experience}</li>
                            })}</ul>
                          </div>
                        );

                    })
                }
            </ul>
        </div>

    </section>
  );
}
