import React from 'react'
/* components */
import Opinion from '../opinion'

/* swiper dependencies*/
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';



// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';


/* style component */
import './cardswiper.scss'

// install Swiper modules
SwiperCore.use([Navigation]);


const CardOpinion = () => {
    const data = [
        {
            name: 'Alex Escalante',
            opinion: 'Una buena aplicación, además que es fácil de utilizar',
            img: 'https://static2.abc.es/Media/201501/22/Fotolia_70252145_Subscription_Monthly_M--478x270.jpg'
        },
        {
            name: 'Miguel Melgarejo',
            opinion: 'Me agrada la aplicación y las funciones que puedes realizar con esta',
            img: 'https://www.lifeder.com/wp-content/uploads/2016/08/tipos-de-felicidad-lifeder-imagen.jpg'
        },
        {
            name: 'Vargas Najera',
            opinion: 'Una buena aplicación, además que es fácil de utilizar',
            img: 'https://s3.amazonaws.com/arc-authors/undefined/ef3b5557-5f54-4003-b1df-016993daeb5e.jpg'
        },
    ]
    return (
        <div className="container-swiper-card-opinion">
            <div className="titles__card__opinion">
                <h1>Ellos confian en nosotros</h1>
                <h3>Comentarios de nuestros usuarios</h3>
            </div>
            <Swiper
                className='slider__opinion'
                spaceBetween={50}
                slidesPerView={3}
                navigation
                /* responsive */
                breakpoints={{
                    // when window width is >= 768px
                    600: {
                        slidesPerView: 1
                    },
                    900: {
                        slidesPerView: 2
                    },
                    1300: {
                        slidesPerView: 3
                    }
                }}
            >

                {data.map((i) => (
                    <SwiperSlide key={i.name}>
                        <Opinion
                            id={i.name}
                            name={i.name}
                            description={i.opinion}
                            img={i.img}
                        />
                    </SwiperSlide>
                ))}


            </Swiper>
        </div>
    )
}
export default CardOpinion;