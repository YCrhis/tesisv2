import Header from '../components/header/Header'

import { Container } from '@material-ui/core'
import './styles/CompanyValidation.scss'
import Footer from '../components/footer/Footer'

import CompanyRegister from '../images/CompanyRegister.png'
import CompanyRegister2 from '../images/CompanyRegister2.png'

const CompanyValidation = () => {
    return (
        <>
            <Header />
            <div className='company__validationInformacion'>
                <Container maxWidth="lg">
                    <h1 className='company__validationInformacionTitle'>Validación de empresa</h1>
                    <p>Para poder aceptar tu empresa en nuestra aplicación web debemos realizar una validación de la empresa, este filtro es necesario para que las empresas que se encuentren en nuestras aplicación sean confiables y seguros para realizar trabajos con ellos, para ello existe un proceso de valición.</p>

                    <h2 className='company__validationInformacionTitle2'>Proceso de validación</h2>
                    <div className="company__validationList">
                        <ul>
                            <li className="company__validationEachList">
                                <div className="company__validationStep">
                                    <h2 className="company__validationStepper">1</h2>
                                    <p>Primero debes de registrar todos tus datos en nuestro formulario (todos los datos deben ser ingresados correctamente para el siguiente proceso)</p>
                                </div>
                                <img src={CompanyRegister} alt="" />
                            </li>
                        </ul>
                        <ul>
                            <li className="company__validationEachList">
                                <img src={CompanyRegister2} alt="" />
                                <div className="company__validationStep">
                                    <h2 className="company__validationStepper">2</h2>
                                    <p>Para este proceso los datos seran enviados al administrador de la aplicación, este proceso puede demorar algo tiempo (algunos dias)</p>
                                </div>
                            </li>
                        </ul>
                        <ul>
                            <li className="company__validationEachList2">
                                <h2 className="company__validationStepper">3</h2>
                                <p>En este proceso nos encargamos de la validación de la empresa, en caso de que la empresa es aceptada, en el siguiente inicio de sesión vas a poder ver un mesaje de aceptación</p>
                            </li>
                        </ul>
                    </div>
                </Container>
            </div>
            <Footer />

        </>
    )
}
export default CompanyValidation