import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CompanyOptions from '../components/header/CompanyOptions'
import { getEnterprisesFiltered } from '../services/companies';
import { EnterpriseWait } from '../components/AdminTables/EnterpriseWait';
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const useStyles = makeStyles((theme) => ({
    container: {
        float: 'right',
        width: '75%',
        padding: '2rem 2rem 2rem 4rem',
        marginBottom: '4rem'
    },
    title: {
        textTransform: 'uppercase',
        fontSize: '2rem'
    }
}));


const EnterpriseListV2 = () => {
    const classes = useStyles();
    const [data, setData] = useState({
        enterprises: [],
        pages: 0
    });

    const user = useSelector(selectUser);

    const getEnterprises = async (page = 0, filter = {}) => {
        const res = await getEnterprisesFiltered(filter, page);
        setData(res.data);
    }

    useEffect(() => {
        getEnterprises();
        /* eslint-disable */
    }, []);

    return (
        <>
            <CompanyOptions />
            <Container className={classes.container}>
                <h1 className={classes.title}>Listado de todas las empresas</h1>
                <hr />
                <p>Aquí puede buscar, aprobar y desaprobar empresas</p>
                <br />
                <EnterpriseWait data={data} loadEnterprises={getEnterprises} token={user.token} />
            </Container>
        </>


    );
};
export default EnterpriseListV2
