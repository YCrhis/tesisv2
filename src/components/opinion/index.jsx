import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    avatar: {
        alignItems: 'center !important',
        textAlign: 'center',
        margin: 'auto !important',
        display: 'flex',
        justifyContent: 'center'
    },
    avatar__icon: {
        width: '60px',
        height: '60px',
        marginBottom: '1.5rem'
    },
    date: {
        fontSize: '13px'
    }
});

const Opinion = ({ name, description, img }) => {
    const classes = useStyles();
    return (
        <>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <div className={classes.avatar}>
                        <Avatar alt="Remy Sharp" src={img} className={classes.avatar__icon} />
                    </div>
                    <Typography className={classes.pos} color="textSecondary">
                        {name}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions className={classes.date}>
                    12/12/12
                </CardActions>
            </Card>

        </>
    )
}
export default Opinion