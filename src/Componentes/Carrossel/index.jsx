import './style.css'
import './responsivo.css'

//importando imagens
import romario from "../../../public/imagens/slide/romario.jpeg";
import ronaldinho from "../../../public/imagens/slide/gaucho.jpeg";
import cr71 from "../../../public/imagens/slide/cr7_1.jpeg";
import cr72 from "../../../public/imagens/slide/cr7.jpeg";

import { Swiper, SwiperSlide } from 'swiper/react'
import { useState, useEffect } from 'react';

//import register do swiper
import { register } from 'swiper/element-bundle';

register()

//import Swipper Styles
import 'swiper/css'
import 'swiper/css/bundle'
//importar os modules
import 'swiper/css/navigation'//são as setinhas
import 'swiper/css/pagination'//são as bolinhas que ficam embaixo da imagem
import 'swiper/css/scrollbar'

const Carrossel = () => {

    const [quantidadeImagem, setQuantidadeImagem ] = useState(2)

    const imagens = [
        { id: '1', imagem: romario },
        { id: '2', imagem: ronaldinho },
        { id: '3', imagem: cr71 },
        { id: '4', imagem: cr72 }
    ]

    useEffect(() => {
        function handleResize(){
            if(window.innerWidth < 720){
                setQuantidadeImagem(1)
            }else{
                setQuantidadeImagem(2)
            }
        }
        
        //quando a tela mudar de tamanho vai alterar o resize 
        window.addEventListener('resize', handleResize)
        
        handleResize()
        
        //quando sair desse componente tem q desmontar o componente
        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, [])//[] = array de dependencia

    return (

        <div className='containerSlide'>
            <h1 className="title">Slider com React JS</h1>

            <Swiper
                loop
                pagination
                navigation//setinhas
                slidesPerView={quantidadeImagem}//quantidade de imagem em cada slide por meio do useState
            >
                {imagens.map((imagemAtual) => (
                    <SwiperSlide id={imagemAtual.id}>
                        <img src={imagemAtual.imagem} alt="Imagem"
                            className='imagem-item' />

                    </SwiperSlide>
                ))}

            </Swiper>

        </div>
    )
}

export default Carrossel