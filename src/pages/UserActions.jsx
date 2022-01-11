import { Grid, Container, makeStyles } from '@material-ui/core'

import User from '../images/user.svg'

import Header from '../components/header/Header'
import Footer from '../components/footer/Footer';

const useStyles = makeStyles({
    containerUser: {
        margin: '5rem auto 1rem',
        height: '80vh',
        display: 'flex',
        alignItems: 'center'
    },
    title: {
        padding: '0.5rem',
        textTransform: 'uppercase',
        fontSize: 'calc(1rem + 3vw)',
        color: '#5d60ff'
    },
    text: {
        margin: '2rem auto'
    },
    list: {
        marginLeft: '3rem'
    },
    imagen: {
        display: 'block',
        margin: '2rem auto',
        width: 'calc(2rem + 20vw)'
    }
});

const UserActions = () => {
    const classes = useStyles();

    return (
        <>
            <Header />
            <div className={classes.containerUser}>
                <Container maxWidth='lg'>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item lg={6}>
                            <h2 className={classes.title}>¿Qué puedo hacer si soy usuario?</h2>
                        </Grid>
                        <Grid item lg={6}>
                            <p className={classes.text}>Cuando creas una cuenta como usuario en nuestra aplicación puedes realizar las siguientes operaciones:</p>
                            <ul className={classes.list}>
                                <li>Poder ver los productos que publican las empresas</li>
                                <li>Poder ver información de todas las empresas</li>
                                <li>Podras contactar con cualquier empresa</li>
                                <li>Participar de nuestros foros</li>
                            </ul>
                            <img src={User} className={classes.imagen} alt="Imagen"></img>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Footer />
        </>
    )

}
export default UserActions