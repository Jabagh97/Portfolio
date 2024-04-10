import React from 'react';
import styles from './Timeline.module.css';

const Timeline = ({ entries }) => {
  return (
    <div className={styles.timeline}>
      {entries.map((entry, index) => (
        <div key={index} className={styles.entry}>
          <div className={styles.title}>{entry.title}</div>
          <div className={styles.duration}>{entry.duration}</div>
          <div className={styles.company}>{entry.company}</div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
