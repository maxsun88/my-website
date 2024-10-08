import { ReactComponent as StarIcon } from '../../assets/star.svg'
import './NavBar.scss'
import { Link } from 'react-router-dom'

export const NavBar = () => {
   useEffect(() => {
        const handleScroll = () => {
          const video = document.getElementById('banner-video');
          const parentElement = video.parentElement;
          const scrollY = window.scrollY;
          // Adjust the scaling factor as per your needs
          const scaleFactor = 1 + scrollY / 400;  // You can adjust the divisor to control the scaling speed
          video.style.transform = `scale(${scaleFactor})`;
          // Apply a condition to restrict the maximum width to the parent's width
          const maxScaleFactor = parentElement.offsetWidth / video.offsetWidth;
          if (scaleFactor > maxScaleFactor) {
              video.style.transform = `scale(${maxScaleFactor})`;
          }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <div className='nav-bar u-flex u-items-center roboto-mono'>
      <Link className='logo-text' to='./'>
          Max Sun
      </Link>
      <img className='ml-1' src='./images/sun-logo.jpg' />
    </div>
  )
}
