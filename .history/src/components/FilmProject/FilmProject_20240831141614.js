import React from 'react'

export const FilmProject = (props) => {
  return (
    <div>
        <div className='thumbnail-image-wrapper'>
            <img src='{props.img}'></img>
        </div>
        <h3>{}</h3>
    </div>
  )
}
