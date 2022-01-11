import React, { useState } from 'react'
import { Link } from 'react-router-dom'
/* style */
import './ProductCard.scss'

const ProductCard = ({ name, img, id, price, createdAt }) => {

    const [newDate, setNewDate] = useState(false);

    const newFunciton = () => {
        var fecha = new Date();
        const day = createdAt;
        const deleatedDay = fecha.setDate(fecha.getDate(day) + 1)
        if (day > deleatedDay) {
            setNewDate(true)
        }
    }

    return (
        <div className="card wow animate__animated animate__fadeIn animate__slow">
            {newDate === false &&
                <div className="card__productNew">
                    <p>Nuevo</p>
                </div>
            }

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
                    <p>$/.{price}</p> {newFunciton()}
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