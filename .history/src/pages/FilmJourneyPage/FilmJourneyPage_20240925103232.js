import FilmJourneyContent from './film-journey.mdx'
import { MDXProvider } from '@mdx-js/react'
import "./FilmJourneyPage.scss"
export const FilmJourneyPage = () => {
  return (
    <MDXProvider>
      <div className="page-content film-journey">
        <FilmJourneyContent />
      </div>
    </MDXProvider>
  )
}
