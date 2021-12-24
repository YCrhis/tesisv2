import React, { useState } from 'react'
/* style */
import './selected.scss'
import {
    TextField,
    Grid,
    FormControlLabel,
    Checkbox,
    TextareaAutosize,
} from '@material-ui/core';

import { list } from '../../../services/products'

const Selected = ({ filterProducts, setInfo }) => {

    const [data, setData] = useState({
        /* name: '',
        brand: '',
        price: '',
        capacity: '',
        model: '',
        type: '',
        energyConsume: '',
        install: false,
        warranty: false,
        stock: '' */
        install: false,
        warranty: false,
    })

    const handleInputChanges = (e) => {
        const { name, type, checked, value } = e.target;
        const val = type === 'checkbox' ? checked : value;

        const info = {
            ...data,
            [name]: val
        }

        if (info['warranty'] == false) {

            delete info['warranty']

        }

        if (info['install'] == false) {

            delete info['install']

        }


        console.log(info)
        setData({
            ...info,
            /* [name]: val */
        })
    }

    const handleSubmit = async () => {
        console.log(data, 'hola mundo data')
        const response = await fetch('https://termoconfort-test1.herokuapp.com/api/v1/product/filter-post?limit=100&page=0', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'Application/json',
            },
            body: JSON.stringify(data)
        })
        const da = await response.json()

        console.log(da, 'nosotros como')

        setInfo(da.data)
    }


    return (
        <>
            <div className="filter-type">
                {/* <h4>Category</h4> */}
                <FormControlLabel
                    name="install"
                    control={
                        <Checkbox
                            name="install"
                            onChange={handleInputChanges}
                            color="primary"
                        />
                    }
                    label="Instalación"
                />
                <FormControlLabel
                    name="warranty"
                    control={
                        <Checkbox
                            name="warranty"
                            onChange={handleInputChanges}
                            color="primary"
                        />
                    }
                    label="Garantía"
                />
                {/* <div className="input__filter">
                    <TextField
                        id="standard-basic"
                        label="Marca"
                        fullWidth
                        onChange={handleInputChanges}
                        name="brand"
                    />
                </div>
                <div className="input__filter">
                    <TextField
                        id="standard-basic"
                        label="Modelo"
                        fullWidth
                        onChange={handleInputChanges}
                        name="model"
                    />
                </div> */}
                <button onClick={handleSubmit} className='button__filter'>Filtrar</button>
            </div>
        </>
    )
}
export default Selected;