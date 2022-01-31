import React from 'react'
import {Link} from 'react-router-dom';

/* style  */
import './swiperHomer.scss'
/* swiper */
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"



// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from 'swiper/core';
// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);


function SwiperHome() {
    return (
        
        <Swiper
            direction={'vertical'}
            pagination={{ "clickable": true }}
            className="mySwiper"
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false
            }}
        >
            <SwiperSlide>
                <h3>Publicar productos</h3>
                <p>Puedes publicar tus poductos, pero para ello necesitas tener una cuanta como empresa. (es requisito necesario para la identificación de los productos)</p>
                <button><Link to="/product" className="button_used">Ver productos</Link></button>
            </SwiperSlide>
            <SwiperSlide>
                <h3>Hablar en la comunidad</h3>
                <p>En nuestra sección de "Publicación" puedes encontrar preguntas de nuestros usuarios, puedes responderlos o hasta incluso puedes crear tu propia publicación</p>
                <button><Link to="/posts" className="button_used">Ingresar a la Comunidad</Link></button>
            </SwiperSlide>
            <SwiperSlide>
                <h3>Contratar servicios</h3>
                <p>El contrato de servicios va a depender de cuánta comunicación puedas tener con la empresa, la aplicación solo es un medio para la comunicación entre ambos</p>
                <button><Link to="/empresas" className="button_used">Conoce Empresas</Link></button>
            </SwiperSlide>
            <SwiperSlide>
                <h3>Publicaciones</h3>
                <p>Puedes publicar tus consultas y/o respuestas en nuestra sección de publicación</p>
                <button><Link to="/posts" className="button_used">Ir</Link></button>
            </SwiperSlide>
        </Swiper>
    )
}

export default SwiperHome
