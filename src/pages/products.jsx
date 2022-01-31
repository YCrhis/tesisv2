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
import { listProducts } from '../services/products'
import Search from '../components/search/Searh'
import PaginationPage from '../components/pagination/Pagination'

const Product = () => {

    const [load, setLoad] = useState(true);
    const [info, setInfo] = useState()
    const [page, setPage] = useState(0)
    const [pageNumber, setPageNumber] = useState()
    const [searchName, setSearchName] = useState('')


    const getProducts = async () => {
        const response = await listProducts(page, {
            name: searchName,
        });
        setInfo(response.data.products)
        setPageNumber(response.data.pages)
        setLoad(false)
        console.log(response.data.products)
    }


    useEffect(() => {
        getProducts();
        /* eslint-disable */
    }, [page, searchName]);


    const handleSearch = (e) => {
        e.preventDefault();
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
                <Search
                    handleSearch={handleSearch}
                    setSearchName={setSearchName}
                    setPage={setPage}
                />

                <div className="product-and-filter">
                    {/* Filter */}
                    <div className="filters">
                        <div className="each-filter">
                            <h2>FILTROS</h2>
                            <Selected
                                setInfo={setInfo}
                            />
                        </div>
                    </div>
                    {/* products list*/}
                    <div className="container__products">
                        {info?.length === 0 ?
                            <NoResults />
                            :
                            info?.map(infos => (
                                <ProductCard
                                    key={infos.id}
                                    created={infos.createdAt}
                                    name={infos.name}
                                    description={infos.description}
                                    img={infos.images}
                                    id={infos.id}
                                    price={infos.price}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="container__pagination">
                    <PaginationPage
                        pageNumber={pageNumber}
                        setPage={setPage}
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Product