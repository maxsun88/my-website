import './App.scss';
import { NavBar } from './components/NavBar/NavBar';
import { FilmHomePage } from './pages/FilmHomePage/FilmHomePage';
import { createBrowserRouter, RouterProvider, Outlet, Navigate, ScrollRestoration } from "react-router-dom";
import { FilmProjectPage } from './pages/FilmProjectPage/FilmProjectPage';
import { FilmJourneyPage } from './pages/FilmJourneyPage/FilmJourneyPage';
import FJTheBeginning from './pages/FilmJourneyPage/film-journey.mdx';
import FJSettingUpFilmClub from './pages/FilmJourneyPage/setting-up-a-filmmaking-club.mdx';
import FJSecondShortFilm from './pages/FilmJourneyPage/second-short-film.mdx'
import FJToronto from './pages/FilmJourneyPage/toronto.mdx'
import FJForPetesSake from './pages/FilmJourneyPage/for-petes-sake.mdx'
import FJMusical from './pages/FilmJourneyPage/musical.mdx'
import { Footer } from './components/Footer/Footer';

export const RootLayout = () => {
  return (
    <div>
      <ScrollRestoration />
      <NavBar />
      <div className='content-footer-container'>

      </div>
    </div>
  )
}

const router = createBrowserRouter([
  {
  path: "/", // Root route
    element: <RootLayout />, // This is where NavBar and Footer are rendered
    children: [
      {
        path: "", // Matches the root URL
        element: <FilmHomePage />,
      },
      {
        path: "project/:projectId", // /projects/:projectId dynamic route
        element: <FilmProjectPage />,
      },
      {
        path: "journey", // /projects/:projectId dynamic route
        element: <FilmJourneyPage />,
        children: [
          {
            index: true, // Automatically match /journey path
            element: <Navigate to="the-beginning" replace />, // Redirect to section1
          },
          { path: "the-beginning", element: <FJTheBeginning /> },
          { path: "setting-up-a-film-club", element: <FJSettingUpFilmClub /> },
          { path: "second-short-film", element: <FJSecondShortFilm /> },
          { path: "toronto", element: <FJToronto /> },
          { path: "for-petes-sake", element: <FJForPetesSake /> },
          { path: "musical", element: <FJMusical /> },
        ],
      }
    ],
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
