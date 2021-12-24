import React from 'react'
import { Link } from 'react-router-dom'
/* style */
import './ProductCard.scss'

const ProductCard = ({ name, img, id, price }) => {
    return (
        <div class="card wow animate__animated animate__fadeIn animate__slow">
            <div className="card-image">
                <figure>
                    {img &&
                        img.map(i => (
                            <img src={i.url} alt="" />
                        ))
                    }
                </figure>
            </div>
            <div className="card-text">
                {/* <span className="date">4 days ago</span> */}
                <h2>{name}</h2>
                {/* <p className="product-info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis facere assumenda quia earum. Explicabo, iste.</p> */}
                <span>Precio</span>
                <div className="price-card">
                    <p>$/.{price}</p>
                </div>
            </div>
            <div className="card-stats">
                <div className="stat">
                    <div className="type"><Link to={`/product/information/${id}`}>Mas Informacion</Link></div>
                </div>
            </div>
        </div>
    )
}
export default ProductCard;