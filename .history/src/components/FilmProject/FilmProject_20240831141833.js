import React from 'react'

export const FilmProject = (props) => {
  return (
    <div>
        <div className='thumbnail-image-wrapper'>
            <img src='{props.img}'></img>
        </div>
        <h3>{props.tagline}</h3>
        <h4>{props.role}</h4>
        <h

    </div>
  )
}
