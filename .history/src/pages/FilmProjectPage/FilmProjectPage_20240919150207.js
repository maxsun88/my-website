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
            <div className='row'>
                <div className='col'>

                </div>

            </div>
            
            <img className='mt-3' width="300px" src={`${process.env.PUBLIC_URL}/images/IVDIVWPoster.jpg`}></img>
            {/* Place holder for the video */}
            <p className='mt-6'>{project.intro}</p>
        </div>
    )
}