// Import React and the CSS Module.
import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <div id="contact" className={styles.contactContainer}>
            <h2 className={styles.heading}>Let's Connect</h2>
            <p className={styles.paragraph}>
                Whether you're looking for collaboration or just want to have a chat, I'm all ears. Feel free to reach out, and let's start something great together!
            </p>
            <a href="mailto:jabağ@example.com" className={styles.contactLink}>jabagh90@gmail.com</a>

            <div className={styles.imagesWrapper}>
                <img src="/7.png" className={styles.imageBottomRight} alt="Bottom Right" />

                <img src="/5.png" className={styles.imageBottomLeftt} alt="Decorative" />
            </div>

        </div>
    );
};

export default Contact;
