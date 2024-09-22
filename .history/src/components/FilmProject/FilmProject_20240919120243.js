import React from 'react'
import "./FilmProject.scss"

export const FilmProject = (props) => {
  return (
    <div className='film-project-container'>
        <Link>
        </Link>
        
        <h3 className='mt-1'>{props.tagline}</h3>
        <h4>{props.role}</h4>
        <h4>{props.lengthAndYear}</h4>
    </div>
  )
}