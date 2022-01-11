import React, { useEffect, useState } from 'react'
/* components */
import ProductCard from '../Product/productCard/ProductCard';
import Loader from '../loader/Loader'

/* swiper dependencies*/
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import { listProducts } from '../../services/products'

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';


/* style component */
import './cardswiper.scss'

// install Swiper modules
SwiperCore.use([Navigation]);


const CardSwiper = () => {

    const [info, setInfo] = useState([]);
    const [loader, setLoader] = useState(true);



    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        const result = await listProducts()
        setInfo(result.data.products)
        setLoader(false)
    }

    if (loader) {
        return <Loader />
    }

    return (
        <div className="container-swiper-card">
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                navigation
                /* responsive */
                breakpoints={{
                    // when window width is >= 640px
                    200: {
                        slidesPerView: 1
                    },
                    // when window width is >= 768px
                    600: {
                        slidesPerView: 2
                    },
                    900: {
                        slidesPerView: 3
                    }
                }}
            >
                {info &&

                    info.map(infos => (
                        <SwiperSlide key={infos.id}>
                            <ProductCard
                                name={infos.name}
                                description={infos.description}
                                img={infos.images}
                                price={infos.price}
                                id={infos.id}
                            />
                        </SwiperSlide>
                    ))}

            </Swiper>
        </div>
    )
}
export default CardSwiper;