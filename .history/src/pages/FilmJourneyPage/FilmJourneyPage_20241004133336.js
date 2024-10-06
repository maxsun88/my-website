import FilmJourneyContent from './film-journey.mdx'
import "./FilmJourneyPage.scss"

export const FilmJourneyPage = () => {
  return (
    <div className="page-content film-journey">
      <div className="card" style="max-width: 250px;">
        <div className="content u-text-center pt-3">
          <p id="projectname" class="title mt-2 mb-0">Fast. Very fast.</p>
          <p>Blazing fast speed you can rely on.</p>
        </div>
      </div>
      <FilmJourneyContent />
    </div>
  )
}
