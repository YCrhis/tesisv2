import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import BusinessIcon from '@material-ui/icons/Business';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        height: '100vh',
        position: 'fixed',
        top: '0',
        left: '0'
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    link: {
        color: '#606060',
        textDecoration: 'none'
    },
    icon: {
        color: '#5d60ff'
    },
    title: {
        fontSize: 'calc(1rem + 1vw)',
        borderBottom: 'solid 1px #000'
    },
    button: {
        padding: '.5rem 2rem',
        display: 'block',
        margin: ' 4rem auto 2rem',
        color: '#Fff',
        background: '#5d60ff',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '1rem'
    },
    header: {
        paddingTop: '2rem',
        paddingBottom: '4rem'
    }
}));

export default function CompanyOptions() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);


    return (
        <List
            component="nav"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader" className={classes.header}>
                    <h1 className={classes.title}>Termoconfort</h1>
                    <h3>Administrador</h3>
                </ListSubheader>
            }
            className={classes.root}
        >
            <Link to="/" className={classes.link}>
                <ListItem button>
                    <ListItemIcon>
                        <PeopleAltIcon className={classes.icon} />
                    </ListItemIcon>

                    <ListItemText primary="Usuarios" />

                </ListItem>
            </Link>

            <Link to="/" className={classes.link}>
                <ListItem button>
                    <ListItemIcon>
                        <BusinessIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary="Peticiones de Empresas" />
                </ListItem>
            </Link>

            <Link to="/" className={classes.link}>
                <ListItem button>
                    <ListItemIcon>
                        <DoneAllIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary="Empresas Aprobadas" />
                </ListItem>
            </Link>

            <button className={classes.button}>Cerrar Sesión</button>

        </List>
    );
}