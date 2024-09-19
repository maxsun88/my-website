import './App.scss';
import { NavBar } from './components/NavBar/NavBar';

import { FilmHomePage } from './pages/FilmHomePage/FilmHomePage';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <FilmHomePage></FilmHomePage>
    </div>
  );
}

export default App;
