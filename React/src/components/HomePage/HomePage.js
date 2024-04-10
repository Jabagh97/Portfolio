import React from 'react';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div id="home" className={styles.homeContainer}>
      <div className={styles.introSection}>
        <h1 className={styles.hello}>Hello, I'm</h1>
        <h2 className={styles.name}>Jabağ Anjouk</h2>
        <p className={styles.title}>
  A <span className={styles.greenText}>Software Engineer</span> From <span className={styles.blueText}>Istanbul</span>
</p>        <div className={styles.socialLinks}>
          {/* Social links here */}
        </div>
      </div>
      <div className={styles.profilePicture}>
        <img src="/blank.png" alt="Jabağ Anjouk" />
        <div className={styles.skillIcons}>
          <img src="/c.png" alt="C#" className={`${styles.skillIcon} ${styles.cIcon}`} />
          <img src="/java.png" alt="Java" className={`${styles.skillIcon} ${styles.javaIcon}`} />
          <img src="/javascript.png" alt="JavaScript" className={`${styles.skillIcon} ${styles.javascriptIcon}`} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
