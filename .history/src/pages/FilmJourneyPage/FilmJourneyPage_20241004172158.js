import "./FilmJourneyPage.scss"
import { Link, Outlet } from 'react-router-dom'

export const FilmJourneyPage = () => {
  return (
    <div className="page-content film-journey">
      <div className="row">
        <div className="col-4">

        </div>

      </div>
      
      <div className="text-content">
        <Outlet />
      </div>
    </div>
  )
}
