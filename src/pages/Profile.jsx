import { useState } from 'react'
import { useSelector } from "react-redux"
import Header from "../components/header/Header"
import { selectUser } from "../features/userSlice"
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Fade, Backdrop, Modal } from "@material-ui/core";

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
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
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
    }
}));

const Profile = () => {

    const myUser = useSelector(selectUser)
    const user = myUser.loginInformation

    const classes = useStyles();

    const [inputs, setInputs] = useState({})

    const [file, setFile] = useState()

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const handleFileChange = (e) => {
        setFile(e.target.files)
    }

    const myDate = () => {
        var fecha = new Date();
        var day = user?.createdAt;
        return fecha.toLocaleDateString("es-ES", day)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const newData = new FormData();
        newData.append('name', inputs.name)
        newData.append('email', inputs.email)
        newData.append('password', inputs.password)
        newData.append('phoneNumber', inputs.phoneNumber)
        newData.append('image', file.image)

        const response = await fetch(`https://termoconfort-v2.herokuapp.com/api/v1/user/update/${user.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'Application/json',
                'Authorization': 'Bearer' + user.token,
            },
            body: JSON.stringify(newData)
        })

        console.log(await response.json())
    }

    return (
        <div className={classes.all}>
            <Header />
            <div className={classes.container}>
                <div className={classes.information__profile}>
                    <img
                        src='https://cdn.discordapp.com/attachments/761675275451760710/924704758076411934/termoconfort-logo-2-aire-acondicionado-instalacion.png'
                        alt="Imagen de perfil"
                        className={classes.image}
                    />
                    <h1 className={classes.name}>{user?.name}</h1>
                    <p className={classes.phone}>{user?.phoneNumber}</p>
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
                            <p>{user?.role}</p>
                        </Grid>
                        <Grid
                            item
                            lg={4}
                        >
                            <h3>Email <br />Usuario</h3>
                            <p>{user?.email}</p>
                        </Grid>
                        <Grid
                            item
                            lg={12}
                        >
                            <button className={classes.button} onClick={handleOpen}>Modificar Datos</button>
                        </Grid>
                    </Grid>
                    {/*                     <input type="file" onChange={fileImage} />
                    <button onClick={sendImage}>send image</button> */}
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
                            <form>
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
                                            name="name"
                                            onChange={handleInputChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12} lg={6}>
                                        <TextField
                                            label="Numero de Celular"
                                            variant="outlined"
                                            fullWidth
                                            type="number"
                                            name="phoneNumber"
                                            onChange={handleInputChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12} lg={6}>
                                        <TextField
                                            label="Email"
                                            variant="outlined"
                                            fullWidth
                                            name="email"
                                            onChange={handleInputChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12} lg={6}>
                                        <TextField
                                            label="Contraseña"
                                            variant="outlined"
                                            fullWidth
                                            name="password"
                                            onChange={handleInputChange}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div id="foto">
                                            <p>Foto de Perfil <i class="fas fa-file-image"></i></p>
                                            <input
                                                type="file"
                                                id="file"
                                                name="image"
                                                onChange={handleFileChange}
                                            />
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <button className={classes.button2} onClick={onSubmit}>Modificar Datos</button>
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