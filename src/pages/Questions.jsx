import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"

import Question from '../images/question.svg'
import Question2 from '../images/question2.svg'

import './styles/question.scss'

const Questions = () => {
    return (
        <>
            <Header />

            <div className="questions">
                <h2 className="title">PREGUNTAS FRECUENTES</h2>
                <div className="question__each">
                    <img src={Question} alt="" />
                    <div className="question__text">
                        <h2>¿Como publico mi producto?</h2>
                        <p>Para poder publicar tu producto en nuestra web tienes que <a href="/login">iniciar sesion</a> con tu cuenta de Google, despues se va a agregar una opcion de "Publicar producto", en esa vista podras publicar tu producto</p>
                    </div>
                </div>
                <div className="question__each">

                    <div className="question__text">
                        <div className="">
                            <h2>¿Cómo contrato algun servicio?</h2>
                            <p>Para poder obtener algun servicio de cualquier empresa solo debes dirigirte a la opcion "Empresas" es ahi donde encontraras un listado de empresas que existen, ahi puedes comunicarte con ellos y realizar algun trabajo</p>
                        </div>
                        <br />
                        <div className="">
                            <h2>¿Qué ofrece nuestra web?</h2>
                            <p>Ofrecemos una ayuda a las personas y tecnicos que quieran contactarse para ofrecer o recivir algun servicio.</p>
                        </div>
                    </div>
                    <img src={Question2} alt="" />
                </div>
            </div>

            <Footer />

        </>
    )
}
export default Questions