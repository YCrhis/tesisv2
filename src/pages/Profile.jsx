import { useState } from 'react'
import { useSelector } from "react-redux"
import Header from "../components/header/Header"
import { selectUser } from "../features/userSlice"
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Grid, TextField, Fade, Backdrop, Modal } from "@material-ui/core";
import { useDispatch } from 'react-redux'
import { loginUser } from '../features/userSlice';
import { useForm } from 'react-hook-form'
import { updateUser } from '../services/login'

const useStyles = makeStyles((theme) => ({
    all: {
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        background: '#5d60ff',
        color: '#fff'
    },
    decoration: {
        width: '100%',
        height: '100vh',
        position: 'absolute',
        top: '-41%',
        left: '0',
        background: '#fff',
        borderRadius: '100%',
    },
    container: {
        width: '80%',
        margin: '6rem auto 0',
        height: '88.5vh',
        padding: '1rem',
        textAlign: 'center',
    },
    image: {
        display: 'block',
        margin: 'auto',
        width: '200px',
        boxShadow: '0 0 10px 5px rgba(0,0,0,.1)',
        height: '200px',
        borderRadius: '50%',
        objectFit: 'cover',
    },
    name: {
        textTransform: 'uppercase',
        margin: '2rem auto 0',
        fontWeight: '600',
    },
    information: {
        margin: '3rem auto',
        '& h3': {
            fontWeight: '600',
            marginBottom: '1rem'
        },
        marginTop: '6rem',
    },
    information__profile: {
        color: '#606060 !important',
        zIndex: 100,
        position: 'relative'
    },
    button: {
        padding: '.5rem 1.5rem',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& h2': {
            textAlign: 'center',
            marginBottom: '2rem',
            textTransform: 'uppercase'
        }
    },
    paper: {
        width: '80%',
        backgroundColor: theme.palette.background.paper,
        border: 'none',
        borderRadius: '15px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    button2: {
        padding: '.5rem 1rem',
        display: 'block',
        margin: 'auto',
        border: 'none',
        borderRadius: '10px',
        background: '#5d60ff',
        color: '#fff',
        cursor: 'pointer'
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        display: 'block',
        margin: 'auto'
    },
}));

const Profile = () => {

    const dispatch = useDispatch();

    const newUser = useSelector(selectUser)

    const { register, formState: { errors }, handleSubmit } = useForm();

    const classes = useStyles();

    const [file, setFile] = useState([])

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    }

    const myDate = () => {
        var fecha = new Date();
        var day = newUser?.createdAt;
        return fecha.toLocaleDateString("es-ES", day)
    }

    const onSubmit = async (data) => {
        if (file === []) {
            setFile(newUser?.profileKey)
        }
        const newData = new FormData();
        newData.append('name', data.name)
        newData.append('email', data.email)
        newData.append('password', data.password)
        newData.append('phoneNumber', data.phoneNumber)
        newData.append('image', file)

        const response = await updateUser(newUser.id, newData, newUser.token)

        if (response.ok == true) {
            dispatch(
                loginUser(response.data)
            )
        }
        if (response.ok == false) {
            alert('Algo salio mal, intentalo despues')
        }
        setOpen(false)
    }

    return (
        <div className={classes.all}>
            <Header />
            <div className={classes.container}>
                <div className={classes.information__profile}>
                    <Avatar
                        className={classes.large}
                        src={newUser?.profileImage}
                    />
                    <h1 className={classes.name}>{newUser?.name}</h1>
                    <p className={classes.phone}><i class="fas fa-phone-volume"></i> {newUser?.phoneNumber}</p>
                </div>
                <div className={classes.information}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={5}
                    >
                        <Grid
                            item
                            lg={4}
                        >
                            <h3>Fecha <br />creación</h3>
                            <p>{myDate()}</p>
                        </Grid>
                        <Grid
                            item
                            lg={4}
                        >
                            <h3>Tipo <br />usuario</h3>
                            <p>{newUser?.role}</p>
                        </Grid>
                        <Grid
                            item
                            lg={4}
                        >
                            <h3>Email <br />Usuario</h3>
                            <p>{newUser?.email}</p>
                        </Grid>
                        <Grid
                            item
                            lg={12}
                        >
                            <button className={classes.button} onClick={handleOpen}>Modificar Datos</button>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className={classes.decoration}></div>

            <div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <div className={classes.paper}>
                            <h2 id="transition-modal-title">Modifica tus datos</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={3}
                                >
                                    <Grid item xs={12} lg={6}>
                                        <TextField
                                            label="Nombre"
                                            variant="outlined"
                                            fullWidth
                                            defaultValue={newUser?.name}
                                            {...register("name", { required: true })}
                                        />
                                        {errors.name?.type === 'required' && <p className="error__message"><i class="fas fa-exclamation-triangle"></i> El nombre es requerido</p>}
                                    </Grid>
                                    <Grid item xs={12} lg={6}>
                                        <TextField
                                            label="Numero de Celular"
                                            variant="outlined"
                                            fullWidth
                                            defaultValue={newUser?.phoneNumber}
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
                                    <Grid item xs={12} lg={6}>
                                        <TextField
                                            label="Email"
                                            variant="outlined"
                                            fullWidth
                                            defaultValue={newUser?.email}
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
                                        {errors.email && <p className="error__message"><i class="fas fa-exclamation-triangle"></i> {errors.email.message}</p>}
                                    </Grid>
                                    <Grid item xs={12} lg={6}>
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
                                        <div>
                                            <p>Foto de Perfil <i class="fas fa-file-image"></i></p>
                                            <input
                                                type="file"
                                                id="file"
                                                className="other"
                                                name="file"
                                                onChange={handleFileChange}
                                            />
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <button className={classes.button2}>Modificar Datos</button>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </Fade>
                </Modal>
            </div>

        </div>
    )
}
export default Profile