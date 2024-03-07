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

                    <p className='paragrafo'>Sempre gostei da área da tecnologia por estar sempre em constante evolução e aperfeiçoamento, após ingressar na faculdade de ciências da computação e conhecer o mundo do desenvolvimento web percebi que essa é a área que quero trabalhar, em busca disso estou diariamente me aperfeiçoando por meio das plataformas de ensino online: Alura, RocketSeat, DIO, fóruns, etc. meus hobbies: estudar desenvolvimento web e nas horas vagas: filmes, serie, exercícios físicos.  
                    </p>
                </div>

            </div>
        </section>
    )
}

export default SectionSobreMim