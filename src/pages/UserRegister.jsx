import { useState } from 'react';
import Header from '../components/header/Header'
import ModalMessage from '../components/modal';

import User from '../images/user.svg'
import './styles/register.scss'
import { TextField, Grid } from '@material-ui/core';

import { useForm } from 'react-hook-form'

import { registerUser } from '../services/login'
import Loader from '../components/loader/Loader';

import { useDispatch } from 'react-redux';

import { loginUser } from '../features/userSlice';

import { useHistory } from 'react-router-dom';

import { auth, provider } from '../firebase'

const UserRegister = () => {

    const dispatch = useDispatch();

    const history = useHistory();

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [loader, setLoader] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    const onSubmit = async (data) => {
        setLoader(true)
        const response = await registerUser(data);
        if (response.ok === true) {
            dispatch(loginUser(response.data))
            setLoader(false)
            history.push('/')
        }
        if (response.ok === false) {
            alert('salio algo mal :(')
            setLoader(false)
        }
    }

    const handleRegister = () => {
        auth.signInWithPopup(provider)
            .then(async (re) => {
                const userGoogle = {
                    name: re.user.displayName,
                    email: re.user.email,
                    phoneNumber: re.user.phoneNumber,
                    googleId: re.user.uid
                }
                const response = await registerUser(userGoogle)
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
        <>
            <Header />
            {loader === false ?
                <div className="register__user">
                    <div className="register__leftSection">
                        <h2>Creación <br />de Usuario</h2>
                        <img src={User} alt="" />
                    </div>
                    <div className="register__rightSection">
                        <h2>Ingrese Información</h2>
                        <div className="register__rightSection__form">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Grid
                                    container
                                    spacing={3}
                                >
                                    <Grid item lg={6} xs={12}>
                                        <TextField
                                            label="Nombre"
                                            variant="outlined"
                                            fullWidth
                                            {...register("name", { required: true })}
                                        />
                                        {errors.name?.type === 'required' && <p className="error__message"><i class="fas fa-exclamation-triangle"></i> El nombre es requerido</p>}
                                    </Grid>
                                    <Grid item lg={6} xs={12}>
                                        <TextField
                                            label="Email"
                                            variant="outlined"
                                            fullWidth
                                            {...register('email', {
                                                required: {
                                                    value: true,
                                                    message: "El campo es obligatorio"
                                                },
                                                pattern: {
                                                    /* eslint-disable */
                                                    value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                                                    message: 'El formato de email no es correcto'
                                                }
                                            })}
                                        />
                                        {errors.email && <p className="error__message"><i class="fas fa-exclamation-triangle"></i> {errors.email.message}</p>}
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Contraseña"
                                            variant="outlined"
                                            fullWidth
                                            {...register('password', {
                                                required: {
                                                    value: true,
                                                    message: "Ingrese Contraseña"
                                                }
                                            })}
                                        />
                                        {errors.password && <p className="error__message"><i class="fas fa-exclamation-triangle"></i> {errors.password.message}</p>}
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            label="Número de celular"
                                            variant="outlined"
                                            fullWidth
                                            type="number"
                                            {...register('phoneNumber', {
                                                required: {
                                                    value: true,
                                                    message: "El campo es obligatorio"
                                                },
                                                maxLength: {
                                                    value: 9,
                                                    message: 'El numero debe tener 9 caracteres'
                                                },
                                                minLength: {
                                                    value: 9,
                                                    message: 'El numero debe tener 9 caracteres'
                                                }
                                            })}
                                        />
                                        {errors.phoneNumber && <p className="error__message"><i class="fas fa-exclamation-triangle"></i> {errors.phoneNumber.message}</p>}
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            className='input__hidden'
                                            defaultValue="https://www.kindpng.com/picc/m/269-2697881_computer-icons-user-clip-art-transparent-png-icon.png"
                                            {...register('profileImage', {
                                                required: {
                                                    value: false,
                                                    message: "El campo es obligatorio"
                                                },
                                            })}
                                        />
                                    </Grid>

                                    <button>Crear Usuario</button>
                                </Grid>
                            </form>
                            <button className="button__google" onClick={handleRegister}><i className="fab fa-google"></i> Registrarse con Google</button>
                        </div>
                    </div>
                </div>

                :
                <Loader />
            }
            {errorMessage &&
                <ModalMessage
                    message="Esta cuenta ya se encuentra registrada, por favor ingrese otra"
                    title="Upps! algo salió mal"
                    img="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cfa5b574625095.5c3594b370d4e.png"
                />
            }

        </>
    )
}
export default UserRegister