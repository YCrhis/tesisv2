import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '35%',
        margin: 'auto',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        alignItems: 'center',
        textAlign: 'center',
        border: 'none !Important',
        borderRadius: '12px',
        width: '100% !important',
    },
    imageModal: {
        width: '50%',
        background: '#fff',
    },
    text: {
        marginBottom: '1rem'
    },
    button: {
        background: '#5d60ff',
        padding: '.5rem 1rem',
        margin: '2rem auto',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '10px'
    }
}));

const ModalMessage = ({ message, img, title, link }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);


    const handleClose = () => {
        setOpen(false);
    };

    return (
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
                        <h2 id="transition-modal-title">{title}</h2>
                        <img src={img} alt="" className={classes.imageModal} />
                        <p id="transition-modal-description" className={classes.text}>{message}</p>
                        {link && <Link to={link} className={classes.button}>Crear Cuenta</Link>}

                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
export default ModalMessage