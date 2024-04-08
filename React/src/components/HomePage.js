import React from 'react';
//import { FaLinkedin, FaGithub, FaTwitter, FaReact, FaJava, FaCss3Alt } from 'react-icons/fa'; // Example icons
import styles from './HomePage.module.css'; // Import the CSS Module

const HomePage = () => {
  return (
    <div id="home">

    <div className={styles.homeContainer}>
      <div className={styles.introSection}>
        <h1 className={styles.hello}>Hello, I'm</h1>
        <h2 className={styles.name}>Jabağ Anjouk</h2>
        <p className={styles.title}>A Software Engineer From Istanbul</p>
        <div className={styles.socialLinks}>
          {/* Add your social links here */}
        </div>
      </div>
      <div className={styles.profilePicture}>
        <img src="/blank.png" alt="Jabağ Anjouk" />
        {/* Animated skill icons */}
        <div className={styles.skillIcons}>
          {/* <FaReact className={styles.reactIcon} />
          <FaJava className={styles.javaIcon} />
          <FaCss3Alt className={styles.cssIcon} /> */}
          {/* Add more skill icons here */}
        </div>
      </div>
    </div>
    </div>

  );
};

export default HomePage;
