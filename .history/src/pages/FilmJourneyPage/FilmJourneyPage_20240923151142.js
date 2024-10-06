import React from 'react'
import "./FilmJourneyPage.scss"
export const FilmJourneyPage = () => {
  return (
    <div className='page-content film-journey'>
      <MDXProvider components={components}>
        <div className="article">
          <ProjectContent />
        </div>
      </MDXProvider>
    </div>
  )
}
