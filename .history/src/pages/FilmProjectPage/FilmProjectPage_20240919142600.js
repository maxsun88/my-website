import React from 'react'
import "./FilmProjectPage.scss"
import { useParams } from 'react-router-dom'
import { projectData } from '../../contents/projectData';

export const FilmProjectPage = () => {
    const {projectId} = useParams();
    const project = projectData[projectId];
    return (
        <div className='page-content film-project-page'>
            <h2>Title</h2>
            <h3>Producer, Director</h3>
            {/* Place holder for the video */}
            <p></p>
        </div>
    )
}
