import React from 'react'
import "./FilmProjectPage.scss"
import { useParams } from 'react-router-dom'

export const FilmProjectPage = () => {
    const {projectId} = useParams();
    project 

    return (
        <div className='page-content film-project-page'>
            <h2>Title</h2>
            <h3>Producer, Director</h3>
            {/* Place holder for the video */}
            <p></p>
        </div>
    )
}
