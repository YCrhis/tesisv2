import { useEffect } from 'react'
import { useState } from 'react'

import CompanyOptions from '../components/header/CompanyOptions'
import { makeStyles } from '@material-ui/core/styles';

import { allUser } from '../services/admin'
import { Container } from '@material-ui/core';
import MUITable from '../components/MUITable';

const useStyles = makeStyles((theme) => ({
    container: {
        float: 'right',
        width: '75%',
        padding: '2rem 2rem 2rem 4rem'
    },
    title: {
        textTransform: 'uppercase',
        fontSize: '3rem'
    }
}));

const UserList = () => {

    const classes = useStyles();

    const columns = [
        {
            title: 'ID',
            field: 'id'
        },
        {
            title: 'Nombre',
            field: 'name'
        },
        {
            title: 'Email',
            field: 'email'
        },
        {
            title: 'Numero de celular',
            field: 'phoneNumber'
        },
    ]

    const [users, setUsers] = useState([])

    const loadUsers = async () => {
        const response = await allUser();
        setUsers(response.data)
    }

    useEffect(() => {
        loadUsers()
    }, [users])

    return (
        <>
            <CompanyOptions />
            <Container className={classes.container}>
                <h1 className={classes.title}>Listado de todos los usuarios</h1>
                <MUITable
                    columns={columns}
                    data={users}
                    option="user"
                />
            </Container>
        </>
    )
}
export default UserList