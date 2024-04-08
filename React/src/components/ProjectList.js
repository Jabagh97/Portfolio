// src/components/ProjectList.js
import React, { useState, useEffect } from 'react';
import ProjectService from '../services/ProjectService';
import styles from './ProjectList.module.css'; // Import the CSS module

function ProjectList() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        ProjectService.getProjects().then(response => {
            setProjects(response.data);
        })
        .catch(error => {
            console.log('There was an error fetching the projects', error);
        });
    }, []);

    return (
        <div id="projects">

        <div className={styles.projectsContainer}>
            <h2>Projects</h2>
            {projects.length > 0 ? (
                <div className={styles.projectsGrid}>
                    {projects.map(project => (
                        <div className={styles.projectCard} key={project.id}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            {project.demoUrl && (
                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                            )}
                            {project.githubUrl && (
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <p>No projects found.</p>
            )}
        </div>
        </div>

    );
}

export default ProjectList;
