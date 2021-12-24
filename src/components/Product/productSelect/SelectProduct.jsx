import React from 'react'
/* styles */
import './selectproduct.scss';

const SelectProduct = ({ data }) => {

    /* slider */
    const imgs = document.querySelectorAll('.img-select a');
    const imgBtns = [...imgs];
    let imgId = 1;

    imgBtns.forEach((imgItem) => {
        imgItem.addEventListener('click', (event) => {
            event.preventDefault();
            imgId = imgItem.dataset.id;
            slideImage();
        });
    });

    function slideImage() {
        const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
        document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
    }
    /* 

    const renderImage = () => {
        for (let i = 0; i < data.images.lenght; i++) {

        }
    } */


    return (

        <div className="card-wrapper">
            {data &&
                <div className="card-information">
                    {/* section-images */}
                    <div className="product-img wow animate__animated animate__fadeInLeft">
                        <div className="img-display">
                            <div className="img-showcase">
                                {
                                    data.images.map(i => (
                                        <img src={i.url}
                                            alt="product-image" />
                                    ))
                                }
                            </div>
                        </div>
                        <div className="img-select">
                            {
                                data.images.map((i, index) => (
                                    <div className="img-item">
                                        <a href="" data-id={index + 1}>
                                            <img src={i.url} />
                                        </a>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* section-information */}
                    <div class="product-content wow animate__animated animate__fadeInRight">
                        <div className="product-content-all">

                            <h2 className="product-title">{data.name}</h2>

                            <div className="product-detail">
                                <div className="name-price-product">
                                    <h2>Sobre el Producto </h2>
                                    <div className="product-price">
                                        <h2><span>$/. </span>{data.price}</h2>
                                    </div>
                                </div>
                                <p>{data.description}</p>
                                <ul>
                                    <li>Capacidad: <span> {data.capacity}</span></li>
                                    <li>Cantidad de unidades: <span> {data.stock} </span></li>
                                    <li>Modelo: <span>{data.model}</span></li>
                                    <li>Marca: <span>{data.brand}</span></li>
                                </ul>
                            </div>
                            <div className="more-information-product">
                                {/* <a href=""><i className="fas fa-comments"></i> Iniciar Converzacion</a> */}
                                <a href={data.enterpriseId.link}><i className="fab fa-google"></i> Visitar Web Oficial</a>
                            </div>
                            <div className="social-links">
                                <p>Informacion del Vendedor</p>
                                <a href=""><i className="fab fa-facebook-f"></i></a>
                                <a href=""><i class="fab fa-twitter"></i></a>
                                <a href=""><i class="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div>

    )
}
export default SelectProduct;