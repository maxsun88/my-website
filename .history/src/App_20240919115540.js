import './App.scss';
import { NavBar } from './components/NavBar/NavBar';
import { FilmHomePage } from './pages/FilmHomePage/FilmHomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <div>
          <NavBar/>
          <Route path="/" element={<FilmHomePage/>} />
          

        </div>
          {/* <Route path="blogs" element={<Blogs />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
