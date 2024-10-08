import FilmJourneyContent from './film-journey.mdx'
import "./FilmJourneyPage.scss"
import "react-image-gallery/styles/css/image-gallery.css";
const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];
export const FilmJourneyPage = () => {
  return (
    <div className="page-content film-journey">
      <FilmJourneyContent/>
    </div>
  )
}
