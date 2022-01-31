import React from 'react'
import { Link } from 'react-router-dom'
/* style */
import './ProductCard.scss'

const ProductCard = ({ name, img, id, price, edit }) => {

    return (
        <>
            <div className="card wow animate__animated animate__fadeIn animate__slow">
                <div className="card__productNew">
                    {edit ?
                        <>
                            <Link to={`/empresa/productos/editar/${id}`}><i className="far fa-edit"></i></Link>
                        </>
                        : <p ><i className="fas fa-check"></i></p>}
                </div>

                <div className="card-image">
                    <figure>
                        {img &&
                            img.map(i => (
                                <img src={i.url} alt="" key={i.url} />
                            ))
                        }
                    </figure>
                </div>
                <div className="card-text">
                    <h2>{name}</h2>
                    <span>Precio</span>
                    <div className="price-card">
                        <p>$/.{price}</p>
                    </div>
                </div>
                <div className="card-stats">
                    <div className="stat">
                        <div className="type"><a href={`/product/information/${id}`}>Mas Informacion</a></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductCard;