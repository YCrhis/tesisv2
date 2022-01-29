import Header from "../components/header/Header"
import { showCompany } from "../services/companies";
import { Grid, TextField, Fade, Backdrop, Modal, TextareaAutosize } from "@material-ui/core";
import { useForm } from 'react-hook-form'
import './styles/mycompany.scss';
import { makeStyles } from '@material-ui/core/styles';
import { getEnterprise } from '../services/login'

import { useSelector } from "react-redux";
import { selectCompany, selectUser } from "../features/userSlice";
import Loader from '../components/loader/Loader'

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { loginCompany } from '../features/userSlice'
import { useDispatch } from "react-redux";
import { updateEnterprise } from "../services/companies";
import Waiting from "../components/waiting";


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
        height: '500px',
        overflowY: 'scroll',
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

const MyCompany = (props) => {

    const classes = useStyles();

    const dispatch = useDispatch();

    const { register, formState: { errors }, handleSubmit } = useForm();

    const user = useSelector(selectCompany);
    const newUser = useSelector(selectUser);

    const id = user.id;

    const [isCompany, setIsCompany] = useState(true)
    const [data, setData] = useState();
    const [open, setOpen] = useState(false);
    const [file, setFile] = useState([]);
    const [loadCompany, setLoadCompany] = useState(true)

    const isEnterprise = async () => {
        const response = await getEnterprise(newUser?.id);
        if (response.data.state === 0 && response.data.state === 2) {
            setIsCompany(true)
        }
        if (response.data.state === 1) {
            setIsCompany(false)
        }
        setLoadCompany(null)
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    }

    const onSubmit = async (data) => {

        if (file.length === 0) {
            setFile(user?.imageKey)
        }

        const newData = new FormData();

        newData.append('userId', newUser?.id)
        newData.append('description', data.description)
        newData.append('name', data.name)
        newData.append('workers', data.workers)
        newData.append('email', data.email)
        newData.append('linkedin', data.linkedin)
        newData.append('facebook', data.facebook)
        newData.append('twitter', data.twitter)
        newData.append('youtube', data.youtube)
        newData.append('instagram', data.instagram)
        newData.append('webPage', data.webPage)
        newData.append('image', file)

        const response = await updateEnterprise(user?.id, newData, newUser?.token)

        if (response.ok === true) {
            dispatch(
                loginCompany(response.data)
            )
        }
        if (response.ok === false) {
            alert('Intenta poner otros datos')
        }

        setOpen(false)
    }

    const loadData = async () => {
        const response = await showCompany({ id: id })
        setData(response.data[0])
    }

    const myDate = () => {
        var fecha = new Date();
        var day = data?.createdAt;
        return fecha.toLocaleDateString("es-ES", day)
    }

    useEffect(() => {
        loadData();
        /* eslint-disable */
        isEnterprise();
    }, [])


    if (loadCompany) {
        return (
            <Loader />
        )
    }

    if (isCompany) {
        return (
            <Waiting
                name={user.name}
            />
        )
    }

    return (
        <>
            <Header />
            <div className="container__loadCompany">

                <>
                    <div
                        className="left__sectionLoadCompany"
                        style={{ backgroundImage: `url(${user?.imageUrl})` }}
                    >
                    </div>
                    <div className="right__sectionLoadCompany">
                        <h2>{user?.name}</h2>
                        <h4>Descripción:</h4>
                        <p>{user?.description}</p>
                        <div className="right__info">
                            <h4>Redes Sociales</h4>
                            <ul>
                                <li><i className="fab fa-facebook-f"></i>Facebook: <span> {user?.facebook}</span></li>
                                <li><i className="fab fa-instagram"></i>Instagram: <span> {user?.instagram} </span></li>
                                <li><i className="fab fa-youtube"></i>Youtube: <span>{user?.youtube}</span></li>
                                <li><i className="fab fa-linkedin"></i>Linkedin: <span>{user?.linkedin}</span></li>
                            </ul>
                        </div>
                        <div className="right__info">
                            <h4>Información General</h4>
                            <ul>
                                <li><i className="fas fa-briefcase"></i>Trabajadores: <span> {user?.workers}</span></li>
                                <li><i className="fas fa-wifi"></i>Link de tu sitio web: <span> {user?.webPage} </span></li>
                                <li><i className="fas fa-user-tie"></i>Cantidad de trabajadores: <span> {user?.workers} </span></li>
                                <li><i className="far fa-clock"></i>Fecha de creación: <span> {myDate()} </span></li>
                            </ul>
                        </div>
                        <button className="button__eliminar" onClick={handleOpen}><i className="fas fa-pencil-alt"></i> Actualizar datos</button>
                        <Link className="button__myProducts" to="/productos/interesados">Ver Productos Interesados</Link>
                    </div>
                </>

            </div>
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
                                            defaultValue={user?.name}
                                            {...register("name", { required: true })}
                                        />
                                        {errors.name?.type === 'required' && <p className="error__message"><i className="fas fa-exclamation-triangle"></i> El nombre es requerido</p>}
                                    </Grid>
                                    <Grid item xs={12} lg={6}>
                                        <TextField
                                            label="Numero de trabajadores"
                                            variant="outlined"
                                            fullWidth
                                            {...register('email', {
                                                required: {
                                                    value: true,
                                                    message: "Ingrese este campo por favor"
                                                },
                                            })}
                                            defaultValue={user?.workers}
                                        />
                                        {errors.email && <p className="error__message"><i className="fas fa-exclamation-triangle"></i> {errors.email.message}</p>}
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextareaAutosize
                                            className='areaLabel__company'
                                            placeholder='Descripción de tu empresa'
                                            {...register('description', {
                                                required: {
                                                    value: true,
                                                    message: "El campo es obligatorio"
                                                },
                                                maxLength: {
                                                    value: 400,
                                                    message: 'Exedió la cantidad de texto'
                                                },
                                            })}
                                            defaultValue={user?.description}
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
                                            defaultValue={user?.linkedin}
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
                                            defaultValue={user?.facebook}
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
                                            defaultValue={user?.twitter}
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
                                            defaultValue={user?.instagram}
                                        />
                                        {errors.number && <p className="error__message"><i className="fas fa-exclamation-triangle"></i> {errors.number.message}</p>}
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
                                            defaultValue={user?.webPage}
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
                                            defaultValue={user?.workers}
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
                                            defaultValue={user?.ruc}
                                        />
                                        {errors.ruc && <p className="error__message"><i className="fas fa-exclamation-triangle"></i> {errors.ruc.message}</p>}
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div>
                                            <p>Foto de Perfil <i className="fas fa-file-image"></i></p>
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
        </>
    )
}
export default MyCompany