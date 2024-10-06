import React from 'react'
import FilmJourney from './film-journey.mdx'
import { MDXProvider } from '@mdx-js/react'
import "./FilmJourneyPage.scss"
export const FilmJourneyPage = () => {
  return (
    <MDXProvider components={null}>
      <div className="page-content film-journey">
        <FilmJourney />
      </div>
    </MDXProvider>
  )
}
