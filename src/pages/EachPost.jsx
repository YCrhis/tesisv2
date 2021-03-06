import { useEffect, useState } from "react";
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import { searchPost, sendComment, loadComments } from "../services/posts"
import TextField from '@material-ui/core/TextField';
import { useSelector } from "react-redux";
import Comments from '../components/Post/card/comments'
import { selectUser } from "../features/userSlice";
import Loader from "../components/loader/Loader";

import NoResults from '../components/Errors/NoResults'

import './styles/eachpost.scss'

const EachPost = (props) => {

    const user = useSelector(selectUser);
    const myUser = user.id

    const [post, setPost] = useState([])
    const [comments, setCommets] = useState([])
    const [loadingPost, setLoadingPost] = useState(true)

    const companyId = props.match.params.id;
    const id = parseInt(companyId)

    const loadPost = async () => {
        const response = await searchPost(0, { id: id })
        const eachComments = {
            postId: id
        }
        const commentsResponse = await loadComments(eachComments)
        setPost(response.data.posts[0])
        setCommets(commentsResponse.data)
        setLoadingPost(null)
    }

    const [content, setContent] = useState('')

    const postCreatedAt = () => {
        var fecha = new Date();
        var day = post?.createdAt;
        return fecha.toLocaleDateString("es-ES", day)
    }

    const handleText = (e) => {
        setContent(e.target.value)
    }

    const handleSubmitComment = async () => {
        const comment = {
            userId: myUser,
            postId: id,
            content: content
        }
        await sendComment(comment)
        loadPost()
    }

    useEffect(() => {
        loadPost()
        /* eslint-disable */
    }, [])

    if (loadingPost) {
        return (
            <Loader />
        )
    }

    return (
        <>
            <Header />
            <div className="container__myPost">
                <div className="left__postSite">
                    <div className="content">
                        <div className="myPost__userInformation">
                            <img src={post?.userImage} alt={post?.userName} className="myPost__imageCompany" />
                            <div>
                                <h4>{post?.userName}</h4>
                                <p><span> Publicado en: {postCreatedAt()}</span></p>
                            </div>
                        </div>
                        <div className="myPost__questionPost">
                            <h3>{post?.title}</h3>
                            <p className="myPost__subtitle">Contenido del post: </p>
                            <p>{post?.content}</p>
                        </div>
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
                    <h4>Comentarios {post?.comments}</h4>
                    {
                        comments.length === 0 ? <NoResults /> :
                            comments?.map((i) => (
                                <div key={i.id} className="each__comment">
                                    <Comments
                                        key={i.id}
                                        comment={i.comment}
                                        createdAt={i.createdAt}
                                        name={i.name}
                                        image={i.image}
                                    />
                                </div>
                            ))
                    }
                </div>
            </div>

            <Footer />
        </>
    )
}
export default EachPost