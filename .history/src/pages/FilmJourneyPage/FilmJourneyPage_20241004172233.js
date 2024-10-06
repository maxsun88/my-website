import "./FilmJourneyPage.scss"
import { Link, Outlet } from 'react-router-dom'

export const FilmJourneyPage = () => {
  return (
    <div className="page-content film-journey">
      <div className="row">
        <div className="col-4">
          <div className="content-index card">
            <div className="content py-2 px-3">
              <p className="title">Content</p>
              <p className='section-link'><Link to="/journey/the-beginning">1. The Beginning & My First Short Film</Link></p>
              <p className='section-link'><Link to="/journey/setting-up-a-film-club">2. Setting Up a Filmmaking Club</Link></p>
              <p className='section-link'><Link to="/journey/second-short-film">3. My Second Short Film - a Humbling Experience</Link></p>
              <p className='section-link'><Link to="/journey/toronto">4. Toronto, a Brand New Start</Link></p>
              <p className='section-link'><Link to="/journey/for-petes-sake">5. For Pete's Sake</Link></p>
              <p className='section-link'><Link to="/journey/musical">6. Making a Musical in 48 Hours!</Link></p>
            </div>
          </div>
        </div>
        <div className="col-8 text-content">
          <Outlet />

        </div>

      </div>

      <div className="">
      </div>
    </div>
  )
}
