import React, { useState } from 'react'
/* style */
import './selected.scss'
import {
    FormControlLabel,
    Checkbox,
    TextField,
    Grid,
    FormControl,
    InputLabel,
    MenuItem,
    Select
} from '@material-ui/core';

import { filterProducts } from '../../../services/products'


const Selected = ({ setInfo }) => {

    const [data, setData] = useState({
        /* eslint-disable */
        type: '',
        capacity: 240000,
        energyConsume: 100
    })

    const handleInputChanges = (e) => {

        const { name, type, checked } = e.target;
        const value = e.target.value.trim();
        // const eachValue = type === 'checkbox' ? checked : value;
        const newValue = {...data, [name]:  value}

        if(name === 'warranty'){
            if(checked === false){
                delete newValue.warranty;
            }else{
                newValue.warranty = true;
            }
        }
        if(name === 'install'){
            if(checked === false){
                delete newValue.install;
            }else{
                newValue.install = true;
            }
        }
        if (name === 'brand') {
            if(value === ''){
                delete newValue['brand'];
            }
        }
        if (name === 'model') {
            if(value === ''){
                delete newValue['model'];
            }
        }
        // if (name === 'type') {
        //     if(value === ''){
        //         delete newValue['type'];
        //     }
        // }
        if (name === 'capacity') {
            newValue['capacity'] = parseInt(newValue['capacity'])
        }
        if (name === 'energyConsume') {
            newValue['energyConsume'] = parseInt(newValue['energyConsume'])
        }
        // if (data['warranty'] === false) {
        //     delete data['warranty']
        // }
        // if (data['install'] === false) {
        //     delete data['install']
        // }
        // if (data.brand === '') {
        //     delete data['brand']
        // }
        // if (data.model === '') {
        //     delete data['model']
        // }
        // if (data.energyConsume === 0) {
        //     delete data['energyConsume']
        // }
        // if (data.capacity === 9000) {
        //     delete data['capacity']
        // }

        // if (data.type === '') {
        //     delete data['type']
        // }

        // setData(data => ({
        //     // ...data,
        //     // [name]: value,
        // }))

        setData({...newValue})

    }



    const handleSubmit = async () => {
        const toFilter = {...data}
        if(toFilter.type === '') delete toFilter.type;
        const response = await filterProducts(toFilter);
        setInfo(response.data.products)
    }


    return (
        <>
            <div className="filter-type">
                <Grid container spacing={0}>
                    <Grid item sm={12}>
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
                    </Grid>

                    <Grid item sm={12}>
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
                    </Grid>

                    <Grid item sm={12}>
                        <div className="filter__products">
                            <TextField
                                fullWidth
                                label="Marca del producto"
                                size='small'
                                name="brand"
                                onChange={handleInputChanges}
                            />
                        </div>
                    </Grid>

                    <Grid item sm={12}>
                        <div className="filter__products">
                            <TextField
                                fullWidth
                                label="Modelo"
                                size='small'
                                name="model"
                                onChange={handleInputChanges}
                            />
                        </div>
                    </Grid>

                    <Grid item sm={12}>
                        <div className="filter__products">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
                                <Select
                                    value={data.type}
                                    name="type"
                                    onChange={handleInputChanges}
                                >
                                    {/* eslint-disable */}
                                    <MenuItem  value="">Seleccione un valor</MenuItem>
                                    <MenuItem value="Frio">Frio</MenuItem>
                                    <MenuItem value="Calor / Frio">Calor / Frio</MenuItem>
                                    <MenuItem value="Ecológico">Ecológico</MenuItem>
                                    <MenuItem value="Gas R22">Gas R22</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </Grid>

                    <Grid item sm={12}>
                        <p className='range__label'>Capacidad</p>
                        <div className="range__input">
                            <div className="range__value">{data?.capacity}</div>
                            <div className="value left ">{!data?.capacity ? 9000 : data?.capacity}</div>
                            <input
                                type="range"
                                min={9000}
                                max={240000}
                                value={data.capacity}
                                name="capacity"
                                onChange={handleInputChanges}
                            />
                            <div className="value right">
                                240000
                            </div>
                        </div>
                    </Grid>

                    <Grid item sm={12}>
                        <p className='range__label'>Consumo de energía</p>
                        <div className="range__input">
                            <div className="range__value">
                                {!data?.energyConsume ? '0' : data?.energyConsume}
                                %
                            </div>
                            <div className="value left ">0%</div>
                            <input
                                type="range"
                                min={0}
                                max={100}
                                value={data.energyConsume}
                                name="energyConsume"
                                onChange={handleInputChanges}
                            />
                            <div className="value right">100%</div>
                        </div>
                    </Grid>

                </Grid>
                <button onClick={handleSubmit} className='button__filter'>Filtrar</button>
            </div>
        </>
    )
}
export default Selected;