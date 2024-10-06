import { useState } from "react"
import "./FilmJourneyPage.scss"
import { Link, Outlet } from 'react-router-dom'

export const FilmJourneyPage = () => {
  const [isMobileIndexExpanded, setIsMobileIndexExpanded] = useState(false);
  const handleLinkClick = () => {
    setIsMobileIndexExpanded(false);
  };
  return (
    <div className="page-content film-journey">
      <div className="row">
        <div className="col-8 text-content">
          <Outlet />
        </div>
        <div className={`col-4 ${isMobileIndexExpanded ? '' : 'u-none'} u-block-md`}>
          <div className="content-index card">
            <div className="content py-2 px-3">
              <p className="title">Chapters</p>
              <p className='section-link'><Link to="/journey/the-beginning" onClick={handleLinkClick}>1. The Beginning & My First Short Film</Link></p>
              <p className='section-link'><Link to="/journey/setting-up-a-film-club" onClick={handleLinkClick}>2. Setting Up a Filmmaking Club</Link></p>
              <p className='section-link'><Link to="/journey/second-short-film" onClick={handleLinkClick}>3. My Second Short Film - a Humbling Experience</Link></p>
              <p className='section-link'><Link to="/journey/toronto" onClick={handleLinkClick}>4. Toronto, a Brand New Start</Link></p>
              <p className='section-link'><Link to="/journey/for-petes-sake" onClick={handleLinkClick}>5. For Pete's Sake</Link></p>
              <p className='section-link'><Link to="/journey/musical" onClick={handleLinkClick}>6. Making a Musical in 48 Hours!</Link></p>
          
            </div>
          </div>
        </div>
        {!isMobileIndexExpanded &&
          <div className="index-icon u-none-md u-flex u-items-center u-justify-center"
            onClick={() => setIsMobileIndexExpanded(true)}>
            <img src="/images/icons/index-icon.png"></img>
          </div>
        }
        {isMobileIndexExpanded &&
          <div className="cross-icon u-none-md u-flex u-items-center u-justify-center"
            onClick={() => setIsMobileIndexExpanded(false)}>
            <img src="/images/icons/cross-icon.png"></img>
          </div>
        }

      </div>
    </div>
  )
}
