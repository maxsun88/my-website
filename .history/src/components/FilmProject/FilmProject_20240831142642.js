import React from 'react'

export const FilmProject = (props) => {
  return (
    <div>
        <div className='thumbnail-image-wrapper'>
            <img src=`${process.env.PUBLIC_URL}/images/{props.img}'></img>
        </div>
        <h3>{props.tagline}</h3>
        <h4>{props.role}</h4>
        <h4>{props.lengthAndYear}</h4>
    </div>
  )
}
