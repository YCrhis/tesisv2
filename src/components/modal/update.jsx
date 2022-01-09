import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '55%',
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

const ModalUpdate = forwardRef(({ children, show = false }, ref) => {
    const classes = useStyles();

    const [open, setOpen] = useState(show);

    const handleClose = () => setOpen(false);

    useImperativeHandle(ref, () => ({
        handleOpen() {
            setOpen(true);
        },
        handleClose() {
            setOpen(false);
        },
    }));

    return (
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
                    {children}
                </div>
            </Fade>
        </Modal>
    );
})
export default ModalUpdate