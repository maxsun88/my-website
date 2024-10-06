import React from 'react'
import "./FilmProjectPage.scss"
import { useParams } from 'react-router-dom'
import { projectData } from '../../contents/projectData';
import Linkify from 'linkify-react';

export const FilmProjectPage = () => {
    const {projectId} = useParams();
    const project = projectData[projectId];
    if (!project) {
        return <div>Project not found</div>; // Handle non-existent project
    }
    return (
        <div className='page-content film-project-page'>
            <div className='row'>
                <div className='col-md-8'>
                    <h2 className='mt-3'>{project.title}</h2>
                    <h3 className='mt-2'>{project.role}</h3>
                    <h4 className='mt-1'>{project.lengthAndYear}</h4>
                    <Linkify>
                        <p className='mt-8'>{project.intro}</p>
                    </Linkify>
                </div>
                <div className='col-md-4'>
                    <img className='mt-3 ml-md-auto' width="280px" 
                    src={`${process.env.PUBLIC_URL}/images/IVDIVWPoster.jpg`}></img>
                </div>
            </div>
            <iframe src="https://drive.google.com/file/d/1iBp_CBhrQBbE1ydrgotzYRmd0NE14wcS/preview" width="640" height="480" allow="autoplay"></iframe>
            {/* Place holder for the video */}
        
        </div>
    )
}