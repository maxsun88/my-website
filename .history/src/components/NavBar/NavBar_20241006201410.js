import './NavBar.scss'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [currentScrollY, setCurrentScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 0) {
        // User is scrolling down
        setShowNavbar(true);
      } 
      setCurrentScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className='nav-bar u-flex u-items-center roboto-mono'>
      <Link className='logo-text' to='./'>
        Max Sun
      </Link>
      <img className='ml-1' src='/images/sun-logo.jpg' />
    </div>
  )
}