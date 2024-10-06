import FilmJourneyContent from './film-journey.mdx'
import "./FilmJourneyPage.scss"
import { Link } from 'react-router-dom'

export const FilmJourneyPage = () => {
  return (
    <div className="page-content film-journey">
      <div className="card">
        <div className="content py-2 px-3">
          <p className="title">Content</p>
          <p className='section-link'><Link to="/journey/section1">1. The Beginning & My First Short Film</Link></p>
          <p className='section-link'>2. Setting Up a Filmmaking Club</p>
          <p className='section-link'>3. My Second Short Film - a Humbling Experience</p>
          <p className='section-link'>4. Toronto, a Brand New Start</p>
          <p className='section-link'>5. For Pete's Sake</p>
          <p className='section-link'>6. Making a Musical in 48 Hours!</p>
        </div>
      </div>
      <Routes>
          <Route path="/journey/section1" element={<FilmJourneyContent1 />} />
          <Route path="/journey/section2" element={<FilmJourneyContent2 />} />
          {/* Add more routes */}
        </Routes>
    </div>
  )
}
