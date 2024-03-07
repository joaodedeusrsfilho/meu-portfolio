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

                    <img src="./imagens/perfilLinkedin.png" alt="foto_perfil_github" />

                    <p className='paragrafo'>Sempre gostei da área da tecnologia e após me tornar bacharel em ciência da computação pela FAESF/MA, onde durante o período de formação fiquei fascinado pelo desenvolvimento web e suas possibilidades.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default SectionSobreMim