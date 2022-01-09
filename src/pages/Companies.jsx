import React, { useState, useEffect } from 'react'
/* styles */
import './styles/business.scss'
/* componets */
import Header from '../components/header/Header'
import CardCompanies from '../components/Companies/card-companies/cardCompanies'
import Loader from '../components/loader/Loader'
import Search from '../components/search/Searh'
import Footer from '../components/footer/Footer'
import NoResults from '../components/Errors/NoResults'

import { listCompaniesPagination } from '../services/companies'
import PaginationPage from '../components/pagination/Pagination'


const Companies = () => {

    const [data, setData] = useState([])
    const [load, setLoad] = useState(true)
    const [page, setPage] = useState(0)
    const [pageNumber, setPageNumber] = useState()
    const [searchName, setSearchName] = useState('')

    useEffect(() => {
        getCompanies();
    }, [page, searchName]);

    const getCompanies = async () => {
        const response = await listCompaniesPagination({ state: 1, name: searchName }, page)
        setData(response.data.enterprises)
        console.log(response.data.enterprises)
        setPageNumber(response.data.pages)
        setLoad(null)
    }

    const handleSearch = (e) => {
        e.preventDefault();
    }

    if (load) {
        return <Loader />
    }
    return (
        <>
            <Header />
            <div class="container-workers">
                <Search
                    handleSearch={handleSearch}
                    setSearchName={setSearchName}
                    setPage={setPage}
                />
                <div class="each-worker">
                    {data.length == 0 ? (
                        <NoResults />
                    ) : (
                        data.map((infos) => (
                            <CardCompanies
                                key={infos.id}
                                name={infos.name}
                                description={infos.description}
                                workers={infos.workers}
                                img={infos.imageUrl}
                                id={infos.userId}
                            />
                        ))
                    )}
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
    )
}
export default Companies;