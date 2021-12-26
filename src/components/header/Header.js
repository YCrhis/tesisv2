import React from 'react'
/* styles */
import './header.scss'
import Avatar from '@material-ui/core/Avatar'
/* router */
import { Link } from 'react-router-dom'
/* redux */
import { useSelector, useDispatch } from 'react-redux'
import { selectUser, logoutUser } from '../../features/userSlice'

const Header = () => {

    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const handleLogout = (e) => {
        e.preventDefault()
        dispatch(logoutUser())
    }

    return (
        <>
            <nav>
                <div className="wrapper">
                    <div className="logo"><Link to="/">TermoConfort</Link></div>
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
                        <li><Link to="/business">Empresas</Link></li>


                        <li>
                            <a href="#" className="desktop-item">Opciones <i class="fas fa-chevron-down"></i></a>
                            <input type="checkbox" id="showMega" />
                            <label for="showMega" className="mobile-item">Optiones</label>
                            <div className="mega-box">
                                <div className="content">
                                    <div className="row">
                                        <img src="https://media.discordapp.net/attachments/761675275451760710/918724001956778054/air-conditioning-system-picture-id118435672.png" alt="" />
                                    </div>
                                    <div className="row">
                                        <header>Usuario</header>
                                        <ul className="mega-links">
                                            <li><a href="/registro/usuario">Crear Usuario</a></li>
                                            <li><a href="/login/usuario">Iniciar Sesión</a></li>
                                        </ul>
                                    </div>

                                    <div className="row">
                                        <header>Empresa</header>
                                        <ul className="mega-links">
                                            <li><a href="/registro/empresa">Crear Empresa</a></li>
                                        </ul>

                                        <ul className="mega-links">
                                            <li><a href="/login/empresa">Iniciar Sesión</a></li>
                                        </ul>
                                    </div>

                                    <div className="row">
                                        <header>Comunidad</header>
                                        <ul className="mega-links">
                                            {/* <li><a href="/chat">Chat</a></li> */}
                                            <li><a href="/posts">Publicaciones</a></li>
                                            <li><a href="/mis/posts">Mis Publicaciones</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {/* <li><Link to="/application">Movil</Link></li> */}
                        {/* {
                            !user ? (
                                <>
                                    <li><Link to="/login" className="login__button">Login</Link></li>
                                    <li><Link to="/registrarse" className="login__button">Registrarse</Link></li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <a href="#" className="desktop-item">Opciones</a>
                                        <input type="checkbox" id="showMega" />
                                        <label for="showMega" className="mobile-item">Optiones</label>
                                        <div className="mega-box">
                                            <div className="content">
                                                <div className="row">
                                                    <img src="https://media.discordapp.net/attachments/761675275451760710/918724001956778054/air-conditioning-system-picture-id118435672.png" alt="" />
                                                </div>
                                                <div className="row">
                                                    <header>Productos</header>
                                                    <ul className="mega-links">
                                                        <li><a href="/product">Ver productos</a></li>
                                                        <li><a href="/producto/nuevo">Subir producto</a></li>
                                                        <li><a href={`/business/go/${id}`}>Ver mis productos</a></li>
                                                    </ul>
                                                </div>

                                                <div className="row">
                                                    <header>Empresa</header>
                                                    {enterprise === 'true' ?
                                                        <ul className="mega-links">
                                                            <li><a href={`/mi/empresa/${id}`}>Mi Empresa</a></li>
                                                        </ul>
                                                        :
                                                        <ul className="mega-links">
                                                            <li><a href="/datos/empresa">Crear empresa</a></li>
                                                        </ul>
                                                    }

                                                </div>

                                                <div className="row">
                                                    <header>Comunidad</header>
                                                    <ul className="mega-links">
                                                        <li><a href="/posts">Publicaciones</a></li>
                                                        <li><a href="/mis/posts">Mis Publicaciones</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <Avatar src={user} className="user__header" onClick={handleAuth} />
                                </>
                            )
                        } */}
                        {user ?
                            <li>
                                <button className="close__user" onClick={handleLogout}>Cerrar Sesión</button>
                            </li>
                            :
                            <li>
                                <Link className="login__user" to="/login/usuario">Iniciar Sesion</Link>
                            </li>
                        }
                    </ul>
                    <label for="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
                </div>
            </nav>
        </>
    )
}
export default Header;