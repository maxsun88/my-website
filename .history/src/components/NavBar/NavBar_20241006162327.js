import { ReactComponent as StarIcon } from '../../assets/star.svg'
import './NavBar.scss'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className='nav-bar u-flex u-items-center roboto-mono'>
      <Link to='./'>
        <div className='logo-text'>
          MAX SUN
        </div>
      </Link>
      <img className='ml-2' src='images/sun-logo.jpg' />
      {/* <div className='ml-2'>
        <StarIcon />
      </div> */}
    </div>
  )
}
