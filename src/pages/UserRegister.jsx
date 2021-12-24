import { useRef } from 'react';
import Header from '../components/header/Header'

import User from '../images/user.svg'
import './styles/register.scss'
import { TextField, Grid } from '@material-ui/core';

import { useForm } from 'react-hook-form'

const UserRegister = () => {

    const { register, formState: { errors }, handleSubmit, watch } = useForm();

    /* const [fields, setFields] = useState() */

    const password = useRef({});

    password.current = watch("password", "");

    /* const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const file = e.target.files;
        setFields({
            ...fields,
            [name]: value || file,
        })
        console.log(e.target.value)
    } */


    /*  const sendInformation = () => {
         console.log(fields)
     } */

    const onSubmit = (e) => {
        console.log(e)
    }

    return (
        <>
            <Header />
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
                                    {errors.name?.type === 'required' && <p>El nombre es requerido</p>}
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
                                                value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                                                message: 'El formato de email no es correcto'
                                            }
                                        })}
                                    />
                                    {errors.email && <p>{errors.email.message}</p>}
                                </Grid>
                                <Grid item lg={6} xs={12}>
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
                                    {errors.password && <p>{errors.password.message}</p>}
                                </Grid>
                                <Grid item lg={6} xs={12}>
                                    <TextField
                                        label="Confirma contraseña"
                                        variant="outlined"
                                        fullWidth
                                        {...register('password2', {
                                            required: {
                                                value: true,
                                                message: "Ingrese Contraseña"
                                            },
                                            pattern: {
                                                value: password.current,
                                                message: 'Las contraseñas no coinciden'
                                            }
                                        })}
                                    />
                                    {errors.password2 && <p>{errors.password2.message}</p>}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Numero de celular"
                                        variant="outlined"
                                        fullWidth
                                        type="number"
                                        {...register('number', {
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
                                    {errors.number && <p>{errors.number.message}</p>}
                                </Grid>
                                <Grid item xs={12}>
                                    <div id="foto">
                                        <p>Foto de Perfil <i class="fas fa-file-image"></i></p>
                                        <input
                                            type="file"
                                            id="file"
                                            {...register("file", { required: true })}
                                        />
                                        {errors.file && <p>{errors.file.message}</p>}
                                    </div>

                                </Grid>
                                <button>Crear Usuario</button>
                            </Grid>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UserRegister