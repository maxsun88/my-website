import './App.scss';
import { NavBar } from './components/NavBar/NavBar/NavBar';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const video = document.getElementById('banner-video');
      const parentElement = video.parentElement;
      const scrollY = window.scrollY;
      // Adjust the scaling factor as per your needs
      const scaleFactor = 1 + scrollY / 500;  // You can adjust the divisor to control the scaling speed
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
    <div className="App">
      <NavBar></NavBar>
      <div className='page-content'>
        <section className='head-section'>
          <div className='blank-space'></div>
          <div className='headline'>
            <h1>I direct, produce and sometimes write</h1>
          </div>
          <div id='banner-video' className='video-wrapper'>
            <video width="640" height="360" autoPlay muted loop>
              <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
        <section className='projects-section'>
          <h2>Projects</h2>
          <p>
            The projects listed here showcase my growth as a filmmaker. <br/><br/>
            
            Filmmaking taught me so much. Looking back, the lessons I learnt - like humility, leadership and many more - 
            are so much more important than the craft itself. <br/><br/>

            You can read some stories that happened behind the scenes here.
          </p>
          <!-- HTML !-->
<button class="button-19" role="button">Button 19</button>

/* CSS */
.button-19 {
  appearance: button;
  background-color: #1899D6;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: din-round,sans-serif;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: .8px;
  line-height: 20px;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 13px 16px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
  transform: translateZ(0);
  transition: filter .2s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  width: 100%;
}

.button-19:after {
  background-clip: padding-box;
  background-color: #1CB0F6;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  bottom: -4px;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
}

.button-19:main,
.button-19:focus {
  user-select: auto;
}

.button-19:hover:not(:disabled) {
  filter: brightness(1.1);
  -webkit-filter: brightness(1.1);
}

.button-19:disabled {
  cursor: auto;
}

.button-19:active {
  border-width: 4px 0 0;
  background: none;
}
          <button class="btn-info">Read my filmmaking stories</button>
        </section>
      </div>
    </div>
  );
}

export default App;
