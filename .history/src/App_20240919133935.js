import './App.scss';
import { NavBar } from './components/NavBar/NavBar';
import { FilmHomePage } from './pages/FilmHomePage/FilmHomePage';
import { BrowserRouter, Routes, Route, createBrowserRouter } from "react-router-dom";
import { FilmProjectPage } from './pages/FilmProjectPage/FilmProjectPage';


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
        element: <Home />,
      },
      {
        path: "projects", // /projects route
        element: <Projects />,
      },
      {
        path: "projects/:projectId", // /projects/:projectId dynamic route
        element: <ProjectPage />,
      },
      {
        path: "about", // /about route
        element: <About />,
      },
    ],
])


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
