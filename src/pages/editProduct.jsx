import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { makeStyles } from '@material-ui/core/styles';
import { useForm, Controller } from 'react-hook-form';
import { useEffect } from 'react';
import {
    TextField,
    Grid,
    FormControlLabel,
    Checkbox,
    TextareaAutosize,
    Select,
    MenuItem,
    InputLabel,
    FormControl
} from '@material-ui/core';

import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectUser, selectCompany } from '../features/userSlice'
import { filterProducts, editProduct } from '../services/products';
import { useState } from 'react';


const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        margin: 'auto',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column'
        },
    },
    imageContainer: {
        flex: 1,
        margin: 'auto',
        textAlign: 'center',
        alignItems: 'center',
        display: 'flex',

        '& img': {
            textAlign: 'center',
            width: '30%',
            marginBottom: '4rem',
            [theme.breakpoints.down('md')]: {
                marginBottom: '1rem',
                marginTop: '6rem',
            },
        }
    },
    form: {
        flex: 1,
        width: '100%'
    },
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
}));

function EditProduct(props) {

    const history = useHistory();

    const idProduct = props.match.params.id;

    const [info, setInfo] = useState()

    const id = parseInt(idProduct)

    const { register, formState: { errors }, handleSubmit } = useForm();

    const classes = useStyles();

    const user = useSelector(selectUser)
    const company = useSelector(selectCompany)

    const { control } = useForm({
        defaultValues: {
            checkbox: false,
        }
    });


    const loadProduct = async () => {
        const response = await filterProducts({ id: id })
        setInfo(response.data.products[0])
        console.log(response.data.products[0])
    }

    useEffect(() => {
        loadProduct();
        /* eslint-disable */
    }, [])

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('id', id)
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

        const response = await editProduct(id, formData, user.token)

        if (response.ok === false) {
            alert('Algo salio mal, vuelve a intentarlo')
        }
        if (response.ok === true) {
            history.push('/empresa/productos')
        }
    }

    return (
        <>
            <Header />
            <div className={classes.container}>
                <div className={classes.imageContainer}>
                    {info?.images.length === 0 ? null
                        :
                        <>
                            <img src={info?.images[0].url} alt={info?.images[0]?.url} />
                            <img src={info?.images[1].url} alt={info?.images[1]?.url} />
                            <img src={info?.images[2].url} alt={info?.images[2]?.url} />
                        </>
                    }
                </div>
                <div className={classes.form}>
                    <div className={classes.containerForm}>
                        {info &&
                            <form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
                                <h2 className={classes.subtitle}>Ingrese información del producto</h2>
                                <Grid container spacing={3}>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Nombre del producto"
                                            variant="outlined"
                                            defaultValue={info?.name}
                                            className={classes.input}
                                            {...register("name", { required: true })}
                                        />
                                        {errors.name?.type === 'required' && <p className="error__message"><i class="fas fa-exclamation-triangle"></i> El nombre es requerido</p>}
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Cantidad de unidades"
                                            variant="outlined"
                                            defaultValue={info?.stock}
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
                                        {errors.stock && <p className="error__message"><i className="fas fa-exclamation-triangle"></i> {errors.stock.message}</p>}
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Marca del producto"
                                            variant="outlined"
                                            className={classes.input}
                                            defaultValue={info.brand}
                                            {...register("brand", { required: true })}
                                        />
                                        {errors.brand?.type === 'required' && <p className="error__message"><i className="fas fa-exclamation-triangle"></i> La marca es requerida</p>}
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Capacidad"
                                            variant="outlined"
                                            className={classes.input}
                                            type="number"
                                            defaultValue={info?.capacity}
                                            {...register('capacity', {
                                                required: {
                                                    value: true,
                                                    message: "Este campo es requerido"
                                                },
                                                min: {
                                                    value: 9000,
                                                    message: 'Ingrese un valor mayor a 9000'
                                                },
                                                max: {
                                                    value: 240000,
                                                    message: "Ingrese un valor menor a 240000"
                                                }
                                            })}
                                        />
                                        {errors.capacity && <p className="error__message"><i className="fas fa-exclamation-triangle"></i> {errors.capacity.message}</p>}
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <FormControl fullWidth variant="outlined">
                                            <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
                                            <Select
                                                value="Frio"
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                defaultValue={info.type}
                                                {...register("type", { required: true })}
                                            >
                                                <MenuItem value="Frio">Frio</MenuItem>
                                                <MenuItem value="Calor / Frio">Calor / Frio</MenuItem>
                                                <MenuItem value="Ecológico">Ecológico</MenuItem>
                                                <MenuItem value="Gas R22">Gas R22</MenuItem>
                                            </Select>
                                        </FormControl>
                                        {errors.type?.type === 'required' && <p className="error__message"><i className="fas fa-exclamation-triangle"></i> El tipo es requerido</p>}
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Modelo"
                                            variant="outlined"
                                            className={classes.input}
                                            defaultValue={info.model}
                                            {...register("model", { required: true })}
                                        />
                                        {errors.model?.type === 'required' && <p className="error__message"><i className="fas fa-exclamation-triangle"></i> El modelo es requerido</p>}
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Consumo de energia (en %)"
                                            variant="outlined"
                                            className={classes.input}
                                            type="number"
                                            defaultValue={info.energyConsume}
                                            {...register('energyConsume', {
                                                required: {
                                                    value: true,
                                                    message: "Este campo es requerido"
                                                },
                                                min: {
                                                    value: 0,
                                                    message: 'Ingrese un valor válido'
                                                },
                                                max: {
                                                    value: 100,
                                                    message: 'Valor invalido'
                                                }
                                            })}
                                        />
                                        {errors.energyConsume && <p className="error__message"><i className="fas fa-exclamation-triangle"></i> {errors.energyConsume.message}</p>}
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Precio del producto"
                                            variant="outlined"
                                            className={classes.input}
                                            type="number"
                                            defaultValue={info.price}
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
                                        {errors.price && <p className="error__message"><i className="fas fa-exclamation-triangle"></i> {errors.price.message}</p>}
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextareaAutosize
                                            className={classes.stylearea}
                                            placeholder="Descripcion del producto"
                                            {...register("description", { required: true })}
                                            defaultValue={info.description}
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
                                                    value: false,
                                                    message: 'Ingrese imagenes del producto'
                                                }
                                            })}
                                        />
                                        {errors.image && <p className="error__message"><i className="fas fa-exclamation-triangle"></i> {errors.image.message}</p>}
                                    </Grid>

                                </Grid>
                                <button className="sendButton">Publicar Producto</button>
                            </form>
                        }

                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
export default EditProduct