import './style.css'
import './responsivo.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoYoutube } from "react-icons/io";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='footer'>
            <section className='sectionFooter'>
                <div className="icones">
                    <a href='https://github.com/joaodedeusrsfilho' target='_blank'>
                        <FaGithub />
                    </a>
                    <a href='https://linkedin.com/in/joaodedeusrsfilho' target='_blank'>
                        <FaLinkedin />
                    </a>
                    
                    <a href="mailto:joaodedeusrsfilho@gmail.com">
                        <MdEmail className='email' />
                    </a>

                </div>
                <div className="copyRight">
                    <p>Copyright © 2024 - João de Deus</p>
                </div>
            </section>
        </footer>
    )
}
export default Footer


