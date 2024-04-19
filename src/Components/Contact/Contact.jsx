import React from 'react'
import { getImageUrl } from '../../util';
import styles from './Contact.module.css';

export const Contact = () => {
  return (
    <footer id='contact' className={styles.footer}>
        <div className={styles.content} >
            <h2>Contact</h2>
            <p>Feel free to reach out </p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl('email.png')} alt="email icon" />
                <a href="mailto:sangwaarcin@gmail.com">sangwaarcin@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('linkedin.png')} alt="linkedin icon" />
                <a href="https://www.linkedin.com/in/arcin-sangwa-4a75952b1">Linkedin.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('github.png')} alt="" />
                <a href="https://github.com/Arcin23">github.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('instagram.png')} alt="instagram icon" />
                <a href="https://www.instagram.com/s_arcin_23">sangwaarcin@gmail.com</a>
            </li>
        </ul>
    </footer>
  )
}
