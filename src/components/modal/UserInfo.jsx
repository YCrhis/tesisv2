import React, { useEffect } from 'react';

import { Modal, Backdrop, Fade, Button, makeStyles, TextField, Box } from '@material-ui/core';
import { filterUser } from '../../services/admin';
import './styles.css';
;


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        margin: 'auto',
        maxWidth: '500px'
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
        width: '55%',
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
    },

}));

export const UserInfo = ({ toggleModal, setToggleModal, userIdInfo }) => {
    const classes = useStyles();
    const [user, setUser] = React.useState({
        id: 0,
        name: '',
        email: '',
        phoneNumber: '',
        isActive: true
    });
    const handleToggle = () => {
        setToggleModal(open => !open);
    }
    const loadUser = async () => {
        if (userIdInfo !== 0) {
            const res = await filterUser({ id: userIdInfo });
            setUser(res.data.users[0]);
        }
    }
    useEffect(() => {
        loadUser();
    }, [userIdInfo]);

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={toggleModal}
                onClose={handleToggle}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={toggleModal}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Información</h2>
                        <form noValidate autoComplete="off">
                            <br />
                            <Box component="div" display="flex" justifyContent={'between'}>
                                <TextField
                                    disabled
                                    id="standard-disabled"
                                    label="Nombre"
                                    value={user?.name}
                                    variant="standard"
                                    defaultValue={'Nombre'}
                                />
                                <div className='margin-space'>
                                </div>
                                <TextField
                                    disabled
                                    id="standard-disabled"
                                    label="Correo"
                                    value={user?.email}
                                    variant="standard"
                                    defaultValue={'Correo'}
                                />
                            </Box>
                            <br />
                            <Box component="div" display="flex" justifyContent={'between'}>
                                <TextField
                                    disabled
                                    id="standard-disabled"
                                    label="Número de celular"
                                    value={user?.phoneNumber === 'undefined' ? '' : user?.phoneNumber}
                                    variant="standard"
                                    defaultValue={'Celular'}
                                />
                                <div className='margin-space'>
                                </div>
                                <TextField
                                    disabled
                                    id="standard-disabled"
                                    label="Activo"
                                    value={user?.isActive === true ? 'Sí' : 'No'}
                                    variant="standard"
                                    defaultValue={'Activo'}
                                />
                            </Box>
                            
                            <Box sx={{ mt: 3 }}>
                                <Button onClick={handleToggle} >Cerrar</Button>

                            </Box>
                        </form>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
};
