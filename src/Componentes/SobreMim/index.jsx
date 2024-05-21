import './style.css'
import './responsivo.css';

import { FaReact } from "react-icons/fa6";

const SectionSobreMim = () => {
    return (
        <section className='sectionSobreMim' id='sobre'>

            <div className="containerSobreMim">
                <div className='sobreMim'>
                    <h1><FaReact />Sobre Mim<FaReact /></h1>
                </div>

                <div className="sobreMimDescricao">

                    <p className='paragrafo'>Bacharel em ciências da computação, com as SOFTSKILLS: Princípios éticos, confiança, atitude positiva, motivação, trabalho em equipe, organização, gestão de tempo e comunicação.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default SectionSobreMim