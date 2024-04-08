import React, { useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web'; // For spring animations
import AOS from 'aos'; // For scroll animations
import 'aos/dist/aos.css'; // AOS styles
import styles from './HomePage.module.css'; // Import the CSS Module

const HomePage = () => {
  // Initialize AOS library for scroll animations
  useEffect(() => {
    AOS.init({
      duration: 2000, // Duration of animation
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  // React Spring animation for the professional summary section
  const summaryAnimation = useSpring({
    to: { opacity: 1, transform: 'translateX(0)' },
    from: { opacity: 0, transform: 'translateX(-100%)' },
    delay: 100,
  });

  return (
    <div className={styles.homePage}>
      <animated.div style={summaryAnimation} className={styles.section}>
        <h2 className={styles.sectionTitle}>PROFESSIONAL SUMMARY</h2>
        <p>
          Software Engineer familiar with a wide range of programming utilities and languages. Knowledgeable
          of backend and frontend development requirements. Handles any part of the process with ease.
          Collaborative team player with excellent technical abilities.
        </p>
      </animated.div>
      
      <section data-aos="fade-up" className={styles.section}>
        <h2 className={styles.sectionTitle}>EXPERIENCE</h2>
        <p>
          Developed a highly efficient Queue Management System for Hamad Medical Corporation,
          leveraging the power of the .NET framework. Orchestrated backend architecture, implemented
          critical business logic, and seamlessly integrated the system, resulting in streamlined patient flow
          and reduced wait times by 40%.
        </p>
        {/* Add more experience items here */}
      </section>
      
      <section data-aos="fade-left" className={styles.section}>
        <h2 className={styles.sectionTitle}>CORE QUALIFICATIONS</h2>
        <ul>
          <li>Programming Languages: </li>
          <div className={styles.techIcons}>
          <div><i className="fab fa-microsoft"></i> C#</div>
          <div><i className="fab fa-js-square"></i> JavaScript</div>
          <div><i className="fab fa-java"></i> Java</div>
        </div>
          <li>Web Technologies: </li>
          <div className={styles.techIcons}>
          <div><i className="fab fa-microsoft"></i> .NET</div>
          <div><i className="fab fa-js-square"></i> Spring Boot</div>
          <div><i className="fab fa-java"></i> React.Js</div>
        </div>
        </ul>
      </section>
      
      <section data-aos="fade-right" className={styles.section}>
        <h2 className={styles.sectionTitle}>EDUCATION</h2>
        <p>Özyeğin University - Bachelor's degree, Computer Science, Jun 2022</p>
      </section>
    </div>
  );
};

export default HomePage;
