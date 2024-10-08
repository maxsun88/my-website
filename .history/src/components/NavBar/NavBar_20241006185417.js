import { useState } from 'react';
import { useEffect } from 'react';
import './NavBar.scss'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // User is scrolling down
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    showNavbar && (
      <div className='nav-bar u-flex u-items-center roboto-mono'>
        <Link className='logo-text' to='./'>
          Max Sun
        </Link>
        <img className='ml-1' src='./images/sun-logo.jpg' />
      </div>)
  )
}
