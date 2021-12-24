import { useEffect, useState } from "react";
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import { lookPost, sendComment } from "../services/posts"
import TextField from '@material-ui/core/TextField';

import './styles/eachpost.scss'

const EachPost = (props) => {

    const userId = window.localStorage.getItem('id')

    const loadData = async () => {
        const response = await lookPost(postId);
        setData(response.data)
        console.log(data)
    }

    const postId = props.match.params.id;
    const [data, setData] = useState()

    const [content, setContent] = useState('')

    console.log(postId)

    const handleSubmitComment = async () => {
        const response = await sendComment({
            comment: {
                content, userId
            }, postId
        });
        console.log(response)
        window.location.reload()
    }

    const handleText = (e) => {
        setContent(e.target.value)
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <>
            <Header />
            {
                data &&
                <div className="container__myPost">
                    <div className="left__postSite">
                        <div className="content">
                            <h3>{data.title}</h3>
                            <p className="myPost__subtitle">Contenido del post: </p>
                            <p>{data.content}</p>
                        </div>
                        <div className="form__comments">
                            <TextField
                                id="outlined-basic"
                                label="Agregar Comentario"
                                variant="outlined"
                                fullWidth
                                value={content}
                                onChange={handleText}
                            />
                            <button className="button" onClick={handleSubmitComment}>Subir Comentario</button>
                        </div>
                    </div>
                    <div className="right__comments">
                        <h4>Comentarios</h4>
                        {data &&
                            data.comments.map((i) => (
                                <div className="each__comment">
                                    <p>{i.content}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

            }


            <Footer />
        </>
    )
}
export default EachPost