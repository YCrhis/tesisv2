import React, { useState } from 'react'
/* style */
import './selected.scss'
import {
    FormControlLabel,
    Checkbox,
} from '@material-ui/core';

import { filterProducts } from '../../../services/products'


const Selected = ({ setInfo }) => {

    const [data, setData] = useState({
        install: false,
        warranty: false
    })

    const handleInputChanges = (e) => {


        const { name, type, checked, value } = e.target;
        const eachValue = type === 'checkbox' ? checked : value;

        setData(data => ({
            ...data,
            [name]: eachValue
        }))
    }


    const handleSubmit = async () => {
        const response = await filterProducts(data);
        setInfo(response.data.products)
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
                            value={data.install}
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
                            value={data.warranty}
                        />
                    }
                    label="Garantía"
                />

                <input type="range" />
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