import './style.css'
import './responsivo.css'

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoYoutube } from "react-icons/io";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useState } from 'react';

const Section1 = () => {

    const downloadUrl = "https://drive.google.com/file/d/1cTzEN7cNTVI1s5Elv14pMFU1x3n4pjOH/view?usp=sharing"

    return (
        <section className='section1'>
            <div className="container">
                <div className='paragrafos'>

                    <p >João de Deus</p>
                    <p className='efeitoDigitacao' style={{ color: '#00AD6F' }}>Desenvolvedor Front-End</p>

                        
                        <a href={downloadUrl}>
                            <button id='curriculo'>Download Curriculo em PDF</button>
                        </a>
                        
                        
                    
                    <div className='icones'>

                        <a href='https://github.com/joaodedeusrsfilho' target='_blank'>
                            <FaGithub className='github' />
                        </a>

                        <a href="https://www.linkedin.com/in/joaodedeusrsfilho/" target='_blank'>
                            <FaLinkedin className='linkedin' />
                        </a>

                        <a href="mailto:joaodedeusrsfilho@gmail.com">
                            <MdEmail className='email' />
                        </a>

                    </div>
                </div>

                <div className='imagem'>
                    <div>
                        <img src="./imagens/perfil.jpg" alt="logo react" className='perfil'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section1