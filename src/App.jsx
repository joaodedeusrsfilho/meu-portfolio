import './App.css'


import FormacaoAcademica from './Componentes/FormacaoAcademica'
import HardSkill from './Componentes/HardSkills'
import Header from './Componentes/Header'
import Projetos from './Componentes/Projetos'
import Footer from './Componentes/Footer'
import Section1 from './Componentes/Section1'
import SobreMim from './Componentes/SobreMim'


function App() {

  return (

    <div className='header'>
      <Header />
      <Section1 />
      <SobreMim />
      <FormacaoAcademica />
      <HardSkill />
      <Projetos />
      <Footer/>
    </div>


  )
}

export default App
