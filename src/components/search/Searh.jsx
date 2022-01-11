import React from 'react'
/* styles */
import './search.scss'

const Search = ({ setSearchName, setPage }) => {

    const handleChange = e => {
        setSearchName(e.target.value)
        setPage(0)
    }

    return (
        <>
            <form className="search__form wow animate__animated animate__jackInTheBox animate__slow">
                <div className="search__box">
                    <input type="text" className="search__bar" placeholder="Buscar..." onChange={handleChange} />
                    <button type="submit" className="searh__button" type="submit"><i className="fas fa-search"></i></button>
                </div>
            </form>
        </>
    )
}
export default Search;