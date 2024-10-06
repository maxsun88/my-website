import './App.scss';
import { NavBar } from './components/NavBar/NavBar';
import { FilmHomePage } from './pages/FilmHomePage/FilmHomePage';
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom";
import { FilmProjectPage } from './pages/FilmProjectPage/FilmProjectPage';
import { FilmJourneyPage } from './pages/FilmJourneyPage/FilmJourneyPage';
import FJTheBeginning from './pages/FilmJourneyPage/film-journey.mdx';
import FJSettingUpFilmClub from './pages/FilmJourneyPage/setting-up-a-filmmaking-club.mdx';
export const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet /> {/* This is where child routes will be rendered */}
      </main>
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
          { path: "the-beginning", element: <FilmJourneyTheBeginning /> },
          { path: "section2", element: <FilmJourneyContent2 /> },
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
