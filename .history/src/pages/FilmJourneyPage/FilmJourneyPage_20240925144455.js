import FilmJourneyContent from './film-journey.mdx'
import { MDXProvider } from '@mdx-js/react'
import "./FilmJourneyPage.scss"
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
export const FilmJourneyPage = () => {
  return (
    <MDXProvider>
      <div className="page-content film-journey">
        <FilmJourneyContent />
      </div>
    </MDXProvider>
  )
}
