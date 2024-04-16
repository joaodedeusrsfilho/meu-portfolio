import '../Contato/style.css'
import '../Contato/responsivo.css'

const Contato = () => {
    return (
        <div className='containerForm' id='contato'>
            <h2>Entre em contato</h2>


            <form action="https://formsubmit.co/joaodedeusrsfilho@gmail.com" method="post">


                <input type="text" name="nome" id="nome" placeholder='Digite seu nome' />

                <input type="email" name="email" id="email" placeholder='Digite seu email' required />

                <textarea name="mensagem" id="mensagem" placeholder='Mensagem' cols="30" rows="10" required></textarea>
                <br />

                <input type="submit" value="Enviar mensagem" className='botaoEnviar' />
                <input type="reset" value="Limpar campos" className='botaoLimpar' />

                
                <input type="hidden" name="_template" value="table"></input>
                
            </form>

        </div>
    )
}

export default Contato