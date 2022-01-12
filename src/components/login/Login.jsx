import React, { useState } from 'react'

import { Link, useHistory } from 'react-router-dom'
import { auth, provider } from '../../firebase'

import TextField from '@material-ui/core/TextField';
import Loader from '../loader/Loader';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../features/userSlice';
import ModalMessage from '../modal';

import { loginUserNormal } from '../../services/login'

/* style */
import './login.scss'

function LoginUser() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [fields, setFields] = useState({});
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const [load, setLoad] = useState(false);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFields({
            ...fields,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoad(true)
        const response = await loginUserNormal(fields);

        if (response.ok === false) {
            setLoad(false)
            setError(true)

        }
        if (response.ok === true) {
            dispatch(
                loginUser(response.data)
            )
            setLoad(false)
            if (response.data.role === "ADMIN") {
                history.push('/administrador')
            } else {
                history.push('/')
            }
        }
    }

    const handleLogin = () => {
        auth.signInWithPopup(provider)
            .then(async (re) => {
                const userGoogle = {
                    email: re.user.email,
                    googleId: re.user.uid
                }
                const response = await loginUserNormal(userGoogle)
                if (response.ok === false) {
                    setErrorMessage(true)
                }
                if (response.ok === true) {
                    dispatch(loginUser(response.data))
                    history.push('/')
                }
            })
            .catch((error) => alert(error))
    }

    return (

        <div class="login">
            {
                !load ?
                    <div className="login__container">
                        <div className="login__form">
                            <img src="https://cdn.discordapp.com/attachments/761675275451760710/924704758076411934/termoconfort-logo-2-aire-acondicionado-instalacion.png" alt="" />
                            <h3>Iniciar Sesión</h3>
                            <p>Ingrese su información</p>
                            <div className="container__inputs">
                                <TextField
                                    label="Usuario"
                                    variant="outlined"
                                    fullWidth
                                    type='email'
                                    margin="dense"
                                    name="email"
                                    onChange={handleChange}
                                />
                                <TextField
                                    label="Contraseña"
                                    variant="outlined"
                                    fullWidth
                                    type='password'
                                    margin="dense"
                                    name='password'
                                    onChange={handleChange}
                                />
                                <button onClick={handleSubmit} className='button__login'>Ingresar</button>
                                <button onClick={handleLogin} className='button__login2'><i className="fab fa-google"></i> Ingresar con Google</button>
                                <Link to="/registro/usuario" className="crear__cuenta">Crear una cuenta</Link>
                                {error &&
                                    <p className='error_loginMessage'><i className="fas fa-exclamation-triangle"></i> Cuenta no encontrada</p>
                                }
                            </div>
                        </div>
                    </div>
                    :
                    <Loader />
            }
            {errorMessage &&
                <ModalMessage
                    message="Esta cuenta no se encuentra registrada"
                    title="Upps! algo salió mal"
                    img="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cfa5b574625095.5c3594b370d4e.png"
                />
            }

        </div>
    )
}

export default LoginUser
