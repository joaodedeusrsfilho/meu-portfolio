import './style.css'
import './responsivo.css'

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoYoutube } from "react-icons/io";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Section1 = () => {
    return (
        <section className='section1'>
            <div className="container">
                <div className='paragrafos'>

                    <p >João de Deus</p>

                    <p className='efeitoDigitacao' style={{ color: '#00AD6F' }}>Desenvolvedor Front-End</p>

                    <div className='icones'>

                        <a href='https://github.com/joaodedeusrsfilho' target='_blank'>
                            <FaGithub className='github' />
                        </a>

                        <a href="https://www.linkedin.com/in/joaodedeusrsfilho/" target='_blank'>
                            <FaLinkedin className='linkedin' />
                        </a>

                        <a href='https://www.youtube.com/@kenmastersdev' target='_blank'>
                            <IoLogoYoutube className='youtube' />
                        </a>

                        <a href="https://instagram.com/kenmastersdev" target='_blank'><FaInstagram /></a>

                        <a href="https://www.tiktok.com/@kenmastersdev" target='_blank'><FaTiktok /></a>

                        <a href="mailto:joaodedeusrsfilho@gmail.com">
                            <MdEmail className='email' />
                        </a>

                    </div>
                </div>

                <div className='imagem'>
                    <div>
                        <img src="./imagens/perfil.jpg" alt="logo react" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section1