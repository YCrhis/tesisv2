import React from 'react'
import CompanyInformation from '../components/Companies/information/CompanyInformation'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import ProductCard from '../components/Product/productCard/ProductCard'
import './styles/informationCompany.scss'

import { showCompany } from '../services/companies'
import { filterProducts } from '../services/products'
import { useState } from 'react'

import NoResults from '../components/Errors/NoResults'

function CompyInfo(props) {

    const companyId = props.match.params.id;

    const id = parseInt(companyId)

    const [data, setData] = useState();
    const [product, setProduct] = useState();

    const loadData = async () => {
        const response = await showCompany(id)
        const responseProduct = await filterProducts({ enterpriseId: response.data.id })
        setData(response.data)
        setProduct(responseProduct.data.products);
    }

    useState(() => {
        loadData()
    }, [])

    return (
        <div>
            <Header />
            <CompanyInformation
                data={data}
            />
            <div className='container__informationCompanyNew'>
                <h1>Productos de {data?.name}</h1>
                <div className="container__products">
                    {product?.length === 0 ? <NoResults /> :

                        product?.map(i => (
                            <div key={i.id}>
                                <ProductCard
                                    name={i.name}
                                    price={i.price}
                                    img={i.images}
                                    id={i.id}
                                />
                            </div>
                        ))}

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CompyInfo
