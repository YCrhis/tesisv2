import React, { useState } from 'react'

import { useHistory } from 'react-router-dom'

import TextField from '@material-ui/core/TextField';
import ApiLoader from '../loader/ApiLoader';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../features/userSlice';

import { loginUserNormal } from '../../services/login'

/* style */
import './login.scss'

function LoginAdmin() {

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
        if (response.ok === false) {
            setLoad(false)
            setError(true)
        }
        if (response.ok === true) {
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
                            <img src="https://cdni.iconscout.com/illustration/premium/thumb/admin-manage-dashboard-online-with-laptop-1886524-1597935.png" alt="" />
                            <h3>Iniciar Sesión</h3>
                            <p>Administrador</p>
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

export default LoginAdmin
