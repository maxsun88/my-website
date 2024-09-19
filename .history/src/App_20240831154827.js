import './App.scss';
import { NavBar } from './components/NavBar/NavBar';
import { Button } from './components/Button/Button';
import { useEffect } from 'react';
import { FilmProject } from './components/FilmProject/FilmProject';

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
          {/* TODO: Add link for the button */}
          <Button text="Read my filmmaking stories"></Button>
          <div className='projects'>
            <FilmProject
              img="PEP_thumbnail.png"
              tagline={"Sci-fi 48 Hour Film Project Finalist 🏆/nBest Director Nomination 🏅"}
              role="Director, Producer"
              lengthAndYear="7 min, 2024"
            ></FilmProject>
            <FilmProject
              img="IVDIVW_thumbnail.png"
              tagline={"48 Hour Film Project Toronto 2023 - /nAudience Choice Award 🏆 /nFinalist - top 15 / 108 teams 🏆 "}
              role="Lead Producer"
              lengthAndYear="7 min, 2023"
            ></FilmProject>
            <FilmProject
              img="ForPetesSake_thumbnail.png"
              tagline={"Based on a touching true story,\n BEST ADAPTED SCREENPLAY - LA INDIE SHORT FEST🏆"}
              role="Director, Producer"
              lengthAndYear="8 min, 2023"
            ></FilmProject>
            <FilmProject
              img="LolasRecipe_thumbnail.png"
              tagline={"1st Place of Grand River Film Festival - YODO 🏆"}
              role="Producer"
              lengthAndYear="3 min, 2023"
            ></FilmProject>
            <FilmProject
              img="AFewMore_thumbnail.png"
              tagline={"A film made within 48 hours."}
              role="Producer"
              lengthAndYear="3 min, 2023"
            ></FilmProject>
            <FilmProject
              img="AFewMore_thumbnail.png"
              tagline={"A film made within 48 hours. 🏆"}
              role="Producer"
              lengthAndYear="3 min, 2023"
            ></FilmProject>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
