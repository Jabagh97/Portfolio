import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'; // Correct path

const Header = () => {
    return (
        <div className={styles.header}>
            {/* Profile Section */}
            <div className={styles.profile}>
            <img src="/blank.png" alt="Your Name" className={styles.profileImage} />
                <div>
                    <div className={styles.profileName}>Jabağ Anjouk</div>
                    <div className={styles.profilePosition}>Software Engineer</div>
                </div>
            </div>
            {/* Navigation */}
            <nav className={styles.navbar}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}><Link className={styles.navLink} to="/">Home</Link></li>
                    <li className={styles.navItem}><Link className={styles.navLink} to="/about">About</Link></li>
                    <li className={styles.navItem}><Link className={styles.navLink} to="/projects">Projects</Link></li>
                    <li className={styles.navItem}><Link className={styles.navLink} to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
