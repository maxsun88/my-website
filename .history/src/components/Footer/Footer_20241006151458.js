import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaImdb } from "react-icons/fa";
import './Footer.scss'
export const Footer = () => {
    return (
        <div className="footer u-flex u-justify-center">
            Coded by me.
            <div className="socials u-flex">
                <FaInstagram />
                <FaLinkedin />
                <FaImdb />
            </div>
        </div>
    )
}
