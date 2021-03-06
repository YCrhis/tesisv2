import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Container, Grid, Modal, Backdrop, Fade, TextField, TextareaAutosize } from "@material-ui/core"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import CardPost from "../components/Post/card"
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import Loader from '../components/loader/Loader'
import PaginationPage from '../components/pagination/Pagination'

import community2 from '../images/community2.svg'
import { makeStyles } from '@material-ui/core/styles';
import { sendPost, searchPost } from '../services/posts'
import Search from '../components/search/Searh'

import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

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
    viewOption: {
        width: '100%',
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center'
    },
    buttonColumn: {
        margin: '1px 10px 0px 10px',
        border: 'none',
        background: 'none',
        cursor: 'pointer'
    },
}));

const Post = () => {

    const classes = useStyles();

    const user = useSelector(selectUser)

    const [info, setInfo] = useState()
    const [open, setOpen] = useState(false);
    const [searchName, setSearchName] = useState('')
    const [page, setPage] = useState(0)
    const [pageNumber, setPageNumber] = useState()
    const [loadInformation, setLoadInformation] = useState(true)

    const [view, setView] = useState(5);

    const loadData = async () => {
        const response = await searchPost(page, { title: searchName });
        setInfo(response.data.posts);
        setPageNumber(response.data.pages);
        setLoadInformation(null);
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [fields, setFields] = useState({
        title: '',
        content: '',
        userId: user?.id
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
        await sendPost(fields)
        setOpen(false)
        loadData()
    }

    const handleSearch = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        loadData()
        /* eslint-disable */
    }, [searchName, page])

    if (loadInformation) {
        return (
            <Loader />
        )
    }

    return (
        <>
            <Header />
            <Container className="post__containerAll">

                <div className="post__containerInitial">
                    <img src={community2} alt="" className='post__containerInitialImage' />
                    <div className="post__containerInitialInformation">
                        <h1>Posts de la comunidad</h1>
                        <p>Aqui puedes encontrar todas las preguntas realizadas por nuestros usuarios. Puedes responder las preguntas que encuentres, adem??s puedes crear tus propias preguntas, solo recurda seguir nuestras reglas, de lo contrario tu cuenta puede ser eliminada.</p>
                        <ul>
                            <li><i className="fas fa-eye"></i> Ser respetuso con tus respuestas</li>
                            <li><i className="fas fa-eye"></i> Tus preguntas deben ser bien formuladas</li>
                            <li><i className="fas fa-eye"></i> Respeta las opiniones de todos los usuarios</li>
                        </ul>
                    </div>

                </div>

                <Search
                    handleSearch={handleSearch}
                    setSearchName={setSearchName}
                    setPage={setPage}
                />

                <div className="post__containerComment animate__animated animate__bounce animate__infinite" onClick={handleOpen}>
                    <i className="fas fa-pencil-alt"></i><br />
                    <button type="button">
                        Comenzar Pregunta
                    </button>
                </div>

                <div className={classes.viewOption}>
                    <h4>Vista</h4>
                    <button onClick={() => setView(12)} className={classes.buttonColumn}>
                        <ViewStreamIcon
                            fontSize="large"
                            color="disabled"
                        />
                    </button>
                    <button onClick={() => setView(5)} className={classes.buttonColumn}>
                        <ViewColumnIcon
                            fontSize="large"
                            color="disabled"
                        />
                    </button>
                </div>
                <div className={classes.cards}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={5}
                        className="post__eachContainer"
                    >
                        {
                            info?.map(i => (

                                <Grid item lg={view} xs={12} key={i.id}>
                                    <Link to={`/posts/${i.id}`}>
                                        <CardPost
                                            title={i.title}
                                            name={i.userName}
                                            date={i.createdAt}
                                            comments={i.comments}
                                            content={i.content}
                                            userImage={i.userImage}
                                        />
                                    </Link>
                                </Grid>
                            ))
                        }
                    </Grid>
                </div>

                <div className="container__pagination">
                    <PaginationPage
                        pageNumber={pageNumber}
                        setPage={setPage}
                    />
                </div>
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