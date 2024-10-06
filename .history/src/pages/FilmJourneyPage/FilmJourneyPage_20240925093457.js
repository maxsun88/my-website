import FilmJourneyContent from './film-file.mdx'
import { MDXProvider } from '@mdx-js/react'
import "./FilmJourneyPage.scss"
export const FilmJourneyPage = () => {
  return (
    <MDXProvider components={{}}>
      <div className="page-content film-journey">
        <TestFile />
      </div>
    </MDXProvider>
  )
}
