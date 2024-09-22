import React from 'react'
import "./FilmProject.scss"
import { Link } from 'react-router-dom'

export const FilmProject = (props) => {  
  const redirectLink 
  return (
    <div className='film-project-container'>
        <Link to={`/project/${props.url}`}>
          <div className='thumbnail-image-wrapper'>
              <img src={`${process.env.PUBLIC_URL}/images/${props.img}`}
                  alt="Film Project Thumbnail"
              ></img>
          </div>
        </Link>
        <h3 className='mt-1'>{props.tagline}</h3>
        <h4>{props.role}</h4>
        <h4>{props.lengthAndYear}</h4>
    </div>
  )
}