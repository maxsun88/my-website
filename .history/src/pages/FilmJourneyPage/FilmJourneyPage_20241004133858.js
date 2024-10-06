import FilmJourneyContent from './film-journey.mdx'
import "./FilmJourneyPage.scss"

export const FilmJourneyPage = () => {
  return (
    <div className="page-content film-journey">
      <div className="card">
        <div className="content py-2 px-3">
          <p className="title">Content</p>
          <p>1. The beginning & my first short film</p>
          <p>2. Setting Up a film club</p>

        </div>
      </div>
      <FilmJourneyContent />
    </div>
  )
}
