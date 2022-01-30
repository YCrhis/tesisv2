import MaterialTable from "material-table"

import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { acceptCompany } from "../../services/companies";

import { forwardRef, useState, useRef } from 'react';
import ModalMessage from "../modal";

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Visibility from '@material-ui/icons/Visibility';
import { UserInfo } from '../modal/UserInfo';


const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
    Visibility: forwardRef((props, ref) => <Visibility {...props} ref={ref} />),
};

const useStyles = makeStyles((theme) => ({
    text: {
        fontSize: '14px',
        padding: '2rem',
        position: 'relative',
        zIndex: 30,
    },
}));


const MUITable = ({ columns, data, option }) => {
    const classes = useStyles();
    const tableRef = useRef();
    const user = useSelector(selectUser)

    const [accept, setAccept] = useState(null)

    const [toggleModal, setToggleModal] = useState(false);
    const [userIdInfo, setUserIdInfo] = useState(0);


    const handleAccept = async (rowData) => {

        const answer = window.confirm('¿Desea aceptar empresa?');

        if (answer === true) {
            const response = await acceptCompany(rowData.id, JSON.stringify({ state: 1 }), user.token);
            console.log(response)
            if (response.ok === true) {
                setAccept(true)
                tableRef.current.onQueryChange()
            }
        }
    }

    const handleDisable = async (rowData) => {

        const answer = window.confirm('¿Desea desabilitar Empresa?');
        if (answer === true) {
            const response = await acceptCompany(rowData.id, JSON.stringify({ state: 2 }), user.token);
            if (response.ok === true) {
                setAccept(true)
            }
        }

    }

    const handleEnabled = async (rowData) => {

        const answer = window.confirm('¿Desea habilitar Empresa?');
        if (answer === true) {
            const response = await acceptCompany(rowData.id, JSON.stringify({ state: 1 }), user.token);
            if (response.ok === true) {
                setAccept(true)
            }
        }

    }

    const handleInfoUser = async (id) => {
        setUserIdInfo(id);
        setToggleModal(open => !open);
    }
    const renderTable = () => {
        if (option === 'user') {
            return (
                <>
                    <MaterialTable
                        columns={columns}
                        data={data}
                        title={null}
                        icons={tableIcons}
                        options={{
                            headerStyle: {
                                backgroundColor: '#5d60ff',
                                color: '#FFF'
                            },
                            actionsColumnIndex: -1
                        }}
                        actions={[
                            {
                                icon: Visibility,
                                tooltip: 'Mostrar',
                                onClick: (_, rowData) => {
                                    handleInfoUser(rowData.id);
                                }
                            }
                        ]}
                    />
                    <UserInfo 
                        toggleModal={toggleModal}
                        setToggleModal={setToggleModal}
                        userIdInfo={userIdInfo}
                    />
                </>
            )
        }
        if (option === 'company0') {
            return (
                <>
                    <MaterialTable
                        columns={columns}
                        data={data}
                        tableRef={tableRef}
                        title={null}
                        icons={tableIcons}
                        options={{
                            headerStyle: {
                                backgroundColor: '#5d60ff',
                                color: '#FFF'
                            },
                            actionsColumnIndex: -1
                        }}
                        actions={[
                            {
                                icon: Check,
                                tooltip: 'Aceptar Empresa',
                                onClick: (_, rowData) => {
                                    handleAccept(rowData);
                                }
                            }, {
                                icon: DeleteOutline,
                                tooltip: 'Delete User',
                                onClick: (event, rowData) => alert("¿Desea rechazar a la empresa? " + rowData.name)
                            }
                        ]}
                    />
                    {accept &&
                        <ModalMessage
                            img="https://i.gifer.com/DLAN.gif"
                            title="Acción realizada con éxito"

                            message="Buenas noticias"
                            link="/administrador/empresas/desabilitadas"
                            button="Ver empresas"
                        />
                    }
                </>
            )
        }
        if (option === 'company1') {
            return (
                <>
                    <MaterialTable
                        columns={columns}
                        data={data}
                        title={null}
                        icons={tableIcons}
                        options={{
                            headerStyle: {
                                backgroundColor: '#5d60ff',
                                color: '#FFF'
                            },
                            actionsColumnIndex: -1
                        }}
                        actions={[
                            {
                                icon: DeleteOutline,
                                tooltip: 'Desabilitar empresa',
                                onClick: (_, rowData) => {
                                    handleDisable(rowData);
                                }
                            }
                        ]}
                    />
                    {accept &&
                        <ModalMessage
                            img="https://i.gifer.com/DLAN.gif"
                            title="Acción realizada con éxito"
                            message="La empresa se volvio técnicamente 'fantasma' (desabilitada)"
                            link="/administrador/empresas/desabilitadas"
                            button="Ver empresas desabilitadas"
                        />
                    }
                </>
            )
        }
        if (option === 'company2') {
            return (
                <>
                    <MaterialTable
                        columns={columns}
                        data={data}
                        title={null}
                        icons={tableIcons}
                        options={{
                            headerStyle: {
                                backgroundColor: '#5d60ff',
                                color: '#FFF'
                            },
                            actionsColumnIndex: -1
                        }}
                        actions={[
                            {
                                icon: Remove,
                                tooltip: '¿Desea volver habilitar la empresa?',
                                onClick: (_, rowData) => {
                                    handleEnabled(rowData);
                                }
                            }
                        ]}
                    />
                    {accept &&
                        <ModalMessage
                            img="https://c.tenor.com/RnzjhOMS0NMAAAAC/friday-happy.gif"
                            title="Acción realizada con éxito"
                            message="En estos momentos la empresa ya esta habilitada"
                            link="/administrador/empresas/aceptados"
                            button="Ver empresas aceptadas"
                        />
                    }
                </>
            )
        }
    }

    return (
        <div className={classes.text}>
            {renderTable()}
        </div>
    )
}
export default MUITable
