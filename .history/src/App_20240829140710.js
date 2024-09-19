import './App.scss';
import { NavBar } from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className='head-section'>
        <div className='headline'>
          <h1>I direct, produce and sometimes write</h1>
        </div>
        <video className='' width="640" height="360" autoPlay muted loop>
          <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default App;
