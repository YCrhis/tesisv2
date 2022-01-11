import React, { useEffect, useState } from 'react'
/* styles */
import './header.scss'
import { useHistory } from 'react-router-dom'
/* router */
import { Link } from 'react-router-dom'
/* redux */
import { useSelector, useDispatch } from 'react-redux'
import { selectUser, logoutUser, loginCompany } from '../../features/userSlice'
import { Avatar } from '@material-ui/core'

import { getEnterprise } from '../../services/login'

const Header = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const newUser = useSelector(selectUser);

    const [enterprise, setEnterprise] = useState(false)

    const handleLogout = (e) => {
        e.preventDefault()
        dispatch(logoutUser())
        history.push('/')
    }

    const isEnterprise = async () => {
        const response = await getEnterprise(newUser?.id);
        if (response.ok === true) {
            dispatch(
                loginCompany(response.data)
            )
            setEnterprise(true)
        }
    }

    useEffect(() => {
        isEnterprise()
        /* eslint-disable */
    }, [enterprise])

    return (
        <>
            <nav>
                <div className="wrapper">
                    <div className="logo">
                        <Link to="/">
                            <img src="https://cdn.discordapp.com/attachments/761675275451760710/924704758076411934/termoconfort-logo-2-aire-acondicionado-instalacion.png" alt="Termoconfort" />
                            TermoConfort
                        </Link>
                    </div>
                    <input type="radio" name="slider" id="menu-btn" />
                    <input type="radio" name="slider" id="close-btn" />

                    <ul className="nav-links">
                        <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/product">Productos</Link></li>
                        {/* <li>
                            <a href="#" className="desktop-item">Dropdown Menu</a>
                            <input type="checkbox" id="showDrop" />
                            <label for="showDrop" className="mobile-item">Dropdown Menu</label>
                            <ul className="drop-menu">
                                <li><a href="#">Drop menu 1</a></li>
                                <li><a href="#">Drop menu 2</a></li>
                                <li><a href="#">Drop menu 3</a></li>
                                <li><a href="#">Drop menu 4</a></li>
                            </ul>
                        </li> */}
                        <li><Link to="/empresas">Empresas</Link></li>

                        {newUser &&
                            <li>
                                {/* eslint-disable */}
                                <a href="#" className="desktop-item">Opciones <i className="fas fa-chevron-down"></i></a>
                                <input type="checkbox" id="showMega" />
                                <label htmlFor="showMega" className="mobile-item">Optiones</label>
                                <div className="mega-box">
                                    <div className="content">
                                        <div className="row">
                                            <img src="https://media.discordapp.net/attachments/761675275451760710/918724001956778054/air-conditioning-system-picture-id118435672.png" alt="" />
                                        </div>
                                        <div className="row">
                                            <header>Sobre Mi</header>
                                            <ul className="mega-links">
                                                <li><Link to="/mi-perfil">Ver mi perfil</Link></li>
                                                {/* <li><a href="/login/usuario">Iniciar Sesión</a></li> */}
                                            </ul>
                                        </div>

                                        <div className="row">
                                            <header>Empresa</header>
                                            <ul className="mega-links">
                                                {!enterprise ?
                                                    <li><Link to="/registro/empresa">Crear Empresa</Link></li>
                                                    :
                                                    <>
                                                        <li><Link to="/perfil/empresa">Ver mi empresa</Link></li>
                                                        <li><Link to="/producto/nuevo">Publicar Productos</Link></li>
                                                        <li><Link to="/empresa/productos">Ver mis Productos</Link></li>
                                                    </>
                                                }

                                            </ul>
                                        </div>

                                        <div className="row">
                                            <header>Comunidad</header>
                                            <ul className="mega-links">
                                                {/* <li><a href="/chat">Chat</a></li> */}
                                                <li><Link to="/posts">Publicaciones</Link></li>
                                                <li><Link to="/mis/posts">Mis Publicaciones</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        }

                        {newUser ?
                            <>
                                <li>
                                    <button className="close__user" onClick={handleLogout}>Cerrar Sesión</button>
                                </li>
                                <li>
                                    <Avatar
                                        src={newUser?.profileImage}
                                        className="avatar"
                                    />
                                </li>
                            </>
                            :
                            <li>
                                <Link className="login__user" to="/login/usuario">Iniciar Sesion</Link>
                            </li>
                        }
                    </ul>
                    <label htmlFor="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
                </div>
            </nav>
        </>
    )
}
export default Header;