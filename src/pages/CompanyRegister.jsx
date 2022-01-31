import { useState } from 'react';
import Header from '../components/header/Header'

import User from '../images/user.svg'
import './styles/registerCompany.scss'
import { TextField, Grid } from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Loader from '../components/loader/Loader'

import { useForm } from 'react-hook-form'
import MyStepper from '../components/Steper';
import { newCompany } from '../services/companies';

import { useSelector, useDispatch } from 'react-redux';
import { selectUser, loginCompany } from '../features/userSlice';

import { Link } from 'react-router-dom'

const CompanyRegister = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [activeStep, setActiveStep] = useState(0)

    const [load, setLoad] = useState(false)

    const dispatch = useDispatch()

    const user = useSelector(selectUser)

    const onSubmit = async (data) => {
        setLoad(true)
        const newData = new FormData();
        newData.append('userId', user.id)
        newData.append('description', data.description)
        newData.append('name', data.name)
        newData.append('workers', data.workers)
        newData.append('email', data.email)
        newData.append('ruc', data.ruc)
        newData.append('linkedin', data.linkedin)
        newData.append('facebook', data.facebook)
        newData.append('twitter', data.twitter)
        newData.append('youtube', data.youtube)
        newData.append('instagram', data.instagram)
        newData.append('webPage', data.webPage)
        newData.append('image', data.image[0])

        console.log(newData)
        const response = await newCompany(user.token, newData)
        if (response.ok === true) {
            dispatch(
                loginCompany(response.data)
            )
            setLoad(false)
            setActiveStep((currentStep) => currentStep + 1)
        }
    }

    if (load === true) {
        return (<Loader />)
    }


    return (
        <div>
            <Header />
            {/*  <FormCompany /> */}
            <div className="register__userCompany">
                <div className="register__leftSectionCompany">
                    <h2>Creación <br />de Empresa</h2>
                    <img src={User} alt="" />
                </div>
                <div className="register__rightSectionCompany">
                    <MyStepper
                        activeStep={activeStep}
                    />
                    {activeStep === 1 ?

                        <div className="succsess__message">
                            <h1>Tus datos fueron subidos exitósamente</h1>
                            <p>Ahora solo espera, vamos a comprobar si tu empresa existe y/o cumple con los requisitos. <br />
                                Esto puedo tomar tiempo, solo no te estreses que pronto tendras un mensaje
                            </p>
                            <button component={Link} to="/">Ir al inicio</button>
                        </div>
                        :

                        <>
                            <h2>Ingrese Información</h2>
                            <div className="register__rightSection__form">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Grid
                                        container
                                        spacing={3}
                                    >
                                        <Grid item lg={6} xs={12}>
                                            <TextField
                                                label="Nombre de la empresa"
                                                variant="outlined"
                                                fullWidth
                                                {...register("name", { required: true })}
                                            />
                                            {errors.name?.type === 'required' && <p className="error__message"><i className="fas fa-exclamation-triangle"></i> El nombre es requerido</p>}
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
                                            {errors.email && <p className="error__message"><i className="fas fa-exclamation-triangle"></i> {errors.email.message}</p>}
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                label="Número de celular"
                                                variant="outlined"
                                                fullWidth
                                                type="number"
                                                {...register('phone_number', {
                                                    required: {
                                                        value: true,
                                                        message: "Ingrese Numero de celular"
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
                                            {errors.phone_number && <p className="error__message"><i className="fas fa-exclamation-triangle"></i> {errors.phone_number.message}</p>}
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextareaAutosize
                                                className='areaLabel__company'
                                                placeholder='Descripción de tu empresa'
                                                {...register('description', {
                                                    required: {
                                                        value: true,
                                                        message: "El campo es obligatorio"
                                                    }
                                                })}
                                            />
                                            {errors.description && <p className="error__message"><i className="fas fa-exclamation-triangle"></i> {errors.description.message}</p>}
                                        </Grid>
                                        <Grid item xs={12}>
                                            <p className='optinal__textForm'>* Las redes sociales son opcionales</p>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                label="Link de linkedin"
                                                variant="outlined"
                                                fullWidth
                                                {...register('linkedin', {
                                                    required: {
                                                        value: false,
                                                        message: "este campo no es obligatorio, pero te recomendamos ponerlo"
                                                    },
                                                })}
                                            />
                                            {errors.number && <p><i className="fas fa-exclamation-triangle"></i> {errors.number.message}</p>}
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                label="Link de facebook"
                                                variant="outlined"
                                                fullWidth
                                                {...register('facebook', {
                                                    required: {
                                                        value: false,
                                                        message: "este campo no es obligatorio, pero te recomendamos ponerlo"
                                                    },
                                                })}
                                            />
                                            {errors.number && <p className="error__message"><i className="fas fa-exclamation-triangle"></i> {errors.number.message}</p>}
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                label="Link de Twitter"
                                                variant="outlined"
                                                fullWidth
                                                {...register('twitter', {
                                                    required: {
                                                        value: false,
                                                        message: "este campo no es obligatorio, pero te recomendamos ponerlo"
                                                    },
                                                })}
                                            />
                                            {errors.number && <p className="error__message"><i className="fas fa-exclamation-triangle"></i> {errors.number.message}</p>}
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                label="Link de Instagram"
                                                variant="outlined"
                                                fullWidth
                                                {...register('instagram', {
                                                    required: {
                                                        value: false,
                                                        message: "este campo no es obligatorio, pero te recomendamos ponerlo"
                                                    },
                                                })}
                                            />
                                            {errors.number && <p className="error__message"><i className="fas fa-exclamation-triangle"></i> {errors.number.message}</p>}
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                label="Link de Youtube"
                                                variant="outlined"
                                                fullWidth
                                                {...register('instagram', {
                                                    required: {
                                                        value: false,
                                                        message: "este campo no es obligatorio, pero te recomendamos ponerlo"
                                                    },
                                                })}
                                            />
                                            {errors.number && <p className="error__message"><i className="fas fa-exclamation-triangle"></i> {errors.number.message}</p>}
                                        </Grid>

                                        <Grid item xs={12} lg={6}>
                                            <TextField
                                                label="Numero de trabajadores"
                                                variant="outlined"
                                                fullWidth
                                                type='number'
                                                {...register('workers', {
                                                    required: {
                                                        value: true,
                                                        message: "Ingrese este campo por favor"
                                                    },
                                                })}
                                            />
                                            {errors.workers && <p className="error__message"><i className="fas fa-exclamation-triangle"></i> {errors.workers.message}</p>}
                                        </Grid>
                                        <Grid item xs={12} lg={6}>
                                            <TextField
                                                label="RUC"
                                                variant="outlined"
                                                fullWidth
                                                {...register('ruc', {
                                                    required: {
                                                        value: true,
                                                        message: "Este campo es obligatorio"
                                                    },
                                                })}
                                            />
                                            {errors.ruc && <p className="error__message"><i className="fas fa-exclamation-triangle"></i> {errors.ruc.message}</p>}
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                label="Link de tu pagina web"
                                                variant="outlined"
                                                fullWidth
                                                {...register('webPage', {
                                                    required: {
                                                        value: false,
                                                        message: "este campo no es obligatorio, pero te recomendamos ponerlo"
                                                    },
                                                })}
                                            />
                                            {errors.number && <p className="error__message"><i className="fas fa-exclamation-triangle"></i> {errors.number.message}</p>}
                                        </Grid>

                                        <Grid item xs={12}>
                                            <div id="foto">
                                                <p>Foto de Perfil <i className="fas fa-file-image"></i></p>
                                                <input
                                                    type="file"
                                                    id="file"
                                                    {...register("image", {
                                                        required: {
                                                            value: true,
                                                            message: 'Ingrese una imagen'
                                                        }
                                                    })}
                                                />
                                                {errors.image && <p className="error__message"><i className="fas fa-exclamation-triangle"></i> {errors.image.message}</p>}
                                            </div>

                                        </Grid>
                                        <button>Crear Empresa</button>
                                    </Grid>
                                </form>
                            </div>
                        </>}
                </div>

            </div>
        </div>
    )
}
export default CompanyRegister
