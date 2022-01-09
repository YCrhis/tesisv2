import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import { Container, Grid } from "@material-ui/core"
import community2 from '../images/community2.svg'
import { searchPost, removePost } from '../services/posts'
import { useEffect, useState } from "react"
import CardPost from "../components/Post/card"

import { useSelector } from "react-redux"
import { selectUser } from "../features/userSlice"

const MyPost = () => {

    const user = useSelector(selectUser);
    const [info, setInfo] = useState([])

    const loadData = async () => {
        const response = await searchPost({ userId: user.id });
        setInfo(response.data);
    }

    useEffect(() => {
        loadData()
    }, [info])

    return (
        <>
            <Header />
            <Container maxWitdh="lg" className="post__containerAll">
                <h1>Mis publicaciones</h1>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={5}
                    className="post__eachContainer"
                >
                    {info?.length === 0 ?
                        <img src={community2} alt="" width={500} />
                        :
                        info?.map((i) => (
                            <Grid item lg={5} xs={12}>
                                <CardPost
                                    key={i.id}
                                    id={i.id}
                                    title={i.title}
                                    name={i.userName}
                                    date={i.createdAt}
                                    comments={i.comments}
                                    content={i.content}
                                    userImage={i.userImage}
                                    deletePost={true}
                                />
                            </Grid>
                        ))

                    }
                </Grid>
            </Container>
            <Footer />
        </>
    )
}
export default MyPost