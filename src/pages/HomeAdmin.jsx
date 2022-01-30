import CompanyOptions from '../components/header/CompanyOptions'

import { Container } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles';

import WorkingTeam from '../images/workingteam.png'

const useStyles = makeStyles((theme) => ({
    container: {
        float: 'right',
        width: '75%',
        padding: '2rem 2rem 2rem 4rem'
    },
    title: {
        fontSize: 'calc(2rem + 2vw)',
        borderBottom: 'solid 3px #5d60ff'
    },
    text: {
        padding: '10px',
        margin: '.1rem auto 1rem'
    },
    list: {
        paddingLeft: '2rem',
        listStyle: 'none',
        '& .fas': {
            color: '#5d60ff'
        }
    },
    image: {
        display: 'block',
        width: '30%',
        margin: '2rem auto'
    }
}));

const HomeAdmin = () => {
    const classes = useStyles();
    return (
        <>
            <CompanyOptions />
            <Container className={classes.container}>
                <h1 className={classes.title}>Bienvenido</h1>
                <p className={classes.text}>En este momento estas registrado como administrador de la aplicación, aqui puedes realizar algunas opciones para el funcionamiento de esta misma, lo que puedes hacer en este modo es: </p>
                <ul className={classes.list}>
                    <li><i className="fas fa-check"></i> Ver todos los usuarios registrados en la base de datos</li>
                    <li><i className="fas fa-check"></i> Ver todas las empresas registrados en la base de datos</li>
                    <li><i className="fas fa-check"></i> Puedes aceptar o denegar el permiso para las empresas</li>
                    {/* <li><i className="fas fa-check"></i> En algunos casos vas a poder eliminar a algunos usuarios y/o empresas</li> */}
                </ul>
                <img src={WorkingTeam} alt="" className={classes.image} />
            </Container>
        </>
    )
}
export default HomeAdmin