import React from 'react';
import styles from './HomePage.module.css'; // Import the CSS Module

const HomePage = () => {
  return (
    <div id="home" className={styles.homeContainer}>

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
       
      </div>
      <div className={styles.skillIcons}>
           <img src="/c.png" alt="C#" className={styles.cIcon} />
           <img src="/java.png" alt="Java" className={styles.javaIcon} />
           <img src="/javascript.png"  alt="Java Script" className={styles.javascriptIcon} /> 
          {/* Add more skill icons here */}
        </div>
    </div>

  );
};

export default HomePage;
