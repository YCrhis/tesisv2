import { useState } from 'react'
import { Container, Grid, Modal, Backdrop, Fade, TextField, TextareaAutosize } from "@material-ui/core"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import CardPost from "../components/Post/card"
import { Link } from 'react-router-dom'

import community2 from '../images/community2.svg'
import { makeStyles } from '@material-ui/core/styles';
import { sendPost, list } from '../services/posts'


import './styles/post.scss'
import { useEffect } from 'react'

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: '50%',
        height: '50vh',
        textAlign: 'center'
    },
    button: {
        position: 'fixed',
        left: '4%',
        top: '20%',
        padding: '.5rem 2rem',
        border: 'none',
        background: '#5d60ff',
        color: '#fff',
        fontWeight: 'bold',
        cursor: 'pointer',
        zIndex: '10'
    },
    button2: {
        padding: '.5rem 2rem',
        border: 'none',
        background: '#5d60ff',
        color: '#fff',
        fontWeight: 'bold',
        cursor: 'pointer',
    },
    stylearea: {
        marginTop: '1rem',
        width: '100%',
        padding: '15px',
        height: 'calc(10vh + 5rem) !important',
        border: 'solid 1px #c5c5c5'
    },
}));

const Post = () => {
    const classes = useStyles();

    const [info, setInfo] = useState()
    const [open, setOpen] = useState(false);

    const loadData = async () => {
        const response = await list();
        if (response.ok) {
            setInfo(response.data);
            console.log(response.data)
        }
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const myId = window.localStorage.getItem('id')

    const [fields, setFields] = useState({
        title: '',
        content: '',
        userId: myId
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFields({
            ...fields,
            [name]: value
        })
    }

    const submit = async () => {
        const response = await sendPost(fields)
        console.log(response)
        if (response.ok) {
            setOpen(false);
            window.location.reload()
        }
        if (!response.ok) {
            alert('ocurrio algo mal, vuelva a intentarlo')
        }
    }

    useEffect(() => {
        loadData()
    }, [])


    return (
        <>
            <Header />
            <Container maxWitdh="lg" className="post__containerAll">
                <h1>Posts de la comunidad</h1>
                <img src={community2} alt="" />
                <button type="button" onClick={handleOpen} className={classes.button}>
                    Subir mi publicación
                </button>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={5}
                    className="post__eachContainer"
                >
                    {info &&
                        info.map((post) => (
                            <Link to='/'>
                                <Grid item lg={5} xs={12}>
                                    <CardPost
                                        key={post._id}
                                        title={post.title}
                                        description={post.content}
                                        myId={post._id}
                                    />
                                </Grid>
                            </Link>
                        ))
                    }
                </Grid>
            </Container>



            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                className={classes.modal}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title" className='post__titleNew'>Ingresa informacion</h2>
                        <div className="container__postForm">
                            <TextField
                                id="outlined-basic"
                                label="Titulo"
                                variant="outlined"
                                fullWidth
                                name="title"
                                value={fields.title}
                                onChange={handleChange}
                            />
                            <TextareaAutosize
                                className={classes.stylearea}
                                aria-label="maximum height"
                                placeholder="Ingresa descripcion"
                                defaultValue="Me gustaria ..."
                                name="content"
                                value={fields.content}
                                onChange={handleChange}
                            />
                            <button className={classes.button2} onClick={submit}>Enviar</button>
                        </div>
                    </div>
                </Fade>
            </Modal>
            <Footer />
        </>
    )
}
export default Post