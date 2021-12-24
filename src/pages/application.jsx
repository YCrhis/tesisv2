import React from 'react'
/* components */
import Header from '../components/header/Header'
/* styles */
import './styles/application.scss';
/* images */
import appImage from '../images/app-movile.svg'

const Application =() =>{
    return(
        <>
            <Header/>
            <div className="app">
                <div className="container__app">
                    <div className="image__content__app wow animate__animated animate__fadeIn animate__slow animate__delay-1s">
                        <img src={appImage} alt="no hay imagen :(" />
                    </div>
                    <div className="text__content__app wow animate__animated animate__bounceInRight animate__slow">
                        <h1>Go | Application</h1>
                        <p>¿Que esperas para descargar nuestra aplicacion?, encuentralo ahora disponible en google play</p>
                        <div className="social__media__app">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-whatsapp"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                        </div>
                        <div className="text__content__app__buttons">
                            <button>Google Play</button>
                            <button>Read More</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Application