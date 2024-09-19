import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { NavBar } from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className='headline'>
        <h1>I direct, produce and sometimes write</h1>
        <video width="640" height="360" controls autoplay muted loop>
          <source src="path-to-your-video.mp4" type="video/mp4">
          <source src="path-to-your-video.webm" type="video/webm">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default App;
