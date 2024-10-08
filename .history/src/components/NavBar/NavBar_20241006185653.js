
import './NavBar.scss'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    showNavbar && (
      <div className='nav-bar u-flex u-items-center roboto-mono'>
        <Link className='logo-text' to='./'>
          Max Sun
        </Link>
        <img className='ml-1' src='/images/sun-logo.jpg' />
      </div>)
  )
}
