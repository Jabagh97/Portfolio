import React, { useEffect } from 'react';
import styles from './About.module.css';
import { useSpring, animated } from '@react-spring/web';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Timeline from './Timeline'; 

const About = () => {
    useEffect(() => {
        AOS.init({
          duration: 2000,
          once: true,
        });
    }, []);

    const fadeInUpAnimation = useSpring({
        to: { opacity: 1, transform: 'translateY(0)' },
        from: { opacity: 0, transform: 'translateY(20px)' },
        delay: 100,
    });

    // Experience entries
  const experienceEntries = [
    {
      title: 'SOFTWARE ENGINEER (FULL-TIME)',
      duration: '01/2023 to Current',
      company: 'Emse, Istanbul, Turkey',
    },
    {
      title: 'FRONT-END DEVELOPER (INTERN)',
      duration: '09/2022 to 10/2022',
      company: 'Faayiz QSTP-LLC, Doha, Qatar',
    },
    {
      title: 'FULL STACK WEB DEVELOPER (INTERN)',
      duration: '06/2022 to 09/2022',
      company: 'Phexum, Istanbul, Turkey',
    },
  ];

    return (
        <div id="about" className={styles.aboutPage}>
            <div className={styles.content}>
                {/* Text Section */}
                <animated.div style={fadeInUpAnimation} className={styles.textSection}>
                    <h2 className={styles.sectionTitle}>About Me</h2>
                    <p>
                        I am a passionate Software Engineer skilled in both backend and frontend development. 
                        I thrive in collaborative environments and am committed to delivering high-quality, user-centric solutions.
                    </p>
                </animated.div>

                 {/* Experience Section */}
      <animated.div style={fadeInUpAnimation} data-aos="fade-up" className={styles.textSection}>
        <h2 className={styles.sectionTitle}>EXPERIENCE</h2>
        <Timeline entries={experienceEntries} />
      </animated.div>

                {/* Images */}
                <div className={styles.imagesWrapper}>
                    <img src="/net.png" className={styles.imageTopLeft} alt="Top Left" data-aos="fade-right" />
                    <img src="/react.png" className={styles.imageBottomRight} alt="Bottom Right" data-aos="fade-left" />
                    <img src="/1.png" className={styles.imageTopRight} alt="Top Right" />
                    <img src="/3.png" className={styles.imageBottomLeftt} alt="Bottom Left" />
                </div>
            </div>
        </div>
    );
};

export default About;
