import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <div id="contact" className={styles.contactContainer}>
            <h2 className={styles.heading}>Get In Touch</h2>
            <p className={styles.paragraph}>
                I'm currently open to new opportunities, my inbox is always open. Whether you have a question or just want to say hi, feel free to drop me a message!
            </p>
            <a href="mailto:your.email@example.com" className={styles.contactLink}>your.email@example.com</a>
        </div>
    );
};

export default Contact;
