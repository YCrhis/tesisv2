import { Grid, Container, makeStyles } from '@material-ui/core'

import Company from '../images/workingteam.png'

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
        margin: '.2rem auto',
        width: 'calc(1rem + 20vw)'
    }
});

const CompanyActions = () => {
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
                            <h2 className={classes.title}>¿Qué puedo hacer si soy una empresa?</h2>
                        </Grid>
                        <Grid item lg={6}>
                            <p className={classes.text}>Cuando creas una cuenta como empresa en nuestra aplicación puedes realizar las siguientes operaciones:</p>
                            <ul className={classes.list}>
                                <li>Poder ver los productos que publican las empresas</li>
                                <li>Poder ver información de todas las empresas</li>
                                <li>Podras contactar con cualquier empresa</li>
                                <li>Puedes publicar tus propios productos</li>
                                <li>Participar de nuestros foros</li>
                                <li>Tener comunicación con posibles clientes</li>
                            </ul>
                            <img src={Company} className={classes.imagen} alt="company"></img>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Footer />
        </>
    )

}
export default CompanyActions