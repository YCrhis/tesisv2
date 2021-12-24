import React, { useEffect, useState } from 'react'
/* components */
import Header from '../components/header/Header'
import Loader from '../components/loader/Loader'
import Footer from '../components/footer/Footer'
import ProductCard from '../components/Product/productCard/ProductCard'

/* filter */
import Selected from '../components/Product/filters/Selected'
/* error component */
import NoResults from '../components/Errors/NoResults'
/* styles */
import './styles/product.scss'
/* api */
import { list } from '../services/products'





const Product = () => {



    const [load, setLoad] = useState(true);

    const [filter, setFilter] = useState('')

    const [info, setInfo] = useState()

    const [text, setText] = useState('')


    const getProducts = async () => {
        const response = await list();

        setInfo(response.data)
        setLoad(false)
    }

    /* const loadData = async () => {
        const response = await list(info)
        console.log(response)
    } */

    useEffect(() => {
        getProducts();
    }, []);



    const filterProducts = (e) => {
        setFilter(e.target.value)
        console.log(e.target.value)
    }

    const getSearch = async (e) => {
        e.preventDefault();
        const response = await fetch('https://termoconfort-test1.herokuapp.com/api/v1/product/filter-post?limit=100&page=0', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'Application/json',
            },
            body: JSON.stringify({ name: text })
        })

        const data = await response.json();
        setInfo(data.data)
    }




    if (load) {
        return <Loader />
    }


    return (
        <>
            {/* Header */}

            <Header />

            {/* Items - Product */}
            <div className="container__items">
                {/* <Search
                    setInputText={setInputText}
                    getSearch={getSearch}
                /> */}
                <form onSubmit={getSearch} className="search__form">
                    <div className="search__box">
                        <input type="text" className="search__bar" value={text} onChange={(e) => setText(e.target.value)} placeholder="Buscar..." />
                        <button type="submit" className="searh__button"><i class="fas fa-search"></i></button>
                    </div>
                </form>

                <div className="product-and-filter">
                    {/* Filter */}
                    <div className="filters">
                        <div className="each-filter">
                            <h2>FILTROS</h2>
                            <Selected
                                setInfo={setInfo}
                            /* filterProducts={filterProducts} */
                            /*  newvalue={query} */
                            />
                        </div>
                    </div>
                    {/* products list*/}
                    <div className="container__products">
                        {info === [] ?
                            info.map(infos => (
                                <ProductCard
                                    key={infos._id}
                                    name={infos.name}
                                    description={infos.description}
                                    img={infos.images}
                                    id={infos._id}
                                    price={infos.price}
                                />
                            ))
                            : <NoResults />
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Product