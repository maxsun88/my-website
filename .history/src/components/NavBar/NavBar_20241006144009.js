import React from 'react'
import {ReactComponent as StarIcon} from '../../assets/star.svg'
import './NavBar.scss'

export const NavBar = () => {
  return (
    <div className='nav-bar u-flex u-items-center roboto-mono'>
        
        <div className='logo-text'>
            MAX SUN
        </div>
        <div className='ml-2'>
            <StarIcon/>
        </div>
    </div>
  )
}
