import React from 'react'
/* style */
import './cardCompanies.scss';
/* router-dom */

import { Link } from 'react-router-dom'

const cardCompanies = ({ name, img, description, workers, id }) => {

    return (
        <>
            <div class="bussines-card wow animate__animated animate__fadeIn animate__slow">
                <div class="business-head">
                    <div class="bussines-head-image">
                        <img src={img} />
                        <div class="business-head-check">
                            <i class="fas fa-check"></i>
                        </div>
                    </div>
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
                <div class="bussines-buttons">
                    <Link to={`/business/go/${id}`}>Más información</Link>
                </div>
                <div class="bussines-about">
                    {/* <div class="each-about-staff">
                        <i class="fas fa-user-tie"></i>
                        <h4>20</h4>
                        <p>Staff</p>
                    </div>
                    <div class="each-about-product">
                        <i class="fas fa-shopping-bag"></i>
                        <h4>7</h4>
                        <p>Products</p>
                    </div> */}
                    <div class="each-about-another">
                        <i class="fas fa-user-tie"></i>
                        <h4>{workers}</h4>
                        <p>Personal N°</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default cardCompanies;