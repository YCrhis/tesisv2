import RegisterProduct from "../components/Product/registerProduct"
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        margin: 'auto',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column'
        },
    },
    imageContainer: {
        flex: 1,
        margin: 'auto',
        textAlign: 'center',
        alignItems: 'center',
        '& img': {
            textAlign: 'center',
            width: '80%',
            marginBottom: '4rem',
            [theme.breakpoints.down('md')]: {
                marginBottom: '1rem',
                marginTop: '6rem',
            },
        }
    },
    form: {
        flex: 1,
        width: '100%'
    }
}));

const RegisterProd = () => {

    const classes = useStyles();

    return (
        <>
            <Header />
            <div className={classes.container}>
                <div className={classes.imageContainer}>
                    <img src="https://cdn.dribbble.com/users/1537480/screenshots/7176229/media/11d782940ea0293d3d7f7c8d9b040a18.png" alt="" />
                </div>
                <div className={classes.form}>
                    <RegisterProduct />
                </div>
            </div>

            <Footer />
        </>
    )
}
export default RegisterProd