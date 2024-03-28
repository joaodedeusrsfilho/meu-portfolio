import './style.css'
import './responsivo.css'
import { IoConstruct } from "react-icons/io5";

const Projetos = () => {
    return (
        <section className='sectionProjetos' id='projetos'>
            <div className="containerProjetos">
                <div className='projeto'>
                    <h1><IoConstruct /> Projetos <IoConstruct /></h1>
                </div>
                <div className="primeiraDiv">
                    
                    <div className="primeiraDiv1_1">
                        <a href="https://hamburgueria-sable-nu.vercel.app/" target='_blank'>

                            <img src="./imagens/projetos/hamburgueria.png" alt="projetoSpotify"/>
                        </a>
                        <p>
                        Projeto cardapio digital para negocios locais, facilitando o atendimento ao cliente, onde após escolher os produtos o mesmo já pode enviar a mensagem com os produtos salvos via whatapp
                        </p>
                    </div>
                    <div className="primeiraDiv1_1">
                        <a href="https://github.com/joaodedeusrsfilho/projetoorgano" target='_blank'>

                            <img src="./imagens/projetos/organo.png" alt="projetoSpotify" />
                        </a>
                        <p>
                            Organizador de pessoas e times em um só lugar, utilizando React + Vite.
                            Obs.: no campo imagem digite, por exemplo, a URL do GitHub seguida de (.png), dessa forma ira aparecer a imagem da foto do perfil do usuário do GitHub.
                        </p>
                    </div>

                    <div className="primeiraDiv1_2">
                        <a href="https://github.com/joaodedeusrsfilho/clone-spotify" target='_blank'>
                            <img src="./imagens/projetos/spotify.png" alt="projetoSpotify" />
                        </a>
                        <p>
                            Recriando página inicial do Spotify por meio do HTML, CSS e JavaScript.
                        </p>
                    </div>
                </div>
                <div className="segundaDiv">
                    <div className="segundaDiv1_1">
                        <a href="https://github.com/joaodedeusrsfilho/instagram-clone" target='_blank'>
                            <img src="./imagens/projetos/cloneInstagram.png" alt="projetoSpotify" />
                        </a>
                        <p>
                            Clone do Instagram utilizando flexbox e media query.
                        </p>
                    </div>
                    <div className="segundaDiv1_2">
                        <a href="https://github.com/joaodedeusrsfilho/calculadora" target='_blank'>
                            <img src="./imagens/projetos/calculadora.png" alt="projetoSpotify" />
                        </a>
                        <p>
                            Uma calculadora básica em JavaScript, utilizando a função eval para processamento dos cálculos.
                        </p>
                    </div>
                </div>
                <div className="terceiraDiv">
                    <div className="terceiraDiv1_1">
                        <a href="https://github.com/joaodedeusrsfilho/analisar_numeros" target='_blank'>
                            <img src="./imagens/projetos/analisarNumeros.png" alt="projetoSpotify" />
                        </a>
                        <p>
                            Analisando números entre os valores 1 e 100, exibindo o maior valor e menor valor, a Soma e a Media dos números inseridos pelo usuário.
                        </p>
                    </div>
                    <div className="terceiraDiv1_2">
                        <a href="https://github.com/joaodedeusrsfilho/tabuada" target='_blank'>
                            <img src="./imagens/projetos/tabuada.png" alt="projetoSpotify" />
                        </a>
                        <p>
                            Uma tabuada, exibindo a criação de elementos em uma section, para exibição dos resultados.
                        </p>
                    </div>
                </div>
            </div>
        </section >
    )
}
export default Projetos