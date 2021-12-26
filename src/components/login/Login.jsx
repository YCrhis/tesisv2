import React, { useState } from 'react'

import { Link, useHistory } from 'react-router-dom'

import TextField from '@material-ui/core/TextField';
import ApiLoader from '../loader/ApiLoader';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../features/userSlice';

import { loginUserNormal } from '../../services/login'

/* style */
import './login.scss'

function LoginUser() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [fields, setFields] = useState({})
    const [error, setError] = useState(false)
    const [load, setLoad] = useState(false)

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
        if (response.ok == false) {
            setLoad(false)
            setError(true)
        }
        if (response.ok == true) {
            dispatch(
                loginUser(response.data)
            )
            setLoad(false)
            history.push('/')
        }
    }

    return (

        <div class="login">
            {
                !load ?
                    <div className="login__container">
                        <div className="login__form">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt="" />
                            <h3>Iniciar Sesión</h3>
                            <p>Ingrese su información</p>
                            <div className="container__inputs">
                                <TextField
                                    label="Usuario"
                                    variant="outlined"
                                    fullWidth
                                    margin="dense"
                                    name="email"
                                    onChange={handleChange}
                                />
                                <TextField
                                    label="Contraseña"
                                    variant="outlined"
                                    fullWidth
                                    margin="dense"
                                    name='password'
                                    onChange={handleChange}
                                />
                                <button onClick={handleSubmit}>Ingresar</button>
                                <Link to="/registro/usuario" className="crear__cuenta">Crear cuenta</Link>
                                {error &&
                                    <p className='error_loginMessage'><i class="fas fa-exclamation-triangle"></i> Cuenta no encontrada</p>
                                }
                            </div>
                        </div>
                    </div>
                    :
                    <ApiLoader />
            }

        </div>
    )
}

export default LoginUser
