import { ReactComponent as StarIcon } from '../../assets/star.svg'
import './NavBar.scss'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className='nav-bar u-flex u-items-center roboto-mono'>
      <Link className='logo-text' to='./'>
          MAX SUN
      </Link>
      <img src='images/sun-logo.jpg' />
    </div>
  )
}
