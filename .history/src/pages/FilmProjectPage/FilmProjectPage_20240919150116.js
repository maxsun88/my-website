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
            <h2 className='mt-3'>{project.title}</h2>
            <h3 className='mt-2'>{project.role}</h3>
            <h4 className='mt-1'>{project.lengthAndYear}</h4>
            <img className='mt-3' width="300px" src={`${process.env.PUBLIC_URL}/images/IVDIVWPoster.jpg`}></img>
            {/* Place holder for the video */}
            <p className='mt-6'>{project.intro}</p>
        </div>
    )
}
