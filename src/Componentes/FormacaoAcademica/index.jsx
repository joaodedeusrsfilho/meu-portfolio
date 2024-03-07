import './style.css'
import './responsivo.css'
import { HiAcademicCap } from "react-icons/hi2";

const FormacaoAcademica = () => {
    return (
        <section className='sectionFormacao' id='formacao'>
            <div className="containerInterno">
                <div className='titulo'>
                    <h1><HiAcademicCap />Formação Acadêmica<HiAcademicCap /></h1>
                </div>
                <div className='descricao'>

                    <div>
                        <img src="./imagens/formatura.jpg" alt="imagemFormado" />
                    </div>
                    <div>
                        <p>Faculdade de Educação São Francisco</p>
                        <p>Ciência da Computação</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FormacaoAcademica