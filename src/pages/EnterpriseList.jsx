import { useEffect } from 'react'
import { useState } from 'react'

import CompanyOptions from '../components/header/CompanyOptions'
import { makeStyles } from '@material-ui/core/styles';

import { listCompanies } from '../services/companies'
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

const EnterpriseList = () => {

    const classes = useStyles();

    const columns = [
        {
            title: 'Usuario ID',
            field: 'userId'
        },
        {
            title: 'RUC',
            field: 'ruc'
        },
        {
            title: 'Name',
            field: 'name'
        },
        {
            title: 'Email',
            field: 'email'
        },
        {
            title: 'Activo',
            field: 'isActive'
        },
    ]

    const [companies, setCompanies] = useState([])

    const loadUsers = async () => {
        const response = await listCompanies();
        setCompanies(response.data)
    }

    useEffect(() => {
        loadUsers()
    }, [companies])

    return (
        <>
            <CompanyOptions />
            <Container className={classes.container}>
                <h1 className={classes.title}>Listado de todas las empresas <br /> (sin aceptar)</h1>
                <MUITable
                    columns={columns}
                    data={companies}
                    options={true}
                />
            </Container>
        </>
    )
}
export default EnterpriseList