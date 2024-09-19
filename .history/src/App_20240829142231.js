import './App.scss';
import { NavBar } from './components/NavBar/NavBar';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const video = document.getElementById('banner-video');
      const scrollY = window.scrollY;
      // Adjust the scaling factor as per your needs
      const scaleFactor = 1 + scrollY / 1000;  // You can adjust the divisor to control the scaling speed
      video.style.transform = `scale(${scaleFactor})`;
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <NavBar></NavBar>
      <div className='head-section'>
        <div className='headline'>
          <h1>I direct, produce and sometimes write</h1>
        </div>
        <div>
          
        </div>
        <video id='banner-video' width="640" height="360" autoPlay muted loop>
          <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default App;