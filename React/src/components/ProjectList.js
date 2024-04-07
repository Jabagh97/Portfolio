// src/components/ProjectList.js
import React, { useState, useEffect } from 'react';
import ProjectService from '../services/ProjectService';

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
        <div>
            <h2>Projects</h2>
            {projects.length > 0 ? (
                <ul>
                    {projects.map(project => (
                        <li key={project.id}>{project.title}: {project.description}</li>
                    ))}
                </ul>
            ) : (
                <p>No projects found.</p>
            )}
        </div>
    );
}

export default ProjectList;
