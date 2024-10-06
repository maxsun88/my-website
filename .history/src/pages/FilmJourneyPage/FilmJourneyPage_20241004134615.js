import FilmJourneyContent from './film-journey.mdx'
import "./FilmJourneyPage.scss"

export const FilmJourneyPage = () => {
  return (
    <div className="page-content film-journey">
      <div className="card">
        <div className="content py-2 px-3">
          <p className="title">Content</p>
          <p>2. Setting Up a Filmmaking Club</p>
          <p>1. The Beginning & My First Short Film</p>
          <p>3. My Second Short Film - a Humbling Experience</p>
          <p>4. Toronto, a Brand New Start</p>
          <p>5. For Pete's Sake</p>
          <p>6. Making a Musical in 48 Hours!</p>
        </div>
      </div>
      <FilmJourneyContent />
    </div>
  )
}
