import './App.scss';
import { NavBar } from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className='head-section u-flex u-flex-column u-justify-center u-items-stretch'>
        <div className='headline'>
          <h1>I direct, produce and sometimes write</h1>
        </div>
        <video width="640" height="360" controls autoplay muted loop>
          <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default App;
