import React from 'react'
import {ReactComponent as StarIcon} from '../assets/star.svg'
import ""

export const NavBar = () => {
  return (
    <div className='nav-bar u-flex u-items-center roboto-mono'>
        <div className='logo-text'>
            Max Sun
        </div>
        <div className='ml-1'>
            <StarIcon/>
        </div>
    </div>
  )
}
