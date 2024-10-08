import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaImdb } from "react-icons/fa6";
import './Footer.scss'
export const Footer = () => {
    return (
        <div className="my-footer u-flex u-flex-column u-items-center u-justify-center">
            <div className="socials u-flex">
                <CiInstagram />
                <CiLinkedin />
                <FaImdb />
            </div>
            <span className="mt-3">
                Coded by me.
            </span>
        </div>
    )
}
