import React, { useState } from 'react';
import styles from './Timeline.module.css';
import Modal from './Modal'; // Assuming you have a Modal component

const Timeline = ({ entries }) => {
  const [selectedEntry, setSelectedEntry] = useState(null);

  const entryDetails = [
    {
      id: 0,
      details: `Developed a highly efficient Queue Management System for Hamad Medical Corporation,
                leveraging the power of the .NET framework. Orchestrated backend architecture, implemented
                critical business logic, and seamlessly integrated the system, resulting in streamlined patient flow
                and reduced wait times by 40%. 
                Contributed to the maintenance, review, and resolution of bugs in Turkish Airlines and Pegasus
                self-check-in and self-bag drop systems, both systems were built using the .NET framework.`
    },
    {
      id: 1,
      details: `Designed and updated layouts using React.js to meet usability and performance requirements
                Integrated third-party APIs from external applications into web platforms`
    },
    {
      id: 2,
      details: `Led a team of interns to develop a Task Manager (Spring + Vue.js)
                Reviewed code, debugged problems, and corrected issues -Developed clear specifications for
                project plans using customer requirements`
    },
  ];

  return (
    <>
      <div className={styles.timeline}>
        {entries.map((entry, index) => (
          <div key={index} className={styles.entry} onClick={() => setSelectedEntry(entryDetails[index].id)}>
            <div className={styles.title}>{entry.title}</div>
            <div className={styles.duration}>{entry.duration}</div>
            <div className={styles.company}>{entry.company}</div>
          </div>
        ))}
      </div>
      {selectedEntry !== null && (
        <Modal
          content={entryDetails[selectedEntry].details}
          onClose={() => setSelectedEntry(null)}
        />
      )}
    </>
  );
};

export default Timeline;
