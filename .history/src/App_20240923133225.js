import './App.scss';
import { NavBar } from './components/NavBar/NavBar';
import { FilmHomePage } from './pages/FilmHomePage/FilmHomePage';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { FilmProjectPage } from './pages/FilmProjectPage/FilmProjectPage';
import { FilmJourneyPage } from './pages/FilmJourneyPage/FilmJourneyPage';

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
        path: "project/journey", // /projects/:projectId dynamic route
        element: <FilmJourneyPage />,
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
