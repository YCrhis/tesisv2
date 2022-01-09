import { useState } from 'react';
import {
    TextField,
    Grid,
    FormControlLabel,
    Checkbox,
    TextareaAutosize,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './stylesRegister.scss';

import Alert from '@material-ui/lab/Alert';
import { useForm, Controller } from 'react-hook-form';
import { useSelector } from 'react-redux'
import { selectCompany, selectUser } from '../../../features/userSlice'
import { creatingProduct } from '../../../services/products';

const useStyles = makeStyles((theme) => ({
    containerForm: {
        width: '100%',
        margin: '8rem auto 10px !important',
    },
    stylearea: {
        width: '100%',
        padding: '15px',
        height: 'calc(10vh + 5rem) !important',
        border: 'solid 1px #c5c5c5'
    },
    subtitle: {
        marginBottom: '1rem',
        fontSize: '2.6rem',
        color: '#5d60ff'
    },
    infoExtra: {
        color: '#5d60ff',
        marginBottom: '20px'
    },
    warranty: {
        display: 'block',
        marginRight: '2rem'
    },
}));

const RegisterProduct = () => {

    const classes = useStyles();

    const company = useSelector(selectCompany)
    const user = useSelector(selectUser)

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [message, setMessage] = useState(null)


    const { control } = useForm({
        defaultValues: {
            checkbox: false,
        }
    });



    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('enterpriseId', company.id)
        formData.append('name', data.name)
        formData.append('description', data.description)
        formData.append('brand', data.brand)
        formData.append('capacity', data.capacity)
        formData.append('model', data.model)
        formData.append('type', data.type)
        formData.append('energyConsume', data.energyConsume)
        formData.append('warranty', data.warranty)
        formData.append('stock', data.stock)
        formData.append('price', data.price)
        formData.append('install', data.install)
        formData.append('images', data.image[0])
        formData.append('images', data.image[1])
        formData.append('images', data.image[2])

        const response = await creatingProduct(user.token, formData)
        console.log(response)
    }

    return (


        <div className="everyting">
            <div className={classes.containerForm}>
                {
                    message &&
                    <Alert severity="success" color="info" onClose={() => setMessage(null)} className="success">
                        Tu producto ha sido ingresado <a href="/product">Ver productos</a>
                    </Alert>

                }
                <form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className={classes.subtitle}>Ingrese información del producto</h2>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Nombre del producto"
                                variant="outlined"
                                className={classes.input}
                                {...register("name", { required: true })}
                            />
                            {errors.name?.type === 'required' && <p className="error__message"><i class="fas fa-exclamation-triangle"></i> El nombre es requerido</p>}
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Precio del producto"
                                variant="outlined"
                                type="number"
                                {...register('price', {
                                    required: {
                                        value: true,
                                        message: "Este campo es requerido"
                                    },
                                    minLength: {
                                        value: 0,
                                        message: 'Ingrese un valor válido'
                                    }
                                })}
                            />
                            {errors.price && <p className="error__message"><i class="fas fa-exclamation-triangle"></i> {errors.price.message}</p>}
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Cantidad de unidades"
                                variant="outlined"
                                type="number"
                                {...register('stock', {
                                    required: {
                                        value: true,
                                        message: "Este campo es requerido"
                                    },
                                    minLength: {
                                        value: 0,
                                        message: 'Ingrese un valor válido'
                                    }
                                })}
                            />
                            {errors.stock && <p className="error__message"><i class="fas fa-exclamation-triangle"></i> {errors.stock.message}</p>}
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Marca del producto"
                                variant="outlined"
                                className={classes.input}
                                {...register("brand", { required: true })}
                            />
                            {errors.brand?.type === 'required' && <p className="error__message"><i class="fas fa-exclamation-triangle"></i> La marca es requerida</p>}
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Capacidad"
                                variant="outlined"
                                className={classes.input}
                                type="number"
                                {...register('capacity', {
                                    required: {
                                        value: true,
                                        message: "Este campo es requerido"
                                    },
                                    minLength: {
                                        value: 0,
                                        message: 'Ingrese un valor válido'
                                    }
                                })}
                            />
                            {errors.capacity && <p className="error__message"><i class="fas fa-exclamation-triangle"></i> {errors.price.message}</p>}
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Modelo"
                                variant="outlined"
                                className={classes.input}
                                {...register("model", { required: true })}
                            />
                            {errors.model?.type === 'required' && <p className="error__message"><i class="fas fa-exclamation-triangle"></i> El modelo es requerido</p>}
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Tipo"
                                variant="outlined"
                                className={classes.input}
                                {...register("type", { required: true })}
                            />
                            {errors.type?.type === 'required' && <p className="error__message"><i class="fas fa-exclamation-triangle"></i> El tipo es requerido</p>}
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Consumo de energia (en watts)"
                                variant="outlined"
                                className={classes.input}
                                type="number"
                                {...register('energyConsume', {
                                    required: {
                                        value: true,
                                        message: "Este campo es requerido"
                                    },
                                    minLength: {
                                        value: 0,
                                        message: 'Ingrese un valor válido'
                                    }
                                })}
                            />
                            {errors.energyConsume && <p className="error__message"><i class="fas fa-exclamation-triangle"></i> {errors.energyConsume.message}</p>}
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Precio del producto"
                                variant="outlined"
                                className={classes.input}
                                type="number"
                                {...register('price', {
                                    required: {
                                        value: true,
                                        message: "Este campo es requerido"
                                    },
                                    minLength: {
                                        value: 0,
                                        message: 'Ingrese un valor válido'
                                    }
                                })}
                            />
                            {errors.price && <p className="error__message"><i class="fas fa-exclamation-triangle"></i> {errors.price.message}</p>}
                        </Grid>

                        <Grid item xs={12}>
                            <TextareaAutosize
                                className={classes.stylearea}
                                placeholder="Descripcion del producto"
                                {...register("description", { required: true })}
                            />
                            {errors.description?.type === 'required' && <p className="error__message"><i class="fas fa-exclamation-triangle"></i> La descripción es requerida</p>}
                        </Grid>

                        <FormControlLabel
                            name="warranty"
                            className={classes.warranty}
                            control={
                                <Controller
                                    name="warranty"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => <Checkbox {...field} />}
                                />
                            }
                            label="¿Tiene Garantía?"
                            {...register("warranty")}
                        />

                        <FormControlLabel
                            name="install"
                            className={classes.install}
                            control={
                                <Controller
                                    name="install"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => <Checkbox {...field} />}
                                />
                            }
                            label="¿Tiene instalación?"
                            {...register("install")}
                        />
                        <Grid item xs={12}>
                            <h5>Seleccione 3 imagenes</h5>
                            <input
                                type="file"
                                multiple
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'Ingrese imagenes del producto'
                                    }
                                })}
                            />
                            {errors.image && <p className="error__message"><i class="fas fa-exclamation-triangle"></i> {errors.image.message}</p>}
                        </Grid>

                    </Grid>
                    <button className="sendButton">Publicar Producto</button>
                </form>
            </div>
        </div>
    )
}
export default RegisterProduct

/* 



e.preventDefault();

setUpload(false)

const formData = new FormData();
formData.append('images', fields[0]);
formData.append('images', fields[1]);
formData.append('images', fields[2]);
formData.append('name', data.name);
formData.append('brand', data.brand);
formData.append('price', data.price);
formData.append('capacity', data.capacity);
formData.append('description', data.description);
formData.append('model', data.model);
formData.append('type', data.type);
formData.append('energyConsume', data.energyConsume);
formData.append('install', data.install);
formData.append('warranty', data.warranty);
formData.append('stock', data.stock);

formData.append('enterpriseId', window.localStorage.getItem('idEnterprice'));

if (fields.length == 0) {
    alert('ingrese todos los campos')
}


const response = await fetch('https://termoconfort-test1.herokuapp.com/api/v1/product/store', {
    method: 'post',
    body: formData
});

const information = await response.json();
console.log(information)
if (information.ok == true) {
    setMessage(true)
    setUpload(true)
}


const handleInputChanges = (e) => {
    const { name, type, checked, value } = e.target;
    const val = type === 'checkbox' ? checked : value;

    setData({
        ...data,
        [name]: val
    })
}

const handleInputChange = (e) => {
    setFields(e.target.files)
}
*/