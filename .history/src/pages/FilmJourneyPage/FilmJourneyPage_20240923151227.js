import React from 'react'
import FilmJourney
import "./FilmJourneyPage.scss"
export const FilmJourneyPage = () => {
  return (
    <MDXProvider components={components}>
      <div className="page-content film-journey">
        <ProjectContent />
      </div>
    </MDXProvider>
  )
}
