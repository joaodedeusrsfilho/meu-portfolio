import './style.css'
import './responsivo.css'

function mostrarMenuMobile() {
    let menuMobile = document.querySelector('.menuMobile');
    /*toda vez que clicar pela primeira vez no icone mobile, a condição vai iniciar no else, adicionando a classe open, e no proximo clique a condição vai iniciar no if*/
    if (menuMobile.classList.contains('exibirMenuMobile')) {
        menuMobile.classList.remove('exibirMenuMobile');
        document.querySelector('.icone').src = '../imagens/list.svg'


    } else {
        menuMobile.classList.add('exibirMenuMobile')
        document.querySelector('.icone').src = '../imagens/x.svg'
    }
}

const Header = () => {
    return (
        <header className='principal' id='header'>
            <div className='menuSite'>
                <nav className='navBar'>
                    <div className="logo">
                        <img src="./imagens/logo.png" alt="logo" />
                    </div>
                    <nav className="navList">
                        <ul>
                            <li className='navItem'><a href="#">Inicio</a></li>
                            <li className='navItem'><a href="#sobre">Sobre Mim</a></li>
                            <li className='navItem'><a href="#formacao">Formação</a></li>
                            <li className='navItem'><a href="#hardSkill">Hard Skills</a></li>
                            <li className='navItem'><a href="#projetos">Projetos</a></li>
                        </ul>
                    </nav>
                    <div className="iconeMenuMobile">
                        <button className='botao' onClick={mostrarMenuMobile}>
                            <img className='icone' src="./imagens/list.svg" alt="iconeLista" />
                        </button>
                    </div>
                </nav>
                <div className="menuMobile">
                    <ul>
                        <li className='navItem'><a href="#">Inicio</a></li>
                        <li className='navItem'><a href="#sobre">Sobre Mim</a></li>
                        <li className='navItem'><a href="#formacao">Formação</a></li>
                        <li className='navItem'><a href="#hardSkill">Hard Skills</a></li>
                        <li className='navItem'><a href="#projetos">Projetos</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header

