import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@material-ui/core';
import Close from '@material-ui/icons/CloseOutlined';
import Check from '@material-ui/icons/Check';
import SearchIcon from '@material-ui/icons/Search';

import { updateCompanyState } from '../../services/companies';
import './table.css';
import { useState } from 'react';
import './page.css';
import './search.css';


export const EnterpriseWait = ({ data, loadEnterprises, token }) => {
    const enterprises = data?.enterprises;
    const [current, setCurrent] = useState(0);
    const [search, setSearch] = useState('');

    const handleDesaprobe = async (id) => {
        await updateCompanyState(id, JSON.stringify({ state: 2 }), token);
        await loadEnterprises(current, { name: search });
    }
    const handleAprobe = async (id) => {
        await updateCompanyState(id, JSON.stringify({ state: 1 }), token);
        await loadEnterprises(current, { name: search });
    }
    const handleSubmitSearch = async (e) => {
        e.preventDefault();
        await loadEnterprises(current, { name: search });
    }

    const handleSearchChange = async (e) => {
        setSearch(e.target.value.trim());
    }

    const pagesArray = [];
    for (let i = 0; i < data.pages; i++) {
        pagesArray.push(i);
    }

    const handlePage = async (currentString) => {
        const pageNumber = parseInt(currentString);
        setCurrent(pageNumber);
        await loadEnterprises(pageNumber, {name: search});
    }

    return (
        <>
            <form onSubmit={handleSubmitSearch}>
                <TextField 
                    name='name' 
                    inputProps={{ min: 0, style: { textAlign: 'left' } }} 
                    
                    onChange={handleSearchChange}
                    value={search}/>
                <SearchIcon />
            </form>
            <br />
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead >
                        <TableRow>
                            <TableCell>Usuario ID</TableCell>
                            <TableCell>Empresa ID</TableCell>
                            <TableCell>RUC</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Correo</TableCell>
                            <TableCell>Activo</TableCell>
                            <TableCell>Estado</TableCell>
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {enterprises.map((enterprise) => (
                            <TableRow key={enterprise.id}>
                                <TableCell>{enterprise.userId}</TableCell>
                                <TableCell>{enterprise.id}</TableCell>
                                <TableCell>{enterprise.ruc}</TableCell>
                                <TableCell>{enterprise.name}</TableCell>
                                <TableCell>{enterprise.email}</TableCell>
                                <TableCell>{enterprise.isActive === true ? 'Si' : 'No'}</TableCell>
                                <TableCell>
                                    {enterprise.state === 0
                                        ? 'En espera'
                                        : (enterprise.state === 1
                                            ? 'Aprobada'
                                            : 'Desaprobado')}
                                </TableCell>
                                <TableCell>
                                    <Check className='cursor-icon' onClick={() => handleAprobe(enterprise.id)} />
                                    <Close className='cursor-icon' onClick={() => handleDesaprobe(enterprise.id)} />

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div className='align'>
                {
                    pagesArray.map(lim => <span
                        key={lim}
                        className={lim === current ? 'active' : ''}
                        onClick={() => handlePage(lim)}>{lim}</span>)
                }

            </div>
        </>
    );
};
