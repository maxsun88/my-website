import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaImdb } from "react-icons/fa";
import './Footer.scss'
export const Footer = () => {
    return (
        <div className="my-footer u-flex u-flex-column u-items-center u-justify-center">
            <div>
                Coded by me.
            </div>
            <div className="socials u-flex">
                <FaInstagram />
                <FaLinkedin />
                <FaImdb />
            </div>
        </div>
    )
}
