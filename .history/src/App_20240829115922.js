import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { NavBar } from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <section className='head-section u-flex-column u-justify-center'>
        <div className='headline'>
          <h1>I direct, produce and sometimes write</h1>
        </div>
        <video width="640" height="360" controls autoplay muted loop>
          <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </section>
    </div>
  );
}

export default App;
