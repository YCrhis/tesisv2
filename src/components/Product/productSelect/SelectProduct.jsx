import React from 'react'

import { useSelector } from 'react-redux';
import { selectUser, selectCompany } from '../../../features/userSlice';
import { interestedProduct, deleteInterestedProduct } from '../../../services/products'
/* styles */
import './selectproduct.scss';

const SelectProduct = ({ data, isInterested, setIsInterested, setOrder, order }) => {

    // console.log(data, 'mi data no carga');

    const user = useSelector(selectUser);
    const company = useSelector(selectCompany);

    const myDate = () => {
        var fecha = new Date(data?.createdAt);
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return fecha.toLocaleDateString("es-ES", options)
    }

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
    const handleInteresting = async () => {
        // console.log(isInterested);
        if (isInterested === true) {
            await deleteInterestedProduct(order.id);
            setOrder(null);
            setIsInterested(false);
        }
        if (isInterested === false) {
            // console.log({ productId: data.id, userId: user.id },' hay qye ver');
            const res = await interestedProduct({ productId: data.id, userId: user.id });
            setOrder(res.data);
            setIsInterested(true);
        }

    }

    return (

        <div className="card-wrapper">
            {data &&
                <div className="card-information">
                    {/* section-images */}
                    <div className="product-img wow animate__animated animate__fadeInLeft">
                        <div className="img-display">
                            <div className="img-showcase">
                                {
                                    /* eslint-disable */
                                    data.images.map(i => (
                                        <img src={i.url} key={i.url} />
                                    ))
                                }
                            </div>
                        </div>
                        <div className="img-select">
                            {
                                /* eslint-disable  */
                                data.images.map((i, index) => (
                                    <div className="img-item" key={i.url}>
                                        <a href="#" data-id={index + 1}>
                                            <img src={i.url} key={i.url} />
                                        </a>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* section-information */}
                    <div className="product-content wow animate__animated animate__fadeInRight">
                        <div className="product-content-all">

                            <h2 className="product-title">{data.name}</h2>

                            <div className="product-detail">
                                <div className="name-price-product">
                                    <h2>Sobre el Producto </h2>
                                    <div className="product-price">
                                        <h2><span>S/. </span>{data.price}</h2>
                                    </div>
                                </div>
                                <p>{data.description}</p>
                                <ul>
                                    <li>Capacidad: <span> {data.capacity}</span> BTU</li>
                                    <li>Cantidad de unidades: <span> {data.stock} </span></li>
                                    <li>Modelo: <span>{data.model}</span></li>
                                    <li>Marca: <span>{data.brand}</span></li>
                                    <li>Consumo: <span>{data.energyConsume} Watts</span></li>
                                    <li>Tipo: <span>{data.type}</span></li>
                                    {data.warranty === true &&
                                        <li>Garant??a: <span><i className="fas fa-check-circle"></i></span></li>
                                    }
                                    {data.install === true &&
                                        <li>Instalaci??n: <span><i className="fas fa-check-circle"></i></span></li>
                                    }
                                </ul>
                                <i>Publicado en: {myDate()}</i>
                            </div>
                            <div className="more-information-product">
                                {data.webPage &&
                                    <a href={data.enterpriseId.link}><i className="fab fa-google"></i> Visitar Web Oficial</a>
                                }
                                {user ?
                                    <button className='add__favourites' onClick={handleInteresting}>
                                        {isInterested === true ?
                                            <p>Ya no estoy interesado</p>
                                            :
                                            <p>Estoy interesado</p>
                                        }
                                        <i className="far fa-hand-pointer"></i>
                                    </button>
                                    : null
                                }

                            </div>
                        </div>
                    </div>
                </div>
            }
            {/* {interest === false &&
                < ModalMessage
                    title="Gracias por su apoyo"
                    message="Ahora el due??o sabe que estas interesado en su producto"
                    img="https://assets.stickpng.com/thumbs/580b585b2edbce24c47b24c3.png"
                />
            }

            {deleteInterest === true &&
                < ModalMessage
                    title="Sin interes"
                    message="El producto ya no es de tu interes"
                    img="https://static.thenounproject.com/png/370710-200.png"
                />
            } */}

        </div>

    )
}
export default SelectProduct;