import { Avatar, Grid, TextField, TextareaAutosize } from '@material-ui/core';
import ModalUpdate from '../../modal/update'
import { useForm } from 'react-hook-form'
import { useRef } from 'react';
import { editPost, removePost } from '../../../services/posts';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/userSlice';

import './card.scss'

const CardPost = ({ title, name, date, content, comments, userImage, deletePost, id, loadNewData }) => {

    const childRef = useRef();

    const user = useSelector(selectUser)

    const { register, formState: { errors }, handleSubmit } = useForm();

    const cutText = () => {
        const newString = content.substring(0, 170) + ' ......'
        return newString
    }

    const myDate = () => {
        var fecha = new Date();
        var day = date;
        return fecha.toLocaleDateString("es-ES", day)
    }

    const deleteMyPost = async () => {
        const response = await removePost(id)
        console.log(response)
        loadNewData()
    }

    const onSubmit = async (data) => {
        const updateInformation = {
            userId: user.id,
            title: data.title,
            content: data.content,
        }
        const response = await editPost(id, updateInformation)
        console.log(response, ' este es')
        childRef.current.handleClose();
        loadNewData()
    }

    const editPostNew = () => {
        childRef.current.handleOpen();
    }

    return (
        <div className="card__post">
            {deletePost &&
                <div className="card__postDelete">
                    <i className="far fa-trash-alt" onClick={deleteMyPost}></i>
                    <i className="far fa-edit card__edit" onClick={editPostNew}></i>
                </div>
            }
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
                <p>{cutText()}</p>
            </div>
            <div className="card__postCommets">
                <p>Comentarios: <span>{comments}</span></p>
            </div>
            <ModalUpdate
                ref={childRef}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Actualizar Publicación</h1>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={3}
                    >
                        <Grid item xs={12}>
                            <TextField
                                label="Titulo"
                                variant="outlined"
                                fullWidth
                                defaultValue={title}
                                {...register("title", { required: true })}
                            />
                            {errors.name?.type === 'required' && <p className="error__message"><i class="fas fa-exclamation-triangle"></i> El nombre es requerido</p>}
                        </Grid>
                        <Grid item xs={12}>
                            <TextareaAutosize
                                className='areaLabel__company'
                                placeholder='Actualiza tu publicación'
                                defaultValue={content}
                                {...register('content', {
                                    required: {
                                        value: true,
                                        message: "El campo es obligatorio"
                                    }
                                })}
                            />
                            {errors.content && <p className="error__message"><i class="fas fa-exclamation-triangle"></i> {errors.content.message}</p>}
                        </Grid>
                        <button className='card__postButton'>Cambiar información</button>
                    </Grid>
                </form>
            </ModalUpdate>
        </div>
    )
}
export default CardPost