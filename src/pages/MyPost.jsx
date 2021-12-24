import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import { Container, Grid } from "@material-ui/core"
import community2 from '../images/community2.svg'
import { myList } from '../services/posts'
import { useEffect, useState } from "react"
import CardPost from "../components/Post/card"

const MyPost = () => {

    const id = window.localStorage.getItem('id')

    const [data, setData] = useState()

    const loadData = async () => {
        const response = await myList(id)
        if (response.ok) {
            setData(response.data)
        }
        if (!response.ok) {
            return (
                <p>Data not found</p>
            )
        }
        console.log(response)
    }

    useEffect(() => {
        loadData();
    }, [])

    return (
        <>
            <Header />
            <Container maxWitdh="lg" className="post__containerAll">
                <h1>Mis Posts</h1>
                <img src={community2} alt="" />
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={5}
                    className="post__eachContainer"
                >
                    {data &&
                        data.map((post) => (
                            <Grid item lg={5} xs={12}>
                                <CardPost
                                    key={post._id}
                                    id={post._id}
                                    title={post.title}
                                    description={post.content}
                                    important={post._id}
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