import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import romario from "../../../public/imagens/slide/romario.jpeg";
import ronaldinho from "../../../public/imagens/slide/gaucho.jpeg";
import cr71 from "../../../public/imagens/slide/cr7_1.jpeg";
import cr72 from "../../../public/imagens/slide/cr7.jpeg";

import './style.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


const CarrosselModelo2 = () => {

    const slides = [romario, ronaldinho, cr71, cr72]

    return (

        <div className='containerSlide'>
            <Swiper modules={{Navigation, Pagination}} navigation pagination loop>
                {slides.map(slide => (
                    <SwiperSlide>
                        <img src={slide} alt={slides} />
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>

    )
}

export default CarrosselModelo2