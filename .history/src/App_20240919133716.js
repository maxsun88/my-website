import './App.scss';
import { NavBar } from './components/NavBar/NavBar';
import { FilmHomePage } from './pages/FilmHomePage/FilmHomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FilmProjectPage } from './pages/FilmProjectPage/FilmProjectPage';


import React from 'react'

export const App = () => {
  return (
    <div>App</div>
  )
}



function App() {
  return (
    <BrowserRouter>
        <div>
          <NavBar/>
          <Routes>
            <Route path="/" element={<FilmHomePage/>} />
            <Route path="/project" element={<FilmProjectPage />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;