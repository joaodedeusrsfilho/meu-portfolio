import './style.css'
import './responsivo.css'
import { FaStar } from "react-icons/fa6";

const HardSkill = () => {
    return (
        <section className='sectionHardSkill' id='hardSkill'>
            <div className="containerHardSkills">
                <div className='hardSkill'>
                    <h1><FaStar />Hard Skills<FaStar /></h1>
                </div>
                <div className='div1'>
                    <div className="div1_1">
                        <img src="./imagens/hardskills/html.png" alt="logoHtml" />

                        <p>HTML5 - Linguagem de marcação utilizada na construção de páginas na Web.</p>
                    </div>
                    <div className="div1_2">
                        <img src="./imagens/hardskills/css.png" alt="logoCss" />

                        <p>CSS - Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags styles. Também é possível, adicionar estilos adicionando um link para um arquivo CSS que contém os estilos.</p>
                    </div>

                </div>
                <div className="div2">
                    <div className="div2_1">
                        <img src="./imagens/hardskills/javascript.png" alt="logoJavaScript" />

                        <p>JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.</p>
                    </div>

                    <div className="div2_2">
                        <img src="./imagens/hardskills/react.png" alt="logoReact" />

                        <p>React - é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HardSkill