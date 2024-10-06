import FilmJourneyContent from './film-journey.mdx'
import "./FilmJourneyPage.scss"

export const FilmJourneyPage = () => {
  return (
    <div className="page-content film-journey">
      <div className="card">
        <div className="content py-2 px-3">
          <p id="projectname" class="title">Content</p>
          <p>Blazing fast speed you can rely on.</p>
        </div>
      </div>
      <FilmJourneyContent />
    </div>
  )
}
