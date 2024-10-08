import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaImdb } from "react-icons/fa";
import './Footer.scss'
export const Footer = () => {
    return (
        <div className="my-footer u-flex u-flex-column u-items-center u-justify-center">
            <div className="socials u-flex">
                <FaInstagram />
                <FaLinkedin />
                <FaImdb />
            </div>
            <p className="mt-3">
                Coded by me.
            </p>
        </div>
    )
}
