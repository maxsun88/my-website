import React from 'react'
import FilmJourney from './FilmJourney.mdx'
import 
import "./FilmJourneyPage.scss"
export const FilmJourneyPage = () => {
  return (
    <MDXProvider components={components}>
      <div className="page-content film-journey">
        <FilmJourney />
      </div>
    </MDXProvider>
  )
}
