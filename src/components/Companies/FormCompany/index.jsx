import { useState } from 'react'
import { Container, TextField, Grid, TextareaAutosize } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { creatingCompany } from '../../../services/companies';
import Alert from '@material-ui/lab/Alert';


const useStyles = makeStyles((theme) => ({
    containerForm: {
        margin: '8rem auto 10px !important',
    },
    title: {
        marginBottom: "2rem"
    },
    stylearea: {
        width: '100%',
        padding: '15px',
        height: 'calc(10vh + 5rem) !important',
        border: 'solid 1px #c5c5c5'
    },
}));


const FormCompany = () => {

    const classes = useStyles();
    const userId = localStorage.getItem('id')

    const [message, setMessage] = useState(false)
    const [message2, setMessage2] = useState(false)

    const enterpriseId = window.localStorage.getItem('idEnterprice')

    const [data, setData] = useState([])
    const [error, setError] = useState()

    const [fields, setFields] = useState({
        userId: userId,
        name: '',
        description: '',
        workers: '',
        linkedin: '',
        facebook: '',
        twitter: '',
        instagram: '',
        youtube: '',
        webPage: '',
    })

    //const [social, setSocial] = useState([])

    const handleInputChange = (e) => {

        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;

        setFields({
            ...fields,
            [name]: value,
        })
    }

    const handleInputChanges = (e) => {
        setData(e.target.files)
    }

    const handleSubmit = async (e) => {

        e.preventDefault()

        /* setError([]) */

        const formData = new FormData();
        formData.append('image', data[0]);
        formData.append('userId', userId);
        formData.append('name', fields.name);
        formData.append('description', fields.description);
        formData.append('workers', fields.workers);
        formData.append('linkedin', fields.linkedin);
        formData.append('facebook', fields.facebook);
        formData.append('twitter', fields.twitter);
        formData.append('instagram', fields.instagram);
        formData.append('youtube', fields.youtube);
        formData.append('webPage', fields.webPage);

        if (data.length == 0) {
            alert('Ingrese una imagen')
        } else {
            const response = await fetch('https://termoconfort-test1.herokuapp.com/api/v1/enterprise/store', {
                method: 'post',
                body: formData
            });

            const newData = await response.json()

            if (newData.ok === true) {
                window.localStorage.setItem('idEnterprice', newData.data._id)
                setMessage(true)
            }

            if (newData.ok === false) {
                window.localStorage.setItem('idEnterprice', newData.data._id)
                setMessage2(true)
            }

            window.localStorage.setItem('hasEnterprise', true)
        }

        /* for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + typeof pair[1] + ' , ', pair[1]);

            if (pair[1] == "") {
                setError(error => {
                    return [{ ...error, [error]: pair[0] }]
                })
                alert('falta datos ' + pair[0] + ' - ' + pair[1])
            }
        } */

    }

    return (
        <Container maxWidth="lg" className={classes.containerForm}>
            {
                message &&
                <Alert severity="success" color="info" onClose={() => setMessage(null)} className="success">
                    Tu empresa se creó exitosamente | <a href={`/business/go/${enterpriseId}`}>Ver mi empresa</a>
                </Alert>
            }
            {
                message2 &&
                <Alert severity="success" color="warning" onClose={() => setMessage2(null)} className="success">
                    Error al crear la empresa, vuelve a intentarlo
                </Alert>
            }
            <form action="POST" onSubmit={handleSubmit}>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={5}
                >
                    <Grid item xs={12}>
                        <h3 className={classes.title}>Ingrese Información de su empresa</h3>
                        <TextField
                            label="Nombre de la empresa"
                            variant="outlined"
                            fullWidth
                            value={fields.name}
                            name="name"
                            onChange={handleInputChange}
                            required
                        />
                    </Grid>
                    <h3 className={classes.title}>Redes sociales</h3>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={3}
                    >
                        <Grid item sm={6} xs={12}>
                            <TextField
                                label="Link de facebook"
                                variant="outlined"
                                fullWidth
                                name="facebook"
                                value={fields.facebook}
                                onChange={handleInputChange}
                                required
                            />
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <TextField
                                label="Link de youtube"
                                variant="outlined"
                                fullWidth
                                name="youtube"
                                value={fields.youtube}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <TextField
                                label="Link de linkedin"
                                variant="outlined"
                                fullWidth
                                name="linkedin"
                                value={fields.linkedin}
                                onChange={handleInputChange}
                                required
                            />
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <TextField
                                label="Link de Instagram"
                                variant="outlined"
                                fullWidth
                                onChange={handleInputChange}
                                name="instagram"
                                value={fields.instagram}
                                required
                            />
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <TextField
                                label="Cantidad de trabajadores"
                                type="number"
                                variant="outlined"
                                fullWidth
                                name="workers"
                                value={fields.workers}
                                onChange={handleInputChange}
                                required
                            />
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <TextField
                                label="Link de la empresa (su pagina web)"
                                variant="outlined"
                                fullWidth
                                name="webPage"
                                value={fields.webPage}
                                onChange={handleInputChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextareaAutosize
                                className={classes.stylearea}
                                aria-label="maximum height"
                                placeholder="Descripcion del producto"
                                defaultValue="Descripcion de la empresa"
                                name="description"
                                value={fields.description}
                                name="description"
                                onChange={handleInputChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h3 className={classes.title}>Seleccione imagen de la empresa</h3>
                            <input
                                type="file"
                                name="image"
                                onChange={handleInputChanges}
                            />
                        </Grid>
                        <button className="sendButton" type="submit">Crear mi empresa</button>
                    </Grid>
                </Grid>
            </form>

        </Container>
    )
}
export default FormCompany