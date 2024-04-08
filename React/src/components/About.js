import React, { useEffect } from 'react';
import styles from './About.module.css';
import { useSpring, animated } from '@react-spring/web'; // For spring animations
import AOS from 'aos'; // For scroll animations
import 'aos/dist/aos.css'; // AOS styles

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
    
      return (
        <div id="about">
    
        <div className={styles.aboutPage}>
          <animated.div style={fadeInUpAnimation} className={styles.section}>
            <h2 className={styles.sectionTitle}>PROFESSIONAL SUMMARY</h2>
            <p>
              <strong>Software Engineer</strong> familiar with a wide range of programming utilities and languages.<br />
              Knowledgeable of <strong>backend</strong> and <strong>frontend</strong> development requirements.<br />
               Collaborative team player with <strong>excellent technical abilities</strong>.
            </p>
          </animated.div>
    
          {/* Experience Section */}
          <animated.div style={fadeInUpAnimation} data-aos="fade-up" className={styles.section}>
            <h2 className={styles.sectionTitle}>EXPERIENCE</h2>
            <p>
              <strong>Developed</strong> a highly efficient Queue Management System for <strong>Hamad Medical Corporation</strong>,<br />
              leveraging the power of the <strong>.NET framework</strong>.<br />
               Resulted in <strong>streamlined patient flow</strong> and reduced wait times by <strong>40%</strong>.
            </p>
          </animated.div>
    
          {/* Core Qualifications Section */}
          <animated.div style={fadeInUpAnimation} data-aos="fade-left" className={styles.section}>
            <h2 className={styles.sectionTitle}>CORE QUALIFICATIONS</h2>
            <div className={styles.techIcons}>
              <span><i className="fab fa-csharp"></i> C#</span><br />
              <span><i className="fab fa-js-square"></i> JavaScript</span><br />
              <span><i className="fab fa-java"></i> Java</span><br />
              <span><i className="fab fa-react"></i> React.Js</span><br />
              <span><i className="fab fa-node-js"></i> Node.js</span><br />
            </div>
          </animated.div>
    
          {/* Education Section */}
          <animated.div style={fadeInUpAnimation} data-aos="fade-right" className={styles.section}>
            <h2 className={styles.sectionTitle}>EDUCATION</h2>
            <p>Özyeğin University - <br />
            <strong>Bachelor's degree, Computer Science</strong>,
            <br /> Jun 2022</p>
          </animated.div>
        </div>
        </div>
    
      );
};

export default About;


