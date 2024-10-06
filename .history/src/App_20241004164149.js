import './App.scss';
import { NavBar } from './components/NavBar/NavBar';
import { FilmHomePage } from './pages/FilmHomePage/FilmHomePage';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { FilmProjectPage } from './pages/FilmProjectPage/FilmProjectPage';
import { FilmJourneyPage } from './pages/FilmJourneyPage/FilmJourneyPage';
import FilmJourneyContent1 from './pages/FilmJourneyPage/film-journey.mdx';
import FilmJourneyContent2 from './pages/FilmJourneyPage/setting-up-a-filmmaking-club.mdx';
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
        path: "journey/section1", // /projects/:projectId dynamic route
        element: <FilmJourneyPage />,
        children: [
          { path: "section1", element: <FilmJourneyContent1 /> },
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
