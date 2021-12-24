import { Card, CardActionArea, CardContent, CardMedia, Typography, CardActions } from '@material-ui/core/';
import './card.scss'
import { removePost } from '../../../services/posts';

const CardPost = ({ title, description, important, id, myId }) => {


    const handleDelete = async () => {
        var option = window.confirm("Clicka en Aceptar o Cancelar");
        if (option == true) {
            const response = await removePost(id);
            console.log(response)
            window.location.reload()
        }

        console.log(option)
    }

    return (

        <>
            <a /* href={`/posts/${myId}`} */ className="link__post">
                <Card >
                    <CardActionArea>
                        <CardMedia
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {description}
                            </Typography>
                        </CardContent>
                        {important &&
                            <CardActions>
                                <button className='my__post' onClick={handleDelete}>Eliminar Publicación</button>
                            </CardActions>
                        }
                    </CardActionArea>
                </Card>
            </a>
        </>
    )
}
export default CardPost