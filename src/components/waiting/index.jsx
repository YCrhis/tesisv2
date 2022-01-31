import { Container, makeStyles } from "@material-ui/core"
import Header from "../header/Header"
import WaitingImage from '../../setting/images/waitingImage.png'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100vh'
    },
    image: {
        width: '30%',
        marginBottom: '4rem'
    }
});

const Waiting = ({ name }) => {
    const classes = useStyles()
    return (
        <>
            <Header />
            <Container className={classes.container}>
                <img src={WaitingImage} alt="Esperando" className={classes.image} />
                <h2>Tu empresa "{name}" esta siendo verificada, por favor espera</h2>
                <p>Cuando tu empresa este aceptada podras ver la información de tu empresa</p>
            </Container>
        </>
    )
}
export default Waiting 