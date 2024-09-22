import React from 'react'
import "./FilmProjectPage.scss"
import { useParams } from 'react-router-dom'
import { projectData } from '../../contents/projectData';
import Linkify from 'linkify-react';
import { Button } from '../../components/Button/Button';
import ReactPlayer from 'react-player/lazy';


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
            <div className='mt-4 video-embed'>
                <ReactPlayer controls={true} width={300} style={{width: "300px", maxWidth:"800px"}} url="https://vimeo.com/862226320" />
            </div>
            <Linkify>
                <p className='mt-8 mb-4'>{project.intro}</p>
            </Linkify>
            {/* Place holder for the video */}
            <Button text="Read BTS Stories Here"></Button>
        </div>
    )
}
