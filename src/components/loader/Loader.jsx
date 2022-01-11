import React from 'react'
import { motion } from 'framer-motion'
/* style */
import './loader.scss'

const Loader = () => {
    return (
        <motion.div
            className="loader__all"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="loader__container">
                <h2>Estamos trabajando en ello</h2>
                <img src="https://cdn.dribbble.com/users/205347/screenshots/2440490/photograph-_-film-icon-v1.0.gif" alt="" />
                <p>Cargando Información</p>
            </div>
        </motion.div>
    )
}
export default Loader