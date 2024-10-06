import FilmJourneyContent from './film-journey.mdx'
import "./FilmJourneyPage.scss"

export const FilmJourneyPage = () => {
  return (
    <div className="page-content film-journey">
      <div className="card">
        <div className="content p-3">
          <p id="projectname" class="title mt-2 mb-0">Content</p>
          <p>Blazing fast speed you can rely on.</p>
        </div>
      </div>
      <FilmJourneyContent />
    </div>
  )
}
