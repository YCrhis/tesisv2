import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'

import React from 'react'
import './footer.scss'

const Footer = () => {
    return (
        <footer>
            <div className="footer__container wow animate__animated animate__fadeIn animate__slow">
                <h2>TermoConfort</h2>
                <br />
                <p>COPYRIGHT &copy; página realizado en 2021, todos los derechos reservados</p>

                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item lg={6} xs={12}>
                        <h3>Recursos</h3>
                        <Link to="/preguntas">Preguntas Frecuentes</Link><br />
                        <Link to="/empresa/informacion">Validación de Datos (Empresa)</Link><br />

                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <h3>Funciones</h3>
                        <Link to="/usuario/acciones">Funciones del Usuario</Link><br />
                        <Link to="/empresa/acciones">Funciones de Empresa</Link><br />
                        {/* <Link to="/administrador">Administrador</Link><br /> */}
                    </Grid>
                </Grid>

                <div className="footer__social__media">
                    <a href='https://www.facebook.com/TermoconfortPeru' target="_blank"  rel="noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=51940331889" target="_blank" rel="noreferrer">
                        <i className="fab fa-whatsapp"></i>
                    </a>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                </div>
            </div>
        </footer>
    )
}
export default Footer