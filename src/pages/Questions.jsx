import Footer from "../components/footer/Footer"
import { motion } from "framer-motion"
import Header from "../components/header/Header"

import Question from '../images/question.svg'
import Question2 from '../images/question2.svg'

import './styles/question.scss'

const Questions = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Header />

            <div className="questions">
                <h2 className="title">PREGUNTAS FRECUENTES</h2>
                <div className="question__each">
                    <img src={Question} alt="" />
                    <div className="question__text">
                        <h2>¿Como publico mi producto?</h2>
                        <p>Para poder publicar tu producto en nuestra web tienes que <a href="/login/usuario">iniciar sesion</a> con tu cuenta o Google, despues se va a agregar una opcion de "Publicar producto", en esa vista podrás publicar tus productos</p>
                    </div>
                </div>
                <div className="question__each">

                    <div className="question__text">
                        <div className="">
                            <h2>¿Cómo contrato algun servicio?</h2>
                            <p>Para poder obtener algún servicio de cualquier empresa solo debes dirigirte a la opción "Empresas", allí encontraras un listado de empresas registradas en nuestra aplicación, al ingresar al perfil de la empresa puedes ver todas sus redes sociales.</p>
                        </div>
                        <br />
                        <div className="">
                            <h2>¿Qué ofrece nuestra web?</h2>
                            <p>Ofrecemos una ayuda a las personas y/o técnicos que quieran contactarse para ofrecer o recibir algún servicio o producto.</p>
                        </div>
                    </div>
                    <img src={Question2} alt="" />
                </div>
            </div>

            <Footer />

        </motion.div>
    )
}
export default Questions