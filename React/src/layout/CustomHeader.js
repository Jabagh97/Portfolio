import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import styles from './CustomHeader.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
     
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link className={styles.navLink} to="home" smooth={true} duration={500}>Home</Link></li>
          <li className={styles.navItem}><Link className={styles.navLink} to="about" smooth={true} duration={500}>About</Link></li>
          <li className={styles.navItem}><Link className={styles.navLink} to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li className={styles.navItem}><Link className={styles.navLink} to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
