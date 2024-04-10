// src/components/ProjectList.js
import React, { useState, useEffect } from 'react';
import ProjectService from '../../services/ProjectService';
import styles from './ProjectList.module.css'; // Make sure the path is correct

const ProjectList = () => {
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        ProjectService.getProjects().then(response => {
            setProjects(response.data);
        }).catch(error => {
            console.log('There was an error fetching the projects', error);
        });
    }, []);

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    const filteredProjects = projects.filter(project => {
        return filter === 'all' || project.category === filter;
    });

    return (
        <div id="projects" className={styles.aboutPage}>

            <div className={styles.projectsSection}>
                <h2 className={styles.sectionTitle}>Projects</h2>
                {/* Filters */}
                <div className={styles.filters}>
                    <button onClick={() => handleFilterChange('all')}>All</button>
                    <button onClick={() => handleFilterChange('frontend')}>Frontend</button>
                    <button onClick={() => handleFilterChange('backend')}>Backend</button>
                    <button onClick={() => handleFilterChange('fullstack')}>Fullstack</button>
                </div>
                {/* Projects Grid */}
                <div className={styles.projectsGrid}>
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map(project => (
                            <div className={styles.projectCard} key={project.id}>
                                <img src={project.imageUrl} alt={project.title} className={styles.projectImage} />
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className={styles.projectLinks}>
                                    {project.demoUrl && (
                                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                                    )}
                                    {project.githubUrl && (
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No projects found.</p>
                    )}
                </div>

                {/* Images */}
                <div className={styles.imagesWrapper}>
                    <img src="/docker.png" className={styles.imageTopLeft} alt="Top Left" data-aos="fade-right" />
                    <img src="/sql.png" className={styles.imageBottomRight} alt="Bottom Right" data-aos="fade-left" />
                    <img src="/2.png" className={styles.imageTopRight} alt="Top Right" />
                    <img src="/6.png" className={styles.imageBottomLeftt} alt="Bottom Left" />

                </div>
            </div>


        </div>

    );
}

export default ProjectList;
