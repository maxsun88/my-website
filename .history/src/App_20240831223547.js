import './App.scss';
import { NavBar } from './components/NavBar/NavBar';
import { Button } from './components/Button/Button';
import { useEffect } from 'react';
import { FilmProject } from './components/FilmProject/FilmProject';
import { FilmHomePage } from './pages/FilmHomePage/FilmHomePage';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <FilmHomePage
      
    </div>
  );
}

export default App;
