import './App.scss';
import { NavBar } from './components/NavBar/NavBar';
import 

function App() {
  useEffect(() => {
    const handleScroll = () => {
      console.log('Page scrolled!');
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
        <video className='banner-video' width="640" height="360" autoPlay muted loop>
          <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default App;
