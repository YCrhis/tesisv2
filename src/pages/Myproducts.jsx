import React, { useEffect, useState } from 'react'
/* components */
import Header from '../components/header/Header'
import Loader from '../components/loader/Loader'
import Footer from '../components/footer/Footer'
import ProductCard from '../components/Product/productCard/ProductCard'

/* error component */
import NoResults from '../components/Errors/NoResults'
/* styles */
import './styles/product.scss'
/* api */
import { listProducts } from '../services/products'
import Search from '../components/search/Searh'
import PaginationPage from '../components/pagination/Pagination'
import { useSelector } from 'react-redux'
import { selectCompany } from '../features/userSlice'

const Myproduct = () => {

    const [load, setLoad] = useState(true);
    const [info, setInfo] = useState()
    const [page, setPage] = useState(0)
    const [pageNumber, setPageNumber] = useState()
    const [searchName, setSearchName] = useState('')

    const company = useSelector(selectCompany)
    console.table(company)

    const getProducts = async () => {
        const response = await listProducts(page, { name: searchName, enterpriseId: company.id });
        setInfo(response.data.products)
        setPageNumber(response.data.pages)
        setLoad(false)
    }


    useEffect(() => {
        getProducts();
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
            <div className="container__items container__items__another">

                <h2 className='product__titleMyProducts'>Tus Productos</h2>
                <Search
                    handleSearch={handleSearch}
                    setSearchName={setSearchName}
                    setPage={setPage}
                />
                <div className="product-and-filter">

                    {/* products list*/}
                    <div className="container__products">
                        {info?.length == 0 ?
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

export default Myproduct