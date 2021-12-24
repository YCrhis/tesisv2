import React from 'react'
/* style */
import './error.scss'

const Error = () => {
    return (
        <div className="all-banner">
            <div className="banner-error">
                <div className="container-banner">
                    <div className="text-error">
                        <h2>Ups... Parece que <span>Algo salio mal :(</span></h2>
                        <p>La operacion que estas trantando de realizar es incorrecta, o ¿acaso estas intentando hackearnos?</p>
                    </div>
                    <div className="img-error">
                        <img src="https://cdn4.iconfinder.com/data/icons/computer-science-with-outline-and-color-iconset/48/not_responding-512.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="rain-error">
                <div className="drop"></div>
                <div className="drop"></div>
                <div className="drop"></div>
                <div className="drop"></div>
                <div className="drop"></div>
                <div className="drop"></div>
            </div>
        </div>
    )
}
export default Error