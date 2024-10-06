import FilmJourneyContent from './film-journey.mdx'
import "./FilmJourneyPage.scss"

export const FilmJourneyPage = () => {
  return (
    <div className="page-content film-journey">
      <div className="card">
        <div className="content py-2 px-3">
          <p className="title">Content</p>
          <p className='section-link'><Link to="/home/journey/section1">1. The Beginning & My First Short Film</p>
          <p className='section-link'>2. Setting Up a Filmmaking Club</p>
          <p className='section-link'>3. My Second Short Film - a Humbling Experience</p>
          <p className='section-link'>4. Toronto, a Brand New Start</p>
          <p className='section-link'>5. For Pete's Sake</p>
          <p className='section-link'>6. Making a Musical in 48 Hours!</p>
        </div>
      </div>
      <FilmJourneyContent />
    </div>
  )
}
