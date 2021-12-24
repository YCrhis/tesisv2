import React from 'react'
/* styles */
import './search.scss'

const Search = (props) => {
    const updateSearch = e => {
        props.setInputText(e.target.value)
        console.log(e.target.value)
    }

    return (
        <>
            <form className="search__form wow animate__animated animate__jackInTheBox animate__slow">
                <div className="search__box">
                    <input type="text" className="search__bar" placeholder="Buscar..." onChange={updateSearch} />
                    <button type="submit" className="searh__button" onClick={props.getSearch} type="submit"><i class="fas fa-search"></i></button>
                </div>
            </form>
        </>
    )
}
export default Search;