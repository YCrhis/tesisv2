import React from 'react'
/* style */
import './cardCompanies.scss';
/* router-dom */

import { Link } from 'react-router-dom'

const cardCompanies = ({ name, img, description, workers, id }) => {

    const cutText = () => {
        const newString = description.substring(0, 60) + ' ......'
        return newString
    }

    return (
        <>
            <div className="bussines-card wow animate__animated animate__fadeIn animate__slow">
                <div className="business-head">
                    <div className="bussines-head-image">
                        <img src={img} alt="imagen" />
                        <div className="business-head-check">
                            <i className="fas fa-check"></i>
                        </div>
                    </div>
                    <h3>{name}</h3>
                    <p>{cutText()}</p>
                </div>
                <div className="bussines-buttons">
                    <Link to={`/empresa/perfil/${id}`}>Más información</Link>
                </div>
                <div className="bussines-about">
                    {/* <div className="each-about-staff">
                        <i className="fas fa-user-tie"></i>
                        <h4>20</h4>
                        <p>Staff</p>
                    </div>
                    <div className="each-about-product">
                        <i className="fas fa-shopping-bag"></i>
                        <h4>7</h4>
                        <p>Products</p>
                    </div> */}
                    <div className="each-about-another">
                        <i className="fas fa-user-tie"></i>
                        <h4>{workers}</h4>
                        <p>Personal N°</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default cardCompanies;