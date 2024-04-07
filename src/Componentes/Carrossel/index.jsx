import './style.css'

//importando imagens
import romario from "../../../public/imagens/slide/romario.jpeg";
import ronaldinho from "../../../public/imagens/slide/gaucho.jpeg";
import cr71 from "../../../public/imagens/slide/cr7_1.jpeg";
import cr72 from "../../../public/imagens/slide/cr7.jpeg";

import { Swiper, SwiperSlide } from 'swiper/react'

//import register do swiper
import { register } from 'swiper/element-bundle';

register()

//import Swipper Styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const Carrossel = () => {

    const imagens = [
        { id: '1', imagem: romario },
        { id: '2', imagem: ronaldinho },
        { id: '3', imagem: cr71 },
        { id: '4', imagem: cr72 }
    ]

    return (

        <div className='containerSlide'>
            <h1 className="title">Slider com React JS</h1>

            <Swiper
                slidesPerView={1}
                pagination={{clickable:true}}
                navigation
                loop
            >
                {imagens.map((imagem) => (
                    <SwiperSlide key={imagem.id}>
                        <img src={imagem.imagem} alt="Imagem" className='imagem-item' />
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>

    )
}

export default Carrossel