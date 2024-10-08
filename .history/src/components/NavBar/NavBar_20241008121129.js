import './NavBar.scss'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';
export const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Only add the scroll event listener if on the homepage
    if (location.pathname === '/') {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > 0) {
          // User is scrolling down
          setShowNavbar(true);
        } else {
          setShowNavbar(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      // On other pages, always show the navbar
      setShowNavbar(true);
    }
  }, [location.pathname]); // Re-run the effect when the location changes

  return (
    showNavbar &&
    <div className='nav-bar u-flex u-items-center u-justify-between roboto-mono'>
      <div className='logo u-flex'>
        <Link className='logo-text' to='./'>
          Max Sun
        </Link>
        <img className='ml-1' src='/images/sun-logo.jpg' />
      </div>
      <Link>
        Filmmaking Journey
      </Link>
    </div>
  )
}
