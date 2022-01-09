import { Avatar } from "@material-ui/core"
import './comments.scss'


import { AnimatePresence, motion } from 'framer-motion'

const Comments = ({ comment, createdAt, name, image }) => {

    const myDate = () => {
        var fecha = new Date();
        var day = createdAt;
        return fecha.toLocaleDateString("es-ES", day)
    }

    return (
        <AnimatePresence>
            <motion.div
                className="container__Comments"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className="user__informationComments">
                    <Avatar
                        src={image}
                    />
                    <div className="user__informationCommentsAll">
                        <h4 className="user__informationComments__title">{name}</h4>
                        <p className="user__informationCommentsDate">Publicado en: {myDate()}</p>
                    </div>
                </div>
                <p className="comments">{comment}</p>
            </motion.div>
        </AnimatePresence>
    )
}
export default Comments