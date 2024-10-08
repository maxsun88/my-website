import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaImdb } from "react-icons/fa6";
import './Footer.scss'
export const Footer = () => {
    return (
        <div className="my-footer ptu-flex u-flex-column u-items-center u-justify-center">
            <div className="socials u-flex">
                <a rel="noopener noreferrer" href="https://www.instagram.com/maxsun8/" target="_blank">
                    <CiInstagram />
                </a>
                <a rel="noopener noreferrer" href="https://www.linkedin.com/in/max-sun-b76382174/" target="_blank">
                    <CiLinkedin />
                </a>
                <a rel="noopener noreferrer" href="https://www.imdb.com/name/nm14593233/?ref_=ext_shr_lnk" target="_blank">
                    <FaImdb />
                </a>
            </div>
            <span className="mt-3">
                Coded by me with ❤, {new Date().getFullYear()}
            </span>
        </div>
    )
}
