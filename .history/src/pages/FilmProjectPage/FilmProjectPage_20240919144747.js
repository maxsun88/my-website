import React from 'react'
import "./FilmProjectPage.scss"
import { useParams } from 'react-router-dom'
import { projectData } from '../../contents/projectData';

export const FilmProjectPage = () => {
    const {projectId} = useParams();
    const project = projectData[projectId];
    if (!project) {
        return <div>Project not found</div>; // Handle non-existent project
    }
    return (
        <div className='page-content film-project-page'>
            <h2 >{project.title}</h2>
            <h3>{project.role}</h3>
            {/* Place holder for the video */}
            <p>{project.intro}</p>
        </div>
    )
}