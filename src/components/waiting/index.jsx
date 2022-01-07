import { Container, makeStyles } from "@material-ui/core"
import Header from "../header/Header"

const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100vh'
    },
});

const Waiting = ({ name }) => {
    const classes = useStyles()
    return (
        <>
            <Header />
            <Container className={classes.container}>
                <img src="https://i.pinimg.com/originals/8d/d3/ed/8dd3ed839851364b5653440ee4a6a5a9.gif" alt="" />
                <h2>Tu empresa "{name}" esta siendo verificada, por favor espera</h2>
                <p>Cuando tu empresa este aceptada podras ver la información de tu empresa</p>
            </Container>
        </>
    )
}
export default Waiting 