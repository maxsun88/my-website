import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaImdb } from "react-icons/fa";
import './Footer.scss'
export const Footer = () => {
  return (
    <div className="footer">
        Coded by me.
        <FaInstagram />
        <FaLinkedin />
        <FaImdb />
    </div>
  )
}
