import { Avatar } from '@material-ui/core';

import './card.scss'

const CardPost = ({ title, name, date, content, comments, userImage }) => {

    const myDate = () => {
        var fecha = new Date();
        var day = date;
        return fecha.toLocaleDateString("es-ES", day)
    }
    return (
        <div className="card__post">
            <div className="card__postHeader">
                <Avatar
                    className="card__postAvatar"
                    src={userImage}
                />
                <div className="card__postHeaderExtra">
                    <h4>{name}</h4>
                    <p>Fecha de publicación <span>{myDate()}</span></p>
                </div>
            </div>
            <div className="card__postBody">
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
            <div className="card__postCommets">
                <p>Comentarios: <span>{comments}</span></p>
            </div>
        </div>
    )
}
export default CardPost